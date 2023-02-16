import React, { createContext, useState } from "react";
import { restaurantsApi } from '../api'

export const restContext = createContext()
export const restDispatcherContext = createContext()

export const RestaurantsProvider = ({ children }) => {

    const [rest, setRest] = useState()
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const getData = async () => {
        try {
            setIsLoading(true)
            const res = await restaurantsApi.getRest()
            setIsLoading(false)
            setRest(res.dataR)

        } catch (error) {
            setError(error.message)
        }
    }

    const state = { rest, error, isLoading }
    const dispatchers = { getData, setRest, setIsLoading }

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