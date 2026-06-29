// ============================================================================
// Workflow: insta-henrique-ebook-reply
// Nó: "Detectar falha no envio"  (n8n-nodes-base.code, typeVersion 2)
// Vem DEPOIS de "Reply publicly to comment". Liga em "Brevo: alerta e-mail".
//
// Os nós de envio usam neverError=true + fullResponse=true, então mesmo em erro
// eles seguem o fluxo e trazem { statusCode, body }. Aqui inspecionamos os dois
// (DM e resposta pública); se algum falhou, montamos o payload do e-mail Brevo.
//
// Throttle de 30min: se o token for revogado, TODO comentário falharia — sem o
// throttle isso viraria flood de e-mails. Guardamos o último alerta em staticData.
// ============================================================================

const sd = $getWorkflowStaticData('global');
const now = Date.now();
const THROTTLE_MS = 30 * 60 * 1000;

function res(name) { try { return $(name).first().json; } catch (e) { return null; } }
function failOf(r) {
  if (!r) return null;
  const sc = r.statusCode;
  const err = r.body && r.body.error;
  if ((typeof sc === 'number' && sc >= 400) || err) {
    return { statusCode: sc, error: err || r.body || r };
  }
  return null;
}

const dm = failOf(res('Send DM (button)'));
const rep = failOf(res('Reply publicly to comment'));
if (!dm && !rep) return []; // tudo certo -> nenhum e-mail

// throttle p/ não floodar
if (sd.lastSendAlert && (now - sd.lastSendAlert) < THROTTLE_MS) {
  console.log('[alert] throttled (último alerta há <30min)');
  return [];
}
sd.lastSendAlert = now;

const cfg = res('Config + Extract') || {};
const when = new Date().toISOString();
const parts = [];
if (dm) parts.push('DM (Send DM): ' + JSON.stringify(dm).slice(0, 600));
if (rep) parts.push('Resposta pública (replies): ' + JSON.stringify(rep).slice(0, 600));

const html =
  '<h3>🚨 Falha no envio — automação IG @hdgpimentel</h3>' +
  '<p>A automação recebeu um comentário válido mas <b>não conseguiu enviar</b> a DM/resposta.</p>' +
  '<ul>' +
  '<li><b>Comentário:</b> "' + (cfg.comment_text || '?') + '" — @' + (cfg.commenter_username || '?') + '</li>' +
  '<li><b>Gatilho:</b> ' + (cfg.matched_keyword || '?') + '</li>' +
  '<li><b>Quando (UTC):</b> ' + when + '</li>' +
  '</ul>' +
  '<p><b>Erro(s):</b></p><pre>' + parts.join('\n\n') + '</pre>' +
  '<p>Provável causa: <b>Page access token revogado/expirado</b> ou permissão do app ' +
  '(instagram_manage_messages / instagram_manage_comments). Gere um novo Page token ' +
  'da página "Henrique Pimentel" e atualize o nó <code>Config + Extract</code>.</p>' +
  '<p>Lead pra recuperar manualmente: <b>@' + (cfg.commenter_username || '?') + '</b></p>';

return [{
  json: {
    brevoBody: {
      sender: { name: 'Automação IG @hdgpimentel', email: 'noreply@henriquepimentel.com.br' },
      to: [{ email: 'hdgpimentel@gmail.com', name: 'Henrique' }],
      subject: '🚨 Falha no envio — automação IG @hdgpimentel',
      htmlContent: html,
    },
  },
}];
