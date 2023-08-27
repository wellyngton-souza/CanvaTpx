let aberto = false;

let canvas = document.getElementById("map");
let painel = document.createElement('div');

let elementoSelect = null;

export const criaPainel = () =>{
    painel.id = "painelMain";

    painel.textContent = "Apagar\nModificar";
    
    canvas.appendChild(painel);
}

export const abrirPainel = (e, x, y) =>{
    e.preventDefault();

    if(e.target == canvas || e.target == painel){
        return;
    }

    let width = 100;
    let height = 75;
    let color = "yellow";

    painel.style.cssText = `
        position: absolute;
            
        width: ${width}px;
        height: ${height}px;

        background-color: ${color};

        left: ${x - 128}px;
        top: ${y + 50}px;

        cursor: pointer;
        padding: 10px;

        z-index: 99;
        
        display: block;
        `
    ;

    aberto = true;

    if(e.target.tagName == "TEXTAREA"){
        return;
    }

    elementoSelect = e.target;
}

export const fechaPainel = (e) =>{
    painel.style.display = "none";
    aberto = false;

    if(!elementoSelect){
        return;
    }

    if(e.target == painel){
        elementoSelect.remove();
    }
}