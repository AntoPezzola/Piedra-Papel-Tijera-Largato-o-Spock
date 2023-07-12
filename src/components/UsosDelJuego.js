import { useState } from "react";
import { toast } from "react-toastify";

const useJuego = (opcionesJuego) => {
  const [eleccionUsuario, setEleccionUsuario] = useState(null);
  const [eleccionOponente, setEleccionOponente] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [contadorUsuario, setContadorUsuario] = useState(0);
  const [contadorOponente, setContadorOponente] = useState(0);


  const obtenerResultado = (eleccionUsuario, eleccionOponente) => {
    if (eleccionUsuario === eleccionOponente) {
      return 0;
    }
    if (opcionesJuego[eleccionUsuario]?.vence.includes(eleccionOponente)) {
      setContadorUsuario(contadorUsuario + 1);
      return 1;
    }
    setContadorOponente(contadorOponente + 1);
    return 2;
  };

  const reset = () => {
    setEleccionUsuario(null);
    setEleccionOponente(null);
    setResultado(null);
    resetContador();
  };

  const resetContador = () => {
    if (contadorOponente === 3 || contadorUsuario === 3) {
      if (contadorOponente === 3) {
        toast.error("El Oponente logro 3 puntos ¡Perdiste la Partida!", {
          position: "bottom-center",
        });
      } else {
        toast.success("Lograste 3 puntos ¡Ganaste la partida!", {
          position: "bottom-center",
        });
      }
      setContadorOponente(0);
      setContadorUsuario(0);
    }
  };

  const handleClickOption = (eleccion) => {
    setEleccionUsuario(eleccion);

    const numeroRandom = Math.floor(Math.random() * opcionesJuego.length);

    setTimeout(() => {
        setEleccionOponente(numeroRandom);
      }, 1500);

    setTimeout(() => {
      setResultado(obtenerResultado(eleccion, numeroRandom));
    }, 3000);
  };

  return {
    eleccionUsuario,
    eleccionOponente,
    resultado,
    contadorUsuario,
    contadorOponente,
    handleClickOption,
    reset,
  };
};

export default useJuego;
