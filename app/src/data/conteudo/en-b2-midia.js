// ============================================================================
// CONTEÚDO — Inglês B2: Inglês na Mídia (en-b2-midia)
// Notícias e artigos, filmes/séries sem legenda, música e letras, podcasts,
// e redes sociais. Como usar mídia real para aprender. Projeto: resenha/review.
// ============================================================================

export const EN_B2_MIDIA = {
  'en-b2-midia-1': {
    trilhaId: 'en-b2-midia', numero: 1, titulo: 'Ler notícias e artigos',
    tempoTotal: 13, xp: 100, vertente: 'ingles',
    aula: {
      gancho: 'Ler uma notícia em inglês parece intimidante: vocabulário denso, frases longas, manchetes estranhas. Mas a imprensa tem padrões fixos — e dominá-los abre o mundo da informação em primeira mão, sem esperar tradução.',
      conceito: {
        titulo: 'A estrutura do jornalismo em inglês',
        texto: 'Textos jornalísticos seguem convenções que facilitam a leitura quando você as conhece. MANCHETES (headlines) usam uma "gramática" própria: omitem artigos e verbos auxiliares ("PM to visit US" = O primeiro-ministro VAI visitar...), usam presente para fatos passados ("Earthquake hits Japan"), e palavras curtas e impactantes (cut, ban, hit, slam, vow). PIRÂMIDE INVERTIDA: a informação mais importante vem PRIMEIRO — o 1º parágrafo (lead) responde quem/o quê/quando/onde; os detalhes vêm depois. Isso permite entender a essência lendo só o começo. VOCABULÁRIO formal/abstrato: notícias usam verbos e nomes mais sofisticados (announce, reveal, claim, allege, impact, concerns). ESTRATÉGIAS de leitura: 1) leia a manchete e o 1º parágrafo para o panorama; 2) não pare em cada palavra desconhecida — deduza pelo contexto; 3) identifique o verbo principal de cada frase longa. Ler notícias em inglês treina vocabulário formal, leitura rápida e te dá acesso direto a fontes do mundo todo — uma das aplicações mais valiosas do idioma.',
      },
      estrutura: {
        titulo: 'Como ler jornalismo',
        partes: [
          { simbolo: 'headlines', desc: 'sem artigos/auxiliares: "PM to visit US".' },
          { simbolo: 'pirâmide', desc: 'o essencial primeiro (lead = 1º parágrafo).' },
          { simbolo: 'vocab formal', desc: 'announce, reveal, claim, impact, concerns.' },
          { simbolo: 'estratégia', desc: 'deduzir pelo contexto, achar o verbo principal.' },
        ],
      },
      exemplo: {
        titulo: 'Lendo uma notícia',
        celulas: [
          { ref: 'headline', valor: '"Bank to cut 500 jobs" = O banco VAI cortar 500 vagas.' },
          { ref: 'lead', valor: '1º parágrafo: quem, o quê, quando, onde.' },
          { ref: 'verbo', valor: 'announced, revealed, claimed — verbos de reportar.' },
          { ref: 'deduzir', valor: 'palavra nova? deduza pelo contexto, siga em frente.' },
        ],
        formula: 'headline + lead = essência • detalhes vêm depois',
        resultado: 'Você lê notícias em inglês com fluência.',
        comentario: 'Duas chaves destravam o jornalismo: (1) manchetes têm gramática própria — aprenda a "decodificá-las" (sem artigos, "to + verbo" = futuro); (2) o essencial está SEMPRE no começo, então você capta a notícia lendo manchete + 1º parágrafo. Pare de travar em cada palavra desconhecida — deduza pelo contexto e siga. Velocidade vem de estratégia, não de saber todas as palavras.',
      },
      vocabulario: [
        { palavra: 'headline / lead', def: 'manchete / primeiro parágrafo (essência).' },
        { palavra: 'announce / reveal / claim', def: 'anunciar / revelar / afirmar.' },
        { palavra: 'inverted pyramid', def: 'pirâmide invertida — o importante primeiro.' },
      ],
      chave: [
        'Manchetes têm gramática própria (sem artigos, to=futuro)',
        'O essencial está no 1º parágrafo (lead)',
        'Deduza palavras pelo contexto, não pare em cada uma',
      ],
      porque: 'Ler notícias em inglês dá acesso direto à informação do mundo, sem intermediários, e treina vocabulário formal e leitura rápida — uma das aplicações mais úteis e empoderadoras do idioma.',
    },
    pratica: {
      instrucao: 'Pratique ler jornalismo em inglês com estratégia.',
      passos: [
        'Decodifique 4 manchetes (o que está omitido?)',
        'Leia o 1º parágrafo de uma notícia e resuma',
        'Liste 8 verbos de reportar (announce, claim...)',
        'Deduza 3 palavras novas pelo contexto',
        'Identifique o verbo principal de 3 frases longas',
        'Resuma uma notícia em 2 frases próprias',
        'Leia 1 artigo curto sem traduzir tudo',
      ],
    },
    desafio: {
      cenario: 'Pegue uma notícia curta em inglês: decodifique a manchete, resuma o essencial pelo 1º parágrafo e explique 3 palavras que você deduziu pelo contexto, sem dicionário.',
      requisitos: [
        'Decodifiquei a manchete (omissões e tempos)',
        'Resumi o essencial pelo lead',
        'Deduzi 3 palavras pelo contexto',
        'Identifiquei o verbo principal das frases',
        'Resumi a notícia em frases próprias',
      ],
      dica: 'Comece com fontes de inglês mais simples (sites de notícias para aprendizes ou versões "easy English"). Leia a manchete e o 1º parágrafo primeiro — se entendeu a essência, já venceu o mais importante.',
    },
    validacao: [
      'Decodifico manchetes em inglês',
      'Encontro a essência no lead',
      'Deduzo palavras pelo contexto',
      'Identifico o verbo principal',
      'Resumo notícias com minhas palavras',
    ],
  },

  'en-b2-midia-2': {
    trilhaId: 'en-b2-midia', numero: 2, titulo: 'Filmes e séries sem legenda',
    tempoTotal: 14, xp: 110, vertente: 'ingles',
    aula: {
      gancho: 'Assistir a uma série em inglês sem depender de legenda é o sonho de todo estudante — e parece impossível: falam rápido, "comem" palavras, usam gíria. Mas há um método progressivo que leva da legenda em português à compreensão total.',
      conceito: {
        titulo: 'A escada para assistir sem legenda',
        texto: 'Compreender áudio nativo é uma habilidade que se constrói por etapas, não de uma vez. A ESCADA recomendada: 1) legenda em PORTUGUÊS (entende a história); 2) legenda em INGLÊS (conecta som e escrita — etapa crucial e mais longa); 3) legenda em inglês só quando travar; 4) SEM legenda. Suba degraus aos poucos, repetindo conteúdos. POR QUE é difícil sem legenda: a fala nativa tem CONNECTED SPEECH — palavras se fundem ("gonna", "wanna", "didja" = did you), sílabas somem, o ritmo é acelerado. Não é vocabulário que falta; é o OUVIDO que precisa se acostumar ao som real. ESTRATÉGIAS: escolha conteúdo que você gosta e talvez já conheça (reassistir ajuda muito); comece com gêneros de fala mais clara (sitcoms, documentários) antes de ação/sotaques carregados; use a técnica de repetir cenas curtas até entender; não busque captar 100% — nativos também perdem palavras e seguem pelo contexto. Treinar o ouvido com mídia real é o caminho mais natural e prazeroso para a compreensão auditiva — a habilidade que mais trava brasileiros no B2.',
      },
      estrutura: {
        titulo: 'O método progressivo',
        partes: [
          { simbolo: 'a escada', desc: 'PT → EN → EN ao travar → sem legenda.' },
          { simbolo: 'connected speech', desc: 'palavras se fundem: gonna, didja, wanna.' },
          { simbolo: 'escolher bem', desc: 'fala clara primeiro; conteúdo que gosta.' },
          { simbolo: 'repetir', desc: 'reassistir e repetir cenas curtas.' },
        ],
      },
      exemplo: {
        titulo: 'Treinando o ouvido',
        celulas: [
          { ref: 'escada', valor: 'Legenda EN é a etapa-chave: liga som à escrita.' },
          { ref: 'fusão', valor: '"Whaddya wanna do?" = What do you want to do?' },
          { ref: 'gênero', valor: 'Sitcom/documentário: fala mais clara para começar.' },
          { ref: 'meta', valor: 'Captar a essência, não 100% — como os nativos.' },
        ],
        formula: 'subir a escada de legendas + repetir + escolher fala clara',
        resultado: 'Você entende áudio nativo progressivamente.',
        comentario: 'A etapa que mais rende é a LEGENDA EM INGLÊS: você vê a palavra que ouviu e seu ouvido aprende o som real (incluindo as fusões da connected speech). Fique nela bastante tempo. Não pule degraus nem cobre 100% de compreensão — nativos também perdem palavras e seguem pelo contexto. Escolher conteúdo que você AMA e reassistir é o segredo da constância.',
      },
      vocabulario: [
        { palavra: 'subtitles / captions', def: 'legendas.' },
        { palavra: 'connected speech', def: 'fala conectada — palavras que se fundem.' },
        { palavra: 'listening comprehension', def: 'compreensão auditiva.' },
      ],
      chave: [
        'Suba a escada: PT → EN → sem legenda',
        'A legenda em inglês é a etapa mais valiosa',
        'Capte a essência, não 100%; reassista o que gosta',
      ],
      porque: 'Compreensão auditiva é o que mais trava brasileiros no inglês avançado. Treinar o ouvido com filmes e séries é o método mais natural e prazeroso — e assistir sem legenda é um marco concreto de progresso.',
    },
    pratica: {
      instrucao: 'Aplique o método progressivo de assistir.',
      passos: [
        'Identifique em que degrau da escada você está',
        'Assista uma cena com legenda em inglês',
        'Anote 3 casos de connected speech (gonna, didja)',
        'Repita uma cena curta até entender sem pausa',
        'Escolha uma série de fala clara para treinar',
        'Reassista algo que você já conhece',
        'Avalie quanto captou sem traduzir',
      ],
    },
    desafio: {
      cenario: 'Escolha uma cena curta (2-3 min) de uma série, assista com legenda em inglês, identifique 4 exemplos de fala conectada (palavras fundidas) e resuma a cena com suas palavras.',
      requisitos: [
        'Defini meu degrau atual na escada de legendas',
        'Assisti com legenda em inglês',
        'Identifiquei 4 casos de connected speech',
        'Repeti a cena para fixar',
        'Resumi a cena sem traduzir',
      ],
      dica: 'Não tente pular direto para "sem legenda" — frustra e desmotiva. Fique na legenda em inglês até ela virar quase desnecessária. E escolha algo que você adora: a constância importa mais que o método perfeito.',
    },
    validacao: [
      'Sei a escada de legendas',
      'Reconheço connected speech',
      'Escolho conteúdo de fala clara',
      'Repito cenas para treinar o ouvido',
      'Capto a essência sem traduzir',
    ],
  },

  'en-b2-midia-3': {
    trilhaId: 'en-b2-midia', numero: 3, titulo: 'Música e letras',
    tempoTotal: 13, xp: 100, vertente: 'ingles',
    aula: {
      gancho: 'Você canta junto sem saber o que diz a letra. Música é uma das formas mais prazerosas — e enganosas — de aprender inglês: fixa pronúncia e vocabulário, mas também ensina "erros" que só funcionam em canção.',
      conceito: {
        titulo: 'Aprender com música: o bom e o cuidado',
        texto: 'Música é poderosa para o aprendizado porque a MELODIA fixa palavras e ritmo na memória de um jeito que o estudo seco não faz — você lembra de uma frase porque ela "gruda" na canção. Benefícios: pronúncia, entonação, vocabulário em contexto emocional, e a connected speech (cantores também fundem palavras). MÉTODO: 1) ouça a música que você gosta; 2) leia a letra (lyrics) acompanhando; 3) traduza/entenda os trechos; 4) cante junto imitando os sons; 5) reaproveite expressões úteis. CUIDADOS importantes: letras usam LICENÇA POÉTICA — gramática "errada" de propósito ("I ain\'t got nobody" = dupla negativa, normal em música mas evitada no formal), palavras cortadas pra caber na métrica, gírias intensas, sentidos figurados. Então: use música pra treinar ouvido, pronúncia e vocabulário, mas NÃO a tome como modelo de gramática formal. Identifique o que é licença poética e o que é uso real. Bem usada, a música é o treino mais divertido e memorável do inglês — e funciona porque você repete por prazer, não por obrigação.',
      },
      estrutura: {
        titulo: 'Música como ferramenta',
        partes: [
          { simbolo: 'a melodia fixa', desc: 'a canção "gruda" palavras e ritmo na memória.' },
          { simbolo: 'método', desc: 'ouvir → ler lyrics → entender → cantar → reusar.' },
          { simbolo: 'licença poética', desc: '"ain\'t", dupla negativa, cortes — só em música.' },
          { simbolo: 'cuidado', desc: 'treine ouvido/pronúncia, não gramática formal.' },
        ],
      },
      exemplo: {
        titulo: 'Letra na prática',
        celulas: [
          { ref: 'método', valor: 'Ler a letra enquanto ouve conecta som e palavra.' },
          { ref: 'licença', valor: '"I ain\'t got no money" — dupla negativa (só música).' },
          { ref: 'útil', valor: 'expressões reais que aparecem: "let it go", "hold on".' },
          { ref: 'pronúncia', valor: 'cantar junto treina ritmo e fusão de sons.' },
        ],
        formula: 'música = ouvido + pronúncia + vocabulário (≠ gramática formal)',
        resultado: 'Você aprende com música sem absorver erros.',
        comentario: 'O equilíbrio é a chave: música é imbatível para fixar pronúncia, ritmo e vocabulário emocional — você repete por prazer e nunca esquece. MAS letras têm licença poética ("ain\'t", duplas negativas, cortes), então não as tome como modelo de gramática. Aprenda a separar o que é uso real (expressões úteis) do que é só efeito de canção. Assim você fica com o melhor da música sem os vícios.',
      },
      vocabulario: [
        { palavra: 'lyrics', def: 'letra de música.' },
        { palavra: 'poetic license', def: 'licença poética — "erros" intencionais em arte.' },
        { palavra: 'ain\'t', def: 'forma informal/musical de "isn\'t/aren\'t/haven\'t".' },
      ],
      chave: [
        'Música fixa pronúncia, ritmo e vocabulário',
        'Método: ouvir, ler a letra, entender, cantar, reusar',
        'Letras têm licença poética — não copie a gramática',
      ],
      porque: 'Música é o treino mais prazeroso e memorável do inglês porque você repete por gosto. Bem usada — separando uso real de licença poética — treina ouvido e pronúncia de forma que o estudo formal não alcança.',
    },
    pratica: {
      instrucao: 'Use uma música para treinar inglês com método.',
      passos: [
        'Escolha uma música em inglês que você gosta',
        'Leia a letra acompanhando o áudio',
        'Traduza/entenda 4 trechos',
        'Identifique 2 casos de licença poética',
        'Liste 4 expressões úteis e reais da letra',
        'Cante junto imitando os sons',
        'Reuse 2 expressões em frases próprias',
      ],
    },
    desafio: {
      cenario: 'Pegue uma música em inglês: entenda 4 trechos, separe o que é licença poética do que é uso real, liste 4 expressões aproveitáveis e use 2 em frases suas.',
      requisitos: [
        'Acompanhei a letra com o áudio',
        'Entendi 4 trechos da música',
        'Identifiquei casos de licença poética',
        'Listei 4 expressões reais aproveitáveis',
        'Usei 2 expressões em frases próprias',
      ],
      dica: 'Ame a música primeiro, estude depois. O prazer é o que faz você repetir dezenas de vezes — e a repetição é o que fixa o inglês. Só lembre de não levar o "ain\'t got no" para uma redação formal.',
    },
    validacao: [
      'Uso o método de estudar com música',
      'Acompanho a letra com o áudio',
      'Reconheço licença poética',
      'Aproveito expressões reais',
      'Reuso o que aprendi',
    ],
  },

  'en-b2-midia-4': {
    trilhaId: 'en-b2-midia', numero: 4, titulo: 'Podcasts e áudio',
    tempoTotal: 14, xp: 110, vertente: 'ingles',
    aula: {
      gancho: 'Sem imagem, sem legenda, só voz — podcasts parecem o nível mais difícil de áudio. Mas justamente por isso são o melhor treino de compreensão pura, e cabem em qualquer momento morto do dia: trânsito, academia, louça.',
      conceito: {
        titulo: 'Podcasts: o treino de ouvido portátil',
        texto: 'Podcasts são áudio puro — sem o apoio visual de filmes — o que os torna um treino exigente e poderoso de listening. Vantagens: você pode ouvir em QUALQUER lugar (transformando tempo perdido em estudo), há podcasts sobre QUALQUER assunto (ouça o que te interessa), e muitos são FEITOS para aprendizes, com fala mais lenta e explicações. TIPOS: podcasts para learners (graded, com transcrição) → ótimos para começar; podcasts nativos de fala clara (entrevistas, jornalismo) → nível intermediário; podcasts nativos casuais (papo solto, comédia) → avançado. ESTRATÉGIAS: 1) comece com episódios que tenham TRANSCRIÇÃO (acompanhe lendo); 2) ajuste a VELOCIDADE (0.75x ajuda no começo); 3) ouça o mesmo episódio mais de uma vez; 4) escolha temas que você já conhece em português (o contexto ajuda); 5) anote 3-5 expressões por episódio, não mais. A grande força do podcast é a CONSTÂNCIA: 20 minutos por dia no trânsito viram horas de exposição por semana. Compreensão auditiva é questão de QUANTIDADE de input — e o podcast é a forma mais fácil de acumular horas de inglês sem reservar tempo extra na agenda.',
      },
      estrutura: {
        titulo: 'Usar podcasts bem',
        partes: [
          { simbolo: 'áudio puro', desc: 'sem imagem: treino de listening mais exigente.' },
          { simbolo: 'tipos', desc: 'para learners → nativo claro → nativo casual.' },
          { simbolo: 'estratégia', desc: 'transcrição, 0.75x, repetir, tema conhecido.' },
          { simbolo: 'constância', desc: '20 min/dia em tempo morto = horas/semana.' },
        ],
      },
      exemplo: {
        titulo: 'Rotina de podcast',
        celulas: [
          { ref: 'começar', valor: 'Podcast para learners com transcrição = ideal no início.' },
          { ref: 'velocidade', valor: 'Ponha em 0.75x até o ouvido acostumar.' },
          { ref: 'repetir', valor: 'Reouvir o mesmo episódio dobra a compreensão.' },
          { ref: 'quando', valor: 'No trânsito, na academia, lavando louça.' },
        ],
        formula: 'input diário + transcrição + tema conhecido = listening',
        resultado: 'Você acumula horas de inglês sem esforço extra.',
        comentario: 'A virtude do podcast é a CONSTÂNCIA disfarçada: 20 minutos no trânsito todo dia viram horas semanais de exposição sem tirar tempo da agenda. Comece com episódios que tenham transcrição e tema que você domina — o contexto compensa o que o ouvido ainda não pega. Não busque entender tudo; busque OUVIR muito. Listening é, antes de tudo, uma questão de quantidade de horas.',
      },
      vocabulario: [
        { palavra: 'podcast / episode', def: 'podcast / episódio.' },
        { palavra: 'transcript', def: 'transcrição — texto do áudio.' },
        { palavra: 'playback speed', def: 'velocidade de reprodução (0.75x, 1x...).' },
      ],
      chave: [
        'Podcast = listening portátil em tempo morto',
        'Comece com transcrição, tema conhecido e 0.75x',
        'Constância (input diário) vence: acumule horas',
      ],
      porque: 'Podcasts transformam tempo perdido em horas de inglês e treinam compreensão pura. Como listening é questão de quantidade de input, são a ferramenta mais prática para acumular exposição sem reorganizar a agenda.',
    },
    pratica: {
      instrucao: 'Monte sua rotina de podcasts em inglês.',
      passos: [
        'Escolha um podcast adequado ao seu nível',
        'Ouça um episódio acompanhando a transcrição',
        'Ajuste a velocidade se precisar (0.75x)',
        'Reouça o mesmo episódio uma segunda vez',
        'Anote 3-5 expressões úteis do episódio',
        'Defina um momento fixo do dia para ouvir',
        'Resuma o episódio com suas palavras',
      ],
    },
    desafio: {
      cenario: 'Escolha um podcast em inglês do seu nível, ouça um episódio (com transcrição se possível), anote 5 expressões úteis e resuma o conteúdo com suas palavras. Defina um horário diário para o hábito.',
      requisitos: [
        'Escolhi um podcast adequado ao meu nível',
        'Ouvi com transcrição e/ou velocidade ajustada',
        'Reouvi para melhorar a compreensão',
        'Anotei 5 expressões úteis',
        'Defini um momento diário para o hábito',
      ],
      dica: 'O segredo não é o podcast perfeito — é o HÁBITO diário. Atrele a escuta a uma rotina que já existe (o trajeto, o treino, a louça). Vinte minutos por dia batem duas horas uma vez por mês.',
    },
    validacao: [
      'Escolho podcasts do meu nível',
      'Uso transcrição e velocidade a meu favor',
      'Repito episódios para fixar',
      'Anoto expressões úteis',
      'Mantenho o hábito diário',
    ],
  },

  'en-b2-midia-5': {
    trilhaId: 'en-b2-midia', numero: 5, titulo: 'Redes sociais e internet',
    tempoTotal: 14, xp: 110, vertente: 'ingles',
    aula: {
      gancho: 'Memes, comentários, threads, abreviações como "lol", "imo", "tbh", "fyi". A internet tem um inglês próprio, rápido e cheio de códigos — entendê-lo é navegar no maior corpus de inglês informal do planeta.',
      conceito: {
        titulo: 'O inglês da internet',
        texto: 'Redes sociais são o maior repositório de inglês informal e atual — mas têm sua própria linguagem. ABREVIAÇÕES essenciais: lol (laughing out loud), imo/imho (in my opinion), tbh (to be honest), btw (by the way), fyi (for your information), idk (I don\'t know), tl;dr (too long; didn\'t read), asap, omg, brb (be right back), dm (direct message). VOCABULÁRIO de plataforma: to post, to share, to like, to follow/unfollow, thread (sequência de posts), reply, feed, viral, to go viral, hashtag, to tag (marcar), screenshot. GÍRIA da internet: salty (irritado), to ghost (sumir sem responder), to flex (se exibir), based, cringe (vergonha alheia), no cap (sem mentira). CUIDADOS: a internet é o reino do informal extremo, da ironia e de erros de digitação propositais — ótima para entender o inglês vivo e atual, mas NÃO é modelo de escrita formal. Outro ponto: gírias da internet MUDAM rápido (o que é "cool" hoje fica datado amanhã). Use a internet para se EXPOR a inglês real, atual e variado, treinar leitura rápida e entender a cultura — mas mantenha a consciência de registro. É a fonte mais abundante e gratuita de inglês informal que existe.',
      },
      estrutura: {
        titulo: 'Decodificando a internet',
        partes: [
          { simbolo: 'abreviações', desc: 'lol, imo, tbh, btw, fyi, idk, tl;dr.' },
          { simbolo: 'plataforma', desc: 'post, share, thread, feed, viral, tag, dm.' },
          { simbolo: 'gíria', desc: 'salty, ghost, flex, cringe, no cap.' },
          { simbolo: 'cuidado', desc: 'informal extremo, muda rápido, não é formal.' },
        ],
      },
      exemplo: {
        titulo: 'Lendo a internet',
        celulas: [
          { ref: 'abrev', valor: 'tbh, idk imo — to be honest, I don\'t know, in my opinion.' },
          { ref: 'plataforma', valor: 'The thread went viral. — a sequência viralizou.' },
          { ref: 'gíria', valor: 'He ghosted me. — ele sumiu sem responder.' },
          { ref: 'registro', valor: 'Ótimo para entender; não copie no formal.' },
        ],
        formula: 'abreviações + vocab de plataforma + gíria atual',
        resultado: 'Você navega o inglês da internet.',
        comentario: 'A internet é ouro para se EXPOR a inglês real, atual e variado — leitura rápida, cultura, gíria viva. Decore as abreviações mais comuns (lol, imo, tbh, idk, btw) porque elas estão em todo lugar. Mas mantenha firme a consciência de registro: esse é o informal extremo, muda rápido e jamais entra num e-mail de trabalho. Use para entender o mundo conectado, não como modelo de escrita.',
      },
      vocabulario: [
        { palavra: 'thread / feed / viral', def: 'sequência de posts / linha do tempo / viral.' },
        { palavra: 'imo / tbh / idk', def: 'na minha opinião / sendo honesto / não sei.' },
        { palavra: 'to ghost / cringe', def: 'sumir sem responder / vergonha alheia.' },
      ],
      chave: [
        'Decore as abreviações comuns (lol, imo, tbh, idk)',
        'Aprenda o vocabulário de plataforma (post, thread, viral)',
        'Informal extremo: ótimo p/ entender, não para o formal',
      ],
      porque: 'A internet é a maior e mais gratuita fonte de inglês informal, atual e cultural. Decodificá-la te conecta ao inglês vivo do mundo todo e treina leitura rápida — desde que você mantenha a consciência de registro.',
    },
    pratica: {
      instrucao: 'Decodifique o inglês da internet.',
      passos: [
        'Liste 10 abreviações com seus significados',
        'Liste 6 termos de plataforma (post, thread...)',
        'Liste 5 gírias de internet com sentido',
        'Decodifique um comentário/post real',
        'Escreva um comentário informal usando 3 abreviações',
        'Reescreva-o em registro formal',
        'Marque o que muda rápido e pode datar',
      ],
    },
    desafio: {
      cenario: 'Pegue um post ou thread real em inglês: decodifique as abreviações e gírias, explique o sentido geral e depois reescreva uma parte em registro formal, mostrando que distingue os dois mundos.',
      requisitos: [
        'Decodifiquei abreviações e gírias do post',
        'Expliquei o sentido geral',
        'Identifiquei vocabulário de plataforma',
        'Reescrevi uma parte em registro formal',
        'Mostrei consciência de registro',
      ],
      dica: 'Trate a internet como imersão informal: leia comentários e threads sobre temas que você curte. Você absorve inglês atual de graça. Só não confunda os mundos — "tbh idk" não cabe num relatório.',
    },
    validacao: [
      'Decodifico abreviações de internet',
      'Conheço vocabulário de plataforma',
      'Entendo gírias atuais',
      'Reescrevo informal em formal',
      'Mantenho consciência de registro',
    ],
  },

  'en-b2-midia-6': {
    trilhaId: 'en-b2-midia', numero: 6, titulo: 'Projeto: faça sua resenha',
    tempoTotal: 24, xp: 150, vertente: 'ingles',
    aula: {
      gancho: 'Hora de virar criador, não só consumidor: você vai escrever e apresentar uma resenha (review) de um filme, série, música ou podcast em inglês — opinando, analisando e recomendando, como fazem os críticos e influenciadores que você acompanha.',
      conceito: {
        titulo: 'Escrever e apresentar uma review',
        texto: 'Este projeto integra a trilha transformando você de consumidor em produtor de mídia em inglês. Escolha algo que você consumiu em inglês (um filme, uma série, uma música, um podcast, um vídeo) e produza uma RESENHA de 12 a 16 frases que: 1) APRESENTA a obra (what it is, genre, who it\'s for) — "This is a series about...", "It\'s a sci-fi show"; 2) RESUME sem spoilers ("It follows a group of...", "The story is about..."); 3) ANALISA com opinião e adjetivos fortes ("The acting is brilliant", "The plot is a bit slow", "What I loved was..."); 4) usa VOCABULÁRIO de crítica e collocations (gripping, well-written, overrated, a must-watch, highly recommend); 5) dá uma RECOMENDAÇÃO clara e justificada ("I\'d definitely recommend it because...", "It\'s worth watching if you like..."). Incorpore o que a trilha treinou: vocabulário formal de análise, expressões naturais e tom adequado (uma review pode ser semi-formal ou casual conforme a "plataforma" que você imaginar). Apresente em voz alta como um vídeo-resenha e/ou escreva como um post. Produzir conteúdo em inglês sobre mídia que você ama é a ponte entre consumir e PRODUZIR — o uso mais completo e gratificante do idioma no B2.',
      },
      estrutura: {
        titulo: 'As partes da resenha',
        partes: [
          { simbolo: 'apresentar', desc: 'o que é, gênero, para quem.' },
          { simbolo: 'resumir', desc: 'enredo/conteúdo sem spoilers.' },
          { simbolo: 'analisar', desc: 'opinião com adjetivos e vocabulário de crítica.' },
          { simbolo: 'recomendar', desc: 'recomendação clara e justificada.' },
        ],
      },
      exemplo: {
        titulo: 'Uma review modelo (trecho)',
        celulas: [
          { ref: 'apresenta', valor: 'This is a gripping crime series set in the 90s.' },
          { ref: 'resume', valor: 'It follows a detective who... (no spoilers).' },
          { ref: 'analisa', valor: 'The acting is brilliant, though the pace is slow.' },
          { ref: 'recomenda', valor: 'I highly recommend it if you like slow burns.' },
        ],
        formula: 'apresentar + resumir + analisar + recomendar = review',
        resultado: 'Você produz mídia crítica em inglês.',
        comentario: 'O salto deste projeto é virar PRODUTOR. Estruture a review nas quatro partes, mas deixe sua opinião e personalidade aparecerem — uma boa resenha tem voz. Use vocabulário de crítica (gripping, overrated, a must-watch) e collocations naturais. Resuma SEM spoilers e termine com recomendação justificada. Apresente como um vídeo-resenha em voz alta: falar sobre mídia que você ama é o uso mais gostoso e completo do inglês.',
      },
      vocabulario: [
        { palavra: 'review / recommend', def: 'resenha / recomendar.' },
        { palavra: 'gripping / overrated', def: 'envolvente / superestimado.' },
        { palavra: 'a must-watch / worth it', def: 'imperdível / vale a pena.' },
      ],
      chave: [
        'Resenha de 12–16 frases em quatro partes',
        'Apresentar, resumir (sem spoiler), analisar, recomendar',
        'Use vocabulário de crítica e dê sua opinião com voz',
      ],
      porque: 'Produzir uma resenha integra toda a trilha e te transforma de consumidor em produtor de inglês. Opinar e recomendar mídia é um uso real, criativo e gratificante do idioma — e treina vocabulário de análise valioso.',
    },
    pratica: {
      instrucao: 'Monte e apresente sua resenha em inglês.',
      passos: [
        'Escolha uma obra que você consumiu em inglês',
        'Apresente o que é, gênero e para quem',
        'Resuma o conteúdo sem dar spoilers',
        'Analise com opinião e vocabulário de crítica',
        'Dê uma recomendação clara e justificada',
        'Apresente em voz alta como vídeo-resenha',
        'Revise buscando voz e naturalidade',
      ],
    },
    desafio: {
      cenario: 'Escreva e apresente uma resenha de 12 a 16 frases de um filme, série, música ou podcast em inglês, passando por apresentação, resumo sem spoilers, análise com opinião e recomendação justificada.',
      requisitos: [
        'Apresentei a obra (o que é, gênero, público)',
        'Resumi sem spoilers',
        'Analisei com opinião e vocabulário de crítica',
        'Dei uma recomendação clara e justificada',
        'Apresentei em voz alta com voz própria',
      ],
      dica: 'Leia/ouça uma ou duas reviews reais em inglês antes de escrever a sua — absorva o vocabulário de crítica e a estrutura. Depois fale com a SUA opinião: autenticidade é o que torna uma resenha boa.',
    },
    validacao: [
      'Apresentei a obra com clareza',
      'Resumi sem spoilers',
      'Analisei com vocabulário de crítica',
      'Recomendei de forma justificada',
      'Apresentei com voz própria',
    ],
  },
};
