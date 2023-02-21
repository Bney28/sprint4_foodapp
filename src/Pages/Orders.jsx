import React, { useContext } from 'react'
import { restaurant } from '../Context'
import '../Styles/Orders.sass'

const Orders = () => {

  const { order } = useContext(restaurant.restContext)
  const { setOrder } = useContext(restaurant.restDispatcherContext)

  const deleteOrders = () => {
    setOrder([])
  }

  const deleteOneOrder = (_id) => {
    console.log("click delete One");
    setOrder(order.filter(e => e.id !== _id))
  }

  if (order.length === 0) {
    return <p className='noOrders'><i className="fa-solid fa-cart-shopping"></i> Your Cart is Empty.</p>
  }

  return (
    <>
      <h5 className='h5'>All Orders</h5>
      <div className="divOrders">
        {
          order && order.map((e) => {
            return (
              <div className="divOrders__cards" key={e.name}>
                <div className="divOrders__img">
                  <img src={e.image} alt="rest-pic" />
                </div>

                <div className="divOrders__info">
                  <h5>{e.category} / {e.name}</h5>
                  <p>Total: ${e.total}</p>
                </div>

                <div className="deleteBtn">
                  <button className='btn' onClick={() => deleteOneOrder(e.id)}>
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </div>
            )
          })
        }

      </div>

      <div className='btnDelete'>
        <button onClick={deleteOrders} className="btn">Delete ALL</button>
      </div>


    </>
  )
}

export default Orders