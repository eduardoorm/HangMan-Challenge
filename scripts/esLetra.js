export const esLetra = (value,charMayus) =>{
    let verificarLetra;
    charMayus.forEach(element => {
         if(element==value) return verificarLetra=true;
    });
    return verificarLetra;
}