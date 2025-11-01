import React from 'react';
import { View } from 'react-native';

import './style.css';

export function ContactContainer() {
  return (

    <section className="contacts-container">
    <h3>Entre em contato</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
      iste.
    </p>
    <div className="cards-container">
      <a
        href="tel:+5511956940628"
        target="_blank"
        className="contact-card"
      >
        <div className="card-icon">
          <i class="fa-solid fa-phone"></i>
        </div>
        <div className="card-infos">
          <p>Telefone</p>
          <span>(11) 92342-9234</span>
        </div>
      </a>
      <a
        href="https://www.google.com/maps/place/Rua+Vict%C3%B3rio+Santim,+2776+-+Vila+Carmosina,+S%C3%A3o+Paulo+-+SP,+08290-001/@-23.5584939,-46.4520848,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce67ca09670f95:0xac4c0287c0295e10!8m2!3d-23.5584939!4d-46.4495099!16s%2Fg%2F11vtb9kc0f?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        className="contact-card"
      >
        <div className="card-icon">
          <i class="fa-solid fa-location-dot"></i>
        </div>
        <div className="card-infos">
          <p>Localização</p>
          <span>Rua, 123 - Baixo, Cidade - Estado</span>
        </div>
      </a>
      <a
        href="mailto:adylopesk8@gmail.com"
        target="_blank"
        className="contact-card"
      >
        <div className="card-icon">
          <i class="fa-solid fa-envelope"></i>
        </div>
        <div className="card-infos">
          <p>E-mail</p>
          <span>email@email.com</span>
        </div>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5511956940628"
        target="_blank"
        className="contact-card"
      >
        <div className="card-icon">
          <i class="fa-brands fa-whatsapp"></i>
        </div>
        <div className="card-infos">
          <p>WhatsApp</p>
          <span>(11) 92342-9234</span>
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