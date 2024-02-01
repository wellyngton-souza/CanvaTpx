import { dados } from "../data/dados.js";
import { updateDados } from "../../../backend/updateProject.js";

export const criatriangulo = (x, y) =>{
    let numTriangulo = dados.triangulo.length;
    let canvas = document.getElementById("map");
    let triangulo = document.createElement('div');
    let color = "#f472b6";

    numTriangulo++;

    let width = 30;
    let height = 30;

    triangulo.id = "T" + numTriangulo;

    triangulo.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;

        cursor: move;
        width: ${width}px;
        height: ${height}px;

        border-left: ${width}px solid transparent;
        border-right: ${height}px solid transparent;
        border-bottom: ${width * 2}px solid #f472b6;
        `
    ;

    canvas.appendChild(triangulo);
    dados.triangulo.push(
        ["T" + numTriangulo, x + "px", y + "px", color, `"${width}"`, `"${height}"`, 0]
    );

    updateDados();
}