import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null);
    const {data: doctors, isLoading, refetch} = useQuery('doctors', ()=> fetch('https://doctors-portal-server-ten-murex.vercel.app/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }
    }).then(res => res.json()));
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='pl-3 text-2xl'>manage doctors {doctors.length}</h3>

            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Specialty</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     
      {
       Object.values(doctors).map((doctor, index) => <DoctorRow
        key={doctor._id}
        doctor={doctor}
        index={index}
        setDeleteDoctor={setDeleteDoctor}
        ></DoctorRow>)
      }
    </tbody>
  </table>
</div>
{deleteDoctor && <DeleteConfirmModal
  deleteDoctor={deleteDoctor}
  refetch={refetch}
  setDeleteDoctor={setDeleteDoctor}
></DeleteConfirmModal>}
</div>
    );
};

export default ManageDoctors;