import { onAuthStateChanged } from 'firebase/auth'
import { useState, createContext } from 'react'
import { firebase } from '../api'

export const authContext = createContext()

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState({})

    onAuthStateChanged(firebase.auth, (_user) => {

        if (_user) {
            console.log(_user);
            setUser(_user)
        } else {
            setUser(null)
        }
    })

    return (
        <authContext.Provider value={{ user, setUser }}>
            {children}
        </authContext.Provider>
    )
}