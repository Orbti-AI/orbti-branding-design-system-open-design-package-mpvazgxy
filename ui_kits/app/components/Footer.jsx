/* ORBTI UI Kit — Footer
   4-column footer (brand + link columns) mirroring components/sections.css
   .footer. Exposed as window.Footer. */
function Footer() {
  const cols = [
    { h: 'Serviços', items: ['Core', 'Pulse', 'Horizon'] },
    { h: 'Produtos', items: ['CRM', 'Academy'] },
    { h: 'Empresa', items: ['Sobre', 'Framework', 'Contato'] },
  ];
  return (
    <footer className="kit-footer">
      <div className="kit-footer-brand">
        {/* Cream tile leads the brand across the system (DESIGN.md §8); the
           adjacent copy carries the name, so the full tile works as a badge. */}
        <img src="../../assets/logos/orbti-logo.png" alt="ORBTI"
             style={{ height: '44px', width: 'auto', borderRadius: 'var(--radius-m)' }} />
        <p className="body-s">Agentes de IA especializados. Desenhados para agentes, com humanos no comando.</p>
      </div>
      {cols.map((c) => (
        <div className="kit-footer-col" key={c.h}>
          <h5>{c.h}</h5>
          {c.items.map((i) => <a key={i} href="#">{i}</a>)}
        </div>
      ))}
      <div className="kit-footer-bottom">
        <span>© 2026 ORBTI</span>
        <span className="mono">Método ORBIT · Open Source</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
globalThis.Footer = Footer;
