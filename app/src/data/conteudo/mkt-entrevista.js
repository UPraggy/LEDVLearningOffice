// ============================================================================
// CONTEÚDO — Entrevista de Emprego (mkt-entrevista). A entrevista como conversa,
// pesquisar a empresa antes, responder "fale sobre você", as perguntas mais
// comuns, falar de pontos fortes e fracos, o método STAR para perguntas
// comportamentais, a entrevista por vídeo, e um projeto de simulação completa.
// Foco em preparar quem volta ao mercado ou busca recolocação, com confiança.
// ============================================================================

export const MKT_ENTREVISTA = {
  'mkt-entrevista-1': {
    trilhaId: 'mkt-entrevista', numero: 1, titulo: 'A entrevista é uma conversa, não um interrogatório',
    tempoTotal: 8, xp: 40, vertente: 'ambos',
    aula: {
      gancho: 'O coração dispara, as mãos suam, e parece que vão te julgar a cada palavra. Mas e se a entrevista não fosse um tribunal, e sim uma conversa entre dois lados que querem se conhecer? Mudar esse olhar muda tudo — e começa a tirar o medo.',
      conceito: {
        titulo: 'Entrevista é uma troca de duas vias, não um julgamento',
        texto: 'Muita gente encara a entrevista como um INTERROGATÓRIO, onde só o candidato está sendo avaliado. Mas a verdade é que a entrevista é uma CONVERSA DE DUAS VIAS: a empresa quer saber se você serve pra vaga, e VOCÊ quer saber se a vaga serve pra você. Os dois lados estão avaliando. Quem entrevista não é seu inimigo — é alguém com um problema (uma vaga aberta) procurando uma solução (alguém que ajude). Seu papel não é "passar num teste", mas MOSTRAR como você pode ajudar e VER se aquele lugar combina com você. Com esse olhar, o nervosismo diminui: você deixa de ser réu e vira um profissional numa conversa entre iguais. Preparo é o que transforma o medo em confiança — e é disso que trata esta trilha.',
      },
      estrutura: {
        titulo: 'O novo olhar sobre a entrevista',
        partes: [
          { simbolo: '🤝', desc: 'É uma conversa de duas vias, não um interrogatório.' },
          { simbolo: '🔎', desc: 'Os dois lados avaliam: a empresa e você.' },
          { simbolo: '💡', desc: 'A empresa tem um problema; você é a solução.' },
          { simbolo: '🛡️', desc: 'Preparo transforma o medo em confiança.' },
        ],
      },
      exemplo: {
        titulo: 'Mudando a postura',
        celulas: [
          { ref: '"Vão me julgar"', valor: '"Vamos nos conhecer"' },
          { ref: '"Preciso passar no teste"', valor: '"Vou mostrar como ajudo"' },
          { ref: '"Só eu sou avaliado"', valor: '"Eu também avalio a vaga"' },
          { ref: 'Medo do desconhecido', valor: 'Preparo que dá confiança' },
        ],
        formula: 'Conversa de duas vias + preparo = confiança no lugar do medo',
        resultado: 'Você encara a entrevista como uma troca entre iguais, não um tribunal.',
        comentario: 'Essa virada de mentalidade é o primeiro passo e talvez o mais importante. Quando você entende que também está avaliando — se gosta do ambiente, das condições, das pessoas — sai da posição de "coitado pedindo emprego" e entra na de profissional avaliando uma oportunidade. Isso transparece na sua postura e o entrevistador percebe. As próximas missões dão o preparo que sustenta essa confiança.',
      },
      vocabulario: [
        { palavra: 'Entrevista', def: 'Conversa em que empresa e candidato se conhecem pra ver se combinam.' },
        { palavra: 'Recrutador', def: 'Quem conduz a entrevista; não é seu inimigo, busca a pessoa certa.' },
        { palavra: 'Duas vias', def: 'Os dois lados avaliam: a empresa avalia você, e você avalia a vaga.' },
      ],
      chave: [
        'A entrevista é uma conversa de duas vias, não um interrogatório',
        'A empresa tem um problema e você pode ser a solução',
        'Preparo é o que transforma o medo em confiança',
      ],
      porque: 'Encarar a entrevista como conversa entre iguais — e não como julgamento — derruba boa parte do nervosismo e melhora sua postura. Com a mentalidade certa e o preparo desta trilha, você se apresenta com confiança e mostra de verdade o seu valor.',
    },
    pratica: {
      instrucao: 'Vamos praticar a nova mentalidade.',
      passos: [
        'Pense numa entrevista (passada ou futura) que te dê nervosismo',
        'Reescreva o pensamento "vão me julgar" como "vamos nos conhecer"',
        'Liste o que VOCÊ quer saber sobre a vaga (horário, ambiente, função)',
        'Lembre que a empresa tem um problema a resolver e você pode ajudar',
        'Perceba que, com preparo, o medo dá lugar à confiança',
      ],
    },
    desafio: {
      cenario: 'Vire a chave da mentalidade: pegue uma entrevista que te assusta, reescreva o "vão me julgar" como "vamos nos conhecer", liste o que você quer avaliar na vaga e reconheça que a empresa busca uma solução que você pode oferecer — encarando tudo como conversa entre iguais.',
      requisitos: [
        'Identifiquei o medo da entrevista',
        'Reescrevi o julgamento como conversa',
        'Listei o que eu quero avaliar na vaga',
        'Vejo a empresa como quem busca solução',
        'Entendo que preparo gera confiança',
      ],
      dica: 'Nervosismo antes de entrevista é normal e até bom — mostra que você se importa. O segredo não é eliminá-lo, mas canalizá-lo com preparo. Quanto mais você pesquisa, ensaia e se conhece (o que faremos nas próximas missões), menos espaço o medo tem. Confiança não é ausência de medo: é medo com preparo.',
    },
    validacao: [
      'Vejo a entrevista como conversa de duas vias',
      'Sei que também estou avaliando a vaga',
      'Encaro o recrutador como aliado, não juiz',
      'Entendo que a empresa busca uma solução',
      'Sei que preparo gera confiança',
    ],
  },

  'mkt-entrevista-2': {
    trilhaId: 'mkt-entrevista', numero: 2, titulo: 'Pesquisar a empresa e a vaga antes',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Imagine dois candidatos. Um chega sem saber nada da empresa. O outro sabe o que ela faz, comenta um projeto recente e explica por que quer aquela vaga. Quem você contrataria? A pesquisa antes da entrevista é o que separa um do outro — e qualquer um pode fazer.',
      conceito: {
        titulo: 'Chegar informado mostra interesse e prepara boas respostas',
        texto: 'Antes de qualquer entrevista, RESEARCH — pesquisar — é dever de casa que faz enorme diferença. Você deve descobrir: O QUE A EMPRESA FAZ (produtos, serviços, área de atuação), informações pelo SITE dela e por uma busca no Google; e os DETALHES DA VAGA — releia o anúncio e entenda quais tarefas e requisitos ela pede. Com isso você consegue: mostrar INTERESSE GENUÍNO (em vez de parecer que aplicou em qualquer lugar), CONECTAR sua experiência ao que eles precisam, e fazer PERGUNTAS inteligentes. Anote 2 ou 3 pontos sobre a empresa e relacione cada requisito da vaga a algo que você já fez. Cinco a dez minutos de pesquisa transformam você no candidato preparado — aquele que claramente quer ESTA vaga, não uma vaga qualquer.',
      },
      estrutura: {
        titulo: 'O dever de casa antes da entrevista',
        partes: [
          { simbolo: '🌐', desc: 'O que a empresa faz: site e busca no Google.' },
          { simbolo: '📋', desc: 'Releia o anúncio: tarefas e requisitos da vaga.' },
          { simbolo: '🔗', desc: 'Conecte sua experiência ao que eles pedem.' },
          { simbolo: '❓', desc: 'Prepare perguntas inteligentes pra fazer.' },
        ],
      },
      exemplo: {
        titulo: 'O candidato preparado',
        celulas: [
          { ref: 'O que a empresa faz?', valor: 'Pesquiso no site e no Google' },
          { ref: 'Requisito: atendimento', valor: 'Lembro de quando atendi clientes' },
          { ref: 'Por que quero a vaga?', valor: 'Ligo meu objetivo ao da empresa' },
          { ref: 'No fim, alguma pergunta?', valor: 'Tenho 2 perguntas preparadas' },
        ],
        formula: 'Conhecer a empresa + conectar à sua experiência = candidato que quer ESTA vaga',
        resultado: 'Você chega informado, demonstra interesse e prepara boas respostas.',
        comentario: 'A pesquisa resolve duas coisas de uma vez: mostra que você se importa (recrutadores valorizam MUITO isso) e te dá munição pra responder bem. Ao relacionar cada requisito da vaga com algo que você já viveu, você monta antecipadamente suas melhores respostas. E preparar perguntas pro fim (toda entrevista termina com "você tem perguntas?") evita o constrangedor "não, tudo certo" — que passa desinteresse.',
      },
      vocabulario: [
        { palavra: 'Pesquisar (research)', def: 'Buscar informações sobre a empresa e a vaga antes da entrevista.' },
        { palavra: 'Requisitos', def: 'O que a vaga pede; conecte cada um à sua experiência.' },
        { palavra: 'Perguntas inteligentes', def: 'Perguntas preparadas que mostram interesse no fim da entrevista.' },
      ],
      chave: [
        'Pesquise o que a empresa faz pelo site e pelo Google',
        'Releia a vaga e conecte cada requisito à sua experiência',
        'Prepare perguntas inteligentes pra fazer no fim',
      ],
      porque: 'Chegar informado é o que distingue o candidato preparado: demonstra interesse genuíno, embasa suas respostas e gera perguntas que impressionam. Poucos minutos de pesquisa antes da entrevista aumentam muito suas chances, mostrando que você quer aquela vaga específica.',
    },
    pratica: {
      instrucao: 'Vamos fazer o dever de casa de uma vaga.',
      passos: [
        'Escolha uma vaga real (ou imagine uma) e abra o anúncio dela',
        'Pesquise a empresa no site dela e no Google: o que ela faz?',
        'Anote 2 ou 3 pontos importantes sobre a empresa',
        'Para cada requisito da vaga, lembre de uma experiência sua que combine',
        'Escreva 2 perguntas que você faria no fim da entrevista',
      ],
    },
    desafio: {
      cenario: 'Faça o dever de casa: escolha uma vaga, pesquise o que a empresa faz, anote pontos sobre ela, conecte cada requisito a uma experiência sua e prepare duas perguntas pro fim — chegando como o candidato informado que claramente quer aquela vaga.',
      requisitos: [
        'Pesquisei o que a empresa faz',
        'Anotei pontos importantes sobre ela',
        'Reli os requisitos da vaga',
        'Conectei requisitos à minha experiência',
        'Preparei perguntas pro fim',
      ],
      dica: 'Boas perguntas pro fim: "Como é um dia típico nessa função?", "Quais os maiores desafios da equipe hoje?", "Como vocês medem o sucesso de quem ocupa essa vaga?". Evite perguntar só sobre salário e folga logo de cara — deixe pra quando o interesse for mútuo. Perguntas sobre o trabalho em si mostram engajamento.',
    },
    validacao: [
      'Pesquiso a empresa antes da entrevista',
      'Releio os requisitos da vaga',
      'Conecto requisitos à minha experiência',
      'Preparo perguntas inteligentes',
      'Demonstro interesse genuíno na vaga',
    ],
  },

  'mkt-entrevista-3': {
    trilhaId: 'mkt-entrevista', numero: 3, titulo: 'Respondendo "fale sobre você"',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'É quase sempre a primeira pergunta — e a que mais trava a gente: "Fale um pouco sobre você". Onde começar? O nascimento? A vida toda? A resposta certa é mais simples e curta do que parece, e dá pra deixá-la pronta de antemão.',
      conceito: {
        titulo: 'Uma resposta curta sobre presente, passado e futuro',
        texto: '"Fale sobre você" não é um pedido pra contar sua vida inteira — é uma abertura pra você se apresentar PROFISSIONALMENTE, em 1 ou 2 minutos. Uma fórmula que funciona muito bem é PRESENTE → PASSADO → FUTURO: comece pelo que você FAZ ou faz de melhor hoje (presente); fale brevemente da sua EXPERIÊNCIA e conquistas relevantes (passado); e termine com o que você BUSCA agora e por que esta vaga (futuro). O foco é no PROFISSIONAL e no que interessa pra vaga — não em detalhes pessoais (família, problemas de saúde, etc.). Prepare e ENSAIE essa resposta: ela vai cair em quase toda entrevista, e tê-la pronta te dá um começo confiante, que dá o tom positivo pro resto da conversa.',
      },
      estrutura: {
        titulo: 'A fórmula presente-passado-futuro',
        partes: [
          { simbolo: '⏺️', desc: 'Presente: o que você faz e faz bem hoje.' },
          { simbolo: '⏪', desc: 'Passado: experiência e conquistas relevantes.' },
          { simbolo: '⏩', desc: 'Futuro: o que busca e por que esta vaga.' },
          { simbolo: '🎯', desc: 'Foco no profissional; 1 a 2 minutos, ensaiado.' },
        ],
      },
      exemplo: {
        titulo: 'Uma boa apresentação',
        celulas: [
          { ref: 'Presente', valor: '"Trabalho com atendimento e gosto de resolver problemas"' },
          { ref: 'Passado', valor: '"Atuei 5 anos no comércio, lidando com clientes"' },
          { ref: 'Futuro', valor: '"Busco uma vaga onde eu use isso pra ajudar a equipe"' },
          { ref: 'Evitar', valor: 'Contar a vida toda ou detalhes pessoais' },
        ],
        formula: 'Presente + passado + futuro, focado na vaga = apresentação curta e confiante',
        resultado: 'Você abre a entrevista com uma resposta pronta, clara e profissional.',
        comentario: 'Ter essa resposta no bolso muda o jogo: em vez de gaguejar no começo (o que abala a confiança pro resto), você emenda uma apresentação clara que dá o tom. A fórmula presente-passado-futuro é fácil de lembrar e organiza naturalmente o que dizer. Treine em voz alta até soar natural — não decorado, mas fluido. Mantenha curto: 1 a 2 minutos bastam.',
      },
      vocabulario: [
        { palavra: '"Fale sobre você"', def: 'Pedido de apresentação profissional breve, quase sempre a 1ª pergunta.' },
        { palavra: 'Presente-passado-futuro', def: 'Fórmula: o que faz hoje, sua experiência, e o que busca.' },
        { palavra: 'Ensaiar', def: 'Treinar a resposta em voz alta até soar natural e confiante.' },
      ],
      chave: [
        '"Fale sobre você" pede uma apresentação profissional curta',
        'Use a fórmula presente → passado → futuro, focada na vaga',
        'Ensaie a resposta: ela cai em quase toda entrevista',
      ],
      porque: 'A resposta a "fale sobre você" abre a entrevista e dá o tom. Tê-la pronta, curta e focada na vaga — com a fórmula presente-passado-futuro — garante um começo confiante que valoriza sua experiência e direciona a conversa pro que importa.',
    },
    pratica: {
      instrucao: 'Vamos montar sua resposta de apresentação.',
      passos: [
        'PRESENTE: escreva uma frase sobre o que você faz ou faz bem hoje',
        'PASSADO: escreva uma ou duas frases sobre sua experiência relevante',
        'FUTURO: escreva uma frase sobre o que você busca e por que esta vaga',
        'Junte as três partes numa resposta de 1 a 2 minutos, sem detalhes pessoais',
        'Ensaie em voz alta até soar natural e confiante',
      ],
    },
    desafio: {
      cenario: 'Prepare seu "fale sobre você": monte uma resposta com presente (o que faz hoje), passado (sua experiência) e futuro (o que busca e por que esta vaga), mantendo o foco profissional, e ensaie em voz alta até soar natural — um começo confiante pra qualquer entrevista.',
      requisitos: [
        'Escrevi a parte do presente',
        'Escrevi a parte do passado',
        'Escrevi a parte do futuro ligada à vaga',
        'Mantive o foco profissional, sem excessos pessoais',
        'Ensaiei a resposta em voz alta',
      ],
      dica: 'Adapte o "futuro" da resposta a cada vaga — é o que mostra que você quer AQUELA oportunidade, não uma qualquer. E cuidado pra não decorar palavra por palavra: se você esquecer uma frase, trava. Memorize a ESTRUTURA (presente-passado-futuro) e os pontos-chave; as palavras saem naturais na hora, soando como conversa e não como recital.',
    },
    validacao: [
      'Entendo o que "fale sobre você" pede',
      'Uso a fórmula presente-passado-futuro',
      'Mantenho o foco profissional',
      'Ligo o futuro à vaga específica',
      'Ensaio até soar natural',
    ],
  },

  'mkt-entrevista-4': {
    trilhaId: 'mkt-entrevista', numero: 4, titulo: 'As perguntas mais comuns',
    tempoTotal: 8, xp: 40, vertente: 'ambos',
    aula: {
      gancho: 'Aqui vai um segredo libertador: as entrevistas repetem quase sempre as mesmas perguntas. "Por que quer trabalhar aqui?", "Por que saiu do emprego anterior?", "Onde se vê no futuro?". Se elas são previsíveis, você pode preparar boas respostas — e chegar tranquilo.',
      conceito: {
        titulo: 'Perguntas previsíveis podem ter respostas preparadas',
        texto: 'A maioria das entrevistas gira em torno de um punhado de PERGUNTAS CLÁSSICAS. Conhecê-las de antemão te dá uma vantagem enorme: você prepara as respostas com calma, em casa, em vez de improvisar sob pressão. As mais comuns: "POR QUE QUER TRABALHAR AQUI?" (mostre que pesquisou e ligue seu objetivo ao da empresa); "POR QUE SAIU / QUER SAIR do emprego anterior?" (seja honesto mas POSITIVO, sem falar mal de ninguém); "QUAIS SEUS PONTOS FORTES?" (escolha os que a vaga pede, com exemplos); "ONDE SE VÊ EM ALGUNS ANOS?" (mostre vontade de crescer ali); "POR QUE DEVERÍAMOS CONTRATAR VOCÊ?" (resuma o valor que entrega). Não decore respostas prontas — prepare os PONTOS-CHAVE de cada uma e adapte na hora. Saber que as perguntas são previsíveis já tira metade do medo.',
      },
      estrutura: {
        titulo: 'O roteiro previsível',
        partes: [
          { simbolo: '🏢', desc: '"Por que aqui?" — ligue seu objetivo ao da empresa.' },
          { simbolo: '🚪', desc: '"Por que saiu?" — honesto, positivo, sem mágoa.' },
          { simbolo: '💪', desc: '"Pontos fortes?" — os que a vaga pede, com exemplos.' },
          { simbolo: '🌱', desc: '"Onde se vê?" — vontade de crescer no lugar.' },
        ],
      },
      exemplo: {
        titulo: 'Respostas que funcionam',
        celulas: [
          { ref: 'Por que saiu do anterior?', valor: '"Busco novos desafios" (sem falar mal)' },
          { ref: 'Por que aqui?', valor: 'Ligo o que pesquisei ao meu objetivo' },
          { ref: 'Pontos fortes?', valor: 'Os que a vaga pede, com um exemplo' },
          { ref: 'Por que te contratar?', valor: 'Resumo o valor que eu entrego' },
        ],
        formula: 'Perguntas previsíveis + pontos-chave preparados = respostas tranquilas',
        resultado: 'Você antecipa as perguntas clássicas e chega com respostas prontas.',
        comentario: 'O cuidado de ouro: ao falar do emprego anterior, NUNCA fale mal do antigo chefe ou empresa — mesmo que tenha motivos. Recrutadores veem isso como sinal de alerta (se reclama deles, vai reclamar de nós). Foque no que você BUSCA agora, em tom positivo. Para os pontos fortes, escolha os que a vaga valoriza e prove com um exemplo curto — afirmação com exemplo convence muito mais que adjetivo solto.',
      },
      vocabulario: [
        { palavra: 'Perguntas clássicas', def: 'As que se repetem em quase toda entrevista; dá pra preparar.' },
        { palavra: 'Tom positivo', def: 'Falar de saídas e dificuldades sem mágoa ou crítica a terceiros.' },
        { palavra: 'Pontos-chave', def: 'As ideias centrais de cada resposta, adaptadas na hora (não decoradas).' },
      ],
      chave: [
        'As entrevistas repetem um punhado de perguntas previsíveis',
        'Prepare os pontos-chave de cada uma, sem decorar',
        'Nunca fale mal do emprego anterior: mantenha o tom positivo',
      ],
      porque: 'Saber que as perguntas são previsíveis tira metade do medo da entrevista. Preparar pontos-chave para as clássicas — em tom positivo e com exemplos — garante respostas tranquilas e convincentes, em vez de improvisos sob pressão.',
    },
    pratica: {
      instrucao: 'Vamos preparar as respostas clássicas.',
      passos: [
        'Escreva pontos-chave pra "Por que quer trabalhar aqui?"',
        'Prepare uma resposta positiva pra "Por que saiu/quer sair do emprego anterior?"',
        'Liste 2 pontos fortes que a vaga valoriza, cada um com um exemplo',
        'Pense numa resposta pra "Onde se vê em alguns anos?" mostrando vontade de crescer',
        'Resuma em uma frase "por que deveriam contratar você"',
      ],
    },
    desafio: {
      cenario: 'Prepare-se para as clássicas: escreva pontos-chave para "por que aqui", uma resposta positiva sobre a saída do emprego anterior, seus pontos fortes com exemplos e onde você se vê crescendo — chegando à entrevista com as perguntas previsíveis já respondidas.',
      requisitos: [
        'Preparei "por que quer trabalhar aqui"',
        'Preparei a saída do emprego em tom positivo',
        'Listei pontos fortes com exemplos',
        'Respondi "onde se vê" com vontade de crescer',
        'Resumi por que devem me contratar',
      ],
      dica: 'Uma pergunta-armadilha comum é "qual seu maior defeito?" — veremos na próxima missão. Por ora, lembre: para toda resposta, vale a regra de provar com exemplos. Em vez de "sou esforçado", diga "uma vez fiquei até resolver tal problema". Histórias curtas e reais ficam na memória do recrutador muito mais que adjetivos.',
    },
    validacao: [
      'Conheço as perguntas clássicas',
      'Preparo pontos-chave, sem decorar',
      'Falo do emprego anterior em tom positivo',
      'Provo meus pontos fortes com exemplos',
      'Mostro vontade de crescer no lugar',
    ],
  },

  'mkt-entrevista-5': {
    trilhaId: 'mkt-entrevista', numero: 5, titulo: 'Pontos fortes e fracos sem cair em armadilha',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: '"Qual seu maior defeito?" — a pergunta que mais assusta. Falar um defeito de verdade parece tiro no pé; inventar um falso ("sou perfeccionista demais") soa decorado e o recrutador percebe. Existe um caminho do meio, honesto e inteligente.',
      conceito: {
        titulo: 'Fale forças com prova e fraquezas com evolução',
        texto: 'Sobre PONTOS FORTES: escolha os que a VAGA pede e prove cada um com um EXEMPLO concreto (não basta dizer "sou organizado" — conte uma situação). Sobre PONTOS FRACOS, a armadilha é dupla: dizer um defeito grave assusta, e dar uma resposta falsa e clichê ("sou perfeccionista", "trabalho demais") soa ensaiado e desonesto. O caminho certo: escolha uma fraqueza REAL porém não fatal pra vaga, e — o mais importante — mostre o que você FAZ pra MELHORÁ-LA. Ex.: "Tinha dificuldade de falar em público, então entrei num grupo pra praticar e já melhorei muito." Isso mostra AUTOCONHECIMENTO e MATURIDADE — qualidades que os recrutadores valorizam mais do que a ausência de defeitos. Ninguém é perfeito; o que conta é você se conhecer e estar evoluindo.',
      },
      estrutura: {
        titulo: 'O equilíbrio honesto',
        partes: [
          { simbolo: '💪', desc: 'Forças: as que a vaga pede, com exemplo concreto.' },
          { simbolo: '🎯', desc: 'Fraqueza real, mas não fatal pra função.' },
          { simbolo: '📈', desc: 'Mostre o que você faz pra melhorá-la.' },
          { simbolo: '🧠', desc: 'Revela autoconhecimento e maturidade.' },
        ],
      },
      exemplo: {
        titulo: 'Honestidade que valoriza',
        celulas: [
          { ref: 'Ponto forte', valor: '"Sou organizado" + exemplo de como organizei algo' },
          { ref: 'Clichê a evitar', valor: '"Meu defeito é ser perfeccionista"' },
          { ref: 'Fraqueza honesta', valor: '"Tinha medo de falar em público..."' },
          { ref: '...com evolução', valor: '"...e entrei num grupo pra praticar"' },
        ],
        formula: 'Força com prova + fraqueza real com evolução = honestidade que impressiona',
        resultado: 'Você responde sobre forças e fraquezas com honestidade e maturidade.',
        comentario: 'O recrutador não espera um candidato sem defeitos — ele desconfia de quem finge não ter. Ao admitir uma fraqueza real e mostrar que está trabalhando nela, você passa três mensagens poderosas: que se conhece, que é honesto, e que busca crescer. Só evite citar como "fraqueza" algo essencial pra vaga (ex.: dizer que odeia atender pessoas numa vaga de atendimento). Escolha algo lateral à função.',
      },
      vocabulario: [
        { palavra: 'Ponto fraco honesto', def: 'Uma fraqueza real, não fatal pra vaga, dita com o plano de melhorá-la.' },
        { palavra: 'Autoconhecimento', def: 'Saber suas forças e limites; muito valorizado pelos recrutadores.' },
        { palavra: 'Resposta clichê', def: 'Defeito falso e batido ("perfeccionista"); soa decorado, evite.' },
      ],
      chave: [
        'Prove os pontos fortes com exemplos concretos',
        'Para fraquezas, escolha algo real e mostre como está melhorando',
        'Honestidade com evolução revela autoconhecimento e maturidade',
      ],
      porque: 'A pergunta sobre defeitos assusta, mas tem resposta: uma fraqueza real acompanhada do esforço pra superá-la. Isso mostra autoconhecimento e maturidade — mais valiosos que fingir perfeição — e transforma a pergunta-armadilha numa chance de impressionar.',
    },
    pratica: {
      instrucao: 'Vamos preparar forças e fraquezas.',
      passos: [
        'Liste 2 ou 3 pontos fortes que a vaga que você quer valoriza',
        'Para cada um, escreva um exemplo concreto que o comprove',
        'Pense numa fraqueza real sua, mas que não seja fatal pra essa vaga',
        'Escreva o que você faz (ou pode fazer) pra melhorar essa fraqueza',
        'Ensaie a resposta, unindo a fraqueza honesta ao plano de evolução',
      ],
    },
    desafio: {
      cenario: 'Domine a pergunta difícil: prepare pontos fortes com exemplos que os comprovem, escolha uma fraqueza real (mas não fatal) e mostre o que faz pra melhorá-la — transformando a temida pergunta dos defeitos numa demonstração de autoconhecimento e maturidade.',
      requisitos: [
        'Listei pontos fortes ligados à vaga',
        'Provei cada um com um exemplo',
        'Escolhi uma fraqueza real e não fatal',
        'Mostrei o que faço pra melhorá-la',
        'Ensaiei a resposta com honestidade',
      ],
      dica: 'Ao falar da fraqueza, gaste mais tempo na PARTE DA EVOLUÇÃO do que na fraqueza em si — é ela que impressiona. E mantenha o tom tranquilo: admitir um limite com naturalidade mostra segurança, enquanto esconder ou minimizar demais soa defensivo. Lembre: o recrutador também tem defeitos, e sabe que você tem. Honestidade gera confiança.',
    },
    validacao: [
      'Provo pontos fortes com exemplos',
      'Escolho fraquezas reais e não fatais',
      'Mostro como estou melhorando',
      'Evito clichês como "perfeccionista"',
      'Demonstro autoconhecimento e maturidade',
    ],
  },

  'mkt-entrevista-6': {
    trilhaId: 'mkt-entrevista', numero: 6, titulo: 'Contar histórias com o método STAR',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: '"Conte uma vez em que resolveu um problema difícil." Diante dessas perguntas, é fácil se enrolar e dar uma resposta confusa. Existe um roteiro de quatro passos — STAR — que organiza qualquer história e faz você brilhar sem se perder.',
      conceito: {
        titulo: 'STAR: Situação, Tarefa, Ação e Resultado',
        texto: 'Muitas entrevistas têm PERGUNTAS COMPORTAMENTAIS: "conte uma vez em que...", "dê um exemplo de quando...". Elas querem histórias REAIS suas, porque o passado mostra como você age. O problema é que, sem roteiro, a gente se enrola. O método STAR organiza a resposta em quatro passos: SITUAÇÃO (o contexto: onde, quando, qual o cenário); TAREFA (qual era o seu desafio ou responsabilidade ali); AÇÃO (o que VOCÊ fez, passo a passo — o coração da história); RESULTADO (o que aconteceu no fim, de preferência com algo concreto: resolveu, melhorou, o cliente ficou satisfeito). Seguindo STAR, sua história fica clara, completa e com começo, meio e fim. Prepare 2 ou 3 histórias suas que possam ser adaptadas a várias perguntas (um problema que resolveu, um trabalho em equipe, uma dificuldade superada).',
      },
      estrutura: {
        titulo: 'Os quatro passos da história',
        partes: [
          { simbolo: 'S', desc: 'Situação: o contexto — onde, quando, o cenário.' },
          { simbolo: 'T', desc: 'Tarefa: qual era seu desafio ou responsabilidade.' },
          { simbolo: 'A', desc: 'Ação: o que VOCÊ fez, passo a passo.' },
          { simbolo: 'R', desc: 'Resultado: o que aconteceu no fim, com algo concreto.' },
        ],
      },
      exemplo: {
        titulo: 'Uma história bem contada',
        celulas: [
          { ref: 'Situação', valor: '"Na loja, um cliente chegou muito irritado"' },
          { ref: 'Tarefa', valor: '"Eu precisava resolver sem perder o cliente"' },
          { ref: 'Ação', valor: '"Ouvi com calma, troquei o produto e ofereci..."' },
          { ref: 'Resultado', valor: '"Ele saiu satisfeito e voltou a comprar"' },
        ],
        formula: 'Situação + Tarefa + Ação + Resultado = história clara que mostra como você age',
        resultado: 'Você responde perguntas comportamentais com histórias organizadas.',
        comentario: 'A parte mais importante é a AÇÃO — o que VOCÊ fez (não "a equipe", mas você). É aí que o recrutador vê seu valor. E o RESULTADO fecha com chave de ouro: sempre que possível, termine com algo concreto e positivo. Prepare poucas histórias versáteis: uma boa história de "resolvi um problema" pode responder perguntas sobre iniciativa, atendimento, pressão e mais — só mudando o foco do que você conta.',
      },
      vocabulario: [
        { palavra: 'Pergunta comportamental', def: '"Conte uma vez em que..."; pede uma história real sua.' },
        { palavra: 'Método STAR', def: 'Roteiro: Situação, Tarefa, Ação, Resultado, pra contar histórias claras.' },
        { palavra: 'Ação', def: 'O que VOCÊ fez na história; o coração da resposta.' },
      ],
      chave: [
        'Perguntas comportamentais pedem histórias reais suas',
        'STAR organiza: Situação, Tarefa, Ação, Resultado',
        'Foque na sua Ação e feche com um Resultado concreto',
      ],
      porque: 'Perguntas do tipo "conte uma vez em que..." revelam como você age de verdade. O método STAR transforma qualquer experiência numa história clara e convincente, com começo, meio e fim — fazendo você mostrar seu valor sem se enrolar.',
    },
    pratica: {
      instrucao: 'Vamos montar uma história no formato STAR.',
      passos: [
        'Lembre de uma situação real em que você resolveu um problema ou ajudou alguém',
        'SITUAÇÃO: descreva o contexto em uma ou duas frases',
        'TAREFA: diga qual era o seu desafio ou responsabilidade ali',
        'AÇÃO: conte o que VOCÊ fez, passo a passo',
        'RESULTADO: termine com o que aconteceu, de preferência algo concreto',
      ],
    },
    desafio: {
      cenario: 'Conte uma boa história: escolha uma experiência real e organize-a em STAR — situação (contexto), tarefa (seu desafio), ação (o que você fez) e resultado (o que aconteceu) — pra responder qualquer pergunta comportamental com clareza e impacto.',
      requisitos: [
        'Escolhi uma experiência real',
        'Descrevi a Situação (contexto)',
        'Defini a Tarefa (meu desafio)',
        'Detalhei a Ação (o que eu fiz)',
        'Fechei com o Resultado concreto',
      ],
      dica: 'Prepare 2 ou 3 histórias STAR versáteis antes da entrevista — guarde-as como cartas na manga. Uma sobre resolver um problema, uma sobre trabalho em equipe, uma sobre superar uma dificuldade. Na hora, você adapta a que melhor responde à pergunta. Ter histórias prontas evita o branco e garante respostas ricas a qualquer "conte uma vez em que...".',
    },
    validacao: [
      'Reconheço perguntas comportamentais',
      'Organizo respostas com o método STAR',
      'Descrevo situação, tarefa, ação e resultado',
      'Foco no que EU fiz na história',
      'Preparo histórias versáteis de antemão',
    ],
  },

  'mkt-entrevista-7': {
    trilhaId: 'mkt-entrevista', numero: 7, titulo: 'Entrevista por vídeo: o preparo extra',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Cada vez mais entrevistas acontecem por vídeo, pelo computador ou celular. É cômodo — você nem sai de casa — mas tem armadilhas próprias: a internet que cai, o microfone que não funciona, a luz que te deixa na sombra. Um preparo extra evita esses perrengues.',
      conceito: {
        titulo: 'A entrevista por vídeo pede preparo técnico e de ambiente',
        texto: 'A ENTREVISTA POR VÍDEO (por apps como Google Meet, Zoom ou Teams — vistos na trilha de reuniões) tem o conteúdo igual ao de uma presencial, mas exige cuidados EXTRAS com a parte técnica e o ambiente. TESTE ANTES: a câmera, o microfone e a internet funcionam? Tenha o app instalado e saiba abrir o link. AMBIENTE: escolha um lugar SILENCIOSO, sem gente passando, com um fundo neutro e arrumado. LUZ: fique de frente pra uma luz ou janela (luz ATRÁS de você te deixa na sombra). CÂMERA na altura dos olhos e olhe PRA ELA ao falar (dá a sensação de contato visual). Vista-se BEM, como numa entrevista presencial — da cintura pra cima ao menos. E tenha um PLANO B: se a internet cair, avise por telefone e tente reconectar com calma. Esses detalhes mostram profissionalismo e evitam que problemas técnicos atrapalhem suas respostas.',
      },
      estrutura: {
        titulo: 'O checklist do vídeo',
        partes: [
          { simbolo: '🔧', desc: 'Teste antes: câmera, microfone, internet e o link.' },
          { simbolo: '🤫', desc: 'Ambiente silencioso, fundo neutro e arrumado.' },
          { simbolo: '💡', desc: 'Luz de frente; câmera na altura dos olhos.' },
          { simbolo: '👔', desc: 'Vista-se bem e tenha um plano B se cair.' },
        ],
      },
      exemplo: {
        titulo: 'Evitando os perrengues',
        celulas: [
          { ref: 'Microfone mudo', valor: 'Testo o som antes de começar' },
          { ref: 'Fundo bagunçado', valor: 'Escolho um canto neutro e arrumado' },
          { ref: 'Fico na sombra', valor: 'Sento de frente pra janela/luz' },
          { ref: 'Internet caiu', valor: 'Aviso por telefone e reconecto' },
        ],
        formula: 'Testar antes + ambiente e luz certos + plano B = vídeo sem perrengue técnico',
        resultado: 'Você faz a entrevista por vídeo com profissionalismo, sem sustos técnicos.',
        comentario: 'O erro mais comum é deixar a parte técnica pra última hora e descobrir, no meio da entrevista, que o microfone não funciona ou que você está na sombra. Teste TUDO uns 15 minutos antes. Um detalhe que faz diferença: olhe pra CÂMERA (a bolinha), não pra sua própria imagem na tela — isso simula o contato visual e passa confiança. E silêncio importa: avise quem mora com você que estará em entrevista.',
      },
      vocabulario: [
        { palavra: 'Entrevista por vídeo', def: 'Entrevista feita por chamada de vídeo, sem ir presencialmente.' },
        { palavra: 'Testar antes', def: 'Conferir câmera, microfone e internet antes de começar.' },
        { palavra: 'Plano B', def: 'O que fazer se a internet cair: avisar por telefone e reconectar.' },
      ],
      chave: [
        'A entrevista por vídeo tem conteúdo igual, mas cuidados técnicos extras',
        'Teste câmera, microfone e internet, e cuide do ambiente e da luz',
        'Olhe pra câmera, vista-se bem e tenha um plano B',
      ],
      porque: 'A entrevista por vídeo é cada vez mais comum e cômoda, mas tem armadilhas técnicas próprias. Testar tudo antes e cuidar do ambiente, da luz e de um plano B garante que problemas de tecnologia não atrapalhem suas respostas — e demonstra profissionalismo.',
    },
    pratica: {
      instrucao: 'Vamos preparar uma entrevista por vídeo.',
      passos: [
        'Confira qual app será usado (Meet, Zoom, Teams) e teste abrir uma chamada',
        'Teste sua câmera e microfone, e veja se a internet está estável',
        'Escolha um lugar silencioso, com fundo neutro e luz de frente',
        'Posicione a câmera na altura dos olhos e pratique olhar pra ela ao falar',
        'Defina um plano B: como avisar e reconectar se a internet cair',
      ],
    },
    desafio: {
      cenario: 'Prepare o vídeo: teste câmera, microfone e internet, arrume um ambiente silencioso com boa luz de frente, posicione a câmera na altura dos olhos e defina um plano B pra quedas — fazendo a entrevista por vídeo com o mesmo profissionalismo de uma presencial.',
      requisitos: [
        'Testei câmera, microfone e internet',
        'Escolhi um ambiente silencioso e neutro',
        'Ajustei a luz de frente e a altura da câmera',
        'Pratiquei olhar pra câmera ao falar',
        'Defini um plano B pra quedas de conexão',
      ],
      dica: 'Entre na chamada uns 5 minutos antes — pontualidade conta no vídeo também, e dá tempo de resolver um imprevisto. Deixe ao lado um copo de água e suas anotações (pontos-chave, perguntas pro fim) fora de cena: uma das vantagens do vídeo é poder ter uma "cola" discreta. Só não fique lendo o tempo todo; use de relance.',
    },
    validacao: [
      'Testo câmera, microfone e internet antes',
      'Preparo um ambiente silencioso e neutro',
      'Cuido da luz e da altura da câmera',
      'Olho pra câmera ao falar',
      'Tenho um plano B pra quedas',
    ],
  },

  'mkt-entrevista-8': {
    trilhaId: 'mkt-entrevista', numero: 8, titulo: 'Projeto: simular uma entrevista completa',
    tempoTotal: 16, xp: 110, vertente: 'ambos',
    aula: {
      gancho: 'Chegou a hora de juntar tudo numa simulação de verdade: do "fale sobre você" às perguntas difíceis, das histórias STAR às suas perguntas pro fim. Ensaiar uma entrevista inteira é o que transforma o conhecimento em confiança real — e você pode fazer isso sozinho ou com ajuda.',
      conceito: {
        titulo: 'Tudo junto: uma entrevista ensaiada do começo ao fim',
        texto: 'Este projeto consolida a trilha numa SIMULAÇÃO completa de entrevista. Escolha uma vaga real (ou imaginada) e prepare: 1) a PESQUISA sobre a empresa e a vaga; 2) sua resposta de "FALE SOBRE VOCÊ" (presente-passado-futuro); 3) respostas pras PERGUNTAS CLÁSSICAS (por que aqui, por que saiu, etc.); 4) seus PONTOS FORTES e FRACOS com o cuidado certo; 5) duas ou três HISTÓRIAS STAR; 6) suas PERGUNTAS pro fim. Então ENSAIE em voz alta, do começo ao fim — sozinho na frente do espelho, gravando-se no celular pra rever, ou pedindo pra alguém te entrevistar. Ensaiar de verdade revela onde você trava, o que precisa ajustar, e — principalmente — constrói a confiança que vem de já ter "vivido" a entrevista antes. Quem ensaia chega muito mais tranquilo.',
      },
      estrutura: {
        titulo: 'A simulação completa',
        partes: [
          { simbolo: '🔎', desc: 'Pesquisa da empresa + "fale sobre você" pronto.' },
          { simbolo: '💬', desc: 'Respostas às clássicas; fortes e fracos com cuidado.' },
          { simbolo: '⭐', desc: 'Duas ou três histórias STAR preparadas.' },
          { simbolo: '🎤', desc: 'Ensaie em voz alta, do começo ao fim.' },
        ],
      },
      exemplo: {
        titulo: 'Ensaiar pra brilhar',
        celulas: [
          { ref: 'Gravo-me no celular', valor: 'Revejo e ajusto onde travei' },
          { ref: 'Peço pra um parente', valor: 'Ele me faz as perguntas clássicas' },
          { ref: 'Frente ao espelho', valor: 'Pratico postura e "fale sobre você"' },
          { ref: 'No fim', valor: 'Faço minhas perguntas preparadas' },
        ],
        formula: 'Preparar todas as partes + ensaiar do início ao fim = confiança real na entrevista',
        resultado: 'Você simula a entrevista inteira e chega à real com tranquilidade.',
        comentario: 'Este é o domínio completo: você não só sabe o que responder, como já PRATICOU responder. O ensaio em voz alta é insubstituível — pensar a resposta na cabeça é fácil, dizê-la com fluência é outra coisa. Gravar-se no celular é um truque poderoso: ao rever, você nota vícios (muletas como "né", "tipo"), travadas e onde melhorar. Cada ensaio te deixa mais solto. Confiança não cai do céu: se constrói ensaiando.',
      },
      vocabulario: [
        { palavra: 'Simulação', def: 'Ensaiar uma entrevista inteira antes da real, pra ganhar confiança.' },
        { palavra: 'Ensaiar em voz alta', def: 'Dizer as respostas de verdade, não só pensá-las; revela travas.' },
        { palavra: 'Gravar-se', def: 'Filmar o ensaio no celular pra rever e corrigir vícios.' },
      ],
      chave: [
        'O projeto reúne pesquisa, respostas, histórias STAR e perguntas',
        'Ensaie a entrevista inteira em voz alta, do começo ao fim',
        'Gravar-se ou pedir ajuda revela o que ajustar e dá confiança',
      ],
      porque: 'Ensaiar uma entrevista completa transforma conhecimento em confiança real. Ao preparar todas as partes e praticá-las em voz alta, você descobre o que ajustar e chega à entrevista verdadeira tendo já "vivido" a situação — muito mais tranquilo e preparado pra mostrar seu valor.',
    },
    pratica: {
      instrucao: 'Vamos montar e ensaiar sua entrevista completa.',
      passos: [
        'Escolha uma vaga e faça a pesquisa da empresa e dos requisitos',
        'Prepare seu "fale sobre você" e as respostas às perguntas clássicas',
        'Tenha seus pontos fortes/fracos e 2 ou 3 histórias STAR prontas',
        'Liste 2 perguntas pra fazer no fim da entrevista',
        'Ensaie tudo em voz alta, do começo ao fim, gravando-se ou com ajuda de alguém',
        'Reveja, anote o que ajustar e ensaie mais uma vez',
      ],
    },
    desafio: {
      cenario: 'Faça a simulação completa: para uma vaga escolhida, prepare a pesquisa, o "fale sobre você", as respostas clássicas, pontos fortes/fracos, histórias STAR e perguntas pro fim — e ensaie tudo em voz alta, gravando-se ou com ajuda, chegando à entrevista real com confiança de verdade.',
      requisitos: [
        'Fiz a pesquisa e preparei o "fale sobre você"',
        'Preparei respostas às perguntas clássicas',
        'Tenho pontos fortes/fracos e histórias STAR',
        'Listei perguntas pra fazer no fim',
        'Ensaiei a entrevista inteira em voz alta',
      ],
      dica: 'Depois da entrevista real, vale enviar um breve agradecimento (por e-mail ou pela mesma via de contato), dizendo que gostou da conversa e reforçando seu interesse — poucos fazem isso, e marca pontos. E não desanime com um "não": cada entrevista é treino que te deixa melhor pra próxima. Com o preparo desta trilha, suas chances sobem a cada vez.',
    },
    validacao: [
      'Preparo todas as partes da entrevista',
      'Tenho "fale sobre você" e respostas clássicas',
      'Tenho histórias STAR e perguntas pro fim',
      'Ensaio em voz alta do começo ao fim',
      'Reviso e ajusto pra chegar com confiança',
    ],
  },
};
