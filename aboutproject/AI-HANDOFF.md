# AI-HANDOFF — Projeto "Escritório" (curso digital 40+)

> **Leia este arquivo primeiro.** Ele é o ponto de entrada para qualquer IA/dev
> continuar o desenvolvimento. Descreve o projeto inteiro, o estado atual, onde
> paramos, os próximos passos, os padrões de conteúdo, o design e as referências.
>
> **Localização:** toda a documentação fica em `escritorio-virtual/aboutproject/`. O
> `README.md` (PWA/deploy) fica na **raiz do projeto** (`../README.md`). **O código está
> um nível acima desta pasta** — então caminhos citados aqui como `data/estrutura.js` ou
> `escritorio-app.jsx` são relativos à **raiz do projeto** (`../` a partir de `aboutproject/`).
>
> Outros docs de apoio (nesta mesma pasta `aboutproject/`): `REVISAO.md` (revisão de
> conteúdo/didática + tipos de interação + melhorias de retenção — LEIA junto deste),
> `FLUXO.md` (fluxo e funcionamento do app — navegação, jornadas, telas, estados, regras;
> FUNCIONAL, não toca em design), `FUNCIONALIDADES.md` (acessibilidade, hábito, retenção, valor
> concreto e modo família — detalhados front-only, sem voz, sem backend), `MELHORIAS.md` (ideias),
> `EXERCICIOS.md` (schema detalhado dos exercícios interativos, front-only), `BACKEND.md`
> (backend OPCIONAL — o app é front-only) + `sql/schema.sql` (registro, não executar),
> `DESIGN-BRIEF.md` (prompts de design + UI Kit + pesquisa), `DOCUMENTACAO.md` (arquitetura
> detalhada — pré-refatoração; em conflito, **este arquivo manda**), `sistema-conteudo.md`
> (guia de produção — ignore as partes sobre VÍDEO, o curso é 100% texto).
>
> Última atualização: 2026-05-25.
>
> 🟢 **NOVO (2026-05-25):** o **front foi implementado** em `escritorio-virtual/app/`
> (Vite + React + JSX, CSS puro com tokens da identidade visual, 8 telas funcionais
> consumindo `data/estrutura.js` + `data/conteudo/`). Veja **`FRONTEND-IMPL.md`** para o
> mapa completo do app, decisões e o que falta. A diretriz abaixo (⛔ "não iniciar
> implementação até a identidade chegar") foi suspensa porque a identidade visual já
> está finalizada em `IdentidadeVisual/identidade-visual.html` e foi aplicada 1:1.

> ⛔ **DIRETRIZ ATUAL DO DONO (respeite):** **NÃO iniciar nenhuma implementação/código de
> interface** até o dono entregar a **identidade visual completa + UI Kit + as telas do
> sistema** (ver `DESIGN-BRIEF.md`). Até lá, o trabalho é só **pesquisa e planejamento**
> (conteúdo, backend, documentação). A integração no app (§7) fica AGUARDANDO esse material.

---

## 1. O QUE É O PROJETO

App/curso de **qualificação digital para o público 40+** (e qualquer pessoa se
aprofundando em tecnologia). A pessoa já sabe o básico (Word, Google, celular, redes
sociais) e quer **virar autônoma digitalmente** e **se qualificar para o mercado de
trabalho**.

- **Metáfora central:** uma carreira num "Escritório". O usuário começa **Estagiário**
  e é promovido até **Coordenador** conforme aprende (XP → níveis).
- **Conteúdo 100% ESCRITO** (sem vídeo — decisão do dono do projeto).
- **Gamificação estilo Duolingo, porém gentil e SEM ranking competitivo:** "ofensiva"
  (streak de dias), troféus, XP, níveis.
- **FRONT-ONLY (regra do dono).** O app **NÃO depende de backend** — tudo funciona no front:
  progresso, gamificação, repetição espaçada e tentativas em `localStorage`/`IndexedDB`;
  multi-aparelho via exportar/importar `.json`. Backend é **opcional e só registrado** (sync
  futuro em nuvem) — ver `BACKEND.md`. Nunca tornar backend um requisito.
- **Web app responsivo (PWA)** — mesmo código no celular e no computador.
- **Público-alvo principal de teste:** os pais do dono do projeto (50+), mas pensado
  para qualquer adulto.

**Princípio que rege tudo:** o sucesso é "uma pessoa de 55 anos abrir o app e sentir
'isso foi feito pra mim, eu consigo'". Tom adulto, respeitoso, **nunca infantil**.

---

## 2. ESTADO ATUAL (onde paramos)

### ✅ Conteúdo escrito: **COMPLETO — 31 trilhas / 225 missões / 5 módulos**

Verificação estrutural automática confirmou que **todas as 225 missões** têm as 5 partes
(`aula`, `pratica`, `desafio`, `validacao`, `chave`) — zero divergências. (Ver `REVISAO.md`.)

| Módulo | Trilhas | Missões | Status |
|--------|---------|---------|--------|
| 🖥️ Computador | 5 (`pc-fund`, `pc-nav`, `pc-word`, `pc-cloud`, `pc-meet`) | 41 | ✅ |
| 📱 Celular | 7 (`mob-dom`, `mob-wpp`, `mob-pix`, `mob-gov`, `mob-saude`, `mob-loc`, `mob-fotos`) | 54 | ✅ |
| 💼 Mercado | 6 (`pc-excel`, `pc-ia`, `amb-com`, `pc-job`, `mkt-carreira`, `amb-final`) | 49 | ✅ |
| 🔒 Segurança | 2 (`amb-seg`, `sec-ataque`) | 18 | ✅ |
| 🟣 Inglês A1→B1 | 11 (`en-a1-*` ×4, `en-a2-*` ×4, `en-b1-*` ×3) | 63 | ✅ |

> Inglês: A1 (basico, pessoas, numeros, rotina), A2 (comida, lugares, passado, planos),
> B1 (conversa, trabalho, mundo). Com dica de pronúncia, pares EN↔PT e projetos falados/gravados.

### O que mais já existe
- ✅ **Estrutura modular completa** (`data/estrutura.js`): **5 módulos, 31 trilhas** (metadados
  + lista de missões de TODAS), níveis, **ofensiva (streak+escudo)**, troféus (incl. 6 do inglês),
  com a lógica pronta (`atualizarOfensiva`, `avaliarTrofeus`, `nivelPorXP`).
- ✅ **Índice de conteúdo** (`data/conteudo/index.js`): **31 imports = 31 spreads** — tudo conectado.
- ✅ **Brief de design** (`DESIGN-BRIEF.md`) com 2 prompts (identidade + telas) e tipos de interação.
- ✅ **PWA**: `index.html`, `manifest.json`, `service-worker.js` e os **8 ícones** em `/icons/`
  (`audit_pwa` = 100/100, installable).
- ✅ **Visual Inspector** ganhou 2 tools novas (ver §6).

### ⏳ O que FALTA (não é conteúdo — é app)
- **Integração no app** (§7): `escritorio-app.jsx` ainda usa estrutura ANTIGA (hardcoded), **não
  consome `estrutura.js` nem `data/conteudo/` ainda**.
- **Camada de interação** (ver `REVISAO.md` §4): exercícios `complete/find_error/choose/simulate`
  com feedback imediato — schema `interacoes[]` proposto (§4 abaixo).

---

## 3. MAPA DE ARQUIVOS (estado atual)

```
escritorio-virtual/
├── aboutproject/           ← TODA a documentação do projeto
│   ├── AI-HANDOFF.md       ← ESTE arquivo (ponto de entrada — leia primeiro)
│   ├── DOCUMENTACAO.md     ← arquitetura detalhada (PRÉ-refatoração; este arquivo prevalece)
│   ├── DESIGN-BRIEF.md     ← prompts de design + pesquisa + dados do Visual Inspector
│   └── sistema-conteudo.md ← guia de produção (IGNORAR partes de vídeo)
├── README.md               ← como virar PWA / deploy (Vite + Vercel) — fica na raiz
├── escritorio-app.jsx      ← app React (single-file). USA ESTRUTURA ANTIGA — precisa integrar
├── index.html              ← entry PWA (splash + registro do service worker)
├── manifest.json           ← manifest PWA (8 ícones, theme #1B2A4E)
├── service-worker.js       ← cache offline + base p/ push
├── icons/                  ← icon-72…512.png (gerados via Chromium do Visual Inspector)
└── data/
    ├── estrutura.js        ← FONTE DA VERDADE: módulos, trilhas, missões, níveis, ofensiva, troféus
    └── conteudo/
        ├── index.js        ← agrega tudo: CONTEUDOS{}, getConteudo(), trilhaTemConteudo()
        ├── pc-fund.js  pc-nav.js  pc-word.js  pc-cloud.js  pc-meet.js   (Computador ✅)
        ├── pc-excel.js  pc-ia.js  amb-com.js  pc-job.js  mkt-carreira.js (Mercado, falta amb-final)
        └── sec-ataque.js                                                 (Segurança, falta amb-seg)
```

**Projeto irmão (NÃO faz parte do curso, é ferramenta):**
`../visual-inspectorBackEnd/` — servidor REST de auditoria de design (ver §6).

---

## 4. MODELO DE DADOS E SCHEMAS

### 4.1 `data/estrutura.js` — exporta:
- `MODULOS` — array de 4: `computador`, `celular`, `mercado`, `seguranca`. Cada um:
  `{ id, nome, subtitulo, desc, cor, publico }`.
- `TRILHAS` — array de 19. Cada trilha:
  `{ id, modulo, vertente, ordem, nome, desc, iconeNome, cor }`.
  - `vertente`: `'computador' | 'celular' | 'ambos'` (onde a prática acontece).
  - `iconeNome`: nome de um ícone lucide-react (mapear no app, ex: `Settings`, `Globe`...).
- `MISSOES` — objeto `{ [trilhaId]: [ { id, titulo, desc, tempo, xp } ] }` para TODAS as 19 trilhas.
- `NIVEIS` = `['Estagiário','Assistente Júnior','Assistente Pleno','Analista','Analista Sênior','Coordenador']`.
- `XP_POR_NIVEL` = `[0, 600, 2000, 4500, 8000, 13000]`.
- `OFENSIVA` = `{ metaDiaria, marcos:[3,7,14,30,60,100,180,365], escudo:{ganhaACada,maximo} }`.
- `TROFEUS` — array; cada um `{ id, nome, desc, tipo, regra }`. `tipo`: marco|ofensiva|dominio|especial.
  `regra` pode ser `{missoes:N}`, `{streak:N}`, `{trilha:id}`, `{modulo:id}`.
- **Funções utilitárias (já implementadas):**
  - `atualizarOfensiva(user, hojeISO)` → streak Duolingo (mesma data mantém; ontem +1; buraco
    usa escudo ou zera).
  - `avaliarTrofeus(progress)` → array de IDs de troféus merecidos.
  - `missoesFeitasNaTrilha(progress, trilhaId)`, `nivelPorXP(xp)`.

### 4.2 Schema de CONTEÚDO de missão (em `data/conteudo/<trilha>.js`)
Cada arquivo exporta uma constante MAIÚSCULA (ex: `export const PC_FUND = {...}`) com
chaves `` `${trilhaId}-${missaoId}` `` (ex: `'pc-fund-1'`). Cada missão:

```js
{
  trilhaId: 'pc-fund', numero: 1, titulo: '...', tempoTotal: 8, xp: 30,
  vertente: 'computador',          // 'computador' | 'celular' | 'ambos'
  aula: {
    gancho: '...',                  // frase-problema do dia a dia (vai em itálico)
    conceito: { titulo, texto },
    estrutura: { titulo, partes: [{ simbolo, desc }] },   // 4 itens; "simbolo" curto
    exemplo: {                       // renderiza como "tela/planilha/conversa simulada"
      titulo, celulas: [{ ref, valor }], formula, resultado, comentario
    },
    vocabulario: [{ palavra, def }], // glossário "Palavras novas"
    chave: [s, s, s],                // exatamente 3 "pontos pra lembrar"
    porque: '...'                    // "por que isso importa" (foco mercado/vida)
  },
  pratica:  { instrucao, passos: [ ... ] },           // passo a passo numerado
  desafio:  { cenario, requisitos: [ ... ], dica },   // tarefa sozinho
  validacao: [ ... ],                                 // checklist final (libera o XP)
  interacoes: [ ... ]   // OPCIONAL (a implementar) — exercícios interativos. Ver REVISAO.md §4.
}
```

> **Extensão `interacoes[]` (opcional, retrocompatível):** exercícios com feedback imediato,
> tipos `complete | find_error | choose | simulate | challenge`. Schema completo e exemplos em
> `REVISAO.md §4.2`. Missões sem `interacoes` continuam funcionando só com leitura + checklist.

> **Importante:** o componente de Aula do protótipo rotula o bloco `exemplo` como
> "Planilha simulada" (computador) ou "Conversa simulada" (celular). Para conteúdos
> que não são planilha/conversa, isso é cosmético — na integração (§7) vale generalizar
> o rótulo para algo neutro ("Exemplo na tela"). Mantenha o schema como está.

### 4.3 `data/conteudo/index.js` — exporta:
- `CONTEUDOS` = merge de todos os objetos importados.
- `getConteudo(trilhaId, missaoId)` → o objeto da missão ou `null`.
- `trilhaTemConteudo(trilhaId)` → boolean.

### 4.4 Shape do progresso do usuário (localStorage, chave `'escritorio-progresso'`)
```js
{
  user: { nome, xp, nivelNum, streak, ultimaVisita, escudos? },
  missoesCompletas: ['pc-fund-1', ...],   // IDs `${trilhaId}-${missaoId}`
  selos: ['primeira-missao', ...],         // IDs de troféus (renomear p/ "trofeus" na integração)
  preferencias: { vertenteFiltro: 'todas' } // + futuramente: moduloAtual, fonteGrande
}
```

---

## 5. DESIGN

### 5.1 Direção "Escritório Caloroso"
- Estética de **caderno bonito de produtividade**, longe do SaaS genérico. Tema **claro/papel**
  (melhor p/ 40+), 1 cor de ação forte (coral), neutros calmos.
- **Tokens atuais** (em `escritorio-app.jsx`, objeto `c`):
  - `bg #F5EFE6` · `surface #FBF7F0` · `ink #1B2A4E` (navy) · `inkSoft #3D4A6B`
  - `coral #E55934` (ação) · `forest #3D5A3D` (sucesso) · `mustard #D4A574` (conquista/XP)
  - `text #1A1A1A` · `textSoft #5A5A52` · `border #E0D9C9` · `borderSoft #EBE5D6`
  - vertente `mobile #5B7C99` (celular) · `desktop #1B2A4E` (computador)
- **Tipografia:** `Fraunces` (títulos, serifada editorial) + `Plus Jakarta Sans` (corpo).
- **Acessibilidade 40+ (OBRIGATÓRIA):** corpo 17–20px; contraste WCAG AA; alvos ≥44px;
  navegação rasa; foco visível; botão de aumentar fonte; nada de animação que distraia.

### 5.2 Fluxo de design (em `DESIGN-BRIEF.md`)
O brief tem **2 prompts** prontos para colar numa IA de design:
- **PROMPT 1** → entrega uma **identidade visual** (conceito, logo, paleta c/ papéis e contraste,
  tipografia, sistema base, componentes, tom de voz).
- **PROMPT 2** → entrega **3 telas-assinatura** (Início, Missão, Seleção de Módulos) aplicando
  a identidade.
- Seção **"O que me devolver"**: paleta/tokens, fontes+escala, prints das telas, decisões.
- **Status:** aguardando o dono rodar os prompts e devolver o resultado para implementação.

### 5.3 Referências de design pesquisadas
- **Galerias:** Awwwards (Culture & Education), Behance (education app ui / e-learning ui),
  Dribbble (tag `streak`, perfil Duolingo).
- **Produtos-referência de gamificação gentil:** Duolingo (streak/freeze/XP/cores semânticas).
- **Notion de design do dono** (`water-bobolink-018.notion.site/Design...`): hub com sub-páginas
  Inspirações (Recent.design, Lusion, Framer templates, NextUI, UI8), Cores/Gradientes (Coolors,
  cssgradient, Noise Texture, MagicPattern grão), Fonts (Fontshare, Fontesk).
- **Leitura crítica registrada no brief:** pegar o *craft* (motion sóbrio, grid, sombras sutis)
  dos sites de portfólio, mas **inverter o mood escuro** para o tema claro/papel do nosso público.
- **Dados objetivos** (paletas/tipografia extraídas com o Visual Inspector) estão na Parte D do brief.

---

## 6. VISUAL INSPECTOR (ferramenta de produção, projeto irmão)

`../visual-inspectorBackEnd/` — servidor REST (`node api-server.js`, porta dinâmica 3000+,
grava `.backend-port`). ~191 tools via `POST /api/tool/<nome>` (args JSON). NÃO faz parte do
curso; serve para auditar/produzir design.

- Tools úteis aqui: `analyze_inspiration`, `generate_design_brief`, `scrape_colors`,
  `extract_type_scale`, `screenshot_responsive`, `audit_accessibility`, `full_design_audit`.
- **2 tools NOVAS criadas para este projeto** (em `src/tools/senior-audit.js`, registradas em
  `src/registry.js`):
  - **`audit_senior_readability`** — audita a tela pela lente 40+ (fonte ≥16px, entrelinha,
    comprimento de linha, contraste, alvos ≥44px) → nota 0–100. Use sobre o app **rodando**.
  - **`audit_pwa`** — instalabilidade: manifest + campos, **existência real dos ícones**,
    service worker, theme-color, viewport.
- `generate_design_brief`/`analyze_inspiration` precisam de `ANTHROPIC_API_KEY` no ambiente.
- Sites pesados (ex: Duolingo) podem estourar o `networkidle` — preferir telas internas/leves.

---

## 7. PRÓXIMOS PASSOS (ordem recomendada)

1. ~~**Terminar o conteúdo**~~ ✅ **CONCLUÍDO** — 31 trilhas / 225 missões escritas e conectadas
   (5 módulos, incl. Inglês A1→B1). Integridade verificada (ver `REVISAO.md`).
2. **Integração no app** (tarefa grande, hoje pendente — `escritorio-app.jsx` usa estrutura antiga):
   - Trocar os arrays hardcoded do app por imports de `data/estrutura.js` (MODULOS, TRILHAS,
     MISSOES, NIVEIS, XP_POR_NIVEL).
   - Adicionar a tela de **Seleção de Módulos** (4 cartões) antes das Trilhas.
   - Resolver conteúdo de missão por `getConteudo(trilhaId, missaoId)` (dicionário), em vez dos
     `if` fixos (`pc-excel`+5 / `mob-pix`+7) que existem hoje.
   - Generalizar `TrilhaDetailScreen` para `MISSOES[trilhaId]` (hoje só Excel/PIX).
   - Ligar a gamificação: chamar `atualizarOfensiva` no load, `avaliarTrofeus`/`nivelPorXP` após
     concluir missão; renomear `selos`→`trofeus` no estado; tela de troféus a partir de `TROFEUS`.
   - Mapear `iconeNome` (string) → componente lucide-react.
   - Generalizar o rótulo do bloco `exemplo` (ver §4.2) — importante p/ o módulo Inglês (tabela EN↔PT).
   - Onboarding (nome + idade/objetivo + módulo inicial) + botão "aumentar fonte".
3. **Camada de interação** (ver `REVISAO.md §4`): implementar os exercícios `complete / find_error /
   choose / simulate` com **feedback imediato**, lendo o campo opcional `interacoes[]` da missão.
   Popular primeiro as missões de maior impacto (Excel, Inglês, Segurança/PIX). Reforçar a UI da
   ofensiva (streak + escudo + "missão do dia" + "você vai perder a sequência").
4. **Calibração por idade (~10 e 40+):** onboarding com perfil e microcopy ajustável (ver `REVISAO.md §3`).
5. **Design:** rodar os prompts do `DESIGN-BRIEF.md`, receber identidade + telas, atualizar os
   tokens e implementar. Depois auditar com `audit_senior_readability` + `audit_pwa` no app rodando.
6. **Deploy PWA:** seguir `README.md` (Vite + Vercel). Validar localStorage real (não persiste
   no preview de artefato, mas funciona no deploy).

---

## 8. PADRÕES DE CONTEÚDO (siga à risca para manter consistência)

- **Tom:** adulto competente aprendendo algo novo. Respeitoso, caloroso, direto. **NUNCA infantil.**
- **Proibido:** "fácil", "simples", "obviamente", "basta", "é só", "como você já sabe". Para quem
  não sabe, NADA é óbvio.
- **Verbos de comando** na prática: "Clique", "Digite", "Aperte", "Selecione".
- **Vocabulário simples:** "programa" (não "software"), "botão direito" (não "right-click"),
  "salvar" (não "save"). Sempre explique termos novos no glossário (`vocabulario`).
- **Estrutura fixa de 4 etapas** por missão: Aula → Prática → Desafio → Validação.
- **`aula.chave` tem SEMPRE 3 itens.** `aula.estrutura.partes` costuma ter 4.
- **`aula.porque`** sempre conecta ao mercado de trabalho OU à autonomia na vida real.
- **Última missão de cada trilha = "Projeto:"** (entrega prática que vira portfólio).
- **Conteúdo é texto** — não referencie vídeo/gravação.
- **Segurança ética:** a trilha `sec-ataque` ensina como golpes funcionam SÓ para defesa
  (conscientização), nunca instruções operacionais de fraude. Manter esse enquadramento.
- **Gamificação:** XP por missão segue a tabela — básico 30/40, médio 50/70, avançado 80/100,
  projeto 100/150 (já definido em `estrutura.js > MISSOES`).

### Como adicionar uma trilha nova (checklist)
1. Crie `data/conteudo/<trilhaId>.js` exportando `export const NOME = { '<id>-1': {...}, ... }`
   seguindo o schema §4.2 (use `estrutura.js > MISSOES[trilhaId]` como roteiro de títulos/xp).
2. Em `data/conteudo/index.js`: adicione o `import` e o `...NOME` em `CONTEUDOS`.
3. Pronto — `getConteudo` e `trilhaTemConteudo` passam a reconhecer a trilha.

---

## 9. REFERÊNCIAS DE PESQUISA (conteúdo e mercado)

- **Cursos de informática p/ mercado (Brasil/Udemy):** padrão Windows → Word → Excel →
  PowerPoint → Internet/e-mail → **IA (Copilot/ChatGPT)**. Cursos "do zero ao avançado",
  100% práticos. (Udemy "Informática Essencial"; "Microsoft + Copilot/ChatGPT"; Fundação
  Bradesco "Office na Prática".)
- **Cursos de celular p/ 50+ (inclusão):** conhecer o aparelho → conectividade → ligações/SMS →
  WhatsApp → apps (banco/Uber) → câmera/galeria → **segurança/golpes**. (SERPRO educação digital;
  Prefeitura de Santos 50+.)
- **Empregabilidade 2026:** letramento digital + **saber usar IA (prompting)** + proteção de
  dados aparecem como indispensáveis; governo investe em requalificação 40+ (Caminho Digital).
  (ManpowerGroup; Gov.br Caminho Digital.)
- **Pedagogia (microlearning + gamificação):** 1 conceito por missão, 5–15 min; repetição
  espaçada; adultos preferem **metas próprias e feedback** a ranking competitivo; streak
  aumenta engajamento (~60%) e o "escudo"/freeze aumenta retenção (~48%).
- **Design (ver §5.3 e DESIGN-BRIEF.md Partes A/D/E)** para referências visuais e dados extraídos.

---

## 10. COMO RODAR

- **App (protótipo atual):** é um componente React single-file (`escritorio-app.jsx`, default export).
  Para rodar de verdade: criar projeto Vite + React, colar o componente, `npm i lucide-react`,
  importar fontes (Fraunces + Plus Jakarta Sans). Passo a passo no `README.md`.
- **PWA:** `index.html` + `manifest.json` + `service-worker.js` + `icons/` já prontos.
- **localStorage:** funciona no deploy; **não persiste** em preview de artefato (limitação da plataforma).
- **Visual Inspector:** `cd ../visual-inspectorBackEnd && node api-server.js` (porta em `.backend-port`).

---

## 11. RESUMO PARA COMEÇAR AGORA

> Você é uma IA continuando este projeto. **Próxima ação concreta:** escrever o conteúdo da
> trilha `amb-final` (Mercado — Projeto Final, 5 missões) em `data/conteudo/amb-final.js`,
> seguindo o schema da §4.2 e os padrões da §8, usando os títulos/xp de
> `estrutura.js > MISSOES['amb-final']`; depois importar/espalhar em `data/conteudo/index.js`.
> Em seguida, produzir o módulo Celular (7 trilhas) e `amb-seg`. Só então partir para a
> integração no app (§7, passo 2). Mantenha a profundidade dos arquivos já prontos
> (ex: `pc-fund.js`, `sec-ataque.js`) como referência de qualidade.
