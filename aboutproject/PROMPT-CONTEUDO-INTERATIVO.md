# PROMPT — pedir conteúdo interativo novo para o Escritório

> Cole o bloco "PROMPT" mais abaixo numa IA capaz (Claude Opus, GPT-5, Gemini Advanced).
> Anexe ou cole junto: o arquivo da missão atual (ex: `data/conteudo/pc-fund.js`) e o
> guia de identidade visual `IdentidadeVisual/identidade-visual.html`.
> A IA deve devolver **JSON pronto pra colar** no `_interacoes-exemplo.js` (ou direto
> em `data/conteudo/<trilha>.js`).

---

## PROMPT (cola tudo a partir daqui)

Você vai me ajudar a **reinventar o jeito de ensinar** numa plataforma chamada
**Escritório** — um curso de qualificação digital escrito (sem vídeo) que atende
desde uma criança de 10 anos curiosa até um adulto de 60 anos buscando recolocação
no mercado. Eu quero formatos de **aula, prática e desafio** mais variados,
divertidos e adultos, mantendo o tom respeitoso da marca.

---

### 1. CONTEXTO DO PRODUTO (leia antes de gerar qualquer coisa)

- **Nome:** Escritório.
- **Promessa:** uma carreira simulada. O usuário entra como Estagiário e sobe até
  Coordenador concluindo missões. XP, ofensiva (streak Duolingo-style), troféus,
  escudo de proteção de ofensiva.
- **5 módulos** com cor própria:
  - Computador (navy `#1B2A4E`)
  - Celular (sky `#4F7CAC`)
  - Mercado & Especialização (coral `#E25B3F`)
  - Segurança Digital (sage `#4F7A55`)
  - Inglês A1→B1 (plum `#6B3F7A`)
- **31 trilhas / 225 missões.** Cada missão tem 4 etapas obrigatórias:
  Aula → Prática → Desafio → Validação. Pode ter ainda uma etapa opcional "Jogar"
  (`interacoes[]`) que aparece entre Aula e Prática.
- **Front-only.** O progresso fica no `localStorage`. Nada de backend.
- **PWA responsiva** (mobile + desktop, mesmo código).

### 2. AUDIÊNCIA (não esqueça nunca)

A mesma missão precisa funcionar pra:
- Criança de 10 anos curiosa (não pode infantilizar — ela percebe).
- Adolescente/jovem (não pode soar paternalista).
- **Adulto 40-65 anos retornando ao mercado** (é nosso público principal de teste —
  os pais do dono do projeto).
- Idoso 60+ aprendendo do zero (precisa de fonte legível, alvos de toque grandes,
  zero gíria, zero anglicismo desnecessário).

### 3. VOZ DA MARCA (regras INVIOLÁVEIS)

✅ **Faça assim:**
- Adulto competente conversando com adulto competente.
- "Boa! Você travou a célula." (reconhece o feito)
- "Quase. Lembre da tecla F4." (erro com pista, sem julgamento)
- "Concluir · +60 XP" (mostra o ganho, valoriza o esforço)
- "Você está há 7 dias seguidos. Vamos pelo oitavo?" (convida, não pressiona)
- Verbos de comando claros: "Clique", "Digite", "Aperte", "Selecione".
- Vocabulário simples: "programa" (não "software"), "botão direito" (não
  "right-click"), "salvar" (não "save").

❌ **Nunca:**
- "É super fácil!" / "É simples" / "É só" / "Obviamente" / "Como você já sabe"
  → diminui quem está aprendendo.
- "Errado ❌" → punitivo, gera medo de tentar.
- "Vamos lá, campeão!" / "Bora, time!" → infantiliza adulto.
- "Otimize seu workflow de produtividade" → jargão SaaS.
- "Você perdeu sua sequência 💔" → emoji + culpa = retenção pior.
- Anglicismo gratuito ("workflow", "skill", "feedback" exceto quando o termo é o
  conceito ensinado, como em "PROCV", "Cmd+C").

### 4. IDENTIDADE VISUAL (resumo dos tokens — use coerentemente)

- **Paleta base:** papel `#F2EBDD` · tinta `#1A2540` · coral `#E25B3F`
  (ação primária) · honey `#D49545` (XP/conquista) · sage `#4F7A55` (sucesso) ·
  streak `#E07A3A` (ofensiva).
- **Tipografia:** Fraunces (serifa editorial nos títulos) + Plus Jakarta Sans
  (corpo) + JetBrains Mono (técnico/atalhos/metadados).
