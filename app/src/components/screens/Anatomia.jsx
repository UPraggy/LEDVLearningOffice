/* Anatomia — explicação visual da hierarquia + regras de XP, ofensiva, troféus. */
import { ChevronDown, Star, Flame, Trophy, Shield } from 'lucide-react';
import '../../assets/css/Screens.css';

export default function Anatomia() {
  return (
    <div className="screen">
      <div className="hello">
        <div>
          <div className="kicker">Como o conteúdo é organizado</div>
          <h1 className="bighi">A <em>anatomia</em> de uma missão.</h1>
        </div>
      </div>
      <p className="lede">Tudo no Escritório segue a mesma hierarquia. Saber disso ajuda você a se orientar.</p>

      <div className="anatomy-diag">
        <div className="ad-level ad-1">
          <span className="ad-tag">Nível 1</span>
          <strong>Módulo</strong>
          <p>Uma área de conhecimento (Computador, Celular, Mercado, Segurança, Inglês).</p>
          <div className="ad-children">5 módulos no total</div>
        </div>
        <div className="ad-arrow"><ChevronDown /></div>

        <div className="ad-level ad-2">
          <span className="ad-tag">Nível 2</span>
          <strong>Trilha</strong>
          <p>Um caminho dentro de um módulo. Tem dificuldade própria (Iniciante, Intermediário, Avançado).</p>
          <div className="ad-children">2–11 trilhas por módulo</div>
        </div>
        <div className="ad-arrow"><ChevronDown /></div>

        <div className="ad-level ad-3">
          <span className="ad-tag">Nível 3</span>
          <strong>Missão</strong>
          <p>Uma aula curta com prática. Você cumpre uma de cada vez. A última de cada trilha é o desafio chefe.</p>
          <div className="ad-children">5–14 missões por trilha</div>
        </div>
        <div className="ad-arrow"><ChevronDown /></div>

        <div className="ad-level ad-4">
          <span className="ad-tag">Nível 4</span>
          <strong>Etapas da missão</strong>
          <p>Cada missão segue 4 etapas (5 com "Jogar" quando há interações).</p>
          <div className="ad-stages">
            <div><span>1</span> Aula <small>texto curto</small></div>
            <div><span>2</span> Jogar <small>mini-jogos</small></div>
            <div><span>3</span> Prática <small>checklist</small></div>
            <div><span>4</span> Desafio <small>tarefa real</small></div>
            <div><span>5</span> Validação <small>honestidade</small></div>
          </div>
        </div>
      </div>

      <section className="block">
        <div className="block-head"><h2>Como você ganha XP e troféus</h2></div>
        <div className="anatomy-rules">
          <div className="ar-item">
            <div className="ar-ic"><Star size={22} color="var(--coral)" /></div>
            <div>
              <strong>XP a cada missão concluída</strong>
              <p>30–40 XP (iniciante), 50–70 (médio), 80–100 (avançado), 100–150 (projeto chefe).</p>
            </div>
          </div>
          <div className="ar-item">
            <div className="ar-ic"><Flame size={22} color="var(--streak)" fill="currentColor" /></div>
            <div>
              <strong>Ofensiva</strong>
              <p>1 missão por dia mantém a chama. Pular 1 dia consome 1 escudo automaticamente.</p>
            </div>
          </div>
          <div className="ar-item">
            <div className="ar-ic"><Trophy size={22} color="var(--honey)" /></div>
            <div>
              <strong>Troféus por marco e por domínio</strong>
              <p>Marcos de missões (1, 10, 50, 100), ofensiva (3, 7, 30, 100 dias), trilhas concluídas, módulos dominados.</p>
            </div>
          </div>
          <div className="ar-item">
            <div className="ar-ic"><Shield size={22} color="var(--sage)" /></div>
            <div>
              <strong>Nível de carreira</strong>
              <p>Estagiário → Assistente Júnior → Assistente Pleno → Analista → Analista Sênior → Coordenador. XP determina o nível.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="block-head"><h2>Onde está cada coisa</h2></div>
        <ul className="anatomy-where">
          <li><strong>Início</strong> — saudação, ofensiva, missão do dia, desafio relâmpago, caixa do dia.</li>
          <li><strong>Módulos</strong> — 5 caminhos coloridos para escolher.</li>
          <li><strong>Agenda</strong> — heatmap de 8 semanas e missões agendadas.</li>
          <li><strong>Mentor</strong> — mensagens do Carlos Mendes (mentor virtual).</li>
          <li><strong>Diário</strong> — suas anotações de aprendizado, exportáveis em <code>.md</code>.</li>
          <li><strong>Troféus</strong> — sua coleção por categoria.</li>
          <li><strong>Perfil</strong> — nome, nível, XP, atalho de exportar progresso.</li>
          <li><strong>Configurações</strong> — fonte, contraste, público, som, reset.</li>
        </ul>
      </section>
    </div>
  );
}
