import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../assets/images/bg.png'
import { format, formatRelative } from 'date-fns';

const AppointmentBanner = ({date, setDate}) => {
   
    return (
<div style={{
            background: `url(${bg}) `
            
        }} className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse gap-x-20 ">
    <img src={chair} alt='' data-aos="fade-up" className="max-w-sm  lg:max-w-lg rounded-lg shadow-2xl " />
    <div data-aos="fade-right" className='bg-base-100 shadow-xl rounded-lg my-10'>
    <DayPicker
     mode="single"
     selected={date}
     onSelect={setDate}
    />
    
    </div>
    
  </div> 
</div>
    );
};

export default AppointmentBanner;