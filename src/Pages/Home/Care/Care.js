import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import Button from '../../Button/Button';

const Care = () => {
    return (
<div className="hero min-h-screen my-24 gap-10 ">
  <div className="hero-content flex-col lg:flex-row p-0 space-x-32">
    <img src={treatment} alt='' className="max-w-sm rounded-lg shadow-2xl mr-10 mb-10" />
    <div className='max-w-lg'>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <Button>GET STARTED</Button>
    </div>
  </div>
</div>
    );
};

export default Care;