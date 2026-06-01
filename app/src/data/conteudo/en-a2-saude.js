// ============================================================================
// CONTEÚDO — Inglês A2: Saúde e Corpo (en-a2-saude)
// Partes do corpo, sintomas e doenças, no médico/farmácia, should/shouldn't
// (conselho), must/have to (obrigação), e projeto: encenar uma consulta.
// ============================================================================

export const EN_A2_SAUDE = {
  'en-a2-saude-1': {
    trilhaId: 'en-a2-saude', numero: 1, titulo: 'Partes do corpo',
    tempoTotal: 11, xp: 80, vertente: 'ingles',
    aula: {
      gancho: 'Cabeça, braço, perna, costas, estômago — quando algo dói, você precisa saber NOMEAR a parte do corpo pra explicar. É o primeiro passo pra cuidar da saúde em inglês.',
      conceito: {
        titulo: 'Nomeando o corpo',
        texto: 'Vamos cobrir as partes do corpo mais úteis. CABEÇA e rosto: head (cabeça), face (rosto), eye (olho), ear (orelha), nose (nariz), mouth (boca), tooth/teeth (dente/dentes), throat (garganta). TRONCO: neck (pescoço), shoulder (ombro), chest (peito), back (costas), stomach (estômago/barriga). MEMBROS: arm (braço), hand (mão), finger (dedo da mão), leg (perna), knee (joelho), foot/feet (pé/pés), toe (dedo do pé). Muitas vêm aos pares (eyes, ears, hands, feet) — atenção aos plurais irregulares: tooth→teeth, foot→feet. Com esse vocabulário você localiza qualquer dor ou problema.',
      },
      estrutura: {
        titulo: 'Grupos do corpo',
        partes: [
          { simbolo: 'cabeça', desc: 'head, face, eye, ear, nose, mouth, throat.' },
          { simbolo: 'tronco', desc: 'neck, shoulder, chest, back, stomach.' },
          { simbolo: 'membros', desc: 'arm, hand, finger, leg, knee, foot.' },
          { simbolo: 'plurais', desc: 'tooth→teeth, foot→feet (irregulares).' },
        ],
      },
      exemplo: {
        titulo: 'Localizando partes',
        celulas: [
          { ref: 'EN', valor: 'My head hurts. — Minha cabeça dói.' },
          { ref: 'EN', valor: 'I have two hands and ten fingers. — Duas mãos, dez dedos.' },
          { ref: 'EN', valor: 'My feet are cold. — Meus pés estão frios.' },
          { ref: 'EN', valor: 'Open your mouth, please. — Abra a boca, por favor.' },
        ],
        formula: 'parte do corpo + estado/dor (hurts, is cold...)',
        resultado: 'Você nomeia as partes do corpo em inglês.',
        comentario: 'Aprenda apontando para o seu próprio corpo e dizendo o nome — a memória corporal fixa rápido. Cuide dos plurais irregulares (teeth, feet) e das partes que confundem: stomach (barriga/estômago) cobre a região da "barriga"; chest é o peito; back são as costas. Toque cada parte e nomeie: head, neck, arm, hand...',
      },
      vocabulario: [
        { palavra: 'head / back / stomach', def: 'cabeça / costas / estômago(barriga).' },
        { palavra: 'arm / hand / leg / foot', def: 'braço / mão / perna / pé.' },
        { palavra: 'tooth→teeth, foot→feet', def: 'plurais irregulares do corpo.' },
      ],
      chave: [
        'Cabeça/rosto: head, eye, ear, nose, mouth, throat',
        'Membros: arm, hand, leg, knee, foot',
        'Plurais irregulares: teeth, feet',
      ],
      porque: 'Você não consegue explicar uma dor sem nomear onde dói. Partes do corpo são a base pra falar de saúde, ir ao médico ou à farmácia e cuidar de si em inglês.',
    },
    pratica: {
      instrucao: 'Aponte para seu corpo e nomeie cada parte.',
      passos: [
        'Toque e nomeie 5 partes da cabeça',
        'Toque e nomeie 5 partes do tronco/membros',
        'Diga os plurais: eyes, ears, hands, feet, teeth',
        'Diga "My ... hurts" para 3 partes',
        'Pratique tooth→teeth e foot→feet',
        'Descreva onde sente frio/calor: "My ... is cold"',
        'Liste 12 partes do corpo com tradução',
      ],
    },
    desafio: {
      cenario: 'Faça 5 frases nomeando partes do corpo: localize onde dói, fale de pares (mãos, pés) e use um plural irregular.',
      requisitos: [
        'Nomeei pelo menos 6 partes do corpo',
        'Usei "My ... hurts" corretamente',
        'Usei um plural regular (hands, eyes)',
        'Usei um plural irregular (teeth, feet)',
        'Pratiquei apontando o próprio corpo',
      ],
      dica: 'Atenção aos plurais irregulares: é "teeth" (não "tooths") e "feet" (não "foots"). E "stomach" cobre a barriga em geral — útil pra dor de barriga.',
    },
    validacao: [
      'Nomeio partes da cabeça e rosto',
      'Nomeio tronco e membros',
      'Sei os plurais regulares',
      'Sei teeth e feet',
      'Localizo dor com "My ... hurts"',
    ],
  },

  'en-a2-saude-2': {
    trilhaId: 'en-a2-saude', numero: 2, titulo: 'Sintomas e doenças',
    tempoTotal: 11, xp: 80, vertente: 'ingles',
    aula: {
      gancho: '"Estou com dor de cabeça", "estou resfriado", "sinto-me mal". Descrever sintomas é o que te faz ser atendido e entendido — e há fórmulas prontas pra cada tipo de queixa.',
      conceito: {
        titulo: 'Como descrever o que você sente',
        texto: 'Três fórmulas resolvem a maioria das queixas. (1) HAVE + doença/dor: "I have a headache" (dor de cabeça), "a stomachache" (dor de barriga), "a toothache" (dor de dente), "a cold" (resfriado), "a fever" (febre), "a cough" (tosse), "a sore throat" (dor de garganta). (2) MY ... HURTS / aches: "My back hurts", "My legs ache" (doem). (3) FEEL + adjetivo: "I feel sick" (enjoado/mal), "I feel tired" (cansado), "I feel dizzy" (tonto). Para perguntar como alguém está: "What\'s wrong?" / "What\'s the matter?" (o que houve?), "How do you feel?" (como se sente?). Note os "-ache" colados: headACHE, toothACHE, stomachACHE, backACHE.',
      },
      estrutura: {
        titulo: 'Três jeitos de relatar sintomas',
        partes: [
          { simbolo: 'have a...', desc: 'I have a headache / a cold / a fever / a cough.' },
          { simbolo: '...hurts', desc: 'My back hurts. My legs ache.' },
          { simbolo: 'feel...', desc: 'I feel sick / tired / dizzy.' },
          { simbolo: 'perguntar', desc: 'What\'s wrong? How do you feel?' },
        ],
      },
      exemplo: {
        titulo: 'Relatando queixas',
        celulas: [
          { ref: 'EN', valor: 'I have a headache and a fever. — Dor de cabeça e febre.' },
          { ref: 'EN', valor: 'My throat hurts. — Minha garganta dói.' },
          { ref: 'EN', valor: 'I feel sick today. — Estou me sentindo mal hoje.' },
          { ref: 'EN', valor: 'What\'s wrong? — O que houve / o que você tem?' },
        ],
        formula: 'have a + dor • My ... hurts • I feel + adjetivo',
        resultado: 'Você descreve sintomas e doenças comuns.',
        comentario: 'Cuidado com "sick": em inglês americano significa "doente/enjoado" (I feel sick = me sinto mal); em britânico, "be sick" pode significar "vomitar". E memorize os "-ache" como blocos: headache, toothache, stomachache, backache, earache. Para qualquer outra dor, use "My ... hurts". Três fórmulas e você cobre quase tudo.',
      },
      vocabulario: [
        { palavra: 'headache / fever / cough', def: 'dor de cabeça / febre / tosse.' },
        { palavra: 'a cold / a sore throat', def: 'um resfriado / dor de garganta.' },
        { palavra: 'I feel sick / dizzy', def: 'sinto-me mal/enjoado / tonto.' },
      ],
      chave: [
        'have a + headache/cold/fever/cough',
        'My ... hurts (ou aches)',
        'I feel + sick/tired/dizzy',
      ],
      porque: 'Descrever sintomas é o que garante atendimento numa farmácia ou consultório. Sem isso, você não consegue ser ajudado. São fórmulas simples que podem ser muito importantes numa emergência.',
    },
    pratica: {
      instrucao: 'Pratique relatar sintomas das três formas.',
      passos: [
        'Diga 3 queixas com "I have a ..."',
        'Diga 2 dores com "My ... hurts"',
        'Diga como se sente: "I feel ..."',
        'Pergunte a alguém: "What\'s wrong?"',
        'Combine sintomas: "I have a cold and a cough."',
        'Memorize os -ache (headache, toothache...)',
        'Monte 5 frases relatando sintomas',
      ],
    },
    desafio: {
      cenario: 'Descreva como você se sente em 5 frases, usando as três fórmulas: have a + dor, My ... hurts e I feel + adjetivo.',
      requisitos: [
        'Usei "have a" com pelo menos uma dor/doença',
        'Usei "My ... hurts/aches"',
        'Usei "I feel" + adjetivo (sick/tired/dizzy)',
        'Inclui um "-ache" (headache, toothache...)',
        'Pratiquei a pergunta "What\'s wrong?"',
      ],
      dica: 'Não diga "I have headache" — falta o artigo: é "I have A headache". E os "-ache" são uma palavra só (headache), enquanto "sore throat" são duas. Decore-os como blocos prontos.',
    },
    validacao: [
      'Uso "have a" para doenças/dores',
      'Uso "My ... hurts"',
      'Uso "I feel" + adjetivo',
      'Sei os principais -ache',
      'Pergunto como alguém está',
    ],
  },

  'en-a2-saude-3': {
    trilhaId: 'en-a2-saude', numero: 3, titulo: 'No médico e na farmácia',
    tempoTotal: 12, xp: 90, vertente: 'ingles',
    aula: {
      gancho: 'Você chega ao consultório ou à farmácia sentindo-se mal. O que dizer? Há um roteiro previsível de perguntas e respostas que, uma vez conhecido, faz você ser atendido com tranquilidade.',
      conceito: {
        titulo: 'O diálogo de uma consulta',
        texto: 'A consulta segue um roteiro. O MÉDICO/FARMACÊUTICO pergunta: "What\'s the matter?" / "What seems to be the problem?" (qual o problema?), "How long have you had it?" (há quanto tempo?), "Where does it hurt?" (onde dói?). VOCÊ responde com os sintomas (trilha anterior): "I have a sore throat and a fever". O profissional orienta: "You should rest" (descanse), "Take this medicine twice a day" (tome este remédio 2x ao dia), "Here\'s a prescription" (aqui está a receita). Na FARMÁCIA: "Do you have anything for a headache?" (tem algo para dor de cabeça?), "Take one pill after meals" (um comprimido após as refeições). Vocabulário-chave: doctor, nurse (enfermeiro), pharmacy/chemist (farmácia), medicine/pills (remédio/comprimidos), prescription (receita), appointment (consulta marcada).',
      },
      estrutura: {
        titulo: 'O vai-e-vem da consulta',
        partes: [
          { simbolo: 'pergunta', desc: 'What\'s the matter? Where does it hurt?' },
          { simbolo: 'sintoma', desc: 'I have a... / My ... hurts (você responde).' },
          { simbolo: 'orientação', desc: 'You should rest. Take this twice a day.' },
          { simbolo: 'farmácia', desc: 'Do you have anything for...? Take one pill...' },
        ],
      },
      exemplo: {
        titulo: 'Na consulta',
        celulas: [
          { ref: 'Médico', valor: 'What\'s the matter? — Qual é o problema?' },
          { ref: 'Você', valor: 'I have a sore throat and a cough. — Garganta e tosse.' },
          { ref: 'Médico', valor: 'Take this medicine twice a day. — Tome 2x ao dia.' },
          { ref: 'Farmácia', valor: 'Do you have anything for a cold? — Algo p/ resfriado?' },
        ],
        formula: 'pergunta do médico → seus sintomas → orientação/receita',
        resultado: 'Você conduz uma consulta básica em inglês.',
        comentario: 'Tenha respostas prontas para as perguntas do médico — elas são sempre parecidas. Para a farmácia, a frase de ouro é "Do you have anything for + sintoma?" (Do you have anything for a headache?). E preste atenção às instruções de dosagem: "twice a day" (2x ao dia), "after meals" (após refeições), "every 8 hours" — entender isso é questão de segurança.',
      },
      vocabulario: [
        { palavra: 'What\'s the matter?', def: 'Qual o problema? — abertura da consulta.' },
        { palavra: 'medicine / prescription', def: 'remédio / receita médica.' },
        { palavra: 'Do you have anything for...?', def: 'Tem algo para...? — pedido na farmácia.' },
      ],
      chave: [
        'Saiba responder "What\'s the matter? / Where does it hurt?"',
        'Farmácia: "Do you have anything for + sintoma?"',
        'Entenda a dosagem: twice a day, after meals',
      ],
      porque: 'Ser atendido quando se está mal — especialmente numa viagem — pode ser urgente. Conhecer o roteiro da consulta e da farmácia dá segurança num momento de vulnerabilidade.',
    },
    pratica: {
      instrucao: 'Ensaie a consulta dos dois lados.',
      passos: [
        'Responda a "What\'s the matter?" com sintomas',
        'Responda a "Where does it hurt?"',
        'Diga há quanto tempo: "For two days."',
        'Na farmácia: "Do you have anything for ...?"',
        'Entenda a dosagem: "twice a day, after meals"',
        'Use o vocabulário: doctor, pharmacy, prescription',
        'Encene a consulta inteira em voz alta',
      ],
    },
    desafio: {
      cenario: 'Encene um diálogo de consulta de 8 falas: o médico pergunta, você descreve sintomas, e ele orienta com uma receita/dosagem.',
      requisitos: [
        'Respondi às perguntas do médico',
        'Descrevi sintomas (have a.../ hurts)',
        'Usei vocabulário de saúde (medicine, prescription)',
        'Entendi/usei uma dosagem (twice a day...)',
        'Inclui uma fala de farmácia ("anything for...?")',
      ],
      dica: 'Na farmácia, a estrutura "Do you have anything for + problema?" resolve quase tudo. E sempre confirme a dosagem repetindo: "So, one pill twice a day?" — em saúde, entender direito é essencial.',
    },
    validacao: [
      'Respondo às perguntas do médico',
      'Descrevo sintomas com clareza',
      'Uso vocabulário de saúde',
      'Entendo instruções de dosagem',
      'Peço remédio na farmácia',
    ],
  },

  'en-a2-saude-4': {
    trilhaId: 'en-a2-saude', numero: 4, titulo: 'Should: dar conselhos',
    tempoTotal: 11, xp: 80, vertente: 'ingles',
    aula: {
      gancho: '"Você deveria descansar", "não deveria comer tanto açúcar", "deveríamos beber mais água". Dar conselhos — sobre saúde e qualquer coisa — usa uma palavra simples e muito útil: should.',
      conceito: {
        titulo: 'Should / shouldn\'t para sugerir',
        texto: 'Should significa "deveria" — serve para conselhos, sugestões e opiniões sobre o que é bom fazer. Estrutura igual ao can (não muda com a pessoa): sujeito + should + verbo no infinitivo sem to. "You should rest" (você deveria descansar), "She should see a doctor" (ela deveria ir ao médico). NEGATIVO: shouldn\'t (should not) — "You shouldn\'t smoke" (não deveria fumar). PERGUNTA (pedir conselho): "Should I take this medicine?" (devo tomar?), "What should I do?" (o que eu faço?). Como can, o verbo depois fica nu: "should EAT", nunca "should to eat" nem "should eats". Should é mais suave que must (obrigação) — é um conselho amigável, não uma ordem.',
      },
      estrutura: {
        titulo: 'Should na prática',
        partes: [
          { simbolo: '+ should', desc: 'You should rest. (mesma forma p/ todos)' },
          { simbolo: '– shouldn\'t', desc: 'You shouldn\'t eat so much sugar.' },
          { simbolo: '? Should', desc: 'Should I see a doctor? What should I do?' },
          { simbolo: 'verbo nu', desc: 'infinitivo sem to: should REST (não to rest).' },
        ],
      },
      exemplo: {
        titulo: 'Conselhos de saúde',
        celulas: [
          { ref: 'EN', valor: 'You should drink more water. — Devia beber mais água.' },
          { ref: 'EN', valor: 'You shouldn\'t work so hard. — Não devia trabalhar tanto.' },
          { ref: 'EN', valor: 'Should I see a doctor? — Devo ir ao médico?' },
          { ref: 'EN', valor: 'You should rest and sleep well. — Descanse e durma bem.' },
        ],
        formula: 'sujeito + should/shouldn\'t + verbo (infinitivo sem to)',
        resultado: 'Você dá e pede conselhos em inglês.',
        comentario: 'Should é o "modal" do conselho: amigável e nada agressivo. Lembre que, como o can, ele é igual pra todas as pessoas e leva o verbo no infinitivo puro. Para pedir conselho, "What should I do?" é ouro. E note o tom: "You should..." sugere; "You must..." obriga. Para saúde e dicas, should é quase sempre a escolha certa e gentil.',
      },
      vocabulario: [
        { palavra: 'should', def: 'deveria — conselho/sugestão (You should rest).' },
        { palavra: 'shouldn\'t', def: 'não deveria — conselho negativo.' },
        { palavra: 'What should I do?', def: 'O que eu deveria fazer? — pedir conselho.' },
      ],
      chave: [
        'should/shouldn\'t = conselho, igual p/ todos',
        'Verbo depois fica no infinitivo puro',
        'Pedir conselho: "What should I do?"',
      ],
      porque: 'Aconselhar e pedir conselho aparece em conversas o tempo todo, sobre saúde, trabalho, decisões. Should é simples, frequente e soa gentil — uma das estruturas mais práticas do A2.',
    },
    pratica: {
      instrucao: 'Dê conselhos com should e shouldn\'t.',
      passos: [
        'Aconselhe alguém doente: "You should ..."',
        'Diga o que não fazer: "You shouldn\'t ..."',
        'Peça conselho: "What should I do?"',
        'Pergunte direto: "Should I ...?"',
        'Confira: o verbo está no infinitivo sem to?',
        'Dê 3 conselhos de saúde diferentes',
        'Monte 5 frases (+, –, ?) com should',
      ],
    },
    desafio: {
      cenario: 'Dê 5 conselhos a alguém que está doente ou cansado, usando should e shouldn\'t, e inclua um pedido de conselho.',
      requisitos: [
        'Usei "should" para um conselho positivo',
        'Usei "shouldn\'t" para um conselho negativo',
        'Fiz uma pergunta ("Should I...?" ou "What should I do?")',
        'Mantive o verbo no infinitivo (sem to/-s)',
        'Os conselhos fazem sentido para a situação',
      ],
      dica: 'Como o can, should NÃO leva "to" nem "-s": é "She should rest", não "She should to rest" nem "She shoulds rest". O verbo depois sempre fica no infinitivo puro.',
    },
    validacao: [
      'Uso should para conselhos',
      'Uso shouldn\'t no negativo',
      'Peço conselho com should',
      'Mantenho o verbo no infinitivo puro',
      'Dei conselhos coerentes',
    ],
  },

  'en-a2-saude-5': {
    trilhaId: 'en-a2-saude', numero: 5, titulo: 'Must e have to: obrigação',
    tempoTotal: 12, xp: 90, vertente: 'ingles',
    aula: {
      gancho: '"Você TEM que tomar o remédio", "eu PRECISO ir ao médico", "você NÃO PODE comer isso". Conselho é uma coisa; obrigação é outra mais forte — e o inglês tem must e have to pra isso.',
      conceito: {
        titulo: 'Must / have to para necessidade e obrigação',
        texto: 'Quando algo é necessário ou obrigatório (mais forte que "should"), use must ou have to. MUST + verbo (sem to): "You must take this medicine" — obrigação forte, muitas vezes do próprio falante ou de uma regra. HAVE TO / HAS TO + verbo: "I have to see a doctor", "She has to rest" — necessidade, often de fora (circunstância, regra). Os dois significam "ter que/precisar" e, no afirmativo, são quase intercambiáveis. ATENÇÃO ao negativo, que muda o sentido: "mustn\'t" = proibição ("You mustn\'t smoke" = é proibido fumar); "don\'t have to" = não é necessário ("You don\'t have to come" = não precisa vir, mas pode). Esse contraste é a pegadinha mais importante: mustn\'t (proibido) ≠ don\'t have to (opcional).',
      },
      estrutura: {
        titulo: 'Must x have to',
        partes: [
          { simbolo: 'must', desc: 'Obrigação forte: You must rest. (+ verbo nu)' },
          { simbolo: 'have to', desc: 'Necessidade: I have to / She has to see a doctor.' },
          { simbolo: 'mustn\'t', desc: 'PROIBIÇÃO: You mustn\'t smoke here.' },
          { simbolo: 'don\'t have to', desc: 'NÃO é necessário: You don\'t have to wait.' },
        ],
      },
      exemplo: {
        titulo: 'Obrigação x proibição x opcional',
        celulas: [
          { ref: 'EN', valor: 'You must take the pills. — Você tem que tomar os comprimidos.' },
          { ref: 'EN', valor: 'I have to see a doctor. — Preciso ir ao médico.' },
          { ref: 'EN', valor: 'You mustn\'t smoke. — Você não pode (é proibido) fumar.' },
          { ref: 'EN', valor: 'You don\'t have to pay now. — Não precisa pagar agora.' },
        ],
        formula: 'must/have to = obrigação • mustn\'t = proibido • don\'t have to = opcional',
        resultado: 'Você expressa obrigação, proibição e ausência de necessidade.',
        comentario: 'Grave o contraste do negativo, que muita gente erra: "mustn\'t" PROÍBE (You mustn\'t touch = não pode tocar) e "don\'t have to" só diz que NÃO É NECESSÁRIO (You don\'t have to touch = não precisa, mas pode). No afirmativo, must e have to são parecidos; a diferença prática aparece mesmo no negativo. Para o passado e futuro, use "have to" (had to / will have to), pois must não muda de tempo.',
      },
      vocabulario: [
        { palavra: 'must / have to', def: 'ter que / precisar — obrigação, necessidade.' },
        { palavra: 'mustn\'t', def: 'não pode — PROIBIÇÃO (it\'s not allowed).' },
        { palavra: 'don\'t have to', def: 'não precisa — ausência de obrigação (opcional).' },
      ],
      chave: [
        'must/have to = obrigação (afirmativo, parecidos)',
        'mustn\'t = PROIBIDO • don\'t have to = OPCIONAL',
        'Para passado/futuro use have to (had to, will have to)',
      ],
      porque: 'Distinguir obrigação, proibição e o que é opcional é essencial — em saúde, regras, trabalho. A pegadinha mustn\'t x don\'t have to muda completamente o sentido; dominá-la evita mal-entendidos sérios.',
    },
    pratica: {
      instrucao: 'Pratique obrigação, proibição e o opcional.',
      passos: [
        'Diga uma obrigação: "I have to ..."',
        'Use must para algo importante: "You must ..."',
        'Diga uma proibição: "You mustn\'t ..."',
        'Diga algo opcional: "You don\'t have to ..."',
        'Use has to na 3ª pessoa: "She has to ..."',
        'Contraste mustn\'t (proibido) x don\'t have to (opcional)',
        'Monte 5 frases variando os quatro usos',
      ],
    },
    desafio: {
      cenario: 'Escreva 6 frases sobre regras de saúde/cuidados: obrigações (must/have to), uma proibição (mustn\'t) e algo não obrigatório (don\'t have to).',
      requisitos: [
        'Usei "have to" / "has to" para necessidade',
        'Usei "must" para obrigação forte',
        'Usei "mustn\'t" para uma proibição',
        'Usei "don\'t have to" para algo opcional',
        'Diferenciei claramente proibido de opcional',
      ],
      dica: 'A pegadinha que vale ouro: "mustn\'t" NÃO é "não precisa" — é "é proibido". "Não precisa" é "don\'t have to". Confundir os dois pode passar uma mensagem totalmente errada.',
    },
    validacao: [
      'Uso must e have to para obrigação',
      'Uso has to na 3ª pessoa',
      'Uso mustn\'t para proibição',
      'Uso don\'t have to para o opcional',
      'Distingo proibido de não obrigatório',
    ],
  },

  'en-a2-saude-6': {
    trilhaId: 'en-a2-saude', numero: 6, titulo: 'Projeto: uma consulta médica',
    tempoTotal: 20, xp: 130, vertente: 'ingles',
    aula: {
      gancho: 'Hora de juntar tudo: você vai encenar uma consulta médica completa — descrever onde dói, contar os sintomas, receber conselhos e instruções, e entender o que pode e o que não pode fazer. É a sua primeira "cena" de saúde inteira em inglês.',
      conceito: {
        titulo: 'Uma consulta do início ao fim',
        texto: 'Este projeto integra a trilha num diálogo realista entre paciente e médico (e talvez farmacêutico). Use: 1) PARTES DO CORPO para localizar a dor ("My back and my legs hurt"); 2) SINTOMAS com as três fórmulas ("I have a fever, my throat hurts, I feel dizzy"); 3) O ROTEIRO DE CONSULTA (perguntas do médico e suas respostas, vocabulário de medicine/prescription/dosagem); 4) SHOULD para os conselhos do médico ("You should rest", "You shouldn\'t eat heavy food"); 5) MUST/HAVE TO/MUSTN\'T para instruções obrigatórias ("You must take this twice a day", "You mustn\'t skip the medicine", "You don\'t have to come back"). O objetivo é um diálogo de 10 a 12 falas, do "What\'s the matter?" até a orientação final com conselhos e obrigações. Ensaie os dois papéis e grave-se. Ao final, você terá conduzido uma consulta inteira em inglês — uma habilidade que pode ser crucial numa viagem.',
      },
      estrutura: {
        titulo: 'O que a consulta deve ter',
        partes: [
          { simbolo: 'corpo+sintomas', desc: 'Localizar a dor e relatar sintomas.' },
          { simbolo: 'roteiro', desc: 'Perguntas do médico e vocabulário de consulta.' },
          { simbolo: 'should', desc: 'Conselhos: "You should rest."' },
          { simbolo: 'must/have to', desc: 'Instruções e proibições obrigatórias.' },
        ],
      },
      exemplo: {
        titulo: 'Uma consulta modelo (trecho)',
        celulas: [
          { ref: 'Médico', valor: 'What\'s the matter? — Qual é o problema?' },
          { ref: 'Paciente', valor: 'I have a fever and my throat hurts. — Febre e garganta.' },
          { ref: 'Médico', valor: 'You should rest. You must take this twice a day.' },
          { ref: 'Médico', valor: 'You mustn\'t skip a dose. — Não pode pular uma dose.' },
        ],
        formula: 'sintomas + roteiro + should (conselho) + must (obrigação) = consulta',
        resultado: 'Você conduz uma consulta médica inteira.',
        comentario: 'O segredo é o FLUXO da consulta: queixa → perguntas → diagnóstico → orientação. Misture os recursos naturalmente: localize a dor com partes do corpo, relate sintomas, receba conselhos (should) e instruções firmes (must/mustn\'t). Não busque perfeição; busque um diálogo que funcione e que você entenderia numa situação real. Grave os dois papéis — é a melhor prova de que domina o tema saúde.',
      },
      vocabulario: [
        { palavra: 'consultation / appointment', def: 'consulta / consulta marcada.' },
        { palavra: 'patient / doctor', def: 'paciente / médico — os dois papéis.' },
        { palavra: 'diagnosis / treatment', def: 'diagnóstico / tratamento.' },
      ],
      chave: [
        'Diálogo de 10–12 falas, da queixa à orientação',
        'Integre corpo, sintomas, roteiro, should e must',
        'Ensaie os dois papéis e grave-se',
      ],
      porque: 'Conduzir uma consulta integra todos os recursos da trilha e treina uma situação que pode ser urgente — explicar o que se sente e entender as orientações. É utilidade real, especialmente longe de casa.',
    },
    pratica: {
      instrucao: 'Monte e encene uma consulta médica completa.',
      passos: [
        'Defina os papéis: paciente e médico',
        'Abra com "What\'s the matter?" e a queixa',
        'Localize a dor com partes do corpo',
        'Relate sintomas com as três fórmulas',
        'Dê conselhos do médico com should/shouldn\'t',
        'Dê instruções com must / mustn\'t / have to',
        'Grave os dois papéis e ouça pra ajustar',
      ],
    },
    desafio: {
      cenario: 'Crie e encene uma consulta de 10 a 12 falas integrando: partes do corpo, sintomas, o roteiro de consulta, should (conselhos) e must/have to/mustn\'t (instruções).',
      requisitos: [
        'Localizei a dor com partes do corpo',
        'Relatei sintomas (have a.../ hurts/ feel)',
        'Segui o roteiro de consulta com vocabulário certo',
        'Dei conselhos com should/shouldn\'t',
        'Dei instruções com must/mustn\'t e encenei em voz alta',
      ],
      dica: 'Cuide do tom dos modais no diálogo: should sugere (conselho amigável), must obriga (instrução firme) e mustn\'t proíbe. Um bom médico usa os três — e você mostra domínio ao escolher o certo em cada fala.',
    },
    validacao: [
      'Usei partes do corpo na consulta',
      'Relatei sintomas corretamente',
      'Segui o roteiro de consulta',
      'Usei should para conselhos',
      'Usei must/mustn\'t e encenei em voz alta',
    ],
  },
};
