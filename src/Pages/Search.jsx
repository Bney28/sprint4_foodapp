import React from 'react'
import '../Styles/General.sass'

const Search = () => {

  // Funcionalidades en este Componente
  // - Filtro por el input para los platos

  return (
    <>
      <div className='divSearch'>
        <div className="divSearch__iconInput">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder='Search for a dish' />
        </div>
        <div className="divSearch__text">
          <p>Recent Searches</p>
        </div>
      </div>
    </>
  )
}

export default Search