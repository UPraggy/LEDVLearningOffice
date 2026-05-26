# Fluxo de contribuição — LEDV Learning Office

> Repositório: `git@github.com:UPraggy/LEDVLearningOffice.git`
>
> Branches longas:
> - **`main`** — versão de trabalho. Recebe PRs aprovados pelo dono (Rafael).
> - **`stable`** — versão estável publicável. Atualizada via merge de `main` quando uma versão é considerada pronta pra deploy.
>
> Toda alteração nova entra por **branch `feature/<nome>`** + **PR** aguardando merge manual do Rafael. Nunca fazer push direto em `main` ou `stable`.

---

## Fluxo padrão pra cada feature/correção

### 1. Criar branch a partir de `main` atualizada

```bash
git checkout main
git pull origin main
git checkout -b feature/<NOME-DA-FUNCIONALIDADE-OU-CORRECAO>
```

Convenções de nome:
- Novidade: `feature/arcade-modo-rapido`, `feature/voz-cadu-pt-br`
- Correção: `feature/fix-overflow-trofeus`, `feature/fix-const-globalvar`
- Documentação: `feature/doc-piper-tts`
- Refatoração: `feature/refactor-appshell`

### 2. Trabalhar com commits pequenos e descritivos

```bash
git add <arquivos-específicos>
git commit -m "tipo: descrição curta no imperativo"
```

Prefixos sugeridos: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `chore:`.

### 3. Push e abrir Pull Request

```bash
git push -u origin feature/<NOME>
```

O Git já imprime a URL pra abrir o PR ("Create a pull request for ... on GitHub by visiting: ..."). Abra essa URL no navegador.

Template do PR (use no body):

```md
## O que muda
- bullet 1
- bullet 2

## Por quê
Contexto curto.

## Como testar
1. Passo 1
2. Passo 2

## Screenshots
(cole se for UI)

## Checklist
- [ ] Build local passa (`npm run build` em `app/`)
- [ ] Sem console errors novos
- [ ] Mobile + desktop testados se for UI
- [ ] Docs atualizadas (`aboutproject/`) se for feature relevante
```

### 4. Aguardar merge do dono

**Não merge sozinho.** Espere o Rafael revisar e dar merge. Após o merge:

```bash
git checkout main
git pull origin main
git branch -d feature/<NOME>   # apaga local
git push origin --delete feature/<NOME>   # apaga remota (opcional)
```

### 5. Promovendo `main` → `stable` (só quando o Rafael decidir)

```bash
git checkout stable
git pull origin stable
git merge --ff-only main
git push origin stable
```

Se `main` divergiu da `stable` com merges complicados, use PR direto:

```bash
gh pr create --base stable --head main --title "Release: v<X.Y>" --body "..."
```

---

## Regras gerais

- **Não commitar segredos** (.env, credentials.json). Use `.env.local` (já no .gitignore).
- **Modelo Piper** (`app/public/piper/cadu.onnx`) está em **Git LFS** — não tente versionar manualmente.
- **Build local antes do push**: `cd app && npm run build`.
- **Console deve estar limpo**: rode `audit_console_errors` via Visual Inspector se possível.
- **Atualize a documentação** em `aboutproject/` ao adicionar feature relevante:
  - `FRONTEND-IMPL.md` — arquitetura e referência de implementação
  - `ROADMAP-V7-FEATURES.md` — checklist de ondas/marcos
  - `AI-HANDOFF.md` — só se mudar premissa do projeto

---

## Comandos úteis

```bash
# rodar dev
cd app && npm run dev

# build
cd app && npm run build

# screenshot/audit via Visual Inspector (em outro processo)
cd ../visual-inspectorBackEnd && node api-server.js
```
