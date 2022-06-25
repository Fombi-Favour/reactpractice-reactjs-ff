import React from 'react'
import Footer from '../components/Footer'
import HeroImages from '../components/HeroImages'
import PricingCards from '../components/Pricing'
import Navbar from '../components/Navbar'

const Pricing = () => {
  return (
    <div>
        <Navbar />
        <HeroImages heading='PRICING' text='Choose your trip' />
        <PricingCards />
        <Footer />
    </div>
  )
}

export default Pricing