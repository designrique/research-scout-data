# Automação IG — resposta de comentário → landing de venda GEO médico (@hdgpimentel)

Automação que **responde comentários no Instagram** do perfil **@hdgpimentel** e
envia, por **DM (botão)** + **resposta pública**, o link da **landing de venda de
GEO médico (MedCitado)**.

- **Workflow n8n:** `insta-henrique-ebook-reply` (id `hYxhaS9KI2tOmNKS`)
- **Instância n8n:** VPS — base de webhook `https://webhook.mapc.com.br/`
- **Webhook do Meta (já configurado):** `/webhook/insta-henrique-ebook` (GET verify + POST eventos)

> O workflow **já existia** e já era multi-palavra. Esta mudança apenas **estende**
> o nó **`Config + Extract`** (não cria workflow novo, não mexe no webhook do Meta).

## O que mudou

1. **Novo gatilho `IA`** → landing de **venda**: `https://henriquepimentel.com.br/medcitado/`
   (MedCitado — ser citado por ChatGPT/Gemini/Perplexity/Claude/Copilot, dentro do CFM).
2. **Matcher por palavra inteira** (`\b…\b`) em vez de *substring*.
   Sem isso o gatilho curto `ia` dispararia dentro de **cardiolog**ia, **pediatr**ia,
   **fisioterap**ia, "quer**ia**", "d**ia**" etc. Agora só dispara em **"IA" isolada**.

### Gatilhos ativos depois da mudança

| Comentário contém | Envia |
|---|---|
| `ebook` | E-book GEO grátis |
| `presenca` | Artigo: reduzir faltas / agendamento |
| `geo` | Guia (blog): aparecer no ChatGPT (CFM) |
| **`IA`** | **Landing de VENDA — MedCitado** |

Prioridade: `ebook` → `presenca` → `geo` → `ia` (palavra de campanha vence; `ia`
é o gatilho de intenção de compra).

## Como publicar (a mudança NÃO foi aplicada automaticamente)

O acesso ao n8n nesta sessão é **somente leitura/execução** — sem ferramenta de
edição e sem SSH da VPS. Então a publicação é manual (1 minuto):

1. Abra o n8n da VPS → workflow **`insta-henrique-ebook-reply`**.
2. Abra o nó **`Config + Extract`**.
3. Substitua todo o código pelo conteúdo de [`config-extract.node.js`](./config-extract.node.js).
4. **Reponha o `IG_API_TOKEN`** com o token que já estava no nó
   (o arquivo traz `COLE_AQUI_O_SEU_TOKEN_ATUAL` de propósito, para não versionar segredo).
5. **Save** (o workflow já está *active*; não precisa republicar no Meta).

### Teste rápido
Comente **"IA"** em um post do @hdgpimentel (de outra conta). Em ~10–25s deve
chegar a DM com botão **"Conhecer o MedCitado"** + resposta pública no comentário.
Comente **"cardiologia"** para confirmar que NÃO dispara (validação do word-boundary).

## Observações
- A mensagem do `ia` segue o tom CFM-compliant das demais (sem promessa de resultado clínico).
- Para aceitar variações como `I.A.`, adicione uma chave extra no `KEYWORDS` (ex.: `'i.a'`).
