import { dados } from "../data/dados.js";

export const mudarRotacao = (e, angulo) =>{
    e.style.rotate = angulo + "deg";

    for(let i = 0; i < dados.circulo.length; i++){
        if(e.id === dados.circulo[i][0]){
            dados.circulo[i][7] = angulo;
            console.log(dados);
            return;
        }
    }

    for(let i = 0; i < dados.quadrado.length; i++){
        if(e.id === dados.quadrado[i][0]){
            dados.quadrado[i][7] = angulo;
            console.log(dados);
            return;
        }
    }

    for(let i = 0; i < dados.triangulo.length; i++){
        if(e.id === dados.triangulo[i][0]){
            dados.triangulo[i][7] = angulo;
            console.log(dados);
            return;
        }
    }
}