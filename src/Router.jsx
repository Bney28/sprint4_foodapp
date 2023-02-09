import React from 'react'
import { Home, Orders, Profile, Search } from './Pages'
import { Navbar } from './Layout'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Navbar />} >
                <Route path="/" element={<Home />}/>
                <Route path="/search" element={<Search />}/>
                <Route path="/orders" element={<Orders />}/>
                <Route path="/profile" element={<Profile />}/>

            </ Route>

        </>
    )
)