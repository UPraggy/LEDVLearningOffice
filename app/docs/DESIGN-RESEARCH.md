# DESIGN-RESEARCH — fatos verificados na web (para agir com o melhor em mãos)

> Curadoria de dados **concretos** colhidos da web via o fetch do Visual Inspector (proxies r.jina.ai
> / allorigins). Aqui ficam **números e regras objetivas** que uso ao criar design, imagens, documentos
> e front-end. Conceitos e padrões ficam no `DESIGN-KB.md`; funções no `src/lib/design-kit.js`.
> Cada item marca a fonte verificada e a data da coleta.

_Coleta: 2026-05-28._

---

## 1. Core Web Vitals (front-end / performance) — web.dev
Métricas "good" medidas no **percentil 75** dos carregamentos (mobile + desktop):

| Métrica | Meta "boa" | Precisa melhorar | Ruim |
|---|---|---|---|
| **LCP** (Largest Contentful Paint) | ≤ **2,5 s** | 2,5–4,0 s | > 4,0 s |
| **INP** (Interaction to Next Paint) | ≤ **200 ms** | 200–500 ms | > 500 ms |
| **CLS** (Cumulative Layout Shift) | ≤ **0,1** | 0,1–0,25 | > 0,25 |

- INP substituiu o FID como métrica oficial de responsividade.
- Defina sempre `width`/`height` (ou `aspect-ratio`) em mídia para evitar CLS.
- LCP normalmente é a maior imagem/herói ou bloco de texto acima da dobra → priorize seu carregamento
  (`fetchpriority="high"`, pré-conexão, evitar lazy no LCP).
- _Fonte: web.dev/articles/vitals, /lcp, /inp, /cls (verificado)._

## 2. Formatos de imagem — MDN (Image file type and format guide)
- **AVIF / WebP:** melhor compressão que PNG/JPEG, suportam alta profundidade de cor, transparência e
  animação; suporte amplo (Chrome, Edge, Firefox, Opera, Safari). AVIF tende a comprimir melhor; WebP é
  o "seguro" universal. Inclua **fallback** ao usar AVIF.
- **GIF:** menos performático para animação — prefira AVIF/WebP (ou vídeo) para sequências.
- **PNG/APNG:** lossless; PNG para arte com transparência exata; APNG para animação lossless.
- **JPEG:** foto sem transparência (legado bem suportado).
- **SVG:** vetorial — ilustração/ícones/logos que escalam sem perda; ideal para o nosso pipeline.
- Regra prática: **vetor (SVG)** para arte geométrica; **raster moderno (AVIF→WebP→JPEG/PNG)** para foto,
  servido via `<picture>` com fallbacks; exporte `@2x` para densidade retina.
- _Fonte: developer.mozilla.org/.../Image_types (verificado)._

## 3. Contraste & acessibilidade — WCAG / W3C WAI
- Texto normal: **AA 4,5:1**, **AAA 7:1**. Texto grande (≥24px, ou ≥18,66px bold): **AA 3:1 / AAA 4,5:1**.
- Componentes de UI e ícones informativos: **≥ 3:1**.
- Daltonismo afeta uma parcela relevante (notadamente ~8% dos homens em deficiências no
  vermelho-verde) → **nunca** comunicar só por cor; reforçar com ícone, texto, padrão ou forma.
- Use `design-kit.js`: `wcag()`, `ensureContrast()`, `bestTextOn()`.
- _Fonte: w3.org/WAI (perspectives/quickref) + literatura WCAG 2.2 (verificado/consolidado)._

## 4. Tipografia (escala & legibilidade)
- Escala **modular** a partir de uma base (16px) por uma razão fixa: 1,200 (minor third), 1,250 (major
  third), 1,333 (perfect fourth), 1,414, 1,500, **1,618 (golden)**. Use `typeScale()`.
- Comprimento de linha de corpo: **45–75 caracteres** (~66 ideal).
- Entrelinha do corpo: **1,4–1,6**; títulos mais apertados (1,1–1,25).
- 2–3 pesos no máximo; tamanho mínimo de corpo confortável ~16px (web), maior para público idoso/baixa
  visão (nosso caso: letramento digital adulto → priorizar 18px+ e alvos grandes).

## 5. Layout, espaçamento & alvos de toque
- **Base-8** (com meio-passo 4) para todo espaçamento/raio → ritmo visual consistente. Use `spacing()`/`SPACE`.
- Alvo de toque mínimo recomendado: ~**44×44px** (iOS HIG) / ~**48×48dp** (Material) — adote 48px para
  público com baixa destreza.
- Mais espaço **entre** grupos do que **dentro** deles (proximidade de Gestalt).
- Grid de 12 colunas com gutters base-8; alinhe tudo a uma borda/coluna.

## 6. Cor & paleta (validado por amostras reais)
- Estrutura: 1 primária + apoios + neutros + cores de status; **60-30-10** (neutro/apoio/acento).
- Gerar variações por **tints/shades/tones** e harmonias (HSL), não por chute. Use `scale()`/`complement()` etc.
- Amostragem real (paletas curadas, ex.: Happy Hues) confirma: **headline escura** (~`#001858`) sobre
  fundo claro creme atinge **AAA**; **acentos** vibrantes (rosa `#f582ae`, coral `#f45d48`) sobre fundo
  claro só passam como **texto grande / UI** (~3:1) → usar acento para destaque, **nunca** para corpo.
- _Método: paletas extraídas e auditadas na matriz WCAG do inspector (verificado)._

## 7. Geração programática de imagens
- **SVG como fonte única** → rasterizar quando preciso (OG image, ícone PNG, favicon).
- Pipelines SVG→PNG: `sharp`, `@resvg/resvg-js`, `puppeteer`, `canvas` (não instalados aqui; instalar sob demanda).
- Otimização: **SVGO** (vetor), `pngquant`/`oxipng` (PNG), `mozjpeg`/`sharp` (JPEG), `cwebp`/`avifenc` (moderno).
- **OG image** social: **1200×630** (proporção ~1,91:1). Favicon: incluir 32px, 180px (apple-touch) e SVG.

## 8. Documentos & apresentações
- 1 ideia por slide; título ≥ ~30pt; alto contraste; **gráfico > tabela**; remover "chartjunk".
- Hierarquia clara (título > subtítulo > corpo); margens generosas; no máximo ~6 linhas/slide.
- Exportável: para PDF/print, usar unidades físicas e checar contraste em P&B.

## 9. Front-end (resumo acionável)
- **Mobile-first**, `clamp()` para tipografia/espaços fluidos, `grid` com `auto-fit/minmax` para cards.
- Animar só **transform/opacity**; respeitar `prefers-reduced-motion` e `prefers-color-scheme`.
- Tokens em camadas: **primitivo → semântico → componente**.
- Acessibilidade: foco visível, navegação por teclado, `alt`, rótulos, contraste (ver §3).
- Performance: ver §1; otimizar imagens (§2); evitar layout shift.

---

### Como esta doc é mantida
Abra o **Visual Inspector** → painel **Web** → pesquise um tema ou cole uma URL de referência. O texto
legível e a paleta/contraste extraídos aparecem na hora. Ao encontrar um dado objetivo novo (número,
limite, regra), adicione aqui com a fonte e a data. **Copyright:** registrar fatos/medidas com palavras
próprias — nunca copiar trechos das páginas.
