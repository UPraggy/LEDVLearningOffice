# Fluxo e Funcionamento do App (FUNCIONAL) — Escritório

> Especifica **como o app se comporta** — navegação, jornadas do usuário, responsabilidade de
> cada tela, estados e regras. **É FUNCIONAL, não visual:** NÃO define cores, tipografia, layout
> nem identidade (isso é decisão do design, ver `DESIGN-BRIEF.md`).
>
> ⚙️ **Regra:** onde algo aqui sugerir arranjo/posição de tela, é só sugestão funcional — **o
> design pode alterar livremente** se ficar mais prático/bonito. Os itens marcados ⚙️ são
> "ajustáveis pelo design". O que NÃO muda: as funções existirem e as regras de progressão/dados.
>
> Front-only, sem voz, sem backend. Atualizado: 2026-05-24. Ver `FUNCIONALIDADES.md`, `EXERCICIOS.md`.

---

## 1. Estrutura de navegação (hierarquia funcional)

```
App
├─ Onboarding (1ª vez)
├─ Início (Home)
├─ Módulos  →  Trilhas (de um módulo)  →  Detalhe da trilha  →  Missão (4 etapas)
├─ Revisão (repetição espaçada)
├─ Perfil  →  Troféus · Certificados · Configurações
└─ (seletor de perfil — modo família)
```

- **5 módulos:** Computador, Celular, Mercado, Segurança, Inglês (de `MODULOS`/`TRILHAS`).
- **Roteamento atual (protótipo):** estado único `route` por string (`home`, `trilhas`,
  `trilha:<id>`, `trilha:<id>:missao:<n>`, `perfil`, `config`). ⚙️ A forma de navegar (abas,
  menu, gestos) é decisão do design — o que importa é alcançar cada destino.
- **Navegação principal** precisa dar acesso a: Início, Módulos/Trilhas, Revisão, Perfil. ⚙️ Como
  (barra inferior, lateral, etc.) é do design.
- **"Voltar" e "Início" sempre acessíveis** (requisito de usabilidade 40+, não de visual).

---

## 2. Jornadas principais (passo a passo funcional)

### 2.1 Primeira vez (Onboarding)
1. Abre o app → não há perfil/progresso → vai pro **Onboarding**.
2. Pergunta: **nome**, **faixa etária**, **objetivo**, **módulo inicial** (ver `FUNCIONALIDADES.md §6`).
3. Cria o perfil local + progresso zerado. Aplica config default de acessibilidade.
4. Sugere a 1ª trilha do módulo escolhido e leva pra ela (ou pra Home). ⚙️ Layout do onboarding é do design; o que importa é coletar perfil e iniciar.
> ⚙️ O onboarding pode ser pulável; se pulado, cria perfil "Você" com defaults.

### 2.2 Uso diário (loop de hábito)
1. Abre o app → **roda `atualizarOfensiva`** (atualiza/zera streak conforme a data; usa escudo se houver).
2. Home mostra: **missão do dia**, estado da **ofensiva**, **progresso até o próximo nível**, e
   acesso a "continuar de onde parei". ⚙️ Arranjo é do design.
3. Se há itens de **revisão** vencidos, oferecer "Revisar agora".
4. Usuário faz ≥1 missão → mantém a ofensiva → possível celebração.

### 2.3 Escolher o que estudar
1. **Módulos:** usuário vê os 5 módulos com seu progresso → escolhe um.
2. **Trilhas do módulo:** lista de trilhas com progresso (X/Y missões) e estado.
3. **Detalhe da trilha:** lista de missões nos estados **concluída / atual / bloqueada**
   (desbloqueio sequencial: missão `i` libera quando `i-1` concluída).
4. Toca na missão **atual** (ou em qualquer concluída pra revisar) → entra na Missão.

### 2.4 Fazer uma missão (núcleo do app)
Sequência das 4 etapas (de cada objeto em `data/conteudo`): **Aula → Prática → Desafio → Validação.**
1. **Aula:** lê o conteúdo (gancho, conceito, exemplo, glossário, 3 pontos-chave, "por que importa").
2. **Prática:** segue os passos numerados (faz no aparelho/junto).
3. **Desafio:** tarefa sozinho (cenário + requisitos + dica).
4. **(Opcional) Exercícios interativos** (`interacoes[]`, ver `EXERCICIOS.md`) com **feedback imediato**
   — podem aparecer dentro de Prática/Desafio.
