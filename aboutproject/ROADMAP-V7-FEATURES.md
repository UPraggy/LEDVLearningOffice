# ROADMAP v7 — Features faltantes (sidebar, mentor, agenda, diário, anatomia, caixa do dia…)

> Última atualização: 2026-05-25.
> Foco: trazer **todas** as funcionalidades do `IdentidadeVisual/prototipo.html` (+ ideias bônus inspiradas em Awwwards, Duolingo, Memrise, Busuu, Exercism, LeetCode, Codewars, Brilliant) pro app real.
> Referências de código: `IdentidadeVisual/proto-screens.jsx`, `IdentidadeVisual/proto-data.jsx`, `IdentidadeVisual/prototipo.html`, `IdentidadeVisual/componentes.html`.

## O que falta vs. o que já existe

| Feature | Estado | Onde fica |
|---|---|---|
| **Sidebar fixa esquerda** (260px) com agrupamento Aprender/Mais + user card | ❌ falta | substitui TopMenu horizontal |
| **Bottom-nav mobile** (<880px) | ❌ falta | aparece no lugar da sidebar |
| **Botão fonte flutuante (FAB Aa)** | ❌ falta | canto inferior esquerdo |
| **HomePage rica:** Caixa do Dia (mystery box), card XP+seal, missão do dia destaque, desafio da semana, "Quase lá", quick chips, mini-semana, desafio relâmpago, atividade recente | parcial (só hero+missão dia) | substitui HomePage atual |
| **Agenda** — heatmap 8 semanas + próximas missões + recordes | ❌ falta | `/agenda` |
| **Caixa do Mentor** — inbox estilo email + detalhe + Carlos Mendes virtual | ❌ falta | `/mentor` |
| **Diário** — anotações pessoais + composer + export `.md` | ❌ falta | `/diario` |
| **Anatomia** — explicação visual da hierarquia Módulo→Trilha→Missão→4 etapas | ❌ falta | `/anatomia` |
| **Configurações expandidas** — fontStep 3 níveis (slider), alto contraste, audiência (jovem/adulto/mix), reset, export, mute som | parcial (só fonte/som/export) | substitui Perfil > Acessibilidade |
| **Mystery box** + reforço intermitente (caixa diária) | ❌ falta | `/` |
| **Desafio relâmpago** (2 min na home) | ❌ falta | `/` |
| **Desafio da semana** (5 missões até domingo + troféu) | ❌ falta | `/` |
| **"Quase lá"** — 3 troféus em ~75%+ | ❌ falta | `/` |
| **Atividade recente** (timeline últimas 4 ações) | ❌ falta | `/` |
| **Heatmap mini de 7 dias** na home | ❌ falta | `/` |
| **Troféus refeitos** com categorias + tiers (bronze/silver/gold/diamond/mythic) + estados (done/new/close/locked/secret) | parcial (tem listagem básica) | revisar `/trofeus` |
| **Hierarquia visual de medalhas** (cores por tier) | ❌ falta | tela troféus |
| **Onboarding com perfil de audiência (jovem/adulto/mix) e tom de voz** | parcial | revisar `/bem-vindo` |
| **Tela de celebração rica pós-missão** (com seal level + troféus novos + XP animado) | parcial | revisar |
| **Nível de carreira completo** (Estagiário→Coordenador, badge letter) | parcial | dashboard |

## Bônus (inspirações citadas pelo usuário)

| Feature | Inspiração | Onde |
|---|---|---|
| **Streak freeze** (escudo) consumível visível | Duolingo | top bar |
| **Spaced repetition deck** (cartas de inglês com SR) | Memrise | nova tela `/revisao` |
| **Daily quiz** ranking pessoal (não competitivo) | Busuu | home |
| **Kata diário** (mini-desafio multi-tentativa) | Codewars | home/agenda |
| **Code-like missions** (puzzle de lógica progressivo) | Exercism / LeetCode lite | módulo Mercado/Excel |
| **Interactive scrollytelling** (aula com manipulação direta) | Brilliant | aula avançada |
| **Color palette por tier** com gradientes ricos | Awwwards / Behance | medalhas troféus |
| **Cards com motion sutil** (hover lift, parallax leve) | Awwwards | módulos |

