import React, { useContext } from 'react'
import img from '../Imgs/Img.png'
import '../Styles/Home.sass'
import { Navigate } from 'react-router-dom'
import { auth} from '../Context'


const Home = () => {
  
  const { user } = useContext(auth.authContext)

  return (
    <>
      {user ?
        <>
          <div>Home</div>

          <div className="cont-ppal">
            <div className="card-desc">
              Descuentos en Carrusel ._.
            </div>

            <p>Restaurants and Cafes</p>

            <div className="btn-filter">
              <button className="btn">All</button>
              <button className="btn"><i className="fa-solid fa-burger btn-filter__icon"></i>Fast Food</button>
              <button className="btn"><i className="fa-solid fa-pizza-slice btn-filter__icon"></i>Pizzas</button>
              <button className="btn"><i className="fa-solid fa-bowl-food btn-filter__icon"></i>Salads</button>
              <button className="btn"><i className="fa-solid fa-champagne-glasses btn-filter__icon"></i>Drinks</button>
            </div>


            <div className="card card-rest">

              <div className="card-rest__img">
                <img src={img} className="img-fluid rounded-start" alt="" />
              </div>

              <div className="card-rest__body">
                <h5 className="card-rest__title">Pardes Restaurant</h5>
                <p className="card-rest__stars">
                  <i className="fa-solid fa-star card-rest__icon"></i>
                  <i className="fa-solid fa-star card-rest__icon"></i>
                  <i className="fa-solid fa-star card-rest__icon"></i>
                  <i className="fa-solid fa-star card-rest__icon"></i>
                  <i className="fa-solid fa-star card-rest__icon"></i>
                </p>
                <p className="card-rest__text">Work time 09:30-23:00</p>
                <p className="card-rest__price">Before you 4$</p>
              </div>

            </div>
          </div>
        </>
        :
        <Navigate to="/login" />
      }
    </>
  )
}

export default Home