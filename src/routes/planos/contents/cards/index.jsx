import React from 'react';
import './style.css';

export function Cards() {
  return (
    <>
    <div className="plan-card">
        <h2>Essencial</h2>
        <ul>
          <li><span>Usuários</span><span>3</span></li>
          <li><span>Armazenamento</span><span>15 GB</span></li>
          <li><span>Processos</span><span>100</span></li>
          <li><span>Publicações automáticas</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Agenda integrada</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Gestão básica de equipe</span><i class="fa-solid fa-x"></i></li>
          <li><span>Interface completa</span><i class="fa-solid fa-x"></i></li>
          <li><span>Estrutura para equipes médias</span><i class="fa-solid fa-x"></i></li>
          <li><span>Alto desempenho</span><i class="fa-solid fa-x"></i></li>
          <li><span>Operações em larga escala</span><i class="fa-solid fa-x"></i></li>
          <li>
            <span className='valor'> Mensal</span>
            <span><del>R$ 120,00</del> <span className="price">R$ 79,99</span></span>
          </li>
          <li>
            <span className='valor'> Anual</span>
            <span><del>R$ 1.440,00</del> <span className="price">R$ 849,99</span></span>
          </li>
        </ul>
    </div>
    <div className="plan-card">
        <h2>Estratégico</h2>
        <ul>
          <li><span>Usuários</span><span>5</span></li>
          <li><span>Armazenamento</span><span>30 GB</span></li>
          <li><span>Processos</span><span>300</span></li>
          <li><span>Publicações automáticas</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Agenda integrada</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Gestão básica de equipe</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Interface completa</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Estrutura para equipes médias</span><i class="fa-solid fa-x"></i></li>
          <li><span>Alto desempenho</span><i class="fa-solid fa-x"></i></li>
          <li><span>Operações em larga escala</span><i class="fa-solid fa-x"></i></li>
          <li>
            <span className='valor'> Mensal</span>
            <span><del>R$ 150,00 </del> <span className="price">R$ 119,99</span></span>
          </li>
          <li>
            <span className='valor'> Anual</span>
            <span><del>R$ 1.800,00 </del> <span className="price">R$1.199,99 </span></span>
          </li>
        </ul>
     </div>
     <div className="plan-card">
        <h2>Premium</h2>
        <ul>
          <li><span>Usuários</span><span>10</span></li>
          <li><span>Armazenamento</span><span>50 GB</span></li>
          <li><span>Processos</span><span>800</span></li>
          <li><span>Publicações automáticas</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Agenda integrada</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Gestão básica de equipe</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Interface completa</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Estrutura para equipes médias</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Alto desempenho</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Operações em larga escala</span><i class="fa-solid fa-x"></i></li>
          <li>
            <span className='valor'> Mensal</span>
            <span><del>R$200,00</del> <span className="price">R$159,99</span></span>
          </li>
          <li>
            <span className='valor'> Anual</span>
            <span><del>R$2.400,00</del> <span className="price">R$1.599,999</span></span>
          </li>
        </ul>
     </div>
     <div className="plan-card">
        <h2>Executivo</h2>
        <ul>
          <li><span>Usuários</span><span>25</span></li>
          <li><span>Armazenamento</span><span>120 GB</span></li>
          <li><span>Processos</span><span>Ilimitados</span></li>
          <li><span>Publicações automáticas</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Agenda integrada</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Gestão básica de equipe</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Interface completa</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Estrutura para equipes médias</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Alto desempenho</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Operações em larga escala</span><i class="fa-solid fa-circle-check"></i></li>
          <li>
            <span className='valor'> Mensal</span>
            <span><del>R$250,00</del> <span className="price">R$199,99</span></span>
          </li>
          <li>
            <span className='valor'> Anual</span>
            <span><del>R$3.000,00</del> <span className="price">R$1.999,99 </span></span>
          </li>
        </ul>
     </div>
     <div className="plan-card">
        <h2>Alta Corte</h2>
        <ul>
          <li><span>Usuários</span><span>50</span></li>
          <li><span>Armazenamento</span><span>200 GB</span></li>
          <li><span>Processos</span><span>Ilimitados</span></li>
          <li><span>Publicações automáticas</span><i className='confirm' class="fa-solid fa-circle-check"></i></li>
          <li><span>Agenda integrada</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Gestão básica de equipe</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Interface completa</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Estrutura para equipes médias</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Alto desempenho</span><i class="fa-solid fa-circle-check"></i></li>
          <li><span>Operações em larga escala</span><i class="fa-solid fa-circle-check"></i></li>
          <li>
            <span className='valor'> Mensal</span>
            <span><span className="price">R$ 350,00 </span></span>
          </li>
          <li>
            <span className='valor'> Anual</span>
            <span><span className="price">R$ 3.600,00</span></span>
          </li>
        </ul>
     </div>
     </>
  );
}