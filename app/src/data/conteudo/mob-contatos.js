// ============================================================================
// CONTEÚDO — Ligações, Contatos e Videochamada (mob-contatos)
// Salvar e organizar contatos, fazer e atender ligações, viva-voz e mudo,
// histórico de chamadas, identificar quem ligou, videochamada pra ver a
// família, e um projeto de organizar a agenda e falar com quem você ama.
// ============================================================================

export const MOB_CONTATOS = {
  'mob-contatos-1': {
    trilhaId: 'mob-contatos', numero: 1, titulo: 'Salvar um contato na agenda',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Quantas vezes você recebeu um número e depois não lembrava de quem era? Salvar contatos na agenda resolve isso de vez: cada pessoa fica guardada com nome, e quando ela liga você já sabe quem é. É o alicerce de usar bem o telefone.',
      conceito: {
        titulo: 'A agenda guarda as pessoas com nome',
        texto: 'O app de CONTATOS (ou "Agenda") é onde ficam guardados os números das pessoas, cada um ligado a um NOME. Pra salvar um novo contato, você abre o app de Contatos, toca no botão de ADICIONAR (um "+" ou "Novo contato"), digita o nome da pessoa e o número de telefone, e SALVA. A partir daí, sempre que essa pessoa ligar ou mandar mensagem, aparece o nome dela em vez do número — você sabe na hora quem é. Você pode salvar quantos contatos quiser, e cada um pode ter mais detalhes (segundo número, e-mail, foto), mas o essencial é nome e telefone.',
      },
      estrutura: {
        titulo: 'Salvando um contato',
        partes: [
          { simbolo: '📇', desc: 'App de Contatos (Agenda): onde ficam as pessoas.' },
          { simbolo: '➕', desc: 'Botão de adicionar: cria um novo contato.' },
          { simbolo: '✍️', desc: 'Nome e número: o essencial de cada contato.' },
          { simbolo: '💾', desc: 'Salvar: guarda a pessoa na agenda.' },
        ],
      },
      exemplo: {
        titulo: 'Guardando uma pessoa',
        celulas: [
          { ref: 'Recebi o número da Maria', valor: 'Abro Contatos e toco em adicionar' },
          { ref: 'Campo do nome', valor: 'Digito "Maria"' },
          { ref: 'Campo do telefone', valor: 'Digito o número dela' },
          { ref: 'Termino', valor: 'Toco em salvar; pronto, está na agenda' },
        ],
        formula: 'Contatos + adicionar + nome + número + salvar = pessoa guardada',
        resultado: 'A Maria fica na agenda; quando ligar, aparece o nome dela.',
        comentario: 'Use nomes que você reconheça facilmente: "Maria vizinha", "João encanador", "Dra. Ana cardiologista". Assim, na hora que a pessoa liga, você sabe exatamente quem é e em que contexto a conhece — muito melhor que ter dez "Marias" sem sobrenome na agenda.',
      },
      vocabulario: [
        { palavra: 'Contatos / Agenda', def: 'O app onde ficam guardados nomes e números.' },
        { palavra: 'Contato', def: 'Uma pessoa salva, com nome e telefone.' },
        { palavra: 'Adicionar', def: 'Criar um novo contato na agenda.' },
      ],
      chave: [
        'A agenda guarda cada pessoa ligada a um nome',
        'Adicionar + nome + número + salvar cria um contato',
        'Use nomes reconhecíveis, com contexto',
      ],
      porque: 'Salvar contatos transforma números soltos em pessoas identificáveis. Quando alguém liga, você sabe quem é — base pra usar o telefone com segurança, atender com confiança e nunca mais perder um número importante.',
    },
    pratica: {
      instrucao: 'Vamos salvar um contato na sua agenda.',
      passos: [
        'Abra o app de Contatos (ou Agenda) no seu celular',
        'Toque no botão de adicionar (um "+" ou "Novo contato")',
        'Digite o nome de alguém que você queira guardar',
        'Digite o número de telefone dessa pessoa',
        'Toque em salvar e veja o contato aparecer na lista',
      ],
    },
    desafio: {
      cenario: 'Salve um contato: abra a agenda, adicione uma nova pessoa com nome reconhecível e número de telefone, salve, e confirme que ela aparece na sua lista de contatos — pronta pra ser identificada quando ligar.',
      requisitos: [
        'Abri o app de Contatos (Agenda)',
        'Toquei no botão de adicionar',
        'Digitei um nome reconhecível',
        'Digitei o número de telefone',
        'Salvei e vi o contato na lista',
      ],
      dica: 'Você não precisa digitar o número se ele já estiver no celular: numa mensagem ou chamada recebida, costuma haver a opção "Adicionar aos contatos" ou "Salvar número" — assim você guarda a pessoa sem redigitar nada, só completando o nome.',
    },
    validacao: [
      'Abro o app de Contatos',
      'Adiciono uma nova pessoa',
      'Preencho nome e número',
      'Salvo o contato na agenda',
      'Uso nomes reconhecíveis',
    ],
  },

  'mob-contatos-2': {
    trilhaId: 'mob-contatos', numero: 2, titulo: 'Fazer uma ligação',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Ligar pra alguém deveria ser simples — e é, quando você sabe onde estão as coisas. Seja pra um contato salvo ou pra um número novo, fazer uma chamada é uma das funções mais básicas e importantes do celular. Vamos destravar isso de vez.',
      conceito: {
        titulo: 'O telefone liga pra contatos ou números digitados',
        texto: 'O app de TELEFONE (ícone de fone) é onde você faz e recebe chamadas. Há duas formas de ligar: pela AGENDA, tocando no contato salvo e no ícone de telefone ao lado do nome; ou DIGITANDO o número no teclado de discagem (um ícone de teclado numérico dentro do app de telefone) e tocando no botão verde de chamar. Durante a ligação, a tela mostra o tempo e botões pra encerrar (o botão vermelho), pôr no viva-voz, ou silenciar. Pra desligar, é só tocar no botão vermelho. Ligar pra um contato salvo é mais rápido e seguro: você não corre risco de errar o número.',
      },
      estrutura: {
        titulo: 'Fazendo a chamada',
        partes: [
          { simbolo: '📞', desc: 'App de Telefone: onde se faz e recebe chamadas.' },
          { simbolo: '📇', desc: 'Pela agenda: tocar no contato e no ícone de telefone.' },
          { simbolo: '🔢', desc: 'Pelo teclado: digitar o número e tocar no verde.' },
          { simbolo: '🔴', desc: 'Botão vermelho: encerra a ligação.' },
        ],
      },
      exemplo: {
        titulo: 'Ligando de dois jeitos',
        celulas: [
          { ref: 'Ligar pra Maria, que está salva', valor: 'Abro o contato e toco no telefone' },
          { ref: 'Ligar pra um número novo', valor: 'Abro o teclado e digito' },
          { ref: 'Começar a chamada', valor: 'Toco no botão verde de chamar' },
          { ref: 'Terminar a conversa', valor: 'Toco no botão vermelho' },
        ],
        formula: 'Telefone + contato ou número digitado + verde / vermelho = ligação',
        resultado: 'Você liga pra qualquer pessoa, com contato salvo ou número novo.',
        comentario: 'Sempre que possível, ligue pelo contato salvo em vez de digitar o número: além de mais rápido, evita o risco de discar errado e cair na pessoa errada. Salvar os números importantes (família, médico, trabalho) faz cada ligação ser questão de dois toques.',
      },
      vocabulario: [
        { palavra: 'App de Telefone', def: 'O aplicativo (ícone de fone) que faz e recebe chamadas.' },
        { palavra: 'Teclado de discagem', def: 'O teclado numérico pra digitar um número e ligar.' },
        { palavra: 'Botão verde / vermelho', def: 'Verde inicia a chamada; vermelho a encerra.' },
      ],
      chave: [
        'O app de Telefone faz e recebe chamadas',
        'Ligue pela agenda (contato) ou digitando o número',
        'Verde chama, vermelho encerra',
      ],
      porque: 'Fazer uma ligação é uma função essencial do celular. Saber ligar tanto por contato quanto por número digitado — e como encerrar — dá autonomia pra se comunicar por voz com quem você precisa, a qualquer momento.',
    },
    pratica: {
      instrucao: 'Vamos fazer uma ligação (pode ser de teste).',
      passos: [
        'Abra o app de Telefone (ícone de fone)',
        'Para ligar pra um contato: abra a agenda e toque no nome da pessoa',
        'Toque no ícone de telefone ao lado do nome pra chamar',
        'Para um número novo: abra o teclado de discagem, digite e toque no verde',
        'Quando terminar, toque no botão vermelho pra encerrar',
      ],
    },
    desafio: {
      cenario: 'Faça uma ligação: use o app de Telefone pra ligar tanto por um contato salvo (tocando no nome e no ícone de telefone) quanto digitando um número no teclado — e encerre a chamada pelo botão vermelho.',
      requisitos: [
        'Abri o app de Telefone',
        'Liguei pra um contato pela agenda',
        'Conheci o teclado de discagem pra números novos',
        'Iniciei a chamada pelo botão verde',
        'Encerrei pelo botão vermelho',
      ],
      dica: 'Se você liga sempre pras mesmas pessoas, o app de Telefone costuma ter uma aba de "Favoritos": adicione ali os contatos mais frequentes e eles ficam num toque de distância, sem precisar procurar na agenda toda vez.',
    },
    validacao: [
      'Abro o app de Telefone',
      'Ligo pra contatos pela agenda',
      'Sei usar o teclado de discagem',
      'Inicio a chamada pelo botão verde',
      'Encerro pelo botão vermelho',
    ],
  },

  'mob-contatos-3': {
    trilhaId: 'mob-contatos', numero: 3, titulo: 'Atender e recusar chamadas',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'O celular toca — e bate aquela dúvida: como atendo? E se eu não quiser atender agora? Saber atender, recusar e lidar com uma chamada recebida com calma evita aquele aperto de "deixa tocar que eu não sei mexer".',
      conceito: {
        titulo: 'Ao tocar, você escolhe atender ou recusar',
        texto: 'Quando alguém liga, a tela mostra QUEM está chamando (o nome, se for um contato salvo) e dois botões principais: um VERDE pra ATENDER e um VERMELHO pra RECUSAR. Em muitos celulares, com a tela bloqueada, você ARRASTA o botão verde pra cima ou pro lado pra atender. Se você recusar, a chamada é encerrada (e a pessoa pode cair na caixa postal). Se não puder falar mas não quiser recusar de vez, dá pra silenciar o toque (apertando o botão de volume) e deixar tocar. Depois de atender, valem os mesmos botões da ligação: viva-voz, mudo e o vermelho pra encerrar.',
      },
      estrutura: {
        titulo: 'Lidando com a chamada recebida',
        partes: [
          { simbolo: '👤', desc: 'A tela mostra quem está ligando (se salvo, o nome).' },
          { simbolo: '🟢', desc: 'Botão verde (ou arrastar): atende a chamada.' },
          { simbolo: '🔴', desc: 'Botão vermelho: recusa a chamada.' },
          { simbolo: '🔇', desc: 'Botão de volume: silencia o toque sem recusar.' },
        ],
      },
      exemplo: {
        titulo: 'Decidindo o que fazer',
        celulas: [
          { ref: 'A Maria está ligando', valor: 'Vejo o nome dela na tela' },
          { ref: 'Quero atender', valor: 'Toco no verde ou arrasto pra cima' },
          { ref: 'Não posso falar agora', valor: 'Toco no vermelho pra recusar' },
          { ref: 'Só quero parar o toque', valor: 'Aperto o botão de volume' },
        ],
        formula: 'Ver quem é + verde (atender) ou vermelho (recusar) = chamada sob controle',
        resultado: 'Você atende, recusa ou silencia com tranquilidade.',
        comentario: 'Não se sinta obrigado a atender toda chamada na hora, especialmente de números desconhecidos: você pode recusar com calma e, se for importante, a pessoa liga de novo ou deixa mensagem. O celular é seu — você decide quando e com quem falar.',
      },
      vocabulario: [
        { palavra: 'Atender', def: 'Aceitar a chamada pra começar a conversa.' },
        { palavra: 'Recusar', def: 'Encerrar a chamada sem atender.' },
        { palavra: 'Silenciar o toque', def: 'Parar o som da chamada sem recusá-la.' },
      ],
      chave: [
        'A tela mostra quem liga; verde atende, vermelho recusa',
        'Com tela bloqueada, às vezes se arrasta pra atender',
        'O botão de volume silencia o toque sem recusar',
      ],
      porque: 'Saber atender e recusar com calma tira o aperto de uma chamada recebida e devolve o controle: você decide quando falar. É essencial pra usar o telefone sem ansiedade — e pra não atender por impulso números suspeitos.',
    },
    pratica: {
      instrucao: 'Vamos ensaiar como atender e recusar (peça pra alguém te ligar).',
      passos: [
        'Quando o celular tocar, observe a tela mostrando quem está ligando',
        'Localize o botão verde (atender) e o vermelho (recusar)',
        'Se a tela estiver bloqueada, veja se precisa arrastar pra atender',
        'Atenda uma chamada tocando no verde (ou arrastando)',
        'Numa próxima, pratique recusar pelo vermelho ou silenciar pelo volume',
      ],
    },
    desafio: {
      cenario: 'Controle as chamadas recebidas: identifique quem está ligando, atenda pelo botão verde (ou arrastando), recuse pelo vermelho quando não puder falar, e saiba silenciar o toque pelo botão de volume sem recusar.',
      requisitos: [
        'Vi quem estava ligando na tela',
        'Atendi pelo botão verde ou arrastando',
        'Recusei uma chamada pelo botão vermelho',
        'Silenciei o toque pelo botão de volume',
        'Entendi que decido quando atender',
      ],
      dica: 'Muitos celulares oferecem responder uma chamada com uma mensagem rápida em vez de atender: ao recusar, aparece a opção "Responder com mensagem" (ex.: "Não posso falar agora, te ligo depois"). Prático pra quando você não pode atender mas quer avisar.',
    },
    validacao: [
      'Vejo quem está ligando antes de atender',
      'Atendo pelo verde ou arrastando',
      'Recuso chamadas pelo vermelho',
      'Silencio o toque pelo volume',
      'Decido com calma quando falar',
    ],
  },

  'mob-contatos-4': {
    trilhaId: 'mob-contatos', numero: 4, titulo: 'Viva-voz, mudo e teclado na chamada',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Durante uma ligação, às vezes você precisa pôr o telefone na mesa e continuar falando, ou silenciar um momento, ou digitar uma opção ("disque 1 pra atendimento"). Os botões da tela de chamada resolvem tudo isso — e conhecê-los deixa qualquer ligação mais confortável.',
      conceito: {
        titulo: 'A tela da chamada tem botões úteis',
        texto: 'Enquanto você fala, a tela da ligação mostra alguns botões importantes. O VIVA-VOZ (ícone de alto-falante) faz o som sair alto pelo telefone, pra você falar sem encostar o aparelho no ouvido — ótimo pra conversar com as mãos livres ou pra mais de uma pessoa ouvir. O MUDO (ícone de microfone cortado) desliga seu microfone: você ouve, mas o outro não te ouve, útil pra tossir ou falar com alguém do lado. E o TECLADO (ícone numérico) abre os números pra você digitar durante a chamada, necessário naqueles menus de atendimento ("digite 1 para..."). Tocar de novo no botão desliga a função.',
      },
      estrutura: {
        titulo: 'Os botões da ligação',
        partes: [
          { simbolo: '🔊', desc: 'Viva-voz: som alto pelo aparelho, mãos livres.' },
          { simbolo: '🔇', desc: 'Mudo: desliga seu microfone (o outro não te ouve).' },
          { simbolo: '🔢', desc: 'Teclado: digitar números durante a chamada.' },
          { simbolo: '🔁', desc: 'Tocar de novo no botão desliga a função.' },
        ],
      },
      exemplo: {
        titulo: 'Usando os botões certos',
        celulas: [
          { ref: 'Quero falar com as mãos livres', valor: 'Ligo o viva-voz' },
          { ref: 'Preciso tossir sem o outro ouvir', valor: 'Ligo o mudo um instante' },
          { ref: 'O menu pede "disque 1"', valor: 'Abro o teclado e digito 1' },
          { ref: 'Terminei de usar a função', valor: 'Toco de novo no botão pra desligar' },
        ],
        formula: 'Viva-voz + mudo + teclado = chamada confortável e completa',
        resultado: 'Você controla o áudio e digita opções durante a ligação.',
        comentario: 'O viva-voz é especialmente útil pra quem tem dificuldade de segurar o telefone no ouvido por muito tempo, ou pra incluir outra pessoa na conversa. Só lembre que, no viva-voz, todos por perto ouvem a conversa — escolha o ambiente conforme a privacidade que você quer.',
      },
      vocabulario: [
        { palavra: 'Viva-voz', def: 'Som alto pelo alto-falante, pra falar com as mãos livres.' },
        { palavra: 'Mudo', def: 'Desligar seu microfone; você ouve, o outro não te ouve.' },
        { palavra: 'Teclado da chamada', def: 'Os números pra digitar durante a ligação.' },
      ],
      chave: [
        'Viva-voz deixa o som alto e as mãos livres',
        'Mudo desliga seu microfone temporariamente',
        'O teclado serve pros menus "digite 1 para..."',
      ],
      porque: 'Os botões da chamada deixam a ligação mais confortável e funcional: viva-voz pra mãos livres, mudo pra privacidade momentânea, e teclado pros menus de atendimento. Conhecê-los evita travar naquele "como faço pra digitar agora?".',
    },
    pratica: {
      instrucao: 'Vamos explorar os botões durante uma chamada.',
      passos: [
        'Faça uma ligação (pode ser de teste, pra alguém conhecido)',
        'Localize o ícone de viva-voz (alto-falante) e ligue-o; ouça a diferença',
        'Ligue o mudo (microfone cortado) e peça pra pessoa confirmar que não te ouve',
        'Desligue o mudo tocando de novo no botão',
        'Abra o teclado da chamada e veja os números aparecerem',
      ],
    },
    desafio: {
      cenario: 'Use os botões da chamada: ative e desative o viva-voz pra falar com as mãos livres, use o mudo pra desligar seu microfone momentaneamente, e abra o teclado pra digitar opções em menus de atendimento.',
      requisitos: [
        'Ativei e desativei o viva-voz',
        'Usei o mudo e confirmei que o outro não me ouvia',
        'Desliguei o mudo tocando de novo',
        'Abri o teclado durante a chamada',
        'Entendi quando usar cada botão',
      ],
      dica: 'Naqueles atendimentos automáticos de bancos e empresas ("digite 1 para isso, 2 para aquilo"), é o teclado da chamada que você usa. Se a tela voltou a mostrar só a conversa, toque no ícone de teclado pra os números reaparecerem e digite a opção pedida.',
    },
    validacao: [
      'Ligo e desligo o viva-voz',
      'Uso o mudo quando preciso',
      'Reativo o microfone facilmente',
      'Abro o teclado nos menus de atendimento',
      'Sei a função de cada botão da chamada',
    ],
  },

  'mob-contatos-5': {
    trilhaId: 'mob-contatos', numero: 5, titulo: 'Histórico de chamadas e retornar ligações',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Você perdeu uma ligação e quer saber quem era. Ou precisa ligar de volta pra alguém que te chamou ontem. O histórico de chamadas guarda tudo isso — um registro de quem ligou, quando, e um atalho pra retornar com um toque.',
      conceito: {
        titulo: 'O histórico registra todas as chamadas',
        texto: 'Dentro do app de Telefone há uma aba de HISTÓRICO (ou "Recentes"), que lista todas as chamadas: as que você FEZ, as que RECEBEU e as PERDIDAS (estas costumam aparecer em vermelho). Cada item mostra o nome (se for contato salvo) ou o número, e a hora. Pra RETORNAR uma ligação, basta tocar no item: o celular liga de volta pra aquela pessoa. As chamadas perdidas também geram um aviso na tela, pra você não esquecer. É a forma mais fácil de ligar pra quem você já falou recentemente, sem precisar procurar na agenda nem digitar nada.',
      },
      estrutura: {
        titulo: 'Lendo o histórico',
        partes: [
          { simbolo: '🕘', desc: 'Aba Histórico (Recentes): lista todas as chamadas.' },
          { simbolo: '📥', desc: 'Recebidas, feitas e perdidas, com nome e hora.' },
          { simbolo: '🔴', desc: 'Perdidas: costumam aparecer destacadas em vermelho.' },
          { simbolo: '↩️', desc: 'Tocar no item retorna a ligação na hora.' },
        ],
      },
      exemplo: {
        titulo: 'Usando o histórico',
        celulas: [
          { ref: 'Perdi uma chamada', valor: 'Vejo no histórico quem era' },
          { ref: 'Quero ligar de volta', valor: 'Toco no nome e o celular rediscar' },
          { ref: 'Número desconhecido me ligou', valor: 'Vejo o número no histórico' },
          { ref: 'Falei com alguém ontem', valor: 'Acho a chamada nos recentes' },
        ],
        formula: 'Histórico + tocar no item = retornar a ligação sem procurar',
        resultado: 'Você sabe quem ligou e retorna chamadas com um toque.',
        comentario: 'Se um número desconhecido aparece no histórico como chamada perdida, não saia ligando de volta por impulso: alguns golpes usam ligações curtas pra você retornar e cair numa tarifa cara. Na dúvida, pesquise o número antes — veremos golpes por telefone na trilha de segurança.',
      },
      vocabulario: [
        { palavra: 'Histórico / Recentes', def: 'A lista de todas as chamadas feitas, recebidas e perdidas.' },
        { palavra: 'Chamada perdida', def: 'Uma ligação que você recebeu mas não atendeu.' },
        { palavra: 'Retornar', def: 'Ligar de volta pra quem aparece no histórico.' },
      ],
      chave: [
        'O histórico lista chamadas feitas, recebidas e perdidas',
        'Tocar num item retorna a ligação na hora',
        'Cuidado ao retornar números desconhecidos por impulso',
      ],
      porque: 'O histórico de chamadas guarda quem ligou e facilita retornar ligações sem procurar nem digitar. É prático e essencial — e também ajuda a identificar chamadas suspeitas que você prefere não retornar.',
    },
    pratica: {
      instrucao: 'Vamos explorar o histórico de chamadas.',
      passos: [
        'Abra o app de Telefone e procure a aba de Histórico (ou Recentes)',
        'Veja a lista de chamadas: feitas, recebidas e perdidas',
        'Identifique se há alguma chamada perdida (costuma estar em vermelho)',
        'Toque num contato conhecido do histórico pra ver a opção de retornar',
        'Observe os nomes (contatos salvos) e os números (não salvos)',
      ],
    },
    desafio: {
      cenario: 'Use o histórico de chamadas: localize a aba de recentes, identifique chamadas feitas, recebidas e perdidas, retorne uma ligação tocando no item — e entenda por que retornar números desconhecidos por impulso pode ser arriscado.',
      requisitos: [
        'Localizei a aba de Histórico (Recentes)',
        'Identifiquei chamadas feitas, recebidas e perdidas',
        'Reconheci as perdidas (destacadas)',
        'Sei retornar uma ligação tocando no item',
        'Entendi o risco de retornar desconhecidos por impulso',
      ],
      dica: 'A partir de um número do histórico, você pode salvá-lo direto como contato: toque no número/chamada e procure a opção "Adicionar aos contatos" ou "Criar contato". Assim, da próxima vez que a pessoa ligar, já aparece o nome dela.',
    },
    validacao: [
      'Acho a aba de Histórico no telefone',
      'Distingo chamadas feitas, recebidas e perdidas',
      'Reconheço as chamadas perdidas',
      'Retorno ligações pelo histórico',
      'Tenho cautela com números desconhecidos',
    ],
  },

  'mob-contatos-6': {
    trilhaId: 'mob-contatos', numero: 6, titulo: 'Organizar e editar contatos',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Com o tempo, a agenda enche: nomes repetidos, números desatualizados, contatos sem sobrenome. Uma agenda organizada faz você achar quem procura na hora. Editar, corrigir e até apagar contatos mantém tudo arrumado e útil.',
      conceito: {
        titulo: 'Contatos podem ser editados, completados e removidos',
        texto: 'A agenda não é fixa: você pode EDITAR qualquer contato pra corrigir o número, completar o nome, adicionar um e-mail ou uma foto. Pra isso, abra o contato e toque em EDITAR (geralmente um lápis). Pode também APAGAR contatos que não usa mais (uma opção de excluir dentro do contato). Pra ACHAR alguém rápido numa agenda grande, use a BUSCA (a lupa no topo): digite parte do nome e a pessoa aparece. Manter a agenda limpa e bem-nomeada — com sobrenomes e contexto — faz toda diferença pra encontrar quem você quer sem rolar a lista inteira.',
      },
      estrutura: {
        titulo: 'Mantendo a agenda em ordem',
        partes: [
          { simbolo: '✏️', desc: 'Editar (lápis): corrigir número, nome, e-mail, foto.' },
          { simbolo: '🔍', desc: 'Busca (lupa): achar alguém digitando parte do nome.' },
          { simbolo: '🗑️', desc: 'Apagar: remover contatos que não usa mais.' },
          { simbolo: '🏷️', desc: 'Bons nomes: sobrenome e contexto facilitam achar.' },
        ],
      },
      exemplo: {
        titulo: 'Arrumando os contatos',
        celulas: [
          { ref: 'A Maria trocou de número', valor: 'Edito o contato e corrijo' },
          { ref: 'Tenho três "João" sem sobrenome', valor: 'Edito cada um com contexto' },
          { ref: 'Procuro alguém na lista grande', valor: 'Uso a busca pela lupa' },
          { ref: 'Contato velho que não uso', valor: 'Apago pra limpar a agenda' },
        ],
        formula: 'Editar + buscar + apagar + bons nomes = agenda limpa e fácil',
        resultado: 'Você acha qualquer pessoa rápido e mantém os dados certos.',
        comentario: 'Antes de apagar um contato, confirme que você realmente não vai precisar dele: a exclusão costuma ser definitiva. Se tiver dúvida, melhor editar o nome (ex.: acrescentar "antigo") do que apagar — assim a pessoa some da sua vista sem perder o número de vez.',
      },
      vocabulario: [
        { palavra: 'Editar contato', def: 'Alterar os dados de uma pessoa salva (número, nome).' },
        { palavra: 'Busca de contatos', def: 'A lupa pra achar alguém digitando parte do nome.' },
        { palavra: 'Apagar contato', def: 'Remover uma pessoa da agenda definitivamente.' },
      ],
      chave: [
        'Edite contatos pra corrigir número, nome, e-mail',
        'Use a busca (lupa) pra achar alguém rápido',
        'Apague com cuidado: costuma ser definitivo',
      ],
      porque: 'Uma agenda organizada — com dados corretos, bons nomes e sem entradas inúteis — faz você achar e contatar pessoas sem esforço. Editar, buscar e limpar contatos mantém essa ferramenta essencial sempre útil e confiável.',
    },
    pratica: {
      instrucao: 'Vamos organizar alguns contatos da sua agenda.',
      passos: [
        'Abra um contato qualquer e toque em editar (geralmente um lápis)',
        'Complete ou corrija algo: um sobrenome, um segundo número',
        'Salve a edição e veja o contato atualizado',
        'Use a busca (lupa) no topo pra achar alguém digitando parte do nome',
        'Identifique (sem apagar ainda) algum contato antigo que poderia limpar',
      ],
    },
    desafio: {
      cenario: 'Organize sua agenda: edite um contato pra corrigir ou completar dados, use a busca pra achar alguém rapidamente numa lista grande, e identifique contatos inúteis pra limpar — sempre com cuidado, já que apagar é definitivo.',
      requisitos: [
        'Editei um contato (corrigi ou completei dados)',
        'Salvei a edição com sucesso',
        'Usei a busca (lupa) pra achar alguém',
        'Identifiquei contatos antigos pra limpar',
        'Entendi que apagar costuma ser definitivo',
      ],
      dica: 'Se sua agenda tem o mesmo contato repetido (duplicado), muitos celulares oferecem "mesclar contatos" ou "vincular": isso junta os dois numa pessoa só, sem perder informação. Procure essa opção nas configurações de Contatos pra dar uma faxina sem trabalho.',
    },
    validacao: [
      'Edito contatos pra corrigir dados',
      'Completo nomes com contexto',
      'Uso a busca pra achar pessoas',
      'Identifico contatos pra limpar',
      'Apago com cuidado e consciência',
    ],
  },

  'mob-contatos-7': {
    trilhaId: 'mob-contatos', numero: 7, titulo: 'Videochamada: ver quem você ama',
    tempoTotal: 10, xp: 60, vertente: 'celular',
    aula: {
      gancho: 'Ouvir a voz de quem você ama é bom — mas VER o rosto, o sorriso, os netos crescendo, mesmo de longe, é emocionante. A videochamada coloca a pessoa na sua frente, em tempo real, de graça. É uma das coisas mais bonitas que o celular permite.',
      conceito: {
        titulo: 'A videochamada mostra a pessoa em tempo real',
        texto: 'A VIDEOCHAMADA é uma ligação com IMAGEM: além de ouvir, você vê a pessoa pela câmera do celular, e ela te vê. Funciona pela internet (Wi-Fi ou dados), então não gasta minutos de ligação — é gratuita. Vários apps fazem isso: o WHATSAPP (ícone de câmera dentro da conversa) é o mais comum no Brasil; há também videochamada de FaceTime (em iPhones), Google Meet e outros. Pra começar, você abre a conversa com a pessoa e toca no ícone de CÂMERA/vídeo. Durante a chamada, dá pra trocar entre a câmera da frente (seu rosto) e a de trás, desligar seu vídeo ou o som. É perto, é íntimo, e aproxima quem está longe.',
      },
      estrutura: {
        titulo: 'Fazendo uma videochamada',
        partes: [
          { simbolo: '📹', desc: 'Videochamada: ligação com imagem, pela internet.' },
          { simbolo: '🆓', desc: 'Usa internet (Wi-Fi/dados), não gasta minutos: é grátis.' },
          { simbolo: '💬', desc: 'Pelo WhatsApp: abrir a conversa e tocar no ícone de câmera.' },
          { simbolo: '🔄', desc: 'Dá pra trocar de câmera (seu rosto / o que vê) na chamada.' },
        ],
      },
      exemplo: {
        titulo: 'Vendo quem está longe',
        celulas: [
          { ref: 'Quero ver minha filha que mora longe', valor: 'Faço uma videochamada' },
          { ref: 'Pelo WhatsApp', valor: 'Abro a conversa e toco na câmera' },
          { ref: 'Quero mostrar o ambiente', valor: 'Troco pra câmera de trás' },
          { ref: 'Custa minutos?', valor: 'Não: usa internet, é gratuito' },
        ],
        formula: 'WhatsApp + conversa + ícone de câmera = ver a pessoa em tempo real',
        resultado: 'Você vê e conversa com quem ama, mesmo de longe, de graça.',
        comentario: 'Pra videochamada ficar boa, prefira o Wi-Fi (a imagem consome bastante internet) e fique num lugar com luz no seu rosto (luz de frente, não atrás de você). Posicione o celular firme — apoiado em algo, se a chamada for longa — pra não cansar o braço e a imagem não ficar tremida.',
      },
      vocabulario: [
        { palavra: 'Videochamada', def: 'Ligação com imagem: você vê e ouve a pessoa em tempo real.' },
        { palavra: 'Câmera frontal', def: 'A câmera da frente, que mostra o seu rosto.' },
        { palavra: 'Pela internet', def: 'Usa Wi-Fi ou dados; por isso é gratuita.' },
      ],
      chave: [
        'A videochamada mostra a pessoa em tempo real',
        'Usa internet, é gratuita (não gasta minutos)',
        'No WhatsApp: abrir a conversa e tocar no ícone de câmera',
      ],
      porque: 'A videochamada aproxima quem está longe como nada antes: ver o rosto da família, os netos, os amigos, em tempo real e de graça, é uma das maiores alegrias que o celular proporciona — especialmente pra quem tem entes queridos distantes.',
    },
    pratica: {
      instrucao: 'Vamos fazer uma videochamada (combine com alguém da família).',
      passos: [
        'Conecte-se ao Wi-Fi pra a imagem ficar boa',
        'Abra o WhatsApp e entre na conversa com a pessoa',
        'Toque no ícone de câmera (vídeo) no topo da conversa',
        'Quando a pessoa atender, ajuste o celular pra seu rosto aparecer bem iluminado',
        'Experimente trocar entre a câmera da frente e a de trás durante a chamada',
      ],
    },
    desafio: {
      cenario: 'Faça uma videochamada: use o WhatsApp (ou outro app) pra ver alguém da família em tempo real, conectado ao Wi-Fi, com boa luz no rosto — e experimente trocar de câmera durante a conversa, entendendo que é gratuito pela internet.',
      requisitos: [
        'Conectei ao Wi-Fi pra a chamada',
        'Abri a conversa e toquei no ícone de câmera',
        'Vi a pessoa em tempo real',
        'Ajustei luz e posição do celular',
        'Troquei entre as câmeras frontal e traseira',
      ],
      dica: 'Quer mostrar a videochamada pra mais gente, ou incluir vários parentes? O WhatsApp permite videochamada em grupo (vários participantes ao mesmo tempo). E, se você cansar de segurar, apoie o celular num suporte ou encostado num objeto pra falar com as mãos livres.',
    },
    validacao: [
      'Sei o que é uma videochamada',
      'Entendo que usa internet e é grátis',
      'Inicio uma videochamada pelo WhatsApp',
      'Ajusto luz e posição pra ficar bem',
      'Troco de câmera durante a chamada',
    ],
  },

  'mob-contatos-8': {
    trilhaId: 'mob-contatos', numero: 8, titulo: 'Identificar quem ligou e bloquear incômodos',
    tempoTotal: 8, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Toca um número estranho, e você não sabe se atende. Ou aquele telemarketing liga toda semana sem parar. Identificar quem está do outro lado e bloquear números indesejados devolve a sua paz — e protege contra ligações de golpe.',
      conceito: {
        titulo: 'Dá pra identificar e barrar ligações indesejadas',
        texto: 'Nem toda ligação vem de um contato salvo. Pra IDENTIFICAR números desconhecidos, alguns celulares mostram informação na própria tela (ex.: "possível spam"), e há apps que revelam quem é o número. Quando uma ligação é claramente indesejada — telemarketing insistente, golpe, trote — você pode BLOQUEAR o número: dentro do histórico ou do contato, há a opção "Bloquear". Bloqueado, aquele número não consegue mais te ligar nem mandar mensagem. Também existe a opção de SILENCIAR chamadas de números desconhecidos (uma configuração que deixa só os contatos salvos tocarem). São ferramentas pra você não ser incomodado nem cair em golpes por telefone.',
      },
      estrutura: {
        titulo: 'Filtrando ligações',
        partes: [
          { simbolo: '🔎', desc: 'Identificar: o celular pode avisar "possível spam".' },
          { simbolo: '🚫', desc: 'Bloquear: o número não te liga nem manda mensagem.' },
          { simbolo: '🔕', desc: 'Silenciar desconhecidos: só contatos salvos tocam.' },
          { simbolo: '🛡️', desc: 'Protege contra telemarketing, trotes e golpes.' },
        ],
      },
      exemplo: {
        titulo: 'Lidando com incômodos',
        celulas: [
          { ref: 'Número estranho ligando', valor: 'Vejo se o celular marca como spam' },
          { ref: 'Telemarketing toda semana', valor: 'Bloqueio o número' },
          { ref: 'Não quero desconhecidos tocando', valor: 'Ativo silenciar desconhecidos' },
          { ref: 'Liguei pra um golpista sem querer', valor: 'Bloqueio e não retorno mais' },
        ],
        formula: 'Identificar + bloquear + silenciar desconhecidos = paz e proteção',
        resultado: 'Você barra incômodos e reduz o risco de golpes por telefone.',
        comentario: 'Bloquear um número é reversível: se você bloquear por engano, dá pra desbloquear depois nas configurações de chamadas bloqueadas. Então não tenha receio de bloquear um incômodo — você não perde nada e ganha tranquilidade, e pode reverter se precisar.',
      },
      vocabulario: [
        { palavra: 'Bloquear', def: 'Impedir que um número te ligue ou mande mensagem.' },
        { palavra: 'Spam de chamada', def: 'Ligações indesejadas (telemarketing, golpe, trote).' },
        { palavra: 'Silenciar desconhecidos', def: 'Deixar só contatos salvos tocarem o telefone.' },
      ],
      chave: [
        'O celular pode identificar números como possível spam',
        'Bloquear impede o número de ligar; é reversível',
        'Dá pra silenciar chamadas de desconhecidos',
      ],
      porque: 'Identificar e bloquear ligações indesejadas devolve a paz e protege contra golpes por telefone, cada vez mais comuns. Saber barrar telemarketing, trotes e golpistas — e que isso é reversível — dá controle total sobre quem te alcança.',
    },
    pratica: {
      instrucao: 'Vamos conhecer como bloquear e filtrar chamadas.',
      passos: [
        'Abra o histórico de chamadas e toque num número (de preferência um indesejado)',
        'Procure a opção "Bloquear número" no menu do contato/chamada',
        'Veja como funciona (você pode bloquear e depois desbloquear)',
        'Nas configurações do app de Telefone, procure por filtros de spam',
        'Veja se há a opção de silenciar chamadas de desconhecidos',
      ],
    },
    desafio: {
      cenario: 'Filtre ligações indesejadas: aprenda a identificar números como possível spam, bloqueie um número incômodo pelo histórico ou contato, e conheça a opção de silenciar desconhecidos — sabendo que o bloqueio é reversível.',
      requisitos: [
        'Vi como o celular identifica possível spam',
        'Localizei a opção de bloquear um número',
        'Entendi que o bloqueio é reversível',
        'Conheci o filtro de chamadas de desconhecidos',
        'Sei que isso protege contra golpes por telefone',
      ],
      dica: 'No Brasil, você também pode reduzir telemarketing cadastrando seu número na lista "Não Me Perturbe" (um serviço gratuito das operadoras). Não bloqueia tudo, mas ajuda a diminuir as ligações de ofertas — uma camada a mais de paz, além do bloqueio individual.',
    },
    validacao: [
      'Identifico números marcados como spam',
      'Bloqueio números incômodos',
      'Sei que o bloqueio é reversível',
      'Conheço o filtro de desconhecidos',
      'Protejo-me de golpes por telefone',
    ],
  },

  'mob-contatos-9': {
    trilhaId: 'mob-contatos', numero: 9, titulo: 'Projeto: agenda organizada e família por perto',
    tempoTotal: 16, xp: 110, vertente: 'celular',
    aula: {
      gancho: 'Hora de juntar tudo: deixar a agenda arrumada com as pessoas importantes, marcar os favoritos, e fazer uma videochamada de verdade com alguém querido. No fim, seu telefone vira o que ele deveria ser — uma ponte simples e calorosa pra quem você ama.',
      conceito: {
        titulo: 'Tudo junto: uma agenda viva e gente por perto',
        texto: 'Este projeto reúne a trilha numa agenda funcional e num reencontro. Você vai ORGANIZAR seus contatos importantes (salvar quem falta, corrigir números, dar bons nomes), marcar os FAVORITOS pra acesso rápido, e revisar o histórico pra retornar alguma ligação pendente. E o ponto alto: fazer uma VIDEOCHAMADA com alguém querido — ver o rosto, conversar, matar a saudade. Você também terá as ferramentas pra se proteger (bloquear um incômodo, se houver). No fim, o telefone deixa de ser um aparelho confuso e vira uma ponte: você sabe quem te liga, alcança quem precisa, e vê quem ama, tudo com tranquilidade.',
      },
      estrutura: {
        titulo: 'A agenda completa',
        partes: [
          { simbolo: '📇', desc: 'Contatos importantes salvos, corrigidos e bem-nomeados.' },
          { simbolo: '⭐', desc: 'Favoritos marcados pra acesso rápido.' },
          { simbolo: '📹', desc: 'Uma videochamada de verdade com alguém querido.' },
          { simbolo: '🛡️', desc: 'Ferramentas de bloqueio prontas, se precisar.' },
        ],
      },
      exemplo: {
        titulo: 'O telefone como ponte',
        celulas: [
          { ref: 'Família e contatos-chave', valor: 'Salvos com nomes claros' },
          { ref: 'Quem você mais fala', valor: 'Nos favoritos, a um toque' },
          { ref: 'Alguém querido distante', valor: 'Reencontro por videochamada' },
          { ref: 'Algum número incômodo', valor: 'Bloqueado, paz garantida' },
        ],
        formula: 'Organizar + favoritar + videochamar + proteger = telefone que aproxima',
        resultado: 'Uma agenda viva e a sensação de ter a família por perto.',
        comentario: 'Esse é o sentido de tudo: a tecnologia a serviço dos vínculos. Uma agenda organizada e uma videochamada não são "mexer no celular" — são estar perto de quem importa. Você dominou a ferramenta; agora ela trabalha pra aproximar você das pessoas que ama.',
      },
      vocabulario: [
        { palavra: 'Favoritos', def: 'Contatos marcados pra acesso rápido no telefone.' },
        { palavra: 'Agenda viva', def: 'Uma lista de contatos organizada, correta e útil.' },
        { palavra: 'Ponte', def: 'O telefone como meio de aproximar você de quem ama.' },
      ],
      chave: [
        'O projeto reúne organizar, favoritar, videochamar e proteger',
        'A agenda vira uma ferramenta viva e confiável',
        'O telefone se torna uma ponte calorosa pra quem você ama',
      ],
      porque: 'Reunir tudo numa agenda organizada e numa videochamada real prova o ganho: o telefone deixa de confundir e passa a aproximar. Você alcança quem precisa, sabe quem te liga, e vê quem ama — a tecnologia cumprindo seu melhor papel, o de conectar pessoas.',
    },
    pratica: {
      instrucao: 'Vamos deixar sua agenda completa e fazer um reencontro.',
      passos: [
        'Salve ou complete os contatos importantes que ainda faltam (família, médico, etc.)',
        'Corrija nomes e números desatualizados, com nomes claros e contexto',
        'Marque seus contatos mais frequentes como favoritos',
        'Revise o histórico e retorne alguma ligação pendente, se houver',
        'Faça uma videochamada com alguém querido, no Wi-Fi e com boa luz',
        'Se houver algum número incômodo, bloqueie-o pra garantir sua paz',
      ],
    },
    desafio: {
      cenario: 'Monte sua agenda viva: organize e corrija contatos importantes, marque favoritos, retorne uma ligação pelo histórico, faça uma videochamada de verdade com alguém querido, e bloqueie um número incômodo se houver — transformando o telefone numa ponte pra quem você ama.',
      requisitos: [
        'Organizei e corrigi meus contatos importantes',
        'Marquei contatos frequentes como favoritos',
        'Retornei uma ligação pelo histórico',
        'Fiz uma videochamada com alguém querido',
        'Bloqueei um número incômodo, se havia',
      ],
      dica: 'Guarde a sensação deste reencontro por vídeo e da agenda nos trinques: foi você no comando, usando o telefone pra se aproximar de quem ama. Daqui pra frente, ligar, ver e organizar pessoas é natural — o aparelho virou, de verdade, uma ponte a seu serviço.',
    },
    validacao: [
      'Organizo e corrijo contatos importantes',
      'Marco favoritos pra acesso rápido',
      'Retorno ligações pelo histórico',
      'Faço videochamadas com quem amo',
      'Bloqueio incômodos quando preciso',
    ],
  },
};
