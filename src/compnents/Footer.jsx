import React from 'react'
import {

    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagram,
    FaWhatsapp
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#09a2fa]'>Pace Clean.</h1>
                <p className='py-2'>MAKE YOUR HOME A BETTER PLACE</p>
                <p>Our vision is to bring cleaning services online and making it easy to access. we mainly focus on regulating daily maids system.</p>
                <div className='flex justify-between md:w-[75%] my-6 '>
                    <a href='https://www.facebook.com/profile.php?id=100004831366238' target='_blank' rel='noreferrer'>
                        <FaFacebookSquare size={25} />
                    </a>
                    <FaTwitterSquare size={25} />
                    <FaInstagram size={25} />
                    <a href='https://wa.me/917757856110' target='_blank' rel='noreferrer'>
                        <FaWhatsapp size={25} />
                    </a>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div className='mx-auto'>
                    <h6 className='font-medium text-gray-400 text-2xl border-b border-gray-100'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>
                            <Link to='/about'>About</Link>
                        </li>
                        <li className='py-2 text-sm'>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li className='py-2 text-sm'>
                            <Link to='/services' target='_top'>Services</Link>
                        </li>
                    </ul>
                </div>

                <div className='mx-auto'>
                    <h6 className='font-medium text-gray-400 text-2xl border-b border-gray-100'>Head Office</h6>
                    <ul>
                        <li className='py-2 text-sm'>Shop no. 14 ,Mirchandani</li>
                        <li className='py-2 text-sm'>Garden, Sun city , Vasai</li>
                        <li className='py-2 text-sm'>West, Vasai-Virar,</li>
                        <li className='py-2 text-sm'>Maharashtra 401202</li>
                    </ul>
                </div>

            </div>


        </div>
    )
}

export default Footer