import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDropleft, IoIosArrowDropright  } from "react-icons/io";
import { Link } from 'react-router-dom';

const NewArrivals = () => {

    const scrollRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollleft] = useState(false);
    const [CanScrollLeft, setCanScrollLeft] = useState(false);
    const [CanScrollRight, setCanScrollRight] = useState(true);

    const scroll = (dir) => {
        console.log("press")
        const scrollAmount = dir === "left" ? -300 : 300;
        scrollRef.current.scrollBy({left: scrollAmount, behavior: "smooth"});
    }

    const updateScrollButtons = () => {
       const container = scrollRef.current;

        if(container){
            const leftScroll = container.scrollLeft;
            const righttScroll = container.scrollWidth > container.scrollLeft + container.clientWidth;
            
            
            setCanScrollLeft(leftScroll > 0);
            setCanScrollRight(righttScroll)
        }

    //    console.log({
    //     scrollLeft : container.scrollLeft,
    //     clientWidth : container.clientWidth,
    //     containerScrollWidth : container.scrollWidth,
    //    }) 
    }

    useEffect(() => {
        const container = scrollRef.current;
        if(container){
            container.addEventListener("scroll", updateScrollButtons);
            updateScrollButtons();
            return () => container.removeEventListener("scroll", updateScrollButtons);
        }
    }, []);

    const newArrivals = [
        {
            id: 1,
            name: "Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=1",
                    altText: "Jacket"
                }
            ]
        },
        {
            id: 2,
            name: "Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=2",
                    altText: "Jacket"
                }
            ]
        },
        {
            id: 3,
            name: "Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=3",
                    altText: "Jacket"
                }
            ]
        },
        {
            id: 4,
            name: "Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=4",
                    altText: "Jacket"
                }
            ]
        },
        {
            id: 5,
            name: "Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=5",
                    altText: "Jacket"
                }
            ]
        },
        {
            id: 6,
            name: "Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=6",
                    altText: "Jacket"
                }
            ]
        },
        {
            id: 7,
            name: "Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=7",
                    altText: "Jacket"
                }
            ]
        },
        {
            id: 8,
            name: "Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=8",
                    altText: "Jacket"
                }
            ]
        }
    ]

  return (
    <section>
        <div className='mx-10 text-center mb-10 relative'>
            <h2 className='text-3xl font-bold mb-4'>Explore New Arrivals</h2>
            <p className='text-lg text-gray-600 mb-8'>
                Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion.
            </p>

            {/* Scroll Button */}
             <div className='absolute -right-6 -bottom-8 md:right-0 md:bottom-[-30px] flex space-x-2'>
                <button onClick={() => scroll("left")} disabled={!CanScrollLeft} className={`p-2  border rounded-full ${CanScrollLeft ? " bg-white text-black" : " bg-gray-200 text-gray-400"}`}>
                    <IoIosArrowDropleft className='text-base md:text-2xl'/>
                </button>

                <button onClick={() => scroll("right")} disabled={!CanScrollRight} className={`p-2  border rounded-full ${CanScrollRight ? " bg-white text-black" : " bg-gray-200 text-gray-400"}`}>
                    <IoIosArrowDropright className='text-base md:text-2xl'/>
                </button>
            </div>  

        </div>

        {/* Scrollable Content */}
        <div ref={scrollRef} className='flex mx-4 md:mx-10 overflow-x-auto space-x-6 relative scrollbar-hide mb-8'>

            {
                newArrivals.map((product) => (
                    <div key={product.id} className='min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative'>
                        <img src={product.images[0]?.url} alt={product.images[0]?.altText || product.name} draggable={false} className='w-full h-[500px] object-cover rounded-lg'/>

                        <div className='absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg'>
                            <Link to={`/product/${product.id}`} className='block'><h4 className='font-medium'>{product.name}</h4></Link>
                            <p className='mt-1'>₹{product.price}</p>
                        </div>
                    </div>
                ))
            }

        </div>

    </section>
  )
}

export default NewArrivals