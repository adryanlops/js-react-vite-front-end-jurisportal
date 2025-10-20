import { useEffect } from "react";
import Carousel from "../../../../class/carousel";
import Imagem1 from "../../../../assets/imagem1.jpg";
import Imagem2 from "../../../../assets/imagem2.jpg";
import Imagem3 from "../../../../assets/imagem3.jpg";
import './style.css'

function Services() {
 useEffect(() => {
new Carousel();
}, []);

  return (
    <section className="services-section">
      <div className="services-text">
        <h1>O que faz do Jurisportal a escolha certa para seu escritório?</h1>
        <p>
        Ferramentas práticas e inteligentes para centralizar informações, automatizar tarefas e dar mais agilidade ao seu dia a dia jurídico.
        </p>
      </div>
      <div className="carousel">
        <div className="carousel-wrapper">
          <div className="carousel-item">
            <img src={Imagem1} alt="Imagem 1" />
            <div className="carousel-info">
              <h2>Tudo em um só lugar</h2>
              <p>
                Prazos, publicações, processos e informações concentrados em um
                painel intuitivo. Tenha controle da rotina do seu escritório,
                sem depender de planilhas ou múltiplos sistemas.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Imagem2} alt="Imagem 2" />
            <div className="carousel-info">
              <h2>Produtividade sem burocracia</h2>
              <p>
                O Jurisporta organiza as informações de forma clara, ajudando
                você a reduzir falhas e focar no que realmente importa: advogar.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Imagem3} alt="Imagem 3" />
            <div className="carousel-info">
              <h2>Confiabilidade em cada acesso</h2>
              <p>
                Seus dados ficam seguros na nuvem, com acesso controlado e
                disponibilidade total. Trabalhe com tranquilidade, de qualquer
                lugar e a qualquer hora.
              </p>
            </div>
          </div>
        </div>

        <button className="carousel-prev">❮</button>
        <button className="carousel-next">❯</button>

        <div className="carousel-dots"></div>
      </div>
    </section>
  );
}

export default Services;
