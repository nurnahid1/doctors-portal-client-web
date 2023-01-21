import React from 'react';

const Service = ({img, title, desc}) => {
    return (
    <div   className="card bg-accent ">
        <figure className='pt-4 '><img src={img} alt=""/></figure>
        <div className="card-body">
          <h2 className="text-white text-center md:text-start text-2xl md:text-3xl font-bold">{title}</h2>
          <p className='text-white text-center md:text-start'>{desc}</p>
        </div>
    </div>
    );
};

export default Service;