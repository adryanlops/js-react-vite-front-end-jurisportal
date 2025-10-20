import "./style.css";
import { Cards } from "./content-planos/cards";
import { Table } from "./content-planos/table";

function Planos() {
  return (
    <div className="container">
      <h1>Escolha o Plano Ideal</h1>
      <p class="subtitle">Compare nossos planos e selecione a melhor opção para suas necessidades. Todos incluem suporte especializado.</p>
      <div className="mobile-only">
        <Cards />
      </div>

      <table className="plans-table desktop-only">
        <Table />
      </table>
    </div>
  );
}

export default Planos;
