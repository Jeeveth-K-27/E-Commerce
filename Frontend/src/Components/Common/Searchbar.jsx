import React from 'react'
import { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2'

const Searchbar = () => {

const [searchTerm, setSearchTerm] = useState("");
const [isopen, setIsOpen] = useState(false);

const handlesearchtoggle = () => {
    setIsOpen(!isopen);
}

const handleSearh = (e) => {
    e.preventDefault();
    console.log("Search Term:", searchTerm);
    setIsOpen(false);
}

  return (
    <div className={`flex item-center justify-center w-full transition-all duration-300 
                     ${isopen ? "absolute top-0 left-0 w-full bg-white h-28 z-50" : "w-auto"}`}>
        {isopen ? (
            
            <form onSubmit={handleSearh} className='relative flex items-center justify-center w-full'>
                <div className='relative w-1/2'>
                    <input type="text" 
                    placeholder='Search' 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    className='bg-gray-100 px-4 py-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700'/>
                    
                    <button type='submit' className='absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
                        <HiMagnifyingGlass className='w-[22px] h-[22px]'/>
                    </button>
                </div>

                <button onClick={handlesearchtoggle} className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
                    <HiMiniXMark className='h-6 w-6'/>
                </button>

            </form>
            
            ) : (

                    <button onClick={handlesearchtoggle}><HiMagnifyingGlass className="w-[22px] h-[22px] mt-[4px] text-gray-700" /></button>    

                ) }
    </div>
  )
}

export default Searchbar