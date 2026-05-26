# FRONTEND-IMPL — Implementação do front (handoff)

> Documento de continuidade. **Leia depois do `AI-HANDOFF.md`**. Foco: o que já está
> construído no app React do escritório, decisões tomadas, e o que falta para a próxima IA.
>
> Última atualização: 2026-05-26 (**v11**) — **Piper TTS Cadu PT-BR offline** (60 MB ONNX + G2P caseiro + fallback Web Speech) + v10 (fix scroll/const, paleta expandida, troféus c/ 35 ícones SVG únicos + gradientes por módulo, Modo Arcade Diário, Notificações locais, SRS, Kata, sidebar 260px com 11 itens, 17 telas).
>
> 🆕 Veja **`ROADMAP-V7-FEATURES.md`** pro gap analysis completo + cada onda detalhada.
> 🎙️ Veja **`PIPER-TTS-OFFLINE.md`** pra integração de TTS offline em outro projeto (entrega à parte).

---

## 1. Localização

- **Código do app:** `escritorio-virtual/app/` (Vite + React + JSX, sem TypeScript).
- **Dados (cópia integrada):** `escritorio-virtual/app/src/data/` — espelho de
  `escritorio-virtual/data/`. **Mantenha os dois sincronizados** (ou apague o original e
  ajuste o AI-HANDOFF). Hoje o app importa o espelho.
- **Identidade visual fonte da verdade:** `escritorio-virtual/IdentidadeVisual/identidade-visual.html`.
- **PWA assets:** `app/public/manifest.json`, `app/public/service-worker.js`, `app/public/icons/`.

## 2. Stack & convenções (perfil Rafael MR)

Seguindo `aboutproject/DevProfile.md`:

- **Vite + React 18 + JSX.** Nada de TypeScript.
- **CSS puro com `:root` tokens.** Sem Tailwind. Um arquivo CSS por componente/seção, em
  `src/assets/css/`. Variáveis: `--paper`, `--ink`, `--coral`, etc — todos 100% do guia.
- **Responsividade via `ativaResp`** (boolean detectado em `routes.jsx` por
  `matchMedia('(max-width: 767px)')`) propagado por props em todas as telas.
- **Pasta padrão:** `src/{App.jsx, routes.jsx, index.jsx, assets/css, components, data}`.
- **`GlobalVar.jsx`** é a classe estática com helpers globais — wrappers de localStorage,
  formatadores BR, e **toda a lógica de progresso** (carregar, salvar, conclusão de missão,
  export/import JSON, próxima missão pendente, info de nível).
- **Estado global:** `AppContext.jsx` (useContext) — não usa Redux/Zustand (proibidos pelo perfil).
- **Roteamento:** `react-router-dom@6` com `BrowserRouter`. Guarda de onboarding redireciona
  para `/bem-vindo` se `preferencias.onboardingFeito === false`.
- **Ícones:** `lucide-react`. `iconeNome` (string em `data/estrutura.js`) é resolvido pelo
  componente `subComponents/Icone.jsx` que mapeia ~32 nomes de ícones.

## 3. Telas implementadas

| Rota | Componente | O que faz |
|---|---|---|
| `/bem-vindo` | `screens/Onboarding.jsx` | 3 passos: nome → faixa etária/objetivo → módulo inicial. Persiste em localStorage e seta `preferencias.onboardingFeito`. |
| `/` | `screens/HomePage.jsx` | Saudação contextual (manhã/tarde/noite), card de ofensiva (streak + escudo), missão do dia (próxima pendente), card de nível com barra de XP, últimos 3 troféus, atalhos dos 5 módulos com % concluído. |
| `/modulos` | `screens/Modulos.jsx` | 5 cards grandes (Computador, Celular, Mercado, Segurança, Inglês) com cor própria, % geral do módulo e contagem de missões. |
| `/modulo/:modId` | `screens/Trilhas.jsx` | Lista as trilhas do módulo. Mostra "em produção" para trilhas sem `getConteudo`. |
| `/trilha/:trilhaId` | `screens/TrilhaDetail.jsx` | Lista as missões com numeração, lock progressivo (só destrava a próxima se a anterior foi feita), badge "Projeto" na última. |
| `/missao/:trilhaId/:missaoId` | `screens/Missao.jsx` | Tela longa de 4 etapas: **Aula** (gancho, conceito, estrutura, exemplo, vocabulário, 3 pontos-chave, "por que importa"), **Prática** (passo a passo numerado), **Desafio** (cenário + requisitos + dica), **Validação** (checklist obrigatório). Concluir credita XP, atualiza nível e dispara `avaliarTrofeus()`. Tela de **celebração** mostra XP ganho, ofensiva atual, troféus novos e link pra próxima missão. |
| `/trofeus` | `screens/Trofeus.jsx` | Agrupa troféus por tipo (marco, ofensiva, domínio, especial, inglês). Bloqueados aparecem cinzas. |
| `/perfil` | `screens/Perfil.jsx` | Avatar inicial, nível + XP, ofensiva, contagem de troféus, toggle de fonte grande, export/import `.json`, botão de reset com `confirm()`. |

