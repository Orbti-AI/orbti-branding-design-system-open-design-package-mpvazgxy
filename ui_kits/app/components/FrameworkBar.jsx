/* ORBTI UI Kit — FrameworkBar
   The proprietary ORBIT method expressed as labeled letter chips
   (mirrors components/sections.css .framework-bar). Exposed as
   window.FrameworkBar. */
function FrameworkBar() {
  const steps = [
    { l: 'O', k: 'Observar', d: 'Mapear o processo real, não o ideal.' },
    { l: 'R', k: 'Repensar', d: 'Redesenhar o fluxo para agentes.' },
    { l: 'B', k: 'Build', d: 'Construir os agentes sob medida.' },
    { l: 'I', k: 'Integrar', d: 'Conectar aos sistemas e ao time.' },
    { l: 'T', k: 'Treinar', d: 'Capacitar humanos no comando.' },
  ];
  return (
    <section className="kit-section">
      <header className="kit-section-head">
        <span className="section-label">Método proprietário</span>
        <h2 className="display-l">ORBIT — como entregamos resultados reais.</h2>
      </header>
      <div className="kit-framework">
        {steps.map((s) => (
          <div className="kit-fw-step" key={s.l}>
            <span className="kit-fw-letter">{s.l}</span>
            <div>
              <div className="label-s">{s.k}</div>
              <p className="body-s">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.FrameworkBar = FrameworkBar;
globalThis.FrameworkBar = FrameworkBar;
