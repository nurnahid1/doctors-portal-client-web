import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51MRoRIDdOq0cRbjkx4CES5lPBuMjBnV6iS5Cb7W4ImJb5sqSTaRJdHLp2pK7PEEOaH6Rs9cW9fzc6RP4mWuqZ3uv00w7GBPTqY');

const Payment = () => {
   
    const {id}= useParams();
    const url = `https://doctors-portal-server-ten-murex.vercel.app/booking/${id}`;
  
    const { data: appointment, isLoading } = useQuery('booking', () => fetch(url, {
        method: 'GET', headers: { 'content-type': 'application/json', 'authorization': `Bearer ${localStorage.getItem('accessToken')}` }
    }).then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }
    const { treatment, slot, price, date } = appointment;
    return (
        <div>
          <div className="hero border-gray-400 ">
            <div className="card-body  shadow-md rounded-xl">
                <p className='text-success font-bold'> Hello,</p>
                <h2 className="card-title"> Please pay for <span className='text-success'>{treatment}</span></h2>
                <p>Your appointment {date} at {slot}</p>
            <p>Please pay: <span className='font-bold'>${price}</span></p>
            </div>
            </div>

    <div className="card flex-shrink-0 w-50 max-w-md shadow-md mx-auto ">
      <div className="card-body">
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment} />
        </Elements>

      </div>
    </div>
  </div>

    );
};

export default Payment;