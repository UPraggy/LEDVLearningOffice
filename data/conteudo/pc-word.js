// ============================================================================
// CONTEÚDO — Word & Google Docs (pc-word)
// ============================================================================

export const PC_WORD = {
  'pc-word-1': {
    trilhaId: 'pc-word', numero: 1, titulo: 'Word ou Google Docs: qual usar',
    tempoTotal: 6, xp: 30, vertente: 'computador',
    aula: {
      gancho: 'Word e Google Docs fazem quase a mesma coisa, mas em situações diferentes um é muito melhor que o outro. Saber escolher já te poupa dor de cabeça antes de começar a escrever.',
      conceito: {
        titulo: 'Dois editores de texto, duas filosofias',
        texto: 'O Word é um programa instalado no computador (do pacote Microsoft Office), tradicional no mercado. O Google Docs roda no navegador, é gratuito e salva tudo na nuvem sozinho. Ambos criam documentos profissionais; a escolha depende de onde você trabalha, se precisa de internet e se vai colaborar com outras pessoas.',
      },
      estrutura: {
        titulo: 'Quando cada um brilha',
        partes: [
          { simbolo: 'Word', desc: 'Padrão em muitas empresas; funciona sem internet; recursos avançados de formatação.' },
          { simbolo: 'Docs', desc: 'Gratuito; salva sozinho na nuvem; ótimo pra escrever junto com outras pessoas ao vivo.' },
          { simbolo: '.docx', desc: 'O formato é compatível: dá pra abrir um arquivo do Word no Docs e vice-versa.' },
          { simbolo: 'PDF', desc: 'Os dois exportam pra PDF, o formato que ninguém consegue bagunçar.' },
        ],
      },
      exemplo: {
        titulo: 'Escolhendo na prática',
        celulas: [
          { ref: 'Empresa usa Office', valor: 'Use Word' },
          { ref: 'Não tem Office', valor: 'Use Google Docs (grátis)' },
          { ref: 'Escrever a 2', valor: 'Google Docs (ao vivo)' },
          { ref: 'Sem internet', valor: 'Word' },
        ],
        formula: 'Sozinho e offline → Word · Grátis e colaborando → Docs',
        resultado: 'A escolha certa antes de digitar a primeira letra.',
        comentario: 'Se você não tem o Office instalado, o Google Docs faz tudo que você precisa de graça — só precisa de uma conta Google.',
      },
      vocabulario: [
        { palavra: 'Editor de texto', def: 'Programa pra escrever documentos (Word, Google Docs, LibreOffice Writer).' },
        { palavra: 'Nuvem', def: 'Armazenamento na internet — o Docs salva ali automaticamente.' },
        { palavra: '.docx', def: 'O formato de arquivo de documento, compatível entre Word e Docs.' },
      ],
      chave: [
        'Word: instalado, offline, padrão de empresas',
        'Google Docs: grátis, na nuvem, ótimo pra colaborar',
        'Os dois exportam PDF e abrem .docx',
      ],
      porque: 'Saber os dois te deixa pronto pra qualquer ambiente de trabalho: uns usam Office, outros usam Google. Quem domina ambos nunca fica travado por causa da ferramenta.',
    },
    pratica: {
      instrucao: 'Vamos abrir os dois pra você conhecer. Tenha o computador com internet.',
      passos: [
        'Procure "Word" no menu Iniciar. Se abrir, ótimo — você tem o Office.',
        'Agora abra o navegador e vá em docs.google.com',
        'Faça login com sua conta Google (ou crie uma, é grátis)',
        'Clique em "Documento em branco" pra criar um novo',
        'Repare que, no Docs, em cima aparece "Todas as alterações salvas no Drive"',
        'Digite uma frase nos dois (se tiver os dois) e veja como são parecidos',
        'Decida qual você vai usar como principal por enquanto',
      ],
    },
    desafio: {
      cenario: 'Crie um documento em branco no editor da sua escolha e escreva 3 linhas se apresentando (nome, o que faz, o que quer aprender).',
      requisitos: [
        'Escolhi entre Word e Google Docs com um motivo',
        'Criei um documento novo em branco',
        'Escrevi pelo menos 3 linhas',
        'O documento foi salvo (no Docs salva sozinho; no Word usei Ctrl+S)',
        'Sei reabrir esse documento depois',
      ],
      dica: 'Se for usar o Google Docs, instale o atalho dele: no Chrome, com o Docs aberto, menu → "Instalar". Vira um ícone como se fosse um programa.',
    },
    validacao: [
      'Entendi a diferença entre Word e Google Docs',
      'Sei quando cada um é melhor',
      'Criei um documento em branco',
      'Escrevi e salvei meu primeiro texto',
      'Sei que os dois exportam PDF e abrem .docx',
    ],
  },

  'pc-word-2': {
    trilhaId: 'pc-word', numero: 2, titulo: 'Seu primeiro documento salvo',
    tempoTotal: 8, xp: 30, vertente: 'computador',
    aula: {
      gancho: 'O maior medo de quem começa: "e se eu perder tudo que escrevi?". Hoje esse medo acaba — você vai aprender a salvar, fechar e reabrir um documento com total segurança.',
      conceito: {
        titulo: 'Salvar é guardar; abrir é trazer de volta',
        texto: 'Enquanto você digita, o texto está "vivo" na tela. Salvar é gravar esse texto num arquivo no computador (ou na nuvem), pra ele não sumir quando você fechar. Depois, abrir esse arquivo traz tudo de volta exatamente como estava. No Word você salva com Ctrl+S; no Google Docs isso é automático.',
      },
      estrutura: {
        titulo: 'O ciclo de um documento',
        partes: [
          { simbolo: 'Ctrl+S', desc: 'Salvar (Word): na primeira vez, ele pergunta o nome e a pasta. Depois, salva por cima.' },
          { simbolo: 'nome', desc: 'Dê um nome claro (ex: carta-banco-maio) e escolha a pasta certa.' },
          { simbolo: 'auto', desc: 'No Google Docs, ele salva sozinho a cada poucos segundos — sem você fazer nada.' },
          { simbolo: 'abrir', desc: 'Reabrir: ache o arquivo na pasta (ou em "Recentes") e dê 2 cliques.' },
        ],
      },
      exemplo: {
        titulo: 'Salvar a primeira vez x as próximas',
        celulas: [
          { ref: '1ª vez', valor: 'Ctrl+S → escolhe nome e pasta' },
          { ref: 'Depois', valor: 'Ctrl+S → salva por cima, sem perguntar' },
          { ref: 'Docs', valor: 'Salva sozinho (não precisa Ctrl+S)' },
        ],
        formula: 'Salve cedo, salve sempre (Ctrl+S a cada parágrafo)',
        resultado: 'Travou? Faltou luz? Seu texto está seguro.',
        comentario: 'Crie o hábito de apertar Ctrl+S de tempos em tempos enquanto escreve. É 1 segundo que evita perder horas de trabalho.',
      },
      vocabulario: [
        { palavra: 'Salvar', def: 'Gravar o documento num arquivo pra não perder ao fechar.' },
        { palavra: 'Salvar como', def: 'Salvar uma nova cópia, com outro nome ou em outra pasta.' },
        { palavra: 'Salvamento automático', def: 'Recurso do Google Docs (e do Word na nuvem) que salva sozinho.' },
      ],
      chave: [
        'Word: Ctrl+S salva; na 1ª vez escolha nome e pasta',
        'Google Docs salva sozinho na nuvem',
        'Salve sempre — é o seguro contra travamentos',
      ],
      porque: 'Perder um documento por não ter salvado é das frustrações mais comuns — e mais evitáveis. Dominar salvar/abrir te dá confiança pra escrever sem medo, no trabalho e na vida.',
    },
    pratica: {
      instrucao: 'Abra seu editor. Vamos salvar, fechar e reabrir com segurança.',
      passos: [
        'Crie um documento novo e escreva: Minha primeira carta.',
        'No Word: aperte Ctrl+S. Escolha a pasta Documentos e o nome carta-teste',
        'Confirme. Repare que o nome do arquivo aparece no topo da janela.',
        'Escreva mais uma linha e aperte Ctrl+S de novo (salva por cima, sem perguntar)',
        'Feche o documento pelo X',
        'Abra o Explorador de Arquivos, vá na pasta Documentos',
        'Dê 2 cliques no carta-teste pra reabrir',
        'Confirme que tudo que você escreveu está lá',
      ],
    },
    desafio: {
      cenario: 'Crie um documento, salve com nome descritivo na pasta certa, feche, e reabra — provando que você domina o ciclo completo.',
      requisitos: [
        'Criei e escrevi um documento',
        'Salvei com um nome claro (não "Documento1")',
        'Salvei na pasta correta (Documentos ou uma subpasta)',
        'Fechei e reabri o documento com sucesso',
        'O conteúdo estava intacto ao reabrir',
      ],
      dica: 'Combine com a trilha de Fundamentos: salve o documento direto na subpasta do assunto (ex: Trabalho ou Pessoal). Assim ele já nasce organizado.',
    },
    validacao: [
      'Sei salvar com Ctrl+S no Word',
      'Dei um nome claro e escolhi a pasta',
      'Sei que o Google Docs salva sozinho',
      'Fechei e reabri um documento',
      'Tenho o hábito de salvar enquanto escrevo',
    ],
  },

  'pc-word-3': {
    trilhaId: 'pc-word', numero: 3, titulo: 'Fonte, tamanho, negrito e alinhamento',
    tempoTotal: 9, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Um texto todo igual cansa e não destaca nada. Com 4 ferramentas simples — fonte, tamanho, negrito e alinhamento — você transforma um amontoado de letras num documento que se lê com prazer.',
      conceito: {
        titulo: 'Formatar é dar voz ao texto',
        texto: 'Formatar é mudar a aparência do texto pra guiar o olho de quem lê. O negrito chama atenção pro importante; o tamanho cria hierarquia (título grande, corpo menor); o alinhamento organiza; a fonte dá o tom. Tudo isso fica na barra de ferramentas no topo, sempre à mão.',
      },
      estrutura: {
        titulo: 'As 4 ferramentas essenciais',
        partes: [
          { simbolo: 'N', desc: 'Negrito (Ctrl+B): deixa o texto forte. Use pra destacar o importante, com moderação.' },
          { simbolo: 'Aa', desc: 'Fonte e tamanho: escolha uma fonte legível (Arial, Calibri) e tamanho 11–12 pro corpo.' },
          { simbolo: '≡', desc: 'Alinhamento: esquerda (padrão), centro (títulos), justificado (texto formal).' },
          { simbolo: 'sel', desc: 'Regra de ouro: SELECIONE o texto antes de formatar (ele fica azul).' },
        ],
      },
      exemplo: {
        titulo: 'O mesmo texto, formatado',
        celulas: [
          { ref: 'Título', valor: 'Tamanho 16, negrito, centralizado' },
          { ref: 'Corpo', valor: 'Tamanho 12, normal, alinhado à esquerda' },
          { ref: 'Destaque', valor: 'Palavra-chave em negrito' },
        ],
        formula: 'Selecionar → escolher a formatação → aplicar',
        resultado: 'Documento com hierarquia clara e fácil de ler.',
        comentario: 'Menos é mais: use no máximo 2 fontes e o negrito só no essencial. Excesso de formatação polui e cansa.',
      },
      vocabulario: [
        { palavra: 'Fonte', def: 'O estilo das letras (Arial, Times, Calibri). Pra documentos, prefira as simples e legíveis.' },
        { palavra: 'Negrito', def: 'Texto mais grosso e forte, pra destacar (Ctrl+B).' },
        { palavra: 'Alinhamento', def: 'Como o texto se posiciona: à esquerda, centro, direita ou justificado.' },
      ],
      chave: [
        'Sempre selecione o texto antes de formatar',
        'Negrito (Ctrl+B) destaca o importante, com moderação',
        'Tamanho cria hierarquia: título grande, corpo 11–12',
      ],
      porque: 'Documentos bem formatados passam profissionalismo e são lidos com mais atenção. No trabalho, um relatório organizado vale mais que um texto bom mal apresentado.',
    },
    pratica: {
      instrucao: 'Abra um documento novo. Vamos formatar um pequeno texto.',
      passos: [
        'Na primeira linha, escreva um título: Relatório de Atividades',
        'Embaixo, escreva 2 ou 3 linhas de texto qualquer',
        'Selecione o título (arraste o mouse por cima)',
        'Aumente o tamanho pra 16 e aperte Ctrl+B pra deixar em negrito',
        'Com o título ainda selecionado, clique em "centralizar" (≡ do meio)',
        'Selecione o corpo e deixe tamanho 12, alinhado à esquerda',
        'Selecione uma palavra importante no corpo e aplique negrito',
      ],
    },
    desafio: {
      cenario: 'Crie um "comunicado" de 1 parágrafo com título destacado, corpo legível e uma informação-chave em negrito.',
      requisitos: [
        'Tem um título maior, em negrito e centralizado',
        'O corpo está em tamanho legível (11 ou 12)',
        'Pelo menos uma informação importante está em negrito',
        'Usei no máximo 2 fontes diferentes',
        'O documento ficou limpo, sem excesso de formatação',
      ],
      dica: 'Antes de formatar muito, pergunte: "isso ajuda a ler ou só enfeita?". Formatação serve à leitura, não à decoração.',
    },
    validacao: [
      'Sei selecionar texto antes de formatar',
      'Apliquei negrito com Ctrl+B',
      'Mudei tamanho e fonte do texto',
      'Usei alinhamento (esquerda e centro)',
      'Criei hierarquia entre título e corpo',
    ],
  },

  'pc-word-4': {
    trilhaId: 'pc-word', numero: 4, titulo: 'Títulos, parágrafos e espaçamento',
    tempoTotal: 9, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Já viu um texto "grudado", sem respiro, difícil de ler? O segredo de um documento agradável não é só o que está escrito — é o espaço entre as coisas. Hoje você aprende a deixar o texto respirar.',
      conceito: {
        titulo: 'Espaço em branco é parte do design',
        texto: 'Parágrafos bem separados, espaçamento entre linhas e títulos que organizam as seções fazem o leitor não se cansar. Um bom documento alterna texto e espaço de forma equilibrada. Isso se controla com a tecla Enter (novo parágrafo) e com o espaçamento entre linhas, na barra de ferramentas.',
      },
      estrutura: {
        titulo: 'Organizando o texto',
        partes: [
          { simbolo: 'Enter', desc: 'Cria um novo parágrafo. Um Enter por parágrafo — não aperte vários pra criar espaço.' },
          { simbolo: '↕', desc: 'Espaçamento entre linhas: 1,15 ou 1,5 deixa o texto mais arejado que o 1,0 colado.' },
          { simbolo: 'H', desc: 'Estilos de Título (Título 1, Título 2): organizam seções e criam um sumário automático.' },
          { simbolo: '¶', desc: 'Espaço antes/depois do parágrafo: separa blocos sem precisar de linhas vazias.' },
        ],
      },
      exemplo: {
        titulo: 'Texto grudado x texto arejado',
        celulas: [
          { ref: 'Ruim', valor: 'Tudo colado, espaçamento 1,0, sem títulos' },
          { ref: 'Bom', valor: 'Parágrafos separados, espaçamento 1,5' },
          { ref: 'Bom', valor: 'Seções com Título 1 e Título 2' },
        ],
        formula: 'Parágrafos + espaçamento + títulos = texto respirável',
        resultado: 'O leitor termina sem cansar — e acha o que quer.',
        comentario: 'Use os estilos "Título 1/2" em vez de só aumentar a fonte: assim o Word monta um sumário sozinho depois.',
      },
      vocabulario: [
        { palavra: 'Parágrafo', def: 'Um bloco de texto. Cada Enter inicia um novo parágrafo.' },
        { palavra: 'Espaçamento entre linhas', def: 'A distância vertical entre as linhas de um parágrafo (1,0 / 1,15 / 1,5).' },
        { palavra: 'Estilo de Título', def: 'Formatação pronta (Título 1, 2...) que organiza seções e gera sumário.' },
      ],
      chave: [
        'Um Enter por parágrafo (não vários pra "dar espaço")',
        'Espaçamento 1,15 ou 1,5 deixa o texto arejado',
        'Use estilos de Título pra organizar seções',
      ],
      porque: 'Documentos longos (relatórios, contratos, propostas) só funcionam quando são bem espaçados e organizados em seções. Essa é a diferença entre um documento que as pessoas leem e um que elas abandonam.',
    },
    pratica: {
      instrucao: 'Abra um documento com algum texto (ou escreva uns 3 parágrafos). Vamos arejar.',
      passos: [
        'Escreva um título e aplique o estilo "Título 1" (na barra de estilos)',
        'Escreva uma seção e aplique "Título 2" nela',
        'Selecione todo o corpo do texto',
        'Mude o espaçamento entre linhas pra 1,5 (botão de espaçamento ↕)',
        'Garanta que há um parágrafo por ideia (um Enter entre eles)',
        'Adicione "espaço depois do parágrafo" pra separar os blocos',
        'Veja como o texto ficou mais fácil de ler',
      ],
    },
    desafio: {
      cenario: 'Pegue um texto corrido (escreva ou cole uns 4 parágrafos) e organize-o com título, 2 seções (Título 2) e espaçamento confortável.',
      requisitos: [
        'Apliquei estilo de Título 1 no título principal',
        'Criei pelo menos 2 seções com Título 2',
        'O espaçamento entre linhas está em 1,15 ou 1,5',
        'Cada ideia está em seu próprio parágrafo',
        'O documento ficou visivelmente mais fácil de ler',
      ],
      dica: 'Evite criar espaço apertando Enter várias vezes — isso bagunça quando você edita depois. Use "espaço antes/depois do parágrafo", que é mais profissional.',
    },
    validacao: [
      'Sei separar ideias em parágrafos',
      'Ajustei o espaçamento entre linhas',
      'Usei estilos de Título pra organizar',
      'Evitei linhas vazias pra criar espaço',
      'Meu texto ficou mais arejado e legível',
    ],
  },

  'pc-word-5': {
    trilhaId: 'pc-word', numero: 5, titulo: 'Listas com marcadores e números',
    tempoTotal: 7, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Quando você precisa enumerar itens ou passos, jogar tudo num parágrafo só confunde. Listas resolvem na hora — e deixam qualquer documento mais claro e profissional.',
      conceito: {
        titulo: 'Listas organizam o que é sequência ou conjunto',
        texto: 'Existem dois tipos: a lista com marcadores (bolinhas), pra itens sem ordem (uma lista de compras, requisitos); e a lista numerada (1, 2, 3), pra passos em sequência (uma receita, um procedimento). O editor cria e alinha tudo automaticamente — você só digita e aperta Enter.',
      },
      estrutura: {
        titulo: 'Criando listas',
        partes: [
          { simbolo: '•', desc: 'Marcadores: clique no botão de bolinhas. Pra itens sem ordem específica.' },
          { simbolo: '1.', desc: 'Numerada: clique no botão 1,2,3. Pra passos em sequência.' },
          { simbolo: 'Enter', desc: 'Cada Enter cria um novo item. O número/bolinha aparece sozinho.' },
          { simbolo: 'Tab', desc: 'A tecla Tab cria um subitem (lista dentro da lista).' },
        ],
      },
      exemplo: {
        titulo: 'Quando usar cada uma',
        celulas: [
          { ref: 'Marcadores', valor: 'Lista de compras, materiais, requisitos' },
          { ref: 'Numerada', valor: 'Passos de uma receita, etapas de um processo' },
          { ref: 'Subitem', valor: 'Tab cria um nível dentro do item' },
        ],
        formula: 'Sem ordem → bolinha · Em sequência → número',
        resultado: 'Itens claros, alinhados e fáceis de seguir.',
        comentario: 'Pra terminar a lista, aperte Enter duas vezes (ou clique de novo no botão da lista).',
      },
      vocabulario: [
        { palavra: 'Marcador', def: 'A bolinha (ou outro símbolo) que inicia cada item de uma lista não ordenada.' },
        { palavra: 'Lista numerada', def: 'Lista com 1, 2, 3... pra itens em ordem ou passos.' },
        { palavra: 'Subitem', def: 'Um item dentro de outro item, criado com a tecla Tab.' },
      ],
      chave: [
        'Marcadores pra conjuntos; números pra sequências',
        'Cada Enter vira um novo item, automático',
        'Tab cria subitens (lista dentro da lista)',
      ],
      porque: 'Listas aparecem em quase todo documento de trabalho: tarefas, requisitos, etapas, agendas. Quem usa listas comunica com clareza — e clareza é valorizada em qualquer função.',
    },
    pratica: {
      instrucao: 'Abra um documento novo. Vamos criar as duas listas.',
      passos: [
        'Escreva o título: Lista de compras',
        'Clique no botão de marcadores (bolinhas) na barra de ferramentas',
        'Digite "Arroz" e aperte Enter; "Feijão", Enter; "Óleo", Enter',
        'Aperte Enter de novo (vazio) pra encerrar a lista',
        'Escreva outro título: Como fazer café',
        'Clique no botão de lista numerada (1,2,3)',
        'Digite os passos, um por linha, apertando Enter entre eles',
        'Aperte Tab antes de digitar um item pra criar um subitem',
      ],
    },
    desafio: {
      cenario: 'Crie um documento com uma lista de marcadores (ex: itens de um projeto) e uma lista numerada (ex: passos pra realizá-lo).',
      requisitos: [
        'Criei uma lista com marcadores',
        'Criei uma lista numerada',
        'Cada item está em sua própria linha',
        'Usei a tecla Tab pra criar ao menos um subitem',
        'Encerrei as listas corretamente',
      ],
      dica: 'Se a numeração "pular" ou começar errado ao colar texto, clique com o botão direito sobre a lista — há opções pra "reiniciar" ou "continuar" a numeração.',
    },
    validacao: [
      'Sei criar lista com marcadores',
      'Sei criar lista numerada',
      'Sei quando usar cada tipo',
      'Criei subitens com Tab',
      'Sei encerrar uma lista',
    ],
  },

  'pc-word-6': {
    trilhaId: 'pc-word', numero: 6, titulo: 'Inserir imagem, tabela e linha',
    tempoTotal: 10, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Texto puro nem sempre basta. Uma imagem ilustra, uma tabela organiza dados, uma linha separa seções. Inserir esses elementos transforma um documento simples num material completo.',
      conceito: {
        titulo: 'O menu Inserir é seu baú de recursos',
        texto: 'Tudo que não é texto digitado entra pelo menu/aba "Inserir": imagens, tabelas, linhas, símbolos, quebras de página. Você escolhe o que quer, ele aparece no documento, e depois você ajusta o tamanho e a posição. É mais simples do que parece e abre um leque enorme de possibilidades.',
      },
      estrutura: {
        titulo: 'Os 3 elementos mais úteis',
        partes: [
          { simbolo: '🖼️', desc: 'Imagem: Inserir → Imagem → escolha do computador. Clique nela pra redimensionar pelos cantos.' },
          { simbolo: '⊞', desc: 'Tabela: Inserir → Tabela → escolha linhas e colunas. Ótima pra organizar dados.' },
          { simbolo: '—', desc: 'Linha/borda: separa seções visualmente. Em alguns editores, digite três hifens e Enter.' },
          { simbolo: '↹', desc: 'Dentro da tabela, a tecla Tab pula pra próxima célula.' },
        ],
      },
      exemplo: {
        titulo: 'Uma tabela simples',
        celulas: [
          { ref: 'Produto', valor: 'Quantidade · Preço' },
          { ref: 'Arroz', valor: '2 · R$ 12,00' },
          { ref: 'Feijão', valor: '1 · R$ 9,00' },
        ],
        formula: 'Inserir → Tabela → definir linhas × colunas',
        resultado: 'Dados alinhados, fáceis de comparar.',
        comentario: 'Pra adicionar uma linha na tabela, clique na última célula e aperte Tab — uma nova linha aparece sozinha.',
      },
      vocabulario: [
        { palavra: 'Inserir', def: 'O menu/aba pra adicionar elementos que não são texto: imagem, tabela, linha.' },
        { palavra: 'Tabela', def: 'Uma grade de linhas e colunas pra organizar dados (como uma mini planilha).' },
        { palavra: 'Redimensionar', def: 'Mudar o tamanho de uma imagem arrastando pelos cantos (mantém a proporção).' },
      ],
      chave: [
        'O menu Inserir traz imagem, tabela e linha',
        'Redimensione imagens pelos CANTOS pra não distorcer',
        'Na tabela, Tab pula célula e cria nova linha no fim',
      ],
      porque: 'Relatórios, propostas e comunicados frequentemente pedem uma tabela de dados ou uma imagem (logo, foto, gráfico). Saber inserir e ajustar esses elementos é essencial pra documentos profissionais completos.',
    },
    pratica: {
      instrucao: 'Abra um documento novo. Vamos inserir os 3 elementos.',
      passos: [
        'Vá no menu/aba "Inserir"',
        'Clique em "Imagem" e escolha uma foto do seu computador',
        'Clique na imagem e arraste um dos CANTOS pra deixá-la menor',
        'Agora clique em "Tabela" e crie uma de 3 colunas por 3 linhas',
        'Preencha a tabela: cabeçalho na primeira linha, dados embaixo',
        'Use Tab pra pular entre as células',
        'Abaixo da tabela, crie uma linha separadora (digite --- e Enter, ou Inserir → Linha)',
      ],
    },
    desafio: {
      cenario: 'Monte um "mini relatório" com um título, uma imagem (logo ou foto), uma tabela com 3+ linhas de dados e uma linha separando seções.',
      requisitos: [
        'Inseri uma imagem e ajustei o tamanho pelos cantos',
        'Criei uma tabela com cabeçalho e pelo menos 3 linhas',
        'Preenchi a tabela com dados',
        'Inseri uma linha separadora entre seções',
        'O documento ficou organizado e completo',
      ],
      dica: 'Imagens muito grandes deixam o arquivo pesado e difícil de enviar por e-mail. Redimensione pra um tamanho razoável antes de salvar.',
    },
    validacao: [
      'Sei inserir uma imagem',
      'Sei redimensionar sem distorcer (pelos cantos)',
      'Sei criar e preencher uma tabela',
      'Sei navegar na tabela com Tab',
      'Sei inserir uma linha separadora',
    ],
  },

  'pc-word-7': {
    trilhaId: 'pc-word', numero: 7, titulo: 'Margens, cabeçalho e rodapé',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Aquele toque final que faz um documento parecer "oficial" está nas margens equilibradas e no cabeçalho/rodapé com nome, data ou número de página. Detalhes que separam o amador do profissional.',
      conceito: {
        titulo: 'A moldura do documento',
        texto: 'As margens são o espaço em branco nas bordas da página — nem apertado demais, nem largo demais. O cabeçalho é a faixa no topo de todas as páginas; o rodapé, a faixa embaixo. Neles você coloca informações que se repetem: nome da empresa, título, data, número da página. O editor cuida de repetir em todas as folhas.',
      },
      estrutura: {
        titulo: 'Configurando a moldura',
        partes: [
          { simbolo: '⊡', desc: 'Margens: Layout → Margens → "Normal" funciona pra quase tudo. Evite margens muito estreitas.' },
          { simbolo: '⌐', desc: 'Cabeçalho: Inserir → Cabeçalho. Digite o que se repete no topo (nome, título).' },
          { simbolo: '⌙', desc: 'Rodapé: Inserir → Rodapé. Bom pra data e contato.' },
          { simbolo: '#', desc: 'Número de página: Inserir → Número de Página. Numera tudo sozinho.' },
        ],
      },
      exemplo: {
        titulo: 'O que vai em cada lugar',
        celulas: [
          { ref: 'Cabeçalho', valor: 'Nome/empresa · título do documento' },
          { ref: 'Corpo', valor: 'O conteúdo principal' },
          { ref: 'Rodapé', valor: 'Data · contato · número da página' },
        ],
        formula: 'Repetição automática em todas as páginas',
        resultado: 'Documento com cara oficial, do início ao fim.',
        comentario: 'O número de página é quase obrigatório em documentos com mais de 2 folhas — facilita a referência ("veja a página 3").',
      },
      vocabulario: [
        { palavra: 'Margem', def: 'O espaço em branco entre o texto e a borda da página.' },
        { palavra: 'Cabeçalho', def: 'A área no topo que se repete em todas as páginas.' },
        { palavra: 'Rodapé', def: 'A área embaixo que se repete em todas as páginas (bom pra data e nº de página).' },
      ],
      chave: [
        'Margens "Normal" servem pra quase tudo',
        'Cabeçalho e rodapé se repetem em todas as páginas',
        'Numere as páginas em documentos longos',
      ],
      porque: 'Ofícios, relatórios, contratos e propostas seguem padrões de margem e identificação. Dominar isso faz seus documentos parecerem oficiais e bem cuidados — o que conta muito numa candidatura ou no trabalho.',
    },
    pratica: {
      instrucao: 'Abra um documento com algum texto. Vamos dar o acabamento.',
      passos: [
        'Vá em Layout → Margens e confirme que está em "Normal"',
        'Clique em Inserir → Cabeçalho',
        'No cabeçalho, digite seu nome ou o título do documento',
        'Clique em Inserir → Rodapé',
        'No rodapé, digite a data',
        'Clique em Inserir → Número de Página e escolha o canto inferior direito',
        'Clique fora do cabeçalho/rodapé pra voltar ao texto',
        'Role a página (ou adicione texto) pra ver que se repete',
      ],
    },
    desafio: {
      cenario: 'Pegue um documento de pelo menos 2 páginas e dê acabamento oficial: margens corretas, cabeçalho com título, rodapé com data e numeração de páginas.',
      requisitos: [
        'As margens estão equilibradas (ex: Normal)',
        'O cabeçalho tem o título ou nome, repetido nas páginas',
        'O rodapé tem a data',
        'As páginas estão numeradas',
        'O documento tem aparência oficial e consistente',
      ],
      dica: 'Pra um documento ter 2 páginas e testar a repetição, é só escrever bastante ou inserir uma "quebra de página" (Inserir → Quebra de Página) pra forçar uma folha nova.',
    },
    validacao: [
      'Sei ajustar as margens',
      'Sei inserir e editar o cabeçalho',
      'Sei inserir e editar o rodapé',
      'Sei numerar as páginas',
      'Entendi que cabeçalho/rodapé se repetem',
    ],
  },

  'pc-word-8': {
    trilhaId: 'pc-word', numero: 8, titulo: 'Revisão, comentários e correções',
    tempoTotal: 10, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'Mandar um documento com erro de português pega mal — ainda mais numa candidatura. E quando alguém precisa revisar o seu texto? Há ferramentas que corrigem e permitem sugestões sem bagunçar o original.',
      conceito: {
        titulo: 'Três aliados da qualidade do texto',
        texto: 'O corretor ortográfico sublinha erros pra você ajeitar. Os comentários permitem que alguém deixe observações ao lado do texto, sem alterá-lo. O controle de alterações registra cada mudança que outra pessoa faz, pra você aceitar ou recusar. Juntos, garantem que o documento final saia impecável.',
      },
      estrutura: {
        titulo: 'Os recursos de revisão',
        partes: [
          { simbolo: '✓', desc: 'Corretor: o sublinhado vermelho marca erro de ortografia; clique com o botão direito pra corrigir.' },
          { simbolo: '💬', desc: 'Comentário: selecione um trecho → Inserir/Revisão → Comentário. Aparece uma nota na lateral.' },
          { simbolo: '✎', desc: 'Controle de alterações: ativa o registro de tudo que muda; depois você Aceita ou Recusa.' },
          { simbolo: 'modo', desc: 'No Google Docs, o modo "Sugestão" faz o mesmo: edições viram sugestões coloridas.' },
        ],
      },
      exemplo: {
        titulo: 'Revisão colaborativa',
        celulas: [
          { ref: 'Corretor', valor: 'Sublinhado vermelho = ortografia' },
          { ref: 'Comentário', valor: '"Rever este parágrafo" na lateral' },
          { ref: 'Alteração', valor: 'Texto novo em cor, pra aceitar/recusar' },
        ],
        formula: 'Corrigir + comentar + controlar mudanças = texto impecável',
        resultado: 'Documento final revisado, sem perder o original.',
        comentario: 'Mesmo confiando no corretor, releia: ele não pega tudo (ex: "concerto" x "conserto", que dependem do sentido).',
      },
      vocabulario: [
        { palavra: 'Corretor ortográfico', def: 'Recurso que aponta erros de escrita com um sublinhado.' },
        { palavra: 'Comentário', def: 'Uma observação na lateral, ligada a um trecho, que não altera o texto.' },
        { palavra: 'Controle de alterações', def: 'Registro de cada mudança feita, pra você aceitar ou recusar depois.' },
      ],
      chave: [
        'O sublinhado vermelho aponta erros de ortografia',
        'Comentários observam sem alterar o texto',
        'Controle de alterações registra mudanças pra aceitar/recusar',
      ],
      porque: 'Revisar bem evita o constrangimento de erros em documentos importantes. E saber trabalhar com comentários e alterações é essencial em qualquer trabalho colaborativo — onde textos passam por várias mãos.',
    },
    pratica: {
      instrucao: 'Abra um documento com algum texto (de propósito, deixe um errinho de digitação).',
      passos: [
        'Procure uma palavra com sublinhado vermelho (erro)',
        'Clique nela com o botão direito e escolha a correção sugerida',
        'Selecione um parágrafo qualquer',
        'Vá em Revisão → Novo Comentário e escreva: "rever isto"',
        'Veja o comentário aparecer na lateral',
        'Ative "Controle de Alterações" (aba Revisão)',
        'Edite uma frase e veja a mudança aparecer destacada',
        'Use "Aceitar" pra confirmar a alteração',
      ],
    },
    desafio: {
      cenario: 'Revise um texto seu: corrija os erros que o corretor apontar, adicione um comentário de melhoria e teste o controle de alterações fazendo e aceitando uma mudança.',
      requisitos: [
        'Corrigi pelo menos um erro apontado pelo corretor',
        'Reli o texto procurando erros que o corretor não pega',
        'Adicionei um comentário a um trecho',
        'Ativei o controle de alterações',
        'Fiz uma alteração e a aceitei',
      ],
      dica: 'Antes de enviar qualquer documento importante (currículo, e-mail formal), faça uma leitura final em voz alta. Os erros que escapam ao corretor saltam quando você lê falando.',
    },
    validacao: [
      'Sei usar o corretor ortográfico',
      'Releio além do corretor automático',
      'Sei inserir um comentário',
      'Sei ativar o controle de alterações',
      'Sei aceitar ou recusar uma alteração',
    ],
  },

  'pc-word-9': {
    trilhaId: 'pc-word', numero: 9, titulo: 'Salvar como PDF e compartilhar',
    tempoTotal: 7, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Você capricha no documento, envia... e a pessoa abre tudo desformatado, com as letras fora do lugar. A solução tem nome: PDF. É o formato que congela seu documento exatamente como você fez.',
      conceito: {
        titulo: 'PDF: o documento que ninguém bagunça',
        texto: 'Quando você envia um arquivo .docx, ele pode mudar de aparência no computador do outro (se faltar a fonte, ou for outra versão do programa). O PDF resolve isso: ele "fotografa" o documento, mantendo tudo no lugar em qualquer aparelho. Por isso currículos, contratos e comprovantes são quase sempre enviados em PDF.',
      },
      estrutura: {
        titulo: 'Gerando e enviando o PDF',
        partes: [
          { simbolo: 'PDF', desc: 'Word: Arquivo → Salvar como → escolha o tipo "PDF". Docs: Arquivo → Fazer download → PDF.' },
          { simbolo: '📎', desc: 'Anexar: no e-mail, clique no clipe e escolha o PDF gerado.' },
          { simbolo: '🔗', desc: 'No Docs, dá pra compartilhar por link, com permissão de "ver" pra não deixarem editar.' },
          { simbolo: '🔒', desc: 'PDF não impede edição avançada, mas evita mudanças acidentais de formatação.' },
        ],
      },
      exemplo: {
        titulo: '.docx x PDF na hora de enviar',
        celulas: [
          { ref: '.docx', valor: 'Pode desformatar no outro PC' },
          { ref: '.docx', valor: 'Bom quando o outro vai EDITAR' },
          { ref: 'PDF', valor: 'Mantém tudo no lugar, sempre' },
          { ref: 'PDF', valor: 'Ideal pra enviar versão FINAL' },
        ],
        formula: 'Vai editar? .docx. Versão final pra ver? PDF.',
        resultado: 'O documento chega exatamente como você fez.',
        comentario: 'Guarde sempre o .docx original (editável) E gere o PDF na hora de enviar. Assim você pode alterar depois.',
      },
      vocabulario: [
        { palavra: 'PDF', def: 'Formato que preserva a aparência do documento em qualquer aparelho.' },
        { palavra: 'Exportar', def: 'Gerar uma versão do documento em outro formato (ex: PDF).' },
        { palavra: 'Anexar', def: 'Adicionar um arquivo a um e-mail ou mensagem.' },
      ],
      chave: [
        'PDF congela o documento — não desformata',
        'Envie versões finais em PDF; mantenha o .docx pra editar',
        'No Docs, compartilhe por link com permissão "ver"',
      ],
      porque: 'Currículo, proposta, comprovante — quase tudo de importante se envia em PDF. Dominar a exportação é o passo final que garante que seu trabalho chegue impecável a quem importa (incluindo um recrutador).',
    },
    pratica: {
      instrucao: 'Abra um documento pronto (ou um que você fez nas missões anteriores).',
      passos: [
        'No Word: clique em Arquivo → Salvar como',
        'No tipo de arquivo, escolha "PDF" e confirme (ou Exportar → Criar PDF)',
        'No Google Docs: Arquivo → Fazer download → Documento PDF',
        'Encontre o PDF gerado na pasta Downloads (ou onde salvou)',
        'Abra o PDF e confira que está idêntico ao documento',
        'Abra seu e-mail, comece uma mensagem nova',
        'Clique no clipe (anexar) e adicione o PDF',
      ],
    },
    desafio: {
      cenario: 'Transforme um documento seu em PDF e envie-o por e-mail (pode ser pra você mesmo, como teste).',
      requisitos: [
        'Gerei um PDF a partir do meu documento',
        'Abri o PDF e confirmei que a formatação está intacta',
        'Mantive o arquivo .docx original também',
        'Anexei o PDF a um e-mail',
        'Enviei (ou enviei pra mim mesmo como teste)',
      ],
      dica: 'Dê ao PDF um nome profissional antes de enviar. "curriculo-joao-silva.pdf" passa muito mais credibilidade que "Documento1.pdf" numa candidatura.',
    },
    validacao: [
      'Entendi por que o PDF não desformata',
      'Sei gerar PDF no Word e/ou no Docs',
      'Guardo o original editável e gero o PDF pra enviar',
      'Sei anexar o PDF a um e-mail',
      'Dou nomes profissionais aos arquivos',
    ],
  },

  'pc-word-10': {
    trilhaId: 'pc-word', numero: 10, titulo: 'Projeto: um ofício formal completo',
    tempoTotal: 25, xp: 120, vertente: 'computador',
    aula: {
      gancho: 'Chegou a hora de juntar tudo: você vai redigir um documento formal de verdade — um ofício ou carta — usando formatação, estrutura, cabeçalho e exportação. Um material que vai pro seu portfólio.',
      conceito: {
        titulo: 'A estrutura de um documento formal',
        texto: 'Documentos formais (ofício, carta, requerimento) seguem uma estrutura reconhecível: cabeçalho com remetente, data e local, destinatário, saudação, corpo (a mensagem em si), fecho e assinatura. Essa estrutura comunica seriedade e facilita a leitura. Dominá-la te prepara pra escrever qualquer documento oficial.',
      },
      estrutura: {
        titulo: 'As partes de um ofício',
        partes: [
          { simbolo: '1', desc: 'Cabeçalho: seu nome/empresa e contato no topo (cabeçalho do documento).' },
          { simbolo: '2', desc: 'Local e data + destinatário (a quem se dirige).' },
          { simbolo: '3', desc: 'Saudação ("Prezado(a)...") e corpo (a mensagem, clara e objetiva).' },
          { simbolo: '4', desc: 'Fecho ("Atenciosamente") + assinatura (seu nome). Exporte em PDF no fim.' },
        ],
      },
      exemplo: {
        titulo: 'Esqueleto do ofício',
        celulas: [
          { ref: 'Topo', valor: 'João Silva — joao@email.com' },
          { ref: 'Data', valor: 'São Paulo, 24 de maio de 2026' },
          { ref: 'Saudação', valor: 'Prezada Senhora Diretora,' },
          { ref: 'Fecho', valor: 'Atenciosamente, João Silva' },
        ],
        formula: 'Cabeçalho → data/destinatário → corpo → fecho/assinatura',
        resultado: 'Um documento formal pronto pra protocolar ou enviar.',
        comentario: 'Mantenha o corpo objetivo: diga o que você quer logo no primeiro parágrafo, depois detalhe.',
      },
      vocabulario: [
        { palavra: 'Ofício', def: 'Documento formal usado pra comunicação oficial entre pessoas e instituições.' },
        { palavra: 'Remetente / Destinatário', def: 'Quem envia / quem recebe o documento.' },
        { palavra: 'Fecho', def: 'A despedida formal ("Atenciosamente", "Respeitosamente") antes da assinatura.' },
      ],
      chave: [
        'Documentos formais têm estrutura: cabeçalho, data, corpo, fecho',
        'Diga o objetivo logo no início do corpo',
        'Exporte a versão final em PDF',
      ],
      porque: 'Saber redigir um documento formal é uma habilidade que serve pra requerimentos, solicitações, cartas de apresentação e tantas situações da vida adulta e do trabalho. É a prova de que você domina o Word de ponta a ponta.',
    },
    pratica: {
      instrucao: 'Reserve 25 minutos. Vamos redigir um ofício real (pode ser uma solicitação verdadeira sua). Use tudo das missões anteriores.',
      passos: [
        'Crie um documento e configure margens "Normal"',
        'Insira um cabeçalho com seu nome e contato',
        'No corpo, escreva local e data (ex: Sua cidade, 24 de maio de 2026)',
        'Escreva o destinatário e a saudação (Prezado(a)...)',
        'Escreva o corpo: 2 ou 3 parágrafos, com o pedido logo no primeiro',
        'Use espaçamento 1,5 e revise com o corretor',
        'Adicione o fecho (Atenciosamente) e seu nome como assinatura',
        'Salve o .docx e exporte uma cópia em PDF com nome profissional',
      ],
    },
    desafio: {
      cenario: 'Entregue um ofício formal completo, salvo em .docx e exportado em PDF, pronto pra ser enviado de verdade.',
      requisitos: [
        'Tem cabeçalho com remetente/contato',
        'Tem local, data, destinatário e saudação',
        'O corpo é claro e objetivo, com o pedido no início',
        'Tem fecho formal e assinatura',
        'Está bem formatado (espaçamento, sem erros de ortografia)',
        'Foi salvo em .docx E exportado em PDF com nome profissional',
      ],
      dica: 'Guarde este ofício como modelo. Da próxima vez que precisar de um documento formal, é só duplicar o arquivo, trocar o conteúdo e exportar — você nunca mais começa do zero.',
    },
    validacao: [
      'Conheço a estrutura de um documento formal',
      'Usei cabeçalho, margens e espaçamento corretos',
      'Escrevi um corpo claro e objetivo',
      'Revisei a ortografia antes de finalizar',
      'Salvei em .docx e exportei em PDF',
      'Tenho um modelo de ofício pra reutilizar',
    ],
  },
};
