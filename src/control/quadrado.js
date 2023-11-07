import { dados } from "../data/dados.js";

export const criaQuadrado = (x, y) =>{
    let numQuadrado = dados.quadrado.length;
    let canvas = document.getElementById("map");
    let quadrado = document.createElement('div');

    let textBox = document.createElement('textarea');
    let content = "insira um texto aqui";
    /*
    textBox.type = "text";
    textBox.placeholder = "adicione texto aqui";
    */
    textBox.style.outline = "none";
    textBox.style.height = "auto";
    textBox.id = "Qi" + numQuadrado;
    textBox.placeholder = content;

    let width = 200;
    let height = 75;
    let color = "white";

    numQuadrado++;

    quadrado.id = "Q" + numQuadrado;

    textBox.addEventListener("change", ()=>{
        for(let i = 0; i < dados.quadrado.length; i++){
            if(dados.quadrado[i][0] === quadrado.id){
                dados.quadrado[i][6] = textBox.value;
                console.log(dados.quadrado)
            }
        }
    });

    quadrado.style.cssText = `
        position: absolute;
        left: ${x}px;
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
        ["Q" + numQuadrado, x - 128 + "px", y + "px", color, width, height, content, 0]
    );
}