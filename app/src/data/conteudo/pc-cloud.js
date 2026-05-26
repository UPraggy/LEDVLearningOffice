// ============================================================================
// CONTEÚDO — Workspace na Nuvem (pc-cloud)
// Drive, compartilhamento, colaboração ao vivo, versões, Agenda.
// ============================================================================

export const PC_CLOUD = {
  'pc-cloud-1': {
    trilhaId: 'pc-cloud', numero: 1, titulo: 'O que é "a nuvem", sem mistério',
    tempoTotal: 7, xp: 30, vertente: 'computador',
    aula: {
      gancho: '"Está salvo na nuvem." Você ouve isso o tempo todo, mas o que é essa tal nuvem? Spoiler: não tem nada de mágico nem perigoso. É mais simples — e mais útil — do que parece.',
      conceito: {
        titulo: 'A nuvem é o computador de outra pessoa (que você acessa pela internet)',
        texto: 'Quando você salva algo "na nuvem", o arquivo fica guardado em computadores potentes de uma empresa (Google, Microsoft), acessíveis pela internet. A vantagem: você abre seus arquivos de qualquer aparelho, em qualquer lugar, e eles não se perdem se o seu computador estragar. É como ter um armário seguro que você acessa de onde estiver.',
      },
      estrutura: {
        titulo: 'Por que vale a pena usar',
        partes: [
          { simbolo: '🌍', desc: 'Acesso de qualquer lugar: o mesmo arquivo no PC, no celular, na casa de alguém.' },
          { simbolo: '🛟', desc: 'Backup automático: estragou o aparelho? Os arquivos continuam lá.' },
          { simbolo: '🤝', desc: 'Compartilhar fácil: envia um link em vez de anexar arquivos pesados.' },
          { simbolo: '🔐', desc: 'Segurança: só quem tem sua conta (e senha) acessa. Por isso senha forte importa.' },
        ],
      },
      exemplo: {
        titulo: 'Os principais serviços de nuvem',
        celulas: [
          { ref: 'Google Drive', valor: 'Grátis 15 GB · liga com Gmail/Docs' },
          { ref: 'OneDrive', valor: 'Da Microsoft · liga com Windows/Office' },
          { ref: 'iCloud', valor: 'Da Apple · liga com iPhone/Mac' },
        ],
        formula: 'Conta + internet = seus arquivos em qualquer lugar',
        resultado: 'Nunca mais "esqueci o arquivo no outro computador".',
        comentario: 'Vamos usar o Google Drive nesta trilha por ser gratuito e funcionar igual no PC e no celular.',
      },
      vocabulario: [
        { palavra: 'Nuvem', def: 'Armazenamento de arquivos na internet, acessível de qualquer aparelho com sua conta.' },
        { palavra: 'Sincronizar', def: 'Manter o mesmo arquivo igual em vários aparelhos automaticamente.' },
        { palavra: 'Google Drive', def: 'O serviço de nuvem do Google, gratuito (15 GB), ligado ao Gmail e ao Docs.' },
      ],
      chave: [
        'A nuvem guarda arquivos na internet, acessíveis de qualquer lugar',
        'É backup automático: aparelho estraga, arquivos ficam',
        'Senha forte é o que protege o acesso',
      ],
      porque: 'Empresas trabalham cada vez mais na nuvem: documentos compartilhados, colaboração em tempo real. Dominar isso é hoje tão básico quanto saber usar e-mail — e abre portas no mercado.',
    },
    pratica: {
      instrucao: 'Vamos acessar o Google Drive. Tenha o navegador aberto e sua conta Google em mãos.',
      passos: [
        'No navegador, acesse drive.google.com',
        'Faça login com sua conta Google (a mesma do Gmail)',
        'Observe a tela: à esquerda os atalhos, no centro seus arquivos e pastas',
        'Veja, no canto, quanto dos 15 GB gratuitos você já usou',
        'Repare no botão "+ Novo" (ou "Novo") no canto superior esquerdo',
        'Favorite o drive.google.com no navegador pra acesso rápido',
      ],
    },
    desafio: {
      cenario: 'Acesse seu Google Drive e explore: descubra quanto espaço você tem livre e que tipo de coisa já está guardada lá.',
      requisitos: [
        'Acessei o Google Drive com minha conta',
        'Encontrei quanto espaço (GB) ainda tenho livre',
        'Reconheço onde ficam pastas e arquivos',
        'Localizei o botão "Novo"',
        'Favoritei o Drive pra acesso rápido',
      ],
      dica: 'Se você usa Gmail, você JÁ tem um Google Drive de 15 GB esperando — é a mesma conta. Não precisa criar nada novo.',
    },
    validacao: [
      'Entendi o que é a nuvem',
      'Sei as vantagens (acesso, backup, compartilhar)',
      'Acessei meu Google Drive',
      'Sei ver meu espaço disponível',
      'Entendo que a senha protege tudo',
    ],
  },

  'pc-cloud-2': {
    trilhaId: 'pc-cloud', numero: 2, titulo: 'Google Drive: subir e baixar',
    tempoTotal: 9, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'De que adianta ter um armário na nuvem se você não sabe colocar e tirar coisas dele? Hoje você aprende a "subir" arquivos pro Drive e "baixar" de volta — o vai e vem que torna a nuvem útil.',
      conceito: {
        titulo: 'Subir é mandar pra nuvem; baixar é trazer pro aparelho',
        texto: 'Subir (ou "fazer upload") é enviar um arquivo do seu computador pra nuvem, onde ele fica guardado e acessível de qualquer lugar. Baixar (ou "fazer download") é o contrário: trazer um arquivo da nuvem pro aparelho que você está usando. É o mesmo conceito de download que você já viu no navegador — só que agora você controla os dois sentidos.',
      },
      estrutura: {
        titulo: 'O vai e vem de arquivos',
        partes: [
          { simbolo: '⬆️', desc: 'Subir: botão "Novo" → "Upload de arquivo" (ou arraste o arquivo pra dentro da janela do Drive).' },
          { simbolo: '📁', desc: 'Organizar: crie pastas no Drive igual no computador ("Novo" → "Pasta").' },
          { simbolo: '⬇️', desc: 'Baixar: clique com o botão direito no arquivo → "Fazer download".' },
          { simbolo: '🔄', desc: 'O arquivo no Drive é independente: editar a cópia baixada não muda o da nuvem (a não ser que suba de novo).' },
        ],
      },
      exemplo: {
        titulo: 'Subir e baixar na prática',
        celulas: [
          { ref: 'Subir', valor: 'Arrasta o PDF pra janela do Drive → fica na nuvem' },
          { ref: 'Baixar', valor: 'Botão direito → Fazer download → vai pra pasta Downloads' },
          { ref: 'Arrastar', valor: 'O jeito mais rápido de subir é arrastar pra dentro' },
        ],
        formula: 'Upload = pro Drive · Download = pro aparelho',
        resultado: 'Seus arquivos circulam entre o PC e a nuvem com controle.',
        comentario: 'Arrastar e soltar funciona: selecione arquivos no computador e arraste pra dentro da janela do Drive no navegador.',
      },
      vocabulario: [
        { palavra: 'Upload (subir)', def: 'Enviar um arquivo do aparelho pra nuvem.' },
        { palavra: 'Download (baixar)', def: 'Trazer um arquivo da nuvem pro aparelho.' },
        { palavra: 'Arrastar e soltar', def: 'Clicar num arquivo, segurar e soltar dentro de outra janela ou pasta.' },
      ],
      chave: [
        'Subir = mandar pra nuvem; baixar = trazer pro aparelho',
        'Arrastar pra dentro do Drive é o jeito mais rápido de subir',
        'Organize com pastas, igual no computador',
      ],
      porque: 'Enviar e recuperar arquivos da nuvem é rotina no trabalho remoto e em qualquer função que troca documentos. É também o jeito mais seguro de não perder seus arquivos pessoais importantes.',
    },
    pratica: {
      instrucao: 'Abra o Google Drive (drive.google.com). Vamos subir e baixar um arquivo.',
      passos: [
        'No Drive, clique em "Novo" → "Pasta" e crie uma pasta chamada Meus-Arquivos',
        'Entre na pasta com 2 cliques',
        'Clique em "Novo" → "Upload de arquivo" e escolha um documento do computador',
        'Aguarde a barra de upload terminar (aparece um aviso de concluído)',
        'Confirme que o arquivo apareceu dentro da pasta',
        'Agora teste arrastar: pegue outro arquivo no computador e arraste pra janela do Drive',
        'Clique com o botão direito num arquivo do Drive → "Fazer download"',
        'Veja que ele foi pra sua pasta Downloads',
      ],
    },
    desafio: {
      cenario: 'Suba 3 arquivos importantes seus pra uma pasta organizada no Drive — criando seu primeiro backup na nuvem.',
      requisitos: [
        'Criei uma pasta organizada no Drive',
        'Subi pelo menos 3 arquivos pra ela',
        'Usei o arrastar e soltar em pelo menos um',
        'Baixei um arquivo de volta pra confirmar que funciona',
        'Entendi que agora tenho uma cópia segura na nuvem',
      ],
      dica: 'Documentos que você não pode perder (RG, contratos, fotos de família) merecem estar na nuvem. Se o computador ou o celular se perder, eles continuam seguros.',
    },
    validacao: [
      'Sei subir um arquivo pro Drive',
      'Sei criar pastas pra organizar na nuvem',
      'Usei arrastar e soltar pra subir',
      'Sei baixar um arquivo de volta',
      'Fiz meu primeiro backup na nuvem',
    ],
  },

  'pc-cloud-3': {
    trilhaId: 'pc-cloud', numero: 3, titulo: 'Compartilhar e dar permissões',
    tempoTotal: 10, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Precisa enviar um arquivo grande, ou deixar alguém ver um documento sem mandar por e-mail? A nuvem resolve com um link — mas o segredo está em escolher CERTO quem pode só ver e quem pode mexer.',
      conceito: {
        titulo: 'Compartilhar é dar uma chave — e você escolhe que tipo de chave',
        texto: 'No Drive, você compartilha um arquivo gerando um link ou convidando pessoas por e-mail. O ponto crucial são as permissões: "Leitor" só vê, "Comentarista" pode comentar, "Editor" pode alterar. Escolher a permissão certa evita que alguém mude (ou apague) algo sem querer. É o controle que protege seu trabalho.',
      },
      estrutura: {
        titulo: 'Os 3 níveis de permissão',
        partes: [
          { simbolo: '👁️', desc: 'Leitor: só pode visualizar. Ideal pra enviar uma versão final pra alguém ver.' },
          { simbolo: '💬', desc: 'Comentarista: pode sugerir e comentar, mas não altera o conteúdo.' },
          { simbolo: '✏️', desc: 'Editor: pode mudar tudo. Use só com quem realmente vai trabalhar no arquivo junto.' },
          { simbolo: '🔗', desc: 'Por link ou por e-mail: link é prático; convite por e-mail é mais controlado.' },
        ],
      },
      exemplo: {
        titulo: 'Escolhendo a permissão certa',
        celulas: [
          { ref: 'Enviar pra ver', valor: 'Leitor (👁️) — não mexem' },
          { ref: 'Pedir revisão', valor: 'Comentarista (💬) — sugerem' },
          { ref: 'Trabalhar junto', valor: 'Editor (✏️) — alteram' },
          { ref: 'Cuidado', valor: 'Não dê "Editor" pra qualquer um' },
        ],
        formula: 'Pense: essa pessoa precisa VER, COMENTAR ou MEXER?',
        resultado: 'Você compartilha sem medo de bagunçarem o original.',
        comentario: 'Pra a maioria das situações, "Leitor" basta. Só dê "Editor" quando for trabalho colaborativo de verdade.',
      },
      vocabulario: [
        { palavra: 'Permissão', def: 'O que cada pessoa pode fazer com o arquivo: ver, comentar ou editar.' },
        { palavra: 'Compartilhar por link', def: 'Gerar um endereço que dá acesso ao arquivo a quem tiver o link.' },
        { palavra: 'Leitor / Editor', def: 'Quem só vê (Leitor) vs quem pode alterar (Editor).' },
      ],
      chave: [
        'Compartilhe por link ou convite por e-mail',
        'Leitor vê, Comentarista comenta, Editor altera',
        'Na dúvida, use "Leitor" — protege o original',
      ],
      porque: 'Compartilhar com a permissão certa é habilidade diária no trabalho moderno: enviar relatórios, receber revisões, colaborar. Saber controlar quem mexe no quê evita erros graves e perda de trabalho.',
    },
    pratica: {
      instrucao: 'No Drive, escolha um arquivo (ou crie um documento de teste). Vamos compartilhar.',
      passos: [
        'Clique com o botão direito no arquivo → "Compartilhar"',
        'Veja a janela de compartilhamento abrir',
        'Em "Acesso geral", troque pra "Qualquer pessoa com o link"',
        'Ao lado, escolha a permissão: deixe em "Leitor"',
        'Clique em "Copiar link"',
        'Cole o link num lugar (ex: numa nota) pra ver que ele funciona',
        'Volte e troque a permissão pra "Editor" só pra ver a diferença',
        'Por segurança, volte pra "Leitor" ou "Restrito" ao terminar',
      ],
    },
    desafio: {
      cenario: 'Compartilhe um documento com alguém (pode ser pra você mesmo, em outro e-mail) usando a permissão correta pra cada situação.',
      requisitos: [
        'Abri a janela de compartilhamento de um arquivo',
        'Compartilhei por link OU convidei por e-mail',
        'Escolhi conscientemente a permissão (Leitor/Comentarista/Editor)',
        'Copiei e testei o link',
        'Sei como remover o acesso depois (voltar pra "Restrito")',
      ],
      dica: 'Compartilhou e quer encerrar? Volte na janela de compartilhamento e mude o acesso geral pra "Restrito" — o link para de funcionar pra quem não foi convidado.',
    },
    validacao: [
      'Sei abrir o compartilhamento de um arquivo',
      'Entendo Leitor, Comentarista e Editor',
      'Sei compartilhar por link',
      'Escolho a permissão certa pra cada caso',
      'Sei revogar o acesso depois',
    ],
  },

  'pc-cloud-4': {
    trilhaId: 'pc-cloud', numero: 4, titulo: 'Editar junto, ao vivo',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Imagine você e outra pessoa escrevendo no MESMO documento, ao mesmo tempo, cada um vendo o que o outro digita na hora. Não é ficção — é a colaboração ao vivo do Google Docs, e é mais fácil do que parece.',
      conceito: {
        titulo: 'Várias pessoas, um documento, tempo real',
        texto: 'Quando você compartilha um documento do Google Docs como "Editor", todos os convidados podem escrever ao mesmo tempo. Cada pessoa aparece com um cursor de uma cor, e as alterações surgem na tela de todos instantaneamente. Acabou o vai e vem de "versão final 2 revisada" por e-mail — existe uma só versão, sempre atualizada.',
      },
      estrutura: {
        titulo: 'Como funciona a colaboração',
        partes: [
          { simbolo: '🎨', desc: 'Cursores coloridos: cada pessoa tem uma cor e um nome; você vê onde cada um está.' },
          { simbolo: '⚡', desc: 'Tempo real: o que um digita aparece na hora pra todos. Tudo salva sozinho.' },
          { simbolo: '💬', desc: 'Comentários: marque um trecho e comente pra conversar sem alterar o texto.' },
          { simbolo: '✍️', desc: 'Modo Sugestão: suas edições viram propostas (coloridas), que o dono aceita ou recusa.' },
        ],
      },
      exemplo: {
        titulo: 'Os 3 modos de editar no Docs',
        celulas: [
          { ref: 'Edição', valor: 'Altera direto o texto' },
          { ref: 'Sugestão', valor: 'Propõe mudanças pra aprovar' },
          { ref: 'Visualização', valor: 'Só lê, sem mexer' },
        ],
        formula: 'Editar junto + comentar + sugerir = trabalho sem e-mails',
        resultado: 'Uma versão única, sempre atual, feita a várias mãos.',
        comentario: 'O modo "Sugestão" (canto superior direito) é ótimo pra revisar o texto de outra pessoa sem alterar o original.',
      },
      vocabulario: [
        { palavra: 'Colaboração em tempo real', def: 'Várias pessoas editando o mesmo documento ao mesmo tempo.' },
        { palavra: 'Modo Sugestão', def: 'Edições que viram propostas coloridas, aceitas ou recusadas pelo dono.' },
        { palavra: 'Cursor colaborativo', def: 'O marcador colorido que mostra onde cada pessoa está no documento.' },
      ],
      chave: [
        'No Docs, vários editam ao mesmo tempo, em tempo real',
        'Comentários conversam; Sugestões propõem mudanças',
        'Existe uma versão só, sempre atualizada (acaba o vai e vem por e-mail)',
      ],
      porque: 'Colaboração ao vivo é o jeito como equipes modernas escrevem propostas, relatórios e planos. Saber usar isso te coloca à vontade em qualquer trabalho atual — e impressiona numa equipe.',
    },
    pratica: {
      instrucao: 'Abra um documento no Google Docs (docs.google.com). Vamos simular colaboração.',
      passos: [
        'Crie um documento e escreva um título e um parágrafo',
        'Compartilhe ele como "Editor" com outro e-mail seu (ou peça a um familiar)',
        'Abra o mesmo documento na outra conta/aparelho ao mesmo tempo',
        'Digite nos dois e veja as alterações aparecerem em tempo real',
        'Selecione um trecho e clique em "Adicionar comentário"',
        'No canto superior direito, troque o modo de "Edição" pra "Sugestão"',
        'Edite algo no modo Sugestão e veja virar uma proposta colorida',
        'Volte pro modo Edição e aceite a sugestão',
      ],
    },
    desafio: {
      cenario: 'Crie um documento colaborativo e convide alguém (familiar, amigo) pra escrever junto — ou use uma segunda conta sua pra experimentar a edição simultânea.',
      requisitos: [
        'Criei um documento e compartilhei como Editor',
        'Vi edições aparecerem em tempo real',
        'Adicionei um comentário a um trecho',
        'Usei o modo Sugestão',
        'Aceitei ou recusei uma sugestão',
      ],
      dica: 'Pra revisar o texto de outra pessoa sem "passar por cima" do trabalho dela, sempre use o modo Sugestão. Ela vê exatamente o que você propôs e decide.',
    },
    validacao: [
      'Entendi a edição em tempo real',
      'Sei diferenciar comentar, sugerir e editar',
      'Vi os cursores coloridos colaborativos',
      'Usei o modo Sugestão',
      'Aceitei/recusei uma sugestão',
    ],
  },

  'pc-cloud-5': {
    trilhaId: 'pc-cloud', numero: 5, titulo: 'Histórico de versões: voltar no tempo',
    tempoTotal: 7, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Apagou um parágrafo importante há 3 dias e só percebeu agora? Alguém mexeu no documento e você quer ver o que mudou? A nuvem guarda TODAS as versões — e deixa você voltar no tempo.',
      conceito: {
        titulo: 'A nuvem lembra de cada mudança',
        texto: 'O Google Docs (e o Drive) guarda automaticamente um histórico de versões: um registro de como o documento estava em cada momento. Você pode ver versões antigas, comparar o que mudou, descobrir quem alterou o quê, e até restaurar uma versão anterior. É uma rede de segurança que perdoa qualquer erro.',
      },
      estrutura: {
        titulo: 'Usando o histórico',
        partes: [
          { simbolo: '🕘', desc: 'Abrir: menu Arquivo → "Histórico de versões" → "Ver histórico de versões".' },
          { simbolo: '📜', desc: 'Linha do tempo: à direita, a lista de versões por data e hora.' },
          { simbolo: '👤', desc: 'Quem mudou: cada versão mostra quem editou (útil em documentos compartilhados).' },
          { simbolo: '↩️', desc: 'Restaurar: clique numa versão antiga → "Restaurar esta versão" pra voltar a ela.' },
        ],
      },
      exemplo: {
        titulo: 'Quando o histórico salva o dia',
        celulas: [
          { ref: 'Apaguei sem querer', valor: 'Volto numa versão de antes' },
          { ref: 'Quem alterou?', valor: 'O histórico mostra o autor' },
          { ref: 'Comparar', valor: 'Vejo o que mudou entre versões' },
        ],
        formula: 'Errou? O histórico te leva de volta a qualquer ponto',
        resultado: 'Nenhuma alteração é definitiva — sempre dá pra voltar.',
        comentario: 'Diferente do Ctrl+Z (que só desfaz o agora), o histórico volta a versões de dias ou semanas atrás.',
      },
      vocabulario: [
        { palavra: 'Histórico de versões', def: 'Registro automático de como o documento estava em cada momento.' },
        { palavra: 'Restaurar versão', def: 'Voltar o documento a um estado anterior salvo no histórico.' },
        { palavra: 'Versão nomeada', def: 'Uma versão à qual você dá um nome ("Final aprovada") pra achar fácil depois.' },
      ],
      chave: [
        'A nuvem guarda todas as versões automaticamente',
        'Dá pra ver quem mudou o quê e quando',
        'Você pode restaurar qualquer versão antiga',
      ],
      porque: 'Em trabalho colaborativo, erros e alterações indevidas acontecem. Saber consultar e restaurar versões protege seu trabalho e resolve discussões de "quem mudou isso?" — uma tranquilidade enorme.',
    },
    pratica: {
      instrucao: 'Abra um documento do Google Docs que já tenha algumas edições.',
      passos: [
        'Faça algumas alterações no documento (escreva, apague, mude coisas)',
        'Vá no menu Arquivo → "Histórico de versões" → "Ver histórico de versões"',
        'Observe a lista de versões por data, à direita',
        'Clique numa versão anterior pra ver como o documento estava',
        'Repare em quem fez cada alteração (se for compartilhado)',
        'Clique nos 3 pontinhos de uma versão → "Nomear esta versão" e dê um nome',
        'Pra voltar a uma versão, use "Restaurar esta versão" (depois desfaça se quiser)',
      ],
    },
    desafio: {
      cenario: 'Explore o histórico de um documento: encontre uma versão antiga, veja o que mudou e nomeie uma versão importante.',
      requisitos: [
        'Abri o histórico de versões de um documento',
        'Identifiquei pelo menos duas versões diferentes por data',
        'Vi o que mudou entre elas',
        'Nomeei uma versão importante',
        'Sei como restaurar uma versão anterior se precisar',
      ],
      dica: 'Antes de uma grande mudança num documento importante, nomeie a versão atual (ex: "antes da revisão"). Assim você acha o ponto de retorno com um clique.',
    },
    validacao: [
      'Sei abrir o histórico de versões',
      'Entendo a linha do tempo de versões',
      'Sei ver quem alterou o quê',
      'Sei nomear uma versão',
      'Sei restaurar uma versão anterior',
    ],
  },

  'pc-cloud-6': {
    trilhaId: 'pc-cloud', numero: 6, titulo: 'Google Agenda: criar eventos',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Consulta médica, reunião, aniversário, pagamento de conta — sua cabeça não precisa carregar tudo isso. A Google Agenda lembra por você, e ainda avisa antes. É como ter uma secretária no bolso.',
      conceito: {
        titulo: 'Uma agenda que avisa antes de você esquecer',
        texto: 'A Google Agenda é um calendário online onde você marca compromissos (eventos). Cada evento tem dia, hora, título e pode ter um lembrete que te avisa antes. Como está na nuvem, aparece no computador e no celular ao mesmo tempo. E você pode convidar outras pessoas pra um evento — elas recebem o convite e confirmam presença.',
      },
      estrutura: {
        titulo: 'Anatomia de um evento',
        partes: [
          { simbolo: '➕', desc: 'Criar: clique num dia/horário no calendário, ou no botão "Criar".' },
          { simbolo: '🏷️', desc: 'Título, dia e hora: o básico. Pode marcar "dia inteiro" pra coisas sem horário.' },
          { simbolo: '🔔', desc: 'Lembrete: defina pra avisar 10 min, 1 hora ou 1 dia antes.' },
          { simbolo: '👥', desc: 'Convidados: adicione e-mails pra convidar pessoas (elas confirmam presença).' },
        ],
      },
      exemplo: {
        titulo: 'Exemplos de eventos úteis',
        celulas: [
          { ref: 'Consulta', valor: 'Médico — terça 14h — lembrete 1 dia antes' },
          { ref: 'Conta', valor: 'Pagar luz — dia 10 — lembrete de manhã' },
          { ref: 'Reunião', valor: 'Com convidados — recebem o convite' },
        ],
        formula: 'Título + dia/hora + lembrete = nunca mais esquecer',
        resultado: 'A agenda te cutuca antes da hora, no PC e no celular.',
        comentario: 'Crie eventos recorrentes (que se repetem) pra coisas mensais, como pagar uma conta todo dia 10.',
      },
      vocabulario: [
        { palavra: 'Evento', def: 'Um compromisso marcado na agenda, com dia, hora e título.' },
        { palavra: 'Lembrete', def: 'O aviso que a agenda dá antes do evento (ex: 1 hora antes).' },
        { palavra: 'Evento recorrente', def: 'Um evento que se repete automaticamente (diário, semanal, mensal).' },
      ],
      chave: [
        'A agenda guarda compromissos e avisa antes',
        'Sincroniza entre computador e celular',
        'Dá pra convidar pessoas e criar eventos que se repetem',
      ],
      porque: 'Organização de tempo é uma das competências mais valorizadas no trabalho. Quem domina a agenda chega na hora, não esquece prazos e coordena reuniões — sinais de profissionalismo e confiabilidade.',
    },
    pratica: {
      instrucao: 'Acesse calendar.google.com com sua conta. Vamos marcar compromissos de verdade.',
      passos: [
        'Acesse calendar.google.com',
        'Clique num dia e horário da próxima semana',
        'Dê um título ao evento (ex: "Estudar Escritório")',
        'Ajuste o horário de início e fim',
        'Adicione um lembrete pra 1 hora antes',
        'Salve e veja o evento aparecer no calendário',
        'Crie outro evento marcado como "dia inteiro" (ex: um aniversário)',
        'Nesse, configure pra repetir todo ano (recorrente)',
      ],
    },
    desafio: {
      cenario: 'Coloque na agenda 3 compromissos reais seus da próxima semana, cada um com lembrete adequado.',
      requisitos: [
        'Criei 3 eventos reais na minha agenda',
        'Cada um tem título, dia e hora corretos',
        'Configurei lembretes apropriados (antes do evento)',
        'Pelo menos um é recorrente (se repete) ou de dia inteiro',
        'Confirmei que aparecem também no celular',
      ],
      dica: 'Instale o app Google Agenda no celular com a mesma conta. Aí os lembretes aparecem no aparelho que está sempre com você — e você nunca mais perde um compromisso.',
    },
    validacao: [
      'Sei criar um evento na agenda',
      'Sei definir dia, hora e título',
      'Configurei lembretes',
      'Criei um evento recorrente ou de dia inteiro',
      'A agenda sincroniza no celular',
    ],
  },

  'pc-cloud-7': {
    trilhaId: 'pc-cloud', numero: 7, titulo: 'Lembretes e tarefas',
    tempoTotal: 7, xp: 40, vertente: 'computador',
    aula: {
      gancho: '"Preciso ligar pro médico", "comprar remédio", "responder aquele e-mail". Essas pequenas tarefas escapam da memória o dia todo. Uma lista de tarefas digital captura tudo — e dá a satisfação de ir riscando.',
      conceito: {
        titulo: 'Tire as tarefas da cabeça e coloque numa lista',
        texto: 'Além de eventos (com hora marcada), você pode anotar tarefas: coisas a fazer, com ou sem prazo. O Google Tarefas (Tasks) integra com a Agenda e o Gmail. A ideia é simples e poderosa: tudo que você precisa fazer fica numa lista confiável, em vez de ocupar espaço (e gerar ansiedade) na sua memória.',
      },
      estrutura: {
        titulo: 'Tarefas x Eventos',
        partes: [
          { simbolo: '✅', desc: 'Tarefa: algo a fazer, que você marca como concluído. Pode ter data, mas não exige hora.' },
          { simbolo: '📅', desc: 'Evento: compromisso com hora marcada (o da missão anterior).' },
          { simbolo: '➕', desc: 'Criar tarefa: no painel lateral do Gmail/Agenda, ícone do Google Tarefas.' },
          { simbolo: '🗂️', desc: 'Listas: separe tarefas por tema (Casa, Trabalho, Saúde).' },
        ],
      },
      exemplo: {
        titulo: 'Uma lista de tarefas do dia',
        celulas: [
          { ref: '☐', valor: 'Ligar pro médico' },
          { ref: '☐', valor: 'Pagar conta de luz' },
          { ref: '☑', valor: 'Responder e-mail do Carlos (feito!)' },
        ],
        formula: 'Anotar tudo + marcar feito = cabeça leve e nada esquecido',
        resultado: 'Você confia na lista, não na memória.',
        comentario: 'A sensação de marcar uma tarefa como concluída é motivadora — e mostra o quanto você avançou no dia.',
      },
      vocabulario: [
        { palavra: 'Tarefa', def: 'Algo a fazer, que você marca como concluído. Pode ter data, sem exigir horário.' },
        { palavra: 'Google Tarefas (Tasks)', def: 'O app de listas de tarefas do Google, integrado ao Gmail e à Agenda.' },
        { palavra: 'Lista', def: 'Um grupo de tarefas organizadas por tema (Casa, Trabalho...).' },
      ],
      chave: [
        'Tarefas são "a fazer"; eventos têm hora marcada',
        'Anotar tudo libera sua memória e reduz ansiedade',
        'Marcar como concluído motiva e mostra progresso',
      ],
      porque: 'Gerenciar tarefas é o coração da produtividade pessoal e profissional. Quem usa uma lista confiável entrega no prazo e não deixa nada cair — uma das marcas de um bom profissional.',
    },
    pratica: {
      instrucao: 'Abra o Gmail ou a Agenda. Vamos usar o Google Tarefas (ícone na lateral direita).',
      passos: [
        'No Gmail ou Agenda, clique no ícone do Google Tarefas (lateral direita)',
        'Clique em "Adicionar uma tarefa"',
        'Escreva uma tarefa real (ex: "Comprar remédio")',
        'Adicione mais 3 ou 4 tarefas do seu dia',
        'Em uma delas, defina uma data',
        'Crie uma nova lista (ex: "Trabalho") e adicione tarefas nela',
        'Marque uma tarefa como concluída e veja ela ser riscada',
      ],
    },
    desafio: {
      cenario: 'Monte sua lista de tarefas real de hoje/amanhã e comece a usar de verdade, marcando o que for concluindo.',
      requisitos: [
        'Criei pelo menos 5 tarefas reais',
        'Defini data em pelo menos uma',
        'Organizei em pelo menos 2 listas por tema',
        'Marquei pelo menos uma como concluída',
        'As tarefas aparecem também no celular',
      ],
      dica: 'Toda vez que pensar "preciso fazer tal coisa", anote na lista na hora — não confie na memória. Em poucos dias isso vira um alívio: sua cabeça para de tentar lembrar de tudo.',
    },
    validacao: [
      'Entendo a diferença entre tarefa e evento',
      'Sei criar tarefas no Google Tarefas',
      'Sei definir data numa tarefa',
      'Organizei tarefas em listas',
      'Marco tarefas como concluídas',
    ],
  },

  'pc-cloud-8': {
    trilhaId: 'pc-cloud', numero: 8, titulo: 'Mesma conta no celular e no PC',
    tempoTotal: 8, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'O grande truque da nuvem: começar uma coisa no computador e terminar no celular, sem mandar nada pra você mesmo. O segredo é uma só conta Google ligando todos os seus aparelhos.',
      conceito: {
        titulo: 'Uma conta, todos os aparelhos sincronizados',
        texto: 'Quando você usa a MESMA conta Google no computador e no celular, tudo se sincroniza automaticamente: arquivos do Drive, eventos da Agenda, tarefas, e-mails, contatos. Você cria um documento no PC e ele já está no celular. Marca um compromisso no celular e o lembrete toca no PC. É a nuvem funcionando como uma ponte invisível entre seus aparelhos.',
      },
      estrutura: {
        titulo: 'O que sincroniza com uma conta',
        partes: [
          { simbolo: '📁', desc: 'Drive: os mesmos arquivos e pastas em todos os aparelhos.' },
          { simbolo: '📅', desc: 'Agenda e Tarefas: compromissos e listas iguais em todo lugar.' },
          { simbolo: '✉️', desc: 'Gmail e Contatos: e-mails e telefones sempre os mesmos.' },
          { simbolo: '🔑', desc: 'O elo é a conta: faça login com o mesmo e-mail e senha em cada aparelho.' },
        ],
      },
      exemplo: {
        titulo: 'O fluxo PC ↔ celular',
        celulas: [
          { ref: 'No PC', valor: 'Escrevo um documento no Docs' },
          { ref: 'No celular', valor: 'Abro o app Docs → ele já está lá' },
          { ref: 'No celular', valor: 'Marco consulta na Agenda' },
          { ref: 'No PC', valor: 'O lembrete aparece também' },
        ],
        formula: 'Mesma conta = continuidade total entre aparelhos',
        resultado: 'Comece em um, termine no outro, sem esforço.',
        comentario: 'Por isso a senha da conta Google é tão importante: ela é a chave de tudo. Capriche nela e ative a verificação em duas etapas.',
      },
      vocabulario: [
        { palavra: 'Sincronização', def: 'Manter os mesmos dados iguais e atualizados em vários aparelhos.' },
        { palavra: 'Conta Google', def: 'Seu login (e-mail + senha) que conecta Drive, Agenda, Gmail e tudo mais.' },
        { palavra: 'Login', def: 'Entrar numa conta informando e-mail e senha.' },
      ],
      chave: [
        'A mesma conta Google liga todos os seus aparelhos',
        'Drive, Agenda, Tarefas, e-mail e contatos sincronizam sozinhos',
        'A senha da conta é a chave de tudo — proteja bem',
      ],
      porque: 'Trabalhar fluindo entre celular e computador é o padrão hoje. E entender que tudo gira em torno de uma conta reforça por que protegê-la (senha forte, 2FA) é tão importante — assunto que aprofundamos no módulo de Segurança.',
    },
    pratica: {
      instrucao: 'Tenha o computador e o celular por perto. Vamos garantir que estão na mesma conta.',
      passos: [
        'No computador, confirme em qual conta Google você está (canto superior direito no Drive)',
        'No celular, abra os Ajustes/Configurações e veja as contas Google adicionadas',
        'Garanta que a MESMA conta do PC está no celular',
        'Instale (se não tiver) os apps Google Drive e Google Agenda no celular',
        'Faça login com a mesma conta',
        'No PC, crie um documento de teste no Docs',
        'No celular, abra o app Docs e veja o documento aparecer',
      ],
    },
    desafio: {
      cenario: 'Prove a sincronização: crie algo em um aparelho e veja aparecer no outro, nos dois sentidos.',
      requisitos: [
        'Confirmei que uso a mesma conta no PC e no celular',
        'Criei um arquivo no PC e ele apareceu no celular',
        'Marquei um evento/tarefa no celular e apareceu no PC',
        'Tenho os apps Google (Drive/Agenda) no celular',
        'Entendi que a senha da conta protege tudo isso',
      ],
      dica: 'Como uma conta só dá acesso a tudo, ative a verificação em duas etapas nela (vamos ver no módulo Segurança). É a diferença entre uma porta com uma tranca e uma porta com duas.',
    },
    validacao: [
      'Sei verificar em qual conta estou',
      'Uso a mesma conta no PC e no celular',
      'Vi um arquivo sincronizar entre aparelhos',
      'Tenho os apps Google no celular',
      'Entendo a importância de proteger a conta',
    ],
  },

  'pc-cloud-9': {
    trilhaId: 'pc-cloud', numero: 9, titulo: 'Projeto: agenda da semana + pasta compartilhada',
    tempoTotal: 18, xp: 100, vertente: 'computador',
    aula: {
      gancho: 'Hora de juntar tudo: você vai montar sua semana organizada na Agenda e criar uma pasta compartilhada no Drive — exatamente como se organiza o trabalho numa equipe de verdade.',
      conceito: {
        titulo: 'Sua central de organização na nuvem',
        texto: 'Um profissional organizado tem dois pilares na nuvem: uma agenda que reflete sua semana (com compromissos e lembretes) e arquivos organizados em pastas, compartilhados com quem precisa. Neste projeto você monta os dois, criando um sistema que você vai usar de verdade — no trabalho e na vida.',
      },
      estrutura: {
        titulo: 'O que você vai montar',
        partes: [
          { simbolo: '📅', desc: 'Agenda da semana: seus compromissos reais, com lembretes.' },
          { simbolo: '✅', desc: 'Lista de tarefas: o que precisa fazer, organizado por tema.' },
          { simbolo: '📁', desc: 'Pasta no Drive: arquivos organizados por assunto.' },
          { simbolo: '🤝', desc: 'Compartilhamento: a pasta (ou um arquivo) compartilhada com a permissão certa.' },
        ],
      },
      exemplo: {
        titulo: 'Como fica organizado',
        celulas: [
          { ref: 'Agenda', valor: '5+ eventos da semana com lembretes' },
          { ref: 'Tarefas', valor: 'Lista por tema (Casa/Trabalho)' },
          { ref: 'Drive', valor: 'Pasta "Projeto" com arquivos' },
          { ref: 'Compartilhar', valor: 'Pasta como Leitor pra um familiar' },
        ],
        formula: 'Agenda + tarefas + arquivos compartilhados = você no controle',
        resultado: 'Uma central de organização que sincroniza em todo lugar.',
        comentario: 'Esse é exatamente o setup que se espera de quem trabalha em equipe na nuvem hoje.',
      },
      vocabulario: [
        { palavra: 'Pasta compartilhada', def: 'Uma pasta do Drive acessível por outras pessoas, com a permissão que você definir.' },
        { palavra: 'Central de organização', def: 'O conjunto agenda + tarefas + arquivos que mantém sua vida em ordem.' },
        { palavra: 'Permissão de pasta', def: 'O nível de acesso (ver/editar) que vale pra todos os arquivos dentro dela.' },
      ],
      chave: [
        'Agenda + tarefas refletem sua semana real',
        'Arquivos organizados em pastas no Drive',
        'Compartilhe com a permissão certa',
      ],
      porque: 'Este projeto cria um sistema de organização que é, ao mesmo tempo, útil na sua vida e uma demonstração concreta de que você domina ferramentas de trabalho em nuvem — algo valorizado em qualquer vaga administrativa.',
    },
    pratica: {
      instrucao: 'Reserve 18 minutos. Vamos montar sua central de organização usando tudo da trilha.',
      passos: [
        'Na Google Agenda, crie 5 eventos reais da sua próxima semana, com lembretes',
        'Inclua pelo menos um evento recorrente (algo que se repete)',
        'No Google Tarefas, crie uma lista por tema com suas tarefas da semana',
        'No Drive, crie uma pasta com nome claro (ex: "Organização-2026")',
        'Suba pelo menos 2 arquivos pra essa pasta',
        'Compartilhe a pasta com um familiar como "Leitor"',
        'Confirme no celular que agenda, tarefas e pasta apareceram',
      ],
    },
    desafio: {
      cenario: 'Entregue sua central de organização na nuvem: agenda da semana montada, lista de tarefas ativa e uma pasta compartilhada no Drive.',
      requisitos: [
        'Minha agenda tem 5+ eventos reais com lembretes',
        'Pelo menos um evento é recorrente',
        'Tenho uma lista de tarefas organizada por tema',
        'Criei uma pasta no Drive com arquivos dentro',
        'Compartilhei a pasta com a permissão correta',
        'Tudo aparece também no meu celular (mesma conta)',
      ],
      dica: 'Mantenha esse sistema vivo: todo domingo, dê 10 minutos pra revisar a agenda e as tarefas da semana que vem. Esse hábito simples organiza a vida inteira.',
    },
    validacao: [
      'Montei minha agenda da semana com lembretes',
      'Criei uma lista de tarefas por tema',
      'Organizei arquivos numa pasta do Drive',
      'Compartilhei a pasta com a permissão certa',
      'Tudo sincroniza no celular',
      'Tenho um hábito semanal de revisão',
    ],
  },
};
