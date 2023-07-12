import React, { useEffect, useState } from "react";
import "./ScreenJuego.css";
import Opciones from "./Opciones";
import Animacion from "./Animacion";
import opcionesJuego from "./OpcionesLista";
import useJuego from "./UsosDelJuego";

const iconoVolver = "https://img.icons8.com/ios/70/return.png";

const ScreenJuego = ({ volverInicio }) => {
  const {
    eleccionUsuario,
    eleccionOponente,
    resultado,
    contadorUsuario,
    contadorOponente,
    handleClickOption,
    reset,
  } = useJuego(opcionesJuego);

  const [userMessage, setUserMessage] = useState("");
  const [pcMessage, setPcMessage] = useState("");


  useEffect(() => {
    if (eleccionUsuario !== null) {
      setUserMessage(`Elegiste ${opcionesJuego[eleccionUsuario]?.nombre}`);
    }
  }, [eleccionUsuario]);

  useEffect(() => {
    if (eleccionOponente !== null) {
      setPcMessage(`El oponente eligió ${opcionesJuego[eleccionOponente]?.nombre}`);
    }
  }, [eleccionOponente]);

  const buttonsAnimation = Animacion(opcionesJuego, eleccionUsuario === null );

  return (
    <div className="Juego-Comenzado">
      <button className="volverBoton" onClick={volverInicio}>
        <img src={iconoVolver} alt="Volver" />
      </button>
      {eleccionUsuario === null && <h1 className="elegir-Opcion">¡Elige una opción!</h1>}
      <div className="resultado-juego">
        <div className="contador">
          <p className="contador-Usuario">Puntos Jugador: {contadorUsuario}</p>
          <p className="contador-Oponente">Puntos Oponente: {contadorOponente}</p>
        </div>
        {eleccionUsuario === null ? (
          <div className="opciones">
            <Opciones opciones={opcionesJuego} handleClickOption={handleClickOption} buttonsAnimation={buttonsAnimation} />
          </div>
        ) : (
          <div className="resultado">
            {eleccionUsuario !== null && <p>{userMessage}</p>}
            {eleccionOponente !== null && <p>{pcMessage}</p>}
            {resultado === 0 && <p className="resultado-empate">¡Ninguno se lleva el punto!</p>}
            {resultado === 1 && (
              <p className="resultado-ganador">
                ✅ {opcionesJuego[eleccionUsuario]?.nombre} le gana a {opcionesJuego[eleccionOponente]?.nombre}, ¡ganaste un punto!
              </p>
            )}
            {resultado === 2 && (
              <p className="resultado-perdedor">
                ❌ {opcionesJuego[eleccionUsuario]?.nombre} pierde contra {opcionesJuego[eleccionOponente]?.nombre}, ¡el oponente gana un punto!
              </p>
            )}
            {resultado !== null && (
              <button className="boton-volver-a-jugar" onClick={reset}>
                Volver a jugar
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScreenJuego;
