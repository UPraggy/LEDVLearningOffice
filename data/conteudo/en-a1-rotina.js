// ============================================================================
// CONTEÚDO — Inglês A1: Meu Dia a Dia (en-a1-rotina) — Present Simple
// ============================================================================

export const EN_A1_ROTINA = {
  'en-a1-rotina-1': {
    trilhaId: 'en-a1-rotina', numero: 1, titulo: 'Verbos do dia a dia',
    tempoTotal: 9, xp: 50, vertente: 'ingles',
    aula: {
      gancho: 'Acordar, trabalhar, comer, dormir — sua rotina é feita de ações que se repetem. Aprender os verbos delas te dá o vocabulário pra contar seu dia inteiro em inglês.',
      conceito: {
        titulo: 'Os verbos que descrevem sua rotina',
        texto: 'Verbos são palavras de ação (trabalhar, comer). Pra falar da rotina, alguns são essenciais e se repetem todo dia. Aprenda-os primeiro no "infinitivo" (a forma base): work (trabalhar), eat (comer), sleep (dormir). Na próxima missão você vai usá-los em frases com o present simple. Aqui, o foco é conhecer os verbos.',
      },
      estrutura: {
        titulo: 'Verbos essenciais da rotina',
        partes: [
          { simbolo: '🌅', desc: 'wake up (acordar), get up (levantar), have breakfast (tomar café).' },
          { simbolo: '💼', desc: 'go (ir), work (trabalhar), study (estudar).' },
          { simbolo: '🍽️', desc: 'eat (comer), drink (beber), have lunch/dinner (almoçar/jantar).' },
          { simbolo: '🌙', desc: 'come home (voltar pra casa), watch TV (ver TV), sleep (dormir).' },
        ],
      },
      exemplo: {
        titulo: 'A rotina em verbos',
        celulas: [
          { ref: 'Manhã', valor: 'wake up → get up → have breakfast → go to work' },
          { ref: 'Dia', valor: 'work / study → have lunch' },
          { ref: 'Noite', valor: 'come home → have dinner → watch TV → sleep' },
          { ref: 'Dica', valor: 'muitos usam "have": have breakfast/lunch/dinner' },
        ],
        formula: 'verbos no infinitivo (work, eat, sleep) = a base da ação',
        resultado: 'Você tem o vocabulário da sua rotina.',
        comentario: 'Repare que "have" não é só "ter": "have breakfast" = tomar café, "have lunch" = almoçar. Esse uso de "have" pras refeições é muito comum.',
      },
      vocabulario: [
        { palavra: 'verb', def: 'verbo (vârb): palavra de ação (work, eat).' },
        { palavra: 'wake up / get up', def: 'acordar / levantar da cama.' },
        { palavra: 'have breakfast/lunch/dinner', def: 'tomar café / almoçar / jantar.' },
      ],
      chave: [
        'Verbos são ações; aprenda na forma base (work, eat, sleep)',
        '"have" também serve pras refeições (have lunch)',
        'A rotina toda cabe em ~12 verbos essenciais',
      ],
      porque: 'Os verbos da rotina são os mais usados no dia a dia. Com eles você conta seu dia, fala de hábitos e se conecta — e são a base pro present simple, o tempo verbal mais importante do inglês.',
    },
    pratica: {
      instrucao: 'Pense no seu dia de hoje. Vamos nomear as ações em voz alta.',
      passos: [
        'Diga os verbos da manhã: wake up, get up, have breakfast',
        'Diga os do trabalho/estudo: go, work, study',
        'Diga os das refeições: have lunch, eat, drink',
        'Diga os da noite: come home, have dinner, watch TV, sleep',
        'Repita a sequência do seu dia em verbos (só os verbos)',
        'Associe cada verbo a um horário seu',
        'Repita até lembrar dos principais',
      ],
    },
    desafio: {
      cenario: 'Liste, em ordem, os 8–10 verbos que descrevem o seu dia, do acordar ao dormir.',
      requisitos: [
        'Listei verbos da manhã',
        'Listei verbos do trabalho/estudo',
        'Listei verbos das refeições (com "have")',
        'Listei verbos da noite',
        'Pratiquei em voz alta',
      ],
      dica: 'Não tente decorar 50 verbos. Foque nos ~10 da SUA rotina real — são os que você vai usar de verdade. Vocabulário útil decorado vale mais que lista grande esquecida.',
    },
    validacao: [
      'Conheço os verbos da minha rotina',
      'Sei o uso de "have" pras refeições',
      'Sei os verbos no infinitivo (base)',
      'Associei verbos aos meus horários',
      'Pratiquei em voz alta',
    ],
  },

  'en-a1-rotina-2': {
    trilhaId: 'en-a1-rotina', numero: 2, titulo: 'Present simple (afirmativo)',
    tempoTotal: 12, xp: 60, vertente: 'ingles',
    aula: {
      gancho: 'Agora você junta os verbos em frases pra falar de hábitos e rotina: "Eu trabalho", "ela estuda". É o present simple — o tempo verbal mais usado do inglês. E ele traz de volta aquele "s" da 3ª pessoa.',
      conceito: {
        titulo: 'O tempo das rotinas e dos fatos',
        texto: 'O present simple descreve hábitos, rotinas e fatos: "I work every day". A forma é simples: pessoa + verbo. O único detalhe (mas importante!): na 3ª pessoa (he/she/it), o verbo ganha "s": "She works", "He eats". É o mesmo "s" do "has" que você já viu. Errar esse "s" é o erro nº1 dos brasileiros — então vamos fixá-lo.',
      },
      estrutura: {
        titulo: 'A regra do present simple',
        partes: [
          { simbolo: 'I/you/we/they', desc: 'verbo na forma base: I work, they eat, we study.' },
          { simbolo: 'he/she/it', desc: 'verbo + S: he works, she eats, it sleeps.' },
          { simbolo: '+es', desc: 'verbos em -o, -ss, -sh, -ch: go→goes, watch→watches.' },
          { simbolo: 'y→ies', desc: 'study→studies (y vira ies depois de consoante).' },
        ],
      },
      exemplo: {
        titulo: 'O "s" da 3ª pessoa',
        celulas: [
          { ref: 'I', valor: 'I work every day. — Trabalho todo dia.' },
          { ref: 'She', valor: 'She works in a shop. — Ela trabalha numa loja. (works!)' },
          { ref: 'He', valor: 'He watches TV. — Ele vê TV. (watches: +es)' },
          { ref: 'She', valor: 'She studies English. — Ela estuda inglês. (studies)' },
        ],
        formula: 'eu/você/nós/eles: verbo base · he/she/it: verbo + S',
        resultado: 'Você fala de hábitos e rotinas.',
        comentario: 'Truque pra nunca esquecer: "He, She, It → S no final". Diga isso como um mantra. É o detalhe que mais marca quem domina o básico de quem não domina.',
      },
      vocabulario: [
        { palavra: 'present simple', def: 'tempo verbal pra hábitos, rotinas e fatos.' },
        { palavra: 'every day', def: 'todo dia (évri dei) — marca rotina.' },
        { palavra: '3ª pessoa', def: 'he/she/it — ganham "s" no verbo.' },
      ],
      chave: [
        'Present simple = hábitos e rotinas',
        'He/She/It → verbo + S (works, eats)',
        '-o/-ss/-sh/-ch → +es; y → ies (studies)',
      ],
      porque: 'O present simple é o tempo verbal mais usado do inglês — toda rotina, hábito e fato passa por ele. E dominar o "s" da 3ª pessoa é o detalhe que mais diferencia o seu inglês.',
    },
    pratica: {
      instrucao: 'Vamos transformar os verbos da sua rotina em frases, em voz alta.',
      passos: [
        'Fale de você: "I work", "I have breakfast", "I sleep"',
        'Adicione detalhes: "I work every day", "I study English"',
        'Agora fale de outra pessoa (3ª pessoa) com o "s": "She works", "He eats"',
        'Pratique os especiais: "He goes", "She watches", "He studies"',
        'Repita o mantra: "He, She, It → S"',
        'Conte parte da sua rotina: "I wake up, I have breakfast, I go to work"',
        'Conte a rotina de um familiar (com o "s"): "She wakes up, she works..."',
      ],
    },
    desafio: {
      cenario: 'Escreva e fale 6 frases no present simple: 3 sobre você e 3 sobre outra pessoa (com o "s" da 3ª pessoa).',
      requisitos: [
        'Frases sobre mim na forma base (I work)',
        'Frases sobre ele/ela com o "s" (She works)',
        'Acertei os especiais (goes, watches, studies)',
        'Usei "every day" ou marca de rotina',
        'Pratiquei em voz alta',
      ],
      dica: 'Sempre que falar de he/she/it, faça uma "checagem do s": parou pra ver se o verbo tem o "s"? Esse hábito de conferência elimina o erro mais comum do inglês brasileiro.',
    },
    validacao: [
      'Sei o present simple afirmativo',
      'Acerto o "s" da 3ª pessoa',
      'Sei os especiais (goes, watches, studies)',
      'Falo da minha rotina e da dos outros',
      'Pratiquei em voz alta',
    ],
  },

  'en-a1-rotina-3': {
    trilhaId: 'en-a1-rotina', numero: 3, titulo: 'Negativo e perguntas (do/does)',
    tempoTotal: 12, xp: 70, vertente: 'ingles',
    aula: {
      gancho: '"Eu não trabalho aos domingos", "você gosta de café?" — pra negar e perguntar no present simple, entra um ajudante: do/does. Parece estranho, mas tem uma lógica que, uma vez entendida, resolve tudo.',
      conceito: {
        titulo: 'O ajudante "do/does"',
        texto: 'No present simple, pra negar ou perguntar usamos um verbo "ajudante": do (pra I/you/we/they) e does (pra he/she/it). Negativo: don’t / doesn’t + verbo base. Pergunta: Do/Does + pessoa + verbo base? O segredo: quando "does" aparece, ele "leva o s embora" — o verbo principal volta à forma base. "She works" → "She doesn’t work" (sem s no work!).',
      },
      estrutura: {
        titulo: 'Negar e perguntar',
        partes: [
          { simbolo: 'negativo', desc: "don't / doesn't + verbo base: I don’t work; She doesn’t work." },
          { simbolo: 'pergunta', desc: 'Do/Does + pessoa + verbo? Do you work? Does she work?' },
          { simbolo: '⚠️ o "s"', desc: 'Com does/doesn’t, o verbo principal PERDE o "s" (doesn’t work).' },
          { simbolo: 'respostas', desc: 'Yes, I do. / No, she doesn’t.' },
        ],
      },
      exemplo: {
        titulo: 'O pulo do gato do "s"',
        celulas: [
          { ref: 'Afirma', valor: 'She works. (com s)' },
          { ref: 'Nega', valor: 'She doesn’t work. (does levou o s embora!)' },
          { ref: 'Pergunta', valor: 'Does she work? (verbo base, sem s)' },
          { ref: 'Responde', valor: 'Yes, she does. / No, she doesn’t.' },
        ],
        formula: 'don’t/doesn’t + base · Do/Does + pessoa + base?',
        resultado: 'Você nega e pergunta sobre rotinas.',
        comentario: 'A regra de ouro: o "s" da 3ª pessoa aparece UMA vez só. Se está no "does", NÃO está no verbo. "Does she works?" está errado — é "Does she work?".',
      },
      vocabulario: [
        { palavra: "don't / doesn't", def: 'não (negativo): do not / does not.' },
        { palavra: 'Do...? / Does...?', def: 'abrem perguntas no present simple.' },
        { palavra: 'like', def: 'gostar (láik): Do you like coffee?' },
      ],
      chave: [
        'Negar: don’t/doesn’t + verbo base',
        'Perguntar: Do/Does + pessoa + verbo base?',
        'O "s" fica no does — o verbo volta à base',
      ],
      porque: 'Negar e perguntar é metade de qualquer conversa. Dominar do/does (e o detalhe do "s") destrava perguntas como "Do you like...?" e "Where do you work?" — essenciais pra interagir.',
    },
    pratica: {
      instrucao: 'Vamos negar e perguntar sobre rotina, em voz alta.',
      passos: [
        'Negue sobre você: "I don’t work on Sundays" (aos domingos)',
        'Negue sobre outra pessoa: "She doesn’t drink coffee" (sem s no drink!)',
        'Pergunte: "Do you like coffee?"',
        'Pergunte sobre ele/ela: "Does he work here?"',
        'Responda curto: "Yes, I do" / "No, she doesn’t"',
        'Confira o "s": no does, o verbo fica base',
        'Faça 3 perguntas e responda',
      ],
    },
    desafio: {
      cenario: 'Faça 3 perguntas e 3 negativas no present simple sobre rotina/gostos (suas e de outra pessoa), com do/does correto.',
      requisitos: [
        'Neguei com don’t/doesn’t + verbo base',
        'Perguntei com Do/Does + pessoa + verbo base',
        'Não deixei o "s" no verbo quando usei does',
        'Respondi curto (Yes, I do / No, she doesn’t)',
        'Pratiquei em voz alta',
      ],
      dica: 'O erro mais comum: "Does she works?". Lembre: o "s" já está no DOES, então o verbo fica base — "Does she work?". Cole isso na memória.',
    },
    validacao: [
      'Sei negar com don’t/doesn’t',
      'Sei perguntar com Do/Does',
      'Mantenho o verbo na base com does',
      'Sei as respostas curtas',
      'Pratiquei em voz alta',
    ],
  },

  'en-a1-rotina-4': {
    trilhaId: 'en-a1-rotina', numero: 4, titulo: 'Advérbios de frequência',
    tempoTotal: 10, xp: 60, vertente: 'ingles',
    aula: {
      gancho: '"Sempre", "às vezes", "nunca" — dizer COM QUE FREQUÊNCIA você faz algo dá riqueza à conversa. E há uma regrinha de posição que, uma vez sabida, você nunca mais erra.',
      conceito: {
        titulo: 'Com que frequência? Os advérbios',
        texto: 'Advérbios de frequência dizem quantas vezes algo acontece: always (sempre), usually (geralmente), sometimes (às vezes), never (nunca). A regra de posição: eles vêm ANTES do verbo principal ("I always work"), mas DEPOIS do "to be" ("I am always tired"). Eles deixam sua rotina muito mais natural e detalhada.',
      },
      estrutura: {
        titulo: 'Os advérbios e a posição',
        partes: [
          { simbolo: '100%', desc: 'always (sempre) · usually (geralmente).' },
          { simbolo: '50%', desc: 'often (frequentemente) · sometimes (às vezes).' },
          { simbolo: '0%', desc: 'rarely (raramente) · never (nunca).' },
          { simbolo: 'posição', desc: 'ANTES do verbo (I always work); DEPOIS do "to be" (I am always busy).' },
        ],
      },
      exemplo: {
        titulo: 'Frequência na rotina',
        celulas: [
          { ref: 'EN', valor: 'I always have breakfast. — Sempre tomo café.' },
          { ref: 'EN', valor: 'She never drinks coffee. — Ela nunca bebe café.' },
          { ref: 'Posição', valor: 'I usually work (antes do verbo)' },
          { ref: 'Com to be', valor: 'I am usually tired (depois do "am")' },
        ],
        formula: 'advérbio ANTES do verbo · DEPOIS do "to be"',
        resultado: 'Você diz com que frequência faz cada coisa.',
        comentario: 'Curiosidade: "never" já é negativo, então NÃO se usa com "don’t". É "I never work on Sundays", não "I don’t never". Um negativo basta.',
      },
      vocabulario: [
        { palavra: 'always / never', def: 'sempre / nunca.' },
        { palavra: 'usually / sometimes', def: 'geralmente / às vezes.' },
        { palavra: 'How often?', def: 'Com que frequência? (rau ófen)' },
      ],
      chave: [
        'always, usually, sometimes, never = frequência',
        'Vêm ANTES do verbo, DEPOIS do "to be"',
        'never já é negativo (não use com don’t)',
      ],
      porque: 'Advérbios de frequência transformam frases secas ("I work") em descrições ricas ("I usually work from home"). Eles dão naturalidade e detalhe — e aparecem o tempo todo ao falar de hábitos.',
    },
    pratica: {
      instrucao: 'Vamos detalhar sua rotina com frequência, em voz alta.',
      passos: [
        'Diga algo que você SEMPRE faz: "I always..."',
        'Algo que você GERALMENTE faz: "I usually..."',
        'Algo que você faz ÀS VEZES: "I sometimes..."',
        'Algo que você NUNCA faz: "I never..."',
        'Pratique a posição com "to be": "I am always busy"',
        'Pergunte: "How often do you...?"',
        'Conte sua rotina usando 3 advérbios diferentes',
      ],
    },
    desafio: {
      cenario: 'Descreva sua rotina com 5 frases usando advérbios de frequência diferentes, na posição correta.',
      requisitos: [
        'Usei always, usually, sometimes, never...',
        'Coloquei o advérbio antes do verbo',
        'Coloquei depois do "to be" quando era o caso',
        'Não usei "never" com don’t',
        'Pratiquei em voz alta',
      ],
      dica: 'Os advérbios de frequência são o jeito mais fácil de deixar sua fala mais natural e menos "robótica". Use-os bastante — eles enriquecem qualquer descrição de rotina.',
    },
    validacao: [
      'Sei os advérbios de frequência',
      'Coloco antes do verbo',
      'Coloco depois do "to be"',
      'Sei que never já é negativo',
      'Pratiquei em voz alta',
    ],
  },

  'en-a1-rotina-5': {
    trilhaId: 'en-a1-rotina', numero: 5, titulo: 'Falar de horários da rotina',
    tempoTotal: 10, xp: 60, vertente: 'ingles',
    aula: {
      gancho: 'Agora você junta tudo: ações + horas + dias. "Eu acordo às 7", "trabalho de segunda a sexta", "almoço ao meio-dia". É a sua rotina completa, com horários — exatamente como você contaria pra alguém.',
      conceito: {
        titulo: 'Ações + quando elas acontecem',
        texto: 'Pra contar a rotina com horários, junte o present simple (das missões anteriores) com as preposições de tempo: at + hora (at seven), on + dia (on Mondays), in + parte do dia (in the morning). Com isso você diz exatamente quando faz cada coisa — uma fala completa e muito útil.',
      },
      estrutura: {
        titulo: 'As preposições de tempo',
        partes: [
          { simbolo: 'at', desc: 'at + hora: at seven, at noon, at night.' },
          { simbolo: 'on', desc: 'on + dia: on Monday, on weekends.' },
          { simbolo: 'in', desc: 'in + parte do dia: in the morning/afternoon/evening.' },
          { simbolo: 'from...to', desc: 'from Monday to Friday — de segunda a sexta.' },
        ],
      },
      exemplo: {
        titulo: 'Rotina com horários',
        celulas: [
          { ref: 'EN', valor: 'I get up at seven. — Levanto às sete.' },
          { ref: 'EN', valor: 'I work from Monday to Friday. — Trabalho de seg a sex.' },
          { ref: 'EN', valor: 'I have lunch at noon. — Almoço ao meio-dia.' },
          { ref: 'EN', valor: 'In the evening, I watch TV. — À noite, vejo TV.' },
        ],
        formula: 'ação (present simple) + at/on/in + tempo',
        resultado: 'Você conta sua rotina completa, com horários.',
        comentario: 'Resumo das preposições de tempo: "at" pra horas (at 7), "on" pra dias (on Monday), "in" pra partes do dia e meses (in the morning, in May). Exceção útil: "at night" (não "in the night").',
      },
      vocabulario: [
        { palavra: 'at / on / in (tempo)', def: 'at (hora), on (dia), in (parte do dia/mês).' },
        { palavra: 'from... to...', def: 'de... a... (from Monday to Friday).' },
        { palavra: 'in the morning', def: 'de manhã (à tarde: in the afternoon; à noite: in the evening).' },
      ],
      chave: [
        'at = hora · on = dia · in = parte do dia/mês',
        '"from Monday to Friday" = de seg a sex',
        'Exceção: "at night"',
      ],
      porque: 'Contar a rotina com horários é uma das falas mais úteis e comuns — em conversas, no trabalho, ao se organizar. Junta tudo do A1: verbos, present simple, horas e dias.',
    },
    pratica: {
      instrucao: 'Vamos contar sua rotina com horários, em voz alta.',
      passos: [
        'Diga a que horas você levanta: "I get up at..."',
        'Diga quando trabalha/estuda: "I work from ... to ..."',
        'Diga quando almoça: "I have lunch at..."',
        'Use partes do dia: "In the morning, I...", "In the evening, I..."',
        'Adicione frequência: "I usually get up at 6 on weekdays"',
        'Confira as preposições: at (hora), on (dia), in (parte do dia)',
        'Conte sua rotina do acordar ao dormir, com horários',
      ],
    },
    desafio: {
      cenario: 'Conte sua rotina completa (6+ frases) com horários, usando at/on/in corretamente e ao menos um advérbio de frequência.',
      requisitos: [
        'Usei verbos da rotina no present simple',
        'Usei "at" pra horas',
        'Usei "on" pra dias e "in" pra partes do dia',
        'Incluí um advérbio de frequência',
        'Pratiquei em voz alta',
      ],
      dica: 'Junte tudo: "I usually get up at 6 in the morning. I work from Monday to Friday." Combinar present simple + frequência + preposições de tempo é falar inglês de verdade.',
    },
    validacao: [
      'Conto a rotina com present simple',
      'Uso at/on/in pra tempo corretamente',
      'Uso "from... to..."',
      'Incluo advérbios de frequência',
      'Pratiquei em voz alta',
    ],
  },

  'en-a1-rotina-6': {
    trilhaId: 'en-a1-rotina', numero: 6, titulo: 'Projeto: descreva seu dia',
    tempoTotal: 18, xp: 100, vertente: 'ingles',
    aula: {
      gancho: 'Hora de juntar TODO o A1 numa fala só: descrever um dia típico seu em inglês, do acordar ao dormir, com horários, frequência e detalhes. É a prova de que você já fala inglês básico de verdade.',
      conceito: {
        titulo: 'Um dia típico, contado em inglês',
        texto: 'Este projeto reúne tudo: os verbos da rotina, o present simple (com o "s" certo), os advérbios de frequência e as preposições de tempo. Você vai descrever um dia típico seu, em sequência, como contaria pra um amigo estrangeiro. É a maior fala da trilha — e fecha o nível A1 com chave de ouro.',
      },
      estrutura: {
        titulo: 'A estrutura do "meu dia"',
        partes: [
          { simbolo: '🌅', desc: 'Manhã: "I usually wake up at... I have breakfast and..."' },
          { simbolo: '☀️', desc: 'Dia: "I work/study from... to... I have lunch at..."' },
          { simbolo: '🌆', desc: 'Tarde/noite: "In the evening, I... I have dinner at..."' },
          { simbolo: '🌙', desc: 'Fim: "I usually go to bed at... / I sleep at..."' },
        ],
      },
      exemplo: {
        titulo: 'Um dia descrito (modelo)',
        celulas: [
          { ref: 'Manhã', valor: 'I usually wake up at 6. I have breakfast and go to work.' },
          { ref: 'Dia', valor: 'I work from 8 to 5. I have lunch at noon.' },
          { ref: 'Noite', valor: 'In the evening, I watch TV. I sometimes read.' },
          { ref: 'Fim', valor: 'I go to bed at 11. I never sleep late.' },
        ],
        formula: 'verbos + present simple + frequência + horários, em sequência',
        resultado: 'Sua rotina inteira, falada em inglês.',
        comentario: 'Grave o seu "dia em inglês". Compare com as gravações das trilhas anteriores: dá pra sentir o quanto você evoluiu — de palavras soltas a uma fala conectada. Esse é o poder de concluir o A1!',
      },
      vocabulario: [
        { palavra: 'a typical day', def: 'um dia típico.' },
        { palavra: 'go to bed', def: 'ir dormir / pra cama.' },
        { palavra: 'then / after that', def: 'então / depois disso — pra conectar a sequência.' },
      ],
      chave: [
        'Junte: verbos + present simple + frequência + horários',
        'Conte em sequência (manhã → dia → noite)',
        'Use conectores (then, after that) e grave',
      ],
      porque: 'Descrever um dia típico é uma das falas mais pedidas e úteis do inglês — e reúne todo o A1. Concluir este projeto significa que você fechou o nível iniciante: já fala de si, dos outros e da sua vida em inglês.',
    },
    pratica: {
      instrucao: 'Reserve 18 minutos. Escreva e ensaie a descrição de um dia típico seu, usando tudo do A1.',
      passos: [
        'Escreva sua manhã: acordar, café, ir trabalhar (com horários)',
        'Escreva seu dia: trabalho/estudo, almoço (from... to..., at...)',
        'Escreva sua tarde/noite: voltar, jantar, lazer',
        'Escreva o fim do dia: ir dormir',
        'Adicione advérbios de frequência (usually, always, never)',
        'Use conectores: then, after that',
        'Leia em voz alta, ajuste, e grave a fala completa',
      ],
    },
    desafio: {
      cenario: 'Descreva um dia típico seu em inglês (escrito E falado/gravado), do acordar ao dormir, com horários e frequência.',
      requisitos: [
        'Descrevi manhã, dia, tarde/noite e fim em sequência',
        'Usei present simple corretamente (com o "s" quando preciso)',
        'Usei preposições de tempo (at/on/in)',
        'Incluí advérbios de frequência',
        'Usei conectores (then, after that)',
        'Pratiquei em voz alta / gravei',
      ],
      dica: 'Parabéns — você concluiu o NÍVEL A1 de inglês! 🎉 Você já se apresenta, fala da família, dos números/horas e da sua rotina. É uma base sólida de verdade. A partir daqui (A2), o inglês começa a virar conversa. Keep going — you’re doing great!',
    },
    validacao: [
      'Descrevi um dia típico completo',
      'Usei present simple corretamente',
      'Usei preposições de tempo',
      'Incluí frequência e conectores',
      'Pratiquei em voz alta / gravei',
      'Concluí o nível A1',
    ],
  },
};
