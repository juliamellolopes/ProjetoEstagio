import React from 'react';

function FruitList({ fruits }) {
  return (
    <div>
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
          </div>
        </div>
      ))}
    </div>
  );
}

export default FruitList;
