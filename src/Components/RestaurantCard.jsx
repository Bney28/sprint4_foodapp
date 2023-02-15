import React from 'react'
import img from '../Imgs/Img.png'


const RestaurantCard = () => {

  //FUNCIONES EN ESTE COMPONENTE
  // Traer la data de los restaurantes de la Firesotre
  // Mapear e impirmir una card por cada restaurante

  return (
    <>
      <div className="card-rest__img">
        <img src={img} className="img-fluid rounded-start" alt="" />
      </div>

      <div className="card-rest__body">
        <h5 className="card-rest__title">Pardes Restaurant</h5>
        <p className="card-rest__stars">
          <i className="fa-solid fa-star card-rest__icon"></i>
        </p>
        <p className="card-rest__text">Work time 09:30-23:00</p>
        <p className="card-rest__price">Cost 4$</p>
      </div>
    </>
  )
}

export default RestaurantCard