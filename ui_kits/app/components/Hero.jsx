/* ORBTI UI Kit — Hero
   The primary marketing surface. Full-bleed orbital-glow background with a
   bottom scrim (mirrors components/sections.css .hero), mono eyebrow pill,
   display-xxl headline, light lead, dual CTA. Exposed as window.Hero. */
function Hero() {
  return (
    <header className="kit-hero">
      <img className="kit-hero-bg" src="../../assets/backgrounds/01-orbital-glow-abstract.png" alt="" aria-hidden="true" />
      <div className="kit-hero-inner">
        <span className="pill pill-filled kit-hero-eyebrow">Serviços · Produtos · Academy · Método ORBIT</span>
        <h1 className="display-xxl kit-hero-headline">
          Agent design.<br />AI engineering.
        </h1>
        <p className="lead kit-hero-lead">
          A ORBTI projeta e engenheira agentes de IA que redefinem operações,
          transformam a experiência do cliente e entregam inteligência estratégica —
          com humanos no comando.
        </p>
        <div className="kit-hero-actions">
          <a className="btn btn-primary btn-xl" href="#">Agendar demonstração →</a>
          <a className="btn btn-secondary btn-xl" href="#">Conhecer os produtos</a>
        </div>
      </div>
    </header>
  );
}
window.Hero = Hero;
globalThis.Hero = Hero;
