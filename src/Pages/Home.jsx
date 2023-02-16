import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { auth, restaurant } from '../Context'
import { GetRestaurants } from '../Containers'
import '../Styles/Home.sass'


const Home = () => {

  const { user } = useContext(auth.authContext)
  const { rest } = useContext(restaurant.restContext)
  const { setRest, getData } = useContext(restaurant.restDispatcherContext)


  const filterBtn = (_category) => {
    if (_category === "all") {
      getData()
    } else {
      /* getData() */

      let filterRest = rest.filter(({ categories }) => {
        return categories.includes(_category)
      }

      )

      setRest(filterRest)
    }
  }
  
    // - Filtrado de restaurantes por categoria


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
                <button onClick={() => filterBtn("all")} className="btn">All</button>
                <button onClick={() => filterBtn("burger")} className="btn"><i className="fa-solid fa-burger btn-filter__icon"></i>Burger</button>
                <button onClick={() => filterBtn("pizza")} className="btn"><i className="fa-solid fa-pizza-slice btn-filter__icon"></i>Pizza</button>
                <button onClick={() => filterBtn("salad")} className="btn"><i className="fa-solid fa-bowl-food btn-filter__icon"></i>Salad</button>
                <button onClick={() => filterBtn("pasta")} className="btn"><i className="fa-solid fa-bacon btn-filter__icon"></i>Pasta</button>
                <button onClick={() => filterBtn("fries")} className="btn"><i className="fa-solid fa-bowl-rice btn-filter__icon"></i>Fries</button>
                <button onClick={() => filterBtn("wings")} className="btn"><i className="fa-solid fa-drumstick-bite btn-filter__icon"></i>Wings</button>
                <button onClick={() => filterBtn("soup")} className="btn"><i className="fa-solid fa-utensils btn-filter__icon"></i>Soup</button>
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