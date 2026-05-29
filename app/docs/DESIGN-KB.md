# DESIGN-KB — Base de Conhecimento Visual & Front-End

> Referência consolidada para a IA gerar **o melhor visual possível**: design, geração de
> imagens (SVG/PNG/JPEG/WebP/AVIF/PDF), apresentações e front-end. Não é específica do
> projeto — é uma fundação reutilizável. O código que aplica isto está em
> `src/lib/design-kit.js`; a inspeção interativa em `public/visual-inspector.html`.
>
> Fontes consolidadas (conhecimento estabelecido): WCAG 2.1 (W3C), Material Design 3,
> Refactoring UI (Wathan & Schoger), Interaction Design Foundation, IBM Carbon, Apple HIG,
> Nielsen Norman Group, MDN Web Docs, web.dev (Core Web Vitals), Smashing Magazine.

---

## ÍNDICE
1. Cor
2. Contraste & acessibilidade (WCAG)
3. Tipografia
4. Layout, grid & espaçamento
5. Gestalt & percepção
6. Forma, ícones & ilustração
7. Hierarquia visual
8. Profundidade, sombra & luz
9. Movimento & animação
10. Geração de imagens — formatos (raster vs vetor)
11. Geração de imagens — pipeline programático (SVG→PNG, OG, sprites)
12. Apresentações / slides
13. Front-end (HTML/CSS/JS): layout, responsivo, performance, a11y
14. Design tokens & sistemas
15. Checklist de qualidade (usado no Visual Inspector)

---

## 1. COR

**Modelos.** HSL é o mais intuitivo para gerar paletas: **H**ue (matiz 0–360°), **S**aturation
(0–100%), **L**ightness (0–100%). Para cor "fisicamente" correta na web moderna, OKLCH/LCH dá
passos perceptualmente uniformes (mesma diferença numérica ≈ mesma diferença percebida).

**Como montar uma paleta forte:**
- **1 cor primária** (marca/ação), **1–2 secundárias**, **neutros** (a maior parte da tela é
  neutra), e **cores de status** (sucesso/aviso/erro).
- Regra **60-30-10**: 60% neutro/fundo, 30% cor de apoio, 10% acento (CTA). Acento é escasso —
  é o que chama o olho.
- Gere variações por **tints** (mistura c/ branco), **shades** (c/ preto) e **tones** (c/ cinza),
  não por "chutar" hex. Use `scale()` / `lighten/darken` do kit.
- **Saturação x área:** áreas grandes pedem cores dessaturadas; acentos pequenos podem ser
  vibrantes. Fundo muito saturado cansa.
- **Temperatura:** quentes (vermelho/laranja) avançam e energizam; frias (azul/verde) recuam e
  acalmam. Use para dirigir atenção.

**Harmonias** (roda de cores — funções no kit):
- **Complementar** (180°): alto contraste, vibrante. Cuidado com vibração em texto.
- **Análoga** (±30°): harmônica, calma, ótima p/ fundos e ilustração.
- **Tríade** (120°): equilibrada e viva; use 1 dominante.
- **Split-complement / Tetrádica:** mais ricas, exigem 1 dominante + apoios discretos.
- **Monocromática:** elegante; varie só L/S de uma matiz.

**Gradientes bonitos (dica moderna):** não interpole só claro→escuro na mesma matiz — faça um
**hue shift** leve (girar 8–15°) entre as paradas. Dá gradientes "vivos". Evite gradiente
acinzentado no meio (interpolar em sRGB cru pode passar pelo cinza) — clarear+saturar a parada
de cima ajuda. Função: `gradientStops()` / `svgLinearGradient()`.

**Significado cultural:** cor carrega semântica (vermelho=erro/urgência, verde=ok, amarelo=aviso).
Nunca dependa SÓ da cor para informar (ver §2 daltonismo).

---

## 2. CONTRASTE & ACESSIBILIDADE (WCAG 2.1)

**Razão de contraste** = (L1+0.05)/(L2+0.05), onde L é a **luminância relativa** (sRGB
linearizado: 0.2126R+0.7152G+0.0722B). Varia de **1:1** (igual) a **21:1** (preto/branco).
Implementado em `contrastRatio()` / `relativeLuminance()`.

