import { dados } from "../data/dados.js";

let numCirculo = 0;
let numQuadrado = 0;
let numTriangulo = 0;

let canvas = document.getElementById("map");

export const ImportCirculo = (x, y) =>{
    let circulo = document.createElement('div');

    let width = 75;
    let height = 75;
    let color = "orange";

    numCirculo++;

    circulo.id = "C" + numCirculo;

    circulo.style.cssText = `
        position: absolute;
        left: ${x};
        top: ${y};
        
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

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

export const ImportQuadrado = (x, y) =>{
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
        left: ${x};
        top: ${y};
        
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
        ["Q" + numQuadrado, x - 128 + "px", y + "px"]
    );
}

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

export const Importtriangulo = (x, y) =>{
    let triangulo = document.createElement('div');

    numTriangulo++;

    triangulo.id = "T" + numTriangulo;

    triangulo.style.cssText = `
        position: absolute;
        left: ${x};
        top: ${y};

        cursor: move;

        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 100px solid orange;
        `
    ;

    canvas.appendChild(triangulo);
    dados.triangulo.push(
        ["T" + numTriangulo, x - 128 + "px", y + "px"]
    );
}