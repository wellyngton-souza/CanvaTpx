import { updateDados } from "../../../backend/updateProject.js";
import { dados } from "../data/dados.js";

export const mudarAltura = (e, altura) =>{
    e.style.height = altura + "px";

    for(let i = 0; i < dados.circulo.length; i++){
        if(e.id === dados.circulo[i][0]){
            dados.circulo[i][5] = altura;
            console.log(dados);
            updateDados();
            return;
        }
    }

    for(let i = 0; i < dados.quadrado.length; i++){
        if(e.id === dados.quadrado[i][0]){
            dados.quadrado[i][5] = altura;
            console.log(dados);
            updateDados();
            return;
        }
    }

    for(let i = 0; i < dados.triangulo.length; i++){
        if(e.id === dados.triangulo[i][0]){
            dados.triangulo[i][5] = altura;
            console.log(dados);
            updateDados();
            return;
        }
    }
}