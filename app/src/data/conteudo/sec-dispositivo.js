// ============================================================================
// CONTEÚDO — Blindar Seu Aparelho (sec-dispositivo)
// módulo Segurança · vertente "ambos"
// Bloqueio de tela, atualizações, instalar com segurança, malware, antivírus,
// backup, perda/roubo, aparelho compartilhado. Autoral, foco no Brasil.
// ============================================================================

export const SEC_DISPOSITIVO = {
  'sec-dispositivo-1': {
    trilhaId: 'sec-dispositivo', numero: 1, titulo: 'Bloqueio de tela e biometria: a primeira muralha',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Se você perde o celular desbloqueado, quem o achar tem suas mensagens, seu banco, suas fotos e o caminho pra invadir tudo. O bloqueio de tela é a primeira muralha do seu aparelho — e mais gente do que imagina anda sem ela direito.',
      conceito: {
        titulo: 'Bloqueio forte transforma um roubo de aparelho em só um prejuízo material',
        texto: 'A tela de bloqueio é o que separa um ladrão dos seus dados. Sem ela, perder o aparelho é perder a vida digital toda; com ela bem feita, o ladrão fica só com um equipamento. Use um bloqueio forte: PIN de 6 dígitos ou mais (evite datas e sequências óbvias) ou senha, somados à biometria (digital ou rosto) pra agilidade no dia a dia. Reduza o tempo de bloqueio automático pra a tela fechar rápido quando você para de usar. E lembre: a biometria é a comodidade, mas o PIN/senha é a base — é ele que protege quando a biometria falha ou quando o aparelho reinicia.',
      },
      estrutura: {
        titulo: 'Um bloqueio que protege',
        partes: [
          { simbolo: '🔢', desc: 'PIN de 6+ dígitos ou senha — evite datas e sequências.' },
          { simbolo: '👆', desc: 'Biometria (digital/rosto) pra agilizar o dia a dia.' },
          { simbolo: '⏱️', desc: 'Bloqueio automático rápido quando você para de usar.' },
          { simbolo: '🧱', desc: 'PIN/senha é a base; biometria é a comodidade.' },
        ],
      },
      exemplo: {
        titulo: 'Aparelho perdido: com e sem bloqueio',
        celulas: [
          { ref: 'Sem bloqueio', valor: 'Quem achar entra no banco, e-mail e WhatsApp' },
          { ref: 'Com bloqueio forte', valor: 'Quem achar fica só com o aparelho' },
          { ref: 'Base', valor: 'PIN 6+ dígitos / senha' },
          { ref: 'Comodidade', valor: 'Biometria pra desbloquear rápido' },
        ],
        formula: 'Bloqueio forte = roubo de aparelho vira só prejuízo material',
        resultado: 'Seus dados continuam protegidos mesmo sem o aparelho.',
        comentario: 'Evite PIN de 4 dígitos com datas (aniversário, ano). Seis dígitos aleatórios são muito mais difíceis de adivinhar — e você usa a biometria na maior parte do tempo mesmo.',
      },
      vocabulario: [
        { palavra: 'Tela de bloqueio', def: 'A barreira que pede PIN/senha/biometria pra usar o aparelho.' },
        { palavra: 'Biometria', def: 'Desbloqueio por digital ou reconhecimento facial.' },
        { palavra: 'Bloqueio automático', def: 'Tempo até a tela travar sozinha sem uso.' },
      ],
      chave: [
        'O bloqueio de tela é a primeira muralha do aparelho',
        'Use PIN 6+ dígitos/senha como base e biometria pra agilizar',
        'Bloqueio automático rápido protege quando você larga o aparelho',
      ],
      porque: 'Um bloqueio bem feito é a defesa de maior retorno do aparelho: transforma um roubo de algo catastrófico (toda sua vida digital) em apenas um prejuízo material. É o primeiro passo de toda blindagem.',
    },
    pratica: {
      instrucao: 'Reforce o bloqueio do seu aparelho.',
      passos: [
        'Confira se seu aparelho tem bloqueio de tela ativo',
        'Troque PIN curto/data por um PIN de 6+ dígitos ou senha',
        'Ative a biometria pra desbloquear no dia a dia',
        'Reduza o tempo de bloqueio automático',
        'Teste: bloqueie e veja se pede PIN/biometria pra abrir',
      ],
    },
    desafio: {
      cenario: 'Você configura um bloqueio de tela forte com PIN robusto e biometria.',
      requisitos: [
        'Tenho bloqueio de tela ativo',
        'Uso PIN 6+ dígitos ou senha (sem datas)',
        'Tenho biometria pra agilizar',
        'Configurei bloqueio automático rápido',
        'Entendo que o PIN é a base e a biometria a comodidade',
      ],
      dica: 'Saiba o seu PIN de cor: depois de reiniciar o aparelho, a biometria não funciona até você digitar o PIN/senha uma vez. Quem só decorou a digital pode ficar travado.',
    },
    validacao: [
      'Tenho bloqueio de tela ativo',
      'Uso PIN forte ou senha',
      'Tenho biometria ativada',
      'Bloqueio automático rápido',
      'Sei que o PIN é a base',
    ],
  },

  'sec-dispositivo-2': {
    trilhaId: 'sec-dispositivo', numero: 2, titulo: 'Atualizações: o conserto invisível que te protege',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Aquela notificação de "atualização disponível" que você adia há semanas não é só novidade chata: muitas vezes ela conserta falhas de segurança que golpistas já sabem como explorar. Adiar é deixar uma porta aberta de propósito.',
      conceito: {
        titulo: 'Atualizar fecha as portas que os ataques usam',
        texto: 'Sistemas e apps têm falhas. Quando uma é descoberta, o fabricante lança uma atualização que a conserta — mas, se você não atualiza, a falha continua aberta no seu aparelho, e criminosos exploram justamente quem demora. Por isso, atualizar é um dos hábitos de segurança mais importantes e mais fáceis. Ative as atualizações automáticas do sistema e dos apps, e quando aparecer um aviso de atualização de segurança, não adie por muito tempo. Vale tanto pro celular quanto pro computador. Manter tudo atualizado é o "conserto invisível" que te protege de ataques que você nem chega a ver.',
      },
      estrutura: {
        titulo: 'Mantendo tudo atualizado',
        partes: [
          { simbolo: '🔄', desc: 'Ative atualizações automáticas do sistema.' },
          { simbolo: '📲', desc: 'Ative atualização automática dos apps.' },
          { simbolo: '🛡️', desc: 'Não adie avisos de atualização de segurança.' },
          { simbolo: '💻', desc: 'Vale pra celular E pra computador.' },
        ],
      },
      exemplo: {
        titulo: 'Por que adiar é arriscado',
        celulas: [
          { ref: 'Falha descoberta', valor: 'Brecha conhecida no sistema/app' },
          { ref: 'Correção lançada', valor: 'Atualização que fecha a brecha' },
          { ref: 'Você adia', valor: 'A brecha continua aberta no seu aparelho' },
          { ref: 'Você atualiza', valor: 'A porta se fecha antes do ataque' },
        ],
        formula: 'Atualizar = fechar portas que ataques já conhecem',
        resultado: 'Seu aparelho deixa de ser alvo fácil de falhas conhecidas.',
        comentario: 'Atualizações automáticas resolvem o problema sem você pensar nisso. Deixe ligadas e o aparelho se protege sozinho — só confirme reinícios quando pedirem.',
      },
      vocabulario: [
        { palavra: 'Atualização de segurança', def: 'Correção que fecha uma falha que poderia ser explorada.' },
        { palavra: 'Falha (vulnerabilidade)', def: 'Brecha no sistema/app que criminosos podem usar.' },
        { palavra: 'Atualização automática', def: 'O aparelho se atualiza sozinho, sem você lembrar.' },
      ],
      chave: [
        'Atualizações consertam falhas que ataques exploram',
        'Ative atualização automática do sistema e dos apps',
        'Não adie avisos de segurança — no celular e no computador',
      ],
      porque: 'Atualizar é segurança de altíssimo retorno e esforço quase zero: fecha automaticamente brechas que criminosos já sabem explorar. Deixar tudo no automático protege o aparelho sem exigir nada de você.',
    },
    pratica: {
      instrucao: 'Garanta que seu aparelho se mantém atualizado.',
      passos: [
        'Verifique se há atualização do sistema pendente e instale',
        'Ative as atualizações automáticas do sistema',
        'Ative a atualização automática dos apps',
        'Faça o mesmo no computador, se usar um',
        'Combine: não adiar avisos de segurança por muito tempo',
      ],
    },
    desafio: {
      cenario: 'Você mantém sistema e apps atualizados, com atualização automática ligada.',
      requisitos: [
        'Entendo que atualizar fecha falhas de segurança',
        'Mantenho o sistema atualizado',
        'Ativei atualização automática dos apps',
        'Cuido disso no celular e no computador',
        'Não adio avisos de segurança',
      ],
      dica: 'Aparelhos muito antigos podem parar de receber atualizações de segurança. Quando isso acontece, eles ficam cada vez mais expostos — é um sinal de que vale planejar a troca.',
    },
    validacao: [
      'Entendo o papel das atualizações',
      'Mantenho o sistema atualizado',
      'Atualização automática de apps ativa',
      'Cuido de celular e computador',
      'Não adio avisos de segurança',
    ],
  },

  'sec-dispositivo-3': {
    trilhaId: 'sec-dispositivo', numero: 3, titulo: 'Instalar com segurança: só de lojas e sites oficiais',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Um app "modificado" que promete recursos pagos de graça, um programa baixado de um site qualquer, um APK enviado por mensagem: é por aí que a maior parte dos vírus entra. Onde você instala importa tanto quanto o que você instala.',
      conceito: {
        titulo: 'A origem do app é a sua primeira defesa contra malware',
        texto: 'Instalar apps e programas só de fontes oficiais — as lojas de aplicativos do aparelho e os sites oficiais dos fabricantes — bloqueia a maioria dos vírus antes que eles cheguem perto. Lojas oficiais revisam apps; sites oficiais entregam o programa verdadeiro. Já apps "piratas", "modificados", "crackeados" ou enviados por link costumam vir com malware embutido. Desconfie de versões "grátis" de coisas pagas, de instaladores fora da loja, e de arquivos de instalação recebidos por mensagem. No celular, evite ativar a instalação de fontes desconhecidas. No computador, baixe sempre do site oficial e desconfie de "baixaki" e similares.',
      },
      estrutura: {
        titulo: 'Instalando com segurança',
        partes: [
          { simbolo: '🏪', desc: 'Celular: só pela loja oficial do aparelho.' },
          { simbolo: '🌐', desc: 'Computador: só do site oficial do fabricante.' },
          { simbolo: '🚫', desc: 'Evite apps "modificados", "crackeados" e APKs por link.' },
          { simbolo: '⚠️', desc: 'Não ative "fontes desconhecidas" sem necessidade real.' },
        ],
      },
      exemplo: {
        titulo: 'Onde o vírus entra',
        celulas: [
          { ref: 'Seguro', valor: 'App da loja oficial · programa do site oficial' },
          { ref: 'Arriscado', valor: 'App "grátis" modificado · instalador de site qualquer' },
          { ref: 'Golpe comum', valor: 'APK enviado por mensagem "instala que é melhor"' },
          { ref: 'Regra', valor: 'A origem do app é a primeira defesa' },
        ],
        formula: 'Fonte oficial = barreira contra a maioria dos vírus',
        resultado: 'Você corta a principal porta de entrada de malware.',
        comentario: 'Mesmo na loja oficial, olhe quem publicou e as avaliações antes de instalar. Mas o essencial é: fora das fontes oficiais, o risco de malware sobe muito.',
      },
      vocabulario: [
        { palavra: 'Fonte oficial', def: 'Loja de apps do aparelho ou site oficial do fabricante.' },
        { palavra: 'APK por link', def: 'Arquivo de instalação enviado fora da loja — risco alto.' },
        { palavra: 'App modificado/crackeado', def: 'Versão alterada de um app, frequente portadora de vírus.' },
      ],
      chave: [
        'Instale só de lojas e sites oficiais',
        'Evite apps modificados/crackeados e APKs por link',
        'A origem do app é sua primeira defesa contra malware',
      ],
      porque: 'A maioria das infecções por malware vem de fontes não oficiais. Instalar só de lojas e sites oficiais corta essa porta de entrada e evita o problema na raiz, sem precisar de antivírus pra remediar depois.',
    },
    pratica: {
      instrucao: 'Adote a regra das fontes oficiais.',
      passos: [
        'No celular, instale apps só pela loja oficial',
        'No computador, baixe programas só do site oficial',
        'Desconfie de versões "grátis" de apps/programas pagos',
        'Nunca instale APK enviado por mensagem ou link',
        'Confira "fontes desconhecidas" desativadas no celular',
      ],
    },
    desafio: {
      cenario: 'Você instala apps e programas apenas de fontes oficiais.',
      requisitos: [
        'Instalo apps só pela loja oficial',
        'Baixo programas só de sites oficiais',
        'Evito apps modificados e crackeados',
        'Nunca instalo APK por link',
        'Sei que a origem é a primeira defesa',
      ],
      dica: 'Se um app só está disponível fora da loja oficial, isso já é um alerta. Apps legítimos quase sempre estão nas lojas — o que vive "só por link" merece muita desconfiança.',
    },
    validacao: [
      'Instalo só pela loja oficial',
      'Baixo programas de sites oficiais',
      'Evito apps modificados',
      'Nunca instalo APK por link',
      'Sei que a origem importa',
    ],
  },

  'sec-dispositivo-4': {
    trilhaId: 'sec-dispositivo', numero: 4, titulo: 'Apps maliciosos e malware: como reconhecer',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Seu aparelho ficou lento, esquentando, com anúncios pulando do nada e a bateria sumindo? Pode ser malware trabalhando escondido. Saber reconhecer os sinais ajuda a agir antes que o estrago aumente.',
      conceito: {
        titulo: 'Malware deixa rastros — aprenda a notá-los',
        texto: 'Malware é qualquer programa malicioso: rouba dados, exibe anúncios, sequestra contas ou usa seu aparelho sem você saber. Alguns sinais comuns: lentidão e travamentos repentinos, aquecimento e bateria caindo rápido, anúncios surgindo fora dos apps, apps que você não instalou, consumo de dados estranho, ou o navegador abrindo páginas sozinho. Se desconfiar: desinstale apps recentes e suspeitos, rode uma verificação de segurança, revise as permissões, e em casos sérios considere restaurar o aparelho (com backup). E lembre da missão anterior — a melhor defesa é não deixar o malware entrar, instalando só de fontes oficiais.',
      },
      estrutura: {
        titulo: 'Sinais de que algo está errado',
        partes: [
          { simbolo: '🐌', desc: 'Lentidão, travamentos, aquecimento e bateria caindo rápido.' },
          { simbolo: '📢', desc: 'Anúncios surgindo fora dos apps ou navegador abrindo sozinho.' },
          { simbolo: '👻', desc: 'Apps que você não instalou aparecem no aparelho.' },
          { simbolo: '📈', desc: 'Consumo de dados ou comportamento estranho sem explicação.' },
        ],
      },
      exemplo: {
        titulo: 'Suspeitou? Aja',
        celulas: [
          { ref: 'Sinal', valor: 'Anúncios pulando e app que você não instalou' },
          { ref: 'Passo 1', valor: 'Desinstalar apps recentes e suspeitos' },
          { ref: 'Passo 2', valor: 'Rodar verificação de segurança e revisar permissões' },
          { ref: 'Caso sério', valor: 'Restaurar o aparelho a partir do backup' },
        ],
        formula: 'Sinais + desinstalar suspeitos + verificar = conter o malware',
        resultado: 'Você identifica e remove a ameaça antes do estrago maior.',
        comentario: 'Nem toda lentidão é vírus — aparelho cheio também trava. Mas a combinação de vários sinais, ainda mais depois de instalar algo fora da loja, acende o alerta de malware.',
      },
      vocabulario: [
        { palavra: 'Malware', def: 'Programa malicioso que age escondido no aparelho.' },
        { palavra: 'Adware', def: 'Malware que enche o aparelho de anúncios indesejados.' },
        { palavra: 'Restaurar (reset)', def: 'Voltar o aparelho ao estado de fábrica, removendo apps e dados.' },
      ],
      chave: [
        'Malware dá sinais: lentidão, anúncios, apps fantasmas, bateria',
        'Suspeitou? Desinstale suspeitos, verifique e revise permissões',
        'A melhor defesa é não deixar entrar (fontes oficiais)',
      ],
      porque: 'Reconhecer os sinais de malware permite agir cedo, antes que ele roube dados ou se espalhe. Combinado com a instalação só de fontes oficiais, você previne e, se preciso, conta o problema rápido.',
    },
    pratica: {
      instrucao: 'Aprenda a reconhecer e reagir a malware.',
      passos: [
        'Memorize os sinais: lentidão, anúncios, apps fantasmas, bateria',
        'Revise a lista de apps instalados procurando intrusos',
        'Saiba como rodar uma verificação de segurança no aparelho',
        'Saiba desinstalar apps suspeitos',
        'Lembre: backup em dia permite restaurar com segurança',
      ],
    },
    desafio: {
      cenario: 'Você reconhece sinais de malware e sabe os passos pra conter.',
      requisitos: [
        'Sei reconhecer sinais de malware',
        'Reviso a lista de apps procurando intrusos',
        'Sei rodar uma verificação de segurança',
        'Sei desinstalar apps suspeitos',
        'Sei que backup permite restaurar com segurança',
      ],
      dica: 'Se uma "limpeza" ou "antivírus" apareceu sozinho e fica pedindo pra você instalar ou pagar, ele provavelmente É o problema. Apps de "otimização" agressivos costumam ser adware.',
    },
    validacao: [
      'Reconheço sinais de malware',
      'Reviso a lista de apps',
      'Sei rodar verificação de segurança',
      'Sei desinstalar suspeitos',
      'Sei restaurar com backup',
    ],
  },

  'sec-dispositivo-5': {
    trilhaId: 'sec-dispositivo', numero: 5, titulo: 'Antivírus e proteção do sistema: o que ajuda de verdade',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Será que você precisa pagar um antivírus caro? Será que aquele "seu PC está infectado, clique aqui" é de verdade? A proteção do aparelho é mais simples (e mais barata) do que os anúncios fazem parecer.',
      conceito: {
        titulo: 'A proteção que importa é hábito + recursos que você já tem',
        texto: 'Aparelhos modernos já vêm com proteções embutidas: o sistema do celular é bem protegido quando você instala só da loja oficial, e o computador costuma ter um antivírus nativo que, mantido ativo e atualizado, dá conta da maioria dos casos. Antivírus extra pode ajudar em alguns cenários, mas não substitui os hábitos: atualizar, instalar de fontes oficiais, usar senhas fortes e 2FA, desconfiar de links. Cuidado com o golpe oposto: pop-ups e anúncios gritando "vírus detectado! instale agora!" são, em geral, falsos — e o "antivírus" que eles oferecem é que é a ameaça. Proteção de verdade é discreta; o desespero é marca de golpe.',
      },
      estrutura: {
        titulo: 'O que realmente protege',
        partes: [
          { simbolo: '🛡️', desc: 'Mantenha a proteção nativa do sistema ativa e atualizada.' },
          { simbolo: '🧠', desc: 'Hábitos valem mais: atualizar, fontes oficiais, 2FA, desconfiar.' },
          { simbolo: '🚨', desc: 'Pop-up "vírus detectado, instale já!" é quase sempre golpe.' },
          { simbolo: '💸', desc: 'Não precisa pagar caro pra estar protegido.' },
        ],
      },
      exemplo: {
        titulo: 'Proteção real x golpe do antivírus',
        celulas: [
          { ref: 'Real', valor: 'Antivírus nativo ativo + bons hábitos' },
          { ref: 'Golpe', valor: 'Pop-up "seu PC está infectado, clique aqui!"' },
          { ref: 'Verdade', valor: 'O "antivírus" do pop-up É a ameaça' },
          { ref: 'Regra', valor: 'Proteção real é discreta; desespero é golpe' },
        ],
        formula: 'Proteção nativa + hábitos = segurança sem pagar caro',
        resultado: 'Você fica protegido e não cai no golpe do falso antivírus.',
        comentario: 'Se um site grita que seu aparelho está infectado, ele não tem como saber disso — é só uma propaganda assustadora. Feche a página; não instale nada que ela ofereça.',
      },
      vocabulario: [
        { palavra: 'Antivírus nativo', def: 'Proteção que já vem no sistema do computador.' },
        { palavra: 'Scareware', def: 'Golpe que assusta com "vírus detectado" pra te fazer instalar/pagar.' },
        { palavra: 'Proteção em camadas', def: 'Vários hábitos somados, não um único app salvador.' },
      ],
      chave: [
        'A proteção nativa do sistema + bons hábitos resolvem a maioria',
        'Não precisa pagar caro pra estar protegido',
        'Pop-up "vírus detectado, instale já" é quase sempre golpe',
      ],
      porque: 'Entender o que realmente protege evita dois erros opostos: achar que precisa de antivírus caro e cair no golpe do falso antivírus. A segurança vem mais de hábitos e dos recursos que você já tem do que de comprar um app.',
    },
    pratica: {
      instrucao: 'Confira sua proteção sem cair em golpe.',
      passos: [
        'No computador, confira se o antivírus nativo está ativo e atualizado',
        'No celular, lembre que instalar só da loja oficial já protege muito',
        'Reforce os hábitos: atualizar, 2FA, desconfiar de links',
        'Ignore pop-ups de "vírus detectado, instale agora"',
        'Nunca instale "antivírus" oferecido por anúncio assustador',
      ],
    },
    desafio: {
      cenario: 'Você mantém a proteção nativa ativa, reforça hábitos e ignora golpes de falso antivírus.',
      requisitos: [
        'Mantenho a proteção nativa do sistema ativa',
        'Sei que hábitos protegem mais que um app',
        'Não pago caro achando que preciso',
        'Ignoro pop-ups de "vírus detectado"',
        'Nunca instalo antivírus de anúncio assustador',
      ],
      dica: 'Antes de instalar qualquer ferramenta de segurança, pesquise o nome dela + "é confiável". Há muito falso antivírus por aí; a checagem rápida evita instalar a própria ameaça.',
    },
    validacao: [
      'Mantenho a proteção nativa ativa',
      'Sei que hábitos protegem mais',
      'Não pago caro sem necessidade',
      'Ignoro pop-ups de vírus',
      'Não instalo antivírus de anúncio',
    ],
  },

  'sec-dispositivo-6': {
    trilhaId: 'sec-dispositivo', numero: 6, titulo: 'Backup: nunca perca fotos, contatos e documentos',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Imagine perder o celular com todas as fotos dos últimos anos, os contatos e os documentos — sem cópia em lugar nenhum. Backup é o seguro que faz a diferença entre um susto e uma perda irreparável.',
      conceito: {
        titulo: 'O que tem backup, você não perde de verdade',
        texto: 'Backup é uma cópia dos seus dados guardada em outro lugar, pra que perder, quebrar ou ter o aparelho roubado não signifique perder tudo. A forma mais prática é o backup automático na nuvem: fotos, contatos e documentos são copiados sozinhos, e você os recupera em qualquer aparelho novo fazendo login. Ative isso e confira de tempos em tempos se está funcionando. Para arquivos importantes, vale também ter uma segunda cópia (outro dispositivo ou nuvem) — a regra é não depender de um único lugar. Backup também blindam você contra ransomware e contra a perda do aparelho: se o pior acontecer, seus dados estão salvos.',
      },
      estrutura: {
        titulo: 'Um backup que funciona',
        partes: [
          { simbolo: '☁️', desc: 'Backup automático na nuvem de fotos, contatos e documentos.' },
          { simbolo: '🔁', desc: 'Confira de tempos em tempos se está realmente copiando.' },
          { simbolo: '🗂️', desc: 'Para o que é crítico, tenha uma segunda cópia.' },
          { simbolo: '🆕', desc: 'Em aparelho novo, você recupera tudo com o login.' },
        ],
      },
      exemplo: {
        titulo: 'Aparelho perdido: com e sem backup',
        celulas: [
          { ref: 'Sem backup', valor: 'Fotos, contatos e documentos perdidos pra sempre' },
          { ref: 'Com backup', valor: 'Login no aparelho novo e tudo volta' },
          { ref: 'Automático', valor: 'Cópia acontece sozinha, sem você lembrar' },
          { ref: 'Crítico', valor: 'Segunda cópia do que você não pode perder' },
        ],
        formula: 'Backup automático + checagem = perda vira só um susto',
        resultado: 'Você recupera seus dados mesmo sem o aparelho antigo.',
        comentario: 'Backup que você nunca testou pode falhar na hora H. De vez em quando, confira se a última cópia é recente — é assim que você sabe que o seguro está realmente ativo.',
      },
      vocabulario: [
        { palavra: 'Backup', def: 'Cópia dos seus dados guardada em outro lugar.' },
        { palavra: 'Backup na nuvem', def: 'Cópia automática guardada em serviço online, recuperável com login.' },
        { palavra: 'Restauração', def: 'Trazer os dados do backup de volta pra um aparelho.' },
      ],
      chave: [
        'O que tem backup, você não perde de verdade',
        'Ative backup automático na nuvem e confira que funciona',
        'Para o crítico, tenha uma segunda cópia',
      ],
      porque: 'Backup é o que separa um aparelho perdido de uma perda irreparável de memórias e documentos. Automatizado e conferido, ele protege contra roubo, quebra e até ransomware — sem esforço no dia a dia.',
    },
    pratica: {
      instrucao: 'Ative e confira o backup dos seus dados.',
      passos: [
        'Ative o backup automático de fotos na nuvem',
        'Garanta que contatos estão sincronizados (não só no aparelho)',
        'Inclua documentos importantes no backup',
        'Confira a data da última cópia — está recente?',
        'Para arquivos críticos, faça uma segunda cópia',
      ],
    },
    desafio: {
      cenario: 'Você mantém backup automático funcionando de fotos, contatos e documentos.',
      requisitos: [
        'Tenho backup automático de fotos na nuvem',
        'Meus contatos estão sincronizados',
        'Documentos importantes estão no backup',
        'Confiro que a cópia está recente',
        'Tenho segunda cópia do que é crítico',
      ],
      dica: 'Contatos só salvos "no aparelho" somem com ele. Salvar na conta (nuvem) faz a agenda inteira reaparecer automaticamente quando você loga num aparelho novo.',
    },
    validacao: [
      'Backup automático de fotos ativo',
      'Contatos sincronizados',
      'Documentos no backup',
      'Confiro a cópia recente',
      'Segunda cópia do crítico',
    ],
  },

  'sec-dispositivo-7': {
    trilhaId: 'sec-dispositivo', numero: 7, titulo: 'Celular perdido ou roubado: o que configurar ANTES',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'No momento em que o celular é levado, já é tarde pra configurar a proteção. As ferramentas que salvam — localizar, bloquear e apagar à distância — precisam estar ligadas ANTES. Esta missão é o preparo que você espera nunca precisar.',
      conceito: {
        titulo: 'Prepare hoje as defesas que você só vai usar no pior dia',
        texto: 'Todo aparelho moderno oferece um recurso pra localizar, bloquear e apagar os dados à distância caso seja perdido ou roubado — mas ele só funciona se estiver ativado antes. Ligue esse recurso agora, e saiba como acessá-lo de outro aparelho ou computador (pelo site da sua conta). Combine isso com o que você já viu: bloqueio de tela forte (pra ganhar tempo), backup em dia (pra apagar sem medo) e 2FA (pra proteger as contas). Tenha também à mão o que fazer no momento: bloquear o aparelho remotamente, avisar a operadora pra bloquear o chip, e trocar as senhas das contas principais. Preparo antes = reação rápida depois.',
      },
      estrutura: {
        titulo: 'O kit de preparo (ative ANTES)',
        partes: [
          { simbolo: '📡', desc: 'Recurso de localizar/bloquear/apagar à distância ativado.' },
          { simbolo: '🔐', desc: 'Bloqueio de tela forte + 2FA nas contas principais.' },
          { simbolo: '☁️', desc: 'Backup em dia pra poder apagar o aparelho sem perder dados.' },
          { simbolo: '📋', desc: 'Saiba o plano: bloquear remoto, avisar operadora, trocar senhas.' },
        ],
      },
      exemplo: {
        titulo: 'No momento do roubo',
        celulas: [
          { ref: 'Preparado', valor: 'Localizar/bloquear/apagar ligado + backup em dia' },
          { ref: 'Passo 1', valor: 'De outro aparelho, bloquear (ou apagar) à distância' },
          { ref: 'Passo 2', valor: 'Avisar a operadora pra bloquear o chip' },
          { ref: 'Passo 3', valor: 'Trocar as senhas das contas principais' },
        ],
        formula: 'Recurso ligado antes + backup + plano = reação rápida',
        resultado: 'Você bloqueia e protege seus dados mesmo sem o aparelho.',
        comentario: 'Apagar o aparelho à distância só é tranquilo se houver backup. Por isso as missões andam juntas: bloqueio forte ganha tempo, backup permite apagar, e o recurso remoto executa.',
      },
      vocabulario: [
        { palavra: 'Localizar/apagar à distância', def: 'Recurso pra achar, travar ou limpar o aparelho remotamente.' },
        { palavra: 'Bloqueio remoto', def: 'Travar o aparelho de longe pra ninguém usar.' },
        { palavra: 'Bloqueio do chip', def: 'Pedir à operadora pra inativar o seu número/SIM.' },
      ],
      chave: [
        'Ative localizar/bloquear/apagar à distância ANTES de precisar',
        'Combine com bloqueio forte, 2FA e backup em dia',
        'Tenha o plano: bloquear remoto, avisar operadora, trocar senhas',
      ],
      porque: 'As ferramentas que salvam num roubo só funcionam se ligadas antes. Preparar o aparelho hoje transforma o pior dia numa reação rápida e organizada, protegendo seus dados e suas contas.',
    },
    pratica: {
      instrucao: 'Prepare hoje as defesas contra perda/roubo.',
      passos: [
        'Ative o recurso de localizar/bloquear/apagar do seu aparelho',
        'Saiba como acessá-lo de outro aparelho ou computador',
        'Confirme bloqueio de tela forte, 2FA e backup em dia',
        'Anote o plano: bloquear remoto, avisar operadora, trocar senhas',
        'Guarde os contatos da operadora e do banco à mão',
      ],
    },
    desafio: {
      cenario: 'Você deixa o aparelho preparado pra um eventual roubo, com recurso remoto e plano de ação.',
      requisitos: [
        'Ativei localizar/bloquear/apagar à distância',
        'Sei acessar esse recurso de outro dispositivo',
        'Tenho bloqueio forte, 2FA e backup em dia',
        'Conheço o plano de reação ao roubo',
        'Tenho os contatos de operadora/banco à mão',
      ],
      dica: 'No roubo, os criminosos correm pra acessar o banco e o WhatsApp. Por isso a ordem importa: bloquear/apagar o aparelho e trocar senhas das contas principais o quanto antes.',
    },
    validacao: [
      'Recurso remoto ativado',
      'Sei acessá-lo de outro dispositivo',
      'Bloqueio forte, 2FA e backup ok',
      'Conheço o plano de reação',
      'Tenho contatos à mão',
    ],
  },

  'sec-dispositivo-8': {
    trilhaId: 'sec-dispositivo', numero: 8, titulo: 'Aparelho compartilhado, família e modo visitante',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'O tablet que todo mundo usa em casa, o computador da família, o celular que você empresta pra criança jogar: aparelhos compartilhados misturam contas e dados de várias pessoas. Organizar isso protege a todos.',
      conceito: {
        titulo: 'Separe contas e limite o acesso em aparelhos compartilhados',
        texto: 'Quando várias pessoas usam o mesmo aparelho, o risco é alguém acessar contas, apagar coisas ou ver o que não deveria — nem sempre por má fé. A solução é separar: use perfis/contas diferentes quando o aparelho permitir, pra que cada pessoa tenha seu espaço; ative controles parentais e limites pra crianças; e use modo visitante ou navegação anônima pra quem só vai usar de passagem. Não deixe contas importantes (banco, e-mail) logadas num aparelho que outros usam. E ao emprestar o celular, prefira deixar só o app específico aberto, em vez de a casa toda à mão. Compartilhar com organização evita acidentes e protege a privacidade de cada um.',
      },
      estrutura: {
        titulo: 'Compartilhar com segurança',
        partes: [
          { simbolo: '👤', desc: 'Perfis/contas separados pra cada pessoa quando der.' },
          { simbolo: '🧒', desc: 'Controles parentais e limites pras crianças.' },
          { simbolo: '🚪', desc: 'Modo visitante/anônimo pra uso de passagem.' },
          { simbolo: '🏦', desc: 'Não deixe banco e e-mail logados em aparelho de todos.' },
        ],
      },
      exemplo: {
        titulo: 'Emprestar o celular com segurança',
        celulas: [
          { ref: 'Risco', valor: 'Entregar o celular destravado com tudo aberto' },
          { ref: 'Melhor', valor: 'Deixar só o app específico aberto (ex.: jogo)' },
          { ref: 'Família', valor: 'Perfis separados + controles pras crianças' },
          { ref: 'Visitante', valor: 'Modo visitante/anônimo pra uso rápido' },
        ],
        formula: 'Separar contas + limitar acesso = privacidade de cada um',
        resultado: 'Cada pessoa usa o aparelho sem mexer no que não é seu.',
        comentario: 'No computador de casa, contas de usuário separadas evitam que um apague ou veja os arquivos do outro — e que uma infecção num perfil contamine tudo.',
      },
      vocabulario: [
        { palavra: 'Perfil de usuário', def: 'Espaço separado no aparelho pra cada pessoa.' },
        { palavra: 'Controle parental', def: 'Limites e supervisão pro uso por crianças.' },
        { palavra: 'Modo visitante', def: 'Acesso temporário e limitado pra quem usa de passagem.' },
      ],
      chave: [
        'Separe contas/perfis em aparelhos compartilhados',
        'Use controles parentais e modo visitante',
        'Não deixe banco e e-mail logados em aparelho de todos',
      ],
      porque: 'Aparelhos compartilhados misturam dados e contas de várias pessoas. Separar perfis e limitar acessos protege a privacidade de cada um e evita acidentes — especialmente com crianças e visitantes.',
    },
    pratica: {
      instrucao: 'Organize a segurança de um aparelho compartilhado.',
      passos: [
        'Veja se o aparelho permite perfis/contas separados e configure',
        'Ative controles parentais pra crianças, se for o caso',
        'Conheça o modo visitante/anônimo pra uso de passagem',
        'Tire banco e e-mail de aparelhos que outros usam',
        'Ao emprestar o celular, deixe só o app necessário aberto',
      ],
    },
    desafio: {
      cenario: 'Você organiza um aparelho compartilhado com contas separadas e acessos limitados.',
      requisitos: [
        'Uso perfis/contas separados quando possível',
        'Ativo controles parentais pras crianças',
        'Conheço o modo visitante/anônimo',
        'Não deixo contas importantes logadas pra todos',
        'Empresto o celular deixando só o necessário aberto',
      ],
      dica: 'Pra crianças, combine limite de tempo, controle parental e instalar só pela loja oficial. Assim elas usam com liberdade dentro de um espaço que você consegue acompanhar.',
    },
    validacao: [
      'Uso perfis separados',
      'Ativo controles parentais',
      'Conheço o modo visitante',
      'Não deixo contas logadas pra todos',
      'Empresto só o necessário',
    ],
  },

  'sec-dispositivo-9': {
    trilhaId: 'sec-dispositivo', numero: 9, titulo: 'Projeto: checklist de blindagem do aparelho',
    tempoTotal: 18, xp: 120, vertente: 'ambos',
    aula: {
      gancho: 'Você já tem todas as peças: bloqueio forte, atualizações, fontes oficiais, atenção a malware, proteção certa, backup e preparo contra roubo. Hora de juntar tudo num checklist de blindagem que deixa seu aparelho realmente seguro.',
      conceito: {
        titulo: 'Um checklist que você passa uma vez e revisa às vezes',
        texto: 'Blindar o aparelho é aplicar, em sequência, tudo o que você aprendeu — e depois manter. O checklist: bloqueio de tela forte com biometria; atualizações automáticas ligadas; instalar só de fontes oficiais; saber reconhecer malware; proteção nativa ativa (sem cair em falso antivírus); backup automático funcionando; recurso de localizar/apagar à distância ativado; e contas separadas em aparelhos compartilhados. Passe por cada item uma vez pra deixar tudo no lugar, e revise de tempos em tempos. Faça o mesmo no aparelho de familiares que você ajuda. Um aparelho blindado resiste a perda, roubo, malware e invasão — e te dá tranquilidade.',
      },
      estrutura: {
        titulo: 'O checklist de blindagem',
        partes: [
          { simbolo: '🔐', desc: 'Bloqueio forte + biometria · atualizações automáticas.' },
          { simbolo: '🏪', desc: 'Só fontes oficiais · atenção a sinais de malware.' },
          { simbolo: '☁️', desc: 'Proteção nativa ativa · backup automático funcionando.' },
          { simbolo: '📡', desc: 'Localizar/apagar à distância · contas separadas se compartilhado.' },
        ],
      },
      exemplo: {
        titulo: 'Checklist concluído',
        celulas: [
          { ref: 'Acesso', valor: 'Bloqueio forte ✓ · atualizações automáticas ✓' },
          { ref: 'Instalação', valor: 'Fontes oficiais ✓ · sei reconhecer malware ✓' },
          { ref: 'Dados', valor: 'Proteção nativa ✓ · backup funcionando ✓' },
          { ref: 'Roubo', valor: 'Localizar/apagar ✓ · contas separadas ✓' },
        ],
        formula: 'Todos os itens marcados = aparelho blindado',
        resultado: 'Seu aparelho resiste a perda, roubo, malware e invasão.',
        comentario: 'Não precisa fazer tudo num dia. Marque o que já está pronto, ataque o que falta um item por vez, e em pouco tempo o checklist inteiro estará verde.',
      },
      vocabulario: [
        { palavra: 'Blindagem', def: 'Conjunto de configurações que protege o aparelho como um todo.' },
        { palavra: 'Checklist', def: 'Lista de itens pra conferir e marcar um a um.' },
        { palavra: 'Manutenção', def: 'Revisar o checklist de tempos em tempos pra manter tudo no lugar.' },
      ],
      chave: [
        'Blindar é aplicar em sequência tudo da trilha e manter',
        'Passe pelo checklist uma vez e revise de tempos em tempos',
        'Faça o mesmo no aparelho de quem você ajuda',
      ],
      porque: 'Este projeto reúne toda a trilha num checklist prático. Aplicado uma vez e revisado às vezes, ele deixa o aparelho resistente a perda, roubo, malware e invasão — a blindagem completa em uma rotina simples.',
    },
    pratica: {
      instrucao: 'Aplique o checklist de blindagem no seu aparelho.',
      passos: [
        'Bloqueio de tela forte + biometria ✓',
        'Atualizações automáticas do sistema e apps ✓',
        'Instalar só de fontes oficiais ✓',
        'Proteção nativa ativa + backup automático funcionando ✓',
        'Localizar/apagar à distância ativado ✓',
        'Contas separadas se o aparelho for compartilhado ✓',
      ],
    },
    desafio: {
      cenario: 'Você aplica o checklist completo e blinda seu aparelho (e ajuda alguém a blindar o dele).',
      requisitos: [
        'Bloqueio forte e atualizações automáticas',
        'Instalo só de fontes oficiais e reconheço malware',
        'Proteção nativa ativa e backup funcionando',
        'Recurso de localizar/apagar ativado',
        'Contas separadas em aparelho compartilhado',
      ],
      dica: 'Marque um lembrete pra revisar este checklist a cada poucos meses. Como o cenário muda, uma revisão periódica mantém a blindagem em dia sem esforço.',
    },
    validacao: [
      'Bloqueio forte e atualizações',
      'Fontes oficiais e atenção a malware',
      'Proteção nativa e backup',
      'Localizar/apagar ativado',
      'Contas separadas se compartilhado',
    ],
  },
};
