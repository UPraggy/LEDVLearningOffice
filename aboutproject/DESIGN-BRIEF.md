# Brief de Design — App "Escritório" (curso digital para 40+)

> Documento para **pedir a uma IA de design** (Claude, v0, Lovable, Figma AI, etc.)
> que crie a identidade visual e as telas do app. Tem 3 partes:
> **(A) Pesquisa de mercado + princípios** · **(B) O PROMPT pronto pra colar** ·
> **(C) O que anexar + como usar o Visual Inspector**.
>
> Copie a Parte B inteira, anexe os arquivos da Parte C, e mande.

---

## PARTE A — Pesquisa de mercado e princípios

### A1. Quem é o usuário (e por que isso mexe no design)
Público **40+** (e qualquer pessoa aprofundando em tecnologia). Já sabe o básico
(Word, Google, celular, redes sociais), mas quer **qualificação para o mercado** e
**autonomia digital**. Implicações diretas no design:

- **Presbiopia** atinge a maioria após os 40 → corpo de texto **17–20px**, títulos grandes, e idealmente um **botão de aumentar fonte** global.
- **Menor sensibilidade a contraste e mais sensibilidade a brilho** → alto contraste (mas sem branco puro estourado), evitar cinza-claro sobre branco.
- **Destreza fina reduzida** → alvos de toque **≥ 44×44px**, espaçamento generoso, nada de clicar em ícone minúsculo.
- **Precisa entender o "porquê"** antes de engajar → cada tela deve comunicar valor ("isso te ajuda a conseguir emprego / não cair em golpe").
- **Navegação rasa e previsível** → poucos níveis, "Voltar" e "Início" sempre visíveis, um rótulo = uma função.
- **Motivação por metas próprias, não ranking** → progresso pessoal, streak e troféus individuais (sem leaderboard competitivo que intimida).

