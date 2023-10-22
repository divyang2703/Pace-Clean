import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'



const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <Link to='/'>
             <h1 className='w-full text-3xl font-bold text-[#09a2fa]'>Pace Clean</h1>
            </Link>

            <ul className='hidden md:flex'>
                <li className='p-4'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='p-4'>
                    <Link to='/services'>Services</Link>
                </li>
                <li className='p-4'>
                    <Link to='/pricing'>Pricing</Link>
                </li>
                <li className='p-4'>
                    <Link to='/about'>About</Link>
                </li>
                <li className='p-4'>
                    <Link to='/contact'>Contact</Link>
                </li>

            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}

            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] text-white border-r h-full border-r-gray-900 bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#09a2fa] m-4'>Pace Clean</h1>

                <ul className='p-2 uppercase'>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to='/services'>Services</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to='/pricing'>Pricing</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar