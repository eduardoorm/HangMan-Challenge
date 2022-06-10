let palabras = ["html","hola","eduardo","mlh","github","oracle"]
const textGame = document.querySelector(".container__game__text")

const crearPalabraSecreta = ()=>{
    let nRandom = Math.floor(Math.random()*(palabras.length))
    let palabra = palabras[nRandom]
    dibujarLinea(palabra)
}

const dibujarTablero = () =>{
    var canvas = document.getElementById("board");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(20, 40, 50, 50);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}

const dibujarLinea = (value)=>{
    const text= value.split('');
    const cantLines= text.map(()=>{return "_"})
    const lines = cantLines.join(" ");
    textGame.textContent = lines;
}

document.addEventListener('keydown',event=>{
    let keyValue = event.key;
    /** if(keyValue == text) */
    esLetra(keyValue)
    dibujarLetra(keyValue)
})

const esLetra = (value) =>{
    const letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    let verificarLetra;
    letras.forEach(element => {
         if(element==value) return verificarLetra=true;
    });
    return verificarLetra;
}

const dibujarLetra = (value)=>{
    
}

dibujarTablero();

const btnNewGame = document.querySelector("#btnNewGame");
btnNewGame.addEventListener("click",crearPalabraSecreta);

