import React from 'react'
import { Link, useParams } from 'react-router-dom'

const InfoDish = ({ image, name, price, id }) => {
    const { restid } = useParams()
    const LINK_ADDRESS = `/restaurant/${restid}/${id}`

    return (
        <>
            <div className="divInfoDish">
                <Link to={LINK_ADDRESS}>
                    <div className="divInfoDish__img">
                        <img src={image} alt="dish-picture" />
                    </div>
                    <div className="divInfoDish__info">
                        <h5>{name}</h5>
                        <p>Price: {price}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default InfoDish