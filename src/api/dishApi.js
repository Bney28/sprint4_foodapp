import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "./firebase"

// Traer Platos de la db

export const getDish = async (restid) => {

    const dbCollection = collection(db, `restaurant/${restid}/dish`)

    //snapshot empaqueta los datos
    const snapshot = await getDocs(dbCollection)
    const dataD = []

    snapshot.forEach((dish) => {
        const dishMenu = dish.data()
        dishMenu.id = dish.id
        dataD.push(dishMenu)
    })

    /* console.log("Log desde api", dataD); */

    return { dataD }
}

export const getOneDish = async (restid, dishid) => {

    const dbCollection = collection(db, `restaurant/${restid}/dish`)

    //snapshot empaqueta los datos
    const snapshot = await getDoc(doc(dbCollection, dishid))
    const oneDish = snapshot.data()

    oneDish.id = snapshot.id

    /* console.log("Log desde api", dataD); */

    return { oneDish }
}

/* export const createDish = async (dish, restId) => {

    const dbCollection = collection(db, `restaurant/${restId}/dish`)
    await addDoc(dbCollection, dish)

} */