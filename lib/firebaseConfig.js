// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyDqV5OtMyMQpj96-IF8_9scGCjQVus9q88",
//   authDomain: "jgruppen-44878.firebaseapp.com",
//   databaseURL: "https://jgruppen-44878.firebaseio.com",
//   projectId: "jgruppen-44878",
//   storageBucket: "jgruppen-44878.appspot.com",
//   messagingSenderId: "971908012744",
//   appId: "1:971908012744:web:4b322aa619336c68fe63fd",
//   measurementId: "G-P8BR0J1868"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDqV5OtMyMQpj96-IF8_9scGCjQVus9q88",
  authDomain: "jgruppen-44878.firebaseapp.com",
  databaseURL: "https://jgruppen-44878.firebaseio.com",
  projectId: "jgruppen-44878",
  storageBucket: "jgruppen-44878.appspot.com",
  messagingSenderId: "971908012744",
  appId: "1:971908012744:web:4b322aa619336c68fe63fd",
  measurementId: "G-P8BR0J1868",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };