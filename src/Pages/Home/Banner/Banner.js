import React from 'react';
import chair from '../../../assets/images/chair.png'
import Button from '../../Button/Button';
import './Banner.css'

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Banner = () => {
    return (
<div className="hero py-3 md:py-0 md:min-h-screen bgImg" style={{ 
      backgroundImage: `url("https://i.ibb.co/Drd8x2Y/bg.png")` 
    }}>
  <div className="hero-content flex-col md:gap-x-32 lg:flex-row-reverse mt-0">
   <div data-aos="fade-left">
   <img src={chair} alt='chair' className="lg:max-w-lg rounded-lg shadow-2xl" />
   </div>
    <div className='max-w-md'>
      <h1 className="text-3xl text-center md:text-start mt-3 md:mt-0  md:text-6xl font-bold mb-3 gradient">Your New Smile Starts Here</h1>
      <p className="pb-6 pt-2 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
      <div className='flex justify-start items-center'>
      <Button >GET STARTED</Button>
      <button className="btn btn-primary bg-transparent hover:bg-transparent ml-6 " > Book Now</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Banner;