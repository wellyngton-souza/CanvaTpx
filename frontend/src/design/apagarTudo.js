import { dados } from "../data/dados.js";

export const apagarTudo = () =>{
    document.getElementById("map").innerHTML = "";
    dados.quadrado = [];
    dados.circulo = [];
    dados.triangulo = [];
}