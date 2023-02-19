import React from 'react'

const DishCard = ({ currentDish }) => {

  console.log(currentDish);


  return (
    <>
      <div className="divCardDish">

        <div className="divCardDish__img">
          <img src={currentDish.image} alt="dish-picture" />
        </div>

        <div className="divInfo">
          <div className="divInfo__nameTime">
            <h5>{currentDish.name}</h5>
            <p><i className="fa-solid fa-clock"></i>{currentDish.cookingTime}</p>
          </div>

          <div className='divInfo__description'>
            <p>{currentDish.description} {currentDish.description} {currentDish.description}</p>
          </div>
        </div>

        <div className="buttons">
          <div className="input-group buttons__masymenos">
            <button className="btn">+</button>
            <input type="text" className="form-control" />
            <button className="btn">-</button>
          </div>
          
          <button className='btn buttons__add'>
            <p>Add</p>
            {currentDish.price}
          </button>

        </div>
      </div>
    </>
  )
}

export default DishCard