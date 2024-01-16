import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfig = {
apiKey: "AIzaSyBH4OrJ3NcVD6HzEBKo3QlBjxv2vc4MLN8",
authDomain: "sketch-storage-a2039.firebaseapp.com",
databaseURL: "https://sketch-storage-a2039-default-rtdb.firebaseio.com",
projectId: "sketch-storage-a2039",
storageBucket: "sketch-storage-a2039.appspot.com",
messagingSenderId: "998784709746",
appId: "1:998784709746:web:0b762e651edca9ee6e3eeb",
measurementId: "G-YFC3B6HC0D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);