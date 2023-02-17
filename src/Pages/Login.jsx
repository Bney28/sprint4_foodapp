import React, { useContext } from 'react'
import logo from '../Imgs/Logo.png'
import { auth, usersApi } from '../api'
import { auth as authCont } from '../Context'
import '../Styles/Login.sass'
import { useNavigate } from 'react-router-dom'


const Login = () => {

  const { setUser } = useContext(authCont.authContext)

  let navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const userFb = await auth.login()
      setUser(userFb)

      const { displayName, email, photoURL, uid } = userFb
      await usersApi.createUser({ displayName, email, photoURL }, uid)

      navigate("/")
      /* console.log(userFb); */

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