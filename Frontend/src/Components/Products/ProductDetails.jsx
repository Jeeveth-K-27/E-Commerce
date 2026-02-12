import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import ProductGrid from './ProductGrid';

const ProductDetails = () => {
  const selectedProduct = {
    name: 'Stylish Jacket',
    price: 1700,
    originalPrice: 2000,
    description: 'This is a stylish Jacket perfect for any occasion',
    brand: 'Nike',
    material: 'Leeather',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Red', 'Black'],
    images: [
      {
        url: 'https://picsum.photos/500/500?random=1',
        altText: 'Stylish Jacket 1',
      },
      {
        url: 'https://picsum.photos/500/500?random=2',
        altText: 'Stylish Jacket 2',
      },
    ],
  };

  const similarProducts = [
    {
        _id:1,
        name:"Product 1",
        price:100,
        images: [{url:"https://picsum.photos/500/500?random=1"}]
    },
    {
        _id:2,
        name:"Product 2",
        price:100,
        images: [{url:"https://picsum.photos/500/500?random=2"}]
    },
    {
        _id:3,
        name:"Product 3",
        price:100,
        images: [{url:"https://picsum.photos/500/500?random=3"}]
    },
    {
        _id:4,
        name:"Product 4",
        price:100,
        images: [{url:"https://picsum.photos/500/500?random=4"}]
    },
  ]

  const [mainImage, setmainImage] = useState(selectedProduct.images[0].url);

  const [selectSize, setSelectedSize] = useState('');
  const [selectColor, setSelectedColor] = useState('');
  const [quatity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  //   useEffect(()=>{
  //     if(selectedProduct?.images?.length > 0){
  //         setmainImage(selectedProduct.images[0].url);
  //     }
  //   }, [selectedProduct]);

  const handleQuantityChange = (action) => {
    if (action === '+') setQuantity((prev) => prev + 1);
    if (action === '-' && quatity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (!selectSize || !selectColor) {
      toast.error('Please select size and color before adding to cart.', {
        duration: 1000,
      });
      return;
    }

    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success('Product added to cart.', { duration: 1000 });

      setIsButtonDisabled(false);
    }, 500);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${mainImage === image.url ? 'border-black' : 'border-gray-300'}`}
                onClick={() => setmainImage(image.url)}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Mobile Thumbnail */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText}
                onClick={() => setmainImage(image.url)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? 'border-black' : 'border-gray-300'}`}
              />
            ))}
          </div>

          {/* right Side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>

            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.originalPrice &&
                `${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl mb-2 text-gray-500">
              ₹ {selectedProduct.price}
            </p>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

            {/* Colors */}
            <div className="mb-4">
              <p className="text-gray-700">Color</p>

              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border ${selectColor === color ? 'border-4 border-black' : 'border-gray300'}`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: 'brightness(0.5)',
                    }}
                  ></button>
                ))}
              </div>
            </div>

            {/* SIzes */}
            <div className="mb-4">
              <p className="text-gray-700">Sizes:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border ${selectSize === size ? 'bg-black text-white' : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* quantity */}
            <div className="mb-6">
              <p className="text-gray-700">Quantity</p>
              <div className="flexx items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange('-')}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quatity}</span>
                <button
                  onClick={() => handleQuantityChange('+')}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isButtonDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-900'}`}
            >
              {isButtonDisabled ? "Adding..." : "Add To Cart"}
            </button>

            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='mt-20'>
            <h2 className='text-2xl text-center font-medium mb-4'>You May also Like</h2>
            <ProductGrid products={similarProducts} />
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
