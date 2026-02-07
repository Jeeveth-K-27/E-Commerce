import React from 'react'
import mensCollectionImage from '../../assets/mens-collection.webp'
import womensCollectionImage from '../../assets/womens-collection.webp'
import { Link } from 'react-router-dom'

const GenderCollections = () => {
  return (
    <section className='py-16 px-4 lg:px-0'>

        <div className=' flex flex-col md:mx-10 md:flex-row gap-8'>

        {/* Womens Gender Collection */}
        <div className='relative flex-1'>
            <img src={womensCollectionImage} alt="Women's Collection" className='w-full h-[350px] lg:h-[700px] object-cover rounded-lg'/>
            <div className='absolute bottom-8 left-1/4 md:left-8 bg-white bg-opacity-90 p-4 text-center'>
                <h2 className='text-sm md:text-2xl font-bold text-gray-900 mb-3'>
                    Women's Collection
                </h2>
                <Link to="/collections/all?gender=Women" className='text-gray-900 underline'>Shop Now</Link>
            </div>
        </div>

        {/* Mens Gender Collection */}
        <div className='relative flex-1'>
            <img src={mensCollectionImage} alt="Men's Collection" className='w-full h-[350px] lg:h-[700px] object-cover rounded-lg'/>
            <div className='absolute bottom-8 left-1/4 md:left-8 bg-white bg-opacity-90 p-4 text-center'>
                <h2 className='text-sm md:text-2xl font-bold text-gray-900 mb-3'>
                    Men's Collection
                </h2>
                <Link to="/collections/all?gender=Men" className='text-gray-900 underline'>Shop Now</Link>
            </div>
        </div>


        </div>

    </section>
  )
}

export default GenderCollections