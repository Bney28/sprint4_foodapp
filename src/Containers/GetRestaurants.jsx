import React, { useContext, useEffect } from 'react'
import { restaurant } from '../Context'
import RestaurantList from '../Components/RestaurantList'

const GetRestaurants = () => {

  const { getData } = useContext(restaurant.restDispatcherContext)
  const { rest, error } = useContext(restaurant.restContext)

  useEffect(() => {
    if (!rest) {
      getData()
    }
  }, [rest])

  return (
    <>
      <div className="cont-getrest">
        <RestaurantList list={rest}/>
      </div>
    </>
  )
}

export default GetRestaurants