import React, { useState } from 'react';
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
              Cadastrar Fruta
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
