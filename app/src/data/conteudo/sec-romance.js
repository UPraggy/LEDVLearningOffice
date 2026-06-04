// ============================================================================
// CONTEÚDO — Golpe do Amor: Relações Falsas e Chantagem (sec-romance)
// módulo Segurança · vertente "ambos"
// Romance scam (perfil falso, amor rápido, nunca aparece, sempre um problema que
// custa dinheiro), perfil clonado, sextorsão/chantagem com imagens, "investir
// junto", como verificar uma pessoa online, sair com segurança, ajudar quem caiu.
// Autoral, foco no Brasil, tom de acolhimento — sem julgar a vítima.
// ============================================================================

export const SEC_ROMANCE = {
  'sec-romance-1': {
    trilhaId: 'sec-romance', numero: 1, titulo: 'O golpe do amor: como ele funciona',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Existe um golpe que não ataca pelo medo, e sim pelo afeto: alguém constrói um relacionamento com você — carinhoso, presente, intenso — só pra, em algum momento, pedir dinheiro. Entender como funciona protege o coração e o bolso.',
      conceito: {
        titulo: 'O golpe do amor cria um vínculo real pra depois explorá-lo',
        texto: 'No golpe do amor (romance scam), o golpista finge interesse romântico pra ganhar sua confiança e, com o tempo, pedir dinheiro. O roteiro é quase sempre o mesmo: um perfil atraente aborda você (em apps de relacionamento, redes sociais ou até no direct), demonstra muito interesse rápido, conversa todos os dias, fala em amor e futuro cedo demais — mas sempre tem um motivo pra nunca aparecer pessoalmente nem em vídeo ao vivo. Construído o vínculo, surge "um problema": uma emergência, uma viagem pra te ver que deu errado, uma oportunidade. E a solução, sempre, envolve você enviar dinheiro. O que torna esse golpe cruel é que o sentimento da vítima é verdadeiro — só o do golpista é encenado. Reconhecer o roteiro não é ser desconfiado do amor; é se proteger de quem usa o amor como arma.',
      },
      estrutura: {
        titulo: 'O roteiro do golpe do amor',
        partes: [
          { simbolo: '💘', desc: 'Interesse intenso e rápido demais.' },
          { simbolo: '📵', desc: 'Sempre um motivo pra nunca aparecer (vídeo/pessoa).' },
          { simbolo: '🧱', desc: 'Constrói confiança com conversa diária e promessas.' },
          { simbolo: '💸', desc: 'Surge "um problema" que se resolve com seu dinheiro.' },
        ],
      },
      exemplo: {
        titulo: 'Amor que sempre acaba em pedido',
        celulas: [
          { ref: 'Início', valor: 'Perfil atraente, interesse forte, conversa todo dia' },
          { ref: 'Sinal', valor: 'Fala em amor cedo, mas nunca aparece de verdade' },
          { ref: 'Virada', valor: '"Tive uma emergência / vou te visitar, mas..."' },
          { ref: 'Pedido', valor: 'A solução sempre precisa do seu dinheiro' },
        ],
        formula: 'Amor rápido + nunca aparece + problema que custa dinheiro = golpe',
        resultado: 'Você reconhece o padrão por baixo do romance.',
        comentario: 'O afeto que você sente é real e legítimo — o problema é a pessoa do outro lado. Por isso a defesa não é endurecer o coração, e sim conhecer o roteiro que se repete.',
      },
      vocabulario: [
        { palavra: 'Golpe do amor', def: 'Relação romântica encenada pra pedir dinheiro.' },
        { palavra: 'Perfil falso', def: 'Identidade inventada pra atrair e enganar.' },
        { palavra: 'Bombardeio de afeto', def: 'Amor intenso e rápido pra acelerar a confiança.' },
      ],
      chave: [
        'O golpe do amor finge romance pra depois pedir dinheiro',
        'Sinais: amor rápido demais e nunca aparecer de verdade',
        'A virada é sempre um "problema" que precisa do seu dinheiro',
      ],
      porque: 'O golpe do amor causa prejuízo financeiro e emocional profundo. Conhecer o roteiro — afeto rápido, ausência física e o pedido inevitável — permite reconhecer a manipulação sem se fechar pra relações reais.',
    },
    pratica: {
      instrucao: 'Aprenda a reconhecer o roteiro do golpe do amor.',
      passos: [
        'Desconfie de interesse romântico intenso e rápido demais',
        'Note se a pessoa nunca aparece em vídeo ao vivo ou pessoalmente',
        'Repare na construção diária de confiança e promessas de futuro',
        'Acenda o alerta quando surgir "um problema" que custa dinheiro',
        'Lembre: seu sentimento é real; o roteiro do golpista é encenado',
      ],
    },
    desafio: {
      cenario: 'Você reconhece o roteiro do golpe do amor por baixo do romance.',
      requisitos: [
        'Sei que o golpe finge romance pra pedir dinheiro',
        'Desconfio de amor rápido demais',
        'Noto quando a pessoa nunca aparece de verdade',
        'Reconheço o "problema" que precisa do meu dinheiro',
        'Não confundo me proteger com me fechar pro amor',
      ],
      dica: 'Esse golpe atinge pessoas de todas as idades — solidão e vontade de amar não têm nada de errado. A vergonha de admitir que "se apaixonou online" é justamente o que o golpista usa pra você não pedir ajuda.',
    },
    validacao: [
      'Romance encenado pede dinheiro',
      'Desconfio de amor rápido',
      'Nunca aparece = alerta',
      'Problema que custa dinheiro',
      'Proteger ≠ se fechar',
    ],
  },

  'sec-romance-2': {
    trilhaId: 'sec-romance', numero: 2, titulo: 'Nunca aparece: o sinal central e os pretextos',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'De todos os sinais do golpe do amor, um é o mais revelador: por mais que a relação avance, a pessoa nunca aparece em vídeo ao vivo nem pessoalmente. E sempre há uma desculpa convincente. Entender esses pretextos desarma a ilusão.',
      conceito: {
        titulo: 'A ausência física constante, com desculpas, é a marca do perfil falso',
        texto: 'Quem usa um perfil falso não pode se mostrar — porque a foto é roubada e a identidade é inventada. Então precisa de pretextos infinitos pra evitar vídeo ao vivo e encontros: "trabalho numa plataforma de petróleo / sou militar em missão / sou médico numa zona de conflito"; "minha câmera quebrou"; "o sinal aqui é péssimo"; "vou te visitar" (e a viagem sempre dá um problema que custa dinheiro). Cada desculpa isolada parece plausível; o padrão é que elas nunca terminam — sempre há uma nova razão pra não aparecer. A regra prática: numa relação real, mais cedo ou mais tarde a pessoa aparece em vídeo ao vivo. Recusa persistente a uma chamada de vídeo simples e ao vivo, somada a histórias que justificam a distância, é um sinal forte de golpe. Note: vídeo ao vivo, não foto nem vídeo gravado — esses podem ser roubados.',
      },
      estrutura: {
        titulo: 'Pretextos pra nunca aparecer',
        partes: [
          { simbolo: '🛢️', desc: 'Profissão distante: plataforma, militar, médico em missão.' },
          { simbolo: '📷', desc: '"Câmera quebrada" / "sinal ruim" pra evitar vídeo.' },
          { simbolo: '✈️', desc: '"Vou te visitar" — e a viagem sempre dá problema.' },
          { simbolo: '🎥', desc: 'Peça vídeo ao vivo (não foto/gravado, que se rouba).' },
        ],
      },
      exemplo: {
        titulo: 'A chamada de vídeo que nunca acontece',
        celulas: [
          { ref: 'Você sugere', valor: 'Uma chamada de vídeo ao vivo, simples' },
          { ref: 'Resposta', valor: '"Câmera quebrada", "sinal ruim", "estou em missão"' },
          { ref: 'Padrão', valor: 'As desculpas nunca terminam — sempre uma nova' },
          { ref: 'Verdade', valor: 'Não aparece porque a foto e a identidade são falsas' },
        ],
        formula: 'Recusa persistente de vídeo ao vivo + desculpas = perfil falso',
        resultado: 'Você usa o pedido de vídeo ao vivo como teste.',
        comentario: 'Uma desculpa acontece; uma sequência infinita delas é o golpe. Vídeo ao vivo é o teste mais simples — e é exatamente o que o perfil falso nunca consegue passar.',
      },
      vocabulario: [
        { palavra: 'Foto roubada', def: 'Imagem de outra pessoa usada no perfil falso.' },
        { palavra: 'Vídeo ao vivo', def: 'Chamada em tempo real — o teste que o golpista evita.' },
        { palavra: 'Pretexto', def: 'Desculpa pra justificar nunca aparecer.' },
      ],
      chave: [
        'O perfil falso não pode se mostrar: foto roubada, identidade inventada',
        'As desculpas pra não aparecer nunca terminam',
        'Vídeo ao vivo (não foto/gravado) é o teste que ele evita',
      ],
      porque: 'A ausência física com desculpas infinitas é o sinal central do golpe do amor. Saber que vídeo ao vivo é o teste — e que o golpista sempre o evita — dá a você uma forma simples e direta de checar.',
    },
    pratica: {
      instrucao: 'Use o vídeo ao vivo como teste de realidade.',
      passos: [
        'Repare se a pessoa nunca aparece em vídeo ao vivo',
        'Reconheça os pretextos comuns (profissão, câmera, sinal, viagem)',
        'Note que as desculpas nunca terminam',
        'Peça uma chamada de vídeo ao vivo simples',
        'Lembre: foto e vídeo gravado podem ser roubados',
      ],
    },
    desafio: {
      cenario: 'Você reconhece a ausência física com desculpas como sinal de perfil falso.',
      requisitos: [
        'Sei que o perfil falso não pode se mostrar',
        'Reconheço os pretextos pra nunca aparecer',
        'Percebo que as desculpas nunca terminam',
        'Uso o vídeo ao vivo como teste',
        'Sei que foto e vídeo gravado podem ser roubados',
      ],
      dica: 'Se a pessoa some ou fica brava quando você pede um simples vídeo ao vivo, isso já responde sua pergunta. Quem é real entende e topa; quem é falso foge.',
    },
    validacao: [
      'Perfil falso não se mostra',
      'Reconheço os pretextos',
      'Desculpas não terminam',
      'Vídeo ao vivo é o teste',
      'Foto/gravado se rouba',
    ],
  },

  'sec-romance-3': {
    trilhaId: 'sec-romance', numero: 3, titulo: 'O pedido de dinheiro: emergências e oportunidades',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'No golpe do amor, o dinheiro nunca é pedido logo — ele aparece depois que o vínculo está forte, embrulhado em uma emergência comovente ou uma oportunidade tentadora. Conhecer essas embalagens ajuda a reconhecer o pedido por trás do sentimento.',
      conceito: {
        titulo: 'O pedido vem depois do vínculo, justificado por uma história',
        texto: 'O golpista espera você se apegar antes de pedir — assim o pedido vem amparado pelo carinho, e recusar parece frio. As embalagens mais comuns: a emergência ("acidente", "doença na família", "fiquei preso na alfândega", "preciso de dinheiro pra liberar uma encomenda/passagem pra te ver"); a oportunidade ("descobri um investimento, vamos fazer juntos e construir nosso futuro"); e o pedido progressivo (começa pequeno, "só um empréstimo que devolvo", e cresce). Há quase sempre urgência e sigilo ("não conta pra ninguém, é coisa nossa"). A regra de proteção é dura, mas clara: nunca envie dinheiro pra alguém que você só conhece online e nunca encontrou de verdade — não importa o quanto se sinta próximo. Amor verdadeiro não chega pela cobrança; o pedido de dinheiro de um amor que nunca apareceu é o golpe se revelando.',
      },
      estrutura: {
        titulo: 'As embalagens do pedido',
        partes: [
          { simbolo: '🚑', desc: 'Emergência comovente (acidente, doença, alfândega).' },
          { simbolo: '📈', desc: 'Oportunidade: "investir juntos pelo nosso futuro".' },
          { simbolo: '🪜', desc: 'Pedido progressivo: começa pequeno e cresce.' },
          { simbolo: '🤫', desc: 'Urgência e sigilo: "não conta pra ninguém".' },
        ],
      },
      exemplo: {
        titulo: 'A emergência que precisa de você agora',
        celulas: [
          { ref: 'Vínculo', valor: 'Semanas de carinho e conversa diária' },
          { ref: 'História', valor: '"Tive uma emergência / preciso liberar a passagem pra te ver"' },
          { ref: 'Pressão', valor: 'Urgência + "não conta pra ninguém"' },
          { ref: 'Regra', valor: 'Nunca enviar a quem só conheço online e nunca vi' },
        ],
        formula: 'Vínculo + história comovente + urgência + pedir dinheiro = golpe',
        resultado: 'Você reconhece o pedido por trás do sentimento.',
        comentario: 'O sigilo ("é coisa nossa") existe pra te isolar de quem poderia abrir seus olhos. Contar pra alguém de confiança não é trair o amor — é o melhor teste de realidade que existe.',
      },
      vocabulario: [
        { palavra: 'Pedido progressivo', def: 'Começa pequeno e vai crescendo a cada vez.' },
        { palavra: 'Investir juntos', def: 'Isca de "futuro a dois" pra você colocar dinheiro.' },
        { palavra: 'Sigilo imposto', def: '"Não conta pra ninguém" — tática de isolamento.' },
      ],
      chave: [
        'O pedido vem depois do vínculo, embrulhado em emergência ou oportunidade',
        'Há sempre urgência e pedido de sigilo',
        'Nunca envie dinheiro a quem você só conhece online e nunca encontrou',
      ],
      porque: 'O pedido de dinheiro é o objetivo final do golpe do amor, e ele vem disfarçado de emergência ou futuro a dois. A regra "nunca enviar a um amor que nunca apareceu" protege você no momento decisivo.',
    },
    pratica: {
      instrucao: 'Reconheça o pedido por trás do sentimento.',
      passos: [
        'Lembre que o pedido vem só depois do vínculo formado',
        'Reconheça as embalagens: emergência, oportunidade, pedido pequeno',
        'Note a urgência e o pedido de sigilo',
        'Aplique a regra: nunca enviar a quem nunca encontrei',
        'Conte pra alguém de confiança — é o melhor teste',
      ],
    },
    desafio: {
      cenario: 'Você reconhece e recusa o pedido de dinheiro no golpe do amor.',
      requisitos: [
        'Sei que o pedido vem depois do vínculo',
        'Reconheço emergência e oportunidade como embalagens',
        'Percebo a urgência e o pedido de sigilo',
        'Aplico a regra de nunca enviar a quem nunca vi',
        'Compartilho com alguém de confiança',
      ],
      dica: 'Se sentir vergonha de contar, lembre: o golpista conta com esse silêncio. Falar com um amigo ou familiar quebra exatamente a ferramenta que ele usa pra te manter sozinho.',
    },
    validacao: [
      'Pedido vem após o vínculo',
      'Reconheço as embalagens',
      'Urgência + sigilo',
      'Nunca envio a quem nunca vi',
      'Conto pra alguém',
    ],
  },

  'sec-romance-4': {
    trilhaId: 'sec-romance', numero: 4, titulo: 'Sextorsão: chantagem com fotos íntimas',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Há uma variação cruel desse golpe: depois de conquistar intimidade, o golpista convence a vítima a enviar fotos ou vídeos íntimos — e então ameaça divulgá-los pra exigir dinheiro. Saber como funciona e, principalmente, como reagir, é proteção essencial.',
      conceito: {
        titulo: 'A intimidade é induzida pra virar chantagem',
        texto: 'Na sextorsão, o golpista cria proximidade rápida e incentiva a troca de imagens íntimas (às vezes oferecendo as próprias, que são falsas ou roubadas). Assim que recebe, muda completamente: ameaça enviar tudo pra seus contatos, família ou redes, a menos que você pague. Costuma agir com urgência e terror ("você tem 24 horas"), e pagar não resolve — quase sempre vem nova exigência. O que toda vítima precisa saber: a culpa é de quem chantageia, não de quem foi manipulado; ceder ao pagamento alimenta o golpe; e existem caminhos de ajuda. A prevenção é não enviar imagens íntimas pra quem você não conhece de verdade, por mais natural que a conversa pareça. E a reação certa, se acontecer: não pagar, não responder, preservar provas, bloquear e procurar ajuda — autoridades e pessoas de confiança. Essa é a resposta que tira o poder do chantagista.',
      },
      estrutura: {
        titulo: 'Como a sextorsão age',
        partes: [
          { simbolo: '🔥', desc: 'Proximidade rápida e incentivo à troca de imagens íntimas.' },
          { simbolo: '⛓️', desc: 'Recebeu? Vira ameaça de divulgar pra exigir dinheiro.' },
          { simbolo: '🔁', desc: 'Pagar não resolve: quase sempre vem nova exigência.' },
          { simbolo: '🛡️', desc: 'Reação: não pagar, preservar provas, bloquear, buscar ajuda.' },
        ],
      },
      exemplo: {
        titulo: 'Quando a intimidade vira ameaça',
        celulas: [
          { ref: 'Indução', valor: 'Proximidade rápida e incentivo a enviar imagens íntimas' },
          { ref: 'Virada', valor: '"Pague ou eu mando tudo pros seus contatos"' },
          { ref: 'Erro comum', valor: 'Pagar — e receber novas exigências' },
          { ref: 'Reação certa', valor: 'Não pagar, preservar provas, bloquear, buscar ajuda' },
        ],
        formula: 'Intimidade induzida + ameaça de divulgar = sextorsão',
        resultado: 'Você sabe prevenir e, se preciso, reagir sem pagar.',
        comentario: 'A vergonha e o pânico são as armas do chantagista — por isso ele impõe prazos. Quebrar o isolamento e procurar ajuda é exatamente o que ele teme, e o que protege a vítima.',
      },
      vocabulario: [
        { palavra: 'Sextorsão', def: 'Chantagem com imagens íntimas pra exigir dinheiro.' },
        { palavra: 'Preservar provas', def: 'Guardar mensagens e perfis antes de bloquear.' },
        { palavra: 'Não pagar', def: 'Regra central: ceder só alimenta a chantagem.' },
      ],
      chave: [
        'A intimidade é induzida pra virar chantagem por dinheiro',
        'Pagar não resolve — costuma trazer novas exigências',
        'Reação: não pagar, preservar provas, bloquear e buscar ajuda',
      ],
      porque: 'A sextorsão combina dano financeiro e sofrimento emocional intenso. Saber prevenir (não enviar imagens íntimas a desconhecidos) e reagir (não pagar, preservar provas, buscar ajuda) tira do chantagista o poder que ele tenta exercer.',
    },
    pratica: {
      instrucao: 'Saiba prevenir e reagir à sextorsão.',
      passos: [
        'Não envie imagens íntimas a quem você não conhece de verdade',
        'Desconfie de quem cria intimidade rápida e incentiva o envio',
        'Se ameaçado, não pague — pagar não resolve',
        'Preserve provas e bloqueie o golpista',
        'Procure ajuda: autoridades e pessoas de confiança',
      ],
    },
    desafio: {
      cenario: 'Você sabe prevenir a sextorsão e reagir corretamente se acontecer.',
      requisitos: [
        'Não envio imagens íntimas a desconhecidos',
        'Reconheço a intimidade induzida como tática',
        'Sei que não devo pagar a chantagem',
        'Preservo provas e bloqueio',
        'Procuro ajuda e não fico sozinho com isso',
      ],
      dica: 'A culpa nunca é de quem foi manipulado — é de quem chantageia, e isso é crime. Procurar ajuda não é exposição: autoridades lidam com esses casos com sigilo e seriedade.',
    },
    validacao: [
      'Não envio imagens a desconhecidos',
      'Intimidade induzida = tática',
      'Não pago a chantagem',
      'Preservo provas, bloqueio',
      'Procuro ajuda',
    ],
  },

  'sec-romance-5': {
    trilhaId: 'sec-romance', numero: 5, titulo: '"Vamos investir juntos": o amor que vira golpe financeiro',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Uma forma moderna e devastadora do golpe do amor não pede dinheiro emprestado — convence você a "investir" numa plataforma que a pessoa "usa e confia". O afeto vira a porta pra um golpe financeiro disfarçado de futuro a dois.',
      conceito: {
        titulo: 'O vínculo amoroso é usado pra te levar a um falso investimento',
        texto: 'Aqui o golpista combina o golpe do amor com a fraude de investimento. Depois de construir confiança, ele conta que "ganha bem" numa plataforma de cripto ou investimentos e se oferece pra te ensinar, "pra vocês construírem um futuro juntos". Ajuda você a abrir conta numa plataforma (falsa), e você vê seu "saldo crescer" na tela — exatamente como na fraude de investimento. Quando tenta sacar, surgem taxas, ou simplesmente não sai, e a pessoa some. É cruel porque junta o melhor disfarce (o amor) com a fraude financeira: você confia não numa promessa, mas em "alguém que ama você". A defesa une as duas trilhas: nunca misture um relacionamento online (ainda mais um que nunca virou encontro real) com decisões financeiras, e lembre que saldo crescendo na tela não é dinheiro real — o teste continua sendo o saque.',
      },
      estrutura: {
        titulo: 'Amor + investimento falso',
        partes: [
          { simbolo: '💞', desc: 'Vínculo amoroso construído primeiro.' },
          { simbolo: '📲', desc: '"Uso essa plataforma, deixa eu te ensinar."' },
          { simbolo: '📈', desc: 'Saldo "cresce" na tela (plataforma falsa).' },
          { simbolo: '🧱', desc: 'No saque: taxas ou nada sai — e a pessoa some.' },
        ],
      },
      exemplo: {
        titulo: 'O futuro a dois que era armadilha',
        celulas: [
          { ref: 'Gancho', valor: '"Eu invisto e ganho bem — vamos construir nosso futuro"' },
          { ref: 'Ação', valor: 'Te ajuda a pôr dinheiro numa plataforma falsa' },
          { ref: 'Ilusão', valor: 'O saldo cresce na tela e te anima a colocar mais' },
          { ref: 'Fim', valor: 'Saque travado por taxas; a pessoa desaparece' },
        ],
        formula: 'Amor online + "investir juntos" + saque travado = golpe',
        resultado: 'Você separa relação online de decisão financeira.',
        comentario: 'Confiar em "alguém que ama você" é mais forte do que confiar numa promessa fria — e o golpista sabe disso. Por isso essa combinação é tão eficaz e tão importante de reconhecer.',
      },
      vocabulario: [
        { palavra: 'Romance + investimento', def: 'Golpe do amor que termina em falso investimento.' },
        { palavra: 'Plataforma falsa', def: 'Site/app que mostra saldo mas não deixa sacar.' },
        { palavra: 'Teste do saque', def: 'Tentar sacar revela se o dinheiro é real.' },
      ],
      chave: [
        'O vínculo amoroso é usado pra te levar a um falso investimento',
        'Saldo crescendo na tela não é dinheiro real',
        'Nunca misture relação online com decisões financeiras',
      ],
      porque: 'A combinação de golpe do amor com falso investimento é uma das mais devastadoras hoje. Separar relação online de decisões financeiras — e lembrar do teste do saque — protege você desse disfarce duplo.',
    },
    pratica: {
      instrucao: 'Separe amor online de decisões financeiras.',
      passos: [
        'Desconfie de um par online que te chama pra "investir junto"',
        'Lembre que saldo crescendo na tela não é dinheiro real',
        'Aplique o teste do saque (e cuidado com taxas pra liberar)',
        'Nunca decida finanças por confiança em alguém que nunca viu',
        'Una as defesas das trilhas de amor e de golpes financeiros',
      ],
    },
    desafio: {
      cenario: 'Você reconhece o golpe do amor que termina em falso investimento.',
      requisitos: [
        'Sei que o vínculo é usado pra um falso investimento',
        'Lembro que saldo na tela não é dinheiro real',
        'Aplico o teste do saque',
        'Não misturo relação online com finanças',
        'Uno as defesas de amor e investimento',
      ],
      dica: 'A frase "vamos construir nosso futuro investindo juntos" soa linda — e é exatamente por isso que funciona. Decisões de dinheiro pedem verificação fria, nunca o calor de uma relação que ainda não é real.',
    },
    validacao: [
      'Vínculo leva a investimento falso',
      'Saldo na tela ≠ dinheiro real',
      'Aplico o teste do saque',
      'Amor não decide finanças',
      'Uno as defesas',
    ],
  },

  'sec-romance-6': {
    trilhaId: 'sec-romance', numero: 6, titulo: 'Perfil clonado e fotos roubadas: como checar',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Por trás de muitos golpes do amor há um perfil construído com fotos roubadas de outra pessoa — às vezes de alguém real e inocente, cujas imagens foram pegas da internet. Algumas checagens simples ajudam a perceber quando o perfil não é quem diz ser.',
      conceito: {
        titulo: 'Perfis falsos deixam pistas — dá pra checar com cuidado',
        texto: 'Golpistas montam perfis com fotos roubadas (de modelos, de pessoas comuns, de militares) e histórias genéricas. Algumas pistas ajudam: o perfil é novo, com poucas fotos e poucos amigos/seguidores reais? As fotos parecem boas demais ou "de catálogo"? A história tem furos ou muda com o tempo? O texto às vezes soa traduzido de forma estranha (sinal de quem escreve em outro idioma e traduz). Uma checagem útil é a busca reversa de imagem: você pega a foto do perfil e procura na internet por "onde mais essa imagem aparece" — se ela surge ligada a outro nome ou em vários lugares, é foto roubada. Some isso ao teste do vídeo ao vivo (missão 2). Nada disso é prova absoluta sozinho, mas o conjunto — perfil raso, fotos suspeitas, história inconsistente, recusa de vídeo — desenha o retrato do perfil falso.',
      },
      estrutura: {
        titulo: 'Pistas e checagens',
        partes: [
          { simbolo: '🆕', desc: 'Perfil novo, poucas fotos, poucos contatos reais.' },
          { simbolo: '🖼️', desc: 'Fotos "boas demais" ou de catálogo.' },
          { simbolo: '🔄', desc: 'Busca reversa de imagem: a foto aparece com outro nome?' },
          { simbolo: '🧩', desc: 'História com furos + recusa de vídeo ao vivo.' },
        ],
      },
      exemplo: {
        titulo: 'A foto que pertence a outra pessoa',
        celulas: [
          { ref: 'Suspeita', valor: 'Perfil novo, fotos perfeitas, história genérica' },
          { ref: 'Checagem', valor: 'Busca reversa da foto na internet' },
          { ref: 'Resultado', valor: 'A imagem aparece ligada a outro nome/pessoa' },
          { ref: 'Conclusão', valor: 'Foto roubada — o perfil não é quem diz ser' },
        ],
        formula: 'Perfil raso + busca reversa + história furada + sem vídeo = falso',
        resultado: 'Você reúne pistas em vez de confiar só na foto.',
        comentario: 'Nenhuma pista isolada condena — pessoas reais também têm perfis novos. É o conjunto que importa. E a foto roubada, revelada pela busca reversa, é uma das pistas mais fortes.',
      },
      vocabulario: [
        { palavra: 'Perfil clonado', def: 'Perfil montado com fotos e dados de outra pessoa.' },
        { palavra: 'Busca reversa de imagem', def: 'Procurar onde mais uma foto aparece na internet.' },
        { palavra: 'Perfil raso', def: 'Conta nova, com poucas fotos e poucos contatos reais.' },
      ],
      chave: [
        'Perfis falsos usam fotos roubadas e histórias genéricas',
        'A busca reversa de imagem revela fotos usadas em outros lugares',
        'É o conjunto de pistas (não uma só) que denuncia o perfil falso',
      ],
      porque: 'Saber checar um perfil dá a você ferramentas concretas além da intuição. A busca reversa de imagem e a leitura do conjunto de pistas ajudam a identificar perfis falsos antes que o vínculo (e o pedido) avance.',
    },
    pratica: {
      instrucao: 'Aprenda a checar se um perfil é real.',
      passos: [
        'Repare se o perfil é novo, com poucas fotos e contatos',
        'Desconfie de fotos boas demais ou de catálogo',
        'Faça a busca reversa da foto na internet',
        'Procure furos e inconsistências na história',
        'Some ao teste do vídeo ao vivo — avalie o conjunto',
      ],
    },
    desafio: {
      cenario: 'Você checa pistas pra identificar perfis falsos em vez de confiar só na foto.',
      requisitos: [
        'Reparo em perfis rasos e novos',
        'Desconfio de fotos boas demais',
        'Sei usar a busca reversa de imagem',
        'Procuro furos na história',
        'Avalio o conjunto, não uma pista só',
      ],
      dica: 'Pra fazer a busca reversa, é possível usar ferramentas de pesquisa por imagem na internet. Se não souber como, peça ajuda a alguém de confiança — checar junto também vale.',
    },
    validacao: [
      'Reparo em perfil raso',
      'Desconfio de fotos perfeitas',
      'Uso busca reversa',
      'Procuro furos na história',
      'Avalio o conjunto',
    ],
  },

  'sec-romance-7': {
    trilhaId: 'sec-romance', numero: 7, titulo: 'Namorar online com segurança',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Conhecer pessoas online é legítimo, comum e pode dar muito certo. O objetivo não é desistir disso — é fazer com hábitos que mantêm você seguro enquanto a relação se constrói. Dá pra abrir o coração sem baixar todas as defesas.',
      conceito: {
        titulo: 'Hábitos simples deixam o namoro online seguro sem matar o romance',
        texto: 'Namorar online com segurança é questão de ritmo e limites. Vá no tempo da realidade: relações verdadeiras crescem aos poucos; desconfie de quem declara amor e futuro em dias. Insista em vídeo ao vivo cedo na relação — quem é real topa. Não misture dinheiro com a relação enquanto não houver um encontro real e confiança construída no mundo físico; nunca envie a quem você nunca viu. Proteja seus dados: não compartilhe documentos, endereço exato ou informações sensíveis com quem você mal conhece. Mantenha pessoas de confiança no circuito — fale sobre quem você está conhecendo; o sigilo pedido pelo outro é sinal ruim. E confie no seu desconforto: se algo não bate, tudo bem ir devagar ou parar. Esses hábitos não impedem o amor de florescer — só fecham as portas que o golpista precisaria pra entrar.',
      },
      estrutura: {
        titulo: 'Hábitos de namoro online seguro',
        partes: [
          { simbolo: '🐢', desc: 'Ir no tempo real: desconfiar de amor relâmpago.' },
          { simbolo: '🎥', desc: 'Insistir em vídeo ao vivo cedo na relação.' },
          { simbolo: '🚫', desc: 'Não misturar dinheiro enquanto não houver encontro real.' },
          { simbolo: '👨‍👩‍👧', desc: 'Manter pessoas de confiança sabendo (nada de sigilo).' },
        ],
      },
      exemplo: {
        titulo: 'Abrir o coração sem abrir todas as portas',
        celulas: [
          { ref: 'Ritmo', valor: 'Deixar a relação crescer no tempo da realidade' },
          { ref: 'Prova', valor: 'Vídeo ao vivo e, com o tempo, encontro real' },
          { ref: 'Limite', valor: 'Sem dinheiro e sem dados sensíveis cedo' },
          { ref: 'Rede', valor: 'Contar pra amigos/família quem você conhece' },
        ],
        formula: 'Ritmo real + vídeo + limites + rede de confiança = namoro online seguro',
        resultado: 'Você se relaciona online com o coração aberto e as defesas certas.',
        comentario: 'Segurança no namoro online não é frieza — é cuidado. Quem realmente gosta de você respeita seu tempo, seus limites e suas pessoas. Quem se irrita com isso está mostrando quem é.',
      },
      vocabulario: [
        { palavra: 'Tempo da realidade', def: 'Deixar a relação crescer aos poucos, sem pressa forçada.' },
        { palavra: 'Limite saudável', def: 'Não misturar dinheiro/dados sensíveis cedo demais.' },
        { palavra: 'Rede de confiança', def: 'Pessoas próximas que sabem quem você está conhecendo.' },
      ],
      chave: [
        'Namorar online é legítimo — o objetivo é fazer com segurança',
        'Ritmo real, vídeo ao vivo, sem dinheiro/dados cedo e rede de confiança',
        'Quem gosta de você respeita seu tempo, limites e pessoas',
      ],
      porque: 'Relações online reais existem e merecem espaço. Hábitos simples de ritmo, verificação e limites permitem viver isso com segurança — protegendo você de golpes sem fechar as portas pro amor verdadeiro.',
    },
    pratica: {
      instrucao: 'Adote hábitos de namoro online seguro.',
      passos: [
        'Deixe a relação crescer no tempo da realidade',
        'Insista em vídeo ao vivo cedo na relação',
        'Não misture dinheiro enquanto não houver encontro real',
        'Proteja seus dados sensíveis até conhecer de verdade',
        'Mantenha pessoas de confiança sabendo — recuse o sigilo',
      ],
    },
    desafio: {
      cenario: 'Você namora online com hábitos que mantêm a segurança sem matar o romance.',
      requisitos: [
        'Vou no tempo real e desconfio de amor relâmpago',
        'Insisto em vídeo ao vivo cedo',
        'Não misturo dinheiro com a relação cedo',
        'Protejo meus dados sensíveis',
        'Mantenho minha rede de confiança no circuito',
      ],
      dica: 'Um bom termômetro: como a pessoa reage aos seus limites? Quem respeita seu tempo, topa o vídeo e entende que você conta às pessoas de confiança está agindo como alguém real e honesto.',
    },
    validacao: [
      'Vou no tempo real',
      'Insisto em vídeo ao vivo',
      'Sem dinheiro cedo',
      'Protejo meus dados',
      'Mantenho rede de confiança',
    ],
  },

  'sec-romance-8': {
    trilhaId: 'sec-romance', numero: 8, titulo: 'Quando alguém que você ama está sendo enganado',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Às vezes não somos nós, mas alguém querido — um pai, uma mãe, um amigo solitário — que está envolvido num golpe do amor e não percebe (ou não quer perceber). Ajudar nesses casos exige cuidado: confronto direto costuma afastar, não salvar.',
      conceito: {
        titulo: 'Acolher, sem julgar, abre a porta que o confronto fecha',
        texto: 'Quem está num golpe do amor sente algo verdadeiro e, muitas vezes, sabe lá no fundo que algo está errado — mas a vergonha e o apego dificultam admitir. Por isso o confronto duro ("você está sendo enganado, como não vê isso?") costuma gerar defesa e afastamento, empurrando a pessoa pra mais perto do golpista (que diz justamente que "ninguém entende vocês"). O que ajuda é o oposto: acolher sem julgar, fazer perguntas em vez de acusações ("vocês já se falaram por vídeo ao vivo?", "ele já te pediu dinheiro?"), oferecer ajuda concreta (fazer juntos uma busca reversa da foto, pesquisar a história), e plantar dúvidas com gentileza em vez de impor verdades. Manter o vínculo é o que mantém você por perto pra quando a ficha cair. E em casos com dinheiro ou chantagem, ajude a pessoa a buscar caminhos oficiais. Paciência e respeito salvam mais do que estar certo.',
      },
      estrutura: {
        titulo: 'Como ajudar quem está sendo enganado',
        partes: [
          { simbolo: '🤝', desc: 'Acolher sem julgar — não envergonhar.' },
          { simbolo: '❓', desc: 'Perguntar (vídeo? pediu dinheiro?) em vez de acusar.' },
          { simbolo: '🔍', desc: 'Oferecer ajuda concreta: busca reversa, pesquisar a história.' },
          { simbolo: '⏳', desc: 'Plantar dúvida com paciência; manter o vínculo.' },
        ],
      },
      exemplo: {
        titulo: 'Perguntar em vez de acusar',
        celulas: [
          { ref: 'Evite', valor: '"Você está sendo enganado, que ingenuidade!"' },
          { ref: 'Prefira', valor: '"Que bom que está feliz. Vocês já se viram por vídeo?"' },
          { ref: 'Ofereça', valor: '"Quer que a gente cheque a foto dele juntos?"' },
          { ref: 'Mantenha', valor: 'O vínculo aberto pra quando a ficha cair' },
        ],
        formula: 'Acolher + perguntar + ajudar + paciência = ajuda que funciona',
        resultado: 'Você ajuda sem afastar a pessoa pra perto do golpista.',
        comentario: 'Ter razão e ser duro costuma fechar a porta. O golpista quer que a vítima brigue com quem a ama. Ao acolher, você se mantém como o porto seguro pra quando ela precisar.',
      },
      vocabulario: [
        { palavra: 'Acolher sem julgar', def: 'Apoiar sem envergonhar quem está sendo enganado.' },
        { palavra: 'Plantar dúvida', def: 'Fazer perguntas que abrem espaço pra pessoa perceber.' },
        { palavra: 'Manter o vínculo', def: 'Continuar próximo pra ajudar quando a ficha cair.' },
      ],
      chave: [
        'Confronto duro afasta a vítima pra perto do golpista',
        'Acolher, perguntar e oferecer ajuda concreta funciona melhor',
        'Paciência e manter o vínculo salvam mais do que estar certo',
      ],
      porque: 'Ajudar quem está num golpe do amor é delicado: a abordagem errada piora tudo. Acolher sem julgar, perguntar e plantar dúvida com paciência mantém você por perto e dá à pessoa a chance de perceber e sair.',
    },
    pratica: {
      instrucao: 'Aprenda a ajudar quem está sendo enganado.',
      passos: [
        'Acolha sem julgar — evite envergonhar a pessoa',
        'Faça perguntas (vídeo ao vivo? pediu dinheiro?) em vez de acusar',
        'Ofereça ajuda concreta, como a busca reversa da foto',
        'Plante dúvidas com gentileza, sem impor verdades',
        'Mantenha o vínculo e ajude a buscar caminhos oficiais',
      ],
    },
    desafio: {
      cenario: 'Você ajuda alguém querido que está sendo enganado, sem afastá-lo.',
      requisitos: [
        'Acolho sem julgar nem envergonhar',
        'Pergunto em vez de acusar',
        'Ofereço ajuda concreta de verificação',
        'Planto dúvida com paciência',
        'Mantenho o vínculo e oriento aos caminhos oficiais',
      ],
      dica: 'Se a pessoa não estiver pronta pra ouvir, não desista nem brigue — só deixe claro que você está ali, sem cobrança. Muitas vítimas saem quando finalmente têm um porto seguro pra onde voltar.',
    },
    validacao: [
      'Acolho sem julgar',
      'Pergunto, não acuso',
      'Ofereço ajuda concreta',
      'Planto dúvida com paciência',
      'Mantenho o vínculo',
    ],
  },

  'sec-romance-9': {
    trilhaId: 'sec-romance', numero: 9, titulo: 'Projeto: coração e dados protegidos',
    tempoTotal: 18, xp: 120, vertente: 'ambos',
    aula: {
      gancho: 'Hora de reunir tudo num jeito de viver as relações online com o coração aberto e as defesas certas — pra você e pra quem você ama. Um guia que protege sem fechar as portas pro amor verdadeiro.',
      conceito: {
        titulo: 'Reconhecer, verificar e acolher: o tripé que protege o coração',
        texto: 'Seu guia "coração e dados protegidos" reúne a trilha. Reconhecer: o golpe do amor finge romance pra pedir dinheiro, com amor rápido, ausência física (nunca aparece) e um "problema" que custa dinheiro. Verificar: insistir em vídeo ao vivo, fazer busca reversa da foto, ler o conjunto de pistas, e nunca enviar dinheiro a quem você nunca encontrou. Defender o resto: não enviar imagens íntimas a desconhecidos (sextorsão) e nunca misturar relação online com investimento. Cuidar: namorar online com ritmo, limites e rede de confiança; e, se alguém querido estiver sendo enganado, acolher sem julgar. E se algo der errado — pedido de dinheiro, chantagem — não pagar, preservar provas, buscar ajuda e falar sem vergonha. Com esse tripé — reconhecer, verificar, acolher — você vive as relações online com segurança, sem deixar o medo roubar o que o amor tem de bom.',
      },
      estrutura: {
        titulo: 'O guia coração e dados protegidos',
        partes: [
          { simbolo: '🔎', desc: 'Reconhecer: amor rápido, nunca aparece, problema que custa dinheiro.' },
          { simbolo: '🎥', desc: 'Verificar: vídeo ao vivo, busca reversa, nunca enviar dinheiro.' },
          { simbolo: '🛡️', desc: 'Defender: sem imagens íntimas a estranhos, sem "investir junto".' },
          { simbolo: '🤝', desc: 'Acolher: ritmo e limites; ajudar quem ama sem julgar.' },
        ],
      },
      exemplo: {
        titulo: 'Vivendo o amor online com segurança',
        celulas: [
          { ref: 'Reconheço', valor: 'O roteiro: afeto rápido, ausência, pedido de dinheiro' },
          { ref: 'Verifico', valor: 'Vídeo ao vivo e busca reversa; não envio dinheiro' },
          { ref: 'Defendo', valor: 'Sem imagens íntimas a estranhos, sem investir junto' },
          { ref: 'Acolho', valor: 'Ritmo e limites; ajudo quem amo sem julgar' },
        ],
        formula: 'Reconhecer + verificar + defender + acolher = coração e dados protegidos',
        resultado: 'Você abre o coração com as defesas certas.',
        comentario: 'O objetivo nunca foi desconfiar do amor — foi tirar do golpista as ferramentas dele. Com esse guia, o amor real tem espaço pra acontecer, e a fraude perde as portas de entrada.',
      },
      vocabulario: [
        { palavra: 'Reconhecer-verificar-acolher', def: 'O tripé que protege o coração e os dados.' },
        { palavra: 'Rede de confiança', def: 'Pessoas que ajudam você a enxergar com clareza.' },
        { palavra: 'Sem vergonha', def: 'Falar e buscar ajuda é o que protege, não o silêncio.' },
      ],
      chave: [
        'O guia reúne reconhecer, verificar, defender e acolher',
        'Vídeo ao vivo, busca reversa e nunca enviar dinheiro são centrais',
        'Proteger o coração não é fechá-lo — é tirar as armas do golpista',
      ],
      porque: 'Este projeto reúne a trilha num guia prático pra viver as relações online com segurança. Reconhecendo o golpe, verificando, defendendo seus dados e acolhendo, você protege coração e bolso — sem deixar o medo roubar o que o amor tem de bom.',
    },
    pratica: {
      instrucao: 'Monte e use seu guia coração e dados protegidos.',
      passos: [
        'Reconheça o roteiro: amor rápido, nunca aparece, pedido de dinheiro',
        'Verifique: vídeo ao vivo, busca reversa, nunca enviar dinheiro',
        'Defenda: sem imagens íntimas a estranhos, sem "investir junto"',
        'Acolha: ritmo, limites e rede de confiança',
        'Se algo der errado: não pague, preserve provas, busque ajuda',
        'Ajude quem você ama sem julgar',
      ],
    },
    desafio: {
      cenario: 'Você vive relações online com o coração aberto e as defesas certas.',
      requisitos: [
        'Reconheço o roteiro do golpe do amor',
        'Verifico com vídeo ao vivo e busca reversa',
        'Nunca envio dinheiro a quem nunca encontrei',
        'Protejo dados e imagens; não misturo com investimento',
        'Acolho a mim e a quem amo, sem julgar',
      ],
      dica: 'Você fechou a trilha do golpe do amor. Junte com as de golpes financeiros, PIX e proteção da família pra blindar coração e bolso — os seus e os de quem você ama.',
    },
    validacao: [
      'Reconheço o roteiro',
      'Verifico (vídeo, busca reversa)',
      'Nunca envio dinheiro',
      'Protejo dados e imagens',
      'Acolho sem julgar',
    ],
  },
};
