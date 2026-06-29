# Automação IG — resposta de comentário → landing de venda GEO médico (@hdgpimentel)

Automação que **responde comentários no Instagram** do perfil **@hdgpimentel** e
envia, por **DM (botão)** + **resposta pública**, o link da **landing de venda de
GEO médico (MedCitado)**.

- **Workflow n8n:** `insta-henrique-ebook-reply` (id `hYxhaS9KI2tOmNKS`)
- **Instância n8n:** VPS — base de webhook `https://webhook.mapc.com.br/`
- **Webhook do Meta (já configurado):** `/webhook/insta-henrique-ebook` (GET verify + POST eventos)

### Envio (importante — Instagram via Facebook Login)
- Host: **`graph.facebook.com`** (não `graph.instagram.com`).
- DM:    `POST /v22.0/549902958723736/messages` — **PAGE id** da página "Henrique Pimentel".
- Reply: `POST /v22.0/{comment_id}/replies`.
- Token: **Page access token** da página Henrique Pimentel (derivado do System User
  token "Digital Fisher" — não expira).
- ⚠️ Usar o **IG business id** (`17841400252960177`) em `/messages` dá
  `(#3) Application does not have the capability...`. Tem que ser o **PAGE id**.

> O workflow **já existia** e já era multi-palavra. Esta mudança apenas **estende**
> o nó **`Config + Extract`** (não cria workflow novo, não mexe no webhook do Meta).

## O que mudou

1. **Gatilhos de venda `IA` / `MEDCITADO` / `QUERO`** → landing de **venda**:
   `https://henriquepimentel.com.br/medcitado/` (MedCitado — ser citado por
   ChatGPT/Gemini/Perplexity/Claude/Copilot, dentro do CFM).
   Botão da DM: **"Quero minha análise grátis"**.
2. **Matcher por palavra inteira** (`\b…\b`) em vez de *substring*.
   Sem isso o gatilho curto `ia` dispararia dentro de **cardiolog**ia, **pediatr**ia,
   **fisioterap**ia, "quer**ia**", "d**ia**" etc. Agora só dispara em palavra isolada.

### Gatilhos ativos depois da mudança

| Comentário contém | Envia |
|---|---|
| `ebook` | E-book GEO grátis |
| `presenca` | Artigo: reduzir faltas / agendamento |
| `geo` | Guia (blog): aparecer no ChatGPT (CFM) |
| **`IA`**, **`MEDCITADO`**, **`QUERO`** | **Landing de VENDA — MedCitado** (botão "Quero minha análise grátis") |

Prioridade: `ebook` → `presenca` → `geo` → venda (`ia`/`medcitado`/`quero`). As
palavras de campanha vencem; os gatilhos de venda cobrem intenção de compra.

## Como publicar (a mudança NÃO foi aplicada automaticamente)

O acesso ao n8n nesta sessão é **somente leitura/execução** — sem ferramenta de
edição e sem SSH da VPS. Então a publicação é manual (1 minuto):

1. Abra o n8n da VPS → workflow **`insta-henrique-ebook-reply`**.
2. Abra o nó **`Config + Extract`**.
3. Substitua todo o código pelo conteúdo de [`config-extract.node.js`](./config-extract.node.js).
4. **Reponha o `IG_API_TOKEN`** com o **Page access token** da página Henrique Pimentel
   (o arquivo traz `COLE_AQUI_O_PAGE_ACCESS_TOKEN` de propósito, para não versionar segredo).
5. Confirme que os nós **`Send DM (button)`** e **`Reply publicly to comment`** usam
   `graph.facebook.com` (não `graph.instagram.com`).
6. **Save** (o workflow já está *active*; não precisa republicar no Meta).

### Teste rápido
Comente **"IA"** em um post do @hdgpimentel (de outra conta). Em ~10–25s deve
chegar a DM com botão **"Conhecer o MedCitado"** + resposta pública no comentário.
Comente **"cardiologia"** para confirmar que NÃO dispara (validação do word-boundary).

## Alerta automático por e-mail (falha no envio)

Dois nós extras no fim do fluxo avisam o Henrique se o envio quebrar:

`Reply publicly to comment` → **`Detectar falha no envio`** → **`Brevo: alerta e-mail`**

- **`Detectar falha no envio`** (`alert-detect.node.js`): lê os resultados de
  `Send DM (button)` e `Reply publicly to comment` (ambos com `neverError=true` +
  `fullResponse=true`). Se algum tiver `statusCode >= 400` ou `body.error`, monta o
  e-mail; senão não envia nada. Tem **throttle de 30min** (via `staticData`) pra não
  floodar caso o token seja revogado e todo comentário passe a falhar.
- **`Brevo: alerta e-mail`**: `POST https://api.brevo.com/v3/smtp/email` com `api-key`
  inline (mesma conta Brevo dos outros workflows). De `noreply@henriquepimentel.com.br`
  para **`hdgpimentel@gmail.com`**. O corpo (`$json.brevoBody`) traz o comentário, o
  gatilho, o erro e o @ do lead pra recuperar manualmente.

> A `api-key` do Brevo fica **apenas no workflow** (não versionada aqui).

## Observações
- A mensagem do `ia` segue o tom CFM-compliant das demais (sem promessa de resultado clínico).
- Para aceitar variações como `I.A.`, adicione uma chave extra no `KEYWORDS` (ex.: `'i.a'`).
