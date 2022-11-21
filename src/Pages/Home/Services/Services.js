import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import fluoride from '../../../assets/images/fluoride.png'
import Service from '../Service/Service';

const Services = () => {
    return (
        <div>
            <h5 className='text-primary text-center mt-24 font-bold'>OUR SERVICES</h5>
            <h2 className='ml-1 text-4xl text-center mb-24'>Services We Provide</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mx-auto ml-12 mr-2 gap-5'>
            <Service desc="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" title="Cavity Filling" img={cavity}></Service>
            <Service desc="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" title="Fluoride Treatment" img={whitening}></Service>
            <Service desc="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" title="Teeth Whitening" img={fluoride}></Service>
            </div>
        </div>
    );
};

export default Services;