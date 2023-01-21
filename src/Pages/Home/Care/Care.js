import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import Button from '../../Button/Button';

const Care = () => {
    return (
<div className="hero min-h-screen my-28 gap-10 ">
  <div className="hero-content flex-col lg:flex-row p-0 md:space-x-32">
    <img data-aos="fade-up" src={treatment} alt='' className="w-xs mx-auto md:max-w-sm rounded-lg shadow-2xl mr-10 mb-10" />
    <div className='max-w-lg'>
      <h1 data-aos="fade-end" className="text-3xl md:text-5xl font-bold md:mb-5 text-center md:text-start">Exceptional Dental Care, on Your Terms</h1>
      <p data-aos="fade-left" className="py-6 text-center md:text-start">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <div data-aos="fade-right" className='text-center md:text-start'>
      <Button>GET STARTED</Button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Care;