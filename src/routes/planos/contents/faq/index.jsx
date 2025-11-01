import "./style.css";
import { useAccordion } from "../../../../services/useAccordion";

export function Faq() {
    const { activeIndex, toggleSection } = useAccordion();
  
    const items = [
      { title: "Posso trocar de plano a qualquer momento?", content: "Sim, basta solicitar a migração pelo suporte." },
      { title: "Os dados ficam salvos na nuvem?", content: "Sim, o Jurisportal utiliza armazenamento seguro em servidores nacionais." },
      { title: "O que acontece se eu atrasar o pagamento?", content: "O sistema é pausado temporariamente e reativado após o pagamento." },
      { title: "Há custo de instalação?", content: "Nenhum. Tudo é feito diretamente pelo navegador." },
    ];
  
    return (
      <section className="container-faq">
        <h1>Perguntas Frequentes</h1>
        <div className="faq-section">
        {items.map((item, index) => (

          <div key={index} className="section">

            <div className="titulo" onClick={() => toggleSection(index)}>
              <h3>{item.title}</h3>
              <p className={activeIndex === index ? "arrow rotate" : "arrow"}>❯</p>
            </div>

            <p className={activeIndex === index ? "show" : "hide"}>
              {item.content}
            </p>
          </div>

        ))}
        </div>
      </section>
    );
  }
