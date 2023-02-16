import React, { createContext, useState } from "react";
import { restaurantsApi } from '../api'

export const restContext = createContext()
export const restDispatcherContext = createContext()

export const RestaurantsProvider = ({ children }) => {

    const [rest, setRest] = useState()
    const [error, setError] = useState("")


    const getData = async () => {
        try {
            const res = await restaurantsApi.getRest()
            setRest(res.dataR)
        
        } catch (error) {
            setError(error.message)
        }
    }

    const state = { rest, error }
    const dispatchers = { getData, setRest }

    return (
        <>
            <restDispatcherContext.Provider value={dispatchers}>
                <restContext.Provider value={state}>
                    {children}
                </restContext.Provider>
            </restDispatcherContext.Provider>
        </>
    )

}