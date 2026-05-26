// ============================================================================
// CONTEÚDO — Saúde Digital (mob-saude)
// Conecte SUS, vacinas, exames, consultas, telemedicina. Vertente celular.
// ============================================================================

export const MOB_SAUDE = {
  'mob-saude-1': {
    trilhaId: 'mob-saude', numero: 1, titulo: 'Conecte SUS: o que dá pra fazer',
    tempoTotal: 7, xp: 30, vertente: 'celular',
    aula: {
      gancho: 'Seu histórico de saúde, vacinas, exames e medicamentos — tudo num app gratuito do governo, no seu bolso. O Conecte SUS organiza sua saúde de um jeito que a maioria das pessoas nem sabe que existe.',
      conceito: {
        titulo: 'Sua saúde digital, reunida e gratuita',
        texto: 'O Conecte SUS (Meu SUS Digital) é o app oficial de saúde do governo. Acessado com a conta Gov.br, ele reúne seu histórico de vacinação, resultados de exames feitos no SUS, medicamentos, atendimentos e mais. É como um "prontuário no bolso", gratuito. Pra qualquer pessoa — e especialmente pra quem acompanha a saúde de perto — é uma ferramenta poderosa de organização e autonomia.',
      },
      estrutura: {
        titulo: 'O que o Conecte SUS reúne',
        partes: [
          { simbolo: '💉', desc: 'Vacinas: carteira de vacinação digital, com histórico e comprovantes.' },
          { simbolo: '🧪', desc: 'Exames: resultados de exames feitos na rede pública.' },
          { simbolo: '💊', desc: 'Medicamentos: histórico de medicamentos retirados no SUS.' },
          { simbolo: '🩺', desc: 'Atendimentos: registros de consultas e procedimentos.' },
        ],
      },
      exemplo: {
        titulo: 'Saúde organizada',
        celulas: [
          { ref: 'Vacinas', valor: 'Comprovante sempre à mão' },
          { ref: 'Exames', valor: 'Resultados sem voltar ao posto' },
          { ref: 'Histórico', valor: 'Tudo num lugar só' },
          { ref: 'Acesso', valor: 'Login pela conta Gov.br' },
        ],
        formula: 'App oficial + conta Gov.br = sua saúde no bolso',
        resultado: 'Histórico de saúde organizado e acessível.',
        comentario: 'Use o app OFICIAL "Meu SUS Digital" / "Conecte SUS" da loja. Como envolve dados de saúde, desconfie de apps parecidos não oficiais.',
      },
      vocabulario: [
        { palavra: 'Conecte SUS / Meu SUS Digital', def: 'App oficial de saúde do governo, acessado pela conta Gov.br.' },
        { palavra: 'Prontuário', def: 'O registro do seu histórico de saúde.' },
        { palavra: 'Rede pública (SUS)', def: 'O sistema público de saúde; dados de atendimentos nele aparecem no app.' },
      ],
      chave: [
        'O Conecte SUS reúne vacinas, exames, medicamentos e atendimentos',
        'Acesso gratuito pela conta Gov.br',
        'Use só o app OFICIAL (dados de saúde são sensíveis)',
      ],
      porque: 'Ter o histórico de saúde organizado e acessível ajuda no acompanhamento médico, em emergências e na autonomia do cuidado. É especialmente valioso pra quem tem mais de 40 anos e acompanha a saúde de perto.',
    },
    pratica: {
      instrucao: 'Pegue o celular. Vamos conhecer o app oficial de saúde.',
      passos: [
        'Na loja de apps, procure "Meu SUS Digital" (ou "Conecte SUS") — confirme que é oficial',
        'Baixe e abra o app',
        'Faça login com sua conta Gov.br',
        'Explore as seções: vacinas, exames, medicamentos, atendimentos',
        'Veja quais dados seus já aparecem',
        'Familiarize-se com a navegação (sem se preocupar se algo estiver vazio)',
      ],
    },
    desafio: {
      cenario: 'Acesse o Conecte SUS e explore seu histórico de saúde, entendendo o que o app reúne.',
      requisitos: [
        'Baixei o app oficial de saúde',
        'Acessei com minha conta Gov.br',
        'Explorei as seções principais',
        'Vi quais dados meus aparecem',
        'Sei que devo usar só o app oficial',
      ],
      dica: 'Se alguns dados não aparecerem, é normal: depende dos registros estarem no sistema (atendimentos particulares geralmente não entram). O app vai ficando mais completo com o tempo.',
    },
    validacao: [
      'Sei o que é o Conecte SUS',
      'Acessei com a conta Gov.br',
      'Conheço as seções do app',
      'Vi meu histórico disponível',
      'Sei usar o app oficial com segurança',
    ],
  },

  'mob-saude-2': {
    trilhaId: 'mob-saude', numero: 2, titulo: 'Carteira de vacinação digital',
    tempoTotal: 7, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Perdeu a carteirinha de vacinação de papel? Precisa comprovar uma vacina pra viajar ou pro trabalho? A carteira digital resolve — com seu histórico de vacinas sempre acessível e comprovável.',
      conceito: {
        titulo: 'Suas vacinas registradas e comprováveis',
        texto: 'A carteira de vacinação digital, dentro do Conecte SUS, mostra as vacinas que você tomou na rede pública, com datas e doses. Você pode gerar comprovantes (úteis pra viagens, trabalho, escola) em PDF. É muito mais difícil de perder que o papel, e está sempre com você. Se faltar alguma vacina registrada, dá pra atualizar levando o comprovante de papel a um posto.',
      },
      estrutura: {
        titulo: 'Usando a carteira digital',
        partes: [
          { simbolo: '💉', desc: 'Ver vacinas: histórico com datas e doses, no Conecte SUS.' },
          { simbolo: '📄', desc: 'Gerar comprovante: em PDF, pra apresentar onde for exigido.' },
          { simbolo: '✈️', desc: 'Comprovante internacional: pra viagens (quando exigido).' },
          { simbolo: '🔄', desc: 'Faltou registro? Leve a carteirinha de papel a um posto pra atualizar.' },
        ],
      },
      exemplo: {
        titulo: 'Quando a carteira digital ajuda',
        celulas: [
          { ref: 'Trabalho', valor: 'Comprovar vacinas exigidas' },
          { ref: 'Viagem', valor: 'Comprovante internacional' },
          { ref: 'Perdeu o papel', valor: 'A digital substitui' },
          { ref: 'Atualizar', valor: 'Posto registra o que faltar' },
        ],
        formula: 'Histórico digital → gerar comprovante em PDF quando precisar',
        resultado: 'Vacinas sempre comprováveis, sem o papel.',
        comentario: 'Guarde o comprovante de vacinação em PDF na nuvem (Drive). Assim, mesmo sem internet ou com o app fora do ar, você tem o documento à mão.',
      },
      vocabulario: [
        { palavra: 'Carteira de vacinação digital', def: 'Registro digital das suas vacinas, no Conecte SUS.' },
        { palavra: 'Comprovante de vacinação', def: 'Documento (PDF) que prova as vacinas tomadas.' },
        { palavra: 'Dose', def: 'Cada aplicação de uma vacina (1ª, 2ª, reforço).' },
      ],
      chave: [
        'A carteira digital mostra suas vacinas com datas e doses',
        'Dá pra gerar comprovante em PDF (inclusive internacional)',
        'Faltou registro? Atualize num posto com a carteirinha de papel',
      ],
      porque: 'Comprovar vacinação é exigido em viagens, trabalhos e escolas. Ter tudo digital e comprovável evita transtornos e a perda do documento de papel — praticidade que pode salvar uma viagem ou uma contratação.',
    },
    pratica: {
      instrucao: 'No Conecte SUS, vamos ver e comprovar suas vacinas.',
      passos: [
        'Abra o Conecte SUS e vá na seção de vacinas',
        'Veja seu histórico (vacinas, datas, doses)',
        'Procure a opção de gerar/baixar o comprovante de vacinação',
        'Gere o comprovante em PDF',
        'Veja se há a opção de comprovante internacional (pra viagens)',
        'Salve o PDF na nuvem como backup',
        'Confira se falta alguma vacina que você sabe que tomou',
      ],
    },
    desafio: {
      cenario: 'Acesse sua carteira de vacinação digital, gere um comprovante em PDF e guarde-o como backup.',
      requisitos: [
        'Vi meu histórico de vacinas',
        'Gerei um comprovante em PDF',
        'Sei que existe o comprovante internacional',
        'Guardei o PDF na nuvem',
        'Sei como atualizar vacinas faltantes (num posto)',
      ],
      dica: 'Antes de uma viagem ou de começar um trabalho que peça vacinas, confira a carteira com antecedência. Se faltar algo, dá tempo de tomar ou regularizar no posto.',
    },
    validacao: [
      'Sei ver minha carteira de vacinação digital',
      'Sei gerar um comprovante em PDF',
      'Conheço o comprovante internacional',
      'Guardei o comprovante na nuvem',
      'Sei como atualizar o que falta',
    ],
  },

  'mob-saude-3': {
    trilhaId: 'mob-saude', numero: 3, titulo: 'Resultados de exames online',
    tempoTotal: 8, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Fez um exame e teria que voltar ao posto/laboratório só pra pegar o resultado? Muitos já ficam disponíveis online — pra você acessar, guardar e levar ao médico sem voltar lá.',
      conceito: {
        titulo: 'Resultados sem voltar ao laboratório',
        texto: 'Exames feitos na rede pública costumam aparecer no Conecte SUS; os de laboratórios particulares e planos ficam nos apps/sites deles. Acessar os resultados online evita deslocamentos e permite que você guarde tudo organizado e leve ao médico (no celular ou impresso). Entender que cada origem tem seu canal — SUS no Conecte SUS, particular no app do laboratório — é a chave.',
      },
      estrutura: {
        titulo: 'Onde achar cada resultado',
        partes: [
          { simbolo: '🏥', desc: 'SUS: resultados de exames públicos no Conecte SUS.' },
          { simbolo: '🔬', desc: 'Laboratório particular: no app/site do laboratório (com seu login/protocolo).' },
          { simbolo: '💼', desc: 'Plano de saúde: muitos têm app com resultados e histórico.' },
          { simbolo: '📁', desc: 'Organize: baixe os PDFs e guarde numa pasta de saúde (na nuvem).' },
        ],
      },
      exemplo: {
        titulo: 'Cada exame no seu canal',
        celulas: [
          { ref: 'Posto/SUS', valor: 'Conecte SUS' },
          { ref: 'Lab particular', valor: 'App do laboratório (protocolo/senha)' },
          { ref: 'Plano', valor: 'App do plano de saúde' },
          { ref: 'Levar ao médico', valor: 'No celular ou impresso' },
        ],
        formula: 'Identifique a origem → acesse o canal certo → guarde o PDF',
        resultado: 'Resultados acessíveis e organizados.',
        comentario: 'Leve os resultados ao médico de forma organizada (uma pasta por data/tipo). Isso agiliza a consulta e ajuda o médico a ter o quadro completo.',
      },
      vocabulario: [
        { palavra: 'Resultado de exame', def: 'O laudo com os achados do exame que você fez.' },
        { palavra: 'Protocolo', def: 'Código/senha que o laboratório dá pra você acessar o resultado online.' },
        { palavra: 'Laudo', def: 'O documento técnico com a interpretação do exame.' },
      ],
      chave: [
        'SUS no Conecte SUS; particular no app do laboratório; plano no app dele',
        'Baixe e organize os PDFs numa pasta de saúde',
        'Leve os resultados ao médico (celular ou impresso)',
      ],
      porque: 'Acessar resultados online economiza tempo e deslocamento, e ter tudo organizado melhora seu acompanhamento médico. Pra quem faz exames com frequência, é uma mudança enorme de praticidade.',
    },
    pratica: {
      instrucao: 'Pegue o celular. Vamos localizar resultados de exames (use os canais que se aplicam a você).',
      passos: [
        'No Conecte SUS, procure a seção de exames e veja o que aparece',
        'Se você fez exame em laboratório particular, encontre o app/site dele',
        'Veja como acessar (geralmente com CPF + protocolo/senha do exame)',
        'Se tem plano de saúde, veja se o app dele mostra resultados',
        'Baixe um resultado em PDF (se tiver disponível)',
        'Crie/uma pasta "Saúde - Exames" na nuvem e guarde lá',
      ],
    },
    desafio: {
      cenario: 'Localize e organize seus resultados de exames disponíveis online, guardando-os numa pasta de saúde.',
      requisitos: [
        'Verifiquei exames no Conecte SUS',
        'Sei onde acessar exames de laboratório particular',
        'Sei usar protocolo/login pra acessar',
        'Baixei pelo menos um resultado (se disponível)',
        'Organizei numa pasta de saúde na nuvem',
      ],
      dica: 'Crie uma pasta de saúde na nuvem organizada por ano ou tipo de exame. Ter o histórico reunido é valioso: numa consulta nova ou emergência, você mostra tudo rapidamente.',
    },
    validacao: [
      'Sei onde ficam os resultados (SUS/lab/plano)',
      'Sei acessar com protocolo/login',
      'Sei baixar resultados em PDF',
      'Organizo numa pasta de saúde',
      'Sei levar os resultados ao médico',
    ],
  },

  'mob-saude-4': {
    trilhaId: 'mob-saude', numero: 4, titulo: 'Agendar consultas e ver histórico',
    tempoTotal: 8, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Marcar consulta por telefone, esperar na linha, anotar num papelzinho que some... Muitos atendimentos hoje se agendam pelo celular, e o histórico fica registrado. Mais controle, menos papel perdido.',
      conceito: {
        titulo: 'Agendamentos e histórico na palma da mão',
        texto: 'Dependendo de onde você se trata, é possível agendar consultas pelo celular: alguns municípios têm apps de saúde, planos de saúde têm seus aplicativos, e clínicas usam sistemas online. Além de marcar, você acompanha o histórico de atendimentos. Combinar isso com a agenda do celular (lembretes!) evita esquecimentos e dá controle sobre seus cuidados.',
      },
      estrutura: {
        titulo: 'Organizando seus atendimentos',
        partes: [
          { simbolo: '📅', desc: 'Agendar: pelo app do município, do plano, ou da clínica (varia por onde você se trata).' },
          { simbolo: '🔔', desc: 'Lembrete: coloque a consulta na agenda do celular (Google Agenda) com aviso.' },
          { simbolo: '📋', desc: 'Histórico: veja atendimentos anteriores no Conecte SUS ou app do plano.' },
          { simbolo: '📝', desc: 'Prepare-se: anote dúvidas e leve exames pra aproveitar a consulta.' },
        ],
      },
      exemplo: {
        titulo: 'Da marcação ao lembrete',
        celulas: [
          { ref: 'Marcar', valor: 'App do município/plano/clínica' },
          { ref: 'Agenda', valor: 'Adicionar na Google Agenda + lembrete 1 dia antes' },
          { ref: 'Histórico', valor: 'Conecte SUS / app do plano' },
          { ref: 'Preparar', valor: 'Lista de dúvidas + exames recentes' },
        ],
        formula: 'Agendar → pôr na agenda com lembrete → preparar → comparecer',
        resultado: 'Consultas organizadas e bem aproveitadas.',
        comentario: 'Sempre que marcar uma consulta, coloque na agenda do celular com lembrete (1 dia e 1 hora antes). Esse hábito simples acaba com as consultas esquecidas.',
      },
      vocabulario: [
        { palavra: 'Agendamento', def: 'Marcar uma consulta ou exame com dia e hora.' },
        { palavra: 'Histórico de atendimentos', def: 'O registro das suas consultas e procedimentos.' },
        { palavra: 'App do plano', def: 'O aplicativo do seu plano de saúde, com agendamentos e histórico.' },
      ],
      chave: [
        'Agende pelo app que se aplica a você (município/plano/clínica)',
        'Sempre coloque a consulta na agenda do celular com lembrete',
        'Acompanhe o histórico e prepare-se pra cada consulta',
      ],
      porque: 'Organizar consultas e ter o histórico evita esquecimentos e melhora seu cuidado com a saúde. Aproveitar cada consulta (preparado, com exames em mãos) faz diferença real no atendimento que você recebe.',
    },
    pratica: {
      instrucao: 'Pegue o celular. Vamos organizar a parte de consultas (use os canais que se aplicam a você).',
      passos: [
        'Identifique como você costuma se tratar (SUS do município, plano, clínica)',
        'Procure o app/canal de agendamento correspondente',
        'Veja como marcar uma consulta (ou explore o processo)',
        'No Conecte SUS ou app do plano, veja seu histórico de atendimentos',
        'Pegue uma consulta futura (real ou hipotética) e coloque na Google Agenda',
        'Configure um lembrete pra 1 dia antes',
        'Crie uma nota com dúvidas pra levar à próxima consulta',
      ],
    },
    desafio: {
      cenario: 'Organize seus atendimentos: saiba como agendar pelo seu canal, veja seu histórico e use a agenda do celular com lembretes.',
      requisitos: [
        'Identifiquei meu canal de agendamento',
        'Sei como marcar uma consulta por ele',
        'Vi meu histórico de atendimentos',
        'Coloquei uma consulta na agenda com lembrete',
        'Preparei uma lista de dúvidas',
      ],
      dica: 'Mantenha uma "nota de saúde" no celular: medicamentos que toma, alergias, dúvidas pro médico, e datas de exames. Levar isso à consulta ajuda o médico e garante que você não esqueça de perguntar nada.',
    },
    validacao: [
      'Sei meu canal de agendamento',
      'Sei marcar uma consulta',
      'Vejo meu histórico de atendimentos',
      'Uso a agenda com lembretes',
      'Preparo-me pras consultas',
    ],
  },

  'mob-saude-5': {
    trilhaId: 'mob-saude', numero: 5, titulo: 'Telemedicina com segurança',
    tempoTotal: 9, xp: 60, vertente: 'celular',
    aula: {
      gancho: 'Consulta com o médico por vídeo, sem sair de casa? A telemedicina virou realidade — prática pra quem tem dificuldade de locomoção ou mora longe. Mas é preciso fazer com segurança e nos canais certos.',
      conceito: {
        titulo: 'O médico na tela, com segurança',
        texto: 'Telemedicina é a consulta médica feita por vídeo, à distância. É oferecida por planos de saúde, plataformas e até pelo SUS em alguns lugares. Junta as habilidades de reuniões online (câmera, microfone) com cuidados específicos de saúde: usar canais oficiais/confiáveis, ter um ambiente reservado, e desconfiar de "médicos" que aparecem em propaganda duvidosa. Bem feita, é segura e muito conveniente.',
      },
      estrutura: {
        titulo: 'Telemedicina segura',
        partes: [
          { simbolo: '🏥', desc: 'Canal confiável: pelo seu plano de saúde, SUS, ou plataforma reconhecida.' },
          { simbolo: '🎥', desc: 'Câmera e microfone: teste antes (como na trilha de Reuniões Online).' },
          { simbolo: '🔒', desc: 'Ambiente reservado: um lugar tranquilo e privado pra falar de saúde.' },
          { simbolo: '⚠️', desc: 'Cuidado: nunca pague por "consulta" de propaganda/rede social duvidosa.' },
        ],
      },
      exemplo: {
        titulo: 'Antes da teleconsulta',
        celulas: [
          { ref: 'Canal', valor: 'App do plano / SUS / plataforma oficial' },
          { ref: 'Teste', valor: 'Câmera, microfone e internet, uns minutos antes' },
          { ref: 'À mão', valor: 'Exames, lista de remédios, dúvidas' },
          { ref: 'Local', valor: 'Lugar reservado e bem iluminado' },
        ],
        formula: 'Canal confiável + teste técnico + preparo + ambiente reservado',
        resultado: 'Uma teleconsulta segura e produtiva.',
        comentario: 'Telemedicina legítima é feita por médicos registrados, em plataformas sérias. Desconfie de "consultas milagrosas" anunciadas em redes sociais — podem ser golpe ou charlatanismo.',
      },
      vocabulario: [
        { palavra: 'Telemedicina', def: 'Consulta médica realizada por vídeo, à distância.' },
        { palavra: 'Teleconsulta', def: 'A consulta em si, feita online com o médico.' },
        { palavra: 'Plataforma', def: 'O serviço/app onde a teleconsulta acontece.' },
      ],
      chave: [
        'Use canais confiáveis (plano, SUS, plataforma reconhecida)',
        'Teste câmera/microfone e tenha exames à mão',
        'Desconfie de "consultas" anunciadas em propaganda duvidosa',
      ],
      porque: 'A telemedicina amplia o acesso à saúde — essencial pra quem tem dificuldade de locomoção ou mora longe. Saber fazê-la com segurança une conveniência e cuidado, sem cair em armadilhas.',
    },
    pratica: {
      instrucao: 'Pegue o celular. Vamos preparar você pra uma teleconsulta (preparação; não precisa ter uma marcada).',
      passos: [
        'Identifique seu canal de telemedicina (app do plano, SUS, plataforma)',
        'Veja como agendar uma teleconsulta por ele',
        'Teste sua câmera e microfone (abra a câmera, grave um áudio de teste)',
        'Verifique sua conexão de internet (Wi-Fi é mais estável)',
        'Escolha um lugar reservado e bem iluminado pra falar',
        'Prepare uma pasta/nota com exames, remédios e dúvidas',
        'Reforce mentalmente: só canais confiáveis, nunca propaganda duvidosa',
      ],
    },
    desafio: {
      cenario: 'Prepare-se completamente pra uma teleconsulta segura: canal confiável identificado, equipamento testado e material em mãos.',
      requisitos: [
        'Identifiquei um canal confiável de telemedicina',
        'Sei como agendar uma teleconsulta',
        'Testei câmera, microfone e internet',
        'Defini um ambiente reservado',
        'Preparei exames, remédios e dúvidas',
        'Sei reconhecer canais NÃO confiáveis',
      ],
      dica: 'Na teleconsulta, peça pro médico repetir orientações importantes e anote (ou peça por escrito). Sem o papel da receita na mão, registrar bem o que foi dito evita confusões depois.',
    },
    validacao: [
      'Entendo o que é telemedicina',
      'Sei usar canais confiáveis',
      'Testo equipamento antes',
      'Preparo ambiente e materiais',
      'Reconheço canais não confiáveis',
    ],
  },

  'mob-saude-6': {
    trilhaId: 'mob-saude', numero: 6, titulo: 'Projeto: organize sua saúde digital',
    tempoTotal: 15, xp: 90, vertente: 'celular',
    aula: {
      gancho: 'Hora de juntar tudo: criar seu "centro de saúde digital" — histórico, vacinas, exames, contatos e lembretes, organizados num lugar só. Algo que ajuda você e, numa emergência, ajuda quem cuida de você.',
      conceito: {
        titulo: 'Toda sua saúde organizada e acessível',
        texto: 'Este projeto reúne a trilha numa organização prática: o Conecte SUS configurado, comprovantes de vacina e exames guardados na nuvem, uma "ficha de saúde" com informações essenciais (medicamentos, alergias, contatos de emergência), e consultas na agenda. Ter isso reunido dá tranquilidade no dia a dia e pode ser decisivo numa emergência — pra você ou pra quem precisar te socorrer.',
      },
      estrutura: {
        titulo: 'O centro de saúde digital',
        partes: [
          { simbolo: '📱', desc: 'Apps: Conecte SUS e o do plano (se tiver) acessíveis na tela.' },
          { simbolo: '📁', desc: 'Pasta na nuvem: vacinas, exames e laudos organizados.' },
          { simbolo: '🆘', desc: 'Ficha de saúde: medicamentos, alergias, tipo sanguíneo, contatos de emergência.' },
          { simbolo: '📅', desc: 'Agenda: consultas e exames com lembretes.' },
        ],
      },
      exemplo: {
        titulo: 'O que sua ficha de saúde deve ter',
        celulas: [
          { ref: 'Medicamentos', valor: 'O que você toma, doses e horários' },
          { ref: 'Alergias', valor: 'Remédios/substâncias a evitar' },
          { ref: 'Emergência', valor: 'Contatos pra avisar + tipo sanguíneo' },
          { ref: 'Acesso rápido', valor: 'Configurar no celular (info de emergência)' },
        ],
        formula: 'Apps + pasta na nuvem + ficha de saúde + agenda',
        resultado: 'Sua saúde organizada e pronta pra qualquer situação.',
        comentario: 'Os celulares têm uma área de "Informações de emergência / SOS" na tela de bloqueio, que socorristas podem acessar sem sua senha. Preencher isso (alergias, contatos) pode salvar sua vida.',
      },
      vocabulario: [
        { palavra: 'Ficha de saúde', def: 'Resumo das suas informações essenciais de saúde.' },
        { palavra: 'Informações de emergência', def: 'Dados acessíveis na tela de bloqueio pra socorristas (alergias, contatos).' },
        { palavra: 'Contato de emergência', def: 'Pessoa a ser avisada caso algo aconteça com você.' },
      ],
      chave: [
        'Reúna apps, documentos na nuvem, ficha de saúde e agenda',
        'Preencha as "informações de emergência" da tela de bloqueio',
        'Organização que ajuda no dia a dia e em emergências',
      ],
      porque: 'Ter a saúde digital organizada dá autonomia, melhora o acompanhamento médico e pode ser decisivo numa emergência. É cuidado consigo e com quem se importa com você — um dos projetos mais valiosos da vida prática.',
    },
    pratica: {
      instrucao: 'Reserve 15 minutos. Monte seu centro de saúde digital, usando tudo da trilha.',
      passos: [
        'Deixe o Conecte SUS (e o app do plano, se tiver) acessíveis na tela inicial',
        'Crie uma pasta "Saúde" na nuvem e guarde comprovante de vacinas e exames',
        'Crie uma "ficha de saúde" (nota ou documento): medicamentos, alergias, tipo sanguíneo, contatos de emergência',
        'Preencha as "Informações de emergência / Médico" do celular (na tela de bloqueio)',
        'Adicione um contato de emergência (ICE) no celular',
        'Coloque suas próximas consultas/exames na agenda com lembretes',
        'Revise: tudo acessível e organizado?',
      ],
    },
    desafio: {
      cenario: 'Entregue seu centro de saúde digital: apps acessíveis, documentos na nuvem, ficha de saúde e informações de emergência configuradas.',
      requisitos: [
        'Apps de saúde acessíveis na tela',
        'Pasta de saúde na nuvem com vacinas/exames',
        'Ficha de saúde criada (medicamentos, alergias, contatos)',
        'Informações de emergência preenchidas no celular',
        'Consultas na agenda com lembretes',
        'Tudo organizado e acessível',
      ],
      dica: 'Parabéns — você organizou sua saúde digital! Compartilhe a localização da sua pasta/ficha com alguém de confiança da família. Numa emergência, ter essas informações acessíveis pode fazer toda a diferença.',
    },
    validacao: [
      'Apps de saúde acessíveis',
      'Documentos de saúde na nuvem',
      'Ficha de saúde criada',
      'Informações de emergência preenchidas',
      'Consultas na agenda com lembretes',
      'Minha saúde digital está organizada',
    ],
  },
};
