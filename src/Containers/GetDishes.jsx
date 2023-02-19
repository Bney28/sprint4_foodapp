import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DishList } from '../Components'
import { dish } from '../Context'

const GetDishes = () => {

  const { restid } = useParams()

  const { dishInfo, getDataDishes, isLoading } = useContext(dish.dishContext)

  useEffect(() => {
    
    getDataDishes(restid)
    /* if (dishInfo) {
    } */
  }, [restid])

  console.log(dishInfo);

  return (
    <>
      {
        isLoading && <div className="spinner-border text-warning" role="status"></div>
      }
      <div className="cont-getdishes">
        <h4>Our Menu</h4>
        <DishList list={dishInfo} />
      </div>
    </>
  )
}

export default GetDishes