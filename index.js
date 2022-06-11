import { crearPalabraSecreta } from "./scripts/crearPalabraSecreta.js";
import { drawCorrectLetter } from "./scripts/drawCorrectLetter.js";
import { dibujarTablero } from "./scripts/dibujarTablero.js";
import { esLetra } from "./scripts/esLetra.js";

const btnNewGame = document.querySelector("#btnNewGame");
btnNewGame.addEventListener("click",crearPalabraSecreta);
const countLetter= 0;
document.addEventListener('keydown',event=>{if(esLetra(event.key)){drawCorrectLetter(event.key)}})


dibujarTablero();


