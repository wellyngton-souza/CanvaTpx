import { dados } from "../data/dados.js";
import { updateDados } from "../../../backend/updateProject.js";

export const mudarCor = (e, color) =>{
    e.style.backgroundColor = color;
    
    for(let i = 0; i < dados.circulo.length; i++){
        if(e.id === dados.circulo[i][0]){
            dados.circulo[i][3] = color;
            updateDados();
            return;
        }
    }

    for(let i = 0; i < dados.quadrado.length; i++){
        if(e.id === dados.quadrado[i][0]){
            dados.quadrado[i][3] = color;
            updateDados();
            return;
        }
    }

    for(let i = 0; i < dados.triangulo.length; i++){
        if(e.id === dados.triangulo[i][0]){
            dados.triangulo[i][3] = color;
            updateDados();
            return;
        }
    }
}