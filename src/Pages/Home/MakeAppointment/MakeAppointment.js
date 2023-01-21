import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import Button from '../../Button/Button';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
            <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
        <div className='flex-1 p-5 md:pr-5'>
            <h5 className='text-primary font-bold text-center md:text-start'>Appointment</h5>
            <h2 className='text-4xl md:text-5xl mt-4 md:mt-0 text-white text-center md:text-start'>Make an appointment Today</h2>
            <p className='text-white my-10 text-center md:text-start'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <div className='text-center md:text-start'> 
                <Button>Book Now</Button>
            </div>
        </div>
        </section>
    );
};

export default MakeAppointment;