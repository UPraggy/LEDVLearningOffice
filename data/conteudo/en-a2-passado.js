// ============================================================================
// CONTEÚDO — Inglês A2: Falando do Passado (en-a2-passado) — Past Simple
// ============================================================================

export const EN_A2_PASSADO = {
  'en-a2-passado-1': {
    trilhaId: 'en-a2-passado', numero: 1, titulo: 'Was / were (passado de "to be")',
    tempoTotal: 10, xp: 60, vertente: 'ingles',
    aula: {
      gancho: 'Pra contar o passado, o primeiro passo é o passado do "to be": "Eu estava", "ela era", "nós estávamos". Em inglês, só duas palavras dão conta: was e were.',
      conceito: {
        titulo: 'O passado do verbo mais usado',
        texto: 'Você já domina o "to be" no presente (am/is/are). No passado, ele tem só duas formas: was (pra I/he/she/it) e were (pra you/we/they). "I was happy" (eu estava feliz), "they were here" (eles estavam aqui). É o ponto de partida pra falar do passado — simples e muito usado.',
      },
      estrutura: {
        titulo: 'Was e were',
        partes: [
          { simbolo: 'was', desc: 'I / he / she / it → was: I was tired. She was here.' },
          { simbolo: 'were', desc: 'you / we / they → were: We were happy. They were late.' },
          { simbolo: 'negativo', desc: 'wasn’t / weren’t: I wasn’t at home.' },
          { simbolo: 'pergunta', desc: 'Was/Were + pessoa?: Were you there? Was it good?' },
        ],
      },
      exemplo: {
        titulo: 'Passado do "to be"',
        celulas: [
          { ref: 'EN', valor: 'I was at work yesterday. — Eu estava no trabalho ontem.' },
          { ref: 'EN', valor: 'They were happy. — Eles estavam felizes.' },
          { ref: 'Negativo', valor: 'She wasn’t at home. — Ela não estava em casa.' },
          { ref: 'Pergunta', valor: 'Were you tired? — Você estava cansado?' },
        ],
        formula: 'I/he/she/it → was · you/we/they → were',
        resultado: 'Você fala de estados e situações no passado.',
        comentario: '"Yesterday" (ontem) e "last week" (semana passada) são marcadores de passado úteis. Repare: was/were não precisam de "did" pra negar/perguntar (diferente dos outros verbos, que você verá já já).',
      },
      vocabulario: [
        { palavra: 'was / were', def: 'passado do "to be" (era/estava / eram/estavam).' },
        { palavra: 'yesterday', def: 'ontem (iésterdei).' },
        { palavra: 'last...', def: 'passado(a): last week (semana passada), last year.' },
      ],
      chave: [
        'was: I/he/she/it · were: you/we/they',
        'Negativo: wasn’t / weren’t (sem "did")',
        'Marcadores: yesterday, last week',
      ],
      porque: 'O passado do "to be" é a base pra contar o que aconteceu, como você estava, onde esteve. É o primeiro passo pra narrar — uma habilidade central do A2.',
    },
    pratica: {
      instrucao: 'Pense em ontem. Vamos falar no passado com was/were, em voz alta.',
      passos: [
        'Diga onde você estava ontem: "I was at..."',
        'Diga como você estava: "I was tired/happy"',
        'Fale de outras pessoas: "They were...", "She was..."',
        'Negue: "I wasn’t at home"',
        'Pergunte: "Were you at work yesterday?"',
        'Use marcadores: yesterday, last week',
        'Monte 4 frases no passado com was/were',
      ],
    },
    desafio: {
      cenario: 'Conte como foi seu dia de ontem usando was/were (afirmativo, negativo e uma pergunta).',
      requisitos: [
        'Usei "was" pra I/he/she/it',
        'Usei "were" pra you/we/they',
        'Fiz uma frase negativa (wasn’t/weren’t)',
        'Fiz uma pergunta (Was/Were...?)',
        'Usei um marcador de passado (yesterday)',
      ],
      dica: 'was/were são "independentes": negam e perguntam sozinhos (Was she...? / She wasn’t...), sem precisar de "did". Os OUTROS verbos vão precisar do "did" — você verá já na próxima missão.',
    },
    validacao: [
      'Sei was/were corretamente',
      'Sei negar (wasn’t/weren’t)',
      'Sei perguntar (Was/Were...?)',
      'Uso marcadores de passado',
      'Pratiquei em voz alta',
    ],
  },

  'en-a2-passado-2': {
    trilhaId: 'en-a2-passado', numero: 2, titulo: 'Past simple: verbos regulares',
    tempoTotal: 12, xp: 70, vertente: 'ingles',
    aula: {
      gancho: 'Pra contar o que você FEZ — "trabalhei", "estudei", "joguei" — entra o past simple. E os verbos regulares têm uma regra linda de simples: é só botar "-ed" no final.',
      conceito: {
        titulo: 'O passado com "-ed"',
        texto: 'A maioria dos verbos forma o passado simplesmente adicionando "-ed": work → worked (trabalhou), play → played (jogou), study → studied. E o melhor: a forma é IGUAL pra todas as pessoas — não tem "s" nem nada (I worked, she worked, they worked). É um dos pontos mais fáceis do inglês.',
      },
      estrutura: {
        titulo: 'A regra do "-ed"',
        partes: [
          { simbolo: '+ed', desc: 'work → worked, play → played, watch → watched.' },
          { simbolo: '+d', desc: 'verbos terminados em "e": like → liked, live → lived.' },
          { simbolo: 'y→ied', desc: 'study → studied, try → tried (y depois de consoante).' },
          { simbolo: 'igual', desc: 'Mesma forma pra todos: I/you/she/they worked.' },
        ],
      },
      exemplo: {
        titulo: 'Verbos regulares no passado',
        celulas: [
          { ref: 'EN', valor: 'I worked yesterday. — Trabalhei ontem.' },
          { ref: 'EN', valor: 'She studied English. — Ela estudou inglês.' },
          { ref: 'EN', valor: 'We watched a film. — Assistimos um filme.' },
          { ref: 'Igual', valor: 'I/he/we/they played — a forma não muda!' },
        ],
        formula: 'verbo + ed (igual pra todas as pessoas)',
        resultado: 'Você conta ações passadas com verbos regulares.',
        comentario: 'A pronúncia do "-ed" varia (worked = "uârkt"; played = "plêid"; wanted = "uântid"), mas não se preocupe em perfeição agora — escrever e usar já é o avanço. A forma única (sem "s") é uma mão na roda.',
      },
      vocabulario: [
        { palavra: 'past simple', def: 'passado simples — ações terminadas no passado.' },
        { palavra: 'regular verb', def: 'verbo que faz o passado com "-ed".' },
        { palavra: 'ago', def: 'atrás (no tempo): two days ago (dois dias atrás).' },
      ],
      chave: [
        'Verbos regulares: + "-ed" (worked, played)',
        'Forma IGUAL pra todas as pessoas (sem "s")',
        'y → ied (studied); termina em e → +d (liked)',
      ],
      porque: 'O past simple é o tempo pra contar histórias e o que você fez — essencial pra conversar sobre o dia, a vida, experiências. E os regulares são a parte mais fácil: uma regra só.',
    },
    pratica: {
      instrucao: 'Pense no que você fez ontem. Vamos contar em voz alta com verbos regulares.',
      passos: [
        'Diga "I worked" / "I studied" / "I played"',
        'Adicione detalhe: "I worked yesterday"',
        'Fale de outra pessoa (forma igual!): "She worked", "He studied"',
        'Pratique a regra: like→liked, study→studied, watch→watched',
        'Use marcadores: yesterday, last week, two days ago',
        'Conte 3 coisas que você fez ontem',
        'Repita notando que a forma não muda',
      ],
    },
    desafio: {
      cenario: 'Conte 5 coisas que você fez recentemente, usando verbos regulares no passado (-ed) corretamente.',
      requisitos: [
        'Usei verbos regulares no passado (+ed)',
        'Apliquei as variações (y→ied, +d)',
        'Mantive a forma igual pra todas as pessoas',
        'Usei marcadores de passado (yesterday, ago)',
        'Pratiquei em voz alta',
      ],
      dica: 'A grande facilidade do passado em inglês: a forma é a mesma pra todos (não tem o "s" da 3ª pessoa). Depois do present simple, isso é um alívio!',
    },
    validacao: [
      'Sei formar o passado com "-ed"',
      'Aplico y→ied e +d',
      'Sei que a forma é igual pra todos',
      'Uso marcadores de passado',
      'Pratiquei em voz alta',
    ],
  },

  'en-a2-passado-3': {
    trilhaId: 'en-a2-passado', numero: 3, titulo: 'Verbos irregulares comuns',
    tempoTotal: 12, xp: 80, vertente: 'ingles',
    aula: {
      gancho: 'Alguns verbos, os mais usados de todos, não seguem a regra do "-ed": go vira "went", have vira "had", see vira "saw". São os irregulares — e como aparecem o tempo todo, vale conhecê-los.',
      conceito: {
        titulo: 'Os verbos que mudam de forma',
        texto: 'Os verbos irregulares formam o passado de jeitos próprios (não com "-ed"): go → went, have → had, do → did, see → saw. A boa notícia: os mais irregulares são justamente os mais USADOS, então você os encontra (e fixa) o tempo todo. Não precisa decorar uma lista enorme de uma vez — comece pelos 10 mais comuns.',
      },
      estrutura: {
        titulo: 'Os irregulares mais comuns',
        partes: [
          { simbolo: 'go/have', desc: 'go → went (foi), have → had (teve/tomou).' },
          { simbolo: 'do/see', desc: 'do → did (fez), see → saw (viu).' },
          { simbolo: 'get/make', desc: 'get → got (conseguiu), make → made (fez).' },
          { simbolo: 'eat/say', desc: 'eat → ate (comeu), say → said (disse), come → came (veio).' },
        ],
      },
      exemplo: {
        titulo: 'Irregulares em ação',
        celulas: [
          { ref: 'EN', valor: 'I went to the park. — Fui ao parque. (go → went)' },
          { ref: 'EN', valor: 'We had lunch at noon. — Almoçamos ao meio-dia. (have → had)' },
          { ref: 'EN', valor: 'She saw a film. — Ela viu um filme. (see → saw)' },
          { ref: 'Igual', valor: 'a forma também é igual pra todos (I/he/we went)' },
        ],
        formula: 'cada irregular tem sua forma própria (go→went, have→had)',
        resultado: 'Você conta ações com os verbos mais usados.',
        comentario: 'Dica de estudo: aprenda os irregulares dentro de FRASES que você usa ("I went to..."), não como lista decorada. Eles aparecem tanto que vão grudar naturalmente. Comece pelos 10-15 mais comuns.',
      },
      vocabulario: [
        { palavra: 'irregular verb', def: 'verbo com passado próprio (não usa "-ed").' },
        { palavra: 'went / had / did', def: 'passado de go / have / do.' },
        { palavra: 'saw / made / got', def: 'passado de see / make / get.' },
      ],
      chave: [
        'Irregulares não usam "-ed": go→went, have→had, see→saw',
        'Os mais usados são irregulares (você os vê sempre)',
        'Aprenda dentro de frases, não em lista solta',
      ],
      porque: 'Os verbos irregulares são os mais frequentes do inglês (go, have, do, get, see). Sem eles, não dá pra contar quase nada do passado — por isso vale conhecê-los bem.',
    },
    pratica: {
      instrucao: 'Pense em ontem/semana passada. Vamos contar com irregulares, em voz alta.',
      passos: [
        'Diga onde você foi: "I went to..." (go → went)',
        'Diga o que você comeu: "I ate..." (eat → ate)',
        'Diga o que você viu: "I saw..." (see → saw)',
        'Use had: "I had coffee", "We had dinner"',
        'Use got/made: "I got home late", "I made lunch"',
        'Repita os 8 irregulares em frases suas',
        'Conte 3 coisas que você fez usando irregulares',
      ],
    },
    desafio: {
      cenario: 'Conte uma pequena sequência do seu passado (ontem ou um dia marcante) usando pelo menos 5 verbos irregulares.',
      requisitos: [
        'Usei went (go) corretamente',
        'Usei had (have)',
        'Usei pelo menos 3 outros irregulares (saw, ate, got, made...)',
        'Mantive a forma igual pra todas as pessoas',
        'Pratiquei em voz alta',
      ],
      dica: 'Faça uma "lista viva" dos irregulares que VOCÊ mais usa, dentro de frases suas ("I went to work"). Revise-a de vez em quando. Com o uso, eles viram automáticos.',
    },
    validacao: [
      'Conheço os irregulares mais comuns',
      'Sei went, had, did, saw...',
      'Uso-os em frases reais',
      'Mantenho a forma igual pra todos',
      'Pratiquei em voz alta',
    ],
  },

  'en-a2-passado-4': {
    trilhaId: 'en-a2-passado', numero: 4, titulo: 'Negativo e perguntas (didn’t / did)',
    tempoTotal: 12, xp: 70, vertente: 'ingles',
    aula: {
      gancho: '"Não fui", "você viu?", "o que você fez?" — pra negar e perguntar no passado, entra o ajudante "did". E ele tem o mesmo truque do "does": leva o passado embora, e o verbo volta à forma base.',
      conceito: {
        titulo: 'O ajudante "did" do passado',
        texto: 'Pra negar ou perguntar no past simple, usamos "did" (pra TODAS as pessoas — sem complicação). Negativo: didn’t + verbo BASE. Pergunta: Did + pessoa + verbo BASE? O truque-chave: quando "did/didn’t" aparece, o verbo principal VOLTA À FORMA BASE — "I went" → "I didn’t go" (não "didn’t went"). O "did" já carrega o passado.',
      },
      estrutura: {
        titulo: 'Negar e perguntar no passado',
        partes: [
          { simbolo: 'negativo', desc: "didn't + verbo base: I didn’t go. (não went!)" },
          { simbolo: 'pergunta', desc: 'Did + pessoa + verbo base?: Did you go? Did she eat?' },
          { simbolo: 'todas', desc: '"did" serve pra TODAS as pessoas (I/you/he/we/they).' },
          { simbolo: 'respostas', desc: 'Yes, I did. / No, she didn’t.' },
        ],
      },
      exemplo: {
        titulo: 'O verbo volta à base',
        celulas: [
          { ref: 'Afirma', valor: 'I went to the party. (went)' },
          { ref: 'Nega', valor: 'I didn’t go to the party. (go — base!)' },
          { ref: 'Pergunta', valor: 'Did you go to the party? (go — base!)' },
          { ref: 'Responde', valor: 'Yes, I did. / No, I didn’t.' },
        ],
        formula: 'didn’t + base · Did + pessoa + base?',
        resultado: 'Você nega e pergunta sobre o passado.',
        comentario: 'O erro clássico: "Did you went?" — errado! O "did" já é o passado, então o verbo fica base: "Did you go?". É a mesma lógica do "does" no presente. Um marcador de passado só pode estar num lugar.',
      },
      vocabulario: [
        { palavra: "didn't", def: 'não (passado): did not + verbo base.' },
        { palavra: 'Did...?', def: 'abre perguntas no passado (Did you...?).' },
        { palavra: 'What did you do?', def: 'O que você fez? — pergunta muito útil.' },
      ],
      chave: [
        'Negar: didn’t + verbo base',
        'Perguntar: Did + pessoa + verbo base?',
        'O "did" carrega o passado — o verbo volta à base',
      ],
      porque: 'Negar e perguntar no passado é metade de qualquer conversa sobre o que aconteceu ("o que você fez no fim de semana?"). Dominar o "did" (e o retorno à base) destrava isso.',
    },
    pratica: {
      instrucao: 'Pense no seu fim de semana. Vamos negar e perguntar no passado, em voz alta.',
      passos: [
        'Negue algo: "I didn’t work yesterday" (didn’t + base)',
        'Negue com irregular: "I didn’t go out" (go, não went!)',
        'Pergunte: "Did you have a good weekend?"',
        'Pergunte: "What did you do yesterday?"',
        'Responda curto: "Yes, I did" / "No, I didn’t"',
        'Confira: depois de did/didn’t, o verbo é base',
        'Faça 3 perguntas e responda',
      ],
    },
    desafio: {
      cenario: 'Faça 3 perguntas e 3 negativas sobre o passado (seu ou de alguém), com did/didn’t e o verbo na base.',
      requisitos: [
        'Neguei com "didn’t + verbo base"',
        'Perguntei com "Did + pessoa + verbo base"',
        'Não deixei o verbo no passado depois de did (didn’t go, não went)',
        'Respondi curto (Yes, I did / No, I didn’t)',
        'Pratiquei em voz alta',
      ],
      dica: 'A pergunta "What did you do (yesterday/on the weekend)?" é ouro pra conversar. Decore-a — e lembre: a resposta volta a usar o passado normal ("I went...", "I watched...").',
    },
    validacao: [
      'Sei negar com didn’t + base',
      'Sei perguntar com Did + base',
      'O verbo volta à base depois de did',
      'Sei as respostas curtas',
      'Pratiquei em voz alta',
    ],
  },

  'en-a2-passado-5': {
    trilhaId: 'en-a2-passado', numero: 5, titulo: 'Projeto: conte seu fim de semana',
    tempoTotal: 18, xp: 100, vertente: 'ingles',
    aula: {
      gancho: 'Hora de juntar tudo: contar seu fim de semana (ou um dia marcante) em inglês — o que você fez, onde foi, com quem. "How was your weekend?" é uma das perguntas mais comuns, e agora você sabe responder.',
      conceito: {
        titulo: 'Narrar o passado, de ponta a ponta',
        texto: 'Este projeto reúne o A2 do passado: was/were, verbos regulares (-ed), irregulares (went, had, saw) e o "did" pra perguntas. Você vai narrar seu fim de semana numa sequência — uma das falas mais comuns em qualquer conversa ("How was your weekend?"). Contar uma história simples no passado é um marco importante da fluência.',
      },
      estrutura: {
        titulo: 'A estrutura da narrativa',
        partes: [
          { simbolo: '📍', desc: 'Abertura: "Last weekend was great/busy/quiet."' },
          { simbolo: '➡️', desc: 'Sequência: "On Saturday, I went... / I had... / I saw..."' },
          { simbolo: '🔗', desc: 'Conectar: first (primeiro), then (então), after that (depois).' },
          { simbolo: '🙂', desc: 'Fecho: "It was a nice/relaxing weekend."' },
        ],
      },
      exemplo: {
        titulo: 'Um fim de semana narrado',
        celulas: [
          { ref: 'Abre', valor: 'Last weekend was nice.' },
          { ref: 'Sáb', valor: 'On Saturday, I went to the park and had lunch with my family.' },
          { ref: 'Dom', valor: 'Then, on Sunday, I watched a film and rested.' },
          { ref: 'Fecha', valor: 'It was a relaxing weekend!' },
        ],
        formula: 'abertura (was) + sequência (went/had/-ed) + conectores + fecho',
        resultado: 'Sua primeira "história" no passado, em inglês.',
        comentario: 'Grave sua narrativa. Responder "How was your weekend?" com naturalidade é um marco — você passou de frases soltas pra CONTAR algo. Compare com gravações antigas e celebre o progresso!',
      },
      vocabulario: [
        { palavra: 'How was your weekend?', def: 'Como foi seu fim de semana? — pergunta super comum.' },
        { palavra: 'first / then / after that', def: 'primeiro / então / depois disso (conectores).' },
        { palavra: 'rested / relaxed', def: 'descansei / relaxei (verbos úteis).' },
      ],
      chave: [
        'Junte: was/were + regulares + irregulares + did',
        'Narre em sequência com conectores (first, then)',
        'Responda "How was your weekend?" com naturalidade',
      ],
      porque: 'Narrar o passado é o coração da conversa cotidiana — "o que você fez?" aparece sempre. Concluir este projeto prova que você já conta histórias simples em inglês, um salto enorme de fluência.',
    },
    pratica: {
      instrucao: 'Reserve 18 minutos. Narre seu último fim de semana (ou um dia marcante), usando tudo da trilha.',
      passos: [
        'Abra com was/were: "Last weekend was..."',
        'Conte o sábado em sequência: "On Saturday, I went... I had..."',
        'Conte o domingo: "On Sunday, I..."',
        'Use verbos regulares (-ed) e irregulares (went, had, saw)',
        'Conecte com first, then, after that',
        'Feche com "It was a ... weekend"',
        'Leia em voz alta, ajuste e grave',
      ],
    },
    desafio: {
      cenario: 'Narre seu fim de semana em inglês (escrito E falado/gravado), com sequência, conectores e variedade de verbos no passado.',
      requisitos: [
        'Abri com was/were',
        'Usei verbos regulares (-ed) e irregulares',
        'Narrei em sequência (sábado, domingo)',
        'Usei conectores (first, then, after that)',
        'Fechei a narrativa',
        'Pratiquei em voz alta / gravei',
      ],
      dica: 'Parabéns — você concluiu "Falando do Passado"! Contar o que você fez é uma das conversas mais frequentes. Da próxima vez que alguém perguntar do seu fim de semana, monte a resposta em inglês na cabeça — treino real.',
    },
    validacao: [
      'Narrei meu fim de semana em sequência',
      'Usei regulares e irregulares',
      'Usei was/were',
      'Usei conectores',
      'Pratiquei em voz alta / gravei',
    ],
  },
};
