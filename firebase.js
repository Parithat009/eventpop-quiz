import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

var firebaseConfig = initializeApp({
  apiKey: "AIzaSyC6LHF07I5lhrQk30XTp-JH893FCn7MjbM",
  authDomain: "web-template-59a55.firebaseapp.com",
  databaseURL: "https://web-template-59a55.firebaseio.com",
  projectId: "web-template-59a55",
  storageBucket: "web-template-59a55.appspot.com",
  messagingSenderId: "1060893601606",
  appId: "1:1060893601606:web:9666ea1bc9a48f51297f47",
  measurementId: "G-2LB3LW785R"
});

// Initialize Firebase
export const firestore = getFirestore();
// export const firestore = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig).firestore()
//   : firebase.app().firestore()
