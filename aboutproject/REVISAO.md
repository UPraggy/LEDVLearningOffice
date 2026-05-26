# Revisão de Conteúdo e Didática — Escritório

> Revisão completa do curso: **o que está pronto**, **legibilidade/consistência**,
> **adaptação às idades ~10 e 40+** e a **proposta de tipos de interação** (baseada em
> Duolingo, Busuu, LeetCode, Brilliant) para a fase de integração no app.
> Atualizado: 2026-05-24.

---

## 1. Completude — está tudo lá?

✅ **Sim.** Verificação estrutural automática (grep) confirmou que **todas as 225 missões**
têm as 5 partes obrigatórias: `aula`, `pratica`, `desafio`, `validacao` e `chave` (3 pontos).
**Zero divergências** em 31 trilhas.

| Módulo | Trilhas | Missões |
|--------|---------|---------|
| 🖥️ Computador | 5 | 41 |
| 📱 Celular | 7 | 54 |
| 💼 Mercado & Especialização | 6 | 49 |
| 🔒 Segurança | 2 | 18 |
| 🟣 Inglês (A1→B1) | 11 | 63 |
| **TOTAL** | **31** | **225** |

- Índice (`data/conteudo/index.js`): **31 imports = 31 spreads** — tudo conectado.
- `estrutura.js`: 31 trilhas + metadados de missão de todas + troféus (incl. os 6 do inglês).
- Gamificação: ofensiva (streak + escudo), troféus automáticos, nível por XP — lógica pronta.

**Conclusão:** o conteúdo escrito está **completo e íntegro**. O que falta é **app** (integração), não conteúdo.

---

## 2. Legibilidade e consistência

✅ **Schema uniforme** em 100% das missões — facilita a renderização e a manutenção.
✅ **Padrões de escrita seguidos** (ver `sistema-conteudo.md`): tom direto e respeitoso, sem
"fácil/simples/obviamente"; verbos de comando na prática; glossário ("Palavras novas") em toda aula.
✅ **Progressão pedagógica:** 1 conceito por missão; última missão de cada trilha é um **"Projeto:"**
que vira portfólio; dificuldade crescente.
✅ **Inglês:** dica de pronúncia entre parênteses (sem áudio), pares EN↔PT no `exemplo`, gramática
progressiva CEFR, e cada projeto é falado/gravado.

**Pequenos pontos a tratar na integração (cosméticos, não bloqueiam):**
- O componente de Aula rotula o bloco `exemplo` como "Planilha simulada"/"Conversa simulada".
  Generalizar para um rótulo neutro ("Exemplo") — especialmente no inglês (lá é tabela EN↔PT).
- `escritorio-app.jsx` ainda usa a estrutura antiga (hardcoded) — ver §4 do AI-HANDOFF.

---

## 3. Adaptação às idades (~10 e 40+)

O curso atende as **duas pontas** com a mesma régua: **linguagem simples, mas nunca infantil.**

| Critério | Como o conteúdo atende |
|----------|------------------------|
| **Vocabulário** | Frases curtas, termos do dia a dia, glossário em toda aula. Acessível a um pré-adolescente e respeitoso com um adulto. |
| **Concretude** | Tudo com exemplo real/simulado (planilha, conversa de golpe, tabela EN↔PT). Abstrato vira tangível. |
| **Motivação** | Cada aula tem "por que isso importa" — conecta ao mundo real (mercado p/ adultos, autonomia/curiosidade p/ jovens). |
| **Tom** | Encorajador ("você consegue", "parabéns"), sem condescendência. Serve a quem tem 10 e a quem tem 60. |
| **Acessibilidade (40+)** | Já previsto no design: fonte 17–20px, alto contraste, alvos ≥44px, botão de aumentar fonte (ver DESIGN-BRIEF). |

**Onde calibrar por idade (recomendações de UX, não de reescrita):**
- **Modo/tom por perfil (opcional):** no onboarding, perguntar a idade/objetivo e ajustar microcopy
  (ex: emojis e celebração mais vibrantes p/ jovens; foco em "mercado/autonomia" p/ adultos). O
  conteúdo das missões permanece o mesmo — muda só a "embalagem".
- **Inglês é o módulo mais universal** (atrai crianças e adultos) — bom carro-chefe para o público jovem.
- **Módulos Mercado/Segurança** são naturalmente mais "adultos"; tudo bem — o jovem foca em
  Computador/Celular/Inglês. A seleção de módulos já permite cada um escolher seu caminho.

