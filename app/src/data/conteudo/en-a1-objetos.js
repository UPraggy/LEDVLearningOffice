// ============================================================================
// CONTEÚDO — Inglês A1: Coisas e Lugares de Casa (en-a1-objetos)
// Demonstrativos (this/that/these/those), vocabulário da casa, plural + a/an,
// preposições de lugar, have got (posse), e projeto: o tour da sua casa.
// ============================================================================

export const EN_A1_OBJETOS = {
  'en-a1-objetos-1': {
    trilhaId: 'en-a1-objetos', numero: 1, titulo: 'This, that, these, those',
    tempoTotal: 8, xp: 40, vertente: 'ingles',
    aula: {
      gancho: 'Você aponta pra um objeto perto e diz "isto"; aponta pra um longe e diz "aquilo". Em inglês há quatro palavrinhas pra isso — e escolher a certa depende de duas coisas: a distância e se é um ou vários.',
      conceito: {
        titulo: 'Apontar perto e longe, no singular e no plural',
        texto: 'Os demonstrativos mostram coisas pela DISTÂNCIA (perto/longe) e pela QUANTIDADE (um/vários). PERTO: this (isto, singular) e these (estes, plural). LONGE: that (aquilo, singular) e those (aqueles, plural). "This book" = este livro (aqui na mão); "that car" = aquele carro (lá longe); "these shoes" = estes sapatos (aqui); "those houses" = aquelas casas (lá). Regra simples: TH-IS e TH-ESE são pra perto; TH-AT e TH-OSE pra longe. E o "-se" de theSE/thoSE lembra plural.',
      },
      estrutura: {
        titulo: 'Os quatro demonstrativos',
        partes: [
          { simbolo: 'this', desc: 'Perto + singular: this phone (este telefone).' },
          { simbolo: 'these', desc: 'Perto + plural: these keys (estas chaves).' },
          { simbolo: 'that', desc: 'Longe + singular: that dog (aquele cachorro).' },
          { simbolo: 'those', desc: 'Longe + plural: those people (aquelas pessoas).' },
        ],
      },
      exemplo: {
        titulo: 'Perto x longe, um x vários',
        celulas: [
          { ref: 'EN', valor: 'This is my pen. — Esta é a minha caneta.' },
          { ref: 'EN', valor: 'These are my pens. — Estas são as minhas canetas.' },
          { ref: 'EN', valor: 'That is your bag. — Aquela é a sua bolsa.' },
          { ref: 'EN', valor: 'Those are your bags. — Aquelas são as suas bolsas.' },
        ],
        formula: 'this/these = perto • that/those = longe • -se = plural',
        resultado: 'Você aponta e identifica coisas em inglês.',
        comentario: 'Truque de memória: "this/these" têm o som de "i" curto e são pra o que está perto (à mão); "that/those" têm o "a" e são pra o que está longe. E sempre que terminar em "-se" (theSE, thoSE), é plural. Comece prestando atenção: o objeto está perto ou longe? é um ou vários?',
      },
      vocabulario: [
        { palavra: 'this', def: 'este/isto — perto, singular.' },
        { palavra: 'these', def: 'estes/estas — perto, plural.' },
        { palavra: 'that / those', def: 'aquele(s) — longe, singular / plural.' },
      ],
      chave: [
        'this/these = perto • that/those = longe',
        'this/that = singular • these/those = plural',
        'O "-se" lembra plural (these, those)',
      ],
      porque: 'Apontar e identificar objetos ("o que é isto?", "quanto custa aquilo?") é das primeiras coisas que você faz numa loja, na casa de alguém ou na rua. Os demonstrativos são básicos e aparecem o tempo todo.',
    },
    pratica: {
      instrucao: 'Aponte para objetos ao seu redor e nomeie em voz alta.',
      passos: [
        'Pegue algo na mão e diga: "This is a ..."',
        'Aponte algo longe: "That is a ..."',
        'Mostre vários objetos perto: "These are ..."',
        'Aponte vários longe: "Those are ..."',
        'Pergunte: "What is this?" / "What are those?"',
        'Lembre: termina em -se (these/those) = plural',
        'Faça 4 frases, 2 perto e 2 longe',
      ],
    },
    desafio: {
      cenario: 'Olhe ao redor e faça 5 frases usando this, that, these e those com objetos reais perto e longe de você.',
      requisitos: [
        'Usei this para algo perto e singular',
        'Usei these para algo perto e plural',
        'Usei that para algo longe e singular',
        'Usei those para algo longe e plural',
        'Falei em voz alta apontando os objetos',
      ],
      dica: 'Confusão comum: usar "this" pra plural. Se forem VÁRIOS objetos, use "these" (perto) ou "those" (longe) — os que terminam em -se.',
    },
    validacao: [
      'Sei a diferença perto/longe',
      'Sei a diferença singular/plural',
      'Uso this e these corretamente',
      'Uso that e those corretamente',
      'Pratiquei apontando objetos',
    ],
  },

  'en-a1-objetos-2': {
    trilhaId: 'en-a1-objetos', numero: 2, titulo: 'A casa e seus cômodos',
    tempoTotal: 10, xp: 60, vertente: 'ingles',
    aula: {
      gancho: 'Sala, cozinha, quarto, banheiro — saber o nome dos cômodos e do que tem dentro deles te deixa falar da sua casa, entender instruções ("it\'s in the kitchen") e descrever onde você mora.',
      conceito: {
        titulo: 'Os cômodos e os objetos do dia a dia',
        texto: 'Vamos nomear a casa (the house / the home) e seus cômodos (rooms): living room (sala), kitchen (cozinha), bedroom (quarto), bathroom (banheiro), e outros como dining room (sala de jantar) e garage (garagem). E os objetos comuns: table (mesa), chair (cadeira), bed (cama), sofa (sofá), fridge (geladeira), stove (fogão), door (porta), window (janela), TV (televisão). Com esse vocabulário você já descreve sua casa: "In the kitchen, there is a stove and a fridge" (na cozinha, há um fogão e uma geladeira).',
      },
      estrutura: {
        titulo: 'Cômodos e o que há neles',
        partes: [
          { simbolo: 'living room', desc: 'Sala: sofa, TV, table.' },
          { simbolo: 'kitchen', desc: 'Cozinha: fridge, stove, sink (pia).' },
          { simbolo: 'bedroom', desc: 'Quarto: bed, wardrobe (guarda-roupa).' },
          { simbolo: 'bathroom', desc: 'Banheiro: shower (chuveiro), mirror (espelho).' },
        ],
      },
      exemplo: {
        titulo: 'Falando da casa',
        celulas: [
          { ref: 'EN', valor: 'My house has three rooms. — Minha casa tem três cômodos.' },
          { ref: 'EN', valor: 'The TV is in the living room. — A TV está na sala.' },
          { ref: 'EN', valor: 'There is a bed in the bedroom. — Há uma cama no quarto.' },
          { ref: 'EN', valor: 'The fridge is in the kitchen. — A geladeira fica na cozinha.' },
        ],
        formula: 'room (cômodo) + objects (objetos) = describe your home',
        resultado: 'Você nomeia cômodos e objetos da casa.',
        comentario: 'Aprenda o vocabulário por AMBIENTE: pense na sua cozinha real e nomeie cada coisa (fridge, stove, sink, table). Associar a palavra ao objeto que você vê todo dia fixa muito mais rápido que decorar listas soltas. Cole etiquetas com o nome em inglês nos objetos da casa por uma semana — funciona.',
      },
      vocabulario: [
        { palavra: 'room', def: 'cômodo/sala (bedroom = quarto, bathroom = banheiro).' },
        { palavra: 'furniture', def: 'móveis (table, chair, bed, sofa).' },
        { palavra: 'kitchen / fridge', def: 'cozinha / geladeira.' },
      ],
      chave: [
        'Cômodos: living room, kitchen, bedroom, bathroom',
        'Objetos: table, chair, bed, sofa, fridge, door, window',
        'Aprenda por ambiente, associando ao objeto real',
      ],
      porque: 'Descrever onde você mora, entender "está na cozinha", pedir ou achar coisas em casa — tudo usa esse vocabulário. É a base pra falar do seu lar e do cotidiano.',
    },
    pratica: {
      instrucao: 'Faça um tour falado pela sua casa, nomeando tudo.',
      passos: [
        'Nomeie cada cômodo: "This is the living room."',
        'Aponte 3 objetos em cada cômodo em inglês',
        'Diga onde está um objeto: "The TV is in the ..."',
        'Conte os cômodos: "My house has ... rooms."',
        'Use "there is a ..." pra um objeto de cada cômodo',
        'Repita o tour sem olhar as palavras',
        'Liste 10 objetos da sua casa em inglês',
      ],
    },
    desafio: {
      cenario: 'Descreva sua casa em 5 frases: nomeie os cômodos e diga um objeto importante de cada um.',
      requisitos: [
        'Nomeei pelo menos 3 cômodos em inglês',
        'Citei objetos certos em cada cômodo',
        'Usei "in the ..." pra localizar',
        'Usei "there is a ..." corretamente',
        'Pratiquei o tour em voz alta',
      ],
      dica: 'Não tente decorar 50 palavras de uma vez. Escolha os 10 objetos que você mais usa em casa e domine esses primeiro — depois acrescente aos poucos.',
    },
    validacao: [
      'Sei os nomes dos cômodos',
      'Sei objetos comuns de cada cômodo',
      'Sei localizar com "in the ..."',
      'Uso "there is a ..."',
      'Descrevi minha casa em voz alta',
    ],
  },

  'en-a1-objetos-3': {
    trilhaId: 'en-a1-objetos', numero: 3, titulo: 'Plural e a/an',
    tempoTotal: 10, xp: 70, vertente: 'ingles',
    aula: {
      gancho: 'Um livro, dois livros. Em inglês, quase sempre é só colocar um -s no fim — mas há truques pra algumas palavras, e dois artiguinhos (a/an) que mudam conforme o som da palavra seguinte.',
      conceito: {
        titulo: 'Formar plurais e usar a/an',
        texto: 'PLURAL: a regra geral é acrescentar -s: book → books, car → cars. Mas: palavras terminadas em -s, -ss, -sh, -ch, -x ganham -es (bus → buses, box → boxes, watch → watches); terminadas em consoante + y trocam o y por -ies (city → cities, baby → babies); e há IRREGULARES pra decorar (man → men, woman → women, child → children, foot → feet). ARTIGOS a/an (um/uma): use "a" antes de som de consoante (a book, a house) e "an" antes de som de vogal (an apple, an hour). Atenção: é o SOM, não a letra — "an hour" (o h é mudo) e "a university" (soa "iuniversity", som de consoante).',
      },
      estrutura: {
        titulo: 'Plurais e artigos',
        partes: [
          { simbolo: '+s', desc: 'Regra geral: book → books, table → tables.' },
          { simbolo: '+es', desc: 'Após -s/-sh/-ch/-x: box → boxes, watch → watches.' },
          { simbolo: 'y→ies', desc: 'Consoante + y: city → cities, baby → babies.' },
          { simbolo: 'a/an', desc: 'a + som de consoante • an + som de vogal.' },
        ],
      },
      exemplo: {
        titulo: 'Singular e plural',
        celulas: [
          { ref: 'Regular', valor: 'one chair → two chairs (cadeira → cadeiras)' },
          { ref: '+es', valor: 'one box → two boxes (caixa → caixas)' },
          { ref: 'Irregular', valor: 'one child → two children (criança → crianças)' },
          { ref: 'a/an', valor: 'a car, an egg, an hour, a house' },
        ],
        formula: 'singular + (-s/-es/-ies/irregular) = plural • a/an pelo SOM',
        resultado: 'Você forma plurais e escolhe a/an certo.',
        comentario: 'O detalhe que confunde: a/an depende do SOM da palavra seguinte, não da letra. "An hour" (h mudo, soa vogal) e "a university" (soa "yu", consoante). Para os plurais, a regra geral (+s) cobre a maioria; vale só memorizar os poucos irregulares mais comuns (men, women, children, feet, people).',
      },
      vocabulario: [
        { palavra: 'plural', def: 'mais de um; geralmente +s (cars, books).' },
        { palavra: 'a / an', def: 'um/uma — a (som consoante), an (som vogal).' },
        { palavra: 'irregular plural', def: 'plural fora da regra (man→men, child→children).' },
      ],
      chave: [
        'Regra geral do plural: +s (ou -es, y→ies)',
        'Decore os irregulares: men, women, children, feet',
        'a/an depende do SOM, não da letra',
      ],
      porque: 'Plural e artigos aparecem em praticamente toda frase ("two coffees, please", "an email"). Acertar isso é base pra falar e escrever corretamente desde o começo.',
    },
    pratica: {
      instrucao: 'Pratique transformar singular em plural e escolher a/an.',
      passos: [
        'Forme o plural: book, car, table, phone (+s)',
        'Forme o plural: box, watch, dish (+es)',
        'Forme o plural: city, baby, country (y→ies)',
        'Diga os irregulares: man, woman, child, foot',
        'Escolha a/an: ___ apple, ___ house, ___ hour',
        'Diga "a" antes de som de consoante; "an" antes de vogal',
        'Monte 5 frases com plural e com a/an',
      ],
    },
    desafio: {
      cenario: 'Escreva 5 frases: pelo menos duas com plurais (incluindo um irregular) e duas usando a/an corretamente.',
      requisitos: [
        'Formei plurais regulares com +s/-es/-ies',
        'Usei pelo menos um plural irregular',
        'Escolhi "a" antes de som de consoante',
        'Escolhi "an" antes de som de vogal',
        'Pratiquei em voz alta',
      ],
      dica: 'A pegadinha clássica: "an hour" e "a university". Pronuncie a palavra na cabeça: se começa com SOM de vogal, use "an"; se começa com SOM de consoante, use "a" — ignore a letra escrita.',
    },
    validacao: [
      'Sei a regra geral do plural (+s)',
      'Sei -es e y→ies',
      'Conheço os irregulares comuns',
      'Uso a/an pelo som',
      'Pratiquei plural e artigos',
    ],
  },

  'en-a1-objetos-4': {
    trilhaId: 'en-a1-objetos', numero: 4, titulo: 'Preposições de lugar',
    tempoTotal: 11, xp: 70, vertente: 'ingles',
    aula: {
      gancho: 'O livro está EM CIMA da mesa, DENTRO da gaveta, AO LADO do copo? As preposições de lugar dizem onde as coisas estão — e são essenciais pra achar, descrever e dar direções dentro de casa.',
      conceito: {
        titulo: 'Onde as coisas estão',
        texto: 'As preposições de lugar localizam objetos no espaço. As principais: in (dentro de) — "in the box"; on (em cima de, em contato) — "on the table"; under (embaixo de) — "under the bed"; next to / beside (ao lado de) — "next to the door"; between (entre dois) — "between the chairs"; in front of (na frente de) e behind (atrás de); near (perto de). A diferença mais importante é in x on: IN é dentro (in the drawer = dentro da gaveta); ON é em cima/em contato com a superfície (on the table = sobre a mesa). Com elas você responde "Where is it?" (onde está?).',
      },
      estrutura: {
        titulo: 'As preposições principais',
        partes: [
          { simbolo: 'in / on', desc: 'in = dentro (in the box) • on = em cima (on the table).' },
          { simbolo: 'under', desc: 'embaixo de: The cat is under the chair.' },
          { simbolo: 'next to', desc: 'ao lado de: The lamp is next to the bed.' },
          { simbolo: 'between', desc: 'entre dois: The TV is between the windows.' },
        ],
      },
      exemplo: {
        titulo: 'Where is it?',
        celulas: [
          { ref: 'EN', valor: 'The keys are on the table. — As chaves estão sobre a mesa.' },
          { ref: 'EN', valor: 'The shoes are under the bed. — Os sapatos estão sob a cama.' },
          { ref: 'EN', valor: 'The phone is in the bag. — O telefone está dentro da bolsa.' },
          { ref: 'EN', valor: 'The chair is next to the door. — A cadeira está ao lado da porta.' },
        ],
        formula: 'Where is X? → X is + preposição + the place',
        resultado: 'Você diz onde as coisas estão.',
        comentario: 'O par que mais confunde é in x on. Pense: IN é "dentro" (envolto por algo: in the drawer, in the box); ON é "sobre/em contato com a superfície" (on the table, on the wall, on the floor). Pratique pegando objetos e dizendo onde os coloca: "The cup is on the table", "I put it in the bag".',
      },
      vocabulario: [
        { palavra: 'in / on / under', def: 'dentro / em cima / embaixo.' },
        { palavra: 'next to / between', def: 'ao lado de / entre dois.' },
        { palavra: 'Where is...?', def: 'Onde está...? — pergunta de localização.' },
      ],
      chave: [
        'in = dentro • on = em cima • under = embaixo',
        'next to = ao lado • between = entre dois',
        'Responda "Where is X?" com preposição + lugar',
      ],
      porque: 'Achar e descrever onde as coisas estão é uso constante: em casa, numa loja, dando direções. As preposições de lugar destravam respostas a "onde está?" e descrições de ambientes.',
    },
    pratica: {
      instrucao: 'Localize objetos reais ao seu redor usando preposições.',
      passos: [
        'Coloque algo na mesa: "The ... is on the table."',
        'Coloque algo dentro de uma caixa/bolsa: "in the ..."',
        'Olhe embaixo de um móvel: "under the ..."',
        'Descreva algo ao lado de outro: "next to the ..."',
        'Ache algo entre dois objetos: "between the ..."',
        'Pergunte e responda: "Where is the ...?"',
        'Descreva a posição de 5 objetos',
      ],
    },
    desafio: {
      cenario: 'Descreva onde estão 5 objetos no cômodo onde você está, usando preposições diferentes (in, on, under, next to, between).',
      requisitos: [
        'Usei "on" para algo sobre uma superfície',
        'Usei "in" para algo dentro de outro',
        'Usei "under" corretamente',
        'Usei "next to" e/ou "between"',
        'Respondi "Where is...?" em voz alta',
      ],
      dica: 'Erro frequente: usar "in" pra tudo. Lembre: se está DENTRO (envolto), é "in"; se está EM CIMA/sobre a superfície, é "on". "In the box" x "on the box".',
    },
    validacao: [
      'Sei a diferença in x on',
      'Sei usar under',
      'Sei next to e between',
      'Respondo "Where is...?"',
      'Descrevi posições reais',
    ],
  },

  'en-a1-objetos-5': {
    trilhaId: 'en-a1-objetos', numero: 5, titulo: 'Have got: o que eu tenho',
    tempoTotal: 11, xp: 80, vertente: 'ingles',
    aula: {
      gancho: '"Eu tenho dois irmãos", "ela tem um carro", "você tem caneta?". Falar do que se possui é constante — e o inglês tem uma forma bem comum pra isso: have got / has got.',
      conceito: {
        titulo: 'Falar de posse com have got',
        texto: 'Para dizer o que você TEM/possui, use have got (ou apenas have). I/you/we/they → have got: "I have got a car" (eu tenho um carro), normalmente abreviado "I\'ve got a car". He/she/it → has got: "She has got two kids" → "She\'s got two kids". NEGATIVO: haven\'t got / hasn\'t got — "I haven\'t got a pet" (não tenho bicho de estimação). PERGUNTA: inverte — "Have you got a pen?" (você tem caneta?), "Has he got a job?". Resposta curta: "Yes, I have / No, I haven\'t". É muito usado no inglês britânico no dia a dia; no americano, costuma-se usar só "have" (I have a car / Do you have a pen?). Os dois estão certos.',
      },
      estrutura: {
        titulo: 'Have got / has got',
        partes: [
          { simbolo: '+ (I)', desc: 'I/you/we/they have got: I\'ve got a phone.' },
          { simbolo: '+ (she)', desc: 'he/she/it has got: She\'s got a dog.' },
          { simbolo: '– neg', desc: 'haven\'t/hasn\'t got: I haven\'t got time.' },
          { simbolo: '? perg', desc: 'Have/Has + sujeito + got: Have you got a car?' },
        ],
      },
      exemplo: {
        titulo: 'Posse no dia a dia',
        celulas: [
          { ref: 'EN', valor: 'I\'ve got two brothers. — Tenho dois irmãos.' },
          { ref: 'EN', valor: 'She\'s got a new phone. — Ela tem um celular novo.' },
          { ref: 'EN', valor: 'We haven\'t got a car. — Não temos carro.' },
          { ref: 'EN', valor: 'Have you got a pen? — Você tem uma caneta?' },
        ],
        formula: 'have got (I/you/we/they) • has got (he/she/it)',
        resultado: 'Você fala do que tem (e não tem).',
        comentario: 'Atenção ao "got": ele acompanha o have/has nessa estrutura, mas o significado é só "ter/possuir". A forma abreviada é o que você mais vai ouvir: I\'ve got, she\'s got, haven\'t got. Se preferir, "have" sozinho funciona igual (I have two brothers) — é só outro jeito, comum no inglês americano.',
      },
      vocabulario: [
        { palavra: 'have got', def: 'ter/possuir (I/you/we/they). Abrev.: \'ve got.' },
        { palavra: 'has got', def: 'ter/possuir (he/she/it). Abrev.: \'s got.' },
        { palavra: 'haven\'t / hasn\'t got', def: 'não ter (forma negativa).' },
      ],
      chave: [
        'have got (eu/você/nós/eles) • has got (ele/ela)',
        'Negativo: haven\'t/hasn\'t got',
        'Pergunta: Have/Has + sujeito + got?',
      ],
      porque: 'Falar de posse — família, objetos, características ("I\'ve got brown eyes") — é cotidiano. Have got é uma das formas mais ouvidas de dizer "ter" em conversas reais.',
    },
    pratica: {
      instrucao: 'Fale do que você e sua família têm, usando have/has got.',
      passos: [
        'Diga o que você tem: "I\'ve got ..."',
        'Fale de alguém: "My mother has got ..."',
        'Diga algo que não tem: "I haven\'t got ..."',
        'Pergunte a alguém: "Have you got ...?"',
        'Responda curto: "Yes, I have / No, I haven\'t"',
        'Descreva sua família: "I\'ve got ... brothers/sisters"',
        'Monte 5 frases de posse (+, –, ?)',
      ],
    },
    desafio: {
      cenario: 'Faça 5 frases sobre o que você e pessoas próximas têm: uma afirmativa, uma negativa, uma pergunta e duas livres.',
      requisitos: [
        'Usei "have got" com I/you/we/they',
        'Usei "has got" com he/she/it',
        'Fiz uma negativa (haven\'t/hasn\'t got)',
        'Fiz uma pergunta (Have/Has ... got?)',
        'Usei as formas abreviadas (\'ve/\'s got)',
      ],
      dica: 'Cuidado com he/she/it: é "HAS got", não "have got". "She HAS got a car" (não "She have got"). A 3ª pessoa muda have → has, como sempre no inglês.',
    },
    validacao: [
      'Sei have got x has got',
      'Faço a negativa corretamente',
      'Faço perguntas com Have/Has got',
      'Uso as formas abreviadas',
      'Falei de posse em voz alta',
    ],
  },

  'en-a1-objetos-6': {
    trilhaId: 'en-a1-objetos', numero: 6, titulo: 'Projeto: o tour da sua casa',
    tempoTotal: 18, xp: 120, vertente: 'ingles',
    aula: {
      gancho: 'Hora de juntar tudo: você vai fazer um "tour" pela sua casa em inglês — nomeando cômodos e objetos, dizendo onde as coisas estão e o que você tem. É a sua primeira descrição completa de um ambiente real.',
      conceito: {
        titulo: 'Descrever sua casa do começo ao fim',
        texto: 'Este projeto reúne a trilha numa descrição falada (e escrita) da sua casa: 1) DEMONSTRATIVOS — ao mostrar cada cômodo, use "This is the kitchen", "That is my bedroom"; 2) CÔMODOS e OBJETOS — nomeie cada ambiente e os objetos principais (in the living room: a sofa, a TV); 3) PLURAL e a/an — "There are two chairs", "a table, an old lamp"; 4) PREPOSIÇÕES — diga onde as coisas estão (the TV is on the table, the shoes are under the bed); 5) HAVE GOT — fale do que sua casa tem (My house has got three rooms / I\'ve got a small kitchen). O objetivo é produzir um tour completo de 8 a 10 frases que use as cinco estruturas da trilha. Comece simples e capriche na pronúncia, falando em voz alta. Ao final, você terá descrito um ambiente inteiro em inglês — uma conquista enorme pra quem está começando.',
      },
      estrutura: {
        titulo: 'O que o tour deve ter',
        partes: [
          { simbolo: 'this/that', desc: 'Apresentar cada cômodo: "This is the..."' },
          { simbolo: 'vocab', desc: 'Cômodos e objetos nomeados corretamente.' },
          { simbolo: 'in/on/under', desc: 'Onde as coisas estão (preposições).' },
          { simbolo: 'have got', desc: 'O que a casa/você tem (have/has got).' },
        ],
      },
      exemplo: {
        titulo: 'Um tour modelo',
        celulas: [
          { ref: 'EN', valor: 'This is the living room. There is a sofa and a TV.' },
          { ref: 'EN', valor: 'The TV is on the table, next to the window.' },
          { ref: 'EN', valor: 'My house has got three rooms.' },
          { ref: 'EN', valor: 'In the kitchen, there are two chairs and a fridge.' },
        ],
        formula: 'this/that + vocab + a/an/plural + prepositions + have got = tour completo',
        resultado: 'Você descreve sua casa inteira em inglês.',
        comentario: 'O segredo do projeto é INTEGRAR: cada frase pode combinar várias estruturas ("This is the kitchen; it has got a fridge and two chairs"). Não busque frases perfeitas; busque um tour que flua e use o que você aprendeu. Grave-se falando e ouça: você vai se surpreender em descrever um ambiente inteiro. É a prova de que a trilha funcionou.',
      },
      vocabulario: [
        { palavra: 'tour', def: 'passeio/visita guiada — aqui, descrever a casa cômodo a cômodo.' },
        { palavra: 'There is / There are', def: 'há (um / vários) — apresenta o que existe no lugar.' },
        { palavra: 'describe', def: 'descrever — dizer como algo é e o que tem.' },
      ],
      chave: [
        'Integre as 5 estruturas num tour de 8–10 frases',
        'Use this/that, vocab, a/an, preposições e have got',
        'Fale em voz alta e grave-se pra conferir',
      ],
      porque: 'Descrever um ambiente real consolida tudo de uma vez e mostra progresso concreto. Falar da própria casa é útil de verdade (apresentar onde mora) e dá a confiança de que você já produz inglês, não só reconhece.',
    },
    pratica: {
      instrucao: 'Monte e apresente o tour da sua casa em inglês.',
      passos: [
        'Liste seus cômodos e os objetos principais de cada um',
        'Apresente cada cômodo com "This is the..." / "That is..."',
        'Diga o que há em cada um com "There is / There are"',
        'Localize objetos com preposições (on, in, under, next to)',
        'Fale do que a casa tem com "has got / I\'ve got"',
        'Junte tudo num tour de 8 a 10 frases',
        'Grave-se fazendo o tour e ouça pra ajustar',
      ],
    },
    desafio: {
      cenario: 'Faça um tour falado de 8 a 10 frases pela sua casa, usando as cinco estruturas da trilha: demonstrativos, vocabulário de cômodos/objetos, plural e a/an, preposições de lugar e have got.',
      requisitos: [
        'Apresentei cômodos com this/that',
        'Nomeei objetos corretos com a/an e plurais',
        'Localizei coisas com preposições de lugar',
        'Falei do que a casa/eu tenho com have/has got',
        'Apresentei o tour completo em voz alta',
      ],
      dica: 'Não decore um texto: faça um tour de verdade, andando pela casa e nomeando o que vê. O movimento e os objetos reais ajudam a memória, e o resultado soa muito mais natural do que recitar.',
    },
    validacao: [
      'Usei demonstrativos no tour',
      'Nomeei cômodos e objetos',
      'Usei plural e a/an',
      'Usei preposições de lugar',
      'Usei have got e apresentei em voz alta',
    ],
  },
};
