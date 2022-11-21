import React from 'react';

const Service = ({img, title, desc}) => {
    return (
    <div className="card w-96 glass">
        <figure className='pt-4'><img src={img} alt=""/></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
        </div>
    </div>
    );
};

export default Service;