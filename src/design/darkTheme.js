export const comecaTemaEscuro = () =>{
    document.body.classList.toggle("dark");
    document.getElementById("switchcontrolescuro").classList.toggle("end-0");
}

export const mudarTemaEscuro = () => {
    document.body.classList.toggle("dark");
    document.getElementById("switchcontrolescuro").classList.toggle("end-0");
    localStorage.getItem("theme") === "dark" ? localStorage.clear() : localStorage.setItem("theme", "dark");
};