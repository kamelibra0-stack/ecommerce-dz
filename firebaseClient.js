/firebaseClient.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Copie ici ta config personnalisée trouvée sur la console Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCgogXkoek00BjV7FwAOsIhmxB1SZqAPEQ",
  authDomain: "bazardz-ecommerce.firebaseapp.com",
  projectId: "bazardz-ecommerce",
  storageBucket: "bazardz-ecommerce.firebasestorage.app",
  messagingSenderId: "456658789699",
  appId: "1:456658789699:web:076a12aee5dcf26a1dfbf6"
};

// Initialisation Firebase (une seule fois dans toute l'app !)
const app = initializeApp(firebaseConfig);

// Initialisation Firestore
export const db = getFirestore(app);
