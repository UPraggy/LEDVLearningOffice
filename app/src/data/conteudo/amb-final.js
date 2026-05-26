// ============================================================================
// CONTEÚDO — Projeto Final (amb-final)
// "Uma semana simulada de trabalho": o chefe virtual (Carlos Mendes) envia uma
// tarefa por dia que usa as habilidades das trilhas. Capstone do módulo Mercado.
// ============================================================================

export const AMB_FINAL = {
  'amb-final-1': {
    trilhaId: 'amb-final', numero: 1, titulo: 'Segunda: a planilha de controle',
    tempoTotal: 20, xp: 100, vertente: 'ambos',
    aula: {
      gancho: 'Seu primeiro dia no Escritório. Carlos, o coordenador, manda uma mensagem: "Bom dia! Preciso de uma planilha de controle de gastos do projeto até o fim do dia. Consegue?". Hora de usar tudo que você aprendeu de Excel — pra valer.',
      conceito: {
        titulo: 'Uma tarefa real, do jeito que acontece no trabalho',
        texto: 'No mundo real, ninguém te dá uma "aula" antes de uma tarefa — você recebe uma demanda e precisa resolver com o que sabe. Esta é a proposta da semana simulada: 5 tarefas, uma por dia, cada uma como um pedido de verdade do seu coordenador. Hoje é a planilha de controle. Você vai aplicar a trilha de Excel (tabela, fórmulas, formatação, gráfico) numa situação concreta de escritório.',
      },
      estrutura: {
        titulo: 'A demanda do Carlos (decifrada)',
        partes: [
          { simbolo: '📋', desc: 'O que ele quer: uma planilha de controle de gastos do projeto.' },
          { simbolo: '🧮', desc: 'Habilidades: tabela formatada, SOMA, formato R$, e um resumo (total/média).' },
          { simbolo: '📊', desc: 'Diferencial: um gráfico de gastos por categoria impressiona.' },
          { simbolo: '📎', desc: 'Entrega: exportar em PDF e (na vida real) responder o e-mail dele com o anexo.' },
        ],
      },
      exemplo: {
        titulo: 'A mensagem do chefe',
        celulas: [
          { ref: '08:32', valor: 'Carlos: "Bom dia! Tudo bem?"' },
          { ref: '08:32', valor: 'Carlos: "Preciso de uma planilha de controle de gastos do projeto"' },
          { ref: '08:33', valor: 'Carlos: "Com total e, se der, um gráfico. Até o fim do dia, pode ser?"' },
          { ref: 'Você', valor: '"Bom dia, Carlos! Pode deixar, entrego hoje."' },
        ],
        formula: 'Demanda real → aplicar Excel → entregar com qualidade',
        resultado: 'Sua primeira entrega profissional na semana simulada.',
        comentario: 'Repare: responder confirmando o recebimento e o prazo (etiqueta da trilha de Comunicação) já causa boa impressão antes mesmo de entregar.',
      },
      vocabulario: [
        { palavra: 'Demanda', def: 'Uma tarefa/pedido que chega no trabalho, geralmente com um prazo.' },
        { palavra: 'Entregável', def: 'O resultado concreto que você precisa produzir (aqui, a planilha em PDF).' },
        { palavra: 'Prazo', def: 'O tempo combinado pra entregar a demanda.' },
      ],
      chave: [
        'No trabalho, você recebe demandas e resolve com o que sabe',
        'Confirme o recebimento e o prazo (boa etiqueta)',
        'Hoje: aplicar a trilha de Excel numa tarefa real',
      ],
      porque: 'Este projeto final simula exatamente o dia a dia que te espera no mercado: receber pedidos e entregar com qualidade e no prazo. É a ponte entre "aprendi" e "sei usar no trabalho".',
    },
    pratica: {
      instrucao: 'Reserve 20 minutos. Você é o responsável pela planilha que o Carlos pediu. Use a trilha de Excel.',
      passos: [
        'Crie uma planilha "Controle de Gastos - Projeto" (Excel ou Sheets)',
        'Monte a tabela: Data, Categoria, Descrição, Valor (com cabeçalho formatado)',
        'Lance 8-10 gastos de exemplo (datas, categorias, valores)',
        'Formate os valores como R$ e aplique bordas/cores na tabela',
        'Calcule o total com =SOMA e adicione média (MÉDIA) e maior gasto (MÁXIMO)',
        'Crie um gráfico de gastos por categoria',
        'Congele o cabeçalho e ative filtros',
        'Exporte em PDF com nome profissional (controle-gastos-projeto.pdf)',
      ],
    },
    desafio: {
      cenario: 'Entregue a planilha de controle de gastos que o Carlos pediu: tabela formatada, total e resumo, gráfico, exportada em PDF.',
      requisitos: [
        'Tabela formatada com cabeçalho e valores em R$',
        'Total calculado com SOMA (+ média e/ou maior gasto)',
        'Um gráfico de gastos por categoria',
        'Cabeçalho congelado e filtros ativos',
        'Exportada em PDF com nome profissional',
        'Bônus: "respondi" o Carlos confirmando a entrega',
      ],
      dica: 'Na vida real, anexaria o PDF num e-mail curto e educado pro Carlos: "Olá, Carlos! Segue em anexo a planilha de controle de gastos. Qualquer ajuste, me avise. Abraço." Estrutura + anexo + tom certo = trilha de Comunicação em ação.',
    },
    validacao: [
      'Montei a tabela de controle formatada',
      'Calculei total e um resumo (média/maior)',
      'Criei um gráfico de gastos',
      'Congelei cabeçalho e ativei filtros',
      'Exportei em PDF com nome profissional',
    ],
  },

  'amb-final-2': {
    trilhaId: 'amb-final', numero: 2, titulo: 'Terça: o ofício por e-mail',
    tempoTotal: 20, xp: 100, vertente: 'ambos',
    aula: {
      gancho: 'Terça-feira. Nova mensagem do Carlos: "Preciso enviar um ofício formal pro nosso fornecedor solicitando um orçamento. Pode redigir e mandar por e-mail?". Hora de juntar Word + e-mail profissional.',
      conceito: {
        titulo: 'Documento formal + envio profissional',
        texto: 'Muitas tarefas de escritório combinam habilidades: aqui você redige um documento formal (trilha de Word) e o envia com etiqueta (trilha de Comunicação). O ofício é escrito no Word/Docs, exportado em PDF, e enviado num e-mail bem estruturado. É um fluxo completo que aparece o tempo todo no trabalho administrativo.',
      },
      estrutura: {
        titulo: 'A demanda decifrada',
        partes: [
          { simbolo: '📝', desc: 'Ofício: documento formal (cabeçalho, data, destinatário, corpo, fecho) — trilha Word.' },
          { simbolo: '📄', desc: 'PDF: exportar pra não desformatar no fornecedor.' },
          { simbolo: '✉️', desc: 'E-mail: assunto claro, saudação, corpo objetivo, anexo, fecho — trilha Comunicação.' },
          { simbolo: '📎', desc: 'Anexar o PDF e conferir antes de enviar.' },
        ],
      },
      exemplo: {
        titulo: 'A mensagem do chefe',
        celulas: [
          { ref: '09:10', valor: 'Carlos: "Bom dia! Tudo certo com a planilha de ontem, ótima!"' },
          { ref: '09:11', valor: 'Carlos: "Hoje preciso de um ofício pro fornecedor pedindo orçamento de 200 cadeiras"' },
          { ref: '09:11', valor: 'Carlos: "Manda por e-mail pra contato@fornecedor.com, me deixa em cópia"' },
          { ref: 'Você', valor: '"Combinado, Carlos! Redijo e envio com você em cópia."' },
        ],
        formula: 'Word (ofício) → PDF → e-mail (com Cc pro chefe)',
        resultado: 'Tarefa que cruza duas trilhas, resolvida.',
        comentario: '"Me deixa em cópia" = use o campo Cc (trilha de Comunicação). O Carlos acompanha sem ser o destinatário principal.',
      },
      vocabulario: [
        { palavra: 'Ofício', def: 'Documento formal de comunicação oficial entre pessoas/instituições.' },
        { palavra: 'Orçamento', def: 'Pedido de preço/condições a um fornecedor.' },
        { palavra: 'Cc (cópia)', def: 'Quem acompanha o e-mail sem ser o destinatário principal.' },
      ],
      chave: [
        'Tarefas reais cruzam habilidades (Word + e-mail)',
        'Ofício formal → PDF → e-mail bem estruturado',
        '"Me deixa em cópia" = campo Cc',
      ],
      porque: 'Redigir um documento formal e enviá-lo corretamente é rotina administrativa pura. Dominar esse fluxo completo te torna útil de imediato em qualquer escritório.',
    },
    pratica: {
      instrucao: 'Reserve 20 minutos. Redija o ofício e prepare o e-mail (pode enviar pra você mesmo como teste).',
      passos: [
        'No Word/Docs, redija o ofício: cabeçalho (sua empresa), data, destinatário (fornecedor)',
        'Corpo: solicite o orçamento das 200 cadeiras, com clareza e objetividade',
        'Fecho formal (Atenciosamente) + assinatura',
        'Revise a ortografia e exporte em PDF (oficio-orcamento-cadeiras.pdf)',
        'Abra um novo e-mail: assunto "Solicitação de orçamento — 200 cadeiras"',
        'Escreva saudação + corpo curto avisando do anexo + fecho',
        'Coloque o destinatário em "Para" e o "Carlos" (seu próprio 2º e-mail) em Cc',
        'Anexe o PDF, confira, e envie (teste)',
      ],
    },
    desafio: {
      cenario: 'Entregue a tarefa da terça: um ofício formal em PDF enviado por e-mail bem estruturado, com o chefe em cópia.',
      requisitos: [
        'Ofício formal completo (cabeçalho, data, destinatário, corpo, fecho)',
        'Exportado em PDF com nome profissional',
        'E-mail com assunto claro, saudação, corpo objetivo e fecho',
        'PDF anexado e conferido',
        'Chefe (2º e-mail seu) em Cc; destinatário em Para',
      ],
      dica: 'Guarde o ofício como modelo (trilha de Word). Da próxima vez que precisar de um documento formal parecido, é só duplicar, ajustar e exportar — você não começa do zero.',
    },
    validacao: [
      'Redigi um ofício formal completo',
      'Exportei em PDF com nome profissional',
      'Escrevi um e-mail bem estruturado',
      'Anexei o PDF e conferi',
      'Usei Para e Cc corretamente',
    ],
  },

  'amb-final-3': {
    trilhaId: 'amb-final', numero: 3, titulo: 'Quarta: reunião e ata',
    tempoTotal: 20, xp: 100, vertente: 'ambos',
    aula: {
      gancho: 'Quarta, 10h. Carlos: "Temos uma reunião rápida hoje às 15h pra alinhar o projeto. Você pode entrar e fazer a ata depois?". Hora de aplicar a trilha de Reuniões Online: participar e registrar.',
      conceito: {
        titulo: 'Participar de reunião e registrar decisões',
        texto: 'Reuniões são parte do trabalho — e quem sabe participar bem e registrar uma ata clara vira referência. Hoje você simula entrar numa reunião (testando áudio/vídeo, usando chat e mão levantada) e, ao fim, produzir uma ata objetiva com as decisões e tarefas. É a trilha de Reuniões Online aplicada a um caso real.',
      },
      estrutura: {
        titulo: 'A demanda decifrada',
        partes: [
          { simbolo: '🎥', desc: 'Entrar na reunião: testar câmera/microfone antes, participar com etiqueta.' },
          { simbolo: '✍️', desc: 'Anotar durante: assuntos, decisões, quem ficou com o quê.' },
          { simbolo: '📝', desc: 'Ata: organizar em participantes, decisões, tarefas (quem/quando), próxima reunião.' },
          { simbolo: '📤', desc: 'Compartilhar a ata com os participantes depois (nuvem ou e-mail).' },
        ],
      },
      exemplo: {
        titulo: 'A mensagem do chefe',
        celulas: [
          { ref: '10:05', valor: 'Carlos: "Marquei uma reunião rápida às 15h pra alinhar o projeto"' },
          { ref: '10:05', valor: 'Carlos: "Mandei o link do Meet no seu e-mail"' },
          { ref: '10:06', valor: 'Carlos: "Consegue entrar e fazer a ata depois? Ajuda muito"' },
          { ref: 'Você', valor: '"Claro, Carlos! Entro às 15h e te mando a ata logo após."' },
        ],
        formula: 'Entrar (testar A/V) → participar → ata → compartilhar',
        resultado: 'Você vira a pessoa organizada que registra tudo.',
        comentario: 'Como não há uma reunião real agora, você vai SIMULAR: crie uma sala de teste, ou faça uma reunião curta com um familiar, e produza a ata de uma pauta inventada do "projeto".',
      },
      vocabulario: [
        { palavra: 'Ata', def: 'Registro escrito dos assuntos, decisões e tarefas de uma reunião.' },
        { palavra: 'Pauta', def: 'A lista de assuntos a tratar na reunião.' },
        { palavra: 'Encaminhamentos', def: 'As tarefas definidas: quem faz o quê até quando.' },
      ],
      chave: [
        'Entre testando áudio/vídeo e participe com etiqueta',
        'Anote decisões e responsáveis durante a reunião',
        'Entregue a ata logo após — vira sua marca de organização',
      ],
      porque: 'Saber participar e registrar reuniões é uma habilidade administrativa muito valorizada. Entregar uma ata clara minutos depois impressiona qualquer equipe e demonstra confiabilidade.',
    },
    pratica: {
      instrucao: 'Reserve 20 minutos. Simule a reunião (sala de teste ou com um familiar) e produza a ata.',
      passos: [
        'Crie uma sala de teste no Google Meet (ou faça uma chamada curta com um familiar)',
        'Entre testando câmera e microfone; pratique chat e mão levantada',
        'Defina uma "pauta do projeto" (ex: prazos, orçamento, responsáveis)',
        'No Google Docs, crie a ata: título, participantes, assuntos',
        'Registre 2-3 "decisões" e 2-3 "tarefas" com responsável e prazo',
        'Adicione a data da próxima reunião',
        'Compartilhe a ata (link do Docs como "Leitor") ou envie por e-mail',
        'Encerre a reunião pelo botão vermelho',
      ],
    },
    desafio: {
      cenario: 'Entregue a tarefa da quarta: participe de uma reunião (simulada) e produza uma ata clara com decisões e tarefas, compartilhada.',
      requisitos: [
        'Entrei numa reunião testando áudio/vídeo',
        'Usei pelo menos um recurso de participação (chat/mão/reação)',
        'Produzi uma ata com participantes, decisões e tarefas',
        'As tarefas têm responsável e prazo',
        'Compartilhei a ata (link ou e-mail)',
      ],
      dica: 'Modelo de ata reutilizável é ouro: salve esse formato (participantes / decisões / tarefas / próxima reunião). Em reuniões reais, vá preenchendo ao vivo e entregue minutos depois.',
    },
    validacao: [
      'Entrei numa reunião testando A/V',
      'Participei com chat/mão/reação',
      'Produzi uma ata organizada',
      'Registrei tarefas com responsável e prazo',
      'Compartilhei a ata',
    ],
  },

  'amb-final-4': {
    trilhaId: 'amb-final', numero: 4, titulo: 'Quinta: candidatura a vaga',
    tempoTotal: 20, xp: 100, vertente: 'ambos',
    aula: {
      gancho: 'Quinta-feira. Desta vez a "tarefa" é sua: você viu uma vaga que combina demais com seu perfil. Hora de aplicar a trilha de Empregabilidade — perfil, currículo e candidatura — de verdade.',
      conceito: {
        titulo: 'Sua própria carreira é a tarefa mais importante',
        texto: 'Nem toda demanda vem do chefe — a mais importante vem de você: cuidar da sua carreira. Hoje você usa a trilha de LinkedIn & Currículo pra se candidatar a uma vaga real (ou de treino): revisar o perfil, ajustar o currículo à vaga, escrever uma mensagem ao recrutador e candidatar-se. É a ofensiva de carreira em ação.',
      },
      estrutura: {
        titulo: 'O fluxo da candidatura',
        partes: [
          { simbolo: '🔎', desc: 'Achar a vaga: filtrar e ler o anúncio (você atende ao essencial?).' },
          { simbolo: '📄', desc: 'Ajustar o currículo: realçar o que aquela vaga pede (palavras-chave).' },
          { simbolo: '🔵', desc: 'Conferir o perfil do LinkedIn: coerente com o currículo.' },
          { simbolo: '✉️', desc: 'Candidatar-se + mensagem ao recrutador (personalizada, com seu pitch).' },
        ],
      },
      exemplo: {
        titulo: 'A "tarefa" da quinta',
        celulas: [
          { ref: 'Vaga', valor: 'Assistente Administrativo — combina com você' },
          { ref: 'Ação', valor: 'Ajustar currículo às palavras da vaga' },
          { ref: 'Ação', valor: 'Mensagem ao recrutador com seu pitch' },
          { ref: 'Ação', valor: 'Candidatar-se e registrar no controle' },
        ],
        formula: 'Vaga certa + currículo ajustado + abordagem + candidatura',
        resultado: 'Uma candidatura de qualidade, não no escuro.',
        comentario: 'Use o "kit de empregabilidade" que você montou (currículo PDF + perfil + pitch). Aqui é só aplicar — você já está preparado.',
      },
      vocabulario: [
        { palavra: 'Candidatura', def: 'Inscrever-se numa vaga, geralmente enviando currículo.' },
        { palavra: 'Palavra-chave da vaga', def: 'Termos do anúncio que você deve refletir no currículo/perfil.' },
        { palavra: 'Pitch', def: 'Sua apresentação curta (quem é, força, prova, objetivo).' },
      ],
      chave: [
        'Sua carreira é a tarefa mais importante',
        'Ajuste o currículo às palavras da vaga',
        'Candidate-se com uma mensagem personalizada (seu pitch)',
      ],
      porque: 'Este é o ponto onde o curso encontra seu objetivo maior: te colocar no mercado. Praticar uma candidatura completa, de qualidade, é o ensaio do movimento que pode mudar sua vida.',
    },
    pratica: {
      instrucao: 'Reserve 20 minutos. Faça uma candidatura real (ou de treino) usando seu kit de empregabilidade.',
      passos: [
        'No LinkedIn/Indeed, encontre uma vaga que combine com você',
        'Leia o anúncio e liste as palavras-chave/requisitos',
        'Abra seu currículo e ajuste pra refletir o que a vaga pede',
        'Confira seu perfil do LinkedIn (coerente com o currículo?)',
        'Escreva uma mensagem curta ao recrutador (use seu pitch)',
        'Candidate-se (ou deixe tudo pronto, se for treino)',
        'Registre a candidatura no seu controle (vaga, empresa, data, status)',
      ],
    },
    desafio: {
      cenario: 'Entregue a tarefa da quinta: uma candidatura de qualidade, com currículo ajustado à vaga e mensagem personalizada ao recrutador.',
      requisitos: [
        'Encontrei uma vaga que combina e li o anúncio',
        'Ajustei o currículo às palavras da vaga',
        'Conferi a coerência com meu perfil do LinkedIn',
        'Escrevi uma mensagem personalizada ao recrutador',
        'Candidatei-me (ou deixei pronto) e registrei no controle',
      ],
      dica: 'Mesmo que seja treino, leve a sério: candidaturas bem feitas são raras. Quem ajusta o currículo e manda uma mensagem personalizada se destaca da pilha de candidatos genéricos.',
    },
    validacao: [
      'Encontrei e analisei uma vaga',
      'Ajustei o currículo à vaga',
      'Conferi a coerência com o LinkedIn',
      'Escrevi mensagem personalizada ao recrutador',
      'Candidatei-me e registrei',
    ],
  },

  'amb-final-5': {
    trilhaId: 'amb-final', numero: 5, titulo: 'Sexta: entregar o portfólio',
    tempoTotal: 25, xp: 150, vertente: 'ambos',
    aula: {
      gancho: 'Sexta-feira, fim da semana simulada. Carlos: "Que semana! Você mandou muito bem. Reúne tudo que você produziu num portfólio pra gente mostrar seu trabalho?". É a sua formatura — e a promoção.',
      conceito: {
        titulo: 'Portfólio: a prova viva do que você sabe fazer',
        texto: 'Um portfólio é uma coleção dos seus melhores trabalhos, que prova suas competências melhor que qualquer diploma. Nesta semana você produziu vários entregáveis reais: a planilha de controle, o ofício, a ata, o currículo. Reuni-los, organizados na nuvem, cria um portfólio que você pode mostrar em entrevistas — e marca sua "promoção" de Estagiário a quem domina as ferramentas do trabalho.',
      },
      estrutura: {
        titulo: 'Montando o portfólio',
        partes: [
          { simbolo: '📁', desc: 'Pasta na nuvem (Drive): "Portfólio - [Seu Nome]" organizando tudo.' },
          { simbolo: '🗂️', desc: 'Os entregáveis da semana: planilha, ofício, ata, currículo (em PDF).' },
          { simbolo: '📝', desc: 'Um "índice": um documento listando cada peça e a habilidade que ela demonstra.' },
          { simbolo: '🔗', desc: 'Compartilhável: link da pasta como "Leitor", pronto pra enviar a um recrutador.' },
        ],
      },
      exemplo: {
        titulo: 'O índice do portfólio',
        celulas: [
          { ref: 'Planilha', valor: 'Controle de gastos → Excel, fórmulas, gráfico' },
          { ref: 'Ofício', valor: 'Documento formal → Word, PDF, formatação' },
          { ref: 'Ata', valor: 'Registro de reunião → organização, clareza' },
          { ref: 'Currículo', valor: 'Kit de empregabilidade → comunicação, design' },
        ],
        formula: 'Reunir entregáveis + índice + link compartilhável = portfólio',
        resultado: 'A prova concreta de tudo que você aprendeu.',
        comentario: 'Numa entrevista, dizer "sei Excel" é fraco. Mostrar uma planilha de controle real que você fez é imbatível. Portfólio fala mais alto que palavras.',
      },
      vocabulario: [
        { palavra: 'Portfólio', def: 'Coleção dos seus melhores trabalhos, que comprova suas competências.' },
        { palavra: 'Entregável', def: 'Cada peça concreta que você produziu (planilha, documento, etc.).' },
        { palavra: 'Promoção', def: 'No app, subir de nível de carreira ao acumular XP e concluir desafios.' },
      ],
      chave: [
        'Portfólio prova competência melhor que diploma',
        'Reúna os entregáveis da semana + um índice na nuvem',
        'Deixe um link compartilhável pronto pra recrutadores',
      ],
      porque: 'Este é o ápice do curso: você sai com um portfólio real, que demonstra domínio das ferramentas do trabalho. É a sua carta de apresentação mais forte — e a prova de que a jornada valeu a pena.',
    },
    pratica: {
      instrucao: 'Reserve 25 minutos. Reúna tudo que você produziu na semana num portfólio na nuvem.',
      passos: [
        'No Google Drive, crie a pasta "Portfólio - [Seu Nome]"',
        'Reúna nela os PDFs da semana: planilha de controle, ofício, ata, currículo',
        'Crie um documento "Índice do Portfólio" listando cada peça',
        'Pra cada peça, escreva 1 frase com a habilidade que ela demonstra',
        'Organize a pasta (nomes claros, talvez subpastas por tipo)',
        'Compartilhe a pasta como "Leitor" e copie o link',
        'Guarde o link (favoritos/notas) pra usar em candidaturas',
        'Comemore: você concluiu a semana simulada!',
      ],
    },
    desafio: {
      cenario: 'Entregue seu portfólio completo: uma pasta na nuvem com os entregáveis da semana, um índice explicando cada um, e um link compartilhável.',
      requisitos: [
        'Criei a pasta de portfólio na nuvem',
        'Reuni os entregáveis da semana (planilha, ofício, ata, currículo)',
        'Criei um índice listando cada peça e a habilidade que demonstra',
        'Organizei tudo com nomes claros',
        'Gerei um link compartilhável (Leitor)',
        'Guardei o link pra usar em candidaturas',
      ],
      dica: 'Parabéns — você concluiu o Projeto Final e o módulo Mercado! Esse portfólio é seu maior trunfo. Atualize-o sempre que produzir algo novo ou concluir um curso (incluindo este!). Você não é mais "Estagiário": você domina as ferramentas do trabalho. Promovido!',
    },
    validacao: [
      'Criei a pasta de portfólio na nuvem',
      'Reuni todos os entregáveis da semana',
      'Criei um índice explicando cada peça',
      'Organizei com nomes claros',
      'Gerei um link compartilhável',
      'Tenho um portfólio real pra mostrar',
    ],
  },
};