- **Estética:** caderno bonito de produtividade. Editorial estilo Awwwards/Recent.design/
  Stripe — longe do SaaS genérico. Acolhedor mas adulto.

### 5. INSPIRAÇÕES VISUAIS PARA OS FORMATOS

Pense em coisas que esses sites e produtos fazem bem:
- **Stripe.com:** ilustrações vetoriais finas + microinterações.
- **Linear.app:** keyboard hints + arquitetura de informação limpa.
- **Duolingo:** repetição espaçada gentil (sem ranking competitivo).
- **Notion** e **Recent.design:** cards editoriais, quote-cards, comparações vs.
- **NYT/The Pudding:** "scrollytelling" leve (passos guiados narrativos).
- **Brilliant.org:** explicação interativa onde o aluno **manipula** o conceito
  em vez de ler sobre ele.

---

### 6. O QUE JÁ EXISTE (não reinvente, EXTENDA)

#### 6.1. Blocos editoriais da Aula (`aula.blocos[]`)

Cada item tem um `tipo`. Esses já estão implementados:

| tipo | payload | usado pra |
|---|---|---|
| `paragrafo`   | `{ titulo?, texto }` | parágrafo enriquecido |
| `callout`     | `{ variante: 'info'\|'warn'\|'ok'\|'honey', titulo?, texto }` | destaque colorido |
| `do_dont`     | `{ titulo?, do:[strings], dont:[strings] }` | "faça/evite" duas colunas |
| `versus`      | `{ titulo?, a:{titulo,pontos:[]}, b:{titulo,pontos:[]} }` | comparar A vs B |
| `timeline`    | `{ titulo?, passos:[{quando,titulo,texto}] }` | cronograma vertical |
| `quote`       | `{ texto, autor? }` | citação navy com aspas |
| `stats`       | `{ items:[{num,lbl}] }` | números editoriais grandes |
| `atalho`      | `{ tecla:'Ctrl+C', desc }` | atalhos de teclado em `<kbd>` |
| `aula_steps`  | `{ titulo?, items:[{titulo,texto}] }` | grid de passos numerados 01–04 |

#### 6.2. Interações de jogo (`interacoes[]`)

Cada item tem um `tipo` e um `xp` opcional (default 5–15). Já implementados:

| tipo | payload-chave |
|---|---|
| `choose`      | `{ prompt, opcoes:[], resposta:i, feedback_ok?, feedback_err? }` |
| `multi`       | `{ prompt, opcoes:[], respostas:[i,j,...] }` |
| `true_false`  | `{ prompt, opcoes:['Verdadeiro','Falso'], resposta:0\|1 }` |
| `fill_blank`  | `{ prompt, frase:'... ___ ... ___ ...', tokens:[], respostas:[] }` |
| `drag_match`  | `{ prompt, labelA, labelB, colA:[], colB:[], pares:[[a,b],...] }` |
| `sort_order`  | `{ prompt, passos:[] }` (na ordem CORRETA — o componente embaralha) |
| `find_error`  | `{ prompt, tokens:[{txt, ok?:false, sep?:true}] }` |
| `hotspot`     | `{ prompt, cena:'desc', areas:[{x,y,w,h,ok?}] }` (% da viewport) |
| `flashcard`   | `{ prompt, cards:[{frente,verso}] }` |
| `sim_planilha`| `{ prompt, cols:['A','B','C'], linhas:[[...]], celulaAlvo:{col,linha}, respostas:[strings] }` |
| `sim_chat`    | `{ prompt, mensagens:[{de:'outro'\|'eu'\|'alerta', txt}], acoes:[], resposta:i }` |

#### 6.3. Prática (`pratica`)

Hoje é um passo a passo numerado com **checklist interativo**: cada passo pode
ser marcado feito, barra de progresso. Schema:
`{ instrucao, passos:[ 'texto' \| { texto, ... } ] }`.

#### 6.4. Desafio (`desafio`)

Hoje é um cenário + lista de requisitos + dica opcional + **upload de evidência**
(foto/print salvo no localStorage como portfólio). Schema:
`{ cenario, requisitos:[], dica? }`.

#### 6.5. Validação (`validacao`)

Checklist obrigatório de honestidade. O usuário precisa marcar TODOS pra fechar
a missão. Schema: `validacao: [ 'frase 1', 'frase 2', ... ]`.

---

### 7. O QUE EU QUERO QUE VOCÊ INVENTE

Crie **novos formatos** que vão direto pra um desses 3 lugares:

#### A. Novos `blocos[]` para a Aula

