import React, { useState } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import './App.css';

function App() {
  const [isFirstTime, setIsFirstTime] = useState(true);

  return (
    <div className="phone">
      <div className="screen">
        {isFirstTime ? (
          <div className="welcome">
            <h2 className="welcome-text">Cadastre sua primeira fruta</h2>
            <button className="welcome-button" onClick={() => setIsFirstTime(false)}>
              <IoAddOutline className="button-icon"/> Cadastrar Fruta
            </button>
          </div>
        ) : (
          <>
            {/* Adicione aqui o conteúdo da listagem de frutas */}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
