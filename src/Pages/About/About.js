import React from 'react';
import about from '../../assets/images/login.png'

const About = () => {
    return (
        <div className='px-10 pb-10'>
            <h2 className='text-2xl md:text-4xl text-center mt-10 font bold underline'>About us</h2>

            <div className='md:flex justify-center items-center'>
            <img data-aos="fade-right"  className='max-w-xs md:px-24 py-5 mt-5 flex-1 md:max-w-xl' src={about} alt="" />
            <div>
                <h2 data-aos="fade-left"  className='text-3xl md:text-5xl font-bold md:text-start text-center md:px-16 gradient'>Who we are?</h2>
            <p data-aos="fade-left"  className='text-md md:text-xl text-center md:text-start  md:px-16 mt-6 flex-1 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium voluptatibus dolorem iure atque doloremque expedita nam eos ratione, excepturi quisquam aut eum qui sapiente, architecto porro vitae soluta molestias obcaecati reprehenderit quam quia, ipsam ad dignissimos. Accusantium minus tenetur aperiam, necessitatibus aliquam, adipisci veniam libero est doloribus asperiores totam.</p>
            <div data-aos="fade-up" className='text-center md:text-start md:pl-16 pt-8'>
            <button  className='btn bg-gradient-to-r from-primary to-secondary outline-none border-none text-white '>Learn More</button>
            </div>
            </div>
            </div>
        </div>
    );
};

export default About;