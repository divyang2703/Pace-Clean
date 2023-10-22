import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
    return (
        <div className='w-full py-[20px] px-4 bg-white'>
            <div>
                <h3 className='uppercase font-bold flex justify-center items-center justify-items-center text-5xl py-4 mt-2 text-[#09a2fa]'>our best price</h3>
            </div>
            <div className='max-w-[1240px] mx-auto py-2 grid md:grid-cols-3 gap-8'>
                <div className='w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border'>
                    
                    <h2 className='text-2xl font-bold text-center py-8'>Basic Service</h2>
                    <p className='text-center text-4xl font-bold'>₹350</p>
                    <div className='text-center font-medium py-8'>
                        
                        <p className='py-2 border-b mx-8'>Price may vary on place</p>
                        <p className='py-2 border-b mx-8'>Cleaning with water only.</p>
                        <p className='py-2 border-b mx-8'>Only for Commercial and Small office.</p>
                    </div>
                    <Link to='https://wa.me/917757856110' target='_blank'>

                    <button className='bg-[#09a2fa] w-[200px] rounded-md font-medium my-6 mx-16 py-3 text-black'>Contact Us</button>
                    </Link>

                </div>

                <div className='w-full  shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 border'>
                    
                    <h2 className='text-2xl font-bold text-center py-8'>Best Seller Service</h2>
                    <p className='text-center text-4xl font-bold'>₹550</p>
                    <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Exprience Staff</p>
                        <p className='py-2 border-b mx-8'>Price may vary on place</p>
                        <p className='py-2 border-b mx-8'>Flexible Date & Time</p>
                        <p className='py-2 border-b mx-8'>Only for Commercial and Small office.</p>
                    </div>
                    <Link to='https://wa.me/917757856110' target='_blank'>
                    <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-16 py-3 text-[#09a2fa]'>Contact Us</button>
                    </Link>

                </div>

                <div className='w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border'>
                    
                    <h2 className='text-2xl font-bold text-center py-8'>Premium Service</h2>
                    <p className='text-center text-4xl font-bold'>₹700</p>
                    <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Exprience Staff</p>
                        <p className='py-2 border-b mx-8'>Price may vary on place</p>
                        <p className='py-2 border-b mx-8'>Flexible Date & Time</p>
                        <p className='py-2 border-b mx-8'>Cleaning with SPECIAL LIQUID</p>
                        <p className='py-2 border-b mx-8'>Free Dusting Included</p>
                        <p className='py-2 border-b mx-8'>Only for Commercial and Small office.</p>
                    </div>
                    <Link to='https://wa.me/917757856110' target='_blank'>
                    <button className='bg-[#09a2fa] w-[200px] rounded-md font-medium my-6 mx-16 py-3 text-black'> Contact Us</button>
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default Pricing