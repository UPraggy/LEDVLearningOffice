// ============================================================================
// CONTEÚDO — Inglês A1: Ações do Dia a Dia (en-a1-acoes)
// Present continuous (agora), verbos de ação, can/can't (habilidade),
// imperativo (ordens/instruções), simple x continuous, e projeto: narrar agora.
// ============================================================================

export const EN_A1_ACOES = {
  'en-a1-acoes-1': {
    trilhaId: 'en-a1-acoes', numero: 1, titulo: 'O que está acontecendo agora',
    tempoTotal: 8, xp: 40, vertente: 'ingles',
    aula: {
      gancho: '"Estou comendo", "ela está dormindo", "eles estão jogando" — para dizer o que acontece NESTE momento, o inglês usa uma forma própria: o verbo to be + o verbo com -ing.',
      conceito: {
        titulo: 'Present continuous: ações em andamento',
        texto: 'O present continuous descreve o que está acontecendo AGORA, neste instante. A fórmula é: sujeito + am/is/are + verbo-ING. I am eating (estou comendo), She is sleeping (ela está dormindo), They are playing (eles estão jogando). O am/is/are segue o sujeito (I am, he/she/it is, you/we/they are) e o verbo principal ganha -ing. Forma abreviada: I\'m eating, she\'s sleeping, they\'re playing. É como o nosso "estar + -ndo". Sinais típicos: now (agora), right now, at the moment, Look! (olhe!).',
      },
      estrutura: {
        titulo: 'am/is/are + verbo-ing',
        partes: [
          { simbolo: 'I am', desc: 'I am working → I\'m working (estou trabalhando).' },
          { simbolo: 'he/she/it is', desc: 'She is reading → She\'s reading.' },
          { simbolo: 'you/we/they are', desc: 'They are running → They\'re running.' },
          { simbolo: '+ -ing', desc: 'O verbo principal sempre com -ing: eat→eating.' },
        ],
      },
      exemplo: {
        titulo: 'Ações agora',
        celulas: [
          { ref: 'EN', valor: 'I\'m studying English. — Estou estudando inglês.' },
          { ref: 'EN', valor: 'She\'s cooking dinner. — Ela está cozinhando o jantar.' },
          { ref: 'EN', valor: 'We\'re watching TV. — Estamos assistindo TV.' },
          { ref: 'EN', valor: 'Look! It\'s raining. — Olha! Está chovendo.' },
        ],
        formula: 'sujeito + am/is/are + verbo-ING = ação agora',
        resultado: 'Você descreve o que acontece neste momento.',
        comentario: 'Dois cuidados com o -ing: verbos terminados em -e mudo perdem o e (make→making, write→writing); verbos curtos com consoante-vogal-consoante dobram a última (run→running, sit→sitting). Mas a maioria é só acrescentar -ing (play→playing). Não esqueça o am/is/are: "I eating" está errado; é "I AM eating".',
      },
      vocabulario: [
        { palavra: 'present continuous', def: 'am/is/are + verbo-ing — ação acontecendo agora.' },
        { palavra: '-ing', def: 'terminação do verbo principal (eating, going).' },
        { palavra: 'now / right now', def: 'agora / neste exato momento.' },
      ],
      chave: [
        'Fórmula: am/is/are + verbo-ING',
        'am (I) • is (he/she/it) • are (you/we/they)',
        'Sinais: now, right now, Look!',
      ],
      porque: 'Descrever o que está acontecendo agora é constante numa conversa ("o que você está fazendo?", "estou indo pra casa"). É um dos primeiros tempos verbais que você usa pra falar do presente real.',
    },
    pratica: {
      instrucao: 'Descreva o que você e as pessoas ao redor estão fazendo agora.',
      passos: [
        'Diga o que você faz agora: "I\'m ..."',
        'Use a forma abreviada: I\'m / she\'s / they\'re',
        'Descreva alguém perto: "He is ..." / "She is ..."',
        'Use o plural: "They are ..."',
        'Acrescente "now" ou "right now" à frase',
        'Cuide do -ing: make→making, run→running',
        'Monte 5 frases de ações acontecendo agora',
      ],
    },
    desafio: {
      cenario: 'Faça 5 frases no present continuous descrevendo o que está acontecendo ao seu redor neste momento.',
      requisitos: [
        'Usei am/is/are corretamente com cada sujeito',
        'Coloquei -ing no verbo principal',
        'Usei pelo menos uma forma abreviada (I\'m, she\'s)',
        'Inclui um verbo com -ing especial (making/running)',
        'Falei em voz alta apontando as ações',
      ],
      dica: 'O erro mais comum é esquecer o verbo "to be": NÃO é "I working", é "I AM working". O present continuous tem SEMPRE duas partes: am/is/are + verbo-ing.',
    },
    validacao: [
      'Sei a fórmula am/is/are + -ing',
      'Escolho am/is/are pelo sujeito',
      'Uso as formas abreviadas',
      'Faço o -ing corretamente',
      'Descrevi ações no momento',
    ],
  },

  'en-a1-acoes-2': {
    trilhaId: 'en-a1-acoes', numero: 2, titulo: 'Verbos de ação comuns',
    tempoTotal: 10, xp: 60, vertente: 'ingles',
    aula: {
      gancho: 'Comer, beber, correr, ler, escrever, abrir, fechar — um punhado de verbos de ação cobre quase tudo que você faz num dia. Dominar esses verbos é ter as "peças" pra montar frases sem fim.',
      conceito: {
        titulo: 'Os verbos que você mais usa',
        texto: 'Verbos são as palavras de ação. Alguns aparecem o tempo todo: eat (comer), drink (beber), go (ir), come (vir), run (correr), walk (andar), read (ler), write (escrever), open (abrir), close (fechar), buy (comprar), make (fazer), take (pegar/levar), give (dar), see (ver), listen (ouvir). Com esses verbos no infinitivo você forma comandos (Open the door), present simple (I read every day) e continuous (I\'m reading). Aprender o verbo é aprender uma "peça" que se encaixa em várias estruturas — por isso vale focar nos mais frequentes primeiro.',
      },
      estrutura: {
        titulo: 'Grupos de verbos úteis',
        partes: [
          { simbolo: 'movimento', desc: 'go, come, run, walk, sit, stand.' },
          { simbolo: 'casa/rotina', desc: 'eat, drink, sleep, cook, clean, open, close.' },
          { simbolo: 'estudo/trabalho', desc: 'read, write, study, work, listen, speak.' },
          { simbolo: 'mãos', desc: 'take, give, buy, make, use, put.' },
        ],
      },
      exemplo: {
        titulo: 'Verbos em ação',
        celulas: [
          { ref: 'EN', valor: 'I eat breakfast at seven. — Como o café às sete.' },
          { ref: 'EN', valor: 'She reads a lot. — Ela lê bastante.' },
          { ref: 'EN', valor: 'Open the window, please. — Abra a janela, por favor.' },
          { ref: 'EN', valor: 'We\'re making lunch. — Estamos fazendo o almoço.' },
        ],
        formula: 'verbo (eat/read/open...) = peça que entra em várias frases',
        resultado: 'Você conhece os verbos de ação essenciais.',
        comentario: 'Aprenda verbos em CONTEXTO, não soltos: junte cada verbo a um objeto que combina (eat breakfast, read a book, open the door). Assim você decora a "colocação" natural e já sai falando frases. Escolha 15 verbos do dia a dia e use cada um em uma frase sua hoje mesmo.',
      },
      vocabulario: [
        { palavra: 'verb', def: 'verbo — palavra de ação (eat, run, read).' },
        { palavra: 'eat / drink / go', def: 'comer / beber / ir — dos mais frequentes.' },
        { palavra: 'open / close', def: 'abrir / fechar — comuns em comandos.' },
      ],
      chave: [
        'Foque nos verbos mais frequentes primeiro',
        'Aprenda em colocação: eat breakfast, read a book',
        'O mesmo verbo serve a comandos, simple e continuous',
      ],
      porque: 'Verbos são o coração da frase: sem eles, nada acontece. Dominar os de ação mais comuns te dá poder pra descrever quase qualquer coisa que você faz num dia.',
    },
    pratica: {
      instrucao: 'Use os verbos de ação em frases sobre o seu dia.',
      passos: [
        'Escolha 15 verbos do dia a dia',
        'Junte cada um a um objeto: "eat breakfast"',
        'Faça uma frase simples com 5 deles',
        'Faça um comando com 3: "Open the door."',
        'Use 3 no continuous: "I\'m reading."',
        'Diga 3 ações suas de hoje',
        'Liste seus 15 verbos com a tradução',
      ],
    },
    desafio: {
      cenario: 'Escreva 6 frases usando 6 verbos de ação diferentes, cada um com um objeto que combine (ex.: read a book, drink water).',
      requisitos: [
        'Usei 6 verbos de ação distintos',
        'Juntei cada verbo a um objeto coerente',
        'Inclui pelo menos um comando',
        'Inclui pelo menos um no present continuous',
        'Pratiquei em voz alta',
      ],
      dica: 'Não decore verbos numa lista isolada — eles sozinhos somem da memória. Sempre prenda o verbo a algo real: "drink coffee", "open the door". A imagem concreta gruda a palavra.',
    },
    validacao: [
      'Conheço os verbos de ação comuns',
      'Aprendo em colocação (verbo + objeto)',
      'Uso verbos em comandos',
      'Uso verbos no continuous',
      'Descrevi ações com vários verbos',
    ],
  },

  'en-a1-acoes-3': {
    trilhaId: 'en-a1-acoes', numero: 3, titulo: 'Can / can\'t: habilidades',
    tempoTotal: 10, xp: 70, vertente: 'ingles',
    aula: {
      gancho: '"Eu sei nadar", "ela não sabe dirigir", "você sabe cozinhar?". Para falar do que se é capaz (ou não) de fazer, o inglês tem uma palavrinha simples e poderosa: can.',
      conceito: {
        titulo: 'Can para habilidade e capacidade',
        texto: 'Can significa "saber/poder/conseguir fazer algo". A estrutura é simples e NÃO muda com a pessoa: sujeito + can + verbo no infinitivo (sem to). I can swim (sei nadar), She can drive (ela sabe dirigir), They can speak English. NEGATIVO: can\'t (cannot) — "I can\'t cook" (não sei cozinhar). PERGUNTA: inverte — "Can you swim?" (você sabe nadar?). Resposta curta: "Yes, I can / No, I can\'t". Repare: depois de can, o verbo fica "pelado" (sem -s, sem to): "She can drive", nunca "She can drives" nem "She can to drive". Can também serve pra pedir permissão ("Can I go?"), mas aqui o foco é habilidade.',
      },
      estrutura: {
        titulo: 'Can: afirmativo, negativo e pergunta',
        partes: [
          { simbolo: '+ can', desc: 'I can swim. She can cook. (mesma forma p/ todos)' },
          { simbolo: '– can\'t', desc: 'I can\'t drive. He can\'t swim.' },
          { simbolo: '? Can', desc: 'Can you dance? Can he cook?' },
          { simbolo: 'verbo nu', desc: 'sempre infinitivo sem to: can SWIM (não can to swim).' },
        ],
      },
      exemplo: {
        titulo: 'O que você sabe fazer',
        celulas: [
          { ref: 'EN', valor: 'I can swim. — Eu sei nadar.' },
          { ref: 'EN', valor: 'She can\'t drive. — Ela não sabe dirigir.' },
          { ref: 'EN', valor: 'Can you cook? — Você sabe cozinhar?' },
          { ref: 'EN', valor: 'Yes, I can. / No, I can\'t. — Sei. / Não sei.' },
        ],
        formula: 'sujeito + can/can\'t + verbo (infinitivo sem to)',
        resultado: 'Você fala de habilidades suas e dos outros.',
        comentario: 'A grande vantagem do can: ele é IGUAL pra todas as pessoas — não tem "cans" nem "to". "He can play" (não "he cans play"). E o verbo depois fica sempre no infinitivo puro. Pratique listando o que você sabe e não sabe fazer: "I can cook but I can\'t swim". Simples e muito útil.',
      },
      vocabulario: [
        { palavra: 'can', def: 'saber/poder/conseguir fazer (habilidade).' },
        { palavra: 'can\'t (cannot)', def: 'não saber/poder fazer (negativo).' },
        { palavra: 'Can you...?', def: 'Você sabe/consegue...? — pergunta de habilidade.' },
      ],
      chave: [
        'can é igual pra todos (sem -s, sem to)',
        'Negativo: can\'t • Pergunta: Can + sujeito + verbo?',
        'Verbo depois de can fica no infinitivo puro',
      ],
      porque: 'Falar do que você sabe fazer é essencial em conversas e até em entrevistas ("I can use Excel", "I can speak some English"). Can é simples, frequente e abre muitas frases úteis.',
    },
    pratica: {
      instrucao: 'Liste o que você sabe e não sabe fazer com can/can\'t.',
      passos: [
        'Diga 3 coisas que você sabe: "I can ..."',
        'Diga 2 coisas que não sabe: "I can\'t ..."',
        'Fale de outra pessoa: "She can ..."',
        'Faça perguntas: "Can you ...?"',
        'Responda curto: "Yes, I can / No, I can\'t"',
        'Confira: o verbo está no infinitivo sem to?',
        'Monte 5 frases (+, –, ?) de habilidade',
      ],
    },
    desafio: {
      cenario: 'Faça 5 frases sobre habilidades: o que você sabe e não sabe fazer, e uma pergunta a alguém usando can.',
      requisitos: [
        'Usei "can" para uma habilidade afirmativa',
        'Usei "can\'t" para algo que não sei fazer',
        'Fiz uma pergunta com "Can you...?"',
        'Mantive o verbo no infinitivo (sem to/-s)',
        'Falei de outra pessoa (he/she can)',
      ],
      dica: 'Pegadinha: NÃO use "to" depois de can. É "I can swim", nunca "I can to swim". E o can não muda na 3ª pessoa: "She can", não "She cans".',
    },
    validacao: [
      'Uso can para habilidade',
      'Uso can\'t no negativo',
      'Faço perguntas com Can',
      'Mantenho o verbo no infinitivo puro',
      'Falei de habilidades em voz alta',
    ],
  },

  'en-a1-acoes-4': {
    trilhaId: 'en-a1-acoes', numero: 4, titulo: 'Imperativo: ordens e instruções',
    tempoTotal: 11, xp: 70, vertente: 'ingles',
    aula: {
      gancho: '"Abra a porta", "não corra", "vire à esquerda", "clique aqui". Dar instruções, ordens e indicações é uso diário — e em inglês isso é o mais fácil: só o verbo, sem sujeito.',
      conceito: {
        titulo: 'O imperativo para instruir',
        texto: 'O imperativo dá ordens, instruções, pedidos e direções. A forma é a mais simples do inglês: use o verbo no infinitivo SEM sujeito. Open the door (abra a porta), Sit down (sente-se), Turn left (vire à esquerda), Click here (clique aqui). NEGATIVO: don\'t + verbo — "Don\'t run" (não corra), "Don\'t touch" (não toque). Para soar educado, acrescente please: "Please sit down" ou "Sit down, please". O imperativo serve para vários "tu/você" e também para "vocês" — a forma é a mesma. É a estrutura de receitas, manuais, placas e instruções de apps.',
      },
      estrutura: {
        titulo: 'Como formar o imperativo',
        partes: [
          { simbolo: 'verbo', desc: 'Só o verbo: Open. Sit. Listen. Wait.' },
          { simbolo: '+ objeto', desc: 'Open the door. Turn the page.' },
          { simbolo: 'don\'t', desc: 'Negativo: Don\'t run. Don\'t worry.' },
          { simbolo: 'please', desc: 'Educado: Please wait. / Wait, please.' },
        ],
      },
      exemplo: {
        titulo: 'Instruções e direções',
        celulas: [
          { ref: 'EN', valor: 'Open the door, please. — Abra a porta, por favor.' },
          { ref: 'EN', valor: 'Don\'t touch that. — Não toque nisso.' },
          { ref: 'EN', valor: 'Turn left at the corner. — Vire à esquerda na esquina.' },
          { ref: 'EN', valor: 'Click here to start. — Clique aqui para começar.' },
        ],
        formula: '(Don\'t) + verbo + (objeto) + (please)',
        resultado: 'Você dá ordens, instruções e direções.',
        comentario: 'A beleza do imperativo é não ter sujeito nem conjugação: é só o verbo. "Sit down" serve pra uma pessoa ou pra várias. Para não soar grosso, o please faz milagre. Pratique com instruções reais: leia uma receita ou os passos de um app em inglês — eles são quase todos imperativos (Mix, Add, Click, Press).',
      },
      vocabulario: [
        { palavra: 'imperative', def: 'imperativo — ordem/instrução, só o verbo.' },
        { palavra: 'Don\'t + verbo', def: 'forma negativa: Don\'t run (não corra).' },
        { palavra: 'please', def: 'por favor — deixa a ordem educada.' },
      ],
      chave: [
        'Imperativo = só o verbo, sem sujeito',
        'Negativo: Don\'t + verbo',
        'Use please para soar educado',
      ],
      porque: 'Instruções estão por toda parte: receitas, manuais, placas, apps, direções na rua. Entender e dar comandos em inglês é prático e imediato — e é a estrutura mais simples que existe.',
    },
    pratica: {
      instrucao: 'Dê instruções usando o imperativo afirmativo e negativo.',
      passos: [
        'Dê 3 ordens simples: "Open...", "Sit...", "Listen..."',
        'Acrescente objetos: "Open the window."',
        'Faça 2 negativas: "Don\'t run.", "Don\'t worry."',
        'Deixe educado com please',
        'Dê uma direção: "Turn left / Go straight."',
        'Leia os passos de uma receita em inglês',
        'Monte 5 instruções (afirmativas e negativas)',
      ],
    },
    desafio: {
      cenario: 'Escreva uma mini-instrução de 5 passos (receita simples ou como chegar a um lugar) usando imperativos afirmativos e negativos.',
      requisitos: [
        'Usei verbos no imperativo (sem sujeito)',
        'Inclui pelo menos uma negativa (Don\'t...)',
        'Acrescentei objetos aos comandos',
        'Usei "please" em pelo menos um',
        'Os passos fazem sentido em sequência',
      ],
      dica: 'Não coloque sujeito no imperativo: é "Open the door", não "You open the door". E o negativo é sempre "Don\'t + verbo", para qualquer pessoa.',
    },
    validacao: [
      'Formo o imperativo só com o verbo',
      'Faço a negativa com Don\'t',
      'Acrescento objetos aos comandos',
      'Uso please para educar',
      'Dei instruções em sequência',
    ],
  },

  'en-a1-acoes-5': {
    trilhaId: 'en-a1-acoes', numero: 5, titulo: 'Rotina x agora',
    tempoTotal: 11, xp: 80, vertente: 'ingles',
    aula: {
      gancho: '"Eu trabalho todo dia" é diferente de "estou trabalhando agora". O inglês separa bem o que é HÁBITO do que está acontecendo NESTE momento — e confundir os dois é um erro clássico de quem começa.',
      conceito: {
        titulo: 'Present simple x present continuous',
        texto: 'Dois presentes, dois usos. PRESENT SIMPLE (I work, she works) = rotinas, hábitos, fatos e coisas que sempre acontecem: "I work every day", "She drinks coffee in the morning". Sinais: every day, always, usually, on Mondays. PRESENT CONTINUOUS (I am working, she is working) = ação acontecendo AGORA, temporária: "I\'m working right now", "She\'s drinking coffee at the moment". Sinais: now, right now, at the moment, Look!. A pergunta-chave é: é um HÁBITO (simple) ou está acontecendo AGORA (continuous)? "I read books" (gosto/costumo) x "I\'m reading a book" (neste momento).',
      },
      estrutura: {
        titulo: 'Quando usar cada um',
        partes: [
          { simbolo: 'simple', desc: 'Hábito/rotina: I work every day.' },
          { simbolo: 'continuous', desc: 'Agora: I\'m working right now.' },
          { simbolo: 'sinais simple', desc: 'every day, always, usually, on Mondays.' },
          { simbolo: 'sinais cont.', desc: 'now, right now, at the moment, Look!' },
        ],
      },
      exemplo: {
        titulo: 'Hábito x momento',
        celulas: [
          { ref: 'Rotina', valor: 'I drink coffee every morning. — Tomo café toda manhã.' },
          { ref: 'Agora', valor: 'I\'m drinking tea now. — Estou tomando chá agora.' },
          { ref: 'Rotina', valor: 'She works in a shop. — Ela trabalha numa loja.' },
          { ref: 'Agora', valor: 'She\'s working from home today. — Hoje trabalha de casa.' },
        ],
        formula: 'hábito → present simple • agora → present continuous',
        resultado: 'Você escolhe o presente certo para cada situação.',
        comentario: 'A dica prática é caçar os "sinais": viu "every day, always, usually"? É simple. Viu "now, right now, at the moment, Look!"? É continuous. E pergunte: isso é algo que SEMPRE acontece, ou está acontecendo AGORA? "He plays football on Sundays" (hábito) x "He\'s playing football now" (momento). Treinar essa escolha evita o erro mais comum do A1.',
      },
      vocabulario: [
        { palavra: 'present simple', def: 'hábitos, rotinas, fatos (I work, she works).' },
        { palavra: 'present continuous', def: 'ação acontecendo agora (I\'m working).' },
        { palavra: 'every day / now', def: 'sinais de simple (every day) e continuous (now).' },
      ],
      chave: [
        'Hábito/rotina → present simple',
        'Acontecendo agora → present continuous',
        'Use os sinais: every day (simple) x now (continuous)',
      ],
      porque: 'Saber separar o que você sempre faz do que está fazendo agora é fundamental pra falar do presente sem errar. É a escolha que mais diferencia quem domina o básico de quem ainda confunde.',
    },
    pratica: {
      instrucao: 'Pratique escolher entre simple e continuous conforme a situação.',
      passos: [
        'Diga um hábito: "I ... every day." (simple)',
        'Diga o que faz agora: "I\'m ... now." (continuous)',
        'Fale de alguém em hábito: "She works ..."',
        'Fale de alguém agora: "She\'s working ..."',
        'Caça aos sinais: every day vs. right now',
        'Faça um par contrastando (hábito x agora)',
        'Monte 5 frases, metade simple, metade continuous',
      ],
    },
    desafio: {
      cenario: 'Escreva 6 frases sobre você: 3 hábitos (present simple, com sinais como every day) e 3 ações de agora (present continuous, com now/right now).',
      requisitos: [
        'Usei present simple para hábitos',
        'Usei present continuous para o agora',
        'Inclui sinais de cada tempo (every day, now)',
        'Acertei a 3ª pessoa no simple (she works)',
        'Acertei am/is/are + -ing no continuous',
      ],
      dica: 'Erro clássico: usar continuous pra hábito ("I\'m working every day" quando é rotina). Se tem "every day/always/usually", é present SIMPLE. Continuous é só pro que acontece AGORA.',
    },
    validacao: [
      'Sei quando usar present simple',
      'Sei quando usar present continuous',
      'Reconheço os sinais de cada um',
      'Acerto a 3ª pessoa no simple',
      'Contrastei hábito x agora',
    ],
  },

  'en-a1-acoes-6': {
    trilhaId: 'en-a1-acoes', numero: 6, titulo: 'Projeto: narre o que acontece',
    tempoTotal: 18, xp: 120, vertente: 'ingles',
    aula: {
      gancho: 'Hora de juntar tudo: você vai narrar uma cena — o que as pessoas estão fazendo, o que costumam fazer, o que sabem fazer e dar algumas instruções. É a sua primeira "narração" de ações em inglês.',
      conceito: {
        titulo: 'Narrar ações combinando os recursos da trilha',
        texto: 'Este projeto reúne a trilha numa narração falada de uma cena real (sua casa, uma rua, um vídeo). Você vai usar: 1) PRESENT CONTINUOUS para o que acontece agora ("A man is walking, a woman is talking on the phone"); 2) VERBOS DE AÇÃO variados (walk, talk, eat, read, play); 3) PRESENT SIMPLE para hábitos que você conhece ("He works here every day"); 4) CAN/CAN\'T para habilidades ("She can speak two languages"); 5) IMPERATIVO para dar uma ou duas instruções dentro da narração ("Look at the dog!", "Don\'t cross now"). O objetivo é produzir 8 a 10 frases que descrevam ações, misturando o que acontece agora com o que costuma acontecer. Olhe pela janela, observe um lugar movimentado ou um vídeo curto e narre o que vê. Ao final, você terá descrito uma cena inteira em movimento — prova de que domina os presentes e os verbos de ação.',
      },
      estrutura: {
        titulo: 'O que a narração deve ter',
        partes: [
          { simbolo: 'continuous', desc: 'O que acontece agora: "is/are + -ing".' },
          { simbolo: 'simple', desc: 'Hábitos da cena: "He works here every day."' },
          { simbolo: 'can', desc: 'Uma habilidade: "She can drive."' },
          { simbolo: 'imperativo', desc: 'Uma instrução: "Look!", "Don\'t run!"' },
        ],
      },
      exemplo: {
        titulo: 'Uma narração modelo',
        celulas: [
          { ref: 'EN', valor: 'A boy is playing football in the street.' },
          { ref: 'EN', valor: 'His mother works in the shop every day.' },
          { ref: 'EN', valor: 'He can run very fast. Look at him!' },
          { ref: 'EN', valor: 'Two people are talking. Don\'t cross now.' },
        ],
        formula: 'continuous + simple + can + imperativo = cena narrada',
        resultado: 'Você narra uma cena de ações em inglês.',
        comentario: 'O segredo é OBSERVAR e narrar ao vivo, como um comentarista: descreva o que vê acontecendo (continuous), acrescente o que sabe sobre a cena (simple/can) e solte uma instrução natural (imperativo). Não busque o texto perfeito; busque fluência ao descrever movimento. Grave-se narrando 30 segundos de uma cena — é a melhor prova da trilha.',
      },
      vocabulario: [
        { palavra: 'narrate / describe', def: 'narrar/descrever — contar o que está acontecendo.' },
        { palavra: 'scene', def: 'cena — o lugar/momento que você observa e narra.' },
        { palavra: 'happening now', def: 'acontecendo agora — foco do present continuous.' },
      ],
      chave: [
        'Narre uma cena de 8–10 frases',
        'Misture continuous (agora) e simple (hábito)',
        'Inclua um can e um imperativo',
      ],
      porque: 'Narrar ações integra tudo de uma vez e treina a habilidade real de descrever o que acontece — útil em conversas, ao contar o seu dia ou comentar um vídeo. Mostra que você já produz inglês em movimento.',
    },
    pratica: {
      instrucao: 'Observe uma cena e narre as ações em inglês.',
      passos: [
        'Escolha uma cena: janela, rua, vídeo curto',
        'Descreva o que acontece agora (continuous)',
        'Use vários verbos de ação diferentes',
        'Acrescente um hábito da cena (present simple)',
        'Inclua uma habilidade com can',
        'Solte uma ou duas instruções (imperativo)',
        'Grave 30s narrando e ouça pra ajustar',
      ],
    },
    desafio: {
      cenario: 'Narre uma cena em 8 a 10 frases usando as estruturas da trilha: present continuous, verbos de ação variados, present simple, can/can\'t e ao menos um imperativo.',
      requisitos: [
        'Descrevi o que acontece agora (continuous)',
        'Usei verbos de ação variados',
        'Inclui um hábito (present simple)',
        'Usei can para uma habilidade',
        'Dei ao menos uma instrução (imperativo) em voz alta',
      ],
      dica: 'Narre AO VIVO, olhando uma cena de verdade, em vez de inventar de cabeça. Comentar o que você realmente vê acontecendo deixa o continuous natural e a narração muito mais fluida.',
    },
    validacao: [
      'Usei present continuous na narração',
      'Usei verbos de ação variados',
      'Usei present simple para hábito',
      'Usei can para habilidade',
      'Inclui imperativo e narrei em voz alta',
    ],
  },
};
