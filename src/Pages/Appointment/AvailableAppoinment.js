import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';

const AvailableAppoinment = ({date}) => {
    const [services, setServices ]= useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h5 className='text-secondary lg:text-2xl my-12 text-center font-bold'>Available Appoinment on: {format(date, 'PP')}</h5>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mr-12 ml-12 mb-20 gap-y-5'>

            {
                services.map(service => <AppointmentService
                key = {service._id}
                service ={service}
                setTreatment={setTreatment}
                ></AppointmentService>)
            }

            </div>
            {treatment && <BookingModal
         
            date={date}
            treatment={treatment}
            setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;