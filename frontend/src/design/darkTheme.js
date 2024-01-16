const comecaTemaEscuro = () =>{
    document.body.classList.toggle("dark");
    document.getElementById("switchcontrolescuro").classList.toggle("end-0");
}

export const verificarTemaEscuro = () =>{
    let verificarTema = localStorage.getItem("theme") || {};

    if(verificarTema === "dark"){
        comecaTemaEscuro();
    } else{
        if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
            comecaTemaEscuro();
        } else {
            console.log("Tema claro preferido ou não suportado");
        }
    }
}

export const mudarTemaEscuro = () => {
    document.body.classList.toggle("dark");
    document.getElementById("switchcontrolescuro").classList.toggle("end-0");
    localStorage.getItem("theme") === "dark" ? localStorage.clear() : localStorage.setItem("theme", "dark");
};