Formatos editoriais que ainda não temos. Use a inspiração do §5. Sugestões pra você
considerar (mas pode propor outras):

- **`mini_glossario`** — termo + ícone + 1 frase de definição + 1 mini-exemplo, em grid.
- **`anatomia`** — uma "tela falsa" (cabeçalho/corpo/rodapé) com setas etiquetando
  cada parte. Tipo um diagrama anotado.
- **`progresso_visual`** — uma régua com "antes ↔ depois", ou nível 0 → 5.
- **`mito_verdade`** — claim popular + ✓ ou ✕ + explicação curta.
- **`exemplos_reais`** — 3 cards com "situação cotidiana → como aplicar o conceito".
- **`tabela_comparativa`** — tabela limpa de 2–4 colunas (Word vs Docs, Pix vs TED, etc).
- **`mapa_mental`** — núcleo + ramos (1 nível de profundidade — não precisa de SVG complexo).
- **`linha_do_tempo_pessoal`** — "o que muda na sua vida em 1 semana / 1 mês / 1 ano
  fazendo essa trilha".

Pra cada formato, devolva:
- **Nome do `tipo`** (snake_case, em português, ex: `mito_verdade`).
- **Payload completo** que o JSON precisa ter.
- **1 exemplo real** populado pra uma missão do projeto (ex: PIX, Excel, inglês A1).
- **Justificativa pedagógica curta** (2 linhas): por que esse formato ajuda a fixar
  melhor que parágrafo comum.
- **Pseudo-render em ASCII ou descrição visual** (o suficiente pra eu codar o
  componente em React + vanilla CSS).

#### B. Novas `interacoes[]` (mini-jogos)

Mais formatos de exercício além dos 11 atuais. Sugestões pra considerar:

- **`audio_match`** — toca uma palavra/frase em inglês (Web Speech API), aluno escolhe
  a tradução. Ou identifica sotaque/pronúncia.
- **`speak_check`** — aluno fala uma frase pelo microfone (Web Speech Recognition);
  o sistema confere se a transcrição bate. (Inglês.)
- **`build_email`** — montar um e-mail profissional arrastando assunto / saudação /
  corpo / despedida na ordem certa.
- **`scenario_branch`** — história ramificada estilo "escolha sua aventura". 2–3
  decisões em sequência levam a finais diferentes. Cada nó tem feedback.
- **`spot_phishing`** — exibir um e-mail/SMS realista; aluno clica nos sinais de fraude
  (URL suspeita, urgência falsa, erro de grafia, remetente fake). Variante mais rica
  do `find_error`.
- **`calc_live`** — input numérico que mostra resultado em tempo real (ex: simulação
  de juros do PIX, % de desconto). Aluno precisa atingir um alvo.
- **`memory_pairs`** — jogo da memória clássico, vira cartas pra parear termo↔definição.
- **`flowchart_complete`** — preencher os nós em branco de um fluxograma simples
  (ex: passo a passo de denúncia de golpe, cadastro Gov.br).
- **`role_play`** — duas falas (você ↔ recrutador) com lacunas; aluno escolhe a
  resposta certa em cada turno.
- **`drag_to_zone`** — arrastar itens pra "pastas" certas (ex: "documentos urgentes" /
  "spam" / "arquivar").
- **`time_pressure`** — variante curta de qualquer um dos acima, com timer (15s).
  Bom pra Segurança ("você reconhece o golpe em 10 segundos?").

Pra cada interação nova, devolva o **schema exato do payload** + 1 exemplo
preenchido + ideia de **som** que ela deveria tocar (já temos um `Som.tocar('preset')`
— vou criar presets sob demanda).

#### C. Novos formatos de Desafio

Hoje o desafio é cenário + requisitos + upload de foto. Quero **modalidades** diferentes:

- **`desafio_planilha`** — sandbox de planilha embarcada onde o aluno precisa preencher
  células específicas. Validação automática contra valores esperados.
- **`desafio_email`** — editor de e-mail simulado com checklist automático (tem assunto?
  saudação? menos de X palavras? tem fecho?).
- **`desafio_perfil_linkedin`** — formulário com campos (título, resumo, experiência);
  IA local (heurística) ou checklist avalia se está completo e dentro de boas práticas.
- **`desafio_decisao`** — caso real ("seu amigo recebeu esse SMS, o que você responde?")
  com texto livre + checklist de auto-avaliação.
- **`desafio_kit_familia`** — você ensina alguém da família (registrar com print/screen).
  Validação por evidência + autoavaliação.
