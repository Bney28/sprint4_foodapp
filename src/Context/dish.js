import React, { createContext, useState } from "react";
import { dishApi } from "../api";

export const dishContext = createContext()

export const DishesProvider = ({ children }) => {

    const [dishInfo, setDishInfo] = useState()
    const [currentDish, setCurrentDish] = useState()
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const getDataDishes = async (restid) => {
        try {
            setIsLoading(true)
            const res = await dishApi.getDish(restid)
            setIsLoading(false)
            setDishInfo(res.dataD)
            /* console.log("Log desde context", res.dataD); */

        } catch (error) {
            setError(error.message)
        }
    }

    /* console.log(dishInfo); */

    const getCurrentDish = async (restid, dishid) => {
        try {
            setIsLoading(true)
            const res = await dishApi.getOneDish(restid, dishid)
            setIsLoading(false)
            setCurrentDish(res.oneDish)
            /* console.log("Log desde context", res.dataD); */

        } catch (error) {
            setError(error.message)
        }
    }

    const contextVar = { dishInfo, setDishInfo, getDataDishes, isLoading, getCurrentDish, currentDish, setCurrentDish }

    return (
        <>
            <dishContext.Provider value={contextVar}>
                {children}
            </dishContext.Provider>
        </>
    )

}