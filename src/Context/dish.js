import React, { createContext, useState } from "react";
import { dishApi } from "../api";

export const dishContext = createContext()

export const DishesProvider = ({ children }) => {

    const [dish, setDish] = useState()
    const [error, setError] = useState()

    const getData = async () => {
        try {
            /* setIsLoading(true) */
            const res = await dishApi.getDish()
            /* setIsLoading(false) */
            setDish(res.dataD)
            console.log("Log desde context", res.dataD);


        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <dishContext.Provider value={{ dish, setDish, getData }}>
                {children}
            </dishContext.Provider>
        </>
    )

}