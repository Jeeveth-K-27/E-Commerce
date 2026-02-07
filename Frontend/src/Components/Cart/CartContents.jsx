import React from 'react'
import {RiDeleteBin3Line} from 'react-icons/ri'

const CartContents = () => {

  const cartProducts = [
    {
      productId : 1,
      name : "T-Shirt",
      size : "M",
      color : "Red",
      quantity : 1,
      price : 600,
      image : "https://picsum.photos/200?ransom=1"
    },
    {
      productId : 2,
      name : "T-Shirt",
      size : "M",
      color : "Red",
      quantity : 1,
      price : 600,
      image : "https://picsum.photos/200?random=1"
    },
    {
      productId : 3,
      name : "Jean",
      size : "M",
      color : "Blue",
      quantity : 1,
      price : 1600,
      image : "https://picsum.photos/200?random=1"
    },
    {
      productId : 4,
      name : "Shorts",
      size : "M",
      color : "Green",
      quantity : 1,
      price : 400,
      image : "https://picsum.photos/200?random=1"
    },
  ]

  return (
    <div>
          {
            cartProducts.splice(0,3).map((product, index) => (
              <div key={index} className='flex items-start justify-between py-4 border-b'>

                  <div className='flex items-center '>
                      <img src={product.image} alt={product.name} className='w-20 h-24 object-cover mr-4 rounded'/>

                      <div className=''>

                        <h3>{product.name}</h3>

                        <p className='text-sm text-gray-500'>
                          size: {product.size} | color: {product.color}
                        </p>

                        <div className='flex items-center mt-2'>
                          <button className='border rounded px-2 py-1 text-xl font-medium'>-</button>
                          <span className='mx-4'>{product.quantity}</span>
                          <button className='border rounded px-2 py-1 text-xl font-medium'>+</button>
                        </div>

                        </div>

                  </div>

                  <div className='flex flex-col items-center space-y-8'>
                      <p>₹ {product.price}</p>
                      
                      <button><RiDeleteBin3Line className='h-6 w-6 mt-2 text-red-600'/></button>

                  </div>

              </div>
            ))
          }
    </div>
  )
}

export default CartContents