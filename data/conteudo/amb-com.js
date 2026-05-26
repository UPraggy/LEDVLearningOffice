// ============================================================================
// CONTEÚDO — Comunicação Profissional (amb-com)
// E-mail, etiqueta corporativa e escrita clara. Vertente "ambos".
// ============================================================================

export const AMB_COM = {
  'amb-com-1': {
    trilhaId: 'amb-com', numero: 1, titulo: 'Criar um e-mail profissional',
    tempoTotal: 7, xp: 30, vertente: 'ambos',
    aula: {
      gancho: 'Seu e-mail é "gatinho_fofo_1962@..."? Numa candidatura, isso pega mal antes mesmo de abrirem a mensagem. Um endereço sério é o primeiro passo da sua imagem profissional — e é grátis criar.',
      conceito: {
        titulo: 'Seu endereço de e-mail é seu cartão de visita digital',
        texto: 'O e-mail é o canal oficial do mundo do trabalho: vagas, documentos, contatos. Um endereço profissional usa seu nome de forma simples e séria — nada de apelidos, números aleatórios ou ano de nascimento. Criar um (no Gmail, por exemplo) é gratuito e te dá, de quebra, acesso a Drive, Agenda e tudo que você já viu nas trilhas anteriores.',
      },
      estrutura: {
        titulo: 'Anatomia de um bom endereço',
        partes: [
          { simbolo: '✅', desc: 'Bom: nome.sobrenome@gmail.com (ex: maria.silva@gmail.com).' },
          { simbolo: '🔢', desc: 'Se o nome estiver ocupado, acrescente um número discreto (maria.silva27).' },
          { simbolo: '❌', desc: 'Evite: apelidos, gírias, ano de nascimento, "fofa", "top".' },
          { simbolo: '🔐', desc: 'Senha forte + verificação em duas etapas (você protege seu canal oficial).' },
        ],
      },
      exemplo: {
        titulo: 'Profissional x amador',
        celulas: [
          { ref: 'Amador', valor: 'gatinho62@... · joao_o_brabo@...' },
          { ref: 'Profissional', valor: 'joao.pereira@... · j.pereira.adm@...' },
          { ref: 'Aceitável', valor: 'joao.pereira88@... (número discreto)' },
        ],
        formula: 'nome.sobrenome (+ número discreto se preciso)',
        resultado: 'Uma identidade séria desde o primeiro contato.',
        comentario: 'Se você já tem um e-mail "informal" cheio de contatos, tudo bem mantê-lo pra uso pessoal — mas crie um sério só pra trabalho e candidaturas.',
      },
      vocabulario: [
        { palavra: 'Endereço de e-mail', def: 'Sua identificação no correio eletrônico (nome@provedor.com).' },
        { palavra: 'Provedor', def: 'O serviço de e-mail (Gmail, Outlook). O Gmail vem com Drive e Agenda.' },
        { palavra: 'Assinatura', def: 'Bloco com seu nome/contato que aparece no fim dos e-mails.' },
      ],
      chave: [
        'Use nome.sobrenome — sério e fácil de lembrar',
        'Evite apelidos, gírias e ano de nascimento',
        'Proteja com senha forte e 2FA (é seu canal oficial)',
      ],
      porque: 'Recrutadores e empresas julgam (consciente ou não) pelo endereço de e-mail. Um endereço profissional abre portas; um informal levanta dúvidas. É o alicerce da sua presença digital no trabalho.',
    },
    pratica: {
      instrucao: 'Vamos garantir que você tem um e-mail profissional. Abra o navegador.',
      passos: [
        'Se você não tem um e-mail sério, acesse gmail.com → "Criar conta"',
        'Escolha um endereço no formato nome.sobrenome (o sistema avisa se está livre)',
        'Se estiver ocupado, acrescente um número discreto',
        'Defina uma senha forte (vamos aprofundar segurança no módulo próprio)',
        'Já tem um bom e-mail? Confira se o nome de exibição está correto (Configurações)',
        'Crie uma assinatura simples: Configurações → Assinatura → nome + telefone',
        'Mande um e-mail de teste pra você mesmo e veja a assinatura aparecer',
      ],
    },
    desafio: {
      cenario: 'Garanta um e-mail profissional pronto pra usar: endereço sério, nome de exibição correto e uma assinatura simples.',
      requisitos: [
        'Tenho um endereço no formato profissional',
        'O nome de exibição está correto (seu nome real)',
        'Configurei uma assinatura com nome e contato',
        'A senha é forte',
        'Enviei um e-mail de teste pra confirmar',
      ],
      dica: 'A assinatura economiza tempo e passa profissionalismo: nome completo, telefone e, se tiver, o link do seu LinkedIn. Ela aparece automaticamente em todo e-mail que você manda.',
    },
    validacao: [
      'Entendo por que o endereço importa',
      'Tenho um e-mail profissional',
      'O nome de exibição está correto',
      'Configurei uma assinatura',
      'Protegi a conta com senha forte',
    ],
  },

  'amb-com-2': {
    trilhaId: 'amb-com', numero: 2, titulo: 'Anatomia de um bom e-mail',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Um e-mail sem assunto, sem saudação, com um textão sem parágrafos... vai pro fim da fila (ou pro lixo). Um e-mail bem estruturado é lido, entendido e respondido. A estrutura faz toda a diferença.',
      conceito: {
        titulo: 'Um e-mail tem partes, como uma carta',
        texto: 'Todo e-mail profissional tem uma estrutura clara: um assunto que resume a mensagem, uma saudação, o corpo objetivo (com o pedido logo no início), um fecho educado e a assinatura. Essa estrutura faz quem recebe entender na hora do que se trata e o que você precisa — e responder mais rápido.',
      },
      estrutura: {
        titulo: 'As partes do e-mail',
        partes: [
          { simbolo: '📑', desc: 'Assunto: curto e específico ("Solicitação de orçamento — Maria Silva").' },
          { simbolo: '👋', desc: 'Saudação: "Olá, [Nome]," / "Prezado(a) [Nome],".' },
          { simbolo: '✍️', desc: 'Corpo: o pedido/assunto no 1º parágrafo; detalhes depois. Parágrafos curtos.' },
          { simbolo: '🤝', desc: 'Fecho + assinatura: "Atenciosamente, [seu nome]" + contato.' },
        ],
      },
      exemplo: {
        titulo: 'Esqueleto de um e-mail',
        celulas: [
          { ref: 'Assunto', valor: 'Reagendamento da reunião de quinta' },
          { ref: 'Saudação', valor: 'Olá, Carlos,' },
          { ref: 'Corpo', valor: 'Preciso reagendar nossa reunião... [motivo]' },
          { ref: 'Fecho', valor: 'Atenciosamente, Maria Silva' },
        ],
        formula: 'Assunto + saudação + corpo objetivo + fecho',
        resultado: 'Mensagem clara, lida e respondida rápido.',
        comentario: 'O assunto é a parte mais ignorada e mais importante: é o que faz a pessoa abrir (ou não) o e-mail. Capriche nele.',
      },
      vocabulario: [
        { palavra: 'Assunto', def: 'O título do e-mail; resume o conteúdo numa linha.' },
        { palavra: 'Corpo', def: 'O texto principal da mensagem.' },
        { palavra: 'Fecho', def: 'A despedida educada antes da assinatura ("Atenciosamente").' },
      ],
      chave: [
        'Assunto curto e específico — é o que faz abrir',
        'Pedido/assunto no primeiro parágrafo',
        'Fecho educado + assinatura sempre',
      ],
      porque: 'E-mail é a comunicação formal nº1 do trabalho. Estruturar bem mostra clareza e respeito pelo tempo do outro — e faz seus pedidos serem atendidos mais rápido.',
    },
    pratica: {
      instrucao: 'Abra seu e-mail e comece uma nova mensagem (pode enviar pra você mesmo).',
      passos: [
        'Clique em "Escrever" / "Novo e-mail"',
        'No assunto, escreva algo específico (ex: "Teste — estrutura de e-mail")',
        'Comece com uma saudação ("Olá, [seu nome],")',
        'No primeiro parágrafo, diga objetivamente o que quer',
        'Num segundo parágrafo curto, dê os detalhes necessários',
        'Feche com "Atenciosamente," e seu nome',
        'Releia: o assunto resume? o pedido está claro logo no início?',
        'Envie pra você mesmo e veja como chegou',
      ],
    },
    desafio: {
      cenario: 'Escreva um e-mail profissional completo e bem estruturado pra uma situação real (ex: solicitar uma informação, agendar algo).',
      requisitos: [
        'O assunto é curto e específico',
        'Tem saudação adequada',
        'O pedido principal está no início do corpo',
        'Os parágrafos são curtos e objetivos',
        'Tem fecho e assinatura',
      ],
      dica: 'Antes de enviar, leia só o assunto e o primeiro parágrafo. Se daquilo já dá pra entender o que você quer, está ótimo. Quem recebe muitos e-mails agradece a objetividade.',
    },
    validacao: [
      'Sei escrever um assunto específico',
      'Uso saudação adequada',
      'Coloco o pedido no início do corpo',
      'Escrevo parágrafos curtos',
      'Fecho com despedida e assinatura',
    ],
  },

  'amb-com-3': {
    trilhaId: 'amb-com', numero: 3, titulo: 'Anexos, Cc e Cco',
    tempoTotal: 8, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Mandar um anexo errado, esquecer de anexar, ou expor o e-mail de 50 pessoas numa cópia — vacilos clássicos que pegam mal. Dominar anexos, Cc e Cco te livra de todos eles.',
      conceito: {
        titulo: 'Anexar arquivos e escolher quem vê quem',
        texto: 'Anexar é grudar um arquivo (PDF, foto, planilha) ao e-mail. Já os campos Para, Cc e Cco controlam quem recebe e quem enxerga quem: "Para" é o destinatário principal; "Cc" (cópia) são pessoas que devem acompanhar, e todos veem; "Cco" (cópia oculta) também recebem, mas escondidos dos demais — essencial pra proteger e-mails de muita gente.',
      },
      estrutura: {
        titulo: 'Os campos e o clipe',
        partes: [
          { simbolo: '📎', desc: 'Anexo: clique no clipe, escolha o arquivo. Confirme que anexou antes de enviar.' },
          { simbolo: 'Para', desc: 'O destinatário principal, de quem você espera resposta/ação.' },
          { simbolo: 'Cc', desc: 'Cópia: quem acompanha. Todos veem todos os endereços.' },
          { simbolo: 'Cco', desc: 'Cópia oculta: recebem sem que os outros vejam. Use pra listas grandes.' },
        ],
      },
      exemplo: {
        titulo: 'Cc x Cco na prática',
        celulas: [
          { ref: 'Para', valor: 'A pessoa que deve responder' },
          { ref: 'Cc', valor: 'O chefe, que acompanha (todos veem)' },
          { ref: 'Cco', valor: 'Enviar a 50 pessoas sem expor e-mails' },
          { ref: 'Erro comum', valor: 'Pôr 50 pessoas no Para/Cc (vaza tudo)' },
        ],
        formula: 'Para = age · Cc = acompanha · Cco = recebe escondido',
        resultado: 'Cada um no campo certo, privacidade protegida.',
        comentario: 'Regra de ouro: mandando pra muita gente que não se conhece? Use Cco. Expor a lista de e-mails de todos é falha de privacidade (e às vezes da LGPD).',
      },
      vocabulario: [
        { palavra: 'Anexo', def: 'Arquivo grudado ao e-mail (PDF, imagem, planilha).' },
        { palavra: 'Cc (com cópia)', def: 'Destinatários que acompanham; todos veem os endereços.' },
        { palavra: 'Cco (cópia oculta)', def: 'Destinatários ocultos; ninguém vê quem mais recebeu.' },
      ],
      chave: [
        'Confira se anexou antes de enviar',
        'Para = quem age; Cc = quem acompanha',
        'Cco protege e-mails ao enviar pra muita gente',
      ],
      porque: 'Usar os campos certos evita gafes de privacidade e mostra domínio profissional. Anexar corretamente garante que documentos cheguem. São detalhes que, errados, mancham sua imagem no trabalho.',
    },
    pratica: {
      instrucao: 'Abra um novo e-mail. Vamos praticar anexos e campos (envie testes pra você mesmo).',
      passos: [
        'Clique no clipe (anexar) e adicione um arquivo (ex: um PDF que você criou)',
        'Confirme que o arquivo apareceu anexado',
        'No campo "Para", coloque seu próprio e-mail',
        'Clique em "Cc" e adicione outro endereço seu (ou deixe vazio pra treinar)',
        'Ative o campo "Cco" (geralmente um link ao lado do Cc) e veja como funciona',
        'Escreva uma mensagem curta avisando que há um anexo',
        'Envie e confira: o anexo chegou? os campos estão certos?',
      ],
    },
    desafio: {
      cenario: 'Envie um e-mail com um anexo e use corretamente os campos, simulando o envio pra um grupo onde a privacidade importa.',
      requisitos: [
        'Anexei um arquivo e confirmei que foi junto',
        'Usei o campo "Para" corretamente',
        'Entendo a diferença entre Cc e Cco',
        'Sei quando usar Cco pra proteger e-mails',
        'Mencionei o anexo no corpo da mensagem',
      ],
      dica: 'Hábito que salva: sempre que escrever "segue em anexo", anexe o arquivo NA HORA, antes de continuar. O esquecimento de anexo é o vacilo mais comum do mundo corporativo.',
    },
    validacao: [
      'Sei anexar arquivos',
      'Confirmo o anexo antes de enviar',
      'Entendo Para, Cc e Cco',
      'Sei usar Cco pra proteger privacidade',
      'Menciono o anexo no corpo',
    ],
  },

  'amb-com-4': {
    trilhaId: 'amb-com', numero: 4, titulo: 'Pastas, filtros e marcadores',
    tempoTotal: 8, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Caixa de entrada com 3.000 e-mails não lidos? Sensação de afogamento? Com pastas, marcadores e filtros, sua caixa vira um sistema organizado onde você acha tudo e não perde nada importante.',
      conceito: {
        titulo: 'Organize a caixa pra não se afogar',
        texto: 'A caixa de entrada não precisa ser uma pilha caótica. Você pode criar pastas/marcadores (ex: Trabalho, Bancos, Pessoal) pra separar e-mails por assunto, marcar como importantes os que precisam de atenção, e criar filtros (regras) que organizam mensagens automaticamente assim que chegam. Resultado: uma caixa sob controle, onde o importante nunca se perde.',
      },
      estrutura: {
        titulo: 'As ferramentas de organização',
        partes: [
          { simbolo: '🏷️', desc: 'Marcadores/Pastas: categorias pra separar e-mails (Trabalho, Saúde, Contas).' },
          { simbolo: '⭐', desc: 'Marcar importante/estrela: destaca o que exige sua atenção.' },
          { simbolo: '⚙️', desc: 'Filtros (regras): "todo e-mail do banco X vai pra pasta Bancos, automaticamente".' },
          { simbolo: '🗄️', desc: 'Arquivar: tira da caixa de entrada sem apagar (some da frente, fica guardado).' },
        ],
      },
      exemplo: {
        titulo: 'Uma caixa organizada',
        celulas: [
          { ref: 'Filtro', valor: 'E-mails do banco → pasta "Bancos"' },
          { ref: 'Marcador', valor: 'Trabalho, Pessoal, Contas' },
          { ref: 'Estrela', valor: 'Os que preciso responder hoje' },
          { ref: 'Arquivar', valor: 'Resolvido → sai da frente, fica salvo' },
        ],
        formula: 'Pastas + filtros + estrela = caixa sob controle',
        resultado: 'Você acha tudo e nada importante se perde.',
        comentario: 'Comece simples: 3 ou 4 pastas e um filtro pros e-mails que mais chegam. Sistema complexo demais ninguém mantém.',
      },
      vocabulario: [
        { palavra: 'Marcador / Pasta', def: 'Categoria pra agrupar e-mails por assunto.' },
        { palavra: 'Filtro (regra)', def: 'Instrução que organiza e-mails automaticamente quando chegam.' },
        { palavra: 'Arquivar', def: 'Tirar o e-mail da caixa de entrada sem apagar; fica guardado e buscável.' },
      ],
      chave: [
        'Pastas/marcadores separam por assunto',
        'Filtros organizam automaticamente o que chega',
        'Arquivar limpa a caixa sem apagar',
      ],
      porque: 'No trabalho, você recebe dezenas de e-mails por dia. Quem mantém a caixa organizada responde no prazo, não perde nada e trabalha com tranquilidade — um sinal claro de profissionalismo.',
    },
    pratica: {
      instrucao: 'Abra seu Gmail. Vamos organizar sua caixa.',
      passos: [
        'Crie um marcador/pasta: no Gmail, role a lateral até "Criar novo marcador" (ex: "Contas")',
        'Selecione um e-mail e aplique esse marcador',
        'Marque um e-mail importante com a estrela',
        'Crie um filtro: abra um e-mail recorrente (ex: do banco), menu (3 pontos) → "Filtrar mensagens como esta"',
        'Defina a regra: aplicar o marcador "Contas" automaticamente',
        'Arquive um e-mail já resolvido (botão de arquivar) e veja sair da caixa',
        'Use a busca pra reencontrar o e-mail arquivado',
      ],
    },
    desafio: {
      cenario: 'Organize sua caixa de entrada real: crie pastas por assunto, marque os importantes e crie ao menos um filtro automático.',
      requisitos: [
        'Criei pelo menos 2 pastas/marcadores por assunto',
        'Apliquei marcadores a alguns e-mails',
        'Marquei e-mails importantes com estrela',
        'Criei pelo menos um filtro automático',
        'Arquivei e-mails já resolvidos',
      ],
      dica: 'A meta não é "zero e-mails", é "controle". Crie o hábito: ao abrir um e-mail, decida na hora — responder, arquivar, ou marcar pra depois. Não deixe acumular sem decisão.',
    },
    validacao: [
      'Sei criar pastas/marcadores',
      'Sei marcar e-mails importantes',
      'Sei criar um filtro automático',
      'Sei arquivar sem apagar',
      'Minha caixa está mais organizada',
    ],
  },

  'amb-com-5': {
    trilhaId: 'amb-com', numero: 5, titulo: 'Etiqueta corporativa',
    tempoTotal: 8, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Responder "ok" pra um chefe, escrever TUDO EM MAIÚSCULA, demorar 3 dias pra responder, ou usar "kkk" num e-mail de trabalho — pequenos deslizes que afetam como você é visto. A etiqueta corporativa te protege.',
      conceito: {
        titulo: 'O "jeito certo" de se comunicar no trabalho',
        texto: 'Etiqueta corporativa é o conjunto de boas práticas de comunicação no ambiente profissional: tom adequado, tempo de resposta razoável, respeito e clareza. Não é frescura — é o que faz você ser levado a sério. O mesmo conteúdo, comunicado com etiqueta, gera respeito; sem etiqueta, gera má impressão.',
      },
      estrutura: {
        titulo: 'Regras de ouro da etiqueta',
        partes: [
          { simbolo: '⏱️', desc: 'Tempo de resposta: responda em até 24h úteis, nem que seja "recebi, respondo até amanhã".' },
          { simbolo: '🔡', desc: 'Tom: nada de CAIXA ALTA (parece grito), nem excesso de "kkk", emoji ou gírias.' },
          { simbolo: '🙏', desc: 'Educação: "por favor", "obrigado(a)", "bom dia" — abrem portas.' },
          { simbolo: '🧊', desc: 'Calma: nunca responda no impulso/irritado. Escreva, espere, releia, depois envie.' },
        ],
      },
      exemplo: {
        titulo: 'Sem etiqueta x com etiqueta',
        celulas: [
          { ref: 'Sem', valor: '"manda logo isso" / "ok" / "VC VIU??"' },
          { ref: 'Com', valor: '"Bom dia! Quando puder, pode me enviar...?"' },
          { ref: 'Atraso', valor: 'Não pôde responder? "Recebi, retorno amanhã."' },
        ],
        formula: 'Tom respeitoso + resposta no prazo + clareza',
        resultado: 'Você é visto como profissional confiável.',
        comentario: 'Na dúvida sobre o tom, vá pelo mais formal. É mais fácil relaxar depois (quando a relação permite) do que recuperar uma má impressão.',
      },
      vocabulario: [
        { palavra: 'Etiqueta corporativa', def: 'Boas práticas de comportamento e comunicação no trabalho.' },
        { palavra: 'Tom', def: 'A "voz" da mensagem: formal, neutra, calorosa.' },
        { palavra: 'Tempo de resposta', def: 'O prazo aceitável pra responder (geralmente até 24h úteis).' },
      ],
      chave: [
        'Responda em até 24h úteis (nem que seja um aviso)',
        'Nada de CAIXA ALTA, gírias ou excesso de emoji',
        'Nunca responda irritado — escreva, espere, releia',
      ],
      porque: 'A etiqueta é o que faz colegas, chefes e clientes confiarem em você. Boa comunicação é citada em toda pesquisa como competência essencial — e a etiqueta é a base dela.',
    },
    pratica: {
      instrucao: 'Vamos analisar e reescrever mensagens com etiqueta. Use papel ou um documento.',
      passos: [
        'Escreva uma mensagem "tosca" de propósito (ex: "preciso disso urgente manda ai")',
        'Reescreva com etiqueta: saudação, "por favor", tom calmo, clareza',
        'Compare as duas — qual você responderia melhor?',
        'Pense num e-mail que te deixou irritado: como você responderia COM etiqueta?',
        'Escreva uma resposta de "recebido" pra usar quando não puder responder na hora',
        'Defina pra você uma regra de tempo de resposta (ex: até o fim do dia)',
      ],
    },
    desafio: {
      cenario: 'Pegue 2 mensagens informais/mal-educadas (reais ou inventadas) e reescreva-as com etiqueta corporativa impecável.',
      requisitos: [
        'Reescrevi 2 mensagens com tom adequado',
        'Incluí saudação e educação ("por favor", "obrigado")',
        'Removi CAIXA ALTA, gírias e excesso de emoji',
        'Uma das mensagens responde a uma situação tensa com calma',
        'Tenho uma frase-padrão de "recebido, respondo depois"',
      ],
      dica: 'Antes de enviar qualquer mensagem importante (ou em momento de irritação), aplique a "regra dos 10 minutos": escreva, espere, releia. 9 em cada 10 vezes você vai suavizar algo — e agradecer por isso.',
    },
    validacao: [
      'Sei o tempo de resposta adequado',
      'Uso tom respeitoso (sem caixa alta/gírias)',
      'Incluo educação nas mensagens',
      'Não respondo no impulso',
      'Sei reescrever uma mensagem com etiqueta',
    ],
  },

  'amb-com-6': {
    trilhaId: 'amb-com', numero: 6, titulo: 'Escrita clara, direto ao ponto',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Você escreve um parágrafo enorme e a pessoa responde "não entendi o que você quer". O problema raramente é o conteúdo — é a clareza. Escrever direto ao ponto é uma habilidade que se aprende.',
      conceito: {
        titulo: 'Menos palavras, mais clareza',
        texto: 'Escrita clara não é escrever bonito — é fazer o leitor entender rápido e sem esforço. Isso significa: dizer o principal primeiro, usar frases curtas, evitar rodeios e palavras difíceis, e pedir uma ação clara. No trabalho, quem escreve com clareza é entendido, atendido e respeitado. Texto confuso gera retrabalho e irritação.',
      },
      estrutura: {
        titulo: 'Princípios da escrita clara',
        partes: [
          { simbolo: '🥇', desc: 'O principal primeiro: diga logo o que quer, antes dos detalhes.' },
          { simbolo: '✂️', desc: 'Frases curtas: uma ideia por frase. Corte palavras que não fazem falta.' },
          { simbolo: '🗣️', desc: 'Palavras simples: escreva como você falaria de forma educada, sem rebuscar.' },
          { simbolo: '👉', desc: 'Ação clara: termine dizendo o que você espera ("pode confirmar até sexta?").' },
        ],
      },
      exemplo: {
        titulo: 'Confuso x claro',
        celulas: [
          { ref: 'Confuso', valor: '"Venho por meio desta solicitar, se possível e caso haja disponibilidade, a gentileza de..."' },
          { ref: 'Claro', valor: '"Você pode me enviar o relatório até sexta? Obrigada."' },
          { ref: 'Resultado', valor: 'O claro é respondido na hora' },
        ],
        formula: 'Principal primeiro + frases curtas + ação clara',
        resultado: 'Você é entendido de primeira.',
        comentario: 'Teste: se você precisa reler a própria frase pra entender, o leitor também vai precisar. Simplifique até ficar óbvio.',
      },
      vocabulario: [
        { palavra: 'Clareza', def: 'Qualidade de um texto que se entende rápido e sem esforço.' },
        { palavra: 'Rodeio', def: 'Voltas e enfeites que adiam o que importa; o inimigo da clareza.' },
        { palavra: 'Chamada pra ação', def: 'A frase que diz o que você espera que o leitor faça.' },
      ],
      chave: [
        'Diga o principal primeiro',
        'Frases curtas, palavras simples',
        'Termine com uma ação clara',
      ],
      porque: 'Comunicação clara é uma das competências mais valorizadas no mercado. Quem escreve direto ao ponto economiza o tempo de todos, evita mal-entendidos e projeta confiança e competência.',
    },
    pratica: {
      instrucao: 'Vamos enxugar textos. Use um documento ou a IA como apoio (da trilha pc-ia).',
      passos: [
        'Pegue um e-mail ou mensagem longa que você escreveu (ou escreva uma rebuscada)',
        'Sublinhe a ÚNICA frase que diz o que você realmente quer',
        'Reescreva começando por essa frase',
        'Corte palavras de enchimento ("venho por meio desta", "no sentido de", "caso haja possibilidade")',
        'Quebre frases longas em frases curtas',
        'Termine com uma pergunta/ação clara',
        'Compare o antes e o depois — quantas palavras você cortou?',
      ],
    },
    desafio: {
      cenario: 'Reescreva uma comunicação real sua (e-mail, recado, pedido) deixando-a clara e direta — com menos palavras e mais impacto.',
      requisitos: [
        'O principal aparece logo no início',
        'As frases são curtas (uma ideia cada)',
        'Cortei palavras de enchimento e rebuscamento',
        'Termina com uma ação/pergunta clara',
        'A versão final é mais curta e mais clara que a original',
      ],
      dica: 'Use a IA como treinadora: cole seu texto e peça "deixe mais claro e direto, cortando o que não é essencial". Compare com o seu — você aprende padrões de clareza vendo o que ela corta.',
    },
    validacao: [
      'Coloco o principal no início',
      'Uso frases curtas',
      'Corto enchimento e rebuscamento',
      'Termino com uma ação clara',
      'Sei deixar um texto mais claro',
    ],
  },

  'amb-com-7': {
    trilhaId: 'amb-com', numero: 7, titulo: 'E-mail x WhatsApp x ligação',
    tempoTotal: 7, xp: 40, vertente: 'ambos',
    aula: {
      gancho: 'Mandar um assunto sério e formal por WhatsApp, ou ligar pra algo que poderia ser um e-mail rápido — usar o canal errado atrapalha a comunicação. Cada situação tem o canal certo.',
      conceito: {
        titulo: 'O canal certo pra cada mensagem',
        texto: 'E-mail, WhatsApp e ligação servem a propósitos diferentes. E-mail é pro formal, documentado, que precisa de registro (propostas, documentos, assuntos oficiais). WhatsApp é pro rápido, informal e ágil (avisos, dúvidas pontuais). Ligação é pro urgente, sensível ou complexo, que pede conversa. Escolher certo torna a comunicação eficaz e adequada.',
      },
      estrutura: {
        titulo: 'Quando usar cada canal',
        partes: [
          { simbolo: '✉️', desc: 'E-mail: formal, com anexos, que precisa ficar registrado. Resposta não imediata.' },
          { simbolo: '💬', desc: 'WhatsApp: rápido, informal, avisos e dúvidas curtas. Cuidado com horário e formalidade.' },
          { simbolo: '📞', desc: 'Ligação: urgente, delicado ou complexo demais pra escrever. Resolve na hora.' },
          { simbolo: '🤔', desc: 'Na dúvida entre WhatsApp e e-mail pro trabalho formal: prefira e-mail.' },
        ],
      },
      exemplo: {
        titulo: 'Canal certo pra cada caso',
        celulas: [
          { ref: 'Enviar contrato', valor: 'E-mail (formal, registrado, anexo)' },
          { ref: 'Avisar que chegou', valor: 'WhatsApp (rápido)' },
          { ref: 'Problema urgente', valor: 'Ligação (resolve na hora)' },
          { ref: 'Assunto delicado', valor: 'Ligação ou pessoalmente' },
        ],
        formula: 'Formal/registro → e-mail · rápido → WhatsApp · urgente → ligar',
        resultado: 'A mensagem certa, no canal certo, com o efeito certo.',
        comentario: 'Assuntos sérios ou delicados por mensagem escrita geram mal-entendidos (falta o tom de voz). Nesses casos, ligue ou converse pessoalmente.',
      },
      vocabulario: [
        { palavra: 'Canal de comunicação', def: 'O meio usado pra mensagem: e-mail, WhatsApp, ligação, presencial.' },
        { palavra: 'Comunicação síncrona', def: 'Em tempo real (ligação, conversa); exige os dois ao mesmo tempo.' },
        { palavra: 'Registro', def: 'O e-mail fica documentado; útil pra comprovar o que foi combinado.' },
      ],
      chave: [
        'E-mail pro formal e registrado; WhatsApp pro rápido; ligação pro urgente/delicado',
        'Na dúvida no trabalho formal, prefira e-mail',
        'Assunto sensível? Ligue ou converse pessoalmente',
      ],
      porque: 'Usar o canal certo evita mal-entendidos, respeita o tempo dos outros e mostra inteligência de comunicação — algo que diferencia profissionais maduros de iniciantes.',
    },
    pratica: {
      instrucao: 'Vamos exercitar a escolha de canal. Pegue papel ou um documento.',
      passos: [
        'Liste 5 situações de comunicação do seu dia (avisar algo, pedir um documento, resolver um problema...)',
        'Pra cada uma, decida: e-mail, WhatsApp ou ligação? E por quê?',
        'Identifique uma situação em que você usou o canal errado no passado',
        'Pense em como teria sido melhor com o canal certo',
        'Defina uma regra pessoal: assuntos de trabalho formais sempre por e-mail',
        'Pense num assunto delicado: você escreveria ou ligaria?',
      ],
    },
    desafio: {
      cenario: 'Analise 5 situações reais de comunicação e classifique o canal ideal pra cada, justificando a escolha.',
      requisitos: [
        'Listei 5 situações reais',
        'Escolhi o canal ideal pra cada',
        'Justifiquei com base em formal/rápido/urgente/delicado',
        'Identifiquei um erro de canal que já cometi',
        'Tenho uma regra pessoal pra assuntos formais',
      ],
      dica: 'Regra prática: se precisa ficar registrado ou tem anexo, é e-mail. Se é "só pra avisar", WhatsApp. Se é urgente, delicado ou está rendendo muitas mensagens sem resolver, ligue.',
    },
    validacao: [
      'Sei quando usar e-mail',
      'Sei quando usar WhatsApp',
      'Sei quando ligar',
      'Prefiro e-mail pra assuntos formais',
      'Ligo/converso em assuntos delicados',
    ],
  },

  'amb-com-8': {
    trilhaId: 'amb-com', numero: 8, titulo: 'Projeto: responda 3 situações reais',
    tempoTotal: 18, xp: 100, vertente: 'ambos',
    aula: {
      gancho: 'Hora de provar que você domina a comunicação profissional: você vai responder 3 situações reais de trabalho por e-mail, aplicando tudo — estrutura, etiqueta, clareza e o canal certo.',
      conceito: {
        titulo: 'Comunicação profissional na prática',
        texto: 'No trabalho, você responde a situações o tempo todo: um pedido do chefe, uma dúvida de cliente, um imprevisto. Responder bem a cada uma — com a estrutura certa, tom adequado, clareza e ação definida — é o que constrói sua reputação. Este projeto simula 3 dessas situações pra você praticar num ambiente seguro.',
      },
      estrutura: {
        titulo: 'As 3 situações',
        partes: [
          { simbolo: '1', desc: 'O chefe pede um relatório com prazo apertado e você precisa de mais um dia.' },
          { simbolo: '2', desc: 'Um cliente reclama de um atraso e você precisa responder com calma e solução.' },
          { simbolo: '3', desc: 'Um colega te convida pra uma reunião em horário que você não pode.' },
          { simbolo: '✅', desc: 'Em cada: assunto claro, saudação, pedido/resposta no início, tom adequado, ação definida.' },
        ],
      },
      exemplo: {
        titulo: 'Checklist de uma boa resposta',
        celulas: [
          { ref: 'Estrutura', valor: 'Assunto + saudação + corpo + fecho' },
          { ref: 'Etiqueta', valor: 'Tom respeitoso, calmo, educado' },
          { ref: 'Clareza', valor: 'Principal no início, frases curtas' },
          { ref: 'Ação', valor: 'O que acontece a seguir, definido' },
        ],
        formula: 'Estrutura + etiqueta + clareza + ação = resposta profissional',
        resultado: 'Você responde qualquer situação com confiança.',
        comentario: 'A situação 2 (cliente irritado) é a mais difícil: reconheça o problema, mantenha a calma, ofereça uma solução. Nunca responda na defensiva.',
      },
      vocabulario: [
        { palavra: 'Situação-problema', def: 'Um cenário real de trabalho que exige uma resposta de comunicação.' },
        { palavra: 'Resposta profissional', def: 'Mensagem que combina estrutura, etiqueta, clareza e ação.' },
        { palavra: 'Solução', def: 'O encaminhamento que você oferece pra resolver o que foi trazido.' },
      ],
      chave: [
        'Cada resposta: estrutura + etiqueta + clareza + ação',
        'Em situação tensa, calma e foco na solução',
        'Sempre termine definindo o próximo passo',
      ],
      porque: 'Este projeto reúne toda a trilha numa demonstração real de competência comunicativa — a habilidade nº1 valorizada em qualquer função. Dominar isso te prepara pra qualquer situação do mundo do trabalho.',
    },
    pratica: {
      instrucao: 'Reserve 18 minutos. Responda às 3 situações por e-mail (pode escrever no seu e-mail e enviar pra você mesmo). Use a IA pra revisar, se quiser.',
      passos: [
        'Situação 1 (prazo): escreva ao "chefe" pedindo mais um dia, com motivo e novo prazo claro',
        'Aplique: assunto específico, tom respeitoso, pedido no início, alternativa concreta',
        'Situação 2 (cliente irritado): responda reconhecendo o problema, com calma e uma solução',
        'Cuide do tom: nada defensivo; foque no que você VAI fazer pra resolver',
        'Situação 3 (reunião em horário ruim): recuse com educação e proponha alternativas',
        'Releia as 3 aplicando o checklist (estrutura, etiqueta, clareza, ação)',
        'Opcional: peça à IA "revise mantendo profissional e natural"',
      ],
    },
    desafio: {
      cenario: 'Entregue as 3 respostas profissionais completas, cada uma demonstrando estrutura, etiqueta, clareza e uma ação/solução definida.',
      requisitos: [
        'Respondi à situação do prazo com alternativa concreta',
        'Respondi ao cliente com calma e solução',
        'Recusei a reunião com educação e alternativa',
        'As 3 têm assunto, saudação, corpo claro e fecho',
        'Em todas, o próximo passo está definido',
        'O tom é profissional e adequado a cada caso',
      ],
      dica: 'Parabéns — você concluiu a trilha de Comunicação! Guarde essas 3 respostas como modelos. Situações parecidas vão aparecer na vida real, e você já terá um ponto de partida testado. Comunicação clara abre mais portas que qualquer diploma.',
    },
    validacao: [
      'Respondi às 3 situações com estrutura completa',
      'Apliquei etiqueta adequada a cada caso',
      'Escrevi com clareza e objetividade',
      'Defini uma ação/solução em cada resposta',
      'Mantive o tom profissional, mesmo na situação tensa',
      'Me sinto preparado pra responder situações reais',
    ],
  },
};
