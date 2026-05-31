// ============================================================================
// CONTEÚDO — Proteger Quem a Gente Ama: Família e Idosos (sec-familia)
// módulo Segurança · vertente "ambos"
// Por que idosos são alvo, golpes comuns, combinados de família, configurar
// aparelho de familiar, autonomia, crianças/adolescentes online, controles.
// Autoral, foco no Brasil. Ângulo: proteger os OUTROS, não só a si mesmo.
// ============================================================================

export const SEC_FAMILIA = {
  'sec-familia-1': {
    trilhaId: 'sec-familia', numero: 1, titulo: 'Por que golpistas miram idosos (e como ajudar sem assustar)',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Talvez você já tenha visto um pai, uma avó ou um tio quase caírem (ou caírem) num golpe. Não é falta de inteligência — golpistas escolhem os mais velhos de propósito. Entender o porquê é o primeiro passo pra ajudar de verdade.',
      conceito: {
        titulo: 'Os mais velhos são alvo por razões que dá pra contornar',
        texto: 'Golpistas miram pessoas idosas porque, em média, encontram alguns fatores a favor: menos familiaridade com as armadilhas digitais mais novas, mais educação e confiança no trato (custa acreditar que alguém mentiria com tanta naturalidade), às vezes solidão (que faz uma ligação "atenciosa" funcionar), e a possibilidade de terem economias ou aposentadoria. Nada disso é culpa de quem é vítima — é uma escolha fria do criminoso. A boa notícia: cada um desses fatores tem antídoto. Conhecimento dos golpes, combinados simples de família e uma rede de apoio onde dá pra "ligar e perguntar" derrubam a vantagem do golpista. E o tom de quem ajuda importa: assustar afasta; acolher e equipar aproxima.',
      },
      estrutura: {
        titulo: 'Por que são alvo — e o antídoto',
        partes: [
          { simbolo: '🆕', desc: 'Menos contato com golpes novos → conhecimento e exemplos.' },
          { simbolo: '🤝', desc: 'Mais confiança no trato → combinados de "confirmar sempre".' },
          { simbolo: '💛', desc: 'Solidão → rede de apoio pra "ligar e perguntar".' },
          { simbolo: '💰', desc: 'Economias/aposentadoria → cuidado redobrado com dinheiro.' },
        ],
      },
      exemplo: {
        titulo: 'O tom de quem ajuda',
        celulas: [
          { ref: 'Assusta', valor: '"O senhor vai ser roubado, não entende nada disso!"' },
          { ref: 'Acolhe', valor: '"Tem golpe esperto demais; vamos combinar uns truques?"' },
          { ref: 'Resultado do medo', valor: 'A pessoa esconde quando algo dá errado' },
          { ref: 'Resultado do apoio', valor: 'A pessoa liga e pergunta antes de agir' },
        ],
        formula: 'Entender o porquê + acolher = ajuda que funciona',
        resultado: 'Você protege quem ama sem ferir a autonomia dela.',
        comentario: 'Quem é tratado como incapaz esconde os erros por vergonha — e é aí que o golpe se consuma. Quem se sente acolhido pede ajuda a tempo. O objetivo é virar o "porto seguro", não o fiscal.',
      },
      vocabulario: [
        { palavra: 'Alvo preferencial', def: 'Grupo que golpistas escolhem por achar mais vulnerável.' },
        { palavra: 'Rede de apoio', def: 'Pessoas de confiança a quem recorrer antes de agir.' },
        { palavra: 'Autonomia', def: 'O direito da pessoa de decidir sobre a própria vida.' },
      ],
      chave: [
        'Idosos são alvo por escolha do golpista, não por culpa própria',
        'Cada fator de risco tem antídoto: conhecimento, combinados, apoio',
        'Acolher equipa; assustar faz esconder os erros',
      ],
      porque: 'Entender por que os mais velhos são visados transforma a forma de ajudar: em vez de assustar ou infantilizar, você equipa a pessoa com conhecimento e combinados. Esse é o alicerce de toda a trilha de proteção da família.',
    },
    pratica: {
      instrucao: 'Prepare-se pra ajudar um familiar mais velho.',
      passos: [
        'Identifique um familiar que pode estar mais exposto a golpes',
        'Liste os fatores que o tornam alvo (sem julgamento)',
        'Pense no antídoto de cada um (conhecimento, combinados, apoio)',
        'Planeje uma conversa acolhedora, não assustadora',
        'Posicione-se como porto seguro: "pode me ligar e perguntar"',
      ],
    },
    desafio: {
      cenario: 'Você entende por que idosos são alvo e se prepara pra ajudar com acolhimento.',
      requisitos: [
        'Sei que idosos são alvo por escolha do golpista',
        'Não culpo nem infantilizo a vítima',
        'Conheço o antídoto de cada fator de risco',
        'Planejo uma abordagem acolhedora',
        'Me ofereço como porto seguro pra perguntas',
      ],
      dica: 'A frase mais poderosa que você pode deixar com um familiar é: "Na dúvida, desligue e me ligue. Nunca vou achar ruim." Isso cria a brecha de tempo que todo golpe tenta tirar.',
    },
    validacao: [
      'Sei por que idosos são alvo',
      'Não culpo a vítima',
      'Conheço os antídotos',
      'Planejo abordagem acolhedora',
      'Sou porto seguro pra dúvidas',
    ],
  },

  'sec-familia-2': {
    trilhaId: 'sec-familia', numero: 2, titulo: 'Os golpes que mais atingem os mais velhos',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Conhecer os golpes mais comuns pelo nome e pelo roteiro é como ter um mapa das armadilhas. Quando você reconhece o padrão, o golpe perde metade da força — e você consegue avisar a família com exemplos concretos.',
      conceito: {
        titulo: 'Poucos roteiros se repetem na maioria dos golpes',
        texto: 'A maioria dos golpes contra idosos segue alguns roteiros conhecidos: o falso parente ("oi, mudei de número, preciso de uma transferência"); a falsa central do banco ("identificamos uma compra suspeita, vamos te ajudar a cancelar"); o falso prêmio ou benefício ("o senhor ganhou, só pague uma taxa"); o golpe do falso suporte ("seu aparelho está infectado, me dê acesso"); e o falso romance (alguém que se aproxima por afeto e depois pede dinheiro). Todos têm em comum: criam urgência ou emoção, pedem dinheiro, dados ou acesso, e tentam impedir que você confirme com outra pessoa. Reconhecer esse esqueleto comum vale mais que decorar cada variação — porque o roteiro se repete mesmo quando os detalhes mudam.',
      },
      estrutura: {
        titulo: 'Os roteiros que se repetem',
        partes: [
          { simbolo: '👨‍👧', desc: 'Falso parente: "mudei de número, preciso de dinheiro".' },
          { simbolo: '🏦', desc: 'Falsa central do banco: "compra suspeita, vamos cancelar".' },
          { simbolo: '🎁', desc: 'Falso prêmio/benefício: "ganhou, só pague a taxa".' },
          { simbolo: '🛟', desc: 'Falso suporte/romance: pedem acesso, dados ou afeto + dinheiro.' },
        ],
      },
      exemplo: {
        titulo: 'O esqueleto comum a todos',
        celulas: [
          { ref: '1. Gatilho', valor: 'Urgência ou emoção forte' },
          { ref: '2. Pedido', valor: 'Dinheiro, dados ou acesso ao aparelho' },
          { ref: '3. Isolamento', valor: 'Tentam impedir você de confirmar com alguém' },
          { ref: 'Defesa', valor: 'Reconhecer o roteiro e parar pra confirmar' },
        ],
        formula: 'Urgência + pedido de dinheiro/dados + "não conte a ninguém" = golpe',
        resultado: 'Você reconhece o padrão mesmo em golpes novos.',
        comentario: 'O pedido de "não conta pra ninguém" ou "fica só entre nós" é quase uma assinatura de golpe. Gente honesta não tem medo de você confirmar a história com outra pessoa.',
      },
      vocabulario: [
        { palavra: 'Roteiro do golpe', def: 'A sequência típica que o golpista segue.' },
        { palavra: 'Gatilho emocional', def: 'Medo, urgência ou afeto usados pra anular a razão.' },
        { palavra: 'Isolamento', def: 'Tática de impedir a vítima de pedir uma segunda opinião.' },
      ],
      chave: [
        'A maioria dos golpes segue poucos roteiros conhecidos',
        'Todos criam urgência/emoção e pedem dinheiro, dados ou acesso',
        '"Não conte a ninguém" é quase assinatura de golpe',
      ],
      porque: 'Conhecer os roteiros comuns dá à família um repertório de exemplos concretos. Reconhecer o esqueleto — urgência, pedido, isolamento — protege contra golpes que ainda nem existem, porque o padrão é sempre o mesmo.',
    },
    pratica: {
      instrucao: 'Aprenda a reconhecer os roteiros mais comuns.',
      passos: [
        'Liste os golpes do dia a dia: falso parente, falsa central, prêmio',
        'Em cada um, ache o gatilho (urgência ou emoção)',
        'Identifique o que pedem (dinheiro, dados, acesso)',
        'Note a tentativa de isolamento ("não conte a ninguém")',
        'Memorize o esqueleto comum a todos eles',
      ],
    },
    desafio: {
      cenario: 'Você reconhece os roteiros comuns de golpe e o esqueleto que se repete em todos.',
      requisitos: [
        'Conheço os golpes mais comuns por nome e roteiro',
        'Identifico o gatilho emocional de cada um',
        'Sei o que cada golpe costuma pedir',
        'Reconheço a tentativa de isolamento',
        'Memorizei o esqueleto comum',
      ],
      dica: 'Compartilhe esses roteiros com a família em forma de história: "Sabe o golpe que liga fingindo ser do banco? Olha como funciona..." Exemplos contados ficam mais que regras decoradas.',
    },
    validacao: [
      'Conheço os golpes comuns',
      'Identifico o gatilho',
      'Sei o que pedem',
      'Reconheço o isolamento',
      'Memorizei o esqueleto',
    ],
  },

  'sec-familia-3': {
    trilhaId: 'sec-familia', numero: 3, titulo: 'Falso parente e falsa central: ajudando a reconhecer',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Os dois golpes que mais pegam famílias são o "falso parente" e a "falsa central do banco". Saber exatamente como eles funcionam — e ensinar isso a quem você ama — evita prejuízos enormes e sustos.',
      conceito: {
        titulo: 'Dois roteiros, a mesma defesa: parar e confirmar pelo canal certo',
        texto: 'No falso parente, alguém manda mensagem (geralmente por WhatsApp) dizendo ser um filho ou neto que "trocou de número" e precisa de uma transferência urgente. Na falsa central, ligam dizendo ser do banco, alegam uma "compra suspeita" e conduzem a vítima a transferir dinheiro "pra uma conta segura" ou a instalar algo. Em ambos, a defesa é a mesma e é simples de ensinar: pare e confirme pelo canal verdadeiro. Para o falso parente, ligue para o número antigo e conhecido do familiar (não responda só pelo novo). Para a falsa central, desligue e ligue você mesmo para o número oficial do banco (o do cartão ou do app). Banco de verdade nunca pede pra você transferir pra "conta segura" nem instala programas no seu aparelho por telefone. Confirmar pelo canal certo desmonta os dois.',
      },
      estrutura: {
        titulo: 'A defesa dos dois golpes',
        partes: [
          { simbolo: '📞', desc: 'Falso parente: ligue pro número ANTIGO e conhecido.' },
          { simbolo: '🏦', desc: 'Falsa central: desligue e ligue VOCÊ ao número oficial.' },
          { simbolo: '🚫', desc: 'Banco nunca pede transferir pra "conta segura".' },
          { simbolo: '⏸️', desc: 'A regra de ouro: parar e confirmar pelo canal certo.' },
        ],
      },
      exemplo: {
        titulo: '"Oi mãe, mudei de número"',
        celulas: [
          { ref: 'Chega', valor: 'Mensagem de número novo pedindo transferência urgente' },
          { ref: 'Reação ruim', valor: 'Transferir na hora pelo número novo' },
          { ref: 'Reação certa', valor: 'Ligar pro número ANTIGO do filho e confirmar' },
          { ref: 'Quase sempre', valor: 'O filho atende e nunca pediu nada' },
        ],
        formula: 'Confirmar pelo canal verdadeiro > responder ao canal do golpe',
        resultado: 'O golpe cai no momento em que você confirma com a pessoa real.',
        comentario: 'O golpista conta com a emoção e a pressa pra você não conferir. Uma ligação de 30 segundos pro número que você já tem salvo encerra o golpe — sempre.',
      },
      vocabulario: [
        { palavra: 'Falso parente', def: 'Golpe em que alguém finge ser familiar com "número novo".' },
        { palavra: 'Falsa central', def: 'Ligação fingindo ser do banco pra induzir transferência.' },
        { palavra: 'Conta segura', def: 'Termo falso: banco nunca manda transferir pra uma.' },
      ],
      chave: [
        'Falso parente e falsa central são os golpes que mais pegam famílias',
        'A defesa é a mesma: parar e confirmar pelo canal verdadeiro',
        'Banco nunca pede transferência pra "conta segura"',
      ],
      porque: 'Esses dois golpes causam os maiores prejuízos a famílias. Ensinar a defesa — parar e confirmar pelo canal verdadeiro — protege contra ambos com uma única regra fácil de lembrar e de repassar a quem você ama.',
    },
    pratica: {
      instrucao: 'Prepare a família contra os dois golpes campeões.',
      passos: [
        'Ensine: número novo pedindo dinheiro = confirmar pelo número antigo',
        'Ensine: "central do banco" = desligar e ligar ao número oficial',
        'Reforce que banco nunca pede transferir pra "conta segura"',
        'Combine a regra de ouro: parar e confirmar pelo canal certo',
        'Deixe os números oficiais salvos no aparelho do familiar',
      ],
    },
    desafio: {
      cenario: 'Você ensina a família a reconhecer e parar o falso parente e a falsa central.',
      requisitos: [
        'Sei como funciona o golpe do falso parente',
        'Sei como funciona a falsa central do banco',
        'Ensino a confirmar pelo canal verdadeiro',
        'Reforço que banco não pede "conta segura"',
        'Deixo os números oficiais salvos',
      ],
      dica: 'Salve no celular do familiar o número oficial do banco com um nome claro, tipo "BANCO OFICIAL — ligar eu mesmo". Assim, na hora do susto, ele tem o canal certo à mão.',
    },
    validacao: [
      'Sei o golpe do falso parente',
      'Sei a falsa central',
      'Ensino a confirmar pelo canal certo',
      'Banco não pede "conta segura"',
      'Números oficiais salvos',
    ],
  },

  'sec-familia-4': {
    trilhaId: 'sec-familia', numero: 4, titulo: 'Combinados de família: senha de segurança e "ligo de volta"',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Algumas combinações simples, feitas em família com antecedência, viram uma blindagem coletiva contra golpes. São acordos que qualquer parente entende e que funcionam na hora do aperto.',
      conceito: {
        titulo: 'Acordos de família combinados ANTES protegem todo mundo',
        texto: 'Golpes exploram a surpresa. Combinados feitos com calma, antes de qualquer susto, tiram essa vantagem. Três que funcionam muito bem: (1) uma "senha de segurança" da família — uma palavra ou pergunta que só vocês sabem, usada pra confirmar identidade quando alguém pede algo urgente por mensagem ou telefone; (2) a regra do "eu ligo de volta" — diante de qualquer pedido de dinheiro ou dados, a pessoa desliga e liga pro número conhecido antes de agir; (3) o combinado de "sempre posso perguntar" — ninguém será julgado por confirmar uma história com a família. Esses acordos são simples, mas mudam o jogo: transformam a família numa rede de verificação onde nenhum pedido urgente é atendido sem checagem.',
      },
      estrutura: {
        titulo: 'Três combinados que blindam a família',
        partes: [
          { simbolo: '🔑', desc: 'Senha de segurança: palavra que só a família sabe.' },
          { simbolo: '📞', desc: '"Eu ligo de volta": confirmar pelo número conhecido antes de agir.' },
          { simbolo: '🙋', desc: '"Sempre posso perguntar": ninguém é julgado por confirmar.' },
          { simbolo: '🗓️', desc: 'Combinar ANTES, com calma — não no susto.' },
        ],
      },
      exemplo: {
        titulo: 'A senha de segurança em ação',
        celulas: [
          { ref: 'Pedido suspeito', valor: '"Mãe, me manda dinheiro, é urgente!"' },
          { ref: 'Pergunta-chave', valor: '"Qual é a nossa palavra de segurança?"' },
          { ref: 'Golpista', valor: 'Não sabe — a história desmonta' },
          { ref: 'Familiar real', valor: 'Sabe na hora — confirma de verdade' },
        ],
        formula: 'Combinados antes do susto = família vira rede de verificação',
        resultado: 'Nenhum pedido urgente passa sem checagem.',
        comentario: 'A senha de segurança é poderosa contra golpes que usam até voz ou vídeo imitados: a tecnologia pode falsificar o rosto e a voz, mas não sabe a palavra que vocês combinaram em casa.',
      },
      vocabulario: [
        { palavra: 'Senha de segurança da família', def: 'Palavra/pergunta secreta pra confirmar identidade.' },
        { palavra: '"Eu ligo de volta"', def: 'Regra de confirmar pelo número conhecido antes de agir.' },
        { palavra: 'Rede de verificação', def: 'Família combinada pra checar pedidos urgentes.' },
      ],
      chave: [
        'Combinados feitos antes do susto tiram a vantagem do golpista',
        'Senha de segurança, "eu ligo de volta" e "sempre posso perguntar"',
        'A senha secreta resiste até a voz e vídeo imitados',
      ],
      porque: 'Combinados de família são a defesa coletiva mais barata e eficaz contra golpes. Feitos com calma, transformam a família numa rede de verificação onde a surpresa — a arma número um do golpista — deixa de funcionar.',
    },
    pratica: {
      instrucao: 'Crie os combinados de segurança da sua família.',
      passos: [
        'Combine uma senha/pergunta de segurança que só a família saiba',
        'Estabeleça a regra "eu ligo de volta" antes de qualquer pedido',
        'Firme que ninguém será julgado por confirmar uma história',
        'Faça esses combinados com calma, num momento tranquilo',
        'Revise os combinados de vez em quando com todos',
      ],
    },
    desafio: {
      cenario: 'Sua família tem combinados de segurança que blindam contra pedidos urgentes falsos.',
      requisitos: [
        'Temos uma senha de segurança da família',
        'Adotamos a regra "eu ligo de volta"',
        'Combinamos que "sempre posso perguntar"',
        'Fizemos os combinados com calma, não no susto',
        'Revisamos os combinados periodicamente',
      ],
      dica: 'Escolha uma senha fácil de lembrar mas difícil de adivinhar — nada óbvio como o nome do cachorro que está nas redes. Uma pergunta sobre uma memória só da família funciona muito bem.',
    },
    validacao: [
      'Temos senha de segurança',
      'Adotamos "eu ligo de volta"',
      '"Sempre posso perguntar"',
      'Combinamos com calma',
      'Revisamos os combinados',
    ],
  },

  'sec-familia-5': {
    trilhaId: 'sec-familia', numero: 5, titulo: 'Configurar o aparelho de um familiar com segurança',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Sentar com um familiar e deixar o aparelho dele mais seguro é um presente que dura. Com um roteiro de ajustes, em meia hora você reduz muito o risco de golpe e de perda de dados — sem deixar o aparelho complicado de usar.',
      conceito: {
        titulo: 'Um roteiro de ajustes deixa o aparelho seguro sem complicar',
        texto: 'Ajude um familiar configurando o essencial: bloqueio de tela com PIN ou biometria; atualizações automáticas ligadas; backup automático na nuvem (pra nunca perder fotos e contatos); a função de localizar/bloquear/apagar à distância ativada; e, no banco e apps importantes, a verificação em duas etapas. Salve os números oficiais (banco, você mesmo) com nomes claros. O segredo é equilibrar segurança e facilidade: não encha o aparelho de senhas que a pessoa vá esquecer nem de apps que ela não entenda. Configure o que protege em silêncio (atualização, backup, localização) e ensine só o que ela precisa usar no dia a dia. Deixe combinado que você pode ajudar de novo quando precisar.',
      },
      estrutura: {
        titulo: 'Roteiro de configuração segura',
        partes: [
          { simbolo: '🔒', desc: 'Bloqueio de tela + atualizações automáticas.' },
          { simbolo: '☁️', desc: 'Backup automático na nuvem (fotos, contatos).' },
          { simbolo: '📍', desc: 'Localizar/bloquear/apagar à distância ativado.' },
          { simbolo: '⚖️', desc: 'Equilíbrio: proteger em silêncio, sem complicar o uso.' },
        ],
      },
      exemplo: {
        titulo: 'Proteger sem atrapalhar',
        celulas: [
          { ref: 'Em silêncio', valor: 'Atualização, backup, localização — ligados e esquecidos' },
          { ref: 'Ensine o básico', valor: 'Como desbloquear, ligar pra você, conferir golpe' },
          { ref: 'Evite', valor: 'Encher de senhas e apps que a pessoa não entende' },
          { ref: 'Combine', valor: '"Me chama que a gente ajusta de novo"' },
        ],
        formula: 'Proteger em silêncio + ensinar o essencial = seguro e fácil',
        resultado: 'O aparelho fica seguro sem virar um quebra-cabeça.',
        comentario: 'Segurança que atrapalha demais acaba desligada. O melhor ajuste é o que a pessoa nem percebe que está lá protegendo — e que não a impede de usar o aparelho com tranquilidade.',
      },
      vocabulario: [
        { palavra: 'Backup automático', def: 'Cópia de segurança que acontece sozinha na nuvem.' },
        { palavra: 'Localizar à distância', def: 'Achar, bloquear ou apagar o aparelho remotamente.' },
        { palavra: 'Verificação em duas etapas', def: 'Segunda confirmação além da senha no login.' },
      ],
      chave: [
        'Configure bloqueio, atualização, backup, localização e 2FA',
        'Equilibre segurança e facilidade — sem complicar o uso',
        'Proteja em silêncio e ensine só o essencial do dia a dia',
      ],
      porque: 'Configurar o aparelho de um familiar com um bom roteiro reduz drasticamente o risco de golpe e perda de dados. Equilibrando proteção e facilidade, você entrega segurança real sem tornar o aparelho difícil — para que os ajustes permaneçam ligados.',
    },
    pratica: {
      instrucao: 'Configure com segurança o aparelho de um familiar.',
      passos: [
        'Ative bloqueio de tela e atualizações automáticas',
        'Ligue o backup automático na nuvem',
        'Ative a função de localizar/bloquear/apagar à distância',
        'Ligue a verificação em duas etapas no banco e apps importantes',
        'Salve os números oficiais com nomes claros',
        'Ensine só o essencial e combine ajudar de novo quando precisar',
      ],
    },
    desafio: {
      cenario: 'Você deixa o aparelho de um familiar seguro e ainda fácil de usar.',
      requisitos: [
        'Ativei bloqueio, atualização e backup',
        'Liguei a localização à distância',
        'Ativei 2FA no banco e apps importantes',
        'Salvei os números oficiais com nomes claros',
        'Mantive o aparelho fácil de usar',
      ],
      dica: 'Aproveite pra mostrar onde fica o número que você salvou como "ligar eu mesmo" pro banco. Assim a configuração técnica vira também um combinado prático contra a falsa central.',
    },
    validacao: [
      'Bloqueio, atualização e backup',
      'Localização à distância ativa',
      '2FA no banco e apps',
      'Números oficiais salvos',
      'Aparelho ainda fácil de usar',
    ],
  },

  'sec-familia-6': {
    trilhaId: 'sec-familia', numero: 6, titulo: 'Acompanhar sem invadir: autonomia e dignidade',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Ajudar não é controlar. A linha entre proteger um familiar e tirar a autonomia dele é delicada — e respeitá-la é o que faz a proteção durar, porque uma pessoa que se sente respeitada confia em você e pede ajuda.',
      conceito: {
        titulo: 'A proteção que respeita a pessoa é a que funciona a longo prazo',
        texto: 'É tentador "assumir o controle" do aparelho ou das contas de um familiar mais velho em nome da segurança. Mas tirar a autonomia tem custos: fere a dignidade, gera resistência e faz a pessoa esconder o que faz (inclusive os erros). A proteção sustentável é a que acompanha sem invadir: ofereça ajuda em vez de impor; explique o porquê em vez de só mandar; respeite as escolhas da pessoa mesmo quando você faria diferente; e mantenha a privacidade dela (não bisbilhote mensagens "pra proteger"). O papel ideal é o de apoio disponível: alguém a quem recorrer, não alguém que vigia. Quando a pessoa se sente respeitada e capaz, ela aceita os cuidados e te procura nas dúvidas — que é exatamente o que evita golpes.',
      },
      estrutura: {
        titulo: 'Acompanhar sem invadir',
        partes: [
          { simbolo: '🤲', desc: 'Ofereça ajuda em vez de impor controle.' },
          { simbolo: '💬', desc: 'Explique o porquê em vez de só dar ordem.' },
          { simbolo: '🪪', desc: 'Respeite as escolhas e a privacidade da pessoa.' },
          { simbolo: '🛟', desc: 'Seja apoio disponível, não vigilante.' },
        ],
      },
      exemplo: {
        titulo: 'Impor x acompanhar',
        celulas: [
          { ref: 'Impor', valor: '"Vou cuidar do seu banco, deixa comigo"' },
          { ref: 'Acompanhar', valor: '"Quer que eu te mostre como conferir junto?"' },
          { ref: 'Custo de impor', valor: 'Resistência e a pessoa escondendo erros' },
          { ref: 'Ganho de acompanhar', valor: 'Confiança e pedidos de ajuda a tempo' },
        ],
        formula: 'Respeito à autonomia = confiança = pede ajuda antes do golpe',
        resultado: 'A proteção dura porque a pessoa a aceita.',
        comentario: 'Vigiar mensagens "pra proteger" costuma sair pela culatra: quebra a confiança e ainda não impede o golpe, que acontece numa ligação ou num momento sozinho. Confiança vale mais que vigilância.',
      },
      vocabulario: [
        { palavra: 'Autonomia', def: 'O direito de decidir sobre a própria vida e aparelho.' },
        { palavra: 'Dignidade', def: 'Ser tratado como capaz e respeitado em suas escolhas.' },
        { palavra: 'Apoio disponível', def: 'Estar à disposição pra ajudar, sem vigiar nem impor.' },
      ],
      chave: [
        'Proteger não é controlar — tirar autonomia tem custos',
        'Ofereça ajuda, explique o porquê, respeite escolhas e privacidade',
        'Seja apoio disponível; confiança protege mais que vigilância',
      ],
      porque: 'A proteção que respeita a autonomia é a única que dura. Quando o familiar se sente capaz e respeitado, ele aceita os cuidados e procura você nas dúvidas — e é justamente esse pedido de ajuda a tempo que desmonta os golpes.',
    },
    pratica: {
      instrucao: 'Ajuste sua forma de ajudar pra respeitar a autonomia.',
      passos: [
        'Ofereça ajuda em vez de assumir o controle',
        'Explique o porquê de cada cuidado, sem só mandar',
        'Respeite as escolhas do familiar, mesmo discordando',
        'Não bisbilhote mensagens "pra proteger"',
        'Posicione-se como apoio disponível, não como vigilante',
      ],
    },
    desafio: {
      cenario: 'Você protege seu familiar respeitando a autonomia e a dignidade dele.',
      requisitos: [
        'Ofereço ajuda em vez de impor controle',
        'Explico o porquê dos cuidados',
        'Respeito as escolhas da pessoa',
        'Respeito a privacidade dela',
        'Sou apoio disponível, não vigilante',
      ],
      dica: 'Se precisar mesmo de mais controle (em casos de saúde, por exemplo), converse abertamente e busque o consentimento da pessoa e, se for o caso, orientação adequada — em vez de agir por trás dela.',
    },
    validacao: [
      'Ofereço ajuda, não imponho',
      'Explico o porquê',
      'Respeito as escolhas',
      'Respeito a privacidade',
      'Sou apoio, não vigilante',
    ],
  },

  'sec-familia-7': {
    trilhaId: 'sec-familia', numero: 7, titulo: 'Crianças e adolescentes online: o outro lado da família',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'A família tem duas pontas pra proteger: os mais velhos e os mais novos. Crianças e adolescentes enfrentam riscos diferentes na internet — e exigem uma proteção que cresce junto com eles.',
      conceito: {
        titulo: 'Os jovens enfrentam riscos próprios — e precisam de diálogo, não só bloqueio',
        texto: 'Crianças e adolescentes lidam com riscos específicos: contato com estranhos que se passam por jovens (aliciamento), exposição a conteúdo impróprio, cyberbullying, pressão por exposição nas redes, e pedidos ou compartilhamento de imagens íntimas (que entre menores é crime e gera danos sérios). A proteção combina ferramentas e, principalmente, diálogo. Controles parentais ajudam nos mais novos, mas filtro nenhum substitui a conversa: o jovem precisa saber que pode contar pra um adulto sem ser punido se algo der errado. Ensine que pessoas mentem sobre quem são online, que o que se publica pode não sair mais, que ninguém deve pedir imagens íntimas, e que recorrer a um adulto é sinal de força, não de fraqueza. A confiança é o filtro mais poderoso.',
      },
      estrutura: {
        titulo: 'Riscos dos mais jovens',
        partes: [
          { simbolo: '🎭', desc: 'Estranhos que mentem sobre quem são (aliciamento).' },
          { simbolo: '😢', desc: 'Cyberbullying e pressão por exposição.' },
          { simbolo: '🔞', desc: 'Conteúdo impróprio e pedidos de imagens íntimas (crime entre menores).' },
          { simbolo: '💬', desc: 'A defesa principal: diálogo aberto, sem punir quem conta.' },
        ],
      },
      exemplo: {
        titulo: 'A conversa que protege',
        celulas: [
          { ref: 'Ensine', valor: 'Pessoas mentem sobre quem são na internet' },
          { ref: 'Ensine', valor: 'Ninguém deve te pedir imagens íntimas — conte a um adulto' },
          { ref: 'Garanta', valor: '"Se algo der errado, me conta; não vou te punir"' },
          { ref: 'Resultado', valor: 'O jovem recorre a você antes de o problema crescer' },
        ],
        formula: 'Ferramentas + diálogo sem punição = proteção que cresce com o jovem',
        resultado: 'O adolescente confia e pede ajuda a tempo.',
        comentario: 'O medo de punição é o que faz um jovem esconder um problema até ele virar uma crise. Garantir que ele pode contar sem ser castigado é o que transforma você no primeiro a saber — e a poder ajudar.',
      },
      vocabulario: [
        { palavra: 'Aliciamento', def: 'Adulto que se aproxima de menor online fingindo ser amigo/jovem.' },
        { palavra: 'Cyberbullying', def: 'Agressão e humilhação repetidas pela internet.' },
        { palavra: 'Imagem íntima de menor', def: 'Pedir/compartilhar é crime grave; sempre recorrer a um adulto.' },
      ],
      chave: [
        'Jovens enfrentam riscos próprios: aliciamento, bullying, imagens íntimas',
        'Ferramentas ajudam, mas o diálogo aberto é a defesa principal',
        'Garanta que contar nunca leva a punição — a confiança é o filtro',
      ],
      porque: 'Proteger os mais jovens exige entender os riscos próprios deles e priorizar o diálogo sobre o bloqueio. Quando a criança ou o adolescente sabe que pode contar sem medo, recorre a um adulto a tempo — a proteção mais eficaz que existe.',
    },
    pratica: {
      instrucao: 'Prepare a conversa de segurança com os mais jovens da família.',
      passos: [
        'Ensine que pessoas mentem sobre quem são online',
        'Ensine que ninguém deve pedir imagens íntimas',
        'Explique que o que se publica pode não sair mais',
        'Garanta que contar um problema nunca leva a punição',
        'Combine que recorrer a um adulto é sinal de força',
      ],
    },
    desafio: {
      cenario: 'Você protege os mais jovens da família com ferramentas e, sobretudo, diálogo.',
      requisitos: [
        'Conheço os riscos próprios de crianças e adolescentes',
        'Uso controles parentais nos mais novos quando cabe',
        'Priorizo o diálogo aberto sobre o bloqueio',
        'Garanto que contar não leva a punição',
        'Ensino que pedir ajuda é sinal de força',
      ],
      dica: 'Em casos de aliciamento, ameaça ou compartilhamento de imagens de menores, além de acolher o jovem, procure os canais de proteção à criança e ao adolescente e a polícia — são crimes que devem ser denunciados.',
    },
    validacao: [
      'Conheço os riscos dos jovens',
      'Uso controles quando cabe',
      'Priorizo o diálogo',
      'Contar não leva a punição',
      'Pedir ajuda é força',
    ],
  },

  'sec-familia-8': {
    trilhaId: 'sec-familia', numero: 8, titulo: 'Controles parentais e conversas com os jovens',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Controles parentais são ferramentas úteis — mas funcionam melhor quando andam de mãos dadas com a conversa e crescem junto com a idade. Saber dosá-los evita tanto o excesso quanto a falta.',
      conceito: {
        titulo: 'Controles ajudam quando combinam com diálogo e idade',
        texto: 'Controles parentais permitem limitar tempo de tela, filtrar conteúdo, aprovar instalações e acompanhar o uso — especialmente úteis com crianças menores. Mas têm limites: podem ser contornados por adolescentes habilidosos, não substituem o senso crítico, e, se usados como vigilância pura, minam a confiança. A boa prática é combiná-los com conversa e ajustá-los à idade: mais estrutura quando a criança é pequena, mais autonomia e diálogo à medida que cresce, com a meta de formar um jovem que se cuida sozinho. Seja transparente sobre os controles em vez de espionar escondido — o objetivo é educar, não pegar no pulo. Controle sem conversa vira gato e rato; conversa com controle adequado forma autonomia segura.',
      },
      estrutura: {
        titulo: 'Usando controles com equilíbrio',
        partes: [
          { simbolo: '⏱️', desc: 'Limitam tempo, filtram conteúdo, aprovam instalações.' },
          { simbolo: '📈', desc: 'Ajuste à idade: mais estrutura cedo, mais autonomia depois.' },
          { simbolo: '👀', desc: 'Seja transparente — educar, não espionar escondido.' },
          { simbolo: '🎯', desc: 'Meta: formar um jovem que se cuida sozinho.' },
        ],
      },
      exemplo: {
        titulo: 'Controle que cresce com a criança',
        celulas: [
          { ref: 'Criança pequena', valor: 'Mais filtros, tempo limitado, instalações aprovadas' },
          { ref: 'Adolescente', valor: 'Menos controle, mais diálogo e confiança' },
          { ref: 'Errado', valor: 'Espionar escondido — vira gato e rato' },
          { ref: 'Certo', valor: 'Transparência: "uso isto e é por isto"' },
        ],
        formula: 'Controle + diálogo + ajuste por idade = autonomia segura',
        resultado: 'O jovem aprende a se cuidar, não só a burlar o filtro.',
        comentario: 'Quando o controle é secreto e punitivo, o adolescente foca em driblá-lo. Quando é transparente e conversado, ele entende o motivo — e aos poucos internaliza os cuidados por conta própria.',
      },
      vocabulario: [
        { palavra: 'Controle parental', def: 'Ferramentas pra limitar e acompanhar o uso por menores.' },
        { palavra: 'Tempo de tela', def: 'Quanto tempo o jovem passa nos dispositivos.' },
        { palavra: 'Autonomia segura', def: 'O jovem se cuidando sozinho, meta da educação digital.' },
      ],
      chave: [
        'Controles ajudam, mas não substituem o diálogo nem o senso crítico',
        'Ajuste à idade: mais estrutura cedo, mais autonomia depois',
        'Seja transparente — a meta é formar um jovem que se cuida sozinho',
      ],
      porque: 'Controles parentais bem usados — combinados com diálogo, ajustados à idade e transparentes — protegem sem virar guerra. A meta não é vigiar pra sempre, mas formar gradualmente um jovem capaz de se cuidar com autonomia e segurança.',
    },
    pratica: {
      instrucao: 'Planeje o uso equilibrado de controles parentais.',
      passos: [
        'Defina controles adequados à idade da criança/adolescente',
        'Combine os controles com conversa, não os use isolados',
        'Seja transparente sobre o que está ativado e por quê',
        'Reduza os controles à medida que o jovem amadurece',
        'Mire na autonomia: um jovem que se cuida sozinho',
      ],
    },
    desafio: {
      cenario: 'Você usa controles parentais com equilíbrio, diálogo e transparência.',
      requisitos: [
        'Uso controles adequados à idade',
        'Combino controles com conversa',
        'Sou transparente sobre o que está ativado',
        'Reduzo controles conforme o jovem amadurece',
        'Miro em formar autonomia segura',
      ],
      dica: 'Inclua o jovem na definição das regras quando possível. Regras combinadas juntas são mais respeitadas que regras impostas — e ensinam a negociar limites, uma habilidade pra vida.',
    },
    validacao: [
      'Controles por idade',
      'Combinados com conversa',
      'Transparente sobre eles',
      'Reduzo conforme amadurece',
      'Miro em autonomia segura',
    ],
  },

  'sec-familia-9': {
    trilhaId: 'sec-familia', numero: 9, titulo: 'Projeto: plano de proteção da família',
    tempoTotal: 18, xp: 120, vertente: 'ambos',
    aula: {
      gancho: 'Chegou a hora de juntar tudo num plano de proteção da sua família — dos mais velhos aos mais novos. Um plano simples, combinado com todos, que transforma a família numa rede que se cuida.',
      conceito: {
        titulo: 'Um plano de família reúne pessoas, combinados e ferramentas',
        texto: 'O plano de proteção da família tem três partes. Pessoas: quem é mais exposto (idosos, crianças) e quem é o ponto de apoio pra cada um. Combinados: a senha de segurança, o "eu ligo de volta", o "sempre posso perguntar" e o "conte sem medo de ser punido". Ferramentas: aparelhos dos familiares configurados (bloqueio, backup, localização, 2FA) e controles parentais ajustados à idade. Tudo costurado por um princípio: acolher e equipar, sem assustar nem controlar. Combine o plano numa conversa tranquila, deixe os números oficiais salvos, e marque de revisar de vez em quando. Com isso, a família vira uma rede de verificação e apoio onde golpes têm muito mais dificuldade de entrar.',
      },
      estrutura: {
        titulo: 'As três partes do plano',
        partes: [
          { simbolo: '👨‍👩‍👧‍👦', desc: 'Pessoas: quem é mais exposto e quem é o apoio de cada um.' },
          { simbolo: '🤝', desc: 'Combinados: senha, "ligo de volta", "pode perguntar", "conte sem medo".' },
          { simbolo: '🛠️', desc: 'Ferramentas: aparelhos configurados e controles por idade.' },
          { simbolo: '💛', desc: 'Princípio: acolher e equipar, sem assustar nem controlar.' },
        ],
      },
      exemplo: {
        titulo: 'O plano da família, resumido',
        celulas: [
          { ref: 'Avó', valor: 'Apoio: você · números oficiais salvos · senha de segurança' },
          { ref: 'Filho menor', valor: 'Controles por idade · diálogo · "conte sem medo"' },
          { ref: 'Todos', valor: '"Eu ligo de volta" · "sempre posso perguntar"' },
          { ref: 'Revisão', valor: 'Conversar e ajustar o plano de tempos em tempos' },
        ],
        formula: 'Pessoas + combinados + ferramentas = família que se cuida',
        resultado: 'Sua família vira uma rede de verificação e apoio.',
        comentario: 'O plano não precisa ser um documento formal — pode ser só uma conversa e alguns ajustes nos aparelhos. O que importa é que todos saibam os combinados e sintam que podem recorrer uns aos outros.',
      },
      vocabulario: [
        { palavra: 'Plano de proteção', def: 'Pessoas, combinados e ferramentas que cuidam da família.' },
        { palavra: 'Ponto de apoio', def: 'Quem cada familiar pode procurar nas dúvidas.' },
        { palavra: 'Revisão periódica', def: 'Rever e atualizar o plano de tempos em tempos.' },
      ],
      chave: [
        'O plano reúne pessoas, combinados e ferramentas',
        'O princípio é acolher e equipar, sem assustar nem controlar',
        'A família vira uma rede de verificação e apoio',
      ],
      porque: 'Este projeto transforma toda a trilha num plano vivo de proteção da família. Reunindo pessoas, combinados e ferramentas sob o princípio de acolher e equipar, você cria uma rede onde golpes têm muito mais dificuldade — e onde cada um se sente cuidado.',
    },
    pratica: {
      instrucao: 'Monte o plano de proteção da sua família.',
      passos: [
        'Mapeie quem é mais exposto e quem é o apoio de cada um',
        'Combine os acordos: senha, "ligo de volta", "pode perguntar"',
        'Configure os aparelhos dos familiares e os controles por idade',
        'Deixe os números oficiais salvos em cada aparelho',
        'Faça tudo numa conversa tranquila, acolhendo e equipando',
        'Marque de revisar o plano de tempos em tempos',
      ],
    },
    desafio: {
      cenario: 'Sua família tem um plano de proteção que une pessoas, combinados e ferramentas.',
      requisitos: [
        'Mapeei quem é mais exposto e seu apoio',
        'Combinamos os acordos de segurança',
        'Configurei aparelhos e controles por idade',
        'Deixei os números oficiais salvos',
        'Combinei revisar o plano periodicamente',
      ],
      dica: 'Você fechou a trilha de proteção da família. Junte com as outras de segurança: golpes do PIX e do WhatsApp, senhas, privacidade, blindagem do aparelho e redes seguras dão a você o repertório pra proteger a si e a quem ama.',
    },
    validacao: [
      'Mapeei pessoas e apoios',
      'Combinamos os acordos',
      'Aparelhos e controles ajustados',
      'Números oficiais salvos',
      'Combinei revisar o plano',
    ],
  },
};
