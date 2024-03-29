import React from 'react';

const AppointmentService = ({service, setTreatment}) => {
    const {name, slots, price}= service;
    return (
<div data-aos="fade-up" className="card lg:max-w-md shadow-xl bg-[#3A4255]">
  <div className="card-body ">
    <h2 className="card-title text-secondary  mx-auto ">{name}</h2>
    <p className='text-center text-white'>
        {
            slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-400'>No slots available</span>
        }
    </p>
    <p className='text-center text-white'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
    <small className='text-center text-white'>price: ${price}</small>
    <div className="card-actions justify-center">
      <label 
      disabled={slots.length === 0} 
      onClick={()=> setTreatment(service)} htmlFor="BookingModal" 
      className=" btn btn-primary mt-4 text-white bg-gradient-to-r from-primary to-secondary">BOOK APPOINTMENT</label>
    </div>
  </div>
</div>
    );
};

export default AppointmentService;