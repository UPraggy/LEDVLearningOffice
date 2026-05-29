# Mudanças V12 — Conteúdo, imagens representativas, voz, design responsivo

> Continuação do PLANO-V11. Foco desta rodada: deixar o app mais representativo,
> interativo e fiel à identidade visual, validado com Preview/Visual Inspector,
> nas proporções-alvo do guia de design (mobile 384×854, desktop 1920×1040).

## 1. Arcade — `acha_o_erro` sem sinalizar o alvo (fecha a pendência do PLANO-V11)

- `Arcade.jsx` ainda renderizava `tokens` clicáveis, que entregavam o erro pela
  própria interação. Migrado para **bloco de código neutro + alternativas A/B/C/D**
  (`find-error-code` / `find-error-options`), igual ao motor de `Interacoes.jsx`.
- Correção do rótulo do tipo (`acha_o_erro` → "acha o erro", trocando todos os `_`).
- CSS `.find-error-code`/`.find-error-options` adicionado ao `Arcade.css`.

## 2. PT-BR — acentuação restaurada no texto visível ao usuário

Os pools criados na rodada anterior estavam sem acento no texto do jogador
(chaves/slugs como `modulo:'seguranca'` permanecem sem acento, de propósito):

- `arcade-pool.js`, `relampago-pool.js`, `desafio-semana-pool.js` reescritos com
  acentuação correta (perguntas, opções, feedbacks, títulos e recompensas).
- Legendas e `alt` das imagens em `_interacoes-exemplo.js` reescritos com acento
  e descrevendo a nova arte (sem referência a "pessoa" onde a cena é de objetos).

## 3. Imagens de missão — novo estilo representativo (225 imagens)

- `scripts/generate-mission-images.mjs` reescrito: em vez de um "cartão de título"
  com ícone genérico, cada imagem monta uma **cena com objetos que representam a
  atividade**, variando por palavra-chave da missão e por uma semente determinística
  do id (missões do mesmo módulo não ficam idênticas).
  - Segurança: envelope com alerta + anzol + escudo / cadeado.
  - Mercado: planilha + gráfico de barras + moedas / documento + selo (carreira).
  - Observação: testamos personagens (pessoas) em SVG, mas ficaram ruins — a versão
    final é só de objetos, limpa e sem pessoas (decisão do Rafael).
  - Celular: telefone + balões de conversa / QR + moedas (PIX) / nuvem (backup).
  - Computador: monitor + pasta / navegador / documento / nuvem.
  - Inglês: globo + balões "Hello/Hi/Thanks/Please" / relógio (números/rotina).
- Paleta fiel à identidade (papel, tinta navy, cor do módulo, sem neon).
- 225 SVGs regerados (1 por missão do catálogo).

## 4. Desafio com imagem interativa (hotspot)

- `Hotspot` em `Interacoes.jsx` agora aceita `cenaImg` (imagem de fundo real) além do
  modo texto legado; o usuário toca no detalhe que denuncia o problema.
- Mockups interativos novos em `public/generated/interactive/`:
  - `email-phishing.svg` — toque no domínio falso do remetente.
  - `wpp-golpe.svg` — toque no aviso "novo número" antes de mandar PIX.
- Plugados em duas missões: `amb-seg-4` (phishing) e `mob-pix-7` (golpe do PIX).
- CSS `.hotspot-stage.has-img` / `.hotspot-img` adicionado.

## 5. Voz — somente Piper/Cadu (sem voz do navegador)

- `useVoiceSynthesis.js` usa exclusivamente o modelo Piper (Cadu, pt-BR) via ONNX;
  nenhum fallback para `speechSynthesis`/voz do sistema (coberto pelo teste de regressão).

## 6. Design / responsividade (guia + Notion)

- Validado nas proporções-alvo do guia de design extraídas do Notion
  (mobile 384×854, desktop 1920×1040): sidebar no desktop, bottom-nav no mobile,
  alvos de toque ≥44px, corpo ≥17px.
- **Grão de papel sutil** no fundo (`fonts.css`), inspirado na página "Cores e
  Gradientes / Fundo" do Notion (ênfase em texturas de ruído), em opacidade
  baixíssima (~3,5%) para reforçar o mood "caderno" sem prejudicar contraste.
  Desligado automaticamente no modo alto contraste.

## 7. Service Worker

- `CACHE_VERSION` de `escritorio-v2` → `escritorio-v3`: invalida o cache antigo
  (incluindo imagens de missão com nome estável) para os usuários receberem os
  assets novos no próximo acesso.

## Validação

- `npm run test:v11` — passou (voz só Piper, Arcade sem tokens, imagens locais ≥8,
  todas as missões com SVG).
- `npm run build` — passou.
- Conferência visual via Preview/Visual Inspector em mobile (384×854) e desktop
  (1280 e 1920): Home, Arcade (incl. `acha_o_erro`), Missão (imagem nova + hotspot).
