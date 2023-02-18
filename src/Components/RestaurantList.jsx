import React from 'react'
import RestaurantCard from './RestaurantCard'

const RestaurantList = ({ list }) => {

    return (
        <>
            <div className="rest-list">
                {
                    list && list.map((e) => {
                        return (
                            <RestaurantCard
                                key={e.id}
                                id={e.id}
                                banner={e.banner}
                                name={e.name}
                                description={e.description}
                                stars={e.stars}
                                schedule={e.schedule}
                                
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default RestaurantList