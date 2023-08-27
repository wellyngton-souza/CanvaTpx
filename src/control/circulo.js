let numCirculo = 0;

export const criaCirculo = (x, y) =>{
    let canvas = document.getElementById("map");
    let circulo = document.createElement('div');

    let width = 75;
    let height = 75;
    let color = "white";

    numCirculo++;

    circulo.id = "C" + numCirculo;

    circulo.style.cssText = `
        position: absolute;
        left: ${x - 128}px;
        top: ${y}px;
        
        width: ${width}px;
        height: ${height}px;

        border-radius: 500px;

        cursor: move;

        box-shadow: 10px 10px 18px 0px rgba(0,0,0,0.75);
        background-color: ${color};
        `
    ;
    
    canvas.appendChild(circulo);
}