// ============================================================================
// CONTEÚDO — Configurações do Windows sem Medo (pc-config)
// Deixar o computador do SEU jeito: tela, som, idioma, hora, rede, contas,
// programas que abrem sozinhos, energia. Personalização e controle, sem quebrar.
// ============================================================================

export const PC_CONFIG = {
  'pc-config-1': {
    trilhaId: 'pc-config', numero: 1, titulo: 'O painel de Configurações: o cérebro do computador',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Existe um lugar no computador onde você ajusta quase tudo: o tamanho da letra, o volume, a internet, a hora. É o painel de Configurações. Muita gente tem medo de entrar ali achando que vai "quebrar algo" — mas é justamente onde você assume o controle da máquina.',
      conceito: {
        titulo: 'Configurações é onde você comanda o computador',
        texto: 'O painel de Configurações (no Windows, o ícone de engrenagem ⚙️) reúne todos os ajustes do computador, organizados por temas. SISTEMA cuida da tela, som e energia. DISPOSITIVOS lida com impressora, mouse e Bluetooth. REDE controla a internet. CONTAS gerencia quem usa o PC. HORA E IDIOMA ajusta o relógio e a língua. Você abre pelo menu Iniciar → engrenagem, ou apertando a tecla Windows + I. Mexer ali é seguro: a maioria dos ajustes é reversível, e o computador avisa antes de mudanças importantes.',
      },
      estrutura: {
        titulo: 'Como o painel se organiza',
        partes: [
          { simbolo: '⚙️', desc: 'Abrir: menu Iniciar → engrenagem, ou tecla Windows + I.' },
          { simbolo: '🖥️', desc: 'Sistema: tela, som, notificações, energia.' },
          { simbolo: '🌐', desc: 'Rede e Internet: Wi-Fi e conexões.' },
          { simbolo: '🔍', desc: 'Busca interna: digite o que procura e ache o ajuste.' },
        ],
      },
      exemplo: {
        titulo: 'Achando o ajuste certo',
        celulas: [
          { ref: 'Quero aumentar a letra', valor: 'Sistema → Tela' },
          { ref: 'Conectar no Wi-Fi', valor: 'Rede e Internet' },
          { ref: 'Mudar a hora errada', valor: 'Hora e Idioma' },
          { ref: 'Não sei onde fica', valor: 'Use a busca: digite a palavra' },
        ],
        formula: 'Windows + I → tema certo (ou busca) → ajuste',
        resultado: 'Você encontra e altera qualquer configuração com confiança.',
        comentario: 'Atalho de ouro: dentro de Configurações há uma barra de busca no topo. Não sabe onde fica o ajuste do brilho ou da impressora? Digite a palavra ali e o Windows te leva direto. Você nunca precisa decorar onde cada coisa mora.',
      },
      vocabulario: [
        { palavra: 'Configurações', def: 'Painel central onde se ajustam os recursos do computador.' },
        { palavra: 'Engrenagem (⚙️)', def: 'O ícone que representa as configurações no Windows.' },
        { palavra: 'Windows + I', def: 'Atalho de teclado que abre as Configurações na hora.' },
      ],
      chave: [
        'Configurações é o painel central de ajustes do PC',
        'Abre pelo Iniciar → engrenagem ou Windows + I',
        'Tem busca interna pra achar qualquer ajuste rápido',
      ],
      porque: 'Conhecer o painel de Configurações tira o medo e te dá poder sobre a máquina: tudo que você vai personalizar nas próximas missões parte daqui. Sem isso, você fica refém de pedir ajuda pra qualquer ajuste.',
    },
    pratica: {
      instrucao: 'Vamos abrir o painel de Configurações e explorar suas seções com calma.',
      passos: [
        'Aperte a tecla Windows + I (ou clique em Iniciar → engrenagem)',
        'Observe as seções: Sistema, Dispositivos, Rede, Contas, Hora e Idioma',
        'Clique em "Sistema" e veja os ajustes que aparecem dentro',
        'Volte e use a barra de busca no topo: digite "brilho"',
        'Veja como a busca te leva direto ao ajuste',
      ],
    },
    desafio: {
      cenario: 'Abra o painel de Configurações, identifique as seções principais (Sistema, Rede, Contas, Hora e Idioma) e use a busca interna pra encontrar um ajuste específico (ex.: "som" ou "impressora") sem navegar manualmente.',
      requisitos: [
        'Abri as Configurações (Windows + I ou engrenagem)',
        'Identifiquei as seções principais do painel',
        'Entrei numa seção e vi os ajustes dentro',
        'Usei a barra de busca interna',
        'Encontrei um ajuste específico pela busca',
      ],
      dica: 'No Windows há também o antigo "Painel de Controle", separado das "Configurações". Pra quase tudo do dia a dia, use as Configurações (mais moderno e simples). O Painel de Controle só é necessário em ajustes bem avançados.',
    },
    validacao: [
      'Abro as Configurações de duas formas',
      'Reconheço as seções principais',
      'Entro nas seções e vejo os ajustes',
      'Uso a busca interna pra achar ajustes',
      'Não tenho medo de explorar o painel',
    ],
  },

  'pc-config-2': {
    trilhaId: 'pc-config', numero: 2, titulo: 'Tela do seu jeito: letra maior, brilho e tema',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Letra pequena demais cansa os olhos. Tela clara demais à noite incomoda. O computador deixa você ajustar tudo isso pro SEU conforto — e ninguém precisa sofrer com uma tela que não combina com seus olhos.',
      conceito: {
        titulo: 'A tela se adapta a você, não o contrário',
        texto: 'Em Sistema → Tela você controla o conforto visual. O TAMANHO (escala) aumenta letras e ícones sem perder qualidade — ótimo pra quem força a vista. O BRILHO ajusta a luminosidade pro ambiente. O MODO ESCURO troca o fundo branco por escuro, descansando os olhos à noite e poupando bateria. E a LUZ NOTURNA reduz o tom azulado ao anoitecer, ajudando o sono. Todos são reversíveis: teste à vontade e deixe do jeito que seus olhos pedem.',
      },
      estrutura: {
        titulo: 'Os ajustes de tela',
        partes: [
          { simbolo: '🔎', desc: 'Escala/tamanho: aumenta letras e ícones (ex.: 100% → 125%).' },
          { simbolo: '☀️', desc: 'Brilho: claro pro dia, suave pra ambientes escuros.' },
          { simbolo: '🌙', desc: 'Modo escuro: fundo escuro, descansa os olhos à noite.' },
          { simbolo: '🟠', desc: 'Luz noturna: reduz o azul ao anoitecer, ajuda o sono.' },
        ],
      },
      exemplo: {
        titulo: 'Tela confortável',
        celulas: [
          { ref: 'Forço a vista pra ler', valor: 'Aumente a escala pra 125% ou 150%' },
          { ref: 'Uso o PC à noite', valor: 'Ative o modo escuro e a luz noturna' },
          { ref: 'Tela ofusca de dia', valor: 'Aumente o brilho' },
          { ref: 'Quero testar', valor: 'Tudo é reversível: experimente sem medo' },
        ],
        formula: 'Escala + brilho + modo escuro = tela no seu conforto',
        resultado: 'Uma tela que respeita seus olhos e seu ambiente.',
        comentario: 'O ajuste de "escala" é diferente da "resolução". A escala aumenta o tamanho de letras e ícones mantendo a nitidez — é o que você quer pra enxergar melhor. Evite baixar a resolução pra aumentar as letras: isso deixa tudo borrado.',
      },
      vocabulario: [
        { palavra: 'Escala', def: 'Ajuste que aumenta o tamanho de letras e ícones na tela.' },
        { palavra: 'Modo escuro', def: 'Tema com fundo escuro, mais confortável à noite.' },
        { palavra: 'Luz noturna', def: 'Recurso que reduz a luz azul da tela ao anoitecer.' },
      ],
      chave: [
        'A escala aumenta letras e ícones sem borrar',
        'Modo escuro e luz noturna descansam os olhos à noite',
        'Todos os ajustes de tela são reversíveis',
      ],
      porque: 'Uma tela confortável evita dor de cabeça, vista cansada e desconforto — especialmente pra quem usa o computador por muito tempo. Ajustar a tela ao seu corpo é cuidado com a saúde, não luxo.',
    },
    pratica: {
      instrucao: 'Vamos ajustar a tela pro seu conforto em Sistema → Tela.',
      passos: [
        'Abra Configurações → Sistema → Tela',
        'Localize "Escala" e teste aumentar pra 125% (veja as letras crescerem)',
        'Ajuste o controle de brilho e observe a diferença',
        'Procure "Modo escuro" (em Personalização → Cores) e ative pra ver',
        'Ative a "Luz noturna" e note o tom mais quente da tela',
      ],
    },
    desafio: {
      cenario: 'Personalize a tela pro seu conforto: ajuste a escala (tamanho de letras/ícones), regule o brilho e experimente o modo escuro e a luz noturna. Deixe a configuração final do jeito que seus olhos preferem.',
      requisitos: [
        'Ajustei a escala (tamanho de letras e ícones)',
        'Regulei o brilho da tela',
        'Experimentei o modo escuro',
        'Ativei a luz noturna',
        'Deixei a tela no conforto que prefiro',
      ],
      dica: 'Tem mais de um monitor? Cada um pode ter sua própria escala e brilho. E você pode agendar a luz noturna pra ligar e desligar sozinha no horário do pôr e nascer do sol — assim seus olhos ficam protegidos sem você precisar lembrar.',
    },
    validacao: [
      'Aumento a letra pela escala',
      'Regulo o brilho conforme o ambiente',
      'Ativo o modo escuro quando quero',
      'Uso a luz noturna à noite',
      'Deixo a tela no meu conforto',
    ],
  },

  'pc-config-3': {
    trilhaId: 'pc-config', numero: 3, titulo: 'Som, volume e dispositivos de áudio',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Você coloca o fone e o som continua saindo pela caixa. Ou a pessoa não te ouve na chamada. Problemas de som assustam, mas quase sempre são só uma escolha errada de dispositivo — e você resolve em segundos sabendo onde olhar.',
      conceito: {
        titulo: 'O computador escolhe por onde o som entra e sai',
        texto: 'O computador pode ter vários caminhos de áudio: alto-falante interno, fones, caixa de som, fone Bluetooth. Em Sistema → Som você define a SAÍDA (por onde o som toca) e a ENTRADA (qual microfone capta sua voz). O erro mais comum é o som tocar no lugar errado porque a saída selecionada não é a que você está usando. O VOLUME geral fica na barra de tarefas (o ícone de alto-falante 🔊), e dá pra ajustar o volume de cada programa separadamente no "Mixer de volume".',
      },
      estrutura: {
        titulo: 'O caminho do som',
        partes: [
          { simbolo: '🔊', desc: 'Saída: por onde o som toca (alto-falante, fone, Bluetooth).' },
          { simbolo: '🎤', desc: 'Entrada: qual microfone capta sua voz.' },
          { simbolo: '🎚️', desc: 'Volume geral: ícone do alto-falante na barra de tarefas.' },
          { simbolo: '📊', desc: 'Mixer: ajusta o volume de cada programa separado.' },
        ],
      },
      exemplo: {
        titulo: 'Resolvendo o som',
        celulas: [
          { ref: 'Som sai na caixa, não no fone', valor: 'Mude a "saída" pro fone' },
          { ref: 'Não me ouvem na chamada', valor: 'Confira a "entrada" (microfone)' },
          { ref: 'Um programa muito alto', valor: 'Ajuste no Mixer de volume' },
          { ref: 'Mudo total', valor: 'Cheque se o volume não está no zero/mudo' },
        ],
        formula: 'Saída certa + entrada certa + volume = som funcionando',
        resultado: 'Você ouve e é ouvido pelo dispositivo certo.',
        comentario: 'Antes de achar que o fone "quebrou", confira a SAÍDA de áudio. Em 9 de 10 casos, o som está tocando perfeitamente — só que no alto-falante errado, porque o Windows não trocou automaticamente quando você plugou o fone.',
      },
      vocabulario: [
        { palavra: 'Saída de áudio', def: 'O dispositivo por onde o som do computador toca.' },
        { palavra: 'Entrada de áudio', def: 'O microfone que capta a sua voz.' },
        { palavra: 'Mixer de volume', def: 'Painel que ajusta o volume de cada programa separadamente.' },
      ],
      chave: [
        'Defina a saída certa (fone, caixa, Bluetooth)',
        'Confira a entrada (microfone) pra ser ouvido',
        'O Mixer ajusta o volume de cada programa',
      ],
      porque: 'Som é essencial pra chamadas, vídeos e música. Saber escolher a saída e a entrada certas resolve os problemas mais frustrantes na hora — e te dá segurança em reuniões e videochamadas.',
    },
    pratica: {
      instrucao: 'Vamos explorar os ajustes de som em Sistema → Som.',
      passos: [
        'Abra Configurações → Sistema → Som',
        'Veja a "Saída" e quais dispositivos estão disponíveis',
        'Se tiver fone, plugue-o e veja se a saída muda',
        'Veja a "Entrada" e qual microfone está selecionado',
        'Clique no ícone de som na barra de tarefas e ajuste o volume geral',
      ],
    },
    desafio: {
      cenario: 'Gerencie o áudio do computador: identifique e troque a saída de som entre os dispositivos disponíveis, confira qual microfone está como entrada e ajuste o volume geral. Saiba o que fazer quando o som "some".',
      requisitos: [
        'Encontrei a configuração de saída de som',
        'Sei trocar entre os dispositivos de saída disponíveis',
        'Localizei a entrada (microfone) selecionada',
        'Ajustei o volume geral pela barra de tarefas',
        'Sei diagnosticar quando o som está na saída errada',
      ],
      dica: 'Fone Bluetooth não conecta o som? Verifique se ele está pareado E selecionado como saída — são duas coisas diferentes. Às vezes ele aparece conectado mas o áudio continua no alto-falante até você escolhê-lo como saída manualmente.',
    },
    validacao: [
      'Escolho a saída de som correta',
      'Confiro o microfone de entrada',
      'Ajusto o volume geral e por programa',
      'Resolvo som tocando no lugar errado',
      'Tenho segurança com áudio em chamadas',
    ],
  },

  'pc-config-4': {
    trilhaId: 'pc-config', numero: 4, titulo: 'Hora, data e idioma certos',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'A hora do computador está errada e isso bagunça tudo: e-mails com horário trocado, sites que não abrem, alarmes no momento errado. Acertar a hora, a data e o idioma é simples — e evita uma surpreendente lista de problemas.',
      conceito: {
        titulo: 'Hora certa é mais importante do que parece',
        texto: 'Em Hora e Idioma você acerta o relógio e a língua do sistema. O ideal é deixar a hora AUTOMÁTICA (o computador sincroniza com a internet e nunca erra) e o FUSO HORÁRIO correto (Brasília, por exemplo). Hora errada causa problemas reais: sites seguros recusam conexão, e-mails ficam fora de ordem. O IDIOMA define a língua dos menus, e o TECLADO define como as teclas se comportam (o ABNT2 brasileiro tem o ç e os acentos no lugar certo). Acertar isso deixa o computador coerente com a sua realidade.',
      },
      estrutura: {
        titulo: 'O que acertar',
        partes: [
          { simbolo: '🕐', desc: 'Hora automática: o PC sincroniza pela internet e não erra.' },
          { simbolo: '🌎', desc: 'Fuso horário: o seu (ex.: Brasília) pra hora bater.' },
          { simbolo: '🗣️', desc: 'Idioma: a língua dos menus do sistema.' },
          { simbolo: '⌨️', desc: 'Teclado ABNT2: ç e acentos no lugar certo (Brasil).' },
        ],
      },
      exemplo: {
        titulo: 'Acertando o relógio e a língua',
        celulas: [
          { ref: 'Hora sempre erra', valor: 'Ative "Definir hora automaticamente"' },
          { ref: 'Hora certa, fuso errado', valor: 'Ajuste o fuso pra Brasília' },
          { ref: 'Menus em inglês', valor: 'Mude o idioma pra Português (Brasil)' },
          { ref: 'Não sai o ç', valor: 'Teclado: Português (Brasil ABNT2)' },
        ],
        formula: 'Hora automática + fuso + idioma + teclado certos = PC coerente',
        resultado: 'O computador mostra a hora certa e fala a sua língua.',
        comentario: 'Se a hora vive errada mesmo com a opção automática ligada, pode ser a pilha da placa-mãe (uma bateria interna) que está fraca. É barata e fácil de trocar — vale o conserto, pois a hora errada atrapalha muita coisa no dia a dia.',
      },
      vocabulario: [
        { palavra: 'Fuso horário', def: 'A faixa de hora da sua região (ex.: Brasília, GMT-3).' },
        { palavra: 'Hora automática', def: 'O computador acerta a hora sozinho pela internet.' },
        { palavra: 'ABNT2', def: 'O padrão de teclado brasileiro, com ç e acentos no lugar.' },
      ],
      chave: [
        'Deixe a hora automática e o fuso correto',
        'Hora errada causa problemas em sites e e-mails',
        'Idioma e teclado ABNT2 deixam o PC na sua língua',
      ],
      porque: 'Hora e idioma corretos evitam falhas chatas e confusões. É um ajuste rápido que deixa o computador alinhado à sua vida — e previne dores de cabeça que parecem misteriosas mas têm causa simples.',
    },
    pratica: {
      instrucao: 'Vamos conferir e acertar hora, fuso e idioma em Hora e Idioma.',
      passos: [
        'Abra Configurações → Hora e Idioma → Data e Hora',
        'Confira se "Definir hora automaticamente" está ligado',
        'Verifique se o fuso horário é o seu (ex.: Brasília)',
        'Vá em "Idioma e região" e confira se é Português (Brasil)',
        'Veja em "Digitação"/teclado se o layout é ABNT2',
      ],
    },
    desafio: {
      cenario: 'Garanta que o computador está com hora, fuso, idioma e teclado corretos: confirme a hora automática, o fuso de Brasília, o idioma Português (Brasil) e o teclado ABNT2. Saiba o impacto de cada um estar errado.',
      requisitos: [
        'Confirmei que a hora está automática',
        'Verifiquei o fuso horário correto',
        'Confirmei o idioma Português (Brasil)',
        'Verifiquei o teclado ABNT2',
        'Sei os problemas que a hora errada causa',
      ],
      dica: 'Viajou pra outro fuso ou comprou um PC importado? Só ajustar o fuso horário já acerta a hora toda — você não precisa mexer no relógio manualmente. Deixe sempre na opção automática e troque apenas o fuso quando necessário.',
    },
    validacao: [
      'Deixo a hora em modo automático',
      'Acerto o fuso horário correto',
      'Configuro o idioma do sistema',
      'Uso o teclado ABNT2 (ç e acentos)',
      'Entendo o impacto da hora errada',
    ],
  },

  'pc-config-5': {
    trilhaId: 'pc-config', numero: 5, titulo: 'Personalizar a área de trabalho e a barra de tarefas',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'A área de trabalho é a sua mesa digital. Dá pra trocar o papel de parede, organizar os atalhos e deixar a barra de tarefas com o que você mais usa à mão. Um computador personalizado é mais agradável de usar — e mais seu.',
      conceito: {
        titulo: 'Deixe o computador com a sua cara',
        texto: 'A PERSONALIZAÇÃO deixa o computador agradável e prático. O PAPEL DE PAREDE (plano de fundo) é a imagem da área de trabalho — pode ser uma foto sua. A BARRA DE TAREFAS (a faixa embaixo) pode ter fixados os programas que você mais usa, pra abrir com um clique. Você "fixa" um programa clicando nele com o botão direito → "Fixar na barra de tarefas". E os ATALHOS na área de trabalho dão acesso rápido a pastas e programas. Organizar tudo isso economiza tempo todos os dias.',
      },
      estrutura: {
        titulo: 'O que personalizar',
        partes: [
          { simbolo: '🖼️', desc: 'Papel de parede: a imagem de fundo (pode ser sua foto).' },
          { simbolo: '📌', desc: 'Fixar na barra: programas favoritos a um clique.' },
          { simbolo: '🔗', desc: 'Atalhos: acesso rápido a pastas e programas na área de trabalho.' },
          { simbolo: '🎨', desc: 'Cores e tema: a aparência geral do sistema.' },
        ],
      },
      exemplo: {
        titulo: 'Computador prático e pessoal',
        celulas: [
          { ref: 'Quero uma foto de fundo', valor: 'Personalização → Plano de fundo' },
          { ref: 'Abrir o navegador rápido', valor: 'Botão direito → Fixar na barra de tarefas' },
          { ref: 'Pasta que uso muito', valor: 'Crie um atalho na área de trabalho' },
          { ref: 'Mudar as cores', valor: 'Personalização → Cores' },
        ],
        formula: 'Fundo + barra fixada + atalhos = mesa digital sua e prática',
        resultado: 'Um computador organizado, bonito e rápido de usar.',
        comentario: 'Cuidado pra não lotar a área de trabalho de ícones — vira bagunça e deixa o PC mais lento pra carregar. Fixe na barra de tarefas os programas do dia a dia e deixe a área de trabalho limpa, só com o essencial à vista.',
      },
      vocabulario: [
        { palavra: 'Papel de parede', def: 'A imagem de fundo da área de trabalho.' },
        { palavra: 'Fixar', def: 'Deixar um programa permanente na barra de tarefas.' },
        { palavra: 'Atalho', def: 'Um ícone que abre rápido uma pasta ou programa.' },
      ],
      chave: [
        'Troque o papel de parede em Personalização',
        'Fixe na barra os programas que mais usa',
        'Mantenha a área de trabalho limpa e organizada',
      ],
      porque: 'Um computador personalizado é mais agradável e eficiente: você acha as coisas rápido e se sente dono da máquina. Pequenos ajustes de organização poupam cliques e tempo todos os dias.',
    },
    pratica: {
      instrucao: 'Vamos personalizar a área de trabalho e a barra de tarefas.',
      passos: [
        'Clique com o botão direito na área de trabalho → "Personalizar"',
        'Em "Plano de fundo", escolha uma imagem nova',
        'Abra um programa, clique nele na barra com o botão direito → "Fixar na barra de tarefas"',
        'Feche o programa e veja que o ícone continua fixado',
        'Explore "Cores" e veja como mudar a aparência do sistema',
      ],
    },
    desafio: {
      cenario: 'Personalize seu ambiente: troque o papel de parede, fixe pelo menos dois programas favoritos na barra de tarefas e organize os atalhos da área de trabalho, mantendo-a limpa.',
      requisitos: [
        'Troquei o papel de parede',
        'Fixei programas favoritos na barra de tarefas',
        'Sei criar e organizar atalhos na área de trabalho',
        'Mantive a área de trabalho limpa',
        'Explorei as opções de cores/tema',
      ],
      dica: 'Quer um atalho de uma pasta na área de trabalho? Clique nela com o botão direito → "Enviar para" → "Área de trabalho (criar atalho)". O atalho (com uma setinha no ícone) abre a pasta sem mover o original do lugar.',
    },
    validacao: [
      'Troco o papel de parede',
      'Fixo programas na barra de tarefas',
      'Crio atalhos pras pastas que uso',
      'Mantenho a área de trabalho organizada',
      'Personalizo cores e aparência',
    ],
  },

  'pc-config-6': {
    trilhaId: 'pc-config', numero: 6, titulo: 'Programas que abrem sozinhos (inicialização)',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'O computador liga e demora uma eternidade até ficar usável. O culpado costuma ser uma fila de programas que abrem sozinhos junto com o Windows — muitos deles que você nem usa. Desligar esses "penetras" deixa o PC mais rápido na hora.',
      conceito: {
        titulo: 'Nem todo programa precisa abrir junto com o computador',
        texto: 'Muitos programas se instalam configurados pra abrir automaticamente quando o Windows liga — é a INICIALIZAÇÃO (startup). Alguns são úteis (antivírus), mas muitos são desnecessários e só deixam o computador lento ao ligar e consomem memória o tempo todo. Você controla isso no Gerenciador de Tarefas, aba "Inicializar", onde vê cada programa e seu IMPACTO (alto, médio, baixo) e pode DESATIVAR os que não precisa abrir sozinhos. Desativar não desinstala — o programa continua lá pra abrir quando você quiser.',
      },
      estrutura: {
        titulo: 'Controlando a inicialização',
        partes: [
          { simbolo: '⏱️', desc: 'Inicialização: programas que abrem junto com o Windows.' },
          { simbolo: '📊', desc: 'Impacto: quanto cada um pesa ao ligar (alto/médio/baixo).' },
          { simbolo: '🔕', desc: 'Desativar: tira da inicialização sem desinstalar.' },
          { simbolo: '⚡', desc: 'Resultado: PC liga mais rápido e fica mais leve.' },
        ],
      },
      exemplo: {
        titulo: 'Acelerando a inicialização',
        celulas: [
          { ref: 'PC demora demais pra ligar', valor: 'Desative programas de inicialização' },
          { ref: 'App de impressora abre sozinho', valor: 'Impacto baixo, pode desativar' },
          { ref: 'Antivírus na inicialização', valor: 'Manter ativo (é proteção)' },
          { ref: 'Desativei errado', valor: 'É reversível: reative quando quiser' },
        ],
        formula: 'Menos penetras na inicialização = PC liga mais rápido',
        resultado: 'O computador inicia mais rápido e fica mais responsivo.',
        comentario: 'Na dúvida sobre desativar algo, olhe o nome do programa: se você o reconhece e não precisa dele aberto o tempo todo (ex.: app de uma impressora, atualizador de algum software), pode desativar com segurança. Antivírus e segurança, deixe ligados.',
      },
      vocabulario: [
        { palavra: 'Inicialização (startup)', def: 'Programas que abrem automaticamente ao ligar o computador.' },
        { palavra: 'Gerenciador de Tarefas', def: 'Ferramenta que mostra e controla programas e processos.' },
        { palavra: 'Impacto', def: 'O quanto um programa pesa no tempo de ligar o PC.' },
      ],
      chave: [
        'Muitos programas abrem sozinhos e deixam o PC lento',
        'Controle isso no Gerenciador → aba Inicializar',
        'Desativar não desinstala; é reversível',
      ],
      porque: 'Um computador que demora pra ligar frustra e perde tempo. Controlar a inicialização é uma das formas mais eficazes de deixá-lo rápido de novo — sem instalar nada, só desligando o que não precisa.',
    },
    pratica: {
      instrucao: 'Vamos ver quais programas abrem sozinhos no seu computador.',
      passos: [
        'Aperte Ctrl+Shift+Esc pra abrir o Gerenciador de Tarefas',
        'Clique na aba "Aplicativos de inicialização" (ou "Inicializar")',
        'Observe a lista de programas e a coluna "Impacto na inicialização"',
        'Identifique algum programa que você reconhece e não precisa abrir sozinho',
        'Para desativar: clique nele e em "Desabilitar" (não desinstala)',
      ],
    },
    desafio: {
      cenario: 'Otimize a inicialização: abra o Gerenciador de Tarefas, analise os programas que abrem com o Windows e seus impactos, e desative pelo menos um programa desnecessário (mantendo segurança e antivírus ativos).',
      requisitos: [
        'Abri o Gerenciador de Tarefas (Ctrl+Shift+Esc)',
        'Encontrei a lista de programas de inicialização',
        'Identifiquei o impacto de cada um',
        'Desativei um programa desnecessário',
        'Mantive antivírus e segurança ativos',
      ],
      dica: 'Faça uma mudança de cada vez e reinicie pra notar a diferença. Se algo parar de funcionar como esperado, é só reativar o programa na mesma tela. Como nada é desinstalado, você pode experimentar com tranquilidade.',
    },
    validacao: [
      'Abro o Gerenciador de Tarefas',
      'Vejo os programas de inicialização',
      'Entendo a coluna de impacto',
      'Desativo penetras sem desinstalar',
      'Mantenho a segurança sempre ativa',
    ],
  },

  'pc-config-7': {
    trilhaId: 'pc-config', numero: 7, titulo: 'Energia: bateria, suspensão e desligar certo',
    tempoTotal: 8, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'O notebook descarrega rápido demais. Ou a tela apaga no meio de um vídeo. Ou você não sabe se deve desligar ou só fechar a tampa. Os ajustes de energia resolvem tudo isso — e ainda fazem a bateria durar mais.',
      conceito: {
        titulo: 'Gerenciar energia faz a bateria render e protege o PC',
        texto: 'Em Sistema → Energia você controla como o computador usa energia. A SUSPENSÃO (sleep) coloca o PC pra "dormir" economizando bateria, e ele acorda rápido de onde parou — ótimo pra pausas curtas. Você define em quanto tempo a tela apaga e o PC suspende. O MODO DE ENERGIA equilibra desempenho e economia (mais economia = bateria dura mais). E há a diferença importante: SUSPENDER guarda tudo na memória (volta rápido), enquanto DESLIGAR fecha tudo de verdade (use ao fim do dia ou pra reiniciar de fato).',
      },
      estrutura: {
        titulo: 'Os estados de energia',
        partes: [
          { simbolo: '😴', desc: 'Suspender: PC "dorme", acorda rápido. Pra pausas curtas.' },
          { simbolo: '🔌', desc: 'Modo de energia: equilíbrio entre desempenho e economia.' },
          { simbolo: '🖥️', desc: 'Tempo de tela: em quanto tempo a tela apaga sozinha.' },
          { simbolo: '⏻', desc: 'Desligar: fecha tudo de verdade. Pro fim do dia.' },
        ],
      },
      exemplo: {
        titulo: 'Energia bem gerenciada',
        celulas: [
          { ref: 'Pausa de 10 minutos', valor: 'Suspender (volta rápido, poupa bateria)' },
          { ref: 'Bateria acaba rápido', valor: 'Modo de energia → "Economia"' },
          { ref: 'Tela apaga vendo vídeo', valor: 'Aumente o tempo de tela apagar' },
          { ref: 'Fim do expediente', valor: 'Desligar de verdade' },
        ],
        formula: 'Suspender (pausas) + economia + desligar (fim) = bateria e PC saudáveis',
        resultado: 'Bateria que rende e um computador desligado corretamente.',
        comentario: 'Reiniciar de vez em quando faz bem ao computador: limpa a memória e aplica atualizações pendentes. Se o PC está lento ou estranho, um "Desligar e ligar" (ou Reiniciar) de verdade resolve muito mais que ficar só suspendendo dia após dia.',
      },
      vocabulario: [
        { palavra: 'Suspender (sleep)', def: 'Estado de baixa energia em que o PC "dorme" e acorda rápido.' },
        { palavra: 'Modo de energia', def: 'Ajuste que equilibra desempenho e economia de bateria.' },
        { palavra: 'Desligar', def: 'Encerrar o computador de verdade, fechando tudo.' },
      ],
      chave: [
        'Suspender é pra pausas curtas (acorda rápido)',
        'O modo "economia" faz a bateria render mais',
        'Desligar/reiniciar de verdade faz bem ao PC',
      ],
      porque: 'Gerenciar energia faz a bateria do notebook durar mais ao longo do dia e da vida útil, evita perder trabalho e mantém o computador saudável. São ajustes simples com impacto real no bolso e na praticidade.',
    },
    pratica: {
      instrucao: 'Vamos explorar os ajustes de energia em Sistema → Energia.',
      passos: [
        'Abra Configurações → Sistema → Energia (e bateria, no notebook)',
        'Veja o "Modo de energia" e as opções de economia/desempenho',
        'Ajuste em quanto tempo a tela apaga e o PC suspende',
        'No menu Iniciar → botão de energia, observe as opções Suspender, Desligar, Reiniciar',
        'Entenda quando usar cada uma (pausa curta x fim do dia)',
      ],
    },
    desafio: {
      cenario: 'Configure a energia do computador: ajuste o tempo pra tela apagar e suspender, escolha um modo de energia adequado e saiba diferenciar quando suspender, desligar ou reiniciar. Em notebook, configure pra economizar bateria.',
      requisitos: [
        'Ajustei o tempo de tela apagar e suspender',
        'Escolhi um modo de energia adequado',
        'Sei a diferença entre suspender e desligar',
        'Sei quando reiniciar o computador',
        'Configurei pra a bateria render mais (notebook)',
      ],
      dica: 'No notebook, evite deixar a bateria sempre em 100% plugado o tempo todo nem deixá-la zerar com frequência — ambos a desgastam. Manter o uso entre 20% e 80% prolonga bastante a vida útil da bateria.',
    },
    validacao: [
      'Ajusto os tempos de tela e suspensão',
      'Escolho o modo de energia certo',
      'Suspendo pra pausas curtas',
      'Desligo/reinicio de verdade quando preciso',
      'Cuido da saúde da bateria',
    ],
  },

  'pc-config-8': {
    trilhaId: 'pc-config', numero: 8, titulo: 'Contas de usuário e a conta do administrador',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Um computador pode ser usado por várias pessoas, cada uma com seu espaço e suas coisas. E existe uma conta especial — a do administrador — que tem poder pra mudar o sistema. Entender isso protege seus arquivos e evita confusões.',
      conceito: {
        titulo: 'Cada pessoa tem sua conta; o administrador tem o poder',
        texto: 'O Windows permite várias CONTAS DE USUÁRIO no mesmo computador. Cada conta tem sua própria área de trabalho, seus arquivos e configurações — o que uma pessoa faz não bagunça a da outra. Há dois tipos: o ADMINISTRADOR pode instalar programas e mudar o sistema todo; o usuário PADRÃO usa normalmente, mas precisa de permissão do administrador pra mudanças importantes. Isso é segurança: usar o dia a dia numa conta padrão evita que vírus ou cliques errados alterem o sistema sem você perceber.',
      },
      estrutura: {
        titulo: 'Tipos e cuidados de conta',
        partes: [
          { simbolo: '👤', desc: 'Conta padrão: uso normal, com proteção contra mudanças no sistema.' },
          { simbolo: '👑', desc: 'Administrador: pode instalar e mudar tudo. Use com cuidado.' },
          { simbolo: '🗂️', desc: 'Espaços separados: cada conta tem seus arquivos e ajustes.' },
          { simbolo: '🔐', desc: 'Senha/PIN: protege cada conta de quem não deve acessar.' },
        ],
      },
      exemplo: {
        titulo: 'Contas bem usadas',
        celulas: [
          { ref: 'Vários usam o mesmo PC', valor: 'Uma conta pra cada pessoa' },
          { ref: 'Instalar um programa', valor: 'Precisa de permissão de administrador' },
          { ref: 'Pede senha de administrador', valor: 'É proteção: confirme se você autorizou' },
          { ref: 'Proteger sua conta', valor: 'Defina uma senha ou PIN' },
        ],
        formula: 'Conta própria + tipo certo + senha = privacidade e segurança',
        resultado: 'Cada pessoa com seu espaço protegido e o sistema seguro.',
        comentario: 'Quando o computador pede a "senha de administrador" pra instalar algo, é uma proteção: ele está perguntando "você realmente autoriza essa mudança?". Se a janela apareceu sem você ter clicado em instalar nada, desconfie e recuse — pode ser algo indesejado.',
      },
      vocabulario: [
        { palavra: 'Conta de usuário', def: 'O espaço pessoal de cada pessoa no computador.' },
        { palavra: 'Administrador', def: 'Conta com poder pra instalar programas e mudar o sistema.' },
        { palavra: 'Conta padrão', def: 'Conta de uso comum, protegida contra mudanças no sistema.' },
      ],
      chave: [
        'Cada pessoa pode ter sua conta com espaço próprio',
        'O administrador pode mudar o sistema; o padrão não',
        'O pedido de senha de administrador é uma proteção',
      ],
      porque: 'Entender as contas protege seus arquivos da bagunça alheia e o sistema de mudanças indevidas. Saber o que significa o pedido de senha do administrador é uma defesa importante contra instalações indesejadas e golpes.',
    },
    pratica: {
      instrucao: 'Vamos ver as contas do computador em Contas (sem necessariamente criar uma nova).',
      passos: [
        'Abra Configurações → Contas',
        'Veja sua conta e se ela é Administrador ou Padrão',
        'Explore "Família e outros usuários" pra ver onde se adicionam contas',
        'Veja em "Opções de entrada" como se define senha ou PIN',
        'Observe quando o sistema pede confirmação de administrador (ao instalar algo)',
      ],
    },
    desafio: {
      cenario: 'Entenda a gestão de contas: identifique se sua conta é administrador ou padrão, saiba onde se adicionam novas contas pra outras pessoas e reconheça o significado do pedido de senha de administrador como proteção do sistema.',
      requisitos: [
        'Identifiquei o tipo da minha conta (admin ou padrão)',
        'Sei onde se adicionam novas contas de usuário',
        'Entendo a separação de arquivos entre contas',
        'Sei definir senha ou PIN pra proteger a conta',
        'Reconheço o pedido de senha de administrador como proteção',
      ],
      dica: 'Para o uso do dia a dia, muitos especialistas recomendam usar uma conta padrão (não administrador). Assim, se algo malicioso tentar mudar o sistema, vai esbarrar no pedido de senha — uma camada extra de segurança quase invisível no dia a dia.',
    },
    validacao: [
      'Sei o tipo da minha conta',
      'Entendo administrador x padrão',
      'Sei onde criar contas pra outras pessoas',
      'Protejo minha conta com senha/PIN',
      'Reconheço o pedido de admin como proteção',
    ],
  },

  'pc-config-9': {
    trilhaId: 'pc-config', numero: 9, titulo: 'Projeto: configure um computador do zero pra você',
    tempoTotal: 16, xp: 110, vertente: 'computador',
    aula: {
      gancho: 'Imagine que você acabou de ganhar (ou formatar) um computador e ele está com tudo no padrão. Hora de deixá-lo perfeito pra você: tela confortável, hora certa, som funcionando, inicialização leve e personalizado. É o que você faria de verdade — e agora sabe fazer sozinho.',
      conceito: {
        titulo: 'O ritual de configurar um computador novo',
        texto: 'Quando um computador é novo ou recém-formatado, há uma sequência inteligente de ajustes que o deixam pronto pro seu uso. Você confirma HORA E IDIOMA, ajusta a TELA pro seu conforto, testa o SOM, personaliza a ÁREA DE TRABALHO, limpa a INICIALIZAÇÃO de penetras e configura a ENERGIA. Esse "ritual" une tudo que você aprendeu nesta trilha e transforma uma máquina genérica num computador que é a sua cara — confortável, rápido e coerente com a sua realidade.',
      },
      estrutura: {
        titulo: 'A sequência de configuração',
        partes: [
          { simbolo: '🕐', desc: 'Hora, fuso e idioma corretos.' },
          { simbolo: '🖥️', desc: 'Tela: escala, brilho e modo confortável.' },
          { simbolo: '🔊', desc: 'Som: saída e entrada testadas e funcionando.' },
          { simbolo: '🎨', desc: 'Personalização, inicialização leve e energia ajustada.' },
        ],
      },
      exemplo: {
        titulo: 'Configurando do zero',
        celulas: [
          { ref: 'Primeiro passo', valor: 'Hora automática, fuso e idioma certos' },
          { ref: 'Conforto visual', valor: 'Escala maior, brilho e luz noturna' },
          { ref: 'Testar áudio', valor: 'Confirmar saída e microfone' },
          { ref: 'Deixar leve', valor: 'Limpar inicialização e ajustar energia' },
        ],
        formula: 'Hora + tela + som + personalização + inicialização + energia = PC pronto',
        resultado: 'Um computador totalmente configurado pro seu uso.',
        comentario: 'Anote em algum lugar (ou guarde na nuvem) as configurações que você prefere. Assim, se um dia precisar formatar ou configurar outro PC, você repete o ritual rapidinho, sem ter que redescobrir tudo de novo.',
      },
      vocabulario: [
        { palavra: 'Formatar', def: 'Reinstalar o sistema, deixando o computador "do zero".' },
        { palavra: 'Ritual de configuração', def: 'A sequência de ajustes pra deixar um PC pronto pra uso.' },
        { palavra: 'Padrão de fábrica', def: 'As configurações originais com que o computador vem.' },
      ],
      chave: [
        'Há uma sequência lógica pra configurar um PC novo',
        'Hora, tela, som, personalização, inicialização e energia',
        'Anote suas preferências pra repetir o ritual quando precisar',
      ],
      porque: 'Saber configurar um computador do zero te torna totalmente independente: você prepara qualquer máquina pro seu uso, ajuda outras pessoas e nunca mais depende de terceiros pra deixar um PC do jeito certo.',
    },
    pratica: {
      instrucao: 'Faça o ritual completo no seu computador (ou simule cada etapa, conferindo cada ajuste).',
      passos: [
        'Confira hora automática, fuso e idioma corretos',
        'Ajuste a tela: escala, brilho e modo escuro/luz noturna conforme prefere',
        'Teste o som: confirme a saída e o microfone funcionando',
        'Personalize: papel de parede e programas fixados na barra',
        'Limpe a inicialização de programas desnecessários',
        'Ajuste a energia: suspensão, modo e saúde da bateria',
      ],
    },
    desafio: {
      cenario: 'Execute o ritual completo de configuração: hora/idioma, tela confortável, som testado, área de trabalho personalizada, inicialização limpa e energia ajustada. Deixe o computador inteiramente pronto pro seu uso pessoal.',
      requisitos: [
        'Confirmei hora, fuso e idioma corretos',
        'Ajustei a tela pro meu conforto',
        'Testei e configurei o som',
        'Personalizei a área de trabalho e a barra',
        'Limpei a inicialização e ajustei a energia',
      ],
      dica: 'Esse mesmo ritual serve pra ajudar familiares e amigos a configurar os computadores deles. Você acabou de ganhar uma habilidade prática e generosa — e que muita gente paga pra ter feita.',
    },
    validacao: [
      'Configuro hora, fuso e idioma',
      'Deixo a tela no meu conforto',
      'Testo e ajusto o som',
      'Personalizo a área de trabalho',
      'Domino o ritual completo de configuração',
    ],
  },
};