## 4. Tokens de design aplicados

Em `src/assets/css/colors.css`. Cópia literal do guia, mais:

- `--mod-{computador|celular|mercado|seguranca|ingles}` — atalhos pra cor de cada módulo.
- Suporte a **fonte grande** via `:root[data-fontsize="lg"]` que sobe `--fs-body`. Toggle em
  `AppContext.alternarFonte()` aplica no `<html>`.
- `--ease-out`, `--t-micro/base/cele` para padrão de motion sóbrio (120/220/480 ms).

Foco visível obrigatório em `:focus-visible` (anel honey 3px) — atende §8 do guia.

`@media (prefers-reduced-motion: reduce)` desliga animações — também do guia.

## 5. Modelo de dados em uso

Lê de `data/estrutura.js` (`MODULOS`, `TRILHAS`, `MISSOES`, `NIVEIS`, `XP_POR_NIVEL`,
`TROFEUS`, `OFENSIVA`) e `data/conteudo/index.js` (`getConteudo`, `trilhaTemConteudo`).

**Shape do progresso salvo** (chave `escritorio-progresso`):

```js
{
  user: { nome, idade, moduloInicial, xp, nivelNum, streak, escudos, ultimaVisita },
  missoesCompletas: ['pc-fund-1', ...],
  trofeus: ['primeira-missao', ...],         // (renomeado de 'selos' como o AI-HANDOFF previa)
  preferencias: { onboardingFeito, moduloAtual, fonteGrande }
}
```

`atualizarOfensiva` é chamado no boot (`GlobalVar.tickDia`) e `avaliarTrofeus`+`nivelPorXP`
são chamados em `GlobalVar.concluirMissao`.

## 6. Como rodar

```bash
cd escritorio-virtual/app
npm install
npm run dev   # http://localhost:5173 (--host expõe IP)
npm run build # gera dist/
```

> O preview-tool da Claude Code teve um bug com `cmd.exe` neste ambiente. Use direto:
> `node node_modules/vite/bin/vite.js --host`.

PWA: `manifest.json` referencia os 8 ícones já em `public/icons/`. `service-worker.js` é
registrado em `index.html`. `audit_pwa` (Visual Inspector) deve continuar 100/100.

## 6.1. Motor de INTERAÇÕES (mini-jogos) — v3

`components/Interacoes.jsx` é o motor. A missão tem `interacoes: [...]` opcional.
Quando presente, o stepper ganha uma etapa **"Jogar"** entre Aula e Prática
(`Missao.jsx` monta `ETAPAS` dinamicamente). Cada acerto credita XP bônus via
`AppContext.bonusXP(xp)` — soma direto no XP, **não** marca missão concluída.

Voz: feedback imediato, calmo, nunca punitivo ("Quase. Pista X.").
Erro **não tira** ponto — o objetivo é fixar.

### 11 tipos suportados

| tipo | descrição | payload-chave |
|---|---|---|
| `choose`      | múltipla escolha, 1 correta | `opcoes:[], resposta:i, xp?, feedback_ok?, feedback_err?` |
| `multi`       | múltipla escolha, várias corretas | `opcoes, respostas:[i,j,...]` |
| `true_false`  | atalho do choose para 2 opções | `opcoes:['Verdadeiro','Falso'], resposta` |
| `fill_blank`  | completar frase clicando tokens | `frase:'...___...', tokens:[], respostas:[]` |
| `drag_match`  | parear A↔B (clique-clique, não drag real — a11y) | `colA, colB, pares:[[a,b],...]` |
| `sort_order`  | colocar passos em ordem (botões ↑/↓) | `passos:[]` (ordem correta) — embaralha 1× |
| `find_error`  | clicar nos tokens errados de um texto | `tokens:[{txt,ok?:false,sep?}]` |
| `hotspot`     | clicar na região certa de uma "tela" simulada | `cena, areas:[{x,y,w,h,ok?}]` (em %) |
| `flashcard`   | deck virável (ideal pra inglês) | `cards:[{frente,verso}]` |
| `sim_planilha`| sandbox de planilha — digite a fórmula | `cols, linhas:[[...]], celulaAlvo:{col,linha}, respostas:[strings]` |
| `sim_chat`    | conversa simulada (WhatsApp-like) com escolha de ação | `mensagens:[{de,txt}], acoes:[], resposta:i` |