**Limiares mínimos:**
| Conteúdo | AA | AAA |
|---|---|---|
| Texto normal (<24px, ou <18.66px bold) | **4.5:1** | 7:1 |
| Texto grande (≥24px, ou ≥18.66px bold) | **3:1** | 4.5:1 |
| Componentes de UI / ícones (não-texto) | **3:1** | — |

**Regras práticas:**
- Texto SEMPRE ≥ 4.5:1. Use `ensureContrast(fg,bg,4.5)` p/ ajustar automático, ou `bestTextOn(bg)`
  para escolher claro/escuro.
- Placeholders e texto desabilitado ainda devem ser legíveis (mire ≥ 3:1).
- **Daltonismo (~8% homens):** não codifique informação só por cor. Adicione ícone, rótulo,
  padrão ou forma. Pares perigosos: vermelho/verde, azul/roxo.
- **Foco visível:** elementos focáveis precisam de indicador com ≥3:1 contra o entorno.
- **Não use cor para "obrigatório/erro"** sem texto/ícone.

---

## 3. TIPOGRAFIA

- **Escala modular:** tamanhos derivam de uma base × razão (1.2 minor third, 1.25 major third,
  1.333 perfect fourth, 1.618 golden). `typeScale(16,1.25,6)`. Dá ritmo; evita "tamanhos aleatórios".
- **Hierarquia** com 2–3 pesos (ex.: 700 títulos, 400 corpo) e tamanho/cor — não 6 tamanhos.
- **Comprimento de linha:** 45–75 caracteres (ideal ~66) para corpo. Linhas longas cansam.
- **Entrelinha (line-height):** corpo 1.4–1.6; títulos 1.1–1.25 (menos, pois fontes grandes
  parecem mais espaçadas).
- **Pareamento:** 1 serifada display + 1 sem-serifa de texto é clássico (ex.: Fraunces + Plus
  Jakarta Sans). Ou superfamília única com vários pesos.
- **Medida x peso x cor** definem ênfase; prefira variar 1 eixo por vez.
- **Números:** tabular (largura fixa) para tabelas/valores que alinham.
- **Não centralize blocos longos**; centralizar serve a 1–2 linhas (títulos).

---

## 4. LAYOUT, GRID & ESPAÇAMENTO

- **Espaçamento base-8** (4/8/16/24/40/64): tudo múltiplo de 8 (ou 4 p/ ajuste fino). Cria
  consistência e ritmo. `SPACE`, `spacing(n)`.
- **Grid de colunas** (12 col é padrão web) + **gutters** consistentes. Conteúdo alinha às colunas.
- **Espaço em branco (negative space)** não é desperdício — é o que dá respiro e foco. Densidade
  alta só quando o usuário precisa comparar muitos dados.
- **Proximidade:** itens relacionados ficam perto; separe grupos com MAIS espaço do que separa
  itens internos (lei de Gestalt — §5).
- **Alinhamento:** prefira alinhar à esquerda (leitura LTR). Tudo deve alinhar a *alguma* borda;
  "quase alinhado" parece erro.
- **Hierarquia espacial:** o espaço ANTES de um título pertence a ele (mais acima, menos abaixo).
- **Proporções agradáveis:** 1:1, 4:3, 3:2, 16:9, golden (1.618). Imagens de capa 16:9; cards
  3:2/4:3.
- **Borda óptica:** ícones/círculos podem precisar transbordar levemente a caixa para parecerem
  alinhados (correção óptica).

---

## 5. GESTALT & PERCEPÇÃO

Princípios de como o cérebro agrupa o visual — base de toda organização de tela:
- **Proximidade:** próximos = um grupo.
- **Similaridade:** iguais (cor/forma/tamanho) = relacionados.
- **Continuidade:** o olho segue linhas/curvas suaves.
- **Fechamento:** completamos formas incompletas (ícones minimalistas exploram isso).
- **Figura/fundo:** o que é objeto vs o que é fundo (contraste, sobreposição, sombra resolvem).
- **Destino comum:** elementos que se movem juntos são vistos como grupo (animação).
- **Lei de Prägnanz:** preferimos a interpretação mais simples — simplifique formas.

