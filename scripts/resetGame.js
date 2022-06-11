 export const resetGame = () =>{
    let containerLines = document.querySelector(".container__lines");
    containerLines.textContent= "";
    let containerIncorrectWord = document.querySelector(".container__incorrectLetter");
    containerIncorrectWord.textContent = "";
    const textGO = document.querySelector(".game__over");
    textGO.textContent="";
}