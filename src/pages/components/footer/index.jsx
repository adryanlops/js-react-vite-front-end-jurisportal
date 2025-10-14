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
          Rua Francisco Ferreira Lopes, 151 - 1º andar - CEP 08561-050
          POÁ - SP 
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
          <p>2a a 6a. feira - das 10 as 20h.</p>
          <p>Sábados: Das 10 as 17 hs.</p>
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
