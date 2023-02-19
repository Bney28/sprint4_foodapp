import React, { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GetDishes } from '../Containers'
import { restaurant } from '../Context'
import '../Styles/Details.sass'

const RestDetail = () => {

    const { restid } = useParams()

    const { currentRest } = useContext(restaurant.restContext)
    const { getDataDetails, setCurrentRest } = useContext(restaurant.restDispatcherContext)

    useEffect(() => {
        setCurrentRest(null)
        if (restid) {
            getDataDetails(restid)
        }

    }, [restid])


    return (
        <>
            {
                currentRest ? (
                    <>
                        <Link to={"/"}>
                            <i className="fa-solid fa-chevron-left"></i>
                        </Link>

                        <div className="divRestDetail">

                            <div className="divRestDetail__img">
                                <img src={currentRest.banner} alt="restaurant-picture" />
                            </div>
                            <div className="divRestDetail__info">
                                <h2>{currentRest.name}</h2>
                                <p>{currentRest.description}</p>
                                <p>{currentRest.stars}</p>
                                <p>{currentRest.schedule}</p>
                            </div>
                        </div>

                        <div className="cont-dishes">
                            <GetDishes />
                        </div>
                    </>
                ) : (
                    <div className="spinner-border text-secondary loader" role="status"></div>
                )
            }
        </>
    )
}

export default RestDetail