## Plano de implementação em ONDAS (commitar a cada onda)

### Onda 1 — Esqueleto novo (Sidebar + roteamento)
- `Sidebar.jsx` fixa 260px à esquerda (Aprender: Início/Módulos/Agenda/Mentor/Perfil · Mais: Troféus/Diário/Anatomia/Configurações)
- `BottomNav.jsx` mobile (<880px): Início/Módulos/Agenda/Mentor/Perfil
- `AppShell.jsx` wrapper grid `260px 1fr` que cada screen usa em vez de TopMenu
- Routes novas: `/agenda`, `/mentor`, `/diario`, `/anatomia`, `/configuracoes`
- FAB de fonte flutuante (`Aa` no canto)
- Mover `TopMenu` (deletar uso)
- **Doc: marcar onda 1 OK no ROADMAP**

### Onda 2 — HomePage v2 (rica)
- Mystery box (Caixa do Dia) — dispara 1x por dia, persiste em `progresso.caixaDoDiaUltima`
- Card XP grande com seal letter do nível
- Desafio da semana (semana ativa configurável)
- Quase lá (top-3 troféus em progresso ≥60%)
- Quick chips (6 atalhos)
- Sua semana (mini heatmap 7 dias do localStorage)
- Desafio relâmpago (2 min — sim_chat curto inline)
- Atividade recente (timeline últimas 4 ações)
- **Doc: marcar onda 2 OK**

### Onda 3 — Agenda
- Heatmap 8x7 (56 dias) com 4 níveis de intensidade derivados de `atividadePorDia` no localStorage
- "Próximas missões agendadas" (lista — pode iniciar mock até ter agendamento real)
- Recordes pessoais (maior ofensiva, missões num dia, XP num dia)
- **Doc: onda 3 OK**

### Onda 4 — Mentor
- `MENTOR_INBOX` — lista de mensagens do Carlos Mendes (mock dinâmica)
- 3 status visuais: new / read / replied
- Tela detalhe com avatar + corpo expandido + 2 CTAs (Ir pra missão / Responder)
- Badge "1" no menu lateral se houver não-lida
- Geração dinâmica: 1 nova msg/dia baseada no progresso (depois)
- **Doc: onda 4 OK**

### Onda 5 — Diário
- Lista de anotações + composer (title + body)
- Persistência em `progresso.diario[]`
- Export `.md` com download
- **Doc: onda 5 OK**

### Onda 6 — Anatomia
- Tela educativa com diagrama Módulo→Trilha→Missão→4 etapas
- Cards conectados por setas
- Tabelas/regras de XP, ofensiva, troféus, nível de carreira
- "Onde está cada coisa" — guia de navegação
- **Doc: onda 6 OK**

### Onda 7 — Configurações expandidas
- 3 níveis de fonte (slider)
- Alto contraste (toggle + override de tokens CSS)
- Audiência (jovem / adulto / mix) afeta saudação e tom
- Mute som + Limpar evidências + Reset com confirmação
- **Doc: onda 7 OK**

### Onda 8 — Troféus refeitos (tiers + estados + categorias)
- Medalhas com gradientes por tier
- 5 categorias (Ofensiva, Maratona, Domínio, Inglês, Combo/Perfeição, Horário, Mentor, Secretos)
- Estados: done, new (banner), close (75%+), locked, secret
- Cards com requisito visível ("falta X")
- **Doc: onda 8 OK**

### Onda 9 — Bônus (último)
- Streak freeze visual (escudo)
- Spaced repetition deck (Inglês)
- Desafio relâmpago variantes
- Kata diário
- **Doc: onda 9 OK**

## Progresso