---

## 6. FORMA, ÍCONES & ILUSTRAÇÃO

- **Consistência geométrica:** mesmo raio de canto, mesma espessura de traço, mesmo grid de ícone
  (ex.: 24×24 com 2px stroke, padding óptico de 2px).
- **Stroke vs fill:** escolha um estilo e mantenha. Misturar arbitrariamente parece inconsistente.
- **Cantos:** raio coerente (`RADII`). Raios aninhados: o externo = interno + padding (senão o
  canto "aperta").
- **Silhueta legível:** um bom ícone/ilustração se reconhece pela silhueta em tamanho pequeno e
  em 1 cor.
- **Simplifique:** menos pontos de ancoragem, formas primárias (círculo/retângulo/triângulo).
  Detalhe demais vira ruído em telas pequenas.
- **Profundidade leve:** sombra suave + brilho de topo (sheen) dá volume sem realismo pesado.
- **Acento de cor:** ilustração funciona com paleta restrita (1–2 cores + neutros) + 1 acento.

---

## 7. HIERARQUIA VISUAL

A ordem em que o olho percorre a tela. Ferramentas para criar hierarquia, em ordem de força:
1. **Tamanho** (maior = mais importante)
2. **Peso/contraste** (negrito, cor forte sobre neutro)
3. **Cor** (acento vs neutro)
4. **Posição** (topo-esquerda primeiro em LTR; centro atrai)
5. **Espaço** (isolar destaca)
**Padrões de leitura:** "F" (texto denso) e "Z" (telas com poucos elementos). Coloque o que
importa no caminho. **Um foco primário por tela** — se tudo grita, nada é ouvido.

---

## 8. PROFUNDIDADE, SOMBRA & LUZ

- **Elevação:** quanto mais "alto" o elemento, **mais difusa e deslocada** a sombra (e levemente
  mais clara). Sistema 0–5 em `ELEVATION` / `svgShadow()` / `cssShadow()`.
- **Luz consistente:** decida uma direção (geralmente de cima) e mantenha em TODAS as sombras e
  brilhos. Luz incoerente quebra a ilusão.
- **Sombra realista** ≠ preto puro com opacidade alta. Use cor escura levemente colorida (ink)
  com opacidade baixa (12–24%) e blur generoso. Sombras "duras" só p/ estilo intencional.
- **Sheen / highlight de topo:** um leve gradiente branco translúcido no topo simula luz e dá vida.
- **Camadas:** fundo (glow radial sutil) → superfície (card) → objetos → texto. Cada camada com
  sua elevação.

---

## 9. MOVIMENTO & ANIMAÇÃO

- **Propósito:** anime para dar feedback, orientar foco e mostrar relação causa/efeito — não por
  enfeite.
- **Duração:** micro-interações 120–200ms; transições de tela 200–320ms. Longo demais irrita.
- **Easing:** quase nunca linear. Entrada desacelera (`decelerate`), saída acelera (`accelerate`),
  padrão `cubic-bezier(0.2,0,0,1)`; overshoot leve (`spring`) p/ playfulness. Ver `EASING`/`DURATION`.
- **Respeite `prefers-reduced-motion`:** reduza/elimine animação para quem pediu.
- **Anime transform/opacity** (compositadas pela GPU), não width/top/left (causam layout/reflow).

---

## 10. GERAÇÃO DE IMAGENS — FORMATOS

**Vetor (SVG):** infinitamente escalável, nítido em qualquer DPI, pequeno p/ ilustração/ícone/UI,
estilizável por CSS, animável, acessível (`<title>`/`<desc>`). **Use para:** ícones, logos,
ilustrações, gráficos, qualquer arte geométrica. Não serve p/ foto.

