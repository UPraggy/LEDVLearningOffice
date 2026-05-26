# Schema de Exercícios Interativos — Especificação

> **Planejamento de ESTRUTURA/FUNCIONALIDADE** (sem front-end). Define o campo opcional
> `interacoes[]` de cada missão, os 6 tipos, suas regras de validação/feedback, a pontuação
> e como os resultados alimentam a repetição espaçada. Complementa `REVISAO.md §4` e `BACKEND.md`.
> Atualizado: 2026-05-24.

---

## 1. Onde fica e como é consumido

- Cada missão (em `data/conteudo/<trilha>.js`) ganha um campo **opcional** `interacoes: [...]`.
- Retrocompatível: missão **sem** `interacoes` segue funcionando só com leitura + checklist (`validacao`).
- O app, na etapa "Prática" ou "Desafio", percorre `interacoes[]` e renderiza um exercício por vez,
  com **feedback imediato** a cada um. A correção é **client-side** (a resposta certa está no dado).
- Cada tentativa pode ser registrada em `exercise_attempts` (ver `BACKEND.md`/`schema.sql`) para
  métricas e repetição espaçada — opcional na Fase 1, recomendado na Fase 3.

---

## 2. Campos comuns a TODOS os tipos

```js
{
  id: 'soma-1',            // string única dentro da missão (estável; usada em métricas/repetição)
  tipo: 'complete',        // 'complete' | 'find_error' | 'choose' | 'order' | 'match' | 'simulate'
  enunciado: 'Complete a fórmula de soma:',   // instrução curta
  // ...campos específicos do tipo (ver §3)...
  dica: 'Toda fórmula começa com =',           // opcional — mostrada se errar/pedir ajuda
  explicacao: 'SOMA(intervalo) junta vários números.', // mostrada após responder (ensina)
  xp: 10,                  // opcional — XP do exercício (default por dificuldade; ver §4)
  dificuldade: 'facil',    // 'facil' | 'medio' | 'dificil' (ordena/curva e ajuda na repetição)
  tags: ['excel','soma']   // opcional — pra agrupar/embaralhar na revisão (interleaving)
}
```

- **`resposta`/`correta`** ficam no dado (correção offline). Não é "seguro" contra trapaça —
  mas é um curso pessoal de aprendizado, não prova; tudo bem.
- **Feedback** é padronizado: acerto → mensagem positiva curta; erro → mensagem gentil + `explicacao`.
  Textos default vêm do app; cada exercício pode sobrescrever com `feedbackOk`/`feedbackErro`.

---

## 3. Os tipos (campos específicos + validação)

### 3.1 `complete` — preencher lacuna
```js
{ tipo: 'complete',
  enunciado: 'Complete a fórmula de soma de A1 até A5:',
  texto: '=____(A1:A5)',        // a lacuna é o "____"
  resposta: ['SOMA','SUM'],     // string OU array de aceitos (sinônimos/idiomas)
  normalizar: { caseInsensitive: true, trim: true, ignorarAcento: true }, // regras de comparação
  feedbackOk: 'Boa! ✅',
  feedbackErro: 'Quase — qual função soma vários números?' }
```
- **Validação:** normaliza a entrada (conforme `normalizar`) e compara com `resposta`
  (se array, basta bater um). Aceitar variações comuns (ex: vírgula/ponto, EN/PT).
- **Múltiplas lacunas (opcional):** `texto` com vários `____` e `resposta: [['SOMA'], ['A1:A5']]`.

### 3.2 `find_error` — encontrar/corrigir o erro
```js
{ tipo: 'find_error',
  enunciado: 'Ache e corrija o erro:',
  texto: 'She have a car.',
  errado: 'have',               // o trecho errado (pra destacar/validar o toque)
  resposta: 'has',              // correção esperada (mesma normalização do complete)
  explicacao: '3ª pessoa (she/he/it): have → has.' }
```
- **Validação:** o usuário marca o trecho e/ou digita a correção. Confere `resposta`.
- **Variante "só apontar":** sem `resposta`, só `errado` — valida se clicou no trecho certo.

### 3.3 `choose` — escolher a opção/decisão correta
```js
{ tipo: 'choose',
  enunciado: 'O "banco" liga pedindo o código do SMS. O que fazer?',
  opcoes: ['Passar o código', 'Desligar e ligar no número oficial', 'Pedir pra repetir'],
  correta: 1,                   // índice (0-based) OU array p/ múltiplas corretas
  multipla: false,              // true = pode haver mais de uma correta
  embaralhar: true,             // embaralha a ordem das opções a cada exibição
  explicacao: 'Banco nunca pede código. Desligue e verifique pelo canal oficial.' }
```
- **Validação:** compara o(s) índice(s) escolhido(s) com `correta`. Se `multipla`, exige acertar o conjunto.
- **Feedback por opção (opcional):** `feedbackOpcoes: ['Risco!', 'Isso! ✅', 'Não resolve']`.