### Como adicionar interações a uma missão

**Caminho A — embutido no arquivo da trilha** (`data/conteudo/<trilha>.js`):
adicione o campo `interacoes:[]` no objeto da missão. Pronto.

**Caminho B — patch externo** (atalho usado hoje):
`data/conteudo/_interacoes-exemplo.js` exporta `INTERACOES_EXEMPLO` indexado por
`${trilhaId}-${missaoId}`. `getConteudo()` em `index.js` mescla automaticamente:
`aula.blocos` ← `aulaBlocos` e `interacoes` ← `interacoes`. **Não precisa editar
cada arquivo da trilha.** Padrão usado nos 3 exemplos da v3.

### Exemplos prontos (v3)
- **`pc-fund-1`** (Computador): choose, true_false, drag_match, hotspot.
- **`mob-pix-7`** (PIX/Segurança): sim_chat, find_error, multi, sort_order.
- **`en-a1-basico-1`** (Inglês): flashcard, choose, fill_blank, drag_match.

## 6.2. AULA RICA (layouts editoriais) — v3

`components/AulaRica.jsx` renderiza a aula com **9 tipos de blocos opcionais**
em `aula.blocos: [...]`. Inspirado em editorial do tipo Awwwards/Recent.design/
Stripe-style. 100% retrocompatível: missões sem `blocos` renderizam igual ao antigo.

| tipo | descrição |
|---|---|
| `paragrafo`   | título + texto rico |
| `callout`     | destaque colorido (`variante: info\|warn\|ok\|honey`) |
| `do_dont`     | duas colunas (Faça assim ✓ / Evite ✕) |
| `versus`      | comparação A vs B |
| `timeline`    | cronograma com dot+linha vertical |
| `quote`       | depoimento navy escuro com aspas gigantes |
| `stats`       | números editoriais grandes (`items:[{num,lbl}]`) |
| `atalho`      | tecla(s) em estilo `<kbd>` + descrição |
| `aula_steps`  | grid de passos numerados 01-04 |

## 6.3. PRÁTICA e DESAFIO turbinados — v3

- **Prática:** vira **checklist interativo** com progress bar verde. Cada passo
  pode ser marcado (✓ / risca). Quando 100% feitos aparece um callout de elogio.
- **Desafio:** ganhou **upload de evidência** (foto/print). Aceita 1 imagem ≤3MB,
  salva como dataURL no `localStorage` na chave
  `escritorio-evidencia-<trilhaId>-<missaoId>`. Vira parte do "portfólio" do aluno.

## 6.4. SOM — Web Audio sintetizado (v4)

`components/subComponents/Som.jsx` — motor de efeitos sonoros **sem assets**.
Tudo é sintetizado em tempo real com osciladores + envelope ADSR, então o
bundle não cresce com novos sons (+~3KB no total).

### Como funciona
- `AudioContext` instanciado de forma preguiçosa, com auto-resume no 1º gesto do
  usuário (`pointerdown/keydown/touchstart`) — atende às políticas de autoplay.
- Mute persistido em `progresso.preferencias.somAtivo` (default `true`).
- `AppContext` aplica `Som.setMuted(!somAtivo)` num `useEffect`.
- Honra `prefers-reduced-motion`: sons celebrativos longos (`level`, `complete`)
  caem pra um `success` mais curto.
- Volume mestre **baixo** (`_baseGain = 0.18`) — discreto, não invasivo.

### Vocabulário sonoro (10 presets)
| preset | quando | timbre |
|---|---|---|
| `click`    | botão primário | tap curto 580Hz |
| `hover`    | reservado (não usado hoje) | toque 720Hz |
| `toggle`   | ligar/desligar som ou fonte | slide 480→660Hz |
| `step`     | avançar etapa do stepper/onboarding | slide 660→880Hz |
| `success`  | resposta correta em interação | arpejo C–E–G |
| `error`    | resposta errada | tom grave 220→165Hz + noise (gentil, não punitivo) |
| `xp`       | ganho de XP (flashcard "sei essa") | shimmer 1046+1318Hz |
| `streak`   | onboarding concluído, marcos de ofensiva | sino 880+1318Hz |
| `complete` | missão concluída (4 notas + 5ª harmônica) | celebração curta |
| `level`    | subiu de nível (toca depois de `complete`) | arpejo + harmônica longa |
| `flip`     | virar flashcard | slide 360→540Hz |

