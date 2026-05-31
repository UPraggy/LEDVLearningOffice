// ============================================================================
// CONTEÚDO — Caí num Golpe: O Que Fazer Agora (sec-resposta)
// módulo Segurança · vertente "ambos"
// Resposta a incidente para pessoa comum: primeiros minutos, trocar senhas,
// avisar o banco / contestar, PIX e MED, bloquear contas invadidas, registrar
// (BO / denúncia), proteger contatos avisando, monitorar e se recuperar do
// baque emocional. Trilha de fechamento do módulo: consolida e dá um plano.
// Autoral, foco no Brasil, tom de calma e ação — sem julgar a vítima.
// ============================================================================

export const SEC_RESPOSTA = {
  'sec-resposta-1': {
    trilhaId: 'sec-resposta', numero: 1, titulo: 'Acabei de cair: os primeiros minutos',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'No instante em que você percebe que caiu num golpe, o coração dispara e a vergonha aperta. Mas os primeiros minutos são os mais valiosos pra reduzir o estrago. Saber o que fazer primeiro transforma pânico em ação.',
      conceito: {
        titulo: 'Agir rápido e na ordem certa reduz o prejuízo',
        texto: 'Cair num golpe não é burrice — golpistas são profissionais em manipular qualquer pessoa. O que importa agora é agir, não se culpar. Há uma sequência que vale pra quase todo incidente: 1) Pare o contato — não responda mais, não envie nada, não clique em mais nada. 2) Identifique o que vazou ou foi feito: foi dinheiro (PIX, cartão, transferência)? Foi uma senha/código? Foi acesso a uma conta (WhatsApp, banco, e-mail)? 3) Aja na fonte certa conforme o caso: se envolveu dinheiro, contate o banco já; se foi senha, troque agora; se invadiram uma conta, recupere o acesso. 4) Registre o que aconteceu (prints, valores, horários) antes de apagar qualquer coisa. 5) Avise quem pode ser afetado. As próximas missões detalham cada passo — esta é a bússola pra você não congelar. A regra de ouro dos primeiros minutos: respire, pare o golpe, e cuide primeiro do que ainda dá pra salvar.',
      },
      estrutura: {
        titulo: 'A bússola dos primeiros minutos',
        partes: [
          { simbolo: '✋', desc: 'Pare o contato: não responda nem envie mais nada.' },
          { simbolo: '🔎', desc: 'Identifique: foi dinheiro, senha ou acesso a uma conta?' },
          { simbolo: '🎯', desc: 'Aja na fonte: banco, troca de senha ou recuperar conta.' },
          { simbolo: '📸', desc: 'Registre tudo (prints, valores, horários) antes de apagar.' },
        ],
      },
      exemplo: {
        titulo: 'Do pânico à ação em ordem',
        celulas: [
          { ref: '1. Pare', valor: 'Encerre o contato com o golpista agora' },
          { ref: '2. Identifique', valor: 'Dinheiro? Senha? Conta invadida?' },
          { ref: '3. Aja', valor: 'Banco / trocar senha / recuperar conta' },
          { ref: '4. Registre', valor: 'Prints e dados antes de apagar nada' },
        ],
        formula: 'Parar + identificar + agir na fonte + registrar = menos prejuízo',
        resultado: 'Você troca o congelamento por passos claros.',
        comentario: 'A vergonha faz a pessoa demorar a agir — e é justamente a demora que o golpista quer. Quanto antes você age, mais dá pra recuperar. Culpa pode esperar; ação, não.',
      },
      vocabulario: [
        { palavra: 'Resposta a incidente', def: 'O conjunto de passos pra agir depois de um golpe.' },
        { palavra: 'Parar o contato', def: 'Encerrar a conversa com o golpista imediatamente.' },
        { palavra: 'Agir na fonte', def: 'Resolver onde o dano ocorreu (banco, conta, senha).' },
      ],
      chave: [
        'Cair num golpe não é burrice — agir rápido é o que importa',
        'Sequência: parar, identificar, agir na fonte, registrar, avisar',
        'A demora é aliada do golpista; a ação rápida salva mais',
      ],
      porque: 'Os primeiros minutos após um golpe definem quanto dá pra recuperar. Ter uma bússola — parar, identificar, agir na fonte e registrar — evita o congelamento e reduz o prejuízo financeiro e de dados.',
    },
    pratica: {
      instrucao: 'Memorize a bússola dos primeiros minutos.',
      passos: [
        'Pare o contato com o golpista imediatamente',
        'Identifique se foi dinheiro, senha ou acesso a conta',
        'Aja na fonte certa: banco, troca de senha ou recuperar conta',
        'Registre tudo (prints, valores, horários) antes de apagar',
        'Lembre: agir rápido importa mais do que se culpar',
      ],
    },
    desafio: {
      cenario: 'Você sabe o que fazer nos primeiros minutos após perceber um golpe.',
      requisitos: [
        'Paro o contato com o golpista',
        'Identifico o que foi atingido (dinheiro/senha/conta)',
        'Sei agir na fonte certa de cada caso',
        'Registro tudo antes de apagar',
        'Não deixo a vergonha me paralisar',
      ],
      dica: 'Guarde esta sequência num lugar fácil. No susto, ter um passo a passo pronto evita o congelamento — e cada minuto economizado pode significar dinheiro ou conta recuperados.',
    },
    validacao: [
      'Paro o contato',
      'Identifico o que foi atingido',
      'Ajo na fonte certa',
      'Registro antes de apagar',
      'Não me paraliso',
    ],
  },

  'sec-resposta-2': {
    trilhaId: 'sec-resposta', numero: 2, titulo: 'Mexeram no meu dinheiro: banco, contestação e PIX',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Se o golpe envolveu dinheiro — um PIX enviado, uma compra no cartão, uma transferência — o tempo é ainda mais crítico. Há caminhos pra contestar e até tentar reaver valores, mas eles funcionam melhor quando você age rápido e pelo canal certo.',
      conceito: {
        titulo: 'Contate o banco já e use os canais oficiais de contestação',
        texto: 'Quando há dinheiro envolvido, a prioridade é contatar seu banco imediatamente pelos canais oficiais (o telefone do verso do cartão, o app oficial). Explique que foi vítima de golpe e pergunte quais providências cabem ao seu caso. Para o PIX, o sistema tem um mecanismo de contestação chamado MED (Mecanismo Especial de Devolução), em que o banco pode analisar e, se houver saldo na conta de destino, tentar devolver o valor — por isso avisar rápido aumenta a chance. Para compras no cartão de crédito, existe a contestação de compras não reconhecidas. Para débito ou transferências, o banco orienta o procedimento. Pontos importantes: registre tudo (valores, horários, comprovantes), peça protocolo de cada atendimento, e desconfie de "centrais" que aparecem em buscas ou que ligam pra você oferecendo "ressarcimento" — isso costuma ser um segundo golpe em cima do primeiro. Sempre o canal oficial, sempre com protocolo.',
      },
      estrutura: {
        titulo: 'Quando mexeram no dinheiro',
        partes: [
          { simbolo: '📞', desc: 'Contate o banco JÁ pelo canal oficial (verso do cartão/app).' },
          { simbolo: '🔁', desc: 'PIX: peça a contestação (MED); rapidez aumenta a chance.' },
          { simbolo: '💳', desc: 'Cartão: conteste compras não reconhecidas.' },
          { simbolo: '🧾', desc: 'Anote valores/horários e peça protocolo de tudo.' },
        ],
      },
      exemplo: {
        titulo: 'Avisar o banco rápido faz diferença',
        celulas: [
          { ref: 'Aconteceu', valor: 'PIX enviado / compra no cartão sob golpe' },
          { ref: 'Aja', valor: 'Banco já, pelo canal oficial — não por busca' },
          { ref: 'PIX', valor: 'Pedir o MED; quanto antes, melhor a chance' },
          { ref: 'Registre', valor: 'Valores, horários, comprovantes, protocolo' },
        ],
        formula: 'Banco rápido + canal oficial + contestação + protocolo = melhor chance',
        resultado: 'Você age onde o dinheiro pode ser recuperado.',
        comentario: 'Cuidado com o "golpe do ressarcimento": logo após uma fraude, surgem falsos atendentes prometendo devolver seu dinheiro pra te roubar de novo. Devolução de verdade você busca, ela não te liga.',
      },
      vocabulario: [
        { palavra: 'MED (PIX)', def: 'Mecanismo Especial de Devolução para contestar um PIX.' },
        { palavra: 'Contestação', def: 'Pedido formal ao banco pra reverter cobrança/transferência.' },
        { palavra: 'Protocolo', def: 'Número que comprova cada atendimento — guarde todos.' },
      ],
      chave: [
        'Com dinheiro envolvido, contate o banco já pelo canal oficial',
        'PIX tem o MED; cartão tem contestação de compra não reconhecida',
        'Cuidado com o "golpe do ressarcimento" logo após a fraude',
      ],
      porque: 'Recuperar dinheiro depende de velocidade e de usar o canal oficial. Conhecer o MED do PIX, a contestação no cartão e o risco do golpe do ressarcimento aumenta sua chance de reaver valores sem cair de novo.',
    },
    pratica: {
      instrucao: 'Saiba agir quando o golpe mexeu no seu dinheiro.',
      passos: [
        'Contate o banco imediatamente pelo canal oficial',
        'Para PIX, peça a contestação pelo MED',
        'Para cartão, conteste compras não reconhecidas',
        'Anote valores, horários e peça protocolo de tudo',
        'Desconfie de quem te liga oferecendo "ressarcimento"',
      ],
    },
    desafio: {
      cenario: 'Você sabe contestar e buscar recuperação quando o golpe envolveu dinheiro.',
      requisitos: [
        'Contato o banco já pelo canal oficial',
        'Conheço o MED para contestar PIX',
        'Sei contestar compras no cartão',
        'Registro valores, horários e protocolos',
        'Não caio no golpe do ressarcimento',
      ],
      dica: 'Guarde o telefone oficial do seu banco (do verso do cartão) num lugar de fácil acesso. Na hora do susto, ligar pro número certo — e não pro que aparece numa busca — já evita o segundo golpe.',
    },
    validacao: [
      'Banco já, canal oficial',
      'MED para o PIX',
      'Contesto no cartão',
      'Registro e protocolo',
      'Não caio no ressarcimento',
    ],
  },

  'sec-resposta-3': {
    trilhaId: 'sec-resposta', numero: 3, titulo: 'Dei minha senha: troque tudo agora',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Se você digitou uma senha num site falso, falou um código por telefone ou entregou uma credencial sem perceber, a corrida é contra o relógio: trocar a senha antes que o golpista a use é o que protege suas contas.',
      conceito: {
        titulo: 'Troque a senha exposta e todas as iguais, e ative a verificação em duas etapas',
        texto: 'Uma senha exposta é uma porta aberta. Aja assim: troque imediatamente a senha do serviço afetado, usando um aparelho confiável e digitando o endereço oficial você mesmo (não por links). Em seguida, troque a senha de qualquer outra conta onde você usava a mesma senha — golpistas testam a senha vazada em vários serviços (e-mail, banco, redes). Priorize o e-mail principal: ele é a chave que recupera as outras contas, então protegê-lo primeiro é estratégico. Onde possível, ative a verificação em duas etapas (2FA), que exige um segundo código além da senha e bloqueia o invasor mesmo que ele tenha a senha. Se você informou um código de verificação (aquele SMS que "não era pra compartilhar"), entenda que ele servia pra acessar ou recuperar uma conta sua — então verifique e proteja exatamente essa conta. Senha nova, forte, única por serviço, e 2FA ligado: essa é a barreira que fecha a porta de novo.',
      },
      estrutura: {
        titulo: 'Quando a senha vazou',
        partes: [
          { simbolo: '🔑', desc: 'Troque a senha do serviço afetado, por endereço oficial.' },
          { simbolo: '♻️', desc: 'Troque onde usava a mesma senha (eles testam em tudo).' },
          { simbolo: '📧', desc: 'Priorize o e-mail principal: ele recupera as outras contas.' },
          { simbolo: '🔢', desc: 'Ative a verificação em duas etapas (2FA) onde der.' },
        ],
      },
      exemplo: {
        titulo: 'Fechar a porta antes do invasor entrar',
        celulas: [
          { ref: 'Exposição', valor: 'Senha digitada em site falso / código informado' },
          { ref: 'Troque', valor: 'A senha afetada, por endereço oficial, em aparelho confiável' },
          { ref: 'Replique', valor: 'Onde usava a mesma senha — começando pelo e-mail' },
          { ref: 'Reforce', valor: 'Ative 2FA pra exigir um segundo código' },
        ],
        formula: 'Trocar a exposta + as iguais + e-mail primeiro + 2FA = porta fechada',
        resultado: 'Você corta o acesso antes que ele seja usado.',
        comentario: 'Reutilizar a mesma senha transforma um vazamento em vários — por isso trocar só a do site afetado não basta. E o e-mail vem primeiro porque, com ele, o golpista recupera todo o resto.',
      },
      vocabulario: [
        { palavra: 'Senha exposta', def: 'Senha que o golpista pode ter capturado.' },
        { palavra: 'Verificação em duas etapas (2FA)', def: 'Segundo código além da senha pra entrar.' },
        { palavra: 'Senha única', def: 'Uma senha diferente por serviço, pra um vazamento não derrubar tudo.' },
      ],
      chave: [
        'Troque a senha exposta e todas as iguais, em endereço oficial',
        'Priorize o e-mail principal — ele recupera as outras contas',
        'Ative a verificação em duas etapas pra bloquear o invasor',
      ],
      porque: 'Uma senha exposta é uma porta aberta para várias contas. Trocar rápido, começar pelo e-mail e ativar o 2FA fecha essa porta antes que o golpista a use, limitando o estrago a um único serviço.',
    },
    pratica: {
      instrucao: 'Feche o acesso quando uma senha foi exposta.',
      passos: [
        'Troque a senha do serviço afetado pelo endereço oficial',
        'Troque a senha de qualquer conta com a mesma senha',
        'Priorize o e-mail principal, que recupera as demais',
        'Ative a verificação em duas etapas onde possível',
        'Se informou um código, proteja a conta a que ele dava acesso',
      ],
    },
    desafio: {
      cenario: 'Você fecha o acesso rapidamente quando uma senha foi exposta.',
      requisitos: [
        'Troco a senha exposta por endereço oficial',
        'Troco também onde usava a mesma senha',
        'Priorizo o e-mail principal',
        'Ativo a verificação em duas etapas',
        'Protejo a conta ligada a um código que informei',
      ],
      dica: 'Se você tem muitas contas com a mesma senha, comece pelas mais críticas: e-mail, banco e redes principais. Depois aproveite pra adotar senhas únicas — um gerenciador de senhas ajuda a não precisar decorar.',
    },
    validacao: [
      'Troco a senha exposta',
      'Troco as iguais',
      'E-mail primeiro',
      'Ativo 2FA',
      'Protejo a conta do código',
    ],
  },

  'sec-resposta-4': {
    trilhaId: 'sec-resposta', numero: 4, titulo: 'Invadiram minha conta: recuperar WhatsApp, e-mail e redes',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Quando um golpista assume o controle de uma conta sua — WhatsApp, e-mail, rede social — ele pode usar sua identidade pra enganar seus contatos. Recuperar o acesso e avisar as pessoas são as duas frentes urgentes.',
      conceito: {
        titulo: 'Recupere o acesso pelos meios oficiais e avise seus contatos',
        texto: 'Contas invadidas têm caminhos oficiais de recuperação — o segredo é usá-los, e não os "ajudantes" que aparecem oferecendo socorro (são golpe). Para o WhatsApp: reinstale e registre de novo o número; ao receber o código de verificação por SMS e inseri-lo, o golpista é desconectado; se houver verificação em duas etapas que você não configurou, há um procedimento de espera pra recuperar. Para e-mail e redes: use a opção "esqueci minha senha"/"recuperar conta" no site/app oficial, que pode enviar um link ou código pro seu telefone ou e-mail de recuperação. Depois de recuperar: troque a senha, ative a verificação em duas etapas, e revise sessões/dispositivos conectados pra desconectar o invasor. Em paralelo — e isso é urgente — avise seus contatos por outro canal que sua conta foi invadida e que mensagens pedindo dinheiro não são suas. Recuperar o acesso protege você; avisar os contatos protege todo mundo ao seu redor.',
      },
      estrutura: {
        titulo: 'Quando invadiram uma conta',
        partes: [
          { simbolo: '📲', desc: 'WhatsApp: reinstale, registre o número, insira o código (desloga o golpista).' },
          { simbolo: '🔐', desc: 'E-mail/redes: use "recuperar conta" no canal oficial.' },
          { simbolo: '🧹', desc: 'Recuperou? Troque senha, ative 2FA, desconecte sessões.' },
          { simbolo: '📣', desc: 'Avise seus contatos por outro canal — urgente.' },
        ],
      },
      exemplo: {
        titulo: 'Retomar o controle e proteger os contatos',
        celulas: [
          { ref: 'WhatsApp', valor: 'Reinstalar + registrar + inserir o código por SMS' },
          { ref: 'E-mail/rede', valor: '"Recuperar conta" pelo site/app oficial' },
          { ref: 'Depois', valor: 'Trocar senha, ativar 2FA, desconectar sessões' },
          { ref: 'Avise', valor: '"Minha conta foi invadida; não mandem dinheiro"' },
        ],
        formula: 'Recuperar no oficial + 2FA + desconectar + avisar contatos = controle de volta',
        resultado: 'Você retoma a conta e protege quem confia em você.',
        comentario: 'Enquanto a conta está invadida, o golpista finge ser você pra pedir dinheiro a quem te conhece. Por isso avisar os contatos é tão urgente quanto recuperar o acesso — às vezes mais.',
      },
      vocabulario: [
        { palavra: 'Recuperar conta', def: 'Processo oficial pra retomar acesso a uma conta invadida.' },
        { palavra: 'Sessões conectadas', def: 'Aparelhos logados na conta — desconecte os que não são seus.' },
        { palavra: 'Avisar contatos', def: 'Alertar amigos/família de que a conta foi invadida.' },
      ],
      chave: [
        'Use os caminhos oficiais de recuperação, não "ajudantes" que aparecem',
        'Recuperou? Troque senha, ative 2FA e desconecte sessões',
        'Avise os contatos por outro canal — é urgente',
      ],
      porque: 'Uma conta invadida vira ferramenta pra enganar seus contatos em seu nome. Recuperar pelo canal oficial e avisar as pessoas em paralelo protege tanto você quanto toda a sua rede de confiança.',
    },
    pratica: {
      instrucao: 'Recupere uma conta invadida e proteja seus contatos.',
      passos: [
        'No WhatsApp, reinstale, registre o número e insira o código por SMS',
        'Em e-mail/redes, use "recuperar conta" pelo canal oficial',
        'Após recuperar, troque a senha e ative a verificação em duas etapas',
        'Revise e desconecte sessões/dispositivos desconhecidos',
        'Avise seus contatos por outro canal o quanto antes',
      ],
    },
    desafio: {
      cenario: 'Você recupera uma conta invadida e protege sua rede de contatos.',
      requisitos: [
        'Sei recuperar o WhatsApp pelo registro e código',
        'Uso "recuperar conta" oficial em e-mail e redes',
        'Troco senha e ativo 2FA após recuperar',
        'Desconecto sessões desconhecidas',
        'Aviso meus contatos por outro canal',
      ],
      dica: 'Não use "ajudantes" que surgem nos comentários ou no direct prometendo recuperar sua conta — são golpistas. Os caminhos oficiais de recuperação estão dentro do próprio app ou site do serviço.',
    },
    validacao: [
      'Recupero o WhatsApp',
      'Recuperar conta oficial',
      'Troco senha + 2FA',
      'Desconecto sessões',
      'Aviso meus contatos',
    ],
  },

  'sec-resposta-5': {
    trilhaId: 'sec-resposta', numero: 5, titulo: 'Registrar e denunciar: boletim e canais certos',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Depois de conter o estrago, registrar o golpe formalmente tem valor real: ajuda em contestações, cria um histórico oficial e alimenta o combate à fraude. Saber onde e como registrar evita que esse passo importante seja pulado.',
      conceito: {
        titulo: 'Registrar dá respaldo a você e ajuda a combater o golpe',
        texto: 'Registrar um golpe serve a dois propósitos: dar respaldo formal ao seu caso (útil em contestações com o banco e para comprovar que você foi vítima) e contribuir para que autoridades e plataformas combatam os golpistas. Os caminhos no Brasil incluem: o Boletim de Ocorrência, que pode ser feito presencialmente ou pela Delegacia Eletrônica do seu estado (muitos estados têm registro online); a denúncia dentro das próprias plataformas (WhatsApp, redes, marketplaces têm botões de denúncia de perfis e mensagens fraudulentas); e, conforme o caso, órgãos de defesa do consumidor. Para registrar bem, reúna as provas que você guardou: prints das conversas, números de telefone e perfis, valores e horários, comprovantes de transferência e protocolos do banco. Quanto mais organizado o relato, mais útil ele é. Registrar não garante recuperar o dinheiro, mas fortalece sua posição e ajuda a proteger outras pessoas do mesmo golpe.',
      },
      estrutura: {
        titulo: 'Onde e como registrar',
        partes: [
          { simbolo: '🚔', desc: 'Boletim de Ocorrência: presencial ou Delegacia Eletrônica.' },
          { simbolo: '🚩', desc: 'Denúncia na própria plataforma (perfis/mensagens golpistas).' },
          { simbolo: '🛒', desc: 'Defesa do consumidor, conforme o caso.' },
          { simbolo: '🗂️', desc: 'Reúna provas: prints, perfis, valores, horários, protocolos.' },
        ],
      },
      exemplo: {
        titulo: 'Transformar provas em um registro útil',
        celulas: [
          { ref: 'Junte', valor: 'Prints, números/perfis, valores, horários, protocolos' },
          { ref: 'BO', valor: 'Presencial ou Delegacia Eletrônica do estado' },
          { ref: 'Plataforma', valor: 'Denunciar perfil/mensagem fraudulenta' },
          { ref: 'Serve para', valor: 'Respaldar contestação e ajudar no combate' },
        ],
        formula: 'Provas organizadas + BO + denúncia na plataforma = registro com valor',
        resultado: 'Você cria um histórico oficial do que aconteceu.',
        comentario: 'O registro raramente devolve o dinheiro sozinho, mas dá respaldo às contestações e ajuda a tirar o golpista de circulação. Pular esse passo por vergonha só beneficia quem aplicou o golpe.',
      },
      vocabulario: [
        { palavra: 'Boletim de Ocorrência', def: 'Registro oficial do crime, presencial ou online.' },
        { palavra: 'Delegacia Eletrônica', def: 'Registro de ocorrência pela internet, conforme o estado.' },
        { palavra: 'Denúncia na plataforma', def: 'Reportar perfis/mensagens golpistas no próprio app.' },
      ],
      chave: [
        'Registrar dá respaldo ao seu caso e ajuda a combater o golpe',
        'Caminhos: BO (presencial/eletrônico), denúncia na plataforma, consumidor',
        'Reúna as provas guardadas pra um registro organizado e útil',
      ],
      porque: 'Registrar formalmente fortalece contestações, cria histórico oficial e ajuda autoridades e plataformas a combater golpistas. Saber os canais e organizar as provas garante que esse passo de respaldo não seja pulado.',
    },
    pratica: {
      instrucao: 'Saiba registrar e denunciar um golpe.',
      passos: [
        'Reúna as provas: prints, perfis, valores, horários, protocolos',
        'Faça o Boletim de Ocorrência (presencial ou Delegacia Eletrônica)',
        'Denuncie o perfil/mensagem na própria plataforma',
        'Considere a defesa do consumidor conforme o caso',
        'Organize o relato pra torná-lo mais útil',
      ],
    },
    desafio: {
      cenario: 'Você registra e denuncia um golpe pelos canais certos, com provas organizadas.',
      requisitos: [
        'Reúno as provas que guardei',
        'Sei fazer o BO presencial ou eletrônico',
        'Denuncio perfis/mensagens na plataforma',
        'Considero a defesa do consumidor',
        'Organizo o relato pra ter respaldo',
      ],
      dica: 'Os endereços exatos variam por estado e por plataforma, e mudam com o tempo — procure sempre "Delegacia Eletrônica" do seu estado no site oficial. Se tiver dúvida, peça ajuda a alguém de confiança pra registrar junto.',
    },
    validacao: [
      'Reúno as provas',
      'Faço o BO',
      'Denuncio na plataforma',
      'Considero o consumidor',
      'Organizo o relato',
    ],
  },

  'sec-resposta-6': {
    trilhaId: 'sec-resposta', numero: 6, titulo: 'Avisar quem pode ser atingido',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Um golpe raramente atinge só uma pessoa. Se invadiram sua conta ou clonaram seu perfil, seus contatos viram alvo. Avisar rápido e com clareza interrompe a corrente antes que mais alguém caia.',
      conceito: {
        titulo: 'Avisar contatos interrompe a corrente do golpe',
        texto: 'Muitos golpes se espalham usando a confiança: o golpista, de posse da sua conta ou de um perfil clonado seu, pede dinheiro ou dados às pessoas que confiam em você. Por isso, avisar é parte da resposta — não é exagero. Faça assim: avise por um canal diferente do que foi comprometido (se invadiram o WhatsApp, avise por ligação, outra rede ou pessoalmente). Seja direto e sem rodeios: "Minha conta foi invadida/clonada. Se receberem mensagem minha pedindo dinheiro, código ou dados, ignorem — não sou eu. Confirmem comigo por [outro canal]." Priorize quem é mais próximo e mais vulnerável (familiares idosos, por exemplo). Se o golpe envolveu um grupo (família, trabalho), avise o grupo. E peça que, na dúvida, sempre confirmem por um segundo canal — a mesma regra que protege todo mundo. Avisar pode evitar que pessoas que você ama caiam no golpe que começou em você.',
      },
      estrutura: {
        titulo: 'Como avisar bem',
        partes: [
          { simbolo: '📞', desc: 'Use um canal diferente do que foi comprometido.' },
          { simbolo: '🗣️', desc: 'Seja direto: "fui invadido; não sou eu pedindo dinheiro".' },
          { simbolo: '👵', desc: 'Priorize os mais próximos e vulneráveis.' },
          { simbolo: '✅', desc: 'Peça que confirmem por um segundo canal na dúvida.' },
        ],
      },
      exemplo: {
        titulo: 'Cortar a corrente antes que se espalhe',
        celulas: [
          { ref: 'Canal', valor: 'Avisar por fora do que foi comprometido' },
          { ref: 'Mensagem', valor: '"Conta invadida; ignorem pedidos em meu nome"' },
          { ref: 'Prioridade', valor: 'Familiares próximos e mais vulneráveis' },
          { ref: 'Reforço', valor: '"Na dúvida, confirmem comigo por outro canal"' },
        ],
        formula: 'Outro canal + aviso direto + prioridade + confirmar = corrente cortada',
        resultado: 'Você protege sua rede do golpe que começou em você.',
        comentario: 'Avisar não é admitir fracasso — é cuidar de quem confia em você. O golpista aposta no seu silêncio envergonhado pra alcançar mais vítimas. O aviso rápido quebra esse plano.',
      },
      vocabulario: [
        { palavra: 'Canal alternativo', def: 'Meio diferente do que foi comprometido, pra avisar com segurança.' },
        { palavra: 'Cortar a corrente', def: 'Avisar pra impedir que o golpe alcance mais pessoas.' },
        { palavra: 'Confirmar por segundo canal', def: 'Regra de ouro que protege todos os contatos.' },
      ],
      chave: [
        'Seus contatos viram alvo quando sua conta/perfil é comprometido',
        'Avise por outro canal, de forma direta, priorizando os vulneráveis',
        'Peça que sempre confirmem por um segundo canal na dúvida',
      ],
      porque: 'Golpes se espalham pela confiança nos seus contatos. Avisar rápido por um canal alternativo, priorizando os mais vulneráveis, interrompe a corrente e protege as pessoas ao seu redor do golpe que começou em você.',
    },
    pratica: {
      instrucao: 'Avise quem pode ser atingido pelo golpe.',
      passos: [
        'Avise por um canal diferente do que foi comprometido',
        'Seja direto: "fui invadido; não sou eu pedindo dinheiro/dados"',
        'Priorize familiares próximos e mais vulneráveis',
        'Avise o grupo, se o golpe envolveu um',
        'Peça que confirmem por um segundo canal na dúvida',
      ],
    },
    desafio: {
      cenario: 'Você avisa seus contatos a tempo de cortar a corrente do golpe.',
      requisitos: [
        'Aviso por um canal diferente do comprometido',
        'Sou direto e claro no aviso',
        'Priorizo os mais próximos e vulneráveis',
        'Aviso grupos envolvidos',
        'Reforço a regra de confirmar por segundo canal',
      ],
      dica: 'Tenha em mente quem são as pessoas mais vulneráveis na sua rede — um pai idoso, alguém menos acostumado com tecnologia. São elas que mais se beneficiam de um aviso rápido e direto.',
    },
    validacao: [
      'Aviso por outro canal',
      'Sou direto',
      'Priorizo os vulneráveis',
      'Aviso o grupo',
      'Reforço confirmar',
    ],
  },

  'sec-resposta-7': {
    trilhaId: 'sec-resposta', numero: 7, titulo: 'Depois do golpe: monitorar e prevenir o próximo',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Conter o golpe é o começo; nas semanas seguintes, vale ficar de olho pra perceber desdobramentos — cobranças estranhas, novas tentativas, seu nome usado em fraudes. Monitorar e reforçar suas defesas evita o segundo golpe.',
      conceito: {
        titulo: 'Monitore desdobramentos e reforce as defesas que falharam',
        texto: 'Quem caiu uma vez vira alvo preferencial: golpistas vendem e trocam dados de vítimas, e quem já caiu pode receber novas abordagens (inclusive o "golpe do ressarcimento"). Por isso, nas semanas seguintes: acompanhe seus extratos e faturas em busca de cobranças que você não reconhece; fique atento a contas abertas em seu nome ou usos indevidos do seu CPF (há serviços de consulta para isso); e desconfie de qualquer contato que mencione o golpe anterior pra te abordar de novo. Em paralelo, reforce o que falhou: ative a verificação em duas etapas onde ainda não tem, adote senhas únicas, revise privacidade e permissões. E faça um pequeno "balanço": qual sinal você perceberia da próxima vez? Pressa? Promessa boa demais? Pedido fora do canal oficial? Transformar o susto em aprendizado é o que reduz a chance de repetir. Monitorar protege o curto prazo; reforçar as defesas protege o longo.',
      },
      estrutura: {
        titulo: 'Depois de conter o golpe',
        partes: [
          { simbolo: '👀', desc: 'Acompanhe extratos/faturas por cobranças desconhecidas.' },
          { simbolo: '🪪', desc: 'Fique atento a usos indevidos do seu nome/CPF.' },
          { simbolo: '🔒', desc: 'Reforce o que falhou: 2FA, senhas únicas, privacidade.' },
          { simbolo: '🧠', desc: 'Faça um balanço: que sinal eu perceberia da próxima vez?' },
        ],
      },
      exemplo: {
        titulo: 'Vigiar o curto prazo e blindar o longo',
        celulas: [
          { ref: 'Monitore', valor: 'Extratos, faturas, uso do seu CPF/nome' },
          { ref: 'Alerta', valor: 'Quem caiu vira alvo de novas abordagens' },
          { ref: 'Reforce', valor: 'Ative 2FA, senhas únicas, revise privacidade' },
          { ref: 'Aprenda', valor: 'Que sinal eu reconheceria da próxima vez?' },
        ],
        formula: 'Monitorar + reforçar defesas + aprender = menos chance de repetir',
        resultado: 'Você fecha as brechas e fica atento aos desdobramentos.',
        comentario: 'Levar o susto a sério e ajustar as defesas é o que separa quem cai uma vez de quem cai de novo. O aprendizado tirado de um golpe é a melhor proteção contra o próximo.',
      },
      vocabulario: [
        { palavra: 'Monitorar', def: 'Acompanhar extratos e usos do seu nome após o golpe.' },
        { palavra: 'Reincidência', def: 'Quem caiu uma vez vira alvo de novas tentativas.' },
        { palavra: 'Balanço', def: 'Refletir sobre que sinal reconhecer da próxima vez.' },
      ],
      chave: [
        'Quem caiu vira alvo preferencial — monitore desdobramentos',
        'Acompanhe extratos e usos do seu nome/CPF nas semanas seguintes',
        'Reforce o que falhou (2FA, senhas únicas) e tire o aprendizado',
      ],
      porque: 'O risco não acaba quando o golpe é contido: vítimas recebem novas abordagens. Monitorar extratos e o uso do nome, reforçar as defesas que falharam e aprender com o ocorrido reduz a chance de cair de novo.',
    },
    pratica: {
      instrucao: 'Monitore os desdobramentos e reforce suas defesas.',
      passos: [
        'Acompanhe extratos e faturas por cobranças desconhecidas',
        'Fique atento a usos indevidos do seu nome e CPF',
        'Desconfie de contatos que mencionem o golpe anterior',
        'Ative 2FA, adote senhas únicas e revise privacidade',
        'Faça um balanço: que sinal você perceberia da próxima vez?',
      ],
    },
    desafio: {
      cenario: 'Você monitora os desdobramentos e reforça as defesas após um golpe.',
      requisitos: [
        'Acompanho extratos e faturas',
        'Fico atento a usos do meu nome/CPF',
        'Desconfio de novas abordagens sobre o golpe',
        'Reforço 2FA, senhas únicas e privacidade',
        'Tiro um aprendizado do que aconteceu',
      ],
      dica: 'Marque um lembrete pra revisar seus extratos nas próximas semanas. E lembre: receber uma "oferta de ajuda" logo após o golpe é justamente quando você deve desconfiar mais, não menos.',
    },
    validacao: [
      'Acompanho extratos',
      'Atento ao meu CPF',
      'Desconfio de novas abordagens',
      'Reforço minhas defesas',
      'Tiro um aprendizado',
    ],
  },

  'sec-resposta-8': {
    trilhaId: 'sec-resposta', numero: 8, titulo: 'A vergonha não é sua: lidar com o baque emocional',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Cair num golpe machuca não só o bolso — machuca a autoestima. Muita gente sente vergonha, raiva de si mesmo, medo de contar. Cuidar desse lado é tão importante quanto trocar senhas, e ajuda você a agir melhor.',
      conceito: {
        titulo: 'A culpa é de quem aplica o golpe, não de quem cai',
        texto: 'Golpistas são profissionais: estudam a manipulação, usam pressa, medo, afeto e autoridade pra desligar o pensamento crítico de qualquer pessoa — inclusive de gente experiente e cuidadosa. Cair não é sinal de burrice nem de fraqueza; é sinal de que você encontrou um criminoso habilidoso. A vergonha que você sente é, ironicamente, uma ferramenta do golpe: é ela que faz a vítima se calar, não avisar ninguém, não registrar, não buscar ajuda — exatamente o que o golpista quer. Por isso, lidar com a emoção é parte da resposta: nomeie o que sente sem se julgar; lembre que a culpa é de quem enganou; fale com alguém de confiança (dividir alivia e ajuda a agir); e, se o baque for grande, não hesite em buscar apoio. Tratar-se com a mesma gentileza que você daria a um amigo na mesma situação é o que devolve a clareza pra cuidar do resto. Você foi vítima de um crime — e vítimas merecem cuidado, não vergonha.',
      },
      estrutura: {
        titulo: 'Cuidar do baque emocional',
        partes: [
          { simbolo: '💔', desc: 'Reconheça: golpe machuca a autoestima, não só o bolso.' },
          { simbolo: '🚫', desc: 'A culpa é de quem engana — você foi vítima de um crime.' },
          { simbolo: '🤐', desc: 'A vergonha é ferramenta do golpe: não deixe ela te calar.' },
          { simbolo: '🫂', desc: 'Fale com alguém de confiança; busque apoio se precisar.' },
        ],
      },
      exemplo: {
        titulo: 'Tratar-se como trataria um amigo',
        celulas: [
          { ref: 'Sentimento', valor: 'Vergonha, raiva de si, medo de contar' },
          { ref: 'Verdade', valor: 'Golpistas enganam até os mais cuidadosos' },
          { ref: 'Cuidado', valor: 'Nomear o que sente, sem se julgar' },
          { ref: 'Apoio', valor: 'Falar com alguém de confiança alivia e ajuda a agir' },
        ],
        formula: 'Sem autojulgamento + culpa no lugar certo + falar = clareza de volta',
        resultado: 'Você cuida da emoção pra cuidar melhor do resto.',
        comentario: 'O mesmo silêncio envergonhado que dói em você é o que protege o golpista. Falar e se acolher não é só alívio pessoal — é o que destrava as ações que reduzem o prejuízo.',
      },
      vocabulario: [
        { palavra: 'Autocompaixão', def: 'Tratar-se com a gentileza que daria a um amigo.' },
        { palavra: 'Vítima de crime', def: 'O que você é — merecedor de cuidado, não de vergonha.' },
        { palavra: 'Dividir o peso', def: 'Falar com alguém de confiança alivia e ajuda a agir.' },
      ],
      chave: [
        'Golpistas enganam até pessoas experientes — cair não é burrice',
        'A culpa é de quem aplica o golpe; você foi vítima de um crime',
        'A vergonha cala a vítima — falar e se acolher destrava a ação',
      ],
      porque: 'O baque emocional de um golpe pode paralisar e silenciar a vítima — bem o que o golpista quer. Reconhecer que a culpa é de quem engana e buscar apoio devolve a clareza necessária pra agir e se recuperar.',
    },
    pratica: {
      instrucao: 'Cuide do lado emocional depois de um golpe.',
      passos: [
        'Reconheça que o golpe machucou também sua autoestima',
        'Lembre que a culpa é de quem engana — você foi vítima',
        'Perceba que a vergonha é ferramenta do golpe',
        'Fale com alguém de confiança pra dividir o peso',
        'Trate-se com a gentileza que daria a um amigo',
      ],
    },
    desafio: {
      cenario: 'Você cuida do baque emocional e não deixa a vergonha te paralisar.',
      requisitos: [
        'Reconheço que o golpe abala a autoestima',
        'Coloco a culpa em quem aplicou o golpe',
        'Entendo a vergonha como ferramenta do golpe',
        'Falo com alguém de confiança',
        'Trato-me com gentileza',
      ],
      dica: 'Se a angústia for grande ou persistente, procurar apoio — de pessoas próximas ou de profissionais — é um sinal de força, não de fraqueza. Você não precisa carregar isso sozinho.',
    },
    validacao: [
      'Reconheço o abalo',
      'Culpa em quem engana',
      'Vergonha é ferramenta',
      'Falo com alguém',
      'Trato-me com gentileza',
    ],
  },

  'sec-resposta-9': {
    trilhaId: 'sec-resposta', numero: 9, titulo: 'Projeto: meu plano de resposta a golpes',
    tempoTotal: 18, xp: 120, vertente: 'ambos',
    aula: {
      gancho: 'Hora de transformar tudo num plano pronto pra usar — um roteiro que você (ou quem você ama) consegue seguir no susto, sem precisar pensar do zero. Este é o fechamento do módulo de Segurança: do reconhecer ao reagir.',
      conceito: {
        titulo: 'Um plano escrito transforma pânico em passos no momento do golpe',
        texto: 'Seu "plano de resposta a golpes" reúne a trilha num roteiro acionável. Os primeiros minutos: parar o contato, identificar o que foi atingido (dinheiro, senha ou conta), agir na fonte e registrar tudo. Se mexeram no dinheiro: banco já pelo canal oficial, contestação (MED no PIX, compra não reconhecida no cartão), protocolo de tudo, e cuidado com o golpe do ressarcimento. Se vazou senha: trocar a exposta e as iguais, e-mail primeiro, ativar 2FA. Se invadiram conta: recuperar pelo oficial, 2FA, desconectar sessões, avisar contatos. Registrar: BO e denúncia na plataforma, com as provas guardadas. Avisar quem pode ser atingido por outro canal. Depois: monitorar extratos e o nome, reforçar defesas, aprender com o ocorrido. E o tempo todo: a culpa é de quem engana — buscar ajuda é força. Deixe esse plano anotado num lugar de fácil acesso, com os telefones oficiais do seu banco. Com ele em mãos, o susto vira ação — pra você e pra quem você ama.',
      },
      estrutura: {
        titulo: 'O plano de resposta a golpes',
        partes: [
          { simbolo: '✋', desc: 'Primeiros minutos: parar, identificar, agir na fonte, registrar.' },
          { simbolo: '💸', desc: 'Dinheiro/senha/conta: banco, trocar senha, recuperar acesso.' },
          { simbolo: '📣', desc: 'Registrar (BO/plataforma) e avisar quem pode ser atingido.' },
          { simbolo: '🫂', desc: 'Monitorar, reforçar defesas, e a culpa é de quem engana.' },
        ],
      },
      exemplo: {
        titulo: 'Do susto à ação, com um roteiro pronto',
        celulas: [
          { ref: 'Minuto 1', valor: 'Parar, identificar (dinheiro/senha/conta), agir na fonte' },
          { ref: 'Conter', valor: 'Banco/contestação, trocar senhas, recuperar conta' },
          { ref: 'Formalizar', valor: 'BO + denúncia + avisar contatos por outro canal' },
          { ref: 'Cuidar', valor: 'Monitorar, reforçar defesas, buscar apoio sem vergonha' },
        ],
        formula: 'Conter + formalizar + avisar + cuidar = plano de resposta completo',
        resultado: 'Você tem um roteiro pronto pra agir no susto.',
        comentario: 'Um plano escrito vale ouro no momento do pânico, quando ninguém pensa direito. Deixá-lo acessível — e compartilhá-lo com a família — protege você e quem você ama de uma vez.',
      },
      vocabulario: [
        { palavra: 'Plano de resposta', def: 'Roteiro escrito pra seguir no susto de um golpe.' },
        { palavra: 'Conter-formalizar-cuidar', def: 'As três frentes da resposta a um golpe.' },
        { palavra: 'Plano acessível', def: 'Anotado em lugar fácil, com telefones oficiais do banco.' },
      ],
      chave: [
        'O plano reúne conter, formalizar, avisar e cuidar num roteiro',
        'Deixe-o anotado e acessível, com os telefones oficiais do banco',
        'A culpa é de quem engana — buscar ajuda é força, não fraqueza',
      ],
      porque: 'Este projeto fecha o módulo de Segurança com um plano acionável. Tendo conter, formalizar, avisar e cuidar num roteiro acessível, você (e sua família) transforma o pânico de um golpe em passos claros que reduzem o estrago.',
    },
    pratica: {
      instrucao: 'Monte seu plano de resposta a golpes.',
      passos: [
        'Escreva os primeiros minutos: parar, identificar, agir, registrar',
        'Liste o que fazer com dinheiro, senha e conta invadida',
        'Inclua como registrar (BO/plataforma) e avisar contatos',
        'Acrescente monitorar, reforçar defesas e buscar apoio',
        'Anote os telefones oficiais do seu banco no plano',
        'Deixe o plano acessível e compartilhe com a família',
      ],
    },
    desafio: {
      cenario: 'Você tem um plano de resposta a golpes pronto pra usar no susto.',
      requisitos: [
        'Tenho os primeiros minutos mapeados',
        'Sei agir com dinheiro, senha e conta invadida',
        'Incluí registrar e avisar contatos',
        'Incluí monitorar e reforçar defesas',
        'Deixei o plano acessível, com telefones do banco',
      ],
      dica: 'Você concluiu o módulo de Segurança. Junte este plano com as trilhas de PIX, WhatsApp, golpes financeiros, do amor e proteção da família — você agora tem um arsenal completo pra reconhecer, evitar e reagir a golpes.',
    },
    validacao: [
      'Primeiros minutos mapeados',
      'Dinheiro/senha/conta',
      'Registrar e avisar',
      'Monitorar e reforçar',
      'Plano acessível',
    ],
  },
};
