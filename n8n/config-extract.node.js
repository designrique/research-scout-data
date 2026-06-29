// ============================================================================
// Workflow: insta-henrique-ebook-reply  (n8n da VPS — webhook.mapc.com.br)
// Nó: "Config + Extract"  (n8n-nodes-base.code, typeVersion 2)
// Perfil: @hdgpimentel
//
// O QUE MUDOU NESTA VERSÃO
//  1. NOVO gatilho "ia"  ->  Landing de VENDA de GEO médico (MedCitado):
//        https://henriquepimentel.com.br/medcitado/
//  2. Matcher passou a casar PALAVRA INTEIRA (word-boundary) em vez de
//     substring. Sem isso, "ia" dispararia dentro de cardiologia, pediatria,
//     fisioterapia, "queria", "dia" etc. Agora só dispara em "IA" isolado.
//     (Também deixa ebook/geo/presenca mais precisos.)
//
// ⚠️ TOKEN: mantenha o valor de IG_API_TOKEN que JÁ está no nó atual.
//    O placeholder abaixo está redigido de propósito para não versionar segredo.
// ============================================================================

const IG_API_TOKEN = 'COLE_AQUI_O_SEU_TOKEN_ATUAL'; // <-- não apague o token que já está nesse nó
const IG_USER_ID = '28045678691686657';

const KEYWORDS = {
  ebook: {
    url: 'https://henriquepimentel.com.br/ebook/geo-medicos',
    body: '7 ajustes técnicos pra você ser citado pelo ChatGPT, Gemini, Perplexity, Claude, Copilot, You.com e Brave Search. Sem refazer o site.',
    btn: 'Baixar e-book grátis',
    intros: [
      'Olá! 🙏 Aqui está o seu e-book GEO pra Médicos.',
      'Oi! Obrigado por comentar. Te trouxe o e-book GEO pra Médicos.',
      'Olá! Como prometido, aqui está o e-book.',
      'Oi 👋 segue o e-book GEO pra Médicos.',
      'Olá! Te enviei o e-book GEO pra Médicos.',
    ],
  },
  presenca: {
    url: 'https://henriquepimentel.com.br/blog/como-automatizar-agendamento-clinica/',
    body: 'Como reduzir faltas e garantir a presença dos pacientes: confirmação automática 24h antes, reaproveitamento de horário cancelado e agendamento que funciona sozinho. Sem perder o toque humano.',
    btn: 'Ler o artigo',
    intros: [
      'Olá! 🙏 Aqui está o material sobre reduzir faltas na clínica.',
      'Oi! Como prometido, segue o guia pra garantir a presença dos pacientes.',
      'Olá! Te trouxe o artigo sobre automatizar o agendamento.',
      'Oi 👋 aqui está como diminuir as faltas no consultório.',
    ],
  },
  geo: {
    url: 'https://henriquepimentel.com.br/blog/aparecer-no-chatgpt-medico-cfm/',
    body: 'O passo a passo pra aparecer no ChatGPT, Gemini e Perplexity sendo médico — dentro das regras do CFM.',
    btn: 'Ler o guia',
    intros: [
      'Olá! 🙏 Aqui está o guia de como aparecer no ChatGPT sendo médico.',
      'Oi! Segue o material sobre ser citado pelas IAs (dentro do CFM).',
      'Olá! Te trouxe o passo a passo de GEO pra médicos.',
    ],
  },
  // NOVO — landing de VENDA de GEO médico (MedCitado).
  // Mantido por último: palavras de campanha mais específicas (ebook/geo/presenca)
  // têm prioridade; "ia" é o gatilho de intenção de compra.
  ia: {
    url: 'https://henriquepimentel.com.br/medcitado/',
    body: 'O MedCitado faz o ChatGPT, Gemini, Perplexity, Claude e Copilot citarem você quando o paciente pergunta — site dentro do CFM, entrega em 14 dias e garantia de 60 dias. Dá uma olhada:',
    btn: 'Conhecer o MedCitado',
    intros: [
      'Olá! 🙏 Aqui está tudo sobre o MedCitado (GEO pra médicos).',
      'Oi! Como prometido, segue a página do MedCitado.',
      'Olá! Te trouxe o MedCitado — pra você ser citado pelas IAs.',
      'Oi 👋 segue o link do MedCitado pra você.',
    ],
  },
};

const PUBLIC_REPLIES = [
  'Feito! Confere nos pedidos de mensagem ✉️',
  'Pronto, te mandei. Olha na aba "Pedidos" do direct',
  'Enviei aí. Verifica em pedidos de mensagem 📩',
  'Mandei o material no direct. Confere na pasta de pedidos',
  'Pronto 🙌 cai na aba de pedidos do direct quando a gente não se segue',
  'Te chamei no direct! Tá lá na pasta de pedidos',
  'Enviado. Dá uma olhada em pedidos de mensagem',
  'Feito, te respondi por DM. Vê em "pedidos" que costuma cair lá',
  'Mandado! Aceita o pedido de mensagem no direct',
  'Te enviei. Confere a aba de solicitações no direct',
];

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function delaySeconds() { return 10 + Math.floor(Math.random() * 16); }
function norm(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }

// --- Idempotência: rastreia comment_ids dos últimos 5min ---
const static_data = $getWorkflowStaticData('global');
static_data.seen = static_data.seen || {};
const now = Date.now();
const TTL_MS = 5 * 60 * 1000;
for (const id of Object.keys(static_data.seen)) {
  if (now - static_data.seen[id] > TTL_MS) delete static_data.seen[id];
}

const hook = $input.first().json;
const body = hook.body || hook;
const out = [];
if (body.object !== 'instagram') return out;
for (const entry of body.entry || []) {
  for (const change of entry.changes || []) {
    if (change.field !== 'comments') continue;
    const v = change.value || {};
    const text = (v.text || '').trim();
    if (!text) continue;
    if (!v.id) continue;

    // Detecta a 1ª palavra-gatilho como PALAVRA INTEIRA (acento/caixa-insensível).
    // word-boundary (\b) evita falso-positivo de "ia" dentro de cardiologia,
    // pediatria, fisioterapia, "queria", "dia" etc.
    const t = norm(text);
    let matchedKey = '';
    for (const key of Object.keys(KEYWORDS)) {
      const nk = norm(key).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const re = new RegExp(`\\b${nk}\\b`);
      if (re.test(t)) { matchedKey = key; break; }
    }
    if (!matchedKey) continue; // sem gatilho → ignora

    // Skip duplicate (já processado nos últimos 5min)
    if (static_data.seen[v.id]) {
      console.log(`[dedup] skip comment_id=${v.id}`);
      continue;
    }
    static_data.seen[v.id] = now;

    const kw = KEYWORDS[matchedKey];
    out.push({
      json: {
        ig_user_id: entry.id,
        comment_id: v.id,
        comment_text: text,
        commenter_id: v.from?.id,
        commenter_username: v.from?.username,
        media_id: v.media?.id,
        parent_id: v.parent_id || null,
        received_at: entry.time,
        IG_API_TOKEN,
        IG_USER_ID,
        matched_keyword: matchedKey,
        LINK_URL: kw.url,
        DM_BODY: kw.body,
        BTN_TITLE: kw.btn,
        DM_INTRO: pick(kw.intros),
        PUBLIC_REPLY: pick(PUBLIC_REPLIES),
        DELAY_SECONDS: delaySeconds(),
      },
    });
  }
}
return out;
