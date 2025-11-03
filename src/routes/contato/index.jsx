import { useState } from "react";
import useContactForm from "./../../services/validacao";
import { ContactContainer } from "./content/ContactContainer";
import { PageTitle } from "./content/PageTitle";
import "./style.css";

function Contato() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { errors, handleChange, handleSubmit } = useContactForm(form, setForm);

  return (
    <div className="container">
      <PageTitle />

      <main className="main-container">
        <ContactContainer />

        <section className="contact-form-container">
          <h3>Contatar</h3>

          <form
            action={"https://formsubmit.co/lucasjurisportal@gmail.com"}
            method="POST"
            id="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={`input-group ${errors.name ? "invalid" : "valid"}`}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className="error">
                  <i className="fa-solid fa-circle-exclamation"></i>{" "}
                  {errors.name}
                </span>
              )}
            </div>

            <div
              className={`input-group ${errors.email ? "invalid" : "valid"}`}
            >
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error">
                  <i className="fa-solid fa-circle-exclamation"></i>{" "}
                  {errors.email}
                </span>
              )}
            </div>
            <div
              className={`input-group ${errors.subject ? "invalid" : "valid"}`}
            >
              <label htmlFor="subject">Assunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
              />
              {errors.subject && (
                <span className="error">
                  <i className="fa-solid fa-circle-exclamation"></i>{" "}
                  {errors.subject}
                </span>
              )}
            </div>
            <div
              className={`input-group ${errors.message ? "invalid" : "valid"}`}
            >
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && (
                <span className="error">
                  <i className="fa-solid fa-circle-exclamation"></i>{" "}
                  {errors.message}
                </span>
              )}
            </div>

            <button type="submit">Enviar Mensagem</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Contato;
