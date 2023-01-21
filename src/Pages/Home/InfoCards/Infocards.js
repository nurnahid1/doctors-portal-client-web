import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Infocards = () => {
    return (
        <div className='grid gap-y-6 md:gap-10 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-10'>
        <div  data-aos="fade-right" className="card  lg:card-side bg-gradient-to-r text-white from-primary to-secondary shadow-xl">
        
        <figure className=' md:pl-5 pt-5 md:pt-0'>
            <img  src={clock} alt="clock"/>
        </figure>
        <div  className="card-body">
          <h2 className="text-2xl font-bold text-center md:text-start">Opening Hours</h2>
          <p className='text-center md:text-start'>Lorem Ipsum is simply dummy text</p>
        </div>
        </div>
        <div data-aos="fade-up" className="card  lg:card-side bg-accent text-white shadow-xl">
        
        <figure className='md:pl-5 pt-5 md:pt-0'>
            <img  src={marker} alt="clock"/>
        </figure>
        <div className="card-body ">
          <h2 className="text-2xl font-bold text-center md:text-start">Visit our location</h2>
          <p className='text-center md:text-start'>Brooklyn, NY 10036, United States</p>
        </div>
        </div>
        <div data-aos="fade-left" className="card  lg:card-side bg-gradient-to-r text-white from-primary to-secondary shadow-xl">
        
        <figure className='md:pl-5 pt-5 md:pt-0'>
            <img src={phone} alt="clock"/>
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center md:text-start">Opening Hours</h2>
          <p className='text-center md:text-start'>Lorem Ipsum is simply dummy text</p>
        </div>
        </div>
      
        </div>
    );
};

export default Infocards;