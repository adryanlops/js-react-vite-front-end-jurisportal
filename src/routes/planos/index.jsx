import "./style.css";
import { Cards } from "./contents/cards";
import { Table } from "./contents/table";
import { Faq } from "./contents/faq";

function Planos() {
  return (
    <main>
      <section className="container-plans">
        <h1>Escolha o Plano Ideal</h1>
        <p class="subtitle">
          Compare nossos planos e selecione a melhor opção para suas
          necessidades. Todos incluem suporte especializado.
        </p>
        <div className="mobile-only">
          <Cards />
        </div>

        <table className="plans-table desktop-only">
          <Table />
        </table>
        
      </section>
      <Faq />
    </main>
  );
}

export default Planos;
