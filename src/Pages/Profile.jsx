import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth as authApi } from '../api'
import { auth as authCont } from '../Context'
import '../Styles/Profile.sass'

const Profile = () => {

  const { user } = useContext(authCont.authContext)
  console.log(user);

  const { displayName, email, photoURL, phoneNumber, birdthDate } = user

  let navigate = useNavigate()
  const handleLogout = () => {
    authApi.logout()
    navigate("/login")
  }

  return (
        <>
          <div className="cont-ppal-profile">
            <div className="image-profile">
              <img src={photoURL} alt="profile" />
            </div>
            <div className="info-profile">
              <h2>¡Bienvenido/a!</h2>
              <h6><input type="text" placeholder='Name' value={displayName} /></h6>
              <h6><input type="text" placeholder='E-mail' value={email} /></h6>
              <h6><input type="text" placeholder='Phone Number' value={phoneNumber} /></h6>
              <h6><input type="text" placeholder='Birth Date' value={birdthDate} /></h6>
            </div>
            <div className='btn-edit'>
              <button onClick={""} className="btn">Edit Profile</button>
            </div>
            <div className='btn-logout'>
              <button onClick={handleLogout} className="btn">Log Out</button>
            </div>
          </div>
        </>
  )
}

export default Profile