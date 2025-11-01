import React from "react";

export function ContactContainer() {
  return (
    <section className="contacts-container">
      <h3>Entre em contato</h3>
      <div className="cards-container">
        <a href="tel:+551129415656" target="_blank" className="contact-card">
          <div className="card-icon">
            <i class="fa-solid fa-phone"></i>
          </div>
          <div className="card-infos">
            <p>Telefone</p>
            <span>(11) 2941-5656 </span>
          </div>
        </a>
        <a
          href="https://www.google.com/maps/place/R.+Jos%C3%A9+de+Oliveira+Gomes,+111+-+Centro,+Po%C3%A1+-+SP,+08561-300/@-23.5261184,-46.3448927,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce7ae09448acb9:0xbc02ee2a5654a6eb!8m2!3d-23.5261184!4d-46.3423178!16s%2Fg%2F11rwmhk5yy?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          className="contact-card"
        >
          <div className="card-icon">
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <div className="card-infos">
            <p>Localização</p>
            <span>R. José de Oliveira Gomes, 111 - Centro</span>
          </div>
        </a>
        <a
          href="mailto:lucasjurisportal@gmail.com"
          target="_blank"
          className="contact-card"
        >
          <div className="card-icon">
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div className="card-infos">
            <p>E-mail</p>
            <span>lucasjurisportal@gmail.com</span>
          </div>
        </a>
        <a
          href="https://wa.me/message/KLQCLQJGMBDIJ1"
          target="_blank"
          className="contact-card"
        >
          <div className="card-icon">
            <i class="fa-brands fa-whatsapp"></i>
          </div>
          <div className="card-infos">
            <p>WhatsApp</p>
            <span>(11) 93177-0000</span>
          </div>
        </a>
      </div>
      <h4> Nos siga nas redes sociais</h4>
      <div className="socialmedia-icons">
        <a href="" className="icon-link linkedin">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="" className="icon-link facebook">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="" className="icon-link instagram">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
    </section>
  );
}
