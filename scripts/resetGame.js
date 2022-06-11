 export const resetGame = () =>{
    let containerLines = document.querySelector(".container__lines");
    let containerIncorrectWord = document.querySelector(".container__incorrectLetter");
    const textGO = document.querySelector(".game__over");
    var canvas = document.getElementById("board");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    containerIncorrectWord.textContent = "";
    textGO.textContent="";
    containerLines.textContent= "";
}