import React from 'react';
import doctor from '../../../assets/images/doctor3.png'

const Doctor = () => {
    return (
        <div className='my-16  '>
            <div className='md:flex  justify-center md:justify-between items-center'>

            <div   className='flex-1 relative md:mt-10'>
                <img  className='z-20 w-80 md:w-full   mt-24 md:mt-0' src={doctor} alt="" />
                <div data-aos="fade-right" className='bg-gradient-to-r from-primary to-secondary h-[330px] md:h-[400px] md:w-[500px] w-[300px] absolute bottom-4 md:bottom-7 left-50 rounded-md -z-10 '>

                </div>
                <div data-aos="fade-left" className='bg-blue-400 h-24 w-36 md:w-60 absolute bottom-10 left-44 md:left-[340px] rounded-md'>
                    <h2 className='pl-2 font-bold text-xs md:text-xl text-black md:pt-1 pt-3'> Greetings & Welcome</h2>
                    <h2 className='text-white font-bold text-md md:text-xl pl-2 '>Dr. Henry Jorge</h2>
                </div>
            </div>

            <div className='ml-0 md:ml-28 flex-1'>
                <h2 className='text-3xl text-center md:text-start md:text-6xl text-[#303640] font-bold px-5 md:px-0 md:mt-14'>Bring the care to your home with</h2>
                <h2 className='text-2xl md:text-4xl font-bold md:pt-2 text-center md:text-start gradient mt-2 pb-5'>Just one click</h2>
               <div className='text-center md:text-start'>
               <button className="btn  text-white md:mt-6 md:mb-0"> Book Now</button>
               </div>
            </div>
           

            </div>
        </div>
    );
};

export default Doctor;