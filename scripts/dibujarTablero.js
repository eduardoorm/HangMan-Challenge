 export const dibujarTablero = () =>{
    let canvas = document.getElementById("board");
    let ctx = canvas.getContext("2d");
    ctx.lineWidth=2;
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(200,600);
    ctx.lineTo(10,600);
    ctx.lineTo(390,600);
    ctx.stroke();
}

