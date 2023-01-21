import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';
import { FaHandHoldingMedical } from "react-icons/fa";

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const {data: services, isLoading} = useQuery('services', () => fetch('https://doctors-portal-server-ten-murex.vercel.app/services').then(res=> res.json()))

    const imgStorageKey = '5dca9c39c8fda3bf3f42306a785d5d90';

    const onSubmit = async(data) =>{
       const image = data.image[0];
       const formData = new FormData();
       formData.append('image', image);
       const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;

       fetch(url, {
        method: 'POST',
        body: formData
       })
       .then(res => res.json())
       .then(result => {
        if(result.success){
            const img = result.data.url;
            const doctor = {
                name: data.name,
                email: data.email,
                specialty: data.specialty,
                img: img
            }
            // sending to mongodb database
            fetch('https://doctors-portal-server-ten-murex.vercel.app/doctor', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json',
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify(doctor)

            })
            .then(res => res.json())
            .then(inserted => {
                if(inserted.insertedId){
                    toast.success('Doctor added successfully');
                    reset();
                }
                else{
                    toast.error('Failed to add the doctor')
                }
            })
        }
        console.log('imgbb', result);
       })
         
     };

     if(isLoading){
        return <Loading></Loading>
     }
 
    return (
        <div className='px-5 md:px-20'>
           <div className='flex items-center'>
           <p className='text-xl font-bold text-slate-800 mr-1'> Add a new Doctor </p>
           <FaHandHoldingMedical></FaHandHoldingMedical>
           </div>
            <form className='' onSubmit={handleSubmit(onSubmit)}>

                {/* Name */}
                <div className="form-control w-full max-w-xs ">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name" 
                className="input input-bordered w-full max-w-xs" 
                {...register("name", {
                    required: {
                        value: true,
                        message: 'Name is required!',
                    },
                  })}
                />
                <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                
                </label>
                </div>

                {/* Email */}
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Your Email" 
                className="input input-bordered w-full max-w-xs" 
                {...register("email", {
                    required: {
                        value: true,
                        message: 'Email is required!',
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid email'
                    }
                  })}
                />
                <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                </label>
                </div>
                {/*------ Password ------*/}
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">specialty</span>
                </label>
                <select {...register("specialty")} className="select input-bordered w-full max-w-xs">
                    {
                        services.map(service=> <option
                        key={service._id}
                        value={service.name}
                        >{service.name}</option>)
                    }
                    </select>
                </div>
                {/* Image upload  File type input*/}
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="file" 
                className="input input-bordered w-full max-w-xs" 
                {...register("image", {
                    required: {
                        value: true,
                        message: 'image is required!',
                    },
                  })}
                />
                <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                
                </label>
                </div>

                <input className='btn btn-success  w-full max-w-xs mt-4 text-white' type="submit" value="Add Doctor" />
                </form>
        </div>
    );
};

export default AddDoctor;