- [x] **Onda 1** — Sidebar + AppShell + nova navegação (commit/branch v7-shell)
- [x] **Onda 2** — HomePage v2 (mystery box, weekly challenge, near, quick, weekstrip, lightning, activity)
- [x] **Onda 3** — Agenda
- [x] **Onda 4** — Mentor
- [x] **Onda 5** — Diário
- [x] **Onda 6** — Anatomia
- [x] **Onda 7** — Configurações expandidas
- [x] **Onda 8** — Troféus refeitos (tiers + estados + filtros + categorias)
- [x] **Onda 9** — Bônus (streak freeze visual, SRS, kata, **modo arcade**, notificações, +5 missões interativas)
- [x] **v10** — fix const, scroll-to-top, paleta expandida, troféus c/ ícones SVG únicos, gradientes por módulo, Piper TTS doc
- [x] **v11** — **Piper TTS Cadu offline IMPLEMENTADO** (60 MB ONNX baixado e empacotado em public/piper/)

### v10 — Finalização (2026-05-25)

**Bugs corrigidos**
- `const parcial` → `let parcial` em `concluirMissao` (causava warning Vite).
- Scroll começava no fim em algumas rotas → `<ScrollToTop />` em routes.jsx rola pro topo a cada `pathname` change.

**Console errors** — varredura via VI tool nova `audit_console_errors` em todas 13 rotas: **0 erros, 0 warnings, 0 page errors, 0 failed requests**.

**Paleta expandida**
- Vinho `#5C1F2D`, Marsala `#964F4C`, Magenta `#C73E7C`, Roxo `#6B2C5E`, Ouro rosa `#D4A574`.
- Variações tonais por módulo (3 tons cada): `--comp-base/soft/deep`, `--cel-*`, `--merc-*`, `--seg-*`, `--ing-*`.

**Troféus refeitos com ícones únicos**
- Cada troféu tem `mod` (cor visual) + `icon` (nome do SVG).
- `subComponents/TrofeuIcone.jsx` — 35 SVGs únicos (rocket, flame, spark, campfire, fire, volcano, infinity, medal, flag, crown, trending, desktop, compass, document, cloud, video, sheet, briefcase, phone, chat, banknote, key, heart, map, camera, mail, shield, magnify, book, globe, mic, penta).
- Medalha colorida por gradiente do módulo + halo animado pra tiers diamond/mythic.
- Layout grid auto-fill minmax(200px) — sem overflow.
- Troféus específicos por trilha: agora há 1 troféu pra cada uma das principais (8 do PC + 7 do Celular + 2 da Segurança + 3 do Mercado + 5 do Inglês = 25 só de domínio). Total = 35+ troféus.

**Notificações locais (front-only)** — `subComponents/Notifica.jsx`
- API: `pedirPermissao`, `mostrar`, `agendar`, `cancelar`, `lembreteDiario`, `reativarPendentes`.
- Usa `serviceWorker.showNotification` — funciona com aba fechada se PWA instalado.
- UI em Configurações: toggle + input de hora.

**Modo Arcade Diário** — `screens/Arcade.jsx`
- 3 mini-jogos encadeados sorteados determinísticos por dia.
- 3 tipos: `decida_rapido`, `acha_o_erro`, `verdade_mito`.
- Pool em `data/arcade-pool.js` — 15+ perguntas.
- Card destacado na Home (`.arcade-card` com border-left streak).
- Popup convite flutuante 1×/dia se não fez (`.arcade-invite`).
- +40 XP no fim, marca `progresso.modoArcade[hoje]`.
- Sidebar: nova entrada "Arcade Diário".

**5 missões com interações AAA**: pc-excel-12 (PROCV), amb-seg-4 (phishing), mob-wpp-4 (etiqueta), pc-ia-2 (prompt), en-a1-rotina-6 (rotina).

**Entregue separado**: `aboutproject/PIPER-TTS-OFFLINE.md` — código completo de TTS offline com Piper Cadu para outro projeto (10 seções: arquivos, deps, vite.config, SW cache, hook useVoiceSynthesis, componente BotaoVoz, integração em AulaRica, limitações por browser, custos reais, recomendação prática).

