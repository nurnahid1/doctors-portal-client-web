import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import Review from '../Home/Review/Review';

const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name: 'Witson Herry',
            review: '',
            img: people1,
            city: 'new York'
        },
        {
            _id:2,
            name: 'Hangrov witson',
            review: '',
            img: people1,
            city: 'Japan'
        },
        {
            _id:3,
            name: 'Jhon Rick',
            review: '',
            img: people1,
            city: 'california'
        }
    ];
    return (
        <section className='my-20'>
            <div className='flex justify-between mb-20 '>
                <div>
                    <h5 className='text-secondary font-bold '>Testimonial</h5>
                    <h2 className='text-xl md:text-5xl '>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-20 md:w-48' src={quote} alt="" />
                </div>
            </div>
            <div data-aos="fade-up" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                reviews.map(review => <Review
                key={review._id}
                review={review}
                ></Review>)
               }
            </div>
        </section>
    );
};

export default Testimonials;