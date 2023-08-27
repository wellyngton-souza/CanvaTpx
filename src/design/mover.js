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
    });

    document.addEventListener("mouseup", ()=>{
        arrastando = false;
    });
}