import { useTrail } from 'react-spring';

const Animacion = (opciones, showAnimation) => {

  const buttonsAnimation = useTrail(opciones.length, {
    opacity: showAnimation ? 1 : 0,
    transform: showAnimation ? "translateY(0)" : "translateY(-20px)",
    config: { tension: 200, friction: 20 },
  });

  return buttonsAnimation;
};

export default Animacion;