### A2. Referências para se inspirar (galerias e produtos)
- **Awwwards — Culture & Education**: https://www.awwwards.com/websites/culture-education/ (qualidade de layout editorial, hierarquia, motion sóbrio).
- **Behance — buscas úteis**: [education app ui](https://www.behance.net/search/projects/education%20app%20ui), [e-learning platform ui](https://www.behance.net/search/projects/e-learning%20platform%20ui), [course ui design](https://www.behance.net/search/projects/course%20ui%20design).
- **Dribbble — gamificação**: tag [streak](https://dribbble.com/tags/streak) e o perfil oficial do [Duolingo](https://dribbble.com/Duolingo) (widgets de streak, badges, XP).
- **Produtos-referência de tom acolhedor (não corporativo)**: Duolingo (cores vivas, mascote amigável, gamificação que não intimida), SchoolMaker (limpo, comunidade), plataformas com ilustração com personagem.
- **Gamificação que funciona (dados)**: streak aumenta engajamento ~60%; **streak freeze ("escudo")** aumenta retenção pós-7-dias em ~48%; cores semânticas (verde=sucesso, laranja=streak, amarelo=XP).

### A3. Princípios que o design DEVE seguir
1. **Acolhedor, não infantil.** Trate como adulto competente aprendendo algo novo. Sem "fácil/simples/obviamente". Sem visual de creche, mas caloroso.
2. **Editorial + tátil.** Base papel/creme, tinta navy, ação coral, conquista mostarda. Tipografia serifada para títulos (ar de caderno/jornal bonito) + sans humanista no corpo.
3. **Gamificação visível e gentil.** Ofensiva (streak 🔥), troféus, XP e nível de carreira ("Estagiário → Coordenador") sempre à mão, celebrando progresso pessoal.
4. **Duas frentes claras.** Sinalização visual constante de **Computador** vs **Celular** (cor + ícone), porque o app ensina os dois.
5. **Acessibilidade WCAG AA no mínimo.** Contraste, foco visível, alvos grandes, suporte a leitor de tela, opção de fonte maior.
6. **Responsivo de verdade.** Mesma experiência no celular (nav inferior) e no PC (nav lateral). É PWA.
7. **Motion sóbrio.** Transições suaves de feedback (conclusão de missão, ganho de XP, troféu). Nada que distraia ou canse.

### A4. Identidade atual (ponto de partida, pode evoluir)
Tokens já usados no protótipo (`escritorio-app.jsx`):
- Fundo papel `#F5EFE6` · superfície `#FBF7F0` · tinta navy `#1B2A4E` · coral `#E55934` · verde `#3D5A3D` · mostarda `#D4A574`.
- Vertente Computador `#1B2A4E` · Vertente Celular `#5B7C99`.
- Fontes: **Fraunces** (títulos) + **Plus Jakarta Sans** (corpo).
A IA de design pode refinar, mas deve manter o espírito "Escritório Caloroso".

---

## PARTE B — OS PROMPTS (objetivo: receber uma IDENTIDADE VISUAL + amostra do sistema)

> **O que queremos de volta NÃO é o app inteiro implementado.** É: **(1)** uma
> **identidade visual** completa e **(2)** uma **amostra de como o sistema fica**
> (2–3 telas-assinatura). Fluxo: cole o **PROMPT 1** (identidade) → depois o
> **PROMPT 2** (telas) → anexe os arquivos da Parte C → e me traga o resultado no
> formato da seção **"O que me devolver"** (fim desta Parte B). Com isso eu atualizo
> os tokens do app e implemento as telas reais.

### PROMPT 1 — Identidade visual (entregável principal)

```
Você é um diretor de design de produto sênior, especialista em acessibilidade e
em IDENTIDADE VISUAL para adultos 40+. Crie a IDENTIDADE VISUAL de um web app
(PWA, responsivo) chamado "Escritório". Quero a identidade da marca e do sistema —
NÃO o app inteiro implementado.

CONTEXTO DO PRODUTO
É um curso/app de qualificação digital para pessoas 40+ (e quem está se
aprofundando em tecnologia). Ensina em duas frentes — COMPUTADOR (trabalho,
Office, Excel, e-mail, LinkedIn, IA) e CELULAR (vida digital: WhatsApp, PIX,
Gov.br, saúde, mapas, fotos) — além de módulos de MERCADO/EMPREGABILIDADE e
SEGURANÇA. A metáfora é uma carreira: o usuário começa "Estagiário" e é promovido
até "Coordenador" conforme aprende. Conteúdo é 100% escrito (sem vídeo). Progresso
salvo localmente (localStorage) + exportar/importar arquivo. Sem backend.

PÚBLICO E RESTRIÇÕES DE ACESSIBILIDADE (obrigatórias)
- Corpo de texto 17–20px; títulos grandes; incluir controle de "aumentar fonte".
- Contraste WCAG AA no mínimo (sem branco puro estourado; sem cinza-claro sobre branco).
- Alvos de toque ≥ 44×44px, espaçamento generoso.
- Navegação rasa e previsível; "Voltar" e "Início" sempre acessíveis.
- Foco visível em todos os interativos; compatível com leitor de tela.
- Tom acolhedor e respeitoso — adulto competente, NÃO infantil.

DIREÇÃO VISUAL ("Escritório Caloroso")
- Base papel/creme, tinta navy, ação coral, conquista mostarda, sucesso verde.
- Tipografia: serifada editorial nos títulos (ex: Fraunces) + sans humanista no
  corpo (ex: Plus Jakarta Sans). Sensação de "caderno bonito de produtividade",
  longe do SaaS genérico.
- Sinalização constante das duas vertentes: Computador (navy) e Celular (azul),
  cada uma com ícone próprio.
- Motion sóbrio e gentil (feedback de conclusão, ganho de XP, troféu).

GAMIFICAÇÃO (estilo Duolingo, porém gentil e SEM ranking competitivo)
- "Ofensiva" = streak de dias seguidos (ícone de chama 🔥 + contador sempre visível),
  com "escudo" que protege 1 dia perdido.
- Troféus/selos por marcos (10/50/100 missões), por ofensiva (3/7/30/100 dias),
  por domínio de trilha e de módulo.
- XP e nível de carreira (Estagiário → Assistente Júnior → Pleno → Analista →
  Sênior → Coordenador), com barra de progresso pro próximo nível.
- Cores semânticas: verde=sucesso, laranja/coral=streak, mostarda/amarelo=XP/troféu.

ESTRUTURA DE NAVEGAÇÃO
- Nav principal (3 itens): Início · Trilhas · Perfil. No celular = barra inferior;
  no desktop = barra lateral. Config/backup acessível pelo Perfil.
- O usuário escolhe um MÓDULO (Computador / Celular / Mercado / Segurança) e dentro
  dele uma TRILHA; cada trilha tem MISSÕES sequenciais.
- Cada MISSÃO tem 4 etapas em abas: Aula → Prática → Desafio → Validação (checklist).

O QUE ENTREGAR (somente a IDENTIDADE — não telas inteiras ainda):
1. Conceito da marca: 2-3 frases sobre a personalidade + um nome de direção visual.
2. Logo/símbolo: conceito do logotipo "Escritório" (hoje o símbolo é uma xícara de
   café) + 2-3 variações (ícone sozinho, horizontal, monocromático).
3. Paleta COMPLETA com PAPÉIS semânticos (tokens): fundo, superfície, superfície
   elevada, texto principal/suave/desabilitado, borda, ação (primária/secundária),
   sucesso (verde), erro/atenção (coral suave, NÃO "vermelho de prova"), conquista/XP
   (mostarda), e a COR DE CADA UM DOS 5 MÓDULOS: Computador (navy), Celular (azul),
   Mercado (coral), Segurança (verde), Inglês (roxo). Inclua os hex e a checagem de
   contraste WCAG AA (≥4.5:1 texto normal, ≥3:1 texto grande) de cada par texto/fundo.
4. Tipografia: famílias (títulos e corpo), escala em px (h1, h2, h3, corpo, legenda,
   micro), pesos, line-heights e letter-spacing. Lembre: corpo 17-20px pra 40+.
5. Sistema base (tokens): escala de espaçamento (4/8/12/16/24/32…), raios (defina
   4 níveis: controles pequenos, inputs/botões, cards, modais), sombras/elevação
   (3-4 níveis), e princípios de motion (durations/easings, sóbrio e gentil).

6. BIBLIOTECA DE COMPONENTES COMPLETA — desenhe o ESTILO e os ESTADOS de TODOS os
   componentes abaixo (não as telas inteiras ainda). Para cada um, mostre os estados
   relevantes: default / hover / focus (anel visível) / active / disabled / loading /
   selecionado / erro. Quero um modelo visual de cada:

   • AÇÕES: botão primário, secundário, terciário/ghost, destrutivo, link, botão-ícone,
     botão grande (CTA da missão). Tamanhos S/M/L, com alvo de toque ≥44px.
   • FORMULÁRIOS: campo de texto, área de texto, busca, select/dropdown, checkbox,
     radio, switch/toggle, slider (ex: aumentar fonte). Com label, ajuda e estado de erro.
   • NAVEGAÇÃO: barra inferior (mobile) e lateral (desktop), abas (as 4 da missão:
     Aula/Prática/Desafio/Validação), breadcrumb/voltar, paginação de passos.
   • CARDS (modelo de cada um): card de MÓDULO (cor, ícone, subtítulo, progresso),
     card de TRILHA (ícone, badge de vertente/nível, barra de progresso, X/Y missões),
     card de MISSÃO (número, título, tempo, XP, estado: concluída/atual/bloqueada),
     card de "missão do dia", card de troféu.
   • GAMIFICAÇÃO: chip de OFENSIVA (🔥 + nº de dias), ícone de ESCUDO (streak freeze),
     medidor de XP / barra de progresso de nível, carimbo/badge de NÍVEL DE CARREIRA
     (Estagiário→Coordenador), e o TROFÉU/MEDALHA em 3 estados (bloqueado, conquistado,
     "novo!") — desenhe um conjunto coeso de troféus (marcos, ofensiva, domínio, inglês).
   • EXERCÍCIOS INTERATIVOS (ver PARTE F): componente de "completar lacuna", "encontrar o
     erro", "escolher a opção" (cartões de resposta), e o FEEDBACK imediato (estado de
     acerto ✅ e de erro, gentil) — com ícone + cor + texto (não só cor).
   • CONTEÚDO DA AULA: bloco de "gancho" (citação), bloco de conceito, bloco de
     "exemplo simulado" (tabela/planilha/conversa/par EN↔PT), card de glossário
     ("palavras novas"), bloco "3 pontos-chave", bloco "por que isso importa", lista
     numerada de passos, checklist de validação.
   • FEEDBACK & OVERLAYS: toast/notificação, alerta inline, modal/diálogo, tooltip,
     telas de CELEBRAÇÃO (missão concluída, subiu de nível, troféu, ofensiva mantida),
     e ESTADO VAZIO (ex: "nenhuma trilha começada ainda").
   • DADOS & IDENTIDADE: avatar/iniciais, badge de vertente, tag/chip, divisor,
     barra de progresso (linear e circular).

7. CONJUNTO DE ÍCONES: defina o estilo do sistema de ícones (família — ex: lucide,
   stroke ~1.5–2px, cantos, tamanho base) e os ícones-chave do produto: cada um dos
   5 módulos, vertentes (computador/celular), ofensiva (chama), escudo, XP, troféu,
   nível, as 4 abas da missão, concluído/bloqueado/atual, e ações comuns. Mostre a
   grade de ícones num único quadro.

8. Tom de voz da interface (microcopy): como os textos da UI falam, com EXEMPLOS reais
   — botões ("Concluir +60 XP"), feedback ("Boa! ✅" / "Quase — tente de novo"),
   estados vazios, celebrações, e mensagens de ofensiva ("Não perca sua sequência!").

ENTREGÁVEL: um GUIA DE IDENTIDADE + UI KIT — texto estruturado (tokens, regras de uso) +
amostras visuais de TODOS os componentes e ícones acima, organizados por categoria, com
os estados visíveis. Inclua os design tokens como CSS variables prontos pra colar. Deve
ter aspecto PROFISSIONAL e coeso (como um design system de produto de verdade).

Faça perguntas se algo estiver ambíguo antes de produzir. Priorize legibilidade,
clareza e calor humano sobre "tendências". Sucesso = uma pessoa de 55 anos sentir
"isso foi feito pra mim, eu consigo".
```

### PROMPT 2 — Telas-assinatura (mostrar como o sistema fica)

> Use depois que o PROMPT 1 entregar a identidade. Objetivo: ver a identidade
> aplicada em poucas telas-chave (amostra), não o app completo.

```
Usando EXATAMENTE a identidade visual definida antes, desenhe as TELAS do app
"Escritório", em mobile (375px) e desktop (1440px), aplicando o UI Kit. Mostre como
o sistema fica de verdade (não só componentes soltos).

TELAS PRINCIPAIS (desenhe todas):
1. INÍCIO: saudação, carimbo do nível de carreira, chip de ofensiva (🔥), barra de XP,
   "missões de hoje" (1 Computador + 1 Celular + 1 Inglês), e estatísticas.
2. SELEÇÃO DE MÓDULOS: os 5 cartões — Computador, Celular, Mercado, Segurança, Inglês —
   cada um com sua cor, ícone, subtítulo e progresso.
3. LISTA DE TRILHAS (dentro de um módulo): cards de trilha com badge e progresso.
4. DETALHE DA TRILHA: lista de missões nos 3 estados (concluída / atual / bloqueada).
5. MISSÃO — aba AULA: gancho, conceito, "exemplo simulado", glossário, "3 pontos-chave",
   "por que importa" e botão "Concluir +XP". Use CONTEÚDO REAL anexado (sem lorem ipsum).
6. MISSÃO — EXERCÍCIO INTERATIVO: uma tela de exercício (ex: "Complete a fórmula" ou
   "Escolha a decisão"), mostrando o estado de FEEDBACK de ACERTO (✅) e de ERRO (gentil).
7. PERFIL: avatar, nível, estatísticas (XP, ofensiva, troféus) e a COLEÇÃO DE TROFÉUS.
8. CELEBRAÇÃO: tela de "missão concluída / subiu de nível / troféu / ofensiva mantida".
9. CONFIGURAÇÕES: exportar/importar progresso, aumentar fonte, recomeçar.
10. ONBOARDING: boas-vindas + escolher nome/idade-objetivo + módulo inicial.

Mostre também 1 exemplo de tela do módulo INGLÊS (cor roxa) pra ver a distinção visual.

Para cada tela, anote quais cores/tokens/componentes do UI Kit foram usados. Mantenha
tudo coerente com o PROMPT 1 e com a acessibilidade 40+ (fonte grande, alto contraste,
alvos de toque ≥44px, foco visível). Entregue mobile E desktop.
```

### O QUE ME DEVOLVER (pra eu implementar)

Quando a IA responder, me traga (pode ser texto + imagens/links):
1. **Tokens** — paleta com papéis (hex) e o bloco de CSS variables; tipografia (fontes +
   escala em px); espaçamento, raios, sombras.
2. **UI Kit** — as amostras de TODOS os componentes e ícones (PROMPT 1, item 6 e 7),
   com os estados — prints ou link (Figma/Canva/imagem).
3. **As telas** do PROMPT 2 (mobile + desktop) — prints ou link.
4. **Logo/troféus/ícones** — os arquivos/imagens, se possível.
5. **Decisões de direção** que você curtiu (ex: "mais minimalista", "logo assim").

> ⛔ **IMPORTANTE (diretriz do dono):** a IMPLEMENTAÇÃO no app só começa DEPOIS que você
> me devolver a **identidade visual completa + o UI Kit + as telas**. Até lá, ficamos em
> pesquisa e planejamento (conteúdo, backend, docs) — nada de codar a interface ainda.

---

## PARTE C — O que anexar e como turbinar com o Visual Inspector

### C1. Anexos recomendados (mande junto com o prompt)
| Anexo | Por quê |
|------|---------|
| `escritorio-app.jsx` | Protótipo atual — mostra layout, tokens e componentes já existentes. A IA parte daqui em vez do zero. |
| `DOCUMENTACAO.md` | Arquitetura completa, telas, modelo de dados, gamificação. Dá contexto total. |
| `data/estrutura.js` | Módulos, trilhas, níveis, ofensiva e troféus reais — pra desenhar as telas com dados verdadeiros. |
| `data/conteudo/pc-fund.js` e `data/conteudo/sec-ataque.js` | Exemplos de conteúdo real de missão — pra desenhar a tela de Missão com texto de verdade (não lorem ipsum). |
| Este `DESIGN-BRIEF.md` | O brief em si (Parte A dá a fundamentação). |
| 3–5 prints de referência | Capturas de Awwwards/Behance/Dribbble que você curtiu (ver Parte A2). Acelera o alinhamento de estilo. |

> Dica: se a IA de design aceitar imagem, anexe também um screenshot do protótipo
> atual rodando, pra ela ver o ponto de partida visual.

### C2. Usar o Visual Inspector (seu projeto) no fluxo
O Visual Inspector é um servidor REST com ~90 ferramentas de design/acessibilidade.
Suba ele (`visual-inspectorBackEnd`) e use em dois momentos:

**Antes (extrair DNA das referências):** aponte as ferramentas para os sites que
você admira e gere material objetivo pra anexar ao prompt:
- `analyze_inspiration` — extrai padrões acionáveis de uma galeria/site (substitui horas no Awwwards/Mobbin).
- `scrape_design_tokens` + `extract_type_scale` + `scrape_colors` — pega paleta, fontes e escala REAIS de um site-referência.
- `generate_design_brief` — gera um brief estruturado (paleta, tipografia, voz, componentes, motion) a partir de uma URL.
- `competitive_audit` — compara com referências premium e aponta gaps por dimensão.

**Depois (auditar o que a IA entregou):** rode contra o app/protótipo gerado:
- `audit_accessibility` — WCAG: contraste, alvos ≥44px, labels, foco, ARIA. **Essencial pro público 40+.**
- `analyze_visual_hierarchy` — score de hierarquia e clutter por Vision API.
- `screenshot_responsive` — telas em 375/768/1440/1920 + detecção de overflow.
- `analyze_spacing_system` + `detect_layout_pattern` — confere consistência de escala e layout.
- `full_design_audit` — roda tudo e gera um relatório único.
- **`audit_senior_readability`** *(tool nova, criada para este projeto)* — audita a tela pela lente do público 40+: fonte ≥16px, entrelinha, comprimento de linha, contraste e alvos de toque ≥44px. Nota 0–100. **Use sobre o app já buildado/rodando** (no `index.html` de splash não há texto pra medir).
- **`audit_pwa`** *(tool nova)* — verifica instalabilidade: manifest + campos, **existência real dos arquivos de ícone**, service worker, theme-color, viewport. Já validado no projeto: **100/100, installable** (após gerarmos os 8 ícones que faltavam em `/icons/`).

**Mensagem pronta pra dar a qualquer IA externa** (cole no chat dela):
```
Você tem acesso ao Visual Inspector — servidor com ~90 ferramentas em
http://<host>/api/tool. Antes de executar, liste com GET http://<host>/api/tools
e use as necessárias. Para executar: POST http://<host>/api/tool/<nome> com args JSON.
Prioridade pra design: 1) scrape_design_tokens, extract_css_variables, compare_designs
2) audit_accessibility, analyze_dark_mode, analyze_visual_hierarchy
3) screenshot_responsive, analyze_spacing_system, detect_layout_pattern
4) extract_motion_patterns, analyze_performance_metrics  5) full_design_audit.
```

### C3. Fluxo sugerido (passo a passo)
1. Escolha 3–5 referências (Parte A2) e rode `analyze_inspiration` / `generate_design_brief` em cada uma.
2. Junte os achados + os anexos da C1.
3. Cole o **PROMPT 1** (identidade) na IA de design e anexe tudo. Receba o guia de identidade.
4. Cole o **PROMPT 2** (telas-assinatura). Receba as 2–3 telas aplicando a identidade.
5. Me devolva o resultado no formato da seção **"O que me devolver"** (fim da Parte B).
6. Eu atualizo os tokens do app e implemento as telas reais seguindo a identidade.
7. Depois de implementado, rode `full_design_audit` + `audit_senior_readability` no app
   rodando e devolva os problemas pra corrigir, até passar WCAG AA.

---

## PARTE D — Dados extraídos com o Visual Inspector

> Análises rodadas no Visual Inspector (servidor local, 189 tools) sobre os sites
> de referência. São **medições reais de runtime** (paleta efetiva, escala
> tipográfica), não suposições. Reproduza com `POST http://localhost:3000/api/tool/<nome>`.

### D1. Paletas reais das galerias de referência
**Dribbble** (`scrape_colors`, 55 cores) — UI escura de galeria:
- Surface claro `#FFFFFF` (21,6%) · tinta quase-preta `#0D0C22` (15,8%) · texto `#212121`/`#060318` · cinza neutro `#9E9EA7` · overlay `#000000@0.5`.

**Behance** (`scrape_colors`, 27 cores) — UI escura minimalista:
- Surface escuro `#191919` (17,9%) · branco `#FFFFFF` · cinzas `#F9F9F9`/`#F0F0F0`/`#EBEBEB` · **acento azul vivo `#0057FF`**.

> **Leitura pro nosso caso:** galerias de design usam tema **escuro + 1 acento
> vivo + neutros**. Isso é ótimo pra portfólio, mas **inverteríamos pro nosso
> público**: tema **claro/papel** (mais legível pra 40+, menos cansativo), mantendo
> a lição do "1 acento forte" (no nosso caso o coral) sobre uma base neutra calma.

### D2. Tipografia observada
**Dribbble** (`extract_type_scale`): usa **Mona Sans** (Google/CDN), escala bem
**apertada** (~0.83, "minor second"), pesos 500–700, line-height ~1.33–1.4.
> **Leitura pro nosso caso:** galeria pode usar escala apertada porque o conteúdo
> é imagem. **Nós precisamos do oposto:** escala **mais ampla** (1.25–1.333) e
> corpo 17–20px, porque nosso conteúdo é **texto pra ler** — legibilidade > densidade.

### D3. Recursos curados (da biblioteca do Visual Inspector)
- **Inspiração:** Dribbble, Behance, [Recent.design](https://recent.design/), [Lusion](https://lusion.co/).
- **Fontes grátis de qualidade:** [Fontshare](https://www.fontshare.com/), [Fontesk](https://fontesk.com/).
- **Cores/gradientes:** [Coolors](https://coolors.co/), [CSS Gradient](https://cssgradient.io/).
- **Textura (relevante p/ o "papel" do nosso tema):** [Noise Texture Generator](https://www.noisetexturegenerator.com/), [MagicPattern — grão](https://www.magicpattern.design/tools/add-grain-to-images).
- **Sombras:** [CSS box-shadow examples](https://getcssscan.com/css-box-shadow-examples).

### D4. Notas de método (limitações observadas)
- Sites muito pesados (ex.: **Duolingo**) não atingem `networkidle` (recaptcha/analytics mantêm a rede ativa) → `scrape_colors`/`design_radar` falham por timeout. Para esses, prefira `screenshot_site` (visual) ou analise telas internas do produto, não a home.
- `analyze_inspiration` e `generate_design_brief` geram o brief por IA e exigem `ANTHROPIC_API_KEY` no ambiente do servidor — configure-a antes pra ter o brief automático completo.
- As ferramentas determinísticas (`scrape_colors`, `extract_type_scale`, `design_radar`, `audit_accessibility`, `screenshot_responsive`) funcionam sem chave e são as mais úteis pra **auditar o resultado** depois.

---

## PARTE E — Referências navegadas no Notion de design (do Rafael)

> Naveguei (via browser real do Visual Inspector) o hub de design do Notion e suas
> sub-páginas. É um toolkit pessoal organizado em: Inspirações, Cores/Gradientes,
> Fonts, Effects, Templates, Display & Tips (Grid/Variáveis), Proporções. Abaixo, os
> recursos reais extraídos + a **leitura crítica** de como aplicar ao público 40+.

### E1. Inspirações (sites curados)
| Recurso | URL | Estilo / serventia |
|--------|-----|--------------------|
| Recent.design | https://recent.design/ | Galeria de UI recente (paleta preto/branco minimalista) — radar de tendência |
| Lusion | https://lusion.co/ | Estúdio premium, motion 3D — referência de **polimento e craft** |
| Sampo (Framer) | https://sampo.framer.website/ | Template de portfólio responsivo limpo |
| Supahero | https://www.supahero.io/templates | Templates Framer de alta qualidade |
| Unifiers of Japan | https://unifiersofjapan.framer.website/ | Editorial/storytelling com imagem |
| OnePageLove | https://onepagelove.com/templates/portfolio-templates | Coleção de one-pages |
| NextUI | https://nextui.org/ | Biblioteca React moderna (componentes) |
| UI8 | https://ui8.net/ | Marketplace de recursos de design |
| Envato Elements | https://elements.envato.com/ | Assets ilimitados |
| Dribbble (login-page) | https://dribbble.com/tags/login-page | Padrões de telas de entrada |
| Behance | https://www.behance.net/ | Projetos de UI/UX |
| Animation Coding (YT) | https://www.youtube.com/@AnimationCoding/videos | Tutoriais de animação CSS |
| Online Tutorials (YT) | https://www.youtube.com/@OnlineTutorialsYT/videos | Tutoriais de layout responsivo |

### E2. Cores e Gradientes / Fundo
Coolors (paletas) · colordesigner (gradiente) · [cssgradient.io](https://cssgradient.io/) · [gradient-animator](https://www.gradient-animator.com/) · **[Noise Texture Generator](https://www.noisetexturegenerator.com/)** e **[MagicPattern — grão](https://www.magicpattern.design/tools/add-grain-to-images)** (relevantes pro nosso fundo "papel" com grão) · [SVG Backgrounds](https://www.svgbackgrounds.com/) · [Cool Backgrounds](https://coolbackgrounds.io/) · [getcssscan — box-shadow](https://getcssscan.com/css-box-shadow-examples).

### E3. Fonts
[Fontshare](https://www.fontshare.com/) (fontes grátis de qualidade) · [Fontesk](https://fontesk.com/) · [BestFonts — pôster](https://en.bestfonts.pro/category/poster-fonts) · [Unblast](https://unblast.com/).

### E4. Outras categorias do hub
Effects, Templates, **Display & Tips (Grid, Variáveis)** e **Proporções** — pastas com técnicas de layout/CSS. Use a lição de **grid consistente + variáveis (design tokens)** ao implementar: nada de valores soltos, tudo via `var(--*)` numa escala definida.

### E5. Leitura crítica (importante)
A maioria dos sites de Inspirações é **portfólio/agência/Framer** — escuros, sofisticados, com muito motion. Isso eleva o **padrão de craft** (transições suaves, espaçamento generoso, tipografia caprichada), mas **não é o tom direto** pro nosso público. Como aplicar:
- **Pegue o craft, não o mood:** o nível de acabamento (motion sóbrio, grid impecável, sombras sutis) sim; o tema escuro e denso, **não**.
- **Inverta pra claro/papel:** nosso público 40+ lê melhor em fundo claro, contraste alto e fonte grande — o oposto da galeria escura.
- **Use o grão/textura com leveza:** o fundo "papel" do app combina com os geradores de noise/grão do hub, mas sempre mantendo legibilidade (textura quase imperceptível).
- **Componentes prontos:** NextUI/UI8 podem acelerar, desde que customizados pros tokens "Escritório Caloroso" e validados em acessibilidade (rode `audit_accessibility` depois).

---

## PARTE F — Sistema de interação e feedback (DESIGN DIDÁTICO)

> Adição importante: além de ler e marcar checklist, o app terá **exercícios interativos com
> feedback imediato** (estilo Duolingo/Busuu/Brilliant). Isso muda as telas — o designer precisa
> prever esses componentes. Detalhe do schema em `REVISAO.md §4`.

### F1. Os 6 tipos de interação (componentes a desenhar)
| Tipo | Componente visual | Onde aparece |
|------|-------------------|--------------|
| **Complete** | Campo/lacuna pra preencher (input ou arrastar) | Excel (fórmulas), Inglês (gramática) |
| **Encontre o erro** | Texto/planilha com toque pra marcar o erro | Inglês, Excel, comunicação |
| **Escolha a decisão** | Cartões de opção (2–4), 1 correta | Segurança/PIX, quizzes de conceito |
| **Simulação de interface** | Mock de Excel / WhatsApp / chat / e-mail | PIX (golpe no WhatsApp), Excel, e-mail |
| **Desafio** | Tarefa aberta + checklist (já existe) | última missão de cada trilha |
| **Feedback imediato** | Estado de acerto/erro **a cada passo** | transversal a todos acima |

### F2. Princípios de feedback (críticos pro design)
- **Imediato e a cada passo** — não só no fim. Acertou → "Boa! ✅" (verde, micro-animação leve);
  errou → tom gentil ("Quase! Lembre do 's'.") com a explicação, **nunca punitivo**.
- **Cores semânticas:** verde = acerto/sucesso; coral = atenção/erro (suave, não "vermelho de prova");
  mostarda = XP/conquista; navy = neutro.
- **Sem ansiedade:** erro não "tira pontos" de forma dura — é oportunidade de aprender (importante
  pro 40+ que tem receio de errar, e pro jovem que desiste fácil).
- **Acessível:** estados de acerto/erro não podem depender só de cor (use ícone + texto) — WCAG.

### F3. Gamificação de hábito (telas a prever)
- 🔥 **Chip de ofensiva** sempre visível + tela "você vai perder sua sequência hoje" (gentil).
- 🧊 **Escudo** (ícone) que protege 1 dia — mostrar quando disponível/usado.
- 🎯 **"Missão do dia"** em destaque na Home.
- 🏆 **Telas de celebração:** missão concluída, subiu de nível, ganhou troféu, "você melhorou X%".
- 🟣 **Módulo Inglês:** tem **cor própria (roxo #7A4FB5)** e **troféus próprios** (First Words,
  A1/A2/B1, Business English, Fluent Mindset) — prever um visual que o distinga dos outros módulos.

### F4. Impacto nas telas-assinatura (atualiza o PROMPT 2 da Parte B)
Ao pedir as telas-assinatura, inclua **uma tela de exercício interativo** (ex: "Complete a fórmula"
ou "Escolha a decisão") mostrando o estado de **feedback de acerto e de erro**. É a tela que mais
define a "alma" do app — capriche nela.

---

### Fontes da pesquisa
- [Awwwards — Culture & Education](https://www.awwwards.com/websites/culture-education/)
- [Designing for Seniors: Typography Essentials](https://www.numberanalytics.com/blog/designing-for-seniors-typography-essentials)
- [Best Practices in Design Accessibility for Older Adults](https://confetti.design/blog/best-practices-in-design-accessibility-for-older-adults)
- [UI Design for Older Adults — Toptal](https://www.toptal.com/designers/ui/ui-design-for-older-adults)
- [Duolingo's Gamification Secrets — Orizon](https://www.orizon.co/blog/duolingos-gamification-secrets)
- [Duolingo Streak System Breakdown — Medium](https://medium.com/@salamprem49/duolingo-streak-system-detailed-breakdown-design-flow-886f591c953f)
- [Duolingo Gamification Case Study — Trophy](https://trophy.so/blog/duolingo-gamification-case-study)
- [7 best designed Edtech platforms — Merge](https://merge.rocks/blog/7-best-designed-edtech-platforms-weve-seen-so-far)
- [Behance — education app ui](https://www.behance.net/search/projects/education%20app%20ui) · [Dribbble — streak](https://dribbble.com/tags/streak)
