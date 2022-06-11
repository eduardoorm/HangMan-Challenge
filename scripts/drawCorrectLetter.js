import { drawIncorrectLetter } from "./drawIncorrectLetter.js";
import { gameOver } from "./gameover.js";
import { verifyWin} from "./verifyWin.js";

export const drawCorrectLetter = (valueKey)=>{
    let cantIncorrectWord = document.querySelectorAll(".wordIncorrect");
    const palabra = document.querySelector(".disabled").textContent;
    const textValues = document.querySelectorAll(".line");

    if((cantIncorrectWord.length<=8)){
        if(palabra.includes(valueKey))
         {
            let indices=[];
            let index = palabra.indexOf(valueKey);
            while(index!=-1){
                console.log("entra al while");
                indices.push(index);
                index= palabra.indexOf(valueKey,index+1); 
             }
            indices.forEach((idx) => {
                textValues[idx].textContent=valueKey;
            })
            verifyWin();  
        }
        else if(textValues.length!=0){drawIncorrectLetter(valueKey,cantIncorrectWord.length);}
    }else{
        gameOver();
    }
} 

