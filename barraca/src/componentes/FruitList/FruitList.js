import React from 'react';
import { FaDollarSign, FaCog } from 'react-icons/fa';

function FruitList({ fruits }) {
  return (
    <div>
      <h2>Listagem de Frutas</h2>
      {fruits.map((fruit) => (
        <div key={fruit.id} className="fruit-item">
          <div className="fruit-info">
            <div className="fruit-name">{fruit.name}</div>
            <div className="fruit-price">
              <i className="fas fa-dollar-sign"></i> {fruit.price}
            </div>
            <div className="fruit-quantity">{fruit.quantity} em estoque</div>
          </div>
          <div className="fruit-options">
            <i className="fas fa-cog"></i>
            <div className="options-menu">
              <div className="option">Editar</div>
              <div className="option">Excluir</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FruitList;
