import React from 'react'
import Hero from '../Components/Layout/hero'
import GenderCollections from '../Components/Products/GenderCollections'
import NewArrivals from '../Components/Products/NewArrivals'

const Home = () => {
  return (
    <div>
        <Hero/>
        <GenderCollections/>
        <NewArrivals/>
    </div>
  )
}

export default Home