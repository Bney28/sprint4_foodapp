import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../Styles/Navbar.sass'

const Navbar = () => {
    return (
        <>

            <div className='divNav'>
                <Link className='divNav__link btn' to="/" ><i className="fa-solid fa-house-chimney divNav__icon"></i></Link>
                <Link className='divNav__link btn' to="/search" ><i className="fa-solid fa-magnifying-glass divNav__icon"></i></Link>
                <Link className='divNav__link btn' to="/orders" ><i className="fa-solid fa-clock-rotate-left divNav__icon"></i></Link>
                <Link className='divNav__link btn' to="/profile" ><i className="fa-regular fa-user divNav__icon"></i></Link>
            </div>

            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Navbar