import React from 'react'
import Footer from '../components/Footer'
import HeroImages from '../components/HeroImages'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

const Contacts = () => {
  return (
    <div>
        <Navbar />
        <HeroImages heading='CONTACT' text='Contact GLX Travel' />
        <Form />
        <Footer />
    </div>
  )
}

export default Contacts