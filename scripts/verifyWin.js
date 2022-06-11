import { gameWin } from "./gameWin.js";

export const verifyWin = () => {
    const textValues = document.querySelectorAll(".line");
    let count=0;
    textValues.forEach(values=>{if(values.textContent.includes("_")) {count=count+1}})  
    if(count==0 && textValues.length!=0 )return gameWin();
    else return false;
}