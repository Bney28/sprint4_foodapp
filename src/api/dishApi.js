import { collection, addDoc, getDocs } from "firebase/firestore";

import { db } from "./firebase"


// Traer Platos de la db

export const getDish = async (dishId) => {

    const dbCollection = collection(db, `restaurant/${dishId}/dish`)
   
    //snapshot empaqueta los datos
    const snapshot = await getDocs(dbCollection)
    const dataD = []

    snapshot.forEach((dish) => {
        const dishMenu = dish.data()
        dishMenu.id = dish.id
        dataD.push(dishMenu)
    })

    console.log("Log desde api", dataD);

    return { dataD }
}

export const createDish = async (dish, restId) => {

    const dbCollection = collection(db, `restaurant/${restId}/dish`)
    await addDoc(dbCollection, dish)

}