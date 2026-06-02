/* ORBTI UI Kit — ServicesGrid (the product rail / list surface)
   Renders the three ORBTI service pillars (Core, Pulse, Horizon) as
   accent-bar cards, each with its real orbital SVG icon from assets/icons.
   Mirrors components/cards.css .card-accent / .card-pillar.
   ServiceCard is the per-item component; ServicesGrid is the rail.
   Exposes window.ServiceCard and window.ServicesGrid. */
function ServiceCard({ icon, name, label, body, tags }) {
  return (
    <article className="card card-accent kit-service">
      <img className="kit-service-icon" src={icon} width="48" height="48" alt={name + ' icon'} />
      <div className="card-label">{label}</div>
      <h3 className="card-title">{name}</h3>
      <p className="card-body">{body}</p>
      <div className="kit-service-tags">
        {tags.map((t) => <span key={t} className="pill pill-s">{t}</span>)}
      </div>
    </article>
  );
}

function ServicesGrid() {
  const services = [
    { name: 'Core', label: 'Serviço · Operações', icon: '../../assets/icons/icon-orbti-core.svg',
      body: 'Agentes de IA que automatizam processos operacionais de ponta a ponta — desenhados para agentes, com humanos no comando.',
      tags: ['Automação', 'Workflows', 'Back-office'] },
    { name: 'Pulse', label: 'Serviço · Experiência', icon: '../../assets/icons/icon-orbti-pulse.svg',
      body: 'Agentes para a experiência do cliente: atendimento, suporte e CX em escala, com a voz da sua marca.',
      tags: ['Atendimento', 'CX', 'Escala'] },
    { name: 'Horizon', label: 'Serviço · Inteligência', icon: '../../assets/icons/icon-orbti-horizon.svg',
      body: 'Agentes para inteligência estratégica — análise, BI e decisão assistida que olham além do operacional.',
      tags: ['BI', 'Estratégia', 'Decisão'] },
  ];
  return (
    <section className="kit-section">
      <header className="kit-section-head">
        <span className="section-label">Serviços</span>
        <h2 className="display-l">Três frentes. Profundidade real em cada uma.</h2>
        <p className="lead">Core, Pulse e Horizon — entregues como projetos sob medida para cada cliente.</p>
      </header>
      <div className="kit-services-grid">
        {services.map((s) => <ServiceCard key={s.name} {...s} />)}
      </div>
    </section>
  );
}
window.ServiceCard = ServiceCard;
window.ServicesGrid = ServicesGrid;
globalThis.ServiceCard = ServiceCard;
globalThis.ServicesGrid = ServicesGrid;
