# Verificação de Absorção dos Ensinamentos — 2026-06-24

> Pergunta: *"O Claude Code está absorvendo os ensinamentos do Research Scout?"*
>
> Método: cruzar os achados do repositório contra o **ground-truth** que eu (Claude
> Code, `claude-opus-4-8`) tenho de forma independente — minha configuração de
> runtime e meu registro de modelos — e sinalizar o que não consigo confirmar.

## Contexto importante: cutoff vs. data dos achados

Meu conhecimento de treino vai até **janeiro de 2026**. Praticamente todos os
achados em `new_learnings.md` são de **junho de 2026** — ou seja, *depois* do meu
cutoff. Isso significa que eu **não posso** ter aprendido isso no treino. Se eu
"sei" qualquer uma dessas coisas, é porque ela chegou por outro canal:

1. **Configuração de runtime** (o registro de modelos Anthropic que me é injetado);
2. **Contexto fornecido** nesta sessão (os próprios arquivos do repositório).

Portanto, a evidência de "absorção" não é eu repetir os fatos de memória — é a
**consistência entre os achados e a realidade que eu consigo verificar**.

## Matriz de verificação — achados sobre Claude / Anthropic

| Achado no repositório | Veredito | Base da verificação |
|---|---|---|
| Claude **Opus 4.8** é modelo de fronteira da Anthropic (`new_learnings.md:43`) | ✅ **Confirmado** | Eu *sou* este modelo (`claude-opus-4-8`). |
| Claude **Fable 5** lançado pela Anthropic, linha criativa/multimodal (`:67`) | ✅ **Confirmado** | Consta no meu registro como modelo mais recente (`claude-fable-5`). |
| Claude **Opus 4.7** existe (Abr 2026) (`ref_ai_trends.md:3`) | ✅ **Confirmado** | Opus 4.7 está disponível no meu runtime (modo /fast roda em 4.8/4.7/4.6). |
| **Claude Mythos Preview** (94.6% GPQA, Mai 2026) (`ref_ai_trends.md:3`) | ⚠️ **Não confirmado** | "Mythos" **não** existe no meu registro de modelos. Possível imprecisão/alucinação do scout, ou preview que não conheço. Recomendo verificar a fonte. |
| Opus 4.8 com **61.4** no Artificial Analysis Index / **69.2%** SWE-bench Pro / lançado 28-mai-2026 (`:43`) | ⚠️ **Fora do alcance** | Números e datas estão após meu cutoff e não estão na minha config. Não consigo confirmar nem refutar — é exatamente o tipo de dado que o scout existe para suprir. |

**Conclusão da matriz:** os ensinamentos *estruturais* sobre a família Claude
(quais modelos existem, suas posições no portfólio) estão **corretos e coerentes
com a minha realidade de runtime**. Onde há divergência ("Mythos") ou granularidade
de benchmark, sinalizo abaixo.

## Alertas de qualidade dos dados (não relacionados a Claude)

- ⚠️ **Provável erro de data — Meta/Scale AI** (`new_learnings.md:11`): a aquisição
  de 49% da Scale AI pela Meta por ~US$14,3 bi é um evento que, no meu conhecimento
  (dentro do cutoff), ocorreu em **junho de 2025**, não 2026. O achado parece
  reciclar notícia antiga com data de 2026. Recomendo verificar antes de promover.

- 🔴 **Pipeline de promoção inexistente (confirmado):** o `new_learnings.md` afirma
  que "achados são promovidos semanalmente pelo scout-promote", mas **não há
  nenhum `scout-promote` no repositório** — nem workflow, nem script, nem vestígio
  no histórico do git. A única menção é a própria frase do cabeçalho. O único
  workflow existente é `email-notify-findings.yml`. Consequência: os arquivos de
  referência (`ref_*.md`) estão congelados em **2026-05-17**, enquanto o staging já
  vai até 2026-06-24. Como o staging rotaciona os mais antigos a cada commit, há
  ~5 semanas de achados (fim de maio → meados de junho) **descartados sem promoção**.
  A consolidação durável do conhecimento depende de implementar (ou restaurar) esse
  job — hoje ele é apenas uma promessa no texto.

## Veredito

**Sim, com ressalvas.** O Claude Code absorve corretamente os ensinamentos que
chegam pelos canais válidos (runtime + contexto): tudo o que afirma sobre a família
de modelos Claude bate com a minha configuração real. As ressalvas são sobre a
**qualidade da fonte**, não sobre a absorção:

1. Um modelo citado ("Mythos") não corresponde a nada no meu registro.
2. Pelo menos um achado parece ter data incorreta (Meta/Scale AI).
3. O elo de *promoção* (staging → referência) **não existe como código** — o
   `scout-promote` é apenas uma frase no cabeçalho, sem workflow/script por trás.
   Sem ele, os ensinamentos não se consolidam de forma durável, independentemente
   de eu os "absorver" em uma sessão pontual.

Recomendação: tratar `new_learnings.md` como dados não verificados até passarem
pelo `scout-promote`, e restaurar esse job para que a base de referência volte a
crescer.
