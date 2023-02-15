import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { auth as authApi } from '../api'
import { auth as authCont } from '../Context'
import logo from '../Imgs/Logo.png'
import '../Styles/Profile.sass'

const Profile = () => {

  const { user } = useContext(authCont.authContext)
  console.log(user);

  const { displayName, email, photoURL, phoneNumber, birdthDate } = user

  const handleLogout = () => {
    authApi.logout()
  }

  return (
    <>
      {user ?
        <>
          <div className="cont-ppal-profile">            
            <div className="image-profile">
              <img src={logo} alt="profile" />
            </div>
            <div className="info-profile">
              <h2>¡Bienvenido/a!</h2>
              <h6><input type="text" placeholder='Name' value={displayName}/></h6>
              <h6><input type="text" placeholder='E-mail' value={email}/></h6>
              <h6><input type="text" placeholder='Phone Number' value={phoneNumber}/></h6>
              <h6><input type="text" placeholder='Birth Date' value={birdthDate}/></h6>
            </div>
            <div className='btn-edit'>
              <button onClick={""} className="btn">Edit Profile</button>
            </div>
            <div className='btn-logout'>
              <button onClick={handleLogout} className="btn">Log Out</button>
            </div>
          </div>
        </>
        :
        <Navigate to="/login" />

      }

    </>
  )
}

export default Profile