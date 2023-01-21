import React from 'react';

const Review = ({review}) => {
    return (
<div class="card lg:max-w-lg bg-base-100 shadow-xl">
  <div  class="card-body">
   
    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
    <div className='flex justify-baseline  items-center'>
    <div className="avatar ">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mt-3">
            <img src={review.img}  alt=''/>
        </div>
    </div>
    <div className='ml-5'>
        <h2 className='text-black font-bold'>{review.name}</h2>
        <p>{review.city}</p>
    </div>
    </div>
  </div>
</div>
    );
};

export default Review;