
import './style.css';
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero-section">
      <div className="banner-bg"></div>
      <div className="initial-text">
        <h1>Jurisportal</h1>
        <h2>Menos burocracia. Mais advocacia.</h2>
        <p>
        O Jurisportal foi criado para tornar o dia a dia dos escritórios mais ágil e organizado. Nossa plataforma centraliza prazos, traz publicações, processos e informações em um único ambiente intuitivo, ajudando você a reduzir tarefas repetitivas, evitar falhas e ganhar tempo para focar no que realmente importa: advogar.
        </p>
        <Link className='button' to="/planos">Nossos Planos</Link>
      </div>
    </section>
  );
}

export default Hero;
