import { collection, addDoc, } from "firebase/firestore";
import { db } from "./firebase"

const dbCollection = collection(db, "user")

export const createUser = async (user) => await addDoc(dbCollection, user)