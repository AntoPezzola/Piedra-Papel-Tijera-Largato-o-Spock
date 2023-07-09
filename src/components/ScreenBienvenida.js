import React from "react";
import './ScreenBienvenida.css'

const ScreenBienvenida = ({ empezarJuego }) => {
  return (
    <div className="inicio-de-Juego">
      <body>
        <h1 className="bienvenido"> ¡Bienvenido al juego! </h1>
        <button className="button-Comenzar" onClick={empezarJuego}>
          Comenzar
        </button>
      </body>
    </div>
  );
};

export default ScreenBienvenida;
