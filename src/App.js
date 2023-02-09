import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Navbar } from './Layout'
import { router } from './Router'

const App = () => {
  return (
    <>
      <div>App</div>
      <RouterProvider router={router}/>
    </>
  )
}

export default App