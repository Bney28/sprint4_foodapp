import React, { useContext } from 'react'
import logo from '../Imgs/Logo.png'
import { auth, users } from '../api'
import { auth as authCont } from '../Context'
import '../Styles/Login.sass'


const Login = () => {

  const { user, setUser } = useContext(authCont.authContext)

  const handleLogin = async () => {
    try {
      const userFb = await auth.login()
      setUser(userFb)
      const { displayName, email, photoURL } = userFb
      await users.createUser({ displayName, email, photoURL })
      console.log(userFb);

    } catch (error) {
      console.log(error);

    }
  }


  return (
    <>
      <div className="logo-login">
        <img src={logo} alt="logo" />
      </div>
      <div className="texts">
        <h4 className="texts__title">Sing in</h4>
        <p className="texts__text">Login or create an account with your phone number to start ordering</p>
      </div>
      <div className="btn-login">
        <button onClick={handleLogin} className="btn">Login</button>
      </div>
    </>
  )
}

export default Login