**Raster (mapa de bits):**
| Formato | Quando usar | Notas |
|---|---|---|
| **PNG** | arte com transparência, telas, ícones raster, line-art | sem perda; PNG-8 (paleta) p/ arquivos pequenos, PNG-24 p/ cor plena + alpha |
| **JPEG** | fotos sem transparência | com perda; qualidade ~75–85 é ótimo custo/benefício; não reexporte repetidamente (degrada) |
| **WebP** | substituto moderno de PNG/JPEG | ~25–35% menor; suporta alpha + animação; suporte universal hoje |
| **AVIF** | melhor compressão atual p/ foto | menor que WebP; encode mais lento; ótimo p/ web com fallback |
| **GIF** | evite (use APNG/WebP/vídeo) | 256 cores, pesado p/ animação |
| **ICO** | favicon legado | múltiplos tamanhos embutidos (16/32/48) |
| **PDF** | documentos/print, vetor+texto | escalável, imprimível, multipágina |

**Resolução & DPI:**
- Tela: pense em **CSS px** e exporte **@1x/@2x/@3x** (retina). Para uma imagem que ocupa 400px,
  exporte 800px (@2x) e exiba a 400 — fica nítida em telas densas.
- Print: **300 DPI** (300px por polegada). A4 a 300dpi ≈ 2480×3508px.
- `<img srcset>` + `sizes` serve a resolução certa por device.

**Espaço de cor:** web = **sRGB**. Print/foto pro pode usar Adobe RGB/Display-P3, mas converta
p/ sRGB antes de publicar na web (senão cores "lavam").

**Compressão & otimização:**
- SVG: rodar **SVGO** (remove metadados, arredonda casas decimais, junta paths). Cuidado com IDs
  necessários (gradientes/filtros) — não deixe minificar IDs usados.
- PNG/JPEG: **pngquant/oxipng**, **mozjpeg**. WebP/AVIF via `cwebp`/`avifenc` ou `sharp`.
- Sempre defina `width`/`height` (ou aspect-ratio) p/ evitar **layout shift** (CLS).

---

## 11. GERAÇÃO PROGRAMÁTICA DE IMAGENS

**SVG como fonte única → rasterizar quando precisar de PNG.** Pipelines em Node:
- **`sharp`** (libvips): `sharp(Buffer.from(svg)).png().toFile(out)` / `.webp()` / `.avif()` /
  `.resize()`. Rápido, ótimo p/ lote.
- **`@resvg/resvg-js`**: renderiza SVG→PNG fiel (bom suporte a filtros/fontes). `new Resvg(svg,
  {fitTo:{mode:'width',value:1200}}).render().asPng()`.
- **Puppeteer/Playwright (headless Chrome):** renderiza HTML/SVG/CSS exatamente como o browser e
  faz `screenshot({type:'png'|'webp'})`. Use quando o visual depende de CSS/web fonts/efeitos que
  só o Chrome reproduz (ex.: filtros complexos, `backdrop-filter`). Mais pesado.
- **Canvas (`@napi-rs/canvas` / `node-canvas`):** desenhar bitmap por API 2D; bom p/ composição
  dinâmica (texto sobre foto, watermark).

**Imagens Open Graph / social (1200×630):** gere com Satori (JSX→SVG) + resvg, ou Puppeteer.
Texto curto, fonte grande, alto contraste, logo. Defina `og:image`, `twitter:card`.

**Sprite sheets / atlas:** junte ícones SVG num `<symbol>` sprite (`<use href="#id">`) p/ reduzir
requests; ou um PNG atlas + CSS `background-position`.

**Favicons (set moderno):** `favicon.svg` (vetor, segue tema claro/escuro), `favicon.ico` (16/32),
`apple-touch-icon.png` (180), `icon-192/512.png` (PWA `manifest`), `maskable` icon (safe zone).

**Determinismo:** para arte gerada por seed, use um hash estável (FNV) → mesmos parâmetros sempre
geram a mesma imagem (reprodutível em CI). É o padrão usado neste projeto.

**Regra de ouro deste repo:** SVG é a **fonte única** (builders em JS). PNGs/derivados são
**gerados** por script — nunca edite o derivado à mão.

---

## 12. APRESENTAÇÕES / SLIDES

