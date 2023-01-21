import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([])
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(user){
        fetch(`https://doctors-portal-server-ten-murex.vercel.app/booking?patient=${user.email}`, {
          method: 'GET',
          headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res=> {
          if(res.status === 401 || res.status === 403){
            signOut(auth)
            localStorage.removeItem('accesstoken');
            navigate('/')
          }
          return res.json()
        })
        .then(data=> {
          setAppointments(data)
        })
        }
    }, [user])
    return (
        <div className='px-5 md:px-10'>
          

        <div className="overflow-x-auto ">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th className='font-bold'>Name</th>
        <th className='font-bold'>Date</th>
        <th className='font-bold'>Time</th>
        <th className='font-bold'>Treatment</th>
        <th className='font-bold'>Payment</th>
      </tr>
    </thead>
    <tbody>
      {
        appointments.map((a, index)=> <tr key={a._id}>
            <th> {index + 1} </th>
            <td>{a.patientName}</td>
            <td> {a.date} </td>
            <td> {a.slot} </td>
            <td> {a.treatment} </td>
            <td> 
              {(a.price && !a.paid) && <Link to={`/dashbord/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
               {(a.price && a.paid) && 
               
               <div>
                <span className='text-success'>Paid</span>
                <span className='text-success'>Transaction Id {a.transactionId}</span>
               </div>
               }
            </td>
          </tr>)
      }
      
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointments;