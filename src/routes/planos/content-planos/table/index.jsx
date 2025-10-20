import React from 'react';
import'./style.css';

export function Table() {
  return (
    <>
    <thead>
        <tr>
          <th>Recursos / Planos</th>
          <th>Essencial</th>
          <th>Estratégico</th>
          <th>Premium</th>
          <th>Executivo</th>
          <th>Alta Corte</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Usuários</td>
          <td>3</td>
          <td>5</td>
          <td>10</td>
          <td>25</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Armazenamento</td>
          <td>15 GB</td>
          <td>30 GB</td>
          <td>50 GB</td>
          <td>120 GB</td>
          <td>200 GB</td>
        </tr>
        <tr>
          <td>Processos</td>
          <td>100</td>
          <td>300</td>
          <td>800</td>
          <td>Ilimitados</td>
          <td>Ilimitados</td>
        </tr>
        <tr>
          <td>Publicações automáticas</td>
          <td><i class="fa-solid fa-circle-check"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
        </tr>
        <tr>
          <td>Agenda integrada</td>
          <td><i class="fa-solid fa-circle-check"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
        </tr>
        <tr>
          <td>Gestão básica de equipe</td>
          <td><i class="fa-solid fa-x"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
        </tr>
        <tr>
          <td>Painel completo</td>
          <td><i class="fa-solid fa-x"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
        </tr>
        <tr>
          <td>Estrutura para equipes médias</td>
          <td><i class="fa-solid fa-x"></i></td>
          <td><i class="fa-solid fa-x"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
        </tr>
        <tr>
          <td>Alto desempenho</td>
          <td><i class="fa-solid fa-x"></i></td>
          <td><i class="fa-solid fa-x"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
        </tr>
        <tr>
          <td>Operações em larga escala</td>
          <td><i class="fa-solid fa-x"></i></td>
          <td><i class="fa-solid fa-x"></i></td>
          <td><i class="fa-solid fa-x"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
          <td><i class="fa-solid fa-circle-check"></i></td>
        </tr>
        <tr>
          <td><strong>Preço Mensal</strong></td>
          <td><div className='price'><del>R$ 120,00</del> <span>R$ 79,99</span></div></td>
          <td><div className='price'><del>R$ 150,00</del> <span>R$ 119,99</span></div></td>
          <td><div className='price'><del>R$ 200,00</del> <span>R$ 159,99</span></div></td>
          <td><div className='price'><del>R$ 250,00</del> <span>R$ 199,99</span></div></td>
          <td><div className='price'><span>R$ 350,00</span></div></td>
        </tr>
        <tr>
          <td><strong>Preço Anual</strong></td>
          <td><div className='price'><del>R$ 1.440,00</del> <span>R$ 849,99</span></div></td>
          <td><div className='price'><del>R$ 1.800,00</del> <span>R$ 1.199,99</span></div></td>
          <td><div className='price'><del>R$ 2.400,00</del> <span>R$ 1.599,99</span></div></td>
          <td><div className='price'><del>R$ 3.000,00</del> <span>R$ 1.999,99</span></div></td>
          <td><div className='price'><span className="price">R$ 3.600,00</span></div></td>
        </tr>
      </tbody>    
    </>
  );
}