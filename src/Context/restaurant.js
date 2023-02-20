import React, { createContext, useState } from "react";
import { restaurantsApi } from '../api'

export const restContext = createContext()
export const restDispatcherContext = createContext()

export const RestaurantsProvider = ({ children }) => {

    const [rest, setRest] = useState()
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [currentRest, setCurrentRest] = useState()
    const [order, setOrder] = useState([])

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

    const getDataDetails = async (restid) => {
        try {
            setIsLoading(true)
            const res = await restaurantsApi.getRestDetails(restid)
            setCurrentRest(res.data)
            /* console.log(res.data); */
            setIsLoading(false)

        } catch (error) {
            setError(error.message)
        }
    }

    const state = { rest, error, isLoading, currentRest, order }
    const dispatchers = { getData, setRest, setCurrentRest, setIsLoading, getDataDetails, setOrder }

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