5. **Validação:** marca o checklist; ao completar, **"Concluir +XP"** habilita.
6. Concluir → adiciona ID a `missoesCompletas`, soma XP, **recalcula nível** (`nivelPorXP`),
   **avalia troféus** (`avaliarTrofeus`), atualiza fila de revisão, e mostra celebração se houver.
7. Volta pra trilha com a próxima missão desbloqueada; oferece "próxima missão".
> ⚙️ Como as 4 etapas são apresentadas (abas, rolagem, passos) é decisão do design. O que NÃO
> muda: existir as 4 etapas, o feedback imediato dos exercícios e a conclusão gravar progresso.

### 2.5 Revisão (retenção)
1. Entra em **Revisão** → o app seleciona itens com `due <= hoje`, embaralhados entre módulos
   (interleaving), até ~10 (`FUNCIONALIDADES.md §3`).
2. Resolve os exercícios → cada resposta atualiza o intervalo do item (acertou ↑, errou →1 dia).
3. Sem itens vencidos → mensagem "Tudo revisado, volte amanhã".
> Revisão **não** desbloqueia/avança trilha — é reforço. Pode dar um XP menor.

### 2.6 Conquistas (XP, nível, troféu)
- **XP** sobe ao concluir missões/exercícios. **Nível** (Estagiário→Coordenador) é derivado do XP.
- **Subir de nível** e **ganhar troféu** disparam celebração e ficam visíveis no Perfil.
- **Certificado** (PDF) é oferecido ao concluir um **nível/módulo** (`FUNCIONALIDADES.md §4`).

### 2.7 Modo família (troca de perfil)
1. Seletor de perfil → escolhe/cria perfil → app passa a ler/gravar nas chaves daquele perfil.
2. Cada perfil é isolado (progresso, ofensiva, troféus, config).
3. Tela "Família" mostra o progresso de cada um lado a lado (sem ranking).
> ⚙️ Onde fica o seletor (topo, perfil, tela inicial) é do design.

### 2.8 Backup / migração (front-only)
1. **Exportar:** gera `.json` com todas as chaves locais (progresso, config, revisão, perfis).
2. **Importar:** valida (`app === 'escritorio'`) e restaura. Erro → aviso amigável.
3. Lembrete gentil de backup se passou muito tempo desde o último export.

---

## 3. Telas — responsabilidade funcional + estados

> Para cada tela: **o que ela faz** (função) e **estados** que precisa tratar. ⚙️ **Aparência,
> ordem e disposição = design.** Aqui só o "o que precisa existir/funcionar".

### 3.1 Onboarding
- **Faz:** coleta nome/idade/objetivo/módulo; cria perfil; aplica defaults. Pulável.
- **Estados:** primeira vez (mostra) / já tem perfil (não mostra).

### 3.2 Início (Home)
- **Faz:** dá visão do dia e atalhos — missão do dia, ofensiva/streak, progresso de nível,
  "continuar", acesso a Módulos/Revisão/Perfil, e (se houver) revisão pendente.
- **Estados:** novo usuário (sem progresso → incentivar começar) · com progresso · revisão pendente · streak em risco.

### 3.3 Módulos
- **Faz:** lista os 5 módulos com progresso de cada; abre o módulo escolhido.
- **Estados:** módulo não iniciado / em andamento / concluído.

### 3.4 Trilhas (de um módulo)
- **Faz:** lista as trilhas do módulo com progresso e badge de vertente/nível; abre uma trilha.
- **Estados:** trilha não iniciada / atual / concluída.

### 3.5 Detalhe da trilha
- **Faz:** lista as missões com estado (concluída/atual/bloqueada); abre a missão permitida.
- **Estados:** missão bloqueada (não clicável) / atual (destaque) / concluída (revisável).
- **Regra:** desbloqueio sequencial; trilha concluída quando todas as missões concluídas.

