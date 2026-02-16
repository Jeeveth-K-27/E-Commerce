import React from 'react'
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import UserLayout from './Components/Layout/UserLayout'
import Home from './Pages/home'
import {Toaster} from 'sonner'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from './Pages/profile'

const App = () => {
  return (
    <BrowserRouter>
    <Toaster position="top-right"/>
      <Routes>

        <Route path='/' element={<UserLayout />} >
        <Route index element={<Home/>} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
        <Route path='profile' element={<Profile/>} />
        </Route>


        <Route>{/* Admin Layout */}</Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App