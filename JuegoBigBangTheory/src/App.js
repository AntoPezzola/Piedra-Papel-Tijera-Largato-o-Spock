import React, { useEffect, useState } from "react";


const opciones = [
  { id: 0, nombre: "Piedra", emoji: "🪨", beats: [2, 3] },
  { id: 1, nombre: "Papel", emoji: "📄", beats: [0] },
  { id: 2, nombre: "Tijera", emoji: "✂️", beats: [1, 3] },
  { id: 3, nombre: "Lagarto", emoji: "🦎", beats: [1] },
  { id: 4, nombre: "Spock", emoji: "🖖", beats: [3, 0] },
];

const obtenerResultado = (eleccionUser, eleccionPc) => {
  if (eleccionUser === eleccionPc) {
    return 0;
  }

  if (opciones[eleccionUser]?.beats.includes(eleccionPc)) {
    return 1;
  }

  return 2;
};


function App() {
  const [eleccionUser, setEleccionUser] = useState(null);
  const [eleccionPc, setEleccionPc] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [juegoComenzado, setComenzar] = useState(false);
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

  const handleClickComenzar = (e) => {
    e.preventDefault();
    setComenzar(!juegoComenzado);
  };

  const jugar = (eleccion) => {
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
      setUserMessage(
        `Has elegido ${opciones[eleccionUser]?.emoji} - ${
          opciones[eleccionUser]?.nombre
        }`
      );
    }
  }, [eleccionUser]);

  useEffect(() => {
    if (eleccionPc !== null) {
      setPcMessage(
        `El oponente ha elegido ${opciones[eleccionPc]?.emoji} - ${
          opciones[eleccionPc]?.nombre
        }`
      );
    }
  }, [eleccionPc]);

  return (
    <div className="App">
      {juegoComenzado ? (
        <div className="Juego-Comenzado">
          <h1> Elije una opción! </h1>
          <div className="Opciones">
            {opciones.map((opcion) => (
              <button
                className="opcion"
                key={opcion.id}
                onClick={() => jugar(opcion.id)}
                disabled={resetOpcion}
                title={opcion.nombre}
              >
                {opcion.emoji}
              </button>
            ))}
            <div className="resultado-juego">
              {eleccionUser !== null && <p>{userMessage}</p>}
              {eleccionPc !== null && <p> {pcMessage} </p>}
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
              )} {
              }
              { resultado !== null && 
                <button className="volerAJugarBoton" onClick={reset}>
                  <p> Volver a jugar! </p>
              </button>
              }
            </div>
          </div>
          <button onClick={handleClickComenzar}>Volver</button>
        </div>
      ) : (
        <div className="Inicio-de-Juego">
          <h1> Bienvenido al juego! </h1>
          <button onClick={handleClickComenzar}>Comenzar juego</button>
        </div>
      )}
    </div>
  );
}

export default App;
