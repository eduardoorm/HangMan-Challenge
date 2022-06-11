import { dibujarLinea } from "./dibujarLinea.js";
import { dibujarTablero } from "./dibujarTablero.js";
import { resetGame } from "./resetGame.js";

let dicWords = ["HTML","GITHUB","ORACLE","ALURA","FUTBOL"]
const setWordHidden = document.querySelector(".disabled");

export const crearPalabraSecreta = (word)=>{
    if(typeof word == "string") dicWords.push(word.toUpperCase())
    resetGame();
    let palabra = dicWords[Math.floor(Math.random()*(dicWords.length))]
    setWordHidden .textContent=palabra;
    dibujarLinea(palabra);
    dibujarTablero();
}

