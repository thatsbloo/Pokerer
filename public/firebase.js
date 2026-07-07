import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCWFyByFVfdFU4nxPfSFxHoqF2JGAJRQlI",
    authDomain: "pokerer-e996f.firebaseapp.com",
    projectId: "pokerer-e996f",
    storageBucket: "pokerer-e996f.firebasestorage.app",
    messagingSenderId: "775052579700",
    appId: "1:775052579700:web:5f2565747e0b2af5935221",
    measurementId: "G-BPRQ2DJBLJ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
