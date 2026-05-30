# Sugestões de Games — futura guia "Jogos"

Jogos **simples**, ligados ao conteúdo, reaproveitando o que o app já tem
(pools do Arcade, cenas SVG em `/generated/interactive/`, vocabulário de Inglês,
SRS, atalhos). Ordenados por **facilidade de implementar** (esforço ↑).

Legenda esforço: 🟢 baixo · 🟡 médio · 🔴 alto.

| # | Jogo | Módulo(s) | Reaproveita | Esforço |
|---|------|-----------|-------------|---------|
| 1 | Caça ao Golpe | Segurança | cenas wpp-golpe, sms-banco, email-phishing | 🟡 |
| 2 | Liga-Liga (pares) | Inglês, Computador | vocabulário EN↔PT, atalhos↔função | 🟢 |
| 3 | Ordene os Passos | Computador, Celular, Mercado | passos de Pix/anexo/fórmula | 🟡 |
| 4 | Mestre dos Atalhos | Computador | "aperte Ctrl+C p/ Copiar" | 🟢 |
| 5 | Verdade ou Mito relâmpago | Todos | pool `verdade_mito` do Arcade | 🟢 |
| 6 | Complete a Palavra (EN) | Inglês | vocabulário de Inglês | 🟢 |
| 7 | Que tela é essa? | Computador, Celular | SVGs de cenas/ícones existentes | 🟡 |
| 8 | Planilha Maluca (mini-Excel) | Mercado | cena excel-soma, =SOMA() | 🟡 |
| 9 | Revisão Relâmpago (flashcards) | Todos | sistema SRS já implementado | 🟢 |
| 10 | Caça-Erro dedicado | Computador, Mercado | pool `acha_o_erro` do Arcade | 🟢 |

---

## Detalhes

### 1. Caça ao Golpe (Spot the Scam) 🟡
Mostra um print (SMS/WhatsApp/e-mail) e o jogador **toca nas pistas suspeitas**:
URL falsa, urgência ("AGORA!"), erro de português, remetente estranho.
Acertou todas as pistas → ganha XP. Ótimo p/ Segurança; já há cenas prontas.

### 2. Liga-Liga (Matching pairs) 🟢
Duas colunas embaralhadas; ligar termo ↔ definição. Variações:
`Ctrl+C ↔ Copiar`, `apple ↔ maçã`, `@ ↔ arroba`. Treina memória e vocabulário.

### 3. Ordene os Passos (Sequence builder) 🟡
Arrastar cartões para a ordem correta de uma tarefa real: *fazer um Pix*,
*anexar arquivo no e-mail*, *formatar célula no Excel*. Ensina processo, não só fato.

### 4. Mestre dos Atalhos 🟢
Aparece um comando ("Copiar") e o jogador **pressiona a combinação** (Ctrl+C).
Cronômetro + streak. Só teclado; barato de fazer.

### 5. Verdade ou Mito relâmpago 🟢
Reusa o tipo `verdade_mito` do Arcade, mas em **modo sobrevivência**:
acerte o máximo seguido; 1 erro encerra. Placar pessoal (recorde).

### 6. Complete a Palavra (EN) 🟢
Dá a tradução em PT e letras embaralhadas/lacunas; jogador completa a palavra
em inglês. Forca leve, sem penalidade dura — foco em vocabulário.

### 7. Que tela é essa? 🟡
Mostra um SVG (tela/ícone) e pergunta "o que é isto?" ou "onde você clicaria?".
Reaproveita a biblioteca de cenas. Reconhecimento visual de interface.

### 8. Planilha Maluca (mini-Excel) 🟡
Célula pede o resultado de `=SOMA(A1:A3)` com os valores visíveis; jogador digita.
Sobe dificuldade (SE, MÉDIA, %). Liga direto ao módulo Mercado/Excel.

### 9. Revisão Relâmpago (flashcards) 🟢
Embrulha o **SRS já existente** como jogo: vira o cartão, "acertei/errei",
com vidas e barra de progresso. Reforço espaçado com cara de jogo.

### 10. Caça-Erro dedicado 🟢
Tira o `acha_o_erro` de dentro do Arcade e dá uma tela própria com níveis
(config errada, fórmula quebrada, link suspeito). Bom p/ Computador e Mercado.

---

## Recomendação de primeira leva (mais barato × mais impacto)
1. **Liga-Liga** (#2) — base reutilizável p/ qualquer par de dados.
2. **Mestre dos Atalhos** (#4) — divertido e único 100% teclado.
3. **Revisão Relâmpago** (#9) — só veste o SRS que já existe.

Esses três compartilham um mesmo "casco" de tela de jogo (timer, vidas, placar,
XP no fim) que depois serve aos demais.