### Onde já está plugado
- `Interacoes.jsx`: `success/error` em todas as 8 funções de `verificar()`;
  `flip` no flashcard; `xp` no "Sei essa"; `success` no fim do deck.
- `Missao.jsx`: `step` no stepper e botões; `complete` ao finalizar;
  `level` se o XP fez subir de nível.
- `Onboarding.jsx`: `step` ao avançar passo; `streak` ao concluir.
- `HomePage.jsx`: `click` em "Continuar missão" e "Começar".
- `TopMenu.jsx`: ícone Volume2/VolumeX ao lado do toggle de fonte —
  `alternarSom()` toca `toggle` antes de mutar (pra confirmar).
- `Perfil.jsx`: botão "Ligar/Desligar sons" na seção Acessibilidade.

### API pra quem for adicionar mais
```js
import Som from '@/components/subComponents/Som.jsx';

Som.tocar('success');         // toca um preset (no-op se mutado)
Som.on('click')               // helper: () => Som.tocar('click')
Som.setMuted(true);           // mute imperativo (raro — prefira alternarSom do context)
Som.setVolume(0.10);          // ajusta volume mestre 0–1 (default 0.18)
```

Adicionar um preset novo: edite `PRESETS` em `Som.jsx`. Cada preset chama
`nota(...)` (oscilador com envelope) e/ou `noise(...)`. Encadeie com `setTimeout`
pra sequência.

### Por que sintetizado e não MP3?
- Bundle. Som de qualidade decente em MP3 são 5–30KB cada × 10 presets = ~200KB.
- Licenciamento. Zero risco — som não-derivativo.
- Latência. Web Audio dispara em <10ms; `<audio>` tag costuma ter 50–150ms.
- Customização. Para mudar a "voz sonora" da marca basta editar `freq/dur` — não
  precisa de software de edição de áudio.

## 6.5. TOAST GLOBAL de troféus (v5)

`components/subComponents/Toast.jsx` — sistema de banner animado no topo da
tela, abaixo do `TopMenu`. Plugado via `ToastProvider` que envolve o
`AppProviderInner`, então qualquer componente pode disparar toasts.

### Quando aparece um troféu
1. **No boot do app** — `GlobalVar.tickDia()` reavalia troféus de ofensiva
   (`avaliarTrofeus`) toda vez que o app abre. Se o streak chegou a um marco
   (3/7/14/30/60/100/180/365 dias) e o troféu correspondente ainda não foi
   ganho, o toast aparece automaticamente 1s após o boot (tempo pra UI montar
   e o autoplay do áudio destravar).
2. **Após concluir uma missão** — a tela de **celebração** mostra a lista de
   troféus novos com badge ouro grande + nome + descrição (lê do retorno de
   `concluirMissao`, não do array completo — bug do `slice(-2)` corrigido).

### Bug crítico corrigido (v5)
Antes a celebração mostrava os "últimos 2 troféus do array de progresso", o
que dava falso positivo (troféus antigos aparecendo como novos). Agora:
- `GlobalVar.concluirMissao` retorna `{ progresso, trofeusNovos, subiuNivel }`.
- `GlobalVar.tickDia` também retorna `{ progresso, trofeusNovos }`.
- Diff exato: `ganhos.filter(g => !jaTinha.has(g))`.

### Detecção que sobrevive ao StrictMode
Em dev, React 18 + StrictMode invoca `useState(init)` 2× por mount. O 1º init
persiste os troféus novos em `localStorage`. O 2º init lê de volta com os
troféus já incluídos → `trofeusNovos: []`.

Solução: `_bootResult` é um **module-level singleton**. O 1º `tickDia` cacheia
o resultado; chamadas subsequentes retornam o cache. Garante 1 dispatch só.

### API pra quem for usar
```js
const { mostrar, mostrarTrofeu, dispensar } = useToast();
mostrarTrofeu('ofensiva-7');                    // resolve nome+desc do TROFEUS
mostrar({                                       // forma livre
  kicker: 'Tudo certo',
  titulo: 'Backup feito',
  descricao: 'Seu progresso foi exportado.',
  variante: 'info',                             // | 'aviso'
  icone: 'xp',                                  // | 'trofeu' | 'streak'
  duracao: 4000                                 // ms (default 5000)
});
```

Também exposto via `useApp().toast.mostrar(...)` pra comodidade.

### Som integrado
- Troféu/streak → `Som.tocar('streak')` (sino)
- Variante "aviso" → `Som.tocar('error')`
- Ícone "xp" → `Som.tocar('xp')` (shimmer)

## 6.6. v6 — Fluxo AAA + 7 jogos novos (sem voz)

