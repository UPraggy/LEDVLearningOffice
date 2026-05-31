// ============================================================================
// CONTEÚDO — Senhas Fortes, Vazamentos e Gerenciadores (sec-senhas-av)
// módulo Segurança · vertente "ambos"
// Frase-senha, gerenciador, vazamentos, 2FA, autenticador, passkeys,
// recuperação de conta. Conteúdo autoral, foco no Brasil.
// ============================================================================

export const SEC_SENHAS_AV = {
  'sec-senhas-av-1': {
    trilhaId: 'sec-senhas-av', numero: 1, titulo: 'Por que senha boa não basta mais',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Você caprichou na senha: letras, números, símbolos. Mesmo assim, ela pode cair nas mãos de um golpista sem ele adivinhar nada. Entender como senhas vazam muda a forma como você protege suas contas.',
      conceito: {
        titulo: 'O problema raramente é a sua senha ser "fraca"',
        texto: 'A maioria das contas invadidas não é por senha fraca, e sim por três motivos: a mesma senha usada em vários sites (um vaza, todos caem), senhas que vazaram em ataques a empresas, e o usuário entregando a senha sem perceber num site falso (phishing). Por isso, segurança de login moderna se apoia em três pilares: senhas únicas pra cada conta, um segundo fator de verificação, e atenção pra não digitar a senha em lugar errado. Capricho na senha ajuda, mas sozinho não resolve. Esta trilha monta a defesa completa.',
      },
      estrutura: {
        titulo: 'Por onde as senhas realmente vazam',
        partes: [
          { simbolo: '♻️', desc: 'Senha repetida: um site vaza e o golpista testa nas suas outras contas.' },
          { simbolo: '🏢', desc: 'Vazamento de empresa: sua senha cai num pacote de dados roubados.' },
          { simbolo: '🎣', desc: 'Phishing: você digita a senha num site falso achando ser o verdadeiro.' },
          { simbolo: '🛡️', desc: 'Defesa: senha única + 2º fator + atenção a onde digita.' },
        ],
      },
      exemplo: {
        titulo: 'A reação em cadeia da senha repetida',
        celulas: [
          { ref: 'Você usa', valor: 'A mesma senha no e-mail, na loja e na rede social' },
          { ref: 'Vaza', valor: 'A loja sofre um ataque e a senha vaza' },
          { ref: 'Golpista', valor: 'Testa a mesma senha no seu e-mail e entra' },
          { ref: 'Defesa', valor: 'Senhas diferentes: o vazamento de uma não derruba as outras' },
        ],
        formula: 'Senha única + segundo fator + atenção = conta protegida',
        resultado: 'Um vazamento isolado deixa de ser um desastre geral.',
        comentario: 'É por isso que "minha senha é super forte" não basta: se ela é a mesma em todo lugar e um desses lugares vaza, a força da senha não importa. Unicidade vale mais que complexidade.',
      },
      vocabulario: [
        { palavra: 'Vazamento', def: 'Roubo de dados de uma empresa que expõe senhas e e-mails.' },
        { palavra: 'Senha única', def: 'Uma senha diferente pra cada conta importante.' },
        { palavra: 'Segundo fator', def: 'Uma confirmação extra além da senha (código, app, biometria).' },
      ],
      chave: [
        'Senhas invadem mais por repetição e vazamento que por "fraqueza"',
        'A defesa tem três pilares: única + segundo fator + atenção',
        'Unicidade protege mais que complexidade sozinha',
      ],
      porque: 'Entender de onde vêm as invasões redireciona seu esforço pro que realmente protege: senhas únicas e um segundo fator. É a base que dá sentido a todas as missões seguintes desta trilha.',
    },
    pratica: {
      instrucao: 'Faça um diagnóstico honesto dos seus logins.',
      passos: [
        'Pense em 5 contas suas importantes (e-mail, banco, redes, loja)',
        'Pergunte: quantas usam a mesma senha?',
        'Marque quais não têm um segundo fator ativado',
        'Reconheça que repetição é o maior risco',
        'Combine: vou tornar cada uma única ao longo da trilha',
      ],
    },
    desafio: {
      cenario: 'Você entende que senha forte sozinha não basta e mira nos três pilares da defesa.',
      requisitos: [
        'Sei que repetição é o maior risco',
        'Sei que vazamentos expõem senhas boas',
        'Reconheço o phishing como porta de entrada',
        'Entendo os três pilares da defesa',
        'Quero senhas únicas em cada conta',
      ],
      dica: 'Comece pelo e-mail principal: é a "chave mestra" que recupera todas as outras contas. Protegê-lo primeiro, com senha única e segundo fator, é o passo de maior impacto.',
    },
    validacao: [
      'Sei que repetição é o maior risco',
      'Sei que vazamentos expõem senhas boas',
      'Reconheço o phishing',
      'Entendo os três pilares',
      'Quero senhas únicas',
    ],
  },

  'sec-senhas-av-2': {
    trilhaId: 'sec-senhas-av', numero: 2, titulo: 'Criar e lembrar senhas fortes (frase-senha)',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: '"Senha forte" não precisa ser um amontoado impossível de lembrar tipo "X7#kp9!z". Uma frase com palavras aleatórias pode ser mais segura E mais fácil de guardar. O segredo é tamanho e imprevisibilidade, não símbolos rebuscados.',
      conceito: {
        titulo: 'Comprida e imprevisível vence curta e complicada',
        texto: 'Uma senha longa, feita de várias palavras sem relação ("girafa-violão-azul-trovão"), é difícil de quebrar e fácil de lembrar — é a chamada frase-senha. O que torna uma senha forte é o comprimento e a imprevisibilidade, não trocar "a" por "@". Evite dados pessoais (nome, data de nascimento, time, placa), sequências ("123456") e palavras óbvias. Para as contas mais críticas, crie frases-senha longas e únicas. Para o resto, deixe um gerenciador criar senhas aleatórias por você (próxima missão). Você só precisa lembrar de poucas frases-senha fortes.',
      },
      estrutura: {
        titulo: 'Como montar uma frase-senha',
        partes: [
          { simbolo: '📏', desc: 'Comprimento vence: quanto mais longa, mais forte.' },
          { simbolo: '🎲', desc: 'Palavras aleatórias e sem relação entre si.' },
          { simbolo: '🚫', desc: 'Nada de nome, data, time, sequência ou palavra óbvia.' },
          { simbolo: '🔑', desc: 'Única pra cada conta crítica; o resto fica no gerenciador.' },
        ],
      },
      exemplo: {
        titulo: 'Fraca x forte',
        celulas: [
          { ref: 'Fraca', valor: 'Maria1990 (nome + ano de nascimento)' },
          { ref: 'Fraca', valor: 'P@ssw0rd (palavra óbvia "disfarçada")' },
          { ref: 'Forte', valor: 'janela-cometa-pãozinho-bicicleta (longa e aleatória)' },
          { ref: 'Regra', valor: 'Longa + imprevisível + única' },
        ],
        formula: 'Várias palavras aleatórias = longa, forte e lembrável',
        resultado: 'Você ganha segurança sem precisar decorar caos.',
        comentario: 'Trocar letras por símbolos ("a"→"@") parece esperto, mas os atacantes já conhecem esses truques. O ganho real vem do comprimento e da aleatoriedade — uma frase de quatro palavras incomuns supera "P@ssw0rd!" com folga.',
      },
      vocabulario: [
        { palavra: 'Frase-senha', def: 'Senha feita de várias palavras; longa, forte e fácil de lembrar.' },
        { palavra: 'Comprimento', def: 'Número de caracteres; o fator que mais aumenta a força.' },
        { palavra: 'Dado pessoal', def: 'Nome, data, time — previsíveis demais pra uma senha.' },
      ],
      chave: [
        'Comprimento e imprevisibilidade importam mais que símbolos',
        'Frase-senha: palavras aleatórias, longa e lembrável',
        'Nunca use dados pessoais ou sequências',
      ],
      porque: 'Saber criar uma frase-senha forte resolve as poucas senhas que você precisa decorar — sobretudo a do e-mail e a do gerenciador. As demais ficam por conta do cofre, que vem a seguir.',
    },
    pratica: {
      instrucao: 'Crie sua primeira frase-senha forte (mentalmente, não digite aqui).',
      passos: [
        'Escolha 4 palavras aleatórias e sem relação entre si',
        'Confira: não tem nome, data, time nem sequência?',
        'Veja se ficou longa e fácil de lembrar',
        'Pense em usá-la na conta mais crítica (e-mail)',
        'Combine: cada conta crítica terá uma frase-senha diferente',
      ],
    },
    desafio: {
      cenario: 'Você cria frases-senha longas, aleatórias e únicas para suas contas críticas.',
      requisitos: [
        'Priorizo comprimento e imprevisibilidade',
        'Uso palavras aleatórias sem relação',
        'Não uso dados pessoais ou sequências',
        'Faço cada conta crítica única',
        'Sei que o resto ficará no gerenciador',
      ],
      dica: 'Não reaproveite a mesma frase-senha "trocando um número no fim". O golpista que vê uma versão deduz as outras. Cada conta crítica merece palavras totalmente diferentes.',
    },
    validacao: [
      'Priorizo comprimento e imprevisibilidade',
      'Uso palavras aleatórias',
      'Não uso dados pessoais',
      'Faço cada conta crítica única',
      'Resto fica no gerenciador',
    ],
  },

  'sec-senhas-av-3': {
    trilhaId: 'sec-senhas-av', numero: 3, titulo: 'Gerenciador de senhas: o cofre que lembra por você',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Ninguém consegue lembrar de uma senha forte e diferente pra cada uma das dezenas de contas que tem. A boa notícia: você não precisa. O gerenciador de senhas guarda tudo num cofre, e você só decora uma senha mestra.',
      conceito: {
        titulo: 'Um cofre criptografado pra todas as suas senhas',
        texto: 'Um gerenciador de senhas é um aplicativo que cria, guarda e preenche senhas fortes e únicas pra cada conta, protegidas por criptografia. Você abre o cofre com uma única senha mestra forte (uma frase-senha da missão anterior) e, opcionalmente, biometria. Ele resolve o problema central: senhas únicas em todo lugar sem você ter que lembrar de nenhuma. Bônus de segurança: o gerenciador só preenche a senha no site verdadeiro — se você cair num site falso parecido, ele não reconhece e não preenche, o que te alerta do golpe. Escolha um gerenciador de boa reputação e proteja a senha mestra com a vida.',
      },
      estrutura: {
        titulo: 'O que o gerenciador faz por você',
        partes: [
          { simbolo: '🔐', desc: 'Cria e guarda senhas fortes e únicas pra cada conta.' },
          { simbolo: '🗝️', desc: 'Você decora só a senha mestra (uma frase-senha forte).' },
          { simbolo: '✍️', desc: 'Preenche o login automaticamente — só no site verdadeiro.' },
          { simbolo: '🚨', desc: 'Não preencheu num site "conhecido"? Pode ser site falso.' },
        ],
      },
      exemplo: {
        titulo: 'Antes e depois do gerenciador',
        celulas: [
          { ref: 'Antes', valor: 'Mesma senha em tudo, anotada num papel ou na memória' },
          { ref: 'Depois', valor: 'Senha única e forte em cada conta, no cofre' },
          { ref: 'Você lembra', valor: 'Só a senha mestra' },
          { ref: 'Anti-phishing', valor: 'Não preenche em site falso = alerta de golpe' },
        ],
        formula: 'Senha mestra forte + gerenciador = únicas em todo lugar',
        resultado: 'Segurança alta com esforço mínimo de memória.',
        comentario: 'A senha mestra é o único ponto a proteger ao máximo: faça-a longa, única e nunca a compartilhe. Ative também o segundo fator no próprio gerenciador, pra blindar o cofre.',
      },
      vocabulario: [
        { palavra: 'Gerenciador de senhas', def: 'App que cria, guarda e preenche senhas únicas num cofre.' },
        { palavra: 'Senha mestra', def: 'A única senha que você decora; abre o cofre.' },
        { palavra: 'Preenchimento automático', def: 'O cofre digita o login por você, só no site verdadeiro.' },
      ],
      chave: [
        'O gerenciador dá senhas únicas sem você decorar nenhuma',
        'Você só protege a senha mestra (forte e única)',
        'Ele não preenche em site falso — um alerta a seu favor',
      ],
      porque: 'O gerenciador resolve de uma vez o maior problema de segurança de login: a repetição. Com ele, "senha única em cada conta" deixa de ser impossível e vira o seu padrão, com bônus anti-phishing.',
    },
    pratica: {
      instrucao: 'Planeje a adoção de um gerenciador.',
      passos: [
        'Pesquise gerenciadores de senha de boa reputação',
        'Entenda: você criará uma senha mestra forte e única',
        'Pense em começar guardando suas contas mais críticas',
        'Saiba que ele preenche só no site verdadeiro',
        'Combine: vou ativar segundo fator no próprio gerenciador',
      ],
    },
    desafio: {
      cenario: 'Você adota um gerenciador, protege a senha mestra e passa a usar senhas únicas em todas as contas.',
      requisitos: [
        'Entendo o que o gerenciador faz',
        'Sei criar uma senha mestra forte e única',
        'Vou guardar minhas contas críticas primeiro',
        'Sei que ele não preenche em site falso',
        'Vou ativar segundo fator no cofre',
      ],
      dica: 'Anote a senha mestra num lugar físico seguro (não no computador) durante a adaptação. Esquecê-la pode trancar você pra fora do cofre — alguns gerenciadores não têm como recuperá-la.',
    },
    validacao: [
      'Entendo o que o gerenciador faz',
      'Sei criar a senha mestra',
      'Guardo contas críticas primeiro',
      'Sei do alerta anti-phishing',
      'Ativo segundo fator no cofre',
    ],
  },

  'sec-senhas-av-4': {
    trilhaId: 'sec-senhas-av', numero: 4, titulo: 'Vazamentos: descubra se sua senha caiu',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Empresas grandes são atacadas o tempo todo, e e-mails e senhas de milhões de pessoas acabam em pacotes vendidos por criminosos. A pergunta não é "será que vazou?", e sim "o que vazou meu, e o que eu faço a respeito?".',
      conceito: {
        titulo: 'Você pode descobrir e reagir a um vazamento',
        texto: 'Existem serviços confiáveis que permitem checar se o seu e-mail apareceu em vazamentos conhecidos. Se apareceu, o passo é claro: troque imediatamente a senha daquele serviço — e de qualquer outro onde você usava a mesma senha. Ative o segundo fator. Não entre em pânico: vazamento de e-mail é comum e, por si só, não dá acesso à sua conta se a senha for única e houver segundo fator. O perigo mora na repetição. Reagir rápido e tornar a senha única transforma um vazamento de notícia ruim em não-evento.',
      },
      estrutura: {
        titulo: 'O que fazer ao descobrir um vazamento',
        partes: [
          { simbolo: '🔎', desc: 'Cheque seu e-mail em serviços confiáveis de vazamento.' },
          { simbolo: '🔁', desc: 'Vazou? Troque a senha do serviço — e de onde ela se repetia.' },
          { simbolo: '🔐', desc: 'Ative o segundo fator na conta afetada.' },
          { simbolo: '😌', desc: 'Sem pânico: senha única + 2º fator = vazamento vira não-evento.' },
        ],
      },
      exemplo: {
        titulo: 'Reagindo a um vazamento',
        celulas: [
          { ref: 'Descoberta', valor: 'Seu e-mail apareceu em um vazamento de uma loja' },
          { ref: '1º passo', valor: 'Trocar a senha daquela loja imediatamente' },
          { ref: '2º passo', valor: 'Trocar onde você usava a mesma senha' },
          { ref: '3º passo', valor: 'Ativar o segundo fator nessas contas' },
        ],
        formula: 'Checar + trocar a repetida + ativar 2º fator',
        resultado: 'O vazamento perde a capacidade de virar invasão.',
        comentario: 'Muitos gerenciadores de senha avisam automaticamente quando uma senha sua aparece em vazamentos. É mais um motivo pra usar um: o monitoramento vem junto, sem você precisar checar manualmente.',
      },
      vocabulario: [
        { palavra: 'Verificador de vazamento', def: 'Serviço que mostra se seu e-mail caiu em ataques conhecidos.' },
        { palavra: 'Troca em cascata', def: 'Trocar a senha em todos os lugares onde ela se repetia.' },
        { palavra: 'Monitoramento', def: 'Aviso automático (de gerenciadores) quando uma senha sua vaza.' },
      ],
      chave: [
        'Cheque se seu e-mail apareceu em vazamentos conhecidos',
        'Ao vazar, troque a senha do serviço e de onde ela se repetia',
        'Senha única + segundo fator tornam o vazamento inofensivo',
      ],
      porque: 'Vazamentos são inevitáveis, mas o estrago não é. Saber checar e reagir — trocando a senha repetida e ativando o segundo fator — mantém você no controle mesmo quando uma empresa falha.',
    },
    pratica: {
      instrucao: 'Monte seu plano de reação a vazamentos.',
      passos: [
        'Saiba que existem serviços confiáveis pra checar seu e-mail',
        'Defina o reflexo: vazou → trocar a senha daquele serviço',
        'Defina: trocar também onde a senha se repetia',
        'Defina: ativar o segundo fator na conta afetada',
        'Combine: não entrar em pânico, e sim seguir os passos',
      ],
    },
    desafio: {
      cenario: 'Você sabe checar vazamentos e reage trocando a senha repetida e ativando o segundo fator.',
      requisitos: [
        'Sei checar se meu e-mail vazou',
        'Troco a senha do serviço afetado',
        'Troco onde a senha se repetia',
        'Ativo o segundo fator na conta',
        'Reajo sem pânico, seguindo os passos',
      ],
      dica: 'Se a senha que vazou era a do seu e-mail principal, trate como urgência máxima: troque-a já e revise as contas que usam esse e-mail pra recuperação. O e-mail é a chave mestra de tudo.',
    },
    validacao: [
      'Sei checar se meu e-mail vazou',
      'Troco a senha do serviço',
      'Troco onde se repetia',
      'Ativo o segundo fator',
      'Reajo sem pânico',
    ],
  },

  'sec-senhas-av-5': {
    trilhaId: 'sec-senhas-av', numero: 5, titulo: 'Verificação em duas etapas em tudo',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Mesmo que sua senha vaze, ainda dá pra trancar a porta. A verificação em duas etapas pede uma segunda prova de que é você — e é, de longe, a defesa que mais protege suas contas por minuto investido.',
      conceito: {
        titulo: 'Uma segunda chave que o golpista não tem',
        texto: 'A verificação em duas etapas (2FA) exige, além da senha, um segundo fator: um código que muda a cada segundos, uma confirmação no celular ou a biometria. Assim, mesmo que alguém descubra sua senha, não entra sem o segundo fator, que está com você. Ative o 2FA em todas as contas que oferecem, começando pelas críticas: e-mail principal, banco, redes sociais e o gerenciador de senhas. É o passo de maior retorno em segurança: poucos minutos pra ativar, e a sua conta passa a resistir mesmo a uma senha vazada.',
      },
      estrutura: {
        titulo: 'Onde ativar primeiro',
        partes: [
          { simbolo: '📧', desc: 'E-mail principal: a chave mestra que recupera tudo.' },
          { simbolo: '🏦', desc: 'Banco e apps de pagamento.' },
          { simbolo: '📱', desc: 'Redes sociais e mensageiros.' },
          { simbolo: '🔐', desc: 'O próprio gerenciador de senhas.' },
        ],
      },
      exemplo: {
        titulo: 'Por que o segundo fator segura o golpe',
        celulas: [
          { ref: 'Golpista tem', valor: 'Sua senha (vazada ou phishada)' },
          { ref: 'Golpista NÃO tem', valor: 'O segundo fator, que está com você' },
          { ref: 'Resultado', valor: 'A senha sozinha não abre a conta' },
          { ref: 'Você ativa', valor: 'Começando pelo e-mail, banco e gerenciador' },
        ],
        formula: 'Senha + segundo fator = barreira que a senha vazada não vence',
        resultado: 'Uma senha comprometida deixa de ser suficiente pra invadir.',
        comentario: 'Há tipos de segundo fator melhores que outros — a próxima missão compara app autenticador e SMS. Mas qualquer 2FA é muito melhor que nenhum: ative já, e refine depois.',
      },
      vocabulario: [
        { palavra: 'Verificação em duas etapas (2FA)', def: 'Pedir um segundo fator além da senha pra confirmar que é você.' },
        { palavra: 'Segundo fator', def: 'Código, confirmação no app ou biometria que só você tem.' },
        { palavra: 'Conta crítica', def: 'E-mail, banco, redes, gerenciador — onde o 2FA importa mais.' },
      ],
      chave: [
        'O 2FA segura a conta mesmo com a senha vazada',
        'Ative primeiro no e-mail, banco, redes e gerenciador',
        'Qualquer 2FA é muito melhor que nenhum',
      ],
      porque: 'A verificação em duas etapas é a defesa de melhor custo-benefício que existe. Poucos minutos por conta, e mesmo um vazamento ou phishing da senha não basta pra te invadir.',
    },
    pratica: {
      instrucao: 'Liste e ative o 2FA nas suas contas críticas.',
      passos: [
        'Liste: e-mail principal, banco, redes sociais, gerenciador',
        'Verifique quais já têm 2FA ativado',
        'Planeje ativar nas que faltam, começando pelo e-mail',
        'Entenda que o segundo fator fica só com você',
        'Combine: qualquer 2FA agora é melhor que esperar o "ideal"',
      ],
    },
    desafio: {
      cenario: 'Você ativa a verificação em duas etapas nas suas contas críticas, começando pelo e-mail.',
      requisitos: [
        'Entendo como o 2FA protege a conta',
        'Sei quais são minhas contas críticas',
        'Ativo o 2FA começando pelo e-mail',
        'Sei que o segundo fator fica comigo',
        'Ativo agora, refino o método depois',
      ],
      dica: 'Ao ativar o 2FA, guarde os códigos de recuperação (de backup) num lugar seguro. Eles destrancam a conta se você perder o acesso ao segundo fator — sem eles, recuperar pode ser difícil.',
    },
    validacao: [
      'Entendo como o 2FA protege',
      'Sei minhas contas críticas',
      'Ativo começando pelo e-mail',
      'O segundo fator fica comigo',
      'Guardo os códigos de recuperação',
    ],
  },

  'sec-senhas-av-6': {
    trilhaId: 'sec-senhas-av', numero: 6, titulo: 'App autenticador x SMS: qual é mais seguro',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Quando você ativa a verificação em duas etapas, costuma poder escolher receber o código por SMS ou por um app autenticador. Parecem iguais, mas há uma diferença de segurança importante — sobretudo contra o roubo do seu número.',
      conceito: {
        titulo: 'O código no app não depende do seu número',
        texto: 'No 2FA por SMS, o código chega por mensagem ao seu número. O problema: existe o golpe do SIM swap (visto na trilha do WhatsApp), em que o criminoso transfere o seu número pro chip dele e passa a receber os seus SMS — inclusive os códigos. Já o app autenticador gera os códigos dentro do próprio aparelho, sem depender da operadora nem do número, o que o torna mais resistente. A recomendação: onde puder, prefira o app autenticador ao SMS. Se só houver SMS, use mesmo assim — é melhor que nada —, mas proteja seu número com o PIN da operadora.',
      },
      estrutura: {
        titulo: 'Comparando os dois métodos',
        partes: [
          { simbolo: '📲', desc: 'SMS: código por mensagem; vulnerável ao roubo do número (SIM swap).' },
          { simbolo: '🔢', desc: 'App autenticador: gera o código no aparelho, sem depender do número.' },
          { simbolo: '✅', desc: 'Prefira o app autenticador onde for oferecido.' },
          { simbolo: '🔒', desc: 'Só tem SMS? Use, mas proteja o número com PIN na operadora.' },
        ],
      },
      exemplo: {
        titulo: 'Por que o app resiste melhor',
        celulas: [
          { ref: 'SMS', valor: 'Roubaram seu número → recebem seus códigos' },
          { ref: 'App', valor: 'Código gerado no aparelho → roubo do número não afeta' },
          { ref: 'Escolha', valor: 'App autenticador quando disponível' },
          { ref: 'Reforço', valor: 'PIN da operadora protege contra o SIM swap' },
        ],
        formula: 'App autenticador > SMS; mas qualquer 2FA > nenhum',
        resultado: 'Seu segundo fator deixa de depender do seu número.',
        comentario: 'Guarde com cuidado o acesso ao app autenticador e seus backups: se trocar de celular sem migrar, pode perder os códigos. Códigos de recuperação guardados resolvem esse risco.',
      },
      vocabulario: [
        { palavra: 'App autenticador', def: 'Aplicativo que gera códigos 2FA no próprio aparelho.' },
        { palavra: '2FA por SMS', def: 'Código enviado por mensagem; depende do seu número.' },
        { palavra: 'SIM swap', def: 'Golpe que transfere seu número pro chip do criminoso.' },
      ],
      chave: [
        'App autenticador é mais seguro que SMS (não depende do número)',
        'Prefira o app onde for oferecido',
        'Só tem SMS? Use, mas proteja o número com PIN da operadora',
      ],
      porque: 'Entender a diferença te faz escolher o segundo fator mais resistente. Migrar do SMS pro app autenticador nas contas críticas fecha a brecha que o golpe do SIM swap tenta explorar.',
    },
    pratica: {
      instrucao: 'Planeje migrar seu 2FA pro app autenticador.',
      passos: [
        'Veja em quais contas você usa 2FA por SMS hoje',
        'Verifique quais oferecem app autenticador',
        'Planeje migrar as contas críticas pro app',
        'Onde só houver SMS, garanta o PIN na operadora',
        'Combine: guardar os códigos de recuperação ao migrar',
      ],
    },
    desafio: {
      cenario: 'Você prefere o app autenticador ao SMS nas contas críticas e protege o número onde só há SMS.',
      requisitos: [
        'Sei por que o app é mais seguro que o SMS',
        'Identifico onde uso SMS hoje',
        'Migro as contas críticas pro app',
        'Protejo o número com PIN onde só há SMS',
        'Guardo os códigos de recuperação',
      ],
      dica: 'Não apague o app autenticador nem troque de celular sem antes migrar os códigos ou guardar os backups. Perder o autenticador sem recuperação pode trancar você fora das contas.',
    },
    validacao: [
      'Sei por que o app é mais seguro',
      'Identifico onde uso SMS',
      'Migro contas críticas pro app',
      'Protejo o número com PIN',
      'Guardo códigos de recuperação',
    ],
  },

  'sec-senhas-av-7': {
    trilhaId: 'sec-senhas-av', numero: 7, titulo: 'Passkeys: o login sem senha',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'E se você pudesse entrar nas suas contas sem digitar senha nenhuma, só com a digital ou o rosto, e ainda por cima ficar imune a phishing? Isso já existe e tem nome: passkey. É pra onde o login está caminhando.',
      conceito: {
        titulo: 'Uma chave que mora no seu aparelho e não dá pra phishar',
        texto: 'A passkey substitui a senha por uma chave guardada de forma segura no seu aparelho, que você desbloqueia com biometria (digital/rosto) ou o PIN do dispositivo. Como não existe uma "senha" pra ser digitada, não há o que vazar em ataques a empresas nem o que entregar num site falso — a passkey simplesmente não funciona fora do site verdadeiro. Isso a torna resistente a phishing por natureza. Cada vez mais serviços oferecem passkeys; quando aparecer a opção numa conta importante, vale ativar. É mais cômodo e mais seguro que a senha.',
      },
      estrutura: {
        titulo: 'Por que a passkey é diferente',
        partes: [
          { simbolo: '👆', desc: 'Você entra com biometria ou PIN do aparelho, sem digitar senha.' },
          { simbolo: '🚫', desc: 'Não há senha pra vazar em ataques a empresas.' },
          { simbolo: '🛡️', desc: 'Não funciona em site falso — resistente a phishing por natureza.' },
          { simbolo: '📈', desc: 'Cada vez mais serviços oferecem; ative quando aparecer.' },
        ],
      },
      exemplo: {
        titulo: 'Senha x passkey',
        celulas: [
          { ref: 'Senha', valor: 'Pode vazar, ser adivinhada ou phishada' },
          { ref: 'Passkey', valor: 'Guardada no aparelho, desbloqueada por biometria' },
          { ref: 'Phishing', valor: 'Passkey não funciona em site falso' },
          { ref: 'Ação', valor: 'Ativar onde a conta importante oferecer' },
        ],
        formula: 'Sem senha digitável = nada pra vazar ou phishar',
        resultado: 'Login mais cômodo e resistente a golpes de senha.',
        comentario: 'Passkeys não substituem ainda todas as senhas, e durante a transição você terá um misto. Tudo bem: ative passkeys onde der, e mantenha senha forte única + 2FA no restante. As defesas convivem.',
      },
      vocabulario: [
        { palavra: 'Passkey', def: 'Chave de login no aparelho, desbloqueada por biometria/PIN; substitui a senha.' },
        { palavra: 'Resistente a phishing', def: 'Não funciona em site falso, então não dá pra ser enganado a entregá-la.' },
        { palavra: 'Biometria', def: 'Digital ou rosto usados pra desbloquear a passkey no aparelho.' },
      ],
      chave: [
        'Passkey troca a senha por biometria/PIN no aparelho',
        'Não há senha pra vazar nem pra phishar',
        'Ative passkeys nas contas importantes que oferecem',
      ],
      porque: 'As passkeys são o futuro (e cada vez mais o presente) do login: mais cômodas e imunes a phishing. Conhecê-las e ativá-las onde possível coloca você um passo à frente dos golpes de senha.',
    },
    pratica: {
      instrucao: 'Descubra onde você já pode usar passkeys.',
      passos: [
        'Entenda: passkey = login por biometria/PIN, sem senha digitável',
        'Veja se suas contas importantes já oferecem passkey',
        'Planeje ativar nas que oferecem',
        'Saiba que, na transição, você terá um misto de senha e passkey',
        'Combine: manter senha única + 2FA onde ainda não há passkey',
      ],
    },
    desafio: {
      cenario: 'Você entende as passkeys e as ativa nas contas importantes que já oferecem.',
      requisitos: [
        'Entendo o que é uma passkey',
        'Sei por que ela resiste a phishing',
        'Verifico onde minhas contas oferecem passkey',
        'Ativo passkeys onde disponível',
        'Mantenho senha única + 2FA no restante',
      ],
      dica: 'Ao criar uma passkey, vincule-a a um meio que você consiga recuperar (sincronização do aparelho ou do gerenciador). Assim, se trocar de celular, você não perde o acesso à conta.',
    },
    validacao: [
      'Entendo o que é uma passkey',
      'Sei por que resiste a phishing',
      'Vejo onde já posso usar',
      'Ativo onde disponível',
      'Mantenho senha + 2FA no restante',
    ],
  },

  'sec-senhas-av-8': {
    trilhaId: 'sec-senhas-av', numero: 8, titulo: 'Perguntas de segurança e recuperação de conta',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: '"Qual o nome do seu primeiro animal de estimação?" Parece inofensivo, mas a resposta a essa pergunta pode estar no seu próprio perfil de rede social — e ser a porta dos fundos pra invadir sua conta. As opções de recuperação merecem o mesmo cuidado que a senha.',
      conceito: {
        titulo: 'A recuperação é uma porta — trate-a como uma',
        texto: 'Perguntas de segurança ("nome de solteira da mãe", "cidade natal", "primeiro pet") são fracas porque as respostas verdadeiras muitas vezes são públicas ou fáceis de descobrir. Por isso, quando forem obrigatórias, responda com algo aleatório e guardado no gerenciador — não com a verdade. Igualmente importante: mantenha atualizados os meios de recuperação (e-mail e telefone de recuperação), pois é por eles que você reconquista a conta se perder o acesso — e é por eles que um golpista tenta entrar. Revise periodicamente quais e-mails e telefones estão cadastrados pra recuperação das suas contas críticas.',
      },
      estrutura: {
        titulo: 'Como blindar a recuperação',
        partes: [
          { simbolo: '🎭', desc: 'Perguntas de segurança: responda com algo aleatório, não a verdade.' },
          { simbolo: '🗄️', desc: 'Guarde essas respostas falsas no gerenciador.' },
          { simbolo: '📧', desc: 'Mantenha e-mail e telefone de recuperação atualizados.' },
          { simbolo: '🔍', desc: 'Revise periodicamente os meios de recuperação cadastrados.' },
        ],
      },
      exemplo: {
        titulo: 'Resposta verdadeira x resposta-cofre',
        celulas: [
          { ref: 'Pergunta', valor: '"Nome do seu primeiro pet?"' },
          { ref: 'Fraca', valor: 'A verdade (pode estar nas suas redes)' },
          { ref: 'Forte', valor: 'Uma resposta aleatória guardada no gerenciador' },
          { ref: 'Revisar', valor: 'E-mail/telefone de recuperação ainda são seus?' },
        ],
        formula: 'Respostas aleatórias + recuperação atualizada = porta fechada',
        resultado: 'O golpista não entra pela "porta dos fundos".',
        comentario: 'Cheque se algum e-mail ou telefone de recuperação antigo, que não é mais seu, segue cadastrado. Um meio de recuperação que você perdeu pode virar entrada pra quem ficou com ele.',
      },
      vocabulario: [
        { palavra: 'Pergunta de segurança', def: 'Pergunta de recuperação; fraca quando respondida com a verdade pública.' },
        { palavra: 'Meio de recuperação', def: 'E-mail/telefone usados pra reconquistar o acesso à conta.' },
        { palavra: 'Resposta-cofre', def: 'Resposta aleatória guardada no gerenciador, em vez da verdade.' },
      ],
      chave: [
        'Responda perguntas de segurança com algo aleatório, não a verdade',
        'Guarde essas respostas no gerenciador',
        'Mantenha e revise os meios de recuperação',
      ],
      porque: 'A recuperação de conta é uma entrada tão real quanto a senha. Blindá-la — com respostas aleatórias e meios de recuperação atualizados — fecha a porta dos fundos que muitos golpistas preferem usar.',
    },
    pratica: {
      instrucao: 'Revise as opções de recuperação das suas contas críticas.',
      passos: [
        'Veja se suas contas usam perguntas de segurança',
        'Planeje trocar respostas verdadeiras por respostas aleatórias no cofre',
        'Confira o e-mail e telefone de recuperação de cada conta crítica',
        'Remova meios de recuperação antigos que não são mais seus',
        'Combine: revisar a recuperação de tempos em tempos',
      ],
    },
    desafio: {
      cenario: 'Você usa respostas aleatórias em perguntas de segurança e mantém os meios de recuperação atualizados.',
      requisitos: [
        'Não respondo perguntas de segurança com a verdade',
        'Guardo respostas aleatórias no gerenciador',
        'Confiro e-mail e telefone de recuperação',
        'Removo meios de recuperação antigos',
        'Reviso a recuperação periodicamente',
      ],
      dica: 'Tudo se conecta ao e-mail principal: se ele tiver senha única, 2FA e recuperação blindada, a maior parte das suas contas fica protegida em cascata. Capriche na proteção dele acima de tudo.',
    },
    validacao: [
      'Não respondo com a verdade',
      'Guardo respostas no gerenciador',
      'Confiro meios de recuperação',
      'Removo recuperações antigas',
      'Reviso periodicamente',
    ],
  },

  'sec-senhas-av-9': {
    trilhaId: 'sec-senhas-av', numero: 9, titulo: 'Projeto: blindar seus logins principais',
    tempoTotal: 18, xp: 120, vertente: 'ambos',
    aula: {
      gancho: 'Você reuniu tudo: frase-senha, gerenciador, vazamentos, 2FA, app autenticador, passkeys e recuperação. Hora de aplicar numa ordem inteligente e deixar seus logins mais importantes realmente blindados.',
      conceito: {
        titulo: 'Comece pela chave mestra e avance por prioridade',
        texto: 'Blindar logins não se faz tudo de uma vez, e sim por prioridade. Comece pelo e-mail principal — é ele que recupera todas as outras contas: senha única forte, 2FA (de preferência app autenticador), recuperação revisada. Depois, banco e apps de pagamento. Em seguida, o gerenciador de senhas (com senha mestra forte e 2FA). Por fim, redes sociais e demais contas, deixando o gerenciador criar senhas únicas e ativando passkeys onde houver. Avançando nessa ordem, cada passo protege as contas seguintes, e você chega a uma defesa completa sem se sobrecarregar.',
      },
      estrutura: {
        titulo: 'Ordem de blindagem',
        partes: [
          { simbolo: '📧', desc: '1º E-mail principal: senha única + 2FA + recuperação revisada.' },
          { simbolo: '🏦', desc: '2º Banco e pagamentos: senha única + 2FA.' },
          { simbolo: '🔐', desc: '3º Gerenciador: senha mestra forte + 2FA.' },
          { simbolo: '📱', desc: '4º Redes e demais: senhas únicas do cofre + passkeys onde houver.' },
        ],
      },
      exemplo: {
        titulo: 'Checklist da blindagem',
        celulas: [
          { ref: 'E-mail', valor: 'Senha única ✓ · 2FA (app) ✓ · Recuperação ✓' },
          { ref: 'Banco', valor: 'Senha única ✓ · 2FA ✓' },
          { ref: 'Gerenciador', valor: 'Senha mestra forte ✓ · 2FA ✓' },
          { ref: 'Demais', valor: 'Senhas únicas do cofre ✓ · Passkeys ✓' },
        ],
        formula: 'E-mail → banco → gerenciador → demais = blindagem completa',
        resultado: 'Seus logins resistem a vazamento, phishing e adivinhação.',
        comentario: 'Não precisa fazer tudo num dia. Blinde o e-mail hoje, o banco amanhã, e siga. O importante é a ordem: cada conta protegida facilita e protege as próximas.',
      },
      vocabulario: [
        { palavra: 'Blindagem por prioridade', def: 'Proteger primeiro o que recupera as outras contas (o e-mail).' },
        { palavra: 'Chave mestra', def: 'O e-mail principal, que recupera quase todas as suas contas.' },
        { palavra: 'Defesa em camadas', def: 'Senha única + 2FA + passkey + recuperação blindada juntas.' },
      ],
      chave: [
        'Blinde primeiro o e-mail (a chave mestra)',
        'Avance: banco, gerenciador, redes e demais',
        'Cada conta protegida facilita as próximas',
      ],
      porque: 'Este projeto transforma a trilha num plano de ação ordenado. Seguindo a sequência — e-mail, banco, gerenciador, demais —, você sai de senhas repetidas e expostas para logins blindados, sem se sobrecarregar.',
    },
    pratica: {
      instrucao: 'Execute (ou planeje) a blindagem na ordem de prioridade.',
      passos: [
        'E-mail principal: senha única forte + 2FA (app) + recuperação revisada',
        'Banco e pagamentos: senha única + 2FA',
        'Gerenciador: senha mestra forte + 2FA',
        'Redes e demais: senhas únicas do cofre',
        'Ative passkeys onde as contas oferecerem',
        'Revise: ficou alguma conta crítica sem 2FA?',
      ],
    },
    desafio: {
      cenario: 'Você blinda seus logins na ordem certa, do e-mail às demais contas, com todas as camadas.',
      requisitos: [
        'Blindo o e-mail primeiro (senha + 2FA + recuperação)',
        'Protejo banco e pagamentos com senha única + 2FA',
        'Protejo o gerenciador com senha mestra + 2FA',
        'Uso senhas únicas do cofre nas demais contas',
        'Ativo passkeys onde disponível',
      ],
      dica: 'Marque um lembrete pra revisar tudo de tempos em tempos: checar vazamentos, conferir 2FA e meios de recuperação. Segurança de login é manutenção leve, não esforço único.',
    },
    validacao: [
      'Blindo o e-mail primeiro',
      'Protejo banco e pagamentos',
      'Protejo o gerenciador',
      'Uso senhas únicas do cofre',
      'Ativo passkeys onde dá',
    ],
  },
};
