import { criaQuadrado } from "./control/quadrado.js";
import { criaCirculo } from "./control/circulo.js";
import { criatriangulo } from "./control/triagulo.js";
import { exportarJson } from "./import & export/export.js";
import { moverBloco } from "./design/mover.js";
import { apagarTudo } from "./design/apagarTudo.js";
import { abrirPainel, fechaPainel, criaPainel } from "./design/painel.js";
import { capturaImage } from "./images/captura.js";
import { abrirmenu } from "./design/hiddenControl.js";
import { dados } from "./data/dados.js";

// Folha
let map = document.getElementById("map");

// Controle
let control = document.getElementById("control");

// load
criaPainel();

// Item
let item = null;

// Item Selecionado
let itemSelect = null;

// arrastando
let arrastando = false;

// elemento segurado
let segurando = null;

map.addEventListener("click",(e)=>{
    let clickrelative = e.clientY - map.getBoundingClientRect().top;

    if(item === "quadrado"){
        if(e.target == map){
            criaQuadrado(e.offsetX, clickrelative);
        }
        item = null;
    } else if(item === "circulo"){
        if(e.target == map){
            criaCirculo(e.offsetX, clickrelative);
        }
        item = null;
    } else if(item === "triangulo"){
        if(e.target == map){
            criatriangulo(e.offsetX, clickrelative);
        }
        item = null;
    }

    fechaPainel(e);

    if(itemSelect){
        itemSelect.classList.toggle("bg-purple-500");
        itemSelect = null;
        document.body.style.cursor = "default";
    }
});

map.addEventListener("contextmenu",(e)=>{
    abrirPainel(e, e.clientX, e.clientY);
});

control.addEventListener("click",(e)=>{
    if(e.target === control) return;
    
    console.log(dados);

    const elementoSelect = () =>{
        e.target.classList.toggle("bg-purple-500");
        document.body.style.cursor = "crosshair";
        itemSelect = e.target;
    }

    if(e.target.id === "quadrado"){
        item = "quadrado";
        elementoSelect();
    } else if(e.target.id === "circulo"){
        item = "circulo";
        elementoSelect();
    } else if(e.target.id === "triangulo"){
        item = "triangulo";
        elementoSelect();
    }
});

moverBloco(arrastando, segurando, control, map);

document.getElementById("apagaTudo").addEventListener("click", apagarTudo);
document.getElementById("bdjson").addEventListener("click", exportarJson);
document.getElementById("salvaimagem").addEventListener("click", capturaImage);
document.getElementById("abrirmenu").addEventListener("click", abrirmenu);