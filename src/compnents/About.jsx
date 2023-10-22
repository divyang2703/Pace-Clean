import React from 'react'
import Logo from '../assets/logo.png';

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4 rounded-md md:hover:scale-110 duration-300' src={Logo} alt="logo" />
        <div>
          <p className='text-[#09a2fa] font-bold text-6xl'>Pace Clean</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>MAKE YOUR HOME A BETTER PLACE</h1>
          <p>Our company provides house help services in a professional manner with cheaper prices and faster working partners with 5 major work done under an hour.
            We solve people's daily house help problems with proper regularity in our work, So they don't have to take stress about their daily chores. We are a small team of partners who provide multiple types of services which include Regular maid, Deep clean, Commercial & Office deep clean, Commercial & Office regular clean, Car and Bike regular wash, Car and Bike Deep Wash, Ac services, etc. </p>

        </div>
      </div>
    </div>
  )
}

export default About