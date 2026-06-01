// ============================================================================
// CONTEÚDO — Inglês B1: Viajar com Confiança (en-b1-viagem)
// Aeroporto/check-in, hotel/reservas, pedir e dar direções, resolver problemas
// na viagem, falar de experiências de viagem (present perfect), e projeto.
// ============================================================================

export const EN_B1_VIAGEM = {
  'en-b1-viagem-1': {
    trilhaId: 'en-b1-viagem', numero: 1, titulo: 'No aeroporto e check-in',
    tempoTotal: 12, xp: 90, vertente: 'ingles',
    aula: {
      gancho: 'Aeroporto é onde o inglês deixa de ser teoria: você ouve anúncios, lê placas e precisa responder rápido no balcão. Dominar esse vocabulário tira o medo de viajar sozinho.',
      conceito: {
        titulo: 'O inglês do aeroporto',
        texto: 'O fluxo de um aeroporto tem etapas previsíveis, cada uma com seu vocabulário. CHECK-IN: "I\'d like to check in for my flight", "Here\'s my passport and booking". Perguntas que você ouve: "Window or aisle seat?" (janela ou corredor?), "Did you pack your bags yourself?", "Any liquids in your hand luggage?". BAGAGEM: check-in luggage (bagagem despachada) x hand/carry-on luggage (de mão); "How many bags are you checking?". SEGURANÇA E EMBARQUE: boarding pass (cartão de embarque), gate (portão), boarding (embarque), departure (partida), arrival (chegada), delay (atraso), gate change. Frases-chave para você dizer: "What gate is it?", "Is the flight on time?", "Where\'s the boarding gate?". Saber reconhecer essas palavras em anúncios ("Flight 207 is now boarding at gate 12") é o que evita perder o voo.',
      },
      estrutura: {
        titulo: 'Etapas e palavras-chave',
        partes: [
          { simbolo: 'check-in', desc: 'I\'d like to check in. Passport, booking.' },
          { simbolo: 'luggage', desc: 'check-in vs hand luggage; bag drop.' },
          { simbolo: 'boarding', desc: 'boarding pass, gate, boarding now.' },
          { simbolo: 'status', desc: 'on time, delayed, departure, arrival.' },
        ],
      },
      exemplo: {
        titulo: 'No balcão e no portão',
        celulas: [
          { ref: 'você', valor: 'I\'d like to check in for flight 207. — fazer check-in.' },
          { ref: 'agente', valor: 'Window or aisle? Any bags to check? — janela/corredor.' },
          { ref: 'você', valor: 'What gate does it board from? — de que portão embarca?' },
          { ref: 'aviso', valor: 'Flight 207 now boarding at gate 12. — embarcando.' },
        ],
        formula: 'check in → drop bags → security → gate → boarding',
        resultado: 'Você navega o aeroporto em inglês.',
        comentario: 'Não tente decorar tudo: foque nas palavras que aparecem em PLACAS e ANÚNCIOS (gate, boarding, delayed, departure) e em 4–5 frases que VOCÊ vai dizer ("I\'d like to check in", "What gate?"). Reconhecer o vocabulário ao ouvir importa mais que falar perfeito — é o que evita perder informação crítica num ambiente barulhento.',
      },
      vocabulario: [
        { palavra: 'check in / boarding pass', def: 'fazer check-in / cartão de embarque.' },
        { palavra: 'gate / boarding', def: 'portão / embarque.' },
        { palavra: 'departure / arrival / delay', def: 'partida / chegada / atraso.' },
      ],
      chave: [
        'Frases para dizer: "I\'d like to check in", "What gate?"',
        'Palavras para ouvir: gate, boarding, delayed, departure',
        'Bagagem: check-in luggage vs hand luggage',
      ],
      porque: 'O aeroporto é o primeiro teste real do seu inglês numa viagem. Reconhecer anúncios e responder no balcão dá autonomia e tira a ansiedade de viajar — base de toda esta trilha.',
    },
    pratica: {
      instrucao: 'Simule as etapas do aeroporto em inglês.',
      passos: [
        'Liste 12 palavras de aeroporto com tradução',
        'Monte sua fala de check-in (2–3 frases)',
        'Responda "Window or aisle?" e "Any bags?"',
        'Pergunte sobre o portão e o horário',
        'Reescreva um anúncio de embarque',
        'Diferencie check-in e hand luggage',
        'Encene o balcão inteiro em voz alta',
      ],
    },
    desafio: {
      cenario: 'Encene um diálogo completo de check-in: você no balcão, o agente fazendo perguntas, e você pedindo informação sobre portão e horário.',
      requisitos: [
        'Iniciei com "I\'d like to check in"',
        'Respondi sobre assento e bagagem',
        'Perguntei o portão e o horário do voo',
        'Usei pelo menos 8 palavras de aeroporto',
        'Encenei os dois lados em voz alta',
      ],
      dica: 'Concentre-se em ENTENDER as perguntas-padrão do agente (assento, bagagem, líquidos). Elas se repetem em todo aeroporto do mundo. Se você reconhece a pergunta, responder é fácil.',
    },
    validacao: [
      'Sei o vocabulário do aeroporto',
      'Faço meu check-in em inglês',
      'Respondo as perguntas do agente',
      'Pergunto portão e horário',
      'Entendo anúncios de embarque',
    ],
  },

  'en-b1-viagem-2': {
    trilhaId: 'en-b1-viagem', numero: 2, titulo: 'Hotel e reservas',
    tempoTotal: 13, xp: 100, vertente: 'ingles',
    aula: {
      gancho: 'Você chega ao hotel cansado da viagem. Fazer o check-in, perguntar sobre o café da manhã, o wi-fi e o horário de saída — tudo em inglês — define se sua estadia começa tranquila ou estressante.',
      conceito: {
        titulo: 'Reservar e se hospedar',
        texto: 'O inglês de hotel gira em torno de reservar, chegar, pedir e resolver. RESERVA: "I have a reservation under the name...", "I\'d like to book a double room for two nights". Tipos de quarto: single (solteiro), double (casal), twin (duas camas), suite. CHECK-IN/CHECK-OUT: "What time is check-out?", "Can I check in early?", "Here\'s your key/keycard". PEDIDOS comuns (com would/could para educação): "Could I have an extra towel?", "Is breakfast included?", "What\'s the wi-fi password?", "Could you call a taxi for me?". PROBLEMAS: "The air conditioning isn\'t working", "There\'s a problem with the shower", "The room is too noisy — could I change rooms?". Vocabulário de apoio: front desk/reception (recepção), check-out time, room service, booking/reservation, available (disponível). Tudo isso aparece em qualquer hotel e te deixa no controle da estadia.',
      },
      estrutura: {
        titulo: 'Funções no hotel',
        partes: [
          { simbolo: 'reservar', desc: 'I\'d like to book a double room for 2 nights.' },
          { simbolo: 'chegar', desc: 'I have a reservation under... / check in.' },
          { simbolo: 'pedir', desc: 'Could I have...? Is breakfast included?' },
          { simbolo: 'resolver', desc: 'The AC isn\'t working. Could I change rooms?' },
        ],
      },
      exemplo: {
        titulo: 'Na recepção',
        celulas: [
          { ref: 'reserva', valor: 'I have a reservation under Silva. — reserva em nome de.' },
          { ref: 'pedido', valor: 'Is breakfast included? What\'s the wi-fi password?' },
          { ref: 'check-out', valor: 'What time is check-out, please? — horário de saída.' },
          { ref: 'problema', valor: 'The shower isn\'t working. — o chuveiro não funciona.' },
        ],
        formula: 'reservar → chegar → pedir → resolver problemas',
        resultado: 'Você gerencia sua estadia em inglês.',
        comentario: 'Note que os pedidos usam "Could I...?" e "Is ... included?" — educação importa na recepção. Para problemas, a estrutura "There\'s a problem with..." ou "... isn\'t working" resolve quase tudo. Decore 3 frases de chegada, 3 de pedido e 2 de problema: cobre 90% das situações de hotel.',
      },
      vocabulario: [
        { palavra: 'reservation / book a room', def: 'reserva / reservar um quarto.' },
        { palavra: 'check-in / check-out', def: 'entrada / saída do hotel.' },
        { palavra: 'front desk / included', def: 'recepção / incluído (café, taxas).' },
      ],
      chave: [
        'Reservar: I\'d like to book a ... room',
        'Pedir com educação: Could I...? Is ... included?',
        'Resolver: ... isn\'t working / Could I change rooms?',
      ],
      porque: 'O hotel é sua base na viagem. Saber reservar, pedir e reclamar com educação garante uma estadia tranquila e treina pedidos formais (would/could) que servem em mil situações.',
    },
    pratica: {
      instrucao: 'Pratique as quatro funções do inglês de hotel.',
      passos: [
        'Faça uma reserva: tipo de quarto e noites',
        'Chegue: "I have a reservation under..."',
        'Faça 3 pedidos com Could/Is ... included',
        'Pergunte o horário de check-out',
        'Relate 2 problemas no quarto',
        'Peça pra trocar de quarto com educação',
        'Encene recepcionista e hóspede',
      ],
    },
    desafio: {
      cenario: 'Encene um check-in de hotel completo: chegada com reserva, perguntas sobre café/wi-fi/check-out e o relato de um problema no quarto pedindo solução.',
      requisitos: [
        'Cheguei informando minha reserva',
        'Fiz pedidos com Could/Is ... included',
        'Perguntei o horário de check-out',
        'Relatei um problema (... isn\'t working)',
        'Pedi solução com educação',
      ],
      dica: 'Use sempre "Could/Would" nos pedidos — soa educado e profissional. Para reclamar, não acuse ("you didn\'t..."); descreva o fato ("There\'s a problem with the AC"). Tom educado resolve mais rápido.',
    },
    validacao: [
      'Faço uma reserva em inglês',
      'Chego e faço check-in',
      'Peço serviços com educação',
      'Pergunto o check-out',
      'Relato e resolvo problemas',
    ],
  },

  'en-b1-viagem-3': {
    trilhaId: 'en-b1-viagem', numero: 3, titulo: 'Pedir e dar direções',
    tempoTotal: 13, xp: 100, vertente: 'ingles',
    aula: {
      gancho: 'Você está perdido numa cidade estrangeira. "Como chego à estação?" Saber perguntar — e ENTENDER a resposta — é o que transforma estar perdido em só uma pausa de cinco minutos.',
      conceito: {
        titulo: 'Direções: perguntar e entender',
        texto: 'Pedir direção tem duas metades: perguntar (fácil) e entender a resposta (o desafio). PERGUNTAR: "Excuse me, how do I get to the station?", "Where\'s the nearest pharmacy?", "Is it far from here?", "Can you show me on the map?". ENTENDER a resposta exige reconhecer verbos e preposições de movimento: go straight (siga reto), turn left/right (vire à esquerda/direita), take the first/second left, go past the bank (passe pelo banco), it\'s on your left/right, it\'s next to/opposite/between, cross the street (atravesse), it\'s about 200 meters/five minutes away. Marcos úteis: corner (esquina), traffic lights (semáforo), roundabout (rotatória), block (quarteirão). Dica de ouro: se não entendeu, peça pra repetir devagar ("Could you say that again, more slowly?") ou peça pra mostrar no mapa. Entender direção é treino de escuta de instruções — uma das habilidades mais práticas do inglês de viagem.',
      },
      estrutura: {
        titulo: 'Perguntar e seguir',
        partes: [
          { simbolo: 'perguntar', desc: 'How do I get to...? Where\'s the nearest...?' },
          { simbolo: 'movimento', desc: 'go straight, turn left/right, take the first left.' },
          { simbolo: 'posição', desc: 'on your left, next to, opposite, between.' },
          { simbolo: 'marcos', desc: 'corner, traffic lights, roundabout, block.' },
        ],
      },
      exemplo: {
        titulo: 'Achando o caminho',
        celulas: [
          { ref: 'pergunta', valor: 'How do I get to the station? — como chego à estação?' },
          { ref: 'resposta', valor: 'Go straight and turn left at the lights. — siga e vire.' },
          { ref: 'posição', valor: 'It\'s on your right, next to the bank. — à direita.' },
          { ref: 'pedir +', valor: 'Could you show me on the map? — mostrar no mapa.' },
        ],
        formula: 'perguntar → go/turn + posição + marco → confirmar',
        resultado: 'Você pede e segue direções em inglês.',
        comentario: 'A parte difícil não é perguntar — é ENTENDER. Treine reconhecer os verbos de movimento (go straight, turn left, take the first...) e as preposições de posição (on your left, next to, opposite). Sempre tenha o plano B: "Could you show me on the map?" elimina qualquer mal-entendido. Repetir a direção em voz alta ("So, straight and then left?") confirma que você captou.',
      },
      vocabulario: [
        { palavra: 'go straight / turn left', def: 'siga reto / vire à esquerda.' },
        { palavra: 'next to / opposite / between', def: 'ao lado / em frente / entre.' },
        { palavra: 'corner / traffic lights', def: 'esquina / semáforo.' },
      ],
      chave: [
        'Perguntar: How do I get to...? / Where\'s the nearest...?',
        'Entender: go straight, turn left, on your right, next to',
        'Plano B: Could you show me on the map?',
      ],
      porque: 'Direções treinam a escuta de instruções — uma das habilidades mais práticas e estressantes em viagem. Quem entende uma direção em inglês nunca fica realmente perdido.',
    },
    pratica: {
      instrucao: 'Pratique pedir e seguir direções.',
      passos: [
        'Pergunte o caminho de 3 formas diferentes',
        'Liste 8 verbos/preposições de direção',
        'Descreva o caminho da sua casa a um lugar',
        'Use 3 marcos (corner, lights, roundabout)',
        'Peça pra repetir devagar ou mostrar no mapa',
        'Confirme repetindo a direção recebida',
        'Encene perguntar e responder direção',
      ],
    },
    desafio: {
      cenario: 'Encene os dois lados: alguém perde-se e pergunta o caminho; você dá a direção até um destino usando verbos de movimento, posição e marcos.',
      requisitos: [
        'Perguntei o caminho de forma educada',
        'Dei a direção com go/turn + posição',
        'Usei pelo menos 2 marcos de referência',
        'Pedi/ofereci repetir ou mostrar no mapa',
        'Confirmei repetindo a direção',
      ],
      dica: 'Ao dar direção, vá por etapas curtas e na ordem ("First..., then..., and it\'s..."). Ao receber, repita pra confirmar. A escuta é o que você mais deve treinar — perguntar é a parte fácil.',
    },
    validacao: [
      'Pergunto o caminho de várias formas',
      'Entendo verbos de movimento',
      'Uso preposições de posição',
      'Uso marcos de referência',
      'Confirmo e peço repetição',
    ],
  },

  'en-b1-viagem-4': {
    trilhaId: 'en-b1-viagem', numero: 4, titulo: 'Resolver problemas na viagem',
    tempoTotal: 13, xp: 100, vertente: 'ingles',
    aula: {
      gancho: 'Voo cancelado, mala perdida, reserva que sumiu. Viajar dá errado às vezes — e é justamente aí que o inglês importa mais. Saber explicar o problema e pedir solução salva a viagem.',
      conceito: {
        titulo: 'Quando algo dá errado',
        texto: 'Problemas de viagem seguem um roteiro: explicar o que houve, dizer o que você precisa e pedir solução. EXPLICAR: "My flight was cancelled", "My luggage is missing", "I\'ve lost my passport", "There\'s a problem with my booking", "I missed my connection". PEDIR SOLUÇÃO (educado mas firme): "What can I do?", "Could you help me, please?", "Is there another flight?", "Can I get a refund?", "Who should I talk to?". Vocabulário de crise: cancelled (cancelado), delayed (atrasado), missing/lost (perdido), refund (reembolso), to claim (reclamar/reivindicar), insurance (seguro), connection (conexão), to miss (perder o voo/conexão). Estrutura útil: "I need to..." (preciso) + "Could you...?" (pode...?). Manter a CALMA e ser educado faz a pessoa do outro lado querer ajudar. Quem resolve um problema em inglês sob pressão prova fluência funcional de verdade — é o teste final desta trilha.',
      },
      estrutura: {
        titulo: 'O roteiro do problema',
        partes: [
          { simbolo: 'explicar', desc: 'My flight was cancelled. My bag is missing.' },
          { simbolo: 'preciso', desc: 'I need to rebook / get a refund.' },
          { simbolo: 'pedir', desc: 'Could you help me? Is there another flight?' },
          { simbolo: 'vocab crise', desc: 'cancelled, delayed, refund, claim, insurance.' },
        ],
      },
      exemplo: {
        titulo: 'Sob pressão',
        celulas: [
          { ref: 'explicar', valor: 'My flight was cancelled. — meu voo foi cancelado.' },
          { ref: 'preciso', valor: 'I need to get on another flight. — preciso de outro voo.' },
          { ref: 'pedir', valor: 'Could you help me, please? — pode me ajudar?' },
          { ref: 'mala', valor: 'My luggage is missing — here\'s my tag. — mala sumiu.' },
        ],
        formula: 'explicar (was/is) → I need to... → Could you...?',
        resultado: 'Você resolve imprevistos em inglês.',
        comentario: 'Note os tempos: problemas que JÁ aconteceram usam passado ("was cancelled", "I\'ve lost") e situações atuais usam presente ("is missing"). A fórmula "I need to... + Could you...?" cobre quase todo pedido de solução. O segredo psicológico: tom CALMO e educado — sob pressão, é o que faz o atendente colaborar em vez de se fechar.',
      },
      vocabulario: [
        { palavra: 'cancelled / delayed', def: 'cancelado / atrasado.' },
        { palavra: 'missing / refund', def: 'perdido (bagagem) / reembolso.' },
        { palavra: 'to claim / insurance', def: 'reclamar/reivindicar / seguro.' },
      ],
      chave: [
        'Explicar: My flight was cancelled / My bag is missing',
        'Pedir: I need to... + Could you help me?',
        'Mantenha a calma e seja educado e firme',
      ],
      porque: 'Imprevistos são quando o inglês mais conta. Saber explicar e pedir solução sob pressão é fluência funcional real — e a tranquilidade de saber que você dá conta muda toda a experiência de viajar.',
    },
    pratica: {
      instrucao: 'Pratique resolver problemas comuns de viagem.',
      passos: [
        'Explique 4 problemas (voo, mala, reserva, conexão)',
        'Use o passado: "was cancelled / I\'ve lost"',
        'Diga o que precisa: "I need to..."',
        'Peça solução: "Could you help me?"',
        'Liste 8 palavras de crise de viagem',
        'Encene o tom calmo e educado',
        'Simule um balcão resolvendo o caso',
      ],
    },
    desafio: {
      cenario: 'Encene a resolução de um problema de viagem (voo cancelado OU mala perdida): explique o que houve, diga o que precisa e peça solução, mantendo o tom educado e firme.',
      requisitos: [
        'Expliquei o problema com o tempo certo',
        'Disse o que preciso (I need to...)',
        'Pedi solução com educação (Could you...?)',
        'Usei vocabulário de crise (refund, missing...)',
        'Mantive tom calmo e firme',
      ],
      dica: 'Sob estresse, a tentação é falar rápido e bravo. Faça o oposto: frases curtas, tom calmo, "Could you help me?". Pessoas ajudam mais quem é educado — e você pensa melhor em inglês quando está calmo.',
    },
    validacao: [
      'Explico problemas com o tempo certo',
      'Digo o que preciso',
      'Peço solução com educação',
      'Sei o vocabulário de crise',
      'Mantenho a calma sob pressão',
    ],
  },

  'en-b1-viagem-5': {
    trilhaId: 'en-b1-viagem', numero: 5, titulo: 'Experiências de viagem (present perfect)',
    tempoTotal: 13, xp: 100, vertente: 'ingles',
    aula: {
      gancho: '"Você já foi à Europa?" "Eu nunca viajei de navio." Contar suas experiências de viagem — sem dizer exatamente quando — usa um tempo que confunde brasileiros, mas é o coração da conversa B1: o present perfect.',
      conceito: {
        titulo: 'Present perfect: experiências de vida',
        texto: 'Para falar de EXPERIÊNCIAS (já fez ou nunca fez algo, sem importar quando), o inglês usa o present perfect: have/has + particípio. "I have visited Paris" (já visitei), "She has never flown" (ela nunca voou), "Have you ever been to Japan?" (você já foi?). Palavras-chave: ever (já, em perguntas), never (nunca), already (já), yet (ainda — em negativas/perguntas), been (estado/visitou) x gone (foi e está lá). A grande diferença pro passado simples: present perfect NÃO diz QUANDO ("I have been to Italy" — em algum momento da vida); passado simples diz o momento ("I went to Italy in 2019"). Regra prática: tem data/tempo específico? → passado (went, visited). É experiência geral, sem data? → present perfect (have been, have visited). Particípios irregulares importam: be→been, go→gone, see→seen, do→done, eat→eaten. É a estrutura que permite contar tudo o que você já viveu — viajando ou não.',
      },
      estrutura: {
        titulo: 'Present perfect na prática',
        partes: [
          { simbolo: 'have + part.', desc: 'I have visited / She has seen.' },
          { simbolo: 'ever / never', desc: 'Have you ever...? I have never...' },
          { simbolo: 'been vs gone', desc: 'I\'ve been (e voltei) / She\'s gone (está lá).' },
          { simbolo: 'sem quando', desc: 'experiência geral, sem data específica.' },
        ],
      },
      exemplo: {
        titulo: 'Contando experiências',
        celulas: [
          { ref: 'EN', valor: 'I have visited five countries. — já visitei cinco países.' },
          { ref: 'EN', valor: 'Have you ever been to Japan? — você já foi ao Japão?' },
          { ref: 'EN', valor: 'She has never flown before. — ela nunca voou.' },
          { ref: 'contraste', valor: 'I went there in 2019. — (data → passado simples).' },
        ],
        formula: 'have/has + particípio (experiência, sem quando)',
        resultado: 'Você conta o que já viveu em inglês.',
        comentario: 'A pergunta que decide tudo: tem DATA ou momento específico? Se sim → passado simples (went, visited in 2019). Se não, é experiência geral → present perfect (have been, have visited). "Have you ever...?" abre quase toda conversa sobre experiências. Cuidado com "been" (foi e voltou) x "gone" (foi e ainda está lá): "He\'s been to Paris" (já conhece) ≠ "He\'s gone to Paris" (está em Paris agora).',
      },
      vocabulario: [
        { palavra: 'present perfect', def: 'have/has + particípio — experiência sem quando.' },
        { palavra: 'ever / never', def: 'já (pergunta) / nunca.' },
        { palavra: 'been / gone', def: 'foi e voltou / foi e está lá.' },
      ],
      chave: [
        'have/has + particípio para experiências',
        'ever em perguntas, never em negativas',
        'Sem data = present perfect; com data = passado simples',
      ],
      porque: 'Present perfect é o tempo das experiências e um marco do B1. Contar o que você já fez (ou nunca fez) é parte central de qualquer conversa — e viagem é o tema perfeito pra dominá-lo.',
    },
    pratica: {
      instrucao: 'Conte experiências de viagem com present perfect.',
      passos: [
        'Diga 3 lugares que já visitou: "I have been to..."',
        'Diga 2 coisas que nunca fez: "I have never..."',
        'Pergunte: "Have you ever...?" (3 perguntas)',
        'Contraste com passado: "I went there in..."',
        'Use been x gone corretamente',
        'Liste 6 particípios irregulares',
        'Conte 5 experiências suas em voz alta',
      ],
    },
    desafio: {
      cenario: 'Conte suas experiências de viagem (ou de vida) em 8 frases: o que já fez, o que nunca fez, e faça perguntas "Have you ever...?", contrastando com uma frase no passado simples com data.',
      requisitos: [
        'Usei have/has + particípio corretamente',
        'Usei ever numa pergunta e never numa negativa',
        'Distingui been de gone',
        'Contrastei com passado simples (com data)',
        'Usei pelo menos 4 particípios diferentes',
      ],
      dica: 'O teste decisivo: se a frase tem "in 2019", "last year", "yesterday" → passado simples. Se é "já", "nunca", "alguma vez" sem data → present perfect. Não misture data específica com present perfect.',
    },
    validacao: [
      'Formo o present perfect (have + particípio)',
      'Uso ever e never',
      'Distingo been de gone',
      'Sei quando usar passado simples',
      'Conto experiências reais',
    ],
  },

  'en-b1-viagem-6': {
    trilhaId: 'en-b1-viagem', numero: 6, titulo: 'Projeto: planeje e conte uma viagem',
    tempoTotal: 22, xp: 140, vertente: 'ingles',
    aula: {
      gancho: 'Hora de juntar a trilha inteira numa narrativa: você vai planejar uma viagem dos sonhos e contar uma experiência de viagem real, usando tudo — aeroporto, hotel, direções, problemas e present perfect. É o seu "diário de viagem" falado em inglês.',
      conceito: {
        titulo: 'Planejar uma viagem e contar uma experiência',
        texto: 'Este projeto tem duas partes que integram toda a trilha. PARTE 1 — PLANO (futuro): descreva uma viagem que você quer fazer usando going to/will: para onde, como chega ("I\'m going to fly to..."), onde fica ("I\'ll stay at a hotel near..."), o que vai fazer. Inclua a logística que você aprendeu: check-in, hotel, como vai se locomover. PARTE 2 — EXPERIÊNCIA (present perfect + passado): conte uma viagem que você JÁ fez (ou imagine uma), misturando present perfect para a experiência geral ("I have been to...", "I have never...") e passado simples para os detalhes ("I went in 2019, I stayed at...", "my flight was delayed but..."). Inclua pelo menos um PROBLEMA que aconteceu e como resolveu. O resultado é uma narrativa de 12 a 15 frases que combina planejar (futuro), relatar (passado) e refletir (present perfect) — exatamente como falamos de viagens na vida real. Apresente em voz alta e grave-se: é a sua prova de que domina o inglês de viagem de ponta a ponta.',
      },
      estrutura: {
        titulo: 'As duas partes do diário',
        partes: [
          { simbolo: 'plano', desc: 'going to/will: destino, voo, hotel, planos.' },
          { simbolo: 'experiência', desc: 'present perfect: I have been / I have never.' },
          { simbolo: 'detalhes', desc: 'passado simples: I went, I stayed, it was.' },
          { simbolo: 'problema', desc: 'um imprevisto e como você resolveu.' },
        ],
      },
      exemplo: {
        titulo: 'Um diário modelo (trecho)',
        celulas: [
          { ref: 'plano', valor: 'I\'m going to fly to Lisbon and stay near the center.' },
          { ref: 'experiência', valor: 'I have been to Europe, but I\'ve never seen Portugal.' },
          { ref: 'detalhe', valor: 'Last year I went to Spain and stayed for a week.' },
          { ref: 'problema', valor: 'My flight was delayed, so I asked for another one.' },
        ],
        formula: 'plano (futuro) + experiência (perfect) + detalhes (passado) + problema',
        resultado: 'Você narra viagens completas em inglês.',
        comentario: 'A riqueza do projeto está em MISTURAR os tempos com naturalidade: futuro pro plano, present perfect pra experiência geral, passado simples pros detalhes com data. É exatamente assim que falamos de viagens. Inclua um problema resolvido — mostra que você domina também o inglês de imprevistos. Não busque perfeição gramatical; busque uma narrativa que flua e prenda quem ouve.',
      },
      vocabulario: [
        { palavra: 'plan a trip / experience', def: 'planejar uma viagem / experiência.' },
        { palavra: 'destination / itinerary', def: 'destino / roteiro.' },
        { palavra: 'going to / will', def: 'estruturas de futuro para o plano.' },
      ],
      chave: [
        'Narrativa de 12–15 frases em duas partes',
        'Misture futuro, present perfect e passado simples',
        'Inclua um problema de viagem resolvido',
      ],
      porque: 'Planejar e contar viagens integra toda a trilha e treina o uso natural de três tempos verbais ao mesmo tempo — habilidade central do B1. E falar de viagens é um dos assuntos mais comuns e prazerosos em qualquer conversa.',
    },
    pratica: {
      instrucao: 'Monte e apresente seu diário de viagem em duas partes.',
      passos: [
        'Parte 1: planeje uma viagem com going to/will',
        'Inclua voo, hotel e como vai se locomover',
        'Parte 2: conte uma experiência com present perfect',
        'Acrescente detalhes no passado simples (com data)',
        'Inclua um problema e como resolveu',
        'Misture os três tempos com naturalidade',
        'Apresente em voz alta e grave-se',
      ],
    },
    desafio: {
      cenario: 'Crie um diário de viagem de 12 a 15 frases: planeje uma viagem futura (going to/will) e conte uma experiência (present perfect + passado simples), incluindo um problema resolvido. Apresente em voz alta.',
      requisitos: [
        'Planejei uma viagem com futuro (going to/will)',
        'Contei experiência com present perfect',
        'Dei detalhes no passado simples com data',
        'Inclui um problema e a solução',
        'Apresentei em voz alta, misturando os tempos',
      ],
      dica: 'O brilho está na transição entre os tempos. Pratique frases-ponte: "I\'ve been to many places, but next year I\'m going to..., because last time I went..." — encadear futuro, perfect e passado é o que soa fluente.',
    },
    validacao: [
      'Planejei uma viagem no futuro',
      'Contei experiência no present perfect',
      'Dei detalhes no passado simples',
      'Inclui um problema resolvido',
      'Misturei os tempos com naturalidade',
    ],
  },
};
