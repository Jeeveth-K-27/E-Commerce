import React from 'react'
import Topbar from '../Layout/Topbar'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header  className='border-b-2'>
        {/* Top Bar */}
            <Topbar/>
        {/* NavBar */}
            <Navbar/>
        {/* Cart Drawer */}

    </header>
  )
}

export default Header