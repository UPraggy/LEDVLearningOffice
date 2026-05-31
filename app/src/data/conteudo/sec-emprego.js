// ============================================================================
// CONTEÚDO — Golpe de Emprego: Vagas Falsas e Falsas Seleções (sec-emprego)
// módulo Segurança · vertente "ambos"
// Vaga boa demais, taxa pra "vaga"/exame/uniforme, falso recrutador, entrevista
// só por mensagem, pedido de dados/documentos, home office milagroso, falso RH de
// empresa conhecida, como verificar uma vaga. Autoral, foco no Brasil.
// ============================================================================

export const SEC_EMPREGO = {
  'sec-emprego-1': {
    trilhaId: 'sec-emprego', numero: 1, titulo: 'A vaga boa demais: quando a oferta de emprego é isca',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Receber uma proposta de emprego com salário alto, sem experiência exigida e trabalho leve parece sorte — mas, quando ela chega do nada por mensagem, costuma ser golpe. Reconhecer a "vaga boa demais" protege seu dinheiro e seus dados.',
      conceito: {
        titulo: 'A necessidade de trabalho é a porta que golpistas exploram',
        texto: 'Golpes de emprego exploram algo legítimo e urgente: a necessidade de uma renda. Por isso a isca costuma ser uma vaga "perfeita" — salário acima do mercado, sem exigir experiência, horário flexível, "trabalhe de casa" — oferecida sem que você tenha se candidatado, geralmente por mensagem ou rede social. O contraste entre o quanto promete e o quão pouco pede é justamente o alerta. Empresas sérias têm processos de seleção, exigências e canais oficiais; não saem oferecendo emprego dos sonhos por DM. Nesta trilha você vai aprender os sinais da vaga falsa e, principalmente, como verificar antes de entregar qualquer coisa. A regra de entrada: oferta de emprego que chega sozinha, promete muito e exige pouco, merece desconfiança — não comemoração.',
      },
      estrutura: {
        titulo: 'Sinais da vaga boa demais',
        partes: [
          { simbolo: '💰', desc: 'Salário acima do mercado por trabalho leve.' },
          { simbolo: '🚪', desc: 'Chega sem você ter se candidatado.' },
          { simbolo: '📭', desc: 'Vem por mensagem/rede social, não por canal oficial.' },
          { simbolo: '⚠️', desc: 'Promete muito e exige pouco = alerta.' },
        ],
      },
      exemplo: {
        titulo: 'A proposta que caiu do céu',
        celulas: [
          { ref: 'Você recebe', valor: 'Mensagem: "Vaga home office, R$ 4 mil, sem experiência"' },
          { ref: 'Você não', valor: 'Não se candidatou a nada nessa empresa' },
          { ref: 'Sente', valor: 'Empolgação — a vaga parece perfeita' },
          { ref: 'Verdade', valor: 'O "perfeito demais" é a isca do golpe' },
        ],
        formula: 'Promete muito + exige pouco + chega sozinha = vaga falsa',
        resultado: 'Você desconfia da oferta antes de responder.',
        comentario: 'Quanto mais a vaga parece resolver todos os seus problemas de uma vez, mais cuidado merece. Golpistas desenham a oferta exatamente pra ser irresistível pra quem precisa de trabalho.',
      },
      vocabulario: [
        { palavra: 'Vaga falsa', def: 'Oferta de emprego usada como isca de golpe.' },
        { palavra: 'Abordagem espontânea', def: 'Proposta que chega sem você ter se candidatado.' },
        { palavra: 'Canal oficial', def: 'Site/RH verdadeiro da empresa — onde vagas reais aparecem.' },
      ],
      chave: [
        'Golpes de emprego exploram a necessidade de renda',
        'Vaga que promete muito e exige pouco é isca',
        'Oferta que chega sozinha por mensagem merece desconfiança',
      ],
      porque: 'A vaga falsa é a porta de entrada de golpes que cobram taxas e roubam dados. Reconhecer a "oferta boa demais" como isca — e desconfiar em vez de comemorar — protege você logo no primeiro contato.',
    },
    pratica: {
      instrucao: 'Calibre o radar pra vagas boas demais.',
      passos: [
        'Desconfie de salário alto por trabalho leve sem experiência',
        'Note se você realmente se candidatou àquela vaga',
        'Repare se a oferta chegou por mensagem ou rede social',
        'Aplique a regra: promete muito + exige pouco = alerta',
        'Trate a vaga perfeita como motivo de cautela, não festa',
      ],
    },
    desafio: {
      cenario: 'Você reconhece a "vaga boa demais" como possível isca de golpe.',
      requisitos: [
        'Sei que golpes de emprego exploram a necessidade de renda',
        'Desconfio de salário alto por trabalho leve',
        'Percebo quando a oferta chega sem eu me candidatar',
        'Reparo no canal (mensagem/rede social vs oficial)',
        'Aplico a regra "promete muito, exige pouco"',
      ],
      dica: 'Estar precisando de emprego não te deixa "ingênuo" — deixa você na mira. Justamente por isso, manter a regra da vaga boa demais é um ato de proteção, não de pessimismo.',
    },
    validacao: [
      'Golpe explora necessidade de renda',
      'Desconfio de muito por pouco',
      'Vejo se me candidatei',
      'Reparo no canal',
      'Vaga perfeita = cautela',
    ],
  },

  'sec-emprego-2': {
    trilhaId: 'sec-emprego', numero: 2, titulo: 'Taxa pra conseguir a vaga: o sinal que nunca falha',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Se em algum momento da "contratação" pedirem que você pague algo — taxa de cadastro, exame, uniforme, kit, curso obrigatório — pare. Empresa séria não cobra do candidato pra contratar. Esse é o sinal mais confiável de golpe de emprego.',
      conceito: {
        titulo: 'Quem contrata paga você — nunca o contrário',
        texto: 'O coração de muitos golpes de emprego é fazer você pagar pra "garantir a vaga". Os pretextos variam: taxa de cadastro ou de análise, exame médico antecipado, compra de uniforme/kit/material, curso ou certificação "obrigatória", depósito caução, frete de equipamento. Tudo embrulhado com urgência ("a vaga é sua, só falta isso") pra você pagar antes de pensar. Mas a regra do mundo do trabalho é clara e sem exceção: o empregador paga o trabalhador; despesas de contratação são da empresa, não do candidato. Se uma seleção, em qualquer etapa, exige que você desembolse dinheiro pra avançar ou começar, é golpe. Não importa quão real pareça o resto do processo.',
      },
      estrutura: {
        titulo: 'Os disfarces da taxa',
        partes: [
          { simbolo: '🧾', desc: 'Taxa de "cadastro", "análise" ou "reserva da vaga".' },
          { simbolo: '👕', desc: 'Compra de uniforme, kit ou material antecipado.' },
          { simbolo: '🎓', desc: 'Curso/certificação "obrigatória" paga por você.' },
          { simbolo: '🛑', desc: 'Empresa séria não cobra o candidato pra contratar.' },
        ],
      },
      exemplo: {
        titulo: 'O "só falta pagar isso"',
        celulas: [
          { ref: 'Processo', valor: 'Tudo parece avançando bem — "vaga praticamente sua"' },
          { ref: 'Vem o pedido', valor: '"Só falta a taxa de exame/uniforme pra começar"' },
          { ref: 'Urgência', valor: '"Paga hoje senão a vaga vai pra outro"' },
          { ref: 'Verdade', valor: 'Pagou? O contato some. A vaga nunca existiu' },
        ],
        formula: 'Seleção que pede você pagar pra avançar/começar = golpe',
        resultado: 'Você recusa na hora em que pedem dinheiro.',
        comentario: 'A urgência existe pra impedir você de raciocinar. Mas nenhuma regra muda: contratar gera custo pra empresa, não pro candidato. O pedido de pagamento é a confissão do golpe.',
      },
      vocabulario: [
        { palavra: 'Taxa de seleção', def: 'Cobrança falsa pra "garantir" ou avançar na vaga.' },
        { palavra: 'Caução de equipamento', def: 'Pretexto pra você depositar por um material que não vem.' },
        { palavra: 'Custo de contratação', def: 'Despesa que é da empresa, nunca do candidato.' },
      ],
      chave: [
        'Empresa séria não cobra do candidato pra contratar',
        'Taxa, exame, uniforme ou curso pagos por você = golpe',
        'A urgência serve pra você pagar antes de pensar',
      ],
      porque: 'O pedido de pagamento é o sinal mais confiável de golpe de emprego. Gravar "quem contrata paga você, nunca o contrário" desmonta a fraude no ponto exato em que ela pede seu dinheiro.',
    },
    pratica: {
      instrucao: 'Use o teste do pagamento em qualquer seleção.',
      passos: [
        'Acenda o alerta máximo se pedirem você pagar algo',
        'Reconheça os disfarces: taxa, exame, uniforme, curso, caução',
        'Ignore a urgência ("paga hoje ou perde a vaga")',
        'Lembre: custo de contratação é da empresa',
        'Recuse qualquer vaga que exija você desembolsar dinheiro',
      ],
    },
    desafio: {
      cenario: 'Você recusa qualquer seleção que peça pagamento do candidato.',
      requisitos: [
        'Sei que empresa séria não cobra pra contratar',
        'Reconheço os disfarces da taxa',
        'Não me deixo levar pela urgência',
        'Lembro que o custo de contratação é da empresa',
        'Recuso vaga que peça eu pagar',
      ],
      dica: 'Vale também pra "vagas" que pedem compra de produtos pra revender como condição pra "trabalhar": muitas vezes é pirâmide disfarçada de emprego. O teste do pagamento pega as duas.',
    },
    validacao: [
      'Empresa não cobra candidato',
      'Reconheço os disfarces',
      'Ignoro a urgência',
      'Custo é da empresa',
      'Recuso vaga que cobra',
    ],
  },

  'sec-emprego-3': {
    trilhaId: 'sec-emprego', numero: 3, titulo: 'Falso recrutador e entrevista só por mensagem',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Um "recrutador" que conduz tudo por aplicativo de mensagem, com pressa, sem nunca falar por voz ou vídeo e usando um e-mail estranho: o jeito como a seleção acontece já diz muito sobre se ela é real.',
      conceito: {
        titulo: 'O processo conduzido só por chat e com pressa é suspeito',
        texto: 'Golpistas se passam por recrutadores e conduzem toda a "seleção" por mensagem de texto, evitando contato real. Sinais comuns: a abordagem vem de um número desconhecido; o e-mail usado não é o domínio da empresa (é gmail, hotmail, ou um endereço genérico parecido); a "entrevista" é só um questionário por chat, sem conversa de verdade; há pressa pra "fechar a contratação"; e o recrutador resiste a se identificar ou a marcar uma conversa por voz/vídeo oficial. Nada disso prova golpe sozinho, mas a soma desenha o padrão: processo apressado, anônimo e fora dos canais oficiais. Recrutamento sério tem nome, empresa verificável, e-mail corporativo e disposição pra conversar de verdade. Quando tudo foge disso, desconfie e verifique pelos canais oficiais da empresa.',
      },
      estrutura: {
        titulo: 'Sinais no jeito da seleção',
        partes: [
          { simbolo: '📱', desc: 'Tudo por chat, sem voz/vídeo oficial.' },
          { simbolo: '📧', desc: 'E-mail genérico, não o domínio da empresa.' },
          { simbolo: '🏃', desc: 'Pressa pra "fechar" a contratação.' },
          { simbolo: '🕵️', desc: 'Recrutador resiste a se identificar e verificar.' },
        ],
      },
      exemplo: {
        titulo: 'O recrutador que foge do telefone',
        celulas: [
          { ref: 'Contato', valor: 'Número desconhecido, e-mail "@gmail" no nome da empresa' },
          { ref: 'Entrevista', valor: 'Só um questionário por mensagem, sem conversa real' },
          { ref: 'Você sugere', valor: 'Uma ligação oficial pra confirmar — ele evita' },
          { ref: 'Padrão', valor: 'Apressado, anônimo, fora dos canais oficiais' },
        ],
        formula: 'Chat-only + e-mail genérico + pressa + anonimato = suspeito',
        resultado: 'Você lê o processo e percebe o que está fora do lugar.',
        comentario: 'Recrutadores reais querem se mostrar — a empresa quer ser confiável pro candidato também. Quem foge de se identificar e de uma conversa oficial está escondendo algo.',
      },
      vocabulario: [
        { palavra: 'Falso recrutador', def: 'Golpista que se passa por quem conduz a seleção.' },
        { palavra: 'E-mail corporativo', def: 'Endereço no domínio da empresa (não gmail/hotmail).' },
        { palavra: 'Verificação do recrutador', def: 'Confirmar nome e empresa pelos canais oficiais.' },
      ],
      chave: [
        'Golpistas conduzem a "seleção" só por chat, evitando contato real',
        'E-mail genérico e pressa são sinais de alerta',
        'Recrutamento sério se identifica e aceita verificação',
      ],
      porque: 'O modo como a seleção é conduzida revela muito. Reconhecer o padrão apressado, anônimo e fora dos canais oficiais ajuda você a desconfiar de falsos recrutadores antes de entregar dados ou dinheiro.',
    },
    pratica: {
      instrucao: 'Leia os sinais no jeito da seleção.',
      passos: [
        'Repare se tudo acontece só por chat, sem voz/vídeo',
        'Confira se o e-mail usa o domínio real da empresa',
        'Note a pressa pra "fechar" a contratação',
        'Observe se o recrutador foge de se identificar',
        'Confirme a vaga e o recrutador pelos canais oficiais',
      ],
    },
    desafio: {
      cenario: 'Você reconhece falsos recrutadores pelo modo como conduzem a seleção.',
      requisitos: [
        'Desconfio de processo só por chat',
        'Confiro o domínio do e-mail',
        'Percebo a pressa pra fechar',
        'Noto quando o recrutador foge de se identificar',
        'Confirmo pelos canais oficiais da empresa',
      ],
      dica: 'Pra confirmar, vá ao site oficial da empresa e procure a vaga ou o RH por lá. Se a vaga não existe no canal oficial, ou o "recrutador" não bate com a empresa, é golpe.',
    },
    validacao: [
      'Desconfio de chat-only',
      'Confiro o e-mail',
      'Percebo a pressa',
      'Noto o anonimato',
      'Confirmo no oficial',
    ],
  },

  'sec-emprego-4': {
    trilhaId: 'sec-emprego', numero: 4, titulo: 'Dados e documentos: o que uma vaga pode (e não pode) pedir',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Algumas seleções falsas não querem seu dinheiro — querem seus dados. Foto de documento, selfie segurando RG, número de conta, senhas: saber o que uma vaga real pede e quando é cedo demais protege sua identidade.',
      conceito: {
        titulo: 'Dado sensível pedido cedo demais é coleta, não contratação',
        texto: 'Há golpes de emprego cujo objetivo é coletar seus dados pessoais pra fraudes: abrir contas no seu nome, fazer empréstimos, ou usar você como mula. Por isso pedem cedo demais coisas que uma vaga real só precisa depois (ou nunca): foto do documento e selfie segurando o RG logo na "inscrição", número e dados bancários "pra cadastrar o pagamento" antes de qualquer contrato, ou — o mais grave — senhas, código de aplicativo do banco ou códigos que chegam por SMS. A régua: no início de um processo legítimo, pedem dados de contato e currículo. Documentos completos e dados bancários só fazem sentido depois da contratação formal, e senha/código de banco nunca, em hipótese alguma. Pedido de dado sensível cedo demais é o golpe se revelando.',
      },
      estrutura: {
        titulo: 'O que acende o alerta',
        partes: [
          { simbolo: '🪪', desc: 'Foto de documento + selfie com RG logo na inscrição.' },
          { simbolo: '🏦', desc: 'Dados bancários antes de qualquer contrato.' },
          { simbolo: '🔑', desc: 'Senha, código do app do banco ou código por SMS.' },
          { simbolo: '📏', desc: 'No início, vaga real pede só contato e currículo.' },
        ],
      },
      exemplo: {
        titulo: 'A "inscrição" que pede demais',
        celulas: [
          { ref: 'Pedem cedo', valor: 'Selfie com RG, CPF e dados bancários na "inscrição"' },
          { ref: 'Vaga real', valor: 'No começo, só pede contato e currículo' },
          { ref: 'Pior ainda', valor: 'Pedem senha ou código que chegou por SMS' },
          { ref: 'Objetivo', valor: 'Roubar identidade, abrir conta, usar como mula' },
        ],
        formula: 'Dado sensível pedido cedo demais = coleta pra fraude',
        resultado: 'Você segura seus dados até a hora certa — e nunca dá senha.',
        comentario: 'Documento e dados bancários têm hora certa: depois da contratação real. Senha e código de banco não têm hora nenhuma — nunca se entrega, pra emprego ou qualquer outra coisa.',
      },
      vocabulario: [
        { palavra: 'Roubo de identidade', def: 'Usar seus dados pra fraudes em seu nome.' },
        { palavra: 'Dado sensível', def: 'Documento, dados bancários, senhas — pedidos cedo = alerta.' },
        { palavra: 'Código por SMS', def: 'Código de verificação que nunca deve ser compartilhado.' },
      ],
      chave: [
        'Alguns golpes de emprego querem seus dados, não seu dinheiro',
        'Documento e dados bancários só após a contratação formal',
        'Senha e código de banco nunca se entregam — pra ninguém',
      ],
      porque: 'A coleta de dados sensíveis cedo demais é a marca dos golpes que miram sua identidade. Saber o que uma vaga real pede em cada etapa — e nunca entregar senha/código — protege você de fraudes em seu nome.',
    },
    pratica: {
      instrucao: 'Proteja seus dados nas seleções.',
      passos: [
        'No início, forneça só dados de contato e currículo',
        'Não envie selfie com documento logo na "inscrição"',
        'Guarde dados bancários para depois da contratação formal',
        'Nunca entregue senha ou código do app do banco',
        'Trate pedido sensível cedo demais como sinal de golpe',
      ],
    },
    desafio: {
      cenario: 'Você reconhece quando uma vaga pede dados sensíveis cedo demais.',
      requisitos: [
        'Sei que há golpes que querem dados, não dinheiro',
        'Forneço só contato e currículo no início',
        'Não envio documento/selfie cedo demais',
        'Guardo dados bancários pra após a contratação',
        'Nunca entrego senha ou código de SMS',
      ],
      dica: 'Una com a trilha de senhas e PIX: código que chega por SMS é a chave da sua conta. Nenhum "RH" precisa dele. Quem pede esse código está tentando invadir, não contratar.',
    },
    validacao: [
      'Há golpe que quer dados',
      'No início, só contato/currículo',
      'Documento na hora certa',
      'Banco só após contratar',
      'Senha/código: nunca',
    ],
  },

  'sec-emprego-5': {
    trilhaId: 'sec-emprego', numero: 5, titulo: 'Home office milagroso e "ganhe muito de casa"',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: '"Trabalhe de casa, 2 horas por dia, ganhe muito." O trabalho remoto é real e ótimo — mas golpistas usam o desejo dele pra vender fraudes. Separar home office de verdade do "milagre" protege seu tempo e seu bolso.',
      conceito: {
        titulo: 'Trabalho remoto real tem função clara; o golpe vende só o resultado',
        texto: 'O home office legítimo existe e cresce, e por isso virou isca perfeita: golpistas prometem ganhos altos por pouco esforço "trabalhando de casa", sem dizer exatamente o que você faria. As fraudes típicas se escondem aí: as "tarefas" pagas que depois pedem depósito (renda extra falsa), os esquemas que pedem você recrutar gente (pirâmide), o "revenda nossos produtos" que exige comprar estoque, e o "processe pagamentos de casa" (mula financeira). O sinal de separação: trabalho real tem uma função clara — você sabe o que vai fazer, pra quem, e como será pago de forma compatível com o esforço. O golpe vende o resultado ("ganhe muito de casa") sem um trabalho de verdade por trás. Quando não dá pra explicar com clareza o que é o serviço, desconfie.',
      },
      estrutura: {
        titulo: 'Home office: real x milagre',
        partes: [
          { simbolo: '🧩', desc: 'Real: função clara — o que, pra quem, como paga.' },
          { simbolo: '🎈', desc: 'Milagre: vende o resultado, não o trabalho.' },
          { simbolo: '🔁', desc: 'Esconde golpe: depósito, recrutar, comprar estoque, repassar dinheiro.' },
          { simbolo: '❓', desc: 'Não explica o serviço com clareza? Desconfie.' },
        ],
      },
      exemplo: {
        titulo: 'O "ganhe de casa" sem trabalho',
        celulas: [
          { ref: 'Promessa', valor: '"Ganhe muito de casa, 2h por dia, fácil"' },
          { ref: 'Você pergunta', valor: '"O que exatamente eu faço?" — resposta vaga' },
          { ref: 'Aparece', valor: 'Pedido de depósito, ou recrutar, ou comprar estoque' },
          { ref: 'Verdade', valor: 'Não há trabalho real — só o golpe embrulhado' },
        ],
        formula: 'Promete resultado sem função clara = golpe disfarçado de home office',
        resultado: 'Você exige clareza sobre o serviço antes de seguir.',
        comentario: 'A pergunta mais poderosa é simples: "o que exatamente eu faria e como sou pago?". Trabalho real responde isso com naturalidade; o golpe se enrola, muda de assunto ou já pede dinheiro.',
      },
      vocabulario: [
        { palavra: 'Home office', def: 'Trabalho remoto legítimo — com função e pagamento claros.' },
        { palavra: 'Oferta vaga', def: 'Promessa de ganho sem dizer qual é o serviço real.' },
        { palavra: 'Golpe embrulhado', def: 'Fraude (depósito/pirâmide/mula) vestida de trabalho de casa.' },
      ],
      chave: [
        'Trabalho remoto real tem função clara; o golpe vende só o resultado',
        'Home office milagroso costuma esconder depósito, recrutamento ou mula',
        'Se não explicam o serviço com clareza, desconfie',
      ],
      porque: 'O desejo legítimo de trabalhar de casa é explorado por golpes que prometem muito sem um serviço real. Exigir clareza sobre o que é o trabalho e como você é pago separa o home office verdadeiro da fraude embrulhada.',
    },
    pratica: {
      instrucao: 'Separe home office real de "milagre".',
      passos: [
        'Pergunte exatamente o que você faria e pra quem',
        'Pergunte como e quanto seria o pagamento',
        'Desconfie de respostas vagas sobre o serviço',
        'Cuidado com depósito, recrutar ou comprar estoque',
        'Sem função clara, trate como golpe disfarçado',
      ],
    },
    desafio: {
      cenario: 'Você distingue trabalho remoto legítimo de golpes "ganhe de casa".',
      requisitos: [
        'Exijo saber o que exatamente faria',
        'Pergunto como seria o pagamento',
        'Desconfio de respostas vagas',
        'Reconheço depósito/recrutar/estoque como alerta',
        'Sem função clara, trato como golpe',
      ],
      dica: 'Home office de verdade existe em empresas reais com vagas reais — procure por elas em canais oficiais. A fraude raramente sobrevive à pergunta "o que exatamente eu faço aqui?".',
    },
    validacao: [
      'Exijo saber o serviço',
      'Pergunto o pagamento',
      'Desconfio do vago',
      'Depósito/estoque = alerta',
      'Sem clareza = golpe',
    ],
  },

  'sec-emprego-6': {
    trilhaId: 'sec-emprego', numero: 6, titulo: 'Falso RH de empresa conhecida',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Receber uma mensagem do "RH" de uma empresa grande e conhecida dá uma sensação de confiança imediata. É exatamente isso que o golpista quer: o nome famoso empresta credibilidade que ele não tem.',
      conceito: {
        titulo: 'O nome da empresa grande é roubado pra baixar sua guarda',
        texto: 'Golpistas se passam pelo RH de empresas conhecidas — varejistas, bancos, apps famosos, redes de loja — porque o nome forte faz você confiar e baixar a guarda. Eles imitam logos, criam e-mails e páginas parecidas, e usam frases como "estamos contratando em massa". A partir daí, o golpe segue o roteiro de sempre: taxa, dados ou senha. O ponto-chave: usar o nome de uma empresa real não prova nada — qualquer um pode copiar um logo. A confiança tem que vir da verificação, não do nome. Empresas grandes divulgam vagas em seus canais oficiais (site de carreiras, plataformas reconhecidas); elas não te contratam por uma mensagem inesperada que pede taxa ou documento. Diante de um "RH famoso", confirme pelo canal oficial da empresa antes de qualquer passo.',
      },
      estrutura: {
        titulo: 'Como o nome famoso é usado',
        partes: [
          { simbolo: '🏢', desc: 'Mensagem do "RH" de empresa grande e conhecida.' },
          { simbolo: '🎨', desc: 'Logo, e-mail e página imitando a marca real.' },
          { simbolo: '📣', desc: '"Contratação em massa" pra justificar a abordagem.' },
          { simbolo: '✅', desc: 'Confiança vem da verificação, não do nome.' },
        ],
      },
      exemplo: {
        titulo: 'O RH que parece confiável',
        celulas: [
          { ref: 'Chega', valor: 'Mensagem do "RH" de uma rede famosa contratando' },
          { ref: 'Sensação', valor: 'Confiança imediata pelo nome conhecido' },
          { ref: 'Depois', valor: 'Pedem taxa, documento ou senha (o golpe de sempre)' },
          { ref: 'Verdade', valor: 'Logo copiado; a empresa real não fez esse contato' },
        ],
        formula: 'Nome famoso + contato inesperado + pedido de taxa/dado = golpe',
        resultado: 'Você confirma no canal oficial antes de confiar no nome.',
        comentario: 'O nome grande é justamente a tática — quanto mais conhecida a empresa, mais natural parece confiar. Por isso a verificação no canal oficial vale ainda mais quando o nome é famoso.',
      },
      vocabulario: [
        { palavra: 'Falso RH', def: 'Golpista que finge ser o setor de pessoal de uma empresa.' },
        { palavra: 'Uso indevido de marca', def: 'Copiar logo e nome de empresa real pra enganar.' },
        { palavra: 'Site de carreiras', def: 'Canal oficial onde vagas reais são divulgadas.' },
      ],
      chave: [
        'Golpistas usam o nome de empresas famosas pra você confiar',
        'Copiar um logo não prova nada — confiança vem da verificação',
        'Empresas grandes divulgam vagas em canais oficiais, não por surpresa',
      ],
      porque: 'O nome de uma empresa conhecida baixa a guarda e abre caminho pro golpe. Lembrar que credibilidade vem da verificação (não do nome) e confirmar no canal oficial neutraliza o falso RH por mais convincente que pareça.',
    },
    pratica: {
      instrucao: 'Não confie só porque o nome é famoso.',
      passos: [
        'Desconfie de "RH" de empresa grande que te aborda do nada',
        'Lembre que logo e e-mail podem ser copiados',
        'Trate "contratação em massa" como pretexto comum',
        'Procure a vaga no site de carreiras oficial da empresa',
        'Só siga após confirmar pelo canal oficial',
      ],
    },
    desafio: {
      cenario: 'Você verifica o "RH" de empresas famosas em vez de confiar no nome.',
      requisitos: [
        'Sei que golpistas usam nomes de empresas conhecidas',
        'Lembro que logos podem ser copiados',
        'Desconfio de "contratação em massa" inesperada',
        'Procuro a vaga no canal oficial de carreiras',
        'Confirmo antes de qualquer passo',
      ],
      dica: 'Pesquise a vaga digitando você mesmo o endereço do site oficial da empresa — nunca pelo link que veio na mensagem. Links em abordagens de golpe levam a páginas falsas que imitam a real.',
    },
    validacao: [
      'Nome famoso é tática',
      'Logo pode ser copiado',
      'Desconfio de "massa"',
      'Procuro no oficial',
      'Confirmo antes de seguir',
    ],
  },

  'sec-emprego-7': {
    trilhaId: 'sec-emprego', numero: 7, titulo: 'Como verificar se uma vaga é real',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'A boa notícia: dá pra checar se uma vaga é real com poucos passos. Saber verificar transforma a dúvida ("será golpe?") em uma resposta com base — e te deixa seguro pra avançar quando a vaga é legítima.',
      conceito: {
        titulo: 'Uma vaga real resiste à verificação por canais oficiais',
        texto: 'Pra confirmar uma vaga, alguns passos resolvem a maioria dos casos: procure a empresa e a vaga no canal oficial (site de carreiras, plataformas reconhecidas), digitando o endereço você mesmo; confira o e-mail do recrutador — é o domínio da empresa ou um endereço genérico? Pesquise o nome da empresa e o nome do recrutador junto com palavras como "golpe" ou "reclamação"; verifique se a empresa existe de fato e tem reputação; e teste se o processo aceita uma conversa oficial por voz/vídeo. Por fim, aplique os filtros das missões anteriores: pediram taxa? dados sensíveis cedo? senha/código? A regra: vaga real sobrevive à verificação — dá pra confirmar pelos canais oficiais e ela continua de pé. Golpe não resiste: foge, se enrola ou já pediu dinheiro antes de você checar.',
      },
      estrutura: {
        titulo: 'Passos pra verificar a vaga',
        partes: [
          { simbolo: '🌐', desc: 'Procurar a vaga no canal oficial (você digitando o endereço).' },
          { simbolo: '📧', desc: 'Conferir o domínio do e-mail do recrutador.' },
          { simbolo: '🔎', desc: 'Pesquisar empresa/recrutador + "golpe"/"reclamação".' },
          { simbolo: '🧪', desc: 'Aplicar os filtros: pediram taxa? dados? senha?' },
        ],
      },
      exemplo: {
        titulo: 'Confirmando antes de avançar',
        celulas: [
          { ref: 'Passo 1', valor: 'Procuro a vaga no site oficial de carreiras' },
          { ref: 'Passo 2', valor: 'Confiro o e-mail e pesquiso a empresa + "golpe"' },
          { ref: 'Passo 3', valor: 'Vejo se pediram taxa, dados cedo ou senha' },
          { ref: 'Decisão', valor: 'Resistiu a tudo? legítima. Falhou em algo? golpe' },
        ],
        formula: 'Canal oficial + e-mail + pesquisa + filtros = verificação',
        resultado: 'Você decide com base, não no medo nem na pressa.',
        comentario: 'Verificar não é desconfiar de tudo — é dar à vaga real a chance de se provar e ao golpe a chance de se revelar. A vaga honesta nunca se incomoda com sua checagem.',
      },
      vocabulario: [
        { palavra: 'Verificação de vaga', def: 'Checar empresa, recrutador e canais antes de avançar.' },
        { palavra: 'Reputação', def: 'O que se encontra ao pesquisar a empresa e o recrutador.' },
        { palavra: 'Canal oficial', def: 'Site de carreiras/plataforma reconhecida da empresa.' },
      ],
      chave: [
        'Vaga real resiste à verificação pelos canais oficiais',
        'Confira canal, e-mail, reputação e os filtros (taxa/dados/senha)',
        'Golpe não resiste: foge, se enrola ou já pediu dinheiro',
      ],
      porque: 'Saber verificar transforma medo em decisão fundamentada. Com poucos passos pelos canais oficiais, você confirma vagas legítimas com segurança e desmascara golpes — sem deixar de aproveitar oportunidades reais.',
    },
    pratica: {
      instrucao: 'Pratique a verificação de vagas.',
      passos: [
        'Procure a vaga no canal oficial, digitando o endereço',
        'Confira se o e-mail é do domínio da empresa',
        'Pesquise empresa e recrutador + "golpe"/"reclamação"',
        'Confirme que a empresa existe e tem reputação',
        'Aplique os filtros: pediram taxa, dados ou senha?',
      ],
    },
    desafio: {
      cenario: 'Você verifica a legitimidade de uma vaga antes de avançar.',
      requisitos: [
        'Procuro a vaga no canal oficial',
        'Confiro o domínio do e-mail',
        'Pesquiso empresa e recrutador',
        'Confirmo existência e reputação',
        'Aplico os filtros de taxa, dados e senha',
      ],
      dica: 'Na dúvida, peça a opinião de alguém de confiança antes de avançar. Uma segunda pessoa olhando costuma perceber sinais que a esperança de conseguir a vaga faz a gente ignorar.',
    },
    validacao: [
      'Procuro no oficial',
      'Confiro o e-mail',
      'Pesquiso reputação',
      'Confirmo a empresa',
      'Aplico os filtros',
    ],
  },

  'sec-emprego-8': {
    trilhaId: 'sec-emprego', numero: 8, titulo: 'Caiu (ou quase): o que fazer depois',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'E se você já pagou uma taxa, enviou documentos ou quase caiu num golpe de emprego? Saber agir rápido reduz o estrago — e perceber que isso acontece com muita gente tira o peso da vergonha que costuma travar a reação.',
      conceito: {
        titulo: 'Agir rápido e sem vergonha reduz o dano',
        texto: 'Cair num golpe não é burrice — golpistas são profissionais que exploram necessidade e pressa. O que importa é a reação. Se você enviou dinheiro, registre tudo (mensagens, comprovantes, contatos) e acione seu banco o quanto antes pra avaliar o que é possível; quanto mais rápido, melhor. Se enviou documentos ou dados, fique atento a usos indevidos do seu nome e considere os caminhos oficiais de proteção e registro de ocorrência. Se entregou senha ou código de banco, troque a senha imediatamente e contate o banco. Em todos os casos, faça um boletim de ocorrência — ele é importante pra sua defesa e pra denúncia. E corte o contato com o golpista. O maior obstáculo costuma ser a vergonha, que faz a pessoa demorar a reagir ou esconder o ocorrido. Falar e agir rápido é o que protege — não o silêncio.',
      },
      estrutura: {
        titulo: 'Reação por tipo de perda',
        partes: [
          { simbolo: '💸', desc: 'Pagou: junte provas e acione o banco rápido.' },
          { simbolo: '🪪', desc: 'Deu documentos: vigie usos do seu nome; registre ocorrência.' },
          { simbolo: '🔑', desc: 'Deu senha/código: troque já e contate o banco.' },
          { simbolo: '🗣️', desc: 'Sem vergonha: agir e falar rápido reduz o estrago.' },
        ],
      },
      exemplo: {
        titulo: 'Os primeiros passos depois do golpe',
        celulas: [
          { ref: 'Pare', valor: 'Corte o contato e não envie mais nada' },
          { ref: 'Registre', valor: 'Guarde mensagens, comprovantes e contatos' },
          { ref: 'Acione', valor: 'Banco (se houve dinheiro/senha) e boletim de ocorrência' },
          { ref: 'Cuide', valor: 'Monitore seu nome e troque senhas expostas' },
        ],
        formula: 'Parar + registrar + acionar banco/BO + monitorar = resposta',
        resultado: 'Você reduz o dano e ainda ajuda a denunciar.',
        comentario: 'Cada minuto conta, sobretudo com dinheiro e senha. E lembre: relatar o golpe não é admitir fracasso — é o passo que protege você e alerta outros possíveis alvos.',
      },
      vocabulario: [
        { palavra: 'Boletim de ocorrência', def: 'Registro oficial do golpe, base pra defesa e denúncia.' },
        { palavra: 'Monitorar o nome', def: 'Ficar atento a contas/empréstimos abertos com seus dados.' },
        { palavra: 'Resposta a incidente', def: 'Os passos rápidos pra reduzir o dano de um golpe.' },
      ],
      chave: [
        'Cair em golpe não é burrice; o que importa é reagir rápido',
        'Pagou/deu senha → banco já; deu dados → vigie o nome e registre BO',
        'A vergonha atrasa a reação — falar e agir rápido protege',
      ],
      porque: 'Saber o que fazer depois reduz o prejuízo e combate a vergonha que paralisa as vítimas. Uma reação rápida — provas, banco, boletim, monitoramento — protege você e ajuda a impedir que o golpista faça novas vítimas.',
    },
    pratica: {
      instrucao: 'Saiba reagir se cair ou quase cair.',
      passos: [
        'Corte o contato e não envie mais nada',
        'Junte provas: mensagens, comprovantes, contatos',
        'Acione o banco rápido se houve dinheiro ou senha',
        'Registre um boletim de ocorrência',
        'Monitore o uso do seu nome e troque senhas expostas',
      ],
    },
    desafio: {
      cenario: 'Você sabe reagir rápido se cair (ou quase cair) num golpe de emprego.',
      requisitos: [
        'Sei que cair em golpe não é burrice',
        'Corto o contato e guardo provas',
        'Aciono o banco rápido quando há dinheiro/senha',
        'Registro boletim de ocorrência',
        'Monitoro meu nome e troco senhas expostas',
      ],
      dica: 'Se conhece alguém que passou por isso, acolha em vez de criticar. O acolhimento faz a pessoa reagir mais rápido — e a rapidez é o que mais reduz o prejuízo.',
    },
    validacao: [
      'Cair não é burrice',
      'Corto contato, guardo provas',
      'Aciono o banco rápido',
      'Registro o BO',
      'Monitoro meu nome',
    ],
  },

  'sec-emprego-9': {
    trilhaId: 'sec-emprego', numero: 9, titulo: 'Projeto: busca de emprego à prova de golpe',
    tempoTotal: 18, xp: 120, vertente: 'ambos',
    aula: {
      gancho: 'Hora de reunir tudo num jeito seguro de procurar emprego: aproveitando as oportunidades reais e barrando as fraudes, com um checklist que você aplica a qualquer vaga que aparecer.',
      conceito: {
        titulo: 'Um checklist torna sua busca segura sem te fechar pra oportunidades',
        texto: 'Sua busca à prova de golpe junta os sinais da trilha. Sobre a oferta: ela promete muito e exige pouco, e chegou sem eu me candidatar? Sobre o dinheiro: pediram qualquer taxa, exame, uniforme ou curso pra eu pagar? (golpe certo). Sobre os dados: pediram documento/dados bancários cedo demais, ou — pior — senha/código? Sobre o recrutador: o processo é só por chat, com e-mail genérico e pressa? Usa o nome de uma empresa famosa pra eu confiar? Sobre a verificação: eu confirmei a vaga no canal oficial e pesquisei a empresa? E se algo der errado, eu sei reagir rápido e sem vergonha. Com esse checklist, você não precisa recusar tudo nem aceitar qualquer coisa — você verifica, e deixa passar só o que é real. Boa busca, com segurança.',
      },
      estrutura: {
        titulo: 'Checklist da busca segura',
        partes: [
          { simbolo: '🎣', desc: 'Oferta: promete muito, exige pouco, chegou sozinha?' },
          { simbolo: '💳', desc: 'Dinheiro: pediram taxa/exame/uniforme/curso? → golpe.' },
          { simbolo: '🔐', desc: 'Dados: documento cedo? senha/código? → alerta.' },
          { simbolo: '🔎', desc: 'Recrutador e verificação: confirmei no canal oficial?' },
        ],
      },
      exemplo: {
        titulo: 'Passando a vaga pelo checklist',
        celulas: [
          { ref: 'Oferta', valor: 'Realista e procurada por mim? ✓ / boa demais? ✗' },
          { ref: 'Dinheiro', valor: 'Nenhuma taxa pedida? ✓' },
          { ref: 'Dados', valor: 'Nada de senha/código e documento na hora certa? ✓' },
          { ref: 'Verificação', valor: 'Confirmada no canal oficial? ✓' },
        ],
        formula: 'Oferta + dinheiro + dados + recrutador/verificação = busca segura',
        resultado: 'Você procura emprego sem medo e sem cair em golpe.',
        comentario: 'O checklist protege sua busca sem fechá-la: vagas reais passam por ele tranquilamente, e só os golpes tropeçam. Verificar é o que deixa você dizer "sim" com segurança.',
      },
      vocabulario: [
        { palavra: 'Busca segura', def: 'Procurar emprego aplicando verificação a cada vaga.' },
        { palavra: 'Checklist anti-golpe', def: 'Perguntas que filtram fraudes sem barrar vagas reais.' },
        { palavra: 'Canal oficial', def: 'Onde vagas verdadeiras são confirmadas.' },
      ],
      chave: [
        'O checklist cobre oferta, dinheiro, dados e recrutador/verificação',
        'Pediu taxa = golpe; pediu senha = golpe; confirme no oficial',
        'Verificar protege a busca sem fechá-la pra oportunidades reais',
      ],
      porque: 'Este projeto reúne a trilha num checklist prático pra sua busca de emprego. Avaliando oferta, dinheiro, dados e verificação, você aproveita vagas reais com segurança e barra fraudes — sem medo paralisante nem ingenuidade.',
    },
    pratica: {
      instrucao: 'Monte e use seu checklist de busca segura.',
      passos: [
        'Oferta: promete muito, exige pouco, chegou sem eu pedir?',
        'Dinheiro: pediram taxa, exame, uniforme ou curso? → golpe',
        'Dados: pediram documento cedo ou senha/código? → alerta',
        'Recrutador: só chat, e-mail genérico, pressa, nome famoso?',
        'Verificação: confirmei a vaga no canal oficial e pesquisei?',
        'Se algo der errado: reaja rápido, sem vergonha',
      ],
    },
    desafio: {
      cenario: 'Você aplica um checklist anti-golpe a qualquer vaga antes de avançar.',
      requisitos: [
        'Avalio a oferta (boa demais? chegou sozinha?)',
        'Recuso qualquer vaga que peça pagamento',
        'Protejo meus dados e nunca dou senha/código',
        'Leio os sinais do recrutador',
        'Confirmo no canal oficial antes de avançar',
      ],
      dica: 'Você fechou a trilha de golpes de emprego. Junte com as de PIX, WhatsApp, senhas e golpes financeiros pra blindar sua vida digital enquanto busca novas oportunidades.',
    },
    validacao: [
      'Avalio a oferta',
      'Recuso vaga que cobra',
      'Protejo dados e senha',
      'Leio o recrutador',
      'Confirmo no oficial',
    ],
  },
};
