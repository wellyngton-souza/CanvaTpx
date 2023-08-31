import { dados } from "../data/dados.js";

let X;
let Y;

export const moverBloco = ( arrastando, segurando, control, map ) =>{
    document.addEventListener("mousedown", (e)=>{
        if(e.target === control|| e.target === map || e.target.tagName == "TEXTAREA"){
            return;
        }

        arrastando = true;

        segurando = document.getElementById(e.target.id);

        X = e.clientX - parseFloat(window.getComputedStyle(segurando).left);
        Y = e.clientY - parseFloat(window.getComputedStyle(segurando).top);
    });

    document.addEventListener("mousemove", (e)=>{
        if(!arrastando){
            return;
        }

        if(e.target.tagName == "TEXTAREA"){
            return;
        }
        
        segurando.style.left = (e.clientX - X) + "px";
        segurando.style.top = (e.clientY - Y) + "px";

        for(let i = 0; i < dados.circulo.length; i++){
            if(e.target.id === dados.circulo[i][0]){
                dados.circulo[i][1] = (e.clientX - X) + "px";
                dados.circulo[i][2] = (e.clientY - Y) + "px";
                return;
            }
        }

        for(let i = 0; i < dados.quadrado.length; i++){
            if(e.target.id === dados.quadrado[i][0]){
                dados.quadrado[i][1] = (e.clientX - X) + "px";
                dados.quadrado[i][2] = (e.clientY - Y) + "px";
                return;
            }
        }

        for(let i = 0; i < dados.triangulo.length; i++){
            if(e.target.id === dados.triangulo[i][0]){
                dados.triangulo[i][1] = (e.clientX - X) + "px";
                dados.triangulo[i][2] = (e.clientY - Y) + "px";
                return;
            }
        }
    });

    document.addEventListener("mouseup", ()=>{
        arrastando = false;
    });
}