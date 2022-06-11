export const dibujarLinea = (value)=>{
    let containerLines = document.querySelector(".container__lines");
    for(let i=0;i<value.length;i++){
        let line = document.createElement('span');
        line.textContent="_"
        line.classList.add("line")
        containerLines.appendChild(line);
    }
}