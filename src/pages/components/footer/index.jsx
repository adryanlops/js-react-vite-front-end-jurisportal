import "./style.css";
import Logo from "../../../assets/logo.jpeg";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contacts">
          <img src={Logo} alt="" />
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
            <h3>Products</h3>
          </li>
          <li>
            <a href="#" className="footer-link">
              App
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Desktop
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Cloud
            </a>
          </li>
        </ul>
        <div className="footer-subscribe">
          <h3>Horário de atendimento</h3>
          <p>2ª a 6ª - 09h às 18h</p>
          <p>Sábado - 10h às 14h</p>
          <div className="input-group">
            <input type="email" id="email" />
            <button>
              <i className="fa-regular fa-envelope"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© 2025 Jurispotal. All right reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
