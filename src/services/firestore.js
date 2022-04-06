// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// const firebaseConfig = {
//     apiKey: "AIzaSyCd9AAtHydH5cMgkvF1bW_T6-dEltLKKz8",
//     authDomain: "codigo13-8ae02.firebaseapp.com",
//     projectId: "codigo13-8ae02",
//     storageBucket: "codigo13-8ae02.appspot.com",
//     messagingSenderId: "723288895511",
//     appId: "1:723288895511:web:b7ea51de185fb4d2f8ec52",
//     measurementId: "G-MV2J18V94R"
//   };


//   const app = initializeApp(firebaseConfig);
//   // Iniciar firestore
//   // database : base de datos
//   const db = getFirestore(app);
  
//   // Hacer la peticion para poder traer los productos
//   export const getProductClothes = async () => {
//     // paso 1: Traer la coleccion de datos
//     const collectionClothes = collection(db, "product-clothes");
//     // paso 2: Traer los documentos
//     const documentClothes = await getDocs(collectionClothes);
//     // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
//     const clothes = documentClothes.docs.map((doc) => doc.data());
//     return clothes;
//   };


import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCd9AAtHydH5cMgkvF1bW_T6-dEltLKKz8",
  authDomain: "codigo13-8ae02.firebaseapp.com",
  projectId: "codigo13-8ae02",
  storageBucket: "codigo13-8ae02.appspot.com",
  messagingSenderId: "723288895511",
  appId: "1:723288895511:web:b7ea51de185fb4d2f8ec52",
  measurementId: "G-MV2J18V94R"
};

const app = initializeApp(firebaseConfig);
// Iniciar firestore
// database : base de datos
const db = getFirestore(app);

// Hacer la peticion para poder traer los productos
export const getProductClothes = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionClothes = collection(db, "product_clothes");
  // paso 2: Traer los documentos
  const documentClothes = await getDocs(collectionClothes);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const clothes = documentClothes.docs.map((doc) => doc.data());
  return clothes;
};

