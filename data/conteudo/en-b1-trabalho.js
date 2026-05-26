// ============================================================================
// CONTEÚDO — Inglês B1: Inglês para o Trabalho (en-b1-trabalho)
// Vocabulário profissional, CV/resume, entrevista, e-mails, reuniões/small talk.
// Conecta com o módulo Mercado & Especialização.
// ============================================================================

export const EN_B1_TRABALHO = {
  'en-b1-trabalho-1': {
    trilhaId: 'en-b1-trabalho', numero: 1, titulo: 'Vocabulário do trabalho',
    tempoTotal: 10, xp: 70, vertente: 'ingles',
    aula: {
      gancho: 'Inglês no currículo é um diferencial enorme no mercado — e abre vagas melhores. Começa pelo vocabulário profissional básico: cargo, habilidades, experiência, prazo. As palavras que aparecem em toda vaga internacional.',
      conceito: {
        titulo: 'As palavras do mundo do trabalho',
        texto: 'O inglês profissional tem um vocabulário-núcleo que se repete em vagas, currículos e e-mails: job (emprego), skills (habilidades), experience (experiência), deadline (prazo), meeting (reunião), team (equipe). Conhecer esse vocabulário é a base pra ler vagas em inglês, montar um currículo e participar do ambiente profissional internacional — que cada vez mais usa inglês.',
      },
      estrutura: {
        titulo: 'Vocabulário-núcleo',
        partes: [
          { simbolo: '💼', desc: 'job (emprego), position/role (cargo), company (empresa), salary (salário).' },
          { simbolo: '🧰', desc: 'skills (habilidades), experience (experiência), background (formação/trajetória).' },
          { simbolo: '⏰', desc: 'deadline (prazo), task (tarefa), project (projeto), goal (meta).' },
          { simbolo: '👥', desc: 'team (equipe), manager/boss (chefe), colleague (colega), client (cliente).' },
        ],
      },
      exemplo: {
        titulo: 'Vocabulário em contexto',
        celulas: [
          { ref: 'EN', valor: 'I have experience in sales. — Tenho experiência em vendas.' },
          { ref: 'EN', valor: 'My main skills are... — Minhas principais habilidades são...' },
          { ref: 'EN', valor: 'The deadline is Friday. — O prazo é sexta.' },
          { ref: 'EN', valor: 'I work in a team. — Trabalho em equipe.' },
        ],
        formula: 'vocabulário-núcleo: job, skills, experience, deadline, team...',
        resultado: 'Você lê vagas e fala do seu trabalho em inglês.',
        comentario: 'Falsos amigos do trabalho: "actually" = na verdade (não "atualmente" — esse é "currently"); "pretend" = fingir (não "pretender" — esse é "intend"). Atenção a eles!',
      },
      vocabulario: [
        { palavra: 'skills / experience', def: 'habilidades / experiência (skíls / ekspíriens).' },
        { palavra: 'deadline', def: 'prazo final (déd-lain).' },
        { palavra: 'currently / actually', def: 'atualmente / na verdade (falsos amigos!).' },
      ],
      chave: [
        'Vocabulário-núcleo: job, skills, experience, deadline, team',
        'Cuidado com falsos amigos (actually = na verdade)',
        'Esse vocabulário abre vagas e currículos internacionais',
      ],
      porque: 'Inglês profissional é um dos maiores diferenciais no mercado — abre vagas melhores e salários maiores. Esse vocabulário-núcleo é a base pro currículo, entrevista e e-mails em inglês.',
    },
    pratica: {
      instrucao: 'Pense na sua área de trabalho. Vamos usar o vocabulário, em voz alta.',
      passos: [
        'Diga sua área/cargo: "I work in..." / "I’m a..."',
        'Diga sua experiência: "I have experience in..."',
        'Diga 2 habilidades suas: "My skills are..."',
        'Use palavras-chave: deadline, team, project, client',
        'Cuidado com falsos amigos: actually (na verdade), currently (atualmente)',
        'Monte 3 frases sobre seu trabalho',
        'Repita o vocabulário-núcleo',
      ],
    },
    desafio: {
      cenario: 'Fale sobre seu trabalho/área em inglês usando o vocabulário-núcleo: cargo, experiência, habilidades e rotina.',
      requisitos: [
        'Usei job/position e company',
        'Usei skills e experience',
        'Usei palavras como deadline, team, project',
        'Evitei falsos amigos (actually ≠ atualmente)',
        'Pratiquei em voz alta',
      ],
      dica: 'Foque no vocabulário da SUA área primeiro (vendas, saúde, administração...). Saber falar do que VOCÊ faz é mais útil que decorar termos genéricos que você não usa.',
    },
    validacao: [
      'Conheço o vocabulário-núcleo do trabalho',
      'Falo da minha experiência e habilidades',
      'Sei termos como deadline, team, project',
      'Conheço falsos amigos comuns',
      'Pratiquei em voz alta',
    ],
  },

  'en-b1-trabalho-2': {
    trilhaId: 'en-b1-trabalho', numero: 2, titulo: 'Currículo (CV/resume) em inglês',
    tempoTotal: 13, xp: 90, vertente: 'ingles',
    aula: {
      gancho: 'Um currículo em inglês abre portas pra vagas internacionais e remotas — muitas pagando em dólar. Saber a estrutura e as frases de impacto certas faz seu CV se destacar na pilha.',
      conceito: {
        titulo: 'A estrutura de um CV em inglês',
        texto: 'O currículo em inglês (CV no Reino Unido, resume nos EUA) segue uma estrutura reconhecível: dados de contato, um resumo (professional summary), experiência (work experience), formação (education) e habilidades (skills). O segredo são os "action verbs" no passado pra descrever conquistas: "managed" (gerenciei), "developed" (desenvolvi), "improved" (melhorei). Eles dão força e impacto.',
      },
      estrutura: {
        titulo: 'As seções e os verbos de impacto',
        partes: [
          { simbolo: '📋', desc: 'Seções: Contact · Summary · Work Experience · Education · Skills.' },
          { simbolo: '💪', desc: 'Action verbs (passado): managed, developed, created, improved, led.' },
          { simbolo: '📈', desc: 'Mostre resultados: "Improved sales by 20%" (melhorei vendas em 20%).' },
          { simbolo: '✂️', desc: 'Enxuto: 1-2 páginas, sem foto (na maioria dos países), sem dados pessoais demais.' },
        ],
      },
      exemplo: {
        titulo: 'Frases de impacto pro CV',
        celulas: [
          { ref: 'Summary', valor: 'Administrative assistant with 10 years of experience.' },
          { ref: 'Verbo', valor: 'Managed a team of 5 people. — Gerenciei uma equipe de 5.' },
          { ref: 'Resultado', valor: 'Improved customer satisfaction. — Melhorei a satisfação dos clientes.' },
          { ref: 'Skills', valor: 'Skills: Excel, customer service, organization.' },
        ],
        formula: 'seções + action verbs no passado + resultados concretos',
        resultado: 'Um CV em inglês que se destaca.',
        comentario: 'Conecta com o módulo Mercado (trilha de currículo): a estrutura é a mesma, só muda o idioma. Use action verbs fortes (managed, developed, improved) — eles fazem seu CV soar profissional e ativo.',
      },
      vocabulario: [
        { palavra: 'CV / resume', def: 'currículo (CV britânico / resume americano).' },
        { palavra: 'action verbs', def: 'verbos de impacto no passado: managed, developed, improved.' },
        { palavra: 'work experience', def: 'experiência profissional.' },
      ],
      chave: [
        'Seções: Contact, Summary, Experience, Education, Skills',
        'Use action verbs no passado (managed, improved)',
        'Mostre resultados concretos; mantenha enxuto (1-2 págs)',
      ],
      porque: 'Um CV em inglês destrava vagas internacionais, remotas e em multinacionais — frequentemente com salários muito melhores. É um dos maiores retornos práticos de aprender inglês pro trabalho.',
    },
    pratica: {
      instrucao: 'Pegue seu currículo (ou o do módulo Mercado). Vamos traduzir/adaptar os pontos-chave pro inglês.',
      passos: [
        'Escreva um summary: "[Cargo] with [X] years of experience in [área]"',
        'Liste sua experiência usando action verbs no passado (managed, worked, helped)',
        'Adicione um resultado concreto ("improved...", "increased...")',
        'Liste suas skills em inglês (Excel, customer service...)',
        'Adicione a formação (Education)',
        'Revise: está enxuto e com verbos de impacto?',
        'Leia em voz alta pra praticar a pronúncia dos termos',
      ],
    },
    desafio: {
      cenario: 'Monte as seções principais do seu currículo em inglês: summary, experiência (com action verbs) e skills.',
      requisitos: [
        'Escrevi um professional summary',
        'Descrevi experiência com action verbs no passado',
        'Incluí pelo menos um resultado concreto',
        'Listei minhas skills em inglês',
        'Mantive enxuto e profissional',
      ],
      dica: 'Junte com a trilha de currículo do módulo Mercado: você já tem o conteúdo, aqui é a versão em inglês. Use a IA pra revisar ("review my English CV summary, keep it professional").',
    },
    validacao: [
      'Sei a estrutura do CV em inglês',
      'Uso action verbs no passado',
      'Mostro resultados concretos',
      'Listo skills em inglês',
      'Mantenho o CV enxuto',
    ],
  },

  'en-b1-trabalho-3': {
    trilhaId: 'en-b1-trabalho', numero: 3, titulo: 'Entrevista de emprego em inglês',
    tempoTotal: 13, xp: 90, vertente: 'ingles',
    aula: {
      gancho: '"Tell me about yourself" — a primeira pergunta de quase toda entrevista em inglês. Saber responder as perguntas clássicas com confiança pode ser a diferença entre conseguir (ou não) uma vaga internacional.',
      conceito: {
        titulo: 'As perguntas clássicas e como responder',
        texto: 'Entrevistas em inglês têm perguntas previsíveis: "Tell me about yourself", "What are your strengths/weaknesses?", "Why do you want this job?". Preparar boas respostas — usando o present perfect (experiências), action verbs e exemplos concretos — te dá confiança. A estrutura S-A-R (Situation-Action-Result) que você viu no módulo Mercado funciona igual, agora em inglês.',
      },
      estrutura: {
        titulo: 'As perguntas que sempre caem',
        partes: [
          { simbolo: '🗣️', desc: '"Tell me about yourself" → use seu pitch (presente + experiência).' },
          { simbolo: '💪', desc: '"What are your strengths?" → forças + exemplo ("I’m good at...").' },
          { simbolo: '⚖️', desc: '"Your weaknesses?" → uma real + como você lida com ela.' },
          { simbolo: '🎯', desc: '"Why this job?" → mostre que pesquisou e conecte ao seu objetivo.' },
        ],
      },
      exemplo: {
        titulo: 'Respondendo com estrutura',
        celulas: [
          { ref: 'Sobre você', valor: 'I’m an administrative assistant with 10 years of experience.' },
          { ref: 'Forças', valor: 'I’m good at organization and I work well in a team.' },
          { ref: 'Experiência', valor: 'I have managed schedules and improved processes.' },
          { ref: 'Por quê', valor: 'I’d love to work here because... — Eu adoraria... porque...' },
        ],
        formula: 'pergunta clássica → resposta com experiência (perfect) + exemplo',
        resultado: 'Você responde entrevistas em inglês com confiança.',
        comentario: 'Pra "tell me about yourself", não conte sua vida — fale do profissional: presente ("I’m a..."), experiência ("I have..."), e o que busca. Prepare e ENSAIE — entrevista se ganha no preparo, em qualquer idioma.',
      },
      vocabulario: [
        { palavra: 'strengths / weaknesses', def: 'pontos fortes / fracos (strengths / uíknesses).' },
        { palavra: "I'm good at...", def: 'Sou bom em... (+ verbo-ing ou substantivo).' },
        { palavra: 'I’d love to...', def: 'Eu adoraria... (forma educada e entusiasmada).' },
      ],
      chave: [
        'Prepare as perguntas clássicas (about yourself, strengths, why)',
        'Use present perfect + exemplos concretos (S-A-R)',
        'Ensaie em voz alta — preparo vence nervosismo',
      ],
      porque: 'A entrevista é o último passo pra a vaga. Responder com confiança em inglês abre portas pra vagas internacionais e remotas — e a preparação faz toda a diferença, como no módulo Mercado.',
    },
    pratica: {
      instrucao: 'Vamos preparar suas respostas, em voz alta (use seu pitch e CV das missões anteriores).',
      passos: [
        'Responda "Tell me about yourself" (presente + experiência + objetivo)',
        'Responda "What are your strengths?" com "I’m good at..." + exemplo',
        'Responda "What are your weaknesses?" (uma real + como você lida)',
        'Responda "Why do you want this job?" (conecte ao seu objetivo)',
        'Use present perfect: "I have worked/managed/helped..."',
        'Ensaie cada resposta em voz alta, devagar',
        'Grave as respostas e ouça',
      ],
    },
    desafio: {
      cenario: 'Prepare e grave suas respostas em inglês pras 4 perguntas clássicas de entrevista, com exemplos concretos.',
      requisitos: [
        'Respondi "Tell me about yourself"',
        'Falei meus pontos fortes com exemplo',
        'Falei um ponto fraco com solução',
        'Expliquei por que quero a vaga',
        'Usei present perfect e ensaiei em voz alta',
      ],
      dica: 'Use a IA como entrevistadora em inglês: "Act as an interviewer. Ask me common job interview questions in English, one at a time, and give feedback." Treino seguro e realista, a qualquer hora.',
    },
    validacao: [
      'Sei responder "Tell me about yourself"',
      'Sei falar forças e fraquezas',
      'Sei dizer por que quero a vaga',
      'Uso present perfect e exemplos',
      'Ensaiei em voz alta',
    ],
  },

  'en-b1-trabalho-4': {
    trilhaId: 'en-b1-trabalho', numero: 4, titulo: 'E-mails profissionais em inglês',
    tempoTotal: 12, xp: 80, vertente: 'ingles',
    aula: {
      gancho: 'Mandar um e-mail profissional em inglês — pra um cliente, chefe ou recrutador no exterior — exige tom e frases certas. Algumas fórmulas prontas resolvem 90% das situações.',
      conceito: {
        titulo: 'As fórmulas do e-mail profissional',
        texto: 'E-mails profissionais em inglês têm fórmulas-padrão pra cada parte: saudação ("Dear..."/"Hello..."), abertura ("I’m writing to..."), pedido ("Could you please...?"), e fecho ("Best regards,"). O tom é educado e direto. Dominar essas fórmulas te permite escrever e-mails profissionais em inglês com segurança — uma habilidade muito valorizada.',
      },
      estrutura: {
        titulo: 'As partes do e-mail',
        partes: [
          { simbolo: '👋', desc: 'Saudação: "Dear Mr/Ms [sobrenome]," (formal) / "Hello [nome]," (neutro).' },
          { simbolo: '📝', desc: 'Abertura: "I’m writing to..." / "Thank you for your email."' },
          { simbolo: '🙏', desc: 'Pedido educado: "Could you please...?" / "I would appreciate it if..."' },
          { simbolo: '🤝', desc: 'Fecho: "Best regards," / "Kind regards," + seu nome.' },
        ],
      },
      exemplo: {
        titulo: 'Um e-mail profissional',
        celulas: [
          { ref: 'Saudação', valor: 'Dear Ms Silva,' },
          { ref: 'Abertura', valor: 'I’m writing to ask about the meeting.' },
          { ref: 'Pedido', valor: 'Could you please send me the report?' },
          { ref: 'Fecho', valor: 'Best regards, / Thank you in advance.' },
        ],
        formula: 'saudação + abertura + pedido educado + fecho',
        resultado: 'Você escreve e-mails profissionais em inglês.',
        comentario: 'Formalidade: "Dear Mr/Ms + sobrenome" e "Best regards" pra mais formal; "Hi/Hello + nome" pra colegas. E "please" + "could you" tornam qualquer pedido educado. Conecta com a trilha de Comunicação do módulo Mercado.',
      },
      vocabulario: [
        { palavra: "Dear... / Best regards", def: 'Prezado(a)... / Atenciosamente (saudação e fecho formais).' },
        { palavra: "I'm writing to...", def: 'Escrevo para... (abertura do e-mail).' },
        { palavra: 'Could you please...?', def: 'Você poderia, por favor...? (pedido educado).' },
      ],
      chave: [
        'Saudação (Dear/Hello) + abertura (I’m writing to)',
        'Pedido educado (Could you please...?)',
        'Fecho: Best regards / Kind regards + nome',
      ],
      porque: 'E-mails profissionais em inglês são constantes em empresas internacionais e trabalho remoto. Saber escrevê-los com o tom certo é uma habilidade prática de alto valor no mercado global.',
    },
    pratica: {
      instrucao: 'Vamos escrever um e-mail profissional em inglês. Pense numa situação real.',
      passos: [
        'Comece com a saudação: "Dear ..." ou "Hello ..."',
        'Abra: "I’m writing to..." (diga o motivo)',
        'Faça um pedido educado: "Could you please...?"',
        'Agradeça: "Thank you in advance."',
        'Feche: "Best regards," + seu nome',
        'Releia: o tom está educado e direto?',
        'Use a IA pra revisar ("review this professional email in English")',
      ],
    },
    desafio: {
      cenario: 'Escreva um e-mail profissional completo em inglês (saudação, motivo, pedido, fecho) pra uma situação real de trabalho.',
      requisitos: [
        'Usei uma saudação adequada (Dear/Hello)',
        'Abri com o motivo ("I’m writing to...")',
        'Fiz um pedido educado (Could you please...?)',
        'Fechei com Best/Kind regards + nome',
        'O tom ficou profissional',
      ],
      dica: 'Guarde modelos dos seus e-mails em inglês mais usados (pedir informação, agendar, responder). Adaptar um modelo é muito mais rápido e seguro que escrever do zero toda vez.',
    },
    validacao: [
      'Sei a saudação e o fecho profissionais',
      'Sei abrir o e-mail com o motivo',
      'Sei fazer pedidos educados',
      'Mantenho o tom profissional',
      'Sei usar a IA pra revisar',
    ],
  },

  'en-b1-trabalho-5': {
    trilhaId: 'en-b1-trabalho', numero: 5, titulo: 'Reuniões e small talk',
    tempoTotal: 11, xp: 80, vertente: 'ingles',
    aula: {
      gancho: 'Numa reunião internacional, além do assunto, há o "small talk" — aquela conversa leve do começo ("How was your weekend?"). Saber participar dos dois te integra de verdade a um time global.',
      conceito: {
        titulo: 'Reunião + conversa leve',
        texto: 'No trabalho internacional, você precisa de dois conjuntos de frases: as da reunião (concordar, sugerir, pedir a palavra) e as do "small talk" (a conversa social leve antes/depois). O small talk parece bobo, mas é o que cria conexão com colegas. Frases prontas pros dois momentos te deixam à vontade num ambiente profissional em inglês.',
      },
      estrutura: {
        titulo: 'Frases de reunião e small talk',
        partes: [
          { simbolo: '🗣️', desc: 'Pedir a palavra: "Can I add something?" / "I’d like to say..."' },
          { simbolo: '✅', desc: 'Concordar/sugerir: "I agree" / "How about...?" / "Maybe we could..."' },
          { simbolo: '☕', desc: 'Small talk: "How was your weekend?" / "How’s it going?" / "Nice weather!"' },
          { simbolo: '🔁', desc: 'Não entendeu: "Could you repeat that?" / "Sorry, I didn’t catch that."' },
        ],
      },
      exemplo: {
        titulo: 'Na reunião e antes dela',
        celulas: [
          { ref: 'Small talk', valor: 'How was your weekend? — Como foi seu fim de semana?' },
          { ref: 'Reunião', valor: 'Can I add something? — Posso acrescentar algo?' },
          { ref: 'Sugerir', valor: 'Maybe we could try... — Talvez pudéssemos tentar...' },
          { ref: 'Não entendeu', valor: 'Sorry, I didn’t catch that. — Não peguei isso.' },
        ],
        formula: 'small talk (abertura social) + frases de reunião (participar)',
        resultado: 'Você participa de reuniões e do convívio em inglês.',
        comentario: 'Small talk seguro: tempo ("Nice weather, isn’t it?"), fim de semana, viagem. Evite assuntos polêmicos. E "How’s it going?" é um "como vai?" super comum — responda "Good, thanks! You?".',
      },
      vocabulario: [
        { palavra: 'small talk', def: 'conversa leve e social (clima, fim de semana).' },
        { palavra: 'Can I add something?', def: 'Posso acrescentar algo? (pedir a palavra).' },
        { palavra: "I didn't catch that", def: 'Não peguei/entendi isso (pedir repetição).' },
      ],
      chave: [
        'Small talk cria conexão (How was your weekend?)',
        'Frases de reunião: pedir a palavra, concordar, sugerir',
        '"Could you repeat?" / "I didn’t catch that" sempre ajudam',
      ],
      porque: 'Participar de reuniões e do convívio social em inglês é o que te integra de verdade a um time internacional. O small talk, em especial, constrói relações — tão importante quanto o conteúdo técnico.',
    },
    pratica: {
      instrucao: 'Vamos praticar os dois momentos, em voz alta.',
      passos: [
        'Pratique small talk: "How was your weekend?" / "How’s it going?"',
        'Responda small talk: "Good, thanks! And you?"',
        'Peça a palavra: "Can I add something?"',
        'Sugira: "Maybe we could...", "How about...?"',
        'Concorde: "I agree" / "That’s a good idea"',
        'Peça repetição: "Sorry, I didn’t catch that"',
        'Encene a abertura de uma reunião (small talk → assunto)',
      ],
    },
    desafio: {
      cenario: 'Simule o começo de uma reunião internacional: small talk de abertura + participar do assunto (sugerir, concordar, pedir a palavra).',
      requisitos: [
        'Fiz e respondi small talk',
        'Pedi a palavra (Can I add something?)',
        'Sugeri e/ou concordei',
        'Pedi repetição quando preciso',
        'Pratiquei em voz alta',
      ],
      dica: 'Não subestime o small talk — em culturas de língua inglesa, ele é a "cola social" do trabalho. Ter 2-3 perguntas prontas ("How was your weekend?") te deixa à vontade com qualquer colega.',
    },
    validacao: [
      'Sei fazer e responder small talk',
      'Sei pedir a palavra na reunião',
      'Sei sugerir e concordar',
      'Sei pedir repetição',
      'Pratiquei em voz alta',
    ],
  },

  'en-b1-trabalho-6': {
    trilhaId: 'en-b1-trabalho', numero: 6, titulo: 'Projeto: CV + pitch em inglês',
    tempoTotal: 20, xp: 120, vertente: 'ingles',
    aula: {
      gancho: 'Hora de juntar tudo: montar seu currículo em inglês E gravar seu pitch profissional ("tell me about yourself"). É o kit que abre vagas internacionais, remotas e em dólar — talvez o material mais valioso de todo o curso.',
      conceito: {
        titulo: 'Seu kit profissional em inglês',
        texto: 'Este projeto reúne a trilha (e conecta com o módulo Mercado): um CV em inglês com action verbs e resultados, e um pitch falado de ~1 minuto se apresentando profissionalmente. Juntos, são seu passaporte pro mercado global. Tê-los prontos significa que, quando surgir uma vaga internacional, você age na hora — com material que se destaca.',
      },
      estrutura: {
        titulo: 'O kit em inglês',
        partes: [
          { simbolo: '📄', desc: 'CV: summary + experiência (action verbs) + skills, enxuto.' },
          { simbolo: '🎤', desc: 'Pitch falado: "I’m a... with... experience. I’m good at... I’m looking for..."' },
          { simbolo: '🔗', desc: 'Coerência: CV e pitch contam a mesma história.' },
          { simbolo: '☁️', desc: 'Guarde no Drive (módulo Computador) e tenha à mão.' },
        ],
      },
      exemplo: {
        titulo: 'Pitch profissional modelo',
        celulas: [
          { ref: 'Quem', valor: 'I’m an administrative assistant with 10 years of experience.' },
          { ref: 'Força', valor: 'I’m good at organization and customer service.' },
          { ref: 'Prova', valor: 'I have managed schedules and improved processes.' },
          { ref: 'Busca', valor: 'I’m looking for a remote opportunity in this area.' },
        ],
        formula: 'CV (escrito) + pitch (falado), coerentes e prontos',
        resultado: 'Seu kit profissional em inglês, pronto pra usar.',
        comentario: 'Grave seu pitch e ouça. Junte com o módulo Mercado (kit de empregabilidade em português) — agora você tem os dois idiomas. Isso te coloca à frente da maioria dos candidatos no mercado global.',
      },
      vocabulario: [
        { palavra: "I'm looking for...", def: 'Estou procurando... (o que você busca).' },
        { palavra: 'remote / hybrid', def: 'remoto / híbrido (modelos de trabalho).' },
        { palavra: 'opportunity', def: 'oportunidade (oportiúniti).' },
      ],
      chave: [
        'Junte CV em inglês + pitch falado, coerentes',
        'Use action verbs e resultados; ensaie o pitch',
        'Guarde na nuvem, pronto pra qualquer oportunidade',
      ],
      porque: 'Este kit em inglês é, talvez, o material de maior retorno do curso inteiro: abre vagas internacionais, remotas e em moeda forte. Concluí-lo prova que você está pronto pro mercado global.',
    },
    pratica: {
      instrucao: 'Reserve 20 minutos. Monte seu CV em inglês e grave seu pitch, usando tudo da trilha e do módulo Mercado.',
      passos: [
        'Monte/revise as seções do CV em inglês (summary, experience com action verbs, skills)',
        'Garanta resultados concretos no CV (improved..., managed...)',
        'Escreva seu pitch: quem você é + força + prova + o que busca',
        'Ensaie o pitch em voz alta até soar natural (~1 min)',
        'Confira a coerência entre CV e pitch',
        'Grave o pitch no celular e ouça',
        'Salve o CV no Google Drive (backup na nuvem)',
      ],
    },
    desafio: {
      cenario: 'Entregue seu kit profissional em inglês: um CV (seções principais) e um pitch de ~1 minuto gravado, coerentes entre si.',
      requisitos: [
        'CV em inglês com summary, experiência (action verbs) e skills',
        'Resultados concretos no CV',
        'Pitch falado de ~1 minuto (quem + força + prova + busca)',
        'CV e pitch coerentes',
        'Pitch gravado e CV salvo na nuvem',
      ],
      dica: 'Parabéns — você concluiu "Inglês para o Trabalho"! Esse kit, somado ao do módulo Mercado, te dá uma vantagem real no mercado global. Atualize-o a cada conquista. The world is open to you!',
    },
    validacao: [
      'Montei um CV em inglês',
      'Usei action verbs e resultados',
      'Gravei um pitch profissional',
      'CV e pitch são coerentes',
      'Guardei o material na nuvem',
    ],
  },
};
