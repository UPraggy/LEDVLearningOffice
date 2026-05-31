// ============================================================================
// CONTEÚDO — Arquivos e Pastas: Organize seu Computador (pc-arquivos)
// Explorador/Finder, criar/renomear/mover/copiar, busca, extensões, lixeira,
// pen drive. Base de organização digital pra qualquer pessoa.
// ============================================================================

export const PC_ARQUIVOS = {
  'pc-arquivos-1': {
    trilhaId: 'pc-arquivos', numero: 1, titulo: 'O que é arquivo e o que é pasta',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Você já abriu o computador, salvou algo "ali" e depois nunca mais achou? Quase todo mundo já. O segredo não é decorar onde fica cada coisa — é entender duas ideias simples: arquivo e pasta. Em 8 minutos isso deixa de ser bicho de sete cabeças.',
      conceito: {
        titulo: 'Arquivo é a coisa; pasta é a gaveta',
        texto: 'Um ARQUIVO é cada coisa guardada no computador: uma foto, um documento do Word, uma música, um PDF. Cada arquivo tem um nome e um ícone que dá pista do que é. Uma PASTA é uma "gaveta" que guarda arquivos (e até outras pastas) juntos, pra você não perder nada no meio da bagunça. Pensa numa cômoda: a roupa é o arquivo, a gaveta é a pasta. Você não joga tudo no chão — separa por gaveta. No computador é igualzinho.',
      },
      estrutura: {
        titulo: 'As peças desse quebra-cabeça',
        partes: [
          { simbolo: '📄', desc: 'Arquivo: uma coisa só (um documento, uma foto). Tem nome e tipo.' },
          { simbolo: '📁', desc: 'Pasta: guarda vários arquivos juntos. Pode ter pastas dentro de pastas.' },
          { simbolo: '🏷️', desc: 'Nome: você escolhe. "Recibo luz março" acha mais fácil que "doc1".' },
          { simbolo: '🖼️', desc: 'Ícone: a carinha do arquivo dá pista — folha = texto, foto = imagem.' },
        ],
      },
      exemplo: {
        titulo: 'Uma cômoda digital de exemplo',
        celulas: [
          { ref: '📁 Documentos', valor: 'Pasta: guarda recibos, contratos, currículo' },
          { ref: '📁 Fotos', valor: 'Pasta: guarda as imagens da família' },
          { ref: '📄 Currículo.docx', valor: 'Arquivo de texto dentro de Documentos' },
          { ref: '🖼️ Aniversário.jpg', valor: 'Arquivo de foto dentro de Fotos' },
        ],
        formula: 'Pasta (gaveta) → guarda → Arquivos (as coisas)',
        resultado: 'Tudo separado por assunto: você acha em segundos.',
        comentario: 'Regra de ouro: uma pasta por assunto. Não jogue tudo na Área de Trabalho — vira bagunça que ninguém acha.',
      },
      vocabulario: [
        { palavra: 'Arquivo', def: 'Cada item guardado no computador: documento, foto, música, vídeo, PDF.' },
        { palavra: 'Pasta (diretório)', def: 'Uma gaveta que junta arquivos relacionados num lugar só.' },
        { palavra: 'Área de Trabalho', def: 'A tela inicial do computador; serve de atalho, não de depósito.' },
      ],
      chave: [
        'Arquivo é a coisa; pasta é a gaveta que guarda',
        'Uma pasta por assunto deixa tudo fácil de achar',
        'Nome claro hoje = você se acha amanhã',
      ],
      porque: 'Organização de arquivos é a base de TUDO no computador: salvar um documento, anexar num e-mail, mandar uma foto, achar aquele recibo. Quem entende arquivo e pasta para de ter medo do computador.',
    },
    pratica: {
      instrucao: 'Vamos olhar o que você já tem. Abra o Explorador de Arquivos (Windows) ou o Finder (Mac) e observe — sem mexer em nada ainda.',
      passos: [
        'No Windows, clique no ícone de pasta amarela na barra de tarefas (ou tecla Windows + E)',
        'No Mac, clique no rosto azul (Finder) no canto da tela',
        'Olhe a coluna da esquerda: Documentos, Imagens/Fotos, Downloads',
        'Clique em "Documentos" e veja os arquivos e pastas que aparecem',
        'Repare nos ícones: quais são pastas (📁) e quais são arquivos (📄)?',
      ],
    },
    desafio: {
      cenario: 'Sem mexer em nada, identifique no seu computador: 2 pastas e 2 arquivos. Diga em voz alta o que cada um parece guardar (pelo nome e ícone).',
      requisitos: [
        'Abri o Explorador de Arquivos ou o Finder',
        'Encontrei pelo menos 2 pastas (ícone de gaveta 📁)',
        'Encontrei pelo menos 2 arquivos (documento, foto, PDF)',
        'Sei dizer a diferença entre arquivo e pasta com minhas palavras',
        'Entendi que pasta é gaveta e arquivo é a coisa guardada',
      ],
      dica: 'Se um ícone abre OUTROS ícones dentro quando você clica duas vezes, é uma pasta. Se abre um programa mostrando conteúdo (texto, foto), é um arquivo.',
    },
    validacao: [
      'Sei o que é um arquivo',
      'Sei o que é uma pasta',
      'Reconheço a diferença pelos ícones',
      'Abri o Explorador/Finder sozinho',
      'Perdi o medo de olhar dentro do computador',
    ],
  },

  'pc-arquivos-2': {
    trilhaId: 'pc-arquivos', numero: 2, titulo: 'O Explorador de Arquivos: sua casa digital',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Existe um programa no seu computador que é o mapa de tudo que você guardou. No Windows ele se chama Explorador de Arquivos; no Mac, Finder. Dominar esse mapa é como ganhar a planta da casa: você anda sem tropeçar.',
      conceito: {
        titulo: 'O mapa que mostra onde tudo mora',
        texto: 'O Explorador (ou Finder) é a janela que mostra suas pastas e arquivos. Ele tem três regiões: a barra lateral (atalhos pras pastas principais), o caminho no topo (mostra "onde você está") e a área central (o conteúdo da pasta aberta). Você navega clicando: entra numa pasta com clique duplo, e volta com a setinha pra trás. É como navegar entre cômodos de uma casa — sempre dá pra voltar.',
      },
      estrutura: {
        titulo: 'As regiões da janela',
        partes: [
          { simbolo: '📍', desc: 'Barra de caminho (topo): mostra onde você está, tipo "Documentos › Recibos".' },
          { simbolo: '⬅️', desc: 'Setas voltar/avançar: refazem seus passos, sem perder nada.' },
          { simbolo: '📂', desc: 'Barra lateral: atalhos pra Documentos, Imagens, Downloads, Este Computador.' },
          { simbolo: '🔍', desc: 'Busca (canto): digita um nome e ele procura na pasta atual.' },
        ],
      },
      exemplo: {
        titulo: 'Lendo o caminho como um endereço',
        celulas: [
          { ref: 'Este Computador', valor: 'A porta de entrada — todos os discos e pastas' },
          { ref: '› Documentos', valor: 'Entrou na gaveta dos documentos' },
          { ref: '› Recibos', valor: 'Entrou numa pasta dentro de Documentos' },
          { ref: '› 2025', valor: 'Mais fundo ainda: os recibos de 2025' },
        ],
        formula: 'Clique duplo = entra · Seta ⬅️ = volta · Caminho = seu endereço',
        resultado: 'Você sempre sabe onde está e como voltar.',
        comentario: 'Dica: cada item da barra de caminho é clicável. Clicou em "Documentos", volta direto pra lá — sem clicar "voltar" várias vezes.',
      },
      vocabulario: [
        { palavra: 'Explorador de Arquivos', def: 'Programa do Windows que mostra e organiza suas pastas e arquivos.' },
        { palavra: 'Finder', def: 'O equivalente no Mac: o programa de gerenciar arquivos.' },
        { palavra: 'Barra de caminho', def: 'A linha no topo que mostra a sequência de pastas até onde você está.' },
      ],
      chave: [
        'Clique duplo entra na pasta; seta volta',
        'A barra de caminho é seu endereço — e é clicável',
        'A barra lateral dá atalho pras pastas principais',
      ],
      porque: 'Saber navegar é o que te deixa achar qualquer coisa sem ajuda. Em vez de "some" um arquivo, você sabe exatamente onde procurar — e isso muda sua relação com o computador.',
    },
    pratica: {
      instrucao: 'Vamos navegar de propósito: entrar, ir mais fundo, e voltar. Abra o Explorador/Finder.',
      passos: [
        'Clique duas vezes em "Documentos" para entrar',
        'Veja na barra de caminho que agora diz "Documentos"',
        'Entre em qualquer pasta que tenha dentro (clique duplo)',
        'Use a seta ⬅️ (voltar) para retornar a Documentos',
        'Clique direto em "Este Computador" / lateral para voltar ao início',
      ],
    },
    desafio: {
      cenario: 'Entre em 3 pastas em sequência (vá fundo) e depois volte ao começo usando só a barra de caminho clicável — não a seta voltar.',
      requisitos: [
        'Entrei em pelo menos 3 pastas, uma dentro da outra',
        'Consegui ler na barra de caminho onde eu estava',
        'Voltei clicando direto num item da barra de caminho',
        'Usei a barra lateral pra ir a uma pasta principal',
        'Me sinto seguro pra navegar sem me perder',
      ],
      dica: 'Perdeu-se? Sem pânico. Clique em "Este Computador" (Windows) ou no nome do disco (Mac) na lateral — é o "voltar pro começo" que sempre funciona.',
    },
    validacao: [
      'Abro o Explorador/Finder com facilidade',
      'Entro e saio de pastas sem medo',
      'Leio a barra de caminho pra saber onde estou',
      'Uso a barra lateral como atalho',
      'Não me sinto mais "perdido" no computador',
    ],
  },

  'pc-arquivos-3': {
    trilhaId: 'pc-arquivos', numero: 3, titulo: 'Criar e renomear pastas',
    tempoTotal: 8, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'A diferença entre um computador organizado e um caos total é uma habilidade de 30 segundos: criar uma pasta com um bom nome. Hoje você vira a pessoa que acha as coisas — porque você que guardou direito.',
      conceito: {
        titulo: 'Você é o arquiteto das suas gavetas',
        texto: 'Criar pasta é dizer ao computador "quero uma gaveta nova aqui". Você cria, dá um nome, e pronto: tem onde guardar o que for daquele assunto. Renomear é trocar o nome de uma pasta (ou arquivo) que já existe — útil quando o nome ficou ruim ou genérico. Bons nomes são curtos e específicos: "Contas 2025" é melhor que "coisas". Evite nomes iguais na mesma pasta e símbolos estranhos.',
      },
      estrutura: {
        titulo: 'O fluxo de criar e nomear',
        partes: [
          { simbolo: '🖱️', desc: 'Botão direito num espaço vazio → "Novo" → "Pasta".' },
          { simbolo: '⌨️', desc: 'O nome já vem selecionado: digite o nome e tecle Enter.' },
          { simbolo: '✏️', desc: 'Renomear: clique no item, tecle F2 (Windows) e digite o novo nome.' },
          { simbolo: '🧭', desc: 'Nome bom: curto, claro, com assunto e ano. Ex.: "Recibos 2025".' },
        ],
      },
      exemplo: {
        titulo: 'De genérico pra organizado',
        celulas: [
          { ref: '❌ "Nova pasta"', valor: 'Nome padrão — não diz nada, vira bagunça' },
          { ref: '❌ "doc final final2"', valor: 'Confuso; você não vai lembrar amanhã' },
          { ref: '✅ "Currículo 2025"', valor: 'Claro: assunto + ano' },
          { ref: '✅ "Fotos Aniversário Maria"', valor: 'Específico: você acha na hora' },
        ],
        formula: 'Botão direito → Novo → Pasta → digitar nome → Enter',
        resultado: 'Uma gaveta nova, bem nomeada, pronta pra usar.',
        comentario: 'Padrão que salva: "Assunto Ano" (Contas 2025, Trabalho 2025). Ordena sozinho e você sempre sabe o que tem dentro.',
      },
      vocabulario: [
        { palavra: 'Criar pasta', def: 'Fazer uma nova gaveta vazia pra guardar arquivos de um assunto.' },
        { palavra: 'Renomear', def: 'Trocar o nome de uma pasta ou arquivo que já existe.' },
        { palavra: 'Menu de contexto', def: 'O menu que abre no botão direito, com as ações possíveis ali.' },
      ],
      chave: [
        'Botão direito → Novo → Pasta cria uma gaveta',
        'F2 (ou botão direito → Renomear) troca o nome',
        'Nome bom: assunto + ano, curto e claro',
      ],
      porque: 'Cada pasta bem nomeada é um problema futuro evitado. É a habilidade que separa quem "se perde no computador" de quem encontra qualquer coisa em segundos.',
    },
    pratica: {
      instrucao: 'Vamos montar uma estrutura simples dentro de Documentos. Abra o Explorador/Finder e entre em Documentos.',
      passos: [
        'Clique com o botão direito num espaço vazio → Novo → Pasta',
        'Digite "Contas 2025" e tecle Enter',
        'Crie outra pasta chamada "Pessoal"',
        'Clique na pasta "Pessoal", tecle F2 (Windows) e renomeie para "Documentos Pessoais"',
        'Entre em "Contas 2025" e crie dentro uma pasta "Luz"',
      ],
    },
    desafio: {
      cenario: 'Monte 3 pastas com nomes claros (assunto + contexto) e renomeie uma delas. A estrutura deve fazer sentido pra VOCÊ achar coisas depois.',
      requisitos: [
        'Criei pelo menos 3 pastas novas',
        'Usei nomes claros (assunto e/ou ano), não "Nova pasta"',
        'Renomeei pelo menos uma pasta com F2 ou botão direito',
        'Criei uma pasta DENTRO de outra (aninhada)',
        'A estrutura faz sentido pra mim achar depois',
      ],
      dica: 'Não exagere na profundidade: 2 a 3 níveis bastam (Documentos › Contas 2025 › Luz). Pasta dentro de pasta dentro de pasta sem fim atrapalha mais que ajuda.',
    },
    validacao: [
      'Crio pastas com botão direito → Novo',
      'Dou nomes claros e específicos',
      'Renomeio com F2 ou botão direito',
      'Sei criar pasta dentro de pasta',
      'Tenho uma mini-estrutura organizada em Documentos',
    ],
  },

  'pc-arquivos-4': {
    trilhaId: 'pc-arquivos', numero: 4, titulo: 'Mover, copiar e colar arquivos',
    tempoTotal: 10, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'Você baixou um arquivo e ele caiu em "Downloads", mas devia estar em "Documentos". Como leva ele pro lugar certo? Com mover e copiar — as duas mãos da organização. Depois disso, nenhum arquivo fica perdido no lugar errado.',
      conceito: {
        titulo: 'Mover muda de lugar; copiar faz uma cópia',
        texto: 'MOVER tira o arquivo de um lugar e põe em outro — existe um só, agora no lugar certo. COPIAR cria uma segunda versão idêntica, deixando o original onde estava — passam a existir dois. Os dois usam a mesma dupla mágica: você primeiro "pega" (Recortar pra mover, Copiar pra duplicar) e depois "solta" (Colar) no destino. A diferença é só Recortar (move) versus Copiar (duplica). Colar é igual nos dois.',
      },
      estrutura: {
        titulo: 'As ações e seus atalhos',
        partes: [
          { simbolo: '✂️', desc: 'Recortar (Ctrl+X): pega pra MOVER. O arquivo vai sair do lugar.' },
          { simbolo: '📋', desc: 'Copiar (Ctrl+C): pega pra DUPLICAR. O original fica.' },
          { simbolo: '📥', desc: 'Colar (Ctrl+V): solta o que você pegou na pasta aberta.' },
          { simbolo: '🖱️', desc: 'Arrastar: segura e puxa o arquivo pra outra pasta (move).' },
        ],
      },
      exemplo: {
        titulo: 'Mover vs. copiar na prática',
        celulas: [
          { ref: 'Recortar + Colar', valor: 'MOVE: sai de Downloads, vai pra Documentos (1 arquivo)' },
          { ref: 'Copiar + Colar', valor: 'DUPLICA: fica em Downloads E aparece em Documentos (2)' },
          { ref: 'Ctrl no Mac = ⌘', valor: 'No Mac use ⌘C / ⌘V (e ⌘+⌥+V pra mover)' },
          { ref: 'Arrastar', valor: 'Segurar e puxar pra outra pasta também move' },
        ],
        formula: 'Pegar (Recortar/Copiar) → abrir destino → Colar',
        resultado: 'O arquivo vai exatamente pra onde você quer.',
        comentario: 'Na dúvida entre mover e copiar com algo importante, COPIE. Assim o original fica seguro até você confirmar que a cópia chegou certinho.',
      },
      vocabulario: [
        { palavra: 'Recortar', def: 'Pegar um arquivo pra movê-lo: ele sai do lugar quando você cola.' },
        { palavra: 'Copiar', def: 'Pegar pra duplicar: o original fica e nasce uma cópia ao colar.' },
        { palavra: 'Colar', def: 'Soltar na pasta atual o que você recortou ou copiou.' },
      ],
      chave: [
        'Recortar (Ctrl+X) move; Copiar (Ctrl+C) duplica',
        'Colar (Ctrl+V) sempre solta no destino',
        'Na dúvida com algo importante, copie — não recorte',
      ],
      porque: 'Mover e copiar é o que você usa o dia todo: tirar download do lugar errado, juntar fotos numa pasta, fazer cópia de segurança antes de mexer. É a habilidade mais prática de toda a organização.',
    },
    pratica: {
      instrucao: 'Vamos mover e copiar de verdade, com segurança. Abra duas coisas: a pasta Downloads e a pasta Documentos.',
      passos: [
        'Entre em Downloads e escolha um arquivo qualquer (uma imagem serve)',
        'Clique nele e tecle Ctrl+C (copiar) — assim o original fica seguro',
        'Vá até Documentos e tecle Ctrl+V (colar): a cópia aparece lá',
        'Agora pegue OUTRO arquivo e tecle Ctrl+X (recortar)',
        'Cole em Documentos com Ctrl+V e confirme: ele saiu de Downloads',
      ],
    },
    desafio: {
      cenario: 'Organize 3 arquivos soltos: copie um pra uma pasta de assunto, mova outro pra onde ele pertence, e deixe o terceiro onde está. Confirme que cada um foi pro lugar certo.',
      requisitos: [
        'Copiei um arquivo (original permaneceu no lugar)',
        'Movi um arquivo (ele saiu da origem)',
        'Confirmei que a cópia e o movido chegaram ao destino',
        'Sei a diferença entre Recortar e Copiar com minhas palavras',
        'Usei os atalhos Ctrl+C / Ctrl+X / Ctrl+V (ou arrastar)',
      ],
      dica: 'Colou no lugar errado? Tecle Ctrl+Z (desfazer) — ele volta. O desfazer funciona pra mover, copiar e até renomear. É sua rede de segurança.',
    },
    validacao: [
      'Sei mover um arquivo (recortar + colar)',
      'Sei copiar um arquivo (copiar + colar)',
      'Entendo a diferença entre os dois',
      'Uso Ctrl+Z pra desfazer enganos',
      'Tiro arquivos do lugar errado com confiança',
    ],
  },

  'pc-arquivos-5': {
    trilhaId: 'pc-arquivos', numero: 5, titulo: 'Buscar e ordenar: ache qualquer arquivo',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: '"Eu sei que salvei, mas não sei onde!" — a frase mais comum de quem usa computador. Hoje ela some do seu vocabulário. O computador tem um detetive embutido que acha qualquer arquivo pelo nome, pela data ou pelo tipo.',
      conceito: {
        titulo: 'Buscar pelo nome; ordenar pra enxergar',
        texto: 'Você tem duas armas pra encontrar arquivos. A BUSCA: digita parte do nome no campo de pesquisa e o computador lista tudo que combina. A ORDENAÇÃO: reorganiza a lista da pasta — por nome (A-Z), por data (mais recentes primeiro) ou por tipo (junta as fotos, junta os PDFs). Combinando as duas, você acha o que procura mesmo sem lembrar exatamente onde guardou. "Salvei semana passada" → ordene por data. "Era um PDF" → ordene por tipo.',
      },
      estrutura: {
        titulo: 'As ferramentas de encontrar',
        partes: [
          { simbolo: '🔍', desc: 'Campo de busca (canto superior): digite parte do nome e Enter.' },
          { simbolo: '📅', desc: 'Ordenar por data: mostra os mais recentes no topo.' },
          { simbolo: '🔤', desc: 'Ordenar por nome: lista em ordem alfabética (A a Z).' },
          { simbolo: '🗂️', desc: 'Ordenar por tipo: junta fotos com fotos, PDFs com PDFs.' },
        ],
      },
      exemplo: {
        titulo: 'Escolhendo a estratégia certa',
        celulas: [
          { ref: 'Lembro do nome', valor: 'Busca: digite parte (ex.: "luz") e veja a lista' },
          { ref: 'Lembro de quando', valor: 'Ordene por data, olhe o período certo' },
          { ref: 'Lembro do tipo', valor: 'Ordene por tipo: ache na turma das fotos/PDFs' },
          { ref: 'Não lembro nada', valor: 'Ordene por data: o recente costuma estar no topo' },
        ],
        formula: 'Busca pelo nome  +  Ordenação pela data/tipo = achou',
        resultado: 'Qualquer arquivo encontrado em segundos.',
        comentario: 'A busca olha a pasta atual e tudo dentro dela. Então: quer buscar amplo? Vá pra "Documentos" ou "Este Computador" antes de pesquisar.',
      },
      vocabulario: [
        { palavra: 'Busca (pesquisa)', def: 'Digitar parte do nome pra o computador listar os arquivos que combinam.' },
        { palavra: 'Ordenar (classificar)', def: 'Reorganizar a lista por nome, data ou tipo pra enxergar melhor.' },
        { palavra: 'Tipo de arquivo', def: 'A categoria do arquivo: documento, imagem, PDF, planilha.' },
      ],
      chave: [
        'Busca acha pelo nome (mesmo parte dele)',
        'Ordenar por data acha "o que salvei recente"',
        'Busque a partir de uma pasta ampla pra alcançar mais',
      ],
      porque: 'Nunca mais perder um arquivo é libertador. Você para de recriar documentos "porque sumiu" e ganha confiança: o que entrou no computador, você sabe achar.',
    },
    pratica: {
      instrucao: 'Vamos achar coisas de propósito. Abra o Explorador/Finder em Documentos.',
      passos: [
        'Clique no campo de busca (canto superior direito)',
        'Digite uma letra ou palavra que apareça em algum arquivo seu e tecle Enter',
        'Veja a lista de resultados; clique num pra abrir a pasta dele',
        'Volte e clique no cabeçalho "Data de modificação" pra ordenar por data',
        'Clique em "Tipo" (ou "Nome") pra ver a lista reorganizar',
      ],
    },
    desafio: {
      cenario: 'Encontre o arquivo mais recente que você salvou e também encontre um arquivo específico usando a busca pelo nome. Use as duas estratégias.',
      requisitos: [
        'Usei o campo de busca digitando parte de um nome',
        'Abri um arquivo a partir do resultado da busca',
        'Ordenei a pasta por data e identifiquei o mais recente',
        'Experimentei ordenar por tipo (ou por nome)',
        'Achei o que procurava sem saber de cor onde estava',
      ],
      dica: 'Não lembra nem o nome? Vá em Documentos, ordene por data (mais recente no topo) e role devagar — bater o olho na lista costuma despertar a memória do nome.',
    },
    validacao: [
      'Uso o campo de busca pra achar pelo nome',
      'Ordeno por data pra achar o recente',
      'Ordeno por tipo pra agrupar semelhantes',
      'Abro o arquivo direto do resultado',
      'Não tenho mais medo de "perder" arquivos',
    ],
  },

  'pc-arquivos-6': {
    trilhaId: 'pc-arquivos', numero: 6, titulo: 'Extensões: .pdf, .docx, .jpg e quem abre',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Você já reparou nas três letrinhas no fim do nome do arquivo? "contrato.pdf", "foto.jpg". Elas não são enfeite: são o "sobrenome" do arquivo, que diz ao computador o que é aquilo e qual programa abre. Entender isso evita um monte de confusão.',
      conceito: {
        titulo: 'A extensão é o sobrenome do arquivo',
        texto: 'Depois do ponto, no fim do nome, vem a EXTENSÃO: .pdf, .docx, .jpg, .xlsx, .mp3. Ela diz o TIPO do arquivo. O computador olha a extensão pra decidir qual programa usar: .docx abre no Word, .pdf num leitor de PDF, .jpg num visualizador de fotos. Por isso você não deve trocar a extensão na hora de renomear — mudar "foto.jpg" pra "foto.pdf" não converte nada, só confunde o computador. Renomeie a PARTE antes do ponto à vontade; a parte depois do ponto, deixe quieta.',
      },
      estrutura: {
        titulo: 'Extensões que você mais encontra',
        partes: [
          { simbolo: '📄', desc: '.pdf — documento "congelado", abre igual em qualquer lugar.' },
          { simbolo: '📝', desc: '.docx / .doc — documento de texto editável (Word, Google Docs).' },
          { simbolo: '🖼️', desc: '.jpg / .png — imagens e fotos.' },
          { simbolo: '📊', desc: '.xlsx / .csv — planilhas (Excel, Sheets).' },
        ],
      },
      exemplo: {
        titulo: 'Lendo o sobrenome do arquivo',
        celulas: [
          { ref: 'curriculo.docx', valor: 'Texto editável → abre no Word/Docs' },
          { ref: 'recibo.pdf', valor: 'Documento fixo → abre no leitor de PDF' },
          { ref: 'praia.jpg', valor: 'Foto → abre no visualizador de imagens' },
          { ref: 'musica.mp3', valor: 'Áudio → abre no player de música' },
        ],
        formula: 'nome + . + extensão  →  computador escolhe o programa',
        resultado: 'Você sabe o que cada arquivo é só de bater o olho.',
        comentario: 'Não vê as extensões? No Windows, no menu "Exibir", marque "Extensões de nomes de arquivos". Ver o sobrenome ajuda muito a se organizar.',
      },
      vocabulario: [
        { palavra: 'Extensão', def: 'As letras depois do ponto que indicam o tipo do arquivo (.pdf, .jpg).' },
        { palavra: 'Programa padrão', def: 'O aplicativo que o computador usa pra abrir aquele tipo de arquivo.' },
        { palavra: 'PDF', def: 'Formato de documento "congelado": abre igual em qualquer aparelho.' },
      ],
      chave: [
        'A extensão (depois do ponto) diz o tipo do arquivo',
        'Ela define qual programa abre o arquivo',
        'Não troque a extensão ao renomear — só o nome antes do ponto',
      ],
      porque: 'Reconhecer extensões evita susto ("por que não abre?") e golpe (anexo .exe disfarçado de foto). Você passa a entender o que recebe e a escolher o formato certo pra enviar.',
    },
    pratica: {
      instrucao: 'Vamos enxergar e reconhecer extensões. Abra uma pasta com arquivos variados (Documentos ou Downloads).',
      passos: [
        'No Windows, abra o menu "Exibir" e marque "Extensões de nomes de arquivos"',
        'Olhe os nomes e liste mentalmente as extensões que aparecem',
        'Identifique um .pdf, uma imagem (.jpg/.png) e um documento (.docx)',
        'Clique uma vez num arquivo e veja, embaixo, o "Tipo" descrito',
        'Repare: cada tipo tem um ícone diferente — vá associando ícone e extensão',
      ],
    },
    desafio: {
      cenario: 'Liste 4 arquivos seus com extensões diferentes e diga, pra cada um, qual programa deve abrir. Acerte o tipo só pela extensão e pelo ícone.',
      requisitos: [
        'Ativei a exibição de extensões (ou já apareciam)',
        'Encontrei pelo menos 4 extensões diferentes',
        'Disse corretamente o tipo de cada uma (texto, foto, PDF, planilha)',
        'Entendi por que não se troca a extensão ao renomear',
        'Sei que um arquivo .exe vindo de estranho é sinal de alerta',
      ],
      dica: 'Recebeu uma "foto" que termina em .exe, .scr ou .zip pedindo pra abrir? Desconfie: imagem de verdade é .jpg ou .png. Extensão executável vinda de estranho costuma ser golpe.',
    },
    validacao: [
      'Sei o que é a extensão de um arquivo',
      'Reconheço .pdf, .docx, .jpg, .xlsx',
      'Entendo que a extensão escolhe o programa',
      'Não troco a extensão ao renomear',
      'Uso a extensão como pista de segurança',
    ],
  },

  'pc-arquivos-7': {
    trilhaId: 'pc-arquivos', numero: 7, titulo: 'Lixeira: apagar e recuperar com segurança',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Apagar um arquivo dá um friozinho: "e se eu precisar depois?". Boa notícia: o computador tem uma rede de segurança chamada Lixeira. Apagar quase nunca é pra sempre — e hoje você aprende a apagar sem medo e a recuperar quando errar.',
      conceito: {
        titulo: 'A Lixeira é uma segunda chance',
        texto: 'Quando você apaga um arquivo, ele não some na hora: vai pra LIXEIRA (Windows) ou Lixo (Mac), uma pasta especial que segura o que foi apagado. Enquanto está lá, dá pra RESTAURAR e ele volta pro lugar original. Só some de verdade quando você "esvazia a lixeira" — aí sim é definitivo. Então a regra é tranquila: apague à vontade o que parece lixo; só esvazie a lixeira quando tiver certeza de que não precisa de mais nada lá dentro.',
      },
      estrutura: {
        titulo: 'O ciclo de apagar com segurança',
        partes: [
          { simbolo: '🗑️', desc: 'Apagar (tecla Delete): manda o arquivo pra Lixeira, não some ainda.' },
          { simbolo: '♻️', desc: 'Restaurar: dentro da Lixeira, devolve o arquivo ao lugar de origem.' },
          { simbolo: '🧹', desc: 'Esvaziar Lixeira: apaga de vez tudo que está lá — sem volta.' },
          { simbolo: '⚠️', desc: 'Shift+Delete: pula a Lixeira e apaga direto. Evite — sem rede.' },
        ],
      },
      exemplo: {
        titulo: 'Errei — e agora?',
        celulas: [
          { ref: 'Apaguei sem querer', valor: 'Abra a Lixeira → botão direito → Restaurar' },
          { ref: 'É lixo mesmo', valor: 'Deixe na Lixeira; um dia esvazie pra liberar espaço' },
          { ref: 'Acabei de apagar', valor: 'Ctrl+Z (desfazer) traz de volta na hora' },
          { ref: 'Esvaziei a lixeira', valor: 'Aí é definitivo — por isso confirme antes' },
        ],
        formula: 'Delete → Lixeira → Restaurar (volta) OU Esvaziar (some)',
        resultado: 'Você apaga sem medo, sabendo desfazer.',
        comentario: 'Ícone da Lixeira na Área de Trabalho: cheio = tem coisa dentro (recuperável); vazio = nada lá. Bom hábito: olhar antes de esvaziar.',
      },
      vocabulario: [
        { palavra: 'Lixeira', def: 'Pasta que segura arquivos apagados, permitindo recuperá-los depois.' },
        { palavra: 'Restaurar', def: 'Tirar um arquivo da Lixeira e devolvê-lo ao lugar de origem.' },
        { palavra: 'Esvaziar a Lixeira', def: 'Apagar de forma definitiva tudo que está na Lixeira.' },
      ],
      chave: [
        'Apagar manda pra Lixeira, não some na hora',
        'Restaurar traz o arquivo de volta',
        'Só esvazie a Lixeira com certeza — aí é definitivo',
      ],
      porque: 'Medo de apagar trava muita gente, que acumula lixo digital. Entender a Lixeira liberta: você limpa o computador com confiança e ainda sabe resgatar o que apagou por engano.',
    },
    pratica: {
      instrucao: 'Vamos apagar e recuperar com segurança — usando um arquivo de teste, nada importante.',
      passos: [
        'Crie um arquivo ou pasta de teste chamado "apagar-me"',
        'Clique nele e tecle Delete: ele vai pra Lixeira',
        'Abra a Lixeira (ícone na Área de Trabalho ou na lateral)',
        'Clique com o botão direito no "apagar-me" → Restaurar',
        'Confirme que ele voltou pro lugar de origem',
      ],
    },
    desafio: {
      cenario: 'Apague um item de teste, recupere-o pela Lixeira, apague de novo e só então (com certeza de que é teste) esvazie a Lixeira. Sinta o ciclo completo.',
      requisitos: [
        'Apaguei um item e confirmei que foi pra Lixeira',
        'Restaurei o item de volta pelo menu da Lixeira',
        'Entendi a diferença entre apagar e esvaziar',
        'Sei usar Ctrl+Z logo após apagar por engano',
        'Esvaziei a Lixeira só depois de conferir o conteúdo',
      ],
      dica: 'Cuidado com pen drives e cartões: arquivos apagados deles NÃO costumam ir pra Lixeira do computador — somem direto. Antes de apagar de um pen drive, confira duas vezes.',
    },
    validacao: [
      'Apago arquivos sem medo',
      'Sei que vão pra Lixeira primeiro',
      'Recupero o que apaguei por engano',
      'Entendo que esvaziar é definitivo',
      'Limpo o computador com confiança',
    ],
  },

  'pc-arquivos-8': {
    trilhaId: 'pc-arquivos', numero: 8, titulo: 'Pen drive e HD externo: copiar e ejetar',
    tempoTotal: 10, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'Aquele pen drive na gaveta é um carregador de arquivos: leva fotos pra imprimir, entrega trabalho na escola, faz cópia de segurança. Saber usá-lo direito — e tirá-lo sem corromper nada — é uma habilidade que vale ouro no dia a dia.',
      conceito: {
        titulo: 'Um disco que entra e sai pela USB',
        texto: 'Pen drive e HD externo são discos portáteis que você espeta na entrada USB. Quando conectados, viram mais uma "gaveta" no seu Explorador/Finder — você copia arquivos pra lá e de lá igual a qualquer pasta. A diferença importante é na HORA DE TIRAR: você precisa "ejetar" antes de puxar, pra avisar o computador que parou de usar. Puxar no susto, enquanto ele ainda está gravando, pode corromper arquivos. Ejetar é só um clique que evita dor de cabeça.',
      },
      estrutura: {
        titulo: 'O uso seguro do pen drive',
        partes: [
          { simbolo: '🔌', desc: 'Conectar: espete na USB; ele aparece como um disco novo na lateral.' },
          { simbolo: '📥', desc: 'Copiar pra ele: copie/cole ou arraste arquivos pro disco do pen drive.' },
          { simbolo: '⏏️', desc: 'Ejetar: botão direito no disco → "Ejetar" antes de puxar.' },
          { simbolo: '✅', desc: 'Avisou "pode remover": aí sim puxe com segurança.' },
        ],
      },
      exemplo: {
        titulo: 'O fluxo do começo ao fim',
        celulas: [
          { ref: 'Espetei na USB', valor: 'Aparece "Disco removível (E:)" ou nome do pen drive' },
          { ref: 'Copiei as fotos', valor: 'Copiar na origem → colar dentro do pen drive' },
          { ref: 'Cliquei Ejetar', valor: 'Botão direito no disco → Ejetar' },
          { ref: 'Mensagem ok', valor: '"Hardware pode ser removido" → puxo agora' },
        ],
        formula: 'Espetar → copiar → EJETAR → puxar',
        resultado: 'Arquivos transportados sem risco de corromper.',
        comentario: 'Copiar leva alguns segundos a minutos. Espere a barrinha de progresso terminar ANTES de ejetar — ejetar no meio da cópia também dá problema.',
      },
      vocabulario: [
        { palavra: 'Pen drive', def: 'Pequeno disco portátil que se conecta na entrada USB pra levar arquivos.' },
        { palavra: 'HD externo', def: 'Disco portátil maior, pra guardar muitos arquivos e fazer backup.' },
        { palavra: 'Ejetar', def: 'Avisar o computador que vai remover o disco, pra tirá-lo com segurança.' },
      ],
      chave: [
        'Pen drive vira uma gaveta a mais no Explorador',
        'Copie pra ele como pra qualquer pasta',
        'Sempre ejete antes de puxar — protege seus arquivos',
      ],
      porque: 'Pen drive e HD externo são a forma mais simples de transportar arquivos e de fazer backup do que importa. Usar com a etapa de ejetar evita perder justamente o que você queria proteger.',
    },
    pratica: {
      instrucao: 'Se você tiver um pen drive, faça com ele. Senão, leia e simule mentalmente cada passo.',
      passos: [
        'Espete o pen drive numa entrada USB do computador',
        'No Explorador/Finder, encontre o disco novo na barra lateral',
        'Copie um arquivo qualquer (Ctrl+C) e cole dentro do pen drive (Ctrl+V)',
        'Espere a barra de progresso terminar por completo',
        'Botão direito no disco do pen drive → "Ejetar" e só então puxe',
      ],
    },
    desafio: {
      cenario: 'Copie uma pasta inteira (com alguns arquivos) pro pen drive como cópia de segurança, confira que chegou, e ejete corretamente antes de remover.',
      requisitos: [
        'Conectei o pen drive e o localizei na barra lateral',
        'Copiei uma pasta/arquivos pra dentro dele',
        'Esperei a cópia terminar 100% antes de qualquer coisa',
        'Abri o pen drive e confirmei que os arquivos chegaram',
        'Ejetei pelo menu antes de puxar o pen drive',
      ],
      dica: 'Pen drive é ótimo pra transportar, mas pode estragar ou se perder. Pra algo MUITO importante, tenha duas cópias: no pen drive E na nuvem (ou num HD externo). Backup que existe em um lugar só não é backup.',
    },
    validacao: [
      'Conecto e reconheço o pen drive no computador',
      'Copio arquivos pra ele com facilidade',
      'Espero a cópia terminar antes de mexer',
      'Ejeto sempre antes de puxar',
      'Uso o pen drive pra transportar e fazer backup',
    ],
  },

  'pc-arquivos-9': {
    trilhaId: 'pc-arquivos', numero: 9, titulo: 'Projeto: organize a pasta da sua vida',
    tempoTotal: 18, xp: 120, vertente: 'computador',
    aula: {
      gancho: 'Chegou a hora de juntar tudo num projeto que muda seu dia a dia de verdade: uma estrutura de pastas pra sua vida, com seus documentos no lugar e uma cópia de segurança. No fim, você vai abrir o computador e achar qualquer coisa em segundos — porque foi você que organizou.',
      conceito: {
        titulo: 'Da bagunça a um sistema que é seu',
        texto: 'Você já sabe criar, nomear, mover, copiar, buscar, apagar com segurança e usar pen drive. Agora vai aplicar tudo junto. A ideia é simples: dentro de Documentos, montar 4 a 6 pastas-mãe por área da vida (Pessoal, Contas, Trabalho, Saúde, Fotos), mover pra dentro delas os arquivos que estão soltos, e fazer uma cópia de segurança numa nuvem ou pen drive. Não precisa ficar perfeito — precisa fazer sentido pra você e ser fácil de manter.',
      },
      estrutura: {
        titulo: 'A estrutura que vamos montar',
        partes: [
          { simbolo: '🪪', desc: 'Pessoal: RG, CPF, certidões, comprovante de endereço (digitalizados).' },
          { simbolo: '💡', desc: 'Contas: luz, água, internet, boletos — por ano se quiser.' },
          { simbolo: '💼', desc: 'Trabalho: currículo, contratos, comprovantes, certificados.' },
          { simbolo: '📸', desc: 'Fotos: por evento ou ano. Backup é prioridade aqui.' },
        ],
      },
      exemplo: {
        titulo: 'Um exemplo de árvore organizada',
        celulas: [
          { ref: 'Documentos › Pessoal', valor: 'RG.pdf, CPF.pdf, Comprovante-endereco.pdf' },
          { ref: 'Documentos › Contas › 2025', valor: 'Luz-jan.pdf, Internet-jan.pdf' },
          { ref: 'Documentos › Trabalho', valor: 'Curriculo 2025.docx, Certificados/' },
          { ref: 'Documentos › Fotos › Família', valor: 'Fotos organizadas + backup na nuvem' },
        ],
        formula: 'Áreas da vida (mãe) → ano/evento (filha) → arquivos nomeados',
        resultado: 'Um sistema que você mantém sem esforço.',
        comentario: 'Mantenha simples: 2 a 3 níveis no máximo. Estrutura complicada demais ninguém mantém — e volta a virar bagunça.',
      },
      vocabulario: [
        { palavra: 'Estrutura de pastas', def: 'O conjunto de pastas-mãe e filhas que organiza tudo por assunto.' },
        { palavra: 'Backup', def: 'Cópia de segurança dos arquivos importantes em outro lugar (nuvem, pen drive).' },
        { palavra: 'Digitalizar', def: 'Transformar um documento de papel em arquivo (foto ou PDF).' },
      ],
      chave: [
        'Pastas-mãe por área da vida; filhas por ano/evento',
        'Mover o que está solto pra dentro da pasta certa',
        'Documento importante = sempre com backup',
      ],
      porque: 'Esta é a entrega que muda sua relação com o computador pra sempre: documentos achados na hora de uma emergência, contas em ordem, fotos seguras. Organização não é luxo — é tranquilidade.',
    },
    pratica: {
      instrucao: 'Monte sua estrutura de verdade. Reserve os 18 minutos e siga com calma — é um projeto que vale por anos.',
      passos: [
        'Em Documentos, crie 4 a 6 pastas-mãe (ex.: Pessoal, Contas, Trabalho, Saúde, Fotos)',
        'Dentro de "Contas", crie a pasta do ano atual (ex.: 2025)',
        'Mova pra dentro das pastas certas os arquivos que estão soltos na Área de Trabalho e em Downloads',
        'Renomeie os principais com nomes claros (assunto + data quando fizer sentido)',
        'Use a busca pra conferir que arquivos importantes (RG, currículo) estão onde deveriam',
        'Faça backup: copie a pasta Documentos (ou ao menos Pessoal e Fotos) pra nuvem ou pen drive e ejete com segurança',
      ],
    },
    desafio: {
      cenario: 'Entregue sua "pasta da vida": uma estrutura de pastas-mãe por área, com os arquivos soltos movidos pra dentro, os principais bem nomeados e um backup feito. Tire um print da árvore organizada pra comparar com o "antes".',
      requisitos: [
        'Criei de 4 a 6 pastas-mãe por área da vida',
        'Movi os arquivos soltos pra dentro das pastas certas',
        'Renomeei os documentos principais com nomes claros',
        'Confirmei pela busca que os documentos importantes estão no lugar',
        'Fiz um backup (nuvem ou pen drive ejetado com segurança)',
      ],
      dica: 'Não tente organizar 10 anos de arquivos de uma vez — cansa e desanima. Faça a estrutura, mova o essencial hoje, e adote a regra "todo arquivo novo já entra na pasta certa". Em semanas, está tudo no lugar sem sofrimento.',
    },
    validacao: [
      'Montei minha estrutura de pastas por área da vida',
      'Movi os arquivos soltos pra dentro dela',
      'Nomeei os documentos importantes com clareza',
      'Acho qualquer arquivo em segundos pela busca',
      'Fiz uma cópia de segurança do que importa',
    ],
  },
};
