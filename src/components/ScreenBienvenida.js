import React from "react";
import '../styles/ScreenBienvenida.css'

const ScreenBienvenida = ({ empezarJuego }) => {
  return (
    <div className="inicio-de-Juego">
      <body>
        <h1 className="bienvenido"> ¡Piedra, papel, tijera, lagarto o Spock! </h1>
        <button className="button-Comenzar" onClick={empezarJuego}>
          Empezar partida
        </button>
      </body>
    </div>
  );
};

export default ScreenBienvenida;
