// ============================================================================
// CONTEÚDO — Inglês A2: Lugares e Direções (en-a2-lugares)
// Lugares da cidade, there is/are, preposições, direções, viajar.
// ============================================================================

export const EN_A2_LUGARES = {
  'en-a2-lugares-1': {
    trilhaId: 'en-a2-lugares', numero: 1, titulo: 'Lugares da cidade',
    tempoTotal: 9, xp: 50, vertente: 'ingles',
    aula: {
      gancho: 'Banco, hospital, mercado, estação — saber os nomes dos lugares é o primeiro passo pra se virar numa cidade estrangeira. É o vocabulário que abre o mapa pra você.',
      conceito: {
        titulo: 'Os lugares essenciais',
        texto: 'Vamos aprender os nomes dos lugares mais importantes de uma cidade. São palavras que você usa pra pedir informação, achar serviços e se orientar. Conhecê-las é a base pra perguntar "onde fica...?" e entender as respostas. Agrupe por tipo (serviços, comércio, transporte) pra memorizar melhor.',
      },
      estrutura: {
        titulo: 'Lugares importantes',
        partes: [
          { simbolo: '🏦', desc: 'Serviços: bank (banco), hospital, pharmacy (farmácia), police station.' },
          { simbolo: '🛒', desc: 'Comércio: supermarket, shop/store (loja), restaurant, market.' },
          { simbolo: '🚉', desc: 'Transporte: bus stop (ponto), station (estação), airport (aeroporto).' },
          { simbolo: '🏨', desc: 'Outros: hotel, school, park, church (igreja), square (praça).' },
        ],
      },
      exemplo: {
        titulo: 'Lugares em frases',
        celulas: [
          { ref: 'EN', valor: 'Where is the bank? — Onde fica o banco?' },
          { ref: 'EN', valor: 'I’m at the supermarket. — Estou no supermercado.' },
          { ref: 'EN', valor: 'Is there a pharmacy near here? — Tem farmácia perto?' },
          { ref: 'Dica', valor: 'near here = perto daqui' },
        ],
        formula: 'Where is the + lugar? · I’m at the + lugar',
        resultado: 'Você nomeia e localiza lugares.',
        comentario: '"Where is...?" (onde fica...?) é uma das perguntas mais úteis em viagem. E "near here" (perto daqui) ajuda muito ao procurar algo.',
      },
      vocabulario: [
        { palavra: 'place', def: 'lugar (plêis).' },
        { palavra: 'near / far', def: 'perto / longe.' },
        { palavra: 'Where is...?', def: 'Onde fica/está...? — pergunta de localização.' },
      ],
      chave: [
        'Vocabulário de lugares: bank, hospital, station...',
        '"Where is the + lugar?" pra perguntar localização',
        'near here = perto daqui',
      ],
      porque: 'Saber os nomes dos lugares é essencial pra se orientar e pedir ajuda numa cidade estrangeira. É a base pra perguntar e entender direções, que vêm a seguir.',
    },
    pratica: {
      instrucao: 'Pense na sua cidade. Vamos nomear lugares em voz alta.',
      passos: [
        'Diga 5 lugares: bank, hospital, supermarket, station, pharmacy',
        'Pergunte: "Where is the bank?"',
        'Diga onde você está: "I’m at the..."',
        'Pergunte se tem algo perto: "Is there a pharmacy near here?"',
        'Use near/far: "The bank is near", "The airport is far"',
        'Agrupe por tipo (serviços, comércio, transporte)',
        'Monte 3 frases com lugares',
      ],
    },
    desafio: {
      cenario: 'Liste os lugares perto da sua casa em inglês e pergunte "Where is...?" pra 3 deles.',
      requisitos: [
        'Nomeei lugares comuns da cidade',
        'Usei "Where is the + lugar?"',
        'Usei "I’m at the..."',
        'Usei near/far',
        'Pratiquei em voz alta',
      ],
      dica: 'Ao andar pela sua cidade, nomeie os lugares em inglês na cabeça (bank, pharmacy, bakery). É treino real e constante, sem custo nenhum.',
    },
    validacao: [
      'Sei nomear lugares da cidade',
      'Sei perguntar "Where is...?"',
      'Sei dizer onde estou',
      'Sei near/far',
      'Pratiquei em voz alta',
    ],
  },

  'en-a2-lugares-2': {
    trilhaId: 'en-a2-lugares', numero: 2, titulo: 'There is / There are',
    tempoTotal: 11, xp: 60, vertente: 'ingles',
    aula: {
      gancho: 'Como dizer "tem um banco aqui" ou "há dois hotéis na rua"? Com "there is / there are" — a estrutura pra dizer o que EXISTE num lugar. É super usada e simples.',
      conceito: {
        titulo: 'Dizer o que existe: there is/are',
        texto: '"There is" (tem/há — singular) e "There are" (tem/há — plural) servem pra falar do que existe num lugar. "There is a bank" (tem um banco), "There are two hotels" (há dois hotéis). Cuidado: aqui "there" não é "lá" — faz parte da expressão "existir". Pra negar: "there isn’t / there aren’t". Pra perguntar: "Is there...? / Are there...?".',
      },
      estrutura: {
        titulo: 'There is / There are',
        partes: [
          { simbolo: 'is', desc: 'There is + singular: There is a park. (tem um parque)' },
          { simbolo: 'are', desc: 'There are + plural: There are two banks. (há dois bancos)' },
          { simbolo: 'negativo', desc: 'There isn’t a... / There aren’t any...' },
          { simbolo: 'pergunta', desc: 'Is there a...? / Are there any...?' },
        ],
      },
      exemplo: {
        titulo: 'O que existe no lugar',
        celulas: [
          { ref: 'EN', valor: 'There is a pharmacy near here. — Tem uma farmácia perto.' },
          { ref: 'EN', valor: 'There are two hotels. — Há dois hotéis.' },
          { ref: 'Pergunta', valor: 'Is there a bank near here? — Tem banco perto?' },
          { ref: 'Negativo', valor: 'There isn’t a hospital here. — Não tem hospital aqui.' },
        ],
        formula: 'There is + singular · There are + plural',
        resultado: 'Você diz e pergunta o que existe num lugar.',
        comentario: 'Junte com any: "Are there any restaurants near here?" (tem algum restaurante perto?). É uma das perguntas mais úteis em viagem.',
      },
      vocabulario: [
        { palavra: 'There is / There are', def: 'tem/há (singular / plural) — pra existência.' },
        { palavra: 'Is there...?', def: 'Tem...? Há...? (pergunta).' },
        { palavra: 'near here', def: 'perto daqui.' },
      ],
      chave: [
        'There is = tem/há (singular); There are = (plural)',
        'Aqui "there" não é "lá" — é "existir"',
        'Pergunta: Is there...? / Are there any...?',
      ],
      porque: 'Dizer e perguntar o que existe num lugar ("tem farmácia perto?") é constante em viagens e no dia a dia. É uma das estruturas mais práticas do A2.',
    },
    pratica: {
      instrucao: 'Descreva o que tem ao seu redor (ou na sua cidade), em voz alta.',
      passos: [
        'Diga o que existe (singular): "There is a... " (a park, a bank)',
        'Diga no plural: "There are two..." (shops, hotels)',
        'Pergunte: "Is there a pharmacy near here?"',
        'Pergunte com any: "Are there any restaurants near here?"',
        'Negue: "There isn’t a hospital here"',
        'Descreva sua rua: o que tem nela?',
        'Monte 4 frases com there is/are',
      ],
    },
    desafio: {
      cenario: 'Descreva o que existe na sua rua/bairro usando there is/are (afirmativo, negativo e pergunta).',
      requisitos: [
        'Usei "there is" no singular',
        'Usei "there are" no plural',
        'Fiz uma pergunta (Is there...? / Are there any...?)',
        'Fiz um negativo (there isn’t/aren’t)',
        'Pratiquei em voz alta',
      ],
      dica: 'Erro comum: usar "have" pra "existir" ("here have a bank"). Em inglês é "there is/are a bank". Grave essa estrutura — ela substitui o nosso "tem".',
    },
    validacao: [
      'Sei usar there is (singular)',
      'Sei usar there are (plural)',
      'Sei perguntar Is/Are there',
      'Sei negar (isn’t/aren’t)',
      'Pratiquei em voz alta',
    ],
  },

  'en-a2-lugares-3': {
    trilhaId: 'en-a2-lugares', numero: 3, titulo: 'Preposições de lugar',
    tempoTotal: 10, xp: 60, vertente: 'ingles',
    aula: {
      gancho: '"Em cima da mesa", "ao lado do banco", "entre as lojas" — as preposições de lugar dizem ONDE as coisas estão. São pequenas, mas essenciais pra localizar e entender direções.',
      conceito: {
        titulo: 'Onde as coisas estão',
        texto: 'Preposições de lugar mostram a posição: in (dentro), on (sobre), under (embaixo), next to (ao lado), between (entre), in front of (na frente), behind (atrás). Elas respondem "onde?" e são fundamentais pra localizar objetos e entender direções. Vamos focar nas mais usadas, com exemplos visuais.',
      },
      estrutura: {
        titulo: 'As preposições essenciais',
        partes: [
          { simbolo: 'in/on/under', desc: 'in (dentro), on (sobre/em cima), under (embaixo).' },
          { simbolo: 'next to', desc: 'next to (ao lado de), near (perto de).' },
          { simbolo: 'between', desc: 'between (entre dois), opposite (em frente a).' },
          { simbolo: 'in front/behind', desc: 'in front of (na frente de), behind (atrás de).' },
        ],
      },
      exemplo: {
        titulo: 'Localizando com preposições',
        celulas: [
          { ref: 'EN', valor: 'The bank is next to the hospital. — O banco fica ao lado do hospital.' },
          { ref: 'EN', valor: 'The keys are on the table. — As chaves estão na mesa.' },
          { ref: 'EN', valor: 'The shop is between the bank and the café.' },
          { ref: 'EN', valor: 'The car is in front of the house. — em frente à casa.' },
        ],
        formula: 'coisa + is + preposição + lugar/coisa',
        resultado: 'Você localiza objetos e lugares com precisão.',
        comentario: 'Cuidado: "in front of" = na FRENTE (do lado de fora, à frente); "opposite" = do outro lado/em frente (encarando). E "next to" (ao lado) é uma das mais úteis pra dar localização.',
      },
      vocabulario: [
        { palavra: 'next to / between', def: 'ao lado de / entre.' },
        { palavra: 'in front of / behind', def: 'na frente de / atrás de.' },
        { palavra: 'opposite', def: 'em frente a / do lado oposto.' },
      ],
      chave: [
        'in/on/under, next to, between, in front of, behind',
        'Estrutura: coisa + is + preposição + lugar',
        '"next to" (ao lado) é a mais útil pra localizar',
      ],
      porque: 'Preposições de lugar são essenciais pra localizar coisas e, principalmente, pra entender e dar direções — a próxima missão. Sem elas, "onde fica" fica no ar.',
    },
    pratica: {
      instrucao: 'Olhe ao seu redor. Vamos localizar objetos em voz alta.',
      passos: [
        'Diga onde estão objetos: "The phone is on the table"',
        'Use next to: "The chair is next to the table"',
        'Use under: "The bag is under the chair"',
        'Use between: "It is between the books"',
        'Use in front of / behind com objetos ao redor',
        'Localize lugares: "The bank is next to the pharmacy"',
        'Monte 4 frases de localização',
      ],
    },
    desafio: {
      cenario: 'Descreva onde estão 5 objetos/lugares ao seu redor, usando preposições de lugar variadas.',
      requisitos: [
        'Usei in/on/under',
        'Usei next to e/ou between',
        'Usei in front of e/ou behind',
        'A estrutura "coisa + is + prep + lugar" está correta',
        'Pratiquei em voz alta',
      ],
      dica: 'Pratique localizando objetos da sua casa em inglês. "The remote is on the sofa." Esse tipo de descrição treina as preposições e o vocabulário ao mesmo tempo.',
    },
    validacao: [
      'Sei as preposições de lugar principais',
      'Localizo objetos com elas',
      'Diferencio next to, between, in front of',
      'Monto frases de localização',
      'Pratiquei em voz alta',
    ],
  },

  'en-a2-lugares-4': {
    trilhaId: 'en-a2-lugares', numero: 4, titulo: 'Pedir e dar direções',
    tempoTotal: 12, xp: 70, vertente: 'ingles',
    aula: {
      gancho: 'Perdido numa cidade estrangeira, você para alguém e pergunta como chegar — e entende a resposta. "Vire à direita", "siga reto", "é ao lado do banco". Essas frases são ouro em qualquer viagem.',
      conceito: {
        titulo: 'Como chegar lá',
        texto: 'Pra pedir direção: "How do I get to...?" (como chego a...?) ou "Where is...?". Pra entender/dar a resposta, há frases-padrão: go straight (siga reto), turn left/right (vire à esquerda/direita), it’s on your left (fica à sua esquerda). Junta tudo o que você aprendeu: lugares, there is/are e preposições. Dominar isso te tira de qualquer apuro numa cidade.',
      },
      estrutura: {
        titulo: 'Pedir e dar direção',
        partes: [
          { simbolo: '❓', desc: 'Pedir: "How do I get to the station?" / "Where is the bank?"' },
          { simbolo: '⬆️', desc: 'Go straight (on) — siga reto.' },
          { simbolo: '↩️', desc: 'Turn left / turn right — vire à esquerda / direita.' },
          { simbolo: '📍', desc: 'It’s on your left/right; it’s next to... — fica à sua esquerda; ao lado de...' },
        ],
      },
      exemplo: {
        titulo: 'Um diálogo de direções',
        celulas: [
          { ref: 'Você', valor: 'Excuse me, how do I get to the station?' },
          { ref: 'Pessoa', valor: 'Go straight, then turn right. — Siga reto, depois vire à direita.' },
          { ref: 'Pessoa', valor: 'It’s on your left, next to the bank.' },
          { ref: 'Você', valor: 'Thank you! — Obrigado!' },
        ],
        formula: 'How do I get to...? → go straight / turn left-right / it’s on your...',
        resultado: 'Você pede e segue direções em inglês.',
        comentario: 'Comece sempre com "Excuse me" (com licença) ao abordar alguém. E não precisa entender CADA palavra da resposta — captar "straight", "left/right" e o ponto de referência já basta pra chegar.',
      },
      vocabulario: [
        { palavra: 'How do I get to...?', def: 'Como eu chego a...? (pedido de direção).' },
        { palavra: 'go straight', def: 'siga reto (gôu strêit).' },
        { palavra: 'turn left / right', def: 'vire à esquerda / direita.' },
      ],
      chave: [
        'Pedir: "How do I get to...?" / "Excuse me..."',
        'Direções: go straight, turn left/right',
        'Referência: "it’s on your left, next to the bank"',
      ],
      porque: 'Pedir e entender direções é uma das habilidades mais libertadoras em viagem — você nunca fica preso por não saber chegar a um lugar. Reúne lugares, preposições e there is/are.',
    },
    pratica: {
      instrucao: 'Vamos praticar pedir e dar direções, em voz alta (faça os dois papéis).',
      passos: [
        'Aborde: "Excuse me, how do I get to the station?"',
        'Dê a direção: "Go straight, then turn left"',
        'Use referência: "It’s on your right, next to the hospital"',
        'Pratique turn left / turn right / go straight',
        'Pergunte de outro jeito: "Where is the supermarket?"',
        'Responda com 2-3 passos de direção',
        'Encene um diálogo completo de direções',
      ],
    },
    desafio: {
      cenario: 'Encene um diálogo de direções: alguém pede como chegar a um lugar e você responde com passos e referência.',
      requisitos: [
        'Pedi direção com "How do I get to...?" ou "Where is...?"',
        'Usei "Excuse me" ao abordar',
        'Dei direções com go straight / turn left-right',
        'Usei uma referência (next to, on your left)',
        'Pratiquei em voz alta',
      ],
      dica: 'Numa viagem real, se não entender a resposta toda, peça: "Can you repeat, please?" (pode repetir?) ou "Slowly, please" (devagar, por favor). Pedir pra repetir é normal e educado.',
    },
    validacao: [
      'Sei pedir direções',
      'Sei usar "Excuse me"',
      'Sei dar direções (straight, left, right)',
      'Uso referências de lugar',
      'Pratiquei em voz alta',
    ],
  },

  'en-a2-lugares-5': {
    trilhaId: 'en-a2-lugares', numero: 5, titulo: 'No aeroporto e hotel',
    tempoTotal: 11, xp: 70, vertente: 'ingles',
    aula: {
      gancho: 'Check-in no aeroporto, reservar e chegar no hotel — momentos que dão frio na barriga em viagem. Com as frases certas, você passa por eles com tranquilidade.',
      conceito: {
        titulo: 'As situações-chave da viagem',
        texto: 'Aeroporto e hotel têm situações previsíveis com frases-padrão. No aeroporto: check-in, embarque (boarding), bagagem (luggage). No hotel: reserva (booking), check-in, quarto (room). Saber meia dúzia de frases e entender as perguntas comuns ("Passport, please") te dá confiança nesses momentos importantes da viagem.',
      },
      estrutura: {
        titulo: 'Frases de aeroporto e hotel',
        partes: [
          { simbolo: '✈️', desc: 'Aeroporto: check-in, boarding pass (cartão de embarque), gate (portão), luggage (bagagem).' },
          { simbolo: '🛂', desc: 'Comum: "Passport, please" / "What’s the purpose of your trip?" (motivo da viagem).' },
          { simbolo: '🏨', desc: 'Hotel: "I have a reservation" / "I’d like a room for two nights".' },
          { simbolo: '🔑', desc: 'Hotel: "What time is check-out?" / "Is breakfast included?"' },
        ],
      },
      exemplo: {
        titulo: 'Check-in no hotel',
        celulas: [
          { ref: 'Você', valor: 'Hello, I have a reservation. — Tenho uma reserva.' },
          { ref: 'Recep.', valor: 'Your name, please? — Seu nome, por favor?' },
          { ref: 'Você', valor: 'It’s under Silva. — Está no nome Silva.' },
          { ref: 'Você', valor: 'Is breakfast included? — O café está incluso?' },
        ],
        formula: '"I have a reservation" · "I’d like a room for X nights"',
        resultado: 'Você passa pelo aeroporto e hotel com confiança.',
        comentario: '"Under [nome]" = no nome de [...]. E "included" (incluído) é útil: "Is breakfast included?". Não precisa entender tudo — as situações são previsíveis e as palavras-chave se repetem.',
      },
      vocabulario: [
        { palavra: 'reservation / booking', def: 'reserva.' },
        { palavra: 'luggage', def: 'bagagem (lâguidj).' },
        { palavra: 'included', def: 'incluído (in-clú-did).' },
      ],
      chave: [
        'Aeroporto: check-in, boarding, luggage, passport',
        'Hotel: "I have a reservation", "a room for X nights"',
        '"Is breakfast included?" / "What time is check-out?"',
      ],
      porque: 'Aeroporto e hotel são momentos de tensão em viagem. Ter as frases prontas transforma esses momentos em rotina tranquila — e dá segurança pra viajar pra qualquer lugar.',
    },
    pratica: {
      instrucao: 'Vamos simular check-in (aeroporto e hotel), em voz alta.',
      passos: [
        'Simule o aeroporto: responda "Passport, please" entregando (mímica) e diga "Here you are"',
        'Diga o motivo da viagem: "Tourism" (turismo) / "Business" (negócios)',
        'No hotel: "Hello, I have a reservation"',
        'Diga o nome: "It’s under [seu sobrenome]"',
        'Pergunte: "Is breakfast included?"',
        'Pergunte: "What time is check-out?"',
        'Encene os dois check-ins do início ao fim',
      ],
    },
    desafio: {
      cenario: 'Encene um check-in de hotel completo em inglês, com reserva, perguntas sobre café e check-out.',
      requisitos: [
        'Disse "I have a reservation"',
        'Informei o nome ("under...")',
        'Perguntei sobre o café da manhã (included)',
        'Perguntei o horário de check-out',
        'Pratiquei em voz alta',
      ],
      dica: 'Memorize "I have a reservation" e "Is breakfast included?". Junto com "I’d like..." (da trilha de comida), você tem o kit de frases que resolve a maioria das situações de viagem.',
    },
    validacao: [
      'Sei vocabulário de aeroporto',
      'Sei fazer check-in de hotel',
      'Sei perguntar sobre café/check-out',
      'Entendo perguntas comuns (passport, name)',
      'Pratiquei em voz alta',
    ],
  },

  'en-a2-lugares-6': {
    trilhaId: 'en-a2-lugares', numero: 6, titulo: 'Projeto: guie um turista',
    tempoTotal: 15, xp: 90, vertente: 'ingles',
    aula: {
      gancho: 'Hora de juntar tudo: imagine um turista perdido na sua cidade pedindo informações em inglês — e você o ajuda. Dizer o que tem perto, dar direções e indicar lugares. É o A2 de lugares em ação.',
      conceito: {
        titulo: 'Você como o "guia" em inglês',
        texto: 'Este projeto reúne a trilha: vocabulário de lugares, there is/are, preposições e direções. Você vai simular ajudar um turista — dizendo o que existe por perto, dando direções até um lugar e indicando referências. É uma simulação realista e útil: tanto pra ajudar estrangeiros quanto pra você se virar no exterior.',
      },
      estrutura: {
        titulo: 'O roteiro do "guia"',
        partes: [
          { simbolo: '🗺️', desc: 'O que tem perto: "There is a bank near here. There are two restaurants."' },
          { simbolo: '🧭', desc: 'Dar direção: "Go straight, then turn left."' },
          { simbolo: '📍', desc: 'Referência: "It’s next to the pharmacy, in front of the park."' },
          { simbolo: '🙂', desc: 'Educação: "You’re welcome! Have a nice day!"' },
        ],
      },
      exemplo: {
        titulo: 'Ajudando o turista',
        celulas: [
          { ref: 'Turista', valor: 'Excuse me, is there a pharmacy near here?' },
          { ref: 'Você', valor: 'Yes, there is one. Go straight and turn right.' },
          { ref: 'Você', valor: 'It’s on your left, next to the bank.' },
          { ref: 'Turista', valor: 'Thank you! → You’re welcome!' },
        ],
        formula: 'there is/are + direções (straight/left/right) + referência (next to)',
        resultado: 'Você guia alguém pela cidade em inglês.',
        comentario: 'Grave o diálogo fazendo os dois papéis. Esse projeto reúne tudo do A2 de lugares — e prepara você pra ajudar turistas E pra se virar quando VOCÊ for o turista.',
      },
      vocabulario: [
        { palavra: "You're welcome", def: 'De nada (resposta a thank you).' },
        { palavra: 'Have a nice day', def: 'Tenha um bom dia (fecho educado).' },
        { palavra: 'around here', def: 'por aqui / nesta região.' },
      ],
      chave: [
        'Junte: lugares + there is/are + preposições + direções',
        'Diga o que tem perto, dê direções e referências',
        'Feche com educação (You’re welcome)',
      ],
      porque: 'Guiar alguém reúne todo o A2 de lugares numa simulação realista. Concluí-lo prova que você se orienta e ajuda outros em inglês — uma autonomia urbana que vale ouro em viagens.',
    },
    pratica: {
      instrucao: 'Reserve 15 minutos. Monte e encene o diálogo de ajudar um turista, usando tudo da trilha.',
      passos: [
        'Imagine 3 perguntas que um turista faria (banco? farmácia? estação?)',
        'Responda dizendo o que existe perto: "There is/are..."',
        'Dê direções: "Go straight, turn left/right"',
        'Use referências com preposições: "next to", "in front of", "on your left"',
        'Inclua educação: "You’re welcome! Have a nice day!"',
        'Encene fazendo os dois papéis',
        'Grave o diálogo completo',
      ],
    },
    desafio: {
      cenario: 'Encene (escrito E falado/gravado) um diálogo guiando um turista pela sua cidade, com o que tem perto, direções e referências.',
      requisitos: [
        'Usei there is/are pro que existe',
        'Dei direções (straight, left, right)',
        'Usei preposições de referência (next to, in front of)',
        'Usei vocabulário de lugares',
        'Fechei com educação',
        'Pratiquei em voz alta / gravei',
      ],
      dica: 'Parabéns — você concluiu "Lugares e Direções"! Agora você se orienta numa cidade estrangeira E ajuda quem está perdido. Essa autonomia urbana é uma das mais úteis pra viajar com confiança.',
    },
    validacao: [
      'Usei there is/are',
      'Dei direções corretas',
      'Usei preposições de referência',
      'Usei vocabulário de lugares',
      'Pratiquei em voz alta / gravei',
    ],
  },
};
