import React from "react";
import {animated } from "react-spring";
import '../styles/Opciones.css'

const Opciones = ({ opciones, handleClickOption, buttonsAnimation }) => {
  return (
    <div className="opciones">
      {buttonsAnimation.map((animation, index) => (
        <animated.button
          className="opcion"
          key={opciones[index].id}
          onClick={() => handleClickOption(opciones[index].id)}
          title={opciones[index].nombre}
          style={animation}
        >
          <div className="opcion-contenido">
            {opciones[index].imagen && (
              <img src={opciones[index].imagen} alt={opciones[index].nombre} />
            )}
            <span className="opcion-nombre">{opciones[index].nombre}</span>
          </div>
        </animated.button>
      ))}
    </div>
  );
};

export default Opciones;
