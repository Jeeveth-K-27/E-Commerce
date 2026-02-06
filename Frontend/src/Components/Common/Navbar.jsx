import  { React, useState } from 'react'
import {Link, Links} from 'react-router-dom'
import { HiOutlineUser,HiOutlineShoppingBag,HiBars3 } from 'react-icons/hi2'
import Searchbar from './Searchbar'
import CartDrawer from '../Layout/CartDrawer'

const Navbar = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

  return (
    <>
    <nav className='flex px-10 py-5 items-center justify-between'>
        {/* Left - Logo */}
            <div>
                <Link to="/" className='text-2xl font-medium'>Logo</Link>
            </div>

        {/* Center Navigation Links */}
            <div className='hidden md:flex space-x-6'>
                <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Men</Link>
                <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>WOmen</Link>
                <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Top Wear</Link>
                <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Bottom Wear</Link>
            </div>

        {/* Right - Icons */}
            <div className='flex items-center justify-center  space-x-6'>

                {/* Search Icon */}
                <Searchbar/>

                <button onClick={toggleCartDrawer} className='relative hover:text-black'>
                    <HiOutlineShoppingBag className='h-5 w-5 text-gray-700'/>
                    <span className='absolute -top-2 bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5'>2</span>
                </button>

                <Link to="/profile" className='hover:text-black'><HiOutlineUser className=" h-5 w-5 text-gray-700"/></Link>

                <button className='md:hidden'><HiBars3 className='h-6 w-6 text-gray-700'/></button>
            </div>

    </nav>
    <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
  </>
  )
  
}

export default Navbar