### 3.4 `order` — ordenar passos (sequência)
```js
{ tipo: 'order',
  enunciado: 'Coloque os passos do PIX seguro na ordem:',
  itens: ['Confirmar o nome do recebedor','Digitar o valor','Informar a chave','Confirmar com senha'],
  ordemCorreta: [2,1,0,3],      // índices na ordem certa (referindo a `itens`)
  explicacao: 'Sempre confira o NOME antes de confirmar.' }
```
- **Validação:** a ordem montada bate com `ordemCorreta`. Útil pra processos (PIX, currículo, reunião).

### 3.5 `match` — relacionar pares (ligar colunas)
```js
{ tipo: 'match',
  enunciado: 'Relacione o inglês ao português:',
  pares: [ ['Hello','Olá'], ['Thanks','Obrigado'], ['Goodbye','Tchau'] ],
  embaralhar: true,
  explicacao: 'Cumprimentos básicos.' }
```
- **Validação:** cada par ligado deve coincidir com `pares`. Ótimo pra vocabulário (Inglês) e termos.

### 3.6 `simulate` — simulação de interface (sem front-end aqui; só o DADO/roteiro)
```js
{ tipo: 'simulate',
  interface: 'whatsapp',        // 'whatsapp' | 'excel' | 'chat' | 'email' (o app decide o visual)
  enunciado: 'Identifique o sinal de golpe nesta conversa.',
  roteiro: [                    // mensagens/células do mock (dado, não layout)
    { de: 'Desconhecido', hora: '14:02', texto: 'Mãe, perdi meu celular' },
    { de: 'Desconhecido', hora: '14:03', texto: 'Faz um PIX urgente pra essa chave' }
  ],
  // o "exercício" embutido (geralmente um choose/find_error sobre o roteiro):
  pergunta: { tipo: 'choose', enunciado: 'Qual é o sinal de golpe?',
              opcoes: ['Urgência + número novo + dinheiro','Ele disse "mãe"'],
              correta: 0, explicacao: 'Pressa + número novo + pedido de dinheiro = golpe.' } }
```
- **Validação:** delega ao exercício embutido em `pergunta` (reaproveita `choose`/`find_error`).
- O `roteiro` é só **conteúdo** (texto das mensagens/células). O visual do mock é decisão do front
  (não definido aqui — só a estrutura de dados).

---

## 4. Pontuação, feedback e progresso

- **XP:** cada exercício soma XP (default por dificuldade: fácil 5 · médio 10 · difícil 15) ao XP
  da missão. A missão só é "concluída" pela `validacao` (checklist) — exercícios são reforço, não bloqueio.
- **Feedback imediato (regra):** acerto e erro mostrados NA HORA, com `explicacao`. Erro é gentil,
  permite **tentar de novo** (não "game over"). Acessível: ícone + cor + texto (não só cor).
- **Tentativas (FRONT-ONLY):** registrar `{ exercicio_id, acertou, tentativas, ts }` por missão
  **no `localStorage`** (chave `escritorio-tentativas`). Não precisa de servidor. Útil pra:
  - **Métricas pessoais** (o próprio aluno vê onde erra mais).
  - **Repetição espaçada (no front):** exercício/conceito errado entra numa fila local
    (`localStorage`/`IndexedDB`, chave `escritorio-revisao`) com intervalo curto; ao acertar,
    o intervalo cresce (1→3→10→30 dias). Ver `REVISAO.md §6`. O `schema.sql` é só registro
    OPCIONAL caso um dia queiram sincronizar isso em nuvem — **não é requisito**.
- **Missão "Revisão":** gera-se dinamicamente puxando exercícios de `review_queue` (vencidos),
  embaralhando de trilhas/módulos diferentes (interleaving).

---

## 5. Onde priorizar `interacoes` (quando a fase de app começar)

| Módulo/Trilha | Tipos mais úteis |
|---------------|------------------|
| Excel (`pc-excel`) | `complete` (fórmulas), `find_error` (planilha), `order` (passos) |
| Inglês (todos) | `complete`/`find_error` (gramática), `match` (vocabulário), `choose` (tradução) |
| Segurança/PIX | `choose` (decisão), `simulate` (golpe no WhatsApp), `order` (passos seguros) |
| Word/Comunicação | `find_error` (texto), `choose` (etiqueta), `order` (estrutura do e-mail) |
| Gov.br/Saúde/Maps | `order` (passos de um processo), `choose` (o que fazer) |

> Regra: começar fácil (notar o padrão) → terminar difícil (aplicar em contexto novo), variando os
> tipos dentro da trilha. Conteúdo das missões já existe; isto é a **camada interativa** por cima.

---

## 6. Validação técnica (resumo p/ quem for implementar)

- `interacoes` é **array opcional**; sem ele, nada muda.
- Correção **client-side** com normalização (case/accent/trim) e respostas múltiplas aceitas.
- Cada exercício tem `id` **estável** (não reordenar IDs — quebra métricas/repetição).
- Resultado por exercício é salvo **localmente** (front) → métricas pessoais + fila de revisão local.
- **Tudo roda no front.** Nada exige backend. XP/troféus/repetição espaçada são calculados e
  guardados no cliente (`estrutura.js` + `localStorage`/`IndexedDB`); entram no `.json` de
  export/import. O backend (`schema.sql`) é OPCIONAL e só "espelharia" isso em nuvem se desejado.
