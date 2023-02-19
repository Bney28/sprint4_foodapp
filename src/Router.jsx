import React from 'react'
import { Home, Orders, DishDetail, Profile, Search, Login, RestDetail } from './Pages'
import { Navbar } from './Layout'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navbar />} >
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/profile" element={<Profile />} />
            </ Route>
            <Route path="/restaurant/:restid/*" element={<RestDetail />} />
            {<Route path="/restaurant/:restid/:dishid/*" element={<DishDetail />} />}

        </>
    )
)