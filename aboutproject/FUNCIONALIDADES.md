# Funcionalidades detalhadas (FRONT-ONLY) — Escritório

> Especificação de ESTRUTURA/FUNCIONALIDADE (não é design de front-end) para 5 áreas:
> **Acessibilidade · Hábito e engajamento · Retenção · Valor concreto · Modo família.**
> **Tudo roda no front** (localStorage/IndexedDB, APIs do navegador). **SEM voz/fala** (adiado)
> e **SEM backend** (nunca como requisito). Implementar só na fase de app.
> Atualizado: 2026-05-24. Complementa `MELHORIAS.md`, `EXERCICIOS.md`, `estrutura.js`.

### Convenção de armazenamento (tudo localStorage, salvo nota)
- Já existe: `escritorio-progresso` (objeto `progress`).
- Novas chaves: `escritorio-config` (acessibilidade), `escritorio-revisao` (repetição espaçada),
  `escritorio-tentativas` (acertos/erros), `escritorio-perfis` + `escritorio-perfil-ativo` (família).
- **Tudo entra no `.json`** de export/import (basta o app serializar essas chaves juntas).

---

## 1. Acessibilidade (sem voz)

### 1.1 O que é
Conjunto de ajustes que o usuário liga/desliga, salvos localmente e aplicados via CSS
(variáveis/classes no `<html>`). Pensado pra 40+ (baixa visão, conforto) e ~10 (leitura).

### 1.2 Dados — `escritorio-config`
```js
{
  fonte: 'normal',        // 'normal' | 'grande' | 'maior'  (multiplica a escala base)
  contraste: 'normal',    // 'normal' | 'alto'
  tema: 'auto',           // 'auto' | 'claro' | 'escuro'   (auto = prefers-color-scheme)
  espacamento: 'normal',  // 'normal' | 'amplo'            (line-height/parágrafos)
  modo: 'completo',       // 'completo' | 'simples'        (esconde elementos secundários)
  fonteDislexia: false,   // troca a família por uma amigável à dislexia
  reduzirMovimento: false // respeita prefers-reduced-motion; desliga animações
}
```

### 1.3 Lógica (como aplicar)
- Ao carregar, ler `escritorio-config` e setar atributos no `<html>`:
  `data-fonte`, `data-contraste`, `data-tema`, `data-espacamento`, `data-modo`, classes.
- O CSS reage a esses atributos (ex: `html[data-fonte="grande"] { --escala: 1.15 }`). Os tokens
  de tipografia/espaçamento se multiplicam pela `--escala` — **fonte 17–20px é o piso**.
- `tema:'auto'` segue `window.matchMedia('(prefers-color-scheme: dark)')`.
- `reduzirMovimento` também respeita `prefers-reduced-motion` do sistema.
- **Atalho sempre visível** pra aumentar fonte (1 toque), porque é o ajuste nº1 do público 40+.

### 1.4 Comportamento
- Mudança aplica **na hora** (sem recarregar) e persiste.
- Tela de Configurações agrupa tudo; alguns atalhos (fonte) ficam acessíveis no topo/perfil.
- WCAG: contraste AA no tema normal e AAA-friendly no "alto contraste"; foco visível sempre.

---

## 2. Hábito e engajamento

### 2.1 Ofensiva (streak) + escudo
- **Já modelado** em `estrutura.js`: `atualizarOfensiva(user, hoje)` e `OFENSIVA` (marcos, escudo).
- **Regra (relembrando):** mesma data → mantém; ontem → +1; buraco → usa escudo (se houver) ou zera.
- **Escudo:** ganha 1 a cada 10 dias (máx 2). UI: ícone 🧊; ao perder um dia com escudo, mostrar
  "Seu escudo protegeu sua sequência!".
- **Risco visível:** se o usuário ainda não cumpriu a meta do dia, banner gentil "Faça 1 missão
  pra manter sua sequência de N dias 🔥".

