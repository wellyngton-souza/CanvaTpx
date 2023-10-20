import { mudarCor } from "../styleObb/color.js";
import { mudarLargura } from "../styleObb/largura.js";
import { mudarAltura } from "../styleObb/altura.js";

let canvas = document.getElementById("map");
let config = document.createElement('div');

let object;
let cor;
let largura;
let altura;

export const configObjeto = (e, posicao) =>{
    config.id = "configMain";

    config.innerHTML = `
        <div class="px-4 my-4 cursor-pointer py-2 rounded-lg hover:bg-yellow-500 bg-yellow-300" id="mudarCor">COR</div>
        <div class="px-4 my-4 cursor-pointer py-2 rounded-lg hover:bg-yellow-500 bg-yellow-300" id="mudarLargura">Largura</div>
        <div class="px-4 my-4 cursor-pointer py-2 rounded-lg hover:bg-yellow-500 bg-yellow-300" id="mudarAltura">Altura</div>
    `;
    
    canvas.appendChild(config);

    let color = "white";

    config.style.cssText = `
        position: absolute;

        background-color: ${color};

        left: ${posicao[0]}px;
        top: ${posicao[1]}px;

        padding: 0 10px;
        border-radius: "8px";

        z-index: 99;
        
        display: block;
        `
    ;

    object = e;

    largura = document.getElementById("mudarLargura");
    largura.addEventListener("click",()=>{
        let largura = prompt("digite largura aqui");
        if(!largura){
            return;
        }

        mudarLargura(object, largura);
        config.style.display = "none";
        return;
    }); 

    cor = document.getElementById("mudarCor");
    cor.addEventListener("click",()=>{
        let cora = prompt("digite o codigo da cor Aqui");
        if(!cora){
            return;
        }

        mudarCor(object, cora);
        config.style.display = "none";
        return;
    });

    altura = document.getElementById("mudarAltura");
    altura.addEventListener("click",()=>{
        let altura = prompt("digite altura aqui");
        if(!altura){
            return;
        }

        mudarAltura(object, altura);
        config.style.display = "none";
        return;
    });
}