Inspirado em Duolingo/Brilliant/Memrise, **sem nada que dependa de microfone ou
áudio do usuário** (regra do dono). Tudo offline, mobile-first, com fallback de
teclado/click pra alternativas a drag puro.

### Os 7 tipos novos

| tipo | proposta | payload-chave |
|---|---|---|
| `time_pressure`  | decida em N segundos (timer ring SVG anel + 2 opções) — ótimo pra Segurança | `{ segundos, cenario, prompt, opcoes:[a,b], resposta }` |
| `quick_combo`    | 5 perguntas rápidas em sequência sem sair da tela — cria ritmo Duolingo | `{ xpPorAcerto, perguntas:[{prompt,opcoes,resposta}] }` |
| `memory_pairs`   | jogo da memória virar cartas (termo↔uso real, não definição) | `{ pares:[{a,b}] }` |
| `transform`      | input + checklist de critérios (frase informal→formal, senha fraca→forte) | `{ base?, criterios:[{label, regex\|minLen\|maxLen\|contem\|naoContem}] }` |
| `calc_live`      | sliders ajustar até bater meta (juros, desconto, ratio) | `{ variaveis:[{id,label,min,max,step,init,sufixo}], formula:'x*y/100', meta, tolerancia }` |
| `scenario_branch`| escolha sua aventura (2-3 nós + finais bom/ruim) | `{ inicio, totalCenas, nodos:{ id:{ narrativa, opcoes:[{txt,prox}], final?:{titulo,texto,bom} } } }` |
| `drag_zones`     | categorizar itens em N pastas (click-to-zone, sem drag real — a11y) | `{ zonas:[{id,titulo,desc}], itens:[{txt,zona}] }` |

### Fluxo AAA (recomendação de ordem das interações)

Estrutura testada na missão `mob-pix-7` (golpes do PIX), agora a missão âncora:

```
1. Abertura — gancho (quote/stats no aula.blocos)
2. Aula leve (2-3 blocos: stats, do_dont)
3. ETAPA "JOGAR" — interacoes[] na ordem:
   ├─ time_pressure    ← decide em 10s pra criar adrenalina
   ├─ hotspot          ← clicar no lugar certo da tela simulada
   ├─ find_error       ← caçar sinais de fraude num texto
   ├─ quick_combo      ← 5 perguntas rápidas pra fixar
   ├─ drag_zones       ← categorizar (fraude / suspeito / ok)
   ├─ memory_pairs     ← pares termo ↔ uso real
   └─ scenario_branch  ← decisão real ramificada
4. Prática (checklist)
5. Desafio (cenário + evidência)
6. Validação
```

Cada interação tem som dedicado (`success`/`error`/`step`/`flip`/`xp`).
XP bônus acumulado por interação correta (+5 a +20 dependendo do esforço).

### Vitrine pra você ver funcionando

Acesse `/missao/mob-pix/7` no app. A missão "Os 5 golpes de PIX mais comuns"
agora roda o fluxo AAA completo: abertura quote → stats → do_dont → 7
interações encadeadas → prática → desafio.

### Por que SEM voz

Decisão do dono (Rafael, 2026-05-25). Web Speech API tem cobertura desigual
(Safari iOS limita, Firefox não suporta bem), e privacidade do microfone gera
fricção em usuários 60+. Em vez disso, todos os jogos de Inglês usam
flashcards, fill_blank, drag_match e quick_combo — funciona em qualquer device,
sem permissão.

## 6.8. v7 — AppShell + 5 telas novas + HomePage rica + Troféus tier

### Arquitetura
- **`components/AppShell.jsx`** — wrapper sidebar 260px + `<main>` + bottom-nav mobile + FAB Aa.
  Substitui o antigo `TopMenu`/`Rodape` (esses componentes ainda existem mas não são usados).
- Sidebar tem **Aprender** (Início/Módulos/Agenda/Mentor/Perfil) e **Mais** (Troféus/Diário/Anatomia/Configurações).
- User card no rodapé da sidebar (avatar + nome + nível + XP).
- Bottom-nav mobile (<880px) com 5 itens.
- FAB `Aa` cicla `fontStep` 0→1→2→0 (17/19/21px) — alternativa rápida ao slider em Configurações.
- Routes novas: `/agenda`, `/mentor`, `/diario`, `/anatomia`, `/configuracoes`.

### Telas novas

