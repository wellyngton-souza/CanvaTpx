import { criaQuadrado } from "./control/quadrado.js";
import { criaCirculo } from "./control/circulo.js";
import { moverBloco } from "./design/mover.js";
import { abrirPainel, fechaPainel, criaPainel } from "./design/painel.js";

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
    if(item === "quadrado"){
        if(e.target == map){
            criaQuadrado(e.clientX, e.clientY);
        }
        item = null;
    } else if(item === "circulo"){
        if(e.target == map){
            criaCirculo(e.clientX, e.clientY);
        }
        item = null;
    }

    fechaPainel(e);

    if(itemSelect){
        itemSelect.classList.toggle("bg-yellow-500");
        itemSelect = null;
        document.body.style.cursor = "default";
    }
});

map.addEventListener("contextmenu",(e)=>{
    abrirPainel(e, e.clientX, e.clientY);
});

control.addEventListener("click",(e)=>{
    if(e.target === control){
        return;
    }

    if(e.target.id === "quadrado"){
        item = "quadrado";
    } else if(e.target.id === "circulo"){
        item = "circulo";
    }
    
    document.body.style.cursor = "crosshair";

    e.target.classList.toggle("bg-yellow-500");
    itemSelect = e.target;
});

moverBloco(arrastando, segurando, control, map);