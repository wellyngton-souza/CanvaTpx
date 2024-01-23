import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { app } from "./firebaseConfig.js";

// Obter uma referência para o serviço de autenticação
const auth = getAuth(app);

// Configurar o provedor de autenticação do Google
const googleProvider = new GoogleAuthProvider();

document.getElementById("googleLogin").addEventListener("click", () => {
    // Realizar o login com o Google
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        console.log("Usuário autenticado:", result.user);

        const user = {
            nome: result.user.displayName,
            gmail: result.user.email,
            foto: result.user.photoURL
        };

        localStorage.setItem('logado', JSON.stringify(user));
        window.location.href = "https://wellyngton-souza.github.io/Sketch/";
    })
    .catch((error) => {
        console.error("Erro de autenticação:", error);
    });
});