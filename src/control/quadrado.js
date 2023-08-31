import { dados } from "../data/dados.js";

let numQuadrado = 0;

export const criaQuadrado = (x, y) =>{
    let canvas = document.getElementById("map");
    let quadrado = document.createElement('div');

    let textBox = document.createElement('textarea');
    /*
    textBox.type = "text";
    textBox.placeholder = "adicione texto aqui";
    */
   textBox.style.outline = "none";
   textBox.style.height = "auto";

    let width = 200;
    let height = 75;
    let color = "white";

    numQuadrado++;

    quadrado.id = "Q" + numQuadrado;

    quadrado.style.cssText = `
        position: absolute;
        left: ${x - 128}px;
        top: ${y}px;
        
        width: ${width}px;
        height: ${height}px;

        cursor: move;
        padding: 10px;
        border-top: 4px solid orange;

        box-shadow: 10px 10px 18px 0px rgba(0,0,0,0.75);
        background-color: ${color};
        `
    ;

    quadrado.appendChild(textBox);
    canvas.appendChild(quadrado);
    dados.quadrado.push(
        ["Q" + numQuadrado, x - 128 + "px", y + "px", color, width, height]
    );
}