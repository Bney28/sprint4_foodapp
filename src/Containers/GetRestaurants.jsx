import React, { useContext, useEffect } from 'react'
import { restaurant } from '../Context'
import RestaurantList from '../Components/RestaurantList'

const GetRestaurants = ({ restFiltered }) => {

  const { getData } = useContext(restaurant.restDispatcherContext)
  const { rest, isLoading } = useContext(restaurant.restContext)

  useEffect(() => {
    if (rest) {
      getData()
    }
  }, [])

  return (
    <>
      {
        isLoading && <div className="spinner-border text-warning" role="status"></div>
      }
      <div className="cont-getrest">
        <RestaurantList list={restFiltered} />
      </div>
    </>
  )
}

export default GetRestaurants