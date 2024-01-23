import { dados } from "../data/dados.js";

export const apagarTudo = () =>{
    const pergunta = confirm("Deseja Apagar Tudo ?");

    if(pergunta) {
        document.getElementById("map").innerHTML = "";
        dados.quadrado = [];
        dados.circulo = [];
        dados.triangulo = [];
    }
}

export const limparTudo = () =>{
    document.getElementById("map").innerHTML = "";
    dados.quadrado = [];
    dados.circulo = [];
    dados.triangulo = [];
}