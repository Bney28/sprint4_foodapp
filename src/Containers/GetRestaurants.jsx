import React, { useContext, useEffect } from 'react'
import { restaurant } from '../Context'
import RestaurantList from '../Components/RestaurantList'

const GetRestaurants = () => {

  const { getData } = useContext(restaurant.restDispatcherContext)
  const { data, error } = useContext(restaurant.restContext)

  useEffect(() => {
    if (!data) {
      getData()
    }
  }, [data])

  return (
    <>
      <div className="cont-getrest">
        <RestaurantList list={data}/>
      </div>
    </>
  )
}

export default GetRestaurants