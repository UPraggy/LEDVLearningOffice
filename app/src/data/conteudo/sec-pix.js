// ============================================================================
// CONTEÚDO — Golpes do PIX (sec-pix)  ·  módulo Segurança · vertente "ambos"
// O PIX é o meio de pagamento nº1 do Brasil — e por isso o alvo nº1 dos golpes.
// Aula focada em fraudes reais: falso comprovante, devolução, QR adulterado,
// falsa central, MED, limites. Conteúdo autoral, linguagem simples.
// ============================================================================

export const SEC_PIX = {
  'sec-pix-1': {
    trilhaId: 'sec-pix', numero: 1, titulo: 'Como o PIX funciona (e por que o golpista ama)',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'O PIX é rápido, grátis e cai na hora — por isso você usa todo dia. E é exatamente por isso que ele virou o brinquedo preferido dos golpistas. Entender COMO ele funciona é o primeiro passo pra nunca mandar dinheiro pra mão errada.',
      conceito: {
        titulo: 'Instantâneo e (quase sempre) irreversível',
        texto: 'No PIX o dinheiro sai da sua conta e cai na conta de quem recebe em segundos, 24h por dia. Diferente de um boleto ou TED antigo, não há "compensação" no dia seguinte que você possa cancelar: assim que confirma, acabou. O golpista explora justamente isso — ele cria urgência ("paga agora!") pra você transferir antes de pensar. Existe um caminho de devolução (o MED, que você vê na missão 6), mas ele não é garantido. A regra de ouro: antes de confirmar um PIX, confira pra QUEM está indo.',
      },
      estrutura: {
        titulo: 'As 3 formas de fazer um PIX',
        partes: [
          { simbolo: '🔑', desc: 'Por chave: CPF, telefone, e-mail ou chave aleatória de quem recebe.' },
          { simbolo: '📷', desc: 'Por QR Code: você aponta a câmera e o valor/destino já vêm preenchidos.' },
          { simbolo: '📋', desc: 'Copia e Cola: um código longo que você cola no app (é um QR em texto).' },
          { simbolo: '✅', desc: 'Antes de confirmar, o app SEMPRE mostra o nome de quem vai receber. Leia.' },
        ],
      },
      exemplo: {
        titulo: 'A tela de confirmação é seu freio',
        celulas: [
          { ref: 'Destino', valor: 'JOÃO P SILVA — confere com quem você quer pagar?' },
          { ref: 'Valor', valor: 'R$ 250,00 — é esse mesmo?' },
          { ref: 'Chave', valor: 'CPF ***.456.789-** — bate?' },
          { ref: 'Ação', valor: 'Só confirme depois de ler os 3 acima' },
        ],
        formula: 'Nome certo + valor certo = confirma. Qualquer dúvida = cancela.',
        resultado: '5 segundos de leitura evitam um prejuízo que não volta.',
        comentario: 'O golpe quase sempre vence na pressa. A tela que mostra o nome do recebedor existe pra você usar — é o último portão antes do dinheiro ir embora.',
      },
      vocabulario: [
        { palavra: 'Chave PIX', def: 'Apelido da conta: CPF, celular, e-mail ou código aleatório.' },
        { palavra: 'Irreversível', def: 'Depois de confirmado, o PIX não tem botão de "cancelar".' },
        { palavra: 'Recebedor', def: 'A pessoa/empresa cujo nome aparece na tela de confirmação.' },
      ],
      chave: [
        'PIX cai na hora e não tem cancelar',
        'O app sempre mostra o NOME de quem recebe — leia antes',
        'Pressa pra pagar é sinal de golpe',
      ],
      porque: 'Quase todo golpe de PIX depende de você confirmar sem ler a tela. Entender que é instantâneo e irreversível faz você criar o hábito de conferir o recebedor — a defesa que sozinha evita a maioria das fraudes.',
    },
    pratica: {
      instrucao: 'Abra o app do seu banco e vá até a área de PIX (não precisa transferir nada).',
      passos: [
        'Encontre o menu PIX no seu banco',
        'Veja suas chaves cadastradas (Minhas chaves)',
        'Simule um pagamento por chave até a tela de confirmação',
        'Repare onde aparece o NOME do recebedor e a chave mascarada',
        'CANCELE antes de confirmar — era só pra você ver a tela',
        'Memorize: essa tela é o ponto onde você sempre confere antes de pagar',
      ],
    },
    desafio: {
      cenario: 'Você localiza, dentro do seu app, exatamente onde o nome do recebedor aparece na confirmação — e adota o hábito de lê-lo sempre.',
      requisitos: [
        'Achei o menu PIX no meu banco',
        'Vi minhas chaves cadastradas',
        'Cheguei até a tela de confirmação de pagamento',
        'Identifiquei o nome do recebedor nessa tela',
        'Entendo que o PIX é irreversível',
      ],
      dica: 'Se o nome na confirmação for de uma pessoa/empresa que você não conhece — pare. Não importa a história que te contaram. O nome errado é o sinal mais claro de golpe.',
    },
    validacao: [
      'Sei que o PIX é instantâneo e irreversível',
      'Conheço as 3 formas de pagar (chave, QR, copia e cola)',
      'Sei onde o app mostra o recebedor',
      'Tenho o hábito de conferir antes de confirmar',
      'Reconheço a pressa como sinal de alerta',
    ],
  },

  'sec-pix-2': {
    trilhaId: 'sec-pix', numero: 2, titulo: 'O golpe do falso comprovante',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Você vende algo na internet. O comprador manda uma foto do comprovante de PIX, todo bonitinho, e pede pra retirar o produto. Você entrega — e o dinheiro nunca cai. Esse é um dos golpes mais comuns do Brasil, e a defesa é simples: comprovante não é dinheiro.',
      conceito: {
        titulo: 'Print não vale — só vale o saldo na sua conta',
        texto: 'Um comprovante de PIX é só uma imagem. Golpistas usam apps e até sites que geram comprovantes falsos perfeitos, com seu nome, valor e horário. Eles também mandam "agendamentos" (que podem ser cancelados) ou dizem que "vai cair em alguns minutos". A única prova real de que você recebeu é o dinheiro APARECER no extrato/saldo do SEU app. Enquanto não caiu, não houve pagamento. Nunca libere produto, serviço ou troco baseado em foto de comprovante.',
      },
      estrutura: {
        titulo: 'Como o golpe se monta',
        partes: [
          { simbolo: '🖼️', desc: 'O "comprovante": print gerado em app falso, idêntico ao verdadeiro.' },
          { simbolo: '⏳', desc: 'A desculpa: "já paguei, mas o banco está demorando a compensar".' },
          { simbolo: '🏃', desc: 'A pressa: "preciso levar agora", "estou indo embora", "é presente".' },
          { simbolo: '✅', desc: 'A defesa: abrir SEU app e ver o valor no saldo. Só então liberar.' },
        ],
      },
      exemplo: {
        titulo: 'O que conferir de verdade',
        celulas: [
          { ref: 'Errado', valor: 'Confiar no print que o comprador mandou' },
          { ref: 'Errado', valor: 'Aceitar "vai cair em instantes, pode liberar"' },
          { ref: 'Certo', valor: 'Abrir o app do SEU banco' },
          { ref: 'Certo', valor: 'Ver o valor entrar no extrato/saldo' },
        ],
        formula: 'Caiu no MEU app = recebi. Print = nada.',
        resultado: 'Você entrega só depois do dinheiro real entrar.',
        comentario: 'Vale também desconfiar de "PIX agendado": agendamento pode ser cancelado pelo pagador antes da data. Recebido mesmo é quando está no saldo, disponível.',
      },
      vocabulario: [
        { palavra: 'Comprovante falso', def: 'Imagem gerada pra parecer um PIX que nunca foi feito.' },
        { palavra: 'PIX agendado', def: 'Transferência marcada pro futuro — pode ser cancelada antes.' },
        { palavra: 'Compensar', def: 'Desculpa falsa: PIX cai na hora, não "compensa" depois.' },
      ],
      chave: [
        'Comprovante é foto, não é dinheiro',
        'Só liberou depois que caiu no SEU app',
        '"Já paguei, pode liberar" sem o saldo entrar = golpe',
      ],
      porque: 'Esse golpe atinge qualquer um que venda ou troque algo. Saber que comprovante não prova nada, e que só o saldo no seu app conta, blinda você como vendedor — e como pessoa que recebe troco ou pagamento.',
    },
    pratica: {
      instrucao: 'Vamos treinar a verificação correta de um recebimento.',
      passos: [
        'Imagine que vendeu algo e o comprador mandou um comprovante',
        'Não olhe o print — abra o app do SEU banco',
        'Vá no extrato e procure o valor exato entrando',
        'Confira o nome de quem enviou e o horário',
        'Se não está no saldo: o pagamento NÃO aconteceu',
        'Combine essa regra com quem vende junto com você (família, loja)',
      ],
    },
    desafio: {
      cenario: 'Você define e pratica a regra "só entrego depois que cair no meu app" para qualquer venda ou troco.',
      requisitos: [
        'Entendi que comprovante pode ser falso',
        'Sei conferir o recebimento no meu próprio extrato',
        'Não libero nada baseado em print',
        'Reconheço a desculpa do "vai compensar depois"',
        'Desconfio de PIX agendado como prova de pagamento',
      ],
      dica: 'Numa venda presencial, peça pra pessoa esperar você ver o dinheiro no app. Quem pagou de verdade não se incomoda. Quem reclama da espera e cria pressa é o golpista.',
    },
    validacao: [
      'Sei que comprovante é imagem, não dinheiro',
      'Confiro recebimento no meu app',
      'Não libero produto por print',
      'Reconheço a tática do "vai compensar"',
      'Desconfio de agendamento como prova',
    ],
  },

  'sec-pix-3': {
    trilhaId: 'sec-pix', numero: 3, titulo: 'PIX "por engano" e o golpe da devolução',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Cai um PIX inesperado na sua conta. Minutos depois alguém liga desesperado: "transferi errado, me devolve por favor!". Parece justo devolver... mas pode ser uma armadilha pra você perder dinheiro de verdade. Veja como agir certo.',
      conceito: {
        titulo: 'Nunca devolva por fora — sempre pelo MED',
        texto: 'No golpe da devolução, o dinheiro que "caiu por engano" pode ter origem suja: foi roubado de outra vítima e jogado na sua conta de propósito. Se você devolve por PIX pra uma chave que a pessoa passou, manda seu dinheiro limpo pro golpista — e ainda pode ter o valor original bloqueado depois, porque era fruto de crime. A forma correta é não devolver por conta própria: você aciona seu banco e usa o MED (Mecanismo Especial de Devolução). O banco devolve pro pagador original, com segurança.',
      },
      estrutura: {
        titulo: 'Recebeu algo que não esperava? Faça assim',
        partes: [
          { simbolo: '🛑', desc: 'Não gaste e não devolva por PIX pra ninguém que te pedir.' },
          { simbolo: '📞', desc: 'Procure o SEU banco pelos canais oficiais (app, telefone do cartão).' },
          { simbolo: '🔁', desc: 'Peça a devolução pelo MED — o banco reverte pra origem correta.' },
          { simbolo: '🧾', desc: 'Guarde print do recebimento e da conversa, se houver.' },
        ],
      },
      exemplo: {
        titulo: 'Dois caminhos, um seguro',
        celulas: [
          { ref: 'Perigoso', valor: 'Devolver por PIX pra "chave" que a pessoa mandou' },
          { ref: 'Perigoso', valor: 'Atender link/áudio de "central" que apareceu junto' },
          { ref: 'Seguro', valor: 'Acionar seu banco e pedir devolução via MED' },
          { ref: 'Seguro', valor: 'Não usar o dinheiro até resolver com o banco' },
        ],
        formula: 'Devolução real = pelo banco (MED), nunca por chave de terceiro.',
        resultado: 'Você não vira "ponte" pra lavar dinheiro de golpe.',
        comentario: 'A pressa e a história triste são as iscas. Quem mandou errado de verdade resolve pelo banco. Quem insiste pra você "fazer um PIX de volta agora" está te usando.',
      },
      vocabulario: [
        { palavra: 'MED', def: 'Mecanismo Especial de Devolução: o banco reverte um PIX em casos de fraude/erro.' },
        { palavra: 'Conta-laranja', def: 'Conta usada (às vezes a sua, sem saber) pra passar dinheiro de crime.' },
        { palavra: 'Origem suja', def: 'Dinheiro roubado de outra vítima, jogado na sua conta de propósito.' },
      ],
      chave: [
        'PIX inesperado: não devolva por conta própria',
        'Devolução correta é pelo banco, via MED',
        'Pressa + história triste = golpe da devolução',
      ],
      porque: 'Esse golpe transforma a vítima em cúmplice involuntário. Saber acionar o MED em vez de devolver por chave protege seu dinheiro e evita que você participe, sem querer, da lavagem de um valor roubado.',
    },
    pratica: {
      instrucao: 'Localize, no seu banco, como você pediria uma devolução de PIX (sem precisar fazer agora).',
      passos: [
        'No app, abra um PIX recebido qualquer no extrato',
        'Procure a opção de "Devolver" dentro do próprio recebimento',
        'Veja que a devolução oficial parte do app, não de uma chave que alguém te passa',
        'Anote o telefone oficial do seu banco (atrás do cartão)',
        'Combine consigo: PIX estranho = falo com o banco, não com o "dono"',
      ],
    },
    desafio: {
      cenario: 'Você sabe exatamente o que fazer se cair um PIX inesperado: não devolver por fora e acionar o MED pelo banco.',
      requisitos: [
        'Sei que dinheiro inesperado pode ter origem em crime',
        'Não devolvo por PIX pra chave que terceiros me passam',
        'Sei que existe o MED no meu banco',
        'Tenho o canal oficial do meu banco anotado',
        'Reconheço a pressão emocional como isca',
      ],
      dica: 'A devolução de verdade nunca exige que VOCÊ faça um PIX novo. Se a "solução" envolve você transferir, é golpe. A reversão sempre acontece de dentro do banco.',
    },
    validacao: [
      'Não devolvo PIX inesperado por conta própria',
      'Conheço o MED como caminho correto',
      'Sei acionar meu banco oficialmente',
      'Reconheço o golpe da devolução',
      'Guardo provas do ocorrido',
    ],
  },

  'sec-pix-4': {
    trilhaId: 'sec-pix', numero: 4, titulo: 'QR Code e "Copia e Cola" adulterados',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Você vai pagar uma conta lendo um QR Code, ou colando aquele código enorme do "PIX Copia e Cola". Parece automático e seguro — mas se o código foi trocado, o dinheiro vai direto pro golpista. A boa notícia: o próprio app te entrega a prova antes de pagar.',
      conceito: {
        titulo: 'O destino está escondido no código — e o app revela',
        texto: 'Um QR Code (ou o texto do Copia e Cola) carrega quem vai receber e, às vezes, o valor. Golpistas trocam o QR de um boleto, de um cartaz de loja, de uma vaquinha, ou enviam um Copia e Cola falso por mensagem. Quando você lê, o destino é a conta deles. A defesa é sempre a mesma da missão 1: depois de ler o QR/colar o código, o app mostra o NOME do recebedor e o valor ANTES de confirmar. Se o nome não é de quem você quer pagar, ou o valor está diferente, cancele.',
      },
      estrutura: {
        titulo: 'Pagando por QR/Copia e Cola com segurança',
        partes: [
          { simbolo: '📷', desc: 'Leu o QR? Olhe o nome do recebedor que aparece — confere?' },
          { simbolo: '💰', desc: 'O valor veio certo? Se veio "editável", digite o valor combinado.' },
          { simbolo: '🏪', desc: 'Em loja física, prefira o QR da maquininha/tela do caixa, não cartaz solto.' },
          { simbolo: '✉️', desc: 'Copia e Cola recebido por mensagem: confirme o recebedor antes de pagar.' },
        ],
      },
      exemplo: {
        titulo: 'O nome desmascara o QR trocado',
        celulas: [
          { ref: 'Esperado', valor: 'Pagar a loja "MERCADINHO DO ZÉ LTDA"' },
          { ref: 'Tela mostra', valor: 'Recebedor: CARLOS A. (pessoa física)' },
          { ref: 'Conclusão', valor: 'QR foi adulterado — cancelar' },
          { ref: 'Regra', valor: 'Nome do recebedor ≠ quem você quer pagar → pare' },
        ],
        formula: 'QR/código → ler o nome na confirmação → bate? paga : cancela',
        resultado: 'Você só paga quando o destino confere.',
        comentario: 'Boletos com QR também entram aqui: confira se o recebedor é a empresa da conta (ex.: a distribuidora de energia), não um nome de pessoa qualquer.',
      },
      vocabulario: [
        { palavra: 'QR Code', def: 'Quadrado de pontinhos que guarda os dados do pagamento.' },
        { palavra: 'Copia e Cola', def: 'O mesmo QR, em forma de texto longo, pra colar no app.' },
        { palavra: 'Adulterar', def: 'Trocar o código pra desviar o pagamento pra outra conta.' },
      ],
      chave: [
        'QR/Copia e Cola escondem o destino — o app revela na confirmação',
        'Nome do recebedor diferente do esperado = cancele',
        'Em loja, use o QR oficial do caixa, não cartaz solto',
      ],
      porque: 'QR Codes estão em tudo: boletos, lojas, vaquinhas, cartazes. Saber que a confirmação revela o verdadeiro recebedor transforma uma tecnologia que o golpista explora numa que você controla.',
    },
    pratica: {
      instrucao: 'Treine a leitura de um QR de PIX até a confirmação (cancele no fim).',
      passos: [
        'No app, escolha pagar via PIX por QR Code',
        'Aponte para um QR de PIX qualquer (de uma conta sua, por exemplo)',
        'Observe o nome do recebedor e o valor que o app preencheu',
        'Imagine: "se esse nome não fosse o esperado, eu cancelaria"',
        'Cancele a operação',
        'Repita com um código Copia e Cola, observando o recebedor',
      ],
    },
    desafio: {
      cenario: 'Você incorpora o hábito de validar o recebedor sempre que paga por QR Code ou Copia e Cola.',
      requisitos: [
        'Sei que QR/código carregam o destino do pagamento',
        'Confiro o nome do recebedor na confirmação',
        'Confiro o valor antes de pagar',
        'Em loja, uso o QR oficial do caixa',
        'Desconfio de Copia e Cola recebido por mensagem',
      ],
      dica: 'Cartaz de QR colado na parede de um comércio é fácil de trocar por cima. Sempre que possível, peça o QR direto na maquininha ou tela do caixa — e confira o nome.',
    },
    validacao: [
      'Entendo QR e Copia e Cola',
      'Confiro recebedor e valor antes de pagar',
      'Reconheço QR adulterado pelo nome errado',
      'Prefiro QR oficial em lojas',
      'Desconfio de códigos enviados por mensagem',
    ],
  },

  'sec-pix-5': {
    trilhaId: 'sec-pix', numero: 5, titulo: 'A falsa central: "faça um PIX de segurança"',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'O telefone toca: "Aqui é da central de segurança do seu banco. Detectamos uma fraude na sua conta. Pra proteger seu dinheiro, faça um PIX pra uma conta-cofre no seu próprio nome." É tudo mentira — e nenhum banco do mundo faz esse pedido.',
      conceito: {
        titulo: 'Banco nenhum pede PIX, senha ou código por telefone',
        texto: 'Esse é o golpe da "conta-cofre" ou "conta-segura". O criminoso liga (ou manda mensagem) se passando pela central do banco, inventa uma fraude e te induz a transferir seu próprio dinheiro pra uma conta que, segundo ele, "é sua e está protegida". Não é. É a conta dele. Variações pedem que você instale um app de "acesso remoto" (pra ele ver sua tela), ou que informe a senha e o código do SMS. A regra é absoluta: o banco NUNCA pede pra você fazer PIX, instalar app por telefone, dizer senha ou código de verificação. Se pedir, é golpe — desligue.',
      },
      estrutura: {
        titulo: 'Sinais de que a "central" é falsa',
        partes: [
          { simbolo: '☎️', desc: 'Ligou do nada dizendo que sua conta foi invadida e cria pânico.' },
          { simbolo: '💸', desc: 'Pede pra você fazer um PIX "de segurança" pra uma conta qualquer.' },
          { simbolo: '🔐', desc: 'Pede senha, código do SMS, ou pra instalar app de acesso remoto.' },
          { simbolo: '⏱️', desc: 'Mete pressa: "se não fizer agora, perde tudo".' },
        ],
      },
      exemplo: {
        titulo: 'O que fazer quando "a central" liga',
        celulas: [
          { ref: 'Eles dizem', valor: '"Transfira pra conta-cofre no seu nome, é seguro"' },
          { ref: 'Verdade', valor: 'Banco nunca pede PIX nem senha por telefone' },
          { ref: 'Você faz', valor: 'Desliga e liga VOCÊ no número atrás do cartão' },
          { ref: 'Você faz', valor: 'Confere a conta pelo app oficial, com calma' },
        ],
        formula: 'Ligação pedindo PIX/senha → desligar → ligar você no número oficial',
        resultado: 'Você fala com o banco de verdade, sem a pressão do golpista.',
        comentario: 'Golpistas falsificam o número que aparece no visor (chama-se spoofing). Por isso, mesmo que apareça o nome do banco, desligue e ligue você. Nunca continue a ligação que chegou até você.',
      },
      vocabulario: [
        { palavra: 'Conta-cofre', def: 'Mentira do golpe: a "conta segura" é a conta do criminoso.' },
        { palavra: 'Spoofing', def: 'Falsificar o número/nome que aparece no seu visor.' },
        { palavra: 'Acesso remoto', def: 'App que deixa outra pessoa ver/controlar sua tela. Nunca instale a pedido de ligação.' },
      ],
      chave: [
        'Banco nunca pede PIX, senha ou código por telefone',
        'Desligue e ligue VOCÊ no número do cartão',
        'Não instale app de acesso remoto a pedido de ninguém',
      ],
      porque: 'O golpe da falsa central rouba quantias altas porque usa autoridade e medo. Gravar a frase "o banco nunca pede isso" e o reflexo de desligar e ligar de volta no número oficial neutraliza o ataque inteiro.',
    },
    pratica: {
      instrucao: 'Prepare-se hoje pra reagir certo a uma ligação dessas.',
      passos: [
        'Pegue seu cartão e localize o telefone oficial do banco no verso',
        'Salve esse número nos contatos como "Banco — oficial"',
        'Ensaie a frase: "Vou desligar e ligar eu mesmo na central"',
        'Lembre: você nunca informa senha nem código de SMS a ninguém',
        'Combine com a família que "conta-cofre" é sempre golpe',
      ],
    },
    desafio: {
      cenario: 'Você está preparado: se uma "central" pedir PIX, senha ou código, você desliga e liga de volta no número oficial.',
      requisitos: [
        'Sei que banco não pede PIX/senha por telefone',
        'Tenho o telefone oficial do banco salvo',
        'Sei desligar e ligar de volta eu mesmo',
        'Nunca instalo app de acesso remoto a pedido',
        'Avisei minha família sobre a conta-cofre',
      ],
      dica: 'Se a ligação cria medo e urgência, isso é o golpe trabalhando. Respire, diga que vai retornar, e desligue. O banco de verdade não tem problema nenhum com você ligar de volta.',
    },
    validacao: [
      'Sei que a conta-cofre é golpe',
      'Não passo senha/código por telefone',
      'Tenho o número oficial salvo',
      'Desligo e ligo de volta eu mesmo',
      'Recuso acesso remoto a pedido',
    ],
  },

  'sec-pix-6': {
    trilhaId: 'sec-pix', numero: 6, titulo: 'MED: sua arma de devolução depois do golpe',
    tempoTotal: 9, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Caiu num golpe e mandou o PIX? Ainda não está tudo perdido. Existe um mecanismo oficial — o MED — que pode recuperar o dinheiro. Quanto mais rápido você aciona, maior a chance. Saber disso muda o jogo.',
      conceito: {
        titulo: 'O Mecanismo Especial de Devolução do PIX',
        texto: 'O MED é uma regra do Banco Central que permite ao seu banco bloquear e tentar devolver um PIX feito em situação de fraude ou erro. Quando você comunica o golpe, o banco abre o MED, congela o valor que ainda estiver na conta do golpista e, se houver saldo, devolve pra você. Por isso a velocidade é tudo: golpistas esvaziam a conta em minutos. O caminho é: assim que perceber o golpe, acione o banco pelo app/telefone oficial, registre a contestação e peça o MED. Junte prints, valores e horários. Faça também um boletim de ocorrência.',
      },
      estrutura: {
        titulo: 'Passo a passo nos primeiros minutos',
        partes: [
          { simbolo: '⚡', desc: 'Aja rápido: cada minuto reduz o saldo que dá pra recuperar.' },
          { simbolo: '📱', desc: 'Acione o banco pelo app/telefone oficial e peça o MED.' },
          { simbolo: '🧾', desc: 'Registre a contestação formal da transação fraudulenta.' },
          { simbolo: '👮', desc: 'Faça um B.O. (online, pela delegacia eletrônica do seu estado).' },
        ],
      },
      exemplo: {
        titulo: 'Linha do tempo que recupera dinheiro',
        celulas: [
          { ref: '0 min', valor: 'Percebeu o golpe — não entre em pânico, aja' },
          { ref: '2 min', valor: 'Abre o app do banco e contesta o PIX' },
          { ref: '5 min', valor: 'Pede o MED e anota o protocolo' },
          { ref: 'Depois', valor: 'Registra B.O. e guarda todas as provas' },
        ],
        formula: 'Rapidez + contestação + MED + B.O. = melhor chance de reaver',
        resultado: 'Parte ou todo o valor pode ser bloqueado e devolvido.',
        comentario: 'O MED não garante 100% — se o golpista já sacou tudo, pode não haver saldo. Mas acionar rápido já recuperou muita gente. Nunca deixe de tentar.',
      },
      vocabulario: [
        { palavra: 'MED', def: 'Mecanismo Especial de Devolução: bloqueia e tenta devolver PIX de fraude/erro.' },
        { palavra: 'Contestação', def: 'Registro formal no banco de que a transação foi fraude.' },
        { palavra: 'Protocolo', def: 'Número que comprova que você abriu a solicitação. Anote sempre.' },
      ],
      chave: [
        'O MED pode recuperar PIX de golpe',
        'Velocidade é tudo — acione em minutos',
        'Contestação no banco + B.O. + provas',
      ],
      porque: 'Muita gente acha que PIX de golpe é dinheiro perdido e nem tenta. Conhecer o MED e agir rápido é a diferença entre recuperar o valor e perder tudo — por isso essa missão pode literalmente devolver seu dinheiro.',
    },
    pratica: {
      instrucao: 'Deixe pronto seu "kit de reação" pra não perder tempo se acontecer.',
      passos: [
        'Anote o telefone oficial do banco e onde fica o "Contestar" no app',
        'Descubra o site da delegacia eletrônica do seu estado (B.O. online)',
        'Saiba que vai precisar de: valor, horário, chave/recebedor e prints',
        'Salve o termo "MED" pra usar com o atendente do banco',
        'Combine: ao perceber golpe, primeiro o banco, depois o B.O.',
      ],
    },
    desafio: {
      cenario: 'Você monta seu plano de reação: sabe onde contestar no banco, o que é o MED e como fazer um B.O. online.',
      requisitos: [
        'Sei o que é o MED e pra que serve',
        'Sei onde contestar uma transação no meu app',
        'Conheço a delegacia eletrônica do meu estado',
        'Sei que preciso agir em minutos',
        'Sei quais provas guardar',
      ],
      dica: 'Tire prints de tudo ANTES de qualquer coisa: a conversa, o comprovante, a tela do PIX enviado. Essas provas sustentam tanto o MED quanto o B.O. e a contestação.',
    },
    validacao: [
      'Conheço o MED',
      'Sei contestar no banco',
      'Sei fazer B.O. online',
      'Entendo a importância da rapidez',
      'Sei quais provas reunir',
    ],
  },

  'sec-pix-7': {
    trilhaId: 'sec-pix', numero: 7, titulo: 'Limites, PIX noturno e configurações de defesa',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Você não precisa esperar o golpe pra se defender. Dentro do app do banco existem ajustes que limitam o estrago caso alguém acesse sua conta: limites de valor, limite noturno e bloqueios. Cinco minutos configurando hoje podem salvar você amanhã.',
      conceito: {
        titulo: 'Configure o app pra que o golpe renda pouco',
        texto: 'O Banco Central obriga os bancos a oferecerem controles de PIX. Você pode definir um limite máximo por transação e por dia, reduzir o limite no período da noite (quando ocorrem muitos golpes pós-sequestro), e até guardar um limite maior só pra horários combinados. Assim, mesmo que um criminoso te coaja ou acesse seu celular, ele não consegue transferir uma fortuna de uma vez. Aumentar limite, quando você precisa, costuma levar algumas horas — de propósito, pra dar tempo de barrar fraude.',
      },
      estrutura: {
        titulo: 'Ajustes que valem a pena ativar',
        partes: [
          { simbolo: '📉', desc: 'Limite por transação e diário: deixe coerente com seu uso real.' },
          { simbolo: '🌙', desc: 'Limite noturno reduzido (ex.: 20h–6h): corta golpes da madrugada.' },
          { simbolo: '⏳', desc: 'Aumento de limite com prazo: pedir hoje, valer depois — atrapalha o golpista.' },
          { simbolo: '🔔', desc: 'Alertas de transação: notificação a cada PIX feito/recebido.' },
        ],
      },
      exemplo: {
        titulo: 'Antes e depois de configurar',
        celulas: [
          { ref: 'Sem ajuste', valor: 'Golpista transfere R$ 8.000 de uma vez, de madrugada' },
          { ref: 'Com limite diário', valor: 'Teto de R$ 1.000/dia — estrago muito menor' },
          { ref: 'Com limite noturno', valor: 'À noite, teto cai mais ainda' },
          { ref: 'Com alerta', valor: 'Você é avisado na hora e reage' },
        ],
        formula: 'Limites + horário + alertas = teto baixo pro estrago',
        resultado: 'Mesmo no pior caso, o prejuízo possível é pequeno.',
        comentario: 'Ajuste os limites ao SEU uso: se você raramente passa de R$ 500 num PIX, não deixe o teto em R$ 5.000. Você sempre pode pedir aumento pontual quando for fazer uma compra grande.',
      },
      vocabulario: [
        { palavra: 'Limite diário', def: 'Valor máximo que pode sair em PIX num dia.' },
        { palavra: 'Limite noturno', def: 'Teto menor à noite, quando há mais golpes.' },
        { palavra: 'Alerta de transação', def: 'Notificação a cada movimento, pra você perceber na hora.' },
      ],
      chave: [
        'Defina limites coerentes com seu uso',
        'Ative limite noturno reduzido',
        'Ligue alertas de cada transação',
      ],
      porque: 'Limites e alertas são defesa preventiva: não dependem de você acertar no momento do golpe. Eles diminuem o teto do prejuízo e te avisam cedo — protegendo mesmo nos cenários de coação ou celular roubado.',
    },
    pratica: {
      instrucao: 'Abra o app do banco e ajuste seus limites de PIX agora.',
      passos: [
        'Vá em PIX → Limites (ou Configurações de PIX)',
        'Veja seu limite diário atual e compare com quanto você usa de verdade',
        'Reduza o limite diário pra um valor coerente com seu dia a dia',
        'Ative/ajuste o limite no período noturno, se disponível',
        'Ative as notificações/alertas de transação',
        'Anote que aumentos pontuais podem levar algumas horas',
      ],
    },
    desafio: {
      cenario: 'Você revisa e reduz seus limites de PIX para algo coerente com seu uso e liga os alertas.',
      requisitos: [
        'Encontrei a tela de limites de PIX',
        'Reduzi o limite diário pra um valor realista',
        'Ajustei o limite noturno (se houver)',
        'Ativei alertas de transação',
        'Entendo por que limites baixos protegem',
      ],
      dica: 'Pense: "qual o maior PIX que eu faço num dia normal?" Use um pouco acima disso como limite. Para a compra grande e rara, você pede aumento na hora — com a segurança de que leva um tempo pra valer.',
    },
    validacao: [
      'Ajustei meu limite diário',
      'Configurei o limite noturno',
      'Ativei alertas',
      'Entendo o aumento com prazo',
      'Meus limites batem com meu uso real',
    ],
  },

  'sec-pix-8': {
    trilhaId: 'sec-pix', numero: 8, titulo: 'Simulado: 5 PIX chegando — pagar ou barrar?',
    tempoTotal: 11, xp: 80, vertente: 'ambos',
    aula: {
      gancho: 'Hora de juntar tudo. Vou te apresentar 5 situações reais de PIX. Em cada uma, decida: é seguro seguir ou é golpe? Treinar a decisão com calma agora cria o reflexo certo pra quando acontecer de verdade.',
      conceito: {
        titulo: 'O checklist mental de 4 perguntas',
        texto: 'Antes de qualquer PIX, passe por 4 perguntas: (1) Quem está com pressa — eu ou a outra pessoa? (2) O nome do recebedor na confirmação é quem eu quero pagar? (3) Alguém está me pedindo pra fazer/devolver PIX, dar senha ou instalar app? (4) Estou usando o saldo no MEU app como prova, e não um print? Se a pressa vem do outro, se o nome não bate, se pedem senha/PIX por telefone, ou se a "prova" é só uma imagem — pare. Esse checklist resolve a maioria dos golpes.',
      },
      estrutura: {
        titulo: 'Os 5 casos do simulado',
        partes: [
          { simbolo: '1️⃣', desc: 'Comprador manda print e quer levar o produto já. → Confiro no meu app; sem saldo, não entrego.' },
          { simbolo: '2️⃣', desc: '"Central do banco" pede PIX pra conta-cofre. → Golpe; desligo e ligo no número oficial.' },
          { simbolo: '3️⃣', desc: 'Caiu PIX e pedem devolução por chave. → Não devolvo; aciono o MED.' },
          { simbolo: '4️⃣', desc: 'QR da loja mostra nome de pessoa física. → Cancelo; QR adulterado.' },
          { simbolo: '5️⃣', desc: 'Pago a um vendedor e o nome bate, valor certo. → Sigo com tranquilidade.' },
        ],
      },
      exemplo: {
        titulo: 'Gabarito comentado',
        celulas: [
          { ref: 'Caso 1', valor: 'BARRAR até o dinheiro entrar no seu app' },
          { ref: 'Caso 2', valor: 'BARRAR — banco não pede PIX/senha por telefone' },
          { ref: 'Caso 3', valor: 'BARRAR a devolução por fora; usar o MED' },
          { ref: 'Caso 4', valor: 'BARRAR — recebedor errado é QR trocado' },
        ],
        formula: '4 perguntas → qualquer "sim suspeito" = barrar',
        resultado: 'Você reconhece o golpe pelo padrão, não pela história.',
        comentario: 'Repare: o caso 5 é o único seguro, e é justamente o que NÃO tem pressa alheia, nome bate, ninguém pede senha e você confere de verdade. O padrão do golpe é sempre o mesmo.',
      },
      vocabulario: [
        { palavra: 'Checklist', def: 'Lista rápida de perguntas que você passa antes de agir.' },
        { palavra: 'Reflexo', def: 'Resposta automática treinada — pensar certo sob pressão.' },
        { palavra: 'Padrão do golpe', def: 'Pressa + autoridade/medo + pedido de PIX/senha + prova falsa.' },
      ],
      chave: [
        'Quatro perguntas antes de cada PIX',
        'Pressa do outro + nome errado + pedir senha = golpe',
        'Só o saldo no seu app é prova',
      ],
      porque: 'Decisões sob pressão saem melhor quando já foram ensaiadas. Rodar o simulado transforma o conhecimento das missões anteriores num reflexo prático — você passa a "sentir" o golpe antes de cair.',
    },
    pratica: {
      instrucao: 'Releia os 5 casos e responda mentalmente "pagar ou barrar" antes de ver o gabarito.',
      passos: [
        'Para cada caso, aplique as 4 perguntas do checklist',
        'Decida pagar ou barrar antes de olhar o gabarito',
        'Compare sua resposta com o gabarito comentado',
        'Para os que errou, identifique qual pergunta teria te salvado',
        'Conte um dos casos pra alguém da família e peça a resposta dela',
      ],
    },
    desafio: {
      cenario: 'Você acerta os 5 casos aplicando o checklist e consegue explicar o padrão do golpe para outra pessoa.',
      requisitos: [
        'Apliquei as 4 perguntas em cada caso',
        'Acertei a maioria dos casos',
        'Sei explicar por que cada um é golpe ou não',
        'Reconheço o padrão (pressa + autoridade + pedido + prova falsa)',
        'Ensinei um caso pra alguém',
      ],
      dica: 'Não decore os 5 casos — decore as 4 perguntas. Golpes mudam de roupa o tempo todo, mas o esqueleto é sempre o mesmo. O checklist funciona até pra golpes que ainda nem inventaram.',
    },
    validacao: [
      'Domino o checklist de 4 perguntas',
      'Reconheço o padrão dos golpes de PIX',
      'Decido com calma sob pressão',
      'Sei explicar pra outra pessoa',
      'Uso o saldo real como única prova',
    ],
  },

  'sec-pix-9': {
    trilhaId: 'sec-pix', numero: 9, titulo: 'Projeto: blinde seu PIX de ponta a ponta',
    tempoTotal: 18, xp: 120, vertente: 'ambos',
    aula: {
      gancho: 'Você já entende cada golpe e cada defesa. Agora vamos transformar isso em ação: um pente-fino completo no seu PIX, deixando tudo configurado e a sua mente treinada. Ao fim, seu PIX fica blindado — e você vira referência de segurança pra sua família.',
      conceito: {
        titulo: 'Defesa em camadas: app + hábito + plano de reação',
        texto: 'Segurança boa não depende de uma única trava, e sim de várias camadas. No app: chave aleatória (não exponha seu CPF/telefone), limites coerentes, limite noturno e alertas. No hábito: conferir o recebedor sempre, nunca confiar em print, e ter o reflexo do "desligo e ligo no número oficial". No plano de reação: saber contestar, acionar o MED e fazer B.O. Junte as três camadas e o golpista perde em todas as frentes — antes, durante e depois de qualquer tentativa.',
      },
      estrutura: {
        titulo: 'As 3 camadas do seu projeto',
        partes: [
          { simbolo: '⚙️', desc: 'Camada app: chave aleatória, limites, limite noturno, alertas.' },
          { simbolo: '🧠', desc: 'Camada hábito: conferir recebedor, ignorar print, desligar e ligar de volta.' },
          { simbolo: '🚑', desc: 'Camada reação: contestação, MED e B.O. já mapeados.' },
          { simbolo: '👨‍👩‍👧', desc: 'Camada família: ensinar o checklist a quem você ama.' },
        ],
      },
      exemplo: {
        titulo: 'Sua checklist de blindagem',
        celulas: [
          { ref: 'App', valor: 'Chave aleatória ✓ · Limite diário ✓ · Noturno ✓ · Alertas ✓' },
          { ref: 'Hábito', valor: 'Confiro recebedor ✓ · Ignoro print ✓ · Ligo no oficial ✓' },
          { ref: 'Reação', valor: 'Sei contestar ✓ · Conheço o MED ✓ · B.O. mapeado ✓' },
          { ref: 'Família', valor: 'Ensinei o checklist de 4 perguntas ✓' },
        ],
        formula: 'App configurado + hábito treinado + reação pronta + família avisada',
        resultado: 'PIX blindado em todas as etapas do ataque.',
        comentario: 'O passo da família é o que mais multiplica proteção: golpistas miram muito idosos e pessoas que usam o app sozinhas. Ensinar o checklist protege mais gente com o seu aprendizado.',
      },
      vocabulario: [
        { palavra: 'Defesa em camadas', def: 'Várias proteções juntas; se uma falha, as outras seguram.' },
        { palavra: 'Chave aleatória', def: 'Código gerado pelo banco; não revela seu CPF/telefone.' },
        { palavra: 'Pente-fino', def: 'Revisão completa, item por item, de tudo que protege você.' },
      ],
      chave: [
        'Configure o app, treine o hábito e prepare a reação',
        'Use chave aleatória pra não expor seus dados',
        'Ensine o checklist pra sua família',
      ],
      porque: 'Este projeto consolida toda a trilha numa rotina de segurança real e duradoura. Ao blindar seu PIX em camadas e levar o conhecimento pra sua família, você sai da posição de alvo fácil pra de pessoa preparada — exatamente o objetivo do módulo.',
    },
    pratica: {
      instrucao: 'Execute o pente-fino completo no seu PIX, camada por camada.',
      passos: [
        'App: cadastre/confirme uma chave aleatória como sua principal',
        'App: revise limite diário, limite noturno e ative alertas',
        'Hábito: relembre o checklist de 4 perguntas e cole num lugar visível',
        'Reação: anote o telefone oficial do banco, onde contestar e o B.O. online',
        'Família: ensine o checklist pra pelo menos uma pessoa próxima',
        'Faça uma última conferência: cada item da checklist de blindagem está ✓?',
      ],
    },
    desafio: {
      cenario: 'Você conclui o pente-fino: app configurado, hábito treinado, plano de reação pronto e uma pessoa da família orientada.',
      requisitos: [
        'Minha chave principal é aleatória',
        'Limites e alertas estão ajustados',
        'Tenho o checklist de 4 perguntas memorizado',
        'Mapeei contestação, MED e B.O.',
        'Ensinei o checklist pra alguém da família',
      ],
      dica: 'Marque uma data daqui a 3 meses pra refazer o pente-fino. Bancos mudam telas, limites se desajustam e golpes se renovam. Segurança é manutenção, não evento único.',
    },
    validacao: [
      'Configurei o app em todas as camadas',
      'Tenho o hábito de conferência treinado',
      'Meu plano de reação está pronto',
      'Usei chave aleatória',
      'Multipliquei a proteção na família',
    ],
  },
};
