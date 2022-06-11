import { dibujarLinea } from "./dibujarLinea.js";
import { resetGame } from "./resetGame.js";

let dicWords = ["html","hola","eduardo","mlh","github","oracle"]
const setWordHidden = document.querySelector(".disabled");

export const crearPalabraSecreta = ()=>{
    resetGame();
    let palabra = dicWords[Math.floor(Math.random()*(dicWords.length))]
    setWordHidden .textContent=palabra;
    dibujarLinea(palabra);
}

