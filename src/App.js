import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import './Styles/General.sass'

const App = () => {
  return (
    <>
      <div>App</div>
      <RouterProvider router={router}/>
    </>
  )
}

export default App