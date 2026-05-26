# Escritório · Prompt para IA entender o design

> Cole este documento inteiro em qualquer IA de design (Claude, v0, Lovable, Figma AI,
> Cursor, etc.) antes de pedir telas, componentes ou variações. Ele carrega a
> identidade visual completa do projeto numa janela só — paleta, tipografia,
> componentes, princípios, tom de voz, restrições.

---

## 0. Contexto em 30 segundos

Escritório é uma plataforma de **qualificação digital** em formato PWA (responsivo,
funciona em celular e PC, sem backend, progresso salvo em localStorage). Ensina
quatro áreas: **Computador** (Office, e-mail, IA), **Celular** (WhatsApp, PIX,
Gov.br), **Mercado/Empregabilidade** (LinkedIn, entrevista, freelance) e
**Segurança** (golpes, senhas, vazamentos). Há um quinto módulo opcional, **Inglês**.

A metáfora central é uma carreira: o usuário começa **Estagiário** e é promovido
ao longo das missões até **Coordenador**. Conteúdo é 100% escrito, sem vídeo.

**Audiência dupla, sempre considerada lado a lado:**
- **10 anos / jovem iniciante** — atenção curta, gosta de gamificação visível, vai abandonar se for chato
- **40+ / adulto recolocando carreira** — quer respeito, fonte legível, sem infantilização, valoriza ver o "porquê"

A interface tem que servir os dois sem tropeço. O meio-termo correto é
"editorial caloroso com gamificação gentil" — não SaaS sério, não joguinho infantil.

---

## 1. Direção visual — "Escritório Caloroso"

**Mood:** caderno bonito de produtividade. Base papel/creme com tinta navy
profunda. Ritual de café da manhã estudando. Nada de gradientes neon, nada de
dashboard genérico azul-roxo, nada de mascote cartoon.

**Inspiração de craft (não de mood):**
- **Mimo / Duolingo** — gamificação que celebra progresso sem punir; lesson path
  vertical em zigue-zague; feedback imediato a cada passo.
- **Codewars / LeetCode / HackerRank** — pílulas de dificuldade visíveis;
  rank/nível de carreira; sensação técnica sem ser fria.
