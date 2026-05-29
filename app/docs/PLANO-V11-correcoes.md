# Plano V11 — Correções e Melhorias (pré-implementação)

> Documento gerado **antes** de qualquer alteração de código, conforme solicitado.
> Branch alvo: `feature/voz-piper-mentor-conteudo` (já ativa).
> Credenciais git: Rafael MR <rafaelmoreira2001ofc@gmail.com>.

## Resumo da solicitação do usuário (verbatim)

> "a parte EXCEL · acha o_erro Fórmula com erro: =PROCV(E2, A:C; 3; 0) quero que esse tipo de desafio tenha mais botões ou não sinalize onde está o erro, prefiro que não sinalize, no desafio relampago, quero mais desafios misturados, o mentor pode ser duas mensagem por dia e quando clico não é para expandir embaixo, quero que expand já na mensagem, o som não está funcionando, o Desafio da semana quero varios também, quero que nas atividades e missões tenha imagens de exemplo, pode pgar na internet, quero que o kata diario e esses desafios diário sejam conformee o nivel do usuario em cada modulo, e o desafio relampago quando eu respondo queroq e continue marcado mesmo resetando a pagina, quero que gere imagens para essas missões e desafios"

---

## 1. `find_error` — sem destacar o erro, com botões de alternativa (#59)

### Estado atual
- **Arquivo**: `app/src/components/Interacoes.jsx` (função `FindError`, ~linha 336+)
- **Comportamento**: renderiza `item.tokens` como spans clicáveis; ao clicar, destaca verde/vermelho de acordo com `t.ok === false`. Visualmente *sinaliza* onde estão os erros pelo próprio fato de cada token ser clicável.
- **Schema atual dos itens**: `{ tipo:'find_error', tokens:[{txt, ok?, sep?}, ...] }`
- **Discrepância já existente**: `app/src/data/conteudo/_interacoes-exemplo.js` já tem itens novos no shape `{ codigo, opcoes:[...], resposta:N }` (pc-excel-3) que **não funcionam** com o componente atual.

### Mudança planejada
- Aceitar novo schema **dual**:
  - **Novo (preferido)**: `{ tipo:'find_error', codigo:'=PROCV(E2, A:C; 3; 0)', opcoes:['Separador ; misturado com ,', 'Função inexistente', ...], resposta: 0, feedback_ok, feedback_err }`
  - **Legado**: `{ tokens:[...] }` continua funcionando para retro-compat.
- UI nova:
  - Bloco `<pre>` com a fórmula/código **sem destaque** algum.
  - Lista de 3–4 botões (`opcoes`) — usuário clica numa alternativa.
  - Feedback ao clicar: pinta a escolhida verde/vermelho + mostra a correta.

### Arquivos a tocar
- `app/src/components/Interacoes.jsx` — função `FindError`.
- `app/src/assets/css/Interacoes.css` — adicionar `.find-error-code` (bloco monospace) e variantes de botão.

### Critério de aceite
- Item com `codigo`+`opcoes` renderiza bloco de código + N botões; nenhuma marcação visual prévia.
- Item legado com `tokens` continua funcionando.

---

## 2. Desafio Relâmpago — mais variedade + persistência (#60)

### Estado atual
- **Arquivo**: `app/src/components/screens/HomePage.jsx`, ~linhas 79-84 e 283-307.
- **Comportamento**: pergunta **única hardcoded** ("Você recebe um WhatsApp do seu filho pedindo PIX...") com 3 opções. Estado em `useState`(`lightAns`) — **perde a resposta ao recarregar**.

### Mudança planejada
1. Criar `app/src/data/relampago-pool.js` com 10–15 perguntas (tipos: golpe, fórmula, atalho, segurança, atendimento).
2. Sortear 1 por dia com seed determinística baseada na data (igual Arcade).
3. Persistir resposta em `progresso.relampago[hoje] = { idx, escolha, ok }` via `atualizar()` do `AppContext`.
4. Ao montar a HomePage, hidratar `lightAns` a partir de `progresso.relampago[hoje]`.

