// ============================================================================
// CONTEÚDO — Inglês A2: Comida e Restaurante (en-a2-comida)
// Comidas/bebidas, contáveis/incontáveis (some/any, much/many), gostos, pedir.
// ============================================================================

export const EN_A2_COMIDA = {
  'en-a2-comida-1': {
    trilhaId: 'en-a2-comida', numero: 1, titulo: 'Comidas e bebidas',
    tempoTotal: 9, xp: 50, vertente: 'ingles',
    aula: {
      gancho: 'Comida é assunto universal e essencial pra viajar: pedir, comprar, falar do que você gosta. Com o vocabulário certo, você se vira em qualquer mercado ou restaurante pelo mundo.',
      conceito: {
        titulo: 'O vocabulário da mesa',
        texto: 'Vamos aprender as comidas e bebidas mais comuns. São palavras que você usa em mercados, restaurantes e conversas. Agrupá-las por tipo (frutas, bebidas, refeições) ajuda a memorizar. Esse vocabulário é a base pras próximas missões: falar de quantidades, gostos e pedir no restaurante.',
      },
      estrutura: {
        titulo: 'Comidas e bebidas comuns',
        partes: [
          { simbolo: '🍞', desc: 'Básicos: bread (pão), rice (arroz), meat (carne), fish (peixe), egg (ovo).' },
          { simbolo: '🍎', desc: 'Frutas/legumes: apple, banana, tomato, potato, salad.' },
          { simbolo: '🥤', desc: 'Bebidas: water (água), coffee, tea (chá), milk (leite), juice (suco).' },
          { simbolo: '🍽️', desc: 'Refeições: breakfast, lunch, dinner.' },
        ],
      },
      exemplo: {
        titulo: 'Comida em frases',
        celulas: [
          { ref: 'EN', valor: 'I eat bread for breakfast. — Como pão no café.' },
          { ref: 'EN', valor: 'I drink coffee in the morning. — Bebo café de manhã.' },
          { ref: 'Útil', valor: 'I’m hungry/thirsty — estou com fome/sede' },
          { ref: 'Dica', valor: 'agrupe por tipo pra memorizar melhor' },
        ],
        formula: 'eat (comer) + comida · drink (beber) + bebida',
        resultado: 'Você nomeia o que come e bebe.',
        comentario: 'Duas palavras úteis: "hungry" (com fome) e "thirsty" (com sede). "I’m hungry" = estou com fome (note o "to be", não "have").',
      },
      vocabulario: [
        { palavra: 'food / drink', def: 'comida / bebida.' },
        { palavra: 'hungry / thirsty', def: 'com fome / com sede (usa-se com "to be": I’m hungry).' },
        { palavra: 'meal', def: 'refeição (míl).' },
      ],
      chave: [
        'Vocabulário de comidas, bebidas e refeições',
        'eat pra comida, drink pra bebida',
        'hungry/thirsty com "to be" (I’m hungry)',
      ],
      porque: 'Comida é uma das primeiras necessidades ao viajar ou interagir. Esse vocabulário te dá autonomia em mercados e restaurantes — e é base pras próximas missões.',
    },
    pratica: {
      instrucao: 'Pense no que você come num dia. Vamos nomear em voz alta.',
      passos: [
        'Diga 5 comidas que você come: bread, rice, meat...',
        'Diga 3 bebidas que você toma: water, coffee, juice...',
        'Diga o que come no café: "For breakfast, I eat/drink..."',
        'Diga "I’m hungry" e "I’m thirsty"',
        'Agrupe: frutas, bebidas, refeições',
        'Monte 3 frases com eat/drink + comida/bebida',
        'Repita as palavras novas',
      ],
    },
    desafio: {
      cenario: 'Liste e fale o que você come e bebe num dia típico, agrupando por refeição (breakfast, lunch, dinner).',
      requisitos: [
        'Nomeei comidas e bebidas comuns',
        'Usei "eat" e "drink" corretamente',
        'Organizei por refeição',
        'Usei "I’m hungry/thirsty"',
        'Pratiquei em voz alta',
      ],
      dica: 'Cole etiquetas mentais: ao abrir a geladeira, nomeie os itens em inglês. Associar a palavra ao objeto real fixa o vocabulário sem decorar listas.',
    },
    validacao: [
      'Sei nomear comidas e bebidas',
      'Uso eat e drink',
      'Organizo por refeição',
      'Sei hungry/thirsty',
      'Pratiquei em voz alta',
    ],
  },

  'en-a2-comida-2': {
    trilhaId: 'en-a2-comida', numero: 2, titulo: 'Contáveis e incontáveis',
    tempoTotal: 12, xp: 70, vertente: 'ingles',
    aula: {
      gancho: 'Por que se diz "an apple" mas não "a water"? Porque o inglês separa o que dá pra contar (maçãs) do que não dá (água). Essa lógica define palavrinhas como some, any, much e many.',
      conceito: {
        titulo: 'O que dá pra contar e o que não dá',
        texto: 'Substantivos contáveis têm plural e número (one apple, two apples). Incontáveis não se contam diretamente (water, rice, money) — não têm plural e não usam "a/an". Essa diferença manda em: a/an (só contáveis), much (incontáveis) x many (contáveis), e some/any. É uma lógica diferente do português, mas faz sentido quando você pensa "dá pra contar?".',
      },
      estrutura: {
        titulo: 'As regras-chave',
        partes: [
          { simbolo: 'contável', desc: 'Tem plural: an apple / two apples. Usa many (how many apples?).' },
          { simbolo: 'incontável', desc: 'Sem plural: water, rice, money. Usa much (how much water?).' },
          { simbolo: 'some', desc: 'em afirmativas: I have some bread / some apples.' },
          { simbolo: 'any', desc: 'em negativas e perguntas: I don’t have any milk / Do you have any eggs?' },
        ],
      },
      exemplo: {
        titulo: 'some/any e much/many',
        celulas: [
          { ref: 'some', valor: 'I’d like some water. — Queria um pouco de água.' },
          { ref: 'any (?)', valor: 'Is there any coffee? — Tem café?' },
          { ref: 'many', valor: 'How many apples? — Quantas maçãs? (contável)' },
          { ref: 'much', valor: 'How much water? — Quanta água? (incontável)' },
        ],
        formula: 'some (afirma) · any (nega/pergunta) · many (contável) · much (incontável)',
        resultado: 'Você fala de quantidades corretamente.',
        comentario: 'Truque: "dá pra contar 1, 2, 3?" → contável (many). "É massa/líquido/abstrato?" (water, rice, money, time) → incontável (much). Some pra afirmar, any pra negar e perguntar.',
      },
      vocabulario: [
        { palavra: 'countable / uncountable', def: 'contável / incontável.' },
        { palavra: 'some / any', def: 'algum/um pouco (some: afirma; any: nega/pergunta).' },
        { palavra: 'much / many', def: 'muito (much: incontável; many: contável).' },
      ],
      chave: [
        'Contável tem plural e usa many; incontável usa much',
        'a/an só com contáveis',
        'some (afirmativa) · any (negativa/pergunta)',
      ],
      porque: 'Some, any, much e many aparecem em qualquer conversa sobre comida, compras e quantidades. Entender contável/incontável resolve esses usos de uma vez — um salto importante do A1 pro A2.',
    },
    pratica: {
      instrucao: 'Vamos classificar e falar de quantidades, em voz alta.',
      passos: [
        'Classifique: apple (contável), water (incontável), egg, rice, money',
        'Use "some" afirmando: "I have some bread / some apples"',
        'Use "any" perguntando: "Do you have any milk?"',
        'Use "any" negando: "I don’t have any eggs"',
        'Pergunte com many (contável): "How many apples?"',
        'Pergunte com much (incontável): "How much coffee?"',
        'Monte 4 frases misturando some/any/much/many',
      ],
    },
    desafio: {
      cenario: 'Fale sobre o que tem (e não tem) na sua cozinha, usando some/any e perguntas com much/many corretamente.',
      requisitos: [
        'Classifiquei itens em contáveis e incontáveis',
        'Usei "some" em afirmativas',
        'Usei "any" em negativas/perguntas',
        'Usei "many" pra contáveis e "much" pra incontáveis',
        'Pratiquei em voz alta',
      ],
      dica: 'Na dúvida se é contável: tente colocar um número. "Two waters"? Soa estranho → incontável (much). "Two apples"? Normal → contável (many).',
    },
    validacao: [
      'Diferencio contável de incontável',
      'Uso some e any corretamente',
      'Uso much e many corretamente',
      'Sei que a/an é só pra contáveis',
      'Pratiquei em voz alta',
    ],
  },

  'en-a2-comida-3': {
    trilhaId: 'en-a2-comida', numero: 3, titulo: 'Gostos: like, love, hate',
    tempoTotal: 10, xp: 60, vertente: 'ingles',
    aula: {
      gancho: '"Adoro café", "não gosto de peixe", "odeio acordar cedo" — falar de gostos é o tempero de qualquer conversa. E tem um detalhe curioso: depois desses verbos, o outro verbo ganha "-ing".',
      conceito: {
        titulo: 'Falando do que você gosta (e não gosta)',
        texto: 'Pra expressar gostos: like (gostar), love (amar/adorar), don’t like (não gostar), hate (odiar). Eles vêm com um substantivo (I like coffee) ou com outro verbo no "-ing" (I like cooking = gosto de cozinhar). Esse "-ing" depois de like/love/hate é uma regra importante do inglês — diferente do português.',
      },
      estrutura: {
        titulo: 'Os verbos de gosto',
        partes: [
          { simbolo: '❤️', desc: 'love (amar/adorar) · like (gostar).' },
          { simbolo: '👎', desc: 'don’t like (não gostar) · hate (odiar).' },
          { simbolo: '+ coisa', desc: 'I like coffee. / I love pizza.' },
          { simbolo: '+ verbo-ing', desc: 'I like cooking. / I hate waking up early.' },
        ],
      },
      exemplo: {
        titulo: 'Gostos em ação',
        celulas: [
          { ref: 'EN', valor: 'I love coffee. — Adoro café.' },
          { ref: 'EN', valor: 'I don’t like fish. — Não gosto de peixe.' },
          { ref: '+ing', valor: 'I like cooking. — Gosto de cozinhar.' },
          { ref: 'Pergunta', valor: 'Do you like tea? — Você gosta de chá?' },
        ],
        formula: 'like/love/hate + coisa  OU  + verbo-ing',
        resultado: 'Você expressa gostos e preferências.',
        comentario: 'Na 3ª pessoa, o "s" volta: "She likes coffee", "He loves cooking". E pra perguntar: "Do you like...?" / "Does she like...?".',
      },
      vocabulario: [
        { palavra: 'like / love / hate', def: 'gostar / amar-adorar / odiar.' },
        { palavra: 'verbo + ing', def: 'forma usada após like/love/hate (cooking, reading).' },
        { palavra: 'favourite', def: 'favorito(a): "My favourite food is..."' },
      ],
      chave: [
        'like (gostar), love (adorar), hate (odiar)',
        'Vêm com coisa OU com verbo + ing (I like cooking)',
        '3ª pessoa: likes, loves (com s)',
      ],
      porque: 'Falar de gostos é constante em conversas — sobre comida, hobbies, qualquer coisa. E o verbo + ing depois de like/love/hate é uma estrutura que você vai usar o tempo todo.',
    },
    pratica: {
      instrucao: 'Vamos falar dos seus gostos reais, em voz alta.',
      passos: [
        'Diga 2 comidas que você adora: "I love..."',
        'Diga 1 que você não gosta: "I don’t like..."',
        'Use verbo + ing: "I like cooking", "I hate waking up early"',
        'Diga sua comida favorita: "My favourite food is..."',
        'Fale de outra pessoa (com s): "She likes...", "He loves..."',
        'Pergunte: "Do you like...?"',
        'Monte 4 frases de gosto (com coisa e com -ing)',
      ],
    },
    desafio: {
      cenario: 'Fale 5 frases sobre seus gostos (comidas e atividades), usando like/love/hate — algumas com coisa, outras com verbo + ing.',
      requisitos: [
        'Usei like, love e/ou hate',
        'Usei pelo menos uma com coisa (I love coffee)',
        'Usei pelo menos uma com verbo + ing (I like cooking)',
        'Falei de outra pessoa com o "s" (She likes)',
        'Pratiquei em voz alta',
      ],
      dica: 'Falar de gostos é um ótimo "puxador de conversa". Decore 2-3 frases sobre o que você ama e odeia — sempre rendem assunto numa interação real.',
    },
    validacao: [
      'Uso like/love/hate',
      'Uso com coisa e com verbo + ing',
      'Acerto o "s" na 3ª pessoa',
      'Sei perguntar sobre gostos',
      'Pratiquei em voz alta',
    ],
  },

  'en-a2-comida-4': {
    trilhaId: 'en-a2-comida', numero: 4, titulo: 'No restaurante (pedir)',
    tempoTotal: 11, xp: 70, vertente: 'ingles',
    aula: {
      gancho: 'Sentar num restaurante em inglês e conseguir pedir, perguntar o preço e pagar — sem apontar pro cardápio com vergonha. Algumas frases prontas resolvem toda a situação.',
      conceito: {
        titulo: 'As frases que resolvem o restaurante',
        texto: 'Pedir comida é uma situação previsível: você senta, pede, pergunta o preço, paga. Em inglês, há frases-padrão educadas pra cada momento. A mais útil é "I’d like..." (eu gostaria de...) e "Can I have...?" (posso ter/me vê...?). Dominar meia dúzia de frases te dá total autonomia num restaurante ou lanchonete.',
      },
      estrutura: {
        titulo: 'O roteiro do pedido',
        partes: [
          { simbolo: '📋', desc: 'Pedir cardápio: "Can I see the menu, please?"' },
          { simbolo: '🍽️', desc: 'Pedir: "I’d like..." / "Can I have...?" (educado).' },
          { simbolo: '💵', desc: 'Conta: "Can I have the bill/check, please?"' },
          { simbolo: '🙏', desc: 'Educação: please e thank you em todo pedido.' },
        ],
      },
      exemplo: {
        titulo: 'Pedindo no restaurante',
        celulas: [
          { ref: 'Garçom', valor: 'Are you ready to order? — Pronto pra pedir?' },
          { ref: 'Você', valor: 'I’d like a coffee, please. — Queria um café.' },
          { ref: 'Você', valor: 'Can I have the menu? — Pode me ver o cardápio?' },
          { ref: 'Conta', valor: 'The bill, please. — A conta, por favor.' },
        ],
        formula: '"I’d like..." / "Can I have...?" + please',
        resultado: 'Você pede e paga com autonomia e educação.',
        comentario: '"I’d like" é a forma curta de "I would like" — mais educado que "I want". Use sempre "please". E "bill" (britânico) = "check" (americano) pra a conta.',
      },
      vocabulario: [
        { palavra: "I'd like...", def: 'Eu gostaria de... (forma educada de pedir).' },
        { palavra: 'Can I have...?', def: 'Posso ter...? / Me vê...? (pedido educado).' },
        { palavra: 'bill / check', def: 'a conta (bill britânico, check americano).' },
      ],
      chave: [
        '"I’d like..." e "Can I have...?" pra pedir (educado)',
        'Sempre com "please"',
        'A conta: "The bill/check, please"',
      ],
      porque: 'Pedir comida é uma das situações mais comuns ao viajar. Com essas frases prontas, você se vira em qualquer restaurante do mundo — uma autonomia que dá muita confiança.',
    },
    pratica: {
      instrucao: 'Vamos simular um pedido no restaurante, em voz alta (faça os dois papéis).',
      passos: [
        'Peça o cardápio: "Can I see the menu, please?"',
        'Faça um pedido: "I’d like a ..., please"',
        'Peça de outro jeito: "Can I have a ..., please?"',
        'Pergunte o preço: "How much is it?"',
        'Peça a conta: "The bill, please"',
        'Agradeça: "Thank you!"',
        'Repita a simulação do início ao fim',
      ],
    },
    desafio: {
      cenario: 'Simule um pedido completo no restaurante em inglês: do cardápio à conta, com educação.',
      requisitos: [
        'Pedi o cardápio',
        'Fiz um pedido com "I’d like" ou "Can I have"',
        'Perguntei o preço',
        'Pedi a conta',
        'Usei please e thank you',
      ],
      dica: 'Decore "I’d like..." e "Can I have...?" — elas servem pra pedir QUALQUER coisa (não só comida): num balcão, numa loja, no hotel. São frases que valem ouro em viagens.',
    },
    validacao: [
      'Sei pedir o cardápio',
      'Sei pedir com I’d like / Can I have',
      'Sei perguntar o preço',
      'Sei pedir a conta',
      'Uso educação no pedido',
    ],
  },

  'en-a2-comida-5': {
    trilhaId: 'en-a2-comida', numero: 5, titulo: 'Projeto: peça uma refeição',
    tempoTotal: 15, xp: 90, vertente: 'ingles',
    aula: {
      gancho: 'Hora de juntar tudo: simular uma ida ao restaurante do início ao fim, em inglês — falando dos seus gostos, pedindo com quantidades certas e pagando. Uma cena real, que você vai conseguir viver numa viagem.',
      conceito: {
        titulo: 'Uma cena de restaurante completa',
        texto: 'Este projeto reúne a trilha: vocabulário de comida, contáveis/incontáveis (some/any), gostos (I like/I’d like) e as frases de pedir e pagar. Você vai montar e encenar um diálogo de restaurante completo — do "ready to order?" ao "thank you" final. É uma das simulações mais úteis pra viagem.',
      },
      estrutura: {
        titulo: 'A cena, em 4 momentos',
        partes: [
          { simbolo: '1', desc: 'Chegada: cardápio + "I’m hungry/thirsty".' },
          { simbolo: '2', desc: 'Pedido: "I’d like..." + comida/bebida (com some).' },
          { simbolo: '3', desc: 'Gostos/perguntas: "I love...", "Do you have any...?"' },
          { simbolo: '4', desc: 'Fim: preço, conta e agradecimento.' },
        ],
      },
      exemplo: {
        titulo: 'Mini-diálogo de restaurante',
        celulas: [
          { ref: 'Você', valor: 'Hello! Can I see the menu, please?' },
          { ref: 'Você', valor: 'I’d like some rice and a coffee, please.' },
          { ref: 'Você', valor: 'Do you have any juice? I love orange juice.' },
          { ref: 'Você', valor: 'The bill, please. Thank you!' },
        ],
        formula: 'cardápio → pedido (I’d like + some) → gostos → conta',
        resultado: 'Uma cena de restaurante encenada em inglês.',
        comentario: 'Grave o seu diálogo (faça os dois papéis, ou com alguém). Ouvir-se pedindo em inglês dá uma baita confiança pra a hora real numa viagem.',
      },
      vocabulario: [
        { palavra: 'menu', def: 'cardápio (méniu).' },
        { palavra: 'order', def: 'pedido / pedir (órder).' },
        { palavra: 'waiter / waitress', def: 'garçom / garçonete.' },
      ],
      chave: [
        'Junte: vocabulário + some/any + gostos + frases de pedir',
        'Encene a cena completa (chegada → pedido → conta)',
        'Pratique em voz alta e grave',
      ],
      porque: 'Pedir uma refeição em inglês é uma das situações mais práticas e libertadoras pra quem viaja. Concluir essa cena prova que você se vira sozinho num restaurante pelo mundo.',
    },
    pratica: {
      instrucao: 'Reserve 15 minutos. Monte e encene um diálogo de restaurante, usando tudo da trilha.',
      passos: [
        'Escreva a chegada: cumprimento + pedir o cardápio',
        'Escreva o pedido: "I’d like some..." (use some, comida e bebida)',
        'Adicione um gosto: "I love...", e uma pergunta: "Do you have any...?"',
        'Pergunte o preço e peça a conta',
        'Inclua please e thank you nos momentos certos',
        'Encene fazendo os dois papéis (você e o garçom)',
        'Grave o diálogo completo',
      ],
    },
    desafio: {
      cenario: 'Encene (escrito E falado/gravado) uma cena completa de restaurante em inglês, do cardápio à conta.',
      requisitos: [
        'Cumprimentei e pedi o cardápio',
        'Fiz o pedido com "I’d like" + some',
        'Expressei um gosto e fiz uma pergunta com any',
        'Pedi o preço e a conta',
        'Usei educação (please/thank you)',
        'Pratiquei em voz alta / gravei',
      ],
      dica: 'Parabéns — você concluiu "Comida e Restaurante"! Essa é uma das trilhas que mais te dá autonomia em viagens. Da próxima vez que comer fora, tente pedir em inglês na cabeça — treino real e grátis.',
    },
    validacao: [
      'Montei uma cena de restaurante completa',
      'Usei vocabulário de comida e some/any',
      'Expressei gostos',
      'Usei as frases de pedir e pagar',
      'Pratiquei em voz alta / gravei',
    ],
  },
};
