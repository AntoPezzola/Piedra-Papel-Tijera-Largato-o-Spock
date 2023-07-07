import React from "react";

const ScreenBienvenida = ({ onClickStart }) => {
  return (
    <div className="Inicio-de-Juego">
      <h1 className="Bienvenido"> ¡Bienvenido al juego! </h1>
      <button className="button-Comenzar" onClick={onClickStart}>
        Comenzar juego
      </button>
    </div>
  );
};

export default ScreenBienvenida;
