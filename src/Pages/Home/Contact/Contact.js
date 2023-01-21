import React from 'react';
import { Link } from 'react-router-dom';
import appointment from '../../../assets/images/appointment.png'
import Button from '../../Button/Button';

const Contact = () => {
    return (
        <div style={{
            background: `url(${appointment}) `
            
        }}>
            <div className='text-center pt-20 '>
                <h5 className='text-primary font-cold '>Contact Us</h5>
                <h2 className='text-2xl lg:text-4xl text-center text-white pb-12 px-5 md:px-0'>Stay connected with us</h2>
            </div>
           <div className='text-center'>
           <form action="" className='flex flex-col justify-center items-center px-5 md:px-0' >
            <input  type="email" placeholder="Email address" className="input input-bordered input-accent w-full max-w-xs lg:max-w-md  mb-3" />
            <input type="text" placeholder="Subject" className="input input-bordered input-accent w-full max-w-xs lg:max-w-md mb-3" />
            <textarea className="input-bordered input-accent w-full max-w-xs lg:max-w-md mb-5 rounded-md p-3" name="description" id="" cols="10" rows="6" placeholder='your message'></textarea>
            <Link className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary mb-10 w-full md:w-1/4">Submit</Link>
            </form>
           </div>
        </div>
    );
};

export default Contact;