- **1 ideia por slide.** Slide não é documento — é apoio visual. Texto = bullets curtos ou uma
  frase-âncora, não parágrafos.
- **Regra 6×6** (≤6 bullets, ≤6 palavras) como teto, não meta. Prefira **1 imagem + 1 título**.
- **Tipografia grande:** título ≥ 30–40pt, corpo ≥ 24pt (legível no fundo da sala).
- **Contraste alto** (texto claro sobre fundo escuro ou vice-versa); cuidado com projetor que
  "lava" cores — evite cinza sobre cinza.
- **Grid e margens consistentes**; alinhe tudo; use master/template p/ posição fixa de título.
- **Hierarquia por slide:** 1 foco. Destaque com cor/seta/zoom, não com 5 caixas.
- **Dados:** gráfico > tabela; rotule direto na série (evite legenda distante); remova "chartjunk"
  (grades, 3D, sombras inúteis — Tufte).
- **Proporção:** 16:9 padrão. Exporte PDF p/ portabilidade; PNG por slide p/ web.
- **Animação:** só p/ revelar/sequenciar; evite transições espalhafatosas.
- **Acessibilidade:** alt text em imagens, contraste, não depender de cor.

---

## 13. FRONT-END (HTML / CSS / JS)

**Estrutura/semântica:** use HTML semântico (`<header><nav><main><button>`), pois é a base de
acessibilidade e SEO. `<button>` para ação, `<a>` para navegação. Landmarks ajudam leitores de tela.

**Layout CSS:**
- **Flexbox** p/ 1 eixo (barras, linhas de botões, centralização). `gap` em vez de margins.
- **Grid** p/ 2 eixos / layout de página. `grid-template-columns: repeat(auto-fit,minmax(240px,1fr))`
  cria grid responsivo sem media query.
- **Centralizar:** `display:grid; place-items:center` é o jeito curto.
- **Container queries** (`@container`) para componentes que se adaptam ao container, não à viewport.

**Responsivo:**
- **Mobile-first:** estilo base = mobile; `min-width` media queries adicionam complexidade p/ telas
  maiores.
- Unidades fluidas: `clamp(min, preferido, max)` p/ tipografia/spacing fluidos sem saltos.
- `rem` p/ tipografia (respeita zoom do usuário); `px` p/ bordas finas; `%`/`fr`/`vw` p/ layout.
- Toque: alvos ≥ 44×44px (Apple) / 48×48 (Material).

**Performance (Core Web Vitals):**
- **LCP** (carregar rápido o maior elemento): otimize imagens, `loading="lazy"` no que está abaixo
  da dobra, `preload` no herói, sirva WebP/AVIF, `width/height` definidos.
- **CLS** (estabilidade): reserve espaço de imagens/anúncios; evite injetar conteúdo que empurra.
- **INP/responsividade:** evite JS bloqueante; anime transform/opacity; debounce de input.
- Minifique/divida bundles (code-splitting), `defer` scripts, cache/Service Worker (PWA).

**Acessibilidade (a11y):**
- Navegável por teclado (ordem de foco lógica, foco visível), `:focus-visible`.
- ARIA só quando o HTML nativo não basta; "no ARIA é melhor que ARIA errado".
- `alt` significativo (vazio `alt=""` p/ decorativo), labels em inputs, `aria-live` p/ updates.
- `prefers-reduced-motion`, `prefers-color-scheme` (tema), contraste (§2).

**CSS moderno útil:** custom properties (tokens), `clamp()`, `min()/max()`, `aspect-ratio`,
`:has()`, `color-mix()`, nesting, layers (`@layer`), `gap`, logical properties (`margin-inline`).

---

## 14. DESIGN TOKENS & SISTEMAS

- **Token = decisão de design nomeada** (cor, espaço, raio, sombra, tipo) reutilizável.
- **Camadas:** *primitivos* (`blue-500:#3B82F6`) → *semânticos* (`color-action`, `color-danger`)
  → *componente* (`button-bg`). UI referencia o semântico, não o primitivo cru.
