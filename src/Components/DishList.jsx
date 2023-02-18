import React from 'react'
import DishCard from './DishCard'

const DishList = ({ list }) => {
  console.log({list});
  return (
    <>
      <div>DishList</div>
      <div className="dish-list">
        {
          list && list.map((e) => {
            return (
              <DishCard
                key={e.id}
                image={e.image}
                name={e.name}
                description={e.description}
                category={e.category}
                cookingTime={e.cookingTime}
                price={e.price}
              />

            )
          })
        }

      </div>
    </>
  )
}

export default DishList