**Conclusão:** o conteúdo é **legível e adaptado** às duas faixas. A personalização fina por idade
é um ajuste de **interface/microcopy** (fase de app), não de conteúdo.

---

## 4. Tipos de INTERAÇÃO a adicionar (Duolingo / Busuu / LeetCode / Brilliant)

Hoje cada missão usa **leitura rica + checklist de validação**. Para subir o engajamento e a
retenção (e atender bem os ~10 anos), a integração no app deve adicionar **exercícios interativos
com feedback imediato**. Abaixo, o sistema proposto — pronto pra virar schema.

### 4.1 Os 6 tipos de interação (e onde já encaixam)

| Tipo | O que é | Mapeia para | Exemplo no app |
|------|---------|-------------|----------------|
| **`complete`** | Preencher lacuna (fórmula, texto, ação) | reforça a `aula` | "Complete: =SOMA(__)" / "I ___ (be) happy." |
| **`find_error`** | Achar e corrigir um erro | poderoso p/ adulto | "Corrija: *She have* a car." / erro numa planilha |
| **`choose`** | Escolher a resposta/decisão certa | quiz de conceito | "Banco liga pedindo senha → o que fazer?" |
| **`simulate`** | Simulação de interface (Excel/WhatsApp/chat falsos) | prática real | tela fake de WhatsApp com golpe; planilha fake |
| **`challenge`** | Desafio sem ajuda | já existe como `desafio` | "Monte a planilha sozinho" |
| **`feedback`** | Resposta imediata a cada passo | transversal | "Boa! ✅" / "Quase — lembre do 's'." a cada item |

### 4.2 Extensão de schema proposta (compatível e opcional)

Adicionar um campo **opcional** `interacoes: []` a cada missão (sem quebrar o que existe). Sugestão:

```js
// dentro de uma missão do CONTEUDO_*, opcional:
interacoes: [
  { tipo: 'complete', enunciado: 'Complete a fórmula de soma:',
    texto: '=____(A1:A5)', resposta: 'SOMA', dica: 'Começa com =',
    feedbackOk: 'Boa! ✅', feedbackErro: 'Quase — qual função soma?' },

  { tipo: 'find_error', enunciado: 'Ache o erro:',
    texto: 'She have a car.', resposta: 'has', explicacao: '3ª pessoa: have → has.' },

  { tipo: 'choose', enunciado: 'O "banco" liga pedindo o código do SMS. O que fazer?',
    opcoes: ['Passar o código', 'Desligar e ligar no número oficial'],
    correta: 1, explicacao: 'Banco nunca pede código. Desligue e verifique.' },

  { tipo: 'simulate', interface: 'whatsapp', // 'excel' | 'whatsapp' | 'chat' | 'email'
    roteiro: [ /* mensagens/células do mock */ ],
    objetivo: 'Identifique o sinal de golpe nesta conversa.' }
]
```

- **Feedback imediato** é regra: cada `complete/find_error/choose` mostra `feedbackOk`/`explicacao`
  na hora (não só no fim). Isso é o coração do estilo Duolingo/Brilliant.
- **Onde priorizar:** Excel (`complete` de fórmulas), Inglês (`complete`/`find_error` de gramática,
  `choose` de tradução), Segurança/PIX (`choose` de decisão, `simulate` de golpe no WhatsApp).
- **Retrocompatível:** missões sem `interacoes` seguem funcionando só com leitura + checklist.

### 4.3 Gamificação de hábito (parte já existe; reforçar no app)
- 🔥 **Ofensiva (streak) visível + "risco de perder hoje"** — `OFENSIVA` já existe em `estrutura.js`.
- 🧊 **Escudo** (pular 1 dia sem perder) — já modelado (`escudo`); falta UI.
- ⚡ **Feedback imediato** ("Boa!", "Quase lá") — entra com `interacoes` (§4.2).
- 🎯 **Missão do dia** + "Você vai perder sua sequência" — implementar como notificação/destaque.
- 🏆 **Progressão pessoal** ("você melhorou X%") e níveis fácil/médio/difícil — derivar do XP/acertos.

---

## 5. Veredito e próximos passos

**Veredito:** conteúdo **completo, íntegro, legível e adaptado** a ~10 e 40+. Pronto para a fase de app.

