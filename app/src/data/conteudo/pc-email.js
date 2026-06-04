// ============================================================================
// CONTEÚDO — E-mail de Verdade: Gmail e Outlook (pc-email)
// Anatomia do e-mail, escrever/responder, anexos, organizar, spam/segurança,
// assinatura, e-mail profissional. Comunicação adulta e formal.
// ============================================================================

export const PC_EMAIL = {
  'pc-email-1': {
    trilhaId: 'pc-email', numero: 1, titulo: 'O que é um e-mail e por que ele ainda importa',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Num mundo de WhatsApp, pra que serve e-mail? Pra tudo que é sério: emprego, banco, faculdade, governo, comprovantes. O e-mail é seu endereço oficial na internet — e quem não domina ele perde oportunidades de verdade.',
      conceito: {
        titulo: 'O e-mail é seu endereço oficial',
        texto: 'E-mail (correio eletrônico) é como uma carta digital: você tem um endereço único (seu@email.com), envia e recebe mensagens, e elas ficam guardadas pra sempre. Diferente do WhatsApp (informal, rápido), o e-mail é o canal FORMAL: empresas pedem e-mail pra te contratar, bancos mandam comprovante por e-mail, faculdades e o governo se comunicam por e-mail. Cada endereço tem duas partes: o nome (antes do @) e o provedor (depois do @: gmail.com, outlook.com).',
      },
      estrutura: {
        titulo: 'Anatomia de um endereço de e-mail',
        partes: [
          { simbolo: '👤', desc: 'Nome de usuário: o que vem antes do @ (ex.: maria.silva).' },
          { simbolo: '@', desc: 'Arroba: separa o nome do provedor. Todo e-mail tem um.' },
          { simbolo: '🏢', desc: 'Provedor: o serviço, depois do @ (gmail.com, outlook.com).' },
          { simbolo: '🔑', desc: 'Senha: protege sua conta. Nunca compartilhe com ninguém.' },
        ],
      },
      exemplo: {
        titulo: 'E-mail vs. WhatsApp: cada um no seu lugar',
        celulas: [
          { ref: 'Mandar currículo', valor: 'E-mail: formal, fica registrado, profissional' },
          { ref: 'Avisar que chegou', valor: 'WhatsApp: rápido e informal' },
          { ref: 'Receber comprovante', valor: 'E-mail: guardado pra sempre, dá pra buscar' },
          { ref: 'Cadastro em sites', valor: 'E-mail: vira seu login na maioria dos serviços' },
        ],
        formula: 'nome + @ + provedor = seu endereço oficial',
        resultado: 'Um canal formal e permanente, separado do bate-papo.',
        comentario: 'Pra trabalho, escolha um e-mail sério: nome.sobrenome@gmail.com passa muito mais credibilidade que "gatinha2010" ou "playboy_z*". O endereço é seu cartão de visita.',
      },
      vocabulario: [
        { palavra: 'E-mail', def: 'Correio eletrônico: mensagens formais com endereço único e permanente.' },
        { palavra: 'Provedor', def: 'O serviço que hospeda seu e-mail (Gmail, Outlook, Yahoo).' },
        { palavra: 'Caixa de entrada', def: 'A tela onde chegam os e-mails que você recebe.' },
      ],
      chave: [
        'E-mail é o canal formal: emprego, banco, governo',
        'O endereço tem nome + @ + provedor',
        'Pra trabalho, use um endereço sério com seu nome',
      ],
      porque: 'Quem não usa e-mail fica de fora do mundo formal: não recebe propostas de emprego, não guarda comprovantes, não acessa serviços. Dominar o e-mail é destravar oportunidades sérias.',
    },
    pratica: {
      instrucao: 'Vamos reconhecer seu e-mail e a caixa de entrada. Se você já tem conta (Gmail/Outlook), abra-a; senão, observe um exemplo.',
      passos: [
        'Abra o Gmail (gmail.com) ou Outlook (outlook.com) e entre na sua conta',
        'Olhe seu endereço completo: identifique o nome, o @ e o provedor',
        'Veja a "Caixa de entrada": a lista de e-mails recebidos',
        'Repare quais estão em negrito (não lidos) e quais não (já lidos)',
        'Clique num e-mail pra abri-lo e veja remetente, assunto e corpo',
      ],
    },
    desafio: {
      cenario: 'Identifique seu endereço de e-mail completo, diga suas duas partes (nome e provedor) e localize na tela: caixa de entrada, um e-mail não lido e um já lido.',
      requisitos: [
        'Sei dizer meu endereço de e-mail completo',
        'Identifiquei o nome (antes do @) e o provedor (depois)',
        'Localizei a caixa de entrada',
        'Reconheço e-mails lidos e não lidos (negrito)',
        'Abri um e-mail e vi remetente, assunto e corpo',
      ],
      dica: 'Ainda não tem e-mail? Criar conta envolve dados pessoais e senha — peça ajuda de alguém de confiança na primeira vez, ou faça num momento calmo. Tendo a conta, todas as próximas missões fluem.',
    },
    validacao: [
      'Sei o que é um e-mail e pra que serve',
      'Reconheço as partes de um endereço',
      'Diferencio e-mail de WhatsApp (formal x informal)',
      'Localizo a caixa de entrada',
      'Distingo e-mails lidos e não lidos',
    ],
  },

  'pc-email-2': {
    trilhaId: 'pc-email', numero: 2, titulo: 'Escrever e enviar seu primeiro e-mail',
    tempoTotal: 10, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'Enviar um e-mail tem três campos que importam e um botão. Parece pouco — e é. Mas cada campo tem seu papel, e preencher direito faz a diferença entre parecer amador ou profissional. Hoje você manda o seu primeiro com segurança.',
      conceito: {
        titulo: 'Para, Assunto, Mensagem: os três pilares',
        texto: 'Pra escrever um e-mail você clica em "Escrever" (ou "Novo e-mail") e preenche três campos. PARA: o endereço de quem vai receber (preste atenção pra digitar certinho). ASSUNTO: um resumo curto do e-mail, que aparece na lista de quem recebe — "Currículo para vaga de auxiliar" é melhor que vazio. MENSAGEM (corpo): o texto em si, com saudação, recado e despedida. Depois é só clicar em Enviar. Um e-mail bem feito é claro, educado e tem assunto.',
      },
      estrutura: {
        titulo: 'Os campos do e-mail',
        partes: [
          { simbolo: '📧', desc: 'Para: o endereço do destinatário. Confira letra por letra.' },
          { simbolo: '📝', desc: 'Assunto: resumo curto; é a "manchete" do seu e-mail.' },
          { simbolo: '💬', desc: 'Mensagem: saudação + recado + despedida com seu nome.' },
          { simbolo: '📤', desc: 'Enviar: o botão que dispara. Releia antes de clicar.' },
        ],
      },
      exemplo: {
        titulo: 'Um e-mail simples e bem feito',
        celulas: [
          { ref: 'Para', valor: 'rh@empresa.com.br (conferido)' },
          { ref: 'Assunto', valor: 'Candidatura — vaga de Auxiliar Administrativo' },
          { ref: 'Saudação', valor: '"Prezados, bom dia."' },
          { ref: 'Despedida', valor: '"Atenciosamente, Maria Silva"' },
        ],
        formula: 'Para (certo) + Assunto (claro) + Mensagem (educada) + Enviar',
        resultado: 'Um e-mail profissional que chega e é bem recebido.',
        comentario: 'Errou uma letra no endereço? O e-mail volta com erro ("não entregue") ou vai pra pessoa errada. Por isso confira o campo "Para" com calma antes de enviar — é o erro nº 1 dos iniciantes.',
      },
      vocabulario: [
        { palavra: 'Destinatário', def: 'A pessoa que vai receber o e-mail; vai no campo "Para".' },
        { palavra: 'Assunto', def: 'O resumo curto do e-mail, que aparece na lista de quem recebe.' },
        { palavra: 'Corpo', def: 'O texto principal da mensagem, entre a saudação e a despedida.' },
      ],
      chave: [
        'Preencha Para, Assunto e Mensagem antes de enviar',
        'Assunto claro ajuda quem recebe a entender na hora',
        'Confira o endereço letra por letra antes de clicar Enviar',
      ],
      porque: 'Saber escrever um e-mail claro e educado é uma habilidade que abre portas: candidatar-se a vagas, falar com professores, resolver pendências com empresas. Comunicação formal é poder.',
    },
    pratica: {
      instrucao: 'Vamos escrever um e-mail de teste — envie pra você mesmo, pra praticar sem risco.',
      passos: [
        'Clique em "Escrever" / "Novo e-mail"',
        'No campo "Para", digite o SEU próprio endereço de e-mail',
        'No "Assunto", escreva "Teste — meu primeiro e-mail"',
        'Na mensagem, escreva uma saudação, uma frase e despedida com seu nome',
        'Releia e clique em "Enviar"; depois veja chegar na sua caixa de entrada',
      ],
    },
    desafio: {
      cenario: 'Escreva e envie pra você mesmo um e-mail completo: com assunto claro, saudação, um recado de duas frases e despedida com seu nome. Depois abra-o na caixa de entrada e confira.',
      requisitos: [
        'Preenchi o campo "Para" corretamente',
        'Escrevi um assunto claro e específico',
        'Incluí saudação no início',
        'Escrevi o recado e me despedi com meu nome',
        'Enviei e confirmei que o e-mail chegou',
      ],
      dica: 'Mandar pra alguém de verdade? Mande primeiro pra você mesmo pra ver como fica. Só depois envie pro destinatário real — assim você confere a aparência sem risco de errar na frente de quem importa.',
    },
    validacao: [
      'Abro a tela de escrever e-mail',
      'Preencho Para, Assunto e Mensagem',
      'Escrevo com saudação e despedida',
      'Confiro o endereço antes de enviar',
      'Enviei e recebi meu próprio e-mail',
    ],
  },

  'pc-email-3': {
    trilhaId: 'pc-email', numero: 3, titulo: 'Responder, encaminhar e o cuidado com "responder a todos"',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Recebeu um e-mail e precisa retornar? Há três botões parecidos — Responder, Responder a todos e Encaminhar — e escolher o errado pode mandar sua resposta pra dez pessoas que não deviam ver. Hoje você nunca mais erra.',
      conceito: {
        titulo: 'Três botões, três destinos diferentes',
        texto: 'RESPONDER manda sua resposta só pra quem te enviou — o caso mais comum. RESPONDER A TODOS manda pra quem enviou E pra todo mundo que estava no e-mail (cuidado: às vezes são muitas pessoas). ENCAMINHAR pega o e-mail recebido e manda pra uma pessoa NOVA, que não estava na conversa — útil pra repassar uma informação. Saber qual usar evita o vexame clássico de responder "obrigada!" pra uma lista inteira de 50 pessoas.',
      },
      estrutura: {
        titulo: 'Qual botão pra qual situação',
        partes: [
          { simbolo: '↩️', desc: 'Responder: vai só pra quem te mandou. O padrão seguro.' },
          { simbolo: '↪️', desc: 'Responder a todos: vai pra todos do e-mail. Use com critério.' },
          { simbolo: '➡️', desc: 'Encaminhar: repassa o e-mail pra alguém novo.' },
          { simbolo: '👀', desc: 'Antes de enviar: olhe quem está no "Para" e no "Cc".' },
        ],
      },
      exemplo: {
        titulo: 'Escolhendo certo',
        celulas: [
          { ref: 'Agradecer ao remetente', valor: 'Responder (só pra ele) — não a todos' },
          { ref: 'Combinar algo com o grupo', valor: 'Responder a todos (todos precisam ver)' },
          { ref: 'Repassar pro seu chefe', valor: 'Encaminhar pra ele (não estava na conversa)' },
          { ref: 'Na dúvida', valor: 'Responder só. Adicione gente manualmente se precisar' },
        ],
        formula: 'Responder = remetente · Resp. a todos = grupo · Encaminhar = alguém novo',
        resultado: 'Sua mensagem chega exatamente a quem deve — e só a quem deve.',
        comentario: 'Regra de ouro: na dúvida, use "Responder" (só ao remetente). É sempre mais seguro mandar pra menos gente e adicionar alguém depois do que mandar pra todo mundo sem querer.',
      },
      vocabulario: [
        { palavra: 'Responder a todos', def: 'Enviar a resposta pra todas as pessoas que estavam no e-mail original.' },
        { palavra: 'Encaminhar', def: 'Repassar um e-mail recebido pra uma pessoa que não estava na conversa.' },
        { palavra: 'Cc (com cópia)', def: 'Campo com outras pessoas que também recebem o e-mail, em cópia.' },
      ],
      chave: [
        'Responder vai só pro remetente (mais seguro)',
        'Responder a todos vai pro grupo inteiro — cuidado',
        'Encaminhar repassa pra alguém novo',
      ],
      porque: 'Escolher o botão certo evita constrangimentos e vazamento de informação. No trabalho, "responder a todos" sem querer já causou muita dor de cabeça — você vai saber evitar.',
    },
    pratica: {
      instrucao: 'Use o e-mail de teste que você enviou pra si mesmo na missão anterior pra treinar os botões.',
      passos: [
        'Abra o e-mail de teste que está na sua caixa de entrada',
        'Clique em "Responder" e veja que o campo "Para" já vem preenchido com o remetente',
        'Escreva uma resposta curta e envie',
        'Abra de novo e clique em "Encaminhar": repare que o "Para" vem VAZIO',
        'Note a diferença: responder mantém o destinatário; encaminhar pede um novo',
      ],
    },
    desafio: {
      cenario: 'Num e-mail de teste, faça as três ações: responda ao remetente, observe o que mudaria no "responder a todos" e encaminhe pra outro endereço seu (ou simule, lendo os campos).',
      requisitos: [
        'Usei "Responder" e vi o destinatário já preenchido',
        'Entendi que "Responder a todos" inclui mais gente',
        'Usei "Encaminhar" e vi o campo "Para" vazio',
        'Sei dizer quando usar cada um dos três',
        'Tenho o hábito de conferir os destinatários antes de enviar',
      ],
      dica: 'Vai responder a todos num grupo grande? Pare e pense: "todo mundo PRECISA ler isto?". Se a resposta for não (ex.: um simples "ok, obrigado"), use Responder só pra quem te escreveu.',
    },
    validacao: [
      'Sei usar Responder',
      'Entendo o risco do Responder a todos',
      'Sei encaminhar pra alguém novo',
      'Confiro os destinatários antes de enviar',
      'Escolho o botão certo pra cada situação',
    ],
  },

  'pc-email-4': {
    trilhaId: 'pc-email', numero: 4, titulo: 'Anexos: enviar e abrir arquivos com segurança',
    tempoTotal: 10, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'O e-mail é o jeito mais usado de enviar documentos: currículo, foto, comprovante, contrato. Isso se chama anexar. E na hora de receber anexos, há um cuidado de segurança que protege você de golpes. Hoje você domina os dois lados.',
      conceito: {
        titulo: 'Anexo é o arquivo que viaja junto com o e-mail',
        texto: 'ANEXAR é grudar um arquivo (PDF, foto, documento) ao seu e-mail, pra que a pessoa receba junto com a mensagem. Você clica no ícone de CLIPE 📎, escolhe o arquivo no computador e ele sobe. Do outro lado, quem recebe vê o anexo e pode abrir ou baixar. O cuidado importante: só abra anexos de quem você conhece e espera receber. Anexo inesperado, de remetente estranho, pode ser vírus — mesmo que pareça uma foto ou um boleto.',
      },
      estrutura: {
        titulo: 'Enviar e receber anexos',
        partes: [
          { simbolo: '📎', desc: 'Clipe: o ícone de anexar. Clique nele pra escolher o arquivo.' },
          { simbolo: '📂', desc: 'Escolher arquivo: navegue até a pasta e selecione o documento.' },
          { simbolo: '⏳', desc: 'Esperar subir: o anexo carrega; aguarde terminar antes de enviar.' },
          { simbolo: '⚠️', desc: 'Receber: só abra anexo de quem você conhece e espera.' },
        ],
      },
      exemplo: {
        titulo: 'Anexando com cuidado',
        celulas: [
          { ref: 'Enviar currículo', valor: 'Clipe 📎 → escolher Curriculo.pdf → esperar subir → enviar' },
          { ref: 'Anexo de amigo esperado', valor: 'Pode abrir: é a foto que ele avisou que mandaria' },
          { ref: 'Anexo de estranho', valor: 'Não abra: "boleto.exe" de quem você não conhece = golpe' },
          { ref: 'Limite de tamanho', valor: 'Arquivos muito grandes: use link do Drive (próxima trilha)' },
        ],
        formula: 'Anexar: clipe → arquivo → esperar subir → enviar',
        resultado: 'Documentos enviados e anexos abertos com segurança.',
        comentario: 'Anexo em PDF é o mais seguro pra enviar documentos: abre igual em qualquer aparelho e ninguém edita sem querer. Pra currículo e comprovantes, prefira sempre PDF.',
      },
      vocabulario: [
        { palavra: 'Anexar', def: 'Adicionar um arquivo ao e-mail pra enviá-lo junto da mensagem.' },
        { palavra: 'Anexo', def: 'O arquivo que viaja com o e-mail (PDF, foto, documento).' },
        { palavra: 'Baixar (download)', def: 'Salvar no seu computador um anexo que você recebeu.' },
      ],
      chave: [
        'Anexar é clicar no clipe 📎 e escolher o arquivo',
        'Espere o anexo subir antes de enviar',
        'Só abra anexos de quem você conhece e espera',
      ],
      porque: 'Enviar documentos por e-mail é essencial pra trabalho, faculdade e burocracia. E saber desconfiar de anexos suspeitos é uma das defesas mais importantes contra vírus e golpes.',
    },
    pratica: {
      instrucao: 'Vamos anexar um arquivo num e-mail de teste pra você mesmo.',
      passos: [
        'Clique em "Escrever" e preencha o "Para" com seu próprio e-mail',
        'Clique no ícone de clipe 📎 ("Anexar arquivo")',
        'Escolha um arquivo qualquer do seu computador (uma imagem serve)',
        'Espere a barrinha de carregamento do anexo terminar',
        'Envie e, na caixa de entrada, abra o e-mail e veja o anexo recebido',
      ],
    },
    desafio: {
      cenario: 'Envie pra você mesmo um e-mail com um anexo (de preferência um PDF). Depois, abra o e-mail recebido, baixe o anexo e confirme que ele chegou inteiro.',
      requisitos: [
        'Anexei um arquivo usando o clipe 📎',
        'Esperei o anexo carregar antes de enviar',
        'Recebi o e-mail e localizei o anexo',
        'Baixei/abri o anexo recebido',
        'Sei que não devo abrir anexos de remetentes desconhecidos',
      ],
      dica: 'Recebeu um anexo que termina em .exe, .scr, .bat ou um .zip inesperado, mesmo de contato conhecido? Desconfie — a conta dele pode ter sido invadida. Na dúvida, pergunte por outro canal antes de abrir.',
    },
    validacao: [
      'Anexo arquivos com o clipe',
      'Espero o anexo subir antes de enviar',
      'Recebo e baixo anexos',
      'Prefiro PDF pra enviar documentos',
      'Desconfio de anexos inesperados',
    ],
  },

  'pc-email-5': {
    trilhaId: 'pc-email', numero: 5, titulo: 'Organizar a caixa: buscar, marcar e arquivar',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Uma caixa de entrada com 5.000 e-mails não lidos dá um aperto no peito. Mas você não precisa ler tudo — precisa achar o que importa e tirar da frente o que não importa. Hoje você vira o chefe da sua caixa de entrada.',
      conceito: {
        titulo: 'Buscar, arquivar e marcar: o tripé da ordem',
        texto: 'Você não precisa de pasta pra cada coisa. O e-mail moderno tem três ferramentas que bastam. BUSCAR: digite um nome, palavra ou remetente e ache qualquer e-mail em segundos. ARQUIVAR: tira o e-mail da caixa de entrada sem apagar — ele continua existindo e aparece na busca, mas some da sua frente. MARCAR (estrela/importante): destaca os e-mails que você precisa retomar depois. Com esses três, sua caixa fica limpa e nada se perde.',
      },
      estrutura: {
        titulo: 'As ferramentas de organização',
        partes: [
          { simbolo: '🔍', desc: 'Buscar: campo no topo; ache por remetente, assunto ou palavra.' },
          { simbolo: '📥', desc: 'Arquivar: some da caixa de entrada sem apagar; fica guardado.' },
          { simbolo: '⭐', desc: 'Marcar com estrela: destaca o que você quer retomar depois.' },
          { simbolo: '🗑️', desc: 'Excluir: pra lixo de verdade. Vai pra lixeira por 30 dias.' },
        ],
      },
      exemplo: {
        titulo: 'Domando a caixa de entrada',
        celulas: [
          { ref: 'Achar o boleto da luz', valor: 'Buscar "energia" ou o nome da empresa' },
          { ref: 'E-mail já resolvido', valor: 'Arquivar: sai da frente, mas fica guardado' },
          { ref: 'Preciso responder amanhã', valor: 'Marcar com estrela pra não esquecer' },
          { ref: 'Propaganda inútil', valor: 'Excluir (ou cancelar inscrição)' },
        ],
        formula: 'Buscar acha · Arquivar guarda · Estrela destaca · Excluir descarta',
        resultado: 'Caixa de entrada limpa, com tudo localizável.',
        comentario: 'Diferença-chave: ARQUIVAR guarda (você acha depois na busca); EXCLUIR manda pra lixeira. Na dúvida, arquive — é reversível e você não perde nada importante por engano.',
      },
      vocabulario: [
        { palavra: 'Arquivar', def: 'Tirar o e-mail da caixa de entrada sem apagá-lo; continua acessível pela busca.' },
        { palavra: 'Marcar com estrela', def: 'Destacar um e-mail importante pra retomar com facilidade depois.' },
        { palavra: 'Buscar', def: 'Encontrar e-mails digitando remetente, assunto ou palavra no campo de pesquisa.' },
      ],
      chave: [
        'Busque em vez de criar mil pastas',
        'Arquivar limpa a caixa sem apagar nada',
        'Estrela destaca o que precisa de retorno',
      ],
      porque: 'Uma caixa organizada reduz o estresse e evita perder coisas importantes (um boleto, uma proposta). E a busca te dá superpoder: qualquer e-mail recebido, você reencontra em segundos.',
    },
    pratica: {
      instrucao: 'Vamos organizar sua caixa de entrada de verdade, com calma.',
      passos: [
        'Use o campo de busca no topo: digite um nome ou palavra e veja os resultados',
        'Abra um e-mail antigo já resolvido e clique em "Arquivar"',
        'Confirme que ele saiu da caixa de entrada (busque-o pra ver que ainda existe)',
        'Marque um e-mail importante com a estrela ⭐',
        'Exclua um e-mail de propaganda que você não quer mais',
      ],
    },
    desafio: {
      cenario: 'Faça uma faxina mínima: busque e ache um e-mail específico, arquive 3 e-mails já resolvidos, marque 1 importante com estrela e exclua 1 propaganda. Note como a caixa fica mais limpa.',
      requisitos: [
        'Usei a busca pra encontrar um e-mail específico',
        'Arquivei pelo menos 3 e-mails já resolvidos',
        'Confirmei que arquivar não apaga (achei pela busca)',
        'Marquei um e-mail importante com estrela',
        'Entendi a diferença entre arquivar e excluir',
      ],
      dica: 'Recebe muita propaganda? No rodapé desses e-mails há um link "cancelar inscrição" (unsubscribe). Cancelar a inscrição seca a fonte — melhor que ficar excluindo o mesmo tipo de e-mail toda semana.',
    },
    validacao: [
      'Encontro e-mails pela busca',
      'Arquivo o que já resolvi',
      'Sei que arquivar não apaga',
      'Marco importantes com estrela',
      'Mantenho a caixa de entrada sob controle',
    ],
  },

  'pc-email-6': {
    trilhaId: 'pc-email', numero: 6, titulo: 'Spam e golpes: reconhecer e-mails perigosos',
    tempoTotal: 10, xp: 60, vertente: 'computador',
    aula: {
      gancho: '"Você ganhou um prêmio!", "Sua conta será bloqueada em 24h!", "Atualize seus dados bancários AGORA". Esses e-mails têm um objetivo: te assustar pra você clicar sem pensar. Aprender a reconhecê-los é uma das defesas mais valiosas da vida digital.',
      conceito: {
        titulo: 'O golpe se disfarça de urgência',
        texto: 'SPAM é e-mail indesejado (propaganda em massa) — chato, mas geralmente inofensivo. O perigoso é o PHISHING: um e-mail que se passa por banco, loja ou governo pra roubar seus dados ou seu dinheiro. Eles seguem um padrão: criam urgência ("aja agora ou perde tudo"), pedem dados sensíveis (senha, cartão), têm links estranhos e erros de português. Empresa séria NUNCA pede senha por e-mail. Na dúvida, não clique no link — acesse o site oficial digitando o endereço você mesmo.',
      },
      estrutura: {
        titulo: 'Os sinais de um e-mail golpe',
        partes: [
          { simbolo: '⏰', desc: 'Urgência forçada: "últimas horas", "bloqueio imediato", pânico.' },
          { simbolo: '🔑', desc: 'Pede dados sensíveis: senha, cartão, código. Sinal claro de golpe.' },
          { simbolo: '🔗', desc: 'Link estranho: passe o mouse e veja se o endereço bate com a empresa.' },
          { simbolo: '✍️', desc: 'Erros de português e remetente esquisito: desconfie sempre.' },
        ],
      },
      exemplo: {
        titulo: 'Golpe x e-mail legítimo',
        celulas: [
          { ref: '"Atualize sua senha aqui →"', valor: 'GOLPE: banco não pede senha por e-mail/link' },
          { ref: '"Você foi premiado, clique já!"', valor: 'GOLPE: prêmio que você não disputou' },
          { ref: 'Comprovante que você esperava', valor: 'Legítimo: do serviço que você usou' },
          { ref: 'Remetente "bradesc0" (zero)', valor: 'GOLPE: endereço imitando o real' },
        ],
        formula: 'Urgência + pedir dados + link estranho = não clique',
        resultado: 'Você identifica e ignora golpes antes de cair.',
        comentario: 'A regra que salva: na dúvida, NÃO clique no link do e-mail. Abra o navegador e digite você mesmo o site oficial do banco/loja. Se for real, o aviso estará lá também.',
      },
      vocabulario: [
        { palavra: 'Spam', def: 'E-mail indesejado, geralmente propaganda em massa; chato, mas comum.' },
        { palavra: 'Phishing', def: 'E-mail golpista que se passa por empresa pra roubar dados ou dinheiro.' },
        { palavra: 'Remetente', def: 'Quem enviou o e-mail; em golpes, costuma imitar um endereço real.' },
      ],
      chave: [
        'Empresa séria nunca pede senha por e-mail',
        'Urgência + pedido de dados = golpe',
        'Na dúvida, acesse o site oficial você mesmo, sem clicar no link',
      ],
      porque: 'Phishing é uma das formas mais comuns de golpe — e atinge mais quem está começando. Reconhecer os sinais protege seu dinheiro, suas contas e sua paz. É autodefesa digital essencial.',
    },
    pratica: {
      instrucao: 'Vamos analisar e-mails com olhar crítico — e usar a pasta de Spam a seu favor. Não clique em links suspeitos.',
      passos: [
        'Abra a pasta "Spam" / "Lixo eletrônico" (o provedor já separa muita coisa)',
        'Leia os assuntos: repare nos padrões de urgência e promessas absurdas',
        'Escolha um e-mail suspeito e procure os sinais (sem clicar em links)',
        'Veja o endereço real do remetente: bate com a empresa que diz ser?',
        'Se um golpe escapou pra caixa de entrada, marque-o como "spam/phishing"',
      ],
    },
    desafio: {
      cenario: 'Analise 2 e-mails suspeitos (da pasta de spam) e liste, pra cada um, pelo menos 2 sinais de golpe. Não clique em nenhum link — só observe e identifique.',
      requisitos: [
        'Abri a pasta de Spam/Lixo eletrônico',
        'Identifiquei sinais de urgência forçada',
        'Notei pedidos de dados sensíveis ou links estranhos',
        'Conferi o endereço real do remetente',
        'NÃO cliquei em nenhum link suspeito',
      ],
      dica: 'Recebeu algo "do seu banco" que te assustou? Não responda nem clique. Ligue pro banco no telefone do verso do seu cartão (não no número do e-mail) ou acesse o app oficial. O canal que VOCÊ escolhe é sempre o seguro.',
    },
    validacao: [
      'Diferencio spam de phishing',
      'Reconheço sinais de golpe (urgência, links, dados)',
      'Sei que ninguém sério pede senha por e-mail',
      'Confiro o remetente real',
      'Acesso o site oficial em vez de clicar no link',
    ],
  },

  'pc-email-7': {
    trilhaId: 'pc-email', numero: 7, titulo: 'Assinatura e e-mail profissional: causar boa impressão',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Dois e-mails podem dizer a mesma coisa, mas um consegue a vaga e o outro vai pro lixo. A diferença está nos detalhes: tom, organização e uma assinatura caprichada. Hoje você aprende a escrever e-mails que causam boa impressão.',
      conceito: {
        titulo: 'O e-mail profissional é claro, educado e organizado',
        texto: 'Um e-mail que impressiona bem segue uma estrutura: SAUDAÇÃO apropriada ("Prezado(a)", "Olá, bom dia"), um PRIMEIRO PARÁGRAFO que diz logo o motivo, o RECADO em frases curtas e diretas, uma DESPEDIDA cordial ("Atenciosamente") e uma ASSINATURA com seu nome e contato. A assinatura pode ser configurada uma vez e aparecer sozinha em todo e-mail. Evite textos enormes, gírias, CAIXA ALTA (parece grito) e excesso de emojis em contexto formal.',
      },
      estrutura: {
        titulo: 'A receita do e-mail profissional',
        partes: [
          { simbolo: '👋', desc: 'Saudação: "Prezados, bom dia" / "Olá, [nome]". Sem intimidade demais.' },
          { simbolo: '🎯', desc: 'Direto ao ponto: primeiro parágrafo já diz o motivo do e-mail.' },
          { simbolo: '🤝', desc: 'Despedida cordial: "Atenciosamente" / "Desde já agradeço".' },
          { simbolo: '✒️', desc: 'Assinatura: nome, telefone e e-mail; configure uma vez só.' },
        ],
      },
      exemplo: {
        titulo: 'Antes e depois',
        celulas: [
          { ref: '❌ "oi mandei o curriculo vlw"', valor: 'Informal demais, sem estrutura, passa desleixo' },
          { ref: '✅ "Prezados, segue meu currículo..."', valor: 'Educado, claro, profissional' },
          { ref: 'Assinatura', valor: 'Maria Silva · (11) 9xxxx-xxxx · maria@email.com' },
          { ref: 'Tom', valor: 'Cordial e objetivo, sem gírias nem CAIXA ALTA' },
        ],
        formula: 'Saudação + motivo + recado claro + despedida + assinatura',
        resultado: 'Um e-mail que transmite seriedade e cuidado.',
        comentario: 'Configure sua assinatura nas opções do e-mail: ela passa a aparecer automaticamente em tudo que você manda. Um detalhe que faz você parecer organizado em todos os e-mails, sem esforço.',
      },
      vocabulario: [
        { palavra: 'Assinatura', def: 'Bloco com seu nome e contato que aparece no fim de cada e-mail.' },
        { palavra: 'Tom', def: 'O "jeito" do texto: formal, cordial, informal — adeque ao destinatário.' },
        { palavra: 'Cordial', def: 'Educado e gentil, sem ser frio nem íntimo demais.' },
      ],
      chave: [
        'Saudação + motivo claro + despedida + assinatura',
        'Evite gírias, CAIXA ALTA e textão em contexto formal',
        'Configure a assinatura uma vez; ela aparece sozinha',
      ],
      porque: 'A forma como você escreve um e-mail diz muito sobre você antes de te conhecerem. Um e-mail bem feito abre portas profissionais; um desleixado fecha. O capricho compensa.',
    },
    pratica: {
      instrucao: 'Vamos configurar sua assinatura e escrever um e-mail profissional modelo.',
      passos: [
        'Nas configurações do e-mail, procure "Assinatura" e crie a sua (nome, telefone, e-mail)',
        'Salve e abra um novo e-mail: veja a assinatura aparecer sozinha',
        'Escreva um e-mail-modelo de candidatura: saudação, motivo, recado, despedida',
        'Releia eliminando gírias e deixando as frases curtas',
        'Envie pra você mesmo e avalie a impressão que ele passa',
      ],
    },
    desafio: {
      cenario: 'Configure sua assinatura e escreva um e-mail profissional de candidatura (ou de contato formal) com todas as partes. Envie pra você mesmo e julgue: você contrataria essa pessoa?',
      requisitos: [
        'Configurei uma assinatura com nome e contato',
        'Escrevi com saudação apropriada',
        'Disse o motivo logo no início, de forma clara',
        'Encerrei com despedida cordial',
        'Eliminei gírias e CAIXA ALTA do texto',
      ],
      dica: 'Modelo de assinatura simples e eficaz: "Nome Completo | Telefone | E-mail". Se tiver, acrescente cidade ou LinkedIn. Nada de imagens pesadas ou frases motivacionais longas — simples passa mais profissionalismo.',
    },
    validacao: [
      'Configurei minha assinatura de e-mail',
      'Escrevo com saudação e despedida adequadas',
      'Digo o motivo logo no início',
      'Mantenho um tom cordial e objetivo',
      'Meus e-mails passam boa impressão',
    ],
  },

  'pc-email-8': {
    trilhaId: 'pc-email', numero: 8, titulo: 'E-mail no celular e no computador: sempre sincronizado',
    tempoTotal: 8, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Você respondeu um e-mail no computador de manhã e, à tarde, abre o celular: lá está a resposta, certinha. Isso é a sincronização — uma das maiores conveniências do e-mail. Entender como funciona te deixa conectado em qualquer aparelho, com segurança.',
      conceito: {
        titulo: 'Sua conta vive na nuvem, não no aparelho',
        texto: 'Seu e-mail não fica "dentro" de um aparelho — ele vive na NUVEM, nos servidores do Gmail/Outlook. Por isso você acessa a mesma caixa do computador, do celular ou de qualquer navegador, e tudo aparece igual e atualizado. Leu no celular? No PC já aparece como lido. Isso é a sincronização. A contrapartida é a segurança: como sua conta abre em qualquer lugar, a senha forte e o cuidado de sair de computadores públicos são essenciais.',
      },
      estrutura: {
        titulo: 'Acessar com segurança em qualquer lugar',
        partes: [
          { simbolo: '☁️', desc: 'Nuvem: seus e-mails ficam nos servidores, não no aparelho.' },
          { simbolo: '🔄', desc: 'Sincronização: ler/responder num aparelho reflete em todos.' },
          { simbolo: '📱', desc: 'App no celular: instale o Gmail/Outlook pra ter tudo na mão.' },
          { simbolo: '🚪', desc: 'Sair (logout): sempre saia em computador público ou de terceiros.' },
        ],
      },
      exemplo: {
        titulo: 'A mesma conta, vários acessos',
        celulas: [
          { ref: 'Leu no PC de manhã', valor: 'À tarde, no celular, já aparece como lido' },
          { ref: 'Respondeu no celular', valor: 'A resposta está lá no computador também' },
          { ref: 'Computador da lan house', valor: 'Use aba anônima e SAIA da conta ao terminar' },
          { ref: 'Celular novo', valor: 'Faça login e toda a caixa aparece sincronizada' },
        ],
        formula: 'Conta na nuvem → mesmo conteúdo em todo aparelho → sair em locais públicos',
        resultado: 'Acesso ao e-mail onde estiver, com segurança preservada.',
        comentario: 'Usou e-mail em computador que não é seu? SEMPRE clique em "Sair" (logout) ao terminar. Se esquecer, a próxima pessoa entra na sua conta. Em locais públicos, use também a aba anônima.',
      },
      vocabulario: [
        { palavra: 'Sincronização', def: 'O conteúdo do e-mail fica igual em todos os aparelhos automaticamente.' },
        { palavra: 'Login / Logout', def: 'Entrar (login) e sair (logout) da sua conta de e-mail.' },
        { palavra: 'Nuvem', def: 'Servidores na internet onde seus e-mails ficam guardados e acessíveis.' },
      ],
      chave: [
        'Seu e-mail vive na nuvem, acessível em qualquer aparelho',
        'Tudo sincroniza: leu num lugar, atualiza em todos',
        'Sempre saia (logout) em computadores que não são seus',
      ],
      porque: 'A sincronização te liberta: você não depende de um único aparelho. E o hábito de sair em locais públicos protege sua conta — que hoje é a chave de quase tudo (bancos, redes, cadastros).',
    },
    pratica: {
      instrucao: 'Se possível, acesse o mesmo e-mail em dois lugares (computador e celular, ou dois navegadores) pra ver a sincronização.',
      passos: [
        'No computador, abra seu e-mail e marque um e-mail como lido',
        'No celular (ou em outro navegador), abra a mesma conta',
        'Veja que aquele e-mail já aparece como lido também — está sincronizado',
        'No celular, instale o app do Gmail/Outlook se ainda não tiver',
        'Pratique o logout: encontre a opção "Sair" no menu da sua conta',
      ],
    },
    desafio: {
      cenario: 'Comprove a sincronização: faça uma ação num aparelho (ler, marcar com estrela ou arquivar) e confirme que apareceu no outro. Depois, localize a opção "Sair" e entenda quando usá-la.',
      requisitos: [
        'Acessei a mesma conta em dois aparelhos/navegadores',
        'Fiz uma ação num e vi refletir no outro',
        'Entendi que o e-mail vive na nuvem',
        'Localizei a opção de sair (logout)',
        'Sei que devo sair em computadores públicos',
      ],
      dica: 'Vai usar e-mail no computador de uma biblioteca, lan house ou de um parente? Use a "janela anônima" do navegador e, ao terminar, feche-a. Assim não fica login salvo nem histórico — segurança redobrada.',
    },
    validacao: [
      'Entendo que meu e-mail fica na nuvem',
      'Acesso a mesma conta em vários aparelhos',
      'Vejo as ações sincronizarem entre eles',
      'Sei fazer logout',
      'Saio da conta em computadores públicos',
    ],
  },

  'pc-email-9': {
    trilhaId: 'pc-email', numero: 9, titulo: 'Projeto: candidatura completa por e-mail',
    tempoTotal: 18, xp: 120, vertente: 'computador',
    aula: {
      gancho: 'Hora de juntar tudo numa missão que pode mudar sua vida: enviar uma candidatura de emprego completa por e-mail. Assunto certo, mensagem profissional, currículo em PDF anexado, assinatura caprichada. É o e-mail que abre portas — e você vai dominá-lo.',
      conceito: {
        titulo: 'A candidatura perfeita, do assunto ao anexo',
        texto: 'Uma candidatura por e-mail é a soma de tudo que você aprendeu. O ASSUNTO identifica a vaga ("Candidatura — Auxiliar Administrativo"). A MENSAGEM se apresenta em poucas linhas: quem você é, a vaga que busca e por que pode contribuir. O CURRÍCULO vai ANEXADO em PDF (nunca como texto solto). A ASSINATURA fecha com seus contatos. E antes de enviar, a REVISÃO: endereço certo, anexo presente, sem erros de português. Um e-mail desses bem feito te coloca à frente de muita gente.',
      },
      estrutura: {
        titulo: 'A montagem da candidatura',
        partes: [
          { simbolo: '🎯', desc: 'Assunto que identifica a vaga e seu nome.' },
          { simbolo: '📄', desc: 'Currículo anexado em PDF, com nome de arquivo claro.' },
          { simbolo: '💬', desc: 'Mensagem curta de apresentação: quem, qual vaga, por quê.' },
          { simbolo: '✅', desc: 'Revisão final: destinatário, anexo, português, assinatura.' },
        ],
      },
      exemplo: {
        titulo: 'O esqueleto do e-mail de candidatura',
        celulas: [
          { ref: 'Assunto', valor: 'Candidatura — Auxiliar Administrativo — Maria Silva' },
          { ref: 'Abertura', valor: '"Prezados, bom dia. Tenho interesse na vaga de..."' },
          { ref: 'Anexo', valor: 'Curriculo-Maria-Silva.pdf (em PDF, nome claro)' },
          { ref: 'Fechamento', valor: '"Coloco-me à disposição. Atenciosamente, Maria Silva"' },
        ],
        formula: 'Assunto + apresentação + currículo PDF + assinatura + revisão → enviar',
        resultado: 'Uma candidatura profissional, completa e sem erros.',
        comentario: 'Nomeie o anexo com seu nome: "Curriculo-Maria-Silva.pdf". O recrutador recebe dezenas de "curriculo.pdf" — o seu, identificado, é fácil de achar e mostra cuidado.',
      },
      vocabulario: [
        { palavra: 'Candidatura', def: 'O ato de se apresentar pra uma vaga, enviando currículo e mensagem.' },
        { palavra: 'Carta de apresentação', def: 'O texto curto do e-mail que apresenta você e seu interesse na vaga.' },
        { palavra: 'PDF', def: 'Formato ideal pro currículo: abre igual em qualquer lugar e ninguém edita.' },
      ],
      chave: [
        'Assunto identifica a vaga e seu nome',
        'Currículo sempre anexado em PDF, com nome claro',
        'Revise destinatário, anexo e português antes de enviar',
      ],
      porque: 'Saber enviar uma candidatura profissional por e-mail é uma habilidade que muda vidas: é assim que se conquista entrevistas. Você sai desta trilha pronto pra concorrer de igual pra igual.',
    },
    pratica: {
      instrucao: 'Monte uma candidatura completa de verdade (pode ser pra uma vaga real ou um modelo). Tenha seu currículo em PDF à mão.',
      passos: [
        'Tenha seu currículo salvo em PDF, com nome de arquivo claro (Curriculo-SeuNome.pdf)',
        'Abra um novo e-mail e escreva o assunto identificando a vaga e seu nome',
        'Escreva a mensagem de apresentação: quem você é, a vaga, por que se interessa',
        'Anexe o currículo em PDF (clipe 📎) e espere subir',
        'Confira a assinatura, revise tudo (endereço, anexo, português)',
        'Envie pra você mesmo primeiro pra conferir; depois, pro destinatário real',
      ],
    },
    desafio: {
      cenario: 'Entregue uma candidatura completa: e-mail com assunto claro, mensagem de apresentação profissional, currículo em PDF anexado e assinatura. Envie pra você mesmo e avalie como um recrutador avaliaria.',
      requisitos: [
        'Escrevi um assunto que identifica a vaga e meu nome',
        'Apresentei-me de forma clara e profissional na mensagem',
        'Anexei o currículo em PDF com nome de arquivo claro',
        'Incluí assinatura com meus contatos',
        'Revisei tudo (destinatário, anexo, português) antes de enviar',
      ],
      dica: 'Não tem currículo pronto? A trilha de currículo (no módulo Mercado) te ajuda a montar um. Por ora, pode usar um rascunho simples em PDF só pra treinar o fluxo do e-mail de candidatura.',
    },
    validacao: [
      'Monto um assunto profissional pra candidatura',
      'Escrevo uma apresentação clara e educada',
      'Anexo o currículo em PDF nomeado',
      'Incluo minha assinatura',
      'Reviso tudo antes de enviar a candidatura',
    ],
  },
};