| Rota | Componente | O que faz |
|---|---|---|
| `/agenda` | `screens/Agenda.jsx` | Heatmap 56 dias (8×7) lido de `progresso.atividadePorDia`. Próximas missões (auto-sugerida a partir do `proximaMissao`). Recordes pessoais. |
| `/mentor` | `screens/Mentor.jsx` | Inbox 2-col (lista + detalhe) com seed dinâmica do Carlos Mendes via `GlobalVar.seedMentorInbox`. Status `new/read/replied` com cor própria. Badge "1" no menu. |
| `/diario` | `screens/Diario.jsx` | Composer (title + body) → `addDiario`. Lista cronológica com tempo relativo. **Export `.md`** via `exportarDiarioMD`. |
| `/anatomia` | `screens/Anatomia.jsx` | Diagrama vertical Módulo → Trilha → Missão → 4 etapas (cards conectados por chevrons). Regras de XP/ofensiva/troféus/nível. "Onde está cada coisa". |
| `/configuracoes` | `screens/Configuracoes.jsx` | Fonte (slider 0-2), Alto contraste (toggle), Audiência (segmented jovem/adulto/mix), Som (toggle), Export/Import JSON, Reset. |

### HomePage rica (9 blocos)

Refeita do zero seguindo `proto-screens.jsx#ScreenHome`:

1. **Hello + stamps** — saudação + streak pill + level stamp (sealed letter).
2. **Mystery Box** (gradient navy/honey) — Caixa do Dia 1×/dia, reforço intermitente (8 recompensas com peso: XP/escudo/×2/troféu raro/+1 streak/dica).
3. **XP card** com seal letter gigante do nível.
4. **Missão de hoje** — `proximaMissao()` em card destaque com CTA.
5. **Desafio da semana** — sage gradient, progress bar 5 missões.
6. **Quase lá** — top-3 troféus em progresso (top da lista).
7. **Quick chips** — 6 atalhos (Módulos/Agenda/Mentor[badge]/Diário/Troféus/Anatomia).
8. **Two-col** — Sua semana (weekstrip 7 dias lendo `atividadePorDia`) + Desafio relâmpago (sim_chat curto inline).
9. **Atividade recente** — timeline das últimas 4 ações de `atividadeRecente`.

### Troféus v8 (tiers + estados + categorias)

Esquema novo em `data/estrutura.js`:
- Cada troféu ganhou `tier`: `bronze | silver | gold | diamond | mythic`.
- Função `progressoTrofeu(t, progress)` calcula 0-100 pra qualquer regra (missoes/streak/trilha/trilhas/modulo/modulos).
- Tela `screens/Trofeus.jsx` agora tem:
  - **Hero** com contagem + barra geral.
  - **Filtros** (Todos / Conquistados / Quase lá).
  - **Grid** de cards com **medalha colorida por tier** (gradientes), tier-tag no canto, badge "novo" pros 3 últimos.
  - **Estado close** (≥60%) com border coral + barra de progresso + "X% faltam Y%".
  - **Estado locked** opacidade reduzida.
  - **Categorias** agrupadas (Marcos, Ofensiva, Domínio, Especial, Inglês) com contagem `feitos/total`.

### Mystery Box

- Persiste último dia aberto em `progresso.caixaDoDiaUltima`.
- 8 recompensas com peso (`BOX_REWARDS` em `GlobalVar.abrirCaixaDoDia`).
- Som conforme tier: `level` (legendary), `streak` (epic), `xp` (common).
- Botão desabilitado se já abriu hoje.

### Mentor virtual (Carlos Mendes)

- 3 mensagens seed na primeira execução (`tickDia` chama `seedMentorInbox`).
- Status: `new` (badge coral) / `read` (cinza) / `replied` (opacidade reduzida).
- Abrir uma mensagem `new` auto-marca como `read` (badge no menu zera).
- Próximo passo (não implementado): mensagens dinâmicas baseadas em progresso (ex: "Você ficou 2 dias parado").

### Configurações expandidas

- `fontStep` substitui o antigo `fonteGrande` (mantido para retro-compat).
- `altoContraste` aplica `:root[data-contrast="high"]` que troca a paleta inteira pra papel-claro/tinta-preta.
- `audiencia` (`jovem/adulto/mix`) ainda não muda copy — base preparada pra próxima onda.

## 6.7. Fix de layout v6

- **Onboarding passo 3** (5 cards de módulo) — antes `grid-template-columns:
  repeat(5, 1fr)` apertava no tablet (768px → 5 cards de ~120px = ilegível) e
  estourava no mobile. Agora `repeat(auto-fill, minmax(140px, 1fr))` com
  fallback `repeat(2, 1fr)` <600px e `1fr` <380px.
- **Rodapé estreito** (bug do `<footer>` com `.wrap` interno) — refatorado
  pra usar `<div>` interno com `max-width: 1180px; margin: 0 auto`. Agora ocupa
  100% da largura como esperado.
