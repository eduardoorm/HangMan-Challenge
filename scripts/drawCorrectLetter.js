import { drawIncorrectLetter } from "./drawIncorrectLetter.js";
import { gameOver } from "./gameover.js";
import { verifyWin} from "./verifyWin.js";

export const drawCorrectLetter = (valueKey)=>{
    let cantIncorrectWord = document.querySelectorAll(".wordIncorrect");
    const palabra = document.querySelector(".disabled").textContent;
    const textValues = document.querySelectorAll(".line");
    if((cantIncorrectWord.length<8)){
        let index = palabra.indexOf(valueKey);
        let count=0;
        if(palabra.includes(valueKey))
         {textValues[index].textContent=valueKey;
          verifyWin();  
        }
        else{drawIncorrectLetter(valueKey);}
    }else{
        gameOver();
    }
} 
