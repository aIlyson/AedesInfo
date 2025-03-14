import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  //firebase
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

export { db };
