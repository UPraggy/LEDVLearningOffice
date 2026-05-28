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
        tipo: 'imagem',
        url: '/generated/missions/pc-fund-1.svg',
        alt: 'Ilustração de um monitor com uma pasta de arquivos ao lado',
        legenda: 'Observe os blocos principais antes de clicar: área de trabalho, ícones, janelas e a barra de tarefas.',
      },
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
        feedback_ok: 'Isso. No Excel em portugues, use ponto-e-virgula entre todos os argumentos: =PROCV(E2; A:C; 3; 0).',
        feedback_err: 'Olhe so os separadores. A formula comecou com virgula depois de E2, mas o restante usa ponto-e-virgula.',
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
        cenaTpl: 'windows-desktop',
        cenaData: { ico1: 'Documentos', ico2: 'Navegador', ico3: 'Lixeira', hora: '14:32' },
        cenaImg: '/generated/interactive/windows-desktop.svg',
        alt: 'Área de trabalho do Windows com ícones e barra de tarefas embaixo',
        areas: [
          { x: 0, y: 90, w: 9, h: 9, ok: true },      // botão Iniciar (canto inferior esquerdo)
          { x: 88, y: 90, w: 12, h: 9, ok: false },   // relógio (canto inferior direito)
          { x: 30, y: 30, w: 22, h: 18, ok: false },  // meio da tela
        ],
        xp: 8,
        feedback_ok: 'Boa! Esse é o lugar — canto inferior esquerdo.',
        feedback_err: 'Quase. O Iniciar fica no canto inferior ESQUERDO. A área marcada agora mostra onde ele deveria estar.',
      },
      {
        tipo: 'hotspot',
        prompt: 'No Explorador de Arquivos, clique na pasta onde guardamos documentos.',
        cenaTpl: 'janela-arquivos',
        cenaData: {
          titulo: 'Explorador de Arquivos',
          caminho: 'Este Computador › Documentos',
          pastas: 'Documentos|Imagens|Downloads|Trabalho',
          arquivo: 'relatorio-vendas.xlsx',
        },
        cenaImg: '/generated/interactive/janela-arquivos.svg',
        alt: 'Janela do Explorador de Arquivos do Windows com pastas listadas',
        areas: [
          { x: 30, y: 30, w: 40, h: 10, ok: true },   // pasta "Documentos" (1ª da lista)
          { x: 5,  y: 74, w: 20, h: 8,  ok: false },  // Lixeira (lateral)
        ],
        xp: 8,
        feedback_ok: 'Isso. A pasta "Documentos" é onde ficam textos e planilhas. A lateral mostra os atalhos rápidos.',
        feedback_err: 'Essa é a Lixeira. A pasta de documentos é a primeira da lista à direita, marcada em destaque.',
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
      {
        tipo: 'imagem',
        url: '/generated/missions/mob-pix-7.svg',
        alt: 'Ilustração de um celular com QR Code e moedas, representando um pagamento PIX',
        legenda: 'Exemplo visual: confira o nome, o valor e o contexto antes de confirmar um pagamento.',
      },
      { tipo: 'hotspot',
        cenaImg: '/generated/interactive/wpp-golpe.svg',
        alt: 'Conversa de WhatsApp pedindo PIX urgente',
        prompt: 'Antes de responder: toque no detalhe do topo que pede atenção redobrada.',
        areas: [{ x: 14, y: 14, w: 44, h: 9, ok: true }],
        xp: 15,
        feedback_ok: 'Exato. "Novo número" + pedido de PIX urgente = ligue para o número antigo antes de qualquer coisa.',
        feedback_err: 'Quase. Repare no topo: aviso de "novo número" somado à pressa por dinheiro é o padrão do golpe.',
      },
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
        cenaImg: '/generated/interactive/pix-confirmacao.svg',
        cenaTpl: 'pix-confirmacao',
        cenaData: { recebedor: 'MARIA S. OLIVEIRA ME', doc: 'CPF/CNPJ ••• 22.104/0001-55 · Banco 260', valor: 'R$ 980,00' },
        alt: 'Tela de confirmação de PIX mostrando nome do recebedor, valor e botão confirmar',
        areas: [
          // Topo: nome/CPF do recebedor (RESPOSTA CERTA — confira isso!)
          { x: 9,  y: 29, w: 82, h: 20, ok: true },
          // Meio: valor
          { x: 12, y: 54, w: 30, h: 10, ok: false },
          // Botão "confirmar"
          { x: 14, y: 78, w: 72, h: 13, ok: false },
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

      // ============ 3b) SIMULAÇÃO — SMS de banco falso ============
      {
        tipo: 'hotspot',
        prompt: 'Chegou esse SMS. Onde está a parte mais perigosa — a que você NUNCA deve tocar?',
        cenaImg: '/generated/interactive/sms-banco.svg',
        cenaTpl: 'sms-banco',
        cenaData: { sub: 'remetente: +55 21 9 ****-7788', link: 'http://itau-seguro.cc/desbloqueio', hora: 'hoje 08:34' },
        alt: 'Tela de SMS de um suposto banco com link encurtado',
        areas: [
          // Link encurtado dentro da mensagem (RESPOSTA CERTA)
          { x: 8,  y: 62, w: 50, h: 11, ok: true },
          // Nome do remetente no topo
          { x: 9,  y: 12, w: 40, h: 9,  ok: false },
          // Corpo do texto (aviso)
          { x: 9,  y: 40, w: 70, h: 14, ok: false },
        ],
        xp: 12,
        feedback_ok: 'Exato. O LINK é a isca. Banco de verdade não manda link por SMS pra "desbloquear".',
        feedback_err: 'O remetente e o texto enganam de propósito. O perigo real é o LINK — nunca toque nele.',
      },

      // ============ 3c) SIMULAÇÃO — site de benefício do governo falso ============
      {
        tipo: 'hotspot',
        prompt: 'Esse "site do governo" pede um pagamento pra liberar um benefício. O que denuncia o golpe?',
        cenaImg: '/generated/interactive/site-gov-falso.svg',
        cenaTpl: 'site-gov-falso',
        cenaData: { urlBase: 'http://gov-br-beneficio.', urlTld: 'online', urlPath: '/inss', titulo: 'Liberação do seu benefício', corpo: 'Há um valor a receber em seu nome. Para liberar,|pague a taxa de regularização abaixo via PIX.', valorReceber: 'Valor a receber: R$ 3.480,00', botao: 'Pagar taxa R$ 47,90' },
        alt: 'Página falsa imitando um site do governo pedindo pagamento de taxa',
        areas: [
          // Botão "pagar taxa" (RESPOSTA CERTA — governo não cobra taxa pra liberar benefício)
          { x: 6,  y: 73, w: 40, h: 13, ok: true },
          // Título/banner do topo
          { x: 6,  y: 14, w: 60, h: 12, ok: false },
          // Texto do benefício
          { x: 6,  y: 40, w: 70, h: 16, ok: false },
        ],
        xp: 12,
        feedback_ok: 'Isso. Governo NUNCA cobra taxa pra liberar benefício. Pedir pagamento = golpe.',
        feedback_err: 'O layout copia o site real. O que entrega é o PEDIDO DE PAGAMENTO — benefício não tem taxa.',
      },

      // ============ 3b) HOTSPOT — golpe do "PIX por engano" ============
      {
        tipo: 'hotspot',
        prompt: 'Caiu um PIX que você não esperava e o "remetente" pede pra devolver. O que NÃO fazer?',
        cenaTpl: 'pix-recebido',
        cenaData: {
          title: 'Banco · PIX',
          sub: 'comprovante',
          badge: '$',
          remetente: 'CLEBER A. DA SILVA',
          valor: 'R$ 850,00',
          aviso: 'Recebi por engano, pode me devolver no PIX?',
          botao: 'Devolver agora',
        },
        cenaImg: '/generated/interactive/pix-recebido.svg',
        alt: 'Notificação de PIX recebido com pedido de devolução imediata',
        areas: [
          { x: 14, y: 75, w: 72, h: 13, ok: true },  // botão "Devolver agora"
          { x: 30, y: 40, w: 40, h: 12, ok: false }, // valor recebido
        ],
        xp: 12,
        feedback_ok: 'Certo. Não devolva pelo botão nem pra chave que ele mandar. Confira no extrato e devolva pela MESMA transação.',
        feedback_err: 'Esse é o golpe: o PIX pode ser estornado depois, e você fica no prejuízo. Nunca devolva por fora — só pelo extrato.',
      },

      // ============ 3c) HOTSPOT — SMS falso de benefício do governo ============
      {
        tipo: 'hotspot',
        prompt: 'Chegou um SMS dizendo que você tem dinheiro a receber do governo. O que NÃO se deve tocar?',
        cenaTpl: 'sms-gov',
        cenaData: {
          title: 'Mensagens',
          sub: 'remetente: GOV-BR',
          badge: 'M',
          cabecalho: 'GOV.BR: benefício liberado',
          corpo: 'Você tem R$ 1.200 a receber. Confirme seus|dados em até 24h pelo link oficial:',
          link: 'http://gov-br.benef-2024.top',
          hora: 'hoje 11:05',
        },
        cenaImg: '/generated/interactive/sms-gov.svg',
        alt: 'SMS se passando pelo GOV.BR com um link suspeito para liberar benefício',
        areas: [
          { x: 8, y: 62, w: 50, h: 11, ok: true },  // o link suspeito
        ],
        xp: 12,
        feedback_ok: 'Isso. O governo usa só o gov.br oficial — nunca um link ".top" por SMS. Não clique e apague.',
        feedback_err: 'O perigo é o LINK. Domínio terminado em ".top" não é do governo. Acesse sempre digitando gov.br você mesmo.',
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
        tipo: 'imagem',
        url: '/generated/missions/en-a1-basico-1.svg',
        alt: 'Ilustração de um globo com balões de fala em inglês',
        legenda: 'Primeiros passos: cumprimente, ouça, repita e avance em blocos curtos.',
      },
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
      {
        tipo: 'imagem',
        tpl: 'excel-erro',
        tplData: { titulo: 'Planilha — Preços', formula: '=PROCV(E2; A:C; 3; 0)', erro: '#N/D', errCol: 'F', errRow: '2' },
        url: '/generated/interactive/excel-erro.svg',
        alt: 'Planilha mostrando a fórmula =PROCV(E2; A:C; 3; 0) e uma célula com o erro #N/D',
        legenda: 'Quando o PROCV não acha o valor, a célula mostra #N/D. Vamos aprender a montar a fórmula certa.',
      },
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
      {
        tipo: 'imagem',
        url: '/generated/missions/amb-seg-4.svg',
        alt: 'Ilustração de um e-mail com alerta sendo fisgado por um anzol, ao lado de um escudo',
        legenda: 'Exemplo visual: segurança digital é feita de pequenas conferências antes do clique.',
      },
      { tipo: 'hotspot',
        cenaImg: '/generated/interactive/email-phishing.svg',
        alt: 'E-mail dizendo que a conta será bloqueada',
        prompt: 'Toque no endereço de quem enviou. É esse detalhe que entrega o golpe.',
        areas: [{ x: 6, y: 26, w: 66, h: 9, ok: true }],
        xp: 15,
        feedback_ok: 'Isso! "bradescco" tem um C a mais. O domínio é falso — nenhum clique antes de conferir isso.',
        feedback_err: 'Quase. Olhe a linha "De:" lá em cima: o endereço do remetente é o que mais entrega a farsa.',
      },
      { tipo: 'hotspot',
        cenaImg: '/generated/interactive/popup-virus.svg',
        cenaTpl: 'popup-virus',
        cenaData: { site: 'www.receitas-faceis.info', tituloPopup: '⚠ Alerta do sistema', manchete: 'Seu computador está infectado!', l1: '5 ameaças encontradas. Limpe agora para', l2: 'proteger suas fotos e senhas.', botao: 'Limpar agora (grátis)' },
        alt: 'Pop-up dizendo que o computador está infectado, com um botão verde de limpar',
        prompt: 'Esse aviso pulou enquanto você lia uma notícia. Qual é a ação SEGURA?',
        areas: [
          { x: 69, y: 20, w: 9, h: 9, ok: true },     // fechar no X
          { x: 30, y: 60, w: 40, h: 12, ok: false },  // botão verde "limpar agora"
        ],
        xp: 12,
        feedback_ok: 'Exato. Feche no X (ou feche a aba). Nenhum site verdadeiro escaneia vírus do seu PC por pop-up.',
        feedback_err: 'Cuidado: o botão verde é a isca. Esse "antivírus" instala o golpe. A saída segura é fechar no X.',
      },
      { tipo: 'hotspot',
        cenaTpl: 'popup-atualizacao',
        cenaData: {
          site: 'www.assistir-filme-gratis.stream',
          titulo: 'Atualização necessária',
          manchete: 'Seu navegador está desatualizado',
          l1: 'Instale a atualização para continuar',
          l2: 'assistindo. É rápido e gratuito.',
          botao: 'Atualizar agora',
        },
        cenaImg: '/generated/interactive/popup-atualizacao.svg',
        alt: 'Pop-up num site de filmes pedindo para atualizar o navegador',
        prompt: 'Você ia assistir um filme e isso apareceu. Qual a ação segura?',
        areas: [
          { x: 84, y: 22, w: 8,  h: 9,  ok: true },   // X fechar
          { x: 30, y: 62, w: 40, h: 12, ok: false },  // botão "Atualizar agora"
        ],
        xp: 12,
        feedback_ok: 'Isso. Navegador atualiza sozinho — nunca por pop-up de site. Feche no X e saia desse site.',
        feedback_err: 'Esse "atualizar" baixa o golpe. Atualização de navegador vem do próprio programa, jamais de um site de filme.',
      },
      { tipo: 'hotspot',
        cenaTpl: 'loja-app',
        cenaData: {
          title: 'Loja de Aplicativos',
          sub: 'resultado da busca',
          badge: 'L',
          app: 'Banco Oficial Pro',
          dev: 'Desenvolvedor desconhecido',
          nota: '★ 2,1 · 312 avaliações',
          selo: 'NÃO verificado',
          botao: 'Instalar',
        },
        cenaImg: '/generated/interactive/loja-app.svg',
        alt: 'App de banco na loja com desenvolvedor desconhecido e muitas permissões',
        prompt: 'Procurou o app do banco e achou este. Qual detalhe diz "NÃO instale"?',
        areas: [
          { x: 8,  y: 30, w: 30, h: 10, ok: true },   // selo "NÃO verificado" / dev desconhecido
          { x: 70, y: 30, w: 22, h: 10, ok: false },  // botão instalar
        ],
        xp: 12,
        feedback_ok: 'Isso. "Desenvolvedor desconhecido" + nota baixa + permissões demais = app falso. Baixe só o oficial.',
        feedback_err: 'Antes de instalar, olhe quem fez o app e a nota. Aqui é dev desconhecido pedindo SMS e contatos — fuja.',
      },
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
      { tipo: 'hotspot',
        cenaImg: '/generated/interactive/wpp-chefe.svg',
        cenaTpl: 'wpp-chefe',
        cenaData: { title: 'Diretoria RH', sub: 'novo número · online', badge: 'D', hora1: '10:47', hora2: '10:48', msg1: 'Está em reunião? Preciso de um favor rápido e|sigiloso. Compre 5 cartões-presente de R$ 200 e|me mande os códigos. Depois te reembolso.', msg2: 'É urgente, não comente com ninguém do|escritório por enquanto. Confio em você.' },
        alt: 'WhatsApp de um suposto chefe pedindo a compra urgente de cartões-presente',
        prompt: 'Chegou no trabalho. Qual detalhe do topo é o maior sinal de golpe?',
        areas: [{ x: 13, y: 13, w: 52, h: 10, ok: true }],
        xp: 14,
        feedback_ok: 'Isso: "novo número". Chefe de verdade não pede cartão-presente sigiloso por um número desconhecido. Confirme pessoalmente.',
        feedback_err: 'Olhe o topo: "novo número". Pedido urgente + sigiloso + número novo = golpe do falso superior.',
      },
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
      {
        tipo: 'imagem',
        url: '/generated/missions/pc-ia-2.svg',
        alt: 'Ilustração de um monitor com balões de conversa, representando um prompt de IA',
        legenda: 'Um bom pedido para a IA combina contexto, objetivo e formato esperado.',
      },
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

  // ============ AMB-SEG-2 — Senhas fortes (refs: NIST SP 800-63B) ============
  'amb-seg-2': {
    aulaBlocos: [
      {
        tipo: 'callout', variante: 'info',
        titulo: 'Esquece "P@ssw0rd!"',
        texto: 'O NIST (instituto americano de padrões, o cara que define segurança digital pro mundo todo) já mudou a regra: SENHA LONGA bate SENHA COMPLICADA. Frase com 4 palavras aleatórias > "Tr0c4@123".',
      },
      {
        tipo: 'aula_steps',
        titulo: 'Como pensar numa senha que você lembra (e o hacker não quebra)',
        items: [
          { titulo: '1. 4 palavras aleatórias', texto: 'Tipo: "girafa-violino-quinta-marmelada". 28 caracteres. Muito mais difícil de quebrar que "Senha@123".' },
          { titulo: '2. Uma senha por conta crítica', texto: 'Email, banco e governo NUNCA compartilham a mesma senha. Pra resto, use gerenciador.' },
          { titulo: '3. Gerenciador de senhas', texto: 'Bitwarden é grátis e open-source. Você decora UMA senha mestre forte e ele guarda o resto.' },
          { titulo: '4. 2FA sempre que possível', texto: 'Aplicativo (Google Authenticator, Authy) é melhor que SMS. SMS pode ser interceptado.' },
        ],
      },
      {
        tipo: 'stats',
        titulo: 'Por que isso importa',
        items: [
          { numero: '81%', texto: 'das invasões usam senha fraca ou vazada (Verizon DBIR)' },
          { numero: '23 mi', texto: 'usam ainda "123456" como senha (NCSC Reino Unido)' },
          { numero: '2s', texto: 'tempo pra quebrar "senha123" — frase longa leva séculos' },
        ],
      },
      {
        tipo: 'do_dont',
        titulo: 'O que MUDOU no padrão recente (NIST 2024)',
        do: [
          'Tamanho importa mais que símbolos especiais.',
          'Trocar senha SÓ quando suspeitar vazamento.',
          'Verificar se sua senha vazou em haveibeenpwned.com.',
        ],
        dont: [
          'Trocar a cada 30 dias só por trocar (regra ultrapassada).',
          'Substituir letra por número achando que é seguro (P@ssw0rd já caiu).',
          'Anotar em post-it no monitor (clássico, e perigoso).',
        ],
      },
    ],
    interacoes: [
      { tipo: 'hotspot',
        cenaTpl: 'navegador-url',
        cenaData: {
          aba: 'Banco do Brasil — Acesso',
          urlBase: 'http://bb-atendimento-cliente.',
          urlTld: 'top',
          urlPath: '/login',
          marca: 'Banco do Brasil',
          chamada: 'Confirme seus dados para reativar sua conta',
          campo1: 'Agência e conta',
          campo2: 'Senha de 8 dígitos',
          botao: 'Entrar',
        },
        cenaImg: '/generated/interactive/navegador-url.svg',
        alt: 'Navegador aberto numa página que imita o Banco do Brasil pedindo login',
        prompt: 'Antes de digitar sua senha aqui: que parte da tela revela se o site é falso?',
        areas: [
          { x: 9, y: 11, w: 74, h: 8, ok: true },     // barra de endereço (domínio + cadeado)
          { x: 6, y: 75, w: 24, h: 10, ok: false },   // botão "Entrar"
        ],
        xp: 12,
        feedback_ok: 'Isso. A barra de endereço entrega tudo: "não seguro" + domínio terminado em .top = página falsa.',
        feedback_err: 'O formulário parece real de propósito. A verdade está na BARRA DE ENDEREÇO: confira o cadeado e o domínio.',
      },
      {
        tipo: 'hotspot',
        cenaTpl: 'email-entrega',
        cenaData: {
          title: 'Correios',
          sub: 'Aviso de entrega',
          badge: 'C',
          deBase: 'correios@entrega-rastreio.',
          deTld: 'click',
          assunto: 'Sua encomenda está parada na alfândega',
          corpo: 'Há uma taxa pendente de R$ 4,90. Pague agora|para liberar sua encomenda e evitar a devolução.',
          botao: 'Rastrear e pagar taxa',
        },
        cenaImg: '/generated/interactive/email-entrega.svg',
        alt: 'Email avisando sobre uma encomenda parada, com remetente suspeito e link',
        prompt: 'Esse email diz que sua encomenda está parada. O que prova que é golpe ANTES de clicar?',
        areas: [
          { x: 11, y: 28, w: 62, h: 8,  ok: true },   // domínio do remetente (errado)
          { x: 9,  y: 70, w: 40, h: 11, ok: false },  // botão "rastrear"
          { x: 9,  y: 48, w: 70, h: 14, ok: false },  // corpo do texto
        ],
        xp: 12,
        feedback_ok: 'Isso. Olhe o REMETENTE: o domínio não é dos Correios de verdade. Email falso se entrega no endereço.',
        feedback_err: 'O texto e o botão imitam o real. A prova está no e-mail do REMETENTE — confira o domínio antes de tudo.',
      },
      {
        tipo: 'hotspot',
        cenaTpl: 'email-lista',
        cenaData: {
          title: 'Caixa de entrada',
          sub: '3 não lidos',
          badge: '@',
          itens: 'Maria (RH);Folha de ponto de maio;ok|premios@sorteio-online.win;VOCÊ GANHOU um iPhone 15!;bad|Escola Municipal;Reunião de pais — quinta;ok',
        },
        cenaImg: '/generated/interactive/email-lista.svg',
        alt: 'Caixa de entrada com três e-mails, um deles claramente suspeito',
        prompt: 'Três e-mails na caixa. Toque no que você NÃO deve abrir.',
        areas: [
          { x: 6, y: 42, w: 88, h: 13, ok: true },   // e-mail suspeito (linha 2)
          { x: 6, y: 16, w: 88, h: 13, ok: false },  // Maria (RH)
          { x: 6, y: 68, w: 88, h: 13, ok: false },  // Escola
        ],
        xp: 12,
        feedback_ok: 'Isso. Remetente estranho + "VOCÊ GANHOU" em maiúsculas = phishing. Nem abrir: marcar como spam.',
        feedback_err: 'Os outros dois são de pessoas reais que você conhece. O perigoso é o do "prêmio" com remetente desconhecido.',
      },
      {
        tipo: 'hotspot',
        cenaTpl: 'ligacao-golpe',
        cenaData: {
          chamador: 'Central de Segurança · Banco',
          numero: '+55 11 4002-8922',
          aviso: 'chamada não identificada',
        },
        cenaImg: '/generated/interactive/ligacao-golpe.svg',
        alt: 'Tela de ligação recebida de número desconhecido se passando pelo banco',
        prompt: '"Central de Segurança" ligando do nada pedindo seus dados. O que fazer?',
        areas: [
          { x: 24, y: 78, w: 18, h: 14, ok: true },   // recusar (vermelho)
          { x: 58, y: 78, w: 18, h: 14, ok: false },  // atender (verde)
        ],
        xp: 12,
        feedback_ok: 'Certo. Banco não liga pedindo senha ou código. Recuse, e ligue VOCÊ no número do verso do cartão.',
        feedback_err: 'Cuidado: atender já abre espaço pro golpista te pressionar. Banco de verdade nunca pede senha por telefone.',
      },
      {
        tipo: 'versus',
        prompt: 'Qual dessas é mais segura na prática?',
        opcaoA: { titulo: 'Tr0c4@2024!', desc: '12 caracteres, com tudo: maiúscula, número, símbolo' },
        opcaoB: { titulo: 'cavalo-azulejo-quinta-pamonha', desc: '29 caracteres, só letras minúsculas e hífens' },
        resposta: 'B',
        xp: 12,
        feedback_ok: 'Sim! Por matemática: cada caractere extra multiplica a dificuldade. 29 letras minúsculas batem 12 caracteres "complicados". E você lembra melhor.',
        feedback_err: 'A intuição engana. O computador tenta MILHÕES por segundo. Tamanho da senha é exponencial — frase longa vence.',
      },
      {
        tipo: 'scenario_branch',
        titulo: 'Sua senha do email vazou num site',
        situacao: 'Você recebe um alerta: "sua senha do email foi vazada num site que você se cadastrou em 2019". O que fazer PRIMEIRO?',
        opcoes: [
          { titulo: 'Trocar a senha do email AGORA', certo: true, feedback: 'Perfeito. O email é a chave-mestra — se cair, ladrão recupera senha de TUDO via "esqueci minha senha". Trocar email é prioridade absoluta.' },
          { titulo: 'Ignorar, faz tempo desse cadastro', certo: false, feedback: 'Risco grande. Se você reutilizou essa senha em outros lugares, todos estão expostos. E se for a do email, o estrago é total.' },
          { titulo: 'Excluir a conta do site antigo', certo: false, feedback: 'Bom passo mas não primeiro. O dano já foi feito. Prioridade: blindar o email AGORA, depois lidar com o site.' },
        ],
        xp: 14,
      },
      {
        tipo: 'choose',
        prompt: 'Você precisa criar 2FA pro seu banco. Qual a opção MAIS segura?',
        opcoes: [
          'Receber código por SMS no celular.',
          'Usar aplicativo Authenticator (Google/Authy).',
          'Email de confirmação.',
          'Pergunta secreta tipo "nome do seu cachorro".',
        ],
        resposta: 1, xp: 10,
        feedback_ok: 'Isso. App gera código offline a cada 30s, ninguém intercepta. SMS é interceptável (golpe SIM swap), email pode estar comprometido.',
        feedback_err: 'O melhor é o app autenticador. SMS já foi furado por golpe SIM-swap várias vezes no Brasil. Pergunta secreta qualquer um descobre no Facebook.',
      },
      {
        tipo: 'fill_blank',
        prompt: 'Complete a regra de ouro (recomendação NIST 2024):',
        frase: 'Senha boa é senha ___ e ___ — não senha curta e cheia de símbolos.',
        tokens: ['longa', 'única', 'fácil', 'complicada', 'antiga', 'aleatória'],
        respostas: ['longa', 'única'],
        xp: 10,
        feedback_ok: 'Exato. Tamanho e ser única (uma por conta crítica) batem complexidade artificial.',
        feedback_err: 'Padrão atualizado: LONGA + ÚNICA. Esquece o "tem que ter @ e número".',
      },
    ],
  },

  // ============ PC-EXCEL-3 — Fórmulas básicas (refs: Microsoft Learn, MOS) ============
  'pc-excel-3': {
    aulaBlocos: [
      {
        tipo: 'callout', variante: 'tip',
        titulo: 'A coisa que muda sua vida no Excel',
        texto: 'Fórmula começa com "=". Só isso. Depois você escreve a conta. O Excel faz pra você. É como ter uma calculadora que sabe o nome das células.',
      },
      {
        tipo: 'aula_steps',
        titulo: '5 fórmulas que resolvem 80% do dia a dia',
        items: [
          { titulo: '=SOMA(A1:A10)', texto: 'Soma tudo do A1 até o A10. Bota o ":" no meio pra dizer "do x até o y".' },
          { titulo: '=MÉDIA(B1:B12)', texto: 'Média aritmética. Útil pra notas, vendas mensais, qualquer coisa que precisa do "valor típico".' },
          { titulo: '=MÁXIMO / =MÍNIMO', texto: 'Maior e menor valor de uma faixa. Tipo "qual foi o melhor mês de vendas?".' },
          { titulo: '=CONT.SE(A:A;"vendido")', texto: 'Conta quantas células têm "vendido". Inventário virou simples.' },
          { titulo: '=SE(B2>100;"Bom";"Ruim")', texto: 'Decisão automática. "Se B2 maior que 100, escreve Bom; senão, escreve Ruim".' },
        ],
      },
      {
        tipo: 'atalho',
        tecla: 'F4', desc: 'após selecionar referência (ex: A1), trava ela com $A$1 — útil pra copiar fórmula sem mudar a referência. Macete que cai na prova MOS (Microsoft Office Specialist) e em todo concurso.',
      },
      {
        tipo: 'quote',
        texto: '"Quem domina fórmulas básicas economiza 4 horas por semana em trabalho repetitivo."',
        fonte: 'Microsoft Learn / pesquisa interna 2023',
      },
    ],
    interacoes: [
      {
        tipo: 'imagem',
        url: '/generated/missions/pc-excel-3.svg',
        alt: 'Ilustração de uma planilha ao lado de um gráfico de barras',
        legenda: 'Exemplo visual: uma planilha fica confiável quando a fórmula conversa com a tabela certa.',
      },
      {
        tipo: 'hotspot',
        prompt: 'Esta planilha soma o orçamento da casa. Clique na célula que mostra o TOTAL.',
        cenaTpl: 'excel-soma',
        cenaData: {
          titulo: 'Planilha — Orçamento do mês',
          formula: '=SOMA(B2:B6)',
          cabecalhos: 'Item|Valor',
          total: 'R$ 1.880',
          itens: 'Aluguel;R$ 900|Luz;R$ 180|Água;R$ 90|Mercado;R$ 600|Internet;R$ 110',
        },
        cenaImg: '/generated/interactive/excel-soma.svg',
        alt: 'Planilha de orçamento com itens e uma célula de total destacada',
        areas: [
          { x: 40, y: 88, w: 26, h: 9, ok: true },   // célula do TOTAL (verde, embaixo)
          { x: 6,  y: 11, w: 60, h: 7, ok: false },  // barra de fórmula
        ],
        xp: 10,
        feedback_ok: 'Isso. O total verde lá embaixo é o resultado do =SOMA. A barra de fórmula só mostra como ele foi calculado.',
        feedback_err: 'Essa é a barra de fórmula (mostra o cálculo). O TOTAL é a célula verde no fim da coluna de valores.',
      },
      {
        tipo: 'sim_planilha',
        titulo_curto: 'Calcule a média',
        prompt: 'Na célula B6, escreva a fórmula que calcula a MÉDIA das notas da coluna B (B2:B5).',
        cabecalhos: ['Aluno', 'Nota'],
        linhas: [
          ['Ana', '8'],
          ['Bruno', '6'],
          ['Carla', '9'],
          ['Diego', '7'],
        ],
        celulaAlvo: 'B6',
        respostasAceitas: ['=MÉDIA(B2:B5)', '=MEDIA(B2:B5)', '=AVERAGE(B2:B5)'],
        xp: 15,
        feedback_ok: 'Mandou bem! Resultado: 7.5. Tanto faz MÉDIA (PT) ou AVERAGE (EN) — Excel aceita os dois conforme idioma instalado.',
        feedback_err: 'Lembra: começa com =, depois MÉDIA, parênteses, e a faixa B2:B5.',
      },
      {
        tipo: 'find_error',
        prompt: 'A fórmula abaixo dá erro #NOME?. Onde tá o problema?',
        codigo: '=PROCV(E2, A:C; 3; 0)',
        opcoes: [
          'A faixa A1:A10 não existe.',
          'Falta o sinal de = no começo.',
          'Está escrito SOMMA (com 2 M) — o certo é SOMA.',
          'Faltam aspas ao redor da faixa.',
        ],
        opcoes: [
          'Tem virgula misturada com ponto-e-virgula.',
          'A funcao PROCV nao existe.',
          'A tabela A:C deveria estar entre aspas.',
          'O 0 final deve ser removido.',
        ],
        resposta: 0, xp: 12,
        feedback_ok: 'Isso! Erro #NOME? sempre é fórmula digitada errada. Aqui tem M sobrando. O certo é SOMA.',
        feedback_err: 'O erro #NOME? aparece quando o Excel não reconhece o nome da função. Olhe letra por letra: SOMMA tem M a mais.',
      },
      {
        tipo: 'drag_match',
        labelA: 'Fórmula', labelB: 'O que faz',
        prompt: 'Pareie a fórmula com o resultado:',
        colA: ['=SE(A1>10;"OK";"NÃO")', '=CONT.SE(B:B;"sim")', '=MÁXIMO(C1:C20)', '=SOMA(D2:D5)'],
        colB: ['Conta quantos "sim" tem na coluna B', 'Soma 4 células da coluna D', 'Mostra OK se A1 maior que 10', 'Pega o maior número da faixa'],
        pares: [[0, 2], [1, 0], [2, 3], [3, 1]],
        xp: 12,
      },
      {
        tipo: 'time_pressure',
        prompt: 'Sequência rápida — qual o resultado de "=SOMA(2;3;5)"?',
        opcoes: ['10', '8', '15', '7'],
        resposta: 0, xp: 8, segundos: 15,
        feedback_ok: 'Rápido! 2+3+5=10. SOMA com ponto-e-vírgula soma valores avulsos.',
        feedback_err: 'O ";" separa cada valor a ser somado. 2+3+5=10.',
      },
    ],
  },

  // ============ MOB-WPP-2 — Golpes via WhatsApp (refs: Anatel, FBI IC3) ============
  'mob-wpp-2': {
    aulaBlocos: [
      {
        tipo: 'callout', variante: 'aviso',
        titulo: 'O WhatsApp é o canal preferido dos golpistas no Brasil',
        texto: 'A Anatel registrou +500 mil denúncias de golpes via WhatsApp em 2024. O FBI (IC3, Internet Crime Center) coloca golpes de impersonação no top 3 mundial. Conhecer os 4 mais comuns blinda você.',
      },
      {
        tipo: 'aula_steps',
        titulo: 'Os 4 golpes que mais fazem vítima',
        items: [
          { titulo: 'Golpe do "filho/parente"', texto: '"Mãe, meu celular quebrou, esse é meu número novo, me manda PIX". CLÁSSICO. Sempre ligue pra pessoa pelo número antigo antes de mandar nada.' },
          { titulo: 'Falso suporte do banco', texto: '"Aqui é do Itaú, detectamos invasão". Banco NUNCA pede senha, código ou pra instalar app por mensagem.' },
          { titulo: 'Promoção / sorteio premiado', texto: '"Você ganhou um iPhone 15! Clique aqui pra retirar". Se você não se cadastrou, NÃO ganhou nada.' },
          { titulo: 'Clonagem por código de 6 dígitos', texto: '"Te mandei um código sem querer, me reenvia?" — esse código É O ACESSO AO SEU WHATSAPP. Nunca repasse.' },
        ],
      },
      {
        tipo: 'stats',
        titulo: 'O custo real desse golpe',
        items: [
          { numero: 'R$ 1,8 bi', texto: 'perdidos em golpes digitais no Brasil em 2024 (Febraban)' },
          { numero: '60+', texto: 'idade média da vítima do "golpe do filho" — alvo preferido' },
          { numero: '4 min', texto: 'tempo médio entre "sequestrar" o WhatsApp e mandar PIX pros contatos' },
        ],
      },
      {
        tipo: 'do_dont',
        titulo: 'Reflexos que salvam',
        do: [
          'Ligar pro número ANTIGO antes de qualquer PIX urgente.',
          'Ativar verificação em 2 etapas no WhatsApp (Config → Conta).',
          'Pedir foto, áudio ou videochamada de quem diz ser parente.',
        ],
        dont: [
          'Mandar código de 6 dígitos pra ninguém — NUNCA.',
          'Confiar em "promoção" que pede dados ou clique em link.',
          'Resolver dinheiro pelo WhatsApp sob pressão emocional.',
        ],
      },
    ],
    interacoes: [
      {
        tipo: 'imagem',
        url: '/generated/missions/mob-wpp-2.svg',
        alt: 'Ilustração de um celular com balões de conversa de um aplicativo de mensagens',
        legenda: 'Exemplo visual: em mensagens, desconfie de pressa, número novo e pedido financeiro.',
      },
      {
        tipo: 'sim_chat',
        prompt: 'Você recebe essa mensagem. Como responder?',
        mensagens: [
          { de: 'desconhecido', texto: 'Oi mãe, meu celular caiu na água e tô usando o do amigo. Esse é meu número novo, salva aí 😘' },
          { de: 'desconhecido', texto: 'Preciso fazer um pix urgente de R$ 850 pra pagar uma conta hoje. Você consegue?' },
        ],
        opcoes: [
          { texto: 'Claro filho, me passa a chave 💸', certo: false, feedback: 'NÃO. Esse é o golpe mais clássico. Ligue pro número antigo do seu filho ANTES de qualquer coisa.' },
          { texto: 'Liga aqui no número antigo pra eu confirmar que é você.', certo: true, feedback: 'PERFEITO. Resposta padrão de quem não cai. Golpista não tem como ligar do número original — vai sumir.' },
          { texto: 'Manda áudio agora dizendo "oi mãe"', certo: false, feedback: 'Quase bom, mas IA já clona voz. Ligação pro número ORIGINAL é mais seguro que áudio.' },
          { texto: 'Quanto e pra que chave?', certo: false, feedback: 'Você caiu na conversa. Cada resposta sua dá mais informação pro golpista te manipular.' },
        ],
        xp: 18,
      },
      { tipo: 'hotspot',
        cenaTpl: 'wpp-promo',
        cenaData: {
          title: 'Família ❤',
          sub: '12 participantes',
          badge: 'T',
          autor: 'Tia Cleusa',
          msg1: 'Gente, o Assaí tá dando R$ 500 em compras pra',
          destaque: 'comemorar 50 anos! Só fazer o cadastro:',
          chamada: 'Garanti o meu, corram que acaba hoje!',
          link: 'http://assai-aniversario50.xyz/premio',
        },
        cenaImg: '/generated/interactive/wpp-promo.svg',
        alt: 'Mensagem no grupo da família com link de uma promoção falsa de supermercado',
        prompt: 'A tia compartilhou no grupo. Toque no que você NÃO deve clicar.',
        areas: [{ x: 10, y: 67, w: 62, h: 9, ok: true }],
        xp: 12,
        feedback_ok: 'Isso. "Supermercado dando R$ 500" + link estranho (.xyz) = golpe. Nem clicar, nem repassar.',
        feedback_err: 'O perigo é o LINK da "promoção". Prêmio fácil pedindo cadastro é isca — não clique e avise a tia.',
      },
      {
        tipo: 'choose',
        prompt: 'Alguém manda "te mandei um código de 6 dígitos sem querer, me devolve aí?". Você:',
        opcoes: [
          'Devolve o código — coitado, foi sem querer.',
          'Pergunta primeiro de quem é antes de mandar.',
          'NÃO MANDA, e bloqueia. Esse código é o acesso ao seu WhatsApp.',
          'Manda só metade do código por segurança.',
        ],
        resposta: 2, xp: 14,
        feedback_ok: 'Exato! Esse código é o LOGIN do seu WhatsApp. Se você manda, perde o WhatsApp na hora e o golpista começa a pedir PIX pros SEUS contatos.',
        feedback_err: 'JAMAIS mande código de 6 dígitos pra ninguém. Esse é literalmente a senha de entrada do seu WhatsApp.',
      },
      {
        tipo: 'true_false',
        prompt: 'Avalie cada afirmação:',
        afirmacoes: [
          { texto: 'O banco pode te ligar pelo WhatsApp e pedir sua senha em caso de fraude.', resposta: false, feedback: 'Banco NUNCA pede senha por canal nenhum. Nem por telefone, nem por mensagem.' },
          { texto: 'Verificação em 2 etapas no WhatsApp é só uma senha extra opcional.', resposta: false, feedback: 'É a diferença entre ter ou não ter sua conta clonada. É essencial.' },
          { texto: 'IA já consegue clonar voz com 3 segundos de áudio.', resposta: true, feedback: 'Verdade. Ferramentas como ElevenLabs fazem isso. Por isso "áudio do filho" não é mais prova.' },
          { texto: 'Se o número é diferente, sempre desconfie de pedido de dinheiro.', resposta: true, feedback: 'Regra de ouro. Número novo + urgência financeira = golpe até prova em contrário.' },
        ],
        xp: 16,
      },
    ],
  },

  // ============ PC-IA-1 — Introdução à IA (refs: Stanford HAI, MIT) ============
  'pc-ia-1': {
    aulaBlocos: [
      {
        tipo: 'callout', variante: 'info',
        titulo: 'IA não é mágica — é estatística rápida',
        texto: 'A IA generativa (ChatGPT, Gemini, Claude) é, no fundo, um programa que aprendeu a prever a próxima palavra lendo bilhões de textos. Não pensa, não sente, mas é incrivelmente útil quando você sabe pedir.',
      },
      {
        tipo: 'aula_steps',
        titulo: 'A regra dos 4 P para um bom pedido (Prompt)',
        items: [
          { titulo: 'Papel', texto: 'Diga o papel que a IA deve assumir. "Aja como um professor de matemática paciente para um aluno de 50 anos".' },
          { titulo: 'Pedido', texto: 'O que você quer? Seja específico. "Me explique juros compostos em 3 parágrafos".' },
          { titulo: 'Público', texto: 'Quem vai ler? "Vou usar pra explicar pra minha mãe que não fez faculdade".' },
          { titulo: 'Padrão', texto: 'Formato esperado. "Use exemplo com R$ 1000 e linguagem do dia a dia, sem jargão".' },
        ],
      },
      {
        tipo: 'quote',
        texto: '"A maior diferença entre quem usa IA bem e mal não é a IA — é a clareza do pedido."',
        fonte: 'Andrew Ng (Stanford, fundador Coursera)',
      },
      {
        tipo: 'do_dont',
        titulo: 'Cuidados que evitam furada',
        do: [
          'Sempre confira número, data e fonte que a IA der.',
          'Use IA pra rascunho, brainstorming, simplificação de texto.',
          'Diga "se não tiver certeza, fale que não tem".',
        ],
        dont: [
          'Pedir conselho médico, jurídico ou financeiro como verdade absoluta.',
          'Colar dados pessoais, senhas ou documentos sigilosos.',
          'Achar que IA "sabe tudo" — ela inventa fatos com confiança (chamam de "alucinação").',
        ],
      },
    ],
    interacoes: [
      {
        tipo: 'imagem',
        url: '/generated/missions/pc-ia-1.svg',
        alt: 'Ilustração de um monitor com balões de conversa de uma assistente de IA',
        legenda: 'Exemplo visual: a IA ajuda melhor quando você dá contexto, objetivo e formato esperado.',
      },
      {
        tipo: 'versus',
        prompt: 'Qual desses é um prompt MELHOR pra IA?',
        opcaoA: { titulo: 'Me fala sobre investimento', desc: 'Direto e curto' },
        opcaoB: { titulo: 'Aja como educador financeiro. Explique em 200 palavras as 3 opções básicas de investimento (poupança, Tesouro, CDB) pra alguém de 60 anos que nunca investiu, sem usar jargão de banco.', desc: 'Detalhado com papel, público, formato' },
        resposta: 'B',
        xp: 14,
        feedback_ok: 'Isso! Quanto mais contexto, mais útil a resposta. "Me fala sobre X" devolve genérico tipo Wikipedia. Pedido bom = resposta sob medida.',
        feedback_err: 'Pedido genérico = resposta genérica. A regra é: diga o papel, o público, o tamanho e o formato. Aí a IA entrega ouro.',
      },
      {
        tipo: 'sort_order',
        titulo_curto: 'Monte um prompt em ordem',
        prompt: 'Arraste os blocos pra formar um prompt forte:',
        itens: [
          { id: 1, texto: 'Aja como um nutricionista experiente' },
          { id: 2, texto: 'Crie um cardápio simples de 3 refeições por dia' },
          { id: 3, texto: 'para uma pessoa com diabetes tipo 2 começando dieta' },
          { id: 4, texto: 'em formato de lista, com preços médios de mercado brasileiro' },
        ],
        ordemCerta: [1, 2, 3, 4],
        xp: 14,
        feedback_ok: 'Boa. Papel → Pedido → Público → Padrão. É a ordem que dá resultado consistente.',
      },
      {
        tipo: 'true_false',
        prompt: 'Sobre o uso de IA generativa:',
        afirmacoes: [
          { texto: 'A IA pode "inventar" fatos com tom de certeza (alucinar).', resposta: true, feedback: 'Verdade. Estudo do MIT (2024) mostrou 27% das respostas factuais têm algum erro. Sempre confira.' },
          { texto: 'Tudo que você manda pra IA pode ser usado pra treinar a próxima versão.', resposta: true, feedback: 'Depende da configuração. Por padrão muitas ferramentas usam suas conversas. NUNCA cole CPF, senha ou dado sigiloso.' },
          { texto: 'IA substitui pesquisa médica ou jurídica.', resposta: false, feedback: 'Não. Use IA pra ORGANIZAR perguntas, não pra dar veredito. Em saúde e direito, profissional humano é insubstituível.' },
          { texto: 'Você pode pedir pra IA simplificar um texto complicado.', resposta: true, feedback: 'Sim, e é dos melhores usos. "Me explica isso como se eu tivesse 12 anos" funciona perfeito.' },
        ],
        xp: 14,
      },
      {
        tipo: 'transform',
        titulo_curto: 'Reescreva um prompt ruim',
        prompt: 'Transforme o pedido fraco em um pedido bom. Pedido fraco: "me ajuda com currículo". Reescreva usando ao menos 2 dos 4 P (Papel, Pedido, Público, Padrão).',
        criterios: [
          { label: 'Tem mais de 50 caracteres', minLen: 50 },
          { label: 'Inclui um papel (ex: "aja como", "seja um")', contemOu: ['aja como', 'seja um', 'finja ser', 'como um'] },
          { label: 'Especifica formato ou tamanho', contemOu: ['parágrafo', 'lista', 'palavras', 'tópicos', 'linhas', 'item'] },
        ],
        placeholder: 'Aja como recrutador de RH com 10 anos de experiência. Revise meu currículo focando em...',
        xp: 18,
        feedback_ok: 'Excelente! Esse padrão você pode reusar em todo prompt da vida.',
      },
    ],
  },

  // ============ MKT-CARREIRA-2 — LinkedIn essencial (refs: Harvard Business Review) ============
  'mkt-carreira-2': {
    aulaBlocos: [
      {
        tipo: 'callout', variante: 'info',
        titulo: 'LinkedIn é o currículo que trabalha sozinho',
        texto: 'Em 2025, 87% dos recrutadores começam a busca por candidato no LinkedIn (relatório Jobvite). Não precisa ter milhares de contatos — precisa de perfil COMPLETO e atualizado.',
      },
      {
        tipo: 'aula_steps',
        titulo: 'As 5 partes do perfil que pesam mais',
        items: [
          { titulo: 'Foto profissional', texto: 'Cara visível, fundo neutro, roupa do dia a dia profissional. Sem selfie de festa. Perfis com foto têm 21x mais visualizações.' },
          { titulo: 'Headline (sob o nome)', texto: 'NÃO ponha só "desempregado" ou cargo antigo. Ponha o que você FAZ. Ex: "Assistente administrativa | Excel e atendimento ao cliente"' },
          { titulo: 'Sobre (resumo)', texto: '3 parágrafos: quem você é, o que faz bem, o que está buscando. Em primeira pessoa. Sem jargão corporativo.' },
          { titulo: 'Experiência com VERBOS DE AÇÃO', texto: '"Organizei", "reduzi", "atendi 50 clientes/dia". Não "responsável por X" — chato e vago.' },
          { titulo: 'Habilidades + Recomendações', texto: 'Liste 10-15 habilidades reais. Peça pra 2-3 ex-colegas uma recomendação curta.' },
        ],
      },
      {
        tipo: 'quote',
        texto: '"Seu LinkedIn não precisa estar perfeito — precisa estar honesto, completo e atualizado nos últimos 6 meses."',
        fonte: 'Harvard Business Review, "Build a LinkedIn Profile that Works" 2023',
      },
      {
        tipo: 'stats',
        titulo: 'O impacto de cada melhoria',
        items: [
          { numero: '21x', texto: 'mais visualizações com foto profissional' },
          { numero: '6x', texto: 'mais contatos de recrutador com Sobre preenchido' },
          { numero: '40%', texto: 'mais chance de ser chamado pra entrevista com habilidades listadas' },
        ],
      },
    ],
    interacoes: [
      {
        tipo: 'find_error',
        prompt: 'Veja essa headline de LinkedIn. Qual o problema?',
        codigo: '"Procurando recolocação | Desempregado há 6 meses | Aceito qualquer oportunidade"',
        opcoes: [
          'Está muito curta.',
          'Foca no problema (desemprego) e não no valor que entrega.',
          'Tem caractere | que não pode usar.',
          'Não tem nenhum problema.',
        ],
        resposta: 1, xp: 12,
        feedback_ok: 'Exato! Headline vende o que você FAZ, não o que você precisa. "Atendente bilíngue | Vendas e relacionamento com cliente" funciona muito melhor.',
        feedback_err: 'O problema é o ângulo: vende o problema (desemprego) ao invés do valor (suas competências). Recrutador busca por habilidade, não por pena.',
      },
      {
        tipo: 'drag_zones',
        prompt: 'Classifique cada frase como BOA ou RUIM pra Experiência:',
        zonas: ['Boa', 'Ruim'],
        itens: [
          { texto: 'Responsável pelo financeiro', zona: 1 },
          { texto: 'Organizei o caixa diário de R$ 5k e reduzi erros em 30%', zona: 0 },
          { texto: 'Atendia clientes', zona: 1 },
          { texto: 'Atendi em média 40 clientes/dia, com 95% de satisfação no NPS', zona: 0 },
          { texto: 'Trabalhei lá', zona: 1 },
          { texto: 'Lideri equipe de 4 pessoas em projeto de implantação de Excel', zona: 0 },
        ],
        xp: 16,
        feedback_ok: 'Mandou bem. Verbo de ação + número específico = entrevista. Vago + genérico = perfil ignorado.',
      },
      {
        tipo: 'transform',
        titulo_curto: 'Reescreva uma experiência',
        prompt: 'A frase abaixo é fraca. Reescreva-a usando verbo de ação + número/resultado. Original: "Trabalhei no atendimento de uma loja".',
        criterios: [
          { label: 'Começa com verbo no passado (ex: "Atendi", "Organizei")', regexOu: ['^[A-ZÁÉÍÓÚ][a-záéíóúç]+(ei|i|amos|aram)'] },
          { label: 'Tem um número (clientes, vendas, etc.)', regex: '\\d' },
          { label: 'Tem mais de 40 caracteres', minLen: 40 },
        ],
        placeholder: 'Atendi 60 clientes por dia em loja de varejo, com foco em...',
        xp: 18,
        feedback_ok: 'Boa! Esse padrão você usa em todas as suas experiências no LinkedIn.',
      },
      {
        tipo: 'choose',
        prompt: 'Você está montando o "Sobre". Qual abertura é a MELHOR?',
        opcoes: [
          '"Profissional dinâmico, proativo e com sinergia em ambientes desafiadores."',
          '"Sou atendente há 8 anos. Aprendi a manter cliente difícil calmo e resolver problema rápido — duas coisas que faltam em todo lugar."',
          '"Procuro vaga urgente, aceito qualquer área, tenho disponibilidade total."',
          '"Olá! Bem-vindo ao meu perfil. Por favor, leia até o fim."',
        ],
        resposta: 1, xp: 12,
        feedback_ok: 'Sim! Concreto, honesto, mostra COMPETÊNCIA real. A primeira ("dinâmico, proativo") é o tipo de frase que recrutador pula direto.',
        feedback_err: 'O segredo é especificidade. "Atendente há 8 anos, sei lidar com cliente difícil" vence "profissional dinâmico" sempre.',
      },
    ],
  },

};
