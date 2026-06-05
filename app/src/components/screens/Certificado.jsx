import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Printer } from 'lucide-react';
import { MODULOS } from '../../data/estrutura.js';
import { useApp } from '../subComponents/AppContext.jsx';
import GlobalVar from '../subComponents/GlobalVar.jsx';
import { MarcaLockup } from '../subComponents/Marca.jsx';
import '../../assets/css/Certificado.css';

/** Data de HOJE em DD/MM/AAAA usando o dia LOCAL (não UTC). */
function dataHojeLocal() {
  const d = new Date();
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
}

export default function Certificado() {
  const { modId } = useParams();
  const { progresso } = useApp();
  const modulo = MODULOS.find(m => m.id === modId);

  // Portão: só quem concluiu 100% do módulo acessa o certificado.
  if (!modulo || !GlobalVar.moduloCompleto(progresso, modId)) {
    return <Navigate to="/modulos" replace />;
  }

  const nome = (progresso?.user?.nome || '').trim() || 'Aluno(a)';
  const { horasFmt } = GlobalVar.cargaHorariaModulo(modId);
  const data = dataHojeLocal();
  const cor = modulo.cor;

  return (
    <main className="screen">
      <div className="cert-wrap" style={{ '--cert-cor': cor }}>
        {/* Ações — escondidas na impressão */}
        <div className="cert-actions no-print">
          <Link to={`/modulo/${modId}`} className="btn btn-ghost btn-sm">
            <ArrowLeft size={14} /> Voltar ao módulo
          </Link>
          <button type="button" className="btn btn-primary btn-sm" onClick={() => window.print()}>
            <Printer size={14} /> Baixar / Imprimir certificado
          </button>
        </div>

        {/* A folha */}
        <section className="cert-sheet" role="img"
          aria-label={`Certificado de conclusão do módulo ${modulo.nome} por ${nome}`}>
          <div className="cert-halo" />
          <div className="cert-frame" />

          <div className="cert-inner">
            <div className="cert-top">
              <MarcaLockup />
            </div>

            <div style={{ marginTop: 'var(--s-5)' }}>
              <span className="cert-kicker">Certificado de Conclusão</span>
              <h1 className="cert-titulo" style={{ marginTop: 'var(--s-2)' }}>
                Módulo concluído com dedicação
              </h1>
            </div>

            <div style={{ marginTop: 'var(--s-5)' }}>
              <p className="cert-modulo" style={{ marginBottom: 'var(--s-3)' }}>
                Certificamos que
              </p>
              <p className="cert-nome">{nome}</p>
              <div className="cert-nome-rule" />
              <p className="cert-modulo" style={{ marginTop: 'var(--s-4)' }}>
                concluiu integralmente o módulo <strong>{modulo.nome}</strong> do
                Escritório Virtual, desenvolvendo autonomia e confiança no uso das
                ferramentas digitais do dia a dia.
              </p>
            </div>

            <div className="cert-rodape">
              <div className="cert-dado">
                <span className="rotulo">Carga horária</span>
                <span className="valor">{horasFmt}</span>
              </div>

              <div className="cert-selo" aria-hidden="true">
                <span>Escritório<br />Virtual</span>
              </div>

              <div className="cert-dado">
                <span className="rotulo">Concluído em</span>
                <span className="valor">{data}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
