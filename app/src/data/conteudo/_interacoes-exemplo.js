/* =========================================================================
   INTERAÇÕES E BLOCOS EDITORIAIS DE EXEMPLO
   Vitrine pro motor de Interacoes.jsx + blocos da AulaRica.jsx.
   Esses objetos são fundidos em getConteudo (via patch em index.js)
   para enriquecer 3 missões representativas — uma de cada vertente:
     • pc-fund-1     (Computador)
     • mob-pix-7     (Celular — golpes do PIX)
     • en-a1-basico-1 (Inglês — cumprimentos)
   ========================================================================= */

export const INTERACOES_EXEMPLO = {
  // ============ PC-FUND-1 — Conhecendo a área de trabalho ============
  'pc-fund-1': {
    aulaBlocos: [
      {
        tipo: 'callout', variante: 'info',
        titulo: 'Calma na alma',
        texto: 'Tudo que aparece nessa tela tem uma função. Em 8 minutos a sensação de "bagunça" vira "ah, tá ali".',
      },
      {
        tipo: 'aula_steps',
        titulo: 'A área de trabalho em 4 partes',
        items: [
          { titulo: 'Menu Iniciar', texto: 'No canto inferior esquerdo. É a porta de entrada de todos os programas.' },
          { titulo: 'Barra de Tarefas', texto: 'A faixa embaixo. Mostra o que está aberto e seus atalhos fixos.' },
          { titulo: 'Ícones da Área', texto: 'Atalhos para programas e arquivos. Abrem com 2 cliques.' },
          { titulo: 'Notificações', texto: 'Relógio, volume, Wi-Fi e bateria no canto inferior direito.' },
        ],
      },
      {
        tipo: 'do_dont',
        titulo: 'Cliques que confundem todo mundo no começo',
        do: [
          '2 cliques RÁPIDOS pra abrir um ícone.',
          '1 clique pra selecionar (fica azulado).',
          'Botão direito quando quer "outras opções".',
        ],
        dont: [
          '2 cliques bem devagar (vira renomear).',
          'Apertar Enter no nome — também renomeia.',
          'Clicar 100 vezes achando que o computador travou — espera 2 segundos.',
        ],
      },
      {
        tipo: 'atalho',
        tecla: 'Win', desc: 'a qualquer momento abre o menu Iniciar (mesmo se sumiu).',
      },
    ],
    interacoes: [
      {
        tipo: 'choose',
        prompt: 'O que abre quando você dá 2 cliques rápidos num ícone?',
        opcoes: [
          'Um menu pra renomear o arquivo.',
          'O programa ou arquivo daquele ícone.',
          'A lixeira do computador.',
          'Nada — é só um clique mais forte.',
        ],
        resposta: 1, xp: 5,
        feedback_ok: 'Exato. 2 cliques rápidos = abrir.',
        feedback_err: 'Quase. Lembre: 1 clique seleciona, 2 cliques (rápidos!) abrem.',
      },
      {
        tipo: 'true_false',
        prompt: 'O menu Iniciar fica no canto inferior DIREITO da tela.',
        opcoes: ['Verdadeiro', 'Falso'],
        resposta: 1, xp: 5,
        feedback_err: 'Falso! O Iniciar fica no canto inferior ESQUERDO. À direita ficam relógio e Wi-Fi.',
      },
      {
        tipo: 'drag_match',
        prompt: 'Combine cada parte da tela com sua função.',
        labelA: 'Parte', labelB: 'O que faz',
        colA: ['Menu Iniciar', 'Barra de Tarefas', 'Ícone', 'Botão direito do mouse'],
        colB: ['Atalho pra abrir um programa', 'Lista todos os programas', 'Mostra o que está aberto', 'Abre um menu de opções'],
        pares: [[0, 1], [1, 2], [2, 0], [3, 3]],
        xp: 10,
        feedback_ok: 'Show. Você já está lendo a tela como um mapa.',
        feedback_err: 'Quase. Reveja: Iniciar abre a lista, ícones são atalhos, a barra mostra o que está aberto.',
      },
      {
        tipo: 'hotspot',
        prompt: 'Você quer abrir o menu Iniciar. Clique onde ele está.',
        cena: '🖥️ Tela do Windows — clique no Iniciar',
        areas: [
          { x: 0, y: 92, w: 12, h: 8, ok: true },     // canto inferior esquerdo
          { x: 88, y: 92, w: 12, h: 8, ok: false },   // canto inferior direito
          { x: 40, y: 40, w: 20, h: 15, ok: false },  // meio da tela
        ],
        xp: 8,
        feedback_ok: 'Boa! Esse é o lugar.',
        feedback_err: 'Quase. O Iniciar fica no canto inferior ESQUERDO. A área marcada agora mostra onde ele deveria estar.',
      },
    ],
  },

  // ============ MOB-PIX-7 — 5 golpes do PIX mais comuns (fluxo AAA v6) ============
  // Estrutura: abertura curta → micro-interação imediata → aula leve (2-3 blocos)
  // → simulação → corrigir erro → combo rápido → categorizar → branch decisão.
  'mob-pix-7': {
    aulaBlocos: [
      // 1) Abertura curta — situação real
      {
        tipo: 'quote',
        texto: 'O golpista não invade seu banco. Ele convence VOCÊ a mandar o PIX. Entender isso é a defesa nº 1.',
        autor: 'Princípio de segurança digital',
      },
      // 2) Aula leve
      {
        tipo: 'stats',
        items: [
          { num: 'R$ 2,1bi', lbl: 'perdidos em golpes de PIX em 2024 no Brasil' },
          { num: '78%',      lbl: 'das vítimas têm 40+ anos' },
          { num: '<60s',     lbl: 'do pedido falso ao PIX feito' },
        ],
      },
      {
        tipo: 'do_dont',
        titulo: 'Antes de qualquer PIX',
        do: [
          'Confira NOME e CPF/CNPJ do recebedor na tela de confirmação.',
          'Se for "parente pedindo PIX", LIGUE pra ele no número da agenda.',
          'Configure limite diário baixo (ex: R$ 500) e suba só quando precisar.',
        ],
        dont: [
          'Mandar PIX por pedido em foto/áudio de WhatsApp sem confirmar.',
          'Acreditar em "PIX devolvido por engano, devolve aí" sem ver extrato.',
          'Clicar em link de boleto/PIX recebido por SMS ou e-mail.',
        ],
      },
    ],
    interacoes: [
      // ============ 1) MICRO-INTERAÇÃO DE ABERTURA — 10 segundos ============
      {
        tipo: 'time_pressure',
        segundos: 10,
        cenario: 'BANCO X: sua conta foi BLOQUEADA. Confirme AGORA em bit.ly/xyz123 ou perde acesso em 2h.',
        prompt: 'Esse SMS é golpe ou seguro? Decida rápido.',
        opcoes: ['🚨 É golpe', '✅ É seguro'],
        resposta: 0, xp: 15,
        feedback_ok: 'Reflexo bom. URGÊNCIA + AMEAÇA + LINK ENCURTADO = combo clássico de fraude.',
        feedback_err: 'Banco nunca pede pra clicar em link de SMS. Urgência artificial é o sinal mais comum.',
      },

      // ============ 2) SIMULAÇÃO DE TELA REAL — clicar no botão certo ============
      {
        tipo: 'hotspot',
        prompt: 'Você vai fazer um PIX. Antes de confirmar, qual área você SEMPRE deve conferir?',
        cena: '📱 Tela de confirmação do PIX',
        areas: [
          // Topo: nome do recebedor (RESPOSTA CERTA — confira isso!)
          { x: 5,  y: 10, w: 90, h: 22, ok: true },
          // Meio: valor
          { x: 30, y: 38, w: 40, h: 18, ok: false },
          // Botão "confirmar"
          { x: 20, y: 75, w: 60, h: 18, ok: false },
        ],
        xp: 10,
        feedback_ok: 'Isso. O NOME do recebedor é a última defesa. Se o nome não bate, não confirme.',
        feedback_err: 'Valor e botão você já olha. O que te salva do golpe é o NOME do recebedor (área de cima).',
      },

      // ============ 3) CORRIGIR ERRO — caçar sinais num SMS ============
      {
        tipo: 'find_error',
        prompt: 'Encontre os 3 sinais de golpe nesse SMS. (clique nas palavras suspeitas)',
        tokens: [
          { txt: 'BANCO X:' }, { txt: ' ', sep: true }, { txt: 'sua conta', sep: true },
          { txt: ' ', sep: true }, { txt: 'foi bloqueada', ok: false }, { txt: '.', sep: true },
          { txt: ' ', sep: true }, { txt: 'Confirme', sep: true }, { txt: ' ', sep: true },
          { txt: 'AGORA', ok: false }, { txt: ' em ', sep: true },
          { txt: 'bit.ly/xyz123', ok: false }, { txt: ' ou perde acesso em ', sep: true },
          { txt: '2h.', sep: true },
        ],
        xp: 12,
        feedback_ok: 'Os 3 sinais: AMEAÇA ("bloqueada"), URGÊNCIA ("AGORA"), LINK ENCURTADO ("bit.ly").',
        feedback_err: 'Quase. Pense: o que te assusta? o que te dá pressa? onde o link aponta?',
      },

      // ============ 4) COMBO RÁPIDO — 5 perguntas em sequência ============
      {
        tipo: 'quick_combo',
        xpPorAcerto: 4,
        feedback_ok: 'Ritmo bom. Você lê o sinal antes da emoção.',
        feedback_err: 'Volte na Aula e refaça o combo — esses 5 cobrem 90% dos golpes.',
        perguntas: [
          { prompt: 'Áudio da "mamãe" pedindo PIX urgente: o que você faz?',
            opcoes: ['Mando o PIX rapidão', 'Ligo pra ela antes'], resposta: 1 },
          { prompt: 'Vendedor diz "te mandei PIX por engano, devolve aí". Você devolve?',
            opcoes: ['Devolvo na hora', 'Confiro o extrato primeiro'], resposta: 1 },
          { prompt: 'Banco mandou SMS com link pedindo pra confirmar dados.',
            opcoes: ['Clico — é o banco', 'Não clico — banco não pede isso'], resposta: 1 },
          { prompt: 'Aplicativo de boleto pelo WhatsApp pediu instalação. Você instala?',
            opcoes: ['Sim, parece útil', 'Não, baixo só da loja oficial'], resposta: 1 },
          { prompt: 'Cliente quer pagar PIX, mas pede pra você liberar o produto antes do dinheiro cair.',
            opcoes: ['Libero, ele me mostrou o comprovante', 'Espero o PIX cair na MINHA conta'], resposta: 1 },
        ],
      },

      // ============ 5) DRAG_ZONES — categorize as mensagens ============
      {
        tipo: 'drag_zones',
        prompt: 'Classifique cada mensagem nas pastas certas. Clique no item, depois na pasta.',
        zonas: [
          { id: 'fraude', titulo: 'Fraude', desc: 'Ignore, denuncie' },
          { id: 'suspeito', titulo: 'Suspeito', desc: 'Confira antes' },
          { id: 'ok', titulo: 'Seguro', desc: 'Pode prosseguir' },
        ],
        itens: [
          { txt: '"Sua conta no banco X foi bloqueada. Clique aqui!"', zona: 'fraude' },
          { txt: '"Mãe trocou de número, pede PIX urgente sem ligar"', zona: 'fraude' },
          { txt: '"Promoção: 90% off, só hoje, link encurtado"',       zona: 'fraude' },
          { txt: '"PIX recebido de João Silva — comprovante em anexo"', zona: 'ok' },
          { txt: '"Empresa pede PIX por e-mail com CPF do recebedor diferente do nome"', zona: 'suspeito' },
          { txt: '"Loja conhecida envia notinha fiscal por WhatsApp"', zona: 'suspeito' },
        ],
        xp: 12,
        feedback_ok: 'Filtro afiado. Na dúvida entre "suspeito" e "fraude", trate como fraude — custo zero.',
        feedback_err: 'Reveja. Toda urgência + ameaça vai pra fraude. Coisas que VOCÊ iniciou vão pra ok.',
      },

      // ============ 6) MEMÓRIA COM PROPÓSITO — pares conceito/uso ============
      {
        tipo: 'memory_pairs',
        prompt: 'Pareie cada termo com seu USO no mundo real.',
        xp: 10,
        pares: [
          { a: '2FA',         b: 'Trava extra que pede código no celular' },
          { a: 'MED',         b: 'Bloqueio cautelar do PIX recém-feito' },
          { a: 'Phishing',    b: 'Mensagem fake pra você clicar em link' },
          { a: 'Chave PIX',   b: 'CPF / telefone / e-mail / aleatória' },
          { a: 'Limite diário', b: 'Teto que protege se invadirem o app' },
        ],
      },

      // ============ 7) SCENARIO_BRANCH — escolha sua aventura ============
      {
        tipo: 'scenario_branch',
        inicio: 'start',
        totalCenas: 4,
        xp: 20,
        nodos: {
          start: {
            narrativa: '23h47. Seu celular vibra. WhatsApp: "Pai, perdi meu celular e o do banco também. Pode me mandar R$ 800 nesse PIX agora? É o seu filho."',
            opcoes: [
              { txt: 'Mando o PIX — meu filho tá em apuros.', prox: 'fim_ruim_pix' },
              { txt: 'Ligo no número antigo dele antes de qualquer coisa.', prox: 'cena2_ligacao' },
              { txt: 'Respondo "qual o nome do seu cachorro?" pra confirmar.', prox: 'cena2_pergunta' },
            ],
          },
          cena2_ligacao: {
            narrativa: 'Você liga no número antigo. Toca normalmente — e seu filho atende. Ele está em casa, não perdeu nada. Era golpe.',
            opcoes: [
              { txt: 'Bloqueio o número novo e aviso a família.', prox: 'fim_bom' },
              { txt: 'Respondo pro golpista "te pegamos".', prox: 'fim_neutro' },
            ],
          },
          cena2_pergunta: {
            narrativa: 'Você manda a pergunta. O golpista responde "Pai, esquece isso, é urgente, manda logo!". Continua sem dar o nome.',
            opcoes: [
              { txt: 'Insisto. Mando outra pergunta pessoal.', prox: 'cena3_insiste' },
              { txt: 'Pronto, é golpe. Não respondo mais e ligo no filho.', prox: 'fim_bom' },
            ],
          },
          cena3_insiste: {
            narrativa: 'Você manda outra pergunta. O golpista some — bloqueia. Você ligou pro filho, ele está em casa. Crise resolvida.',
            opcoes: [
              { txt: 'Bloqueio o número e aviso a família.', prox: 'fim_bom' },
            ],
          },
          fim_ruim_pix: {
            final: {
              titulo: 'R$ 800 foram embora',
              texto: 'O número some. Você liga no filho — ele atende, está em casa. Era golpe. Ligue AGORA no banco e peça MED (bloqueio cautelar) — se for nos primeiros 60 minutos, ainda dá pra reverter.',
              bom: false,
              feedback: 'Lição: emoção forte é o gatilho do golpe. SEMPRE ligue antes, mesmo de madrugada.',
            },
          },
          fim_bom: {
            final: {
              titulo: 'Você não caiu.',
              texto: 'O segundo de pausa pra ligar te salvou de R$ 800. Repita esse padrão e ensine pra sua família. Esse é o reflexo que muda tudo.',
              bom: true,
              feedback: 'Boa! "Liga antes de mandar" é a frase que vale mil reais — literalmente.',
            },
          },
          fim_neutro: {
            final: {
              titulo: 'Você não caiu — mas evite responder.',
              texto: 'Provocar golpista não vale: ele pode tentar de novo com outra história. O melhor é bloquear, denunciar e avisar a família.',
              bom: true,
              feedback: 'Você se salvou. Da próxima, só bloqueie — golpista profissional não desiste sozinho.',
            },
          },
        },
      },
    ],
  },

  // ============ EN-A1-BASICO-1 — Hello / cumprimentos ============
  'en-a1-basico-1': {
    aulaBlocos: [
      {
        tipo: 'callout', variante: 'honey',
        titulo: 'Não precisa de pronúncia perfeita',
        texto: 'Você só precisa ser ENTENDIDO. Falar com sotaque é normal — ninguém vai rir, e se rir, problema é deles.',
      },
      {
        tipo: 'aula_steps',
        titulo: 'Os 6 cumprimentos que cobrem 90% das situações',
        items: [
          { titulo: 'Hello / Hi', texto: '"Olá / Oi" — qualquer hora, qualquer contexto.' },
          { titulo: 'Good morning', texto: '"Bom dia" — até o meio-dia. Mais formal.' },
          { titulo: 'Good afternoon', texto: '"Boa tarde" — meio-dia até 17h-18h.' },
          { titulo: 'Good evening', texto: '"Boa noite" pra cumprimentar (chegando).' },
          { titulo: 'Good night', texto: '"Boa noite" pra DESPEDIR (indo dormir).' },
          { titulo: 'Goodbye / Bye', texto: '"Tchau". "Bye" é mais comum no dia-a-dia.' },
        ],
      },
      {
        tipo: 'versus',
        titulo: 'A pegadinha do "Good evening" vs "Good night"',
        a: { titulo: 'Good evening', pontos: ['Quando você CHEGA à noite', 'Cumprimento', 'Ex: "Good evening, table for two please"'] },
        b: { titulo: 'Good night',   pontos: ['Quando você SAI / vai dormir', 'Despedida', 'Ex: "Good night, sleep well"'] },
      },
    ],
    interacoes: [
      {
        tipo: 'flashcard',
        prompt: 'Vire cada carta. Clique "Sei essa" quando dominar.',
        xp: 6,
        cards: [
          { frente: 'Hello', verso: 'Olá / Oi' },
          { frente: 'Good morning', verso: 'Bom dia' },
          { frente: 'Good afternoon', verso: 'Boa tarde' },
          { frente: 'Good evening', verso: 'Boa noite (chegando)' },
          { frente: 'Good night', verso: 'Boa noite (despedindo)' },
          { frente: 'See you later', verso: 'Até mais tarde' },
        ],
      },
      {
        tipo: 'choose',
        prompt: 'São 14h. Como você cumprimenta alguém?',
        opcoes: ['Good morning', 'Good afternoon', 'Good night', 'Good evening'],
        resposta: 1, xp: 5,
        feedback_err: 'Quase. Pela manhã (até meio-dia) é "morning". Tarde é "afternoon". "Night" é só pra despedir indo dormir.',
      },
      {
        tipo: 'fill_blank',
        prompt: 'Complete o diálogo com os cumprimentos certos.',
        frase: '— ___, my name is Ana.\n— ___ to meet you, Ana. I\'m John.\n— ___, John, have a great day.',
        tokens: ['Hello', 'Goodbye', 'Nice', 'Welcome', 'Bye', 'Sorry'],
        respostas: ['Hello', 'Nice', 'Bye'],
        xp: 10,
        feedback_ok: 'Show! Esse é o trio que abre 9 em cada 10 conversas em inglês.',
        feedback_err: 'Quase. Cumprimento → conhecer → despedida. Pensa na ORDEM da conversa.',
      },
      {
        tipo: 'drag_match',
        labelA: 'Inglês', labelB: 'Português',
        prompt: 'Pareie inglês com português.',
        colA: ['Hello', 'Goodbye', 'Good morning', 'Good night', 'Nice to meet you'],
        colB: ['Bom dia', 'Boa noite (vou dormir)', 'Olá', 'Prazer em te conhecer', 'Tchau'],
        pares: [[0, 2], [1, 4], [2, 0], [3, 1], [4, 3]],
        xp: 10,
        feedback_ok: 'Perfeito. Repete em voz alta — boca também precisa aprender.',
      },
    ],
  },
  // ============ PC-EXCEL-12 — PROCV ============
  'pc-excel-12': {
    aulaBlocos: [
      { tipo: 'callout', variante: 'honey', titulo: 'A fórmula que paga seu salário',
        texto: 'PROCV é a função mais pedida em entrevista de Excel. Se você manda bem nela, abre porta em qualquer escritório.' },
      { tipo: 'aula_steps', titulo: 'A anatomia do PROCV',
        items: [
          { titulo: 'Valor', texto: 'O que você quer buscar (ex: código do produto)' },
          { titulo: 'Tabela', texto: 'Onde procurar (sempre intervalo completo)' },
          { titulo: 'Coluna', texto: 'Qual coluna retornar (1ª é a do valor)' },
          { titulo: '0 ou 1', texto: '0 = exato (use sempre). 1 = aproximado (só se ordenado)' },
        ],
      },
      { tipo: 'versus', titulo: 'PROCV vs PROCH',
        a: { titulo: 'PROCV (vertical)', pontos: ['Busca em COLUNAS', 'Dados em formato de tabela típica', '99% dos casos no escritório'] },
        b: { titulo: 'PROCH (horizontal)', pontos: ['Busca em LINHAS', 'Raro — só relatórios invertidos', 'Esqueça por enquanto'] },
      },
    ],
    interacoes: [
      { tipo: 'sim_planilha',
        prompt: 'A tabela tem código (A), nome (B), preço (C). Em F2 você quer buscar o preço do código que está em E2. Digite a fórmula:',
        cols: ['A','B','C','D','E','F'],
        linhas: [
          ['cod','nome','preço','','busca','preço'],
          [101,'Caneta','5,00','',102,'?'],
          [102,'Lápis','3,00','','',''],
          [103,'Caderno','12,00','','',''],
        ],
        celulaAlvo: { col: 'F', linha: 2 },
        respostas: ['=PROCV(E2;A:C;3;0)', '=PROCV(E2;A2:C4;3;0)', '=PROCV(E2;A1:C4;3;0)', '=VLOOKUP(E2,A:C,3,0)'],
        xp: 20,
        feedback_ok: 'Mandou bem. =PROCV(E2; A:C; 3; 0) busca E2 na 1ª coluna de A:C, retorna a 3ª (preço), exato.',
        feedback_err: 'Estrutura: =PROCV(valor; tabela; nº_coluna; 0). Lembre do "0" no final — sempre exato.',
      },
      { tipo: 'find_error',
        prompt: 'Esta fórmula tem 1 erro. Clique no caractere que está errado:',
        tokens: [
          { txt: '=PROCV(' }, { txt: 'E2', sep: true }, { txt: ',', ok: false },
          { txt: ' A:C', sep: true }, { txt: ';', sep: true },
          { txt: ' 3', sep: true }, { txt: ';', sep: true },
          { txt: ' 0)', sep: true },
        ],
        xp: 10,
        feedback_ok: 'No Excel BR usamos ponto-e-vírgula como separador, não vírgula. Vírgula é só no Excel em inglês.',
        feedback_err: 'Olha o separador entre os argumentos. No BR é "; " não ",".',
      },
      { tipo: 'multi',
        prompt: 'Quando PROCV pode dar #N/D (não encontrado)?',
        opcoes: [
          'O valor procurado não existe na tabela',
          'Você esqueceu o "0" no final (modo exato)',
          'A célula procurada tem espaço extra (ex: "ana " vs "ana")',
          'Você travou a referência com $',
          'Os tipos não batem (número vs texto)',
        ],
        respostas: [0, 2, 4], xp: 15,
        feedback_ok: 'Os 3 motivos clássicos. Travar com $ NÃO causa erro — é boa prática.',
      },
    ],
  },

  // ============ AMB-SEG-4 — Phishing ============
  'amb-seg-4': {
    aulaBlocos: [
      { tipo: 'quote', texto: 'Phishing não é problema técnico — é problema PSICOLÓGICO. Eles vencem ativando seu medo, sua pressa, sua ganância.', autor: 'Princípio de defesa' },
      { tipo: 'stats',
        items: [
          { num: '95%', lbl: 'dos vazamentos começam com 1 e-mail phishing' },
          { num: '3min', lbl: 'tempo médio entre clique e roubo de senha' },
          { num: '0',    lbl: 'sites legítimos pedem login por link de e-mail' },
        ],
      },
      { tipo: 'do_dont', titulo: 'A regra dos 3 passos',
        do: [
          'Olhe o REMETENTE completo (não só o nome). Banco real = @banco.com.br',
          'Passe o mouse no link SEM CLICAR — confira a URL real lá embaixo',
          'Na dúvida, abra o site digitando você mesmo (nunca pelo link do e-mail)',
        ],
        dont: [
          'Clicar em "verificar conta" / "atualizar dados" via e-mail',
          'Baixar anexos de remetente desconhecido (especial .zip, .exe)',
          'Responder pedindo "qual é mesmo a senha pra confirmar?"',
        ],
      },
    ],
    interacoes: [
      { tipo: 'time_pressure',
        segundos: 12,
        cenario: 'De: banco-segur4nca@hotmail.com — "Sua senha vai expirar em 1h. Clique aqui pra atualizar."',
        prompt: 'Phishing ou e-mail real?',
        opcoes: ['🚨 Phishing', '✅ Real'],
        resposta: 0, xp: 15,
        feedback_ok: '3 sinais: (1) "segur4nca" com 4 no lugar de a, (2) domínio @hotmail.com (banco não usa), (3) urgência fake "1h".',
        feedback_err: 'Banco real NUNCA pede atualização de senha por link. Domínio @hotmail também não bate.',
      },
      { tipo: 'drag_zones',
        prompt: 'Classifique cada e-mail. Clique no item, depois na pasta.',
        zonas: [
          { id: 'spam', titulo: 'Spam', desc: 'só apagar' },
          { id: 'phishing', titulo: 'Phishing', desc: 'denunciar + apagar' },
          { id: 'ok', titulo: 'Real / útil', desc: 'pode ler' },
        ],
        itens: [
          { txt: '"Sua conta foi bloqueada, clique pra liberar" — banco@aleatorio.xyz', zona: 'phishing' },
          { txt: '"50% off pílulas mágicas, last chance!" — promo@xyz123.com', zona: 'spam' },
          { txt: '"Boleto da Sabesp vencendo dia 15" — atendimento@sabesp.com.br', zona: 'ok' },
          { txt: '"RH: revise sua ficha cadastral em RH@empresa.com" — RH@empresa.com', zona: 'ok' },
          { txt: '"Atualize seus dados do INSS aqui: bit.ly/inss-update"', zona: 'phishing' },
          { txt: '"Você ganhou R$ 50 mil! Reivindique"', zona: 'spam' },
        ],
        xp: 15,
        feedback_ok: 'Filtro fino. Na dúvida entre spam e phishing, trate como phishing (denuncia + apaga).',
        feedback_err: 'Reveja. Ameaça + urgência + link estranho = phishing. Propaganda agressiva inútil = spam.',
      },
      { tipo: 'find_error',
        prompt: 'Encontre os 3 sinais de phishing nesse e-mail:',
        tokens: [
          { txt: 'De: ' }, { txt: 'BANCO-DO-BRASIL', sep: true }, { txt: ' <', sep: true },
          { txt: 'bbsuporte@protonmail.com', ok: false }, { txt: '>\n', sep: true },
          { txt: 'Assunto: ' }, { txt: 'URGENTE!!!', ok: false }, { txt: ' Sua conta foi ', sep: true },
          { txt: 'BLOQUEADA', sep: true }, { txt: '.\n', sep: true },
          { txt: 'Confirme seus dados em ', sep: true },
          { txt: 'http://bb.com.security-login.ru', ok: false }, { txt: ' antes de 2 horas.', sep: true },
        ],
        xp: 15,
        feedback_ok: 'Os 3 sinais: domínio @protonmail.com (banco usa @bb.com.br), "URGENTE!!!" com excesso de exclamação, URL com domínio .ru (Rússia) imitando bb.com.',
        feedback_err: 'Pense: o domínio do e-mail bate? Tem urgência exagerada? O link termina em .com.br ou em algo suspeito?',
      },
      { tipo: 'quick_combo',
        xpPorAcerto: 5,
        feedback_ok: 'Você tem o filtro afiado. Difícil cair.',
        feedback_err: 'Volte na aula — os 3 passos cobrem 95% dos casos.',
        perguntas: [
          { prompt: 'Banco pediu pra confirmar senha por e-mail. Faz?', opcoes: ['Sim', 'Nunca'], resposta: 1 },
          { prompt: 'E-mail diz que ganhou prêmio. Clica no link?', opcoes: ['Clico', 'Nunca'], resposta: 1 },
          { prompt: 'Link parece estranho. Verifica passando o mouse?', opcoes: ['Verifico', 'Clico'], resposta: 0 },
          { prompt: 'Anexo .zip de desconhecido. Abre?', opcoes: ['Abro', 'Apago'], resposta: 1 },
          { prompt: 'Na dúvida, prefiro abrir o site:', opcoes: ['Pelo link do e-mail', 'Digitando direto'], resposta: 1 },
        ],
      },
    ],
  },

  // ============ MOB-WPP-4 — Etiqueta em grupo ============
  'mob-wpp-4': {
    aulaBlocos: [
      { tipo: 'callout', variante: 'info',
        titulo: 'Grupo de trabalho não é grupo de família',
        texto: 'Mesmas regras de e-mail valem aqui: direto, sem áudio longo desnecessário, sem corrente de bom dia infinita.' },
      { tipo: 'do_dont',
        do: [
          'Mensagem de texto sempre que possível (todos podem ler em silêncio)',
          'Áudio curto (até 30s) e SÓ se for mais rápido que digitar',
          'Marcar pessoas (@) só quando a mensagem é PRA ELA',
        ],
        dont: [
          'Corrente "bom dia" todo dia (mata o foco de todo mundo)',
          'Áudio de 5 minutos sobre coisa que dá pra escrever em 2 linhas',
          'Mandar 15 mensagens fragmentadas em vez de 1 parágrafo',
        ],
      },
    ],
    interacoes: [
      { tipo: 'sim_chat',
        prompt: 'Você quer pedir uma planilha pro João no grupo. Qual é a melhor forma?',
        mensagens: [
          { de: 'outro', txt: '(grupo de 30 pessoas, 14:00)' },
        ],
        acoes: [
          'Manda: "@João oi, me envia a planilha de vendas de outubro?"',
          'Manda áudio de 2min explicando que precisa da planilha',
          'Manda no grupo "ALGUÉM SABE ONDE TÁ A PLANILHA???"',
          'Manda direto pro João no privado',
        ],
        resposta: 3, xp: 10,
        feedback_ok: 'Privado é melhor — não atrapalha 29 pessoas. Se a planilha é compartilhável, depois você posta o link no grupo (uma vez só).',
        feedback_err: 'Quase. Pra pergunta específica pra uma pessoa, sempre privado. Grupo é pra coisas que todos precisam saber.',
      },
      { tipo: 'sort_order',
        prompt: 'Ordene do MAIS ao MENOS adequado pra grupo de trabalho:',
        passos: [
          'Texto curto direto ao ponto',
          'Áudio de até 30s',
          'Áudio de 1-2 min',
          'Corrente de bom dia diária',
        ],
        xp: 10,
        feedback_ok: 'Texto > áudio curto > áudio longo > spam. Regra simples.',
      },
    ],
  },

  // ============ PC-IA-2 — Prompt perfeito ============
  'pc-ia-2': {
    aulaBlocos: [
      { tipo: 'quote',
        texto: 'IA não lê sua mente. Ela responde EXATAMENTE o que você pediu — então o pedido bem feito vale ouro.',
        autor: 'Lei nº 1 do uso de IA' },
      { tipo: 'aula_steps', titulo: 'A fórmula do prompt perfeito',
        items: [
          { titulo: 'Papel', texto: 'Quem a IA está sendo? "Aja como editor experiente"' },
          { titulo: 'Tarefa', texto: 'O que fazer? "Revise este e-mail"' },
          { titulo: 'Contexto', texto: 'Pra quê? Pra quem? "Vai pro chefe, tom respeitoso"' },
          { titulo: 'Formato', texto: 'Como devolver? "Em 3 linhas, sem rodeio"' },
        ],
      },
      { tipo: 'versus', titulo: 'Prompt vago vs prompt forte',
        a: { titulo: 'Vago', pontos: ['"Melhora isso aqui"', 'Resposta genérica', 'Você refaz 5 vezes'] },
        b: { titulo: 'Forte', pontos: ['"Aja como copywriter. Reescreva esta frase em 1 linha, tom direto, máximo 12 palavras"', 'Resposta no ponto', '1 ou 2 tentativas'] },
      },
    ],
    interacoes: [
      { tipo: 'transform',
        titulo_curto: 'Reescreva o prompt',
        prompt: 'Transforme o prompt vago em um forte. Use os 4 elementos da aula.',
        base: '"melhora esse email pro meu chefe"',
        criterios: [
          { label: 'Define um papel pra IA (ex: "aja como...")', contem: 'aja' },
          { label: 'Diz o tom desejado (formal, direto, etc)', regex: '(formal|direto|respeitoso|profissional|claro)' },
          { label: 'Limita o tamanho (palavras, linhas ou caracteres)', regex: '(palavra|linha|caracter|parágrafo|frase)' },
          { label: 'Tem pelo menos 12 palavras', minLen: 60 },
        ],
        placeholder: 'Aja como editor. Reescreva o e-mail abaixo em tom respeitoso, formal, em no máximo 3 parágrafos curtos...',
        xp: 18,
        feedback_ok: 'Esse prompt rende. A IA já sabe o papel, o tom, o formato. Vai precisar de 1 tentativa.',
        feedback_err: 'Faltou algum elemento. Os 4 critérios precisam estar verdes pra um prompt forte.',
      },
      { tipo: 'choose',
        prompt: 'Qual desses prompts vai render a MELHOR resposta da IA?',
        opcoes: [
          '"Faça um currículo bom"',
          '"Aja como recrutador sênior de TI. Avalie meu currículo abaixo e dê 5 melhorias específicas, em bullet points, focando em palavras-chave que ATS reconhece."',
          '"meu currículo tá ruim, ajuda?"',
          '"Reescreve isso"',
        ],
        resposta: 1, xp: 10,
        feedback_ok: 'Papel (recrutador), tarefa (avaliar), contexto (ATS), formato (5 bullets). Receita pronta.',
      },
    ],
  },

  // ============ EN-A1-ROTINA-6 — Descreva seu dia ============
  'en-a1-rotina-6': {
    aulaBlocos: [
      { tipo: 'callout', variante: 'honey', titulo: 'Projeto: sua rotina em inglês',
        texto: 'Hoje você escreve 5 frases sobre seu dia comum. Sem perfeição — só clareza.' },
      { tipo: 'aula_steps', titulo: 'Padrão da frase de rotina',
        items: [
          { titulo: 'Quando', texto: 'In the morning / at night / on Mondays' },
          { titulo: 'Sujeito', texto: 'I / She / He / We' },
          { titulo: 'Verbo', texto: 'wake up, eat, work, sleep (+ "s" na 3ª pessoa)' },
          { titulo: 'Detalhe', texto: 'at 7am / with my family / in the office' },
        ],
      },
    ],
    interacoes: [
      { tipo: 'fill_blank',
        prompt: 'Complete com os verbos certos:',
        frase: 'I ___ up at 7am. I ___ coffee and ___ to work by bus.',
        tokens: ['wake', 'drink', 'go', 'eats', 'wakes', 'goes'],
        respostas: ['wake', 'drink', 'go'],
        xp: 12,
        feedback_ok: 'Boa. Como o sujeito é "I", sem o "s" no verbo. "S" é só pra he/she/it.',
        feedback_err: 'Quase. Sujeito "I" = verbo sem "s". "She wakes" vs "I wake".',
      },
      { tipo: 'drag_match',
        labelA: 'Inglês', labelB: 'Português',
        prompt: 'Pareie rotina diária:',
        colA: ['I wake up at 6', 'She works from home', 'We have lunch together', 'He goes to bed late'],
        colB: ['Ele vai dormir tarde', 'Eu acordo às 6', 'Nós almoçamos juntos', 'Ela trabalha de casa'],
        pares: [[0, 1], [1, 3], [2, 2], [3, 0]],
        xp: 10,
      },
      { tipo: 'transform',
        titulo_curto: 'Sua rotina',
        prompt: 'Escreva 3 frases sobre SUA rotina em inglês. Use ao menos 3 verbos diferentes.',
        criterios: [
          { label: 'Pelo menos 3 frases (use pontos)', regex: '\\..*\\..*\\.' },
          { label: 'Comece com "I" pelo menos uma vez', contem: 'I' },
          { label: 'Tem mínimo 30 caracteres', minLen: 30 },
        ],
        placeholder: 'I wake up at 7. I drink coffee. I work at home...',
        xp: 18,
        feedback_ok: 'Mandou bem! Esse padrão você usa pra falar de qualquer coisa do dia a dia.',
      },
    ],
  },

};
