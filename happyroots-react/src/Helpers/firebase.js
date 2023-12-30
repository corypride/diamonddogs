import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "../Config/firebaseConfig";
  
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
