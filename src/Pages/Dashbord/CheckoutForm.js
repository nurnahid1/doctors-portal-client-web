import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CheckoutForm = ({appointment}) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements()
    const [clientSecret, setClientSecret] = useState('');
    const {_id, price, patient, patientName} = appointment;

  useEffect(()=>{
    fetch('https://doctors-portal-server-ten-murex.vercel.app/create-payment-intent', {
      method: 'POST',
      headers:{
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({price})
    })
    .then(res => res.json())
    .then(data => {
      if(data?.clientSecret){
        setClientSecret(data.clientSecret);
      }
    })
  }, [price])



    const handleSubmit = async(e) =>{
        e.preventDefault();
        if (!stripe || !elements) {
            return;
          }

          const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
      
        setCardError(error?.message || '');
        setSuccess('');
        setProcessing(true);

        // confirm card payment
        const {paymentIntent, intentError} = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                name: patientName,
                email: patient
              },
            },
          },
        );
        if(intentError){
          setCardError(intentError?.message)
          setProcessing(false);
        }
        else{
          setCardError('');
          setSuccess('your payment is completed')
          console.log(paymentIntent)
          setTransactionId(paymentIntent.id)

          //store payment on database
          const payment = {
            appointment: _id,
            transactionId: paymentIntent.id
          }
          fetch(`https://doctors-portal-server-ten-murex.vercel.app/booking/${_id}`, {
            method: 'PATCH',
            headers:{
              'content-type': 'application/json',
              'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(payment)

          }).then(res => res.json())
          .then(data =>{
            setProcessing(false);
            console.log(data)
          })

        }

    }
    return (
    <div>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-success mt-3 btn-sm text-white' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
      {
        cardError && <p className='text-red-500'>{cardError}</p>
      }
      {
        success && <div >
          <p className='text-green-500'>{success}</p>
          <p className='text-blue-700 text-sm'>{transactionId}</p>
          
          </div>
      }
    
        </div>
    );
};

export default CheckoutForm;