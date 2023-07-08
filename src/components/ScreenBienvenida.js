import React from "react";
import './ScreenBienvenida.css'

const ScreenBienvenida = ({ onClickStart }) => {
  return (
    <div className="inicio-de-Juego">
      <body>
        <h1 className="Bienvenido"> ¡Bienvenido al juego! </h1>
        <button className="button-Comenzar" onClick={onClickStart}>
          Comenzar juego
        </button>
      </body>
    </div>
  );
};

export default ScreenBienvenida;
