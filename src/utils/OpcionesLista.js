const piedra = "https://img.icons8.com/fluency/70/rock.png";
const papel = "https://img.icons8.com/external-tulpahn-flat-tulpahn/70/external-paper-stationery-tulpahn-flat-tulpahn.png";
const tijeras = "https://img.icons8.com/fluency/70/cut.png";
const lagarto = "https://img.icons8.com/color/70/crocodile-icon.png";
const spock = "https://img.icons8.com/color/70/star-trek-gesture.png";


const opciones = [
  { id: 0, nombre: "Piedra", imagen: piedra, vence: [2, 3] },
  { id: 1, nombre: "Papel", imagen: papel, vence: [0] },
  { id: 2, nombre: "Tijera", imagen: tijeras, vence: [1, 3] },
  { id: 3, nombre: "Lagarto", imagen: lagarto, vence: [1] },
  { id: 4, nombre: "Spock", imagen: spock, vence: [3, 0] },
];

export default opciones; 