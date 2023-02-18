import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantCard = ({ id, banner, name, description, stars, schedule }) => {

  const LINK_ADDRESS = `/restaurant/${id}`

  return (
    <>
      <Link to={LINK_ADDRESS}>
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
      </Link>
    </>
  )
}

export default RestaurantCard