// ============================================================================
// CONTEÚDO — QR Code, Scanner e Câmera Útil (mob-qr). O que é QR Code e como
// ler, ler com segurança (golpes do QR/quishing), QR Code do PIX, scanner de
// documentos pela câmera, lupa/zoom e a câmera como ferramenta do dia a dia,
// tradução e busca pela câmera, e um projeto usando a câmera para resolver
// tarefas reais. Foco em transformar a câmera de "tirar foto" em ferramenta.
// ============================================================================

export const MOB_QR = {
  'mob-qr-1': {
    trilhaId: 'mob-qr', numero: 1, titulo: 'O que é um QR Code',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Aqueles quadradinhos pretos e brancos estão por toda parte: no cardápio do restaurante, na conta de luz, na embalagem, no cartaz da rua, na maquininha de pagamento. Eles parecem um enigma — mas são só um atalho que o celular lê num piscar de olhos.',
      conceito: {
        titulo: 'O QR Code é um atalho que a câmera do celular lê',
        texto: 'O QR CODE (lê-se "quer códi") é aquele quadrado cheio de pontinhos. Ele funciona como um CÓDIGO DE BARRAS mais moderno: guarda uma informação — geralmente um LINK (endereço de site), mas também pode ser um texto, um contato ou os dados de um pagamento. Você não precisa decifrar nada: basta APONTAR A CÂMERA do celular pra ele. O celular LÊ o código na hora e mostra o que fazer (abrir um site, ver um cardápio, fazer um pagamento). É um atalho que evita digitar endereços longos. Está em todo lugar porque é rápido e prático. Nos celulares mais novos, a própria câmera já lê; em outros, há um app leitor. Nesta trilha você vai aprender a ler com facilidade — e com segurança.',
      },
      estrutura: {
        titulo: 'Entendendo o quadradinho',
        partes: [
          { simbolo: '⬛', desc: 'QR Code: um quadrado de pontinhos pretos e brancos.' },
          { simbolo: '🔗', desc: 'Guarda uma informação, quase sempre um link.' },
          { simbolo: '📷', desc: 'Você aponta a câmera e o celular lê na hora.' },
          { simbolo: '⚡', desc: 'É um atalho: evita digitar endereços longos.' },
        ],
      },
      exemplo: {
        titulo: 'QR Code no dia a dia',
        celulas: [
          { ref: 'Cardápio do restaurante', valor: 'Aponto a câmera e abre o menu' },
          { ref: 'Conta de luz', valor: 'QR Code leva ao pagamento' },
          { ref: 'Cartaz de um evento', valor: 'Aponto e vejo o site com detalhes' },
          { ref: 'Maquininha de pagamento', valor: 'QR Code do PIX pra pagar' },
        ],
        formula: 'Apontar a câmera no quadradinho = abrir o atalho na hora',
        resultado: 'Você entende o que é um QR Code e que basta a câmera pra lê-lo.',
        comentario: 'O QR Code intimida só pela aparência — mas é um dos recursos mais simples do celular: você nem precisa entender o que tem dentro, só apontar a câmera. Ele virou comum porque poupa trabalho: em vez de digitar um endereço enorme ou copiar um código de pagamento, um toque resolve. Saber usá-lo abre portas no comércio, nos serviços e nos pagamentos.',
      },
      vocabulario: [
        { palavra: 'QR Code', def: 'Um quadrado de pontinhos que guarda uma informação, lido pela câmera.' },
        { palavra: 'Link', def: 'Um endereço de site; o conteúdo mais comum dentro de um QR Code.' },
        { palavra: 'Ler (escanear)', def: 'Apontar a câmera pro QR Code pra o celular abrir o que ele guarda.' },
      ],
      chave: [
        'O QR Code é um quadrado que guarda uma informação, quase sempre um link',
        'Você lê apenas apontando a câmera do celular pra ele',
        'É um atalho prático, comum no comércio, serviços e pagamentos',
      ],
      porque: 'O QR Code virou parte do dia a dia — em cardápios, contas e pagamentos. Entender que é só um atalho lido pela câmera tira o medo do "quadradinho misterioso" e abre acesso a serviços e comodidades que dependem dele, com simplicidade.',
    },
    pratica: {
      instrucao: 'Vamos conhecer um QR Code de perto.',
      passos: [
        'Procure um QR Code à sua volta (embalagem, conta, folheto, cardápio)',
        'Observe o formato: um quadrado cheio de pontinhos pretos e brancos',
        'Entenda que ele guarda uma informação, em geral um link de site',
        'Pense em onde você já viu QR Codes (restaurantes, lojas, contas)',
        'Perceba que pra usá-lo basta apontar a câmera — sem decifrar nada',
      ],
    },
    desafio: {
      cenario: 'Conheça o quadradinho: encontre um QR Code à sua volta, observe seu formato, entenda que ele guarda uma informação (quase sempre um link) e que pra usá-lo basta apontar a câmera — desmistificando o que parecia um enigma.',
      requisitos: [
        'Encontrei um QR Code à minha volta',
        'Observei seu formato de pontinhos',
        'Entendi que ele guarda um link/informação',
        'Lembrei onde já vi QR Codes',
        'Sei que basta a câmera pra lê-lo',
      ],
      dica: 'QR Codes estão em toda parte hoje, e a maioria é legítima e útil. Mas, como todo atalho, exige um cuidado: na próxima missão você aprende a ler, e na seguinte, a ler com SEGURANÇA — porque alguns golpistas usam QR Codes falsos. Saber usar bem inclui saber se proteger.',
    },
    validacao: [
      'Reconheço um QR Code pelo formato',
      'Entendo que ele guarda um link/informação',
      'Sei que a câmera o lê na hora',
      'Identifico QR Codes no dia a dia',
      'Não me intimido com o quadradinho',
    ],
  },

  'mob-qr-2': {
    trilhaId: 'mob-qr', numero: 2, titulo: 'Lendo um QR Code com a câmera',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'O segredo está mais perto do que você imagina: na maioria dos celulares, é só abrir a câmera comum, mirar no quadradinho e esperar um segundo. Um aviso aparece na tela — você toca nele e pronto. Vamos fazer isso juntos, passo a passo.',
      conceito: {
        titulo: 'Abrir a câmera, mirar e tocar no aviso',
        texto: 'Ler um QR Code é simples. Na maioria dos celulares modernos, a PRÓPRIA CÂMERA já lê: você ABRE o app da câmera (o mesmo de tirar fotos), APONTA pro QR Code de modo que ele apareça na tela, e espera um instante. O celular reconhece e mostra um AVISO ou link na tela — você TOCA nesse aviso e ele abre o conteúdo (um site, cardápio, etc.). Se a sua câmera não fizer isso, há um LEITOR DE QR CODE pra baixar na loja (gratuito), ou a opção pode estar no Google Lens. Dicas pra ler bem: tenha LUZ suficiente, mantenha o celular FIRME e a uma distância em que o quadrado caiba na tela, e limpe a lente se estiver embaçada. Em segundos, o atalho abre.',
      },
      estrutura: {
        titulo: 'Lendo passo a passo',
        partes: [
          { simbolo: '📷', desc: 'Abra o app da câmera (o de tirar fotos).' },
          { simbolo: '🎯', desc: 'Aponte pro QR Code, que ele caiba na tela.' },
          { simbolo: '👆', desc: 'Toque no aviso/link que aparece.' },
          { simbolo: '💡', desc: 'Tenha luz, firmeza e a lente limpa.' },
        ],
      },
      exemplo: {
        titulo: 'Da câmera ao conteúdo',
        celulas: [
          { ref: 'Quero ver o cardápio', valor: 'Abro a câmera e miro no QR' },
          { ref: 'Apareceu um aviso na tela', valor: 'Toco nele pra abrir' },
          { ref: 'Câmera não lê QR', valor: 'Baixo um app leitor gratuito' },
          { ref: 'Está escuro/embaçado', valor: 'Melhoro a luz e limpo a lente' },
        ],
        formula: 'Abrir câmera + mirar + tocar no aviso = conteúdo aberto em segundos',
        resultado: 'Você lê qualquer QR Code com facilidade pela câmera.',
        comentario: 'O passo que as pessoas não percebem é que muitas vezes NÃO precisa de app nenhum — a câmera comum já lê. Aponte e espere um segundo o aviso aparecer; ele costuma surgir na parte de cima ou de baixo da tela. Se nada acontece após uns segundos, seu celular pode precisar de um app leitor — coisa rápida de resolver na loja.',
      },
      vocabulario: [
        { palavra: 'App da câmera', def: 'O aplicativo de tirar fotos, que na maioria dos celulares já lê QR Codes.' },
        { palavra: 'Aviso/notificação', def: 'A mensagem que surge na tela ao reconhecer o QR Code; toque nela.' },
        { palavra: 'Leitor de QR Code', def: 'Um app gratuito que lê QR Codes, caso sua câmera não leia sozinha.' },
      ],
      chave: [
        'Na maioria dos celulares, a câmera comum já lê QR Codes',
        'Aponte, espere o aviso e toque nele pra abrir o conteúdo',
        'Com luz, firmeza e lente limpa, a leitura é rápida',
      ],
      porque: 'Saber ler um QR Code pela câmera desbloqueia comodidades em todo lugar: cardápios, contas, sites e pagamentos a um toque. É uma habilidade simples que poupa digitação e conecta você a serviços do mundo real com agilidade.',
    },
    pratica: {
      instrucao: 'Vamos ler um QR Code de verdade.',
      passos: [
        'Encontre um QR Code (numa embalagem, conta, folheto ou cardápio)',
        'Abra o app da câmera do celular, como pra tirar uma foto',
        'Aponte pro QR Code, deixando o quadrado bem visível na tela',
        'Espere um instante até aparecer um aviso ou link na tela',
        'Toque no aviso pra abrir o conteúdo (se nada surgir, baixe um app leitor)',
      ],
    },
    desafio: {
      cenario: 'Leia na prática: encontre um QR Code, abra a câmera do celular, mire no quadradinho até aparecer o aviso e toque nele pra abrir o conteúdo — dominando a leitura de QR Codes com facilidade.',
      requisitos: [
        'Encontrei um QR Code pra ler',
        'Abri o app da câmera',
        'Mirei até o quadrado caber na tela',
        'Esperei o aviso aparecer',
        'Toquei no aviso e abri o conteúdo',
      ],
      dica: 'Se a câmera não reconhece o QR mesmo bem mirado, confira: há luz suficiente? A lente está limpa? O quadrado está inteiro e nítido na tela? Alguns celulares têm a leitura num modo específico ou no Google Lens — vale procurar. Mas, na maioria, abrir a câmera e apontar já resolve.',
    },
    validacao: [
      'Abro a câmera pra ler QR Codes',
      'Miro até o quadrado caber na tela',
      'Espero e toco no aviso que aparece',
      'Abro o conteúdo do QR Code',
      'Sei recorrer a um app leitor se preciso',
    ],
  },

  'mob-qr-3': {
    trilhaId: 'mob-qr', numero: 3, titulo: 'Ler QR Code com segurança',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'O QR Code é prático — e por isso virou também uma ferramenta de golpistas. Eles colam adesivos falsos por cima dos verdadeiros, ou mandam QR Codes em mensagens, pra te levar a sites falsos ou pagamentos errados. A boa notícia: alguns cuidados simples te protegem.',
      conceito: {
        titulo: 'Antes de agir, confira pra onde o QR Code leva',
        texto: 'Como o QR Code esconde o destino (você não vê o link só olhando o quadrado), golpistas o usam pra enganar — uma fraude chamada às vezes de "QUISHING". Os golpes comuns: colar um ADESIVO falso por cima de um QR verdadeiro (em parquímetros, cartazes, contas), ou ENVIAR um QR por mensagem/e-mail levando a um site falso que pede senha ou dados. Como se proteger: 1) Depois de ler, OLHE o endereço (link) que aparece ANTES de tocar — se for estranho ou diferente do esperado, não abra; 2) DESCONFIE de QR Codes recebidos por mensagem de estranhos ou em e-mails suspeitos; 3) Nunca DIGITE senhas ou dados de banco num site aberto por QR Code sem ter certeza; 4) Em locais públicos, verifique se o QR não é um adesivo COLADO por cima. Ler é seguro; o cuidado é antes de AGIR no que ele abre.',
      },
      estrutura: {
        titulo: 'Lendo com cuidado',
        partes: [
          { simbolo: '👀', desc: 'Olhe o link que aparece antes de tocar.' },
          { simbolo: '✉️', desc: 'Desconfie de QR Codes vindos por mensagem.' },
          { simbolo: '🔑', desc: 'Não digite senhas/dados em sites abertos por QR.' },
          { simbolo: '🩹', desc: 'Cheque se o QR não é adesivo colado por cima.' },
        ],
      },
      exemplo: {
        titulo: 'Parar e conferir',
        celulas: [
          { ref: 'Link estranho apareceu', valor: 'Não toco; fecho a câmera' },
          { ref: 'QR num e-mail suspeito', valor: 'Não leio; pode ser golpe' },
          { ref: 'Site pede senha do banco', valor: 'Desconfio e não digito' },
          { ref: 'Adesivo de QR meio torto', valor: 'Suspeito de QR colado por cima' },
        ],
        formula: 'Ler (seguro) + conferir o destino antes de agir = QR Code sem cair em golpe',
        resultado: 'Você aproveita os QR Codes evitando as fraudes que se escondem neles.',
        comentario: 'O ponto central: LER um QR Code não faz mal — o risco está no que você FAZ depois, no site que ele abre. Por isso o hábito de ouro é olhar o link antes de tocar e nunca informar senhas ou dados bancários sem certeza. Isso se conecta direto com o módulo de Segurança: a mesma esperteza dos golpes de link e PIX vale aqui.',
      },
      vocabulario: [
        { palavra: 'Quishing', def: 'Golpe que usa QR Codes falsos pra levar a sites fraudulentos.' },
        { palavra: 'Destino (link)', def: 'Pra onde o QR Code leva; confira antes de tocar.' },
        { palavra: 'Adesivo falso', def: 'QR Code de golpista colado por cima de um verdadeiro.' },
      ],
      chave: [
        'Golpistas usam QR Codes falsos pra levar a sites fraudulentos',
        'Olhe o link antes de tocar e desconfie de QR vindos por mensagem',
        'Nunca digite senhas ou dados de banco sem ter certeza do site',
      ],
      porque: 'O QR Code esconde seu destino, e golpistas exploram isso. Saber conferir o link antes de agir, desconfiar de QR suspeitos e nunca informar dados sem certeza protege seu dinheiro e suas senhas — aproveitando a praticidade sem cair nas fraudes.',
    },
    pratica: {
      instrucao: 'Vamos praticar a leitura segura.',
      passos: [
        'Ao ler um QR Code, repare no endereço (link) que aparece antes de tocar',
        'Pergunte-se: esse endereço faz sentido pro lugar onde estou?',
        'Combine: nunca digitar senha de banco em site aberto por QR sem certeza',
        'Em locais públicos, observe se o QR não é um adesivo colado por cima',
        'Desconfie de QR Codes recebidos por mensagem de pessoas estranhas',
      ],
    },
    desafio: {
      cenario: 'Leia com proteção: pratique olhar o link antes de tocar, desconfiar de QR Codes vindos por mensagem, nunca digitar senhas em sites abertos por QR sem certeza, e checar adesivos falsos em locais públicos — aproveitando o recurso sem cair em golpes.',
      requisitos: [
        'Olho o link antes de tocar no aviso',
        'Avalio se o destino faz sentido',
        'Não digito senhas em sites de QR sem certeza',
        'Desconfio de QR vindos por mensagem',
        'Checo se o QR não é adesivo colado por cima',
      ],
      dica: 'Vale a regra do módulo de Segurança: pressa é amiga do golpe. Se um QR Code leva a algo que pede dados com urgência ("pague agora", "confirme sua senha"), pare. Golpe legítimo não existe — empresa séria não te força a agir correndo por um quadradinho. Na dúvida, não toque e procure o canal oficial.',
    },
    validacao: [
      'Confiro o link antes de tocar',
      'Avalio se o destino faz sentido',
      'Não informo dados sem certeza do site',
      'Desconfio de QR vindos por mensagem',
      'Identifico possíveis adesivos falsos',
    ],
  },

  'mob-qr-4': {
    trilhaId: 'mob-qr', numero: 4, titulo: 'QR Code do PIX: pagar pelo quadradinho',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Na padaria, na feira, na maquininha, na cobrança — o QR Code do PIX virou a forma mais rápida de pagar: aponta a câmera, confere o valor e o nome, confirma. Sem digitar conta, sem dinheiro trocado. Mas justamente porque mexe com dinheiro, exige conferência.',
      conceito: {
        titulo: 'O QR Code do PIX agiliza pagamentos — confira sempre antes',
        texto: 'O PIX (pagamento instantâneo) pode ser feito lendo um QR CODE: em vez de digitar a chave PIX, você aponta a câmera (DENTRO do app do seu banco, na opção "Pagar com PIX" / "Ler QR Code") e ele já preenche os dados do pagamento. A grande vantagem é a velocidade e evitar erros de digitação. O cuidado essencial, antes de confirmar, é CONFERIR DUAS COISAS na tela: o NOME de quem vai receber (é mesmo a pessoa/loja certa?) e o VALOR (está correto?). Há dois tipos de QR PIX: o ESTÁTICO (um quadradinho fixo, que pode ou não trazer valor) e o DINÂMICO (gerado na hora pela maquininha, já com o valor certo). Sempre confira nome e valor — porque depois de confirmar, o PIX é imediato e não volta. Esta é a ponte com o módulo de Segurança: o QR do PIX é seguro quando você confere antes de confirmar.',
      },
      estrutura: {
        titulo: 'Pagando com QR PIX',
        partes: [
          { simbolo: '🏦', desc: 'Use a opção "Ler QR Code" dentro do app do banco.' },
          { simbolo: '📷', desc: 'Aponte pro QR; os dados se preenchem sozinhos.' },
          { simbolo: '✅', desc: 'Confira NOME de quem recebe e o VALOR.' },
          { simbolo: '⚠️', desc: 'Depois de confirmar, o PIX é imediato e não volta.' },
        ],
      },
      exemplo: {
        titulo: 'Confirmar só depois de conferir',
        celulas: [
          { ref: 'Pagar na padaria', valor: 'Leio o QR no app do banco' },
          { ref: 'Tela mostra os dados', valor: 'Confiro nome e valor' },
          { ref: 'Nome diferente do esperado', valor: 'Não confirmo; algo está errado' },
          { ref: 'Tudo certo', valor: 'Confirmo e o pagamento é na hora' },
        ],
        formula: 'Ler no app do banco + conferir nome e valor = pagar com PIX sem susto',
        resultado: 'Você paga com QR PIX de forma rápida e confere antes de confirmar.',
        comentario: 'A diferença que protege você: leia o QR do PIX SEMPRE de dentro do app do seu banco (não por um link qualquer), e confira NOME e VALOR na tela antes de confirmar. Se o nome de quem vai receber não bate com a loja/pessoa esperada, pare — pode ser um QR trocado. Como o PIX cai na hora e não volta, esse segundo de conferência é o seu seguro.',
      },
      vocabulario: [
        { palavra: 'QR PIX', def: 'Um QR Code que preenche os dados de um pagamento via PIX.' },
        { palavra: 'QR estático x dinâmico', def: 'Estático é fixo; dinâmico é gerado na hora já com o valor.' },
        { palavra: 'Conferir nome e valor', def: 'O passo de segurança antes de confirmar qualquer PIX.' },
      ],
      chave: [
        'Dá pra pagar com PIX lendo um QR Code no app do banco',
        'Antes de confirmar, confira sempre o nome de quem recebe e o valor',
        'O PIX é imediato e não volta: a conferência é seu seguro',
      ],
      porque: 'O QR Code do PIX traz rapidez e evita erros de digitação nos pagamentos. Saber usá-lo conferindo nome e valor antes de confirmar une comodidade e segurança — você paga em segundos sem o risco de enviar dinheiro pra quem não devia.',
    },
    pratica: {
      instrucao: 'Vamos entender o pagamento por QR PIX (sem precisar pagar agora).',
      passos: [
        'Abra o app do seu banco e procure a área de PIX',
        'Localize a opção "Pagar com PIX" e dentro dela "Ler QR Code"',
        'Entenda que, ao ler um QR PIX, os dados do pagamento se preenchem',
        'Saiba que, antes de confirmar, você deve conferir o nome e o valor na tela',
        'Lembre: leia o QR PIX sempre dentro do app do banco, e confira antes de confirmar',
      ],
    },
    desafio: {
      cenario: 'Domine o QR PIX: no app do seu banco, localize a opção de ler QR Code pra pagar, entenda que os dados se preenchem sozinhos e que é essencial conferir nome e valor antes de confirmar — pagando com rapidez e segurança.',
      requisitos: [
        'Localizei a opção de ler QR Code no app do banco',
        'Entendi que os dados do PIX se preenchem ao ler',
        'Sei conferir nome e valor antes de confirmar',
        'Entendo que o PIX é imediato e não volta',
        'Sei que devo ler o QR PIX só pelo app do banco',
      ],
      dica: 'Cuidado com QR Codes de PIX recebidos por mensagem pedindo pagamento — o módulo de Segurança mostra como golpistas mandam cobranças falsas. Pague QR PIX de fontes confiáveis (a maquininha da loja, uma cobrança que você esperava) e sempre confira o nome de quem recebe: ele revela se o dinheiro vai mesmo pra quem deveria.',
    },
    validacao: [
      'Leio QR PIX dentro do app do banco',
      'Sei que os dados se preenchem sozinhos',
      'Confiro nome e valor antes de confirmar',
      'Entendo que o PIX não volta',
      'Desconfio de QR PIX vindos por mensagem',
    ],
  },

  'mob-qr-5': {
    trilhaId: 'mob-qr', numero: 5, titulo: 'A câmera como lupa e ferramenta',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'A letra miúda da bula, o número de série atrás do aparelho, a data de validade quase apagada. Em vez de forçar a vista, deixe a câmera enxergar por você: ela amplia, ilumina e congela a imagem pra você ler com calma. Um par de óculos extra no bolso.',
      conceito: {
        titulo: 'A câmera amplia, ilumina e congela o que é difícil de ver',
        texto: 'A câmera do celular é uma LUPA poderosa. Pra ler algo pequeno (uma bula, um rótulo, a letra miúda de um contrato, um número de série), aponte a câmera e use o ZOOM pra AMPLIAR — afaste dois dedos na tela (o gesto de "pinçar pra abrir") ou toque nos números de zoom. A imagem fica grande e legível. Pra enxergar no escuro, ligue a LANTERNA do celular ou tire uma FOTO (a foto congela a imagem, e aí você amplia a foto com calma, sem tremer). Muitos celulares têm ainda um modo LUPA na acessibilidade (visto na trilha de Acessibilidade), que junta zoom e luz num recurso só. Assim, a câmera vira óculos de aumento, lanterna e leitor — pra você não depender da vista cansada nem de procurar os óculos.',
      },
      estrutura: {
        titulo: 'A câmera que enxerga por você',
        partes: [
          { simbolo: '🔎', desc: 'Zoom: afaste dois dedos pra ampliar.' },
          { simbolo: '📸', desc: 'Tire foto e amplie a foto com calma.' },
          { simbolo: '🔦', desc: 'Lanterna pra iluminar o que está escuro.' },
          { simbolo: '👓', desc: 'Modo lupa na acessibilidade junta zoom e luz.' },
        ],
      },
      exemplo: {
        titulo: 'Ler sem forçar a vista',
        celulas: [
          { ref: 'Letra miúda da bula', valor: 'Aponto a câmera e dou zoom' },
          { ref: 'Validade apagada', valor: 'Tiro foto e amplio a foto' },
          { ref: 'Número atrás do aparelho', valor: 'Ligo a lanterna e leio' },
          { ref: 'Vista muito cansada', valor: 'Uso o modo lupa do celular' },
        ],
        formula: 'Câmera + zoom + luz + foto = ler o que é pequeno demais sem esforço',
        resultado: 'Você usa a câmera como lupa pra ler qualquer coisa miúda.',
        comentario: 'O truque mais útil aqui é TIRAR A FOTO: ao fotografar a letra miúda, você congela a imagem e pode ampliá-la na calma, sem o tremor das mãos e sem a coisa sair do foco. Combine com a lanterna pra ambientes escuros. É um uso que sozinho já justifica o celular pra muita gente — fim da luta com a vista cansada e a procura pelos óculos.',
      },
      vocabulario: [
        { palavra: 'Zoom', def: 'Ampliar a imagem; afaste dois dedos na tela pra aumentar.' },
        { palavra: 'Lanterna', def: 'A luz do celular, que ilumina o que você quer enxergar.' },
        { palavra: 'Congelar (foto)', def: 'Tirar uma foto pra ampliar a imagem parada, sem tremer.' },
      ],
      chave: [
        'A câmera é uma lupa: dê zoom pra ampliar o que é pequeno',
        'Tire foto pra ler a imagem congelada com calma, sem tremer',
        'Use a lanterna pra iluminar e o modo lupa pra juntar zoom e luz',
      ],
      porque: 'Transformar a câmera em lupa devolve autonomia pra quem tem a vista cansada: ler bulas, rótulos e letras miúdas deixa de ser luta. Com zoom, luz e foto, o celular vira um par de óculos de aumento sempre no bolso, pronto pra enxergar o que os olhos já não alcançam fácil.',
    },
    pratica: {
      instrucao: 'Vamos usar a câmera como lupa.',
      passos: [
        'Pegue algo com letra pequena (uma bula, um rótulo, uma embalagem)',
        'Abra a câmera e aponte pro texto pequeno',
        'Afaste dois dedos na tela pra dar zoom e ampliar o texto',
        'Se estiver escuro, ligue a lanterna do celular pra iluminar',
        'Tire uma foto e amplie a foto com calma, sem precisar segurar firme',
      ],
    },
    desafio: {
      cenario: 'Use a câmera como lupa: pegue algo de letra pequena, amplie com o zoom da câmera, ilumine com a lanterna se preciso e tire uma foto pra ler a imagem congelada com calma — enxergando o que é miúdo sem forçar a vista.',
      requisitos: [
        'Apontei a câmera pra um texto pequeno',
        'Usei o zoom pra ampliar',
        'Liguei a lanterna pra iluminar, se preciso',
        'Tirei foto e ampliei a foto com calma',
        'Li o que era difícil sem forçar a vista',
      ],
      dica: 'Se você usa o celular muito como lupa, vale ativar o modo Lupa nas configurações de Acessibilidade (visto naquela trilha): ele abre rápido, já com zoom e luz prontos, sem precisar tirar foto. Deixe esse atalho à mão e a leitura do dia a dia (preços, bulas, contas) fica bem mais fácil.',
    },
    validacao: [
      'Uso a câmera pra ampliar textos pequenos',
      'Dou zoom afastando dois dedos',
      'Ligo a lanterna pra iluminar',
      'Tiro foto pra ler a imagem congelada',
      'Leio o miúdo sem forçar a vista',
    ],
  },

  'mob-qr-6': {
    trilhaId: 'mob-qr', numero: 6, titulo: 'Escanear documentos com a câmera',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Precisa enviar uma cópia do RG, do comprovante ou de um contrato assinado? Esqueça a fila do scanner ou da papelaria. O celular fotografa o documento e o transforma num arquivo nítido, recortado e pronto pra enviar — como se fosse um scanner de verdade no bolso.',
      conceito: {
        titulo: 'O celular vira um scanner: documentos nítidos e prontos pra enviar',
        texto: 'Além de fotografar, o celular pode ESCANEAR documentos — transformá-los num arquivo limpo e nítido, melhor que uma foto comum. Muitos celulares já têm essa função na CÂMERA (modo "Documento" ou "Digitalizar") ou no app de NOTAS/ARQUIVOS; o Google Drive e apps gratuitos de scanner também fazem. Como funciona: você aponta pro documento sobre uma mesa, o app DETECTA as bordas, RECORTA o papel, endireita a imagem e melhora o contraste — virando um documento de cara profissional. Ele costuma gerar um PDF (visto na trilha de Fotos/arquivos), fácil de enviar por e-mail ou WhatsApp. Dicas pra um bom resultado: boa LUZ, documento sobre superfície de cor contrastante, e a câmera reta por cima (não inclinada). É a forma moderna de "tirar xerox" sem sair de casa.',
      },
      estrutura: {
        titulo: 'Digitalizando um documento',
        partes: [
          { simbolo: '📄', desc: 'Use o modo "Documento"/scanner da câmera ou de um app.' },
          { simbolo: '✂️', desc: 'O app detecta as bordas e recorta o papel.' },
          { simbolo: '✨', desc: 'Endireita e melhora o contraste: fica nítido.' },
          { simbolo: '📤', desc: 'Gera um PDF fácil de enviar por e-mail/WhatsApp.' },
        ],
      },
      exemplo: {
        titulo: 'Xerox sem sair de casa',
        celulas: [
          { ref: 'Enviar cópia do RG', valor: 'Escaneio e mando o PDF' },
          { ref: 'Comprovante de residência', valor: 'Digitalizo nítido e recortado' },
          { ref: 'Contrato assinado', valor: 'Viro um PDF pra anexar' },
          { ref: 'Foto saiu torta', valor: 'O scanner endireita sozinho' },
        ],
        formula: 'Apontar no documento + app recorta e melhora = PDF nítido pronto pra enviar',
        resultado: 'Você digitaliza documentos com qualidade, sem scanner físico.',
        comentario: 'A diferença entre FOTOGRAFAR e ESCANEAR um documento é grande: a foto comum sai torta, com sombras e fundo; o scanner recorta o papel, endireita e melhora o contraste, gerando algo que parece passado numa máquina de verdade. Isso importa quando você precisa enviar documentos pra um órgão, banco ou empresa — eles pedem nitidez. E vira PDF, o formato certo pra esses envios.',
      },
      vocabulario: [
        { palavra: 'Escanear (digitalizar)', def: 'Transformar um documento físico num arquivo nítido e recortado.' },
        { palavra: 'Detecção de bordas', def: 'O app encontra os cantos do papel e recorta automaticamente.' },
        { palavra: 'PDF', def: 'O formato de arquivo gerado, ideal pra enviar documentos.' },
      ],
      chave: [
        'O celular escaneia documentos, melhor que uma foto comum',
        'O app detecta bordas, recorta, endireita e gera um PDF',
        'É a forma moderna de "tirar xerox" e enviar sem sair de casa',
      ],
      porque: 'Escanear documentos pelo celular resolve uma necessidade real e frequente — enviar cópias nítidas de RG, comprovantes e contratos pra bancos, órgãos e empresas. Sem fila, sem papelaria: o scanner de bolso entrega qualidade profissional e o PDF certo pra cada envio.',
    },
    pratica: {
      instrucao: 'Vamos escanear um documento.',
      passos: [
        'Pegue um documento (uma conta, um comprovante) e coloque sobre uma mesa',
        'Procure o modo "Documento"/"Digitalizar" na câmera ou um app de scanner',
        'Aponte a câmera reta por cima, com boa luz, e deixe o app detectar as bordas',
        'Confirme a captura; o app recorta e melhora a imagem automaticamente',
        'Salve ou compartilhe como PDF, pronto pra enviar por e-mail ou WhatsApp',
      ],
    },
    desafio: {
      cenario: 'Vire scanner: coloque um documento sobre a mesa, use o modo de digitalizar da câmera ou um app de scanner, deixe-o recortar e melhorar a imagem, e salve como PDF pronto pra enviar — "tirando xerox" sem sair de casa.',
      requisitos: [
        'Posicionei um documento sobre a mesa',
        'Usei o modo/app de digitalizar',
        'O app detectou as bordas e recortou',
        'A imagem ficou nítida e endireitada',
        'Salvei/compartilhei como PDF',
      ],
      dica: 'Pra escanear bem: use luz uniforme (sem sombra da sua mão por cima), ponha o documento num fundo de cor diferente (papel branco sobre mesa escura) e segure a câmera paralela ao papel, reta por cima. Se o recorte automático errar, a maioria dos apps deixa você ajustar os cantos manualmente, arrastando-os.',
    },
    validacao: [
      'Uso o modo/app de digitalizar documentos',
      'Posiciono o documento com boa luz',
      'Deixo o app detectar bordas e recortar',
      'Obtenho uma imagem nítida e reta',
      'Salvo e compartilho como PDF',
    ],
  },

  'mob-qr-7': {
    trilhaId: 'mob-qr', numero: 7, titulo: 'Traduzir e buscar pela câmera',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Apontar a câmera pra um texto em inglês e ver a tradução aparecer por cima. Mirar numa planta e descobrir o nome dela. Fotografar um produto e achar onde comprar. A câmera deixou de só registrar — agora ela entende o que está vendo.',
      conceito: {
        titulo: 'A câmera reconhece textos e objetos e busca informações',
        texto: 'Ferramentas como o GOOGLE LENS (e a busca por imagem) usam a câmera pra ENTENDER o que ela vê. As capacidades mais úteis: TRADUZIR — aponte pra um texto em outra língua (um rótulo importado, um cardápio, uma placa) e a tradução aparece na tela; COPIAR TEXTO — fotografe um texto impresso e o celular o transforma em texto digital, que você copia (sem redigitar); IDENTIFICAR — aponte pra uma planta, um animal, um ponto turístico, um produto, e ele diz o que é ou onde encontrar; BUSCAR — fotografe algo e pesquise informações ou onde comprar. Geralmente está no app do Google (ícone da câmera na busca), no Google Fotos, ou na própria câmera. É como ter um assistente que olha junto com você e responde "o que é isto?".',
      },
      estrutura: {
        titulo: 'A câmera que entende',
        partes: [
          { simbolo: '🌐', desc: 'Traduzir textos em outra língua, na hora.' },
          { simbolo: '📋', desc: 'Copiar texto impresso pra não redigitar.' },
          { simbolo: '🌱', desc: 'Identificar plantas, objetos, lugares, produtos.' },
          { simbolo: '🔍', desc: 'Buscar informações ou onde comprar algo.' },
        ],
      },
      exemplo: {
        titulo: '"O que é isto?"',
        celulas: [
          { ref: 'Rótulo em inglês', valor: 'Aponto e vejo a tradução' },
          { ref: 'Texto impresso longo', valor: 'Fotografo e copio sem redigitar' },
          { ref: 'Planta que não conheço', valor: 'Aponto e descubro o nome' },
          { ref: 'Produto numa vitrine', valor: 'Fotografo e busco onde comprar' },
        ],
        formula: 'Apontar a câmera + Google Lens = traduzir, copiar, identificar e buscar',
        resultado: 'Você usa a câmera pra entender e pesquisar o mundo à sua volta.',
        comentario: 'Essa é a câmera no seu uso mais surpreendente: a TRADUÇÃO ao vivo ajuda com produtos importados e viagens; o COPIAR TEXTO poupa redigitar uma receita ou um endereço impresso; o IDENTIFICAR mata a curiosidade ("que flor é essa?") e ajuda nas compras. Tudo apontando a câmera. Vale explorar o Google Lens — é gratuito e costuma já vir no celular, dentro do app do Google ou do Fotos.',
      },
      vocabulario: [
        { palavra: 'Google Lens', def: 'Ferramenta que usa a câmera pra traduzir, identificar e buscar o que ela vê.' },
        { palavra: 'Tradução pela câmera', def: 'Apontar pra um texto em outra língua e ver a tradução na tela.' },
        { palavra: 'Copiar texto (da imagem)', def: 'Transformar um texto impresso fotografado em texto digital editável.' },
      ],
      chave: [
        'A câmera (Google Lens) traduz textos em outras línguas na hora',
        'Ela copia texto impresso e identifica plantas, objetos e lugares',
        'Você fotografa algo e busca informações ou onde comprar',
      ],
      porque: 'A câmera que entende o que vê amplia muito o que o celular faz por você: derruba a barreira do idioma, poupa redigitar textos, mata curiosidades e ajuda nas compras. É um assistente visual gratuito que responde "o que é isto?" sempre que você aponta.',
    },
    pratica: {
      instrucao: 'Vamos usar a câmera pra entender algo.',
      passos: [
        'Abra o app do Google e toque no ícone de câmera (Google Lens), ou o Lens no Fotos',
        'Aponte pra um texto em outra língua e veja a opção de traduzir',
        'Aponte pra um texto impresso e experimente a opção de copiar o texto',
        'Aponte pra uma planta, objeto ou produto e veja o que ele identifica',
        'Explore buscar informações sobre o que você fotografou',
      ],
    },
    desafio: {
      cenario: 'Use a câmera inteligente: com o Google Lens, traduza um texto em outra língua, copie um texto impresso, identifique uma planta ou objeto e busque informações sobre algo que fotografar — transformando a câmera num assistente que entende o mundo.',
      requisitos: [
        'Abri o Google Lens (no app do Google ou Fotos)',
        'Traduzi um texto em outra língua',
        'Copiei um texto impresso pela câmera',
        'Identifiquei uma planta ou objeto',
        'Busquei informações sobre algo fotografado',
      ],
      dica: 'A tradução pela câmera é uma mão na roda em viagens e com produtos importados — funciona até com a câmera ao vivo, sem precisar tirar foto. E o "copiar texto" é ótimo pra passar pro celular um endereço, uma senha de Wi-Fi impressa ou uma receita, sem digitar letra por letra. Explore: cada uso desses resolve um probleminha real.',
    },
    validacao: [
      'Abro o Google Lens pela câmera',
      'Traduzo textos em outras línguas',
      'Copio texto impresso pela câmera',
      'Identifico plantas, objetos e lugares',
      'Busco informações sobre o que fotografo',
    ],
  },

  'mob-qr-8': {
    trilhaId: 'mob-qr', numero: 8, titulo: 'Projeto: a câmera que resolve o dia a dia',
    tempoTotal: 16, xp: 110, vertente: 'celular',
    aula: {
      gancho: 'Hora de juntar tudo: a câmera deixou de ser só "tirar foto" e virou uma caixa de ferramentas. Ler QR Codes, pagar pelo quadradinho, enxergar o miúdo, digitalizar documentos, traduzir e buscar. Neste projeto, você usa cada superpoder da câmera pra resolver tarefas reais.',
      conceito: {
        titulo: 'Tudo junto: a câmera como ferramenta completa do dia a dia',
        texto: 'Este projeto consolida a trilha colocando cada uso da câmera em ação numa tarefa real. Você vai: 1) LER um QR Code com a câmera (e conferir o link, com segurança); 2) localizar no app do banco como PAGAR um QR PIX (entendendo que se confere nome e valor antes); 3) usar a câmera como LUPA pra ler uma letra miúda (com zoom e foto); 4) ESCANEAR um documento, gerando um PDF nítido; 5) usar o Google Lens pra TRADUZIR ou IDENTIFICAR algo. Ao terminar, você terá transformado a câmera — antes usada só pra fotos — numa ferramenta que resolve necessidades concretas: acessar serviços, pagar, enxergar, digitalizar e entender. Esse é o domínio da câmera útil: um canivete suíço no bolso.',
      },
      estrutura: {
        titulo: 'Os superpoderes da câmera',
        partes: [
          { simbolo: '⬛', desc: 'Ler QR Code com segurança (conferir o link).' },
          { simbolo: '💸', desc: 'Pagar com QR PIX (conferir nome e valor).' },
          { simbolo: '🔎', desc: 'Lupa: enxergar o miúdo com zoom e foto.' },
          { simbolo: '📄', desc: 'Escanear documento em PDF; e traduzir/identificar.' },
        ],
      },
      exemplo: {
        titulo: 'A câmera a serviço da sua vida',
        celulas: [
          { ref: 'Cardápio por QR', valor: 'Leio com a câmera, confiro o link' },
          { ref: 'Pagar na feira', valor: 'QR PIX, conferindo nome e valor' },
          { ref: 'Bula ilegível', valor: 'Câmera-lupa com zoom e foto' },
          { ref: 'Enviar comprovante', valor: 'Escaneio em PDF e mando' },
        ],
        formula: 'QR + PIX + lupa + scanner + Lens = câmera como canivete suíço do dia a dia',
        resultado: 'Você usa a câmera pra resolver tarefas reais, não só pra fotos.',
        comentario: 'Este é o domínio completo: você passou a ver a câmera como FERRAMENTA, não só como registro de momentos. Cada superpoder resolve um problema concreto — acessar um serviço, pagar, enxergar, digitalizar, entender. Junte-os aos da trilha de Fotos (registrar e guardar) e você terá uma câmera que faz quase tudo. Um dos recursos mais subestimados e poderosos do celular.',
      },
      vocabulario: [
        { palavra: 'Câmera útil', def: 'Usar a câmera como ferramenta (QR, lupa, scanner, tradução), não só pra fotos.' },
        { palavra: 'Canivete suíço', def: 'Imagem da câmera reunindo várias ferramentas num só lugar.' },
        { palavra: 'Tarefa real', def: 'Uma necessidade concreta do dia a dia que a câmera resolve.' },
      ],
      chave: [
        'O projeto usa cada superpoder da câmera numa tarefa real',
        'Ler QR, pagar PIX, ampliar, escanear, traduzir/identificar',
        'A câmera deixa de ser só fotos e vira ferramenta do dia a dia',
      ],
      porque: 'Reunir todos os usos da câmera numa prática real revela o quanto ela resolve: acessar serviços, pagar, enxergar, digitalizar e entender o mundo. Dominar a câmera útil entrega um canivete suíço no bolso — um dos recursos mais poderosos e subestimados do celular, a serviço da sua autonomia.',
    },
    pratica: {
      instrucao: 'Vamos usar cada superpoder da câmera numa tarefa real.',
      passos: [
        'LER QR: leia um QR Code com a câmera e confira o link antes de abrir',
        'PIX: no app do banco, localize como ler um QR PIX (lembrando de conferir nome e valor)',
        'LUPA: use a câmera com zoom (e uma foto) pra ler uma letra miúda',
        'SCANNER: escaneie um documento e gere um PDF nítido',
        'LENS: com o Google Lens, traduza ou identifique algo apontando a câmera',
        'Reflita: a câmera virou uma ferramenta que resolve tarefas, não só tira fotos',
      ],
    },
    desafio: {
      cenario: 'Prove o domínio da câmera útil: leia um QR Code com segurança, localize o pagamento por QR PIX, use a câmera como lupa, escaneie um documento em PDF e traduza/identifique algo com o Lens — transformando a câmera num canivete suíço que resolve o dia a dia.',
      requisitos: [
        'Li um QR Code conferindo o link',
        'Localizei como pagar com QR PIX (nome e valor)',
        'Usei a câmera como lupa pra ler o miúdo',
        'Escaneei um documento em PDF',
        'Traduzi ou identifiquei algo com o Lens',
      ],
      dica: 'A câmera é, talvez, a ferramenta mais versátil do celular — e este projeto mostra o porquê. Daqui pra frente, ao topar com uma tarefa (um QR, uma letra miúda, um documento pra enviar, um texto em outra língua), lembre: a câmera provavelmente resolve. Combine com a trilha de Fotos e você terá dominado por completo o olho do seu celular.',
    },
    validacao: [
      'Leio QR Codes com segurança',
      'Sei pagar com QR PIX conferindo dados',
      'Uso a câmera como lupa',
      'Escaneio documentos em PDF',
      'Traduzo e identifico com o Google Lens',
    ],
  },
};
