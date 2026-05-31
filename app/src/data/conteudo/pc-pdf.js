// ============================================================================
// CONTEÚDO — PDF: o Documento que Não Muda de Forma (pc-pdf)
// O que é PDF, abrir/ler, criar a partir de qualquer coisa, juntar/separar,
// assinar, preencher formulários, comprimir, segurança. Burocracia digital.
// ============================================================================

export const PC_PDF = {
  'pc-pdf-1': {
    trilhaId: 'pc-pdf', numero: 1, titulo: 'O que é PDF e por que ele virou o documento oficial',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Comprovante de pagamento, boleto, contrato, currículo, declaração: tudo isso chega ou sai em PDF. É o formato mais usado do mundo pra documentos sérios — e quem entende PDF resolve burocracia sem depender de ninguém.',
      conceito: {
        titulo: 'PDF é o documento que chega igual em qualquer lugar',
        texto: 'PDF (Portable Document Format = formato de documento portátil) é um tipo de arquivo feito pra UM objetivo: o documento aparecer EXATAMENTE igual em qualquer aparelho, pra qualquer pessoa. Um Word pode "desmontar" ao abrir em outro computador; um PDF nunca: as letras, as imagens e a formatação ficam travadas no lugar. Por isso ele virou o padrão de documentos oficiais — bancos, empresas e governo enviam e pedem tudo em PDF. Ele preserva a aparência e, normalmente, ninguém edita sem querer.',
      },
      estrutura: {
        titulo: 'Por que o PDF domina os documentos',
        partes: [
          { simbolo: '🔒', desc: 'Forma travada: o documento aparece igual em qualquer aparelho.' },
          { simbolo: '🖨️', desc: 'Pronto pra imprimir: o que você vê é o que sai no papel.' },
          { simbolo: '🌍', desc: 'Universal: abre em celular, PC, qualquer navegador, sem app especial.' },
          { simbolo: '✍️', desc: 'Não-editável por padrão: ninguém bagunça seu conteúdo sem querer.' },
        ],
      },
      exemplo: {
        titulo: 'PDF x outros formatos',
        celulas: [
          { ref: 'Currículo em Word', valor: 'Pode desmontar no PC de quem abrir' },
          { ref: 'Currículo em PDF', valor: 'Chega igualzinho pra todo recrutador' },
          { ref: 'Comprovante do banco', valor: 'Sempre PDF: oficial e imutável' },
          { ref: 'Foto de documento', valor: 'PDF é melhor: mais sério e organizado que JPG' },
        ],
        formula: 'Documento oficial = PDF (forma travada + universal)',
        resultado: 'Seus documentos chegam profissionais e sem surpresas.',
        comentario: 'Regra prática: tudo que é "documento pra valer" (currículo, comprovante, contrato, declaração) deve ir em PDF. Foto ou Word podem desmontar ou parecer amadores — o PDF transmite seriedade.',
      },
      vocabulario: [
        { palavra: 'PDF', def: 'Formato de documento que mantém a aparência igual em qualquer aparelho.' },
        { palavra: 'Formato de arquivo', def: 'O "tipo" do arquivo, indicado pela extensão (.pdf, .docx, .jpg).' },
        { palavra: 'Editável', def: 'Que pode ser alterado; o PDF, por padrão, não é (preserva o conteúdo).' },
      ],
      chave: [
        'PDF aparece igual em qualquer aparelho',
        'É o padrão oficial pra documentos sérios',
        'Não é editável por padrão — ninguém bagunça sem querer',
      ],
      porque: 'Quase toda burocracia hoje passa por PDF: emprego, banco, governo, escola. Dominar o PDF te dá independência pra resolver pendências importantes sem precisar correr atrás de ajuda.',
    },
    pratica: {
      instrucao: 'Vamos reconhecer arquivos PDF no seu computador e na internet.',
      passos: [
        'Abra o Explorador de Arquivos e procure arquivos terminados em ".pdf"',
        'Repare no ícone característico do PDF (geralmente vermelho)',
        'Abra um deles com um duplo-clique e veja o documento',
        'Observe que ele aparece "pronto", igual ao que seria impresso',
        'Note que você consegue ler, mas não digitar por cima como num Word',
      ],
    },
    desafio: {
      cenario: 'Localize pelo menos 2 arquivos PDF (no computador ou baixe um comprovante/boleto que você tenha), abra-os e confirme que aparecem prontos e imutáveis. Saiba explicar por que documentos oficiais usam PDF.',
      requisitos: [
        'Identifiquei arquivos pela extensão .pdf',
        'Reconheço o ícone típico do PDF',
        'Abri um PDF e li seu conteúdo',
        'Percebi que não dá pra editar como num Word',
        'Sei explicar por que documentos oficiais usam PDF',
      ],
      dica: 'Não acha um PDF? Boletos, comprovantes do app do banco e notas fiscais quase sempre são PDF. Baixe um comprovante recente — é PDF na certa e serve perfeitamente para treinar.',
    },
    validacao: [
      'Sei o que é um PDF e pra que serve',
      'Reconheço arquivos .pdf pelo ícone e extensão',
      'Abro e leio um PDF',
      'Entendo que o PDF preserva a forma',
      'Sei por que ele é o padrão oficial',
    ],
  },

  'pc-pdf-2': {
    trilhaId: 'pc-pdf', numero: 2, titulo: 'Abrir, ler e navegar um PDF com tranquilidade',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Um PDF de 40 páginas pode assustar, mas tem ferramentas que deixam tudo fácil: pular pra página certa, aumentar a letra, buscar uma palavra no meio do documento. Hoje você navega qualquer PDF sem se perder.',
      conceito: {
        titulo: 'Ler PDF é fácil quando você conhece as ferramentas',
        texto: 'Todo leitor de PDF (o próprio navegador, ou apps como o Adobe Reader) tem as mesmas ferramentas essenciais. ZOOM aumenta ou diminui o tamanho do texto (ótimo se a letra está pequena). A NAVEGAÇÃO deixa rolar página por página ou pular direto pra uma página específica. A BUSCA (lupa ou Ctrl+F) acha uma palavra em todo o documento — você não precisa ler tudo pra achar um número de contrato. E dá pra ler na tela cheia, sem distração.',
      },
      estrutura: {
        titulo: 'As ferramentas de leitura',
        partes: [
          { simbolo: '🔎', desc: 'Zoom: + e − aumentam/diminuem o tamanho. Ajuste ao seu conforto.' },
          { simbolo: '📄', desc: 'Navegação: role ou digite o número da página pra pular direto.' },
          { simbolo: '🔍', desc: 'Buscar (Ctrl+F): ache uma palavra ou número em todo o PDF.' },
          { simbolo: '🖥️', desc: 'Tela cheia: leitura sem distrações, como um livro.' },
        ],
      },
      exemplo: {
        titulo: 'Navegando com agilidade',
        celulas: [
          { ref: 'Letra pequena demais', valor: 'Zoom + até ficar confortável' },
          { ref: 'Quero a página 25', valor: 'Digite "25" no campo de página' },
          { ref: 'Cadê o valor total?', valor: 'Ctrl+F → "total" → ele pula pro trecho' },
          { ref: 'Ler um contrato longo', valor: 'Tela cheia + zoom no conforto certo' },
        ],
        formula: 'Zoom (tamanho) + página (ir direto) + busca (achar) = leitura sem stress',
        resultado: 'Você lê e encontra qualquer coisa em PDFs de qualquer tamanho.',
        comentario: 'O atalho Ctrl+F (segurar Ctrl e apertar F) abre a busca na maioria dos leitores e navegadores. Ele economiza um tempo enorme — em vez de ler 40 páginas, você pula direto pra palavra que importa.',
      },
      vocabulario: [
        { palavra: 'Zoom', def: 'Aumentar ou diminuir o tamanho visual do documento na tela.' },
        { palavra: 'Ctrl+F', def: 'Atalho que abre a busca por palavras dentro do documento.' },
        { palavra: 'Leitor de PDF', def: 'O programa que abre PDFs (navegador, Adobe Reader, etc.).' },
      ],
      chave: [
        'Use zoom pra ajustar a letra ao seu conforto',
        'Pule direto pra uma página digitando o número',
        'Ctrl+F acha qualquer palavra no documento',
      ],
      porque: 'PDFs longos (contratos, manuais, editais) fazem parte da vida adulta. Saber navegá-los rápido evita frustração e te ajuda a achar exatamente a informação que precisa, na hora.',
    },
    pratica: {
      instrucao: 'Abra um PDF (de preferência com várias páginas) e treine as ferramentas de leitura.',
      passos: [
        'Abra um PDF no navegador ou num leitor de PDF',
        'Use os botões de + e − (ou Ctrl com a rolagem) pra dar zoom',
        'Role o documento e depois pule direto pra uma página pelo número',
        'Aperte Ctrl+F, digite uma palavra e veja o leitor destacá-la',
        'Experimente o modo de tela cheia, se houver',
      ],
    },
    desafio: {
      cenario: 'Num PDF com várias páginas, faça: ajuste o zoom ao seu conforto, pule direto pra uma página específica e use Ctrl+F pra encontrar uma palavra. Comprove que achou a palavra sem ler tudo.',
      requisitos: [
        'Ajustei o zoom pra um tamanho confortável',
        'Naveguei pelas páginas (rolando e pulando direto)',
        'Usei Ctrl+F pra buscar uma palavra',
        'Encontrei a informação sem ler o documento inteiro',
        'Sei usar as ferramentas básicas de leitura de PDF',
      ],
      dica: 'Olhos cansando? Além do zoom, alguns leitores têm "modo escuro" ou rolagem contínua. Ajuste o tamanho e o modo até a leitura ficar realmente confortável — não há vergonha em deixar a letra bem grande.',
    },
    validacao: [
      'Abro PDFs no leitor ou navegador',
      'Uso zoom pra ajustar a letra',
      'Navego e pulo entre páginas',
      'Uso Ctrl+F pra buscar palavras',
      'Leio PDFs longos sem me perder',
    ],
  },

  'pc-pdf-3': {
    trilhaId: 'pc-pdf', numero: 3, titulo: 'Criar um PDF a partir de qualquer documento',
    tempoTotal: 10, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'Pediram seu documento em PDF, mas ele está em Word? Ou você quer transformar uma página da internet num PDF pra guardar? A boa notícia: qualquer coisa que você consiga imprimir, você consegue virar PDF. E é mais simples do que parece.',
      conceito: {
        titulo: 'Se dá pra imprimir, dá pra virar PDF',
        texto: 'O truque mágico se chama "Imprimir em PDF" (ou "Salvar como PDF"). Em vez de mandar pra impressora de papel, você manda pra uma "impressora virtual" que cria um arquivo PDF. Isso funciona em quase tudo: Word, página da internet, e-mail, planilha, foto. No Word e em apps da Microsoft/Google também há a opção direta "Salvar como PDF" ou "Baixar como PDF". O resultado é o mesmo: seu conteúdo vira um documento PDF travado e oficial, pronto pra enviar.',
      },
      estrutura: {
        titulo: 'Os caminhos pra criar um PDF',
        partes: [
          { simbolo: '🖨️', desc: 'Imprimir → "Salvar como PDF": funciona em quase qualquer programa.' },
          { simbolo: '💾', desc: 'Word/Docs: "Salvar como PDF" ou "Baixar como PDF" direto.' },
          { simbolo: '🌐', desc: 'Página da internet: Imprimir → PDF guarda a página inteira.' },
          { simbolo: '📁', desc: 'Escolher onde salvar e dar um nome claro ao arquivo.' },
        ],
      },
      exemplo: {
        titulo: 'Transformando coisas em PDF',
        celulas: [
          { ref: 'Currículo no Word', valor: 'Arquivo → Salvar como → PDF' },
          { ref: 'Página de um site', valor: 'Ctrl+P → destino "Salvar como PDF"' },
          { ref: 'Comprovante na tela', valor: 'Imprimir → PDF em vez da impressora' },
          { ref: 'Documento do Google', valor: 'Arquivo → Fazer download → PDF (.pdf)' },
        ],
        formula: 'Imprimir/Salvar → escolher "PDF" → nomear → salvar',
        resultado: 'Qualquer conteúdo vira um PDF profissional pra enviar.',
        comentario: 'O atalho Ctrl+P (de "Print") abre a tela de impressão em quase todo lugar. Lá, no campo de impressora/destino, escolha "Salvar como PDF" — e pronto, sem gastar papel nem tinta.',
      },
      vocabulario: [
        { palavra: 'Salvar como PDF', def: 'Gerar um arquivo PDF a partir de um documento ou tela.' },
        { palavra: 'Imprimir em PDF', def: 'Usar a "impressora virtual" que cria um PDF em vez de papel.' },
        { palavra: 'Ctrl+P', def: 'Atalho que abre a tela de impressão (e a opção de salvar como PDF).' },
      ],
      chave: [
        'Se dá pra imprimir, dá pra virar PDF',
        'Ctrl+P → destino "Salvar como PDF"',
        'No Word/Docs há "Salvar/Baixar como PDF" direto',
      ],
      porque: 'Criar PDF é o que te permite ENVIAR documentos do jeito certo. Sem isso, você manda Word que desmonta ou foto que parece amadora. Com isso, você entrega tudo profissional.',
    },
    pratica: {
      instrucao: 'Vamos transformar um documento e uma página em PDF.',
      passos: [
        'Abra um documento no Word ou no Google Docs (ou crie um texto rápido)',
        'Use "Salvar como PDF" / "Baixar como PDF" e salve numa pasta que você ache',
        'Abra uma página qualquer da internet e aperte Ctrl+P',
        'No campo de destino/impressora, escolha "Salvar como PDF"',
        'Dê um nome claro, salve e depois abra os dois PDFs pra conferir',
      ],
    },
    desafio: {
      cenario: 'Crie dois PDFs: um a partir de um documento de texto (Word/Docs) e outro a partir de uma página da internet (via Ctrl+P). Salve com nomes claros e confirme que ambos abrem corretamente.',
      requisitos: [
        'Gerei um PDF a partir de um documento de texto',
        'Gerei um PDF a partir de uma página da internet (Ctrl+P)',
        'Escolhi a opção "Salvar como PDF" no destino',
        'Dei nomes claros aos arquivos',
        'Abri os dois PDFs e confirmei que ficaram corretos',
      ],
      dica: 'Ao salvar como PDF, escolha uma pasta que você vai lembrar (ex.: Documentos ou a Área de Trabalho) e um nome claro. Salvar e depois não achar o arquivo é a frustração nº 1 — anote mentalmente onde guardou.',
    },
    validacao: [
      'Crio PDF a partir do Word/Docs',
      'Crio PDF de uma página da internet',
      'Uso Ctrl+P e escolho "Salvar como PDF"',
      'Nomeio o arquivo de forma clara',
      'Confirmo que o PDF gerado abre certo',
    ],
  },

  'pc-pdf-4': {
    trilhaId: 'pc-pdf', numero: 4, titulo: 'Juntar e separar páginas de PDF',
    tempoTotal: 10, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'Você tem o RG num PDF, o comprovante de residência em outro e a empresa pede "tudo num arquivo só". Ou tem um PDF de 50 páginas e só precisa enviar a página 3. Juntar e separar PDFs resolve isso — e é uma das tarefas mais pedidas na vida adulta.',
      conceito: {
        titulo: 'Combinar e dividir: organizar documentos do jeito que pedem',
        texto: 'Duas operações resolvem a maioria das exigências de documentos. JUNTAR (combinar/mesclar) pega vários PDFs e cria um só, na ordem que você quiser — perfeito pra quando pedem "documentos em um único arquivo". SEPARAR (dividir/extrair) pega um PDF grande e tira só as páginas que interessam. Você faz isso em ferramentas online gratuitas e confiáveis (como iLovePDF, Smallpdf) ou em apps de PDF. O cuidado: pra documentos sensíveis, prefira ferramentas conhecidas e apague depois do uso.',
      },
      estrutura: {
        titulo: 'Juntar e separar com segurança',
        partes: [
          { simbolo: '🔗', desc: 'Juntar (merge): vários PDFs viram um só, na ordem escolhida.' },
          { simbolo: '✂️', desc: 'Separar (split): extrai só as páginas que você precisa.' },
          { simbolo: '🔢', desc: 'Ordem: arraste os arquivos pra deixar na sequência certa.' },
          { simbolo: '🛡️', desc: 'Sensível? Use ferramenta confiável e apague o arquivo do site após.' },
        ],
      },
      exemplo: {
        titulo: 'Resolvendo pedidos comuns',
        celulas: [
          { ref: '"Mande tudo num PDF só"', valor: 'Juntar: RG + comprovante + currículo em 1 arquivo' },
          { ref: '"Só preciso da página 3"', valor: 'Separar: extrair a página 3 do documentão' },
          { ref: 'Documentos fora de ordem', valor: 'Arrastar pra organizar antes de juntar' },
          { ref: 'Ferramenta confiável', valor: 'iLovePDF, Smallpdf, Adobe — conhecidas e seguras' },
        ],
        formula: 'Juntar = vários→um · Separar = um→páginas escolhidas',
        resultado: 'Documentos entregues exatamente como pediram.',
        comentario: 'Ferramentas online de PDF são gratuitas e práticas, mas você está subindo seu documento pra um site. Pra coisas sensíveis (RG, CPF, contracheque), use só sites conhecidos e, se possível, apague o arquivo de lá depois.',
      },
      vocabulario: [
        { palavra: 'Juntar (mesclar)', def: 'Combinar vários PDFs num único arquivo.' },
        { palavra: 'Separar (dividir)', def: 'Extrair ou separar páginas específicas de um PDF.' },
        { palavra: 'Ferramenta online', def: 'Site que processa o PDF pela internet, sem instalar programa.' },
      ],
      chave: [
        'Juntar resolve "mande tudo num arquivo só"',
        'Separar extrai só as páginas que importam',
        'Pra documentos sensíveis, use sites confiáveis',
      ],
      porque: 'Pedidos de "junte os documentos" ou "mande só a página X" aparecem o tempo todo em vagas, matrículas e processos. Saber juntar e separar PDF te deixa resolver isso sozinho, na hora.',
    },
    pratica: {
      instrucao: 'Vamos juntar dois PDFs e separar uma página, usando uma ferramenta online confiável. Use documentos sem dados sensíveis pra treinar.',
      passos: [
        'Tenha 2 PDFs simples à mão (pode criar dois textos e salvar como PDF)',
        'Acesse uma ferramenta confiável (ex.: iLovePDF) e escolha "Juntar PDF"',
        'Suba os dois arquivos, ajuste a ordem e gere o PDF combinado',
        'Baixe o resultado e confira que ficaram na ordem certa',
        'Depois, use "Dividir/Separar PDF" pra extrair uma única página de um arquivo',
      ],
    },
    desafio: {
      cenario: 'Junte 2 PDFs num único arquivo na ordem correta e, separadamente, extraia uma página específica de um PDF. Confirme os resultados abrindo os arquivos gerados. Use só documentos de teste, sem dados sensíveis.',
      requisitos: [
        'Juntei 2 PDFs num único arquivo',
        'Coloquei as páginas na ordem certa',
        'Separei/extraí uma página específica de um PDF',
        'Usei uma ferramenta online confiável',
        'Conferi os arquivos gerados abrindo-os',
      ],
      dica: 'Treine sempre com documentos "de mentira" primeiro. Só depois de dominar o passo a passo aplique nos documentos reais — assim você não arrisca dados importantes enquanto ainda está aprendendo.',
    },
    validacao: [
      'Junto vários PDFs num só',
      'Organizo a ordem das páginas',
      'Separo/extraio páginas específicas',
      'Uso ferramentas online confiáveis',
      'Tenho cuidado com documentos sensíveis',
    ],
  },

  'pc-pdf-5': {
    trilhaId: 'pc-pdf', numero: 5, titulo: 'Preencher formulários em PDF sem imprimir',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Recebeu uma ficha ou requerimento em PDF pra preencher? Antigamente você imprimia, preenchia à mão e escaneava de volta — um sufoco. Hoje dá pra digitar direto no PDF, sem papel, sem impressora. Economia de tempo enorme.',
      conceito: {
        titulo: 'Digitar no PDF: dois tipos de formulário',
        texto: 'Há dois casos. Alguns PDFs são FORMULÁRIOS INTELIGENTES: têm campos prontos onde você clica e digita (o cursor aparece sozinho). Outros são PDFs "comuns", só com linhas pra preencher; nesses, você usa a ferramenta de TEXTO ou "Preencher e assinar" do leitor pra escrever por cima. Nos dois casos, o resultado é um PDF preenchido digitalmente, limpo e legível — bem melhor que a letra apertada num papel amassado e escaneado torto.',
      },
      estrutura: {
        titulo: 'Como preencher cada tipo',
        partes: [
          { simbolo: '📝', desc: 'Campos prontos: clique no campo e digite; pule com Tab.' },
          { simbolo: '🅰️', desc: 'PDF comum: use "Preencher e assinar" / ferramenta de texto.' },
          { simbolo: '☑️', desc: 'Caixas de marcar: clique pra colocar o X ou o visto.' },
          { simbolo: '💾', desc: 'Salve uma cópia preenchida com nome próprio (não sobrescreva o branco).' },
        ],
      },
      exemplo: {
        titulo: 'Preenchendo digitalmente',
        celulas: [
          { ref: 'Ficha com campos', valor: 'Clico em "Nome", digito; Tab pula pro próximo' },
          { ref: 'Requerimento só com linhas', valor: '"Preencher e assinar" → adiciono texto' },
          { ref: 'Marcar uma opção', valor: 'Clico na caixinha pra pôr o X' },
          { ref: 'Salvar', valor: 'Salvo como "Ficha-preenchida.pdf", guardo o branco' },
        ],
        formula: 'Campo/ferramenta de texto → digitar → revisar → salvar cópia',
        resultado: 'Formulário preenchido limpo, sem imprimir nem escanear.',
        comentario: 'O recurso "Preencher e assinar" (no Adobe Reader e em muitos leitores) é o coringa: serve até pra PDFs sem campos prontos. Com ele você escreve em qualquer lugar do documento como se colasse adesivos de texto.',
      },
      vocabulario: [
        { palavra: 'Formulário PDF', def: 'PDF com campos prontos pra você digitar (nome, data, etc.).' },
        { palavra: 'Preencher e assinar', def: 'Recurso que adiciona texto e assinatura em qualquer PDF.' },
        { palavra: 'Tab', def: 'Tecla que pula pro próximo campo do formulário automaticamente.' },
      ],
      chave: [
        'Muitos PDFs têm campos prontos pra digitar',
        'PDFs comuns: use "Preencher e assinar"',
        'Salve uma cópia preenchida e guarde o original em branco',
      ],
      porque: 'Formulários em PDF aparecem em matrículas, requerimentos, contratos e cadastros. Preenchê-los digitalmente economiza tempo, fica mais legível e profissional — e você não depende de impressora.',
    },
    pratica: {
      instrucao: 'Vamos preencher um PDF de formulário. Se não tiver um, muitos leitores permitem adicionar texto em qualquer PDF.',
      passos: [
        'Abra um PDF de formulário (ou qualquer PDF) num leitor que permita preencher',
        'Procure a opção "Preencher e assinar" ou clique direto num campo',
        'Digite uma informação de teste num campo (ou adicione texto por cima)',
        'Se houver caixas de marcação, clique pra marcar uma',
        'Salve uma CÓPIA preenchida com um nome diferente do arquivo em branco',
      ],
    },
    desafio: {
      cenario: 'Preencha digitalmente pelo menos 3 campos de um PDF (nome, data, uma opção marcada) sem imprimir. Salve como uma cópia preenchida e confirme que o texto digitado aparece corretamente.',
      requisitos: [
        'Abri um PDF e identifiquei se tem campos prontos ou não',
        'Digitei texto em pelo menos 3 lugares do documento',
        'Marquei uma caixa de opção (se houver)',
        'Salvei uma cópia preenchida com nome próprio',
        'Confirmei que o preenchimento ficou legível',
      ],
      dica: 'Sempre salve o formulário preenchido como um arquivo NOVO (ex.: "Requerimento-preenchido.pdf"), preservando o original em branco. Assim, se precisar preencher de novo ou corrigir, você ainda tem a versão limpa.',
    },
    validacao: [
      'Reconheço PDFs com campos prontos',
      'Uso "Preencher e assinar" em PDFs comuns',
      'Digito e marco opções no PDF',
      'Salvo uma cópia preenchida',
      'Preencho formulários sem imprimir',
    ],
  },

  'pc-pdf-6': {
    trilhaId: 'pc-pdf', numero: 6, titulo: 'Assinar um PDF digitalmente',
    tempoTotal: 10, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'Pediram sua assinatura num contrato em PDF. Você não precisa imprimir, assinar à caneta e escanear: dá pra assinar digitalmente, em segundos, do próprio computador. É legal, é aceito e é muito mais prático.',
      conceito: {
        titulo: 'Assinar sem papel: do desenho ao gov.br',
        texto: 'Há níveis de assinatura digital. A mais simples é a ASSINATURA VISUAL: você desenha sua assinatura (com o mouse ou dedo) ou usa uma foto dela, e o leitor a "cola" no PDF — serve pra muitos documentos do dia a dia. A mais forte é a ASSINATURA ELETRÔNICA OFICIAL, como a do gov.br (Assinador Gov.br) ou plataformas como DocuSign, que tem validade jurídica plena e comprova quem assinou. Pra contratos sérios, a do gov.br (gratuita, com sua conta gov.br) é a recomendada no Brasil.',
      },
      estrutura: {
        titulo: 'Os caminhos pra assinar',
        partes: [
          { simbolo: '✍️', desc: 'Assinatura visual: desenhe ou use foto; cole no PDF. Simples.' },
          { simbolo: '🏛️', desc: 'Gov.br: assinatura oficial gratuita, com validade jurídica.' },
          { simbolo: '📨', desc: 'Plataformas (DocuSign): empresa envia, você assina pelo link.' },
          { simbolo: '✅', desc: 'Escolha o nível conforme a importância do documento.' },
        ],
      },
      exemplo: {
        titulo: 'Qual assinatura pra qual caso',
        celulas: [
          { ref: 'Autorização simples', valor: 'Assinatura visual no "Preencher e assinar"' },
          { ref: 'Contrato importante', valor: 'Assinador Gov.br (validade jurídica)' },
          { ref: 'Empresa mandou link', valor: 'DocuSign/Clicksign: assino pelo próprio link' },
          { ref: 'Onde acessar o gov.br', valor: 'assinador.iti.br, com sua conta gov.br' },
        ],
        formula: 'Importância baixa = visual · Importância alta = gov.br/oficial',
        resultado: 'Documentos assinados sem papel, com o nível certo de validade.',
        comentario: 'A assinatura do gov.br é gratuita e tem o mesmo valor de uma firma reconhecida em cartório para muitos fins. Se você já tem conta gov.br (a do INSS, CNH, etc.), já pode assinar documentos oficialmente.',
      },
      vocabulario: [
        { palavra: 'Assinatura visual', def: 'Desenho ou imagem da sua assinatura colada no PDF; uso simples.' },
        { palavra: 'Assinatura eletrônica', def: 'Assinatura oficial (ex.: gov.br) com validade jurídica e comprovação de autoria.' },
        { palavra: 'Gov.br', def: 'Plataforma do governo que oferece assinatura digital oficial gratuita.' },
      ],
      chave: [
        'Assinatura visual serve pro dia a dia',
        'Gov.br dá assinatura oficial gratuita com validade jurídica',
        'Escolha o nível conforme a importância do documento',
      ],
      porque: 'Assinar digitalmente economiza tempo e dinheiro (sem impressão nem cartório pra muitos casos) e é cada vez mais exigido. Saber fazer isso te coloca em pé de igualdade no mundo formal de hoje.',
    },
    pratica: {
      instrucao: 'Vamos treinar a assinatura visual num PDF de teste. Se tiver conta gov.br, explore também o assinador oficial.',
      passos: [
        'Abra um PDF de teste num leitor com "Preencher e assinar"',
        'Escolha "Adicionar assinatura" e desenhe (mouse) ou digite seu nome',
        'Posicione a assinatura no lugar certo do documento',
        'Salve uma cópia assinada com nome claro',
        'Se tiver conta gov.br, acesse assinador.iti.br e veja como funciona o oficial',
      ],
    },
    desafio: {
      cenario: 'Assine visualmente um PDF de teste e salve a cópia assinada. Saiba explicar a diferença entre a assinatura visual e a oficial do gov.br, e quando usar cada uma.',
      requisitos: [
        'Adicionei uma assinatura visual a um PDF',
        'Posicionei a assinatura no lugar correto',
        'Salvei uma cópia assinada do documento',
        'Sei a diferença entre assinatura visual e oficial',
        'Sei que o gov.br oferece assinatura oficial gratuita',
      ],
      dica: 'Pra contratos e documentos importantes, invista 10 minutos em conhecer o Assinador Gov.br. Sua conta gov.br já serve, é gratuito, tem validade jurídica e evita a viagem ao cartório — um conhecimento que se paga sozinho.',
    },
    validacao: [
      'Adiciono assinatura visual a um PDF',
      'Posiciono e salvo o documento assinado',
      'Conheço a assinatura oficial do gov.br',
      'Escolho o nível certo por documento',
      'Assino sem precisar imprimir',
    ],
  },

  'pc-pdf-7': {
    trilhaId: 'pc-pdf', numero: 7, titulo: 'Comprimir e proteger: PDF leve e seguro',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: '"Seu arquivo é grande demais, máximo 2 MB." Quem nunca travou num upload por causa disso? E quando o PDF tem dados sensíveis, dá pra trancá-lo com senha. Comprimir e proteger são dois superpoderes pra documentos do dia a dia.',
      conceito: {
        titulo: 'Deixar leve pra enviar e trancar pra proteger',
        texto: 'COMPRIMIR é reduzir o tamanho do arquivo (de MB pra menos) sem perder muita qualidade — essencial quando um site ou e-mail tem limite de tamanho. Ferramentas online (iLovePDF, Smallpdf) fazem isso em segundos. PROTEGER COM SENHA tranca o PDF: só quem tem a senha consegue abrir — perfeito pra documentos com CPF, dados bancários ou informações pessoais. As duas operações resolvem os problemas mais chatos: "não consigo enviar" e "tenho medo de quem vai ver".',
      },
      estrutura: {
        titulo: 'Duas ferramentas que salvam o dia',
        partes: [
          { simbolo: '🗜️', desc: 'Comprimir: reduz o tamanho do PDF pra caber no limite de upload.' },
          { simbolo: '🔐', desc: 'Senha: tranca o PDF; só abre quem tiver a senha.' },
          { simbolo: '⚖️', desc: 'Qualidade x tamanho: compressão média costuma ser o ideal.' },
          { simbolo: '🛡️', desc: 'Sensível: comprima/proteja em sites confiáveis e apague depois.' },
        ],
      },
      exemplo: {
        titulo: 'Resolvendo os perrengues',
        celulas: [
          { ref: '"Máximo 2 MB" e seu PDF tem 8', valor: 'Comprimir → cai pra ~1,5 MB e envia' },
          { ref: 'PDF com seus dados bancários', valor: 'Proteger com senha antes de enviar' },
          { ref: 'Mandar a senha', valor: 'Por outro canal (não no mesmo e-mail!)' },
          { ref: 'Equilíbrio', valor: 'Compressão média: leve e ainda legível' },
        ],
        formula: 'Comprimir = menor pra enviar · Senha = trancado pra proteger',
        resultado: 'Documentos que cabem no upload e protegem seus dados.',
        comentario: 'Protegeu um PDF com senha pra enviar? Mande a senha por um canal DIFERENTE (ex.: o arquivo por e-mail e a senha por WhatsApp). Mandar arquivo e senha juntos no mesmo e-mail anula toda a proteção.',
      },
      vocabulario: [
        { palavra: 'Comprimir', def: 'Reduzir o tamanho do arquivo PDF pra facilitar o envio.' },
        { palavra: 'MB (megabyte)', def: 'Unidade de tamanho de arquivo; sites costumam ter limite (ex.: 2 MB).' },
        { palavra: 'Proteger com senha', def: 'Trancar o PDF pra que só quem tem a senha consiga abri-lo.' },
      ],
      chave: [
        'Comprimir resolve o "arquivo grande demais"',
        'Senha protege PDFs com dados sensíveis',
        'Envie a senha por um canal diferente do arquivo',
      ],
      porque: 'Limites de tamanho e dados sensíveis aparecem em quase todo envio importante (inscrições, bancos, processos). Comprimir e proteger te tira desses apertos e mantém suas informações seguras.',
    },
    pratica: {
      instrucao: 'Vamos comprimir um PDF e entender a proteção por senha, usando ferramenta confiável e arquivo de teste.',
      passos: [
        'Tenha um PDF um pouco grande (com imagens, por exemplo) à mão',
        'Acesse uma ferramenta confiável e escolha "Comprimir PDF"',
        'Suba o arquivo, gere a versão comprimida e compare os tamanhos (antes/depois)',
        'Explore a opção "Proteger PDF" / "Adicionar senha" (use um PDF de teste)',
        'Defina uma senha de teste, gere o PDF protegido e veja que ele pede a senha ao abrir',
      ],
    },
    desafio: {
      cenario: 'Comprima um PDF e compare o tamanho antes e depois. Depois, em um PDF de teste, aplique uma senha e confirme que ele só abre com a senha. Use sempre arquivos de teste, sem dados reais sensíveis.',
      requisitos: [
        'Comprimi um PDF e reduzi seu tamanho',
        'Comparei o tamanho antes e depois da compressão',
        'Apliquei uma senha a um PDF de teste',
        'Confirmei que o PDF protegido pede a senha pra abrir',
        'Sei que devo enviar a senha por canal separado',
      ],
      dica: 'Anote a senha que você colocar num PDF protegido em lugar seguro. PDF com senha esquecida é praticamente impossível de abrir — a proteção é forte justamente pra isso. Sem a senha, nem você entra.',
    },
    validacao: [
      'Comprimo PDFs grandes pra caber no upload',
      'Comparo o tamanho antes e depois',
      'Protejo PDFs sensíveis com senha',
      'Envio a senha por canal separado',
      'Uso ferramentas confiáveis pra isso',
    ],
  },

  'pc-pdf-8': {
    trilhaId: 'pc-pdf', numero: 8, titulo: 'Escanear documento com o celular e gerar PDF',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Pediram uma cópia do seu RG ou de um comprovante em papel. Você não precisa de um scanner caro: o celular no seu bolso é um scanner de bolso que gera PDFs nítidos e profissionais. É um dos truques mais úteis da vida moderna.',
      conceito: {
        titulo: 'Seu celular é um scanner de PDF',
        texto: 'Escanear é transformar um papel físico num arquivo digital. O celular faz isso muito bem com apps gratuitos de scanner (ou recursos já embutidos: no Notas do iPhone, no Google Drive/Fotos no Android). Você aponta a câmera pro documento e o app DETECTA AS BORDAS, corrige a perspectiva (deixa reto mesmo se você fotografou torto), melhora o contraste e gera um PDF limpo. O resultado é muito melhor que uma foto comum: parece um documento escaneado de verdade, pronto pra enviar.',
      },
      estrutura: {
        titulo: 'Escaneando bem com o celular',
        partes: [
          { simbolo: '📷', desc: 'App de scanner: detecta bordas e endireita o documento.' },
          { simbolo: '💡', desc: 'Boa luz: superfície plana, sem sombra; o app endireita o resto.' },
          { simbolo: '📑', desc: 'Várias páginas: escaneie em sequência e una tudo num PDF só.' },
          { simbolo: '📤', desc: 'Salvar/enviar como PDF: vai pro e-mail ou pra nuvem direto.' },
        ],
      },
      exemplo: {
        titulo: 'Do papel ao PDF',
        celulas: [
          { ref: 'Cópia do RG', valor: 'Scanner do celular → PDF nítido e reto' },
          { ref: 'Comprovante em papel', valor: 'Escaneia → vira PDF pra anexar no e-mail' },
          { ref: 'Documento de 3 folhas', valor: 'Escaneia as 3 → um único PDF' },
          { ref: 'Foto comum x scanner', valor: 'Scanner fica reto, contrastado e profissional' },
        ],
        formula: 'Apontar → app endireita e contrasta → gerar PDF → enviar',
        resultado: 'Documentos em papel viram PDFs limpos, prontos pra qualquer envio.',
        comentario: 'Apps gratuitos e bons: Google Drive (botão "+" → Digitalizar) no Android, app Notas no iPhone, ou o Microsoft Lens (Android/iPhone). Evite fotografar o documento na câmera normal — o scanner deixa muito mais profissional.',
      },
      vocabulario: [
        { palavra: 'Escanear (digitalizar)', def: 'Transformar um documento de papel num arquivo digital (PDF).' },
        { palavra: 'Detecção de bordas', def: 'O app encontra as bordas do papel e endireita a imagem automaticamente.' },
        { palavra: 'Scanner de bolso', def: 'O uso do celular como scanner, via app, pra gerar PDFs.' },
      ],
      chave: [
        'O celular escaneia papéis e gera PDFs profissionais',
        'O app endireita e melhora o contraste automaticamente',
        'Várias páginas viram um único PDF',
      ],
      porque: 'A vida ainda tem muito papel (documentos, comprovantes, receitas). Saber digitalizá-los em PDF pelo celular te permite enviar qualquer coisa, na hora, de onde estiver — sem scanner nem papelada.',
    },
    pratica: {
      instrucao: 'Pegue o celular e um documento de papel qualquer (uma conta, um folheto) pra treinar a digitalização.',
      passos: [
        'No Android, abra o Google Drive → "+" → "Digitalizar"; no iPhone, use Notas → câmera → "Digitalizar documentos"',
        'Aponte pro papel sobre uma superfície plana e com boa luz',
        'Deixe o app detectar as bordas e capturar (ajuste os cantos se precisar)',
        'Confira o resultado endireitado e com bom contraste',
        'Salve/compartilhe como PDF (pode mandar pro seu próprio e-mail)',
      ],
    },
    desafio: {
      cenario: 'Digitalize um documento de papel com o celular, gere um PDF limpo (reto e legível) e envie-o pra você mesmo por e-mail. Bônus: escaneie 2 páginas num único PDF.',
      requisitos: [
        'Usei um app de scanner do celular',
        'O documento ficou reto e com bom contraste',
        'Gerei um arquivo PDF (não uma foto comum)',
        'Enviei o PDF pra mim mesmo por e-mail',
        'Sei escanear várias páginas num só PDF',
      ],
      dica: 'Pra escanear bem: superfície escura embaixo do papel branco ajuda o app a achar as bordas; evite sombra da sua própria mão; e mantenha o celular paralelo ao papel. Pequenos cuidados deixam o PDF impecável.',
    },
    validacao: [
      'Uso o celular como scanner',
      'Gero PDFs retos e legíveis',
      'Diferencio scanner de foto comum',
      'Uno várias páginas num PDF',
      'Envio o PDF digitalizado por e-mail',
    ],
  },

  'pc-pdf-9': {
    trilhaId: 'pc-pdf', numero: 9, titulo: 'Projeto: monte um dossiê de documentos em PDF',
    tempoTotal: 18, xp: 120, vertente: 'computador',
    aula: {
      gancho: 'Hora de juntar tudo: criar, escanear, organizar, juntar e proteger. Você vai montar um "dossiê" — um pacote de documentos em PDF, organizado e pronto pra qualquer inscrição, matrícula ou processo. É a habilidade que resolve a burocracia da vida adulta de uma vez.',
      conceito: {
        titulo: 'Um dossiê profissional, do zero ao envio',
        texto: 'Um dossiê é um conjunto de documentos organizados num PDF (ou poucos PDFs), na ordem certa, com nomes claros e tamanho adequado. O fluxo completo usa tudo que você aprendeu: ESCANEAR os papéis (RG, comprovante), CRIAR PDFs de documentos digitais (currículo), JUNTAR tudo na ordem pedida, COMPRIMIR pra caber no upload, e PROTEGER se houver dados sensíveis. No fim, você tem um pacote impecável — o tipo de entrega que impressiona quem recebe.',
      },
      estrutura: {
        titulo: 'As etapas do dossiê',
        partes: [
          { simbolo: '📷', desc: 'Escanear os documentos em papel (gerando PDFs).' },
          { simbolo: '💾', desc: 'Criar PDFs dos documentos digitais (currículo, cartas).' },
          { simbolo: '🔗', desc: 'Juntar na ordem certa, com nomes de arquivo claros.' },
          { simbolo: '🗜️', desc: 'Comprimir pra caber no limite e proteger se for sensível.' },
        ],
      },
      exemplo: {
        titulo: 'Montando um dossiê de matrícula',
        celulas: [
          { ref: 'Etapa 1', valor: 'Escanear RG e comprovante → 2 PDFs' },
          { ref: 'Etapa 2', valor: 'Currículo do Word → salvar como PDF' },
          { ref: 'Etapa 3', valor: 'Juntar tudo: "Dossie-Matricula-Maria.pdf"' },
          { ref: 'Etapa 4', valor: 'Comprimir pra < 5 MB; revisar e enviar' },
        ],
        formula: 'Escanear + criar + juntar + comprimir/proteger → dossiê pronto',
        resultado: 'Um pacote de documentos organizado, leve e profissional.',
        comentario: 'Nomeie o arquivo final de forma clara: "Dossie-NomeDaPessoa-Finalidade.pdf". Quem recebe dezenas de documentos vai adorar achar o seu imediatamente — e isso passa a imagem de alguém organizado.',
      },
      vocabulario: [
        { palavra: 'Dossiê', def: 'Conjunto organizado de documentos reunidos num arquivo ou pacote.' },
        { palavra: 'Ordem dos documentos', def: 'A sequência em que os documentos aparecem dentro do PDF.' },
        { palavra: 'Nome de arquivo claro', def: 'Um nome que identifica o conteúdo e o dono do documento.' },
      ],
      chave: [
        'O dossiê reúne escanear, criar, juntar, comprimir e proteger',
        'Organize na ordem pedida e nomeie com clareza',
        'Comprima pra caber e proteja o que for sensível',
      ],
      porque: 'Inscrições, matrículas, vagas e processos quase sempre pedem um pacote de documentos. Saber montar um dossiê impecável resolve isso sozinho e te diferencia pela organização — uma habilidade da vida toda.',
    },
    pratica: {
      instrucao: 'Monte um dossiê real (ou de treino) com pelo menos 3 documentos. Use papéis e documentos sem dados sensíveis se for só treino.',
      passos: [
        'Liste os documentos que o dossiê precisa ter (ex.: RG, comprovante, currículo)',
        'Escaneie os que são de papel, gerando PDFs nítidos',
        'Gere PDF dos documentos digitais (ex.: currículo "Salvar como PDF")',
        'Junte todos num único PDF, na ordem certa, numa ferramenta confiável',
        'Comprima pra um tamanho razoável e dê um nome final claro',
        'Revise o resultado abrindo o PDF do começo ao fim antes de "entregar"',
      ],
    },
    desafio: {
      cenario: 'Entregue um dossiê completo: 3+ documentos reunidos num PDF organizado, na ordem certa, comprimido pra um tamanho razoável e com nome de arquivo claro. Revise abrindo do início ao fim, como faria antes de uma inscrição real.',
      requisitos: [
        'Reuni pelo menos 3 documentos (escaneados e/ou criados em PDF)',
        'Juntei tudo num PDF na ordem correta',
        'Comprimi pra um tamanho adequado ao envio',
        'Dei um nome de arquivo claro e identificável',
        'Revisei o dossiê inteiro antes de considerá-lo pronto',
      ],
      dica: 'Antes de enviar qualquer dossiê real, abra o PDF final e role da primeira à última página, conferindo se está tudo legível, na ordem e completo. Essa revisão de 1 minuto evita ter que reenviar e refazer tudo.',
    },
    validacao: [
      'Escaneio e crio os PDFs necessários',
      'Junto os documentos na ordem certa',
      'Comprimo pra um tamanho adequado',
      'Nomeio o dossiê com clareza',
      'Reviso o pacote inteiro antes de entregar',
    ],
  },
};
