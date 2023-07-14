import React from 'react'


const Pricing = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    
                    <h2 className='text-2xl font-bold text-center py-8'>Deep Clean</h2>
                    <p className='text-center text-4xl font-bold'>₹500</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Exprience Staff</p>
                        <p className='py-2 border-b mx-8'>Price may vary on place</p>
                        <p className='py-2 border-b mx-8'>Flexible TIming</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>

                </div>

                <div className='w-full  shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    
                    <h2 className='text-2xl font-bold text-center py-8'>Mopping</h2>
                    <p className='text-center text-4xl font-bold'>₹800</p>
                    <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Exprience Staff</p>
                        <p className='py-2 border-b mx-8'>Price may vary on place</p>
                        <p className='py-2 border-b mx-8'>Flexible TIming</p>
                    </div>
                    <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]'>Start Trial</button>

                </div>

                <div className='w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    
                    <h2 className='text-2xl font-bold text-center py-8'>After Party Cleaning</h2>
                    <p className='text-center text-4xl font-bold'>₹1200</p>
                    <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Exprience Staff</p>
                        <p className='py-2 border-b mx-8'>Price may vary on place</p>
                        <p className='py-2 border-b mx-8'>Flexible TIming</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>

                </div>

            </div>
        </div>
    )
}

export default Pricing