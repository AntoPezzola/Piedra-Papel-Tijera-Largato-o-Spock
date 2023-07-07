import React, { useEffect, useState } from "react";

const piedra = "https://img.icons8.com/fluency/48/rock.png";
const papel = "https://img.icons8.com/external-tulpahn-flat-tulpahn/48/external-paper-stationery-tulpahn-flat-tulpahn.png";
const tijeras = "https://img.icons8.com/fluency/48/cut.png";
const lagarto = "https://img.icons8.com/color/48/crocodile-icon.png"; 
const spock = "https://img.icons8.com/color/48/star-trek-gesture.png"; 


const opciones = [
  { id: 0, nombre: "Piedra", imagen: piedra, vence: [2, 3] },
  { id: 1, nombre: "Papel", imagen: papel, vence: [0] },
  { id: 2, nombre: "Tijera", imagen: tijeras, vence: [1, 3] },
  { id: 3, nombre: "Lagarto", imagen: lagarto, vence: [1] },
  { id: 4, nombre: "Spock", imagen: spock, vence: [3, 0] },
];

const obtenerResultado = (eleccionUser, eleccionPc) => {
  if (eleccionUser === eleccionPc) {
    return 0;
  }

  if (opciones[eleccionUser]?.vence.includes(eleccionPc)) {
    return 1;
  }

  return 2;
};

const ScreenJuego = ({ onPlayAgain }) => {
  const [eleccionUser, setEleccionUser] = useState(null);
  const [eleccionPc, setEleccionPc] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [pcMessage, setPcMessage] = useState(null);
  const [userMessage, setUserMessage] = useState(null);
  const [resetOpcion, setReset] = useState(false);

  const reset = () => {
    setEleccionUser(null);
    setEleccionPc(null);
    setUserMessage(null);
    setPcMessage(null);
    setResultado(null);
    setReset(false);
  };

  const handleClickOption = (eleccion) => {
    setEleccionUser(eleccion);
    setReset(true);

    const numeroRandom = Math.floor(Math.random() * 5);

    setTimeout(() => {
      setEleccionPc(numeroRandom);
    }, 1500);

    setTimeout(() => {
      setResultado(obtenerResultado(eleccion, numeroRandom));
    }, 3000);

    clearTimeout();
  };

  useEffect(() => {
    if (eleccionUser !== null) {
      setUserMessage(`Has elegido ${opciones[eleccionUser]?.nombre}`);
    }
  }, [eleccionUser]);

  useEffect(() => {
    if (eleccionPc !== null) {
      setPcMessage(`El oponente ha elegido ${opciones[eleccionPc]?.nombre}`);
    }
  }, [eleccionPc]);

  return (
    <div className="Juego-Comenzado">
      <h1> Elige una opción! </h1>
      <div className="Opciones">
        {opciones.map((opcion) => (
          <button
            className="opcion"
            key={opcion.id}
            onClick={() => handleClickOption(opcion.id)}
            disabled={resetOpcion}
            title={opcion.nombre}
          >
            {opcion.imagen ? (
              <img src={opcion.imagen} alt={opcion.nombre} />
            ) : (
              opcion.nombre
            )}
          </button>
        ))}
        <div className="resultado-juego">
          {eleccionUser !== null && <p>{userMessage}</p>}
          {eleccionPc !== null && <p>{pcMessage}</p>}
          {resultado === 0 && <p>🤷🏽‍♀️ Empate</p>}
          {resultado === 1 && (
            <p>
              ✅ Has ganado con {opciones[eleccionUser]?.nombre} contra{" "}
              {opciones[eleccionPc]?.nombre}
            </p>
          )}
          {resultado === 2 && (
            <p>
              ❌ Has perdido con {opciones[eleccionUser]?.nombre} contra{" "}
              {opciones[eleccionPc]?.nombre}
            </p>
          )}
          {resultado !== null && (
            <button className="volerAJugarBoton" onClick={reset}>
              <p> Volver a jugar! </p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScreenJuego;
