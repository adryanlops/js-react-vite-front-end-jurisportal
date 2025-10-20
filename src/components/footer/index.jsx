
import './style.css'
import Logo from "../../assets/logo.jpeg";
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-list">
          <img src={Logo} alt="Logo" />
          <p>Agilidade e controle para seu escritório jurídico.</p>
          <div className="footer-social-media">
            <a href="#" className="footer-link" id="instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="footer-link" id="facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="footer-link" id="whatsapp">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#" className="footer-link" id="whatsapp">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <ul className="footer-list">
          <li>
            <h3>Endereço</h3>
          </li>
          <li>
          R. José de Oliveira Gomes, 111 - Centro, Poá - SP, 08561-300
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <h3>Contatos</h3>
          </li>
          <li>
            <a href="#" className="footer-link">
            (11) 2941-5656
            </a>
          </li>
          <li>
            <a href="http://email:jurisportal@jurisportal.com.br/" className="footer-link">
            jurisportal@jurisportal.com.br
            </a>
          </li>
        </ul>
        <div className="footer-list">
          <h3>Horário de Atendimento</h3>
          <p>2ª a 6ª - 09h às 18h</p>
          <p>Sábado - 10h às 14h</p>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© 2025 Jurispotal. All right reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