### Arquivos a tocar
- `app/src/data/relampago-pool.js` (novo).
- `app/src/components/screens/HomePage.jsx` — substituir hardcode pela seleção do pool + leitura/escrita em `progresso.relampago`.

### Critério de aceite
- Reload da página mantém a resposta marcada e o feedback.
- Cada dia traz uma pergunta diferente do pool.

---

## 3. Mentor — máx. 2 msg/dia + expansão IN-PLACE (#61)

### Estado atual
- **Arquivo**: `app/src/components/screens/Mentor.jsx` (184 linhas).
- **Layout**: `.mentor-grid` com `.mentor-list` (cards à esquerda) + `.mentor-detail` (painel direito que abre o item clicado). Exatamente o "expandir embaixo/ao lado" que o usuário **não quer**.
- **Geração**: `atualizarInboxMentor()` é chamado em `useEffect` sem limite por dia.

### Mudança planejada
1. **Limite diário**: em `atualizarInboxMentor` (arquivo a localizar — provavelmente `AppContext.jsx` ou `mentor-pool.js`), filtrar para no máximo 2 mensagens novas com `ts >= início do dia atual`.
2. **UI**: refatorar `Mentor.jsx`:
   - Remover `.mentor-detail` (painel separado).
   - Cada card vira *accordion* — clicar abre/fecha o conteúdo completo (corpo + ações + composer) **dentro do próprio card**.
   - `openId` ainda controla qual está expandido; um por vez.

### Arquivos a tocar
- `app/src/components/screens/Mentor.jsx` (refatoração estrutural).
- `app/src/components/subComponents/AppContext.jsx` (ou onde estiver `atualizarInboxMentor`) — adicionar limite diário.
- `app/src/assets/css/Screens.css` — ajustar `.mentor-grid`/`.mentor-card` para card expansível.

### Critério de aceite
- Nunca mais que 2 cartas novas no dia.
- Clicar num card o expande no lugar; nenhum painel separado.

---

## 4. Som não está funcionando (#62)

### Estado atual
- **Arquivo**: `app/src/components/subComponents/Som.jsx` (167 linhas).
- Web Audio API; `_arm()` espera primeiro `pointerdown/keydown/touchstart` em `window` para `_ctx.resume()`.
- `_baseGain = 0.18`.
- Hipóteses do problema:
  - `preferencias.somAtivo` pode estar `false` por padrão.
  - `_arm` pode rodar antes do AudioContext existir e nunca religar.
  - Em PWA standalone, a primeira interação pode ser via click direto em rota sem disparar `pointerdown` no window (algumas libs interceptam).

### Mudança planejada
1. Verificar default em `AppContext` para `preferencias.somAtivo` — garantir `true`.
2. Refatorar `Som.jsx`:
   - Criar o `AudioContext` *sob demanda* dentro de `tocar()` (lazy).
   - Tentar `resume()` em cada chamada se `state === 'suspended'`.
   - Adicionar log silencioso em modo dev (`console.debug`) para diagnose.
3. Adicionar uma chamada de "warm up" no primeiro click do botão de Som/toggle/preferências.

### Arquivos a tocar
- `app/src/components/subComponents/Som.jsx`.
- Possivelmente `AppContext.jsx` (default `somAtivo`).

### Critério de aceite
- Som toca em interações (success/error/click) sem precisar de gesto extra após o primeiro clique.
- Toggle de Som no header funciona imediatamente.

---

## 5. Desafio da Semana — múltiplos (#63/#64)

### Estado atual
- **Arquivo**: `app/src/components/screens/HomePage.jsx`, ~linhas 47-60.
- Hardcoded: `{ titulo: 'Semana da Segurança', sub:'...', reward:120 }`.

### Mudança planejada
1. Criar `app/src/data/desafio-semana-pool.js` com 6–10 variantes (Segurança, Excel, WhatsApp, IA, Carreira, Acessibilidade, etc.) — cada uma com `slug`, `titulo`, `sub`, `reward`, `match` (regex para filtrar `atividadeRecente`).
2. Selecionar por *ISO week number* (mesma semana = mesmo desafio para todos).

### Arquivos a tocar
- `app/src/data/desafio-semana-pool.js` (novo).
- `app/src/components/screens/HomePage.jsx`.

