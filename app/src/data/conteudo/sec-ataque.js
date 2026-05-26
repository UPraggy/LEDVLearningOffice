// ============================================================================
// CONTEÚDO — Como o Golpista Pensa (sec-ataque)
// Trilha de CONSCIENTIZAÇÃO defensiva: entender por dentro como golpes são
// montados para reconhecê-los e nunca cair. Foco ético — ensina a DEFENDER,
// não a atacar. Nenhuma instrução operacional de fraude.
// ============================================================================

export const SEC_ATAQUE = {
  'sec-ataque-1': {
    trilhaId: 'sec-ataque', numero: 1, titulo: 'Pensar como golpista pra se defender',
    tempoTotal: 8, xp: 40, vertente: 'ambos',
    aula: {
      gancho: 'Você tranca a porta de casa porque entende como um ladrão entraria. Segurança digital é igual: quem entende como o golpe funciona por dentro praticamente não cai. Esta trilha te dá esse raio-X — sempre do lado da defesa.',
      conceito: {
        titulo: 'Entender o ataque é a melhor defesa',
        texto: 'Golpistas seguem roteiros previsíveis. Eles não invadem computadores como nos filmes — na imensa maioria das vezes, eles convencem VOCÊ a entregar o acesso ou o dinheiro. Quando você conhece os roteiros, o golpe perde o efeito surpresa. É como assistir um truque de mágica sabendo o segredo: para de funcionar.',
      },
      estrutura: {
        titulo: 'O ciclo de quase todo golpe',
        partes: [
          { simbolo: '1', desc: 'Alvo: o golpista descobre seus dados (nome, telefone, banco) por vazamentos ou redes sociais.' },
          { simbolo: '2', desc: 'Isca: cria uma mensagem que parece legítima e relevante pra você.' },
          { simbolo: '3', desc: 'Gatilho: dispara uma emoção forte (medo, urgência, ganância) pra você agir sem pensar.' },
          { simbolo: '4', desc: 'Ação: te leva a clicar, pagar, informar senha ou instalar algo.' },
        ],
      },
      exemplo: {
        titulo: 'O mesmo roteiro, dois golpes',
        celulas: [
          { ref: 'Isca', valor: '"Seu CPF será bloqueado hoje"' },
          { ref: 'Gatilho', valor: 'Medo + urgência (hoje!)' },
          { ref: 'Ação', valor: '"Clique aqui pra regularizar"' },
          { ref: 'Verdade', valor: 'Órgão público não cobra assim' },
        ],
        formula: 'Isca + Gatilho emocional + Ação urgente = GOLPE',
        resultado: 'Reconheceu o padrão? Pare imediatamente.',
        comentario: 'Toda vez que uma mensagem te apressa e te assusta ao mesmo tempo, acenda o alerta máximo.',
      },
      vocabulario: [
        { palavra: 'Golpe (scam)', def: 'Fraude que engana a pessoa pra obter dinheiro, dados ou acesso.' },
        { palavra: 'Vetor de ataque', def: 'O caminho que o golpista usa pra te alcançar: SMS, e-mail, ligação, rede social.' },
        { palavra: 'Mentalidade defensiva', def: 'Desconfiar do roteiro, não da pessoa. Você verifica antes de agir.' },
      ],
      chave: [
        'Golpista convence a pessoa — raramente "hackeia" a máquina',
        'Quase todo golpe segue: alvo → isca → gatilho → ação',
        'Conhecer o roteiro tira o efeito surpresa',
      ],
      porque: 'Esta é a aula que muda sua relação com o celular e o computador. A partir dela, você para de reagir no susto e passa a reconhecer padrões — a habilidade que mais evita prejuízo financeiro e emocional hoje.',
    },
    pratica: {
      instrucao: 'Pegue seu celular e abra suas mensagens (SMS) e o lixo/spam do e-mail. Vamos treinar o olhar.',
      passos: [
        'Abra suas mensagens de SMS dos últimos dias',
        'Procure alguma que crie urgência ("agora", "hoje", "última chance")',
        'Identifique nela as 3 partes: qual é a isca? qual o gatilho emocional? qual a ação pedida?',
        'Abra a pasta de spam do seu e-mail',
        'Escolha um e-mail suspeito e faça a mesma análise das 3 partes',
        'Repare como, vistos por esse raio-X, eles ficam óbvios',
        'NÃO clique em nenhum link dessas mensagens — só observe',
        'Apague as mensagens claramente golpistas',
      ],
    },
    desafio: {
      cenario: 'Encontre 2 mensagens suspeitas (SMS, e-mail ou WhatsApp) que você ou um familiar recebeu e "desmonte" cada uma identificando isca, gatilho e ação.',
      requisitos: [
        'Encontrei 2 mensagens suspeitas reais',
        'Para cada uma, identifiquei a isca',
        'Identifiquei o gatilho emocional usado',
        'Identifiquei a ação que ela queria que eu fizesse',
        'Não cliquei em nenhum link suspeito',
      ],
      dica: 'Salve mentalmente esse raio-X de 3 partes. Daqui pra frente, toda mensagem estranha você vai "desmontar" em segundos, quase sem perceber.',
    },
    validacao: [
      'Entendi que o golpe mira a pessoa, não a máquina',
      'Sei o ciclo: alvo → isca → gatilho → ação',
      'Consigo identificar a isca de uma mensagem',
      'Consigo identificar o gatilho emocional',
      'Adotei a postura de verificar antes de agir',
    ],
  },

  'sec-ataque-2': {
    trilhaId: 'sec-ataque', numero: 2, titulo: 'Engenharia social: a arma número 1',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'A "porta" mais fácil de arrombar não é a senha do banco — é a confiança da pessoa. Isso tem nome: engenharia social. É a técnica por trás da maioria absoluta dos golpes que dão certo.',
      conceito: {
        titulo: 'Hackear gente é mais fácil que hackear sistemas',
        texto: 'Engenharia social é manipular pessoas pra que elas mesmas entreguem informações ou façam ações. Os bancos investem milhões em proteção dos sistemas, então os golpistas atacam o elo mais fácil: a confiança humana. Eles se passam por alguém de confiança (banco, parente, empresa) e exploram sua boa-fé.',
      },
      estrutura: {
        titulo: 'As 4 máscaras mais usadas',
        partes: [
          { simbolo: '🏦', desc: 'Falsa autoridade: "Sou do seu banco / da Receita / da polícia". Você obedece sem questionar.' },
          { simbolo: '👨‍👩‍👧', desc: 'Falso conhecido: "Mãe, é seu filho com número novo". Explora o amor e a preocupação.' },
          { simbolo: '🎁', desc: 'Falsa oferta: "Você ganhou um prêmio / vaga / desconto". Explora a esperança e a ganância.' },
          { simbolo: '🆘', desc: 'Falsa emergência: "Sua conta foi invadida, aja agora". Explora o pânico.' },
        ],
      },
      exemplo: {
        titulo: 'Por que funciona mesmo com gente esperta',
        celulas: [
          { ref: 'Tática', valor: 'Eles te pegam ocupado, cansado, distraído' },
          { ref: 'Tática', valor: 'Usam dados reais seus pra parecer verdade' },
          { ref: 'Tática', valor: 'Criam pressa pra você não verificar' },
          { ref: 'Defesa', valor: 'Desligue. Você liga de volta no canal oficial.' },
        ],
        formula: 'A defesa universal: PARE e verifique pelo canal oficial',
        resultado: 'Nenhuma instituição séria perde nada se você desligar e ligar de volta.',
        comentario: 'Golpista odeia que você verifique. Pessoa de verdade não se importa de esperar você confirmar.',
      },
      vocabulario: [
        { palavra: 'Engenharia social', def: 'Manipular pessoas psicologicamente pra obter dados, dinheiro ou acesso.' },
        { palavra: 'Pretexto', def: 'A história falsa que o golpista inventa pra justificar o pedido ("estou ligando porque...").' },
        { palavra: 'Canal oficial', def: 'O número/site/app verdadeiro da instituição, que VOCÊ procura — nunca o que veio na mensagem.' },
      ],
      chave: [
        'O alvo é sua confiança, não seu equipamento',
        'Eles vestem máscaras: banco, parente, prêmio, emergência',
        'Defesa universal: desligue e verifique pelo canal oficial',
      ],
      porque: 'Mais de 9 em cada 10 fraudes bem-sucedidas usam engenharia social. Entender isso te protege de TODAS elas de uma vez, porque você passa a desconfiar do método, não de cada golpe específico.',
    },
    pratica: {
      instrucao: 'Vamos montar sua "regra de verificação" — um hábito que neutraliza engenharia social. Pegue papel ou as notas do celular.',
      passos: [
        'Anote os canais OFICIAIS que você usa: telefone do seu banco (do verso do cartão), app oficial',
        'Escreva a regra: "Recebi pedido urgente? Eu PARO e ligo no canal oficial."',
        'No celular, salve o telefone oficial do banco com um nome claro: "BANCO OFICIAL"',
        'Combine com um familiar uma palavra-código (pra confirmar identidade em emergências)',
        'Pratique a frase de defesa: "Vou desligar e ligar de volta pelo número oficial."',
        'Liste 3 instituições que nunca pedem senha por telefone: banco, Receita, INSS',
        'Coloque um lembrete visível perto do telefone: "Pressa = pare"',
      ],
    },
    desafio: {
      cenario: 'Crie seu "protocolo anti-engenharia social" e ensine a regra de verificação pra pelo menos uma pessoa da sua família.',
      requisitos: [
        'Salvei os contatos oficiais do meu banco no celular',
        'Defini uma palavra-código com um familiar',
        'Memorizei a frase "vou verificar pelo canal oficial"',
        'Sei listar instituições que NUNCA pedem senha por telefone',
        'Ensinei a regra de verificação pra alguém da família',
      ],
      dica: 'Os parentes mais visados por golpistas costumam ser os mais velhos da família. Ao ensinar a regra, você protege toda a sua rede — vira o "defensor" do grupo.',
    },
    validacao: [
      'Entendi o que é engenharia social',
      'Conheço as 4 máscaras (autoridade, conhecido, oferta, emergência)',
      'Tenho os canais oficiais do meu banco salvos',
      'Combinei uma palavra-código com a família',
      'Sei aplicar a regra de verificar antes de agir',
    ],
  },

  'sec-ataque-3': {
    trilhaId: 'sec-ataque', numero: 3, titulo: 'Os 6 gatilhos que te fazem cair',
    tempoTotal: 11, xp: 80, vertente: 'ambos',
    aula: {
      gancho: 'Por que pessoas inteligentes caem em golpes bobos? Porque o golpe não ataca sua inteligência — ataca suas emoções. Existem 6 gatilhos psicológicos que desligam o pensamento crítico. Conhecê-los é como ganhar imunidade.',
      conceito: {
        titulo: 'Emoção forte desliga a razão',
        texto: 'Quando você sente medo, pressa ou euforia intensos, a parte racional do cérebro perde força e você age no impulso. Golpistas estudam isso. Eles desenham mensagens pra disparar essas emoções de propósito. Reconhecer "estou sendo emocionalmente empurrado" é o sinal mais confiável de que tem golpe na jogada.',
      },
      estrutura: {
        titulo: 'Os 6 gatilhos da manipulação',
        partes: [
          { simbolo: '⏰', desc: 'Urgência: "só hoje", "nos próximos 10 minutos". Tira seu tempo de pensar.' },
          { simbolo: '😱', desc: 'Medo: "sua conta foi invadida", "você será processado". Paralisa e faz obedecer.' },
          { simbolo: '👮', desc: 'Autoridade: finge ser banco, polícia, chefe. Você obedece por respeito/receio.' },
          { simbolo: '💰', desc: 'Ganância: "prêmio", "investimento que rende 30%". A esperança cega o cuidado.' },
        ],
      },
      exemplo: {
        titulo: 'Os outros 2 gatilhos e como soam',
        celulas: [
          { ref: 'Escassez', valor: '"Restam 2 vagas", "últimas unidades"' },
          { ref: 'Prova social', valor: '"Todo mundo já fez", "milhares aderiram"' },
          { ref: 'Combo comum', valor: 'Medo + Urgência (o mais usado)' },
          { ref: 'Defesa', valor: 'Sentiu a emoção subir? É a hora de parar.' },
        ],
        formula: 'Emoção intensa + pressão pra decidir já = sinal de golpe',
        resultado: 'O sentimento é o alarme. Use-o a seu favor.',
        comentario: 'Inverta a lógica: em vez de a emoção te apressar, deixe ela te ALERTAR. "Tô com medo e pressa? Então vou parar."',
      },
      vocabulario: [
        { palavra: 'Gatilho psicológico', def: 'Estímulo que provoca uma reação emocional automática, reduzindo o julgamento.' },
        { palavra: 'Escassez', def: 'A falsa ideia de que algo está acabando, pra te forçar a decidir rápido.' },
        { palavra: 'Prova social', def: 'Usar "todo mundo está fazendo" pra te convencer de que é seguro.' },
      ],
      chave: [
        'Golpe ataca a emoção, não a inteligência',
        'Os 6: urgência, medo, autoridade, ganância, escassez, prova social',
        'Sentiu emoção forte + pressa? Transforme isso em alarme',
      ],
      porque: 'Reconhecer o gatilho no momento em que ele acontece é a diferença entre clicar e parar. Essa autoconsciência emocional é o escudo que funciona mesmo quando o golpe é novo e você nunca viu antes.',
    },
    pratica: {
      instrucao: 'Vamos calibrar seu "alarme emocional". Releia mensagens que você já recebeu.',
      passos: [
        'Pegue 3 mensagens suspeitas (SMS, e-mail ou WhatsApp)',
        'Em cada uma, marque qual(is) dos 6 gatilhos aparece',
        'Repare que golpes fortes empilham 2 ou 3 gatilhos juntos',
        'Pratique perceber a sensação que cada uma provoca em você',
        'Para cada mensagem, escreva qual seria a verificação correta',
        'Treine a frase-freio: "Estou sentindo pressa. Vou parar e checar."',
        'Apague as mensagens golpistas',
      ],
    },
    desafio: {
      cenario: 'Monte um "cartaz dos 6 gatilhos" (no papel ou no celular) e identifique os gatilhos em 3 golpes reais que circulam hoje.',
      requisitos: [
        'Listei os 6 gatilhos de forma que eu lembre',
        'Analisei 3 mensagens reais e marquei os gatilhos de cada',
        'Identifiquei pelo menos um golpe que empilha vários gatilhos',
        'Defini a verificação correta pra cada caso',
        'Memorizei a frase-freio pra usar no susto',
      ],
      dica: 'O combo "medo + urgência" é o mais comum porque é o mais eficaz. Sempre que os dois aparecerem juntos, considere golpe até prova em contrário.',
    },
    validacao: [
      'Conheço os 6 gatilhos psicológicos',
      'Sei identificar gatilhos numa mensagem real',
      'Percebo quando uma mensagem empilha vários gatilhos',
      'Transformo a emoção forte em alarme, não em ação',
      'Tenho uma frase-freio pronta pra usar',
    ],
  },

  'sec-ataque-4': {
    trilhaId: 'sec-ataque', numero: 4, titulo: 'Anatomia de um golpe de phishing',
    tempoTotal: 12, xp: 80, vertente: 'ambos',
    aula: {
      gancho: 'Phishing é o golpe da "isca": uma mensagem que finge ser de uma empresa real pra você morder o anzol e entregar seus dados. Hoje você vai dissecar uma dessas mensagens parte por parte — e nunca mais vai ser fisgado.',
      conceito: {
        titulo: 'Phishing: pescaria de dados',
        texto: 'O nome vem de "fishing" (pescaria). O golpista joga milhares de "iscas" (mensagens falsas de bancos, lojas, Correios) e espera alguém morder. A mensagem imita a aparência real da empresa e leva você a um site falso, idêntico ao verdadeiro, onde você digita senha e dados — que vão direto pro golpista.',
      },
      estrutura: {
        titulo: 'Os 5 sinais que denunciam um phishing',
        partes: [
          { simbolo: '✉️', desc: 'Remetente estranho: o e-mail vem de endereço esquisito (banco@premio-xyz.com em vez do oficial).' },
          { simbolo: '🔗', desc: 'Link disfarçado: o texto diz "banco.com" mas o link real (ao passar o mouse) é outro endereço.' },
          { simbolo: '⚠️', desc: 'Erros e pressa: erros de português, saudação genérica ("Prezado cliente") e urgência.' },
          { simbolo: '🔑', desc: 'Pede o que não deveria: senha completa, código do SMS, foto do cartão. Empresa real nunca pede.' },
        ],
      },
      exemplo: {
        titulo: 'Conferindo o link sem clicar',
        celulas: [
          { ref: 'Texto', valor: 'Diz "acesse www.seubanco.com.br"' },
          { ref: 'No PC', valor: 'Passe o mouse SEM clicar → veja o link real embaixo' },
          { ref: 'No celular', valor: 'Segure o link pressionado → aparece o endereço real' },
          { ref: 'Verdade', valor: 'Link real: seubanco.premios-br.xyz → FALSO' },
        ],
        formula: 'Texto do link ≠ endereço real = phishing',
        resultado: 'O endereço verdadeiro entrega a farsa.',
        comentario: 'Endereços oficiais terminam no domínio da empresa (banco.com.br). Desconfie de finais estranhos como .xyz, .top, ou nomes com a marca no meio (marca-promo.com).',
      },
      vocabulario: [
        { palavra: 'Phishing', def: 'Golpe que finge ser uma empresa confiável pra roubar seus dados, por mensagem ou site falso.' },
        { palavra: 'Domínio', def: 'O endereço-base de um site (ex: banco.com.br). É o que diz se o site é o verdadeiro.' },
        { palavra: 'Site clonado', def: 'Cópia visual idêntica de um site real, feita pra capturar suas senhas.' },
      ],
      chave: [
        'Phishing imita empresas reais pra roubar dados',
        'Confira o link real sem clicar (passe o mouse / segure no celular)',
        'Empresa séria nunca pede senha completa ou código do SMS',
      ],
      porque: 'Phishing é a porta de entrada de golpes que esvaziam contas e clonam identidades. Saber dissecar uma mensagem em 10 segundos é uma das habilidades de segurança mais valiosas que existem — inclusive no trabalho, onde empresas são alvo constante.',
    },
    pratica: {
      instrucao: 'Vamos treinar a verificação de links com segurança. Use o computador se puder (é mais fácil ver o link).',
      passos: [
        'Abra seu e-mail e vá até a pasta de spam',
        'Escolha um e-mail que finge ser de empresa (banco, loja, Correios)',
        'Olhe o endereço do remetente: confere com o domínio oficial da empresa?',
        'SEM clicar, passe o mouse sobre o botão/link e veja o endereço real aparecer no canto',
        'Compare: o endereço real bate com o site oficial da empresa?',
        'Procure sinais: erros de português, saudação genérica, urgência',
        'No celular, pratique segurar o link pressionado pra ver o destino (sem abrir)',
        'Marque o e-mail como spam/phishing e apague',
      ],
    },
    desafio: {
      cenario: 'Analise um e-mail ou SMS suspeito real e produza um "laudo" apontando os 5 sinais de phishing que conseguir identificar nele.',
      requisitos: [
        'Verifiquei o endereço/remetente e comparei com o oficial',
        'Conferi o link real sem clicar nele',
        'Apontei sinais de pressa, erros ou saudação genérica',
        'Verifiquei se a mensagem pede dados que não deveria',
        'Concluí se é phishing e justifiquei',
      ],
      dica: 'Quando tiver QUALQUER dúvida sobre uma mensagem de empresa, não use o link dela. Abra o app oficial ou digite você mesmo o endereço do site no navegador. Assim você nunca cai no site clonado.',
    },
    validacao: [
      'Entendi como funciona o phishing',
      'Sei conferir o remetente de um e-mail',
      'Sei ver o link real sem clicar (PC e celular)',
      'Reconheço os sinais de pressa, erro e pedido indevido',
      'Sei acessar empresas pelo app/site oficial em vez do link',
    ],
  },

  'sec-ataque-5': {
    trilhaId: 'sec-ataque', numero: 5, titulo: 'Como golpistas descobrem seus dados',
    tempoTotal: 11, xp: 80, vertente: 'ambos',
    aula: {
      gancho: '"Mas como ele sabia meu nome e que eu sou cliente desse banco?" Essa pergunta assusta — e a resposta te protege. Golpistas montam seu "retrato" juntando pedaços de informação espalhados. Vamos ver de onde eles tiram, pra você fechar essas portas.',
      conceito: {
        titulo: 'Seus dados estão mais expostos do que você imagina',
        texto: 'Golpistas raramente "descobrem" tudo de uma vez. Eles juntam migalhas: um vazamento de dados de uma loja, seu perfil público numa rede social, uma foto que mostra sua rua. Com esses pedaços, montam uma mensagem que parece verdadeira porque contém dados reais seus. Reduzir o que você expõe diminui muito a munição deles.',
      },
      estrutura: {
        titulo: 'As 4 fontes de informação sobre você',
        partes: [
          { simbolo: '💧', desc: 'Vazamentos: empresas são invadidas e seus dados (CPF, e-mail, telefone) vão parar à venda.' },
          { simbolo: '📱', desc: 'Redes sociais: perfil aberto mostra família, trabalho, rotina, lugares que você frequenta.' },
          { simbolo: '📷', desc: 'Fotos: revelam endereço (placa, fachada), bens, e até localização embutida na imagem.' },
          { simbolo: '🎣', desc: 'Você mesmo: respostas a "promoções" e quizzes ("qual seu nome de rua + pet?") coletam dados.' },
        ],
      },
      exemplo: {
        titulo: 'Como migalhas viram um golpe convincente',
        celulas: [
          { ref: 'Vazamento', valor: 'Nome + CPF + banco' },
          { ref: 'Rede social', valor: 'Nome do filho + cidade' },
          { ref: 'Resultado', valor: '"Sr. João, da agência de Campinas..."' },
          { ref: 'Defesa', valor: 'Dado certo NÃO prova que é legítimo' },
        ],
        formula: 'Eles acertarem seus dados ≠ serem confiáveis',
        resultado: 'Trate todo contato não solicitado com a mesma desconfiança.',
        comentario: 'O erro fatal é pensar "ele sabe meus dados, então é de verdade". Hoje qualquer golpista consegue seus dados básicos. Verifique sempre pelo canal oficial.',
      },
      vocabulario: [
        { palavra: 'Vazamento de dados', def: 'Quando informações de clientes de uma empresa são roubadas e divulgadas/vendidas.' },
        { palavra: 'Pegada digital', def: 'O rastro de informações suas espalhado pela internet (perfis, fotos, cadastros).' },
        { palavra: 'Engenharia de perfil', def: 'Juntar dados de várias fontes pra montar um retrato seu e personalizar o golpe.' },
      ],
      chave: [
        'Golpistas juntam migalhas de várias fontes',
        'Ter seus dados certos NÃO prova que o contato é legítimo',
        'Menos exposição = menos munição pro golpista',
      ],
      porque: 'Quando você entende que seus dados básicos já circulam por aí, para de cair no truque do "ele sabe meu nome, deve ser verdade". E reduzir sua exposição protege também sua família, suas finanças e sua casa.',
    },
    pratica: {
      instrucao: 'Vamos reduzir sua exposição. Pegue o celular e abra suas redes sociais.',
      passos: [
        'Abra seu Facebook/Instagram e veja seu perfil como um estranho veria (perfil público)',
        'Verifique: dá pra ver onde você mora, trabalha, ou nomes da família?',
        'Ajuste a privacidade pra "amigos" em vez de "público" nas publicações',
        'Apague ou esconda informações sensíveis (telefone, endereço, data de nascimento completa)',
        'Pense duas vezes antes de postar fotos que mostram sua rua/fachada em tempo real',
        'Evite participar de quizzes do tipo "seu nome de elfo é a rua onde nasceu + seu pet"',
        'No Google, pesquise seu próprio nome pra ver o que aparece sobre você',
      ],
    },
    desafio: {
      cenario: 'Faça uma "faxina de exposição": revise a privacidade das suas redes e reduza os dados pessoais visíveis publicamente.',
      requisitos: [
        'Verifiquei como meu perfil aparece pra estranhos',
        'Ajustei publicações pra não-públicas onde fazia sentido',
        'Removi/escondi pelo menos um dado sensível exposto',
        'Pesquisei meu nome no Google pra ver minha exposição',
        'Entendi que dados certos não provam legitimidade de um contato',
      ],
      dica: 'Você não precisa sumir da internet — só fechar as janelas mais óbvias. E lembre: a regra de ouro continua sendo verificar pelo canal oficial, porque algum dado seu sempre vai estar por aí.',
    },
    validacao: [
      'Entendi as 4 fontes de dados sobre mim',
      'Sei que ter meus dados não prova que o contato é real',
      'Revisei a privacidade das minhas redes sociais',
      'Reduzi informações sensíveis expostas',
      'Pesquisei minha própria pegada digital',
    ],
  },

  'sec-ataque-6': {
    trilhaId: 'sec-ataque', numero: 6, titulo: 'O golpe do falso suporte',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Tocou o telefone: "Olá, somos do suporte técnico, detectamos um problema no seu computador/conta". Esse é um dos golpes mais perigosos, porque o golpista se oferece pra "ajudar" — e a ajuda é a armadilha.',
      conceito: {
        titulo: 'Quando "te ajudar" é o disfarce',
        texto: 'No golpe do falso suporte, o criminoso finge ser técnico de uma empresa (banco, Microsoft, operadora) e diz que há um problema. Ele se oferece pra resolver, mas pra isso pede que você instale um programa de acesso remoto, informe códigos, ou faça um PIX "de teste". Na verdade, ele está assumindo o controle ou drenando sua conta enquanto você acha que está sendo socorrido.',
      },
      estrutura: {
        titulo: 'O roteiro do falso suporte',
        partes: [
          { simbolo: '☎️', desc: 'Contato não solicitado: liga/manda mensagem dizendo que detectou um problema que você não relatou.' },
          { simbolo: '🖥️', desc: 'Pede acesso: manda instalar app de acesso remoto (AnyDesk, TeamViewer) pra "consertar".' },
          { simbolo: '🔢', desc: 'Pede códigos: o código do SMS, a senha, ou pra você ler o que aparece na tela do banco.' },
          { simbolo: '💸', desc: 'Pede ação financeira: "faça um PIX de teste" ou "transfira pra conta segura". Nunca é real.' },
        ],
      },
      exemplo: {
        titulo: 'O que o suporte de verdade NUNCA faz',
        celulas: [
          { ref: 'Nunca', valor: 'Liga do nada dizendo que SUA conta tem problema' },
          { ref: 'Nunca', valor: 'Pede pra instalar app de acesso remoto' },
          { ref: 'Nunca', valor: 'Pede senha, código do SMS ou PIX "de teste"' },
          { ref: 'Defesa', valor: 'Desligue. Procure o suporte VOCÊ, pelo canal oficial.' },
        ],
        formula: 'Suporte de verdade espera VOCÊ procurar — não o contrário',
        resultado: 'Contato de suporte não solicitado = golpe quase sempre.',
        comentario: 'Acesso remoto entrega seu computador inteiro. Jamais instale a pedido de quem ligou pra você. Se foi VOCÊ que procurou um técnico de confiança, é diferente.',
      },
      vocabulario: [
        { palavra: 'Acesso remoto', def: 'Programa que deixa outra pessoa controlar seu computador/celular pela internet.' },
        { palavra: 'Conta segura/cofre', def: 'Mentira clássica: não existe. É a conta do próprio golpista.' },
        { palavra: 'Contato não solicitado', def: 'Quando ELES te procuram, sem você ter pedido. O maior sinal de alerta.' },
      ],
      chave: [
        'Suporte de verdade não liga do nada pra resolver "seu" problema',
        'Nunca instale acesso remoto a pedido de quem te contatou',
        'Senha, código do SMS e "PIX de teste" = entregar tudo',
      ],
      porque: 'O golpe do falso suporte causa prejuízos enormes porque dá ao criminoso acesso total. Reconhecer o roteiro logo na primeira frase ("detectamos um problema") te faz desligar antes de qualquer dano.',
    },
    pratica: {
      instrucao: 'Vamos preparar suas defesas pra esse golpe específico. Pegue o celular.',
      passos: [
        'Verifique se há apps de acesso remoto instalados que você não reconhece (AnyDesk, TeamViewer, etc.)',
        'Se achar algum que não foi você quem instalou, desinstale',
        'Salve a frase de defesa: "Não instalo nada e não passo códigos. Vou procurar o suporte oficial."',
        'Anote os canais oficiais de suporte do seu banco e da sua operadora',
        'Ensaie desligar educadamente: "Obrigado, vou verificar por conta própria. Tchau."',
        'Combine com a família: ninguém instala app ou faz PIX a pedido de ligação',
        'Lembre-se: nem o banco, nem a Microsoft, nem a operadora ligam pra "consertar" sua conta',
      ],
    },
    desafio: {
      cenario: 'Crie um plano de resposta para o golpe do falso suporte e revise seu celular/computador em busca de apps de acesso remoto indevidos.',
      requisitos: [
        'Verifiquei apps de acesso remoto no celular e/ou PC',
        'Removi qualquer app de acesso remoto que eu não reconheço',
        'Tenho uma frase pronta pra encerrar a ligação',
        'Anotei os canais oficiais de suporte que uso',
        'Combinei com a família a regra de não instalar/pagar a pedido de ligação',
      ],
      dica: 'Se um técnico legítimo (que VOCÊ contratou) precisar de acesso remoto, tudo bem. A regra vale pra contato não solicitado: quem liga PRA você oferecendo ajuda que você não pediu.',
    },
    validacao: [
      'Reconheço o roteiro do falso suporte',
      'Sei que suporte real não faz contato não solicitado',
      'Nunca instalo acesso remoto a pedido de quem me liga',
      'Tenho uma frase pronta pra encerrar a ligação',
      'Verifiquei apps de acesso remoto no meu aparelho',
    ],
  },

  'sec-ataque-7': {
    trilhaId: 'sec-ataque', numero: 7, titulo: 'Fraudes com IA: voz e vídeo falsos',
    tempoTotal: 11, xp: 90, vertente: 'ambos',
    aula: {
      gancho: 'Você atende e é a voz do seu filho, aflito, pedindo dinheiro. Só que não é ele — é a voz dele clonada por inteligência artificial. Essa é a fronteira nova dos golpes, e quem não sabe que existe é o mais vulnerável.',
      conceito: {
        titulo: 'A IA tornou a falsificação barata e convincente',
        texto: 'Hoje, com poucos segundos de áudio (tirado de um vídeo no Instagram, por exemplo), golpistas conseguem clonar a voz de alguém. O mesmo vale pra vídeo (deepfake). Eles usam isso pra dar credibilidade ao velho golpe do parente em apuros ou pra imitar chefes e autoridades. A defesa não é técnica — é ter um combinado prévio que a IA não consegue adivinhar.',
      },
      estrutura: {
        titulo: 'Como reconhecer e se defender',
        partes: [
          { simbolo: '🎙️', desc: 'Voz clonada: parece a pessoa, mas o roteiro é sempre urgência + dinheiro + "não conta pra ninguém".' },
          { simbolo: '🎭', desc: 'Vídeo falso (deepfake): rosto conhecido falando algo estranho. Repare em piscadas, boca e bordas do rosto.' },
          { simbolo: '🔑', desc: 'Defesa nº1 — palavra-código: combine uma palavra secreta com a família. A IA não conhece.' },
          { simbolo: '📞', desc: 'Defesa nº2 — desligue e ligue de volta no número que você já tem salvo da pessoa.' },
        ],
      },
      exemplo: {
        titulo: 'O combinado que derruba a IA',
        celulas: [
          { ref: 'Golpe', valor: 'Voz do filho: "mãe, preciso de dinheiro urgente"' },
          { ref: 'Você', valor: '"Qual é a nossa palavra-código?"' },
          { ref: 'Golpe', valor: 'Não sabe responder / desconversa' },
          { ref: 'Verdade', valor: 'Filho de verdade sabe a palavra na hora' },
        ],
        formula: 'Palavra-código + ligar de volta = imune à voz clonada',
        resultado: 'Nenhuma IA adivinha um segredo combinado entre vocês.',
        comentario: 'Combine hoje uma palavra-código com filhos, pais e cônjuge. É a defesa mais simples e mais poderosa contra fraudes de IA.',
      },
      vocabulario: [
        { palavra: 'Deepfake', def: 'Vídeo ou áudio falso, criado por IA, que imita a aparência ou a voz de uma pessoa real.' },
        { palavra: 'Clonagem de voz', def: 'Recriar a voz de alguém com IA, a partir de poucos segundos de gravação.' },
        { palavra: 'Palavra-código', def: 'Segredo combinado entre pessoas de confiança pra confirmar identidade em emergências.' },
      ],
      chave: [
        'IA já clona voz e vídeo de forma convincente',
        'A defesa não é técnica: é palavra-código + ligar de volta',
        'Urgência + dinheiro + sigilo = sinal clássico, mesmo com voz conhecida',
      ],
      porque: 'Fraudes com IA crescem rápido e atingem em cheio quem nem sabe que isso é possível. Sair daqui sabendo que existe — e com uma palavra-código combinada — coloca você e sua família anos à frente da maioria das vítimas.',
    },
    pratica: {
      instrucao: 'Vamos montar a defesa que funciona. Reúna (mentalmente ou por mensagem) sua família.',
      passos: [
        'Escolha uma palavra-código simples, mas que só a família saiba (evite nomes óbvios)',
        'Combine essa palavra com filhos, pais, cônjuge — pessoalmente ou por ligação (não por mensagem que pode vazar)',
        'Defina a regra: "Pedido urgente de dinheiro? Pergunte a palavra-código."',
        'Confirme que você tem o número real de cada familiar salvo no celular',
        'Combine também: na dúvida, desligar e ligar de volta no número salvo',
        'Explique a um familiar mais velho como funciona a clonagem de voz',
        'Reforce: golpista pede sigilo ("não conta pra ninguém") — isso é parte do golpe',
      ],
    },
    desafio: {
      cenario: 'Estabeleça uma palavra-código com sua família e explique a pelo menos um parente como funciona a fraude de voz por IA.',
      requisitos: [
        'Defini uma palavra-código com a família',
        'Combinei a palavra por canal seguro (pessoalmente ou ligação)',
        'Confirmei que tenho os números reais dos familiares salvos',
        'Expliquei a um parente como funciona a clonagem de voz',
        'Combinamos a regra de desligar e ligar de volta',
      ],
      dica: 'Quanto mais áudios e vídeos seus circulam publicamente, mais material a IA tem pra clonar. Vale revisar a privacidade dos seus vídeos nas redes (conecta com a missão sobre exposição de dados).',
    },
    validacao: [
      'Sei que IA já clona voz e vídeo de forma convincente',
      'Combinei uma palavra-código com a família',
      'Tenho os números reais dos familiares salvos',
      'Sei a regra de desligar e ligar de volta',
      'Expliquei o golpe de voz por IA pra um parente',
    ],
  },

  'sec-ataque-8': {
    trilhaId: 'sec-ataque', numero: 8, titulo: 'Simulado: você consegue não cair?',
    tempoTotal: 12, xp: 90, vertente: 'ambos',
    aula: {
      gancho: 'Teoria você já tem. Agora vem o teste de fogo: 5 situações reais, uma de cada vez. Em cada uma, decida — é golpe ou é legítimo? E o mais importante: qual a ação certa?',
      conceito: {
        titulo: 'Treino salva no momento real',
        texto: 'Saber a teoria é diferente de reagir certo no susto. Por isso pilotos treinam em simuladores. Aqui é igual: ao "viver" os golpes num ambiente seguro, sua reação correta vira reflexo. Quando o golpe real chegar, seu cérebro já vai ter o caminho pronto.',
      },
      estrutura: {
        titulo: 'Os 5 casos do simulado',
        partes: [
          { simbolo: '1', desc: 'SMS: "Sua encomenda está retida. Pague a taxa em: [link]". Golpe ou real?' },
          { simbolo: '2', desc: 'Ligação: "Aqui é do seu banco, confirme o código que enviei por SMS." Golpe ou real?' },
          { simbolo: '3', desc: 'WhatsApp de número novo: "Pai, troquei de celular, salva aqui. Preciso de um PIX." Golpe ou real?' },
        ],
      },
      exemplo: {
        titulo: 'Os 2 casos finais e o gabarito',
        celulas: [
          { ref: 'Caso 4', valor: '"Você ganhou R$ 5 mil! Clique e cadastre seus dados."' },
          { ref: 'Caso 5', valor: 'E-mail do "RH": "Atualize seus dados bancários por este link."' },
          { ref: 'Gabarito', valor: 'TODOS os 5 são golpe' },
          { ref: 'Lição', valor: 'O padrão se repete: isca + gatilho + ação urgente' },
        ],
        formula: 'A ação certa nunca é o link/pedido — é verificar pelo canal oficial',
        resultado: 'Acertou os 5? Você está blindado. Errou algum? Releia a missão dele.',
        comentario: 'Em todos: a defesa é a mesma. Não clique, não informe, não pague. Vá ao canal oficial por conta própria.',
      },
      vocabulario: [
        { palavra: 'Simulado', def: 'Treino com casos realistas, em ambiente seguro, pra preparar a reação correta.' },
        { palavra: 'Reflexo de segurança', def: 'A reação automática (parar e verificar) que o treino transforma em hábito.' },
        { palavra: 'Falso positivo', def: 'Achar que é golpe quando é legítimo. Mesmo aí, verificar pelo canal oficial não causa dano.' },
      ],
      chave: [
        'Treinar transforma teoria em reflexo',
        'Os 5 casos são golpe — o padrão sempre se repete',
        'A ação certa é sempre verificar pelo canal oficial',
      ],
      porque: 'O momento do golpe real é de pressão e susto. Quem treinou reage no automático e não cai. Este simulado é a diferença entre "eu sabia, mas no susto cliquei" e "reconheci na hora e parei".',
    },
    pratica: {
      instrucao: 'Faça o simulado com honestidade. Para cada caso, decida: golpe ou real? E qual a ação certa? Anote suas respostas antes de ver o gabarito.',
      passos: [
        'Caso 1 (encomenda retida): sua decisão e sua ação?',
        'Caso 2 (banco pedindo código do SMS): sua decisão e sua ação?',
        'Caso 3 (filho com número novo pedindo PIX): sua decisão e sua ação?',
        'Caso 4 (você ganhou R$ 5 mil): sua decisão e sua ação?',
        'Caso 5 (RH pedindo dados bancários por link): sua decisão e sua ação?',
        'Agora confira: todos os 5 são golpe',
        'Para cada um que você errou, releia a missão correspondente da trilha',
        'Refaça mentalmente cada caso até a resposta certa virar automática',
      ],
    },
    desafio: {
      cenario: 'Aplique o simulado em alguém da sua família (filho, pai, cônjuge) e veja como a pessoa reage. Depois, ensine a resposta certa.',
      requisitos: [
        'Respondi os 5 casos antes de ver o gabarito',
        'Identifiquei corretamente que todos são golpe',
        'Para cada caso, sei dizer a ação correta (verificar pelo canal oficial)',
        'Apliquei pelo menos 2 casos em um familiar',
        'Ensinei a resposta certa pra quem errou',
      ],
      dica: 'Repita esse simulado de tempos em tempos com a família, especialmente com os mais velhos. Segurança é treino contínuo, não aula única.',
    },
    validacao: [
      'Respondi os 5 casos do simulado',
      'Reconheci que todos são golpe',
      'Sei a ação correta para cada situação',
      'Apliquei o simulado em um familiar',
      'Minha reação de "parar e verificar" virou reflexo',
    ],
  },

  'sec-ataque-9': {
    trilhaId: 'sec-ataque', numero: 9, titulo: 'Projeto: vire o defensor da família',
    tempoTotal: 18, xp: 120, vertente: 'ambos',
    aula: {
      gancho: 'Você aprendeu a se proteger. Agora vem o papel mais valioso: virar o ponto de segurança da sua família. Golpistas miram quem está sozinho e desinformado — uma família que conversa sobre golpes é uma família blindada.',
      conceito: {
        titulo: 'Segurança é um esporte coletivo',
        texto: 'De nada adianta você estar protegido se um parente cair num golpe e expor a todos, ou perder as economias da família. Os criminosos exploram justamente o isolamento: a pessoa que não tem com quem confirmar uma mensagem suspeita. Ao criar uma cultura de "pergunta antes de agir" na família, você multiplica sua proteção por todos.',
      },
      estrutura: {
        titulo: 'Os 4 pilares do plano de defesa familiar',
        partes: [
          { simbolo: '🔑', desc: 'Palavra-código combinada com todos, pra emergências (anti voz clonada).' },
          { simbolo: '☎️', desc: 'Regra do "desligue e ligue de volta" pelo canal/número oficial, sem exceção.' },
          { simbolo: '👥', desc: 'Um grupo ou contato de confiança pra perguntar "isso é golpe?" antes de agir.' },
          { simbolo: '🛡️', desc: 'Defesas técnicas em dia: 2FA ativado, senhas fortes, limites de PIX configurados.' },
        ],
      },
      exemplo: {
        titulo: 'O que entregar neste projeto',
        celulas: [
          { ref: 'Reunião', valor: 'Conversa de 20 min com a família sobre golpes' },
          { ref: 'Combinados', valor: 'Palavra-código + regra de verificação' },
          { ref: 'Checklist', valor: 'Cada um revisa 2FA e limites' },
          { ref: 'Resultado', valor: 'Família alinhada e muito mais segura' },
        ],
        formula: 'Conversa + combinados + checklist = família blindada',
        resultado: 'Este é o projeto que pode evitar o maior prejuízo da sua vida.',
        comentario: 'Guarde um resumo do combinado num grupo de família ou num papel na geladeira. Acessível na hora do susto.',
      },
      vocabulario: [
        { palavra: 'Cultura de segurança', def: 'Hábito coletivo de verificar antes de agir, conversar sobre golpes e se proteger junto.' },
        { palavra: 'Ponto de verificação', def: 'A pessoa de confiança a quem todos recorrem pra confirmar se algo é golpe.' },
        { palavra: 'Plano de resposta', def: 'O combinado de o que fazer (e não fazer) quando um golpe chega.' },
      ],
      chave: [
        'Golpistas exploram o isolamento — família que conversa é blindada',
        'Os 4 pilares: palavra-código, ligar de volta, ponto de verificação, defesas técnicas',
        'Ensinar é a forma mais alta de dominar o assunto',
      ],
      porque: 'Concluir esta trilha como o "defensor da família" é o ápice do módulo de segurança. Você protege patrimônio, evita sofrimento e se torna referência — exatamente a postura que também é valorizada no ambiente de trabalho.',
    },
    pratica: {
      instrucao: 'Reserve um momento com a família (presencial ou por chamada de vídeo). Use os 4 pilares como roteiro.',
      passos: [
        'Marque uma conversa de ~20 minutos com a família sobre segurança digital',
        'Explique, com suas palavras, o ciclo do golpe (isca → gatilho → ação)',
        'Combinem juntos a palavra-código pra emergências',
        'Combinem a regra: pedido urgente = desligar e ligar de volta no número oficial',
        'Definam quem é o "ponto de verificação" (provavelmente você) pra tirar dúvidas',
        'Ajude cada um a ativar 2FA nas contas principais e revisar limites de PIX',
        'Deixe um resumo do combinado num grupo de família ou num papel visível',
      ],
    },
    desafio: {
      cenario: 'Conduza uma conversa de segurança com sua família e implemente os 4 pilares de proteção coletiva. Este é o projeto final da trilha.',
      requisitos: [
        'Conversei sobre golpes com pelo menos 2 familiares',
        'Combinamos uma palavra-código',
        'Estabelecemos a regra de verificação (ligar de volta no oficial)',
        'Definimos um ponto de verificação na família',
        'Ajudei alguém a ativar 2FA ou revisar limites de PIX',
        'Deixei o combinado registrado e acessível pra todos',
      ],
      dica: 'Repita essa conversa a cada poucos meses, porque os golpes evoluem. E celebre: ao terminar esta trilha, você não só se protegeu — protegeu todo mundo que você ama.',
    },
    validacao: [
      'Conversei sobre segurança com a família',
      'Combinamos palavra-código e regra de verificação',
      'Definimos um ponto de verificação',
      'Ajudei um familiar com 2FA ou limites de PIX',
      'Registrei o combinado de forma acessível',
      'Me sinto capaz de ser o defensor digital da família',
    ],
  },
};
