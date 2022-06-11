export const esLetra = (value) =>{
    const letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    let verificarLetra;
    letras.forEach(element => {
         if(element==value) return verificarLetra=true;
    });
    return verificarLetra;
}