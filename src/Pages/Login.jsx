import React, { useContext } from 'react'
import logo from '../Imgs/Logo.png'
import { auth, users } from '../api'
import { auth as authCont } from '../Context'


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
      <div>Login</div>
      <img src={logo} alt="logo" />
      <button onClick={handleLogin} className="btn">Login</button>
    </>
  )
}

export default Login