### v11 — Piper TTS Cadu implementado (2026-05-26)

**Arquivos baixados** (em `app/public/piper/`):
- `cadu.onnx` — 60 MB, modelo ONNX (rhasspy/piper-voices · pt_BR/cadu/medium)
- `cadu.onnx.json` — 5 KB, config com `phoneme_id_map` (161 fonemas IPA)

**Pacotes**: `onnxruntime-web@1.18.0` adicionado em `package.json`.

**Arquitetura**:
```
src/
├── lib/pt-g2p.js              ← Grapheme-to-Phoneme PT-BR (dicionário + regras)
├── hooks/useVoiceSynthesis.js ← Hook que carrega o modelo lazy + cacheia em escopo de módulo
└── components/subComponents/
    └── BotaoVoz.jsx           ← Botão pílula com ícone (Volume2 / Square / Loader)
```

**G2P PT-BR** (`pt-g2p.js`) — implementação caseira pra evitar `espeak-ng` (que precisaria de mais 3 MB de WASM):
- **Dicionário** de ~100 palavras comuns com pronúncia conhecida (`olá`, `obrigado`, `escritório`, `missão`, `família`, `PIX`, etc) — produz IPA com stress correto.
- **Regras fonéticas** pra palavras fora do dicionário:
  - Dígrafos: `lh→ʎ`, `nh→ɲ`, `ch→ʃ`, `rr→ʁ`, `qu→k`, `gu→g`
  - Nasalização: `am/an→ɐ̃`, `em/en→ẽ`, `om/on→õ`, `um/un→ũ`
  - `r` entre vogais → `ɾ`, no início → `ʁ`
  - `c` antes de e/i → `s`, senão `k`
  - `g` antes de e/i → `ʒ`
  - Palatalização: `di→dʒi`, `ti→tʃi`
  - `l` final → `w` (velarização brasileira)
- Cada caractere IPA mapeia pra `phoneme_id_map[char][0]` do config.

**Hook `useVoiceSynthesis`**:
- `loadModel()` cacheado em singleton (1× por sessão). ~3-5s no primeiro load.
- `speak(texto)` — sintetiza e toca via Web Audio API.
- `parar()` — interrompe áudio em andamento.
- Honra `prefers-reduced-motion` (não fala).
- **Fallback automático**: se `cadu.onnx` falhar ao carregar ou inferência der erro, cai pro `speechSynthesis` (voz do sistema). Usuário nunca fica sem áudio.

**Onde aparece o botão "Ouvir"**:
- `AulaRica.jsx` — botão grande "Ouvir aula completa" no topo + botão pequeno ao lado do título do conceito.
- `Mentor.jsx` — botão compacto ao lado do título de cada mensagem do Carlos Mendes.
- `Configurações > Voz` — botão "Baixar voz agora" (1× cacheia tudo) + "Testar voz".

**Vite config** atualizado:
- `optimizeDeps.exclude: ['onnxruntime-web']` — evita pré-bundle do WASM.
- `assetsInlineLimit: 0` — não inline o `.onnx`.
- `manualChunks` separa **ort** em chunk próprio (134 KB gzip).
- Headers Cross-Origin-Isolation pra threads WASM.

**Service Worker** — cache separado `escritorio-piper-v1` com estratégia stale-while-revalidate. Primeiro load baixa 60 MB; depois funciona offline. Não interfere com cache do app principal.

**Build final v11**:
- 1666 módulos, 91.7 KB CSS, **16.10 KB CSS gzip**
- Chunks: `ort` 134 KB gzip · `index` 319 KB gzip · `react` 52 KB · `icons` 7 KB · `router` 2 KB
- **Total JS gzip**: ~515 KB (vs 376 KB antes — ORT adicionou ~140 KB)
- **0 errors / 0 warnings** em /configuracoes

### Status final

