import React from 'react'
import { useNavigate } from 'react-router-dom'
import notFound from '../Imgs/not-found.png'

const CardFiltered = ({ filtered }) => {

    const navigate = useNavigate()

    if (filtered && filtered.length === 0) return (
        <img src={notFound} />
    )

    return (
        <>
            {
                filtered && filtered.map((e) => {
                    const { name, category, price, image, rest, id } = e

                    const handleClick = () => {
                        navigate(`restaurant/${rest}/${id}`)
                    }

                    return (
                        <div className="miniCardDish" onClick={handleClick} key={id}>
                            <div className="miniCardDish__img">
                                <img src={image} alt={name} />
                            </div>

                            <div className="miniCardDish__info">
                                <h5>{name} - {category}</h5>
                                <p>Price: {price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CardFiltered