- **Overflow horizontal global** — `html, body, #root { overflow-x: hidden }`
  evita scroll lateral em qualquer tela.
- **`.containerPrincipal`** com `align-items: stretch` pra o footer puxar 100%.

## 6.8. Visual Inspector estendido (v3 + v5)

`screenshot_responsive` ganhou suporte a:
- `outDir`         — salva os PNGs em disco (não retorna base64 gigante).
- `fullPage`       — captura a página inteira.
- `label`          — prefixo do nome do arquivo.
- `localStorage`, `cookies`, `headers`, `storage`, `sessionId`, `noCache` —
  permite capturar telas autenticadas/com estado (essencial pra ver as telas
  pós-onboarding, como Home, Missão, etc).

Arquivo alterado: `visual-inspectorBackEnd/src/tools/design.js`
(função `screenshot_responsive`). Restart do `api-server.js` necessário.

## 7. O que ainda falta (para próxima IA)

### Curto prazo
1. ~~**Exercícios interativos `interacoes[]`**~~ ✅ **FEITO em v3** — 11 tipos (choose,
   multi, true_false, fill_blank, drag_match, sort_order, find_error, hotspot, flashcard,
   sim_planilha, sim_chat). Etapa "Jogar" entre Aula e Prática quando a missão tem
   interações. Próximo passo: **popular `interacoes[]` em todas as 225 missões**, hoje só
   3 têm (vitrine). Use `data/conteudo/_interacoes-exemplo.js` como referência.
2. **Mais sinal de progresso na ofensiva**: lembrar do escudo no boot (`OFENSIVA.escudo.ganhaACada`),
   tela cheia de marcos (3/7/14/30/60/100/180/365).
3. **Trilha bloqueada por pré-requisito**: hoje só travamos por sequência dentro da trilha
   (próxima após a feita). O guia sugere também trilhas com dependência inter-trilha (ver
   `aboutproject/MELHORIAS.md`).
4. **Aumentar/diminuir fonte na própria missão** via gesto/atalho — hoje fica no Perfil/Top.
5. **Persistir filtro de vertente** (ver `data/estrutura.js`: `vertente` `computador|celular|ambos|ingles`).

### Médio prazo
6. **Conteúdo rico para tudo** que `trilhaTemConteudo` retorna `false`. Veja
   `data/conteudo/index.js` para a lista. `Missao.jsx` já tem um **fallback genérico** caso o
   conteúdo da missão ainda não exista, mas o ideal é nunca cair nele.
7. **Auditoria visual** rodando `audit_senior_readability` + `audit_pwa` do Visual Inspector
   no app servido em `http://localhost:5173`.
8. **Tooltip / popover do glossário** — palavras do `vocabulario` poderiam aparecer
   destacadas dentro do texto da Aula.

### Backend (opcional, ver `BACKEND.md`)
- Hoje 100% front. O `GlobalVar.exportarJSON()/importarJSON()` cobre multi-aparelho via
  arquivo. Sync em nuvem é só ligar.

## 8. Decisões importantes (e por quê)

- **CSS puro em vez de Tailwind:** o README do projeto sugere Tailwind, mas o `DevProfile.md`
  do Rafael define explicitamente vanilla CSS com tokens em `:root`. O DevProfile manda — e
  o guia de identidade também usa CSS puro. Ganho: zero build pra estilos, e o `:root` do
  guia colado tal e qual no `colors.css`.
- **Sem TypeScript:** `DevProfile.md` proíbe salvo pedido explícito.
- **Cópia de `data/` para `app/src/data/`:** Vite só serve dentro da raiz do projeto. Para
  evitar `publicDir`/`fs.allow` hacks, copiamos. Sincronize quando mudar conteúdo.
- **`ativaResp` ao invés de só CSS responsivo:** padrão Rafael — vai propagado pra todos os
  componentes; `TopMenu` usa pra alternar entre nav pill + ícone de hambúrguer.
- **Fallback genérico em `Missao.jsx`:** evita tela quebrada se uma trilha sem conteúdo for
  acessada (o guard do `TrilhaDetail` já bloqueia, mas defesa em profundidade).

## 9. Mapa de arquivos

