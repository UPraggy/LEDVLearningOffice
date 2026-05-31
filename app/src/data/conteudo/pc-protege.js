// ============================================================================
// CONTEÚDO — Proteção no Computador: Vírus, Senhas e Privacidade (pc-protege)
// Como o PC é invadido, senhas fortes e gerenciador, downloads e extensões
// seguras, navegador protegido, bloqueio de tela, golpes na tela, dados
// pessoais e o plano de defesa. Segurança prática no desktop.
// ============================================================================

export const PC_PROTEGE = {
  'pc-protege-1': {
    trilhaId: 'pc-protege', numero: 1, titulo: 'Como um computador é invadido (sem mistério)',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'A imagem de hacker de filme — encapuzado, digitando código verde — não é como o seu computador seria invadido na vida real. Quase sempre é bem mais simples: alguém te engana pra você mesmo abrir a porta. Entender como isso acontece é metade da defesa.',
      conceito: {
        titulo: 'Na vida real, quase sempre você abre a porta sem saber',
        texto: 'A grande maioria das invasões não quebra sistemas: ela engana pessoas. Os caminhos comuns são: você BAIXA E ABRE um arquivo infectado (achando que era outra coisa); CLICA num link de e-mail ou site falso que instala algo; usa um PROGRAMA PIRATA que vem com vírus de brinde; ou cai num GOLPE que te convence a instalar um "acesso remoto". O vírus precisa que VOCÊ o deixe entrar. Por isso a defesa principal não é um software mágico — é a sua atenção: desconfiar, não abrir o que não pediu, não instalar de qualquer lugar.',
      },
      estrutura: {
        titulo: 'Os caminhos da invasão',
        partes: [
          { simbolo: '📎', desc: 'Anexo/arquivo infectado que você abre achando ser outra coisa.' },
          { simbolo: '🔗', desc: 'Link falso de e-mail ou site que instala algo escondido.' },
          { simbolo: '🏴‍☠️', desc: 'Programa pirata que vem com vírus de brinde.' },
          { simbolo: '🎭', desc: 'Golpe que te convence a dar acesso remoto ao PC.' },
        ],
      },
      exemplo: {
        titulo: 'Reconhecendo as portas de entrada',
        celulas: [
          { ref: 'Anexo que não esperava', valor: 'Não abra: pode ser vírus disfarçado' },
          { ref: '"Baixe o ativador grátis"', valor: 'Pirataria = vírus quase garantido' },
          { ref: '"Instale pra eu te ajudar"', valor: 'Acesso remoto a estranhos é golpe' },
          { ref: 'Link urgente por e-mail', valor: 'Desconfie antes de clicar' },
        ],
        formula: 'Vírus precisa que VOCÊ abra a porta → sua atenção é a defesa',
        resultado: 'Você entende que a maioria das ameaças depende de te enganar.',
        comentario: 'A lição central da segurança: a tecnologia faz parte, mas o elo mais explorado é o humano. Golpistas investem em te apressar e te emocionar justamente porque é mais fácil enganar uma pessoa do que quebrar um sistema. Atenção vale mais que qualquer antivírus.',
      },
      vocabulario: [
        { palavra: 'Vírus/malware', def: 'Programa malicioso que prejudica ou espiona o computador.' },
        { palavra: 'Engenharia social', def: 'Enganar a pessoa pra que ela mesma abra a porta ao golpe.' },
        { palavra: 'Acesso remoto', def: 'Controlar um PC à distância; perigoso nas mãos de um golpista.' },
      ],
      chave: [
        'A maioria das invasões engana você, não quebra o sistema',
        'O vírus precisa que você o deixe entrar',
        'Sua atenção é a defesa mais importante',
      ],
      porque: 'Entender que as invasões dependem de te enganar muda a postura: em vez de confiar cegamente num antivírus, você se torna a primeira linha de defesa — desconfiando do que não pediu e não abrindo qualquer coisa.',
    },
    pratica: {
      instrucao: 'Vamos revisar seus hábitos diante das portas de entrada de vírus.',
      passos: [
        'Pense na última vez que baixou um programa: foi de um site oficial?',
        'Lembre se já abriu algum anexo de e-mail sem ter certeza do remetente',
        'Avalie se você usa ou usou algum programa pirata',
        'Reflita: você desconfia de mensagens urgentes pedindo cliques?',
        'Identifique qual desses caminhos é o seu ponto mais fraco',
      ],
    },
    desafio: {
      cenario: 'Mapeie seus riscos: revise como você costuma baixar programas, abrir anexos e reagir a mensagens urgentes, e identifique qual das portas de entrada de vírus (download, link, pirataria, acesso remoto) representa seu maior risco pessoal.',
      requisitos: [
        'Revisei como costumo baixar programas',
        'Avaliei meu hábito de abrir anexos',
        'Refleti sobre o uso de programas piratas',
        'Reconheço a urgência como tática de golpe',
        'Identifiquei meu ponto mais fraco',
      ],
      dica: 'A pergunta-chave diante de qualquer arquivo, link ou pedido é simples: "Eu pedi por isso? Faz sentido vir agora?". Se a resposta for não, pare e desconfie — essa pausa de poucos segundos evita a maioria das infecções.',
    },
    validacao: [
      'Entendo como invasões realmente acontecem',
      'Sei que o vírus precisa que eu abra a porta',
      'Reconheço os principais caminhos de entrada',
      'Desconfio de urgência e pedidos estranhos',
      'Assumo minha atenção como primeira defesa',
    ],
  },

  'pc-protege-2': {
    trilhaId: 'pc-protege', numero: 2, titulo: 'Senhas fortes e o gerenciador de senhas',
    tempoTotal: 10, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'A mesma senha em tudo, fácil de lembrar, talvez o nome do cachorro com o ano. É o que quase todo mundo faz — e é exatamente o que os golpistas contam. Mas existe um jeito de ter senhas fortes e diferentes pra tudo sem precisar decorar nenhuma.',
      conceito: {
        titulo: 'Senhas fortes, diferentes — e você não precisa decorar',
        texto: 'Duas regras de ouro: a senha precisa ser FORTE (longa e difícil de adivinhar) e ÚNICA (uma diferente pra cada serviço). Por quê única? Porque se uma vaza, o golpista testa a mesma em todos os seus contas — e entra em tudo. O problema "não consigo decorar dezenas de senhas" tem uma solução elegante: o GERENCIADOR DE SENHAS. É um cofre que cria, guarda e preenche senhas fortes pra você — você só decora UMA senha mestra. Uma boa senha forte pode ser uma FRASE (ex.: três palavras aleatórias juntas), fácil de lembrar e difícil de quebrar.',
      },
      estrutura: {
        titulo: 'A estratégia de senhas',
        partes: [
          { simbolo: '💪', desc: 'Forte: longa; uma frase de palavras vale mais que símbolos.' },
          { simbolo: '🔑', desc: 'Única: uma senha diferente pra cada serviço.' },
          { simbolo: '🗄️', desc: 'Gerenciador: o cofre que guarda e preenche tudo por você.' },
          { simbolo: '1️⃣', desc: 'Senha mestra: a única que você precisa decorar.' },
        ],
      },
      exemplo: {
        titulo: 'Senhas que protegem de verdade',
        celulas: [
          { ref: 'Mesma senha em tudo', valor: 'Perigoso: uma vaza, todas caem' },
          { ref: '"Joao123"', valor: 'Fraca: fácil de adivinhar' },
          { ref: '"cavalo-janela-trovão"', valor: 'Forte e fácil de lembrar' },
          { ref: 'Não decoro tantas', valor: 'Gerenciador resolve: só uma mestra' },
        ],
        formula: 'Frase forte + única por serviço + gerenciador = segurança real',
        resultado: 'Senhas fortes em tudo, sem o peso de decorar dezenas.',
        comentario: 'Anotar senhas num caderno é melhor que repetir a mesma em tudo — mas um gerenciador é melhor ainda: ele cria senhas impossíveis de adivinhar, preenche sozinho e nunca esquece. Navegadores como Chrome e Edge já têm um embutido, gratuito.',
      },
      vocabulario: [
        { palavra: 'Senha forte', def: 'Senha longa e difícil de adivinhar; frases funcionam bem.' },
        { palavra: 'Gerenciador de senhas', def: 'Cofre digital que cria, guarda e preenche suas senhas.' },
        { palavra: 'Senha mestra', def: 'A única senha que você decora pra abrir o cofre.' },
      ],
      chave: [
        'Senhas devem ser fortes E diferentes pra cada serviço',
        'O gerenciador guarda tudo: você decora só a mestra',
        'Uma frase de palavras é forte e fácil de lembrar',
      ],
      porque: 'Senhas repetidas e fracas são a causa de boa parte das contas invadidas. Adotar senhas fortes e únicas com a ajuda de um gerenciador é uma das melhorias de segurança mais impactantes que existem.',
    },
    pratica: {
      instrucao: 'Vamos melhorar sua estratégia de senhas no computador.',
      passos: [
        'Liste mentalmente os serviços onde você usa a MESMA senha',
        'Escolha o mais importante (banco, e-mail) pra começar',
        'Crie pra ele uma senha forte: uma frase de 3+ palavras aleatórias',
        'Conheça o gerenciador embutido do seu navegador (Chrome/Edge → Senhas)',
        'Deixe o navegador salvar e sugerir senhas fortes pros próximos cadastros',
      ],
    },
    desafio: {
      cenario: 'Reforce suas senhas: identifique onde você repete senhas, crie uma senha forte (estilo frase) para seu serviço mais importante e configure o gerenciador de senhas do navegador pra guardar e gerar senhas únicas daqui pra frente.',
      requisitos: [
        'Identifiquei onde repito senhas',
        'Criei uma senha forte em formato de frase',
        'Apliquei-a no meu serviço mais importante',
        'Conheci o gerenciador do navegador',
        'Configurei o salvamento de senhas fortes',
      ],
      dica: 'Comece pelo essencial: o e-mail principal é a chave de tudo, porque é por ele que se recuperam as outras senhas. Proteja-o com uma senha forte e única primeiro — e, se possível, com verificação em duas etapas.',
    },
    validacao: [
      'Crio senhas fortes em formato de frase',
      'Uso senhas diferentes pra cada serviço',
      'Conheço e uso um gerenciador de senhas',
      'Decoro só a senha mestra',
      'Protejo meu e-mail principal com prioridade',
    ],
  },

  'pc-protege-3': {
    trilhaId: 'pc-protege', numero: 3, titulo: 'Baixar programas com segurança',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Você precisa de um programa, pesquisa no Google, clica no primeiro resultado e baixa. Parece inocente — mas é assim que muita gente instala vírus sem perceber. Baixar do lugar certo é uma das defesas mais importantes do computador.',
      conceito: {
        titulo: 'A fonte do download importa mais que o programa',
        texto: 'Um mesmo programa pode estar limpo no site oficial e infectado num site pirata. A regra é: baixe SEMPRE da FONTE OFICIAL (o site do próprio fabricante) ou de uma LOJA CONFIÁVEL (Microsoft Store). Cuidado com armadilhas: anúncios no topo do Google que imitam o site real, botões "DOWNLOAD" gigantes e falsos em sites de pirataria, e os "programas extras" que vêm marcados pra instalar junto (durante a instalação, desmarque o que você não pediu). E desconfie de qualquer "ativador", "crack" ou versão "grátis premium" — esses quase sempre são vírus.',
      },
      estrutura: {
        titulo: 'Baixar do jeito certo',
        partes: [
          { simbolo: '🏢', desc: 'Fonte oficial: o site do próprio fabricante do programa.' },
          { simbolo: '🛍️', desc: 'Loja confiável: Microsoft Store é um caminho seguro.' },
          { simbolo: '🎯', desc: 'Cuidado: anúncios e botões falsos imitam o download real.' },
          { simbolo: '☑️', desc: 'Na instalação, desmarque os "programas extras" indesejados.' },
        ],
      },
      exemplo: {
        titulo: 'Evitando downloads perigosos',
        celulas: [
          { ref: 'Primeiro link do Google', valor: 'Pode ser anúncio falso: confira o site' },
          { ref: 'Site do fabricante', valor: 'Fonte segura: baixe daqui' },
          { ref: '"Crack/ativador grátis"', valor: 'Quase sempre é vírus' },
          { ref: 'Instalou e veio "extra"', valor: 'Desmarque na próxima vez' },
        ],
        formula: 'Site oficial + desmarcar extras + sem pirataria = download limpo',
        resultado: 'Programas instalados sem trazer vírus de carona.',
        comentario: 'Antes de clicar em "baixar", olhe o endereço do site na barra: ele é realmente o site oficial do programa? Os anúncios falsos costumam ter endereços parecidos mas diferentes. Na dúvida, digite você mesmo o nome oficial do programa + "site oficial".',
      },
      vocabulario: [
        { palavra: 'Fonte oficial', def: 'O site do próprio fabricante; o lugar seguro pra baixar.' },
        { palavra: 'Crack/ativador', def: 'Programa pirata pra burlar pagamento; quase sempre traz vírus.' },
        { palavra: 'Programa extra (bundle)', def: 'Software indesejado que vem marcado junto na instalação.' },
      ],
      chave: [
        'Baixe sempre da fonte oficial ou loja confiável',
        'Cuidado com anúncios e botões de download falsos',
        'Desmarque programas extras; fuja de cracks e ativadores',
      ],
      porque: 'Baixar do lugar errado é uma das formas mais comuns de infectar o computador. Saber escolher a fonte e reconhecer as armadilhas do download protege seu PC sem precisar de nenhuma ferramenta extra.',
    },
    pratica: {
      instrucao: 'Vamos praticar a escolha segura de onde baixar um programa.',
      passos: [
        'Pense num programa que você usaria (ex.: um leitor de PDF gratuito)',
        'Pesquise pelo nome + "site oficial" no Google',
        'Identifique qual resultado é o site real (e quais são anúncios)',
        'Confira o endereço na barra antes de baixar',
        'Conheça a Microsoft Store como alternativa segura de instalação',
      ],
    },
    desafio: {
      cenario: 'Pratique o download seguro: escolha um programa, localize sua fonte oficial diferenciando-a de anúncios e sites falsos, saiba conferir o endereço antes de baixar e conheça a Microsoft Store como caminho confiável.',
      requisitos: [
        'Pesquisei pelo site oficial do programa',
        'Diferenciei o site real dos anúncios falsos',
        'Conferi o endereço antes de baixar',
        'Sei desmarcar programas extras na instalação',
        'Conheço a Microsoft Store como fonte segura',
      ],
      dica: 'A Microsoft Store é o caminho mais seguro pra quem tem receio: os programas de lá já passaram por verificação e se instalam de forma limpa, sem extras nem pegadinhas. Procure ali primeiro o que você precisa.',
    },
    validacao: [
      'Baixo sempre da fonte oficial',
      'Reconheço anúncios e botões de download falsos',
      'Confiro o endereço antes de baixar',
      'Desmarco programas extras na instalação',
      'Fujo de cracks, ativadores e pirataria',
    ],
  },

  'pc-protege-4': {
    trilhaId: 'pc-protege', numero: 4, titulo: 'Navegador seguro: extensões, pop-ups e cadeado',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'O navegador é por onde você faz quase tudo: banco, compras, e-mail. Por isso é também o alvo preferido dos golpes. Saber reconhecer um site seguro, controlar pop-ups e cuidar das extensões deixa essa porta principal bem mais protegida.',
      conceito: {
        titulo: 'O navegador é a porta principal — cuide bem dela',
        texto: 'Três cuidados no navegador. O CADEADO e o "https" no endereço indicam conexão segura (criptografada) — importante especialmente em sites de banco e compras, mas atenção: cadeado garante conexão segura, não que o site seja honesto. Os POP-UPS e notificações invasivas ("você ganhou", "seu PC está infectado") devem ser fechados e nunca clicados — você pode bloquear notificações de sites nas configurações. E as EXTENSÕES (complementos do navegador) são úteis, mas instale só as confiáveis: uma extensão maliciosa pode espionar tudo que você faz. Revise de tempos em tempos as que você tem instaladas.',
      },
      estrutura: {
        titulo: 'Navegar com proteção',
        partes: [
          { simbolo: '🔒', desc: 'Cadeado/https: conexão segura (mas não garante site honesto).' },
          { simbolo: '🚫', desc: 'Pop-ups e notificações invasivas: feche, nunca clique.' },
          { simbolo: '🧩', desc: 'Extensões: só as confiáveis; podem espionar tudo.' },
          { simbolo: '🔄', desc: 'Revise periodicamente as extensões instaladas.' },
        ],
      },
      exemplo: {
        titulo: 'O navegador protegido',
        celulas: [
          { ref: 'Site do banco sem cadeado', valor: 'Atenção: pode ser falso, não digite senha' },
          { ref: '"Seu PC está infectado!"', valor: 'Pop-up falso: feche, nunca clique' },
          { ref: 'Extensão pedindo tudo', valor: 'Instale só as confiáveis' },
          { ref: 'Site quer enviar avisos', valor: 'Bloqueie notificações invasivas' },
        ],
        formula: 'https + sem clicar em pop-up + extensões confiáveis = navegador seguro',
        resultado: 'A principal porta de entrada do PC bem mais protegida.',
        comentario: 'Aquele pop-up dramático de "vírus detectado, ligue para o suporte" é sempre golpe — nenhum site honesto te avisa de vírus assim, nem pede pra você ligar pra um número. Feche a aba (ou o navegador) e ignore: seu computador está bem.',
      },
      vocabulario: [
        { palavra: 'HTTPS / cadeado', def: 'Indicador de conexão criptografada (segura) no navegador.' },
        { palavra: 'Pop-up', def: 'Janela que salta na tela; muitos são golpes ou propaganda.' },
        { palavra: 'Extensão', def: 'Complemento que adiciona funções ao navegador; pode ser perigoso.' },
      ],
      chave: [
        'Cadeado/https garante conexão segura, não site honesto',
        'Pop-ups de "vírus/prêmio" são golpe: feche, não clique',
        'Instale só extensões confiáveis e revise as que tem',
      ],
      porque: 'Como o navegador concentra suas atividades mais sensíveis, protegê-lo tem alto impacto. Reconhecer sites seguros, ignorar pop-ups e controlar extensões fecha as brechas mais exploradas no dia a dia.',
    },
    pratica: {
      instrucao: 'Vamos reforçar a segurança do seu navegador.',
      passos: [
        'Abra um site qualquer e localize o cadeado/https na barra de endereço',
        'Acesse as configurações do navegador → seção de notificações de sites',
        'Veja como bloquear sites de enviarem notificações invasivas',
        'Abra a lista de extensões instaladas (Configurações → Extensões)',
        'Revise: remova qualquer extensão que você não reconhece ou não usa',
      ],
    },
    desafio: {
      cenario: 'Blinde o navegador: localize o indicador de conexão segura, configure o bloqueio de notificações invasivas de sites e revise suas extensões instaladas removendo as que você não reconhece ou não usa mais.',
      requisitos: [
        'Localizei o cadeado/https na barra',
        'Entendi que ele garante conexão, não honestidade',
        'Configurei o bloqueio de notificações invasivas',
        'Revisei a lista de extensões instaladas',
        'Removi extensões desconhecidas ou inúteis',
      ],
      dica: 'Use poucas extensões e só de fontes confiáveis (lojas oficiais, desenvolvedores conhecidos). Cada extensão é um programa com acesso ao seu navegador — quanto menos, e mais confiáveis, menor o risco de uma delas espionar você.',
    },
    validacao: [
      'Reconheço conexão segura pelo cadeado/https',
      'Sei que o cadeado não garante honestidade do site',
      'Fecho pop-ups invasivos sem clicar',
      'Bloqueio notificações de sites',
      'Controlo e reviso minhas extensões',
    ],
  },

  'pc-protege-5': {
    trilhaId: 'pc-protege', numero: 5, titulo: 'Bloqueio de tela e proteger o acesso ao PC',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Toda a segurança digital do mundo não adianta se qualquer um que passa pode sentar no seu computador desbloqueado e mexer em tudo. A proteção começa no básico: garantir que só você abre a sua máquina.',
      conceito: {
        titulo: 'A primeira barreira é o acesso físico ao computador',
        texto: 'Antes de qualquer vírus, há um risco mais simples: alguém com acesso físico ao seu PC destravado. A defesa básica: ter uma SENHA (ou PIN, ou biometria) pra entrar no Windows, e BLOQUEAR A TELA sempre que se afastar (o atalho é Tecla Windows + L). Configure também o BLOQUEIO AUTOMÁTICO depois de alguns minutos sem uso. Isso protege em qualquer cenário: trabalho, casa com visitas, ou se o notebook for perdido/roubado. Sem isso, todos os seus e-mails, fotos e contas ficam abertos pra qualquer pessoa que tocar no teclado.',
      },
      estrutura: {
        titulo: 'Trancar o acesso ao PC',
        partes: [
          { simbolo: '🔐', desc: 'Senha/PIN/biometria pra entrar no Windows.' },
          { simbolo: '🪟', desc: 'Bloquear ao se afastar: Tecla Windows + L.' },
          { simbolo: '⏱️', desc: 'Bloqueio automático após alguns minutos de inatividade.' },
          { simbolo: '🛡️', desc: 'Protege se o notebook for perdido ou roubado.' },
        ],
      },
      exemplo: {
        titulo: 'Controlando quem entra',
        celulas: [
          { ref: 'PC sem senha nenhuma', valor: 'Qualquer um abre tudo: configure já' },
          { ref: 'Vou tomar um café', valor: 'Windows + L bloqueia na hora' },
          { ref: 'Esqueci destravado', valor: 'Bloqueio automático salva você' },
          { ref: 'Notebook roubado', valor: 'Com senha, dificulta o acesso aos dados' },
        ],
        formula: 'Senha de entrada + Win+L + bloqueio automático = acesso só seu',
        resultado: 'Seu computador protegido contra quem tem acesso físico a ele.',
        comentario: 'Crie o hábito do Windows + L: toda vez que levantar da cadeira, mesmo em casa, bloqueie a tela. É um gesto de um segundo que vira automático e protege sua privacidade em qualquer ambiente — inclusive de crianças curiosas.',
      },
      vocabulario: [
        { palavra: 'Bloqueio de tela', def: 'Trancar o PC exigindo senha pra voltar a usá-lo.' },
        { palavra: 'PIN', def: 'Senha curta de números pra entrar no Windows rapidamente.' },
        { palavra: 'Windows + L', def: 'Atalho que bloqueia a tela na hora.' },
      ],
      chave: [
        'Tenha senha/PIN/biometria pra entrar no Windows',
        'Windows + L bloqueia a tela quando você se afasta',
        'O bloqueio automático protege se você esquecer',
      ],
      porque: 'A segurança física é a base de tudo: sem ela, qualquer pessoa com acesso ao teclado vê seus e-mails, fotos e contas. Proteger o acesso ao PC é simples, rápido e protege contra um risco real e cotidiano.',
    },
    pratica: {
      instrucao: 'Vamos garantir que só você acessa o seu computador.',
      passos: [
        'Confirme que sua conta do Windows exige senha ou PIN pra entrar',
        'Se não exigir, configure uma em Configurações → Contas → Opções de entrada',
        'Pratique o atalho Tecla Windows + L pra bloquear a tela',
        'Configure o bloqueio automático após alguns minutos de inatividade',
        'Adote o hábito de bloquear sempre que se afastar do PC',
      ],
    },
    desafio: {
      cenario: 'Proteja o acesso físico: confirme que entrar no Windows exige senha ou PIN, aprenda e pratique o bloqueio manual (Windows + L), e configure o bloqueio automático por inatividade pra cobrir os esquecimentos.',
      requisitos: [
        'Confirmei que o Windows exige senha/PIN pra entrar',
        'Configurei uma entrada segura se não houvesse',
        'Pratiquei o atalho Windows + L',
        'Configurei o bloqueio automático por inatividade',
        'Adotei o hábito de bloquear ao me afastar',
      ],
      dica: 'A biometria (impressão digital ou reconhecimento facial, onde o equipamento permite) é tão segura quanto a senha e muito mais cômoda — você entra num toque ou olhar. Vale ativar se o seu computador tiver esse recurso.',
    },
    validacao: [
      'Exijo senha/PIN pra entrar no Windows',
      'Bloqueio a tela com Windows + L',
      'Configuro o bloqueio automático',
      'Bloqueio sempre que me afasto',
      'Entendo a importância da segurança física',
    ],
  },

  'pc-protege-6': {
    trilhaId: 'pc-protege', numero: 6, titulo: 'Golpes que aparecem na tela do computador',
    tempoTotal: 10, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'Do nada, uma tela vermelha alarmante: "VÍRUS DETECTADO! Ligue agora para o suporte Microsoft!". Um número de telefone, um cronômetro, barulho. É assustador de propósito — e é 100% golpe. Reconhecer essas encenações desarma o medo que elas exploram.',
      conceito: {
        titulo: 'O medo é a arma — e a encenação é sempre parecida',
        texto: 'Os golpes de tela seguem um roteiro: criam PÂNICO ("seu PC foi infectado/bloqueado"), passam URGÊNCIA (cronômetro, alarme) e oferecem uma "solução" que é a armadilha — ligar pra um falso suporte, instalar um "acesso remoto" ou pagar. Verdades que desmontam tudo: a Microsoft (e nenhuma empresa séria) NUNCA avisa de vírus por pop-up nem pede pra você ligar; um site NÃO consegue saber se seu PC tem vírus; e ninguém de verdade pede pra instalar acesso remoto pra "te ajudar". Diante de qualquer tela assim: não ligue, não instale, não pague. Apenas feche.',
      },
      estrutura: {
        titulo: 'Anatomia do golpe de tela',
        partes: [
          { simbolo: '😱', desc: 'Pânico: "seu computador foi infectado/bloqueado".' },
          { simbolo: '⏰', desc: 'Urgência: cronômetro, alarme, "aja agora".' },
          { simbolo: '📞', desc: '"Solução": ligar pra suporte falso ou instalar acesso.' },
          { simbolo: '❌', desc: 'Resposta certa: não ligar, não instalar, só fechar.' },
        ],
      },
      exemplo: {
        titulo: 'Desarmando os golpes de tela',
        celulas: [
          { ref: '"Ligue para o suporte!"', valor: 'Microsoft nunca pede isso: golpe' },
          { ref: 'Site "detectou" vírus', valor: 'Impossível: site não vê seu PC' },
          { ref: '"Instale pra eu limpar"', valor: 'Acesso remoto a estranho = perigo' },
          { ref: 'Tela travada com alarme', valor: 'Feche o navegador; PC está bem' },
        ],
        formula: 'Pânico + urgência + "ligue/instale/pague" = golpe garantido',
        resultado: 'Você reconhece a encenação e não cai no medo fabricado.',
        comentario: 'Se um falso suporte conseguir te convencer a instalar um acesso remoto, ele controla seu PC: vê suas senhas, abre seu banco, finge "consertar" e cobra. Por isso a regra é absoluta: NUNCA instale acesso remoto a pedido de quem ligou ou apareceu na sua tela.',
      },
      vocabulario: [
        { palavra: 'Golpe do suporte falso', def: 'Falso técnico que finge resolver um "problema" pra te roubar.' },
        { palavra: 'Scareware', def: 'Golpe que usa o medo (falso vírus) pra te fazer agir.' },
        { palavra: 'Tela falsa', def: 'Pop-up encenado pra parecer um alerta real do sistema.' },
      ],
      chave: [
        'O golpe usa pânico e urgência pra te fazer agir',
        'Microsoft nunca avisa vírus por pop-up nem pede ligação',
        'Diante da tela: não ligue, não instale, não pague — feche',
      ],
      porque: 'Os golpes de tela são desenhados pra paralisar pela emoção. Conhecer o roteiro antes desarma o medo: quando a tela assustadora aparece, você reconhece a farsa e simplesmente fecha, sem virar vítima.',
    },
    pratica: {
      instrucao: 'Vamos fixar a resposta correta aos golpes de tela.',
      passos: [
        'Memorize: a Microsoft NUNCA avisa de vírus por pop-up nem pede ligação',
        'Memorize: um site não consegue saber se o seu PC está infectado',
        'Decida agora sua reação: feche a aba/navegador, sem ligar nem instalar',
        'Saiba que, se a aba não fechar, pode fechar o navegador pelo Gerenciador de Tarefas',
        'Combine: nunca instalar acesso remoto a pedido de quem te abordou',
      ],
    },
    desafio: {
      cenario: 'Prepare sua defesa contra golpes de tela: reconheça o roteiro de pânico e urgência, internalize as verdades que o desmontam (Microsoft não avisa assim, site não vê seu PC) e defina a reação correta — fechar, sem ligar, instalar ou pagar.',
      requisitos: [
        'Reconheço o roteiro de pânico e urgência',
        'Sei que a Microsoft não avisa vírus por pop-up',
        'Sei que um site não detecta vírus no meu PC',
        'Minha reação é fechar, sem ligar/instalar/pagar',
        'Nunca instalo acesso remoto a pedido de estranhos',
      ],
      dica: 'Se cair num golpe desses e tiver dado acesso ou pago, aja rápido: desconecte da internet, troque as senhas importantes de outro aparelho e, se envolveu o banco, avise o banco imediatamente. Reconhecer o erro cedo limita o estrago.',
    },
    validacao: [
      'Reconheço o roteiro dos golpes de tela',
      'Sei que empresas sérias não avisam vírus assim',
      'Não ligo pra "suportes" de pop-up',
      'Não instalo acesso remoto a estranhos',
      'Fecho a tela sem entrar em pânico',
    ],
  },

  'pc-protege-7': {
    trilhaId: 'pc-protege', numero: 7, titulo: 'Privacidade: seus dados e a câmera',
    tempoTotal: 8, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Quanto o seu computador sabe sobre você — e com quem ele divide isso? Programas pedem acesso à câmera, ao microfone, à sua localização. Boa parte é desnecessária. Controlar essas permissões é cuidar da sua privacidade sem virar paranoico.',
      conceito: {
        titulo: 'Você decide o que cada programa pode acessar',
        texto: 'Programas e sites pedem PERMISSÕES: usar a câmera, o microfone, saber sua localização, ver seus arquivos. Nem todo pedido é legítimo — um app de bloco de notas não precisa da sua câmera. O Windows reúne isso em Configurações → Privacidade, onde você vê e revoga o que cada programa pode acessar. A regra é o "mínimo necessário": conceda só o que faz sentido pra função do programa. Um cuidado físico extra e simples: muitos cobrem a CÂMERA do notebook com um adesivo ou tampinha quando não a usam — uma proteção barata contra o acesso indevido à imagem.',
      },
      estrutura: {
        titulo: 'Controlando suas permissões',
        partes: [
          { simbolo: '📷', desc: 'Câmera e microfone: conceda só a quem realmente precisa.' },
          { simbolo: '📍', desc: 'Localização: a maioria dos programas não precisa dela.' },
          { simbolo: '⚙️', desc: 'Configurações → Privacidade: veja e revogue acessos.' },
          { simbolo: '🩹', desc: 'Tampinha na câmera: proteção física simples e barata.' },
        ],
      },
      exemplo: {
        titulo: 'Privacidade no controle',
        celulas: [
          { ref: 'App simples quer a câmera', valor: 'Não precisa: pode negar' },
          { ref: 'Tudo pede localização', valor: 'Conceda só ao que faz sentido (mapas)' },
          { ref: 'Quem acessa minha câmera?', valor: 'Privacidade → Câmera mostra a lista' },
          { ref: 'Câmera quando não uso', valor: 'Tampinha física resolve a dúvida' },
        ],
        formula: 'Mínimo necessário + revisar permissões = privacidade no seu controle',
        resultado: 'Só o essencial acessa seus dados, câmera e microfone.',
        comentario: 'A luz ao lado da câmera acende quando ela está em uso — fique atento a ela acendendo sozinha. E lembre: negar uma permissão não quebra o programa; se ele realmente precisar dela depois, vai pedir de novo, e aí você decide com contexto.',
      },
      vocabulario: [
        { palavra: 'Permissão', def: 'Autorização que um programa pede pra acessar algo (câmera, local).' },
        { palavra: 'Mínimo necessário', def: 'Conceder só o acesso que a função do programa exige.' },
        { palavra: 'Configurações de Privacidade', def: 'Onde o Windows reúne e controla as permissões.' },
      ],
      chave: [
        'Conceda permissões pelo "mínimo necessário"',
        'Configurações → Privacidade mostra e revoga acessos',
        'Tampar a câmera física é uma proteção simples e válida',
      ],
      porque: 'Suas câmera, microfone e localização são dados sensíveis. Controlar quais programas os acessam protege sua privacidade contra abusos — e você descobre que muito acesso concedido era, na verdade, desnecessário.',
    },
    pratica: {
      instrucao: 'Vamos revisar as permissões de privacidade do seu computador.',
      passos: [
        'Abra Configurações → Privacidade e segurança',
        'Entre em "Câmera" e veja a lista de programas com acesso',
        'Revogue o acesso de qualquer programa que não precisa da câmera',
        'Faça o mesmo em "Microfone" e "Localização"',
        'Considere uma tampinha física pra câmera do notebook',
      ],
    },
    desafio: {
      cenario: 'Assuma o controle da privacidade: revise quais programas têm acesso à sua câmera, microfone e localização, revogue os acessos desnecessários aplicando o "mínimo necessário" e avalie a proteção física da câmera.',
      requisitos: [
        'Abri as configurações de Privacidade',
        'Revisei o acesso à câmera',
        'Revisei microfone e localização',
        'Revoguei acessos desnecessários',
        'Avaliei tampar a câmera fisicamente',
      ],
      dica: 'Faça essa revisão de permissões de tempos em tempos, principalmente depois de instalar programas novos — eles costumam pedir mais acesso do que precisam. Manter a lista enxuta é um hábito simples de higiene digital.',
    },
    validacao: [
      'Entendo o que são permissões de acesso',
      'Aplico o princípio do mínimo necessário',
      'Reviso o acesso à câmera e microfone',
      'Controlo o acesso à minha localização',
      'Considero proteção física pra câmera',
    ],
  },

  'pc-protege-8': {
    trilhaId: 'pc-protege', numero: 8, titulo: 'O que fazer se já foi infectado ou invadido',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Aconteceu: o computador está estranho, apareceram coisas sozinhas, ou você percebeu que clicou no que não devia. Em vez de pânico, há um passo a passo que limita o estrago e devolve o controle. Saber reagir vale ouro no momento errado.',
      conceito: {
        titulo: 'Reagir rápido e na ordem certa limita o dano',
        texto: 'Se você suspeita de infecção ou invasão, aja com método. Primeiro, DESCONECTE DA INTERNET (corta a comunicação do vírus e do invasor). Depois, TROQUE AS SENHAS importantes — mas de OUTRO aparelho confiável (celular), pois o PC pode estar comprometido. Rode uma VERIFICAÇÃO COMPLETA com o antivírus do Windows. Se envolveu banco ou cartão, AVISE O BANCO imediatamente. E para casos graves, considere ajuda técnica de confiança. A ordem importa: desconectar primeiro impede que o estrago continue acontecendo enquanto você resolve o resto.',
      },
      estrutura: {
        titulo: 'O plano de resposta',
        partes: [
          { simbolo: '🔌', desc: 'Desconecte da internet: corta o vírus e o invasor.' },
          { simbolo: '📱', desc: 'Troque senhas de OUTRO aparelho confiável.' },
          { simbolo: '🔍', desc: 'Rode uma verificação completa com o antivírus.' },
          { simbolo: '🏦', desc: 'Envolveu banco/cartão? Avise o banco na hora.' },
        ],
      },
      exemplo: {
        titulo: 'Respondendo a um incidente',
        celulas: [
          { ref: 'PC agindo sozinho', valor: 'Desconecte da internet primeiro' },
          { ref: 'Trocar senhas', valor: 'Faça do celular, não do PC suspeito' },
          { ref: 'Limpar a ameaça', valor: 'Verificação completa do antivírus' },
          { ref: 'Mexeram no banco', valor: 'Ligue pro banco imediatamente' },
        ],
        formula: 'Desconectar → trocar senhas (outro aparelho) → verificar → avisar banco',
        resultado: 'O estrago é contido e você retoma o controle com método.',
        comentario: 'Trocar as senhas a partir do próprio computador infectado pode ser inútil: se houver um espião instalado, ele captura a senha nova na hora. Por isso a regra de usar outro aparelho confiável — geralmente o celular — pra refazer as senhas com segurança.',
      },
      vocabulario: [
        { palavra: 'Incidente', def: 'Um evento de segurança, como uma infecção ou invasão.' },
        { palavra: 'Verificação completa', def: 'Varredura profunda do antivírus em todo o computador.' },
        { palavra: 'Conter o dano', def: 'Agir pra impedir que o estrago continue se espalhando.' },
      ],
      chave: [
        'Aja com método: desconectar da internet vem primeiro',
        'Troque senhas de outro aparelho confiável',
        'Verifique com o antivírus e avise o banco se preciso',
      ],
      porque: 'Saber reagir a uma infecção transforma pânico em ação eficaz. A ordem certa — desconectar, trocar senhas seguras, verificar, avisar o banco — limita o estrago e recupera o controle no momento em que mais importa.',
    },
    pratica: {
      instrucao: 'Vamos montar seu plano de resposta a um incidente (pra ter pronto).',
      passos: [
        'Memorize o primeiro passo: desconectar o PC da internet',
        'Defina de qual aparelho você trocaria as senhas (seu celular)',
        'Saiba onde fica a "Verificação completa" na Segurança do Windows',
        'Tenha à mão o contato do seu banco pra emergências',
        'Anote a ordem dos passos pra não precisar pensar na hora do susto',
      ],
    },
    desafio: {
      cenario: 'Prepare seu plano de resposta: defina a ordem correta de reação a uma suspeita de infecção (desconectar, trocar senhas de outro aparelho, verificar com o antivírus, avisar o banco) e deixe os recursos necessários à mão.',
      requisitos: [
        'Sei que desconectar da internet é o primeiro passo',
        'Definí trocar senhas de outro aparelho confiável',
        'Sei onde rodar a verificação completa',
        'Tenho o contato do banco à mão',
        'Registrei a ordem dos passos do plano',
      ],
      dica: 'Em casos graves de invasão (especialmente com sequestro de arquivos ou perda de controle do PC), não tenha vergonha de buscar ajuda técnica de confiança. Mas desconfie de "técnicos" que aparecem sozinhos te oferecendo ajuda — procure você quem socorrer.',
    },
    validacao: [
      'Sei reagir com método a uma suspeita',
      'Desconecto da internet primeiro',
      'Troco senhas de outro aparelho',
      'Rodo a verificação completa do antivírus',
      'Aviso o banco quando necessário',
    ],
  },

  'pc-protege-9': {
    trilhaId: 'pc-protege', numero: 9, titulo: 'Projeto: blindagem completa do seu computador',
    tempoTotal: 16, xp: 110, vertente: 'computador',
    aula: {
      gancho: 'Chegou a hora de juntar tudo num escudo só. Cada cuidado que você aprendeu vira um item de um checklist de blindagem — e, ao completá-lo, seu computador fica protegido contra as ameaças que de fato acontecem no dia a dia. Vamos deixar sua máquina realmente segura.',
      conceito: {
        titulo: 'A segurança real vem das camadas somadas',
        texto: 'Nenhuma proteção sozinha resolve tudo — a segurança vem de CAMADAS que se somam. Seu checklist de blindagem reúne o essencial: antivírus ativo e atualizações em dia; senhas fortes, únicas e num gerenciador; downloads só de fontes oficiais; navegador com extensões revisadas; bloqueio de tela e senha de entrada; permissões de privacidade no mínimo necessário; backup funcionando; e — a camada mais importante — a sua atenção pra reconhecer golpes. Com essas camadas no lugar, você cobre praticamente todas as ameaças reais do dia a dia.',
      },
      estrutura: {
        titulo: 'As camadas da blindagem',
        partes: [
          { simbolo: '🛡️', desc: 'Base: antivírus ativo, atualizações e backup em dia.' },
          { simbolo: '🔑', desc: 'Acesso: senhas fortes no gerenciador, bloqueio de tela.' },
          { simbolo: '🌐', desc: 'Navegação: fontes oficiais, extensões revisadas, privacidade.' },
          { simbolo: '🧠', desc: 'A principal: sua atenção pra reconhecer golpes.' },
        ],
      },
      exemplo: {
        titulo: 'O escudo montado',
        celulas: [
          { ref: 'Proteção contínua', valor: 'Antivírus + atualização + backup' },
          { ref: 'Acesso trancado', valor: 'Senhas fortes + bloqueio de tela' },
          { ref: 'Navegação segura', valor: 'Fontes oficiais + privacidade no controle' },
          { ref: 'A camada decisiva', valor: 'Você desconfiando e não abrindo a porta' },
        ],
        formula: 'Camadas somadas + atenção constante = computador realmente seguro',
        resultado: 'Uma máquina blindada contra as ameaças reais do cotidiano.',
        comentario: 'Segurança não é um produto que se compra, é um conjunto de hábitos que se mantém. A boa notícia: depois de configurada, a maior parte dessa blindagem funciona sozinha — e a parte que depende de você (desconfiar) vira um instinto que protege em todas as situações.',
      },
      vocabulario: [
        { palavra: 'Camadas de segurança', def: 'Várias proteções somadas; se uma falha, as outras seguram.' },
        { palavra: 'Blindagem', def: 'O conjunto de cuidados que protege o computador como um todo.' },
        { palavra: 'Higiene digital', def: 'Hábitos regulares que mantêm a segurança no dia a dia.' },
      ],
      chave: [
        'Segurança vem de camadas somadas, não de uma só solução',
        'A maior parte da blindagem funciona sozinha após configurada',
        'Sua atenção é a camada mais importante de todas',
      ],
      porque: 'Reunir todos os cuidados num checklist garante que nada essencial fique de fora. Com as camadas no lugar e a atenção como hábito, você protege seu computador de forma completa e duradoura contra o que realmente acontece.',
    },
    pratica: {
      instrucao: 'Vamos executar o checklist de blindagem do seu computador.',
      passos: [
        'Confirme: antivírus ativo, Windows atualizado e backup funcionando',
        'Confirme: senha de entrada, bloqueio de tela e gerenciador de senhas em uso',
        'Revise: extensões do navegador e permissões de privacidade',
        'Relembre o hábito: desconfiar de downloads, links e golpes de tela',
        'Tenha pronto o plano de resposta caso algo dê errado',
        'Marque cada item como feito e anote o que ainda falta ajustar',
      ],
    },
    desafio: {
      cenario: 'Blinde o computador por completo: percorra o checklist (antivírus, atualizações, backup, senhas e bloqueio, navegador e privacidade, atenção a golpes, plano de resposta), confirme cada camada no lugar e registre o que ainda precisa ajustar.',
      requisitos: [
        'Confirmei antivírus, atualizações e backup ativos',
        'Confirmei senhas fortes e bloqueio de acesso',
        'Revisei navegador e permissões de privacidade',
        'Reforcei o hábito de desconfiar de golpes',
        'Registrei o que ainda falta ajustar',
      ],
      dica: 'Revisite este checklist a cada poucos meses — a segurança é um cuidado contínuo, não algo que se faz uma vez. E o melhor investimento continua sendo a sua atenção: ela é gratuita, está sempre com você e detém a maioria dos ataques antes mesmo de começarem.',
    },
    validacao: [
      'Tenho as proteções de base ativas',
      'Tranco o acesso ao computador',
      'Navego com segurança e privacidade',
      'Desconfio de golpes por hábito',
      'Mantenho a blindagem revisada com regularidade',
    ],
  },
};
