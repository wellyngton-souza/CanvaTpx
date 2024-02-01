const verificarTemaEscuroTelaGenerica = () =>{
    let verificarTema = localStorage.getItem("theme") || {};

    if(verificarTema === "dark"){
        document.body.classList.toggle("dark");
    } else{
        if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
            document.body.classList.toggle("dark");
        } else {
            console.log("Tema claro preferido ou não suportado");
        }
    }
}

verificarTemaEscuroTelaGenerica();