import React from 'react'
import {TbBrandMeta} from 'react-icons/tb'
import {IoLogoInstagram} from 'react-icons/io'
import {RiTwitterXLine} from 'react-icons/ri'

const Topbar = () => {
  return (
    <div className='bg-rabbit-red text-white'>

        <div className='flex px-10 py-5 justify-between items-center'>

            <div className='hidden md:flex items-center space-x-4'>
                <a href="#" className='hover:text-gray-300'>
                    <TbBrandMeta className='h-5 w-5' />
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <IoLogoInstagram className='h-5 w-5' />
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <RiTwitterXLine className='h-[16px] w-[16px]' />
                </a>
            </div>

            <div className='text-sm text-center flex-grow'>
                <span>We ship worldwide - Fast and reliable shipping</span>
            </div>

            <div className='text-sm hidden md:block'>
                <a href="tel:9940641254" className='hover:text-gray-300'>+91-9940641254</a>
            </div>

        </div>

    </div>
  )
}

export default Topbar