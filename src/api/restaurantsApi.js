import { collection, setDoc, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "./firebase"

const dbCollection = collection(db, "restaurant")

// Traer Restaurantes de la db

export const getRest = async () => {
    //snapshot empaqueta los datos
    const snapshot = await getDocs(dbCollection)
    const dataR = []
  
    snapshot.forEach((rest) => {
      const restaurant = rest.data()
      restaurant.id = rest.id
      dataR.push(restaurant)
    })
    
    /* console.log("Log desde api", dataR); */
    
    return { dataR }
  }

// Crear nuevo Restaurante
export const createRest = async (restId) => await setDoc(dbCollection, restId)

export const getRestDetails = async (_id) => {

  const snapshot = await getDoc(doc(dbCollection, _id))
  const restDet = snapshot.data()
  restDet.id = snapshot.id

  return { data: restDet }
}