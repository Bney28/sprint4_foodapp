import { onAuthStateChanged } from 'firebase/auth'
import { useState, createContext } from 'react'
import { auth as authApi } from '../api'
import { usersApi } from '../api'

export const authContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    onAuthStateChanged(authApi.auth, (_user) => {

        if (_user) {
            /* console.log(_user); */
            setUser(_user)
        } else {
            setUser(null)
        }
    })


    const sendUser = async (userData) => {

        try {
            setIsLoading(true)
            await usersApi.updateUser(userData.id, userData)
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)
            setError(error.message)
        }
    }

    return (
        <authContext.Provider value={{ user, setUser, isLoading, sendUser }}>
            {children}
        </authContext.Provider>
    )
}