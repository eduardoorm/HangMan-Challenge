import { crearPalabraSecreta } from "./scripts/crearPalabraSecreta.js";
import { drawCorrectLetter } from "./scripts/drawCorrectLetter.js";
import { dibujarTablero } from "./scripts/dibujarTablero.js";
import { esLetra } from "./scripts/esLetra.js";
import { resetGame } from "./scripts/resetGame.js";
const letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
const charMayus = letras.map(value=>value.toUpperCase())
document.addEventListener('keydown',event=>{if(esLetra(event.key,charMayus)){drawCorrectLetter(event.key)}})
const containerMenu = document.querySelector(".container__menu");
const containerGame = document.querySelector(".container__game");
const btnNewGame = document.querySelector("#btnNewGame");
const btnStartGame = document.querySelector(".btn__startGame");
const btnGiveUp = document.querySelector(".btn__GiveUp")
const btnAddWord = document.querySelector(".btn__word");
const containerAddWord = document.querySelector(".container__addWord");
const btnCancelAddWord= document.querySelector(".btn__cancelAddWord");
const inputAddWord  =document.querySelector("[addWord]");
const btnSaveAndStart= document.querySelector(".btn__saveAndStart");
const labelWarningAddWord= document.querySelector(".container__addWord__warning");
btnSaveAndStart.addEventListener("click",()=>{
    const value = inputAddWord.value;
    if(!value){
        labelWarningAddWord.textContent="Debes ingresar como mínimo un caracter";
        labelWarningAddWord.classList.add("msg__error")
    }else{
        labelWarningAddWord.textContent="Máximo 8 caracteres";
        labelWarningAddWord.classList.remove("msg__error")
        containerGame.classList.remove("hidden");
        containerAddWord.classList.add("hidden");
        inputAddWord.value=""
        crearPalabraSecreta(value);
    }
    
})
btnCancelAddWord.addEventListener("click",()=>{
    containerAddWord.classList.add("hidden");
    containerMenu.classList.remove("hidden");
    inputAddWord.value=""
})

btnAddWord.addEventListener("click",()=>{
    containerMenu.classList.add("hidden");
    containerAddWord.classList.remove("hidden");
})

btnStartGame.addEventListener("click",()=>{
    containerMenu.classList.add("hidden");
    containerGame.classList.remove("hidden");
    dibujarTablero()
})

btnNewGame.addEventListener("click",crearPalabraSecreta);

btnGiveUp.addEventListener("click",()=>{
    containerMenu.classList.remove("hidden");
    containerGame.classList.add("hidden");
    resetGame();
})




