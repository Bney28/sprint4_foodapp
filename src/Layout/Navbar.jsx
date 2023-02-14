import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../Styles/Navbar.sass'

const Navbar = () => {
    return (
        <>
            <div className="icons-cel">
                <div>
                    <p className='icons-cel__hour'>11:11</p>
                </div>

                <div className='social-media'>
                <i className="fa-brands fa-instagram social-media__icon"></i>
                    <i className="fa-brands fa-tiktok social-media__icon"></i>
                </div>

                <div className='div-icons'>
                    <i className="fa-solid fa-signal div-icons__icon"></i>
                    <i className="fa-solid fa-wifi div-icons__icon"></i>
                    <i className="fa-solid fa-battery-half div-icons__icon"></i>
                </div>
            </div>

            <div className='divNav'>
                <Link className='divNav__link' to="/" ><i className="fa-solid fa-house-chimney divNav__icon"></i></Link>
                <Link className='divNav__link' to="/search" ><i className="fa-solid fa-magnifying-glass divNav__icon"></i></Link>
                <Link className='divNav__link' to="/orders" ><i className="fa-solid fa-clock-rotate-left divNav__icon"></i></Link>
                <Link className='divNav__link' to="/profile" ><i className="fa-regular fa-user divNav__icon"></i></Link>
            </div>

            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Navbar