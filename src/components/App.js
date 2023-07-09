import React, { useState } from "react";
import ScreenBienvenida from "./ScreenBienvenida";
import ScreenJuego from "./ScreenJuego";

function App() {
  const [juegoComenzado, setComenzar] = useState(false);

  const handleStartGame = () => {
    setComenzar(true);
  };

  const handlePlayAgain = () => {
    setComenzar(false);
  };

  return (
    <div className="App">
      {juegoComenzado ? (
        <ScreenJuego volverInicio={handlePlayAgain} />
      ) : (
        <ScreenBienvenida empezarJuego={handleStartGame} />
      )}
    </div>
  );
}

export default App;
