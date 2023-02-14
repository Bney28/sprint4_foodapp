import { collection, addDoc } from "firebase/firestore";

import { db } from "./firebase"

const dbCollection = collection(db, "restaurant")

export const createRest = async (rest) => await addDoc(dbCollection, rest)