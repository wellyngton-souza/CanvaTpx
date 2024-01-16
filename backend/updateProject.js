import { app } from "./firebaseConfig.js";
import { dados } from "../frontend/src/data/dados.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { ImportQuadrado, Importtriangulo, ImportCirculo } from "../frontend/src/import & export/loadFiles.js";

export const updateDados = () =>{
    const db = getDatabase(app);

    set(ref(db, "projects/" + "wellyngton"),
        dados
    );
}

const exibirTela = (dadosLocal) =>{
    for (let i = 0; i < dadosLocal.quadrado.length; i++) {
        ImportQuadrado(dadosLocal.quadrado[i][1], dadosLocal.quadrado[i][2], dadosLocal.quadrado[i][3], dadosLocal.quadrado[i][4], dadosLocal.quadrado[i][5], dadosLocal.quadrado[i][6], dadosLocal.quadrado[i][7]);
    }

    for (let i = 0; i < dadosLocal.circulo.length; i++) {
        ImportCirculo(dadosLocal.circulo[i][1], dadosLocal.circulo[i][2], dadosLocal.circulo[i][3], dadosLocal.circulo[i][4], dadosLocal.circulo[i][5]);
    }

    for (let i = 0; i < dadosLocal.triangulo.length; i++) {
        Importtriangulo(dadosLocal.triangulo[i][1], dadosLocal.triangulo[i][2], dadosLocal.triangulo[i][3], dadosLocal.triangulo[i][4], dadosLocal.triangulo[i][5], dadosLocal.quadrado[i][7]);
    }
}

export const puxarJson = async () =>{
    const db = getDatabase(app);

    let busca = await get(ref(db, "projects/wellyngton"));

    //dados = busca.val();

    exibirTela(busca.val());
}