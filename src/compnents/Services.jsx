import React from 'react'
import Deepclean from '../assets/deep clean picture.jpg'
import Window from '../assets/window.jpg'
import Hotel from '../assets/HotelMaid.jpg'
import Vehicle from '../assets/vehicleWashing.jpg'
import Commercial from '../assets/commercial.jpg'
import Office from '../assets/office.jpg'
import Carpet from '../assets/carpet.jpg'
import Move from '../assets/Moveinandout.jpg'
import Broom from '../assets/brooming.jpg'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <div className='bg-white'>
            <div>
                <h3 className='font-bold flex justify-center items-center justify-items-center text-5xl py-4 mt-2 text-[#09a2fa]'>OUR SERVICES</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-black px-5  py-4 ease-in-out duration-300 transition-all'>
                <div className='justify-center py-4 px-9 mx-auto w-full border md:hover:scale-105 duration-300' >
                    <h6 className='text-xl font-thin flex justify-center py-2'>Deep Clean</h6>
                    <img className='w-[500px] h-[275px] rounded-lg duration-500 py-2' src={Deepclean} alt="/" />
                    <p className='p-2 mt-2'>Deep cleaning is a detailed and thorough cleaning process that goes beyond regular cleaning. It involves cleaning every nook and cranny, targeting hidden areas, and removing dirt, germs, and grime. It helps create a healthier and more pleasant environment by getting rid of allergens, bacteria, and unpleasant odors. Deep cleaning is important for maintaining cleanliness, hygiene, and a fresh atmosphere in homes, offices, or any other space. </p>
                    <Link to='https://wa.me/918208320287' target='_blank'>
                        <button className='bg-[#09a2fa] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Contact us</button>
                    </Link>
                </div>
                <div className='justify-center py-4 px-9 mx-auto w-full border md:hover:scale-105 duration-300'>
                    <h6 className='text-xl font-thin flex justify-center py-2'>Brooming and Mopping</h6>
                    <img className='w-[400px] rounded-lg py-2' src={Broom} alt="/" />
                    <p className='p-2 mt-2'> Brooming or sweeping is the act of using a broom to collect loose dirt and debris, while mopping is the process of using a mop and water or cleaning solution to clean and wipe the floor, removing dirt, stains, and spills. Both activities are essential for maintaining clean and tidy floors in homes, offices, or any other spaces.</p>
                    <Link to='https://wa.me/918208320287' target='_blank'>
                        <button className='bg-[#09a2fa] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Contact us</button>
                    </Link>
                </div>
                <div className='justify-center w-full py-4 px-9 mx-auto border md:hover:scale-105 duration-300 '>
                    <h6 className='text-xl font-thin flex justify-center py-2'>Daily Maid Service</h6>
                    <img className='w-[400px]  rounded-lg py-4' src={Hotel} alt="/" />
                    <p className='p-2 mt-2'>Daily maid service refers to a professional cleaning service that is provided on a daily basis to maintain cleanliness and tidiness in a living or working space. It involves a maid or cleaning team coming to the location regularly to perform various cleaning tasks, such as dusting, vacuuming, brooming and mopping. The purpose of daily maid service is to keep the environment clean, organized, and hygienic, ensuring that the space remains fresh and presentable for the occupants. </p>
                      <Link to='https://wa.me/918208320287' target='_blank'>
                        <button className='bg-[#09a2fa] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Contact us</button>
                    </Link>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-black px-5  py-9 ease-in-out duration-300 transition-all'>
                <div className='justify-center py-4 px-9 mx-auto w-full border md:hover:scale-105 duration-300' >
                    <h6 className='text-xl font-thin flex justify-center py-2'>Vehicle Washing</h6>
                    <img className='w-[500px] h-[275px] rounded-lg py-2' src={Vehicle} alt="/" />
                    <p className='p-2 mt-2'>Vehicle washing is the process of cleaning and washing a vehicle, such as a car, truck, or motorcycle, to remove dirt, dust, grime, and other debris from its exterior surfaces. It is a way to keep the vehicle looking clean, shiny, and presentable.</p>
                      <Link to='https://wa.me/918208320287' target='_blank'>
                        <button className='bg-[#09a2fa] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Contact us</button>
                    </Link>
                </div>
                <div className='justify-center py-4 px-9 mx-auto w-full border md:hover:scale-105 duration-300'>
                    <h6 className='text-xl font-thin flex justify-center py-2'>Commercial Cleaning</h6>
                    <img className='w-[400px] rounder-lg py-2' src={Commercial} alt="/" />
                    <p className='p-2 mt-2'>Commercial cleaning refers to professional cleaning services provided to businesses, offices, or commercial establishments to maintain cleanliness, hygiene, and a healthy environment. It involves a team of cleaners or a cleaning company that specializes in commercial spaces.</p>
                      <Link to='https://wa.me/918208320287' target='_blank'>
                        <button className='bg-[#09a2fa] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Contact us</button>
                    </Link>
                </div>
                <div className='justify-center w-full py-4 px-9 mx-auto border md:hover:scale-105 duration-300'>
                    <h6 className='text-xl font-thin flex justify-center py-2'>Office Cleaning</h6>
                    <img className='w-[400px]  rounder-lg py-2' src={Office} alt="/" />
                    <p className='p-2 mt-2'>Office cleaning refers to the cleaning and maintenance of commercial office spaces. It involves regular cleaning tasks to keep the office clean, organized, and presentable for employees and visitors. Office cleaning typically includes tasks such as dusting surfaces, vacuuming or mopping floors, sanitizing restrooms, and ensuring a tidy workspace. The purpose of office cleaning is to create a clean, professional, and comfortable working environment while promoting hygiene and productivity.</p>
                      <Link to='https://wa.me/918208320287' target='_blank'>
                        <button className='bg-[#09a2fa] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Contact us</button>
                    </Link>
                </div>
                 
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-black px-5  py-9 ease-in-out duration-300 transition-all'>
                <div className='justify-center py-4 px-9 mx-auto w-full border md:hover:scale-105 duration-300' >
                    <h6 className='text-xl font-thin flex justify-center py-2'>Carpet Cleaning</h6>
                    <img className='w-[500px] h-[275px] rounded-lg py-2' src={Carpet} alt="/" />
                    <p className='p-2 mt-2'>Carpet cleaning involves the process of cleaning and restoring carpets to remove dirt, stains, and allergens. It typically includes techniques such as vacuuming, spot cleaning, and steam cleaning to eliminate embedded dirt, odors, and bacteria. Carpet cleaning helps to maintain the appearance and longevity of carpets while creating a cleaner and healthier indoor environment.</p>
                      <Link to='https://wa.me/918208320287' target='_blank'>
                        <button className='bg-[#09a2fa] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Contact us</button>
                    </Link>
                </div>
                <div className='justify-center py-4 px-9 mx-auto w-full border'>
                    <h6 className='text-xl font-thin flex justify-center py-2'>Move IN and OUT Cleaning</h6>
                    <img className='w-[400px] rounder-lg py-2' src={Move} alt="/" />
                    <p className='p-2 mt-2'>Move-in and move-out cleaning refers to a specialized cleaning service provided when someone is moving into or out of a residential or commercial space. It involves thorough cleaning of the entire premises, including all rooms, surfaces, appliances, and fixtures. The purpose of move-in and move-out cleaning is to ensure that the space is clean, sanitized, and ready for the next occupant. It typically includes tasks like deep cleaning bathrooms, kitchens, floors, windows, and removing any residue or marks left behind by the previous occupants.</p>
                      <Link to='https://wa.me/918208320287' target='_blank'>
                        <button className='bg-[#09a2fa] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Contact us</button>
                    </Link>
                </div>
                <div className='justify-center w-full py-4 px-9 mx-auto border md:hover:scale-105 duration-300'>
                    <h6 className='text-xl font-thin flex justify-center py-2'>Window Cleaning</h6>
                    <img className='w-[400px]  rounder-lg py-2 h-[440px]' src={Window} alt="/" />
                    <p className='p-2 mt-2'>Window cleaning is the process of cleaning and washing the windows of a building or a vehicle to remove dirt, dust, smudges, and other impurities from the glass surfaces. It aims to make the windows clear, transparent, and visually appealing.</p>
                      <Link to='https://wa.me/918208320287' target='_blank'>
                        <button className='bg-[#09a2fa] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Contact us</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Services