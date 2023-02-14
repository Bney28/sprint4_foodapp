import { collection, addDoc } from "firebase/firestore";

import { db } from "./firebase"

export const createDish = async (dish, restId) => {

    const dbCollection = collection(db, `restaurant/${restId}/dish`)
    await addDoc(dbCollection, dish)

}