### 2.2 Missão do dia
- Escolha **determinística por data** (sem servidor): a partir das missões disponíveis (próxima
  não concluída de cada vertente/módulo ativo), selecionar 1–3 usando a data como semente
  (ex: `hash(data) % candidatas`). Assim "a missão do dia" é estável durante o dia e muda no dia seguinte.
- Mostrar na Home com destaque + tempo estimado + XP.

### 2.3 Meta semanal
- `escritorio-config` ou `progress.preferencias`: `metaSemanal: 5` (missões/semana, ajustável).
- Contar conclusões da semana corrente (a partir de `missoesCompletas` + timestamps locais).
- Barra de progresso da semana; ao bater, celebração leve.

> Para contar por dia/semana, registrar o timestamp de conclusão localmente
> (`escritorio-tentativas` ou um `missoesLog: [{id, ts}]` no progresso).

### 2.4 Celebrações (momentos de recompensa)
- Disparar ao: concluir missão, concluir trilha, subir de nível, ganhar troféu, manter ofensiva,
  bater meta semanal.
- Visual: confete/badge + frase ("Parabéns! +60 XP"). Som **opcional** e desligável.
- Respeita `reduzirMovimento` (sem animação se desligado).

### 2.5 "Continuar de onde parei"
- Guardar `progress.ultimaMissao = 'trilhaId-n'` ao abrir/concluir. Botão na Home leva direto.

### 2.6 Mapa da jornada
- Visual (dado, não layout) do progresso por módulo e do nível de carreira
  (Estagiário→Coordenador), derivado de `XP_POR_NIVEL` e `missoesFeitasNaTrilha`.

---

## 3. Retenção (repetição espaçada — 100% no front)

### 3.1 O que é
Reapresentar conceitos/exercícios no intervalo certo (1→3→7→16→30… dias), bem quando o aluno
está prestes a esquecer. **Tudo local**, sem servidor.

### 3.2 Dados — `escritorio-revisao` (localStorage; IndexedDB se crescer muito)
```js
// lista de itens a revisar
[
  { id: 'pc-excel-5:soma-1',  // mission_id ou mission:exercicio
    due: '2026-05-27',         // próxima revisão (ISO date)
    intervalo: 3,              // dias até a próxima
    acertosSeguidos: 1 }       // sobe o intervalo; zera ao errar
]
```

### 3.3 Algoritmo (simplificado, sem libs)
```
INTERVALOS = [1, 3, 7, 16, 30, 60]   // dias

ao concluir um exercício/conceito:
  item = busca por id (ou cria)
  se ACERTOU:
    item.acertosSeguidos += 1
    i = min(item.acertosSeguidos, INTERVALOS.length-1)
    item.intervalo = INTERVALOS[i]
  senão (ERROU):
    item.acertosSeguidos = 0
    item.intervalo = 1
  item.due = hoje + item.intervalo  (em dias)
  salva em escritorio-revisao
```

### 3.4 Modo Revisão (com interleaving)
- Selecionar itens com `due <= hoje`, **embaralhados entre módulos/trilhas diferentes**
  (interleaving melhora retenção), limitado a ~10 por sessão.
- Gera uma "missão de revisão" dinâmica usando os exercícios desses itens (`EXERCICIOS.md`).
- Se não houver itens vencidos: mensagem "Tudo revisado! Volte amanhã 🎉".

### 3.5 Apoios de retenção
- **Glossário global:** construído em runtime a partir de todas as `aula.vocabulario` do conteúdo
  (`CONTEUDOS`) — busca por palavra, sem dado novo (deriva do que já existe).
- **Resumo de trilha:** ao concluir, mostrar os `aula.chave` (3 pontos) das missões daquela trilha.
- **Onde você mais erra:** a partir de `escritorio-tentativas`, sugerir revisar os temas com mais erros.

---

## 4. Valor concreto (certificado, portfólio, conquista — front-only)

