// ============================================================================
// CONTEÚDO — LinkedIn & Currículo (pc-job)
// Perfil que recrutador acha + currículo moderno. Empregabilidade prática.
// ============================================================================

export const PC_JOB = {
  'pc-job-1': {
    trilhaId: 'pc-job', numero: 1, titulo: 'Pra que serve o LinkedIn 40+',
    tempoTotal: 7, xp: 30, vertente: 'computador',
    aula: {
      gancho: '"LinkedIn é coisa de jovem da tecnologia." Mito. É justamente quem tem 40+ e experiência de vida que mais se beneficia — porque lá a experiência VALE, e os recrutadores procuram ativamente.',
      conceito: {
        titulo: 'A maior vitrine profissional do mundo',
        texto: 'O LinkedIn é uma rede social só de trabalho: um lugar onde você mostra sua experiência, se conecta com profissionais e recrutadores procuram candidatos. Diferente do Facebook ou Instagram, aqui o foco é a carreira. Para quem tem 40+, é uma chance de mostrar que a experiência acumulada é um trunfo — e de ser encontrado por quem está contratando.',
      },
      estrutura: {
        titulo: 'O que o LinkedIn faz por você',
        partes: [
          { simbolo: '🔍', desc: 'Ser encontrado: recrutadores buscam candidatos por habilidades e experiência.' },
          { simbolo: '🤝', desc: 'Rede de contatos: ex-colegas, empresas, pessoas da sua área.' },
          { simbolo: '💼', desc: 'Vagas: milhares de oportunidades, com candidatura direta.' },
          { simbolo: '📣', desc: 'Vitrine: seu perfil trabalha por você 24h, mesmo enquanto você dorme.' },
        ],
      },
      exemplo: {
        titulo: 'Por que vale pra quem tem experiência',
        celulas: [
          { ref: 'Mito', valor: '"Sou velho demais pra isso"' },
          { ref: 'Real', valor: 'Experiência é exatamente o que empresas buscam' },
          { ref: 'Real', valor: 'Recrutador acha VOCÊ, não só você procura' },
          { ref: 'Real', valor: 'Muitas vagas só aparecem por indicação/rede' },
        ],
        formula: 'Perfil bom = ser encontrado por oportunidades',
        resultado: 'A vaga pode vir até você.',
        comentario: 'Estudos mostram que boa parte das vagas é preenchida por rede de contatos e busca de recrutadores — não por anúncio aberto. Estar no LinkedIn te coloca nesse jogo.',
      },
      vocabulario: [
        { palavra: 'LinkedIn', def: 'Rede social profissional pra mostrar carreira, fazer contatos e achar vagas.' },
        { palavra: 'Recrutador', def: 'Profissional que busca e seleciona candidatos pras empresas.' },
        { palavra: 'Rede de contatos (networking)', def: 'As conexões profissionais que podem indicar e abrir portas.' },
      ],
      chave: [
        'LinkedIn é a rede social do trabalho — experiência vale ouro',
        'Recrutadores procuram candidatos ativamente lá',
        'Seu perfil é uma vitrine que trabalha por você 24h',
      ],
      porque: 'Estar no LinkedIn com um bom perfil é hoje quase obrigatório pra quem busca recolocação ou crescimento. É onde as oportunidades circulam — e quem não está, fica invisível pra elas.',
    },
    pratica: {
      instrucao: 'Vamos acessar (ou criar) seu LinkedIn. Abra o navegador.',
      passos: [
        'Acesse linkedin.com',
        'Se não tem conta, clique em "Cadastre-se" e crie com seu e-mail profissional',
        'Se já tem, faça login e veja seu perfil atual',
        'Explore a tela inicial: vagas, rede, mensagens',
        'Procure a barra de busca e digite uma profissão da sua área',
        'Veja quantos profissionais e quantas vagas aparecem',
        'Favorite o linkedin.com no navegador',
      ],
    },
    desafio: {
      cenario: 'Tenha uma conta de LinkedIn ativa e explore: encontre 3 perfis de pessoas da sua área pra ter referência do que um bom perfil parece.',
      requisitos: [
        'Tenho uma conta de LinkedIn',
        'Acessei e explorei a tela inicial',
        'Busquei profissões/vagas da minha área',
        'Encontrei 3 perfis de referência',
        'Entendi por que vale a pena pra mim',
      ],
      dica: 'Olhe perfis de pessoas que têm o trabalho que você quer. Repare como escrevem o título, o resumo, as experiências. Eles são seu modelo pras próximas missões.',
    },
    validacao: [
      'Entendo o que é o LinkedIn',
      'Sei que recrutadores buscam lá',
      'Derrubei o mito do "velho demais"',
      'Tenho uma conta ativa',
      'Vi perfis de referência da minha área',
    ],
  },

  'pc-job-2': {
    trilhaId: 'pc-job', numero: 2, titulo: 'Foto, título e resumo',
    tempoTotal: 10, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Recrutador bate o olho no perfil por 3 segundos antes de decidir se continua. O que ele vê primeiro: sua foto, seu título e o começo do resumo. Esses 3 elementos decidem se você passa do "primeiro filtro".',
      conceito: {
        titulo: 'O topo do perfil é o que mais importa',
        texto: 'A foto, o título e o resumo formam a primeira impressão — e a mais importante. A foto deve ser profissional e simpática. O título não é só seu cargo: é uma frase que diz o que você faz e oferece. O resumo conta sua história em poucas linhas, no começo do perfil. Caprichar nesses três é o que faz o recrutador querer saber mais.',
      },
      estrutura: {
        titulo: 'Os 3 elementos do topo',
        partes: [
          { simbolo: '📷', desc: 'Foto: rosto visível, fundo neutro, roupa adequada, expressão simpática. Nada de selfie de festa.' },
          { simbolo: '🏷️', desc: 'Título: o que você é + o que oferece (ex: "Auxiliar Administrativo | Excel, atendimento e organização").' },
          { simbolo: '📝', desc: 'Resumo (sobre): 3-5 linhas contando sua experiência, suas forças e o que você busca.' },
          { simbolo: '🖼️', desc: 'Foto de capa: opcional, mas uma imagem simples e profissional valoriza.' },
        ],
      },
      exemplo: {
        titulo: 'Título fraco x título forte',
        celulas: [
          { ref: 'Fraco', valor: '"Desempregado" / "Procurando oportunidade"' },
          { ref: 'Forte', valor: '"Assistente Administrativo | Excel, rotinas financeiras e atendimento"' },
          { ref: 'Foto ruim', valor: 'Selfie escura, foto cortada de grupo' },
          { ref: 'Foto boa', valor: 'Rosto claro, fundo neutro, expressão aberta' },
        ],
        formula: 'Foto profissional + título com suas habilidades + resumo com história',
        resultado: 'Você passa no primeiro filtro de 3 segundos.',
        comentario: 'Nunca coloque "desempregado" no título. Coloque o que você FAZ e SABE. Você é suas competências, não sua situação atual.',
      },
      vocabulario: [
        { palavra: 'Título (headline)', def: 'A frase abaixo do seu nome; resume o que você faz e oferece.' },
        { palavra: 'Resumo (sobre)', def: 'Texto que conta sua trajetória e forças, no topo do perfil.' },
        { palavra: 'Palavra-chave', def: 'Termos da sua área que recrutadores buscam (ex: "Excel", "atendimento").' },
      ],
      chave: [
        'Foto profissional e simpática (rosto claro, fundo neutro)',
        'Título = o que você faz + suas habilidades (nunca "desempregado")',
        'Resumo conta sua história em 3-5 linhas',
      ],
      porque: 'O topo do perfil decide se o recrutador continua lendo. Bem feito, ele transforma sua experiência num convite irresistível pra te contatar. É o seu "anúncio" pessoal.',
    },
    pratica: {
      instrucao: 'Abra seu perfil no LinkedIn. Vamos caprichar no topo.',
      passos: [
        'Adicione ou troque sua foto: rosto visível, fundo neutro, boa luz, roupa adequada',
        'Edite o título: escreva o que você faz + 2-3 habilidades (não o cargo só)',
        'Vá na seção "Sobre" (resumo) e clique pra editar',
        'Escreva 3-5 linhas: sua experiência, suas forças, o que você busca',
        'Inclua palavras-chave da sua área (Excel, atendimento, vendas...)',
        'Salve e veja como ficou o topo do perfil',
        'Compare com os perfis de referência que você viu na missão 1',
      ],
    },
    desafio: {
      cenario: 'Deixe o topo do seu perfil profissional e atraente: foto adequada, título forte e resumo que conta sua história.',
      requisitos: [
        'Coloquei uma foto profissional e simpática',
        'Meu título diz o que faço + minhas habilidades',
        'Não usei "desempregado" ou similar',
        'Escrevi um resumo de 3-5 linhas com minha história',
        'Incluí palavras-chave da minha área',
      ],
      dica: 'Use a IA (da trilha pc-ia) pra ajudar no resumo: descreva sua experiência e peça "escreva um resumo de LinkedIn profissional e caloroso em 4 linhas". Depois ajuste pra ficar com a sua voz.',
    },
    validacao: [
      'Tenho uma foto profissional',
      'Meu título mostra o que faço e sei',
      'Evitei "desempregado" no título',
      'Escrevi um resumo com minha história',
      'Usei palavras-chave da minha área',
    ],
  },

  'pc-job-3': {
    trilhaId: 'pc-job', numero: 3, titulo: 'Experiências e habilidades',
    tempoTotal: 10, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'Você tem anos de experiência, mas como mostrar isso de um jeito que valorize? O segredo não é listar empregos — é mostrar o que você fez e conquistou em cada um.',
      conceito: {
        titulo: 'Experiência conta resultados, não só cargos',
        texto: 'Preencher experiências não é só dizer "trabalhei na empresa X de 2010 a 2018". É mostrar o que você fazia e, melhor ainda, o que você conseguiu: "organizei o controle de estoque, reduzindo perdas". As habilidades complementam, listando suas competências (Excel, atendimento, liderança) — que os recrutadores filtram nas buscas. Juntas, transformam sua trajetória num argumento de contratação.',
      },
      estrutura: {
        titulo: 'Como descrever cada experiência',
        partes: [
          { simbolo: '💼', desc: 'Cargo, empresa e período: o básico de cada experiência.' },
          { simbolo: '🎯', desc: 'O que você fazia: 2-3 frases com suas principais responsabilidades.' },
          { simbolo: '🏆', desc: 'Conquistas: resultados concretos ("atendi 50 clientes/dia", "organizei o arquivo").' },
          { simbolo: '🧰', desc: 'Habilidades: liste competências (Excel, atendimento, organização) na seção própria.' },
        ],
      },
      exemplo: {
        titulo: 'Descrição fraca x forte',
        celulas: [
          { ref: 'Fraca', valor: '"Trabalhei como auxiliar."' },
          { ref: 'Forte', valor: '"Auxiliar administrativo: controle de notas, atendimento ao cliente e organização de documentos. Reduzi atrasos em 30%."' },
          { ref: 'Habilidades', valor: 'Excel · Atendimento · Organização · Rotinas financeiras' },
        ],
        formula: 'Cargo + o que fazia + conquistas + habilidades',
        resultado: 'Sua experiência vira argumento de contratação.',
        comentario: 'Mesmo experiências "simples" têm conquistas: pontualidade, organização, bom atendimento, anos de dedicação. Valorize o que você fez de bem feito.',
      },
      vocabulario: [
        { palavra: 'Experiência profissional', def: 'Cada emprego/atividade, com cargo, empresa, período e o que você fez.' },
        { palavra: 'Conquista', def: 'Um resultado concreto que você alcançou no trabalho.' },
        { palavra: 'Competência (skill)', def: 'Uma habilidade sua (Excel, atendimento) que recrutadores filtram.' },
      ],
      chave: [
        'Mostre o que você FEZ e CONQUISTOU, não só o cargo',
        'Use resultados concretos quando possível',
        'Liste habilidades — é por elas que recrutadores filtram',
      ],
      porque: 'Experiências bem descritas e habilidades certas fazem você aparecer nas buscas dos recrutadores e convencem na hora da leitura. É aqui que sua trajetória de vida vira vantagem competitiva.',
    },
    pratica: {
      instrucao: 'No seu perfil do LinkedIn, vá na seção de experiências.',
      passos: [
        'Adicione uma experiência: cargo, empresa e período',
        'Escreva 2-3 frases sobre o que você fazia ali',
        'Acrescente pelo menos uma conquista concreta',
        'Repita pras experiências mais relevantes (não precisa listar todas de 30 anos)',
        'Vá na seção "Competências" e adicione 5-10 habilidades suas',
        'Inclua tanto técnicas (Excel, caixa) quanto comportamentais (organização, atendimento)',
        'Salve e revise como ficou',
      ],
    },
    desafio: {
      cenario: 'Preencha suas experiências mais relevantes com descrições que mostram o que você fez e conquistou, e liste suas principais habilidades.',
      requisitos: [
        'Adicionei minhas experiências mais relevantes',
        'Cada uma tem o que eu fazia (não só o cargo)',
        'Incluí pelo menos uma conquista concreta',
        'Listei 5+ habilidades',
        'Misturei habilidades técnicas e comportamentais',
      ],
      dica: 'Não precisa listar cada emprego de toda a vida. Foque nos mais relevantes pra vaga que você quer. E lembre: tempo de dedicação e estabilidade são qualidades que empresas valorizam muito hoje.',
    },
    validacao: [
      'Descrevi o que fazia em cada experiência',
      'Incluí conquistas concretas',
      'Listei minhas habilidades',
      'Misturei competências técnicas e comportamentais',
      'Valorizei minha trajetória',
    ],
  },

  'pc-job-4': {
    trilhaId: 'pc-job', numero: 4, titulo: 'Currículo moderno',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Aquele currículo com "objetivo: crescer na empresa", foto 3x4, estado civil e RG está ultrapassado. O currículo moderno é enxuto, focado e mostra resultados. Saber o que entra (e o que sai) já te diferencia.',
      conceito: {
        titulo: 'Menos é mais: o currículo enxuto e focado',
        texto: 'O currículo moderno cabe em 1-2 páginas e foca no que importa pra vaga: seus dados de contato, um resumo curto, suas experiências (com resultados), formação e habilidades. Saíram: foto (na maioria dos casos), estado civil, RG, CPF, "objetivo" genérico. Entrou: clareza, resultados e palavras-chave da vaga. É um documento de marketing seu, não uma ficha cadastral.',
      },
      estrutura: {
        titulo: 'O que entra e o que sai',
        partes: [
          { simbolo: '✅', desc: 'Entra: nome, contato, resumo curto, experiências com resultados, formação, habilidades.' },
          { simbolo: '❌', desc: 'Sai: RG, CPF, estado civil, nº de filhos, foto (na maioria), "objetivo" vago.' },
          { simbolo: '📏', desc: 'Tamanho: 1 página (ou 2 se muita experiência). Enxuto e escaneável.' },
          { simbolo: '🔑', desc: 'Adapte à vaga: use palavras do anúncio; destaque o que aquela vaga pede.' },
        ],
      },
      exemplo: {
        titulo: 'Estrutura de um currículo moderno',
        celulas: [
          { ref: 'Topo', valor: 'Nome + cargo desejado + contato (tel, e-mail, cidade)' },
          { ref: 'Resumo', valor: '2-3 linhas com suas forças' },
          { ref: 'Experiência', valor: 'Cargos com responsabilidades e resultados' },
          { ref: 'Fim', valor: 'Formação + habilidades' },
        ],
        formula: 'Contato + resumo + experiência (resultados) + formação + skills',
        resultado: 'Um documento enxuto que vende você.',
        comentario: 'Adapte o currículo pra cada vaga importante: realce as experiências e habilidades que aquela vaga específica pede. Currículo genérico convence menos.',
      },
      vocabulario: [
        { palavra: 'Currículo (CV)', def: 'Documento que resume sua trajetória profissional pra candidaturas.' },
        { palavra: 'Resumo profissional', def: 'Pequeno parágrafo no topo com suas principais forças.' },
        { palavra: 'Escaneável', def: 'Fácil de ler num relance, com seções claras e tópicos.' },
      ],
      chave: [
        'Currículo moderno é enxuto: 1-2 páginas',
        'Fora: RG, CPF, estado civil, foto, "objetivo" vago',
        'Adapte às palavras-chave de cada vaga',
      ],
      porque: 'Recrutadores passam segundos em cada currículo. Um documento moderno, enxuto e focado na vaga aumenta muito suas chances de passar pra entrevista. Saber o formato atual já te coloca à frente.',
    },
    pratica: {
      instrucao: 'Pegue seu currículo atual (se tiver) ou anote o que colocaria. Vamos modernizá-lo.',
      passos: [
        'Liste o que seu currículo atual tem (ou o que você colocaria)',
        'Marque o que DEVE SAIR: RG, CPF, estado civil, foto, "objetivo" genérico',
        'Defina o topo: nome, cargo desejado, telefone, e-mail profissional, cidade',
        'Escreva um resumo de 2-3 linhas com suas forças',
        'Liste experiências focando em o que fazia + resultados',
        'Adicione formação e uma seção de habilidades',
        'Confira: cabe em 1-2 páginas? está enxuto e claro?',
      ],
    },
    desafio: {
      cenario: 'Planeje a estrutura completa do seu currículo moderno (você vai montá-lo na próxima missão), definindo cada seção e o que sai do modelo antigo.',
      requisitos: [
        'Defini o topo com contato profissional',
        'Escrevi um resumo de 2-3 linhas',
        'Estruturei experiências com resultados',
        'Removi tudo que é ultrapassado (RG, estado civil, etc.)',
        'O conteúdo cabe em 1-2 páginas',
      ],
      dica: 'Tenha uma versão "base" do currículo e, pra cada vaga importante, faça uma cópia ajustada — realçando o que aquela vaga pede. 15 minutos de ajuste podem ser a diferença entre ser chamado ou não.',
    },
    validacao: [
      'Sei o que entra num currículo moderno',
      'Sei o que removi do modelo antigo',
      'Defini topo, resumo e experiências',
      'Foco em resultados, não só cargos',
      'Planejo adaptar por vaga',
    ],
  },

  'pc-job-5': {
    trilhaId: 'pc-job', numero: 5, titulo: 'Montando o currículo',
    tempoTotal: 12, xp: 70, vertente: 'computador',
    aula: {
      gancho: 'Você já sabe o que vai no currículo. Agora vamos montá-lo de verdade, bonito e profissional — usando o Word (que você dominou) ou o Canva, e exportando em PDF pronto pra enviar.',
      conceito: {
        titulo: 'Do plano ao documento pronto',
        texto: 'Montar o currículo é colocar a estrutura planejada num documento bem formatado. Você pode usar o Word com um modelo, ou o Canva, que tem modelos prontos e bonitos de graça. O importante: visual limpo, seções claras, fácil de ler, e exportar em PDF (que não desformata). O resultado é seu principal documento de candidatura — e mais uma peça do seu portfólio.',
      },
      estrutura: {
        titulo: 'Ferramentas e cuidados',
        partes: [
          { simbolo: '📄', desc: 'Word: use um modelo pronto (Arquivo → Novo → "currículo") e preencha.' },
          { simbolo: '🎨', desc: 'Canva (canva.com): modelos gratuitos e bonitos; busque "currículo".' },
          { simbolo: '🧹', desc: 'Visual limpo: fonte legível, seções claras, sem exagero de cores.' },
          { simbolo: '📑', desc: 'Exporte em PDF com nome profissional (curriculo-seu-nome.pdf).' },
        ],
      },
      exemplo: {
        titulo: 'Dicas de formatação',
        celulas: [
          { ref: 'Fonte', valor: 'Uma só, legível (Arial/Calibri), tamanho 10-12' },
          { ref: 'Seções', valor: 'Títulos claros: Experiência, Formação, Habilidades' },
          { ref: 'Espaço', valor: 'Margens e respiro — não amontoe tudo' },
          { ref: 'Arquivo', valor: 'curriculo-maria-silva.pdf' },
        ],
        formula: 'Modelo + suas informações + visual limpo + PDF',
        resultado: 'Um currículo profissional pronto pra enviar.',
        comentario: 'O Canva é ótimo pra quem quer um visual bonito sem esforço: escolhe o modelo, troca os textos, exporta PDF. E é grátis.',
      },
      vocabulario: [
        { palavra: 'Modelo (template)', def: 'Um documento pronto que você só preenche com suas informações.' },
        { palavra: 'Canva', def: 'Ferramenta online gratuita com modelos de design (currículos, cartões, posts).' },
        { palavra: 'Exportar PDF', def: 'Gerar o currículo em PDF, formato que não desformata ao enviar.' },
      ],
      chave: [
        'Use um modelo pronto (Word ou Canva)',
        'Visual limpo: uma fonte, seções claras, sem exagero',
        'Exporte em PDF com nome profissional',
      ],
      porque: 'Um currículo bem montado e bonito causa ótima impressão e mostra cuidado. Saber montá-lo sozinho te dá autonomia total na busca por emprego — sem depender de ninguém nem pagar por isso.',
    },
    pratica: {
      instrucao: 'Escolha Word ou Canva. Vamos montar seu currículo de verdade, com o conteúdo da missão anterior.',
      passos: [
        'No Word: Arquivo → Novo → busque "currículo" e escolha um modelo simples',
        'Ou acesse canva.com, faça login e busque "currículo" nos modelos',
        'Substitua os textos do modelo pelas suas informações reais',
        'Preencha: contato, resumo, experiências (com resultados), formação, habilidades',
        'Ajuste pra caber em 1-2 páginas, com visual limpo',
        'Revise a ortografia (use o corretor e/ou a IA)',
        'Exporte em PDF com o nome curriculo-seu-nome.pdf',
        'Abra o PDF e confira se está perfeito',
      ],
    },
    desafio: {
      cenario: 'Monte e exporte seu currículo moderno completo em PDF, pronto pra enviar a uma vaga real.',
      requisitos: [
        'Usei um modelo (Word ou Canva)',
        'Preenchi com minhas informações reais',
        'O visual está limpo e cabe em 1-2 páginas',
        'Revisei a ortografia',
        'Exportei em PDF com nome profissional',
        'O PDF está perfeito ao abrir',
      ],
      dica: 'Guarde o currículo no Google Drive (backup na nuvem!) e tenha sempre o PDF à mão no celular. Quando surgir uma oportunidade, você envia na hora, de qualquer lugar.',
    },
    validacao: [
      'Usei um modelo pra montar',
      'Preenchi com minhas informações',
      'O visual ficou limpo e profissional',
      'Revisei a ortografia',
      'Exportei em PDF com nome profissional',
    ],
  },

  'pc-job-6': {
    trilhaId: 'pc-job', numero: 6, titulo: 'Procurar vagas e se candidatar',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Currículo pronto, perfil bonito... e agora? Hora de achar as vagas certas e se candidatar do jeito certo. Não é sobre se candidatar a tudo — é sobre mirar bem e candidatar-se com estratégia.',
      conceito: {
        titulo: 'Buscar com filtro e candidatar-se com estratégia',
        texto: 'Vagas estão no LinkedIn, em sites como Indeed, Catho, Gupy e nos sites das próprias empresas. O segredo não é candidatar-se a centenas, mas filtrar bem (por cargo, local, tipo) e candidatar-se com atenção às que combinam com você. Ler o anúncio, ajustar o currículo às palavras dele e candidatar-se com cuidado rende muito mais que disparar para tudo.',
      },
      estrutura: {
        titulo: 'O processo de candidatura',
        partes: [
          { simbolo: '🔎', desc: 'Buscar: use filtros (cargo, cidade, presencial/remoto) no LinkedIn/Indeed/Gupy.' },
          { simbolo: '📖', desc: 'Ler o anúncio: requisitos, responsabilidades. Você atende ao essencial?' },
          { simbolo: '🎯', desc: 'Ajustar: realce no currículo/perfil o que aquela vaga pede.' },
          { simbolo: '📨', desc: 'Candidatar-se: anexe o currículo certo; algumas têm "candidatura simplificada".' },
        ],
      },
      exemplo: {
        titulo: 'Estratégia x desespero',
        celulas: [
          { ref: 'Desespero', valor: 'Candidatar-se a 200 vagas sem ler' },
          { ref: 'Estratégia', valor: '15 vagas que combinam, com currículo ajustado' },
          { ref: 'Onde', valor: 'LinkedIn · Indeed · Catho · Gupy · sites de empresas' },
          { ref: 'Registro', valor: 'Anote onde se candidatou e quando' },
        ],
        formula: 'Filtrar + ler + ajustar + candidatar com atenção',
        resultado: 'Mais chamadas, menos frustração.',
        comentario: 'Você não precisa atender 100% dos requisitos pra se candidatar. Se atende a maioria do essencial, vá em frente — muitos pedidos são "desejáveis", não obrigatórios.',
      },
      vocabulario: [
        { palavra: 'Vaga', def: 'Uma oportunidade de emprego anunciada.' },
        { palavra: 'Requisitos', def: 'O que a vaga pede (experiência, habilidades, formação).' },
        { palavra: 'Candidatura', def: 'O ato de se inscrever numa vaga, geralmente enviando o currículo.' },
      ],
      chave: [
        'Filtre bem em vez de candidatar-se a tudo',
        'Leia o anúncio e ajuste o currículo às palavras dele',
        'Não precisa atender 100% dos requisitos — a maioria do essencial basta',
      ],
      porque: 'Candidatar-se com estratégia é o que transforma "mando currículo e ninguém responde" em "fui chamado pra entrevista". Mira certeira economiza energia e aumenta resultados.',
    },
    pratica: {
      instrucao: 'Abra o LinkedIn (e/ou indeed.com.br). Vamos buscar vagas de verdade.',
      passos: [
        'No LinkedIn, clique em "Vagas" no menu',
        'Digite o cargo que você busca e sua cidade',
        'Use os filtros (presencial/remoto, tempo de publicação)',
        'Abra 3 vagas e leia os requisitos com atenção',
        'Marque quais você atende à maioria do essencial',
        'Em uma vaga adequada, veja como funciona o botão "Candidatar-se"',
        'Confira se há "Candidatura simplificada" (envia seu perfil direto)',
        'Anote num documento as vagas que você quer se candidatar',
      ],
    },
    desafio: {
      cenario: 'Encontre 5 vagas que combinam com você, leia cada anúncio e candidate-se a pelo menos uma (real, se fizer sentido), com currículo adequado.',
      requisitos: [
        'Busquei vagas com filtros adequados',
        'Li os requisitos de pelo menos 5 vagas',
        'Identifiquei quais combinam comigo',
        'Ajustei meu currículo/perfil pra ao menos uma',
        'Me candidatei a pelo menos uma (ou registrei as escolhidas)',
      ],
      dica: 'Crie um controle simples (até uma planilha do Excel que você aprendeu!): vaga, empresa, data da candidatura, status. Acompanhar suas candidaturas ajuda a fazer follow-up e não perder o fio.',
    },
    validacao: [
      'Sei buscar vagas com filtros',
      'Leio os requisitos com atenção',
      'Identifico vagas que combinam comigo',
      'Ajusto o currículo à vaga',
      'Sei me candidatar e registrar',
    ],
  },

  'pc-job-7': {
    trilhaId: 'pc-job', numero: 7, titulo: 'Mensagem pra recrutador',
    tempoTotal: 8, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Uma mensagem curta e bem feita pra um recrutador pode abrir uma porta que o currículo sozinho não abre. Mas tem que ser educada, específica e sem desespero. Vamos aprender a fórmula.',
      conceito: {
        titulo: 'Networking educado abre portas',
        texto: 'No LinkedIn você pode se conectar e enviar mensagens a recrutadores e profissionais. Bem feito, isso te coloca no radar de quem contrata. A chave é ser educado, específico e breve: apresente-se, mostre interesse genuíno (numa vaga ou na empresa), e facilite a resposta. Mensagem genérica ou desesperada afasta; mensagem bem pensada aproxima.',
      },
      estrutura: {
        titulo: 'A fórmula da boa mensagem',
        partes: [
          { simbolo: '👋', desc: 'Apresentação: quem você é, em uma frase (cargo/área).' },
          { simbolo: '🎯', desc: 'Motivo específico: a vaga X, ou interesse real na empresa/área da pessoa.' },
          { simbolo: '🙏', desc: 'Pedido claro e leve: uma conversa, uma dica, considerar seu perfil.' },
          { simbolo: '✂️', desc: 'Curta: 3-4 frases. Recrutadores recebem muitas mensagens.' },
        ],
      },
      exemplo: {
        titulo: 'Mensagem que funciona',
        celulas: [
          { ref: 'Ruim', valor: '"Oi, preciso de emprego, me ajuda"' },
          { ref: 'Boa', valor: '"Olá, [nome]! Sou assistente administrativo com 10 anos de experiência. Vi a vaga de [cargo] na [empresa] e meu perfil combina com o que pedem. Poderia considerar minha candidatura? Obrigado!"' },
          { ref: 'Tom', valor: 'Educado, específico, sem desespero' },
        ],
        formula: 'Apresentação + motivo específico + pedido leve, em 3-4 frases',
        resultado: 'Você entra no radar de quem contrata.',
        comentario: 'Personalize sempre: cite o nome da pessoa e a vaga/empresa específica. Mensagem copiada e colada se reconhece de longe — e é ignorada.',
      },
      vocabulario: [
        { palavra: 'Networking', def: 'Construir e usar uma rede de contatos profissionais.' },
        { palavra: 'Conexão', def: 'Adicionar alguém à sua rede no LinkedIn.' },
        { palavra: 'Follow-up', def: 'Uma mensagem educada de acompanhamento, se não houve resposta.' },
      ],
      chave: [
        'Seja educado, específico e breve (3-4 frases)',
        'Apresente-se + motivo específico + pedido leve',
        'Personalize (nome + vaga/empresa); nada de copiar e colar',
      ],
      porque: 'Muitas oportunidades vêm de conexões diretas, não de candidaturas frias. Saber abordar recrutadores com classe é uma habilidade que pode encurtar meses de busca.',
    },
    pratica: {
      instrucao: 'No LinkedIn, vamos preparar (e talvez enviar) uma mensagem a um recrutador ou profissional da sua área.',
      passos: [
        'Encontre uma vaga e veja quem a publicou (às vezes mostra o recrutador)',
        'Ou busque um profissional/recrutador da sua área',
        'Escreva um rascunho seguindo a fórmula: apresentação + motivo + pedido',
        'Mantenha em 3-4 frases, educado e específico',
        'Personalize com o nome da pessoa e a vaga/empresa',
        'Releia: está breve, claro e sem desespero?',
        'Se fizer sentido, conecte-se e envie (ou guarde o modelo)',
      ],
    },
    desafio: {
      cenario: 'Escreva uma mensagem de abordagem profissional pronta pra enviar a um recrutador, personalizada pra uma vaga ou empresa real.',
      requisitos: [
        'A mensagem se apresenta em uma frase',
        'Tem um motivo específico (vaga/empresa real)',
        'Faz um pedido claro e leve',
        'Tem no máximo 3-4 frases',
        'Está personalizada (nome, vaga), não genérica',
      ],
      dica: 'Se não responderem, tudo bem — faça UM follow-up educado depois de uns dias, e siga em frente. Insistência demais afasta; um lembrete gentil é profissional.',
    },
    validacao: [
      'Sei a fórmula da mensagem (apresentação+motivo+pedido)',
      'Mantenho curto e educado',
      'Personalizo com nome e vaga/empresa',
      'Evito tom de desespero',
      'Sei fazer um follow-up educado',
    ],
  },

  'pc-job-8': {
    trilhaId: 'pc-job', numero: 8, titulo: 'Projeto: perfil + currículo em PDF',
    tempoTotal: 25, xp: 120, vertente: 'computador',
    aula: {
      gancho: 'Hora de juntar tudo num kit de empregabilidade completo: um perfil de LinkedIn caprichado E um currículo em PDF profissional, prontos pra usar. É o seu passaporte pro mercado — e uma peça central do portfólio.',
      conceito: {
        titulo: 'Seu kit de candidatura completo',
        texto: 'Um candidato preparado tem dois ativos prontos: um perfil de LinkedIn que recrutadores acham e gostam, e um currículo em PDF enxuto e bonito pra enviar. Os dois se complementam e contam a mesma história profissional. Tê-los prontos significa que, quando uma oportunidade surgir, você age na hora — sem correria.',
      },
      estrutura: {
        titulo: 'Os componentes do kit',
        partes: [
          { simbolo: '🔵', desc: 'Perfil LinkedIn: foto, título forte, resumo, experiências com resultados, habilidades.' },
          { simbolo: '📄', desc: 'Currículo PDF: enxuto (1-2 págs), moderno, com nome de arquivo profissional.' },
          { simbolo: '🔗', desc: 'Coerência: perfil e currículo contam a mesma história, sem contradições.' },
          { simbolo: '☁️', desc: 'Backup: currículo salvo no Drive e no celular, pronto pra enviar de qualquer lugar.' },
        ],
      },
      exemplo: {
        titulo: 'O kit pronto',
        celulas: [
          { ref: 'LinkedIn', valor: 'Perfil completo e atraente' },
          { ref: 'Currículo', valor: 'curriculo-seu-nome.pdf, no Drive' },
          { ref: 'Coerência', valor: 'Mesmas experiências e datas nos dois' },
          { ref: 'Pronto', valor: 'Oportunidade surgiu? Você age na hora' },
        ],
        formula: 'Perfil forte + currículo PDF + coerência + backup',
        resultado: 'Você está pronto pra qualquer oportunidade.',
        comentario: 'Esse kit é um dos itens mais valiosos do seu portfólio no app. Mostra, na prática, que você domina as ferramentas E está pronto pro mercado.',
      },
      vocabulario: [
        { palavra: 'Kit de empregabilidade', def: 'O conjunto perfil + currículo prontos pra candidaturas.' },
        { palavra: 'Coerência', def: 'Perfil e currículo contando a mesma história, sem contradições.' },
        { palavra: 'Portfólio', def: 'Sua coleção de trabalhos/ativos que demonstram competência.' },
      ],
      chave: [
        'Tenha perfil LinkedIn E currículo PDF prontos',
        'Os dois devem ser coerentes entre si',
        'Mantenha backup do currículo no Drive e no celular',
      ],
      porque: 'Este projeto entrega o que mais importa pra empregabilidade: estar pronto. Com perfil e currículo afiados, você responde a oportunidades imediatamente — e demonstra domínio digital completo, da edição à nuvem.',
    },
    pratica: {
      instrucao: 'Reserve 25 minutos. Vamos finalizar e alinhar seu perfil e currículo, usando tudo da trilha.',
      passos: [
        'Revise seu perfil do LinkedIn: foto, título, resumo, experiências, habilidades (missões 2 e 3)',
        'Abra/monte seu currículo (missão 5) e confira que está atualizado',
        'Compare os dois: as experiências, datas e cargos batem? corrija contradições',
        'Garanta que ambos usam palavras-chave da sua área',
        'Revise a ortografia dos dois (corretor + IA, se quiser)',
        'Exporte o currículo em PDF com nome profissional',
        'Suba o currículo pro Google Drive (backup) e salve no celular',
        'Confira: perfil completo + currículo PDF prontos e coerentes',
      ],
    },
    desafio: {
      cenario: 'Entregue seu kit de empregabilidade completo: perfil de LinkedIn finalizado e currículo em PDF profissional, coerentes e com backup na nuvem.',
      requisitos: [
        'Perfil do LinkedIn completo (foto, título, resumo, experiências, habilidades)',
        'Currículo em PDF moderno e revisado',
        'Perfil e currículo são coerentes entre si',
        'Ambos usam palavras-chave da minha área',
        'O currículo está salvo no Drive e no celular',
        'Estou pronto pra responder a uma oportunidade na hora',
      ],
      dica: 'Parabéns — você concluiu a trilha de empregabilidade! Esse kit é seu maior trunfo agora. Atualize-o a cada nova conquista ou curso (incluindo este!). E lembre: estar preparado é metade do caminho pra conseguir a vaga.',
    },
    validacao: [
      'Meu perfil do LinkedIn está completo',
      'Tenho um currículo PDF moderno e revisado',
      'Perfil e currículo são coerentes',
      'Usei palavras-chave da minha área',
      'Tenho backup do currículo na nuvem e no celular',
      'Estou pronto pra candidaturas',
    ],
  },
};
