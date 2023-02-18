import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DishList } from '../Components'
import { dish } from '../Context'

const GetDishes = () => {

  const { restid } = useParams()

  const { dishInfo, getDataDishes, isLoading } = useContext(dish.dishContext)

  useEffect(() => {
    if (!dishInfo) {
      getDataDishes(restid)
    }
  }, [restid])

  console.log(dishInfo);

  return (
    <>
      { 
        isLoading && <div className="spinner-border text-warning" role="status"></div>
      }
      <div className="cont-getdishes">
        <DishList list={dishInfo} />
      </div>
    </>
  )
}

export default GetDishes