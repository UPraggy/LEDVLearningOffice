// ============================================================================
// CONTEÚDO — Fotos, Backup e Memórias (mob-fotos)
// Tirar, organizar, fazer backup, liberar espaço e compartilhar fotos.
// ============================================================================

export const MOB_FOTOS = {
  'mob-fotos-1': {
    trilhaId: 'mob-fotos', numero: 1, titulo: 'Tirar fotos melhores',
    tempoTotal: 7, xp: 30, vertente: 'celular',
    aula: {
      gancho: 'Suas fotos saem tremidas, escuras ou cortadas? O celular tira fotos ótimas — o segredo está em três coisas simples: luz, foco e enquadramento. Sem comprar nada, suas fotos melhoram na hora.',
      conceito: {
        titulo: 'Boas fotos não dependem de câmera cara',
        texto: 'O celular moderno tira fotos excelentes; o que faz diferença é como você fotografa. Três fundamentos resolvem quase tudo: boa luz (de preferência natural, vinda da frente do objeto), foco certo (tocar na tela onde quer focar) e enquadramento (o que entra na foto, com firmeza pra não tremer). Dominar isso transforma suas fotos — de documentos a momentos de família.',
      },
      estrutura: {
        titulo: 'Os 3 fundamentos',
        partes: [
          { simbolo: '☀️', desc: 'Luz: fotografe com luz na FRENTE do objeto, não atrás (evita contraluz/sombra).' },
          { simbolo: '👆', desc: 'Foco: toque na tela onde quer que fique nítido; o celular ajusta o foco ali.' },
          { simbolo: '🖼️', desc: 'Enquadramento: pense no que entra; segure firme (apoie os cotovelos) pra não tremer.' },
          { simbolo: '📄', desc: 'Documentos: luz boa, de cima, sem sombra da sua mão; tudo dentro do quadro.' },
        ],
      },
      exemplo: {
        titulo: 'Erros comuns e soluções',
        celulas: [
          { ref: 'Escura', valor: 'Falta luz → vá pra perto da janela/luz' },
          { ref: 'Tremida', valor: 'Mão instável → apoie os cotovelos, respire' },
          { ref: 'Desfocada', valor: 'Toque na tela pra focar antes de tirar' },
          { ref: 'Contraluz', valor: 'Luz atrás do objeto → mude de posição' },
        ],
        formula: 'Boa luz + tocar pra focar + segurar firme = foto boa',
        resultado: 'Fotos nítidas, claras e bem enquadradas.',
        comentario: 'Pra fotografar um documento (muito útil!): coloque numa superfície plana, com boa luz de cima, tire reto (de frente), e confira se está tudo nítido e dentro do quadro antes de enviar.',
      },
      vocabulario: [
        { palavra: 'Foco', def: 'O ponto que fica nítido na foto; toque na tela pra definir.' },
        { palavra: 'Enquadramento', def: 'O que entra (e o que fica de fora) na foto.' },
        { palavra: 'Contraluz', def: 'Quando a luz vem de trás do objeto, deixando-o escuro.' },
      ],
      chave: [
        'Luz na frente do objeto (evite contraluz)',
        'Toque na tela pra focar antes de tirar',
        'Segure firme e cuide do enquadramento',
      ],
      porque: 'Tirar boas fotos serve pra tudo: registrar momentos, fotografar documentos pra enviar, vender algo, comprovar uma situação. É uma habilidade prática que você usa o tempo todo.',
    },
    pratica: {
      instrucao: 'Pegue o celular e abra a câmera. Vamos praticar os 3 fundamentos.',
      passos: [
        'Abra o app da câmera',
        'Aponte pra um objeto e toque na tela em cima dele (veja o foco ajustar)',
        'Tire a foto perto de uma janela (luz na frente do objeto)',
        'Agora tire a mesma foto com a luz atrás (contraluz) e compare como ficou pior',
        'Apoie os cotovelos no corpo/mesa e tire uma foto firme',
        'Fotografe um documento numa mesa, com luz de cima, reto e nítido',
        'Compare suas fotos: qual ficou melhor e por quê?',
      ],
    },
    desafio: {
      cenario: 'Tire 3 fotos boas aplicando os fundamentos: uma de um objeto, uma de um documento (legível) e uma de um ambiente.',
      requisitos: [
        'Usei boa luz (na frente do objeto)',
        'Toquei pra focar antes de tirar',
        'Segurei firme pra não tremer',
        'A foto do documento está legível e completa',
        'Minhas fotos melhoraram em relação ao "automático"',
      ],
      dica: 'Pra documentos, alguns celulares têm um modo "digitalizar" (na câmera ou no Google Drive/Notas) que endireita e melhora a foto automaticamente — fica parecendo escaneado. Vale procurar.',
    },
    validacao: [
      'Sei usar a luz a meu favor',
      'Sei tocar pra focar',
      'Seguro firme pra não tremer',
      'Sei fotografar documentos legíveis',
      'Minhas fotos melhoraram',
    ],
  },

  'mob-fotos-2': {
    trilhaId: 'mob-fotos', numero: 2, titulo: 'Galeria: ver, apagar, favoritar',
    tempoTotal: 6, xp: 30, vertente: 'celular',
    aula: {
      gancho: 'Centenas de fotos misturadas, repetidas, borradas... e você nunca acha a que quer? Saber navegar, apagar o lixo e marcar as favoritas deixa sua galeria sob controle.',
      conceito: {
        titulo: 'A galeria é o álbum de fotos do celular',
        texto: 'A galeria (ou "Fotos") é onde ficam todas as suas imagens e vídeos. Saber se mover por ela é básico: ver as fotos, dar zoom, apagar as ruins (repetidas, borradas, prints inúteis) e marcar com estrela/coração as favoritas pra achar rápido. Uma galeria limpa e com favoritas é muito mais fácil de usar — e ocupa menos espaço.',
      },
      estrutura: {
        titulo: 'Navegando na galeria',
        partes: [
          { simbolo: '👀', desc: 'Ver: toque pra abrir; deslize pro lado pra próxima; "pinçar" pra dar zoom.' },
          { simbolo: '🗑️', desc: 'Apagar: na foto, toque na lixeira. Vai pra "Lixeira" (recuperável por ~30 dias).' },
          { simbolo: '⭐', desc: 'Favoritar: toque no coração/estrela; as favoritas ficam num álbum à parte.' },
          { simbolo: '☑️', desc: 'Selecionar várias: segure uma foto e marque outras pra apagar/mover em lote.' },
        ],
      },
      exemplo: {
        titulo: 'Limpando a galeria',
        celulas: [
          { ref: 'Apagar', valor: 'Fotos borradas, repetidas, prints inúteis' },
          { ref: 'Favoritar', valor: 'As melhores e mais importantes (coração)' },
          { ref: 'Lixeira', valor: 'Apagou sem querer? Recupera em ~30 dias' },
          { ref: 'Em lote', valor: 'Selecione várias e apague de uma vez' },
        ],
        formula: 'Ver → apagar o lixo → favoritar as boas',
        resultado: 'Galeria limpa e fácil de navegar.',
        comentario: 'Apagar fotos manda elas pra "Lixeira", onde ficam ~30 dias antes de sumir de vez. Então não tenha medo: dá pra recuperar se apagar errado. (Mas só esvazie a lixeira depois de ter backup!)',
      },
      vocabulario: [
        { palavra: 'Galeria / Fotos', def: 'O app onde ficam todas as suas fotos e vídeos.' },
        { palavra: 'Lixeira', def: 'Onde as fotos apagadas ficam por ~30 dias antes de sumir (recuperáveis).' },
        { palavra: 'Favoritas', def: 'Fotos marcadas (coração/estrela) que ficam num álbum à parte.' },
      ],
      chave: [
        'Apague o lixo (borradas, repetidas, prints)',
        'Favorite as melhores pra achar rápido',
        'Fotos apagadas ficam ~30 dias na Lixeira (recuperáveis)',
      ],
      porque: 'Uma galeria organizada economiza espaço e tempo, e facilita encontrar e compartilhar as fotos que importam. É o primeiro passo pra cuidar bem das suas memórias.',
    },
    pratica: {
      instrucao: 'Pegue o celular e abra a galeria (Fotos/Galeria).',
      passos: [
        'Abra a galeria e navegue: toque numa foto, deslize pro lado, dê zoom (pinça)',
        'Encontre uma foto ruim (borrada/repetida) e apague (lixeira)',
        'Veja onde fica a "Lixeira" e confirme que dá pra recuperar',
        'Favorite (coração/estrela) uma foto importante',
        'Veja o álbum de favoritas',
        'Selecione várias fotos de uma vez (segure uma, marque outras) pra apagar em lote',
      ],
    },
    desafio: {
      cenario: 'Dê uma organizada na galeria: apague um conjunto de fotos inúteis e favorite suas melhores.',
      requisitos: [
        'Naveguei pela galeria com facilidade',
        'Apaguei fotos ruins (inclusive em lote)',
        'Sei que a Lixeira recupera por ~30 dias',
        'Favoritei fotos importantes',
        'Minha galeria ficou mais organizada',
      ],
      dica: 'Antes de apagar muitas fotos pra "liberar espaço", confirme que você tem backup (próxima missão!). Apagar sem backup pode perder memórias pra sempre depois que sair da lixeira.',
    },
    validacao: [
      'Sei navegar na galeria',
      'Sei apagar fotos (e em lote)',
      'Sei recuperar pela Lixeira',
      'Sei favoritar fotos',
      'Minha galeria está mais organizada',
    ],
  },

  'mob-fotos-3': {
    trilhaId: 'mob-fotos', numero: 3, titulo: 'Criar álbuns por evento',
    tempoTotal: 7, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Quer reunir as fotos do aniversário, da viagem ou do neto num lugar só, sem ter que rolar mil imagens? Álbuns organizam suas memórias por tema — e facilitam mostrar e compartilhar.',
      conceito: {
        titulo: 'Álbuns reúnem fotos do mesmo assunto',
        texto: 'Assim como pastas no computador, álbuns na galeria juntam fotos relacionadas: "Viagem 2026", "Aniversário da Ana", "Documentos". Você cria o álbum e adiciona as fotos que quiser. Isso facilita encontrar, mostrar e compartilhar um conjunto de memórias sem caçar foto por foto. É organização que dá prazer — reviver momentos fica fácil.',
      },
      estrutura: {
        titulo: 'Criando álbuns',
        partes: [
          { simbolo: '➕', desc: 'Criar: na aba "Álbuns" → "Criar álbum" (ou "+") → dar um nome.' },
          { simbolo: '🖼️', desc: 'Adicionar: selecione as fotos que vão no álbum.' },
          { simbolo: '🏷️', desc: 'Nome claro: por evento ou tema ("Viagem Praia 2026", "Receitas").' },
          { simbolo: '📄', desc: 'Álbum de documentos: junte fotos de RG, comprovantes, receitas num álbum só.' },
        ],
      },
      exemplo: {
        titulo: 'Álbuns úteis',
        celulas: [
          { ref: 'Família', valor: '"Aniversário do João 2026"' },
          { ref: 'Viagem', valor: '"Viagem Gramado"' },
          { ref: 'Documentos', valor: '"Documentos" (RG, comprovantes)' },
          { ref: 'Vantagem', valor: 'Acha e compartilha o conjunto fácil' },
        ],
        formula: 'Criar álbum + nomear por tema + adicionar fotos',
        resultado: 'Memórias organizadas por assunto.',
        comentario: 'Um álbum "Documentos" é super útil: reúna fotos de RG, CPF, comprovantes. Quando precisar enviar um, está tudo num lugar só — não precisa caçar no meio das fotos pessoais.',
      },
      vocabulario: [
        { palavra: 'Álbum', def: 'Um agrupamento de fotos por tema/evento na galeria.' },
        { palavra: 'Adicionar ao álbum', def: 'Colocar fotos selecionadas dentro de um álbum.' },
        { palavra: 'Aba Álbuns', def: 'A seção da galeria onde ficam (e se criam) os álbuns.' },
      ],
      chave: [
        'Álbuns reúnem fotos por evento/tema',
        'Crie na aba "Álbuns" e dê nomes claros',
        'Um álbum "Documentos" facilita muito a vida',
      ],
      porque: 'Álbuns transformam uma pilha de fotos em memórias organizadas, fáceis de reviver e compartilhar. E um álbum de documentos é praticidade pura pro dia a dia.',
    },
    pratica: {
      instrucao: 'Abra a galeria. Vamos criar seu primeiro álbum.',
      passos: [
        'Vá na aba "Álbuns" da galeria',
        'Toque em "Criar álbum" (ou "+")',
        'Dê um nome por tema (ex: "Família 2026")',
        'Selecione algumas fotos pra adicionar',
        'Confirme e veja o álbum criado',
        'Crie um segundo álbum chamado "Documentos"',
        'Adicione fotos de documentos seus a ele',
      ],
    },
    desafio: {
      cenario: 'Organize suas memórias: crie pelo menos 2 álbuns por tema (um de evento e um de "Documentos") com fotos dentro.',
      requisitos: [
        'Criei um álbum de um evento/tema',
        'Adicionei fotos a ele',
        'Criei um álbum "Documentos"',
        'Adicionei fotos de documentos',
        'Dei nomes claros aos álbuns',
      ],
      dica: 'Crie o hábito: depois de um evento (festa, viagem), reserve uns minutos pra juntar as melhores fotos num álbum. Fica fácil de mostrar pra família e de reviver depois.',
    },
    validacao: [
      'Sei criar um álbum',
      'Sei adicionar fotos a ele',
      'Sei nomear por tema',
      'Tenho um álbum de documentos',
      'Minhas memórias estão organizadas',
    ],
  },

  'mob-fotos-4': {
    trilhaId: 'mob-fotos', numero: 4, titulo: 'Backup automático na nuvem',
    tempoTotal: 9, xp: 60, vertente: 'celular',
    aula: {
      gancho: 'Imagine perder TODAS as suas fotos porque o celular quebrou, foi roubado ou caiu na água. Pra muita gente, são memórias insubstituíveis. O backup automático na nuvem garante que isso nunca aconteça.',
      conceito: {
        titulo: 'Suas fotos seguras, mesmo se o celular sumir',
        texto: 'O backup automático envia suas fotos pra nuvem (Google Fotos no Android, iCloud no iPhone) assim que você as tira. Se o celular quebrar, for roubado ou perdido, suas fotos continuam salvas e acessíveis de qualquer aparelho com sua conta. É a proteção mais importante das suas memórias — e funciona sozinho, depois de ativado. Vale ligar agora mesmo.',
      },
      estrutura: {
        titulo: 'Ativando o backup',
        partes: [
          { simbolo: '☁️', desc: 'Android: app "Google Fotos" → seu perfil → ativar "Backup".' },
          { simbolo: '🍎', desc: 'iPhone: Ajustes → seu nome → iCloud → Fotos → ativar.' },
          { simbolo: '📶', desc: 'Wi-Fi: configure pra fazer backup só no Wi-Fi (não gasta sua franquia de dados).' },
          { simbolo: '💾', desc: 'Espaço: a nuvem tem um limite grátis (ex: 15 GB no Google); depois, pode pagar mais.' },
        ],
      },
      exemplo: {
        titulo: 'Por que o backup é vital',
        celulas: [
          { ref: 'Celular quebrou', valor: 'Fotos salvas na nuvem ✓' },
          { ref: 'Roubo/perda', valor: 'Acessa tudo do novo aparelho ✓' },
          { ref: 'Sem backup', valor: 'Memórias perdidas pra sempre ✗' },
          { ref: 'Funciona', valor: 'Sozinho, no Wi-Fi, após ativar' },
        ],
        formula: 'Ativar backup (no Wi-Fi) → fotos seguras automaticamente',
        resultado: 'Nunca mais perca uma foto.',
        comentario: 'Esse é o ajuste mais importante desta trilha. Ative AGORA. Depois de ligado, ele trabalha sozinho — e você nunca mais corre o risco de perder anos de memórias num acidente.',
      },
      vocabulario: [
        { palavra: 'Backup', def: 'Cópia de segurança das suas fotos, guardada na nuvem.' },
        { palavra: 'Google Fotos / iCloud', def: 'Os serviços de backup de fotos do Android e do iPhone.' },
        { palavra: 'Sincronização', def: 'O envio automático das fotos novas pra nuvem.' },
      ],
      chave: [
        'Backup automático salva suas fotos na nuvem sozinho',
        'Celular quebrou/sumiu? As fotos continuam seguras',
        'Configure pra fazer backup só no Wi-Fi',
      ],
      porque: 'Perder fotos de família é uma das dores mais comuns e evitáveis. O backup automático é a proteção definitiva das suas memórias — e é o ajuste de maior impacto emocional que você pode fazer no celular.',
    },
    pratica: {
      instrucao: 'Pegue o celular conectado no Wi-Fi. Vamos ativar o backup.',
      passos: [
        'Android: abra o "Google Fotos" → toque no seu perfil (canto) → "Ativar backup"',
        'iPhone: Ajustes → seu nome → iCloud → Fotos → ative "Fotos do iCloud"',
        'Confirme que está usando sua conta (Google/Apple)',
        'Configure pra fazer backup só no Wi-Fi (pra não gastar dados)',
        'Veja o backup começar (pode levar tempo na primeira vez)',
        'Confira o espaço disponível na nuvem (ex: 15 GB grátis no Google)',
        'Confirme que está "Backup concluído" ou "em andamento"',
      ],
    },
    desafio: {
      cenario: 'Ative o backup automático das suas fotos na nuvem e confirme que ele está funcionando.',
      requisitos: [
        'Ativei o backup (Google Fotos ou iCloud)',
        'Confirmei que está na minha conta',
        'Configurei pra usar só Wi-Fi',
        'O backup começou/está em andamento',
        'Entendo por que isso protege minhas memórias',
      ],
      dica: 'Depois do backup ativo, você pode acessar suas fotos de qualquer lugar entrando na sua conta (photos.google.com ou iCloud.com). Teste: abra num computador e veja suas fotos lá — prova de que estão seguras.',
    },
    validacao: [
      'Ativei o backup automático',
      'Está usando minha conta',
      'Configurei pra Wi-Fi',
      'O backup está funcionando',
      'Minhas fotos estão protegidas',
    ],
  },

  'mob-fotos-5': {
    trilhaId: 'mob-fotos', numero: 5, titulo: 'Liberar espaço sem perder fotos',
    tempoTotal: 8, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Agora que suas fotos estão seguras na nuvem, você pode liberar espaço no celular sem medo — porque elas continuam guardadas online. Veja como fazer isso com segurança.',
      conceito: {
        titulo: 'Com backup, dá pra liberar espaço sem perder nada',
        texto: 'Fotos e vídeos são o que mais ocupa espaço no celular. Quando o backup está ativo (missão anterior), você pode usar a função "Liberar espaço": ela apaga do CELULAR as fotos que já estão SALVAS na nuvem, mantendo-as acessíveis online. Você vê uma miniatura no celular e a foto completa baixa quando precisar. Resultado: espaço livre sem perder memória alguma.',
      },
      estrutura: {
        titulo: 'Liberando espaço com segurança',
        partes: [
          { simbolo: '✅', desc: 'Pré-requisito: backup CONCLUÍDO (confirme antes de liberar).' },
          { simbolo: '🧹', desc: 'Google Fotos: perfil → "Liberar espaço" → remove do celular o que já está na nuvem.' },
          { simbolo: '🍎', desc: 'iPhone: "Otimizar Armazenamento" (Ajustes → Fotos) faz isso automaticamente.' },
          { simbolo: '☁️', desc: 'As fotos continuam na nuvem; baixam quando você abre, se tiver internet.' },
        ],
      },
      exemplo: {
        titulo: 'Antes de liberar, confirme',
        celulas: [
          { ref: '1º', valor: 'Backup concluído? (confira no app)' },
          { ref: '2º', valor: 'Liberar espaço (remove só o que está salvo)' },
          { ref: 'Resultado', valor: 'Espaço livre, fotos seguras na nuvem' },
          { ref: 'Acessar', valor: 'Baixam ao abrir (precisa de internet)' },
        ],
        formula: 'Backup concluído → Liberar espaço → espaço livre sem perda',
        resultado: 'Celular com espaço, memórias intactas.',
        comentario: 'A regra de ouro: só use "Liberar espaço" DEPOIS de confirmar que o backup terminou. Assim você nunca perde uma foto — ela sai do celular mas continua na nuvem.',
      },
      vocabulario: [
        { palavra: 'Liberar espaço', def: 'Remover do celular fotos já salvas na nuvem, sem perdê-las.' },
        { palavra: 'Otimizar armazenamento', def: 'Recurso do iPhone que mantém versões leves no aparelho e as completas na nuvem.' },
        { palavra: 'Miniatura', def: 'Versão pequena da foto que fica no celular; a completa baixa quando você abre.' },
      ],
      chave: [
        'Só libere espaço DEPOIS do backup concluído',
        'A função remove do celular o que já está na nuvem',
        'As fotos continuam seguras e baixam quando você abre',
      ],
      porque: 'Liberar espaço com segurança resolve o "armazenamento cheio" sem o medo de perder memórias. Você mantém o celular funcional e suas fotos protegidas — o melhor dos dois mundos.',
    },
    pratica: {
      instrucao: 'Pegue o celular (com backup ativo da missão anterior). Vamos liberar espaço com segurança.',
      passos: [
        'Primeiro, confirme no app de fotos que o backup está CONCLUÍDO',
        'Android: Google Fotos → perfil → "Liberar espaço deste dispositivo"',
        'Leia o aviso (ele remove do celular o que já está na nuvem)',
        'Confirme e veja o espaço ser liberado',
        'iPhone: Ajustes → Fotos → ative "Otimizar Armazenamento do iPhone"',
        'Abra uma foto antiga e veja ela baixar da nuvem (precisa de internet)',
        'Confira no Armazenamento o espaço que você ganhou',
      ],
    },
    desafio: {
      cenario: 'Libere espaço no celular com segurança, confirmando o backup antes e mantendo todas as fotos acessíveis.',
      requisitos: [
        'Confirmei que o backup estava concluído',
        'Usei "Liberar espaço" / "Otimizar Armazenamento"',
        'Liberei espaço no celular',
        'Confirmei que as fotos continuam acessíveis (baixam ao abrir)',
        'Não perdi nenhuma foto',
      ],
      dica: 'Faça desse um hábito tranquilo: com o backup sempre ativo, você pode liberar espaço quando o celular encher, sem nenhum medo. Backup + liberar espaço = celular que nunca lota e memórias eternas.',
    },
    validacao: [
      'Confirmo o backup antes de liberar',
      'Sei usar "Liberar espaço"/"Otimizar"',
      'Liberei espaço com segurança',
      'As fotos continuam acessíveis',
      'Não perco memórias ao liberar espaço',
    ],
  },

  'mob-fotos-6': {
    trilhaId: 'mob-fotos', numero: 6, titulo: 'Compartilhar álbum com a família',
    tempoTotal: 7, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Tirou fotos lindas de um evento de família e quer que todos tenham acesso, sem mandar 80 fotos uma a uma no WhatsApp? Um álbum compartilhado resolve: todos veem (e até adicionam) as fotos, num lugar só.',
      conceito: {
        titulo: 'Um álbum que a família inteira acessa',
        texto: 'Em vez de enviar dezenas de fotos por WhatsApp (que ainda perde qualidade), você cria um álbum compartilhado na nuvem (Google Fotos/iCloud) e envia UM link. Todos os convidados veem as fotos em alta qualidade, e podem até adicionar as deles — formando um álbum coletivo do evento. É a melhor forma de reunir e distribuir memórias de família.',
      },
      estrutura: {
        titulo: 'Compartilhando memórias',
        partes: [
          { simbolo: '🔗', desc: 'Álbum compartilhado: crie no Google Fotos/iCloud e gere um link.' },
          { simbolo: '👨‍👩‍👧‍👦', desc: 'Convidar: mande o link pra família (WhatsApp, e-mail); todos acessam.' },
          { simbolo: '➕', desc: 'Coletivo: os convidados podem adicionar fotos deles ao mesmo álbum.' },
          { simbolo: '🖼️', desc: 'Qualidade: o álbum mantém a qualidade (o WhatsApp comprime as fotos).' },
        ],
      },
      exemplo: {
        titulo: 'Álbum x mandar uma a uma',
        celulas: [
          { ref: 'Uma a uma', valor: 'Trabalhoso, perde qualidade, polui o chat' },
          { ref: 'Álbum', valor: 'Um link, alta qualidade, todos contribuem' },
          { ref: 'Resultado', valor: 'Álbum coletivo do evento' },
          { ref: 'Acesso', valor: 'Todos veem e baixam o que quiserem' },
        ],
        formula: 'Criar álbum compartilhado → enviar 1 link → todos acessam/contribuem',
        resultado: 'Memórias reunidas e distribuídas com qualidade.',
        comentario: 'O álbum compartilhado do Google Fotos é ideal pra eventos: você cria, manda o link no grupo da família, e cada um adiciona suas fotos. No fim, todo mundo tem o registro completo, em alta qualidade.',
      },
      vocabulario: [
        { palavra: 'Álbum compartilhado', def: 'Álbum na nuvem que várias pessoas podem ver (e às vezes adicionar fotos).' },
        { palavra: 'Link de compartilhamento', def: 'Endereço que dá acesso ao álbum a quem você enviar.' },
        { palavra: 'Compressão', def: 'Redução de qualidade que o WhatsApp faz nas fotos enviadas.' },
      ],
      chave: [
        'Crie um álbum compartilhado e envie um único link',
        'Todos veem em alta qualidade (o WhatsApp comprime)',
        'A família pode adicionar fotos ao álbum coletivo',
      ],
      porque: 'Compartilhar memórias de família é um dos maiores prazeres do celular. Fazer isso por álbum (em qualidade, sem trabalho) reúne todos em torno dos momentos importantes — e preserva o registro completo dos eventos.',
    },
    pratica: {
      instrucao: 'Pegue o celular. Vamos criar e compartilhar um álbum (use o Google Fotos ou iCloud).',
      passos: [
        'No Google Fotos: selecione algumas fotos → "Compartilhar" → "Criar álbum compartilhado"',
        '(Ou crie um álbum e use a opção de compartilhar/gerar link)',
        'Dê um nome ao álbum (ex: "Aniversário Vovó")',
        'Gere o link de compartilhamento',
        'Envie o link pra um familiar (WhatsApp/e-mail)',
        'Veja a opção que permite os convidados ADICIONAREM fotos',
        'Confirme com o familiar que ele consegue ver o álbum',
      ],
    },
    desafio: {
      cenario: 'Crie um álbum compartilhado de um evento real e envie o link pra família, permitindo que todos vejam (e contribuam).',
      requisitos: [
        'Criei um álbum compartilhado na nuvem',
        'Dei um nome ao álbum',
        'Gerei e enviei o link pra família',
        'Habilitei a opção de adicionarem fotos (se quis)',
        'Um familiar confirmou o acesso',
      ],
      dica: 'Da próxima vez que a família se reunir, crie o álbum compartilhado na hora e mande no grupo. Todo mundo joga suas fotos lá — e ninguém fica de fora das memórias, em alta qualidade.',
    },
    validacao: [
      'Sei criar um álbum compartilhado',
      'Sei gerar o link',
      'Sei enviar pra família',
      'Sei permitir que adicionem fotos',
      'A família acessa as memórias',
    ],
  },

  'mob-fotos-7': {
    trilhaId: 'mob-fotos', numero: 7, titulo: 'Projeto: backup completo + álbum',
    tempoTotal: 15, xp: 90, vertente: 'celular',
    aula: {
      gancho: 'Hora de juntar tudo: garantir que TODAS as suas memórias estão seguras na nuvem, com a galeria organizada em álbuns e um álbum de família compartilhado. No fim, suas fotos estarão protegidas pra sempre — e fáceis de reviver.',
      conceito: {
        titulo: 'Suas memórias protegidas e organizadas',
        texto: 'Este projeto consolida a trilha: backup automático ativo (memórias seguras), galeria limpa e organizada em álbuns, espaço liberado com segurança, e um álbum compartilhado com a família. É o cuidado completo com aquilo que muita gente mais teme perder — as fotos da vida. Ao terminar, você tem a tranquilidade de saber que nenhuma memória se perde, e o prazer de tê-las organizadas.',
      },
      estrutura: {
        titulo: 'O cuidado completo com as fotos',
        partes: [
          { simbolo: '☁️', desc: 'Backup ativo e concluído (todas as fotos na nuvem).' },
          { simbolo: '🗂️', desc: 'Galeria organizada: lixo apagado, álbuns por tema, favoritas marcadas.' },
          { simbolo: '🧹', desc: 'Espaço liberado com segurança (backup feito antes).' },
          { simbolo: '👨‍👩‍👧‍👦', desc: 'Álbum compartilhado com a família.' },
        ],
      },
      exemplo: {
        titulo: 'O checklist das memórias',
        celulas: [
          { ref: 'Backup', valor: 'Concluído ✓ (memórias seguras)' },
          { ref: 'Organização', valor: 'Álbuns por tema + favoritas ✓' },
          { ref: 'Espaço', valor: 'Liberado com segurança ✓' },
          { ref: 'Família', valor: 'Álbum compartilhado ✓' },
        ],
        formula: 'Backup + organização + espaço + compartilhamento',
        resultado: 'Memórias seguras, organizadas e compartilhadas.',
        comentario: 'Esse é um dos projetos de maior valor emocional do app. Fotos são memórias insubstituíveis — protegê-las e organizá-las é um presente que você dá a si mesmo e à família.',
      },
      vocabulario: [
        { palavra: 'Memórias digitais', def: 'Suas fotos e vídeos — registros insubstituíveis da vida.' },
        { palavra: 'Backup completo', def: 'Todas as fotos copiadas com segurança pra nuvem.' },
        { palavra: 'Organização', def: 'Galeria limpa e dividida em álbuns por tema.' },
      ],
      chave: [
        'Backup ativo = memórias nunca se perdem',
        'Galeria organizada em álbuns = fácil reviver e compartilhar',
        'Espaço liberado com segurança + álbum de família',
      ],
      porque: 'Concluir esta trilha protege o que muitas pessoas mais valorizam: as fotos da vida. É segurança contra a perda e prazer na organização — um cuidado que vale por décadas de memórias.',
    },
    pratica: {
      instrucao: 'Reserve 15 minutos. Faça o cuidado completo das suas fotos, usando tudo da trilha.',
      passos: [
        'Confirme que o backup automático está ATIVO e concluído',
        'Dê uma faxina na galeria: apague borradas/repetidas, favorite as melhores',
        'Crie (ou revise) álbuns por tema, incluindo um de "Documentos"',
        'Confirmado o backup, use "Liberar espaço" pra deixar o celular leve',
        'Crie um álbum compartilhado de um evento e mande o link pra família',
        'Acesse photos.google.com (ou iCloud.com) no computador e veja suas fotos seguras',
        'Revise: backup ✓, organização ✓, espaço ✓, compartilhamento ✓',
      ],
    },
    desafio: {
      cenario: 'Entregue o cuidado completo das suas memórias: backup ativo, galeria organizada em álbuns, espaço liberado e um álbum compartilhado com a família.',
      requisitos: [
        'Backup automático ativo e concluído',
        'Galeria organizada (lixo apagado, favoritas, álbuns)',
        'Pelo menos um álbum "Documentos"',
        'Espaço liberado com segurança',
        'Um álbum compartilhado com a família',
        'Confirmei minhas fotos seguras na nuvem (acessei pelo computador)',
      ],
      dica: 'Parabéns — você concluiu a trilha de Fotos e, com ela, TODO o módulo Celular! Suas memórias agora estão protegidas pra sempre e organizadas. Mantenha o backup sempre ativo: é a garantia de que nenhum momento se perde, aconteça o que acontecer com o aparelho.',
    },
    validacao: [
      'Backup ativo e concluído',
      'Galeria organizada em álbuns',
      'Tenho um álbum de documentos',
      'Liberei espaço com segurança',
      'Compartilhei um álbum com a família',
      'Minhas memórias estão seguras e organizadas',
    ],
  },
};
