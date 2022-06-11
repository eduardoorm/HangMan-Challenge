import { gameOver } from "./gameover.js";
import { verifyWin } from "./verifyWin.js";

export const drawIncorrectLetter = (valueKey)=>{
        if(verifyWin()==false){
                let containerIncorrectWord = document.querySelector(".container__incorrectLetter");
                let wordIncorrect = document.createElement("span");
                wordIncorrect.classList.add("wordIncorrect")
                wordIncorrect.textContent=valueKey;
                containerIncorrectWord.appendChild(wordIncorrect); 
        }
} 