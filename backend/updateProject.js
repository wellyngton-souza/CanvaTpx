import { app } from "./firebaseConfig.js";
import { dados } from "../frontend/src/data/dados.js";
import { limparTudo } from "../frontend/src/design/apagarTudo.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { ImportQuadrado, Importtriangulo, ImportCirculo } from "../frontend/src/import & export/loadFiles.js";

export const updateDados = async () =>{
    let isRefreshing = false;

    // Evento para detectar se a página está sendo atualizada
    window.addEventListener('beforeunload', () =>{
        isRefreshing = true;
    });

    if (isRefreshing) return;

    const db = getDatabase(app);
    const user = JSON.parse(localStorage.getItem("logado"));

    set(ref(db, "projects/" + user.nome),
        dados
    );
}

const exibirTela = (dadosLocal) =>{
    limparTudo();

    for (let i = 0; i < dadosLocal?.quadrado?.length; i++) {
        ImportQuadrado(dadosLocal.quadrado[i][1], dadosLocal.quadrado[i][2], dadosLocal.quadrado[i][3], dadosLocal.quadrado[i][4], dadosLocal.quadrado[i][5], dadosLocal.quadrado[i][6], dadosLocal.quadrado[i][7]);
    }

    for (let i = 0; i < dadosLocal?.circulo?.length; i++) {
        ImportCirculo(dadosLocal.circulo[i][1], dadosLocal.circulo[i][2], dadosLocal.circulo[i][3], dadosLocal.circulo[i][4], dadosLocal.circulo[i][5]);
    }

    for (let i = 0; i < dadosLocal?.triangulo?.length; i++) {
        Importtriangulo(dadosLocal.triangulo[i][1], dadosLocal.triangulo[i][2], dadosLocal.triangulo[i][3], dadosLocal.triangulo[i][4], dadosLocal.triangulo[i][5], dadosLocal.quadrado[i][7]);
    }
}

export const puxarJson = async () =>{
    const db = getDatabase(app);
    const user = JSON.parse(localStorage.getItem("logado"));

    let busca = await get(ref(db, "projects/" + user.nome));

    //dados = busca.val();

    exibirTela(busca.val());

    // desativar loading
    document.getElementById("app").classList.toggle("hidden");
    document.getElementById("loading").classList.toggle("hidden");
}