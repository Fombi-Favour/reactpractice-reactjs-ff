import React from 'react'
import Footer from '../components/Footer'
import HeroImages from '../components/HeroImages'
import TrainingSection from '../components/Training'
import Navbar from '../components/Navbar'

const Training = () => {
  return (
    <div>
        <Navbar />
        <HeroImages heading='Training' text='Pre-Flight & In-Flight Training' />
        <TrainingSection />
        <Footer />
    </div>
  )
}

export default Training