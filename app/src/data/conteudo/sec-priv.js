// ============================================================================
// CONTEÚDO — Privacidade e Seus Dados Pessoais (sec-priv)
// módulo Segurança · vertente "ambos"
// Dados como valor, permissões de apps, privacidade em redes, LGPD,
// rastreamento, pegada digital, localização/metadados. Autoral, foco no Brasil.
// ============================================================================

export const SEC_PRIV = {
  'sec-priv-1': {
    trilhaId: 'sec-priv', numero: 1, titulo: 'Seus dados valem dinheiro: quem quer e por quê',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Por que tantos apps e sites são "grátis"? Porque o produto, muitas vezes, são os seus dados. Entender quem coleta suas informações e pra quê é o primeiro passo pra decidir quanto de você quer entregar.',
      conceito: {
        titulo: 'Privacidade é você escolhendo o que compartilhar',
        texto: 'Seus dados — o que você busca, curte, compra, onde está, com quem fala — são coletados, cruzados e usados pra te perfilar e te vender coisas (e às vezes vazam ou caem com golpistas). Privacidade não é "não ter nada a esconder"; é ter o controle de quem sabe o quê sobre você. Empresas usam esses dados pra publicidade direcionada; criminosos usam dados expostos pra golpes mais convincentes (sabem seu nome, sua cidade, suas compras). A boa notícia: você pode reduzir bastante o que entrega ajustando permissões e configurações. Esta trilha te dá esse controle de volta.',
      },
      estrutura: {
        titulo: 'Quem quer seus dados',
        partes: [
          { simbolo: '📊', desc: 'Plataformas: pra te perfilar e vender publicidade direcionada.' },
          { simbolo: '🏪', desc: 'Anunciantes e corretores de dados: pra te alcançar e revender perfis.' },
          { simbolo: '🦹', desc: 'Golpistas: dados expostos deixam os golpes mais convincentes.' },
          { simbolo: '🎛️', desc: 'Você: pode controlar quanto compartilha em cada um.' },
        ],
      },
      exemplo: {
        titulo: 'Como um dado vira golpe',
        celulas: [
          { ref: 'Exposto', valor: 'Nome, cidade e compra recente visíveis online' },
          { ref: 'Golpista usa', valor: '"Olá [seu nome], sua compra na [loja] teve problema"' },
          { ref: 'Efeito', valor: 'O golpe parece real porque acerta seus dados' },
          { ref: 'Defesa', valor: 'Expor menos = golpes têm menos munição' },
        ],
        formula: 'Menos dados expostos = menos perfil e menos munição pra golpe',
        resultado: 'Você reduz publicidade invasiva e fraudes personalizadas.',
        comentario: 'Não dá (nem precisa) zerar tudo. A meta é reduzir o desnecessário: cada permissão a menos e cada perfil mais fechado significam menos sobre você circulando por aí.',
      },
      vocabulario: [
        { palavra: 'Dado pessoal', def: 'Qualquer informação que identifica você (nome, hábitos, localização).' },
        { palavra: 'Perfilamento', def: 'Cruzar seus dados pra prever seus gostos e comportamentos.' },
        { palavra: 'Corretor de dados', def: 'Empresa que coleta e revende perfis de pessoas.' },
      ],
      chave: [
        'Em apps "grátis", muitas vezes o produto são seus dados',
        'Privacidade é controlar quem sabe o quê sobre você',
        'Menos dados expostos = menos perfil e menos golpe direcionado',
      ],
      porque: 'Entender o valor dos seus dados motiva a cuidar deles. Quando você percebe que cada informação alimenta perfis e pode municiar golpes, ajustar permissões e configurações deixa de ser chato e passa a fazer sentido.',
    },
    pratica: {
      instrucao: 'Tome consciência da sua exposição atual.',
      passos: [
        'Pense em 3 apps que você usa de graça — como eles ganham dinheiro?',
        'Liste que tipos de dado seus eles podem coletar',
        'Pesquise seu próprio nome e veja o que aparece publicamente',
        'Reflita: o que aí poderia municiar um golpe contra você?',
        'Combine: quero reduzir o desnecessário ao longo da trilha',
      ],
    },
    desafio: {
      cenario: 'Você entende o valor dos seus dados e decide controlar conscientemente o que compartilha.',
      requisitos: [
        'Entendo que dados são o "produto" de apps grátis',
        'Sei que privacidade é controle, não esconderijo',
        'Reconheço como dados expostos viram golpe',
        'Quero reduzir o que compartilho sem necessidade',
        'Vejo a privacidade como algo sob meu controle',
      ],
      dica: 'Privacidade não é tudo ou nada. Cada ajuste conta: uma permissão revogada aqui, um perfil fechado ali. Ao longo da trilha, esses pequenos passos somam uma proteção grande.',
    },
    validacao: [
      'Entendo que dados são o produto',
      'Sei que privacidade é controle',
      'Reconheço dado virando golpe',
      'Quero reduzir o desnecessário',
      'Vejo privacidade sob meu controle',
    ],
  },

  'sec-priv-2': {
    trilhaId: 'sec-priv', numero: 2, titulo: 'Permissões de apps: o que cada app pode ver',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Por que um app de lanterna pediria acesso aos seus contatos e à sua localização? Cada permissão que um app tem é uma janela pra sua vida. Revisar quem pode ver o quê é uma das faxinas de privacidade mais eficazes.',
      conceito: {
        titulo: 'Dê só a permissão que a função exige',
        texto: 'Apps pedem acesso a câmera, microfone, localização, contatos, fotos e mais. Muitos pedem bem mais do que precisam pra funcionar — e usam isso pra coletar dados. A regra de ouro: a permissão deve combinar com a função. Um app de mapa precisa de localização; um jogo simples, não. Revise as permissões nas configurações do aparelho, revogue o que não faz sentido, e prefira "permitir só enquanto uso o app" em vez de "permitir sempre", especialmente pra localização. Microfone e câmera merecem atenção redobrada: só apps que realmente usam deveriam tê-los.',
      },
      estrutura: {
        titulo: 'Permissões que pedem atenção',
        partes: [
          { simbolo: '📍', desc: 'Localização: prefira "só enquanto uso", não "sempre".' },
          { simbolo: '🎤', desc: 'Microfone e câmera: só pra apps que realmente usam.' },
          { simbolo: '👥', desc: 'Contatos: muitos apps não precisam da sua agenda.' },
          { simbolo: '🖼️', desc: 'Fotos: dê acesso a fotos específicas, não à galeria toda.' },
        ],
      },
      exemplo: {
        titulo: 'A permissão combina com a função?',
        celulas: [
          { ref: 'Faz sentido', valor: 'App de mapa pedindo localização' },
          { ref: 'Não faz', valor: 'Lanterna pedindo contatos e localização' },
          { ref: 'Ajuste', valor: 'Localização: "só enquanto uso o app"' },
          { ref: 'Faxina', valor: 'Revogar o que não combina com a função' },
        ],
        formula: 'Permissão necessária = mantém; desnecessária = revoga',
        resultado: 'Os apps passam a ver só o que precisam pra funcionar.',
        comentario: 'Revogar uma permissão não quebra o app: se ele realmente precisar, vai pedir de novo na hora certa. Na dúvida, revogue — você sempre pode reconceder se fizer falta.',
      },
      vocabulario: [
        { palavra: 'Permissão', def: 'Autorização que um app tem pra acessar algo do aparelho.' },
        { palavra: '"Só enquanto uso"', def: 'Opção que libera o acesso apenas com o app aberto.' },
        { palavra: 'Excesso de permissão', def: 'App que pede mais acesso do que a função exige.' },
      ],
      chave: [
        'A permissão deve combinar com a função do app',
        'Localização: prefira "só enquanto uso", não "sempre"',
        'Revogue o que não faz sentido — sem medo',
      ],
      porque: 'Revisar permissões é faxina de alto impacto: corta de uma vez vários canais de coleta de dados. É um dos ajustes que mais devolve privacidade com poucos minutos de trabalho.',
    },
    pratica: {
      instrucao: 'Faça uma revisão de permissões no seu aparelho.',
      passos: [
        'Abra as configurações de privacidade/permissões do aparelho',
        'Veja quais apps têm localização "sempre" e mude pra "só enquanto uso"',
        'Veja quais têm microfone e câmera — todos precisam mesmo?',
        'Revogue acesso a contatos/fotos de apps que não precisam',
        'Combine: revisar permissões de tempos em tempos',
      ],
    },
    desafio: {
      cenario: 'Você revisa as permissões dos apps e mantém só as que combinam com cada função.',
      requisitos: [
        'Reviso as permissões dos meus apps',
        'Mantenho só o que combina com a função',
        'Uso "só enquanto uso" pra localização',
        'Cuido de microfone, câmera, contatos e fotos',
        'Revogo o desnecessário sem medo',
      ],
      dica: 'Faça essa revisão especialmente depois de instalar apps novos. É no momento da instalação que eles pedem tudo de uma vez — revisar logo depois pega os excessos antes que virem coleta contínua.',
    },
    validacao: [
      'Reviso as permissões dos apps',
      'Mantenho só o necessário',
      'Uso "só enquanto uso" na localização',
      'Cuido de microfone/câmera/contatos',
      'Revogo o desnecessário',
    ],
  },

  'sec-priv-3': {
    trilhaId: 'sec-priv', numero: 3, titulo: 'Configurar privacidade nas redes sociais',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Por padrão, muitas redes sociais deixam seu perfil bem mais aberto do que você imagina — visível pra qualquer um, incluindo golpistas montando um perfil seu. Alguns ajustes simples mudam quem pode ver e contatar você.',
      conceito: {
        titulo: 'O padrão é aberto; você fecha o que quiser',
        texto: 'Redes sociais nascem configuradas pra máxima visibilidade, porque isso as beneficia. Mas você decide quem vê suas publicações, sua lista de amigos, suas fotos, seu telefone e quem pode te enviar mensagem. Ajuste o público das suas postagens (amigos em vez de público), esconda informações de contato, controle quem pode te marcar e te adicionar, e revise o que está visível pra estranhos. Isso reduz o material que golpistas usam pra te conhecer e te abordar — e também a chance de alguém clonar seu perfil com suas próprias fotos públicas.',
      },
      estrutura: {
        titulo: 'O que ajustar em cada rede',
        partes: [
          { simbolo: '👁️', desc: 'Público das postagens: prefira "amigos" a "público".' },
          { simbolo: '📞', desc: 'Esconda telefone, e-mail e dados de contato do perfil.' },
          { simbolo: '🏷️', desc: 'Controle quem pode te marcar e te adicionar.' },
          { simbolo: '🔍', desc: 'Revise o que aparece pra quem não é seu amigo.' },
        ],
      },
      exemplo: {
        titulo: 'Perfil aberto x ajustado',
        celulas: [
          { ref: 'Aberto', valor: 'Tudo público: fotos, amigos, telefone, rotina' },
          { ref: 'Risco', valor: 'Golpista clona o perfil e/ou te aborda com seus dados' },
          { ref: 'Ajustado', valor: 'Postagens pra amigos, contato escondido' },
          { ref: 'Cheque', valor: 'Ver o perfil "como um estranho vê"' },
        ],
        formula: 'Fechar o público + esconder contato = menos exposição',
        resultado: 'Estranhos veem pouco; golpistas têm menos material.',
        comentario: 'Use a opção "ver como" (quando existir) pra olhar seu perfil pelos olhos de um estranho. É a forma mais rápida de descobrir o que está escapando sem você perceber.',
      },
      vocabulario: [
        { palavra: 'Público da postagem', def: 'Quem pode ver o que você publica (público, amigos, só você).' },
        { palavra: 'Clonagem de perfil', def: 'Golpista copia suas fotos públicas e finge ser você.' },
        { palavra: '"Ver como"', def: 'Recurso pra ver seu perfil como um estranho o veria.' },
      ],
      chave: [
        'O padrão das redes é aberto; feche o que quiser',
        'Ajuste o público, esconda contato e controle marcações',
        'Use "ver como estranho" pra revisar a exposição',
      ],
      porque: 'Ajustar a privacidade das redes corta a principal fonte de dados que golpistas usam pra te conhecer e te abordar. São minutos de configuração que reduzem muito sua exposição pública.',
    },
    pratica: {
      instrucao: 'Revise as configurações de privacidade de uma rede sua.',
      passos: [
        'Abra as configurações de privacidade de uma rede que você usa',
        'Ajuste o público padrão das postagens pra "amigos"',
        'Esconda telefone, e-mail e dados de contato do perfil',
        'Controle quem pode te marcar e te adicionar',
        'Use "ver como" pra conferir o que um estranho enxerga',
      ],
    },
    desafio: {
      cenario: 'Você ajusta a privacidade das suas redes pra que estranhos vejam o mínimo.',
      requisitos: [
        'Ajusto o público das minhas postagens',
        'Escondo informações de contato do perfil',
        'Controlo quem pode me marcar e adicionar',
        'Reviso o que aparece pra estranhos',
        'Reduzo o material disponível a golpistas',
      ],
      dica: 'Cuidado com o que revela rotina: fotos "saindo de viagem agora" avisam que sua casa está vazia. Postar depois de voltar é mais seguro que postar em tempo real.',
    },
    validacao: [
      'Ajusto o público das postagens',
      'Escondo dados de contato',
      'Controlo marcações e adições',
      'Reviso a visão de estranhos',
      'Reduzo material pra golpistas',
    ],
  },

  'sec-priv-4': {
    trilhaId: 'sec-priv', numero: 4, titulo: 'O que não postar (e o que apagar do passado)',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Uma foto do cartão de embarque, o número do comprovante, a placa do carro, a frente da sua casa: detalhes que parecem inofensivos numa publicação podem entregar muito mais do que você imagina. Saber o que não postar evita dores de cabeça.',
      conceito: {
        titulo: 'Pense no que a publicação revela além da imagem',
        texto: 'Toda publicação carrega informação extra. Um documento na foto expõe números; um cartão de embarque traz códigos que dão acesso a dados da viagem; uma foto da fachada mais a "viagem de férias" diz que sua casa está vazia; o crachá do trabalho revela seu empregador. Antes de postar, pergunte: o que isso revela sobre mim, meus documentos, minha localização ou minha rotina? E não é só o futuro: vale revisar publicações antigas e apagar o que expõe dados sensíveis. O que está no ar há anos ainda pode ser usado hoje.',
      },
      estrutura: {
        titulo: 'O que evitar publicar',
        partes: [
          { simbolo: '🪪', desc: 'Documentos, números de cartão, comprovantes, cartão de embarque.' },
          { simbolo: '🏠', desc: 'Fachada da casa + sinais de que você está fora (viagem em tempo real).' },
          { simbolo: '🚗', desc: 'Placa do carro, crachá, dados que identificam local de trabalho.' },
          { simbolo: '🕰️', desc: 'Revise e apague publicações antigas que expõem dados.' },
        ],
      },
      exemplo: {
        titulo: 'O detalhe que escapa',
        celulas: [
          { ref: 'Inocente', valor: 'Foto do cartão de embarque "primeira viagem!"' },
          { ref: 'Revela', valor: 'Código com acesso a dados do seu voo e cadastro' },
          { ref: 'Antes de postar', valor: 'O que isso entrega além da imagem?' },
          { ref: 'Passado', valor: 'Apagar posts antigos com documentos/dados' },
        ],
        formula: 'Antes de postar: "o que isso revela além da foto?"',
        resultado: 'Você publica sem entregar dados sensíveis sem querer.',
        comentario: 'A regra do bom senso: se a informação ajudaria um estranho a te localizar, te imitar ou acessar algo seu, não vá pro "publicar". Na dúvida, recorte, borre ou simplesmente não poste.',
      },
      vocabulario: [
        { palavra: 'Dado sensível', def: 'Informação que expõe documentos, localização ou rotina.' },
        { palavra: 'Oversharing', def: 'Compartilhar detalhes demais sem perceber o que revelam.' },
        { palavra: 'Revisão do passado', def: 'Apagar publicações antigas que ainda expõem dados.' },
      ],
      chave: [
        'Toda publicação revela mais que a imagem',
        'Evite documentos, fachada+viagem, placas e crachás',
        'Revise e apague o que já está exposto no passado',
      ],
      porque: 'Saber o que não postar fecha uma fonte comum de exposição que a própria pessoa cria. Combinada com a revisão do passado, essa consciência reduz o que circula sobre você sem precisar sair das redes.',
    },
    pratica: {
      instrucao: 'Crie seu filtro mental do "antes de postar".',
      passos: [
        'Adote a pergunta: "o que isso revela além da imagem?"',
        'Liste o que você nunca vai postar (documentos, placas, viagem ao vivo)',
        'Revise suas publicações recentes em busca de dados sensíveis',
        'Apague ou ajuste o que expõe demais',
        'Combine: postar viagem só depois de voltar',
      ],
    },
    desafio: {
      cenario: 'Você filtra o que publica e revisa o passado pra não expor dados sensíveis.',
      requisitos: [
        'Pergunto "o que isso revela?" antes de postar',
        'Não publico documentos, placas e comprovantes',
        'Evito anunciar viagem em tempo real',
        'Reviso publicações antigas',
        'Apago o que expõe dados sensíveis',
      ],
      dica: 'Vale o mesmo pros filhos e familiares: pense duas vezes antes de expor rotina, escola ou rosto de crianças publicamente. O que você publica sobre os outros também é privacidade deles.',
    },
    validacao: [
      'Pergunto o que a foto revela',
      'Não posto documentos e placas',
      'Evito viagem em tempo real',
      'Reviso o passado',
      'Apago dados sensíveis',
    ],
  },

  'sec-priv-5': {
    trilhaId: 'sec-priv', numero: 5, titulo: 'Cookies, rastreamento e anúncios que te seguem',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Você olha um tênis numa loja e, de repente, ele te persegue em anúncios por dias em todos os sites. Não é coincidência nem o microfone te ouvindo: é rastreamento. Entender como funciona te dá ferramentas pra reduzi-lo.',
      conceito: {
        titulo: 'Cookies e rastreadores montam seu perfil de navegação',
        texto: 'Ao navegar, sites colocam cookies e rastreadores que registram o que você vê, e empresas de publicidade cruzam isso entre sites pra te perfilar e exibir anúncios direcionados. Você pode reduzir bastante esse rastreamento: nos banners de cookies, recuse ou aceite só os essenciais (não clique "aceitar tudo" no automático); use as configurações de privacidade do navegador pra bloquear rastreadores de terceiros; limpe cookies periodicamente; e considere um navegador ou modo que bloqueie rastreamento. Não some o rastreamento todo, mas cai muito — e os anúncios param de te seguir tão de perto.',
      },
      estrutura: {
        titulo: 'Como reduzir o rastreamento',
        partes: [
          { simbolo: '🍪', desc: 'Nos banners, recuse ou aceite só os essenciais.' },
          { simbolo: '🚫', desc: 'Bloqueie rastreadores de terceiros nas opções do navegador.' },
          { simbolo: '🧹', desc: 'Limpe cookies periodicamente.' },
          { simbolo: '🕵️', desc: 'Considere um navegador/modo que bloqueia rastreamento.' },
        ],
      },
      exemplo: {
        titulo: 'O anúncio que te persegue',
        celulas: [
          { ref: 'Você vê', valor: 'Um tênis numa loja online' },
          { ref: 'Rastreador', valor: 'Registra e compartilha entre sites de anúncio' },
          { ref: 'Resultado', valor: 'O tênis aparece em todos os sites por dias' },
          { ref: 'Defesa', valor: 'Recusar cookies + bloquear rastreadores' },
        ],
        formula: 'Recusar cookies + bloquear terceiros + limpar = menos rastreio',
        resultado: 'Seu perfil de navegação fica bem menos completo.',
        comentario: 'O anúncio que te "persegue" não prova que te escutam: é o rastreamento de navegação fazendo seu trabalho. Reduzi-lo melhora privacidade e ainda deixa a navegação mais leve.',
      },
      vocabulario: [
        { palavra: 'Cookie', def: 'Arquivo que um site guarda no navegador; alguns rastreiam.' },
        { palavra: 'Rastreador de terceiros', def: 'Código de outra empresa que te segue entre sites.' },
        { palavra: 'Anúncio direcionado', def: 'Propaganda baseada no seu perfil de navegação.' },
      ],
      chave: [
        'Cookies e rastreadores montam seu perfil entre sites',
        'Recuse cookies não essenciais e bloqueie rastreadores',
        'Limpe cookies e use navegador que proteja a privacidade',
      ],
      porque: 'Entender o rastreamento desmistifica os "anúncios que escutam" e te dá ações concretas. Reduzir cookies e rastreadores diminui seu perfil publicitário e devolve um tanto de anonimato à navegação.',
    },
    pratica: {
      instrucao: 'Reduza o rastreamento na sua navegação.',
      passos: [
        'Da próxima vez num banner de cookies, recuse ou aceite só essenciais',
        'Abra as configurações de privacidade do seu navegador',
        'Ative o bloqueio de rastreadores de terceiros',
        'Limpe os cookies acumulados',
        'Considere um navegador/modo focado em privacidade',
      ],
    },
    desafio: {
      cenario: 'Você recusa cookies não essenciais e configura o navegador pra bloquear rastreadores.',
      requisitos: [
        'Entendo como cookies e rastreadores funcionam',
        'Recuso cookies não essenciais nos banners',
        'Bloqueio rastreadores de terceiros',
        'Limpo cookies periodicamente',
        'Considero navegador/modo de privacidade',
      ],
      dica: 'Lembre da regra de privacidade da trilha de navegação: aceitar a opção mais protetiva nos banners é sempre permitido. Recusar cookies raramente impede de usar o site.',
    },
    validacao: [
      'Entendo cookies e rastreadores',
      'Recuso cookies não essenciais',
      'Bloqueio rastreadores de terceiros',
      'Limpo cookies periodicamente',
      'Considero navegador de privacidade',
    ],
  },

  'sec-priv-6': {
    trilhaId: 'sec-priv', numero: 6, titulo: 'LGPD: seus direitos sobre seus dados',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'No Brasil, existe uma lei que diz que os seus dados são seus — e dá a você o poder de saber o que as empresas têm sobre você, corrigir e até pedir pra apagar. É a LGPD, e conhecer seus direitos é uma ferramenta de privacidade poderosa.',
      conceito: {
        titulo: 'A LGPD coloca você no comando dos seus dados',
        texto: 'A Lei Geral de Proteção de Dados (LGPD) garante direitos sobre como empresas coletam e usam suas informações. Você pode pedir pra saber quais dados uma empresa tem sobre você, corrigir dados errados, solicitar a exclusão de dados desnecessários, revogar consentimentos e saber com quem seus dados foram compartilhados. As empresas precisam ter uma base legal pra usar seus dados e devem informar isso de forma clara. Na prática: leia o que aceita, revogue consentimentos que não quer mais, e use seu direito de pedir exclusão quando fizer sentido. Há um órgão nacional que fiscaliza e recebe denúncias.',
      },
      estrutura: {
        titulo: 'Seus principais direitos',
        partes: [
          { simbolo: '🔎', desc: 'Acesso: saber quais dados a empresa tem sobre você.' },
          { simbolo: '✏️', desc: 'Correção: ajustar dados incorretos.' },
          { simbolo: '🗑️', desc: 'Exclusão: pedir pra apagar dados desnecessários.' },
          { simbolo: '↩️', desc: 'Revogação: retirar um consentimento que você deu.' },
        ],
      },
      exemplo: {
        titulo: 'Usando seus direitos',
        celulas: [
          { ref: 'Acesso', valor: 'Pedir à empresa a lista de dados que ela tem' },
          { ref: 'Correção', valor: 'Mandar corrigir um dado errado no cadastro' },
          { ref: 'Exclusão', valor: 'Solicitar apagar dados que não precisa mais manter' },
          { ref: 'Fiscalização', valor: 'Denunciar ao órgão nacional se não atenderem' },
        ],
        formula: 'Acesso + correção + exclusão + revogação = controle real',
        resultado: 'Você exerce poder sobre o que empresas fazem com seus dados.',
        comentario: 'Empresas sérias têm um canal de privacidade (muitas vezes um "encarregado de dados" ou DPO) pra atender esses pedidos. Procurar esse canal é o caminho prático pra exercer seus direitos.',
      },
      vocabulario: [
        { palavra: 'LGPD', def: 'Lei brasileira que protege seus dados pessoais e dá direitos sobre eles.' },
        { palavra: 'Consentimento', def: 'Sua autorização pra uma empresa usar seus dados; pode ser revogado.' },
        { palavra: 'Encarregado (DPO)', def: 'Pessoa/canal da empresa que atende pedidos sobre seus dados.' },
      ],
      chave: [
        'A LGPD dá a você direitos sobre seus dados',
        'Você pode acessar, corrigir, excluir e revogar consentimento',
        'Há um órgão nacional que fiscaliza e recebe denúncias',
      ],
      porque: 'Conhecer a LGPD transforma privacidade de "torcer pra empresa respeitar" em direito que você exerce. Saber pedir acesso, exclusão e revogação te dá controle real sobre os seus dados.',
    },
    pratica: {
      instrucao: 'Conheça e planeje usar seus direitos da LGPD.',
      passos: [
        'Memorize seus direitos: acesso, correção, exclusão, revogação',
        'Pense numa empresa que tem muitos dados seus',
        'Procure o canal de privacidade dela (política de privacidade)',
        'Considere pedir a lista de dados ou a exclusão de algo desnecessário',
        'Saiba que há um órgão nacional pra denúncias',
      ],
    },
    desafio: {
      cenario: 'Você conhece seus direitos da LGPD e sabe como exercê-los junto às empresas.',
      requisitos: [
        'Sei que a LGPD me dá direitos sobre meus dados',
        'Conheço acesso, correção, exclusão e revogação',
        'Sei procurar o canal de privacidade da empresa',
        'Sei que posso revogar consentimentos',
        'Sei que há um órgão nacional de fiscalização',
      ],
      dica: 'Ao se cadastrar em algo novo, repare na base e na finalidade do uso dos seus dados. Quanto mais você entende o que aceita, mais fácil é revogar depois o que não quer mais.',
    },
    validacao: [
      'Sei que a LGPD me dá direitos',
      'Conheço os principais direitos',
      'Sei achar o canal de privacidade',
      'Sei revogar consentimentos',
      'Sei que há fiscalização',
    ],
  },

  'sec-priv-7': {
    trilhaId: 'sec-priv', numero: 7, titulo: 'Pegada digital: o que existe sobre você na internet',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Já se pesquisou no buscador? O que aparece sobre você é a sua pegada digital — e é o que um estranho, um recrutador ou um golpista encontra ao te procurar. Conhecer e cuidar dessa pegada é parte importante da privacidade.',
      conceito: {
        titulo: 'Sua pegada digital é o seu retrato público',
        texto: 'Pegada digital é o conjunto de informações sobre você espalhadas pela internet: perfis em redes, fotos, comentários, cadastros, notícias, dados em sites de terceiros. Parte você criou; parte foi criada por outros ou por empresas que agregam dados. Vale fazer uma "auditoria": pesquisar seu nome (e variações, com cidade) e ver o que aparece. Onde encontrar algo indesejado, você pode ajustar a privacidade (no caso de perfis seus), pedir remoção (a sites e, em certos casos, a buscadores) ou usar seus direitos da LGPD. Reduzir o que está exposto diminui material pra golpes e melhora sua imagem pública.',
      },
      estrutura: {
        titulo: 'Auditoria da pegada digital',
        partes: [
          { simbolo: '🔎', desc: 'Pesquise seu nome (e com a cidade) e veja o que aparece.' },
          { simbolo: '🧾', desc: 'Identifique perfis antigos, cadastros e dados esquecidos.' },
          { simbolo: '🔧', desc: 'Ajuste a privacidade do que é seu; encerre contas que não usa.' },
          { simbolo: '🗑️', desc: 'Peça remoção a sites/buscadores e use a LGPD quando couber.' },
        ],
      },
      exemplo: {
        titulo: 'O que um estranho encontra',
        celulas: [
          { ref: 'Busca', valor: 'Seu nome + cidade no buscador' },
          { ref: 'Aparece', valor: 'Perfis antigos, fotos, cadastros, comentários' },
          { ref: 'Ação', valor: 'Fechar/encerrar o que é seu e está exposto' },
          { ref: 'Remoção', valor: 'Pedir a sites/buscadores e usar a LGPD' },
        ],
        formula: 'Auditar + ajustar + pedir remoção = pegada menor',
        resultado: 'Quem te procura encontra menos — e você controla mais.',
        comentario: 'Contas antigas que você não usa mais são pegada esquecida: encerre o que não serve. Cada perfil abandonado é um dado a menos exposto e uma conta a menos pra ser invadida.',
      },
      vocabulario: [
        { palavra: 'Pegada digital', def: 'Tudo que existe sobre você na internet, criado por você ou por outros.' },
        { palavra: 'Auditoria', def: 'Pesquisar a si mesmo pra mapear o que está exposto.' },
        { palavra: 'Direito de remoção', def: 'Pedir a retirada de conteúdo/links sobre você quando cabível.' },
      ],
      chave: [
        'Pegada digital é o que um estranho encontra sobre você',
        'Audite pesquisando seu nome e ajuste o que achar',
        'Encerre contas antigas e peça remoção quando couber',
      ],
      porque: 'Conhecer a própria pegada digital revela exposições que você nem lembrava. Auditar e limpar reduz o material disponível a golpistas e melhora o que aparece quando alguém te procura.',
    },
    pratica: {
      instrucao: 'Faça uma auditoria da sua pegada digital.',
      passos: [
        'Pesquise seu nome no buscador (e com a sua cidade)',
        'Anote perfis, fotos e cadastros indesejados que aparecem',
        'Ajuste a privacidade dos perfis que são seus',
        'Encerre contas antigas que você não usa mais',
        'Veja onde cabe pedir remoção ou usar a LGPD',
      ],
    },
    desafio: {
      cenario: 'Você audita sua pegada digital e reduz o que está exposto sobre você.',
      requisitos: [
        'Pesquiso meu nome pra mapear minha pegada',
        'Identifico o que está exposto indevidamente',
        'Ajusto a privacidade do que é meu',
        'Encerro contas antigas que não uso',
        'Sei pedir remoção e usar a LGPD',
      ],
      dica: 'Refaça essa auditoria de vez em quando — a internet muda. Um lembrete a cada poucos meses pra "se pesquisar" mantém sua pegada sob controle ao longo do tempo.',
    },
    validacao: [
      'Pesquiso meu nome',
      'Identifico exposições indevidas',
      'Ajusto a privacidade do que é meu',
      'Encerro contas antigas',
      'Sei pedir remoção/usar LGPD',
    ],
  },

  'sec-priv-8': {
    trilhaId: 'sec-priv', numero: 8, titulo: 'Localização e metadados das fotos',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Uma foto não guarda só a imagem: pode guardar onde e quando foi tirada, num dado invisível chamado metadado. Compartilhar a foto pode, sem você saber, compartilhar o endereço exato de onde você estava.',
      conceito: {
        titulo: 'A foto pode entregar onde você estava',
        texto: 'Muitas câmeras de celular gravam, junto da imagem, metadados como data, hora e localização exata (GPS). Se você envia a foto original, pode entregar o endereço de onde ela foi tirada — inclusive da sua casa. Para evitar: desative o registro de localização na câmera (ou para apps específicos), e prefira compartilhar de formas que removam metadados. Cuide também do compartilhamento de localização em tempo real em apps e redes: ele é útil pra família, mas perigoso se ficar aberto pra estranhos ou ligado o tempo todo. Localização é um dado sensível — compartilhe com intenção, não por padrão.',
      },
      estrutura: {
        titulo: 'Controlando a localização',
        partes: [
          { simbolo: '📷', desc: 'Desative o GPS nas fotos da câmera (ou para apps específicos).' },
          { simbolo: '🧹', desc: 'Compartilhe de formas que removam os metadados.' },
          { simbolo: '📡', desc: 'Localização em tempo real: só com quem você confia, e por tempo limitado.' },
          { simbolo: '🎯', desc: 'Trate localização como dado sensível: compartilhe com intenção.' },
        ],
      },
      exemplo: {
        titulo: 'O endereço escondido na foto',
        celulas: [
          { ref: 'Foto', valor: 'Imagem comum tirada em casa' },
          { ref: 'Metadado', valor: 'GPS com a localização exata gravado junto' },
          { ref: 'Risco', valor: 'Enviar a original entrega onde você mora' },
          { ref: 'Defesa', valor: 'Desligar GPS da câmera e remover metadados' },
        ],
        formula: 'Desligar GPS da câmera + remover metadados = sem endereço vazado',
        resultado: 'Suas fotos param de entregar onde você esteve.',
        comentario: 'Plataformas grandes costumam remover metadados ao publicar, mas o arquivo original enviado direto (por mensagem, e-mail) geralmente os mantém. Na dúvida, trate a foto original como portadora de localização.',
      },
      vocabulario: [
        { palavra: 'Metadado', def: 'Dado invisível na foto: data, hora e, às vezes, localização GPS.' },
        { palavra: 'Geotag', def: 'A marcação de localização gravada na foto pela câmera.' },
        { palavra: 'Localização em tempo real', def: 'Recurso que mostra onde você está agora; use com cuidado.' },
      ],
      chave: [
        'Fotos podem guardar a localização exata (metadados)',
        'Desative o GPS da câmera e remova metadados ao compartilhar',
        'Localização em tempo real: só com confiança e por tempo limitado',
      ],
      porque: 'A localização é um dos dados mais sensíveis que existem. Controlar os metadados das fotos e o compartilhamento em tempo real evita entregar onde você mora e por onde anda — algo que nenhuma outra configuração cobre.',
    },
    pratica: {
      instrucao: 'Cuide da localização nas suas fotos e apps.',
      passos: [
        'Veja se sua câmera grava localização nas fotos e desative se quiser',
        'Saiba que enviar a foto original pode entregar o GPS',
        'Prefira compartilhar de formas que removam metadados',
        'Revise quem recebe sua localização em tempo real',
        'Combine: localização compartilhada com intenção, não por padrão',
      ],
    },
    desafio: {
      cenario: 'Você controla os metadados de localização das fotos e o compartilhamento em tempo real.',
      requisitos: [
        'Sei que fotos podem guardar a localização',
        'Desativo o GPS da câmera se não preciso',
        'Compartilho de formas que removem metadados',
        'Reviso quem vê minha localização em tempo real',
        'Trato localização como dado sensível',
      ],
      dica: 'Se compartilha localização em tempo real com a família, prefira ativar por tempo limitado (ex.: durante um trajeto) em vez de deixar ligado permanentemente. Útil quando precisa, fechado quando não.',
    },
    validacao: [
      'Sei que fotos guardam localização',
      'Desativo o GPS da câmera',
      'Removo metadados ao compartilhar',
      'Reviso a localização em tempo real',
      'Trato localização como sensível',
    ],
  },

  'sec-priv-9': {
    trilhaId: 'sec-priv', numero: 9, titulo: 'Projeto: faxina de privacidade',
    tempoTotal: 18, xp: 120, vertente: 'ambos',
    aula: {
      gancho: 'Você já sabe revisar permissões, fechar perfis, reduzir rastreamento, usar a LGPD, auditar sua pegada e cuidar da localização. Hora de juntar tudo numa faxina de privacidade — uma rotina que devolve o controle dos seus dados.',
      conceito: {
        titulo: 'Uma faxina por etapas que vira hábito',
        texto: 'Faxina de privacidade não se faz num dia, e não precisa. Divida por etapas: aparelho (revisar permissões de apps e localização), redes (fechar perfis e ajustar público), navegação (recusar cookies e bloquear rastreadores), pegada (auditar seu nome e encerrar contas antigas) e direitos (usar a LGPD onde couber). Faça uma etapa por vez. Depois, transforme em manutenção leve: a cada poucos meses, repita uma rodada rápida. Privacidade é como organização da casa — uma faxina grande no começo e pequenas manutenções mantêm tudo no lugar.',
      },
      estrutura: {
        titulo: 'As etapas da faxina',
        partes: [
          { simbolo: '📱', desc: 'Aparelho: revisar permissões e localização dos apps.' },
          { simbolo: '👥', desc: 'Redes: fechar perfis e ajustar o público das postagens.' },
          { simbolo: '🍪', desc: 'Navegação: recusar cookies e bloquear rastreadores.' },
          { simbolo: '🔎', desc: 'Pegada: auditar seu nome, encerrar contas antigas, usar a LGPD.' },
        ],
      },
      exemplo: {
        titulo: 'Checklist da faxina',
        celulas: [
          { ref: 'Aparelho', valor: 'Permissões revisadas ✓ · Localização ajustada ✓' },
          { ref: 'Redes', valor: 'Perfis fechados ✓ · Público ajustado ✓' },
          { ref: 'Navegação', valor: 'Cookies recusados ✓ · Rastreadores bloqueados ✓' },
          { ref: 'Pegada', valor: 'Auditada ✓ · Contas antigas encerradas ✓' },
        ],
        formula: 'Aparelho + redes + navegação + pegada = privacidade no controle',
        resultado: 'Muito menos sobre você circulando — e você no comando.',
        comentario: 'Comece pela etapa que te incomoda mais hoje. O importante é começar: cada etapa concluída já reduz exposição, mesmo que você faça as outras nos próximos dias.',
      },
      vocabulario: [
        { palavra: 'Faxina de privacidade', def: 'Revisão completa, por etapas, do que você expõe na internet.' },
        { palavra: 'Manutenção leve', def: 'Repetir uma rodada rápida a cada poucos meses.' },
        { palavra: 'Controle de dados', def: 'O estado de decidir, você, quem sabe o quê sobre você.' },
      ],
      chave: [
        'Faça a faxina por etapas: aparelho, redes, navegação, pegada',
        'Uma etapa por vez já reduz a exposição',
        'Transforme em manutenção leve a cada poucos meses',
      ],
      porque: 'Este projeto reúne toda a trilha numa rotina prática e repetível. Fazendo a faxina por etapas e mantendo manutenções leves, você sai do "exposto por padrão" para "no controle dos próprios dados".',
    },
    pratica: {
      instrucao: 'Execute (ou planeje) sua faxina de privacidade por etapas.',
      passos: [
        'Aparelho: revise permissões e localização dos apps',
        'Redes: feche perfis e ajuste o público das postagens',
        'Navegação: recuse cookies e bloqueie rastreadores',
        'Pegada: audite seu nome e encerre contas antigas',
        'Direitos: use a LGPD onde fizer sentido',
        'Agende: uma manutenção rápida a cada poucos meses',
      ],
    },
    desafio: {
      cenario: 'Você executa a faxina de privacidade por etapas e a transforma em manutenção periódica.',
      requisitos: [
        'Reviso permissões e localização no aparelho',
        'Fecho perfis e ajusto o público nas redes',
        'Reduzo cookies e rastreadores na navegação',
        'Audito minha pegada e encerro contas antigas',
        'Mantenho a privacidade com manutenções leves',
      ],
      dica: 'Marque um lembrete recorrente pra "rodada de privacidade". Assim como você revisa senhas e 2FA, revisar privacidade de tempos em tempos mantém o controle sem virar um grande esforço.',
    },
    validacao: [
      'Reviso o aparelho',
      'Fecho perfis nas redes',
      'Reduzo cookies e rastreadores',
      'Audito minha pegada',
      'Mantenho com manutenções leves',
    ],
  },
};
