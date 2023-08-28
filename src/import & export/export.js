import { dados } from "../data/dados.js";

export const exportarJson = () =>{
    let data = JSON.stringify(dados);

    let link = document.createElement('a');
    link.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
    link.download = 'dados.json';

    link.click();
}