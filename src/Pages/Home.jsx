import React, { useContext } from 'react'
import '../Styles/Home.sass'
import { Navigate } from 'react-router-dom'
import { auth } from '../Context'
import { GetRestaurants } from '../Containers'


const Home = () => {

  //FUNCIONES EN ESTE COMPONENTE
  // - Impirmir cards de restaurantesa
  // - Filtrado de restaurantes por categoria

  const { user } = useContext(auth.authContext)

  return (
    <>
      {user ?
        <>
          <div className="cont-ppal">

            <div className="location">
              <i className="fa-solid fa-location-dot location__icon"></i>
              <div className='address'>
                <p className='address__deliver'>Deliver to</p>
                <p className='address__city'>882 Well St, New York</p>
              </div>
            </div>

            <div className="card-desc">
              <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1676398916/food-app/Promo_1_jvxz2w.png" alt="image-descount" className='card-desc__imgn' />
              <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1676399462/food-app/Promo_2_hgtikp.png" alt="image-descount" className='card-desc__imgn' />
              <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1676177775/food-app/4600925_o7wkl7.jpg" alt="image-descount" className='card-desc__imgn' />
            </div>

            <p>Restaurants and Cafes</p>

            <div className="btn-filter">
              <button className="btn">All</button>
              <button className="btn"><i className="fa-solid fa-burger btn-filter__icon"></i>Burger</button>
              <button className="btn"><i className="fa-solid fa-pizza-slice btn-filter__icon"></i>Pizza</button>
              <button className="btn"><i className="fa-solid fa-bowl-food btn-filter__icon"></i>Salad</button>
              <button className="btn"><i className="fa-solid fa-bacon btn-filter__icon"></i>Pasta</button>
              <button className="btn"><i className="fa-solid fa-bowl-rice btn-filter__icon"></i>Fries</button>
              <button className="btn"><i className="fa-solid fa-drumstick-bite btn-filter__icon"></i>Wings</button>
              <button className="btn"><i className="fa-solid fa-utensils btn-filter__icon"></i>Soup</button>
            </div>

            <div className="card card-rest">
              <GetRestaurants />
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