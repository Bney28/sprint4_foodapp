import React, { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { DishCard } from '../Components'
import { dish } from '../Context'

const DishDetail = () => {

  const { currentDish, setCurrentDish, getCurrentDish } = useContext(dish.dishContext)
  const { restid, dishid } = useParams()
  const LINK_ADDRESS = `/restaurant/${restid}/`

  useEffect(() => {

    if (dishid) {
      setCurrentDish(null)
      getCurrentDish(restid, dishid)
    }
  }, [dishid])

  console.log(currentDish);

  return (
    <>
      {currentDish ? (
        <>
          <Link to={LINK_ADDRESS}>
            <i className="fa-solid fa-chevron-left"></i>
          </Link>
          <div>
            <DishCard currentDish={currentDish} />
          </div>
        </>
      ) : (
        <>
          <Link to={LINK_ADDRESS}>
            <i className="fa-solid fa-chevron-left"></i>
          </Link>
          <div className="spinner-border text-secondary loader" role="status"></div>
        </>
      )

      }
    </>
  )
}

export default DishDetail