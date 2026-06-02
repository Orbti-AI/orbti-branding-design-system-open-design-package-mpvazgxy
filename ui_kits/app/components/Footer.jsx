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
        <img src="../../assets/logos/orbti-wordmark-light.svg" alt="ORBTI" height="22" />
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
