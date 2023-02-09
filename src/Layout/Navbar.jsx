import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div>Navbar</div>

            <div className='divNav'>
                <button className='divNav__btn btn'><i className="fa-solid fa-house-chimney"></i></button>
                <button className='divNav__btn btn'><i className="fa-solid fa-magnifying-glass"></i></button>
                <button className='divNav__btn btn'><i className="fa-solid fa-clock-rotate-left"></i></button>
                <button className='divNav__btn btn'><i className="fa-regular fa-user"></i></button>
            </div>

            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Navbar