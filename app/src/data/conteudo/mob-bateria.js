// ============================================================================
// CONTEÚDO — Bateria, Dados e Espaço: o celular sempre pronto (mob-bateria).
// Entender a bateria e fazê-la durar, carregar com saúde, economia de bateria,
// entender Wi-Fi vs. dados móveis e a franquia, economizar dados, liberar
// espaço de armazenamento, e um projeto de deixar o celular saudável e leve.
// Foco em autonomia, economia de dinheiro e fim da ansiedade de "vai acabar".
// ============================================================================

export const MOB_BATERIA = {
  'mob-bateria-1': {
    trilhaId: 'mob-bateria', numero: 1, titulo: 'Entendendo a bateria do celular',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Aquela aflição quando a bateria chega nos 20% longe de casa. Ou o celular que "não segura carga". A bateria não é um mistério: ela tem regras simples. Entendê-las tira a ansiedade e faz o celular durar o dia todo — e durar mais anos.',
      conceito: {
        titulo: 'A bateria é uma reserva de energia que você gerencia',
        texto: 'A BATERIA guarda a energia que faz o celular funcionar, mostrada em PORCENTAGEM (100% = cheia, 0% = vazia). Ela DESCARREGA conforme você usa — tela ligada, internet, apps pesados gastam mais. E RECARREGA quando você liga no carregador. A porcentagem na tela (no alto) mostra quanto resta; perto do fim, o celular avisa e pode entrar em economia. Toda bateria de celular se desgasta com os anos: depois de muito uso, segura menos carga que quando era nova — é normal, não é defeito. O segredo de uma bateria que dura o dia (e os anos) está em entender o que gasta energia e adotar hábitos simples, que você vai aprender nesta trilha.',
      },
      estrutura: {
        titulo: 'Como a bateria funciona',
        partes: [
          { simbolo: '🔋', desc: 'Porcentagem mostra quanta energia resta (100% a 0%).' },
          { simbolo: '📉', desc: 'Descarrega com o uso; tela e internet gastam mais.' },
          { simbolo: '🔌', desc: 'Recarrega quando ligada no carregador.' },
          { simbolo: '⏳', desc: 'Desgasta com os anos: segura menos carga — é normal.' },
        ],
      },
      exemplo: {
        titulo: 'Lendo a bateria',
        celulas: [
          { ref: 'Ícone de bateria cheio, 100%', valor: 'Bateria completa' },
          { ref: 'Caiu pra 20%', valor: 'Hora de pensar em carregar' },
          { ref: 'Ligado no carregador', valor: 'A porcentagem sobe' },
          { ref: 'Celular antigo dura menos', valor: 'Desgaste normal da bateria' },
        ],
        formula: 'Energia que entra (carregar) − energia que sai (uso) = carga atual',
        resultado: 'Você entende a bateria como uma reserva que gerencia ao longo do dia.',
        comentario: 'A primeira vitória é trocar a ansiedade pela compreensão: a bateria não "morre do nada" — ela responde ao seu uso. Saber ler a porcentagem e prever quando carregar já elimina metade do estresse. E entender que o desgaste é natural evita gastar dinheiro à toa achando que o aparelho está com defeito.',
      },
      vocabulario: [
        { palavra: 'Bateria', def: 'A reserva de energia que faz o celular funcionar.' },
        { palavra: 'Porcentagem de carga', def: 'Quanto de energia resta, de 100% (cheia) a 0% (vazia).' },
        { palavra: 'Desgaste', def: 'A perda natural de capacidade da bateria com os anos de uso.' },
      ],
      chave: [
        'A bateria é uma reserva de energia mostrada em porcentagem',
        'Ela descarrega com o uso e recarrega no carregador',
        'O desgaste com os anos é normal, não é defeito',
      ],
      porque: 'Entender a bateria tira a ansiedade do "vai acabar" e evita gastos desnecessários com falsos defeitos. Com essa base, você adota hábitos que fazem a carga durar o dia inteiro e a bateria durar mais anos — ganhando autonomia e tranquilidade no uso do celular.',
    },
    pratica: {
      instrucao: 'Vamos observar a bateria do seu celular.',
      passos: [
        'Olhe no alto da tela o ícone e a porcentagem da bateria',
        'Se não mostra a porcentagem, ative-a nas Configurações de bateria',
        'Entre em Configurações > Bateria e veja o nível atual',
        'Observe se há uma estimativa de quanto tempo a carga ainda dura',
        'Repare em quais apps mais gastaram bateria na lista, se houver',
      ],
    },
    desafio: {
      cenario: 'Conheça sua bateria: localize a porcentagem de carga, ative-a se estiver oculta, entre nas configurações de bateria pra ver o nível e o que mais gasta energia — entendendo a bateria como uma reserva que você acompanha e gerencia.',
      requisitos: [
        'Localizei a porcentagem da bateria na tela',
        'Ativei a exibição da porcentagem, se preciso',
        'Entrei nas Configurações de Bateria',
        'Vi o nível atual e a estimativa de duração',
        'Entendo que o desgaste com os anos é normal',
      ],
      dica: 'Ative a exibição da porcentagem da bateria (em vez de só o ícone) — assim você sempre sabe o número exato e nunca é pego de surpresa. Em quase todos os celulares isso é uma opção simples nas Configurações de bateria ou de status.',
    },
    validacao: [
      'Localizo a porcentagem da bateria',
      'Sei ativar a exibição da porcentagem',
      'Acesso as Configurações de Bateria',
      'Vejo o nível e o que gasta energia',
      'Entendo o desgaste como algo normal',
    ],
  },

  'mob-bateria-2': {
    trilhaId: 'mob-bateria', numero: 2, titulo: 'Fazer a carga durar o dia',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'O celular que não chega ao fim da tarde e o que sobra carga na hora de dormir: a diferença raramente é a bateria — são os hábitos. Alguns ajustes simples podem fazer sua carga render muito mais, sem você abrir mão de usar o celular.',
      conceito: {
        titulo: 'Pequenos ajustes fazem a carga render muito mais',
        texto: 'O que mais gasta bateria é a TELA (especialmente no brilho alto) e os apps usando INTERNET em segundo plano. Você faz a carga durar reduzindo o BRILHO (ou usando o automático), diminuindo o TEMPO até a tela apagar sozinha, e fechando ou limitando apps que ficam ativos sem necessidade. A ECONOMIA DE BATERIA (modo de economia) é um botão que, ligado, segura o consumo automaticamente — ótimo quando a carga está baixa. Desligar o que não usa (Bluetooth, localização quando desnecessária) também ajuda. Nada disso atrapalha o uso normal: são ajustes que cortam o desperdício, não o que importa. Resultado: a mesma bateria dura bem mais.',
      },
      estrutura: {
        titulo: 'Hábitos que poupam bateria',
        partes: [
          { simbolo: '☀️', desc: 'Brilho mais baixo ou automático: o maior ganho.' },
          { simbolo: '⏱️', desc: 'Tela apaga sozinha mais cedo quando parada.' },
          { simbolo: '🔋', desc: 'Modo economia de bateria segura o consumo.' },
          { simbolo: '📵', desc: 'Desligue o que não usa (Bluetooth, localização).' },
        ],
      },
      exemplo: {
        titulo: 'Carga que rende',
        celulas: [
          { ref: 'Brilho no máximo o dia todo', valor: 'Gasta muito; baixo o brilho' },
          { ref: 'Tela fica acesa parada', valor: 'Ajusto pra apagar em 30s' },
          { ref: 'Carga em 15%', valor: 'Ligo o modo economia' },
          { ref: 'Bluetooth ligado sem uso', valor: 'Desligo pra poupar' },
        ],
        formula: 'Menos brilho + tela que apaga + economia = carga que dura o dia',
        resultado: 'A mesma bateria passa a render muito mais, sem perder o uso.',
        comentario: 'O brilho é o campeão de gasto: deixá-lo no automático (que ajusta sozinho ao ambiente) ou um pouco mais baixo é o ajuste de maior impacto. E o modo economia é seu aliado nas horas difíceis — ligue quando a carga está baixa e ele estica o que resta. Esses hábitos somados podem fazer a carga durar horas a mais.',
      },
      vocabulario: [
        { palavra: 'Brilho', def: 'O quanto a tela ilumina; brilho alto gasta muita bateria.' },
        { palavra: 'Modo economia de bateria', def: 'Um ajuste que reduz o consumo pra esticar a carga.' },
        { palavra: 'Segundo plano', def: 'Apps ativos sem estar abertos na tela, que ainda gastam energia.' },
      ],
      chave: [
        'A tela (brilho) é o que mais gasta bateria',
        'Brilho menor, tela que apaga e modo economia rendem muito',
        'Desligar o que não usa também poupa carga',
      ],
      porque: 'Fazer a carga durar o dia inteiro é questão de hábito, não de bateria nova. Com ajustes simples que não atrapalham o uso, você ganha horas de autonomia e acaba com a corrida pelo carregador — usando o celular livremente, sem medo de ficar na mão.',
    },
    pratica: {
      instrucao: 'Vamos aplicar os ajustes que poupam bateria.',
      passos: [
        'Reduza o brilho da tela ou ative o brilho automático',
        'Em Configurações de tela, ajuste o tempo até a tela apagar sozinha (ex.: 30s)',
        'Localize o modo de Economia de Bateria e ligue-o pra ver como funciona',
        'Pela barra de atalhos, desligue Bluetooth ou localização se não estiver usando',
        'Observe a estimativa de duração da bateria melhorar',
      ],
    },
    desafio: {
      cenario: 'Estique sua carga: ajuste o brilho (ou ative o automático), configure a tela pra apagar sozinha mais cedo, conheça o modo economia de bateria e desligue o que não usa — fazendo a mesma carga durar muito mais sem perder o uso do celular.',
      requisitos: [
        'Reduzi o brilho ou ativei o automático',
        'Ajustei o tempo até a tela apagar',
        'Liguei e entendi o modo economia de bateria',
        'Desliguei recursos que não estava usando',
        'Vi a duração estimada melhorar',
      ],
      dica: 'Muitos celulares podem ligar o modo economia AUTOMATICAMENTE quando a carga chega a um nível baixo (ex.: 20%). Vale ativar essa opção: assim você nunca precisa lembrar — o celular se protege sozinho quando a bateria começa a ficar curta.',
    },
    validacao: [
      'Ajusto o brilho pra poupar bateria',
      'Configuro a tela pra apagar sozinha',
      'Uso o modo economia de bateria',
      'Desligo recursos sem uso',
      'Faço a carga durar mais no dia',
    ],
  },

  'mob-bateria-3': {
    trilhaId: 'mob-bateria', numero: 3, titulo: 'Carregar do jeito certo',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Pode deixar carregando a noite toda? Precisa esperar zerar pra carregar? O celular esquenta carregando, é perigoso? Há muito mito sobre carregar o celular. A verdade é simples e tranquila — e seguir alguns cuidados faz a bateria durar mais anos.',
      conceito: {
        titulo: 'Carregar é simples; bons hábitos prolongam a bateria',
        texto: 'Carregar o celular é só ligá-lo ao carregador na tomada (ou a uma porta USB). Os celulares modernos são INTELIGENTES: quando a bateria enche, eles param de puxar energia sozinhos — então deixar carregando depois dos 100% não "estraga". Ainda assim, alguns hábitos ajudam a bateria a durar mais ANOS: evitar deixá-la chegar sempre a 0% e evitar mantê-la sempre em 100% por muito tempo; o ideal pro desgaste é navegar mais na faixa de 20% a 80%. Evite calor extremo (não carregue ao sol ou sob o travesseiro). Use de preferência o carregador original ou um de boa qualidade. Não há perigo em carregar normalmente — só cuidado com calor e cabos ruins.',
      },
      estrutura: {
        titulo: 'Carregar com saúde',
        partes: [
          { simbolo: '🔌', desc: 'Ligue ao carregador; o celular para sozinho nos 100%.' },
          { simbolo: '📊', desc: 'Pro desgaste, a faixa 20%–80% é a mais saudável.' },
          { simbolo: '🌡️', desc: 'Evite calor: não carregue ao sol nem sob o travesseiro.' },
          { simbolo: '✅', desc: 'Prefira carregador original ou de boa qualidade.' },
        ],
      },
      exemplo: {
        titulo: 'Mitos e verdades',
        celulas: [
          { ref: 'Carregar a noite toda estraga?', valor: 'Não; ele para sozinho nos 100%' },
          { ref: 'Preciso zerar antes de carregar?', valor: 'Não; melhor não deixar zerar' },
          { ref: 'Carregar esquenta?', valor: 'Um pouco é normal; evite calor extremo' },
          { ref: 'Qualquer carregador serve?', valor: 'Prefira o original ou de qualidade' },
        ],
        formula: 'Carregamento normal + evitar calor + faixa 20–80% = bateria que dura anos',
        resultado: 'Você carrega sem medo e com hábitos que preservam a bateria.',
        comentario: 'Esqueça os mitos antigos (de baterias de celulares de décadas atrás): hoje pode carregar a qualquer momento, sem precisar zerar. O que realmente preserva a bateria a longo prazo é evitar os extremos (0% e 100% constantes) e, principalmente, o CALOR. Muitos celulares têm "carregamento otimizado", que segura nos 80% à noite e completa perto da hora de acordar — vale ativar.',
      },
      vocabulario: [
        { palavra: 'Carregamento otimizado', def: 'Recurso que evita manter 100% por muito tempo, preservando a bateria.' },
        { palavra: 'Ciclo de carga', def: 'Cada carga completa da bateria; com o tempo, eles desgastam a bateria.' },
        { palavra: 'Carregador original', def: 'O carregador feito pra seu celular, mais seguro e adequado.' },
      ],
      chave: [
        'O celular para de carregar sozinho nos 100%',
        'A faixa 20%–80% é a mais saudável pro desgaste',
        'Evite calor extremo e prefira carregador de qualidade',
      ],
      porque: 'Saber carregar do jeito certo derruba os mitos que geram medo e prolonga a vida da bateria — que é cara de trocar. Com hábitos simples, sua bateria segura mais carga por mais anos, adiando a troca e mantendo o celular útil por mais tempo.',
    },
    pratica: {
      instrucao: 'Vamos rever seus hábitos de carregamento.',
      passos: [
        'Verifique se você usa um carregador original ou de boa qualidade',
        'Procure nas Configurações de bateria a opção de carregamento otimizado/adaptativo e ative-a',
        'Pense em onde costuma carregar e evite locais quentes (sol, sob travesseiro)',
        'Da próxima vez, tente carregar antes de chegar a 0%',
        'Note que não há problema em desligar o carregador antes dos 100%',
      ],
    },
    desafio: {
      cenario: 'Carregue com saúde: confira seu carregador, ative o carregamento otimizado se houver, evite carregar em locais quentes e adote a faixa 20%–80% — derrubando os mitos e prolongando a vida da sua bateria por mais anos.',
      requisitos: [
        'Confirmei que uso um carregador adequado',
        'Ativei o carregamento otimizado, se disponível',
        'Sei evitar carregar em locais quentes',
        'Entendi que não preciso zerar nem temer os 100%',
        'Conheço a faixa saudável de 20% a 80%',
      ],
      dica: 'Se o celular esquentar MUITO ao carregar, tire a capinha (ela retém calor) e verifique o cabo e a tomada. Calor excessivo é o maior inimigo da bateria. Um aquecimento leve é normal; um celular quente demais pra segurar pede atenção — pare e deixe esfriar.',
    },
    validacao: [
      'Uso um carregador adequado',
      'Ativo o carregamento otimizado',
      'Evito carregar em locais quentes',
      'Não temo os mitos de carregamento',
      'Sigo a faixa saudável de carga',
    ],
  },

  'mob-bateria-4': {
    trilhaId: 'mob-bateria', numero: 4, titulo: 'Wi-Fi e dados móveis: a diferença',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Tem gente que estoura o pacote todo mês e não sabe por quê. Outros pagam internet em casa e não usam no celular. A diferença entre Wi-Fi e dados móveis é a chave pra usar a internet sem desperdício — e sem aquela conta inesperada.',
      conceito: {
        titulo: 'Wi-Fi é a internet do lugar; dados móveis vêm do chip',
        texto: 'O celular acessa a internet de duas formas. O WI-FI é a internet de um LOCAL (sua casa, o trabalho, um café): você se conecta à rede dali e usa a internet daquele lugar — geralmente sem gastar do seu pacote. Os DADOS MÓVEIS (ou internet móvel/3G/4G/5G) vêm do seu CHIP da operadora e funcionam em qualquer lugar com sinal — mas consomem a FRANQUIA que você contratou (ex.: 10 GB por mês). A regra de ouro: use WI-FI sempre que disponível (em casa, no trabalho) pra poupar seus dados, e deixe os dados móveis pra quando está na rua, sem Wi-Fi. Você vê e troca entre os dois pela barra de atalhos do celular.',
      },
      estrutura: {
        titulo: 'Duas formas de internet',
        partes: [
          { simbolo: '📶', desc: 'Wi-Fi: internet de um local; não gasta seu pacote.' },
          { simbolo: '📲', desc: 'Dados móveis: vêm do chip; gastam sua franquia.' },
          { simbolo: '🏠', desc: 'Em casa/trabalho: use Wi-Fi pra poupar dados.' },
          { simbolo: '🚶', desc: 'Na rua sem Wi-Fi: use os dados móveis.' },
        ],
      },
      exemplo: {
        titulo: 'Escolhendo a internet certa',
        celulas: [
          { ref: 'Em casa com Wi-Fi', valor: 'Conecto no Wi-Fi: não gasta pacote' },
          { ref: 'Andando na rua', valor: 'Uso dados móveis do chip' },
          { ref: 'Vídeo longo no celular', valor: 'Melhor no Wi-Fi pra não estourar dados' },
          { ref: 'Pacote acabou', valor: 'Procuro um Wi-Fi pra continuar' },
        ],
        formula: 'Wi-Fi quando há (poupa pacote) + dados na rua = internet sem desperdício',
        resultado: 'Você entende quando está gastando seu pacote e quando não.',
        comentario: 'A confusão custa dinheiro: muita gente assiste vídeos longos pelos dados móveis em casa, estourando o pacote, mesmo tendo Wi-Fi disponível. Saber que o Wi-Fi de casa "não conta" no pacote da operadora muda tudo. Verifique sempre o ícone no alto da tela: se aparece o símbolo de Wi-Fi, você está economizando seus dados.',
      },
      vocabulario: [
        { palavra: 'Wi-Fi', def: 'A internet de um local específico, acessada sem gastar seu pacote.' },
        { palavra: 'Dados móveis', def: 'A internet do seu chip, que funciona na rua e gasta a franquia.' },
        { palavra: 'Franquia (pacote)', def: 'A quantidade de dados móveis que você contratou por mês.' },
      ],
      chave: [
        'Wi-Fi é a internet de um lugar e não gasta seu pacote',
        'Dados móveis vêm do chip e consomem a franquia',
        'Use Wi-Fi quando houver; dados móveis na rua',
      ],
      porque: 'Distinguir Wi-Fi de dados móveis é o que evita estourar o pacote e levar conta surpresa — ou pagar internet em casa sem aproveitar. Com essa clareza, você usa a internet livremente onde é de graça e com consciência onde gasta, economizando dinheiro todo mês.',
    },
    pratica: {
      instrucao: 'Vamos identificar e trocar entre Wi-Fi e dados móveis.',
      passos: [
        'Olhe no alto da tela: veja o ícone de Wi-Fi ou o de dados móveis (3G/4G/5G)',
        'Abra a barra de atalhos (deslizando do topo) e ache os botões de Wi-Fi e Dados móveis',
        'Conecte-se a uma rede Wi-Fi conhecida (casa ou trabalho)',
        'Veja o ícone mudar pro símbolo de Wi-Fi no alto da tela',
        'Entenda que, conectado ao Wi-Fi, você não está gastando seu pacote',
      ],
    },
    desafio: {
      cenario: 'Domine as duas internets: identifique pelo ícone se está no Wi-Fi ou nos dados móveis, saiba trocar entre eles na barra de atalhos, conecte-se a um Wi-Fi conhecido e entenda quando está gastando seu pacote e quando não — usando a internet sem desperdício.',
      requisitos: [
        'Identifiquei o ícone de Wi-Fi e o de dados móveis',
        'Achei os botões de Wi-Fi e dados na barra de atalhos',
        'Conectei-me a uma rede Wi-Fi conhecida',
        'Vi o ícone mudar pra Wi-Fi',
        'Sei quando estou gastando meu pacote',
      ],
      dica: 'Cuidado com Wi-Fi público (de shoppings, aeroportos): ele poupa seus dados, mas não é seguro pra senhas e banco — isso você viu no módulo de segurança. A regra aqui é só sobre economia: pra navegar leve, o Wi-Fi serve; pra coisas sensíveis na rua, prefira seus dados móveis.',
    },
    validacao: [
      'Distingo o ícone de Wi-Fi do de dados',
      'Troco entre Wi-Fi e dados móveis',
      'Conecto-me a redes Wi-Fi conhecidas',
      'Sei quando gasto meu pacote',
      'Uso cada internet no momento certo',
    ],
  },

  'mob-bateria-5': {
    trilhaId: 'mob-bateria', numero: 5, titulo: 'Economizar a internet do pacote',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'O pacote que some na primeira semana do mês. Quem nunca? O que mais "come" dados são vídeos e atualizações — e dá pra controlar tudo isso. Com alguns ajustes, seu pacote rende o mês inteiro, sem você deixar de usar o que gosta.',
      conceito: {
        titulo: 'Saber o que consome dados deixa o pacote render o mês',
        texto: 'Alguns usos gastam MUITOS dados móveis: VÍDEOS (YouTube, reels, vídeos no WhatsApp), CHAMADAS DE VÍDEO, e ATUALIZAÇÕES de apps. Pra economizar a franquia: deixe as atualizações de apps e os BACKUPS só pelo Wi-Fi (uma opção nas configurações); reduza a qualidade dos vídeos quando estiver nos dados móveis; e evite baixar coisas grandes fora do Wi-Fi. O celular tem um painel de USO DE DADOS que mostra quanto você já gastou no mês e quais apps mais consumiram — ótimo pra descobrir o "vilão". Alguns têm ECONOMIA DE DADOS, um modo que limita o consumo em segundo plano. Com esses cuidados, o mesmo pacote dura muito mais.',
      },
      estrutura: {
        titulo: 'Onde o pacote vai e como segurá-lo',
        partes: [
          { simbolo: '🎬', desc: 'Vídeos são os que mais gastam: cuide deles.' },
          { simbolo: '⬇️', desc: 'Atualizações e backups: só no Wi-Fi.' },
          { simbolo: '📊', desc: 'Painel de uso de dados mostra os apps vilões.' },
          { simbolo: '🪙', desc: 'Modo economia de dados limita o consumo de fundo.' },
        ],
      },
      exemplo: {
        titulo: 'Pacote que rende',
        celulas: [
          { ref: 'Vídeos longos nos dados', valor: 'Reduzo a qualidade ou espero o Wi-Fi' },
          { ref: 'Apps atualizando na rua', valor: 'Configuro: atualizar só no Wi-Fi' },
          { ref: 'Pacote sumiu, e agora?', valor: 'Vejo no painel qual app gastou' },
          { ref: 'Quero limitar o consumo', valor: 'Ligo a economia de dados' },
        ],
        formula: 'Vídeos controlados + downloads no Wi-Fi + painel de uso = pacote o mês todo',
        resultado: 'Você descobre os vilões e faz o pacote durar muito mais.',
        comentario: 'O painel de uso de dados é revelador: muita gente descobre ali que um app específico (ou o reproduzir vídeos automaticamente) estava devorando o pacote. Ajustar para atualizações e backups acontecerem só no Wi-Fi é o ganho mais fácil — essas tarefas grandes deixam de comer seus dados sem você perceber.',
      },
      vocabulario: [
        { palavra: 'Uso de dados', def: 'O painel que mostra quanto do pacote cada app já consumiu.' },
        { palavra: 'Economia de dados', def: 'Um modo que limita o consumo de internet em segundo plano.' },
        { palavra: 'Backup', def: 'Cópia de segurança (fotos, etc.); pode consumir muitos dados se não for no Wi-Fi.' },
      ],
      chave: [
        'Vídeos e atualizações são os que mais gastam dados',
        'Configure atualizações e backups só pelo Wi-Fi',
        'O painel de uso revela os apps que mais consomem',
      ],
      porque: 'Economizar o pacote evita ficar sem internet no fim do mês ou pagar por dados extras. Identificando os vilões e movendo as tarefas pesadas pro Wi-Fi, você faz a franquia render o mês inteiro — usando o que gosta sem o sufoco do "acabou meu pacote".',
    },
    pratica: {
      instrucao: 'Vamos configurar a economia de dados.',
      passos: [
        'Entre em Configurações > Rede/Conexões > Uso de dados',
        'Veja quanto você já consumiu no mês e quais apps mais gastaram',
        'Procure a opção de Economia de Dados e conheça-a',
        'Na loja de apps, configure atualizações automáticas só por Wi-Fi',
        'Se usa backup de fotos, configure-o pra acontecer só no Wi-Fi',
      ],
    },
    desafio: {
      cenario: 'Faça o pacote render: veja no painel de uso quanto já gastou e quais apps consomem mais, configure atualizações e backups pra só no Wi-Fi, e conheça o modo economia de dados — segurando o consumo pra a franquia durar o mês inteiro.',
      requisitos: [
        'Vi meu consumo de dados no mês',
        'Identifiquei os apps que mais gastam',
        'Configurei atualizações só por Wi-Fi',
        'Ajustei backups pra só no Wi-Fi',
        'Conheço o modo economia de dados',
      ],
      dica: 'Dá pra definir um AVISO ou LIMITE de dados nas configurações: o celular te avisa quando você chega perto da sua franquia, ou até corta os dados pra não passar. Configure isso com o valor do seu pacote — é a melhor proteção contra a temida conta de dados extras.',
    },
    validacao: [
      'Consulto meu uso de dados no mês',
      'Descubro os apps que mais consomem',
      'Configuro atualizações só por Wi-Fi',
      'Ajusto backups pra o Wi-Fi',
      'Uso avisos e a economia de dados',
    ],
  },

  'mob-bateria-6': {
    trilhaId: 'mob-bateria', numero: 6, titulo: 'Entender o espaço de armazenamento',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: '"Armazenamento cheio." "Não foi possível tirar a foto." Essa mensagem trava o celular na pior hora. O espaço de armazenamento é diferente da bateria e dos dados — é onde tudo fica guardado. Entendê-lo é o primeiro passo pra nunca mais ver o celular lotado.',
      conceito: {
        titulo: 'O armazenamento é a "gaveta" onde tudo fica guardado',
        texto: 'O ARMAZENAMENTO (memória) é o espaço onde o celular GUARDA tudo: apps, fotos, vídeos, mensagens, músicas, arquivos. É como uma gaveta de tamanho fixo (ex.: 64 GB, 128 GB): cabe muita coisa, mas tem um limite. Quando ENCHE, o celular avisa e pode parar de tirar fotos, instalar apps ou ficar lento. Atenção pra não confundir: o armazenamento NÃO é a bateria (energia) nem os dados móveis (internet) — é o espaço de guardar. O que mais ocupa espaço costumam ser FOTOS e VÍDEOS (e vídeos recebidos no WhatsApp). Nas configurações, há um painel de ARMAZENAMENTO que mostra quanto está cheio e o que mais ocupa — o mapa pra liberar espaço, que você fará na próxima missão.',
      },
      estrutura: {
        titulo: 'O espaço de guardar',
        partes: [
          { simbolo: '🗄️', desc: 'Armazenamento: a gaveta onde tudo fica guardado.' },
          { simbolo: '📏', desc: 'Tem tamanho fixo (64 GB, 128 GB...); pode encher.' },
          { simbolo: '📷', desc: 'Fotos e vídeos costumam ocupar o maior espaço.' },
          { simbolo: '📊', desc: 'O painel mostra quanto está cheio e o que ocupa.' },
        ],
      },
      exemplo: {
        titulo: 'Não confunda os três',
        celulas: [
          { ref: 'Bateria', valor: 'A energia (acaba e recarrega)' },
          { ref: 'Dados móveis', valor: 'A internet do chip (franquia mensal)' },
          { ref: 'Armazenamento', valor: 'O espaço de guardar (enche com o tempo)' },
          { ref: '"Armazenamento cheio"', valor: 'A gaveta lotou; preciso liberar' },
        ],
        formula: 'Espaço total − o que já está guardado = espaço livre que resta',
        resultado: 'Você entende o armazenamento e o distingue da bateria e dos dados.',
        comentario: 'Essa distinção evita muita confusão: "meu celular está cheio" é sobre armazenamento, não bateria nem internet. E saber que fotos e vídeos são os grandes ocupantes já aponta onde mexer. O painel de armazenamento é o seu mapa: ele mostra exatamente o que está enchendo a gaveta, pra você liberar o que não precisa.',
      },
      vocabulario: [
        { palavra: 'Armazenamento (memória)', def: 'O espaço onde o celular guarda apps, fotos, vídeos e arquivos.' },
        { palavra: 'GB (gigabyte)', def: 'A unidade que mede o tamanho do armazenamento e dos arquivos.' },
        { palavra: 'Espaço livre', def: 'Quanto ainda cabe na gaveta antes de encher.' },
      ],
      chave: [
        'O armazenamento é a gaveta onde tudo fica guardado',
        'Tem tamanho fixo e pode encher, travando o celular',
        'Fotos e vídeos costumam ser o que mais ocupa',
      ],
      porque: 'Entender o armazenamento — e separá-lo da bateria e dos dados — desfaz a confusão por trás do temido "celular cheio". Sabendo o que ocupa espaço e onde olhar, você fica pronto pra liberar espaço com confiança e manter o celular sempre funcionando.',
    },
    pratica: {
      instrucao: 'Vamos ver o armazenamento do seu celular.',
      passos: [
        'Entre em Configurações e procure por Armazenamento (ou Sobre o telefone > Armazenamento)',
        'Veja quanto do espaço total está usado e quanto está livre',
        'Observe o que mais ocupa: apps, fotos, vídeos, outros',
        'Confirme que isso é diferente da bateria e dos dados móveis',
        'Note se o espaço livre está confortável ou ficando apertado',
      ],
    },
    desafio: {
      cenario: 'Conheça sua gaveta: acesse o painel de armazenamento, veja quanto está usado e livre, identifique o que mais ocupa espaço e confirme que isso é diferente da bateria e dos dados — ficando pronto pra liberar espaço com consciência.',
      requisitos: [
        'Acessei o painel de Armazenamento',
        'Vi quanto está usado e quanto está livre',
        'Identifiquei o que mais ocupa espaço',
        'Distingo armazenamento de bateria e dados',
        'Sei se meu espaço está confortável ou apertado',
      ],
      dica: 'Alguns celulares aceitam um CARTÃO DE MEMÓRIA (microSD) que aumenta o armazenamento — útil se o seu vive cheio. Mas nem todos têm essa entrada, e fotos costumam ir pra nuvem (visto na trilha de fotos). Por ora, entender e liberar o espaço interno já resolve a maioria dos casos.',
    },
    validacao: [
      'Acesso o painel de armazenamento',
      'Vejo o espaço usado e o livre',
      'Identifico o que mais ocupa',
      'Distingo armazenamento de bateria e dados',
      'Sei avaliar se o espaço está apertado',
    ],
  },

  'mob-bateria-7': {
    trilhaId: 'mob-bateria', numero: 7, titulo: 'Liberar espaço sem perder o que importa',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'O celular cheio não precisa de aparelho novo — precisa de uma faxina. Mas tem que ser uma faxina segura: liberar o lixo sem apagar as fotos da família por engano. Há um método tranquilo pra deixar a gaveta leve de novo, sem sustos.',
      conceito: {
        titulo: 'Faxina segura: apagar o desnecessário, preservar o precioso',
        texto: 'Pra liberar espaço com segurança, mire no que NÃO faz falta. O maior ganho costuma vir de VÍDEOS e FOTOS repetidas ou recebidas em grupos (memes, "bom dia") — diferente das suas fotos de família, que você preserva (e idealmente já tem backup na nuvem). Outras fontes de espaço: apps que você NÃO USA (desinstale), o CACHE (arquivos temporários que os apps acumulam e podem ser limpos sem perder nada importante), downloads antigos e arquivos baixados. Muitos celulares têm um ASSISTENTE DE LIMPEZA que sugere com segurança o que apagar. A regra de ouro: na dúvida sobre uma foto ou arquivo pessoal, NÃO apague — confira o backup antes. Faxina é tirar o lixo, não o tesouro.',
      },
      estrutura: {
        titulo: 'O que liberar com segurança',
        partes: [
          { simbolo: '🎥', desc: 'Vídeos e fotos repetidas/de grupos: o maior ganho.' },
          { simbolo: '🗑️', desc: 'Apps que você não usa: desinstale.' },
          { simbolo: '🧹', desc: 'Cache (arquivos temporários): limpe sem perder nada.' },
          { simbolo: '💎', desc: 'Fotos de família: preserve; confira o backup antes.' },
        ],
      },
      exemplo: {
        titulo: 'Faxina sem sustos',
        celulas: [
          { ref: 'Vídeos de "bom dia" no WhatsApp', valor: 'Apago: não fazem falta' },
          { ref: 'App que instalei e nunca usei', valor: 'Desinstalo pra liberar espaço' },
          { ref: 'Cache acumulado de um app', valor: 'Limpo: some o lixo, fica o importante' },
          { ref: 'Foto da neta', valor: 'Preservo; confiro se está no backup' },
        ],
        formula: 'Apagar o lixo (vídeos, apps, cache) + preservar o tesouro = gaveta leve e segura',
        resultado: 'Você libera bastante espaço sem perder nada que importa.',
        comentario: 'O medo de apagar algo precioso paralisa muita gente — por isso a regra: comece pelo óbvio descartável (vídeos de grupos, apps sem uso, cache), que dá muito espaço sem risco. Para fotos e arquivos pessoais, garanta o backup primeiro (a trilha de Fotos ensina). Limpar cache é totalmente seguro: são só arquivos temporários, que o app recria sozinho.',
      },
      vocabulario: [
        { palavra: 'Cache', def: 'Arquivos temporários que os apps acumulam; podem ser limpos sem perda.' },
        { palavra: 'Desinstalar', def: 'Remover um app do celular, liberando o espaço que ele ocupava.' },
        { palavra: 'Assistente de limpeza', def: 'Recurso que sugere com segurança o que apagar pra liberar espaço.' },
      ],
      chave: [
        'Comece pelo descartável: vídeos de grupos, apps sem uso, cache',
        'Limpar cache é seguro; são só arquivos temporários',
        'Na dúvida sobre algo pessoal, preserve e confira o backup',
      ],
      porque: 'Liberar espaço com método devolve a fluidez ao celular cheio — sem precisar comprar outro — e, feito com segurança, nunca custa uma foto preciosa. Você aprende a manter a gaveta leve e a guardar o que importa, com a tranquilidade de uma faxina sem sustos.',
    },
    pratica: {
      instrucao: 'Vamos liberar espaço com segurança.',
      passos: [
        'No painel de armazenamento, procure o assistente de limpeza ou as sugestões de liberação',
        'Apague alguns vídeos ou fotos claramente descartáveis (de grupos, repetidos)',
        'Desinstale um app que você instalou e não usa',
        'Limpe o cache de um app pesado (Configurações > Apps > o app > Armazenamento > Limpar cache)',
        'Verifique o espaço livre aumentar, sem ter tocado nas suas fotos importantes',
      ],
    },
    desafio: {
      cenario: 'Faça uma faxina segura: use o assistente de limpeza, apague vídeos e apps descartáveis, limpe o cache de um app pesado e veja o espaço livre crescer — tudo sem encostar nas fotos de família, que você preserva com backup.',
      requisitos: [
        'Usei o assistente de limpeza ou as sugestões',
        'Apaguei vídeos/fotos descartáveis',
        'Desinstalei um app sem uso',
        'Limpei o cache de um app',
        'Liberei espaço sem perder nada importante',
      ],
      dica: 'Antes de apagar fotos em massa pra liberar espaço, confirme que elas estão salvas na nuvem (Google Fotos/iCloud, da trilha de Fotos). Com o backup garantido, muitos apps permitem "liberar espaço" removendo do celular só as cópias locais — as fotos continuam na nuvem, intactas e acessíveis.',
    },
    validacao: [
      'Uso o assistente de limpeza',
      'Apago vídeos e apps descartáveis',
      'Limpo o cache com segurança',
      'Preservo fotos com backup antes de apagar',
      'Libero espaço sem sustos',
    ],
  },

  'mob-bateria-8': {
    trilhaId: 'mob-bateria', numero: 8, titulo: 'Projeto: celular saudável e leve',
    tempoTotal: 16, xp: 110, vertente: 'celular',
    aula: {
      gancho: 'Hora de juntar tudo numa manutenção completa: bateria que dura, dados que rendem, espaço liberado. No fim, seu celular vai estar mais rápido, mais econômico e pronto pra durar mais anos — e você vai saber repetir essa rotina sempre que precisar.',
      conceito: {
        titulo: 'Tudo junto: uma manutenção que deixa o celular saudável',
        texto: 'Este projeto reúne a trilha numa manutenção completa do seu celular, em três frentes. BATERIA: aplicar os ajustes (brilho, tela, economia, carregamento otimizado) pra ela durar o dia e os anos. DADOS: revisar o uso, configurar atualizações e backups só no Wi-Fi e, se quiser, definir um aviso de franquia, pra o pacote render o mês. ESPAÇO: fazer a faxina segura (vídeos descartáveis, apps sem uso, cache), preservando as fotos com backup, pra liberar a gaveta e destravar o celular. Ao cuidar das três coisas, você transforma um celular lento e cheio num aparelho rápido, econômico e durável — e leva uma rotina de manutenção que pode repetir sempre.',
      },
      estrutura: {
        titulo: 'A manutenção completa',
        partes: [
          { simbolo: '🔋', desc: 'Bateria: ajustes pra durar o dia e os anos.' },
          { simbolo: '📲', desc: 'Dados: tarefas pesadas no Wi-Fi, pacote que rende.' },
          { simbolo: '🧹', desc: 'Espaço: faxina segura, preservando o que importa.' },
          { simbolo: '✨', desc: 'Resultado: celular rápido, econômico e durável.' },
        ],
      },
      exemplo: {
        titulo: 'Antes e depois',
        celulas: [
          { ref: 'Bateria não chegava à tarde', valor: 'Com os ajustes, dura o dia' },
          { ref: 'Pacote sumia na 1ª semana', valor: 'Com Wi-Fi e avisos, rende o mês' },
          { ref: 'Celular cheio e lento', valor: 'Com a faxina, leve e rápido' },
          { ref: 'Medo de não saber manter', valor: 'Tenho uma rotina pra repetir' },
        ],
        formula: 'Bateria cuidada + dados controlados + espaço livre = celular saudável e leve',
        resultado: 'Um celular rápido, econômico e durável — e a rotina pra mantê-lo assim.',
        comentario: 'Esse é o domínio completo da saúde do celular: você cuidou das três coisas que mais incomodam (bateria fraca, pacote curto, memória cheia) e aprendeu a repetir essa manutenção. Fazer uma faxina dessas a cada poucos meses mantém o celular leve e rápido por muito mais tempo — adiando, e muitas vezes dispensando, a compra de um aparelho novo.',
      },
      vocabulario: [
        { palavra: 'Manutenção', def: 'Os cuidados regulares que mantêm o celular saudável e rápido.' },
        { palavra: 'Celular saudável', def: 'Aquele com bateria, dados e espaço bem cuidados.' },
        { palavra: 'Rotina', def: 'Repetir a manutenção de tempos em tempos pra manter tudo bem.' },
      ],
      chave: [
        'O projeto cuida de bateria, dados e espaço de uma vez',
        'O resultado é um celular rápido, econômico e durável',
        'Você leva uma rotina de manutenção pra repetir sempre',
      ],
      porque: 'Uma manutenção completa entrega o maior benefício da trilha: um celular que dura o dia, gasta menos e funciona leve — sem precisar de aparelho novo. E, mais que o resultado de hoje, você ganha a autonomia de uma rotina que mantém o celular saudável por anos.',
    },
    pratica: {
      instrucao: 'Vamos fazer a manutenção completa do seu celular.',
      passos: [
        'BATERIA: revise brilho, tempo de tela, modo economia e carregamento otimizado',
        'DADOS: confira o uso do mês e configure atualizações e backups só no Wi-Fi',
        'DADOS: se quiser, defina um aviso de franquia pra não estourar o pacote',
        'ESPAÇO: faça a faxina segura — apague vídeos descartáveis e apps sem uso, limpe cache',
        'ESPAÇO: confirme que suas fotos importantes têm backup antes de liberar espaço',
        'Revise os três cuidados e perceba o celular mais leve, rápido e econômico',
      ],
    },
    desafio: {
      cenario: 'Deixe seu celular saudável: faça a manutenção completa nas três frentes — ajuste a bateria pra durar, controle os dados pra o pacote render, e faça a faxina segura pra liberar espaço — terminando com um celular rápido, econômico e durável, e uma rotina pra repetir.',
      requisitos: [
        'Apliquei os ajustes de bateria',
        'Configurei dados e tarefas pesadas no Wi-Fi',
        'Fiz a faxina segura de espaço',
        'Preservei minhas fotos com backup',
        'Tenho um celular saudável e uma rotina pra manter',
      ],
      dica: 'Marque na sua agenda (da trilha de organização!) um lembrete recorrente a cada 2 ou 3 meses pra repetir essa manutenção rápida. Esse hábito mantém o celular leve e a bateria saudável ao longo dos anos — e amarra duas trilhas: a organização cuidando da própria saúde do aparelho.',
    },
    validacao: [
      'Apliquei os ajustes de bateria',
      'Controlei os dados e as tarefas pesadas',
      'Fiz a faxina de espaço com segurança',
      'Preservei minhas fotos com backup',
      'Tenho a rotina pra manter o celular saudável',
    ],
  },
};
