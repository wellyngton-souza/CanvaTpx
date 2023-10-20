import { dados } from "../data/dados.js";
import { configObjeto } from "./configObjeto.js";

let aberto = false;

let canvas = document.getElementById("map");
let painel = document.createElement('div');

let elementoSelect = null;

let positAberto = [0, 0];

export const criaPainel = () =>{
    painel.id = "painelMain";

    painel.innerHTML = `
        <div class="my-4 cursor-pointer px-4 py-2 rounded-lg bg-green-300" id="modifica">Modificar</div>
        <div class="my-4 cursor-pointer px-4 py-2 rounded-lg bg-red-300" id="apagar">Apagar</div>
    `;

    painel.style.display = "none";
    
    canvas.appendChild(painel);
}

export const abrirPainel = (e, x, y) =>{
    e.preventDefault();

    if(e.target == canvas || e.target == painel){
        return;
    }

    let color = "white";

    painel.style.cssText = `
        display: block;
        position: absolute;

        background-color: ${color};

        left: ${x - 128}px;
        top: ${y + 50}px;

        padding: 0 10px;
        border-radius: 8px;

        z-index: 99;
        
        display: block;
        `
    ;

    positAberto[0] = x - 128;
    positAberto[1] = y + 50;

    aberto = true;

    if(e.target.tagName == "TEXTAREA"){
        return;
    }

    elementoSelect = e.target;
}

const modificarPainel = (e) =>{
    painel.style.display = "none";
    aberto = false;

    configObjeto(e, positAberto);
}

export const fechaPainel = (e) =>{
    painel.style.display = "none";
    aberto = false;

    if(!elementoSelect){
        return;
    }

    if(e.target == document.getElementById("apagar")){
        elementoSelect.remove();

        for(let i = 0; i < dados.circulo.length; i++){
            if(elementoSelect.id === dados.circulo[i][0]){
                dados.circulo.splice(i, 1);
                return;
            }
        }

        for(let i = 0; i < dados.quadrado.length; i++){
            if(elementoSelect.id === dados.quadrado[i][0]){
                dados.quadrado.splice(i, 1);
                return;
            }
        }

        for(let i = 0; i < dados.triangulo.length; i++){
            if(elementoSelect.id === dados.triangulo[i][0]){
                dados.triangulo.splice(i, 1);
                return;
            }
        }
        
        return;
    }

    if(e.target == document.getElementById("modifica")){
        modificarPainel(elementoSelect);
        return;
    }
}