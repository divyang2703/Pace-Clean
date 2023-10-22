import React from 'react'
import { Link } from 'react-router-dom';
import {

    FaFacebookSquare,
    FaInstagram,
    FaPhoneAlt,
    FaWhatsapp
} from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#09a2fa]'>Pace Clean.</h1>
                <p className='py-2'>MAKE YOUR HOME A BETTER PLACE</p>
                <p>Our vision is to bring cleaning services online and making it easy to access. we mainly focus on regulating daily maids system.</p>
                <div className='flex justify-between md:w-[75%] my-6 '>
                    <Link to='https://www.facebook.com/profile.php?id=100004831366238' target='_blank'>
                        <FaFacebookSquare size={25} />
                    </Link>
                    <Link to='https://instagram.com/paceclean__?igshid=MzNlNGNkZWQ4Mg==' target='_blank'>
                        <FaInstagram size={25} />
                    </Link>
                    <Link to='https://wa.me/918208320287' target='_blank' >
                        <FaWhatsapp size={25} />
                    </Link>
                    <Link to='tel:918208320287' target='_blank'>
                        <FaPhoneAlt size={20} />
                    </Link>
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
                         <Link to='/services'>Services</Link>
                        </li>
                    </ul>
                </div>

                <div className='mx-auto'>
                    <h6 className='font-medium text-gray-400 text-2xl border-b border-gray-100'>Head Office</h6>
                    <ul>
                        <li className='py-2 text-sm'>Shop no. 14 ,Mirchandani</li>
                        <li className='py-2 text-sm'>Daffodils, Sun city , Vasai</li>
                        <li className='py-2 text-sm'>West, Vasai-Virar,</li>
                        <li className='py-2 text-sm'>Maharashtra 401202</li>
                    </ul>
                </div>

            </div>


        </div>
    )
}

export default Footer