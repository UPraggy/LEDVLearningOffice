# AI-GUIA — Mapa rápido do projeto (leia isto primeiro)

> Objetivo: a IA entende o projeto e sabe **onde procurar** sem ler tudo. Use os caminhos abaixo e abra **só o arquivo que precisa**. Não carregue a pasta inteira.

## O que é
`escritorio-virtual/app` — SPA **React 18 + Vite 5** (PWA). Plataforma de letramento digital para adultos. Sem backend; estado/progresso no `localStorage` via `AppContext`.

Stack: react-router-dom 6, lucide-react (ícones), onnxruntime-web (TTS Piper offline). Sem TypeScript.

## Rodar
```
cd app
npm run dev      # vite --host  → http://localhost:5173
npm run build
npm run gen:scenes    # regenera SVGs interativos  → public/generated/interactive/
npm run gen:missions  # regenera 225 SVGs de missão → public/generated/missions/
npm run gen           # ambos
```

## Conceitos (vocabulário)
- **Módulo**: grupo de trilhas. 5 módulos: `computador` `celular` `mercado` `seguranca` (+ inglês dentro de mercado). Cores em `estrutura.js`.
- **Trilha**: 33 no total. **Missão**: 225 (metadados em `estrutura.js`, conteúdo rico em `data/conteudo/*.js`).
- **Cena interativa**: ilustração SVG paramétrica (viewBox 1000×640) usada na missão, no Arcade e em desafios. 60 builders.
- **Cena de missão**: header SVG (viewBox 1200×675) no topo da tela de missão.
- **Determinístico**: tudo que "sorteia" usa `seedOf(str)` (FNV-like) → mesma entrada, mesma saída.

## Onde procurar (mapa)
| Preciso de… | Arquivo |
|---|---|
| Módulos, trilhas, missões (metadados), cores, troféus | `src/data/estrutura.js` |
| Conteúdo rico de cada missão (passos, quiz, interações) | `src/data/conteudo/*.js` (1 por trilha, schema `CONTEUDO_*`) |
| **Cenas interativas (FONTE ÚNICA)** | `src/data/scene-templates.js` |
| **Cena de header da missão (FONTE ÚNICA)** | `src/data/mission-scene.js` |
| Mapear missão → cena interativa | `src/data/scene-for-mission.js` |
| Pools de Arcade / Desafio da Semana / Relâmpago | `src/data/{arcade,desafio-semana,relampago}-pool.js` |
| Telas (rotas) | `src/components/screens/*.jsx` (Missao, Arcade, Trilhas, …) |
| Roteamento | `src/routes.jsx` |
| Estado global / progresso | `src/components/subComponents/AppContext.jsx` |
| CSS por tela | `src/assets/css/*.css` |
| Scripts geradores de SVG | `scripts/generate-*.mjs` |
| SVGs prontos | `public/generated/{interactive,missions}/` |
| Folhas de contato (inspeção visual) | `public/contact-sheet.html`, `public/contact-missions.html` |
| Docs longas (design, fluxo, backend, roadmap) | `../aboutproject/*.md` |

## Sistema de SVG (regra de ouro)
**Fonte única**: editar SVG = editar o builder em `scene-templates.js` ou `mission-scene.js`. Os arquivos `.svg` em `public/generated/` são **gerados** — depois de mexer no builder, rode `npm run gen:scenes` / `gen:missions`. Nunca edite o `.svg` à mão (será sobrescrito).

Builder usado inline na UI via `buildScene(...)` (`dangerouslySetInnerHTML`) e gravado em disco pelos scripts `.mjs` — mesma string.

### Convenções de design (já aplicadas)
Paleta `PAL` + `shade(hex,p)` em `scene-templates.js`. `<defs>` compartilhado: gradientes 2 cores, `feDropShadow` (sombra suave), sheen (brilho de topo), radial glow. Header com gradiente por módulo + cantos arredondados; painéis com sombra+borda+sheen; pills com gradiente. Helpers reutilizáveis: `card/pill/btn/avatar/bubble/frame/sceneBg`.

## Como adicionar coisas
- **Nova cena interativa**: novo builder em `scene-templates.js` → registrar em `SCENE_BUILDERS`/`SCENE_LABELS` → `npm run gen:scenes`. Plugue em missões via keyword/pool em `scene-for-mission.js`.
- **Nova missão**: metadados em `estrutura.js` + conteúdo em `conteudo/<trilha>.js`. Cena vem automática por `scene-for-mission.js`.
- **Item de Arcade/Desafio**: editar o pool correspondente em `src/data/*-pool.js`.

## Pegadinhas
- Sem TS; ESM puro (imports relativos com extensão `.js`).
- IDs de gradiente/filtro nos SVGs derivam de cor/seed para evitar colisão quando vários SVGs convivem na mesma página.
- Telas de Missão e Onboarding são fullscreen (sem sidebar) — ver `Layout` em `routes.jsx`.
- Progresso fica no `localStorage`; limpar = resetar usuário.

## Estado atual
60 cenas interativas + 225 imagens de missão com o design final (gradientes/sombra/sheen), inspecionadas. Gerador refinado ao máximo.
