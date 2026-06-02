/* ORBTI UI Kit — ContactForm (the input / composer surface)
   A working lead-capture form: controlled inputs, inline validation, and a
   success state. Mirrors components/inputs.css (coral focus ring, error
   border). Exposed as window.ContactForm. */
function ContactForm() {
  const [form, setForm] = React.useState({ nome: '', email: '', msg: '' });
  const [touched, setTouched] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const emailValid = /\S+@\S+\.\S+/.test(form.email);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (form.nome && emailValid) setSent(true);
  };

  return (
    <section className="kit-section kit-cta">
      <div className="kit-cta-inner">
        <span className="section-label">Vamos conversar</span>
        <h2 className="display-l">Agende uma demonstração.</h2>
        <p className="lead">Resultados reais — não demos bonitas. Conte sobre o seu desafio de operações.</p>

        {sent ? (
          <div className="kit-success" role="status">
            <span className="badge-dot" /> Recebemos, {form.nome.split(' ')[0]}! Retornamos em até 1 dia útil.
          </div>
        ) : (
          <form className="kit-form" onSubmit={submit} noValidate>
            <div className="kit-field">
              <label className="form-label" htmlFor="nome">Nome</label>
              <input id="nome" className={'input' + (touched && !form.nome ? ' is-error' : '')}
                placeholder="Como podemos te chamar?" value={form.nome} onChange={set('nome')} />
            </div>
            <div className="kit-field">
              <label className="form-label" htmlFor="email">E-mail corporativo</label>
              <input id="email" type="email" className={'input' + (touched && !emailValid ? ' is-error' : '')}
                placeholder="voce@empresa.com" value={form.email} onChange={set('email')} />
              {touched && !emailValid && <p className="kit-error">Confira o formato do e-mail.</p>}
            </div>
            <div className="kit-field kit-field-full">
              <label className="form-label" htmlFor="msg">Desafio</label>
              <textarea id="msg" className="kit-textarea" placeholder="Que operação você quer levar para agentes de IA?"
                value={form.msg} onChange={set('msg')} />
            </div>
            <button className="btn btn-primary btn-xl" type="submit">Agendar demonstração →</button>
          </form>
        )}
      </div>
    </section>
  );
}
window.ContactForm = ContactForm;
globalThis.ContactForm = ContactForm;
