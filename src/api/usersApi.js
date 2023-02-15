import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase"

const dbCollection = collection(db, "user")

export const createUser = async (user, id) => await setDoc(doc(dbCollection, id), user)