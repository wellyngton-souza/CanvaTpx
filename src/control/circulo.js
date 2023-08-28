import { dados } from "../data/dados.js";

let numCirculo = 0;

export const criaCirculo = (x, y) =>{
    let canvas = document.getElementById("map");
    let circulo = document.createElement('div');

    let width = 75;
    let height = 75;
    let color = "orange";

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
        color: white;
        font-weight: bold;

        display: flex;
        align-items: center;
        justify-content: center;

        box-shadow: 10px 10px 18px 0px rgba(0,0,0,0.75);
        background-color: ${color};
        `
    ;
    
    canvas.appendChild(circulo);
    dados.circulo.push(
        ["C" + numCirculo, x - 128 + "px", y + "px"]
    );
}