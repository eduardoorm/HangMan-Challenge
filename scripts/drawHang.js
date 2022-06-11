export const drawHang= (cantErros) => {
    let canvas = document.getElementById("board");
    let ctx = canvas.getContext("2d");
    ctx.lineWidth=2;
    ctx.strokeStyle = "blue";
    switch (cantErros>0){
        case (cantErros==1):
            /*la base  */          
            ctx.beginPath();
            ctx.moveTo(200,600);
            ctx.lineTo(200,200)
            ctx.stroke();
            break;
        case (cantErros==2):
            /*el palo horizontal*/
            ctx.beginPath();
            ctx.lineWidth=2;
            ctx.strokeStyle = "blue";
            ctx.moveTo(200,200);
            ctx.lineTo(450,200);
            ctx.stroke();
            break;
        case (cantErros==3):
            /*el palo vertical*/
            ctx.beginPath();
            ctx.moveTo(450,200);
            ctx.lineTo(450,300);
            ctx.stroke();
            break;
        case (cantErros==4):
            /*la cabeza*/
            ctx.beginPath();
            ctx.arc(450,350,50,0,Math.PI*2,true); // Círculo externo
            ctx.stroke();
            break;
        case (cantErros==5):
            /*el tronco*/
            ctx.beginPath();
            ctx.moveTo(450,400);
            ctx.lineTo(450,600);
            ctx.stroke();
            break;
        case (cantErros==6):
            /*brazo izquierdo*/
            ctx.beginPath();
            ctx.moveTo(450,450);
            ctx.lineTo(320,450);
            ctx.stroke();
            break;
        case (cantErros==7): 
            /*brazo derecho*/
            ctx.beginPath();
            ctx.moveTo(450,450);
            ctx.lineTo(580,450);
            ctx.stroke();
            break;
        case (cantErros==8):
            /*pie izquierdo*/
            ctx.beginPath();
            ctx.moveTo(450,600);
            ctx.lineTo(360,710);
            ctx.stroke();
            break;
        case (cantErros==9):
            /*pie derecho*/
            ctx.beginPath();
            ctx.moveTo(450,600);
            ctx.lineTo(530,710);
            ctx.stroke();
            break;
    }
}