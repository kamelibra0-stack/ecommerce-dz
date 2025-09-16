// firebaseClient.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgogXkoek00BjV7FwAOsIhmxB1SZqAPEQ",
  authDomain: "bazardz-ecommerce.firebaseapp.com",
  projectId: "bazardz-ecommerce",
  storageBucket: "bazardz-ecommerce.firebasestorage.app",
  messagingSenderId: "456658789699",
  appId: "1:456658789699:web:076a12aee5dcf26a1dfbf6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Ajout d'une commande dans Firestore
export async function addOrderToFirestore(orderData) {
  try {
    const docRef = await addDoc(collection(db, "orders"), orderData);
    console.log("Commande ajoutée avec ID :", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Erreur ajout commande :", error);
  }
}

// Chargement des commandes depuis Firestore
export async function loadOrdersFromFirestore() {
  try {
    const querySnapshot = await getDocs(collection(db, "orders"));
    const orders = [];
    querySnapshot.forEach((doc) => {
      orders.push({ id: doc.id, ...doc.data() });
    });
    return orders;
  } catch (error) {
    console.error("Erreur chargement commandes :", error);
    return [];
  }
}

export default db;
