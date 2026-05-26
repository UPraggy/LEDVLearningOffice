// ============================================================================
// CONTEÚDO — Inglês A1: Primeiros Passos (en-a1-basico)
// Vertente 'ingles'. Sem áudio: usamos dica de pronúncia "aportuguesada" entre
// parênteses (aproximada). exemplo.celulas = pares/uso EN ↔ PT.
// Tom acessível pra ~10 anos e 40+: simples, concreto, encorajador.
// ============================================================================

export const EN_A1_BASICO = {
  'en-a1-basico-1': {
    trilhaId: 'en-a1-basico', numero: 1, titulo: 'Hello! Cumprimentos e despedidas',
    tempoTotal: 8, xp: 30, vertente: 'ingles',
    aula: {
      gancho: 'Toda conversa em inglês começa com um cumprimento. Saber dizer "oi", "tchau", "por favor" e "obrigado" já te permite ser educado em qualquer lugar do mundo — e é o seu primeiro passo de verdade.',
      conceito: {
        titulo: 'As primeiras palavras que todo mundo entende',
        texto: 'Você vai começar com as palavras mais usadas do inglês: cumprimentos (oi, bom dia), despedidas (tchau) e palavras de educação (por favor, obrigado). São curtas, fáceis e abrem qualquer interação. Não se preocupe em acertar a pronúncia perfeita — a dica entre parênteses ajuda, e o importante é começar a usar.',
      },
      estrutura: {
        titulo: 'O essencial (com dica de pronúncia)',
        partes: [
          { simbolo: 'Hi', desc: 'Oi (rái) — informal, pra qualquer hora.' },
          { simbolo: 'Hello', desc: 'Olá (rélôu) — um pouco mais neutro.' },
          { simbolo: 'Bye', desc: 'Tchau (bái). Também: Goodbye (gud-bái).' },
          { simbolo: 'Thanks', desc: 'Obrigado(a) (thénks). Mais formal: Thank you (thénk iú).' },
        ],
      },
      exemplo: {
        titulo: 'Pequeno diálogo',
        celulas: [
          { ref: 'A', valor: 'Hi! Good morning. — Oi! Bom dia. (gud mórning)' },
          { ref: 'B', valor: 'Hello! How are you? — Olá! Como vai? (rau ar iú)' },
          { ref: 'A', valor: 'I’m fine, thank you. — Estou bem, obrigado. (aim fáin)' },
          { ref: 'B', valor: 'Goodbye! — Tchau!' },
        ],
        formula: 'Cumprimento + "How are you?" + "I’m fine, thank you"',
        resultado: 'Você já consegue abrir e fechar uma conversa.',
        comentario: 'Dica: "Good morning" (bom dia) até o meio-dia; "Good afternoon" (boa tarde); "Good evening" (boa noite, ao chegar); "Good night" (boa noite, ao se despedir/dormir).',
      },
      vocabulario: [
        { palavra: 'Please', def: 'Por favor (plíz). Use ao pedir algo — soa educado.' },
        { palavra: 'Thank you / Thanks', def: 'Obrigado(a). Responde-se "You’re welcome" (de nada).' },
        { palavra: 'Sorry / Excuse me', def: 'Desculpe (sóri) / Com licença (eks-kiúz mi).' },
      ],
      chave: [
        'Hi / Hello = oi / olá; Bye = tchau',
        'Please = por favor; Thank you = obrigado',
        'Pronúncia perfeita não importa agora — comece a usar',
      ],
      porque: 'Cumprimentos e educação são a base de qualquer conversa em inglês — em viagens, no trabalho, online. Com poucas palavras você já interage com respeito em qualquer lugar do mundo.',
    },
    pratica: {
      instrucao: 'Vamos praticar em voz alta. Não precisa de ninguém — fale sozinho, sem vergonha.',
      passos: [
        'Diga em voz alta: "Hi!" (rái) três vezes',
        'Diga: "Hello! Good morning!" (rélôu, gud mórning)',
        'Pergunte: "How are you?" (rau ar iú)',
        'Responda: "I’m fine, thank you!" (aim fáin, thénk iú)',
        'Pratique educação: "Please" (plíz) e "Thank you" (thénk iú)',
        'Despeça-se: "Goodbye!" (gud-bái)',
        'Repita o diálogo do exemplo do começo ao fim',
      ],
    },
    desafio: {
      cenario: 'Tenha uma "mini-conversa" de cumprimento em inglês, do oi ao tchau — fale sozinho ou com alguém.',
      requisitos: [
        'Cumprimentei (Hi/Hello + Good morning/afternoon)',
        'Perguntei "How are you?"',
        'Respondi "I’m fine, thank you"',
        'Usei "please" e/ou "thank you"',
        'Me despedi (Goodbye/Bye)',
      ],
      dica: 'Repita as frases ao longo do dia: ao acordar, "Good morning"; ao agradecer alguém, pense "thank you". Usar no dia a dia, mesmo em casa, fixa muito mais que decorar.',
    },
    validacao: [
      'Sei cumprimentar (Hi, Hello, Good morning)',
      'Sei perguntar e responder "How are you?"',
      'Sei dizer please e thank you',
      'Sei me despedir (Bye, Goodbye)',
      'Pratiquei em voz alta',
    ],
  },

  'en-a1-basico-2': {
    trilhaId: 'en-a1-basico', numero: 2, titulo: 'O alfabeto e soletrar',
    tempoTotal: 9, xp: 40, vertente: 'ingles',
    aula: {
      gancho: 'Como você diz seu nome ou e-mail por telefone em inglês? Soletrando. O alfabeto em inglês tem sons diferentes do português — e dominá-lo te ajuda a entender e a se fazer entender.',
      conceito: {
        titulo: 'As letras têm nomes diferentes em inglês',
        texto: 'O alfabeto é o mesmo (A-Z), mas o NOME das letras muda. Em inglês, "A" soa como "êi", "E" soa como "i", "I" soa como "ái". Saber soletrar é essencial pra dizer nomes, e-mails e endereços. Vamos focar nas letras que mais confundem quem fala português.',
      },
      estrutura: {
        titulo: 'As letras que mais confundem',
        partes: [
          { simbolo: 'A E I', desc: 'A = "êi", E = "i", I = "ái" (cuidado: invertem em relação ao português!).' },
          { simbolo: 'G J', desc: 'G = "dji", J = "djêi".' },
          { simbolo: 'H W', desc: 'H = "êitch", W = "dâbliu".' },
          { simbolo: 'Y', desc: 'Y = "uái".' },
        ],
      },
      exemplo: {
        titulo: 'Soletrando um nome',
        celulas: [
          { ref: 'Pergunta', valor: 'How do you spell it? — Como se soletra? (rau du iú spél it)' },
          { ref: 'ANA', valor: 'A-N-A → "êi, en, êi"' },
          { ref: 'JOÃO→JOHN', valor: 'J-O-H-N → "djêi, ou, êitch, en"' },
          { ref: 'Útil', valor: 'Pra dizer e-mail, nome, sobrenome' },
        ],
        formula: '"How do you spell...?" → responda letra por letra',
        resultado: 'Você se faz entender mesmo sem a outra pessoa ver o texto.',
        comentario: 'Pra letras dobradas (LL, SS), diz-se "double L" (dâbol él). Pra e-mails: "@" = "at" (ét) e "." = "dot" (dót).',
      },
      vocabulario: [
        { palavra: 'Spell', def: 'Soletrar (spél). "Spell your name" = soletre seu nome.' },
        { palavra: 'Letter', def: 'Letra (léter).' },
        { palavra: 'At / Dot', def: 'Em e-mails: "@" = at (ét); "." = dot (dót).' },
      ],
      chave: [
        'A="êi", E="i", I="ái" — invertem em relação ao português',
        '"How do you spell?" = como se soletra',
        'E-mail: @ = "at", . = "dot"',
      ],
      porque: 'Soletrar é uma habilidade prática constante: dar seu nome, e-mail ou endereço a alguém que não vê a tela. E aprender os sons das letras melhora toda a sua pronúncia.',
    },
    pratica: {
      instrucao: 'Vamos soletrar em voz alta. Tenha seu nome e e-mail em mente.',
      passos: [
        'Pratique as vogais: A (êi), E (i), I (ái), O (ou), U (iú)',
        'Soletre as letras do seu primeiro nome, uma a uma, em voz alta',
        'Pergunte a si mesmo: "How do you spell it?" (rau du iú spél it)',
        'Soletre seu sobrenome',
        'Soletre seu e-mail usando "at" (@) e "dot" (.)',
        'Treine letras difíceis: G (dji), J (djêi), W (dâbliu), Y (uái)',
        'Repita até soltar sem travar',
      ],
    },
    desafio: {
      cenario: 'Soletre, em inglês e em voz alta, seu nome completo e seu e-mail, como se estivesse passando por telefone.',
      requisitos: [
        'Soletrei meu primeiro nome corretamente',
        'Soletrei meu sobrenome',
        'Soletrei meu e-mail usando "at" e "dot"',
        'Acertei as letras que confundem (A, E, I, G, J, W)',
        'Pratiquei em voz alta',
      ],
      dica: 'Decore primeiro as letras do SEU nome e e-mail — são as que você mais vai usar. Soletrar o próprio nome com segurança já resolve a maioria das situações reais.',
    },
    validacao: [
      'Sei os nomes das letras em inglês',
      'Acerto as vogais (A=êi, E=i, I=ái)',
      'Sei perguntar "How do you spell?"',
      'Sei soletrar meu nome e e-mail',
      'Pratiquei em voz alta',
    ],
  },

  'en-a1-basico-3': {
    trilhaId: 'en-a1-basico', numero: 3, titulo: 'O verbo "to be" (am/is/are)',
    tempoTotal: 12, xp: 60, vertente: 'ingles',
    aula: {
      gancho: 'Se existe UM verbo pra aprender primeiro, é o "to be". Ele significa "ser" e "estar" ao mesmo tempo, e está em quase toda frase: "Eu sou", "Ela está", "Nós somos". Dominá-lo destrava o inglês.',
      conceito: {
        titulo: 'Um verbo que é "ser" e "estar"',
        texto: 'Em português temos dois verbos (ser e estar); em inglês, um só faz os dois: "to be". Ele muda de forma conforme quem fala: I am (eu sou/estou), you are (você é/está), he/she/it is (ele/ela é/está), we/they are (nós/eles somos/são). Quase toda apresentação e descrição usa o "to be" — por isso ele é o primeiro.',
      },
      estrutura: {
        titulo: 'As formas do "to be"',
        partes: [
          { simbolo: 'I am', desc: 'Eu sou/estou (ái ém). Forma curta: I’m.' },
          { simbolo: 'You are', desc: 'Você é/está (iú ar). Curta: You’re.' },
          { simbolo: 'He/She is', desc: 'Ele/Ela é/está (rí/chí iz). Curta: He’s/She’s.' },
          { simbolo: 'We/They are', desc: 'Nós/Eles somos/são (uí/dêi ar). Curta: We’re/They’re.' },
        ],
      },
      exemplo: {
        titulo: 'O "to be" em frases',
        celulas: [
          { ref: 'EN', valor: 'I am happy. — Eu estou feliz. (ái ém répi)' },
          { ref: 'EN', valor: 'She is a teacher. — Ela é professora.' },
          { ref: 'EN', valor: 'We are from Brazil. — Nós somos do Brasil.' },
          { ref: 'Negativo', valor: 'I am not tired. — Eu não estou cansado. (não = not)' },
        ],
        formula: 'Pessoa + (am/is/are) + resto',
        resultado: 'Você descreve quem é, como está e de onde vem.',
        comentario: 'As formas curtas (I’m, you’re, she’s) são as mais usadas na fala. Pra negar, é só pôr "not" depois: I’m not, she isn’t (= is not), they aren’t (= are not).',
      },
      vocabulario: [
        { palavra: 'am / is / are', def: 'As três formas do "to be" no presente.' },
        { palavra: 'Contração', def: 'Forma curta: I am → I’m; she is → she’s; they are → they’re.' },
        { palavra: 'not', def: 'Não. Vem depois do verbo: I’m not, he isn’t.' },
      ],
      chave: [
        '"To be" = ser E estar (um verbo só)',
        'I am, you are, he/she is, we/they are',
        'Negar: ponha "not" depois (I’m not, she isn’t)',
      ],
      porque: 'O "to be" é o verbo mais usado do inglês e a base pra se apresentar, descrever e localizar. Sem ele, quase nada se diz; com ele, você já monta dezenas de frases.',
    },
    pratica: {
      instrucao: 'Vamos montar frases com o "to be" em voz alta, sobre você de verdade.',
      passos: [
        'Diga: "I am..." + seu nome (I am Maria → aim Maria)',
        'Diga: "I am from..." + sua cidade/país (I am from Brazil)',
        'Diga como você está: "I am happy" / "I am tired" (cansado)',
        'Fale de outra pessoa: "She is..." ou "He is..." + algo',
        'Fale no plural: "We are from Brazil"',
        'Pratique o negativo: "I am not sad" (sad = triste)',
        'Use as formas curtas: I’m, she’s, we’re',
      ],
    },
    desafio: {
      cenario: 'Escreva (e fale) 5 frases verdadeiras sobre você e sua família usando o "to be" — afirmativas e ao menos uma negativa.',
      requisitos: [
        'Usei "I am" corretamente sobre mim',
        'Usei "is" pra ele/ela (She is / He is)',
        'Usei "are" pra nós/eles (We are / They are)',
        'Fiz pelo menos uma frase negativa (am not / isn’t / aren’t)',
        'Usei formas curtas (I’m, she’s)',
      ],
      dica: 'Erro comum: esquecer o "to be" (dizer "I happy" em vez de "I am happy"). Em inglês, o "to be" é obrigatório — sempre pergunte: "tem o am/is/are na frase?".',
    },
    validacao: [
      'Sei as formas am/is/are',
      'Uso o "to be" pra ser e estar',
      'Sei fazer o negativo com "not"',
      'Uso as contrações (I’m, she’s)',
      'Montei frases verdadeiras sobre mim',
    ],
  },

  'en-a1-basico-4': {
    trilhaId: 'en-a1-basico', numero: 4, titulo: 'Perguntas e respostas básicas',
    tempoTotal: 10, xp: 60, vertente: 'ingles',
    aula: {
      gancho: '"Qual é o seu nome?", "De onde você é?", "Quantos anos você tem?" — as perguntas que abrem qualquer conversa. Saber perguntar E responder isso já te coloca num papo de verdade.',
      conceito: {
        titulo: 'As perguntas que sempre aparecem',
        texto: 'Toda primeira conversa tem as mesmas perguntas: nome, origem, idade. Em inglês, muitas começam com "What" (o quê), "Where" (onde), "How" (como/quanto). Aprender o par pergunta-resposta de cada uma te prepara pra qualquer apresentação — e usa o "to be" que você acabou de ver.',
      },
      estrutura: {
        titulo: 'Perguntas-chave (com resposta)',
        partes: [
          { simbolo: 'What', desc: 'What’s your name? — Qual é seu nome? (uats iór nêim) → "My name is..."' },
          { simbolo: 'Where', desc: 'Where are you from? — De onde você é? → "I’m from..."' },
          { simbolo: 'How old', desc: 'How old are you? — Quantos anos você tem? → "I’m ... years old."' },
          { simbolo: 'How', desc: 'How are you? — Como vai? → "I’m fine, thanks."' },
        ],
      },
      exemplo: {
        titulo: 'Uma apresentação completa',
        celulas: [
          { ref: 'P', valor: 'What’s your name? — Qual seu nome?' },
          { ref: 'R', valor: 'My name is Ana. / I’m Ana. — Meu nome é Ana.' },
          { ref: 'P', valor: 'Where are you from? — De onde você é?' },
          { ref: 'R', valor: 'I’m from Brazil. — Sou do Brasil.' },
        ],
        formula: 'Pergunta (What/Where/How) → resposta com "My name is" / "I’m from"',
        resultado: 'Você sustenta uma apresentação dos dois lados.',
        comentario: '"What’s" é a forma curta de "What is". E "Nice to meet you!" (náis tu mit iú) = "Prazer em conhecer!" — ótimo pra fechar uma apresentação.',
      },
      vocabulario: [
        { palavra: 'What / Where / How', def: 'O quê / Onde / Como (palavras de pergunta).' },
        { palavra: 'My name is...', def: 'Meu nome é... (resposta a "What’s your name?").' },
        { palavra: 'Nice to meet you', def: 'Prazer em conhecer (resposta ao se apresentar).' },
      ],
      chave: [
        'What’s your name? → My name is... / I’m...',
        'Where are you from? → I’m from...',
        'How old are you? → I’m ... years old',
      ],
      porque: 'Perguntar e responder o básico sobre si é o coração de qualquer primeira conversa — numa viagem, no trabalho, online. É o que transforma palavras soltas em diálogo de verdade.',
    },
    pratica: {
      instrucao: 'Vamos simular uma apresentação completa, fazendo as perguntas E as respostas em voz alta.',
      passos: [
        'Pergunte: "What’s your name?" e responda "My name is..." + seu nome',
        'Pergunte: "Where are you from?" e responda "I’m from..." + seu país',
        'Pergunte: "How old are you?" e responda "I’m ... years old"',
        'Pergunte: "How are you?" e responda "I’m fine, thank you"',
        'Feche com: "Nice to meet you!"',
        'Agora faça tudo seguido, como uma conversa real',
        'Repita imaginando que conheceu alguém novo',
      ],
    },
    desafio: {
      cenario: 'Faça um roteiro de apresentação: as 4 perguntas-chave com suas respostas reais, e pratique como se estivesse conhecendo alguém.',
      requisitos: [
        'Sei perguntar e responder o nome',
        'Sei perguntar e responder a origem',
        'Sei perguntar e responder a idade',
        'Sei perguntar e responder "How are you?"',
        'Fechei com "Nice to meet you"',
      ],
      dica: 'Junte com a missão do "to be": quase toda resposta usa "I’m". Treinar perguntas E respostas (os dois lados) te prepara tanto pra falar quanto pra entender o que te perguntam.',
    },
    validacao: [
      'Sei as perguntas com What/Where/How',
      'Respondo nome, origem e idade',
      'Uso "My name is" e "I’m from"',
      'Sei "Nice to meet you"',
      'Sustento uma apresentação completa',
    ],
  },

  'en-a1-basico-5': {
    trilhaId: 'en-a1-basico', numero: 5, titulo: 'Sim, não e palavras essenciais',
    tempoTotal: 9, xp: 50, vertente: 'ingles',
    aula: {
      gancho: 'Algumas palavrinhas aparecem em TODA frase: sim, não, este, aquele, "um/uma". São pequenas, mas são o cimento que segura o inglês. Hoje você junta as peças que faltavam.',
      conceito: {
        titulo: 'As pequenas palavras que conectam tudo',
        texto: 'Além dos cumprimentos e do "to be", há palavrinhas essenciais que entram em quase tudo: yes/no (sim/não), this/that (este/aquele), here/there (aqui/lá), e os artigos a/an ("um/uma"). Elas parecem simples, mas usá-las certo deixa seu inglês natural. Uma regra de ouro: "a" antes de som de consoante (a car), "an" antes de som de vogal (an apple).',
      },
      estrutura: {
        titulo: 'Palavras-cimento',
        partes: [
          { simbolo: 'Yes/No', desc: 'Sim (iés) / Não (nôu).' },
          { simbolo: 'this/that', desc: 'this = este/isto (dis); that = aquele/aquilo (dét).' },
          { simbolo: 'here/there', desc: 'here = aqui (rír); there = lá/ali (dér).' },
          { simbolo: 'a / an', desc: 'a = um/uma (a car); an = antes de som de vogal (an apple).' },
        ],
      },
      exemplo: {
        titulo: 'As peças em ação',
        celulas: [
          { ref: 'EN', valor: 'This is a book. — Isto é um livro. (dis iz a búk)' },
          { ref: 'EN', valor: 'That is an apple. — Aquilo é uma maçã.' },
          { ref: 'P/R', valor: 'Is it here? — Está aqui? → Yes, it is. / No, it isn’t.' },
          { ref: 'a vs an', valor: 'a dog / an egg (an antes de som de vogal)' },
        ],
        formula: 'this/that + is + a/an + coisa',
        resultado: 'Você aponta, identifica e responde sim/não.',
        comentario: 'Plural de this/that: these (estes) e those (aqueles). E lembre: "an" é pelo SOM de vogal (an hour — "an áuer" — porque o H é mudo).',
      },
      vocabulario: [
        { palavra: 'this / that', def: 'este/isto (perto) / aquele/aquilo (longe).' },
        { palavra: 'a / an', def: 'um/uma. "an" antes de som de vogal (a/e/i/o/u).' },
        { palavra: 'here / there', def: 'aqui / lá.' },
      ],
      chave: [
        'Yes/No, this/that, here/there — aparecem em tudo',
        'a (som de consoante) vs an (som de vogal)',
        'this/that no plural: these/those',
      ],
      porque: 'Essas palavrinhas são o "cimento" de quase todas as frases. Dominá-las faz seu inglês fluir de forma natural — e completam a base do A1 pro projeto final da trilha.',
    },
    pratica: {
      instrucao: 'Pegue alguns objetos perto de você. Vamos praticar apontando e nomeando em voz alta.',
      passos: [
        'Aponte pra algo perto e diga: "This is a..." + objeto (em inglês ou no que souber)',
        'Aponte pra algo longe: "That is a..."',
        'Pratique "a" e "an": a book, an apple, a car, an egg',
        'Faça perguntas sim/não: "Is this a book?" → "Yes, it is" / "No, it isn’t"',
        'Use here/there: "It is here", "It is there"',
        'Tente o plural: "These are books", "Those are apples"',
        'Repita com 3 objetos diferentes',
      ],
    },
    desafio: {
      cenario: 'Descreva 5 objetos ao seu redor usando this/that + a/an, e faça uma pergunta sim/não sobre cada um.',
      requisitos: [
        'Usei "this is" e "that is" corretamente',
        'Acertei "a" e "an" (som de vogal)',
        'Fiz perguntas sim/não (Is this...?)',
        'Respondi com "Yes, it is" / "No, it isn’t"',
        'Usei here e/ou there',
      ],
      dica: 'Não trave por causa do vocabulário do objeto — se não souber a palavra em inglês, use a estrutura ("This is a...") com o que souber. O foco aqui é a estrutura, não decorar mil palavras.',
    },
    validacao: [
      'Sei yes/no, this/that, here/there',
      'Uso "a" e "an" corretamente',
      'Faço perguntas e respostas sim/não',
      'Sei o plural these/those',
      'Pratiquei apontando objetos',
    ],
  },

  'en-a1-basico-6': {
    trilhaId: 'en-a1-basico', numero: 6, titulo: 'Projeto: apresente-se em inglês',
    tempoTotal: 15, xp: 90, vertente: 'ingles',
    aula: {
      gancho: 'Hora de juntar tudo: você vai montar e falar uma apresentação completa sobre você, em inglês. É o seu primeiro "eu consigo falar inglês!" — e a prova de que a base A1 está firme.',
      conceito: {
        titulo: 'Sua primeira fala em inglês, do início ao fim',
        texto: 'Você já tem todas as peças: cumprimentar, dizer e soletrar o nome, usar o "to be", responder as perguntas básicas e usar as palavras essenciais. Agora vamos juntá-las numa apresentação pessoal — algo que serve numa viagem, numa aula, num primeiro contato de trabalho. Montar e falar isso de ponta a ponta consolida toda a trilha.',
      },
      estrutura: {
        titulo: 'A estrutura da apresentação',
        partes: [
          { simbolo: '1', desc: 'Cumprimento: "Hello! / Hi! Good morning!"' },
          { simbolo: '2', desc: 'Nome: "My name is... / I’m..." (e soletrar, se pedirem)' },
          { simbolo: '3', desc: 'Origem e idade: "I’m from... / I’m ... years old."' },
          { simbolo: '4', desc: 'Algo sobre você + fecho: "I’m a... / Nice to meet you!"' },
        ],
      },
      exemplo: {
        titulo: 'Apresentação modelo',
        celulas: [
          { ref: '1', valor: 'Hello! Good morning!' },
          { ref: '2', valor: 'My name is Maria. I’m from Brazil.' },
          { ref: '3', valor: 'I’m 52 years old. I’m a cook. (cozinheira)' },
          { ref: '4', valor: 'Nice to meet you!' },
        ],
        formula: 'Cumprimento → nome → origem/idade → algo seu → "Nice to meet you"',
        resultado: 'Uma apresentação completa, sua, em inglês.',
        comentario: 'Grave a sua apresentação no celular e ouça. Você vai se surpreender — e ouvir ajuda a melhorar. Guarde como prova do seu primeiro marco no inglês!',
      },
      vocabulario: [
        { palavra: 'I’m a...', def: 'Eu sou um(a)... + profissão (I’m a teacher = sou professor).' },
        { palavra: 'years old', def: 'anos de idade (I’m 40 years old).' },
        { palavra: 'Nice to meet you', def: 'Prazer em conhecer — fecho de apresentação.' },
      ],
      chave: [
        'Junte tudo: cumprimento + nome + origem/idade + algo seu + fecho',
        'Use o "to be" (I’m) na maioria das frases',
        'Praticar em voz alta (e gravar) consolida o aprendizado',
      ],
      porque: 'Saber se apresentar em inglês é a competência número 1 do A1 — abre viagens, contatos e oportunidades. Concluir este projeto é seu primeiro grande marco: você fala inglês de verdade, ainda que no básico.',
    },
    pratica: {
      instrucao: 'Reserve 15 minutos. Monte e ensaie sua apresentação, usando tudo da trilha.',
      passos: [
        'Escreva sua apresentação seguindo a estrutura (cumprimento → nome → origem/idade → algo seu → fecho)',
        'Use o "to be" (I’m) e as perguntas/respostas que aprendeu',
        'Inclua sua profissão ou algo sobre você ("I’m a...")',
        'Leia em voz alta devagar, com as dicas de pronúncia',
        'Repita até sair sem travar',
        'Grave a sua apresentação no celular',
        'Ouça a gravação e repita uma vez melhorando',
      ],
    },
    desafio: {
      cenario: 'Apresente-se em inglês do início ao fim — escrito E falado (grave em áudio ou fale pra alguém).',
      requisitos: [
        'Comecei com um cumprimento',
        'Disse meu nome (e sei soletrar se pedirem)',
        'Disse minha origem e idade',
        'Falei algo sobre mim (profissão/gosto) com "I’m a..."',
        'Fechei com "Nice to meet you"',
        'Pratiquei em voz alta (de preferência gravei)',
      ],
      dica: 'Parabéns — você concluiu a primeira trilha de inglês! Guarde essa gravação. Daqui a algumas semanas, refaça e compare: ver o próprio progresso é o que mais motiva a continuar. Keep going! (continue!)',
    },
    validacao: [
      'Montei uma apresentação completa',
      'Usei o "to be" nas frases',
      'Respondi nome, origem, idade',
      'Falei algo sobre mim',
      'Pratiquei em voz alta / gravei',
      'Concluí meu primeiro marco no inglês',
    ],
  },
};
