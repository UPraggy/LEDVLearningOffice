# Escritório — Setup PWA

Este guia mostra como pegar o protótipo (`escritorio-app.jsx`) e transformar num app instalável no celular e computador (PWA), em ~30 minutos.

## O que é uma PWA?

PWA = Progressive Web App. É um site que se comporta como app:
- Tem ícone na tela inicial do celular
- Abre em tela cheia (sem barra do navegador)
- Funciona offline (com cache)
- Pode mandar notificação push
- **Não precisa publicar na Play Store nem App Store**

A pessoa só abre o site no Chrome/Safari, clica em "Adicionar à tela inicial", e pronto — vira app.

---

## Passo a passo

### 1. Crie o projeto base com Vite

```bash
npm create vite@latest escritorio -- --template react
cd escritorio
npm install
```

### 2. Instale o lucide-react (ícones usados no protótipo)

```bash
npm install lucide-react
```

### 3. Configure o Tailwind CSS

```bash
npm install -D tailwindcss @tailwindcss/vite
```

No `vite.config.js`:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

No topo do `src/index.css`:
```css
@import "tailwindcss";
```

### 4. Substitua o conteúdo de `src/App.jsx`

Cole o código de `escritorio-app.jsx` (renomeie o `export default function App()` se necessário).

### 5. Adicione os arquivos PWA

Copie pra dentro da pasta `public/`:
- `manifest.json` (deste pacote)
- `service-worker.js` (deste pacote)

Substitua o `index.html` da raiz pelo `index.html` deste pacote.

### 6. Gere os ícones

Você precisa de 8 tamanhos de ícone PNG, todos quadrados:
- 72×72, 96×96, 128×128, 144×144, 152×152, 192×192, 384×384, 512×512

**Forma rápida:** crie um logo quadrado 1024×1024 (pode usar Canva ou Figma) e jogue em:
- https://realfavicongenerator.net (gera todos os tamanhos automático)
- https://www.pwabuilder.com (também gera screenshots)

Coloque os ícones em `public/icons/`.

### 7. Rode localmente

```bash
npm run dev
```

Abre em `http://localhost:5173`. Teste em mobile usando o seu IP local:
```bash
npm run dev -- --host
```
E acesse `http://SEU_IP:5173` do celular (na mesma rede Wi-Fi).

### 8. Build e deploy

```bash
npm run build
```

Gera tudo na pasta `dist/`. Pode hospedar gratuitamente em:

#### Opção A — Vercel (mais fácil)
1. Crie conta em https://vercel.com
2. Conecte seu GitHub
3. Importe o repositório
4. Deploy automático, ganha um domínio tipo `escritorio.vercel.app`

#### Opção B — Netlify
Mesma ideia, https://netlify.com.

#### Opção C — GitHub Pages
```bash
npm install -D gh-pages
```
No `package.json`:
```json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```
Rode `npm run deploy`.

### 9. Teste a instalação

Abra o site publicado no celular:
- **Android/Chrome:** aparece banner "Adicionar à tela inicial" automático. Ou Menu (⋮) → "Instalar app"
- **iPhone/Safari:** botão de compartilhar → "Adicionar à Tela de Início"

Pronto. Tem um ícone no celular, abre em tela cheia, funciona offline.

---

## Próximos passos (depois do MVP)

### Backend pra salvar progresso
O protótipo usa dados mockados. Pra virar produto real, precisa de:
- **Banco de dados** (Supabase é grátis e simples, ou Firebase)
- **Autenticação** (login com Google/e-mail)
- **API pra salvar XP, progresso, arquivos enviados**

Stack sugerida pra MVP:
- Frontend: o que já temos (React + Vite + Tailwind)
- Backend: Supabase (banco PostgreSQL + auth + storage de arquivos, tudo num lugar, plano grátis aguenta até 50k visitas/mês)
- Hospedagem: Vercel

### Notificações push
O service worker já tá preparado pra receber push. Pra ativar:
1. Configurar Web Push API com chaves VAPID
2. Pedir permissão ao usuário no app
3. Enviar lembretes diários ("Sua sequência de 7 dias tá em risco!")

### Conteúdo dinâmico
Em vez de hardcodar missões no React, criar um CMS simples (pode ser Notion Database via API, ou Strapi, ou só uma tabela no Supabase) pra adicionar novas missões sem mexer no código.

### Analytics
- **Plausible** (privacy-friendly, plano grátis até 10k visitas)
- **PostHog** (eventos detalhados, plano grátis generoso)

Métricas importantes a rastrear (ver `sistema-conteudo.md`):
- Taxa de conclusão por missão
- Onde as pessoas abandonam
- Tempo médio por missão
- Streak médio

---

## Estrutura de arquivos final

```
escritorio/
├── public/
│   ├── manifest.json
│   ├── service-worker.js
│   ├── icons/
│   │   ├── icon-72.png
│   │   ├── icon-96.png
│   │   ├── ... (todos os tamanhos)
│   │   └── icon-512.png
│   └── screenshots/
│       ├── home-mobile.png
│       └── home-desktop.png
├── src/
│   ├── App.jsx            ← o código do protótipo
│   ├── main.jsx
│   └── index.css          ← @import "tailwindcss";
├── index.html             ← deste pacote
├── package.json
└── vite.config.js
```

---

## Custo total estimado

Pra começar e validar com 50-100 alunos:
- **Hospedagem (Vercel/Netlify):** R$ 0
- **Banco (Supabase free tier):** R$ 0
- **Domínio próprio (opcional):** ~R$ 40/ano (.com.br no Registro.br)
- **Hospedagem de vídeos:** YouTube unlisted = grátis. Ou Vimeo Plus ~R$ 70/mês se quiser sem anúncios.

Custo mensal pra MVP: **R$ 0 a R$ 70**.

Quando passar de 500 alunos ativos, planejar upgrade: Supabase Pro (US$25/mês) + CDN de vídeo dedicada (~US$10-30/mês dependendo do volume).
