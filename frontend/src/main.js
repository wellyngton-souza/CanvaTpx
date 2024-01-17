import { criaQuadrado } from "./control/quadrado.js";
import { criaCirculo } from "./control/circulo.js";
import { criatriangulo } from "./control/triagulo.js";
import { exportarJson } from "./import & export/export.js";
import { moverBloco } from "./design/mover.js";
import { apagarTudo } from "./design/apagarTudo.js";
import { abrirPainel, fechaPainel, criaPainel } from "./design/painel.js";
import { capturaImage } from "./images/captura.js";
import { adicionarParticulas } from "./design/particulasMouse.js";
import { verificarTemaEscuro, mudarTemaEscuro } from "./design/darkTheme.js";
import { abrirmenu } from "./design/hiddenControl.js";
import { puxarJson } from "../../backend/updateProject.js";
import { app } from "../../backend/firebaseConfig.js";
import { getDatabase, ref, get, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
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
            criaQuadrado(e.offsetX + e.target.scrollLeft, clickrelative + e.target.scrollTop);
        }
        item = null;
    } else if(item === "circulo"){
        if(e.target == map){
            criaCirculo(e.offsetX + e.target.scrollLeft, clickrelative + e.target.scrollTop);
        }
        item = null;
    } else if(item === "triangulo"){
        if(e.target == map){
            criatriangulo(e.offsetX + e.target.scrollLeft, clickrelative + e.target.scrollTop);
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
document.getElementById("darkTheme").addEventListener("click", mudarTemaEscuro);

document.addEventListener("keydown", (e) =>{
    let elementoAtivo = document.activeElement;
    let ativo = elementoAtivo.tagName === "INPUT" || elementoAtivo.tagName === "TEXTAREA";

    let elementos = [
        "quadrado",
        "circulo",
        "triangulo"
    ];

    if(!ativo){
        for(let i = 0; i < elementos.length; i++){
            if(e.key.toLowerCase() === elementos[i][0]){
                item = elementos[i];
                document.getElementById(elementos[i]).classList.toggle("bg-purple-500");
                document.body.style.cursor = "crosshair";
                itemSelect = document.getElementById(elementos[i]);
            }
        }
    }
});

const exibirTempoReal = async () =>{
    const db = getDatabase(app);

    onValue(ref(db, "projects/" + "wellyngton"), () =>{
        puxarJson();
        console.log("limpou");
    }, { onlyOnce: false });
}

verificarTemaEscuro();
puxarJson();
exibirTempoReal();

// document.addEventListener("mousemove", adicionarParticulas);