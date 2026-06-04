// ============================================================================
// CONTEÚDO — Segurança no Banco e no Cartão (sec-banco)
// módulo Segurança · vertente "ambos"
// Falsa central, phishing bancário, clonagem de cartão, boleto falso,
// cartão virtual, contestação de cobranças. Conteúdo autoral, foco no Brasil.
// ============================================================================

export const SEC_BANCO = {
  'sec-banco-1': {
    trilhaId: 'sec-banco', numero: 1, titulo: 'Como o golpista chega na sua conta',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Sua conta no banco é um cofre — mas a maioria dos roubos não arromba o cofre: convence VOCÊ a abrir a porta. Entender por onde o golpista tenta entrar é o primeiro passo pra fechar todas as frestas.',
      conceito: {
        titulo: 'O elo mais atacado é a confiança, não o sistema',
        texto: 'Os bancos investem pesado em segurança, então o caminho mais fácil do golpista não é "hackear o banco" — é te enganar pra você entregar uma senha, aprovar uma transação ou instalar algo. Os ataques chegam por telefone (falsa central), mensagem (phishing por SMS/e-mail/WhatsApp), cartão (clonagem) e boleto falso. Em todos, o objetivo é fazer você agir por medo ou pressa. A boa notícia: como o ataque depende de você, a sua atenção é a defesa mais forte. Nesta trilha você vai reconhecer cada golpe e blindar conta e cartões.',
      },
      estrutura: {
        titulo: 'As quatro portas de entrada',
        partes: [
          { simbolo: '☎️', desc: 'Telefone: falsa central do banco pedindo senha/transação (vishing).' },
          { simbolo: '🎣', desc: 'Mensagem: SMS/e-mail "atualize sua conta" com link falso (phishing).' },
          { simbolo: '💳', desc: 'Cartão: clonagem, skimming e compras indevidas.' },
          { simbolo: '🧾', desc: 'Boleto: código de barras adulterado que paga o golpista.' },
        ],
      },
      exemplo: {
        titulo: 'O que o banco NUNCA faz',
        celulas: [
          { ref: 'Banco', valor: 'Nunca liga pedindo sua senha completa' },
          { ref: 'Banco', valor: 'Nunca pede pra você "transferir pra conta segura"' },
          { ref: 'Banco', valor: 'Nunca manda link pra "recadastrar" por SMS' },
          { ref: 'Você', valor: 'Na dúvida, desliga e liga no número oficial do cartão' },
        ],
        formula: 'Pediu senha/transação/instalação por contato que chegou = golpe',
        resultado: 'Reconhecendo o que o banco nunca faz, o golpe se revela.',
        comentario: 'Decore esta âncora: nenhum banco pede senha, nem manda transferir dinheiro pra "proteger", nem te apressa. Qualquer um que faça isso está se passando pelo banco.',
      },
      vocabulario: [
        { palavra: 'Vishing', def: 'Golpe por voz/telefone se passando por central do banco.' },
        { palavra: 'Phishing', def: 'Mensagem ou site falso que imita o banco pra roubar dados.' },
        { palavra: 'Conta segura', def: 'Termo falso: golpista pede pra "transferir pra conta segura" e leva tudo.' },
      ],
      chave: [
        'O golpe ataca sua confiança, não o sistema do banco',
        'Há 4 portas: telefone, mensagem, cartão e boleto',
        'Banco nunca pede senha nem transferência "de segurança"',
      ],
      porque: 'Ter o mapa dos ataques e a âncora do "o banco nunca faz isso" te deixa um passo à frente em todas as missões seguintes. É a base que transforma cada golpe específico em algo fácil de reconhecer.',
    },
    pratica: {
      instrucao: 'Fixe a âncora que vale pra trilha inteira.',
      passos: [
        'Liste de cabeça as 4 portas: telefone, mensagem, cartão, boleto',
        'Repita: o banco nunca pede minha senha completa',
        'Repita: o banco nunca pede pra eu "transferir pra conta segura"',
        'Defina: na dúvida, desligo e ligo no número do verso do cartão',
        'Reconheça que pressa e medo são as armas do golpista',
      ],
    },
    desafio: {
      cenario: 'Você sabe as quatro portas de entrada e tem clara a regra do que o banco nunca faz.',
      requisitos: [
        'Sei as 4 portas de entrada do golpe',
        'Sei que o banco nunca pede senha completa',
        'Sei que o banco nunca pede transferência "de segurança"',
        'Sei retornar pelo número oficial na dúvida',
        'Reconheço pressa/medo como sinais de golpe',
      ],
      dica: 'O número oficial está no verso do seu cartão e no app do banco. Salve-o nos contatos. Assim, quando precisar confirmar algo, você liga pra fonte certa em segundos.',
    },
    validacao: [
      'Conheço as 4 portas de entrada',
      'Sei o que o banco nunca faz',
      'Sei retornar pelo canal oficial',
      'Reconheço pressa e medo como armas',
      'Tenho o número oficial salvo',
    ],
  },

  'sec-banco-2': {
    trilhaId: 'sec-banco', numero: 2, titulo: 'App do banco: senha, biometria e o que nunca compartilhar',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'O app do banco é hoje a sua agência no bolso. Bem configurado, ele é muito seguro. Mal cuidado, vira a chave de tudo. Vamos deixar o seu blindado: biometria, senhas separadas e a lista do que jamais se compartilha.',
      conceito: {
        titulo: 'Camadas que só você atravessa',
        texto: 'A segurança do app vem de camadas: biometria (digital/rosto) pra abrir e aprovar, uma senha de 4-6 dígitos que NÃO repete a do celular ou do cartão, e bloqueio de tela do próprio aparelho. A senha do banco, o código do app autenticador e o CVV do cartão são segredos pessoais — nenhum funcionário precisa deles. Ative biometria, use senhas diferentes pra cada coisa e nunca anote a senha do banco em bilhetes ou no bloco de notas do celular. Se o aparelho for roubado, são essas camadas que ganham tempo pra você bloquear tudo.',
      },
      estrutura: {
        titulo: 'Configuração segura do app',
        partes: [
          { simbolo: '👆', desc: 'Ative biometria pra abrir o app e aprovar transações.' },
          { simbolo: '🔢', desc: 'Use senha do banco diferente da do celular e da do cartão.' },
          { simbolo: '🔒', desc: 'Mantenha bloqueio de tela forte no próprio aparelho.' },
          { simbolo: '🤐', desc: 'Senha, código do app e CVV são só seus — ninguém pede.' },
        ],
      },
      exemplo: {
        titulo: 'Segredo x informação comum',
        celulas: [
          { ref: 'Segredo', valor: 'Senha do banco · código do app · CVV do cartão' },
          { ref: 'Nunca', valor: 'Anotar senha no bloco de notas / dizer por telefone' },
          { ref: 'Comum', valor: 'Seu nome, número da agência (não dá acesso sozinho)' },
          { ref: 'Regra', valor: 'Senhas diferentes pra banco, celular e cartão' },
        ],
        formula: 'Biometria + senhas separadas + bloqueio de tela = camadas',
        resultado: 'Mesmo com o celular na mão, o golpista trava nas camadas.',
        comentario: 'Se você tem dificuldade de lembrar senhas diferentes, um gerenciador de senhas (trilha de senhas) resolve. O que não vale é repetir a mesma senha em tudo — uma vaza, todas caem.',
      },
      vocabulario: [
        { palavra: 'Biometria', def: 'Digital ou reconhecimento facial usado pra abrir/aprovar no app.' },
        { palavra: 'CVV', def: 'Código de 3 dígitos no verso do cartão; segredo, nunca compartilhe.' },
        { palavra: 'Bloqueio de tela', def: 'Senha/biometria que tranca o próprio celular.' },
      ],
      chave: [
        'Ative biometria pra abrir e aprovar',
        'Senhas diferentes pra banco, celular e cartão',
        'Senha, código do app e CVV são segredos seus',
      ],
      porque: 'O app concentra seu dinheiro, então blindá-lo com camadas é defesa de altíssimo retorno. Senhas separadas e biometria garantem que, mesmo num roubo de celular, você tenha tempo de reagir.',
    },
    pratica: {
      instrucao: 'Revise as camadas de segurança do seu app do banco.',
      passos: [
        'Confira se a biometria está ativada pra abrir e aprovar',
        'Verifique: a senha do banco é diferente da do celular?',
        'Verifique: a senha do banco é diferente da do cartão?',
        'Confirme que seu celular tem bloqueio de tela forte',
        'Garanta que nenhuma senha está anotada no bloco de notas',
      ],
    },
    desafio: {
      cenario: 'Você tem biometria ativa, senhas separadas e nenhuma senha anotada de forma insegura.',
      requisitos: [
        'Biometria ativada no app',
        'Senha do banco diferente do celular',
        'Senha do banco diferente do cartão',
        'Bloqueio de tela forte no aparelho',
        'Nenhuma senha anotada em texto no celular',
      ],
      dica: 'Muitos apps de banco permitem ativar um "modo" que esconde saldos e bloqueia ações sensíveis quando o celular é desbloqueado de forma incomum. Procure essas opções extras nas configurações de segurança.',
    },
    validacao: [
      'Ativei biometria no app',
      'Uso senhas separadas',
      'Tenho bloqueio de tela forte',
      'Não anoto senhas no celular',
      'Sei o que é segredo pessoal',
    ],
  },

  'sec-banco-3': {
    trilhaId: 'sec-banco', numero: 3, titulo: 'A falsa central do banco (golpe do telefone)',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: '"Aqui é da central de segurança do seu banco. Identificamos uma compra suspeita de R$ 2.300. Foi você?" O tom é profissional, eles sabem seu nome e até os últimos dígitos do cartão. Esse é o golpe que mais esvazia contas no Brasil — e ele vive do seu susto.',
      conceito: {
        titulo: 'Eles criam o pânico e oferecem a "solução"',
        texto: 'Na falsa central, o golpista liga fingindo ser o banco, diz que há uma fraude e se oferece pra "ajudar". A partir do medo, ele te conduz: pede pra confirmar dados, digitar a senha, aprovar uma notificação no app, instalar um aplicativo de "segurança" (que é acesso remoto), ou transferir tudo pra uma "conta segura". Às vezes manda um "motoboy" buscar o cartão pra "destruir". Tudo é teatro. A defesa é uma só: desligar. O banco de verdade não se importa que você desligue e ligue de volta no número oficial — o golpista, sim, vai te pressionar pra não desligar.',
      },
      estrutura: {
        titulo: 'O roteiro do golpe',
        partes: [
          { simbolo: '😱', desc: '"Compra suspeita / sua conta foi invadida" — cria pânico.' },
          { simbolo: '🤝', desc: '"Vou te ajudar agora" — oferece socorro pra você obedecer.' },
          { simbolo: '📲', desc: 'Pede senha, aprovação no app, instalar app ou transferir.' },
          { simbolo: '🛵', desc: 'Às vezes manda motoboy buscar o cartão "pra destruir".' },
        ],
      },
      exemplo: {
        titulo: 'A reação que derruba o golpe',
        celulas: [
          { ref: 'Ligação', valor: '"Central de segurança, identificamos fraude..."' },
          { ref: 'Errado', valor: 'Continuar na linha, digitar senha, aprovar, transferir' },
          { ref: 'Certo', valor: 'Desligar sem dar nenhum dado' },
          { ref: 'Certo', valor: 'Ligar você mesmo no número do verso do cartão' },
        ],
        formula: 'Recebeu ligação de "fraude" → desligar e ligar no oficial',
        resultado: 'Se havia algo real, o banco confirma; o golpe morre no desligar.',
        comentario: 'Saber seus dados (nome, fim do cartão) não prova nada: esses dados vazam e são comprados por golpistas. Quem te liga sabendo seus dados não é, por isso, o banco.',
      },
      vocabulario: [
        { palavra: 'Falsa central', def: 'Golpista por telefone fingindo ser a central do banco.' },
        { palavra: 'Conta segura', def: 'Conta do golpista, vendida como "lugar seguro" pra você transferir.' },
        { palavra: 'Acesso remoto', def: 'App que dá controle do seu celular ao golpista, disfarçado de "segurança".' },
      ],
      chave: [
        'A falsa central cria pânico e oferece "ajuda"',
        'Nunca transfira pra "conta segura" nem instale apps que pedirem',
        'Desligue e ligue você no número oficial do cartão',
      ],
      porque: 'A falsa central é o golpe bancário de maior prejuízo no país. O reflexo de desligar e retornar pelo número oficial, treinado aqui, neutraliza o ataque inteiro independentemente da história que contarem.',
    },
    pratica: {
      instrucao: 'Treine o reflexo de desligar e confirmar pelo oficial.',
      passos: [
        'Memorize: "fraude" por telefone = eu desligo, sem dar dados',
        'Anote/saiba onde está o número oficial (verso do cartão, app)',
        'Combine: nunca transfiro pra "conta segura"',
        'Combine: nunca instalo app que uma ligação mandar instalar',
        'Combine: nunca entrego cartão a motoboy "do banco"',
      ],
    },
    desafio: {
      cenario: 'Você desliga qualquer ligação de "central de segurança" e confirma você mesmo pelo número oficial.',
      requisitos: [
        'Reconheço o roteiro da falsa central',
        'Desligo sem fornecer dados',
        'Ligo no número oficial do verso do cartão',
        'Não transfiro pra "conta segura"',
        'Não instalo apps nem entrego cartão por ordem de ligação',
      ],
      dica: 'Golpistas conseguem "segurar" sua linha: mesmo desligando, ao ligar de volta a chamada cai neles. Por segurança, ligue de OUTRO telefone, ou aguarde alguns minutos antes de discar o número oficial.',
    },
    validacao: [
      'Reconheço a falsa central',
      'Desligo sem dar dados',
      'Ligo no número oficial',
      'Não transfiro pra "conta segura"',
      'Não instalo apps por ligação',
    ],
  },

  'sec-banco-4': {
    trilhaId: 'sec-banco', numero: 4, titulo: 'Cartão: clonagem, skimming e aproximação',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Seu cartão pode ser copiado sem sair da sua mão. Maquininhas adulteradas, leitores escondidos e até a função por aproximação têm seus truques. Conhecer como a clonagem acontece é o que te faz proteger o cartão no dia a dia.',
      conceito: {
        titulo: 'Clonar é copiar os dados do cartão pra usar em outro lugar',
        texto: 'A clonagem captura os dados do seu cartão (número, validade e, às vezes, a senha) pra fazer compras no seu nome. Isso acontece por skimming (um leitor falso no caixa eletrônico ou na maquininha), por câmeras que filmam sua senha, por maquininhas adulteradas que clonam ao passar, e por vazamentos de dados em sites. A função por aproximação (contactless) é segura, mas tem limite de valor sem senha — fique de olho em cobranças pequenas e repetidas. A defesa combina hábitos físicos (proteger a senha, conferir a maquininha) e digitais (alertas e cartão virtual, próximas missões).',
      },
      estrutura: {
        titulo: 'Onde a clonagem mora',
        partes: [
          { simbolo: '🏧', desc: 'Skimming: leitor falso no caixa eletrônico copia a tarja/chip.' },
          { simbolo: '📷', desc: 'Câmera escondida filma você digitando a senha.' },
          { simbolo: '💳', desc: 'Maquininha adulterada clona o cartão ao passar.' },
          { simbolo: '📡', desc: 'Aproximação: cômoda, mas confira cobranças pequenas repetidas.' },
        ],
      },
      exemplo: {
        titulo: 'Hábitos que cortam a clonagem',
        celulas: [
          { ref: 'Senha', valor: 'Cobrir o teclado com a mão ao digitar' },
          { ref: 'Maquininha', valor: 'Conferir se o valor na tela bate antes de aprovar' },
          { ref: 'Caixa', valor: 'Evitar caixas em locais isolados; observar peças soltas' },
          { ref: 'Alertas', valor: 'Ativar notificação de toda compra no app' },
        ],
        formula: 'Proteger a senha + conferir maquininha + alertas ligados',
        resultado: 'Você dificulta a cópia e percebe o uso indevido na hora.',
        comentario: 'Nunca perca o cartão de vista no comércio, e desconfie se a maquininha for levada pra longe ou pedirem pra digitar a senha duas vezes. Conferir o valor antes de aprovar evita o golpe da "digitação a mais".',
      },
      vocabulario: [
        { palavra: 'Skimming', def: 'Cópia dos dados do cartão por um leitor falso instalado em terminais.' },
        { palavra: 'Contactless', def: 'Pagamento por aproximação; tem limite sem senha.' },
        { palavra: 'Alerta de compra', def: 'Notificação do app a cada transação, pra você flagrar uso indevido.' },
      ],
      chave: [
        'Clonar = copiar os dados pra usar em outro lugar',
        'Proteja a senha e confira a maquininha',
        'Ative alertas de compra pra flagrar na hora',
      ],
      porque: 'Cartão é uso diário, e a clonagem se aproveita de descuidos físicos. Hábitos simples — cobrir a senha, conferir o valor, ligar alertas — reduzem drasticamente o risco e te avisam no instante do golpe.',
    },
    pratica: {
      instrucao: 'Adote os hábitos físicos e ligue seus alertas.',
      passos: [
        'Pratique cobrir o teclado com a mão ao digitar a senha',
        'Combine: conferir o valor na maquininha antes de aprovar',
        'No app do banco, ative alertas de compra (push/SMS)',
        'Evite caixas eletrônicos em locais isolados e mal iluminados',
        'Nunca deixe o cartão sair do seu campo de visão no comércio',
      ],
    },
    desafio: {
      cenario: 'Você protege a senha, confere a maquininha e tem alertas de compra ativos no app.',
      requisitos: [
        'Cubro a senha ao digitar',
        'Confiro o valor antes de aprovar',
        'Ativei alertas de compra no app',
        'Evito caixas em locais isolados',
        'Mantenho o cartão sempre à vista',
      ],
      dica: 'Configure também um limite de valor para compras por aproximação, se o app permitir. Quanto menor o teto sem senha, menos um cartão clonado consegue gastar antes de você bloquear.',
    },
    validacao: [
      'Protejo a senha ao digitar',
      'Confiro o valor na maquininha',
      'Tenho alertas de compra ativos',
      'Evito caixas isolados',
      'Mantenho o cartão à vista',
    ],
  },

  'sec-banco-5': {
    trilhaId: 'sec-banco', numero: 5, titulo: 'Compras online com cartão virtual',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Comprar pela internet é prático, mas espalhar o número do seu cartão por dezenas de sites é arriscado: basta um deles vazar. O cartão virtual resolve isso — um número descartável que protege o seu cartão de verdade. Hoje você aprende a usar.',
      conceito: {
        titulo: 'Um número falso pra proteger o verdadeiro',
        texto: 'O cartão virtual é um número gerado pelo app do banco, ligado ao seu cartão real, mas que você pode apagar e recriar quando quiser. Se um site vazar esse número, você simplesmente o exclui — sem trocar o cartão físico. Muitos bancos permitem cartões virtuais temporários (que valem só uma compra) ou com limite definido. Use cartão virtual em sites novos ou pouco conhecidos, prefira lojas com endereço "https" e cadeado, e jamais salve o cartão em sites em que você não confia plenamente. Combine isso com os alertas de compra da missão anterior.',
      },
      estrutura: {
        titulo: 'Compra online mais segura',
        partes: [
          { simbolo: '🆕', desc: 'Gere um cartão virtual no app pra compras na internet.' },
          { simbolo: '⏱️', desc: 'Use o temporário (uma compra) em sites desconhecidos.' },
          { simbolo: '🔒', desc: 'Compre só em sites com "https" e cadeado; confira o domínio.' },
          { simbolo: '🚫', desc: 'Não salve o cartão em sites que você não conhece bem.' },
        ],
      },
      exemplo: {
        titulo: 'Físico x virtual x temporário',
        celulas: [
          { ref: 'Físico', valor: 'Use só presencial; evite digitar em sites' },
          { ref: 'Virtual', valor: 'Compras recorrentes confiáveis; apague se vazar' },
          { ref: 'Temporário', valor: 'Site novo/desconhecido; vale uma compra' },
          { ref: 'Sempre', valor: 'Alertas ligados + conferir domínio do site' },
        ],
        formula: 'Cartão virtual/temporário + site https + alertas = compra blindada',
        resultado: 'Um vazamento no site não compromete seu cartão real.',
        comentario: 'Cadeado e "https" dizem que a conexão é criptografada, não que a loja é honesta. Confira também se o domínio é o oficial (sem letras trocadas) e pesquise a reputação da loja antes de comprar.',
      },
      vocabulario: [
        { palavra: 'Cartão virtual', def: 'Número gerado no app, ligado ao seu cartão, que você pode apagar.' },
        { palavra: 'Cartão temporário', def: 'Cartão virtual que vale para uma única compra.' },
        { palavra: 'https/cadeado', def: 'Indica conexão criptografada; necessário, mas não garante loja honesta.' },
      ],
      chave: [
        'Use cartão virtual nas compras online',
        'Temporário pra sites novos ou desconhecidos',
        'Compre só em https e confira o domínio',
      ],
      porque: 'Compras online são rotina e os vazamentos de sites, frequentes. O cartão virtual desliga esse risco: se um número vaza, você o descarta sem dor de cabeça. É proteção prática que cabe no dia a dia.',
    },
    pratica: {
      instrucao: 'Conheça e configure o cartão virtual do seu banco.',
      passos: [
        'No app do banco, procure a opção "cartão virtual"',
        'Gere um cartão virtual para suas compras pela internet',
        'Veja se o app oferece cartão temporário (uma compra)',
        'Defina: sites novos = cartão temporário',
        'Confirme que os alertas de compra estão ligados',
      ],
    },
    desafio: {
      cenario: 'Você usa cartão virtual nas compras online e reserva o temporário pra sites desconhecidos.',
      requisitos: [
        'Sei gerar um cartão virtual no app',
        'Uso cartão virtual nas compras online',
        'Reservo o temporário pra sites novos',
        'Compro só em https e confiro o domínio',
        'Não salvo cartão em sites desconhecidos',
      ],
      dica: 'Para assinaturas (streaming, apps), um cartão virtual dedicado facilita: se quiser cancelar ou algo cobrar errado, você apaga aquele número e corta a cobrança na fonte.',
    },
    validacao: [
      'Sei gerar cartão virtual',
      'Uso virtual nas compras online',
      'Uso temporário em sites novos',
      'Confiro https e domínio',
      'Não salvo cartão em sites duvidosos',
    ],
  },

  'sec-banco-6': {
    trilhaId: 'sec-banco', numero: 6, titulo: 'Boleto falso e o golpe do código de barras',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Você vai pagar uma conta e o boleto parece perfeito: logo certo, valor certo, vencimento certo. Mas o código de barras leva o dinheiro pro golpista. O boleto falso é silencioso — só percebe quem confere antes de pagar.',
      conceito: {
        titulo: 'O que importa é o beneficiário, não a aparência',
        texto: 'No golpe do boleto, o criminoso intercepta ou gera um boleto com a aparência legítima, mas com o código de barras apontando pra conta dele. Pode chegar por e-mail ("sua fatura"), num site falso, ou por um malware que troca o boleto na hora de copiar. A defesa está em conferir, antes de pagar, quem vai receber: ao escanear o código no app do banco, ele mostra o beneficiário e o valor — confira se o nome bate com a empresa que você espera pagar. Desconfie de mudanças de banco, descontos "à vista" surpresa e boletos recebidos por canais inesperados.',
      },
      estrutura: {
        titulo: 'Conferir antes de pagar',
        partes: [
          { simbolo: '🏷️', desc: 'No app, confira o beneficiário: o nome bate com quem você paga?' },
          { simbolo: '💲', desc: 'Confira o valor e o vencimento na tela do banco.' },
          { simbolo: '✉️', desc: 'Desconfie de boletos por e-mail/WhatsApp não solicitados.' },
          { simbolo: '🏦', desc: 'Banco do beneficiário mudou do nada? Investigue antes.' },
        ],
      },
      exemplo: {
        titulo: 'O passo que revela a fraude',
        celulas: [
          { ref: 'App', valor: 'Escaneou o código → mostra beneficiário "João da Silva"' },
          { ref: 'Esperado', valor: 'Era pra pagar "Companhia de Energia"' },
          { ref: 'Conclusão', valor: 'Nome não bate = boleto falso, não pague' },
          { ref: 'Certo', valor: 'Emitir a 2ª via no site oficial da empresa' },
        ],
        formula: 'Beneficiário na tela ≠ empresa esperada → não pagar',
        resultado: 'Você flagra o desvio antes de o dinheiro sair.',
        comentario: 'Para contas recorrentes (luz, água, internet), emita a 2ª via direto no site/app oficial da empresa. Assim você nunca depende de um boleto que chegou por e-mail, que é o vetor mais comum da fraude.',
      },
      vocabulario: [
        { palavra: 'Beneficiário', def: 'Quem vai RECEBER o pagamento; o app mostra ao ler o boleto.' },
        { palavra: 'Linha digitável', def: 'Os números do boleto; podem apontar pra conta do golpista.' },
        { palavra: '2ª via oficial', def: 'Boleto emitido no site/app da própria empresa, fonte confiável.' },
      ],
      chave: [
        'Confira o beneficiário antes de pagar',
        'Valor/vencimento certos não garantem boleto verdadeiro',
        'Para contas fixas, emita 2ª via no site oficial',
      ],
      porque: 'O boleto falso engana pela aparência e só falha na conferência do beneficiário. Criar o hábito de checar quem recebe — e emitir 2ª via oficial — fecha um golpe que de outra forma passa despercebido.',
    },
    pratica: {
      instrucao: 'Adote a conferência do beneficiário em todo boleto.',
      passos: [
        'Antes de pagar, escaneie o código no app do banco',
        'Leia o nome do beneficiário que aparece na tela',
        'Confirme se o nome bate com a empresa que você quer pagar',
        'Confira valor e vencimento também',
        'Para contas fixas, pegue a 2ª via no site oficial da empresa',
      ],
    },
    desafio: {
      cenario: 'Você confere o beneficiário de cada boleto antes de pagar e emite 2ª via pelos canais oficiais.',
      requisitos: [
        'Confiro o beneficiário no app antes de pagar',
        'Confiro valor e vencimento',
        'Desconfio de boletos não solicitados',
        'Emito 2ª via no site oficial para contas fixas',
        'Não pago se o nome não bater',
      ],
      dica: 'Se o app mostrar o beneficiário como uma pessoa física ou empresa diferente da que você espera, pare imediatamente. Empresas grandes recebem em nome próprio — nunca no nome de uma pessoa.',
    },
    validacao: [
      'Confiro o beneficiário antes de pagar',
      'Confiro valor e vencimento',
      'Desconfio de boletos não solicitados',
      'Emito 2ª via oficial',
      'Não pago se o nome não bater',
    ],
  },

  'sec-banco-7': {
    trilhaId: 'sec-banco', numero: 7, titulo: 'Phishing bancário: SMS e e-mail "atualize sua conta"',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: '"Seu acesso será bloqueado. Recadastre seus dados agora: [link]." O SMS tem o nome do seu banco e um tom oficial. Mas o link leva a uma página clonada, feita só pra capturar sua senha. É o phishing — e ele conta com a sua pressa.',
      conceito: {
        titulo: 'A isca é o link; o anzol é a urgência',
        texto: 'No phishing bancário, você recebe uma mensagem (SMS, e-mail ou WhatsApp) que imita o banco e cria urgência: conta bloqueada, dado desatualizado, prêmio, movimentação suspeita. O link leva a um site idêntico ao do banco, onde tudo que você digitar (agência, senha, token) vai pro golpista. A regra de ouro: nunca acesse o banco por links de mensagens. Abra o app do banco ou digite o endereço oficial você mesmo. Bancos não pedem recadastro por link, e qualquer mensagem que apresse e mande clicar deve ser tratada como golpe.',
      },
      estrutura: {
        titulo: 'Sinais do phishing bancário',
        partes: [
          { simbolo: '⏰', desc: 'Urgência: "bloqueio em 24h", "regularize agora".' },
          { simbolo: '🔗', desc: 'Link pra "recadastrar/desbloquear" — não clique.' },
          { simbolo: '🏦', desc: 'Imita o banco, mas chega por SMS/e-mail/WhatsApp inesperado.' },
          { simbolo: '⌨️', desc: 'Defesa: abra o app ou digite o site oficial você mesmo.' },
        ],
      },
      exemplo: {
        titulo: 'O caminho certo até o banco',
        celulas: [
          { ref: 'Recebeu', valor: 'SMS: "Conta bloqueada, recadastre: link"' },
          { ref: 'Errado', valor: 'Tocar no link e digitar senha na página' },
          { ref: 'Certo', valor: 'Ignorar o link e abrir o app do banco' },
          { ref: 'Certo', valor: 'Se houver algo, o próprio app avisa lá dentro' },
        ],
        formula: 'Mensagem com link do banco → não clico; abro o app oficial',
        resultado: 'A senha nunca chega à página falsa.',
        comentario: 'Páginas de phishing copiam o visual do banco com perfeição, então não confie na aparência. O endereço (domínio) é o que denuncia — mas, em vez de tentar julgar o link, simplesmente não clique e vá pelo app.',
      },
      vocabulario: [
        { palavra: 'Phishing', def: 'Mensagem/site falso que imita o banco pra roubar seus dados.' },
        { palavra: 'Smishing', def: 'Phishing por SMS.' },
        { palavra: 'Página clonada', def: 'Site idêntico ao do banco, feito pra capturar o que você digita.' },
      ],
      chave: [
        'Nunca acesse o banco por link de mensagem',
        'Urgência + link = sinal de phishing',
        'Abra o app ou digite o site oficial você mesmo',
      ],
      porque: 'O phishing é a porta de mensagem mais usada contra contas. O hábito de nunca clicar em links bancários e ir direto pelo app elimina o golpe na origem, por mais convincente que a mensagem pareça.',
    },
    pratica: {
      instrucao: 'Fixe o único caminho seguro até o seu banco.',
      passos: [
        'Decida: nunca acesso o banco por link de mensagem',
        'Sempre que precisar, abro o app oficial do banco',
        'Se for no computador, digito o endereço oficial eu mesmo',
        'Trate "bloqueio urgente por link" como golpe',
        'Apague mensagens de "recadastro" sem clicar',
      ],
    },
    desafio: {
      cenario: 'Você nunca acessa o banco por links e sempre vai direto pelo app ou pelo site oficial digitado por você.',
      requisitos: [
        'Não clico em links bancários de mensagens',
        'Acesso o banco só pelo app oficial',
        'No PC, digito o endereço oficial eu mesmo',
        'Reconheço urgência + link como phishing',
        'Apago mensagens de "recadastro" sem clicar',
      ],
      dica: 'Bancos podem mandar avisos, mas o pedido de ação sensível sempre acontece DENTRO do app, não num link externo. Na dúvida sobre uma mensagem, a resposta é sempre a mesma: abra o app e veja por lá.',
    },
    validacao: [
      'Não clico em links bancários',
      'Acesso o banco pelo app oficial',
      'Digito o site oficial eu mesmo',
      'Reconheço urgência + link',
      'Apago "recadastros" sem clicar',
    ],
  },

  'sec-banco-8': {
    trilhaId: 'sec-banco', numero: 8, titulo: 'Conferir extratos e contestar cobranças',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Muito golpe só é descoberto no fim do mês — ou nunca, se a pessoa não olha o extrato. Criar o hábito de conferir e saber como contestar uma cobrança indevida é o que recupera seu dinheiro e corta a fraude antes que ela cresça.',
      conceito: {
        titulo: 'Vigiar e reagir: seus dois direitos',
        texto: 'Conferir o extrato com frequência é a forma de flagrar cobranças que você não fez — uma compra estranha, uma assinatura que não reconhece, valores pequenos repetidos (teste de cartão clonado). Ao encontrar algo, você tem o direito de contestar: pelo app ou pela central oficial, registra a cobrança como não reconhecida; o banco bloqueia o cartão, abre a análise e, em geral, estorna o valor indevido. Aja rápido — quanto antes contestar, melhor. Guarde prints e protocolos. Os alertas de compra (missão 4) tornam essa vigilância quase automática.',
      },
      estrutura: {
        titulo: 'Da descoberta à contestação',
        partes: [
          { simbolo: '👀', desc: 'Confira o extrato com frequência (semanal é ótimo).' },
          { simbolo: '🔎', desc: 'Procure compras desconhecidas e valores pequenos repetidos.' },
          { simbolo: '🚩', desc: 'Achou? Conteste pelo app ou central oficial e bloqueie o cartão.' },
          { simbolo: '🧾', desc: 'Guarde protocolo e prints; acompanhe o estorno.' },
        ],
      },
      exemplo: {
        titulo: 'O que fazer ao ver uma cobrança estranha',
        celulas: [
          { ref: '1º', valor: 'Conferir se não é compra recorrente/assinatura sua' },
          { ref: '2º', valor: 'Não reconheceu → bloquear o cartão no app' },
          { ref: '3º', valor: 'Abrir contestação como "não reconheço a compra"' },
          { ref: '4º', valor: 'Guardar protocolo e acompanhar o estorno' },
        ],
        formula: 'Conferir sempre + contestar rápido + guardar protocolo',
        resultado: 'A fraude é cortada e o valor tende a ser estornado.',
        comentario: 'Valores baixos e repetidos (R$ 1, R$ 2) costumam ser "testes" do golpista pra ver se o cartão funciona antes de uma compra grande. Tratá-los como alerta vermelho evita o prejuízo maior.',
      },
      vocabulario: [
        { palavra: 'Contestação', def: 'Pedido formal ao banco pra estornar uma cobrança que você não fez.' },
        { palavra: 'Estorno', def: 'Devolução do valor cobrado indevidamente.' },
        { palavra: 'Protocolo', def: 'Número que registra seu pedido; guarde pra acompanhar.' },
      ],
      chave: [
        'Confira o extrato com frequência',
        'Conteste rápido o que não reconhecer e bloqueie o cartão',
        'Guarde protocolo e acompanhe o estorno',
      ],
      porque: 'Vigiar o extrato e saber contestar transforma você de vítima passiva em quem reage e recupera. Combinado com os alertas, é a rede de segurança que limita o estrago de qualquer fraude que passe.',
    },
    pratica: {
      instrucao: 'Crie sua rotina de conferência e seu plano de contestação.',
      passos: [
        'Defina um dia da semana pra olhar o extrato',
        'Aprenda onde, no app, fica "bloquear cartão"',
        'Aprenda onde, no app, abre-se uma contestação',
        'Combine: valor pequeno repetido = alerta de teste de clone',
        'Saiba guardar protocolo e prints de cada contestação',
      ],
    },
    desafio: {
      cenario: 'Você confere o extrato com frequência e sabe contestar e bloquear o cartão diante de uma cobrança indevida.',
      requisitos: [
        'Tenho rotina de conferir o extrato',
        'Sei bloquear o cartão pelo app',
        'Sei abrir uma contestação',
        'Reconheço valores pequenos repetidos como teste',
        'Guardo protocolo e acompanho o estorno',
      ],
      dica: 'A maioria dos bancos dá um prazo para contestar (frequentemente algumas semanas a meses). Não deixe pra depois: assim que ver algo estranho, conteste no mesmo dia para não perder o prazo nem dar tempo ao golpista.',
    },
    validacao: [
      'Confiro o extrato com frequência',
      'Sei bloquear o cartão',
      'Sei abrir contestação',
      'Reconheço testes de clone',
      'Guardo protocolo do pedido',
    ],
  },

  'sec-banco-9': {
    trilhaId: 'sec-banco', numero: 9, titulo: 'Projeto: blindagem da conta e dos cartões',
    tempoTotal: 18, xp: 120, vertente: 'ambos',
    aula: {
      gancho: 'Você já conhece cada golpe bancário e cada defesa. Hora de juntar tudo num pente-fino: app configurado, cartões protegidos, hábitos firmados e limites ajustados. Ao final, sua vida financeira fica blindada de ponta a ponta.',
      conceito: {
        titulo: 'Três camadas: app, cartões e hábitos',
        texto: 'Segurança bancária completa soma três camadas. No app: biometria, senhas separadas, alertas de compra e limites ajustados. Nos cartões: uso de cartão virtual/temporário online, conferência de maquininha e da senha protegida. Nos hábitos: desligar a falsa central e ligar no oficial, nunca clicar em links bancários, conferir beneficiário de boleto e revisar o extrato. Com as três camadas ativas, mesmo que um golpe chegue, ele encontra portas fechadas e você percebe a tempo.',
      },
      estrutura: {
        titulo: 'As camadas do seu projeto',
        partes: [
          { simbolo: '📱', desc: 'App: biometria + senhas separadas + alertas + limites.' },
          { simbolo: '💳', desc: 'Cartões: virtual/temporário online + senha e maquininha protegidas.' },
          { simbolo: '🧠', desc: 'Hábitos: desliga falsa central, não clica em link, confere boleto.' },
          { simbolo: '🔁', desc: 'Rotina: revisar extrato e refazer o pente-fino periodicamente.' },
        ],
      },
      exemplo: {
        titulo: 'Checklist de blindagem financeira',
        celulas: [
          { ref: 'App', valor: 'Biometria ✓ · Senhas separadas ✓ · Alertas ✓ · Limites ✓' },
          { ref: 'Cartões', valor: 'Virtual/temporário ✓ · Senha protegida ✓' },
          { ref: 'Hábitos', valor: 'Falsa central ✓ · Links ✓ · Boleto ✓' },
          { ref: 'Rotina', valor: 'Extrato revisado ✓ · Plano de contestação ✓' },
        ],
        formula: 'App + cartões + hábitos + rotina = conta blindada',
        resultado: 'As quatro portas de entrada ficam fechadas.',
        comentario: 'Ajuste limites de transferência e PIX para valores compatíveis com seu uso (veja também a trilha do PIX). Limite baixo significa que, no pior caso, o estrago possível é pequeno.',
      },
      vocabulario: [
        { palavra: 'Limite de transação', def: 'Teto de valor por operação; quanto menor, menor o prejuízo possível.' },
        { palavra: 'Blindagem financeira', def: 'Conjunto de defesas que, juntas, fecham as portas dos golpes bancários.' },
        { palavra: 'Pente-fino', def: 'Revisão completa de configurações e hábitos, refeita de tempos em tempos.' },
      ],
      chave: [
        'Configure app, cartões e hábitos juntos',
        'Ajuste limites pra reduzir o estrago possível',
        'Revise o extrato e refaça o pente-fino periodicamente',
      ],
      porque: 'Este projeto consolida a trilha numa defesa financeira real e contínua. Com as três camadas ativas e a rotina de revisão, você sai de alvo fácil para alguém difícil de enganar — o objetivo do módulo.',
    },
    pratica: {
      instrucao: 'Execute o pente-fino financeiro, camada por camada.',
      passos: [
        'App: confirme biometria, senhas separadas e alertas de compra',
        'App: ajuste limites de transferência/PIX ao seu uso real',
        'Cartões: configure cartão virtual e reserve o temporário pra sites novos',
        'Hábitos: relembre as regras (falsa central, links, boleto)',
        'Rotina: defina o dia de conferir extrato e como contestar',
        'Confira: cada item do checklist de blindagem está ✓?',
      ],
    },
    desafio: {
      cenario: 'Você conclui o pente-fino: app e cartões configurados, limites ajustados, hábitos firmados e rotina de revisão definida.',
      requisitos: [
        'App com biometria, senhas separadas e alertas',
        'Limites de transferência/PIX ajustados',
        'Cartão virtual configurado para compras online',
        'Hábitos firmados (falsa central, links, boleto)',
        'Rotina de extrato e plano de contestação prontos',
      ],
      dica: 'Refaça este pente-fino a cada poucos meses e sempre que perder o cartão ou trocar de celular. Segurança não é evento único: é manutenção. Pequenas revisões periódicas evitam grandes prejuízos.',
    },
    validacao: [
      'App configurado e com alertas',
      'Limites ajustados ao meu uso',
      'Cartão virtual em uso',
      'Hábitos de defesa firmados',
      'Rotina de revisão definida',
    ],
  },
};
