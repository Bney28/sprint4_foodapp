import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { auth, restaurant } from './Context'
import { router } from './Router'
import './Styles/General.sass'

const App = () => {
  return (
    <>
      <auth.AuthProvider>
        <restaurant.RestaurantsProvider>

          <RouterProvider router={router} />

        </restaurant.RestaurantsProvider>
      </auth.AuthProvider>
    </>
  )
}

export default App