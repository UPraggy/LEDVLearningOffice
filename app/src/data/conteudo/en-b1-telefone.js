// ============================================================================
// CONTEÚDO — Inglês B1: No Telefone e Online (en-b1-telefone)
// Atender e fazer ligações, deixar/receber recados, marcar coisas por telefone,
// e-mails e mensagens, lidar com problemas de comunicação, e projeto.
// ============================================================================

export const EN_B1_TELEFONE = {
  'en-b1-telefone-1': {
    trilhaId: 'en-b1-telefone', numero: 1, titulo: 'Atender e fazer ligações',
    tempoTotal: 12, xp: 90, vertente: 'ingles',
    aula: {
      gancho: 'Falar inglês ao telefone assusta mais que pessoalmente: você não vê a pessoa, não tem gestos, e o áudio às vezes falha. Mas as ligações seguem fórmulas fixas — dominá-las tira 90% do medo.',
      conceito: {
        titulo: 'O roteiro de uma ligação',
        texto: 'Ligações em inglês são quase um script. ATENDER: "Hello, this is Ana speaking", "Good morning, [empresa], how can I help you?". FAZER a ligação/se identificar: "Hi, this is Carlos", "Could I speak to Mr. Lopes, please?", "I\'m calling about...". PERGUNTAR por alguém: "Is Sarah there?", "Could you put me through to...?" (me transferir). RESPONDER: "Speaking" (sou eu), "Just a moment, I\'ll put you through", "I\'m afraid she\'s not available right now", "Could you hold, please?" (aguardar). ENCERRAR: "Thanks for calling", "I\'ll call back later", "Have a good day, bye". Note a fórmula "This is ... speaking" (ao telefone NÃO se diz "I am Ana") e "Could I speak to...?". Reconhecer essas frases-padrão ao OUVIR é o que destrava o telefone — porque a outra pessoa também usa o mesmo roteiro.',
      },
      estrutura: {
        titulo: 'Fases da ligação',
        partes: [
          { simbolo: 'atender', desc: 'Hello, this is Ana speaking.' },
          { simbolo: 'identificar', desc: 'Hi, this is Carlos. I\'m calling about...' },
          { simbolo: 'pedir alguém', desc: 'Could I speak to...? Is Sarah there?' },
          { simbolo: 'transferir/aguardar', desc: 'I\'ll put you through. Could you hold?' },
        ],
      },
      exemplo: {
        titulo: 'Uma ligação típica',
        celulas: [
          { ref: 'atende', valor: 'Hello, this is Ana speaking. — quem atende se identifica.' },
          { ref: 'liga', valor: 'Hi, could I speak to Mr. Lopes? — pedir por alguém.' },
          { ref: 'transfere', valor: 'Just a moment, I\'ll put you through. — vou transferir.' },
          { ref: 'ausente', valor: 'I\'m afraid he\'s not available. — ele não está disponível.' },
        ],
        formula: 'atender → identificar → pedir → transferir/aguardar → encerrar',
        resultado: 'Você conduz uma ligação em inglês.',
        comentario: 'Repare em "This is ... speaking" — ao telefone NUNCA se usa "I am Ana"; é sempre "this is". E "Could I speak to...?" é o pedido padrão. A boa notícia: as duas pontas usam o mesmo script, então se você reconhece as frases que OUVE, sabe exatamente o que responder. Decore o roteiro como blocos e o telefone deixa de assustar.',
      },
      vocabulario: [
        { palavra: 'this is ... speaking', def: 'aqui é/é o(a)... (identificação ao telefone).' },
        { palavra: 'put you through', def: 'transferir a ligação.' },
        { palavra: 'hold / available', def: 'aguardar / disponível.' },
      ],
      chave: [
        'Identifique-se com "This is ... speaking"',
        'Peça: "Could I speak to...?"',
        'Transferir/aguardar: put you through / hold',
      ],
      porque: 'O telefone é um dos maiores medos de quem aprende inglês justamente por seguir convenções próprias. Dominar o roteiro de ligações destrava ligações de trabalho, serviços e reservas — base de toda esta trilha.',
    },
    pratica: {
      instrucao: 'Pratique as fases de uma ligação em inglês.',
      passos: [
        'Atenda de 2 formas: pessoal e empresa',
        'Identifique-se com "This is ... speaking"',
        'Peça por alguém: "Could I speak to...?"',
        'Transfira e peça pra aguardar',
        'Diga que a pessoa não está disponível',
        'Encerre a ligação educadamente',
        'Encene os dois lados em voz alta',
      ],
    },
    desafio: {
      cenario: 'Encene uma ligação completa: você liga para uma empresa, se identifica, pede para falar com alguém; a recepção transfere ou informa que a pessoa não está.',
      requisitos: [
        'Atendi/identifiquei com "This is ... speaking"',
        'Pedi por alguém com "Could I speak to...?"',
        'Usei "put you through" ou "hold"',
        'Informei ausência com "I\'m afraid..."',
        'Encerrei educadamente',
      ],
      dica: 'O segredo do telefone é o RITMO previsível. Como as frases são padronizadas, foque em reconhecê-las ao ouvir. Se não entender, peça com naturalidade: "Sorry, could you repeat that?".',
    },
    validacao: [
      'Identifico-me ao telefone corretamente',
      'Peço para falar com alguém',
      'Transfiro e peço para aguardar',
      'Informo ausência com educação',
      'Encerro a ligação bem',
    ],
  },

  'en-b1-telefone-2': {
    trilhaId: 'en-b1-telefone', numero: 2, titulo: 'Deixar e anotar recados',
    tempoTotal: 13, xp: 100, vertente: 'ingles',
    aula: {
      gancho: '"A pessoa não está, quer deixar recado?" Esse momento — anotar ou deixar uma mensagem ao telefone — exige ouvir e repetir nomes, números e motivos com precisão. É onde o telefone fica realmente desafiador.',
      conceito: {
        titulo: 'Recados: deixar e anotar',
        texto: 'Quando a pessoa procurada não está, entra o recado. OFERECER/PEDIR para deixar: "Can I take a message?" (posso anotar?), "Would you like to leave a message?", "Could you take a message?", "Could you tell him/her that...?". DEIXAR um recado claro: diga seu nome, o motivo e como te contatar — "This is Ana from [empresa]. Could you ask her to call me back? My number is...". CONFIRMAR a informação (essencial!): "Let me check — that\'s Ana, A-N-A?", "Could you repeat the number?", "So you\'d like him to call you back, right?". SOLETRAR é crucial: domine o alfabeto falado e expressões como "double seven" (77), "that\'s A as in Apple". Vocabulário: call back (retornar a ligação), to spell (soletrar), to take/leave a message, to get back to someone (retornar). A habilidade central aqui é a ESCUTA ATIVA — confirmar tudo repetindo, porque um número ou nome errado num recado estraga toda a comunicação.',
      },
      estrutura: {
        titulo: 'Anotar e deixar recado',
        partes: [
          { simbolo: 'oferecer', desc: 'Can I take a message? Would you like to leave one?' },
          { simbolo: 'deixar', desc: 'Could you tell her that...? Ask him to call back.' },
          { simbolo: 'confirmar', desc: 'Let me check — that\'s... Could you repeat?' },
          { simbolo: 'soletrar', desc: 'A as in Apple, double seven, call back.' },
        ],
      },
      exemplo: {
        titulo: 'Um recado bem dado',
        celulas: [
          { ref: 'oferece', valor: 'He\'s not in. Can I take a message? — posso anotar?' },
          { ref: 'deixa', valor: 'Could you ask him to call me back? — pedir retorno.' },
          { ref: 'número', valor: 'My number is 9-8-double 7-... — soletrar/dizer dígitos.' },
          { ref: 'confirma', valor: 'So, call back Ana on this number — right? — confirmar.' },
        ],
        formula: 'oferecer/deixar → dizer nome+motivo+contato → confirmar repetindo',
        resultado: 'Você deixa e anota recados com precisão.',
        comentario: 'A regra de ouro do recado: CONFIRME tudo repetindo. Nome ("that\'s Ana, A-N-A?"), número ("let me read it back"), pedido ("so, call you back?"). Um dígito errado inutiliza o recado. Treine soletrar (alfabeto falado, "A as in Apple") e dizer números em dígitos, não em grupos. Escuta ativa aqui vale mais que vocabulário bonito.',
      },
      vocabulario: [
        { palavra: 'take/leave a message', def: 'anotar / deixar um recado.' },
        { palavra: 'call back / get back to', def: 'retornar a ligação.' },
        { palavra: 'to spell', def: 'soletrar — essencial em recados.' },
      ],
      chave: [
        'Oferecer: Can I take a message?',
        'Deixar: Could you ask him to call me back?',
        'Sempre confirme repetindo nome e número',
      ],
      porque: 'Recados testam a escuta de precisão — nomes, números, motivos. É o uso mais exigente do telefone e treina confirmar informação, habilidade que evita mal-entendidos em qualquer comunicação.',
    },
    pratica: {
      instrucao: 'Pratique deixar e anotar recados com confirmação.',
      passos: [
        'Ofereça anotar: "Can I take a message?"',
        'Deixe um recado: nome, motivo, contato',
        'Soletre seu nome com "as in..."',
        'Diga um número em dígitos',
        'Confirme repetindo nome e número',
        'Peça para repetir o que não entendeu',
        'Encene quem deixa e quem anota',
      ],
    },
    desafio: {
      cenario: 'Encene um recado telefônico: a pessoa procurada está ausente; você deixa um recado completo (nome soletrado, motivo, número) e o outro lado confirma tudo repetindo.',
      requisitos: [
        'Ofereci/pedi para deixar recado',
        'Deixei nome, motivo e contato claros',
        'Soletrei o nome e disse o número em dígitos',
        'Confirmei repetindo a informação',
        'Pedi repetição quando necessário',
      ],
      dica: 'Nunca termine um recado sem CONFIRMAR. Leia de volta nome e número: "Let me read that back...". Parece exagero, mas é o que profissionais fazem — e o que evita o recado chegar errado.',
    },
    validacao: [
      'Ofereço e peço para deixar recado',
      'Deixo recado claro e completo',
      'Soletro nomes e digo números',
      'Confirmo repetindo a informação',
      'Peço repetição com naturalidade',
    ],
  },

  'en-b1-telefone-3': {
    trilhaId: 'en-b1-telefone', numero: 3, titulo: 'Marcar e remarcar por telefone',
    tempoTotal: 13, xp: 100, vertente: 'ingles',
    aula: {
      gancho: 'Marcar uma consulta, agendar uma reunião, remarcar porque deu imprevisto — tudo isso por telefone, combinando dias, horas e confirmando. É uma das conversas telefônicas mais úteis do dia a dia.',
      conceito: {
        titulo: 'Agendar, confirmar, remarcar',
        texto: 'Marcar compromissos por telefone combina negociar horários e confirmar. MARCAR: "I\'d like to make an appointment", "Could we schedule a meeting?", "Are you free on Monday?", "What time works for you?". PROPOR/RESPONDER horários: "How about 3 p.m.?", "Does Tuesday at 10 work?", "I\'m afraid I\'m busy then — could we do Wednesday?". CONFIRMAR: "So, that\'s Monday at 2, right?", "Let me confirm: Tuesday, the 5th, at 10". REMARCAR/CANCELAR: "I need to reschedule our meeting", "Could we move it to Friday?", "I\'m afraid I have to cancel". Vocabulário: appointment (compromisso/consulta), to schedule/to book (agendar), to reschedule (remarcar), to cancel, available/free (livre), to put off/postpone (adiar). Estruturas de educação são chave: "Could we...?", "Would ... be possible?", "I\'m afraid..." pra recusar. Confirmar o combinado no final evita os mal-entendidos clássicos de dia e hora — sempre repita a combinação.',
      },
      estrutura: {
        titulo: 'O fluxo de agendar',
        partes: [
          { simbolo: 'marcar', desc: 'I\'d like to make an appointment. Are you free...?' },
          { simbolo: 'propor hora', desc: 'How about 3 p.m.? Does Tuesday work?' },
          { simbolo: 'confirmar', desc: 'So, that\'s Monday at 2, right?' },
          { simbolo: 'remarcar', desc: 'Could we move it to Friday? I have to cancel.' },
        ],
      },
      exemplo: {
        titulo: 'Marcando e remarcando',
        celulas: [
          { ref: 'marca', valor: 'I\'d like to make an appointment for Monday. — marcar.' },
          { ref: 'propõe', valor: 'How about 3 p.m.? — que tal às 15h?' },
          { ref: 'confirma', valor: 'So, Monday the 5th at 3 — right? — confirmar.' },
          { ref: 'remarca', valor: 'Could we reschedule to Friday? — remarcar.' },
        ],
        formula: 'marcar → propor hora → negociar → confirmar (→ remarcar)',
        resultado: 'Você agenda e remarca em inglês.',
        comentario: 'Educação é tudo aqui: "Could we...?", "How about...?", "I\'m afraid..." pra recusar um horário sem soar ríspido. E NUNCA encerre sem confirmar a combinação completa (dia + data + hora): "So, that\'s Monday the 5th at 3 — right?". Trocar dia ou hora é o erro mais comum em inglês ao telefone; a confirmação final elimina o risco.',
      },
      vocabulario: [
        { palavra: 'appointment / schedule', def: 'compromisso/consulta / agendar.' },
        { palavra: 'reschedule / cancel', def: 'remarcar / cancelar.' },
        { palavra: 'available / free', def: 'disponível / livre.' },
      ],
      chave: [
        'Marcar: I\'d like to make an appointment',
        'Propor com educação: How about...? Could we...?',
        'Sempre confirme dia + data + hora no final',
      ],
      porque: 'Agendar por telefone é constante — consultas, reuniões, serviços. Combina negociar horários e confirmar com educação, treinando estruturas formais úteis em todo contato profissional.',
    },
    pratica: {
      instrucao: 'Pratique marcar, confirmar e remarcar compromissos.',
      passos: [
        'Marque um compromisso pedindo disponibilidade',
        'Proponha 2 horários com "How about...?"',
        'Recuse um horário com "I\'m afraid..."',
        'Confirme dia, data e hora completos',
        'Remarque para outro dia com educação',
        'Cancele educadamente um compromisso',
        'Encene as duas pontas em voz alta',
      ],
    },
    desafio: {
      cenario: 'Encene marcar um compromisso por telefone, negociando horários (um não dá certo), confirmando o combinado e depois ligando de novo para remarcar.',
      requisitos: [
        'Marquei pedindo disponibilidade',
        'Propus e negociei horários com educação',
        'Recusei um horário com "I\'m afraid..."',
        'Confirmei dia, data e hora completos',
        'Remarquei educadamente',
      ],
      dica: 'A confirmação final é inegociável: repita SEMPRE "dia + data + hora" antes de desligar. Em inglês, a data ("the 5th") e o dia ("Monday") podem se confundir — dizer os dois juntos elimina erro.',
    },
    validacao: [
      'Marco compromissos em inglês',
      'Proponho e negocio horários',
      'Recuso com educação',
      'Confirmo a combinação completa',
      'Remarco e cancelo bem',
    ],
  },

  'en-b1-telefone-4': {
    trilhaId: 'en-b1-telefone', numero: 4, titulo: 'E-mails e mensagens',
    tempoTotal: 13, xp: 100, vertente: 'ingles',
    aula: {
      gancho: 'Nem toda comunicação é falada. Um e-mail formal, uma mensagem rápida, uma resposta profissional — saber o tom certo (formal x casual) e as fórmulas de abertura e fechamento faz você escrever em inglês com confiança.',
      conceito: {
        titulo: 'Escrever e-mails e mensagens',
        texto: 'Comunicação escrita tem dois registros. FORMAL (e-mails de trabalho, serviços): abertura "Dear Mr./Ms. Lopes," ou "Hello [nome],"; corpo objetivo "I am writing to..."/"I would like to...", "Could you please..."; fechamento "Best regards,"/"Kind regards,"/"Sincerely,". CASUAL (amigos, colegas próximos, mensagens): "Hi Ana,"/"Hey!"; corpo solto; fechamento "Cheers,"/"Take care,"/"Talk soon,". Estrutura de um e-mail: saudação → motivo (primeira frase) → detalhes → pedido/ação → fechamento. Frases úteis: "Thanks for your email", "Please find attached..." (segue anexo), "Let me know if...", "I look forward to hearing from you". MENSAGENS rápidas usam abreviações: thx (thanks), asap (as soon as possible), btw (by the way), pls (please) — ok em casual, NUNCA em formal. A chave é adequar o TOM ao destinatário: formal demais com amigo soa frio; casual demais no trabalho soa desleixado.',
      },
      estrutura: {
        titulo: 'Formal x casual',
        partes: [
          { simbolo: 'abertura', desc: 'Formal: Dear Mr... / Casual: Hi, Hey.' },
          { simbolo: 'motivo', desc: 'I am writing to... / Just wanted to say...' },
          { simbolo: 'fechamento', desc: 'Best regards / Cheers, Take care.' },
          { simbolo: 'anexo/ação', desc: 'Please find attached... / Let me know.' },
        ],
      },
      exemplo: {
        titulo: 'Dois registros',
        celulas: [
          { ref: 'formal', valor: 'Dear Ms. Lopes, I am writing to request... Best regards, Ana.' },
          { ref: 'casual', valor: 'Hi Sam! Just checking about Friday. Cheers, Ana.' },
          { ref: 'anexo', valor: 'Please find attached the report. — segue em anexo.' },
          { ref: 'fechar', valor: 'I look forward to hearing from you. — aguardo retorno.' },
        ],
        formula: 'saudação → motivo → detalhes → pedido → fechamento (tom certo)',
        resultado: 'Você escreve no registro adequado.',
        comentario: 'O erro mais comum é o tom errado: "Dear Sir" pra um colega ou "Hey!" pra um cliente. Escolha o registro pelo DESTINATÁRIO. Estruture sempre: motivo na primeira frase (não enrole), pedido claro, fechamento padrão. Abreviações (asap, btw) só em mensagens casuais. Em e-mail formal, escreva por extenso e use "Best regards".',
      },
      vocabulario: [
        { palavra: 'Dear / Best regards', def: 'Prezado / Atenciosamente — molduras formais.' },
        { palavra: 'attached / forward', def: 'anexo / encaminhar.' },
        { palavra: 'asap / btw / thx', def: 'abreviações casuais (só informal).' },
      ],
      chave: [
        'Escolha o tom pelo destinatário (formal x casual)',
        'Estrutura: saudação → motivo → pedido → fechamento',
        'Abreviações só em mensagens casuais',
      ],
      porque: 'E-mails e mensagens são metade da comunicação moderna. Acertar o registro e a estrutura faz você escrever profissionalmente em inglês — habilidade decisiva no trabalho e nos serviços.',
    },
    pratica: {
      instrucao: 'Escreva nos dois registros, formal e casual.',
      passos: [
        'Escreva a abertura formal e a casual',
        'Escreva um e-mail formal curto (motivo+pedido)',
        'Escreva uma mensagem casual ao mesmo assunto',
        'Use "Please find attached..." num e-mail',
        'Feche com "Best regards" e com "Cheers"',
        'Liste 5 abreviações casuais com significado',
        'Reescreva um texto casual em tom formal',
      ],
    },
    desafio: {
      cenario: 'Escreva duas versões da mesma mensagem (ex.: pedir uma informação): uma em e-mail formal e outra em mensagem casual, usando aberturas, estrutura e fechamentos adequados a cada tom.',
      requisitos: [
        'Usei abertura e fechamento formais corretos',
        'Usei abertura e fechamento casuais corretos',
        'Estruturei: saudação, motivo, pedido, fecho',
        'Usei uma frase útil (attached/look forward)',
        'Adequei o tom ao destinatário em cada versão',
      ],
      dica: 'Antes de escrever, pergunte: quem vai ler? Chefe/cliente/desconhecido → formal por extenso, "Best regards". Amigo/colega próximo → casual, abreviações ok. O mesmo conteúdo muda de roupa conforme o leitor.',
    },
    validacao: [
      'Distingo tom formal de casual',
      'Estruturo um e-mail corretamente',
      'Uso aberturas e fechamentos certos',
      'Sei frases úteis (attached, look forward)',
      'Adequo o tom ao destinatário',
    ],
  },

  'en-b1-telefone-5': {
    trilhaId: 'en-b1-telefone', numero: 5, titulo: 'Quando a comunicação falha',
    tempoTotal: 13, xp: 100, vertente: 'ingles',
    aula: {
      gancho: '"Sorry, I didn\'t catch that." Linha ruim, sotaque difícil, alguém falando rápido demais — a comunicação falha o tempo todo, e saber pedir esclarecimento sem travar é a habilidade que separa quem desiste de quem se vira.',
      conceito: {
        titulo: 'Pedir esclarecimento e se virar',
        texto: 'Não entender é normal — até nativos pedem repetição. O que importa é ter as frases prontas pra não congelar. PEDIR REPETIÇÃO: "Sorry, could you repeat that?", "I didn\'t catch that", "Could you say that again, please?". PEDIR para falar mais devagar: "Could you speak more slowly, please?", "Sorry, you\'re speaking a bit fast". PEDIR esclarecimento: "What do you mean by...?", "Could you explain that?", "Do you mean...?". CONFIRMAR entendimento: "So, you\'re saying that...?", "Let me make sure I understand...". PROBLEMAS de linha (telefone): "Sorry, the line is bad", "You\'re breaking up", "I can\'t hear you well", "Could you call me back?". GANHAR tempo enquanto pensa: "Let me see...", "Just a second...", "That\'s a good question...". A atitude certa: pedir esclarecimento é sinal de competência, não de fraqueza. Quem domina essas frases conversa com tranquilidade mesmo entendendo só 70% — porque resolve os 30% que faltam na hora.',
      },
      estrutura: {
        titulo: 'Kit de emergência da conversa',
        partes: [
          { simbolo: 'repetir', desc: 'Sorry, could you repeat that? I didn\'t catch that.' },
          { simbolo: 'devagar', desc: 'Could you speak more slowly, please?' },
          { simbolo: 'esclarecer', desc: 'What do you mean by...? Do you mean...?' },
          { simbolo: 'linha ruim', desc: 'The line is bad. You\'re breaking up.' },
        ],
      },
      exemplo: {
        titulo: 'Resolvendo a falha',
        celulas: [
          { ref: 'repetir', valor: 'Sorry, I didn\'t catch that — could you repeat? — repetir.' },
          { ref: 'devagar', valor: 'Could you speak more slowly, please? — mais devagar.' },
          { ref: 'esclarecer', valor: 'What do you mean by "deadline"? — o que quer dizer com.' },
          { ref: 'linha', valor: 'Sorry, you\'re breaking up. — a ligação está cortando.' },
        ],
        formula: 'falhou → pedir (repetir/devagar/esclarecer) → confirmar',
        resultado: 'Você se vira quando não entende.',
        comentario: 'A mudança de mentalidade é o pulo do gato: pedir repetição NÃO é vergonha — nativos fazem o tempo todo. Tenha 4–5 frases na ponta da língua ("Sorry, could you repeat?", "What do you mean by...?") pra usar no automático e nunca congelar. Confirmar com "So, you\'re saying...?" garante que você captou. Entender 70% + saber resolver os 30% = conversa fluindo.',
      },
      vocabulario: [
        { palavra: 'catch / repeat', def: 'captar / repetir.' },
        { palavra: 'break up / the line is bad', def: 'cortar (sinal) / linha ruim.' },
        { palavra: 'What do you mean by...?', def: 'O que você quer dizer com...?' },
      ],
      chave: [
        'Tenha frases prontas: "Could you repeat that?"',
        'Peça para falar devagar e esclareça dúvidas',
        'Confirme com "So, you\'re saying...?"',
      ],
      porque: 'Pedir esclarecimento sem travar é talvez a habilidade mais libertadora do inglês. Quem a domina conversa tranquilo mesmo sem entender tudo — e isso vale para telefone, presencial e qualquer situação.',
    },
    pratica: {
      instrucao: 'Pratique o kit de emergência da conversa.',
      passos: [
        'Peça repetição de 3 formas diferentes',
        'Peça para a pessoa falar mais devagar',
        'Peça esclarecimento: "What do you mean by...?"',
        'Confirme entendimento: "So, you\'re saying...?"',
        'Relate problemas de linha no telefone',
        'Use 2 frases para ganhar tempo',
        'Encene uma conversa com falhas e reparos',
      ],
    },
    desafio: {
      cenario: 'Encene uma conversa telefônica difícil (linha ruim, fala rápida): use as frases para pedir repetição, falar devagar, esclarecer e confirmar até entender a mensagem.',
      requisitos: [
        'Pedi repetição com frases prontas',
        'Pedi para falar mais devagar',
        'Pedi esclarecimento (What do you mean...?)',
        'Relatei problema de linha',
        'Confirmei o entendimento no final',
      ],
      dica: 'Pratique essas frases até saírem no automático, sem pensar. O segredo não é entender tudo de primeira — é nunca congelar. Uma frase de reparo pronta mantém a conversa viva enquanto você se reorganiza.',
    },
    validacao: [
      'Tenho frases prontas para pedir repetição',
      'Peço para falar mais devagar',
      'Esclareço dúvidas de significado',
      'Lido com problemas de linha',
      'Confirmo o entendimento',
    ],
  },

  'en-b1-telefone-6': {
    trilhaId: 'en-b1-telefone', numero: 6, titulo: 'Projeto: resolva tudo por telefone',
    tempoTotal: 22, xp: 140, vertente: 'ingles',
    aula: {
      gancho: 'Hora do teste real: você vai encenar uma ligação completa em que precisa resolver um assunto do início ao fim — identificar-se, explicar, negociar, lidar com uma falha de comunicação e confirmar tudo. Tudo o que a trilha treinou, numa só ligação.',
      conceito: {
        titulo: 'Uma ligação completa de ponta a ponta',
        texto: 'Este projeto integra toda a trilha numa única ligação encenada. Escolha um objetivo realista: marcar uma consulta médica, agendar um serviço, resolver um problema com uma empresa, ou confirmar uma reserva. A ligação deve passar por: 1) ABERTURA — atender/identificar-se ("This is ... speaking", "I\'m calling about..."); 2) DESENVOLVIMENTO — explicar o motivo, pedir/negociar (horário, informação, solução), usando educação ("Could you...?", "I\'d like to..."); 3) UMA FALHA de comunicação — em algum ponto você não entende e usa as frases de reparo ("Sorry, could you repeat?", "the line is bad"); 4) RECADO ou confirmação — deixar um recado OU confirmar a combinação completa repetindo dados; 5) ENCERRAMENTO educado. Encene OS DOIS lados (você e o atendente) para mostrar que entende as duas pontas do script. O resultado é um diálogo de 14 a 18 falas que demonstra domínio do inglês telefônico funcional. Grave-se: conduzir uma ligação inteira em inglês, com imprevisto e tudo resolvido, é prova concreta de fluência prática no B1.',
      },
      estrutura: {
        titulo: 'As fases da ligação-projeto',
        partes: [
          { simbolo: 'abertura', desc: 'identificar-se + dizer o motivo.' },
          { simbolo: 'desenvolvimento', desc: 'explicar, pedir, negociar com educação.' },
          { simbolo: 'falha + reparo', desc: 'não entender e usar frases de reparo.' },
          { simbolo: 'confirmar + fechar', desc: 'recado/confirmação + encerramento.' },
        ],
      },
      exemplo: {
        titulo: 'Uma ligação-projeto (trecho)',
        celulas: [
          { ref: 'abre', valor: 'Hello, this is Ana. I\'m calling about my appointment.' },
          { ref: 'negocia', valor: 'Could we move it to Friday at 3? — remarcar.' },
          { ref: 'repara', valor: 'Sorry, you\'re breaking up — could you repeat the time?' },
          { ref: 'confirma', valor: 'So, Friday the 9th at 3 — right? Thank you, bye!' },
        ],
        formula: 'abrir → desenvolver → reparar falha → confirmar → encerrar',
        resultado: 'Você resolve um assunto inteiro por telefone.',
        comentario: 'O diferencial do projeto é a FALHA proposital: incluir um momento em que você não entende e se recupera prova que você se vira de verdade, não só num roteiro perfeito. Encenar os dois lados mostra que você domina o script completo. Termine sempre confirmando o combinado. Grave-se e ouça: conduzir uma ligação inteira com imprevisto resolvido é o ápice desta trilha.',
      },
      vocabulario: [
        { palavra: 'handle a call', def: 'conduzir/lidar com uma ligação.' },
        { palavra: 'sort out / resolve', def: 'resolver um assunto.' },
        { palavra: 'confirm the details', def: 'confirmar os detalhes combinados.' },
      ],
      chave: [
        'Diálogo de 14–18 falas, dos dois lados',
        'Passe por abertura, negociação, falha+reparo, confirmação',
        'Inclua um imprevisto de comunicação resolvido',
      ],
      porque: 'Resolver um assunto inteiro por telefone integra toda a trilha e enfrenta o maior medo de quem aprende inglês. Conduzir uma ligação com imprevisto e tudo confirmado é fluência funcional comprovada.',
    },
    pratica: {
      instrucao: 'Monte e encene uma ligação completa de ponta a ponta.',
      passos: [
        'Escolha um objetivo realista para a ligação',
        'Abra: identifique-se e diga o motivo',
        'Desenvolva: explique, peça, negocie com educação',
        'Inclua uma falha e use frases de reparo',
        'Deixe recado OU confirme a combinação completa',
        'Encerre educadamente',
        'Encene os dois lados e grave-se',
      ],
    },
    desafio: {
      cenario: 'Encene uma ligação completa (14 a 18 falas) para resolver um assunto: abertura, desenvolvimento com negociação, uma falha de comunicação reparada e confirmação final. Faça os dois lados e grave-se.',
      requisitos: [
        'Abri identificando-me e dizendo o motivo',
        'Desenvolvi explicando e negociando com educação',
        'Inclui uma falha e usei frases de reparo',
        'Deixei recado ou confirmei a combinação',
        'Encerrei bem e encenei os dois lados',
      ],
      dica: 'Não busque uma ligação perfeita — busque uma ligação REAL, com o tropeço e a recuperação. É justamente lidar com o imprevisto que prova que você domina o telefone, e não apenas decorou um roteiro.',
    },
    validacao: [
      'Abri e identifiquei-me bem',
      'Desenvolvi e negociei com educação',
      'Reparei uma falha de comunicação',
      'Deixei recado ou confirmei dados',
      'Conduzi a ligação dos dois lados',
    ],
  },
};
