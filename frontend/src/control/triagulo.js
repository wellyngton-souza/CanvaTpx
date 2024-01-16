import { dados } from "../data/dados.js";
import { updateDados } from "../../../backend/updateProject.js";

document.getElementById("triangulo").style.cssText = `
    cursor: move;
    width: 32px;

    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-bottom: 32px solid rgb(244 114 182);
    `
;

const ajustarEstilos = () => {
    if (window.innerWidth >= 1024) {
        triangulo.style.borderLeft = '32px solid transparent';
        triangulo.style.borderRight = '32px solid transparent';
        triangulo.style.borderBottom = '64px solid rgb(244, 114, 182)';
    } else {
        triangulo.style.borderLeft = '16px solid transparent';
        triangulo.style.borderRight = '16px solid transparent';
        triangulo.style.borderBottom = '32px solid rgb(244, 114, 182)';
    }
}

window.addEventListener('load', ajustarEstilos);
window.addEventListener('resize', ajustarEstilos);

export const criatriangulo = (x, y) =>{
    let numTriangulo = dados.triangulo.length;
    let canvas = document.getElementById("map");
    let triangulo = document.createElement('div');
    let color = "pink";

    numTriangulo++;

    let width = 75;
    let height = 75;

    triangulo.id = "T" + numTriangulo;

    triangulo.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;

        cursor: move;
        width: ${width}px;
        height: ${height}px;

        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 100px solid pink;
        `
    ;

    canvas.appendChild(triangulo);
    dados.triangulo.push(
        ["T" + numTriangulo, x - 128 + "px", y + "px", color, `"${width}"`, `"${height}"`, 0]
    );

    updateDados();
}