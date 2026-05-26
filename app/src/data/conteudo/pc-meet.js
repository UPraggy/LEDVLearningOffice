// ============================================================================
// CONTEÚDO — Reuniões Online (pc-meet)
// Meet, Zoom, Teams: entrar, câmera/microfone, compartilhar tela, ata.
// ============================================================================

export const PC_MEET = {
  'pc-meet-1': {
    trilhaId: 'pc-meet', numero: 1, titulo: 'Entrar numa reunião por link',
    tempoTotal: 7, xp: 30, vertente: 'computador',
    aula: {
      gancho: 'Te mandaram um link e disseram "entra na reunião às 14h". Bate aquele frio na barriga? Calma: entrar numa reunião online é só um clique — e em 7 minutos isso vira algo natural pra você.',
      conceito: {
        titulo: 'O link é a porta da sala',
        texto: 'Uma reunião online acontece numa "sala virtual" com um endereço (link). Quem te convida envia esse link. Você clica nele, o navegador abre a sala, e pronto: você está na reunião. Os programas mais comuns são Google Meet, Zoom e Microsoft Teams. O Meet abre direto no navegador, sem instalar nada — por isso vamos começar por ele.',
      },
      estrutura: {
        titulo: 'O caminho pra entrar',
        partes: [
          { simbolo: '🔗', desc: 'O link: chega por e-mail, WhatsApp ou na agenda. Tem cara de meet.google.com/abc-defg-hij.' },
          { simbolo: '🖱️', desc: 'Clicar: abre a sala no navegador. No Zoom/Teams pode pedir pra abrir o app.' },
          { simbolo: '🎤', desc: 'Antes de entrar: aparece uma prévia pra você ligar/desligar câmera e microfone.' },
          { simbolo: '🚪', desc: '"Participar" / "Entrar agora": o botão que te coloca na sala.' },
        ],
      },
      exemplo: {
        titulo: 'Os 3 programas mais usados',
        celulas: [
          { ref: 'Google Meet', valor: 'Abre no navegador, sem instalar — mais fácil' },
          { ref: 'Zoom', valor: 'Costuma pedir pra abrir/instalar o app' },
          { ref: 'Teams', valor: 'Da Microsoft, comum em empresas' },
        ],
        formula: 'Clicar no link → ajustar câmera/microfone → Participar',
        resultado: 'Você entra na sala em segundos.',
        comentario: 'Dica de ouro: entre 5 minutos antes na primeira vez, com calma, pra testar tudo sem pressa.',
      },
      vocabulario: [
        { palavra: 'Reunião online (videochamada)', def: 'Conversa por vídeo entre pessoas em lugares diferentes, pela internet.' },
        { palavra: 'Link da reunião', def: 'O endereço da sala virtual; clicar nele te leva pra dentro.' },
        { palavra: 'Sala de espera', def: 'Uma "antessala" onde você aguarda o anfitrião liberar sua entrada (em alguns casos).' },
      ],
      chave: [
        'O link é a porta: clicou, entrou',
        'O Google Meet abre no navegador, sem instalar',
        'Entre uns minutos antes pra testar com calma',
      ],
      porque: 'Reuniões online viraram padrão no trabalho, em consultas, em cursos. Saber entrar sem stress abre portas pra trabalho remoto, entrevistas de emprego por vídeo e muito mais.',
    },
    pratica: {
      instrucao: 'Vamos criar uma sala de teste no Google Meet e entrar nela. Tenha o navegador aberto.',
      passos: [
        'Acesse meet.google.com e faça login com sua conta Google',
        'Clique em "Nova reunião" → "Iniciar uma reunião instantânea"',
        'Veja a prévia: sua câmera e o botão de participar',
        'Clique em "Participar agora" pra entrar na sala',
        'Observe a barra de controles embaixo (microfone, câmera, encerrar)',
        'Copie o link da reunião (botão de informações/copiar)',
        'Saia clicando no telefone vermelho (encerrar chamada)',
        'Cole o link numa nova aba e entre de novo — assim você treina o fluxo real',
      ],
    },
    desafio: {
      cenario: 'Crie uma sala no Meet, copie o link, e entre nela "como se" tivesse recebido o convite (abra o link numa aba nova).',
      requisitos: [
        'Criei uma reunião no Google Meet',
        'Localizei e copiei o link da sala',
        'Saí e entrei de novo usando o link',
        'Reconheço os botões de microfone, câmera e encerrar',
        'Sei que o Meet abre no navegador sem instalar',
      ],
      dica: 'Salve nos favoritos o meet.google.com. E lembre: entrar numa reunião é sempre o mesmo fluxo — clicar no link, ajustar câmera/microfone, participar. Depois da primeira vez, vira automático.',
    },
    validacao: [
      'Entendi que o link é a porta da reunião',
      'Criei e entrei numa sala do Meet',
      'Sei copiar o link da reunião',
      'Reconheço os controles básicos',
      'Me sinto mais à vontade pra entrar numa reunião',
    ],
  },

  'pc-meet-2': {
    trilhaId: 'pc-meet', numero: 2, titulo: 'Câmera e microfone',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: '"Não estou te ouvindo!", "sua câmera está desligada!" — os perrengues mais comuns das reuniões. A boa notícia: 95% deles se resolvem com 3 botões que você vai dominar agora.',
      conceito: {
        titulo: 'Você no controle do que os outros veem e ouvem',
        texto: 'Em qualquer reunião você controla duas coisas: o microfone (o que falam ouvem) e a câmera (o que veem). Cada um liga e desliga num clique. Saber controlá-los — e testar antes — é o que separa uma reunião tranquila de uma cheia de "você está me ouvindo?". O ícone com um risco em cima significa "desligado".',
      },
      estrutura: {
        titulo: 'Os controles essenciais',
        partes: [
          { simbolo: '🎤', desc: 'Microfone: clica pra ligar/desligar. Risco em cima = mudo (ninguém te ouve).' },
          { simbolo: '📷', desc: 'Câmera: clica pra ligar/desligar. Risco em cima = sem imagem.' },
          { simbolo: '🔇', desc: 'Etiqueta: fique no mudo quando não está falando, pra evitar barulho de fundo.' },
          { simbolo: '⚙️', desc: 'Configurações: escolha qual microfone/câmera/alto-falante usar, se tiver mais de um.' },
        ],
      },
      exemplo: {
        titulo: 'Resolvendo os perrengues clássicos',
        celulas: [
          { ref: 'Não me ouvem', valor: 'Microfone está no mudo? (risco em cima)' },
          { ref: 'Eu não ouço', valor: 'Volume do PC baixo ou alto-falante errado' },
          { ref: 'Sem imagem', valor: 'Câmera desligada ou bloqueada por outro app' },
          { ref: 'Eco', valor: 'Use fone de ouvido — resolve na hora' },
        ],
        formula: 'Antes de falar: confira o ícone do microfone',
        resultado: 'Reunião sem os perrengues mais comuns.',
        comentario: 'Fone de ouvido (até o do celular) melhora muito o áudio e elimina eco. Vale a pena usar sempre.',
      },
      vocabulario: [
        { palavra: 'Mudo (mute)', def: 'Microfone desligado: você ouve os outros, mas ninguém te ouve.' },
        { palavra: 'Eco / microfonia', def: 'Aquele barulho de retorno; resolve usando fone de ouvido.' },
        { palavra: 'Dispositivo de áudio', def: 'O microfone, a câmera ou o alto-falante que o programa está usando.' },
      ],
      chave: [
        'Ícone com risco em cima = desligado',
        'Fique no mudo quando não estiver falando',
        'Fone de ouvido melhora o áudio e mata o eco',
      ],
      porque: 'Áudio e vídeo são a base de qualquer reunião. Controlá-los com confiança evita constrangimentos numa entrevista de emprego ou reunião de trabalho — e mostra que você domina a ferramenta.',
    },
    pratica: {
      instrucao: 'Entre numa sala de teste do Meet (como na missão anterior). Vamos treinar os controles.',
      passos: [
        'Na sala, ache os botões de microfone e câmera embaixo',
        'Clique no microfone e veja o risco aparecer (mudo) e sumir (ligado)',
        'Faça o mesmo com a câmera: veja sua imagem ligar e desligar',
        'Fale algo e observe se o ícone do microfone "reage" (mostra que captou som)',
        'Clique nos 3 pontinhos → Configurações → veja as opções de áudio e vídeo',
        'Se tiver fone de ouvido, conecte e selecione ele nas configurações',
        'Deixe a câmera ligada e o microfone no mudo (postura ideal pra ouvir)',
      ],
    },
    desafio: {
      cenario: 'Faça um teste completo de áudio e vídeo numa sala do Meet, deixando tudo pronto como se fosse uma reunião importante daqui a pouco.',
      requisitos: [
        'Liguei e desliguei o microfone conscientemente',
        'Liguei e desliguei a câmera',
        'Confirmei que meu microfone capta som',
        'Entrei nas configurações de áudio/vídeo',
        'Sei a etiqueta de ficar no mudo quando não falo',
      ],
      dica: 'Antes de uma reunião importante (entrevista, consulta), faça esse teste 10 minutos antes, numa sala sua. Chegar com áudio e vídeo já testados passa muito profissionalismo.',
    },
    validacao: [
      'Sei ligar/desligar o microfone',
      'Sei ligar/desligar a câmera',
      'Entendo que risco em cima = desligado',
      'Sei onde ficam as configurações de áudio/vídeo',
      'Conheço a etiqueta do mudo',
    ],
  },

  'pc-meet-3': {
    trilhaId: 'pc-meet', numero: 3, titulo: 'Compartilhar a tela',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Numa reunião, em vez de tentar explicar um documento só com palavras, você pode MOSTRAR ele na tela de todos. Compartilhar a tela é um superpoder — e é só um botão.',
      conceito: {
        titulo: 'Mostrar sua tela pra todos verem',
        texto: 'Compartilhar a tela faz com que os outros participantes vejam o que está no seu computador: um documento, uma planilha, um site, uma apresentação. É essencial pra explicar, apresentar ou ensinar. Você escolhe o que mostrar — a tela inteira, ou só uma janela específica (mais seguro, pra não exibir coisas pessoais).',
      },
      estrutura: {
        titulo: 'Compartilhando com segurança',
        partes: [
          { simbolo: '🖥️', desc: 'Botão "Apresentar agora" / "Compartilhar tela", na barra de controles.' },
          { simbolo: '🪟', desc: 'Escolha "uma janela" (só aquele programa) em vez de "tela inteira" — mais seguro.' },
          { simbolo: '🛑', desc: 'Pare de compartilhar pelo botão "Parar de apresentar" quando terminar.' },
          { simbolo: '🔔', desc: 'Antes de compartilhar: feche conversas e notificações pessoais.' },
        ],
      },
      exemplo: {
        titulo: 'Tela inteira x só uma janela',
        celulas: [
          { ref: 'Tela inteira', valor: 'Mostra TUDO — cuidado com notificações' },
          { ref: 'Uma janela', valor: 'Mostra só aquele programa — mais seguro' },
          { ref: 'Aba do navegador', valor: 'Mostra só aquele site' },
        ],
        formula: 'Compartilhe só a janela necessária, não a tela toda',
        resultado: 'Você mostra o que importa, sem expor o resto.',
        comentario: 'Antes de apresentar, feche o WhatsApp Web e silencie notificações — ninguém precisa ver suas mensagens privadas aparecendo.',
      },
      vocabulario: [
        { palavra: 'Compartilhar tela', def: 'Exibir o que está no seu computador pros outros participantes verem.' },
        { palavra: 'Apresentar', def: 'O nome que o Google Meet dá pra compartilhamento de tela.' },
        { palavra: 'Janela', def: 'Um programa específico aberto; compartilhar só ela protege o resto da sua tela.' },
      ],
      chave: [
        'Compartilhar tela mostra seu conteúdo pra todos',
        'Prefira compartilhar "uma janela" em vez da tela inteira',
        'Feche notificações pessoais antes de apresentar',
      ],
      porque: 'Apresentar dados, explicar um documento, ensinar algo — compartilhar tela é central em reuniões de trabalho e treinamentos. Dominar isso te torna capaz de conduzir, não só assistir.',
    },
    pratica: {
      instrucao: 'Tenha um documento aberto (ex: um que você criou no Word/Docs). Entre numa sala de teste do Meet.',
      passos: [
        'Abra primeiro o documento que você quer mostrar',
        'Na sala do Meet, clique em "Apresentar agora" (ou ícone de tela)',
        'Escolha "Uma janela" e selecione o documento',
        'Veja a indicação de que você está apresentando',
        'Volte ao documento e role/aponte coisas — os outros veriam isso',
        'Clique em "Parar de apresentar" quando terminar',
        'Repita escolhendo "Uma aba do navegador" pra ver a diferença',
      ],
    },
    desafio: {
      cenario: 'Pratique uma mini-apresentação: compartilhe um documento seu numa sala do Meet, mostre o conteúdo e pare o compartilhamento corretamente.',
      requisitos: [
        'Abri o conteúdo ANTES de começar a compartilhar',
        'Compartilhei "uma janela" (não a tela inteira)',
        'Mostrei e naveguei pelo conteúdo',
        'Parei o compartilhamento ao terminar',
        'Sei a importância de fechar notificações antes',
      ],
      dica: 'Ensaie a apresentação sozinho antes da reunião real. Saber onde clicar e o que mostrar, com o documento já aberto, evita aquele "peraí, deixa eu achar aqui" na frente de todos.',
    },
    validacao: [
      'Sei iniciar o compartilhamento de tela',
      'Sei escolher compartilhar só uma janela',
      'Sei parar de compartilhar',
      'Cuido pra não expor conteúdo pessoal',
      'Consigo apresentar um documento',
    ],
  },

  'pc-meet-4': {
    trilhaId: 'pc-meet', numero: 4, titulo: 'Chat, mão levantada e reações',
    tempoTotal: 6, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Quer dizer algo sem interromper quem está falando? Mandar um link no meio da reunião? Concordar sem abrir o microfone? O chat, a mão levantada e as reações são suas ferramentas de boa convivência online.',
      conceito: {
        titulo: 'Participar sem atropelar ninguém',
        texto: 'Numa reunião online, falar todos ao mesmo tempo vira bagunça. Por isso existem recursos pra participar com educação: o chat (mensagens escritas pra todos), a mão levantada (avisa que você quer falar) e as reações (emojis rápidos pra concordar, aplaudir). Usá-los mostra que você sabe se portar em ambiente profissional.',
      },
      estrutura: {
        titulo: 'As ferramentas de participação',
        partes: [
          { simbolo: '💬', desc: 'Chat: mande mensagens, links ou perguntas por escrito, sem interromper a fala.' },
          { simbolo: '✋', desc: 'Mão levantada: avisa o anfitrião que você quer falar; ele te dá a vez.' },
          { simbolo: '👍', desc: 'Reações: emojis rápidos (joinha, palmas) pra reagir sem abrir o microfone.' },
          { simbolo: '🙋', desc: 'Espere ser chamado depois de levantar a mão — é a etiqueta.' },
        ],
      },
      exemplo: {
        titulo: 'Qual usar em cada situação',
        celulas: [
          { ref: 'Quero falar', valor: 'Levanto a mão ✋ e espero a vez' },
          { ref: 'Tenho um link', valor: 'Mando no chat 💬' },
          { ref: 'Concordo', valor: 'Reação de joinha 👍' },
          { ref: 'Dúvida rápida', valor: 'Escrevo no chat pra não cortar a fala' },
        ],
        formula: 'Participe sem interromper: mão, chat ou reação',
        resultado: 'Você contribui com educação e organização.',
        comentario: 'O chat é ótimo pra perguntas: o apresentador responde quando puder, sem você precisar cortar a explicação.',
      },
      vocabulario: [
        { palavra: 'Chat', def: 'Área de mensagens escritas da reunião, visível a todos os participantes.' },
        { palavra: 'Mão levantada', def: 'Recurso que sinaliza ao anfitrião que você quer falar.' },
        { palavra: 'Reações', def: 'Emojis rápidos (joinha, palmas) pra reagir sem usar o microfone.' },
      ],
      chave: [
        'Chat pra mensagens e links sem interromper',
        'Mão levantada pra pedir a vez de falar',
        'Reações pra concordar ou aplaudir em silêncio',
      ],
      porque: 'Saber participar com etiqueta numa reunião online é tão importante quanto o conteúdo. Demonstra educação digital e respeito — qualidades muito valorizadas em equipes profissionais.',
    },
    pratica: {
      instrucao: 'Entre numa sala de teste do Meet. Vamos achar e usar cada recurso.',
      passos: [
        'Ache o ícone de chat (balão de mensagem) na barra de controles',
        'Abra o chat e escreva uma mensagem de teste',
        'Procure o ícone de "levantar a mão" (uma mãozinha) e clique',
        'Veja a indicação de que sua mão está levantada; clique de novo pra baixar',
        'Procure as reações (carinha/emoji) e mande um joinha',
        'Observe a reação aparecer na tela',
        'Feche o chat clicando de novo no ícone',
      ],
    },
    desafio: {
      cenario: 'Numa sala de teste, use os três recursos: mande uma mensagem no chat, levante a mão e envie uma reação.',
      requisitos: [
        'Encontrei e usei o chat',
        'Levantei e baixei a mão',
        'Enviei uma reação (emoji)',
        'Entendo quando usar cada um',
        'Sei a etiqueta de esperar a vez após levantar a mão',
      ],
      dica: 'Em reuniões grandes, o chat é seu melhor amigo: você tira dúvidas sem interromper e ainda fica registrado pra quem quiser ler depois.',
    },
    validacao: [
      'Sei usar o chat da reunião',
      'Sei levantar e baixar a mão',
      'Sei enviar reações',
      'Entendo quando usar cada recurso',
      'Conheço a etiqueta de participação',
    ],
  },

  'pc-meet-5': {
    trilhaId: 'pc-meet', numero: 5, titulo: 'Marcar reunião e enviar convite',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Até agora você entrou em reuniões dos outros. Agora você vira o anfitrião: marca a reunião, escolhe o horário e convida as pessoas — que recebem tudo certinho, com link e lembrete.',
      conceito: {
        titulo: 'Você no comando: agendar e convidar',
        texto: 'Marcar uma reunião é criar um evento na Google Agenda com uma videochamada do Meet incluída. Você define dia, hora, título e adiciona os convidados por e-mail. Eles recebem o convite com o link, podem confirmar presença, e todo mundo (incluindo você) ganha um lembrete. É a forma profissional de organizar um encontro online.',
      },
      estrutura: {
        titulo: 'Os passos pra agendar',
        partes: [
          { simbolo: '📅', desc: 'Na Google Agenda, crie um evento (como você já aprendeu na trilha da nuvem).' },
          { simbolo: '🎥', desc: 'Clique em "Adicionar videoconferência do Google Meet" — gera o link automático.' },
          { simbolo: '👥', desc: 'Adicione os convidados por e-mail; eles recebem o convite e confirmam.' },
          { simbolo: '🔔', desc: 'Defina lembrete; todos são avisados antes da hora.' },
        ],
      },
      exemplo: {
        titulo: 'O que o convidado recebe',
        celulas: [
          { ref: 'E-mail', valor: 'Convite com título, dia, hora e link do Meet' },
          { ref: 'Confirmar', valor: 'Botões Sim / Talvez / Não' },
          { ref: 'Na hora', valor: 'Lembrete + botão "Participar" no evento' },
        ],
        formula: 'Evento + Meet + convidados + lembrete = reunião organizada',
        resultado: 'Todos com link e horário, avisados na hora certa.',
        comentario: 'Coloque uma descrição no evento com a pauta (o que será discutido). Isso ajuda todos a chegarem preparados.',
      },
      vocabulario: [
        { palavra: 'Anfitrião / Organizador', def: 'Quem cria a reunião e convida os participantes.' },
        { palavra: 'Convite', def: 'O e-mail/evento que a pessoa recebe com link, data e opção de confirmar presença.' },
        { palavra: 'Pauta', def: 'A lista de assuntos a tratar na reunião, colocada na descrição do evento.' },
      ],
      chave: [
        'Marcar reunião = evento na Agenda + Meet incluído',
        'Convidados recebem link e confirmam presença',
        'Coloque a pauta na descrição pra todos chegarem prontos',
      ],
      porque: 'Saber organizar e convocar uma reunião é uma competência de liderança e organização. Mostra iniciativa — exatamente o que diferencia quem só participa de quem conduz.',
    },
    pratica: {
      instrucao: 'Acesse calendar.google.com. Vamos agendar uma reunião com videochamada.',
      passos: [
        'Crie um evento na Agenda pra um horário da próxima semana',
        'Dê um título claro (ex: "Reunião de teste — pauta X")',
        'Clique em "Adicionar videoconferência do Google Meet"',
        'Veja o link do Meet aparecer automaticamente no evento',
        'Em "Convidados", adicione um e-mail (pode ser outro seu)',
        'Na descrição, escreva uma pauta simples (2-3 itens)',
        'Defina um lembrete pra 1 dia e 10 minutos antes',
        'Salve e envie o convite (ele pergunta se quer notificar os convidados — diga sim)',
      ],
    },
    desafio: {
      cenario: 'Agende uma reunião real (ou de teste) com link do Meet, pauta na descrição, ao menos um convidado e lembretes.',
      requisitos: [
        'Criei um evento com videochamada do Meet',
        'O link do Meet foi gerado automaticamente',
        'Adicionei pelo menos um convidado',
        'Escrevi uma pauta na descrição',
        'Configurei lembretes pra mim e pros convidados',
      ],
      dica: 'Sempre coloque a pauta no convite. Uma reunião com pauta clara rende mais e respeita o tempo de todos — quem organiza assim ganha reputação de profissional eficiente.',
    },
    validacao: [
      'Sei criar uma reunião com link do Meet',
      'Sei adicionar convidados',
      'Sei incluir uma pauta na descrição',
      'Configurei lembretes',
      'Entendo o papel do anfitrião',
    ],
  },

  'pc-meet-6': {
    trilhaId: 'pc-meet', numero: 6, titulo: 'Gravar e fazer uma ata simples',
    tempoTotal: 10, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'Reunião acabou e ninguém lembra direito o que foi combinado? A ata resolve. E quando você não pode anotar tudo, a gravação salva. Hoje você aprende a registrar o que importa.',
      conceito: {
        titulo: 'O que não é registrado, se perde',
        texto: 'Uma ata é um resumo escrito do que foi discutido e decidido numa reunião: os assuntos, as decisões e quem ficou responsável por cada tarefa. A gravação captura a reunião inteira em vídeo, pra rever depois. Juntos, garantem que nada importante se perca — e evitam o clássico "mas eu não combinei isso".',
      },
      estrutura: {
        titulo: 'Registrando a reunião',
        partes: [
          { simbolo: '📝', desc: 'Ata: anote assuntos, decisões e "quem faz o quê até quando". Curta e objetiva.' },
          { simbolo: '⏺️', desc: 'Gravar: em Meet/Zoom/Teams, há opção de gravar (avisa todos que está gravando).' },
          { simbolo: '🔒', desc: 'Ética: sempre avise que está gravando. Gravar sem avisar é desrespeitoso (e às vezes ilegal).' },
          { simbolo: '📤', desc: 'Compartilhe a ata depois, por e-mail ou num documento na nuvem.' },
        ],
      },
      exemplo: {
        titulo: 'Modelo de ata simples',
        celulas: [
          { ref: 'Reunião', valor: 'Planejamento — 24/05, 14h' },
          { ref: 'Decisões', valor: '1) Aprovar orçamento  2) Adiar viagem' },
          { ref: 'Tarefas', valor: 'João: enviar relatório até sexta' },
          { ref: 'Próxima', valor: 'Reunião dia 31/05' },
        ],
        formula: 'Assuntos + decisões + responsáveis + prazos = ata útil',
        resultado: 'Todos sabem o que foi combinado e o que fazer.',
        comentario: 'Uma ata não precisa transcrever tudo. Foque no que foi DECIDIDO e em QUEM faz o quê até QUANDO.',
      },
      vocabulario: [
        { palavra: 'Ata', def: 'Resumo escrito dos assuntos, decisões e tarefas de uma reunião.' },
        { palavra: 'Gravação', def: 'Registro em vídeo da reunião, pra rever depois (sempre com aviso aos participantes).' },
        { palavra: 'Encaminhamentos', def: 'As tarefas definidas: quem faz o quê e até quando.' },
      ],
      chave: [
        'Ata = assuntos + decisões + quem faz o quê até quando',
        'Sempre avise antes de gravar',
        'Compartilhe a ata depois pra alinhar todos',
      ],
      porque: 'Saber registrar reuniões é uma habilidade administrativa muito valorizada. Quem entrega uma ata clara depois da reunião vira referência de organização na equipe — e garante que as decisões realmente aconteçam.',
    },
    pratica: {
      instrucao: 'Abra um documento no Google Docs pra servir de ata. (Se puder, entre numa reunião de teste pra ver a opção de gravar.)',
      passos: [
        'No Docs, crie um documento intitulado "Ata - [assunto] - [data]"',
        'Crie seções: Participantes, Assuntos, Decisões, Tarefas (quem/quando), Próxima reunião',
        'Preencha com um exemplo (pode inventar pra treinar)',
        'Numa sala de teste do Meet, procure o menu (3 pontinhos) → "Gravar reunião"',
        'Observe o aviso de que a gravação avisa a todos (não precisa gravar de verdade agora)',
        'Volte ao Docs e finalize a ata com a lista de tarefas e responsáveis',
        'Compartilhe o documento da ata (como você aprendeu na trilha da nuvem)',
      ],
    },
    desafio: {
      cenario: 'Crie um modelo de ata reutilizável no Docs e preencha-o com uma reunião real ou simulada, com decisões e tarefas atribuídas.',
      requisitos: [
        'Criei um documento de ata com seções claras',
        'Registrei assuntos e decisões',
        'Anotei tarefas com responsável e prazo',
        'Sei onde fica a opção de gravar numa reunião',
        'Compartilhei a ata com os participantes',
      ],
      dica: 'Guarde a ata como modelo. Numa reunião real, vá preenchendo ao vivo — ao terminar, é só revisar e compartilhar. Entregar a ata minutos após a reunião impressiona qualquer equipe.',
    },
    validacao: [
      'Sei o que uma ata deve conter',
      'Criei um modelo de ata reutilizável',
      'Registrei decisões e tarefas com responsáveis',
      'Sei onde gravar uma reunião (e a ética disso)',
      'Sei compartilhar a ata depois',
    ],
  },

  'pc-meet-7': {
    trilhaId: 'pc-meet', numero: 7, titulo: 'Projeto: conduza uma reunião teste',
    tempoTotal: 18, xp: 100, vertente: 'computador',
    aula: {
      gancho: 'Chegou a prova final da trilha: você vai organizar e conduzir uma reunião do começo ao fim — agendar, entrar, apresentar, e entregar a ata. Como um profissional de verdade.',
      conceito: {
        titulo: 'Do convite à ata: o ciclo completo',
        texto: 'Conduzir uma reunião é juntar tudo que você aprendeu: agendar com pauta, entrar e testar áudio/vídeo, apresentar um conteúdo compartilhando a tela, gerenciar a participação, e fechar com uma ata. Fazer isso uma vez, mesmo que seja com um familiar, transforma a insegurança em domínio. Depois disso, nenhuma reunião te assusta.',
      },
      estrutura: {
        titulo: 'O roteiro da sua reunião',
        partes: [
          { simbolo: '1', desc: 'Antes: agende com link do Meet, pauta e convidado(s).' },
          { simbolo: '2', desc: 'Início: entre antes, teste câmera e microfone.' },
          { simbolo: '3', desc: 'Durante: apresente algo compartilhando a tela; use chat/reações.' },
          { simbolo: '4', desc: 'Fim: registre a ata com decisões e tarefas, e compartilhe.' },
        ],
      },
      exemplo: {
        titulo: 'Checklist do anfitrião',
        celulas: [
          { ref: 'Antes', valor: 'Convite enviado, pauta definida, link testado' },
          { ref: 'Início', valor: 'Áudio/vídeo ok, entrei antes' },
          { ref: 'Durante', valor: 'Apresentei a tela, gerenciei a conversa' },
          { ref: 'Fim', valor: 'Ata escrita e compartilhada' },
        ],
        formula: 'Preparar + conduzir + registrar = reunião profissional',
        resultado: 'Você sai do "tenho medo de reunião" pro "eu conduzo reuniões".',
        comentario: 'Convide um familiar ou amigo pra ser seu convidado de teste. Conduzir pra alguém real é o melhor treino.',
      },
      vocabulario: [
        { palavra: 'Conduzir uma reunião', def: 'Organizar, abrir, guiar a conversa e fechar com encaminhamentos.' },
        { palavra: 'Checklist', def: 'Lista de verificação pra não esquecer nenhuma etapa.' },
        { palavra: 'Encaminhamentos', def: 'As tarefas e próximos passos definidos ao fim da reunião.' },
      ],
      chave: [
        'Prepare (agenda + pauta), conduza (áudio/tela/chat) e registre (ata)',
        'Entre antes e teste tudo',
        'Conduzir uma vez de verdade elimina o medo',
      ],
      porque: 'Conduzir uma reunião reúne todas as habilidades da trilha numa demonstração real de competência digital e profissional. É a prova de que você não só participa do mundo do trabalho online — você lidera nele.',
    },
    pratica: {
      instrucao: 'Reserve 18 minutos e convide um familiar/amigo pra uma reunião de teste. Use todo o aprendizado da trilha.',
      passos: [
        'Agende uma reunião no Meet (com link, pauta na descrição e seu convidado)',
        'Prepare o que vai apresentar (um documento, uma planilha)',
        'Entre na sala 5 minutos antes e teste câmera e microfone',
        'Quando o convidado entrar, cumprimente e apresente a pauta',
        'Compartilhe a tela e mostre seu conteúdo',
        'Use o chat ou peça uma reação pra interagir',
        'Encerre combinando os próximos passos',
        'Escreva a ata (decisões + tarefas) e compartilhe com o convidado',
      ],
    },
    desafio: {
      cenario: 'Conduza uma reunião de teste completa com uma pessoa real, do agendamento à ata compartilhada.',
      requisitos: [
        'Agendei a reunião com link, pauta e convidado',
        'Entrei antes e testei áudio/vídeo',
        'Conduzi a reunião apresentando algo na tela',
        'Usei chat e/ou reações durante',
        'Escrevi a ata com decisões e tarefas',
        'Compartilhei a ata com o participante',
      ],
      dica: 'Parabéns: ao terminar este projeto, você domina o ciclo completo de reuniões online — uma das competências mais pedidas no trabalho remoto e híbrido de hoje. Guarde sua ata-modelo pra reutilizar sempre.',
    },
    validacao: [
      'Agendei e organizei uma reunião com pauta',
      'Testei áudio e vídeo antes de começar',
      'Conduzi apresentando a tela',
      'Interagi usando chat/reações',
      'Registrei e compartilhei a ata',
      'Me sinto capaz de conduzir reuniões reais',
    ],
  },
};