### Critério de aceite
- A cada semana ISO, o card "Desafio da Semana" muda de tema.
- Progresso continua sendo calculado a partir de `atividadeRecente` filtrado pelo `match` do desafio ativo.

---

## 6. Imagens de exemplo em atividades e missões (#65)

### Estado atual
- Missões só contêm `interacoes` (texto/perguntas/etc.). Nenhuma referência a imagens.

### Mudança planejada
1. Definir novo tipo de interação: `{ tipo:'imagem', url:'https://...', alt:'...', legenda:'...' }`.
2. Adicionar handler `Imagem` em `Interacoes.jsx` (mapa de componentes).
3. URLs vindas da internet são permitidas (usuário autorizou). Preferir CDNs estáveis: Wikimedia Commons, Unsplash, GitHub raw, Picsum (placeholders).
4. Distribuir 1–2 imagens-exemplo em missões existentes:
   - `pc-excel-*`: screenshot de planilha.
   - `seg-*`: print de mensagem suspeita.
   - `mob-wpp-*`: print do WhatsApp.
   - etc.

### Arquivos a tocar
- `app/src/components/Interacoes.jsx` — novo componente `Imagem` + entry no mapa.
- `app/src/assets/css/Interacoes.css` — `.iax-imagem` (figure responsiva).
- `app/src/data/conteudo/_interacoes-exemplo.js` — adicionar blocos `{tipo:'imagem'...}` nas missões relevantes.

### Critério de aceite
- Pelo menos 5 missões diferentes exibem uma imagem.
- Imagens responsivas (max-width 100%) com legenda visível.

---

## 7. Kata/desafios diários por nível do módulo (#66)

### Estado atual
- **Arquivo**: `app/src/components/screens/Kata.jsx` (102 linhas) — kata diário sem filtro por nível.
- `Arcade` e Relâmpago também ignoram nível.

### Mudança planejada
1. Cada item do pool (`arcade-pool.js`, `kata-pool.js` se existir, `relampago-pool.js` novo) ganha campo `nivel: 1|2|3` e `modulo?: 'excel'|'seg'|'wpp'|...`.
2. O nível do usuário em cada módulo já existe em `progresso.modulos[modId].nivel` (verificar).
3. Sortear preferindo itens cujo `nivel <= nivel_atual_modulo`. Se módulo não especificado no item, considerar nível médio do usuário.

### Arquivos a tocar
- `app/src/data/arcade-pool.js` — adicionar `nivel`/`modulo` aos itens.
- `app/src/data/kata-pool.js` (verificar existência).
- `app/src/data/relampago-pool.js` (novo, criar já com nivel).
- `app/src/components/screens/Kata.jsx` e `Arcade.jsx` — usar filtro por nível ao sortear.

### Critério de aceite
- Usuário iniciante (nível 1) não vê desafios marcados como nível 3.
- Conforme avança em um módulo, novos desafios desbloqueiam.

---

## Ordem de execução (commits)

1. **#62 Som** — risco baixo, isolado. Commit: `fix(som): garantir resume() lazy do AudioContext`.
2. **#59 find_error** — schema novo + retro-compat. Commit: `feat(find_error): suporte a alternativas em botões sem sinalizar erro`.
3. **#60 Relâmpago pool + persistência**. Commit: `feat(relampago): pool de perguntas + persistência diária`.
4. **#64 Desafio da semana pool**. Commit: `feat(home): rotacionar desafio da semana por ISO week`.
5. **#65 Imagens** — interaction type + 5 missões. Commit: `feat(interacoes): tipo imagem + exemplos em missões`.
6. **#66 Nível por módulo**. Commit: `feat(daily): filtrar katas e desafios pelo nível do módulo`.
7. **#61 Mentor 2/dia + accordion**. Commit: `feat(mentor): limite de 2 msg/dia + expansão in-place`.

Cada commit: testar localmente, build, push, PR já está aberto na branch `feature/voz-piper-mentor-conteudo`.

---

## Próximo passo

Aguardando aprovação deste plano. Após "ok", inicio pela tarefa #62 (Som).
