/* ORBTI UI Kit — App shell
   Composes every role component into one product-like ORBTI marketing
   surface: sticky NavBar over a scrollable canvas of Hero → ServicesGrid →
   FrameworkBar → ContactForm → Footer. Reads the role globals exposed by the
   sibling component files. Exposed as window.App. */
function App() {
  const { NavBar, Hero, ServicesGrid, FrameworkBar, ContactForm, Footer } = window;
  return (
    <div className="kit-app" data-theme="dark">
      <NavBar />
      <main id="app-scroll" className="kit-scroll">
        <Hero />
        <ServicesGrid />
        <FrameworkBar />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}
window.App = App;
globalThis.App = App;
