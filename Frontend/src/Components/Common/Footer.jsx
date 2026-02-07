import React from 'react'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXFill } from 'react-icons/ri'
import { TbBrandMeta, TbPhoneCall } from 'react-icons/tb'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='border-t py-12'>

        <div className="mx-10 flex flex-col md:flex-row justify-between gap-8 px-4 lg:px-0">

            {/* Newsletter */}
            <div>
                <h3 className='text-lg text-gray-800 mb-4'>Newsletter</h3>
                <p className='text-gray-500 mb-4'>Be the first to hear about our new products, exclusive events, and online offers.</p>
                <p className='mb-4 text-sm font-medium text-gray-600'>Sign up and get 10% off on your first order.</p>

                <form className="flex">

                    <input type="email" placeholder='Enter your email' 
                    className='p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md 
                    focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all' required/>

                    <button type='submit' className='bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all'>
                        Submit
                    </button>

                </form>

            </div>

            {/* Shoplinks */}
            <div>
                <h3 className='text-lg text-gray-800 mb-4'>Shop</h3>
                <ul className='space-y-3 text-gray-600'>
                    <li><Link to="#" className="hover:text-gray-500 transition-colors">Men's Top wear</Link></li>
                    <li><Link to="#" className="hover:text-gray-500 transition-colors">Women's Top wear</Link></li>
                    <li><Link to="#" className="hover:text-gray-500 transition-colors">Men's Bottom wear</Link></li>
                    <li><Link to="#" className="hover:text-gray-500 transition-colors">Women's Bottom wear</Link></li>
                </ul>
            </div>

            {/* Support Links */}
            <div>
                <h3 className='text-lg text-gray-800 mb-4'>Support</h3>
                <ul className='space-y-3 text-gray-600'>
                    <li><Link to="#" className="hover:text-gray-500 transition-colors">Contact Us</Link></li>
                    <li><Link to="#" className="hover:text-gray-500 transition-colors">About Us</Link></li>
                    <li><Link to="#" className="hover:text-gray-500 transition-colors">Feature</Link></li>
                    <li><Link to="#" className="hover:text-gray-500 transition-colors">FAQs</Link></li>
                </ul>
            </div>

            {/* Follow Us */}
            <div>
                <h3 className='text-lg text-gray-800 mb-4'>Follow us</h3>
                <div className='flex item-center space-x-4 mb-6'>
                    <a href="https://facebook.com" target='_blank' rel='noopener noreferrer' className='hover:text-gray-500'><TbBrandMeta className='h-5 w-5'/></a>
                    <a href="https://facebook.com" target='_blank' rel='noopener noreferrer' className='hover:text-gray-500'><IoLogoInstagram className='h-5 w-5'/></a>
                    <a href="https://facebook.com" target='_blank' rel='noopener noreferrer' className='hover:text-gray-500'><RiTwitterXFill className='h-5 w-5'/></a>
                </div>

                <p className='text-lg text-gray-800 mb-2'>Call Us</p>
                <p><TbPhoneCall className='inline-block mr-2'/>+91-9940641254</p>

            </div>

        </div>

        {/* Footer Bottom */}
        <div className='mx-10 mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6'>
            <p className='text-gray-500 text-sm tracking-tighter text-center'>© 2026, Jeeveth Krishnan. All Rights Reserved.</p>
        </div>

    </footer>
  )
}

export default Footer