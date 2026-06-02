/* ORBTI UI Kit — NavBar
   Sticky blur navigation. Mirrors design-system/components/nav.css:
   translucent bg + blur + hairline border once scrolled, animated coral
   underline on links, coral primary CTA. Exposed as window.NavBar. */
function NavBar() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('app-scroll');
    const onScroll = () => setScrolled((el ? el.scrollTop : window.scrollY) > 8);
    const target = el || window;
    target.addEventListener('scroll', onScroll);
    return () => target.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Serviços', 'Produtos', 'Academy', 'Framework'];

  return (
    <nav className={'kit-nav' + (scrolled ? ' is-scrolled' : '')} aria-label="Menu principal">
      <a className="kit-nav-logo" href="#" aria-label="ORBTI — início">
        <img src="../../assets/logos/orbti-wordmark-light.svg" alt="ORBTI" height="22" />
      </a>
      <div className="kit-nav-links">
        {links.map((l) => (
          <a key={l} className="kit-nav-link" href="#">{l}</a>
        ))}
      </div>
      <div className="kit-nav-actions">
        <a className="btn btn-ghost btn-m" href="#">Entrar</a>
        <a className="btn btn-primary btn-m" href="#">Agendar demo →</a>
      </div>
    </nav>
  );
}
window.NavBar = NavBar;
globalThis.NavBar = NavBar;
