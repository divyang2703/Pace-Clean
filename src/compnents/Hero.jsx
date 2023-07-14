import React from 'react'
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#09a2fa]'>Pace Clean.</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible, for</p>
                    <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-500' strings={['Deep Clean', 'Mopping', 'Sweeping', 'Dusting', 'Dish Washing']} typeSpeed={120} backSpeed={140} loop />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Make your a better place</p>
                <Link to='/services'>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
                </Link>
                
            </div>
        </div>
    )
}

export default Hero