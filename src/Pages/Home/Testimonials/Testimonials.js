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
            img: people1
        },
        {
            _id:2,
            name: 'Witson Herry',
            review: '',
            img: people1
        },
        {
            _id:3,
            name: 'Witson Herry',
            review: '',
            img: people1
        }
    ];
    return (
        <section className='my-20'>
            <div className='flex justify-between mb-20 '>
                <div>
                    <h5 className='text-secondary font-bold '>Testimonial</h5>
                    <h2 className='text-2xl lg:text-4xl '>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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