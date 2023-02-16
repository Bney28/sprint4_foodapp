import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { auth, restaurant, dish } from './Context'
import { router } from './Router'
import './Styles/General.sass'

const App = () => {
  return (
    <>
      <auth.AuthProvider>
        <restaurant.RestaurantsProvider>
          <dish.DishesProvider>

            <RouterProvider router={router} />

          </dish.DishesProvider>
        </restaurant.RestaurantsProvider>
      </auth.AuthProvider>
    </>
  )
}

export default App