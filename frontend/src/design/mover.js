import { dados } from "../data/dados.js";
import { updateDados } from "../../../backend/updateProject.js";

let X;
let Y;

const puxarPropriedadesElemento = (e, propriedade, index) =>{
    for(let i = 0; i < dados.circulo.length; i++){
        if(e.id === dados.circulo[i][0]){
            document.getElementById(propriedade + "_properties").innerHTML = dados.circulo[i][index];
            return;
        }
    }

    for(let i = 0; i < dados.quadrado.length; i++){
        if(e.id === dados.quadrado[i][0]){
            document.getElementById(propriedade + "_properties").innerHTML = dados.quadrado[i][index];
            return;
        }
    }

    for(let i = 0; i < dados.triangulo.length; i++){
        if(e.id === dados.triangulo[i][0]){
            document.getElementById(propriedade + "_properties").innerHTML = dados.triangulo[i][index];
            return;
        }
    }
}

export const moverBloco = ( arrastando, segurando ) =>{
    document.addEventListener("mousedown", (e)=>{
        if(e.target.id[0] !== "Q" && e.target.id[0] !== "T" && e.target.id[0] !== "C"){
            return;
        }

        arrastando = true;

        document.getElementById("elementoPainel").innerHTML = e.target.id;
        puxarPropriedadesElemento(e.target, "X", 1);
        puxarPropriedadesElemento(e.target, "Y", 2);
        puxarPropriedadesElemento(e.target, "COLOR", 3);

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

        puxarPropriedadesElemento(e.target, "X", 1);
        puxarPropriedadesElemento(e.target, "Y", 2);
        puxarPropriedadesElemento(e.target, "COLOR", 3);

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

    document.addEventListener("mouseup", (e)=>{
        if(!arrastando){
            return;
        }

        if(e.target.tagName == "TEXTAREA"){
            return;
        }

        arrastando = false;

        updateDados();
    });

    // Touch Mobile
    document.addEventListener("touchstart", (e) => {
        if(e.target.id[0] !== "Q" && e.target.id[0] !== "T" && e.target.id[0] !== "C"){
            return;
        }

        document.getElementById("map").classList.remove("overflow-x-auto");
        document.getElementById("map").classList.remove("overflow-y-auto");

        arrastando = true;

        document.getElementById("elementoPainel").innerHTML = e.target.id;
        puxarPropriedadesElemento(e.target, "X", 1);
        puxarPropriedadesElemento(e.target, "Y", 2);
        puxarPropriedadesElemento(e.target, "COLOR", 3);

        segurando = document.getElementById(e.target.id);

        X = e.changedTouches[0].clientX - parseFloat(window.getComputedStyle(segurando).left);
        Y = e.changedTouches[0].clientY - parseFloat(window.getComputedStyle(segurando).top);
    });

    document.addEventListener("touchmove", (e) => {
        if(!arrastando){
            return;
        }

        if(e.target.tagName == "TEXTAREA"){
            return;
        }

        segurando.style.left = (e.changedTouches[0].clientX - X) + "px";
        segurando.style.top = (e.changedTouches[0].clientY - Y) + "px";

        for(let i = 0; i < dados.circulo.length; i++){
            if(e.target.id === dados.circulo[i][0]){
                dados.circulo[i][1] = (e.changedTouches[0].clientX - X) + "px";
                dados.circulo[i][2] = (e.changedTouches[0].clientY - Y) + "px";
                return;
            }
        }

        for(let i = 0; i < dados.quadrado.length; i++){
            if(e.target.id === dados.quadrado[i][0]){
                dados.quadrado[i][1] = (e.changedTouches[0].clientX - X) + "px";
                dados.quadrado[i][2] = (e.changedTouches[0].clientY - Y) + "px";
                return;
            }
        }

        for(let i = 0; i < dados.triangulo.length; i++){
            if(e.target.id === dados.triangulo[i][0]){
                dados.triangulo[i][1] = (e.changedTouches[0].clientX - X) + "px";
                dados.triangulo[i][2] = (e.changedTouches[0].clientY - Y) + "px";
                return;
            }
        }
    });
    
    document.addEventListener("touchend", (e) => {
        if(!arrastando){
            return;
        }

        if(e.target.tagName == "TEXTAREA"){
            return;
        }

        document.getElementById("map").classList.add("overflow-x-auto");
        document.getElementById("map").classList.add("overflow-y-auto");

        arrastando = false;
        updateDados();
    });
}