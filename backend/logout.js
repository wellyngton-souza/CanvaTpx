import { limparTudo } from "../frontend/src/design/apagarTudo.js";
import { app } from "./firebaseConfig.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

export const sairApp = () =>{
    const saida = confirm("realmente deseja SAIR ?");

    if(!saida) return; 

    const auth = getAuth(app);

    signOut(auth).then(() => {
        location.reload();
        limparTudo();
        localStorage.setItem("logado", "");
    });
}