// ============================================================================
// CONTEÚDO — Play Store e App Store: Instalar Apps com Segurança (mob-apps)
// O que é um app, abrir a loja, buscar e reconhecer o app certo, instalar,
// permissões, atualizar, desinstalar, evitar apps falsos/golpe, gerenciar
// espaço, e um projeto de equipar o celular com apps úteis e seguros.
// ============================================================================

export const MOB_APPS = {
  'mob-apps-1': {
    trilhaId: 'mob-apps', numero: 1, titulo: 'O que é um app e onde ele mora',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'WhatsApp, banco, jogos, mapa, câmera — cada coisa que o celular faz é um "app". Mas o que é exatamente um aplicativo, de onde ele vem, e por que você instala uns e já vêm outros? Entender isso é a base pra moldar o celular do seu jeito.',
      conceito: {
        titulo: 'App é um programa que adiciona uma função ao celular',
        texto: 'Um APP (aplicativo) é um programinha que faz uma tarefa específica: o WhatsApp manda mensagens, o app do banco mexe na conta, o de mapas mostra o caminho. Cada ícone na tela do celular é um app. Alguns JÁ VÊM instalados de fábrica (câmera, telefone, configurações); outros você INSTALA quando quer, baixando da loja oficial. A loja de apps é como uma "lojinha" dentro do celular onde você pega novos aplicativos — quase todos gratuitos. Instalar um app coloca o ícone dele na sua tela; desinstalar o remove. É assim que você personaliza o celular pra fazer exatamente o que você precisa.',
      },
      estrutura: {
        titulo: 'Entendendo os apps',
        partes: [
          { simbolo: '📱', desc: 'App: um programa que faz uma função específica.' },
          { simbolo: '🏭', desc: 'Alguns já vêm de fábrica (câmera, telefone).' },
          { simbolo: '🏪', desc: 'Outros você instala da loja oficial de apps.' },
          { simbolo: '🎨', desc: 'Instalar e desinstalar personaliza seu celular.' },
        ],
      },
      exemplo: {
        titulo: 'O celular é feito de apps',
        celulas: [
          { ref: 'Mandar mensagem', valor: 'É o app WhatsApp' },
          { ref: 'Ver a conta do banco', valor: 'É o app do seu banco' },
          { ref: 'Tirar foto', valor: 'É o app de câmera (já vem)' },
          { ref: 'Quero um app de notícias', valor: 'Instalo da loja oficial' },
        ],
        formula: 'Apps de fábrica + apps que você instala = celular do seu jeito',
        resultado: 'Você entende que cada função é um app, e que pode adicionar os que quiser.',
        comentario: 'Não tenha medo de instalar nem de desinstalar apps: isso não estraga o celular. Instalar é como pegar uma ferramenta nova; desinstalar é guardar a que você não usa. Os apps de fábrica importantes (telefone, configurações) costumam ser protegidos e não somem por acidente.',
      },
      vocabulario: [
        { palavra: 'App (aplicativo)', def: 'Um programa que adiciona uma função ao celular.' },
        { palavra: 'App de fábrica', def: 'Aplicativo que já vem instalado no celular novo.' },
        { palavra: 'Loja de apps', def: 'O lugar oficial pra baixar novos aplicativos.' },
      ],
      chave: [
        'Cada ícone do celular é um app com uma função',
        'Alguns vêm de fábrica; outros você instala da loja',
        'Instalar e desinstalar personaliza o celular sem estragá-lo',
      ],
      porque: 'Entender o que é um app — e que dá pra instalar e remover livremente — destrava a personalização do celular. Você deixa de aceitar só o que veio e passa a moldar o aparelho pras suas necessidades, com confiança.',
    },
    pratica: {
      instrucao: 'Vamos reconhecer os apps do seu celular.',
      passos: [
        'Olhe a tela inicial do celular e observe os vários ícones: cada um é um app',
        'Identifique alguns apps que já vêm de fábrica (câmera, telefone, relógio)',
        'Identifique apps que alguém instalou (WhatsApp, banco, jogos)',
        'Toque num app pra abri-lo e veja a função que ele cumpre',
        'Volte à tela inicial e perceba que o celular é uma coleção de apps',
      ],
    },
    desafio: {
      cenario: 'Entenda os apps: reconheça que cada ícone do celular é um aplicativo com uma função, distinga os que vêm de fábrica dos que foram instalados, e compreenda que você pode adicionar e remover apps livremente pra moldar o aparelho.',
      requisitos: [
        'Reconheci que cada ícone é um app',
        'Identifiquei apps de fábrica',
        'Identifiquei apps instalados depois',
        'Abri um app e vi sua função',
        'Entendi que posso instalar e remover apps',
      ],
      dica: 'Se a sua tela tem apps demais e está confusa, calma: nas próximas missões você vai aprender a instalar só o que precisa e remover o que não usa. Uma tela com poucos apps bem escolhidos é muito mais fácil de usar que uma lotada.',
    },
    validacao: [
      'Sei que cada ícone é um app',
      'Distingo apps de fábrica e instalados',
      'Entendo a função de um app',
      'Sei que apps vêm da loja oficial',
      'Compreendo que personalizo o celular com apps',
    ],
  },

  'mob-apps-2': {
    trilhaId: 'mob-apps', numero: 2, titulo: 'Abrir a loja de apps',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Pra pegar um app novo, você vai a um único lugar confiável: a loja oficial do seu celular. Saber qual é a loja, achar o ícone dela e entrar é o primeiro passo — e também a sua principal proteção contra apps falsos e golpes.',
      conceito: {
        titulo: 'Cada celular tem sua loja oficial de apps',
        texto: 'Existe UMA loja oficial pra cada tipo de celular. No ANDROID (Samsung, Motorola, Xiaomi e a maioria), é a PLAY STORE (Google Play) — ícone de um triângulo colorido. No IPHONE (Apple), é a APP STORE — ícone de um "A" branco num fundo azul. É de lá, e só de lá, que você deve baixar apps: a loja oficial verifica os aplicativos, reduzindo muito o risco de vírus e golpe. Pra abrir, você toca no ícone da loja na tela. Dentro dela, há uma busca, categorias e listas de apps populares. Baixar de fora da loja oficial (de sites ou links recebidos) é arriscado e deve ser evitado.',
      },
      estrutura: {
        titulo: 'Achando a loja certa',
        partes: [
          { simbolo: '▶️', desc: 'Android: Play Store (triângulo colorido).' },
          { simbolo: '🅰️', desc: 'iPhone: App Store ("A" branco em fundo azul).' },
          { simbolo: '✅', desc: 'A loja oficial verifica os apps: mais segurança.' },
          { simbolo: '🚫', desc: 'Evite baixar apps de sites ou links recebidos.' },
        ],
      },
      exemplo: {
        titulo: 'Entrando na loja',
        celulas: [
          { ref: 'Tenho um Android (Samsung)', valor: 'Abro a Play Store' },
          { ref: 'Tenho um iPhone', valor: 'Abro a App Store' },
          { ref: 'Quero um app novo', valor: 'Busco dentro da loja oficial' },
          { ref: 'Recebi um link "baixe aqui"', valor: 'Ignoro: só baixo pela loja' },
        ],
        formula: 'Loja oficial (Play Store ou App Store) = apps verificados e seguros',
        resultado: 'Você sabe qual é a sua loja e por que baixar só dela.',
        comentario: 'A regra de ouro é simples: app novo, só pela loja oficial. Nunca instale um aplicativo a partir de um link que chegou por mensagem, e-mail ou anúncio, mesmo que pareça do seu banco — golpistas usam apps falsos pra roubar dados. A loja oficial é sua barreira de proteção.',
      },
      vocabulario: [
        { palavra: 'Play Store', def: 'A loja oficial de apps dos celulares Android.' },
        { palavra: 'App Store', def: 'A loja oficial de apps dos iPhones (Apple).' },
        { palavra: 'Loja oficial', def: 'O único lugar seguro pra baixar apps verificados.' },
      ],
      chave: [
        'Android usa a Play Store; iPhone usa a App Store',
        'A loja oficial verifica os apps: muito mais segurança',
        'Nunca instale apps de links recebidos ou sites',
      ],
      porque: 'A loja oficial é a porta de entrada segura pros apps: ela verifica o que oferece, reduzindo vírus e golpes. Saber qual é a sua loja e usar só ela — nunca links recebidos — é a base da segurança ao instalar aplicativos.',
    },
    pratica: {
      instrucao: 'Vamos abrir a loja de apps do seu celular.',
      passos: [
        'Descubra se seu celular é Android ou iPhone (na dúvida, pergunte ou veja a marca)',
        'Procure na tela o ícone da loja: Play Store (triângulo) ou App Store ("A" azul)',
        'Toque no ícone pra abrir a loja',
        'Observe a busca no topo e as listas de apps populares',
        'Navegue um pouco pra se familiarizar, sem instalar nada ainda',
      ],
    },
    desafio: {
      cenario: 'Abra a loja oficial: identifique se seu celular usa Play Store (Android) ou App Store (iPhone), encontre e abra o ícone da loja, familiarize-se com a busca e as listas — entendendo que essa é a única fonte segura de apps.',
      requisitos: [
        'Descobri se meu celular é Android ou iPhone',
        'Encontrei o ícone da loja oficial',
        'Abri a loja de apps',
        'Vi a busca e as listas de apps',
        'Entendi que só devo baixar pela loja oficial',
      ],
      dica: 'Se não acha o ícone da loja na tela inicial, procure na "gaveta de apps" (deslize pra cima ou toque no ícone de quadradinhos que mostra todos os apps). A Play Store e a App Store não podem ser desinstaladas, então elas sempre estão no celular, em algum lugar.',
    },
    validacao: [
      'Sei se meu celular é Android ou iPhone',
      'Encontro o ícone da loja oficial',
      'Abro a Play Store ou App Store',
      'Reconheço a busca e as listas',
      'Sei que só baixo apps pela loja oficial',
    ],
  },

  'mob-apps-3': {
    trilhaId: 'mob-apps', numero: 3, titulo: 'Buscar e reconhecer o app certo',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Você busca "WhatsApp" e aparecem vários resultados parecidos. Qual é o verdadeiro? Reconhecer o app certo — o oficial, não uma imitação — é uma habilidade que protege você de baixar cópias falsas cheias de golpe ou propaganda.',
      conceito: {
        titulo: 'Sinais mostram qual é o app oficial e confiável',
        texto: 'Ao buscar um app na loja, vários resultados podem aparecer. Pra identificar o VERDADEIRO, observe alguns sinais: o NOME exato e o ícone certo (compare com o que você conhece); o DESENVOLVEDOR (quem fez o app — deve ser a empresa oficial, ex.: "WhatsApp LLC"); o NÚMERO DE DOWNLOADS (os apps famosos têm milhões); e as AVALIAÇÕES (estrelas e comentários de outros usuários). Um app oficial e popular tem nota alta, muitos downloads e o desenvolvedor correto. Desconfie de cópias com nome levemente diferente, poucos downloads, ou desenvolvedor estranho. Ler a descrição também ajuda a confirmar que é o que você procura.',
      },
      estrutura: {
        titulo: 'Conferindo antes de instalar',
        partes: [
          { simbolo: '🔤', desc: 'Nome e ícone exatos: compare com o que conhece.' },
          { simbolo: '🏢', desc: 'Desenvolvedor: deve ser a empresa oficial.' },
          { simbolo: '⬇️', desc: 'Downloads: apps famosos têm milhões.' },
          { simbolo: '⭐', desc: 'Avaliações: nota alta e muitos comentários.' },
        ],
      },
      exemplo: {
        titulo: 'Achando o verdadeiro',
        celulas: [
          { ref: 'Busquei "WhatsApp"', valor: 'Escolho o de "WhatsApp LLC"' },
          { ref: 'Vários parecidos aparecem', valor: 'Comparo nome, ícone e downloads' },
          { ref: 'Um tem poucos downloads', valor: 'Desconfio: pode ser cópia falsa' },
          { ref: 'Confirmo se é o certo', valor: 'Leio a descrição e as avaliações' },
        ],
        formula: 'Nome + desenvolvedor + downloads + avaliações = app oficial confiável',
        resultado: 'Você baixa o app verdadeiro, não uma imitação.',
        comentario: 'Os apps mais populares (WhatsApp, bancos, redes sociais) costumam aparecer no topo da busca, com selo e milhões de downloads. Se um resultado parece o app que você quer mas tem nome estranho, ícone diferente ou pouquíssimos downloads, é provavelmente uma cópia — não instale.',
      },
      vocabulario: [
        { palavra: 'Desenvolvedor', def: 'A empresa ou pessoa que criou o app.' },
        { palavra: 'Avaliações', def: 'As estrelas e comentários de quem já usou o app.' },
        { palavra: 'App falso (cópia)', def: 'Imitação de um app oficial, geralmente com golpe.' },
      ],
      chave: [
        'Confira nome, ícone, desenvolvedor, downloads e avaliações',
        'O app oficial tem muitos downloads e nota alta',
        'Desconfie de cópias com nome ou ícone diferentes',
      ],
      porque: 'Reconhecer o app oficial protege contra cópias falsas que escondem golpes, propaganda abusiva ou roubo de dados. Conferir nome, desenvolvedor, downloads e avaliações antes de instalar é uma defesa simples e eficaz.',
    },
    pratica: {
      instrucao: 'Vamos buscar e analisar um app na loja.',
      passos: [
        'Na loja, toque na busca e digite o nome de um app conhecido (ex.: "WhatsApp")',
        'Veja os resultados e identifique qual parece ser o oficial',
        'Toque nele e confira o nome do desenvolvedor',
        'Veja o número de downloads e a nota das avaliações',
        'Leia um trecho da descrição pra confirmar que é o app certo',
      ],
    },
    desafio: {
      cenario: 'Reconheça o app oficial: busque um app na loja, compare os resultados, e identifique o verdadeiro conferindo nome, ícone, desenvolvedor, número de downloads e avaliações — desconfiando de cópias com sinais estranhos.',
      requisitos: [
        'Busquei um app pelo nome na loja',
        'Comparei os resultados parecidos',
        'Conferi o desenvolvedor do app',
        'Vi os downloads e as avaliações',
        'Sei desconfiar de cópias falsas',
      ],
      dica: 'Uma forma extra-segura de achar o app certo do seu banco ou de um serviço: vá ao site oficial da empresa pelo navegador e procure o link "baixe nosso app" — ele leva direto pra página correta na loja. Assim você nunca erra na hora de escolher.',
    },
    validacao: [
      'Busco apps pelo nome na loja',
      'Comparo resultados parecidos',
      'Confiro o desenvolvedor oficial',
      'Avalio downloads e estrelas',
      'Reconheço e evito cópias falsas',
    ],
  },

  'mob-apps-4': {
    trilhaId: 'mob-apps', numero: 4, titulo: 'Instalar seu primeiro app',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Você encontrou o app certo. Agora é a parte mágica: instalar. Em poucos toques, o aplicativo é baixado e ganha um ícone na sua tela, pronto pra usar. Fazer isso pela primeira vez com tranquilidade abre um mundo de possibilidades.',
      conceito: {
        titulo: 'Instalar baixa o app e o coloca na sua tela',
        texto: 'INSTALAR é o ato de baixar o app e deixá-lo pronto pra uso. Na página do app na loja, há um botão "INSTALAR" (ou "Obter"/"Get" no iPhone). Você toca nele e o celular começa a BAIXAR o app pela internet — uma barrinha mostra o progresso. Pra apps gratuitos, é só isso; alguns pagos pedem confirmação de pagamento (não é o caso da maioria). Quando termina, o botão vira "ABRIR", e o ícone do app aparece na sua tela inicial ou na gaveta de apps. A partir daí, é só tocar no ícone pra usar. Instalar usa internet, então o Wi-Fi é recomendado pra não gastar seus dados.',
      },
      estrutura: {
        titulo: 'O processo de instalar',
        partes: [
          { simbolo: '⬇️', desc: 'Botão "Instalar" (ou "Obter"): inicia o download.' },
          { simbolo: '📊', desc: 'Uma barrinha mostra o progresso do download.' },
          { simbolo: '📲', desc: 'Ao terminar, o ícone aparece na sua tela.' },
          { simbolo: '📶', desc: 'Use Wi-Fi pra não gastar seus dados.' },
        ],
      },
      exemplo: {
        titulo: 'Do toque ao app na tela',
        celulas: [
          { ref: 'Achei o app certo', valor: 'Toco em "Instalar"' },
          { ref: 'O app está baixando', valor: 'Vejo a barrinha de progresso' },
          { ref: 'Terminou de instalar', valor: 'O botão vira "Abrir"' },
          { ref: 'Quero usar o app', valor: 'Toco no ícone na tela' },
        ],
        formula: 'Instalar + baixar + ícone na tela = app pronto pra usar',
        resultado: 'Você instala um app do começo ao fim e o encontra na tela.',
        comentario: 'Depois de instalar, o app costuma aparecer tanto na sua tela inicial quanto na gaveta de apps (a lista completa). Se você não achar o ícone na tela principal, deslize pra cima ou procure na gaveta — ele está lá. Você pode arrastá-lo pra um lugar de fácil acesso.',
      },
      vocabulario: [
        { palavra: 'Instalar', def: 'Baixar o app e deixá-lo pronto pra usar no celular.' },
        { palavra: 'Baixar (download)', def: 'Trazer o app da internet pro seu celular.' },
        { palavra: 'Abrir', def: 'Tocar no ícone pra começar a usar o app instalado.' },
      ],
      chave: [
        'O botão "Instalar" baixa o app pela internet',
        'Ao terminar, o ícone aparece na sua tela',
        'Use Wi-Fi pra não gastar dados ao instalar',
      ],
      porque: 'Instalar um app é a habilidade que transforma o celular: cada novo aplicativo é uma função a mais. Fazer isso com tranquilidade — sabendo o que esperar do começo ao fim — dá autonomia pra equipar o aparelho com o que você precisa.',
    },
    pratica: {
      instrucao: 'Vamos instalar um app útil e gratuito.',
      passos: [
        'Conecte-se ao Wi-Fi pra não gastar dados',
        'Na loja, encontre um app gratuito e útil que você queira (ex.: uma lanterna, um app de notícias)',
        'Confirme que é o app certo (nome, desenvolvedor, avaliações) e toque em "Instalar"',
        'Acompanhe a barrinha de progresso até o botão virar "Abrir"',
        'Volte à tela inicial e localize o novo ícone do app',
      ],
    },
    desafio: {
      cenario: 'Instale seu primeiro app: no Wi-Fi, escolha um app gratuito e útil, confirme que é o oficial, toque em instalar, acompanhe o download até o fim, e encontre o novo ícone na sua tela — pronto pra usar.',
      requisitos: [
        'Conectei ao Wi-Fi antes de instalar',
        'Escolhi um app gratuito e confiável',
        'Toquei em "Instalar" e acompanhei o download',
        'Vi o botão virar "Abrir" ao terminar',
        'Encontrei o ícone do app na tela',
      ],
      dica: 'Na primeira vez que você instala algo, a loja pode pedir pra configurar uma conta (Google no Android, Apple ID no iPhone) ou uma forma de pagamento. Pra apps gratuitos, você pode pular a parte de pagamento — não é obrigatório informar cartão pra baixar apps de graça.',
    },
    validacao: [
      'Uso o Wi-Fi pra instalar',
      'Confirmo o app antes de instalar',
      'Toco em "Instalar" e acompanho',
      'Reconheço quando termina ("Abrir")',
      'Encontro o app instalado na tela',
    ],
  },

  'mob-apps-5': {
    trilhaId: 'mob-apps', numero: 5, titulo: 'Permissões: o que o app pode acessar',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Você abre um app novo e ele pergunta: "permitir acesso à câmera?", "ao microfone?", "à sua localização?". O que responder? Entender as permissões é entender o que cada app pode (e não pode) fazer com seus dados — uma peça-chave da sua privacidade.',
      conceito: {
        titulo: 'Permissões controlam o que o app acessa no celular',
        texto: 'PERMISSÕES são autorizações que o app pede pra acessar partes do celular: a CÂMERA, o MICROFONE, a LOCALIZAÇÃO, os CONTATOS, as fotos. O app só consegue usar o que você permitir. A regra é: permita o que FAZ SENTIDO pra função do app. Um app de mensagens precisa da câmera (pra enviar fotos) e do microfone (pra áudios) — faz sentido. Mas um app de lanterna que pede seus contatos e localização é suspeito — não precisa disso pra acender uma luz. Você pode negar permissões desnecessárias, e mudar de ideia depois nas configurações. Conceder só o necessário protege sua privacidade.',
      },
      estrutura: {
        titulo: 'Decidindo permissões',
        partes: [
          { simbolo: '📷', desc: 'O app pede acesso (câmera, microfone, localização).' },
          { simbolo: '🤔', desc: 'Pergunte: isso faz sentido pra função do app?' },
          { simbolo: '✅', desc: 'Permita o que o app realmente precisa.' },
          { simbolo: '🚫', desc: 'Negue o que é desnecessário ou suspeito.' },
        ],
      },
      exemplo: {
        titulo: 'O que faz sentido permitir',
        celulas: [
          { ref: 'App de mensagens quer a câmera', valor: 'Faz sentido: pra enviar fotos' },
          { ref: 'App de mapa quer localização', valor: 'Faz sentido: pra te guiar' },
          { ref: 'Lanterna quer seus contatos', valor: 'Suspeito: nego, não precisa' },
          { ref: 'Mudei de ideia depois', valor: 'Ajusto nas configurações' },
        ],
        formula: 'Permissão necessária = permitir; permissão estranha = negar',
        resultado: 'Você controla o que cada app acessa, protegendo sua privacidade.',
        comentario: 'Você não precisa decidir tudo na hora: muitos apps funcionam bem mesmo que você negue uma permissão de início, e pedem de novo só quando aquela função for usada (ex.: o app só pede a câmera quando você vai tirar uma foto). Na dúvida, negue — dá pra permitir depois se fizer falta.',
      },
      vocabulario: [
        { palavra: 'Permissão', def: 'Autorização pro app acessar algo do celular (câmera, etc).' },
        { palavra: 'Localização', def: 'Onde você está; alguns apps pedem pra te guiar ou marcar.' },
        { palavra: 'Negar', def: 'Recusar uma permissão que o app pede.' },
      ],
      chave: [
        'Permissões controlam o que o app acessa no celular',
        'Permita o que faz sentido pra função do app',
        'Negue o que é desnecessário; dá pra mudar depois',
      ],
      porque: 'As permissões são a chave da sua privacidade no celular: elas decidem o que cada app pode ver e usar. Conceder só o necessário — e desconfiar de pedidos sem sentido — protege seus dados de apps abusivos ou maliciosos.',
    },
    pratica: {
      instrucao: 'Vamos observar e ajustar permissões de apps.',
      passos: [
        'Abra um app recém-instalado e veja se ele pede alguma permissão',
        'Para cada pedido, pense se faz sentido pra função do app',
        'Permita o necessário e negue o que parecer desnecessário',
        'Vá às Configurações do celular e procure por "Apps" ou "Privacidade"',
        'Veja as permissões concedidas a um app e ajuste se quiser',
      ],
    },
    desafio: {
      cenario: 'Controle as permissões: ao instalar apps, decida cada pedido de acesso (câmera, microfone, localização, contatos) pensando se faz sentido pra função do app, negue o desnecessário, e saiba ajustar permissões depois nas configurações.',
      requisitos: [
        'Vi um app pedir permissões',
        'Avaliei se cada pedido fazia sentido',
        'Permiti o necessário e neguei o supérfluo',
        'Encontrei as permissões nas configurações',
        'Sei que posso mudar permissões depois',
      ],
      dica: 'Desconfie especialmente de apps simples (jogos casuais, lanternas, papéis de parede) que pedem permissões pesadas como contatos, mensagens, localização o tempo todo ou "acessibilidade". Esses pedidos exagerados, sem relação com a função, são um sinal clássico de app abusivo ou golpe.',
    },
    validacao: [
      'Entendo o que são permissões',
      'Avalio se um pedido faz sentido',
      'Permito o necessário, nego o supérfluo',
      'Ajusto permissões nas configurações',
      'Desconfio de pedidos exagerados',
    ],
  },

  'mob-apps-6': {
    trilhaId: 'mob-apps', numero: 6, titulo: 'Atualizar apps: por que e como',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'De tempos em tempos, os apps pedem pra "atualizar". É chato? Pode parecer. Mas atualizar é importante: traz melhorias, corrige problemas e — o mais importante — tapa falhas de segurança. Entender isso faz você manter os apps sempre seguros e funcionando bem.',
      conceito: {
        titulo: 'Atualizar mantém os apps melhores e seguros',
        texto: 'Os apps são MELHORADOS com o tempo: os desenvolvedores lançam ATUALIZAÇÕES (versões novas) que corrigem erros, adicionam recursos e — crucial — fecham brechas de segurança que golpistas poderiam explorar. Atualizar é trocar o app pela versão mais nova, de graça, pela própria loja. Você pode atualizar MANUALMENTE (indo à loja, na seção de atualizações, e tocando em "atualizar") ou deixar AUTOMÁTICO (o celular atualiza sozinho, de preferência no Wi-Fi). Manter os apps atualizados, especialmente os de banco e mensagens, é uma das formas mais simples e importantes de se proteger.',
      },
      estrutura: {
        titulo: 'Mantendo os apps em dia',
        partes: [
          { simbolo: '🔄', desc: 'Atualização: versão nova que melhora e protege o app.' },
          { simbolo: '🔒', desc: 'Fecha brechas de segurança: proteção essencial.' },
          { simbolo: '👆', desc: 'Manual: ir à loja e tocar em "atualizar".' },
          { simbolo: '⚙️', desc: 'Automático: o celular atualiza sozinho no Wi-Fi.' },
        ],
      },
      exemplo: {
        titulo: 'Por que atualizar vale a pena',
        celulas: [
          { ref: 'O app pede pra atualizar', valor: 'Atualizo: traz melhorias e segurança' },
          { ref: 'Quero atualizar tudo de uma vez', valor: 'Vou à loja, seção de atualizações' },
          { ref: 'Não quero ficar lembrando', valor: 'Ativo a atualização automática' },
          { ref: 'App do banco desatualizado', valor: 'Atualizo logo: segurança importa' },
        ],
        formula: 'Atualizar = corrigir erros + recursos novos + tapar brechas de segurança',
        resultado: 'Seus apps ficam melhores, mais estáveis e mais seguros.',
        comentario: 'A atualização automática, feita só no Wi-Fi, é a opção mais cômoda e segura pra maioria das pessoas: o celular cuida disso sozinho, sem gastar seus dados, e você não corre o risco de ficar com apps vulneráveis por esquecimento. Vale ativar e esquecer.',
      },
      vocabulario: [
        { palavra: 'Atualização', def: 'Versão nova de um app, com melhorias e correções.' },
        { palavra: 'Brecha de segurança', def: 'Falha que golpistas poderiam explorar; updates a corrigem.' },
        { palavra: 'Atualização automática', def: 'O celular atualiza os apps sozinho, sem você pedir.' },
      ],
      chave: [
        'Atualizar traz melhorias e fecha brechas de segurança',
        'Dá pra atualizar manualmente na loja ou automaticamente',
        'A atualização automática no Wi-Fi é cômoda e segura',
      ],
      porque: 'Atualizar apps não é só ter recursos novos: é proteção. As atualizações corrigem falhas de segurança que golpistas exploram. Manter os apps em dia, sobretudo os de banco, é uma defesa simples e poderosa contra ataques.',
    },
    pratica: {
      instrucao: 'Vamos verificar e ajustar as atualizações dos apps.',
      passos: [
        'Abra a loja de apps e procure a seção de atualizações (no seu perfil ou menu)',
        'Veja se há apps com atualização disponível',
        'Atualize um app manualmente, se houver algum pendente',
        'Procure nas configurações da loja a opção de atualização automática',
        'Ative a atualização automática apenas no Wi-Fi, se quiser comodidade',
      ],
    },
    desafio: {
      cenario: 'Mantenha os apps em dia: encontre a seção de atualizações na loja, atualize um app manualmente, e configure a atualização automática no Wi-Fi — entendendo que atualizar é essencial pra segurança, não só pra recursos novos.',
      requisitos: [
        'Encontrei a seção de atualizações na loja',
        'Verifiquei se havia atualizações pendentes',
        'Atualizei um app manualmente',
        'Localizei a opção de atualização automática',
        'Entendi que atualizar protege contra falhas',
      ],
      dica: 'Não confunda atualizar APPS com atualizar o SISTEMA do celular (o Android ou iOS em si). Ambos são importantes pra segurança, mas são coisas diferentes: apps se atualizam pela loja; o sistema se atualiza nas Configurações, em "Atualização de software". Mantenha os dois em dia.',
    },
    validacao: [
      'Acho a seção de atualizações na loja',
      'Verifico atualizações pendentes',
      'Atualizo apps manualmente',
      'Configuro atualização automática no Wi-Fi',
      'Entendo que atualizar é segurança',
    ],
  },

  'mob-apps-7': {
    trilhaId: 'mob-apps', numero: 7, titulo: 'Desinstalar e liberar espaço',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'O celular avisa que está sem espaço, ou a tela virou um amontoado de apps que você nem usa. A solução é desinstalar o que não serve: limpa a bagunça, libera espaço e deixa o aparelho mais rápido. É uma faxina simples e libertadora.',
      conceito: {
        titulo: 'Desinstalar remove o app e libera espaço',
        texto: 'DESINSTALAR é remover um app do celular: ele some da tela e libera o ESPAÇO que ocupava. Você faz isso de dois jeitos: SEGURANDO o dedo sobre o ícone do app até aparecer um menu com "Desinstalar" (ou um X / lixeira), ou pela loja/configurações. Apps que você não usa ocupam espaço e às vezes rodam em segundo plano, gastando bateria e dados. Removê-los deixa o celular mais limpo e leve. Atenção: desinstalar um app apaga os dados guardados só nele (mas não suas fotos ou mensagens que estão na nuvem). Apps de fábrica essenciais geralmente não podem ser desinstalados, só desativados.',
      },
      estrutura: {
        titulo: 'Fazendo a faxina',
        partes: [
          { simbolo: '👆', desc: 'Segurar o ícone: aparece "Desinstalar".' },
          { simbolo: '🗑️', desc: 'Desinstalar remove o app e libera espaço.' },
          { simbolo: '🪶', desc: 'Menos apps = celular mais limpo e leve.' },
          { simbolo: '☁️', desc: 'Fotos/mensagens na nuvem não se perdem.' },
        ],
      },
      exemplo: {
        titulo: 'Limpando o celular',
        celulas: [
          { ref: 'App que instalei e nunca uso', valor: 'Seguro o ícone e desinstalo' },
          { ref: 'Celular sem espaço', valor: 'Removo apps grandes que não uso' },
          { ref: 'Tela cheia e confusa', valor: 'Desinstalo o que não serve' },
          { ref: 'Medo de perder fotos', valor: 'Elas ficam na nuvem, não somem' },
        ],
        formula: 'Segurar o ícone + desinstalar = espaço livre e tela limpa',
        resultado: 'Você remove o que não usa e deixa o celular mais leve.',
        comentario: 'Antes de desinstalar um app que guarda informações importantes só nele (sem nuvem), confirme que você não vai precisar desses dados. Pra apps comuns (jogos, utilidades, redes sociais cujos dados ficam na conta online), pode desinstalar sem medo — reinstalando depois, tudo volta ao fazer login.',
      },
      vocabulario: [
        { palavra: 'Desinstalar', def: 'Remover um app do celular, liberando seu espaço.' },
        { palavra: 'Espaço (armazenamento)', def: 'A memória do celular, que os apps e arquivos ocupam.' },
        { palavra: 'Segundo plano', def: 'Quando um app roda escondido, gastando bateria e dados.' },
      ],
      chave: [
        'Segurar o ícone do app revela "Desinstalar"',
        'Remover apps não usados libera espaço e dá leveza',
        'Dados na nuvem (fotos, mensagens) não se perdem',
      ],
      porque: 'Desinstalar apps não usados libera espaço, economiza bateria e dados, e deixa o celular mais rápido e organizado. É uma manutenção simples que melhora muito o uso — e dá a sensação boa de ter o aparelho sob controle.',
    },
    pratica: {
      instrucao: 'Vamos desinstalar um app que você não usa.',
      passos: [
        'Identifique na tela um app que você instalou e não usa mais',
        'Segure o dedo sobre o ícone dele até aparecer um menu',
        'Toque em "Desinstalar" (ou no X / lixeira) e confirme',
        'Veja o ícone sumir da tela e o app ser removido',
        'Repare que fotos e mensagens importantes (na nuvem) continuam intactas',
      ],
    },
    desafio: {
      cenario: 'Faça uma faxina: identifique apps que você não usa, desinstale-os segurando o ícone e confirmando, e libere espaço — entendendo que dados na nuvem (fotos, mensagens) não se perdem e que apps comuns podem ser reinstalados depois.',
      requisitos: [
        'Identifiquei apps que não uso',
        'Desinstalei um app segurando o ícone',
        'Confirmei a remoção',
        'Vi o espaço sendo liberado',
        'Entendi que dados na nuvem não se perdem',
      ],
      dica: 'Se você não quer desinstalar um app de fábrica que não usa (e que não deixa removê-lo), procure a opção "Desativar": isso o esconde e impede que rode, sem apagá-lo de vez. É uma alternativa pra limpar a tela dos apps que vieram e que você não quer.',
    },
    validacao: [
      'Identifico apps que não uso',
      'Desinstalo segurando o ícone',
      'Confirmo e libero espaço',
      'Sei que dados na nuvem ficam salvos',
      'Conheço a opção de desativar apps de fábrica',
    ],
  },

  'mob-apps-8': {
    trilhaId: 'mob-apps', numero: 8, titulo: 'Apps falsos e armadilhas a evitar',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Nem todo app é o que parece. Alguns imitam apps famosos pra roubar seus dados; outros enchem o celular de propaganda ou cobram escondido. Saber reconhecer essas armadilhas é o que separa quem instala com segurança de quem cai em golpe.',
      conceito: {
        titulo: 'Apps falsos e abusivos têm sinais reconhecíveis',
        texto: 'Existem apps PERIGOSOS, e eles deixam pistas. As principais armadilhas: CÓPIAS FALSAS de apps famosos (nome quase igual, ícone parecido, mas desenvolvedor errado e poucos downloads); apps baixados de FORA da loja oficial (links de mensagens, sites duvidosos — nunca instale assim); apps que pedem PERMISSÕES exageradas sem motivo; apps com muitas avaliações RUINS reclamando de golpe, cobrança ou propaganda; e apps que prometem coisas BOAS DEMAIS ("ganhe dinheiro fácil", "espie o WhatsApp de alguém"). A defesa é sempre a mesma: baixar só da loja oficial, conferir desenvolvedor e avaliações, e desconfiar do que é estranho ou bom demais.',
      },
      estrutura: {
        titulo: 'Reconhecendo as armadilhas',
        partes: [
          { simbolo: '🎭', desc: 'Cópias falsas: nome/ícone parecidos, desenvolvedor errado.' },
          { simbolo: '🔗', desc: 'Apps de links/sites fora da loja: nunca instale.' },
          { simbolo: '⚠️', desc: 'Permissões exageradas e avaliações ruins de golpe.' },
          { simbolo: '🎣', desc: 'Promessas boas demais: ganhe dinheiro, espie alguém.' },
        ],
      },
      exemplo: {
        titulo: 'Pistas de perigo',
        celulas: [
          { ref: '"WhatsApp Plus" fora da loja', valor: 'Falso: só uso o oficial da loja' },
          { ref: 'App pede pra instalar por um link', valor: 'Recuso: golpe provável' },
          { ref: 'Avaliações falam em cobrança', valor: 'Não instalo: má reputação' },
          { ref: '"Ganhe R$500 por dia!"', valor: 'Bom demais: é cilada' },
        ],
        formula: 'Loja oficial + desenvolvedor certo + avaliações boas + desconfiança = segurança',
        resultado: 'Você reconhece e evita apps falsos e armadilhas.',
        comentario: 'A regra que resume tudo: se um app promete algo bom demais, vem de fora da loja oficial, ou pede acessos sem sentido, é melhor não instalar. Na dúvida, não instale — você não perde nada deixando de baixar um app suspeito, mas pode perder muito instalando-o.',
      },
      vocabulario: [
        { palavra: 'App falso', def: 'Imitação de um app oficial, feita pra enganar e roubar dados.' },
        { palavra: 'Fora da loja', def: 'Baixar app de links ou sites, sem ser da loja oficial.' },
        { palavra: 'Bom demais', def: 'Promessas exageradas que escondem golpes.' },
      ],
      chave: [
        'Cópias falsas imitam apps famosos pra roubar dados',
        'Nunca instale apps de links ou fora da loja oficial',
        'Desconfie de permissões exageradas e promessas boas demais',
      ],
      porque: 'Apps falsos e abusivos são uma porta de entrada comum pra golpes e roubo de dados. Reconhecer seus sinais — cópias, origem suspeita, permissões e promessas exageradas — é uma defesa essencial pra usar o celular com segurança.',
    },
    pratica: {
      instrucao: 'Vamos treinar o olho pra reconhecer apps suspeitos.',
      passos: [
        'Na loja, busque um app popular e repare em possíveis cópias nos resultados',
        'Compare uma cópia suspeita com o oficial: desenvolvedor, downloads, avaliações',
        'Leia algumas avaliações ruins de um app qualquer pra ver o tipo de reclamação',
        'Lembre-se da regra: nunca instalar apps de links recebidos',
        'Reflita sobre promessas "boas demais" como sinais de cilada',
      ],
    },
    desafio: {
      cenario: 'Reconheça armadilhas: identifique os sinais de apps falsos e abusivos (cópias de famosos, origem fora da loja, permissões exageradas, avaliações de golpe, promessas boas demais), e aplique a regra de ouro — na dúvida, não instale.',
      requisitos: [
        'Sei reconhecer cópias falsas de apps famosos',
        'Nunca instalo apps de links ou fora da loja',
        'Desconfio de permissões exageradas',
        'Checo avaliações em busca de relatos de golpe',
        'Evito apps com promessas boas demais',
      ],
      dica: 'Cuidado redobrado com apps que se passam pelo seu banco ou por órgãos do governo: golpistas criam cópias falsas desses pra roubar senhas. Sempre baixe o app do banco pelo link no site oficial dele, confira o desenvolvedor, e jamais instale um "app do banco" que chegou por mensagem.',
    },
    validacao: [
      'Reconheço cópias falsas de apps',
      'Recuso apps de links e fora da loja',
      'Desconfio de permissões exageradas',
      'Checo avaliações antes de instalar',
      'Aplico a regra: na dúvida, não instalo',
    ],
  },

  'mob-apps-9': {
    trilhaId: 'mob-apps', numero: 9, titulo: 'Projeto: equipar o celular com apps úteis e seguros',
    tempoTotal: 16, xp: 110, vertente: 'celular',
    aula: {
      gancho: 'Hora de juntar tudo: escolher, instalar com segurança e organizar um conjunto de apps que realmente servem pra você — e fazer uma faxina nos que não servem. No fim, seu celular vira uma caixa de ferramentas sob medida, equipada por você, com segurança.',
      conceito: {
        titulo: 'Tudo junto: um celular equipado do seu jeito, com segurança',
        texto: 'Este projeto reúne a trilha numa montagem real do seu celular. Você vai PENSAR no que precisa (mensagens, banco, mapa, notícias, um utilitário) e INSTALAR esses apps com segurança: pela loja oficial, conferindo desenvolvedor e avaliações, decidindo as PERMISSÕES com cuidado. Vai ATUALIZAR o que estiver desatualizado e configurar a atualização automática. E vai DESINSTALAR o que não usa, liberando espaço e limpando a tela. Aplicando tudo que aprendeu — reconhecer o app certo, evitar falsos, gerenciar permissões e espaço — você termina com um celular enxuto, útil e seguro, montado por você, pra você.',
      },
      estrutura: {
        titulo: 'O celular equipado',
        partes: [
          { simbolo: '🧰', desc: 'Apps úteis instalados com segurança, pela loja oficial.' },
          { simbolo: '🔐', desc: 'Permissões decididas com cuidado em cada app.' },
          { simbolo: '🔄', desc: 'Tudo atualizado, com atualização automática ativa.' },
          { simbolo: '🧹', desc: 'Apps inúteis desinstalados; tela limpa e espaço livre.' },
        ],
      },
      exemplo: {
        titulo: 'A caixa de ferramentas pronta',
        celulas: [
          { ref: 'Apps que você realmente usa', valor: 'Instalados com segurança' },
          { ref: 'Cada permissão', valor: 'Decidida com consciência' },
          { ref: 'Versões dos apps', valor: 'Atualizadas e automáticas' },
          { ref: 'Apps que não serviam', valor: 'Removidos; espaço livre' },
        ],
        formula: 'Escolher + instalar seguro + permissões + atualizar + limpar = celular sob medida',
        resultado: 'Um celular enxuto, útil e seguro, equipado por você.',
        comentario: 'Esse é o domínio completo dos apps: você não só usa o celular que veio — você o molda. Escolhe o que entra, controla o que cada app acessa, mantém tudo seguro e limpa o que não serve. O aparelho deixou de te controlar; agora é você quem manda nele.',
      },
      vocabulario: [
        { palavra: 'Celular equipado', def: 'Um aparelho com os apps úteis que você escolheu e instalou.' },
        { palavra: 'Conjunto de apps', def: 'A seleção de aplicativos que atende às suas necessidades.' },
        { palavra: 'Faxina de apps', def: 'Remover o que não se usa pra deixar o celular limpo.' },
      ],
      chave: [
        'O projeto reúne instalar seguro, permissões, atualizar e limpar',
        'O celular vira uma caixa de ferramentas sob medida',
        'Você manda no aparelho: escolhe, controla e mantém seguro',
      ],
      porque: 'Reunir tudo numa montagem real do celular consolida o aprendizado e prova o domínio: você equipa o aparelho com o que serve, com segurança, e limpa o resto. O celular deixa de ser um amontoado confuso e vira uma ferramenta sua, sob seu controle.',
    },
    pratica: {
      instrucao: 'Vamos equipar e organizar seu celular, passo a passo.',
      passos: [
        'Pense no que você precisa: liste 2 ou 3 apps úteis que faltam (mensagens, mapa, etc.)',
        'Instale-os com segurança: pela loja oficial, conferindo desenvolvedor e avaliações',
        'Ao abrir cada novo app, decida as permissões com cuidado',
        'Vá à loja e atualize os apps pendentes; ative a atualização automática no Wi-Fi',
        'Identifique e desinstale apps que você não usa, liberando espaço',
        'Olhe a tela final: um celular com apps úteis, atualizados e seguros, montado por você',
      ],
    },
    desafio: {
      cenario: 'Equipe seu celular: instale com segurança 2-3 apps úteis pela loja oficial, decida suas permissões, atualize tudo e ative atualização automática, e desinstale o que não usa — terminando com um aparelho enxuto, útil e seguro, montado por você.',
      requisitos: [
        'Instalei apps úteis com segurança pela loja oficial',
        'Decidi as permissões de cada novo app',
        'Atualizei apps e ativei atualização automática',
        'Desinstalei apps que não uso, liberando espaço',
        'Terminei com um celular enxuto e seguro',
      ],
      dica: 'Guarde a sensação de ter um celular equipado do seu jeito: cada app ali é uma escolha sua, instalada com segurança e sob seu controle. Daqui pra frente, instalar, atualizar e limpar apps é natural — você domina a loja e molda o aparelho sempre que precisar.',
    },
    validacao: [
      'Instalo apps úteis com segurança',
      'Decido as permissões com consciência',
      'Mantenho os apps atualizados',
      'Desinstalo o que não uso',
      'Tenho um celular enxuto e seguro',
    ],
  },
};
