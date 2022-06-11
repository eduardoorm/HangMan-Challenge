 export const resetGame = () =>{
    let containerLines = document.querySelector(".container__lines");
    containerLines.textContent= "";
    let containerIncorrectWord = document.querySelector(".container__incorrectLetter");
    containerIncorrectWord.textContent = "";
    const textGO = document.querySelector(".game__over");
    textGO.textContent="";
    var canvas = document.getElementById("board");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}