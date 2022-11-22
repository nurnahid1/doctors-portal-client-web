import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Infocards = () => {
    return (
        <div className='grid gap-x-10 gap-y-5 md:gap-10 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mx-10 mt-12'>
        <div className="card  lg:card-side bg-gradient-to-r text-white from-primary to-secondary shadow-xl">
        
        <figure className='pl-5 pt-5'>
            <img  src={clock} alt="clock"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">Opening Hours</h2>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
        </div>
        </div>
        <div className="card  lg:card-side bg-accent text-white shadow-xl">
        
        <figure className='pl-5 pt-5'>
            <img  src={marker} alt="clock"/>
        </figure>
        <div className="card-body ">
          <h2 className="card-title">Visit our location</h2>
          <p>Brooklyn, NY 10036, United States</p>
        </div>
        </div>
        <div className="card  lg:card-side bg-gradient-to-r text-white from-primary to-secondary shadow-xl">
        
        <figure className='pl-5 pt-5'>
            <img src={phone} alt="clock"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Opening Hours</h2>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
        </div>
        </div>
      
        </div>
    );
};

export default Infocards;