### 4.1 Certificado de conclusão (PDF no navegador)
- Disparado ao concluir um **nível/módulo** (ex: "Inglês A1", "Módulo Computador").
- **Duas formas front-only (sem servidor):**
  1. **`window.print()` + CSS de impressão** (`@media print`) numa página de certificado →
     "Salvar como PDF" do próprio navegador. **Zero dependência.**
  2. **jsPDF** (lib client-side) pra gerar o PDF programaticamente, se quiser mais controle.
- Conteúdo: nome do aluno (de `escritorio-perfis`), o que concluiu, data, e o "selo" do app.
- Guardar um registro local `progress.certificados: [{ id, data }]` (pra listar no perfil).

### 4.2 Portfólio exportável
- Reunir os "entregáveis de projeto" concluídos (as últimas missões "Projeto:" de cada trilha)
  + a Carteira de Habilidades, num PDF/print (mesma técnica do §4.1).
- Marcar quais projetos o aluno realizou (campo no progresso) pra montar o índice.

### 4.3 Card de conquista compartilhável (imagem)
- Renderizar um card (ex: "Concluí o nível A1! 🎉") num `<canvas>` → `toDataURL('image/png')`.
- Compartilhar via **Web Share API** (`navigator.share`, quando disponível) ou **baixar a imagem**.
- 100% front, sem upload.

### 4.4 Lembrete de backup
- Guardar `escritorio-config.ultimoExport` (data do último `.json` exportado).
- Se passou > 7 dias (ou a cada N conclusões), mostrar banner gentil "Faça um backup do seu
  progresso" com botão de exportar. Reforça a segurança do modelo front-only.

---

## 5. Modo família (perfis locais — sem login, sem backend)

### 5.1 O que é
Vários perfis no **mesmo aparelho** (ex: pai, mãe, filho), cada um com progresso isolado. Era o
conceito original dos "colegas de escritório". **Tudo no localStorage**, sem conta nem servidor.

### 5.2 Dados
```js
escritorio-perfis        // lista: [{ id, nome, avatarCor, faixaEtaria, criadoEm }]
escritorio-perfil-ativo  // id do perfil em uso

// progresso/config POR PERFIL (namespaced):
escritorio:p:<id>:progresso
escritorio:p:<id>:config
escritorio:p:<id>:revisao
escritorio:p:<id>:tentativas
```

### 5.3 Lógica
- Na 1ª vez, criar um perfil padrão (migrar o `escritorio-progresso` atual pra `p:<id>:progresso`).
- **Seletor de perfil** (tela inicial / topo): troca o `perfil-ativo`; o app passa a ler/gravar nas
  chaves daquele perfil.
- Cada perfil é **totalmente isolado** (progresso, ofensiva, troféus, config).
- **Export/import** pode ser por perfil ou "tudo" (todos os perfis) num só `.json`.

### 5.4 Convívio (sem competição)
- Tela "Família": ver o progresso de cada perfil lado a lado (no mesmo aparelho) — incentivo,
  **sem ranking competitivo** (alinhado ao princípio do app).
- Selo "Defensor da família" (já no conteúdo de Segurança) pode ser uma atividade conjunta.
- Bônus: avatares/cores distintas por perfil pra reconhecer rápido.

> Limitação aceita (front-only): perfis ficam **naquele aparelho**. Pra levar a outro, exporta/importa
> o `.json`. Sync automático entre aparelhos = só com backend (opcional, `BACKEND.md`) — não é requisito.

---

## 6. Resumo

- **Tudo isto roda no front** (localStorage/IndexedDB, `window.print`/jsPDF, canvas, Web Share,
  Notification+service worker pra lembrete) — **sem voz/fala** e **sem backend**.
- Reaproveita o que já existe (`estrutura.js`: ofensiva/troféus/nível; `CONTEUDOS`: glossário/resumos).
- Novas chaves locais entram todas no `.json` de export/import (backup e "migração" manual).
- Implementar só na fase de app (após identidade/telas). Voz/pronúncia ficam **adiados** por decisão do dono.
