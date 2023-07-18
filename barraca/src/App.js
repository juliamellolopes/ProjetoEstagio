import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { IoAddOutline } from 'react-icons/io5';
import FruitList from './componentes/FruitList/FruitList'
import './App.css';

function App() {
  const [isFirstTime, setIsFirstTime] = useState(true);
  const fruits = [
    { id: 1, name: 'Maçã', price: 2.99, quantity: 10 },
    { id: 2, name: 'Banana', price: 1.99, quantity: 15 },
    { id: 3, name: 'Laranja', price: 0.99, quantity: 8 },
  ];

  const handleCadastrarFruta = () => {
    setIsFirstTime(false);
  };

  return (
    <div className="phone">
      <BrowserRouter>
        <div className="screen">
          <Routes>
            <Route
              path="/"
              element={
                <div className="welcome">
                  <h2 className="welcome-text">Cadastre sua primeira fruta</h2>
                  <button className="welcome-button" onClick={handleCadastrarFruta}>
                    <IoAddOutline className="button-icon" /> Cadastrar Fruta
                  </button>
                </div>
              }
            />
            <Route
              path="/fruits"
              element={
                <>
                  <div className="search-bar">
                    <i className="search-bar-icon fas fa-search"></i>
                    <input className="search-bar-input" type="text" placeholder="Pesquisar Fruta" />
                  </div>
                  <div className="fruit-list">
                    <FruitList fruits={fruits} />
                  </div>
                </>
              }
            />
            <Route 
              path="/cadastro"
              element={
                <div>
                  
                </div>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
