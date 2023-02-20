import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { restaurant } from '../Context'

const DishCard = ({ currentDish }) => {

  let navigate = useNavigate()
  const { name, description, image, category, price, rest, cookingTime } = currentDish
  /* console.log(currentDish); */
  const { setOrder } = useContext(restaurant.restDispatcherContext)

  const [quant, setQuant] = useState(1)
  const [total, setTotal] = useState(price)

  const plus = () => {
    setQuant(quant + 1)
  }

  const minus = () => {
    if (quant > 1) {
      setQuant(quant - 1)
    }
  }

  useEffect(() => {
    setTotal(quant * price)

  }, [quant])

  const newOrder = () => {
    let orderInfo = {
      name: name,
      description: description,
      image: image,
      rest: rest,
      category: category,
      quant: quant,
      total: total
    }
    setOrder(order => [...order, orderInfo])
    navigate("/orders")
   /*  console.log(orderInfo); */
  }

  return (
    <>
      <div className="divCardDish">

        <div className="divCardDish__img">
          <img src={image} alt="dish-picture" />
        </div>

        <div className="divInfo">
          <div className="divInfo__nameTime">
            <h5>{name}</h5>
            <p><i className="fa-solid fa-clock"></i>{cookingTime}</p>
          </div>

          <div className='divInfo__description'>
            <p>{description}{description}{description}</p>
          </div>
        </div>

        <div className="buttons">
          <div className="input-group buttons__masymenos">
            <button onClick={plus} className="btn">+</button>
            <input disabled type="text" className="form-control" value={quant} />
            <button onClick={minus} className="btn">-</button>
          </div>

          <button
          className='btn buttons__add'
          onClick={newOrder}
          >
            <p>Add <i className="fa-solid fa-cart-shopping"></i> ${total}</p>
          </button>

        </div>
      </div>
    </>
  )
}

export default DishCard