- **Exercism** — figura do mentor (no nosso caso, persona "Carlos Mendes,
  Coordenador" manda tarefas e dá feedback).
- **Beecrowd** — listas de problemas progressivos, organizados por categoria.

**O que NÃO copiar:** layout, ícones, mascotes, paletas ou marcas dessas
plataformas. Apenas o conceito. O resultado tem que ser inconfundivelmente
"Escritório", não um clone.

---

## 2. Tokens — paleta com papéis semânticos

```css
:root {
  /* Base · papel & tinta */
  --paper:        #F2EBDD;   /* fundo principal */
  --paper-warm:   #EDE3D0;   /* fundo de seções alternadas */
  --surface:      #FBF7EE;   /* card */
  --surface-2:    #FFFCF5;   /* card elevado */
  --ink:          #1A2540;   /* texto principal (13.4:1 sobre paper) */
  --ink-soft:     #4A5670;   /* texto secundário (6.4:1) */
  --ink-mute:     #7A8294;   /* texto de suporte (4.6:1) */
  --line:         #D9CFB8;   /* divisor */
  --line-strong:  #B5A582;   /* borda destacada */

  /* Brand · ação · módulos */
  --navy:    #1B2A4E;  /* Brand · Módulo Computador */
  --sky:     #4F7CAC;  /* Módulo Celular */
  --coral:   #E25B3F;  /* Ação primária · Módulo Mercado */
  --sage:    #4F7A55;  /* Sucesso · Módulo Segurança */
  --plum:    #6B3F7A;  /* Módulo Inglês */
  --honey:   #D49545;  /* XP · troféu */
  --streak:  #E07A3A;  /* Chama da ofensiva */

  /* Tipografia */
  --f-display: "Fraunces", Georgia, serif;
  --f-body:    "Plus Jakarta Sans", system-ui, sans-serif;
  --f-mono:    "JetBrains Mono", ui-monospace, monospace;

  /* Espaçamento base 4 */
  --s-1:4px; --s-2:8px; --s-3:12px; --s-4:16px;
  --s-5:20px; --s-6:24px; --s-7:32px; --s-8:40px;

  /* Raios · sombras · motion */
  --r-sm:10px; --r-md:14px; --r-lg:20px; --r-pill:999px;
  --sh-1: 0 1px 2px rgba(26,37,64,.06);
  --sh-2: 0 6px 14px rgba(26,37,64,.06);
  --sh-3: 0 18px 40px rgba(26,37,64,.08);
  --ease-out: cubic-bezier(.2, .8, .2, 1);
}
```

**Regras semânticas (não negociáveis):**

- **Coral é ação primária e cor do módulo Mercado**, nunca decoração. Usado
  no máximo **1 vez por tela** (CTA principal).
- **Cada módulo tem cor própria.** Computador=navy, Celular=sky, Mercado=coral,
  Segurança=sage, Inglês=plum. Use a cor do módulo em headers, badges e
  knobs de missão daquele módulo. Não invente novas atribuições.
- **Honey é exclusivo de XP, troféus e barra de progresso de nível.** Não use
  honey em CTAs, alertas ou backgrounds grandes.
- **Sage = sucesso (verde).** Streak (chama) é coral/laranja queimado, não
  vermelho.
- **Estados de erro NÃO usam vermelho-prova.** Usa coral suave com mensagem
  gentil. Texto + ícone, nunca só cor.

---

## 3. Tipografia

| Família | Função | Pesos | Onde |
|---|---|---|---|
| **Fraunces** (serif variável) | Display | 400, 500, 600 | Títulos H1–H3, gancho de aula, números grandes (XP, dias de streak), seal de troféu |
| **Plus Jakarta Sans** | Corpo / UI | 400, 500, 600, 700 | Botões, body text, labels, alerts, navegação |
| **JetBrains Mono** | Técnica | 500, 600 | Código, fórmulas Excel, atalhos de teclado, metadados (+60 XP · 8 min), kickers em CAPS |

**Escala (px / line-height):**
- H1 — 64 / 1.0 / letter-spacing -2.5% / `opsz` 144 (display optical size)
- H2 — 42 / 1.05 / -2%
- H3 — 28 / 1.15 / -1%
- H4 — 22 / 1.25 (sans, bold)
- Body L — 20 / 1.5 (uso em parágrafos importantes)
- Body — 17 / 1.6 (**MÍNIMO ABSOLUTO** em qualquer texto narrativo)
- Small — 14 / 1.45
- Mono kicker — 13 / CAPS / letter-spacing +.08–.12em

**Regra de presbiopia:** o botão flutuante "A↑A" sempre disponível leva
o body de 17 → 19 → 21px. A escala inteira sobe junto via `rem`.

---

## 4. Sistema de gamificação

**Ofensiva (streak):** chama 🔥 + número de dias. Sempre visível no header da home.
Cor `--streak`. Mensagem se está perto de perder: "Você está há X dias. Cumpra
uma missão antes de meia-noite." (sem emoji choroso, sem culpa).

**Escudo:** ícone de escudo azul. Protege 1 dia perdido automaticamente.
Mostrar disponibilidade na home discretamente.

**XP:** ganho a cada missão concluída (40 / 60 / 80 conforme dificuldade).
Soma vai pra barra de progresso de nível. Exibido como pílula `+60 XP` em
mono.

**Nível de carreira:** Estagiário → Assistente Júnior → Pleno → Analista →
Sênior → Coordenador (6 níveis). Cada um tem um "seal" — círculo coral com
a inicial, cercado por borda tracejada. Próximo nível tem progresso explícito
("260 XP para Pleno").

**Troféus:** medalhão circular dourado com ícone vetorial interno (lucide
1.8px stroke). Três estados:
- **Conquistado** — gradiente dourado, sombra interna.
- **Novo!** — badge coral rotacionada no canto superior direito.
- **Bloqueado** — cinza esmaecido com cadeado, mostra "faltam X" abaixo.

Categorias: Marcos (10/50/100 missões), Ofensiva (3/7/30/100 dias), Domínio
de trilha, Domínio de módulo, Conquistas especiais do Inglês.

**Sem ranking competitivo.** Sem leaderboard. Sem comparação com outros
usuários. Só progresso pessoal.

### 4.1 Sistema de engajamento (reforço intermitente, ético)

O sistema usa princípios de psicologia comportamental — **reforço intermitente,
quase-recompensa, variabilidade de recompensa, ancoragem de hábito** — sempre a
serviço da aprendizagem. Nunca punindo ausência.

**Caixa do dia (mystery box) · reforço intermitente:**
Toda manhã o usuário ganha 1 caixa para abrir, no topo da home. A recompensa é
**variável** (peso definido em `BOX_REWARDS`):
- Comum (~60%): +40 XP, +80 XP, dica do dia
- Rara (~26%): +150 XP, +1 Escudo
- Épica (~10%): multiplicador ×2 XP por 1h, +1 dia de ofensiva
- Lendária (~4%): troféu raro "Caixa de ouro"

Animação de "spinning" antes do reveal cria expectativa. Variabilidade gera
retorno — o usuário não sabe o que vai ganhar amanhã.

**"Quase lá!" · quase-recompensa:**
Bloco na home mostrando 3 troféus a um passo de desbloquear, com barra de
progresso e mensagem específica ("faltam 2 dias", "falta 1 missão limpa").
Cria gatilho de proximidade — gente terminar é mais forte que começar.

**Desafio da semana:**
Banner colorido com troféu exclusivo e prazo (7 dias). Faz o usuário voltar
nos dias que falta cumprir o objetivo semanal.

**Combo de missões no mesmo dia:**
Concluir 2+ missões num dia ativa contador de combo. 5 missões = troféu
"Penta-aprendiz". 10 = "Maratona do dia". Eventos sociais (ex: domingo de
chuva) geram reforço positivo.

**Sistema de troféus em tiers:**
~50 troféus, 8 categorias, com 5 tiers de raridade (Bronze, Prata, Ouro,
Diamante, Mítico). Cada tier tem cor e brilho próprios — Mítico tem glow
animado contínuo. Categorias:
1. Ofensiva — Faísca 3, Brasa 7, Fogueira 14, Incêndio 30, Vulcão 100, Eterno 365
2. Maratona — 5, 10, 25, 50, 100, 250, 500 missões
3. Domínio — por módulo, 3 tiers por área
4. Inglês — A1, A2, B1, B2 + vocabulário (100/1000 palavras)
5. Combo — sequências e perfeição
6. Horário — Madrugadora, Coruja, Hora do café, Sábado é estudo, Meia-noite
7. Mentor — interação com Carlos Mendes
8. Secretos — conquistas ocultas (??? até desbloquear)

**Conquistas secretas:**
Aparecem como "???" na coleção até serem desbloqueadas. Padrão: enigma + dica
("oculto"). Exemplos: "Concluiu missão num feriado", "Voltou depois de 7+ dias
ausente" (mensagem de boas-vindas, não punição).

### 4.2 Limites éticos

O sistema busca **engajamento, não vício**. Regras imutáveis:

- **Sem perdas reais.** Perder a ofensiva consome 1 escudo automaticamente —
  nunca aparece a tela "você perdeu tudo".
- **Sem timers de FOMO agressivos.** Desafio semanal lembra com calma; não há
  countdown vermelho urgente.
- **Sem comparação social.** Ranking não existe — só recordes pessoais.
- **Sem compra de vidas / pay-to-skip.** A caixa do dia é grátis e única.
- **Mensagens de ausência são acolhedoras.** "Senti sua falta" em vez de
  "Você perdeu sua sequência! 😢".
- **A criança / o idoso entendem o sistema.** Nada de mecânica obscura. Toda
  recompensa tem regra explicável.

Se um princípio do produto conflita com uma técnica de engajamento, **o
produto ganha**. O objetivo é que a pessoa aprenda — o engajamento é o meio.

---

## 5. Exercícios e feedback

Quatro tipos de interação (componente já desenhado para cada):

1. **Escolha a opção** — 2 a 4 cartões grandes (mín. 56px alto). Estados:
   neutro / selecionado (borda navy) / acerto (borda+fundo sage) / erro
   (borda+fundo coral).
2. **Complete a lacuna** — input inline ou drag-drop. Mostra solução
   inline com fill colorido (sage/coral).
3. **Encontre o erro** — texto/planilha com toque. Erro destacado em coral
   ao revelar.
4. **Simulação de interface** — mock visual do Excel, WhatsApp ou e-mail.
   Não é o app real; é uma reprodução visual didática.

**Feedback é imediato a cada passo**, com 3 sinais (cor + ícone + texto):
- ✅ "Boa!" / "Perfeito." / "É isso." — verde sage, ícone de check.
- ⚠ "Quase!" — coral suave, ícone de info. Explicação útil ("Lembre do
  S no she/he/it"), nunca punitiva ("Errado").

**Acessibilidade:** estado nunca depende só de cor. Sempre tem ícone + texto.

---

## 6. Componentes mapeados

Já existe um UI Kit em `componentes.html`. Sempre cheque lá antes de inventar
um componente novo. Os principais nomes a usar:

- **Botão CTA L / XL** — botão de "Concluir missão", coral 60-72px de altura.
- **Pílula de dificuldade** — `Iniciante` (sage), `Intermediário` (honey), `Avançado` (coral).
- **Chip de módulo** — fundo claro da cor + texto escuro da cor.
- **Trilha vertical de missões** — knobs circulares conectados por linha
  tracejada vertical. 3 estados de knob (done / curr / locked).
- **Daily card** — banner navy escuro com "Sua missão de hoje" + CTA.
- **Carimbo de carreira (seal)** — círculo coral com inicial + borda tracejada.
- **Trophy** — medalhão dourado 72px + título + subtítulo.
- **Streak chip** — pílula creme-coral com chama + N dias.
- **Glossary block** — "Palavras novas" em mono CAPS, lista compacta.
- **Hook quote** — fundo paper-warm, borda-esquerda coral, serifa itálica.
- **Why-it-matters card** — fundo honey-cream, ícone de lâmpada.

---

## 7. Princípios de acessibilidade (WCAG AA mínimo, dual-idade)

| Métrica | Valor fixo |
|---|---|
| Corpo de texto | 17px mínimo (slider sobe a 19/21) |
| Contraste texto normal | 4.5:1 |
| Contraste texto grande (≥24px) | 3:1 |
| Alvo de toque | 44×44px mínimo |
| Espaçamento entre alvos | 8px mínimo |
| Anel de foco | 3px honey, visível em tudo |
| `outline: none` | **proibido**, sempre tem substituto |

**Suporte adicional:**
- Botão flutuante "A↑A" sempre acessível para aumentar fonte.
- Modo "alto contraste" como toggle (escurece paper, intensifica ink).
- Modo "silencioso" desativa sons de feedback.
- Compatível com leitor de tela: cada interativo tem `aria-label`
  descritivo.

---

## 8. Tom de voz — microcopy

**A regra mãe:** trate como adulto competente aprendendo algo novo.
Nunca infantilize. Nunca jargonize. Sempre concreto.

| ✅ Diga | ❌ Não diga |
|---|---|
| "Boa! Você travou a célula." | "Acertou! 🎉🎉🎉" |
| "Quase. Lembre da tecla F4." | "Errado ❌" |
| "Concluir · +60 XP" | "Submit" / "Próximo" |
| "Falta uma missão pro próximo nível." | "Mais XP necessário" |
| "Não perca sua sequência hoje." | "Você vai perder tudo! 💔" |
| "Você está há 12 dias seguidos." | "12-dia streak 🔥🔥🔥" |
| "Suas anotações ficam só no seu aparelho." | "Privacy-first storage" |

**Substituições obrigatórias:**
- "submit" → "concluir" / "enviar"
- "loading" → "salvando" / "carregando"
- "error" → "ops" / "quase"
- "level up" → "subiu de nível"
- "lesson" → "missão"
- "course" → "trilha"
- "category" → "módulo"

**Português brasileiro neutro.** Sem "vamos lá, campeão". Sem
"super fácil". Sem "obviamente".

---

## 9. Estrutura do produto

```
App
├── Onboarding (3 telas: boas-vindas → nome → vertente preferida)
├── Início (saudação, streak, XP, missão do dia, atividade recente)
├── Módulos (5 cards coloridos)
│   └── Trilhas (lista por módulo, com pílula de dificuldade)
│       └── Missão (trilha vertical em nós) 
│           └── 4 abas: Aula → Prática → Desafio → Validação
│               └── Celebração ao concluir
├── Agenda (heatmap de streak + missões agendadas)
├── Caixa do Mentor (Carlos Mendes manda tarefas e dá feedback)
├── Diário (anotações de aprendizado, exporta como markdown)
├── Troféus (galeria por categoria)
└── Perfil & Configurações (avatar, nível, backup, fonte, contraste, recomeçar)
```

**Navegação:**
- Mobile (≤860px): barra inferior com 4 itens (Início · Trilhas · Agenda · Perfil)
- Desktop: sidebar lateral, mesmos itens + extras (Troféus, Mentor, Diário)
- Botão flutuante "A↑A" sempre no canto inferior esquerdo

---

## 10. O que pedir a uma IA com este documento

**Para gerar nova tela** — diga o nome da tela, o estado pretendido e os
componentes do UI Kit que ela usa:

> "Desenhe a tela **Caixa do Mentor**, estado "1 nova tarefa". Use:
> daily-card (variante navy), 3 message-cards (componente novo, descreva-o),
> botão CTA L 'Aceitar tarefa'. Mantenha sidebar lateral no desktop e bottom
> nav no mobile. Use a cor do módulo da tarefa (segurança = sage) no header."

**Para variar um componente existente** — diga o componente, a dimensão
de variação e quantas opções:

> "Dê 3 variações do **card de missão do dia**: (a) atual, (b) compacta 1
> linha, (c) com ilustração placeholder à esquerda. Mantenha o CTA L e a
> estampa em mono."

**Para novo componente** — descreva o papel, os estados e onde encaixa:

> "Crie um **mentor-message**: card horizontal com avatar do Carlos Mendes
> (iniciais CM, fundo navy), nome + cargo em uma linha, mensagem em 2-3
> linhas, timestamp em mono à direita, status (não lido / lido / respondido).
> Encaixa na Caixa do Mentor."

---

## 11. Restrições importantes

- ❌ Nunca copie UI, ícones, mascotes ou paletas de Duolingo, Mimo, Codewars,
  LeetCode, HackerRank, Exercism ou Beecrowd. Apenas conceitos.
- ❌ Sem gradientes vibrantes (neon, holográfico).
- ❌ Sem ícones desenhados à mão em SVG complexo — use a família lucide
  (stroke 1.8, 24px grid).
- ❌ Sem emoji em UI (só em mensagens de fallback opcionais).
- ❌ Sem dark mode na v1. (O fundo papel é a identidade — não inverta.)
- ❌ Sem confetti / animações de partícula excessivas. Celebrações são
  breves (≤480ms) e contidas.
- ❌ Sem stock photos genéricas. Use placeholders monocromáticos com texto
  em mono explicando o que vai ali.
- ❌ Sem "lorem ipsum" no design final. Use conteúdo real do `EXERCICIOS.md`
  e `DOCUMENTACAO.md` quando demonstrar uma missão.

---

## 12. Critério de sucesso

A IA entregou um bom design se:

1. **Uma pessoa de 55 anos consegue ler tudo** sem ajustar nada.
2. **Uma de 12 anos não acha "coisa de gente velha"** e fica curiosa.
3. **Cada tela tem 1 CTA primário óbvio** e nada mais coral.
4. **Cor de módulo é consistente** do card de módulo até o knob da missão.
5. **Streak está visível**, mas a tela funciona sem ele.
6. **O conteúdo da missão é o herói**, não a chrome do app.
7. **O design parece "Escritório"**, não "edtech genérico".

---

## 13. Referências de arquivos do projeto

- `identidade-visual.html` — guia visual completo, navegável.
- `componentes.html` — UI Kit, 60+ componentes em todos os estados.
- `logo-sugestoes.html` — 5 direções alternativas para a marca.
- `prototipo.html` — interface interativa de referência (home, módulos,
  trilhas, missão, perfil, agenda, troféus).
- Documentação técnica em `uploads/*.md` (DESIGN-BRIEF, FUNCIONALIDADES,
  EXERCICIOS, FLUXO).

Quando em dúvida, abra os arquivos acima. Quando algo conflitar, esta doc
ganha — é a versão sintetizada e atualizada da identidade.

— Time de design Escritório · v 2.0 · 05.2026