- Implemente como CSS custom properties (`--color-action`) e/ou objeto JS (este projeto: `PAL` +
  `design-kit`). Fonte única → consistência e troca de tema fácil.
- **Tema claro/escuro:** defina tokens por tema; componentes não sabem qual tema está ativo.
- Nomeie por **função**, não aparência (`--color-danger`, não `--red`) — sobrevive a mudanças.

---

## 15. CHECKLIST DE QUALIDADE (Visual Inspector)

Critérios objetivos que o `visual-inspector.html` verifica/relembra:
- [ ] **Contraste** de todo texto ≥ 4.5:1 (grande ≥ 3:1); ícones/bordas ≥ 3:1.
- [ ] Informação **não depende só de cor** (ícone/rótulo/forma redundante).
- [ ] **Espaçamento** em múltiplos de 8 (ou 4); grupos separados por mais espaço que itens internos.
- [ ] **Alinhamento:** tudo alinha a uma borda/coluna; nada "quase alinhado".
- [ ] **Hierarquia:** um foco primário claro por tela/cena.
- [ ] **Tipografia:** escala modular, 2–3 pesos, linha 45–75 car., entrelinha adequada.
- [ ] **Paleta:** restrita (primária + apoios + neutros + status); acento ≤ ~10% da área.
- [ ] **Profundidade coerente:** uma direção de luz; sombras por elevação; sheen sutil.
- [ ] **Cantos/traços** consistentes (raio e stroke padronizados).
- [ ] **Imagem certa p/ o caso:** vetor p/ arte geométrica, raster otimizado p/ foto; `width/height`
      definidos; formato moderno (WebP/AVIF) quando raster.
- [ ] **Responsivo:** legível e sem corte em mobile/tablet/desktop.
- [ ] **A11y:** teclado, foco visível, `alt`, `prefers-reduced-motion`/`color-scheme`.
- [ ] **Performance:** SVG otimizado (SVGO), lazy-load fora da dobra, sem layout shift.

> Como usar com a IA: ao revisar um visual, abra o **Visual Inspector**, carregue o SVG/print,
> rode as ferramentas (grid, baseline, matriz de contraste, extração de paleta) e percorra este
> checklist antes de aprovar.

---

## 16. Pesquisa na web dentro do Visual Inspector

O `public/visual-inspector.html` agora **pesquisa e lê páginas da web** (sem chave), para aprender com
referências reais e auditá-las na hora.

**Como funciona (proxies CORS keyless):**
- **Ler página (texto):** `https://r.jina.ai/<url>` → markdown limpo da página.
- **Extrair paleta (HTML cru):** `https://api.allorigins.win/raw?url=<url>` (fallback p/ r.jina.ai)
  → regex de hex `#RGB`/`#RRGGBB` → alimenta a **paleta** + **matriz de contraste WCAG**.
- **Pesquisar:** `https://r.jina.ai/https://duckduckgo.com/html/?q=<q>` → links extraídos do markdown
  (favicons/imagens filtrados). Clicar num resultado dispara o fetch daquela página.

**Fluxo de uso:**
1. Campo **Pesquisar** → tema (ex.: "accessible color palette"). Clique num resultado.
2. Ou cole uma URL em **Buscar** → lê o texto + extrai paleta e contraste do site real.
3. Audite a paleta extraída na matriz (vs claro/escuro) e na ferramenta de cor.

**Limites:** SPAs sem hex inline no HTML não rendem paleta (só o texto vem). Proxies públicos têm
limite de uso e podem falhar por CORS — tente outra URL. **Copyright:** usar para extrair dados de
design (cores, contraste) e aprender padrões — **não** copiar conteúdo/texto das páginas.

> Aprendizado factual já validado pela ferramenta: paletas “suaves” bem avaliadas (ex.: fundo creme
> claro + headline azul-escuro ~`#001858`) atingem AAA para texto, enquanto cores de **acento**
> (rosa/coral ~`#f582ae`/`#f45d48`) sobre fundo claro só passam como **texto grande / UI** — confirmando
> a regra: acento para destaque e elementos grandes, nunca para corpo de texto.
