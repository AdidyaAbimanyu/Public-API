import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBk2qi9MOgRGxP3WrmaQEiv9gTsEyobRi8",
  authDomain: "universities-b7318.firebaseapp.com",
  databaseURL: "https://universities-b7318.firebaseio.com",
  projectId: "universities-b7318",
  storageBucket: "universities-b7318.firebasestorage.app",
  messagingSenderId: "664588779907",
  appId: "1:664588779907:web:9dc6f1fa45dcbedbcff6b6",
  measurementId: "G-FYY5MTGQ0F"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
export default app;