```
escritorio-virtual/app/
├── .claude/launch.json
├── package.json · vite.config.js · index.html
├── public/
│   ├── manifest.json · service-worker.js
│   └── icons/icon-{72…512}.png
└── src/
    ├── index.jsx           ← createRoot + StrictMode
    ├── App.jsx             ← wrapper mínimo
    ├── routes.jsx          ← BrowserRouter + ativaResp + GuardaOnboarding
    ├── assets/css/
    │   ├── colors.css      ← TODOS os tokens do guia (cole-aqui)
    │   ├── fonts.css       ← reset tipográfico + foco visível
    │   ├── Principais.css  ← .containerPrincipal, .wrap, .panel, .btn-*, .chip, .progress
    │   ├── scrollbar.css   ← scrollbar paper-themed
    │   ├── TopMenu.css     ← header sticky + lateral mobile
    │   ├── Onboarding.css  ← passos do bem-vindo
    │   ├── HomePage.css    ← hero, streak-card, missao-dia, modulos-quick
    │   └── Missao.css      ← stepper 4 etapas, blocos, validação, celebração
    ├── components/
    │   ├── TopMenu.jsx · Rodape.jsx
    │   ├── AulaRica.jsx       ← v3: 9 blocos editoriais (callout, do_dont, versus, timeline, quote, stats, atalho, aula_steps, paragrafo)
    │   ├── Interacoes.jsx     ← v3: motor de 11 tipos de exercício/mini-jogo
    │   ├── AppShell.jsx       ← v7: sidebar 260px + bottom-nav mobile + FAB fonte
    │   ├── subComponents/
    │   │   ├── GlobalVar.jsx   ← v7: + atividadePorDia, mentorInbox, diario, agenda, recordes, mystery box
    │   │   ├── AppContext.jsx  ← v7: + abrirCaixaDoDia, podeAbrirCaixa, addDiario, setPreferencia, alternarFonte (cicla 0→1→2)
    │   │   ├── Som.jsx         ← v4: motor Web Audio sintetizado (10 presets)
    │   │   ├── Toast.jsx       ← v5: banner global de troféus + useToast()
    │   │   ├── Marca.jsx       ← logo xícara+livro com vapor (lockup)
    │   │   └── Icone.jsx       ← mapa iconeNome → lucide
    │   └── screens/
    │       ├── Onboarding.jsx
    │       ├── HomePage.jsx       ← v7 rica: hello+stamps, mystery box, XP card, missão dia, week challenge, quase lá, quick chips, weekstrip, lightning, atividade
    │       ├── Modulos.jsx
    │       ├── Trilhas.jsx        ← lista de trilhas do módulo
    │       ├── TrilhaDetail.jsx   ← lista de missões da trilha
    │       ├── Missao.jsx         ← 4 etapas + Jogar + celebração
    │       ├── Agenda.jsx         ← v7: heatmap 8x7 + próximas + recordes
    │       ├── Mentor.jsx         ← v7: inbox Carlos Mendes
    │       ├── Diario.jsx         ← v7: anotações + composer + export .md
    │       ├── Anatomia.jsx       ← v7: diagrama hierarquia + regras
    │       ├── Configuracoes.jsx  ← v7: fonte/contraste/audiência/som/dados/reset
    │       ├── Trofeus.jsx        ← v8: tiers + categorias + filtros + estados
    │       └── Perfil.jsx
    └── data/                ← cópia espelho de escritorio-virtual/data/
        ├── estrutura.js
        └── conteudo/{*.js,index.js}
```

## 10. Aderência ao guia de identidade — checklist

- [x] Paleta: `paper #F2EBDD`, `ink #1A2540`, `coral #E25B3F`, `honey #D49545`, `sage`,
      `streak #E07A3A`, módulos coloridos (navy/sky/coral/sage/plum).
- [x] Tipografia: Fraunces (display) + Plus Jakarta Sans (body) + JetBrains Mono (mono).
      Carregadas via `<link>` do Google Fonts no `index.html`.
- [x] Escala: corpo 17px mínimo; H1 clamp 36–88px com tracking -2.5%.
- [x] Raios: tokens `--r-xs/sm/md/lg/xl/pill` — pills só em chips e streak.
- [x] Sombras: 3 níveis (`sh-1` em cards estáticos, `sh-2` em hover, `sh-3` em modais/celebração).
- [x] Motion: 120/220/480 ms · cubic-bezier(.2,.8,.2,1). `prefers-reduced-motion` honrado.
- [x] Acessibilidade dual-idade: corpo 17px (19px modo grande); contraste alvo WCAG AA;
      alvos ≥ 44px (`.btn min-height: 44px`); foco visível honey 3px.
- [x] Marca: lockup oficial (xícara + livro + duas aspas no vapor) em `Marca.jsx`.
- [x] Voz: microcopy direto, adulto, sem "fácil"/"simples"/"campeão". Stepper diz
      "Aula · Prática · Desafio · Validação". Reset usa `confirm()` com aviso real.
