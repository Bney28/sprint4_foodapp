import React, { useContext, useState, useEffect } from 'react'
import { dishApi } from '../api'
import { restaurant } from '../Context'
import CardFiltered from '../Components/CardFiltered'
import '../Styles/General.sass'

const Search = () => {

  const [allDishes, setAllDishes] = useState([])
  const [currentDishes, setCurrentDishes] = useState([])
  const [filtered, setFiltered] = useState()

  /* const { getDataDishes } = useContext(dish.dishContext) */
  const { getData } = useContext(restaurant.restDispatcherContext)
  const { rest } = useContext(restaurant.restContext)

  const getAllDishes = async () => {
    await getData()
    rest.forEach(async (_rest) => {
      let restid = _rest.id
      let res = await dishApi.getDish(restid)
      setAllDishes(allDishes => [...allDishes, res.dataD])
    });
  }

  const handleSearch = (e) => {
    
    const searching = e.target.value

    for (let i = 0; i < allDishes.length; i++) {
      const restDishes = allDishes[i]

      for (let d = 0; d < restDishes.length; d++) {
        const dishes = restDishes[d];

        /* console.log(dishes, d, "dishes"); */

        if (currentDishes.length === 0) {
          setCurrentDishes(currentDishes => [...currentDishes, dishes])
        }
        /* console.log(currentDishes, "Current Dishes"); */
      }
    }

    filter(searching, currentDishes)

  }

  const filter = (_value, _array) => {

    /* console.log(_value, "value");
    console.log(_array, "array"); */

    const dishfilter = _array.filter(({ category, name }) => {
      return category.includes(_value) || name.includes(_value)
    })

    setFiltered(dishfilter)
  }

  useEffect(() => {
    if (allDishes.length === 0) {
      getData()
      getAllDishes()
    }
  }, [allDishes])


  return (
    <>
      <div className='divSearch'>
        <div className="divSearch__iconInput">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder='Search for a dish'
            onChange={(e) => handleSearch(e)}
          />
          <i className="fa-solid fa-trash-can"></i>
        </div>
        <div className="divSearch__text">
          <p>Recent Searches</p>
          <CardFiltered filtered={filtered} />
        </div>
      </div>
    </>
  )
}

export default Search