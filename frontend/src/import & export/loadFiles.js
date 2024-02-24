import { dados } from "../data/dados.js";
import { updateDados } from "../../../backend/updateProject.js";

let numCirculo = 0;
let numQuadrado = 0;
let numTriangulo = 0;

let canvas = document.getElementById("map");

export const ImportCirculo = (x, y, color, width, height) =>{
    let circulo = document.createElement('div');

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

        /* box-shadow: 10px 10px 18px 0px rgba(0,0,0,0.75); */
        background-color: ${color};
        `
    ;
    
    canvas.appendChild(circulo);
    dados.circulo.push(
        ["C" + numCirculo, x, y, color, width.toString(), height.toString()]
    );
    console.log(dados);
}

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

export const ImportQuadrado = (x, y, color, width, height, content, rotacionar) =>{
    let quadrado = document.createElement('div');

    let textBox = document.createElement('textarea');
    textBox.value = content;
    /*
        textBox.type = "text";
        textBox.placeholder = "adicione texto aqui";
    */
    textBox.style.outline = "none";
    textBox.style.height = "auto";
    textBox.style.width = "100%";
    textBox.style.height = "100%";
    textBox.style.resize = "none";
    textBox.style.backgroundColor = "transparent";
    textBox.id = "Qi" + numQuadrado;
    textBox.placeholder = content;

    numQuadrado++;

    quadrado.id = "Q" + numQuadrado;

    textBox.addEventListener("input", () =>{
        for(let i = 0; i < dados.quadrado.length; i++){
            if(dados.quadrado[i][0] === quadrado.id){
                dados.quadrado[i][6] = textBox.value;
                console.log(dados.quadrado);
                updateDados();
                break;
            }
        }
    });

    quadrado.style.cssText = `
        position: absolute;
        left: ${x};
        top: ${y};
        
        width: ${width}px;
        height: ${height}px;

        cursor: move;
        padding: 10px;
        border-top: 8px solid #f472b6;

        /* box-shadow: 10px 10px 18px 0px rgba(0,0,0,0.75); */
        rotate: ${rotacionar}deg;
        `
    ;

    if(color !== "white"){
        quadrado.style.backgroundColor = color;
    }

    quadrado.appendChild(textBox);
    canvas.appendChild(quadrado);
    dados.quadrado.push(
        ["Q" + numQuadrado, x, y, color, width.toString(), height.toString(), content, rotacionar]
    );
}

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

export const Importtriangulo = (x, y, color, width, height, rotacionar) =>{
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
        border-bottom: 100px solid ${color};
        rotate: ${rotacionar}deg
        `
    ;

    canvas.appendChild(triangulo);
    dados.triangulo.push(
        ["T" + numTriangulo, x, y, color, width.toString(), height.toString()]
    );
}