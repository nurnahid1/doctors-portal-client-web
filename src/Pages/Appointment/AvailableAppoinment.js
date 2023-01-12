import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';

const AvailableAppoinment = ({date}) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');

    // used react query insted of useEffect hook 
    const {data:services, isLoading, refetch} = useQuery(['available', formattedDate], ()=> fetch(`https://doctors-portal-server-ten-murex.vercel.app/available/?date=${formattedDate}`)
        .then(res=> res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h5 className='text-secondary lg:text-2xl my-12 text-center font-bold'>Available Appoinment on: {format(date, 'PP')}</h5>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mr-12 ml-12 mb-20 gap-y-5'>

            {
                services?.map(service => <AppointmentService
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
            refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;