- 1666 módulos compilados, **16.10KB CSS gzip / 515KB JS gzip (incl. ORT)**
- 0 erros / 0 warnings em todas as 13+ rotas (sweep via VI)
- 17 telas funcionais (incl. Arcade, Revisao, Kata)
- 35+ troféus com ícones SVG únicos
- Modo Arcade, SRS, Kata, Notificações locais, Mystery Box, Mentor inbox dinâmico, Diário, Anatomia, Configurações expandidas, Toast global, Sons sintetizados, 18 tipos de interação, AulaRica 9 blocos editoriais.

### Resumo v7 implementado (2026-05-25)

| Onda | O que entregou | Validação |
|---|---|---|
| 1 | `AppShell` (sidebar 260px + bottom-nav + FAB Aa + main) | `validation-v7/v7_home_desktop.png` (sidebar Aprender/Mais + user card) |
| 2 | HomePage rica: hello+stamps, mystery box, XP card, missão do dia, week challenge, quase lá, 6 quick chips, weekstrip, lightning, atividade | `v7_home_desktop.png`, `v7_home_mobile.png` |
| 3 | Agenda (heatmap 8x7, próximas, recordes) | `v7_agenda_desktop.png` |
| 4 | Mentor (inbox + detail + Carlos Mendes seed) | `v7_mentor_desktop.png` |
| 5 | Diário (composer + lista + export .md) | `v7_diario_desktop.png` |
| 6 | Anatomia (diagrama hierarquia + regras + onde está cada coisa) | `v7_anatomia_desktop.png` |
| 7 | Configurações (fontStep slider, contraste, audiência seg, som, dados, reset) | `v7_configuracoes_desktop.png` |
| 8 | Troféus refeitos com tiers, categorias agrupadas, filtros, progresso visível | `v7b_trofeus_desktop.png` |

### Persistência adicionada em `progresso` (v7)

```js
{
  // ... campos existentes ...
  caixaDoDiaUltima: null,       // ISO da última caixa aberta
  caixaDoDiaTotal: 0,
  atividadePorDia: {},           // { 'YYYY-MM-DD': n } pra heatmap
  atividadeRecente: [],          // [{ ts, tipo, titulo, sub }] timeline
  diario: [],                    // [{ id, ts, title, body }]
  agenda: [],                    // [{ id, dataISO, hora, trilhaId, missaoId, titulo }]
  mentorInbox: [],               // [{ id, from, role, title, body, ts, status, tag, color }]
  recordes: { maiorStreak, maxMissoesDia, maxXpDia },
  preferencias: {
    // ... existentes ...
    fontStep: 0,                 // 0|1|2 (substitui fonteGrande)
    altoContraste: false,
    audiencia: 'mix',            // 'jovem'|'adulto'|'mix'
  }
}
```

### Novos APIs no AppContext

```js
const { abrirCaixaDoDia, podeAbrirCaixa,
        marcarMentorLida, addDiario, removerDiario,
        setPreferencia, toast, alternarFonte (agora cicla 0→1→2),
        // … existentes …
      } = useApp();
```

### Mudanças no GlobalVar

- `concluirMissao` agora também registra entrada em `atividadeRecente` (missão/troféus/nível) e incrementa `atividadePorDia` (alimenta heatmap).
- `tickDia` seeda `mentorInbox` se vazio.
- Novos: `abrirCaixaDoDia`, `podeAbrirCaixaHoje`, `addAtividade`, `incrementarAtividadeDia`, `seedMentorInbox`, `marcarMentorLida`, `addDiario`, `removerDiario`, `exportarDiarioMD`.

### Mudanças visuais globais

- `colors.css` ganhou `:root[data-fontstep="0|1|2"]` (cicla 17/19/21px) e `:root[data-contrast="high"]` (paleta papel-claro/tinta-preta).
- `Principais.css`: `.containerPrincipal` virou legacy — substituído por `AppShell > main.content`.
- TopMenu/Rodape **removidos do uso** (substituídos pela sidebar). Componentes ainda existem mas não são importados.

Atualizar este doc ao terminar cada onda (status + screenshot path em `validation-v7/`).
