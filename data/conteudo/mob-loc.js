// ============================================================================
// CONTEÚDO — Maps, Uber e Mobilidade (mob-loc)
// Rotas, transporte, locais favoritos, corridas seguras, compartilhar local.
// ============================================================================

export const MOB_LOC = {
  'mob-loc-1': {
    trilhaId: 'mob-loc', numero: 1, titulo: 'Maps: buscar endereço e rota',
    tempoTotal: 7, xp: 30, vertente: 'celular',
    aula: {
      gancho: 'Perdido numa cidade, sem saber como chegar a um endereço? O Google Maps resolve: você digita pra onde quer ir, e ele te guia por voz, virada a virada. Nunca mais se perca.',
      conceito: {
        titulo: 'Um guia que te leva a qualquer lugar',
        texto: 'O Google Maps é um mapa no celular que mostra onde você está e traça o caminho até qualquer endereço. Você busca o destino, ele calcula a rota e o tempo, e te guia por voz enquanto você anda ou dirige. É gratuito e funciona em qualquer cidade. Saber usar te dá independência pra ir a lugares novos sem medo de se perder.',
      },
      estrutura: {
        titulo: 'Do destino à rota',
        partes: [
          { simbolo: '🔎', desc: 'Buscar: digite o endereço ou o nome do lugar (ex: "Hospital São Lucas").' },
          { simbolo: '📍', desc: 'Sua posição: o ponto azul mostra onde VOCÊ está (precisa do GPS/localização ligado).' },
          { simbolo: '🧭', desc: 'Rota: toque em "Rotas/Como chegar" → ele traça o caminho e o tempo.' },
          { simbolo: '🔊', desc: 'Navegação: toque em "Iniciar" pra ser guiado por voz, virada a virada.' },
        ],
      },
      exemplo: {
        titulo: 'Chegando a um endereço',
        celulas: [
          { ref: 'Digite', valor: 'Rua das Flores, 100' },
          { ref: 'Maps mostra', valor: 'Rota, distância e tempo estimado' },
          { ref: 'Iniciar', valor: 'Guia por voz: "vire à direita em 200m"' },
          { ref: 'Requisito', valor: 'Localização (GPS) ligada' },
        ],
        formula: 'Buscar destino → Rotas → Iniciar → seguir a voz',
        resultado: 'Você chega a qualquer lugar com segurança.',
        comentario: 'Pra o Maps funcionar, a localização (GPS) precisa estar ligada. Se ele não achar você, verifique no atalho de cima se a "Localização" está ativada.',
      },
      vocabulario: [
        { palavra: 'Google Maps', def: 'App de mapas que mostra sua posição e traça rotas até destinos.' },
        { palavra: 'GPS / Localização', def: 'Recurso que identifica onde você está; precisa estar ligado.' },
        { palavra: 'Rota', def: 'O caminho calculado da sua posição até o destino.' },
      ],
      chave: [
        'Busque o destino e toque em "Rotas/Como chegar"',
        'O ponto azul é você (precisa do GPS ligado)',
        '"Iniciar" guia por voz, virada a virada',
      ],
      porque: 'Saber se locomover com autonomia — chegar a consultas, entrevistas, lugares novos — é liberdade. O Maps elimina o medo de se perder e abre a cidade inteira pra você.',
    },
    pratica: {
      instrucao: 'Pegue o celular com a localização ligada. Abra o Google Maps.',
      passos: [
        'Abra o Google Maps (ícone de mapa com um pino vermelho)',
        'Confirme que aparece o ponto azul (você). Se não, ligue a Localização no atalho de cima',
        'Na busca, digite um lugar conhecido (ex: uma farmácia perto, um hospital)',
        'Toque no resultado e depois em "Rotas" (ou "Como chegar")',
        'Veja a distância e o tempo estimado',
        'Toque em "Iniciar" e ouça a primeira instrução por voz (não precisa sair andando)',
        'Toque no X pra encerrar a navegação',
      ],
    },
    desafio: {
      cenario: 'Use o Maps pra traçar a rota até um lugar real aonde você precisa ou quer ir, e entenda o caminho.',
      requisitos: [
        'Abri o Maps e localizei minha posição (ponto azul)',
        'Busquei um destino real',
        'Tracei a rota e vi tempo/distância',
        'Iniciei a navegação por voz',
        'Sei encerrar a navegação',
      ],
      dica: 'Antes de uma viagem importante (entrevista, consulta), trace a rota na véspera e veja o tempo. Assim você sai com antecedência e não se atrasa por imprevisto de trânsito.',
    },
    validacao: [
      'Sei abrir o Maps',
      'Sei ativar/confirmar a localização',
      'Sei buscar um destino',
      'Sei traçar e iniciar uma rota',
      'Sei seguir a navegação por voz',
    ],
  },

  'mob-loc-2': {
    trilhaId: 'mob-loc', numero: 2, titulo: 'Carro, a pé ou ônibus',
    tempoTotal: 7, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'O Maps não serve só pra quem dirige. Ele te diz como ir a pé, de ônibus (com horários e linhas!) ou de carro — e qual é mais rápido. Isso muda totalmente como você se move pela cidade.',
      conceito: {
        titulo: 'O melhor caminho pro SEU jeito de ir',
        texto: 'Ao traçar uma rota, o Maps oferece modos de transporte: carro, a pé, transporte público (ônibus, metrô) e às vezes bicicleta/aplicativo. Cada modo mostra o trajeto, o tempo e, no caso do transporte público, QUAIS linhas pegar, onde descer e os horários. Escolher o modo certo te dá opções: o mais rápido, o mais barato, ou o que você consegue fazer.',
      },
      estrutura: {
        titulo: 'Os modos de transporte',
        partes: [
          { simbolo: '🚗', desc: 'Carro: rota com trânsito em tempo real e tempo estimado.' },
          { simbolo: '🚶', desc: 'A pé: caminho mais curto pra pedestres (útil pra trajetos perto).' },
          { simbolo: '🚌', desc: 'Transporte público: quais ônibus/metrô pegar, onde descer, horários.' },
          { simbolo: '🔀', desc: 'Compare: o Maps mostra o tempo de cada modo pra você escolher.' },
        ],
      },
      exemplo: {
        titulo: 'Mesmo destino, várias opções',
        celulas: [
          { ref: 'Carro', valor: '15 min (com trânsito)' },
          { ref: 'A pé', valor: '40 min' },
          { ref: 'Ônibus', valor: '30 min — linha 477, descer na praça' },
          { ref: 'Escolha', valor: 'O que cabe no seu tempo e bolso' },
        ],
        formula: 'Tracei a rota → toquei no modo (carro/pé/ônibus) → comparei',
        resultado: 'Você escolhe o melhor jeito de chegar.',
        comentario: 'O modo transporte público é ótimo pra quem usa ônibus: ele diz exatamente qual linha pegar e onde descer, tirando a insegurança de "será que é esse ônibus?".',
      },
      vocabulario: [
        { palavra: 'Modo de transporte', def: 'A forma de ir: carro, a pé, ônibus/metrô, bicicleta.' },
        { palavra: 'Transporte público', def: 'Ônibus, metrô, trem; o Maps mostra linhas e horários.' },
        { palavra: 'Tempo estimado', def: 'Quanto deve demorar o trajeto naquele modo.' },
      ],
      chave: [
        'O Maps mostra rota por carro, a pé e transporte público',
        'No ônibus/metrô, ele diz a linha, onde descer e horários',
        'Compare os tempos e escolha o melhor modo',
      ],
      porque: 'Saber usar o transporte público pelo Maps dá autonomia a quem não dirige, e comparar modos ajuda a economizar tempo e dinheiro. É liberdade de movimento pra qualquer trajeto.',
    },
    pratica: {
      instrucao: 'No Maps, trace uma rota e explore os modos de transporte.',
      passos: [
        'Trace uma rota até um destino (como na missão anterior)',
        'No topo da tela de rotas, veja os ícones de modos (carro, a pé, ônibus)',
        'Toque em "carro" e veja o tempo',
        'Toque em "a pé" e compare',
        'Toque em "transporte público" e veja as opções de ônibus/metrô',
        'Repare nas linhas sugeridas, onde descer e os horários',
        'Compare os tempos dos três modos',
      ],
    },
    desafio: {
      cenario: 'Para um trajeto real seu, compare os modos de transporte no Maps e escolha o melhor pra sua situação.',
      requisitos: [
        'Tracei uma rota real',
        'Comparei os tempos por carro, a pé e ônibus',
        'No transporte público, vi as linhas e onde descer',
        'Escolhi o modo mais adequado pra mim',
        'Entendo as vantagens de cada modo',
      ],
      dica: 'Pra trajetos de ônibus que você faz sempre, deixe o transporte público como modo padrão. E confira os horários no app antes de sair — evita esperar à toa no ponto.',
    },
    validacao: [
      'Sei alternar entre os modos de transporte',
      'Sei ver a rota a pé',
      'Sei usar o transporte público (linhas/horários)',
      'Comparo tempos entre modos',
      'Escolho o melhor jeito de ir',
    ],
  },

  'mob-loc-3': {
    trilhaId: 'mob-loc', numero: 3, titulo: 'Salvar casa e trabalho',
    tempoTotal: 6, xp: 30, vertente: 'celular',
    aula: {
      gancho: 'Cansado de digitar seu endereço toda vez? Salve "Casa" e "Trabalho" no Maps uma vez — e depois é só um toque pra traçar a rota pra eles de onde você estiver.',
      conceito: {
        titulo: 'Seus lugares favoritos a um toque',
        texto: 'O Maps deixa você salvar locais frequentes — especialmente "Casa" e "Trabalho" — pra acessá-los com um toque, sem redigitar o endereço. Você também pode salvar outros lugares importantes (médico, casa de um filho) em listas de favoritos. Isso agiliza muito: de qualquer lugar, você toca em "Casa" e o Maps já traça o caminho de volta.',
      },
      estrutura: {
        titulo: 'Salvando lugares',
        partes: [
          { simbolo: '🏠', desc: 'Casa: defina seu endereço em "Salvos" → Casa. Atalho permanente.' },
          { simbolo: '💼', desc: 'Trabalho: o mesmo pro seu trabalho/local frequente.' },
          { simbolo: '⭐', desc: 'Favoritos: salve outros lugares (médico, parente) tocando em "Salvar".' },
          { simbolo: '👆', desc: 'Usar: depois é só tocar em "Casa"/"Trabalho" pra traçar a rota na hora.' },
        ],
      },
      exemplo: {
        titulo: 'Atalhos que economizam tempo',
        celulas: [
          { ref: 'Casa', valor: 'Um toque → rota pra casa de onde estiver' },
          { ref: 'Trabalho', valor: 'Um toque → rota pro trabalho' },
          { ref: 'Médico', valor: 'Salvo nos favoritos' },
          { ref: 'Vantagem', valor: 'Nunca mais digitar endereço repetido' },
        ],
        formula: 'Salvar uma vez (Casa/Trabalho/favoritos) → usar com um toque',
        resultado: 'Rotas pros lugares de sempre, instantâneas.',
        comentario: 'Salvar "Casa" é especialmente útil em emergências ou quando você se perde: de qualquer lugar, um toque traça o caminho de volta pra casa.',
      },
      vocabulario: [
        { palavra: 'Local salvo', def: 'Um endereço guardado no Maps pra acesso rápido.' },
        { palavra: 'Favoritos', def: 'Sua lista de lugares importantes salvos.' },
        { palavra: 'Atalho', def: 'Acesso rápido a algo frequente (aqui, Casa e Trabalho).' },
      ],
      chave: [
        'Salve "Casa" e "Trabalho" pra acesso com um toque',
        'Salve outros lugares importantes nos favoritos',
        '"Casa" salva ajuda muito quando você se perde',
      ],
      porque: 'Salvar lugares frequentes economiza tempo todos os dias e dá segurança: você sempre sabe como voltar pra casa. Pequeno ajuste, grande conveniência e tranquilidade.',
    },
    pratica: {
      instrucao: 'Abra o Maps. Vamos salvar seus lugares principais.',
      passos: [
        'No Maps, toque em "Salvos" (ícone de marcador, na barra de baixo)',
        'Procure "Casa" e defina seu endereço residencial',
        'Defina também "Trabalho" (ou outro lugar que você vai sempre)',
        'Busque um lugar importante (ex: seu médico) e toque em "Salvar"',
        'Escolha uma lista (Favoritos) pra ele',
        'Volte e teste: toque em "Casa" e veja a rota ser traçada',
      ],
    },
    desafio: {
      cenario: 'Salve seus lugares principais no Maps (Casa, Trabalho e ao menos um favorito) e teste o acesso rápido.',
      requisitos: [
        'Salvei o endereço de "Casa"',
        'Salvei "Trabalho" ou outro local frequente',
        'Salvei ao menos um lugar nos favoritos',
        'Testei traçar rota com um toque',
        'Entendo a praticidade dos lugares salvos',
      ],
      dica: 'Salve também os endereços de pessoas importantes (filhos, médico). Numa hora de necessidade, você traça a rota na hora sem precisar ligar pra perguntar "qual mesmo o endereço?".',
    },
    validacao: [
      'Sei salvar "Casa" no Maps',
      'Sei salvar "Trabalho"',
      'Sei salvar lugares nos favoritos',
      'Acesso rotas com um toque',
      'Entendo a conveniência disso',
    ],
  },

  'mob-loc-4': {
    trilhaId: 'mob-loc', numero: 4, titulo: 'Pedir Uber/99 com segurança',
    tempoTotal: 9, xp: 60, vertente: 'celular',
    aula: {
      gancho: 'Chamar um carro pelo celular, sem precisar de ponto de táxi nem dinheiro na mão, é prático demais. Mas é preciso fazer com segurança: conferir o carro, o motorista e o valor antes de entrar.',
      conceito: {
        titulo: 'Um carro até você, com segurança',
        texto: 'Apps como Uber e 99 permitem pedir um carro que vem te buscar onde você está e te leva ao destino, com o valor combinado antes e o pagamento pelo app (ou dinheiro). É prático e geralmente seguro — desde que você siga os cuidados: conferir se o carro (placa, modelo, motorista) é o mesmo do app antes de entrar, e acompanhar a rota. Esses cuidados simples tornam a experiência tranquila.',
      },
      estrutura: {
        titulo: 'Pedindo com segurança',
        partes: [
          { simbolo: '📲', desc: 'Pedir: digite o destino, escolha o tipo de carro e veja o valor ANTES.' },
          { simbolo: '🚗', desc: 'CONFIRA antes de entrar: placa, modelo do carro e nome/foto do motorista batem com o app?' },
          { simbolo: '🗺️', desc: 'Acompanhe a rota pelo app durante a viagem.' },
          { simbolo: '🛡️', desc: 'Compartilhe a viagem com um familiar (recurso de segurança do app).' },
        ],
      },
      exemplo: {
        titulo: 'A conferência que protege',
        celulas: [
          { ref: 'App diz', valor: 'Honda prata, placa ABC-1234, motorista João' },
          { ref: 'Chegou', valor: 'Confira: é esse carro/placa/motorista?' },
          { ref: 'Bate?', valor: 'Sim → entre. Não → NÃO entre.' },
          { ref: 'Pergunte', valor: '"Para quem é a corrida?" (ele deve saber seu nome)' },
        ],
        formula: 'Pedir → conferir carro/placa/motorista → entrar → acompanhar',
        resultado: 'Mobilidade prática e segura.',
        comentario: 'Nunca entre sem conferir a placa. E uma dica: ao chegar, pergunte "para quem é a corrida?" — o motorista verdadeiro tem seu nome no app. Se ele perguntar seu nome, desconfie.',
      },
      vocabulario: [
        { palavra: 'App de transporte', def: 'Aplicativo (Uber, 99) que conecta passageiros a motoristas.' },
        { palavra: 'Corrida', def: 'A viagem solicitada pelo app.' },
        { palavra: 'Compartilhar viagem', def: 'Recurso que mostra sua localização ao vivo a um contato durante a corrida.' },
      ],
      chave: [
        'Veja o valor ANTES de confirmar a corrida',
        'CONFIRA carro, placa e motorista antes de entrar',
        'Acompanhe a rota e compartilhe a viagem com a família',
      ],
      porque: 'Apps de transporte dão liberdade de ir e vir sem depender de ninguém, a qualquer hora. Saber usá-los com segurança torna essa autonomia tranquila — especialmente importante pra quem anda sozinho.',
    },
    pratica: {
      instrucao: 'Pegue o celular. Vamos preparar o app de transporte (instalar e configurar; pedir uma corrida é opcional).',
      passos: [
        'Baixe o app Uber ou 99 (oficiais) da loja',
        'Crie a conta (precisa de e-mail/telefone; pode adicionar forma de pagamento ou usar dinheiro)',
        'Digite um destino de teste e veja o VALOR estimado aparecer ANTES',
        'Veja onde o app mostra os dados do carro e do motorista',
        'Localize o recurso de "compartilhar viagem" / segurança',
        'Entenda os passos: pedir → conferir → entrar → acompanhar',
        '(Opcional) peça uma corrida real e pratique a conferência',
      ],
    },
    desafio: {
      cenario: 'Configure um app de transporte e domine o processo seguro de pedir uma corrida (conferir carro, motorista, valor).',
      requisitos: [
        'Instalei e configurei o app (Uber ou 99)',
        'Sei ver o valor antes de confirmar',
        'Sei onde conferir carro, placa e motorista',
        'Conheço o recurso de compartilhar viagem',
        'Sei a regra de conferir antes de entrar',
      ],
      dica: 'Combine com a família: sempre compartilhe a viagem com alguém ao usar o app. E o segredo de segurança nº1 — nunca entre num carro sem conferir a placa. Errou o carro? Cancele e peça outro.',
    },
    validacao: [
      'Sei pedir uma corrida',
      'Vejo o valor antes de confirmar',
      'Confiro carro, placa e motorista',
      'Sei compartilhar a viagem',
      'Sigo as regras de segurança',
    ],
  },

  'mob-loc-5': {
    trilhaId: 'mob-loc', numero: 5, titulo: 'Compartilhar localização',
    tempoTotal: 7, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Quer que sua família saiba que você chegou bem, ou acompanhe seu trajeto numa viagem? Compartilhar a localização em tempo real traz segurança e tranquilidade — pra você e pra quem te ama.',
      conceito: {
        titulo: 'Sua família sabe onde você está',
        texto: 'O celular permite compartilhar sua localização em tempo real com pessoas de confiança — pelo Google Maps ou pelo WhatsApp. Elas veem onde você está, no mapa, por um tempo que você define. É ótimo pra segurança (avisar que chegou, viagens, andar sozinho) e pra combinar encontros. Você controla com quem compartilha e por quanto tempo — e pode parar quando quiser.',
      },
      estrutura: {
        titulo: 'Como compartilhar',
        partes: [
          { simbolo: '📍', desc: 'Pelo WhatsApp: numa conversa → clipe → Localização → "Localização em tempo real".' },
          { simbolo: '🗺️', desc: 'Pelo Maps: menu → "Compartilhamento de local" → escolher a pessoa e o tempo.' },
          { simbolo: '⏱️', desc: 'Tempo definido: escolha por quanto tempo (1h, até desligar) — e pare quando quiser.' },
          { simbolo: '🔒', desc: 'Só com quem você confia: você controla quem vê e por quanto tempo.' },
        ],
      },
      exemplo: {
        titulo: 'Quando usar',
        celulas: [
          { ref: 'Viagem', valor: 'Família acompanha o trajeto' },
          { ref: 'Cheguei bem', valor: 'Compartilhar até chegar ao destino' },
          { ref: 'Encontro', valor: 'Combinar onde se encontrar' },
          { ref: 'Controle', valor: 'Você escolhe quem vê e por quanto tempo' },
        ],
        formula: 'WhatsApp/Maps → escolher pessoa e tempo → compartilhar',
        resultado: 'Segurança e tranquilidade pra todos.',
        comentario: 'A localização em tempo real do WhatsApp é a mais fácil: na conversa, clipe → Localização → "Compartilhar localização em tempo real". A pessoa acompanha no mapa pelo tempo que você definir.',
      },
      vocabulario: [
        { palavra: 'Localização em tempo real', def: 'Mostrar onde você está, ao vivo, no mapa, pra alguém escolhido.' },
        { palavra: 'Compartilhamento de local', def: 'O recurso (Maps/WhatsApp) que envia sua posição a um contato.' },
        { palavra: 'Tempo de compartilhamento', def: 'Por quanto tempo a pessoa poderá ver sua localização.' },
      ],
      chave: [
        'Compartilhe pelo WhatsApp (clipe → Localização) ou pelo Maps',
        'Você define com quem e por quanto tempo — e pode parar',
        'Ótimo pra segurança: viagens, chegar bem, encontros',
      ],
      porque: 'Compartilhar localização traz segurança real, especialmente pra quem anda sozinho ou viaja. É um recurso simples que dá tranquilidade à família e pode ajudar muito numa situação de necessidade.',
    },
    pratica: {
      instrucao: 'Pegue o celular. Vamos compartilhar sua localização com um familiar (avise que é teste).',
      passos: [
        'Abra uma conversa no WhatsApp com um familiar de confiança',
        'Toque no clipe (📎) → "Localização"',
        'Escolha "Compartilhar localização em tempo real"',
        'Defina o tempo (ex: 15 minutos, pra teste)',
        'Envie e confirme com o familiar que ele vê sua posição no mapa',
        'Pare o compartilhamento (toque em "parar de compartilhar")',
        'Veja também a opção de compartilhamento no Google Maps',
      ],
    },
    desafio: {
      cenario: 'Compartilhe sua localização em tempo real com um familiar de confiança e saiba controlar e encerrar o compartilhamento.',
      requisitos: [
        'Compartilhei minha localização em tempo real (WhatsApp ou Maps)',
        'Defini um tempo de compartilhamento',
        'O familiar confirmou que viu minha posição',
        'Encerrei o compartilhamento',
        'Entendo que controlo quem vê e por quanto tempo',
      ],
      dica: 'Combine com a família um hábito: em viagens ou ao sair à noite, compartilhe a localização até chegar. É uma rede de segurança simples que traz muita tranquilidade pra todos.',
    },
    validacao: [
      'Sei compartilhar localização em tempo real',
      'Sei definir o tempo',
      'Sei pelo WhatsApp e pelo Maps',
      'Sei encerrar o compartilhamento',
      'Controlo quem vê e quando',
    ],
  },

  'mob-loc-6': {
    trilhaId: 'mob-loc', numero: 6, titulo: 'Projeto: planeje um trajeto completo',
    tempoTotal: 15, xp: 90, vertente: 'celular',
    aula: {
      gancho: 'Hora de juntar tudo: planejar um trajeto real de ida e volta — escolhendo o transporte, com lugares salvos, compartilhando a localização e (se quiser) pedindo um carro. Autonomia total pra ir aonde precisar.',
      conceito: {
        titulo: 'Mobilidade com autonomia e segurança',
        texto: 'Este projeto reúne a trilha num plano de deslocamento real: você define um destino, compara os modos de transporte, usa seus lugares salvos, compartilha a localização com a família pra segurança, e domina a opção de pedir um carro. É a diferença entre depender dos outros pra se locomover e ir aonde quiser, quando quiser, com tranquilidade.',
      },
      estrutura: {
        titulo: 'O plano de trajeto',
        partes: [
          { simbolo: '🎯', desc: 'Destino: escolha um lugar real aonde você precisa/quer ir.' },
          { simbolo: '🔀', desc: 'Modo: compare carro/ônibus/a pé e escolha; use lugares salvos.' },
          { simbolo: '🛡️', desc: 'Segurança: compartilhe a localização com um familiar.' },
          { simbolo: '🚗', desc: 'Alternativa: saiba como pedir um Uber/99 se precisar.' },
        ],
      },
      exemplo: {
        titulo: 'Um trajeto bem planejado',
        celulas: [
          { ref: 'Ida', valor: 'Ônibus (linha X) — 30 min' },
          { ref: 'Volta', valor: 'Uber, à noite, com viagem compartilhada' },
          { ref: 'Salvos', valor: 'Casa e destino salvos = um toque' },
          { ref: 'Família', valor: 'Acompanha pela localização' },
        ],
        formula: 'Destino + modo + lugares salvos + localização + alternativa de carro',
        resultado: 'Você vai e volta com total autonomia e segurança.',
        comentario: 'Pensar a ida E a volta é o segredo: às vezes o ônibus serve pra ir de dia, mas à noite um carro por app (com viagem compartilhada) é mais seguro. Planeje os dois.',
      },
      vocabulario: [
        { palavra: 'Trajeto', def: 'O caminho de ida (e volta) até um destino.' },
        { palavra: 'Planejamento de rota', def: 'Pensar com antecedência como ir e voltar, e por qual modo.' },
        { palavra: 'Autonomia de mobilidade', def: 'A capacidade de se locomover sozinho, com segurança.' },
      ],
      chave: [
        'Planeje a ida E a volta, escolhendo o modo de cada uma',
        'Use lugares salvos e compartilhe a localização',
        'Tenha o app de carro como alternativa (ex: à noite)',
      ],
      porque: 'Concluir esta trilha te dá liberdade de movimento com segurança — ir a consultas, entrevistas, passeios e visitas sem depender de ninguém. Autonomia de mobilidade é independência e qualidade de vida.',
    },
    pratica: {
      instrucao: 'Reserve 15 minutos. Planeje um trajeto real de ida e volta, usando tudo da trilha.',
      passos: [
        'Escolha um destino real aonde você precisa ir',
        'Confirme que "Casa" e o destino estão salvos (ou salve agora)',
        'Trace a rota e compare os modos: qual usar na IDA?',
        'Pense na VOLTA: mesmo modo ou outro (ex: carro à noite)?',
        'Compartilhe sua localização com um familiar (ao menos simule)',
        'Confirme que você sabe pedir um Uber/99 se precisar',
        'Anote o plano: ida (modo/horário), volta (modo), e quem vai te acompanhar',
      ],
    },
    desafio: {
      cenario: 'Entregue um plano de trajeto completo de ida e volta: modos escolhidos, lugares salvos, localização compartilhada e alternativa de carro.',
      requisitos: [
        'Defini um destino real e salvei os lugares',
        'Escolhi o modo de transporte da ida',
        'Planejei a volta (mesmo ou outro modo)',
        'Compartilhei (ou simulei) a localização com a família',
        'Sei pedir um carro como alternativa',
        'Tenho um plano claro de ida e volta',
      ],
      dica: 'Parabéns — você concluiu a trilha de Mobilidade! Essa autonomia muda a vida: você vai a qualquer lugar com segurança e sem depender de ninguém. Planeje sempre a volta também, especialmente em horários e lugares menos movimentados.',
    },
    validacao: [
      'Planejei um trajeto de ida e volta',
      'Escolhi os modos de transporte',
      'Usei lugares salvos',
      'Compartilhei a localização',
      'Sei usar o app de carro como alternativa',
      'Tenho autonomia de mobilidade',
    ],
  },
};
