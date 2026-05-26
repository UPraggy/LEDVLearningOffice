// ============================================================================
// CONTEÚDO — IA pro Trabalho (pc-ia)
// Usar ChatGPT/Claude/Gemini com segurança e proveito no dia a dia.
// ============================================================================

export const PC_IA = {
  'pc-ia-1': {
    trilhaId: 'pc-ia', numero: 1, titulo: 'O que a IA faz (e o que não faz)',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Todo mundo fala de "inteligência artificial". Mas afinal, o que ela realmente faz por você no dia a dia — e onde ela erra feio? Entender isso te coloca na frente de muita gente que só tem medo ou ilusão.',
      conceito: {
        titulo: 'Uma assistente que escreve, resume e explica — mas pode errar',
        texto: 'Ferramentas como ChatGPT, Claude e Gemini são assistentes que conversam por texto. Você pede algo em português normal e elas respondem: escrevem um e-mail, resumem um texto, explicam um assunto, dão ideias. São incríveis pra isso. Mas atenção: elas às vezes "inventam" informações com confiança (chamamos isso de alucinação). Por isso: ótimas pra rascunhar e organizar, mas você sempre confere fatos importantes.',
      },
      estrutura: {
        titulo: 'O que esperar (e o que não)',
        partes: [
          { simbolo: '✅', desc: 'Faz bem: escrever e melhorar textos, resumir, explicar, traduzir, dar ideias, organizar.' },
          { simbolo: '⚠️', desc: 'Cuidado: pode inventar fatos, datas, números e leis. Sempre confira o que é importante.' },
          { simbolo: '🔒', desc: 'Privacidade: não cole dados sensíveis (senhas, CPF, dados de clientes) — trate como conversa pública.' },
          { simbolo: '🧠', desc: 'Não pensa por você: é uma ferramenta. A decisão e a revisão final são sempre suas.' },
        ],
      },
      exemplo: {
        titulo: 'Bom uso x uso arriscado',
        celulas: [
          { ref: 'Bom', valor: '"Melhore este e-mail que escrevi: ..."' },
          { ref: 'Bom', valor: '"Resuma este texto em 5 pontos"' },
          { ref: 'Arriscado', valor: '"Qual a lei exata sobre X?" (confira na fonte!)' },
          { ref: 'Nunca', valor: 'Colar senha, CPF ou dados de cliente' },
        ],
        formula: 'IA pra rascunhar e organizar; você revisa e decide',
        resultado: 'Velocidade da IA + seu julgamento = ótimo resultado.',
        comentario: 'Pense na IA como um estagiário muito rápido e culto, mas que às vezes chuta. Você usa o trabalho dele, mas sempre confere.',
      },
      vocabulario: [
        { palavra: 'IA generativa', def: 'Programa que gera texto (e mais) a partir do que você pede em linguagem normal.' },
        { palavra: 'Alucinação', def: 'Quando a IA inventa uma informação errada com aparência de verdade.' },
        { palavra: 'Prompt', def: 'O pedido/instrução que você escreve pra IA.' },
      ],
      chave: [
        'IA é ótima pra escrever, resumir, explicar e dar ideias',
        'Ela pode inventar fatos — confira o que é importante',
        'Nunca cole dados sensíveis; você sempre revisa e decide',
      ],
      porque: 'Saber usar IA já é considerado habilidade básica no mercado, como usar planilha. Quem aprende a usá-la com proveito (e cautela) trabalha mais rápido e se destaca — sem cair nas armadilhas.',
    },
    pratica: {
      instrucao: 'Vamos abrir uma ferramenta de IA gratuita. Use o navegador.',
      passos: [
        'Acesse chatgpt.com (ou claude.ai, ou gemini.google.com)',
        'Crie uma conta gratuita ou faça login (Gemini usa sua conta Google)',
        'Na caixa de mensagem, escreva: "Explique o que é PIX em 3 frases simples"',
        'Leia a resposta e veja como ela conversa em português normal',
        'Pergunte algo do seu dia a dia (ex: "me dê 5 ideias de presente barato")',
        'Agora teste o limite: peça um dado específico e desconfie — confira a fonte depois',
        'Repare: você conversa como com uma pessoa, mas confere o que importa',
      ],
    },
    desafio: {
      cenario: 'Faça 3 perguntas úteis a uma IA e avalie criticamente cada resposta: o que foi útil e o que você confiaria sem checar?',
      requisitos: [
        'Acessei uma ferramenta de IA e fiz login',
        'Fiz pelo menos 3 perguntas reais',
        'Avaliei quais respostas eram confiáveis e quais checaria',
        'Não coloquei nenhum dado sensível',
        'Entendi o que ela faz bem e onde erra',
      ],
      dica: 'Comece a usar a IA pra coisas de baixo risco: rascunhar textos, ter ideias, entender assuntos. Conforme ganha confiança, você aprende a sentir quando precisa conferir.',
    },
    validacao: [
      'Sei o que a IA faz bem',
      'Sei que ela pode inventar fatos',
      'Nunca coloco dados sensíveis',
      'Entendo que eu reviso e decido',
      'Acessei e usei uma ferramenta de IA',
    ],
  },

  'pc-ia-2': {
    trilhaId: 'pc-ia', numero: 2, titulo: 'O pedido perfeito (prompt)',
    tempoTotal: 10, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'A mesma IA pode te dar uma resposta vaga e inútil ou uma resposta perfeita — a diferença está em COMO você pede. Aprender a fazer um bom pedido (prompt) é a habilidade que multiplica o valor da IA.',
      conceito: {
        titulo: 'Quanto melhor o pedido, melhor a resposta',
        texto: 'A IA responde ao que você pede. Pedidos vagos geram respostas vagas. Um bom prompt diz: quem você quer que a IA seja, o que você precisa, pra quem é, e em que formato. Quanto mais contexto e clareza, melhor o resultado. É como explicar uma tarefa pra um assistente: quanto mais detalhes úteis, melhor ele entrega.',
      },
      estrutura: {
        titulo: 'A receita de um bom prompt',
        partes: [
          { simbolo: '🎭', desc: 'Papel: "Aja como um redator profissional" / "como um especialista em RH".' },
          { simbolo: '🎯', desc: 'Tarefa: o que você quer, específico ("escreva um e-mail pedindo...").' },
          { simbolo: '👤', desc: 'Contexto: pra quem é, o tom, a situação ("formal, pra meu chefe").' },
          { simbolo: '📐', desc: 'Formato: como quer a resposta ("em tópicos", "máximo 5 linhas", "tom amigável").' },
        ],
      },
      exemplo: {
        titulo: 'Pedido fraco x pedido forte',
        celulas: [
          { ref: 'Fraco', valor: '"escreve um e-mail"' },
          { ref: 'Forte', valor: '"Aja como assistente. Escreva um e-mail formal e curto (5 linhas) pro meu chefe pedindo 2 dias de folga na próxima semana, com tom educado."' },
          { ref: 'Resultado', valor: 'O forte gera algo pronto pra usar' },
        ],
        formula: 'Papel + tarefa + contexto + formato = resposta sob medida',
        resultado: 'Menos "mais ou menos", mais "perfeito".',
        comentario: 'Não acertou de primeira? Continue a conversa: "deixe mais formal", "encurte", "mude o tom". A IA ajusta.',
      },
      vocabulario: [
        { palavra: 'Prompt', def: 'O pedido que você escreve pra IA.' },
        { palavra: 'Contexto', def: 'As informações de fundo que ajudam a IA a responder certo (pra quem, tom, situação).' },
        { palavra: 'Refinar', def: 'Ajustar a resposta pedindo melhorias na sequência da conversa.' },
      ],
      chave: [
        'Pedido vago = resposta vaga',
        'Bom prompt: papel + tarefa + contexto + formato',
        'Não gostou? Refine na conversa ("encurte", "mais formal")',
      ],
      porque: 'Saber "conversar" com a IA (prompting) é a competência central do uso de IA no trabalho — citada em pesquisas de empregabilidade 2026. É o que separa quem tira ouro da ferramenta de quem acha que "ela não ajuda".',
    },
    pratica: {
      instrucao: 'Abra sua ferramenta de IA. Vamos comparar pedidos fracos e fortes.',
      passos: [
        'Peça de forma vaga: "escreve um texto sobre trabalho em equipe"',
        'Veja como a resposta é genérica',
        'Agora peça com a receita completa: papel + tarefa + contexto + formato',
        'Ex: "Aja como um redator. Escreva um parágrafo curto (4 linhas), tom motivador, sobre a importância do trabalho em equipe, pra um mural de escritório."',
        'Compare as duas respostas',
        'Refine: peça "deixe mais informal" e veja a IA ajustar',
        'Peça de novo mudando o formato: "agora em 3 tópicos"',
      ],
    },
    desafio: {
      cenario: 'Escreva um prompt completo (com papel, tarefa, contexto e formato) pra resolver uma necessidade real sua, e refine a resposta até ficar do jeito que você quer.',
      requisitos: [
        'Meu prompt define um papel pra IA',
        'Tem uma tarefa específica',
        'Inclui contexto (pra quem, tom, situação)',
        'Especifica o formato desejado',
        'Refinei a resposta na conversa até ficar boa',
      ],
      dica: 'Guarde seus melhores prompts num documento. Quando achar um que funciona (ex: "melhore este e-mail mantendo o tom"), reutilize sempre — vira seu kit pessoal de produtividade.',
    },
    validacao: [
      'Entendo que o pedido determina a resposta',
      'Sei usar papel + tarefa + contexto + formato',
      'Sei refinar a resposta na conversa',
      'Comparei pedido fraco x forte',
      'Resolvi uma necessidade real com um bom prompt',
    ],
  },

  'pc-ia-3': {
    trilhaId: 'pc-ia', numero: 3, titulo: 'Escrever e melhorar e-mails',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Travou na hora de escrever um e-mail importante? A IA é sua revisora particular: ela escreve um rascunho, melhora o que você fez, ajusta o tom e corrige erros — em segundos.',
      conceito: {
        titulo: 'A IA como sua assistente de escrita',
        texto: 'Escrever e-mails profissionais trava muita gente: o tom certo, sem erros, claro e educado. A IA resolve isso de dois jeitos: escrevendo um rascunho a partir do que você quer dizer, ou melhorando um texto que você já escreveu (corrigindo, deixando mais formal/claro). Você dá a intenção, ela cuida da forma — e você revisa e envia.',
      },
      estrutura: {
        titulo: 'Dois usos para e-mail',
        partes: [
          { simbolo: '✍️', desc: 'Escrever do zero: "Escreva um e-mail formal pedindo X pra Y, tom educado, curto."' },
          { simbolo: '🔧', desc: 'Melhorar o seu: "Melhore este e-mail mantendo a ideia, corrija erros e deixe mais claro: [cole o seu]".' },
          { simbolo: '🎚️', desc: 'Ajustar o tom: "mais formal", "mais amigável", "mais direto".' },
          { simbolo: '👀', desc: 'Sempre revise antes de enviar: confira nomes, datas e se ficou com a sua cara.' },
        ],
      },
      exemplo: {
        titulo: 'Melhorando um e-mail',
        celulas: [
          { ref: 'Você escreve', valor: '"oi preciso dos relatorio ate sexta obrigado"' },
          { ref: 'Pede', valor: '"Melhore este e-mail, tom profissional"' },
          { ref: 'IA devolve', valor: 'Versão clara, educada e sem erros' },
          { ref: 'Você', valor: 'Revisa, ajusta e envia' },
        ],
        formula: 'Sua ideia + polimento da IA + sua revisão = e-mail pronto',
        resultado: 'E-mails profissionais sem travar nem errar.',
        comentario: 'Cuidado pra não soar robótico: peça "mantenha natural e humano". E sempre dê uma lida final pra garantir que parece você.',
      },
      vocabulario: [
        { palavra: 'Rascunho', def: 'Uma primeira versão do texto, pra você revisar e melhorar.' },
        { palavra: 'Tom', def: 'O "jeito" do texto: formal, amigável, direto, etc.' },
        { palavra: 'Revisar', def: 'Ler e ajustar antes de enviar (conferir nomes, datas, naturalidade).' },
      ],
      chave: [
        'A IA escreve do zero OU melhora o que você escreveu',
        'Peça ajustes de tom (formal, amigável, direto)',
        'Sempre revise antes de enviar — confira e humanize',
      ],
      porque: 'E-mail profissional é comunicação diária no trabalho. Usar a IA como revisora elimina o medo da página em branco e os erros — fazendo você se comunicar com confiança e profissionalismo.',
    },
    pratica: {
      instrucao: 'Abra sua ferramenta de IA. Vamos trabalhar um e-mail real.',
      passos: [
        'Pense num e-mail que você precisa (ou precisaria) enviar',
        'Escreva uma versão rápida e tosca, com a ideia principal',
        'Peça à IA: "Melhore este e-mail, tom profissional e educado, mantendo natural: [cole o seu]"',
        'Leia a versão melhorada',
        'Peça um ajuste: "deixe um pouco mais curto" ou "mais amigável"',
        'Revise: confira se os nomes, datas e pedidos estão certos',
        'Copie a versão final pro seu e-mail (não envie se for teste)',
      ],
    },
    desafio: {
      cenario: 'Produza um e-mail profissional real do começo ao fim usando a IA como revisora — da sua ideia tosca até a versão final revisada por você.',
      requisitos: [
        'Parti de uma ideia/rascunho meu',
        'Usei a IA pra melhorar ou escrever',
        'Ajustei o tom conforme a situação',
        'Revisei conferindo nomes/datas/naturalidade',
        'Tenho uma versão final pronta pra enviar',
      ],
      dica: 'A IA é ótima ponto de partida, mas o e-mail tem que soar como você. Sempre dê o toque final: uma saudação que você usaria, uma frase mais sua. Autenticidade conta.',
    },
    validacao: [
      'Sei pedir pra IA escrever um e-mail',
      'Sei pedir pra melhorar um e-mail meu',
      'Sei ajustar o tom',
      'Reviso antes de enviar',
      'Mantenho o e-mail com a minha cara',
    ],
  },

  'pc-ia-4': {
    trilhaId: 'pc-ia', numero: 4, titulo: 'Resumir textos longos',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Um documento de 10 páginas, um contrato cheio de juridiquês, um monte de mensagens — quem tem tempo de ler tudo? A IA resume em pontos claros, e você capta o essencial em 1 minuto.',
      conceito: {
        titulo: 'O essencial de um texto longo, em segundos',
        texto: 'Resumir é uma das coisas que a IA faz melhor. Você cola um texto longo (ou descreve) e pede um resumo: em poucos pontos, em linguagem simples, destacando o que importa pra você. Funciona pra documentos, artigos, e-mails longos, atas. Você economiza tempo e ainda pode pedir pra explicar partes difíceis em palavras simples.',
      },
      estrutura: {
        titulo: 'Formas de resumir',
        partes: [
          { simbolo: '📌', desc: '"Resuma em 5 pontos os principais aspectos deste texto: [cole]".' },
          { simbolo: '🧒', desc: '"Explique este trecho em palavras simples, como pra alguém leigo".' },
          { simbolo: '🎯', desc: '"O que eu preciso saber/decidir a partir deste documento?".' },
          { simbolo: '⚠️', desc: 'Confira pontos críticos na fonte: pra contratos e leis, o resumo orienta, mas a decisão exige ler o original ou um profissional.' },
        ],
      },
      exemplo: {
        titulo: 'Usos do resumo',
        celulas: [
          { ref: 'Documento', valor: '"Resuma em 5 pontos"' },
          { ref: 'Termo difícil', valor: '"Explique X em linguagem simples"' },
          { ref: 'Decisão', valor: '"O que devo observar antes de assinar?"' },
          { ref: 'Cuidado', valor: 'Contrato importante → confirme no original' },
        ],
        formula: 'Cole o texto + peça o resumo no formato que ajuda você',
        resultado: 'O essencial captado em 1 minuto.',
        comentario: 'Pra textos sensíveis (contratos, questões legais), use o resumo pra entender e formular perguntas — mas a decisão final pede o documento original ou um profissional.',
      },
      vocabulario: [
        { palavra: 'Resumo', def: 'Versão curta que captura os pontos principais de um texto.' },
        { palavra: 'Linguagem simples', def: 'Explicação sem termos técnicos, acessível a leigos.' },
        { palavra: 'Ponto crítico', def: 'A informação mais importante pra uma decisão (prazo, valor, condição).' },
      ],
      chave: [
        'A IA resume textos longos em pontos claros',
        'Peça pra explicar termos difíceis em linguagem simples',
        'Para contratos/leis, confirme no original ou com um profissional',
      ],
      porque: 'No trabalho chega muita informação: relatórios, e-mails, documentos. Quem resume rápido entende e decide rápido. É produtividade pura — e ajuda a não se afogar em texto.',
    },
    pratica: {
      instrucao: 'Tenha um texto longo à mão (um artigo, um e-mail comprido, um termo de uso). Abra a IA.',
      passos: [
        'Copie um texto longo (de um site, e-mail ou documento)',
        'Cole na IA com o pedido: "Resuma em 5 pontos os principais aspectos: [texto]"',
        'Leia o resumo e compare com a sua impressão do texto',
        'Escolha um termo difícil e peça: "explique isto em palavras simples"',
        'Peça: "o que eu preciso saber/decidir a partir disto?"',
        'Note como você captou o essencial sem ler tudo',
      ],
    },
    desafio: {
      cenario: 'Pegue um documento ou texto longo real da sua vida e use a IA pra entendê-lo: resumo, explicação dos pontos difíceis e o que você precisa saber.',
      requisitos: [
        'Resumi um texto longo real em pontos',
        'Pedi explicação simples de um trecho difícil',
        'Identifiquei o que é importante pra mim',
        'Não coloquei dados sensíveis no texto colado',
        'Para algo crítico, sei que devo conferir o original',
      ],
      dica: 'Cuidado com dados sensíveis: ao resumir um documento pessoal (contrato com seus dados), apague nome, CPF e números antes de colar — ou descreva o conteúdo sem os dados.',
    },
    validacao: [
      'Sei pedir um resumo em pontos',
      'Sei pedir explicação em linguagem simples',
      'Sei perguntar "o que é importante aqui?"',
      'Removo dados sensíveis antes de colar',
      'Sei quando conferir o original',
    ],
  },

  'pc-ia-5': {
    trilhaId: 'pc-ia', numero: 5, titulo: 'Traduzir e revisar',
    tempoTotal: 8, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Recebeu algo em inglês? Precisa escrever sem erros de português? A IA traduz com naturalidade e revisa seu texto melhor que muito corretor — e ainda explica o porquê das correções.',
      conceito: {
        titulo: 'Tradutora e revisora, tudo em um',
        texto: 'A IA traduz textos entre idiomas mantendo o sentido e a naturalidade (melhor que tradutores automáticos antigos). E revisa seu português: corrige ortografia, gramática e clareza, podendo explicar cada correção pra você aprender. É uma ajuda enorme tanto pra entender conteúdo em outras línguas quanto pra escrever com mais confiança.',
      },
      estrutura: {
        titulo: 'Traduzir e revisar bem',
        partes: [
          { simbolo: '🌐', desc: 'Traduzir: "Traduza para o português, de forma natural: [texto]".' },
          { simbolo: '✅', desc: 'Revisar: "Revise este texto, corrija erros e melhore a clareza: [texto]".' },
          { simbolo: '🎓', desc: 'Aprender: "explique as correções que você fez" — pra não errar de novo.' },
          { simbolo: '↔️', desc: 'Dos dois lados: traduz pra entender, e do português pra outra língua pra responder.' },
        ],
      },
      exemplo: {
        titulo: 'Tradução e revisão na prática',
        celulas: [
          { ref: 'Inglês', valor: '"Please find attached" → "Segue em anexo"' },
          { ref: 'Revisar', valor: '"nós vai fazer" → "nós vamos fazer"' },
          { ref: 'Aprender', valor: '"por que mudou?" → ela explica a regra' },
        ],
        formula: 'Traduzir pra entender · revisar pra escrever bem',
        resultado: 'Comunicação clara, em qualquer idioma.',
        comentario: 'Pra traduções importantes (documentos oficiais), a IA ajuda a entender, mas tradução com validade legal exige tradutor juramentado.',
      },
      vocabulario: [
        { palavra: 'Tradução natural', def: 'Tradução que soa fluente, não "ao pé da letra".' },
        { palavra: 'Revisão', def: 'Correção de ortografia, gramática e clareza de um texto.' },
        { palavra: 'Tradutor juramentado', def: 'Profissional para traduções com validade legal (documentos oficiais).' },
      ],
      chave: [
        'A IA traduz com naturalidade e revisa seu português',
        'Peça pra explicar as correções e aprenda com elas',
        'Traduções oficiais exigem tradutor juramentado',
      ],
      porque: 'Entender conteúdo em inglês e escrever sem erros amplia muito suas oportunidades de trabalho e estudo. A IA derruba a barreira do idioma e da insegurança com a escrita.',
    },
    pratica: {
      instrucao: 'Abra a IA. Vamos traduzir e revisar.',
      passos: [
        'Encontre um texto curto em inglês (um e-mail, uma frase de um site)',
        'Peça: "Traduza para o português de forma natural: [texto]"',
        'Agora escreva uma frase em português com erros de propósito',
        'Peça: "Revise e corrija, e explique as correções"',
        'Leia as explicações e aprenda as regras',
        'Teste o caminho inverso: peça pra traduzir uma frase sua pro inglês',
        'Compare com o que você teria escrito',
      ],
    },
    desafio: {
      cenario: 'Use a IA pra (1) entender um texto em outro idioma e (2) revisar um texto seu em português, aprendendo com as correções.',
      requisitos: [
        'Traduzi um texto de outro idioma pro português',
        'Revisei um texto meu em português',
        'Pedi explicação das correções',
        'Aprendi pelo menos uma regra com isso',
        'Entendo o limite (tradução oficial = juramentado)',
      ],
      dica: 'Use a revisão como professora: sempre peça "explique o porquê". Em poucas semanas você comete menos erros sozinho, porque entendeu a regra — não só corrigiu o texto.',
    },
    validacao: [
      'Sei traduzir textos com a IA',
      'Sei revisar meu português com ela',
      'Peço explicação das correções',
      'Aprendo com as revisões',
      'Sei o limite das traduções oficiais',
    ],
  },

  'pc-ia-6': {
    trilhaId: 'pc-ia', numero: 6, titulo: 'Projeto: resolva uma demanda com IA',
    tempoTotal: 18, xp: 100, vertente: 'computador',
    aula: {
      gancho: 'Hora de juntar tudo: você vai pegar uma necessidade real e resolvê-la do começo ao fim com a IA — pesquisando, escrevendo, revisando e finalizando. Como um profissional que usa IA pra entregar mais e melhor.',
      conceito: {
        titulo: 'A IA no fluxo completo de uma tarefa',
        texto: 'Profissionais que se destacam usam a IA como parceira em todo o processo: entender o problema, gerar ideias, rascunhar, refinar e revisar. Neste projeto você escolhe uma demanda real (escrever uma carta de apresentação, planejar um evento, montar um texto) e a leva do início ao fim com a IA — sempre com seu julgamento no comando.',
      },
      estrutura: {
        titulo: 'O fluxo de trabalho com IA',
        partes: [
          { simbolo: '1', desc: 'Entender: peça à IA pra ajudar a clarear o que você precisa fazer.' },
          { simbolo: '2', desc: 'Gerar: peça ideias ou um primeiro rascunho (com um bom prompt).' },
          { simbolo: '3', desc: 'Refinar: ajuste tom, tamanho e detalhes conversando.' },
          { simbolo: '4', desc: 'Revisar: corrija, confira fatos e dê o toque pessoal final.' },
        ],
      },
      exemplo: {
        titulo: 'Exemplos de demanda',
        celulas: [
          { ref: 'Carreira', valor: 'Carta de apresentação pra uma vaga' },
          { ref: 'Pessoal', valor: 'Discurso curto pra uma festa de família' },
          { ref: 'Prático', valor: 'Plano de uma viagem ou evento' },
          { ref: 'Trabalho', valor: 'Texto de divulgação de um produto/serviço' },
        ],
        formula: 'Entender → gerar → refinar → revisar (você no comando)',
        resultado: 'Uma entrega real, feita com IA, com a sua cara.',
        comentario: 'O segredo é a conversa: não espere a resposta perfeita de primeira. Vá lapidando com pedidos de ajuste até ficar do seu jeito.',
      },
      vocabulario: [
        { palavra: 'Fluxo de trabalho', def: 'A sequência de passos pra realizar uma tarefa do início ao fim.' },
        { palavra: 'Iterar', def: 'Melhorar aos poucos, em rodadas de ajuste.' },
        { palavra: 'Toque pessoal', def: 'As adaptações que fazem o resultado soar como você, não como máquina.' },
      ],
      chave: [
        'Use a IA em todo o fluxo: entender, gerar, refinar, revisar',
        'Vá lapidando na conversa — não espere o perfeito de primeira',
        'O julgamento e o toque final são sempre seus',
      ],
      porque: 'Este projeto consolida a habilidade mais valorizada da nova economia: usar IA pra entregar resultados reais com qualidade. Sair daqui sabendo conduzir uma tarefa com IA do início ao fim é um diferencial enorme no mercado.',
    },
    pratica: {
      instrucao: 'Escolha uma demanda real sua. Reserve 18 minutos pra resolvê-la com a IA, do início ao fim.',
      passos: [
        'Defina sua demanda (ex: "escrever uma carta de apresentação pra uma vaga de recepcionista")',
        'Comece pedindo ajuda pra entender: "o que uma boa carta de apresentação pra essa vaga deve ter?"',
        'Peça um rascunho com um bom prompt (papel + tarefa + contexto + formato)',
        'Leia e peça ajustes: tom, tamanho, foco',
        'Revise: confira informações, corrija o que não bate com você',
        'Dê o toque pessoal: inclua algo verdadeiramente seu',
        'Finalize o material (salve no Word/Docs, exporte se precisar)',
      ],
    },
    desafio: {
      cenario: 'Entregue um material real resolvido com IA do início ao fim, demonstrando o fluxo completo: entender, gerar, refinar, revisar.',
      requisitos: [
        'Escolhi uma demanda real',
        'Usei a IA pra entender e planejar',
        'Gerei um rascunho com um bom prompt',
        'Refinei em pelo menos 2 rodadas de ajuste',
        'Revisei e dei o toque pessoal',
        'Tenho um material final pronto pra usar',
      ],
      dica: 'Parabéns — você concluiu a trilha de IA! Daqui pra frente, sempre que tiver uma tarefa de escrita, pesquisa ou organização, lembre: a IA pode ser sua parceira. Use com proveito e julgamento, e você trabalhará no nível de quem domina as ferramentas do futuro.',
    },
    validacao: [
      'Escolhi e entendi uma demanda real',
      'Usei a IA pra planejar e gerar',
      'Refinei em várias rodadas',
      'Revisei e personalizei o resultado',
      'Entreguei um material final pronto',
      'Sei conduzir uma tarefa com IA do início ao fim',
    ],
  },
};
