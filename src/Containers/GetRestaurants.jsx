import React, { useContext, useEffect } from 'react'
import { restaurant } from '../Context'
import RestaurantList from '../Components/RestaurantList'

const GetRestaurants = () => {

  const { getData } = useContext(restaurant.restDispatcherContext)
  const { rest, isLoading } = useContext(restaurant.restContext)

  useEffect(() => {
    if (!rest) {
      getData()
    }
  }, [rest])

  return (
    <>
      {
        isLoading && <div className="spinner-border text-warning" role="status"></div>
      }
      <div className="cont-getrest">
        <RestaurantList list={rest} />
      </div>
    </>
  )
}

export default GetRestaurants