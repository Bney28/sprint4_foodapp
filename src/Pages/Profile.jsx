import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth as authApi } from '../api'
import { auth as authCont } from '../Context'
import '../Styles/Profile.sass'

const Profile = () => {

  let navigate = useNavigate()
  const { user, sendUser } = useContext(authCont.authContext)
  /* console.log(user); */

  const LINK_ADDRESS = `user/${user.uid}`
  console.log(user.uid);

  const handleLogout = () => {
    authApi.logout()
    navigate("/login")
  }

  return (
    <>
      <div className="cont-ppal-profile">
        <div className="image-profile">
          <img src={user.photoURL} alt="profile-img" />
        </div>

        <div className="info-profile">
          <h2>¡Welcome!</h2>
          <h6>{user.displayName}</h6>
          <h6>{user.email}</h6>
        </div>

        <Link to={LINK_ADDRESS}>
          <div className='btn-edit'>
            <button className="btn">Edit Profile</button>
          </div>
        </Link>

        <div className='btn-logout'>
          <button onClick={() => handleLogout()} className="btn">Log Out</button>
        </div>
      </div>
    </>
  )
}

export default Profile