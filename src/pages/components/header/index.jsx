import './style.css'

function Header() {
  return (
    <header className='header'>
      <nav>
        <div className="logo">
          <a href="/">Jurisportal</a>
        </div>

        {/* <div className="mobile-menu">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div> */}

        <ul className="nav-list">
          {/* <li className="dropdown">
            <a className="drop-btn" href="#">
              Utilitários
            </a>
            <div className="dropdown-menu">
              <a href="/">Link 1</a>
              <a href="/">Link 2</a>
              <a href="/">Link 3</a>
            </div>
          </li> */}
          <li>
            <a className="nav-link" href="#">
              Planos
            </a>
          </li>

          <li>
            <a className="nav-link" href="#">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
