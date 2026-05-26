/* Diário — anotações pessoais com composer + export .md */
import { useState } from 'react';
import { Plus, Download, Trash2 } from 'lucide-react';
import { useApp } from '../subComponents/AppContext.jsx';
import GlobalVar from '../subComponents/GlobalVar.jsx';
import '../../assets/css/Screens.css';

function tempoRel(ts) {
  const dif = Date.now() - ts;
  const dias = Math.floor(dif / 86400000);
  if (dias === 0) return 'hoje';
  if (dias === 1) return 'ontem';
  if (dias < 7) return `${dias} dias`;
  return new Date(ts).toLocaleDateString('pt-BR');
}
function horaCurta(ts) {
  const d = new Date(ts);
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

export default function Diario() {
  const { progresso, addDiario, removerDiario } = useApp();
  const entries = progresso.diario || [];
  const [composing, setComposing] = useState(false);
  const [novo, setNovo] = useState({ title: '', body: '' });

  function salvar() {
    if (!novo.title.trim()) return;
    addDiario(novo);
    setNovo({ title: '', body: '' });
    setComposing(false);
  }
  function exportar() {
    const md = GlobalVar.exportarDiarioMD(progresso);
    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `diario-escritorio-${GlobalVar.diaAtualFunc()}.md`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="screen">
      <div className="hello">
        <div>
          <div className="kicker">{entries.length} anotações · só você lê</div>
          <h1 className="bighi">Seu <em>caderno</em>.</h1>
        </div>
        <button className="btn btn-primary" onClick={() => setComposing(true)}>
          <Plus size={16} /> Nova anotação
        </button>
      </div>
      <p className="lede">Escreva o que você não quer esquecer. As anotações ficam só no seu aparelho — você pode exportar como arquivo.</p>

      {composing && (
        <div className="composer">
          <input className="input" placeholder="Título curto da ideia"
            value={novo.title} onChange={e => setNovo({ ...novo, title: e.target.value })} autoFocus />
          <textarea className="input" placeholder="Escreva o que aprendeu, com suas palavras..."
            value={novo.body} onChange={e => setNovo({ ...novo, body: e.target.value })} />
          <div className="composer-actions">
            <button className="btn btn-primary" onClick={salvar}>Salvar</button>
            <button className="btn btn-ghost" onClick={() => { setComposing(false); setNovo({ title: '', body: '' }); }}>Cancelar</button>
          </div>
        </div>
      )}

      <div className="diary-list">
        {entries.length === 0 && !composing && (
          <div className="empty">
            <div className="empty-ic"><Plus size={22} /></div>
            <h4>Caderno em branco</h4>
            <p>Anotações ficam aqui. Use depois de cada missão pra fixar o que aprendeu.</p>
          </div>
        )}
        {entries.map(e => (
          <article key={e.id} className="diary-card">
            <div className="dc-side">
              <span className="dc-date">{tempoRel(e.ts)}</span>
              <span className="dc-time">{horaCurta(e.ts)}</span>
              <button className="btn btn-ghost btn-sm" style={{ marginTop: 8, padding: '0 8px', minHeight: 30 }}
                onClick={() => { if (confirm('Apagar essa anotação?')) removerDiario(e.id); }}>
                <Trash2 size={12} />
              </button>
            </div>
            <div className="dc-body">
              <h4>{e.title}</h4>
              <p>{e.body}</p>
            </div>
          </article>
        ))}
      </div>

      {entries.length > 0 && (
        <div className="empty" style={{ marginTop: 'var(--s-7)' }}>
          <div className="empty-ic"><Download size={22} /></div>
          <h4>Exportar como arquivo</h4>
          <p>Baixe um <code>.md</code> com todas as anotações. Útil para colar num documento ou imprimir.</p>
          <button className="btn btn-ghost" onClick={exportar}>
            <Download size={14} /> Exportar diário (.md)
          </button>
        </div>
      )}
    </div>
  );
}