### 3.6 Missão
- **Faz:** apresenta as 4 etapas; roda exercícios (se houver) com feedback imediato; conclui e grava.
- **Estados:** etapa atual (Aula/Prática/Desafio/Validação) · exercício certo/errado · concluída · "já feita" (modo revisão).
- **Edge:** conteúdo ainda não escrito → mensagem "em produção" (hoje raro, conteúdo está completo).

### 3.7 Revisão
- **Faz:** monta sessão de itens vencidos (interleaving) e aplica exercícios; atualiza intervalos.
- **Estados:** com itens / vazio ("tudo revisado").

### 3.8 Perfil
- **Faz:** mostra nome/avatar, nível, estatísticas (XP, ofensiva, troféus), coleção de troféus,
  certificados, e acesso a Configurações e ao seletor de perfil.
- **Estados:** troféu conquistado / bloqueado.

### 3.9 Configurações
- **Faz:** acessibilidade (`FUNCIONALIDADES.md §1`), exportar/importar/limpar progresso,
  meta semanal, gerenciar perfis (família).
- **Estados:** feedback de exportar/importar (ok/erro), confirmação ao limpar.

### 3.10 Celebração (overlay)
- **Faz:** comemora conclusão/nível/troféu/ofensiva/meta. Dispensável.
- **Estados:** respeita "reduzir movimento" (sem animação) e som opcional/desligável.

---

## 4. Estados globais (precisam ser tratados)

- **Primeira vez** (sem perfil) → onboarding.
- **Vazio** (nenhuma trilha começada, nenhum troféu, nenhuma revisão) → mensagem que orienta o próximo passo.
- **Offline** → app funciona normalmente (front-only). Só fontes/ícones externos podem faltar; ter fallback.
- **Erro de importação** → aviso amigável, não técnico.
- **Dados corrompidos/ausentes** → cair pro default sem quebrar (o `useStorage` já faz try/catch).
- **Carregando** → o app é local, então é quase instantâneo; ainda assim, evitar "tela branca" (há splash no `index.html`).

---

## 5. Regras de progressão (não mudam — são da lógica, não do design)

- **Conclusão de missão:** ID em `missoesCompletas` (formato `${trilhaId}-${n}`), nunca duplicado.
- **Desbloqueio:** missão `i` exige `i-1` concluída (sequencial dentro da trilha).
- **Trilha concluída:** todas as missões concluídas (`missoesFeitasNaTrilha === total`).
- **Módulo concluído:** todas as trilhas do módulo concluídas.
- **XP/Nível:** XP soma na conclusão; nível = `nivelPorXP(xp)` (tabela `XP_POR_NIVEL`).
- **Ofensiva:** `atualizarOfensiva` no carregamento (mantém/incrementa/usa escudo/zera).
- **Troféus:** `avaliarTrofeus(progress)` após conclusões (marcos, ofensiva, domínio de trilha/módulo, inglês).
- **Tudo persiste localmente** e entra no `.json` de export.

---

## 6. O que é FUNÇÃO vs o que é DESIGN (pra não atrapalhar)

| É função (definido aqui, não muda) | É design (livre — `DESIGN-BRIEF.md`) |
|------------------------------------|--------------------------------------|
| Existir as telas/destinos e poder chegar a eles | Layout, cores, tipografia, ícones, identidade |
| As 4 etapas da missão e o feedback imediato | Como as etapas são exibidas (abas/rolagem) |
| Regras de progressão (desbloqueio, XP, nível, troféu) | Como o progresso é mostrado (barras, mapas) |
| Estados (vazio/erro/offline/concluído) existirem | Como cada estado é apresentado |
| Dados local (chaves) e export/import | Telas de configuração/backup |
| Acessibilidade existir (fonte, contraste, etc.) | Estilo dos controles de acessibilidade |

> ⚙️ Em caso de conflito entre uma sugestão funcional daqui e uma decisão de design que deixe o
> app **mais prático/claro**, **prevalece o design** — desde que as FUNÇÕES e REGRAS da tabela
> acima continuem existindo. Atualize este doc se o fluxo mudar na prática.
