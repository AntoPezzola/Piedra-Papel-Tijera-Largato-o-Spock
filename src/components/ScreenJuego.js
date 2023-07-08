import React, { useEffect, useState } from "react";
import './ScreenJuego.css';
import { useTrail, animated } from "react-spring";


const piedra = "https://img.icons8.com/fluency/70/rock.png";
const papel = "https://img.icons8.com/external-tulpahn-flat-tulpahn/70/external-paper-stationery-tulpahn-flat-tulpahn.png";
const tijeras = "https://img.icons8.com/fluency/70/cut.png";
const lagarto = "https://img.icons8.com/color/70/crocodile-icon.png";
const spock = "https://img.icons8.com/color/70/star-trek-gesture.png";
const iconoVolver = "https://img.icons8.com/ios/80/return.png";


const opciones = [
  { id: 0, nombre: "Piedra", imagen: piedra, vence: [2, 3] },
  { id: 1, nombre: "Papel", imagen: papel, vence: [0] },
  { id: 2, nombre: "Tijera", imagen: tijeras, vence: [1, 3] },
  { id: 3, nombre: "Lagarto", imagen: lagarto, vence: [1] },
  { id: 4, nombre: "Spock", imagen: spock, vence: [3, 0] },
];


const ScreenJuego = ({ onPlayAgain }) => {
  const [eleccionUser, setEleccionUser] = useState(null);
  const [eleccionPc, setEleccionPc] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [pcMessage, setPcMessage] = useState(null);
  const [userMessage, setUserMessage] = useState(null);
  const [contadorUser, setContadorUser] = useState(0);
  const [contadorPc, setContadorPc] = useState(0);
  const [bloquearBotones, setBloquearBotones] = useState(false);


  const obtenerResultado = (eleccionUser, eleccionPc) => {
    if (eleccionUser === eleccionPc) {
      return 0;
    }

    if (opciones[eleccionUser]?.vence.includes(eleccionPc)) {
      return 1;
    }

    return 2;
  };


  const reset = () => {
    setEleccionUser(null);
    setEleccionPc(null);
    setUserMessage(null);
    setPcMessage(null);
    setResultado(null);
  };

  const handleClickOption = (eleccion) => {
    setEleccionUser(eleccion);
    setBloquearBotones(true);

    const numeroRandom = Math.floor(Math.random() * 5);

    setTimeout(() => {
      setEleccionPc(numeroRandom);
    }, 1500);

    setTimeout(() => {
      setResultado(obtenerResultado(eleccion, numeroRandom));
      setBloquearBotones(false);
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

  useEffect(() => {
    if (contadorUser === 3 || contadorPc === 3) {
      reset();
      setContadorUser(0);
      setContadorPc(0);
    }
  }, [contadorUser, contadorPc]);

  const buttonsAnimation = useTrail(opciones.length, {
    opacity: resultado === null ? 1 : 0,
    transform: resultado === null ? "translateY(0)" : "translateY(-20px)",
    config: { tension: 200, friction: 20 },
  });


  return (
    <div className="Juego-Comenzado">
      <button className="volverBoton" onClick={onPlayAgain}>
        <img src={iconoVolver} alt="Volver" />
      </button>
      <h1 className="elegir-Opcion">Elige una opción!</h1>
      <div className="resultado-juego">
        <div className="Opciones">
          {buttonsAnimation.map((animation, index) => (
            <animated.button
              className="opcion"
              key={opciones[index].id}
              onClick={() => handleClickOption(opciones[index].id)}
              disabled={bloquearBotones || resultado !== null}
              title={opciones[index].nombre}
              style={animation}
            >
              {opciones[index].imagen ? (
                <img src={opciones[index].imagen} alt={opciones[index].nombre} />
              ) : (
                opciones[index].nombre
              )}
            </animated.button>
          ))}
        </div>
        <div className="resultado">
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