- **`desafio_audio_pronuncia`** — gravar e ouvir sua própria pronúncia em inglês.
  (Web Audio + getUserMedia.)
- **`desafio_apresentacao`** — slides simples (1–3 telas) que o aluno preenche e
  pode exportar como PNG/PDF.
- **`desafio_diario`** — entrada de "1 vez por dia durante 5 dias" — vira hábito.

Pra cada modalidade de desafio, devolva: schema + exemplo populado + critério de
sucesso (o que conta como "concluído").

---

### 8. ESTRUTURA DA RESPOSTA QUE EU ESPERO

Devolva **3 seções claras**, cada uma com 3–6 propostas. Pra cada proposta:

1. **`tipo`** (snake_case) e nome legível em português.
2. **Schema JSON do payload** (em formato JSON com comentários inline `// ...`).
3. **1 exemplo real e populado** pra uma missão específica do projeto (cite
   `trilhaId-missaoId` se possível — ex: `mob-pix-7`, `en-a1-basico-1`, `pc-excel-5`).
4. **Justificativa pedagógica** (2 linhas — por que isso ensina melhor).
5. **Hints de implementação React** (estado, componente, libs sugeridas — mas
   evite libs pesadas; prefira vanilla ou algo bem pequeno).
6. **Som sugerido** se aplicável (descrição: "ascendente 2 notas, ~150ms", etc).
7. **Considerações de acessibilidade** — alvo de toque, contraste, alternativa pra
   quem não pode usar drag, mic, etc.

### 9. FILTRO DE QUALIDADE — só me passe propostas que…

- Funcionem **offline** (front-only, sem backend, sem chamadas de API externas).
- Tenham **versão acessível** se dependerem de mic/drag/áudio (alternativa por teclado).
- **Não infantilizem** — nada de emoji infantil, "vamos campeão", confete excessivo.
- Sejam **viáveis em mobile 390px** (não dependa de hover, drag preciso pixel-perfect,
  ou textos longos demais em coluna estreita).
- **Tenham feedback imediato** — não deixe o aluno terminar sem saber se acertou
  ou onde errou.
- **Respeitem `prefers-reduced-motion`** — animações intensas devem cair pra versões curtas.
- **Sem dependência de cor sozinha** pra transmitir significado (use ícones + texto).

### 10. EXEMPLO DE MISSÃO PRA VOCÊ ATERRISSAR

Pega de referência a missão `mob-pix-7` ("Os 5 golpes de PIX mais comuns"). Hoje
ela tem `aula.blocos: [quote, stats, do_dont, timeline]` + `interacoes:
[sim_chat, find_error, multi, sort_order]`. Use ela como gabarito de profundidade
e tom — mas proponha formatos **novos** que ela ainda não usa.

### 11. PROBLEMAS QUE ESTOU TENTANDO RESOLVER COM SEUS FORMATOS

- O aluno **lê demais e pratica de menos**. Quero que o aprendizado seja por
  manipulação direta, não só leitura.
- Faltam **micro-vitórias** dentro da própria aula (XP bônus por interação curta).
- Falta **diversidade de modalidade** — hoje toda missão parece igual. Quero que
  algumas sejam "narrativas", outras "puzzle", outras "sandbox", outras "sorting".
- A faixa 60+ precisa de **mais redundância visual** (ícone + texto + cor + posição),
  enquanto a faixa 10–25 precisa de **mais ritmo/desafio** pra não tediar.

---

**Pronto. Me devolva as 3 seções (A: blocos de aula novos, B: interações novas,
C: modalidades de desafio novas) com tudo isso considerado. Capricha — quero
implementar a maioria.**

## (fim do PROMPT)

---

## Como usar o que a IA devolver

1. Leia as propostas. Marque as que cabem na primeira leva (3–5 propostas).
2. Volta aqui na nossa thread e cola o JSON / a especificação.
3. Eu implemento:
   - Novo tipo em `Interacoes.jsx` ou `AulaRica.jsx` (componente React + CSS).
   - Eventualmente um novo preset de som em `Som.jsx`.
   - Populo o `_interacoes-exemplo.js` ou direto a missão em `data/conteudo/<trilha>.js`.
   - Documento o tipo novo em `FRONTEND-IMPL.md` §6.1/§6.2.
4. Rodamos screenshot via VI pra validar mobile + desktop.

> **Lembrete:** quanto mais específica a missão de exemplo, melhor a implementação.
> Se a IA devolver schemas vagos, pede pra ela completar com 1 exemplo populado e
> renderizado em ASCII.
