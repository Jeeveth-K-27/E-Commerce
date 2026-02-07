import React from 'react'
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import UserLayout from './Components/Layout/UserLayout'
import Home from './Pages/home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<UserLayout />} >
        <Route index element={<Home/>} />
        </Route>


        <Route>{/* Admin Layout */}</Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App