import React from 'react'


const RestaurantCard = ({ banner, name, description, stars, schedule }) => {

  //FUNCIONES EN ESTE COMPONENTE
  // Traer la data de los restaurantes de la Firesotre
  // Mapear e impirmir una card por cada restaurante

  return (
    <>
      <div className='rest-list__cont'>
        <div className="card-rest__img">
          <img src={banner} className="img-fluid rounded-start" alt="banner" />
        </div>

        <div className="card-rest__body">
          <h5 className="card-rest__title">{name}</h5>
          <p className="card-rest__stars">{stars}</p>
          <p className="card-rest__text">{schedule}</p>
          <p className="card-rest__price">{description}</p>
        </div>
      </div>
    </>
  )
}

export default RestaurantCard