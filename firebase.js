import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  updateDoc,
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQt8N5noHJB1fUbNhkHBWsLq1DbJ3M2YQ",
  authDomain: "react-proyect-8752f.firebaseapp.com",
  projectId: "react-proyect-8752f",
  storageBucket: "react-proyect-8752f.firebasestorage.app",
  messagingSenderId: "606724005846",
  appId: "1:606724005846:web:3ce6683dfa521a42abce77",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getProducts() {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productsList = querySnapshot.docs.map((docu) => ({
      id: docu.id,
      ...docu.data(),
    }));
    return productsList;
  } catch (error) {
    console.error("Error al obtener productos:", error);
  }
}

export async function updateProduct(id, toUpdate) {
  const itemDocRef = doc(db, "products", id);
  try {
    await updateDoc(itemDocRef, toUpdate);
    alert("Se actualizo el producto!");
  } catch (error) {
    console.log("Hubo un error al actualizar!", error);
  }
}

export async function getProductsByCategory(category) {
  try {
    const q = query(
      collection(db, "products"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docu) => ({
      id: docu.id,
      ...docu.data(),
    }));
  } catch (error) {
    console.error("Error al obtener productos por categoría:", error);
    return [];
  }
}

export async function getSingleProduct(id) {
  try {
    const documentRef = doc(db, "products", id);
    const snapshot = await getDoc(documentRef);
    if (snapshot.exists()) return { id: snapshot.id, ...snapshot.data() };
    else console.log("El producto no existe");
  } catch (error) {
    console.error("Error al obtener el producto:", error);
  }
}

export async function updateMultiple() {
  const batch = writeBatch(db);

  const docRef1 = doc(db, "products", "ZjkF4RdijYUaR3gseS30");
  const docRef2 = doc(db, "orders", "0Nu9HbjYKc7hmS67nNzd");

  batch.update(docRef1, { description: "usb Logitech" });
  batch.update(docRef2, { total: 1212 });

  try {
    await batch.commit();
  } catch (error) {
    console.log(error);
  }
}

export async function sendOrder(order) {
  try {
    const ordersCollection = collection(db, "orders");
    const docRef = await addDoc(ordersCollection, order);
    return docRef.id;
  } catch (error) {
    console.error("Error al enviar la orden:", error);
  }
}
