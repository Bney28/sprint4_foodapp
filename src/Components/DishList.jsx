import React from 'react'
import InfoDish from './InfoDish';

const DishList = ({ list }) => {
  console.log({list});

  return (
    <>
      <div className="dish-list">
        {
          list && list.map((e) => {
            return (
              <InfoDish
                key={e.id}
                id={e.id}
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