**Próximos passos (ordem):**
1. **Integração no app** (tarefa #5): consumir `estrutura.js` + `getConteudo()`, tela de módulos,
   ligar ofensiva/troféus/nível. (Ver AI-HANDOFF §7.)
2. **Camada de interação** (§4): implementar os tipos `complete/find_error/choose/simulate` com
   feedback imediato; popular as missões de maior impacto (Excel, Inglês, Segurança) com `interacoes`.
3. **Calibração por idade** (§3): onboarding com perfil + microcopy ajustável.
4. **Design**: rodar os prompts do DESIGN-BRIEF, implementar identidade, auditar com
   `audit_senior_readability` + `audit_pwa`.
5. **Backend** (planejamento pronto em `BACKEND.md`): sync/backup offline-first com Supabase.

---

## 6. Melhorias de conteúdo baseadas em pesquisa (a aplicar na fase de app)

Pesquisa de 2026 (microlearning, repetição espaçada, recall ativo, design de exercícios
do Duolingo/Brilliant) aponta ganhos de retenção de até ~60% com estas práticas. O nosso
conteúdo já segue várias (1 conceito/missão, projetos práticos, dica de pronúncia); abaixo,
o que **adicionar** na fase de app — **conteúdo já está pronto, isto é camada de produto**:

### 6.1 Repetição espaçada (spaced repetition)
- **O quê:** rever um conceito nos intervalos certos (ex: 1, 3, 10, 30 dias) — bem na hora
  em que o cérebro está prestes a esquecer. Move o aprendizado pra memória de longo prazo.
- **Como aplicar:** uma fila de revisão (`review_queue` em `BACKEND.md`) que sugere "revisar"
  missões/conceitos passados; um tipo de missão "Revisão" que mistura itens de trilhas já feitas.
- **Onde brilha:** Inglês (vocabulário/gramática) e Excel (fórmulas) — onde decorar/automatizar importa.

### 6.2 Recall ativo (active recall)
- **O quê:** forçar o aluno a LEMBRAR (não só reler). Combinar recall + repetição espaçada é
  mais eficaz que qualquer um isolado.
- **Como aplicar:** os exercícios `complete`/`find_error`/`choose` (ver §4) JÁ são recall ativo —
  priorizá-los. Começar a missão com 1 pergunta rápida do que foi visto antes ("você lembra...?").

### 6.3 Variedade de exercícios (estilo Duolingo)
- **O quê:** alternar tipos de exercício mantém o engajamento e treina habilidades diferentes.
- **Como aplicar:** variar entre os 6 tipos da §4 dentro de uma trilha; começar fácil ("notar o
  padrão") e ir ao difícil ("aplicar em contexto novo") — exatamente a progressão que a pesquisa recomenda.

### 6.4 "Embaralhar" na revisão (interleaving)
- **O quê:** em revisões, misturar itens de módulos/trilhas diferentes (em vez de um bloco só)
  melhora a retenção.
- **Como aplicar:** o tipo de missão "Revisão" puxa itens variados do histórico do aluno.

### 6.5 Microlearning + hábito (já é nossa base)
- Missões de 5–15 min, 1 ideia por vez, feedback imediato, e a ofensiva (streak) pra criar hábito —
  já alinhado. Reforçar com "missão do dia" e lembrete gentil de não perder a sequência.

> **Resumo:** o CONTEÚDO está completo. Estas melhorias são de **mecânica de produto** (fila de
> revisão, variedade/feedback de exercícios, hábito) — entram na integração no app, apoiadas pelo
> backend (`BACKEND.md §3`, tabelas `exercise_attempts` e `review_queue`).

### Fontes (melhorias de conteúdo)
- [Best Microlearning Examples 2026 (Headway)](https://makeheadway.com/blog/best-microlearning-examples/)
- [Spaced Repetition 2026 (Migaku)](https://migaku.com/blog/language-fun/spaced-repetition-in-2026-how-it-actually-works)
- [Spaced Repetition + Retrieval Practice (MaxLearn)](https://maxlearn-microlearning.medium.com/enhancing-learning-outcomes-the-role-of-spaced-repetition-and-retrieval-practice-in-microlearning-8cc7b06d959a)
- [The Duolingo Method](https://blog.duolingo.com/duolingo-teaching-method/)
- [10 Essential Design System Components (UXPin)](https://www.uxpin.com/studio/blog/design-system-components/)
