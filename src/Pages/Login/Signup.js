import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import {auth} from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Signup = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      
      const [token] = useToken(user||googleUser)

      const navigte = useNavigate();
      let signInError;

      if(error || googleError || updateError ){
        signInError = <p className='text-red-500 py-1'>{error?.message || googleError?.message || updateError?.message}</p>
      }
      if(token){
        navigte('/appointment');
      }
      if(loading || googleLoading || updating ){
       return <Loading></Loading>
      }

    const onSubmit = async(data) =>{
       console.log(data)
       await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName:data.name });
        console.log('profile updated')
    };

    return (
        <div data-aos="fade-up" className='h-screen flex justify-center items-center px-8 md:px-0'>
            <div className="card w-96  bg-base-100 shadow-xl">
            <div className="card-body ">
                <h2 className=" text-center text-xl font-bold">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                {/* Name */}
                <div className="form-control w-full max-w-xs">
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
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Your Password" 
                className="input input-bordered w-full max-w-xs" 
                {...register("password", {
                    required: {
                        value: true,
                        message: 'Password is required!',
                    },
                    minLength: {
                      value: 6,
                      message: 'password must be at least 6 characters '
                    }
                  })}
                />
                <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                </label>
                </div>
                {/* show error */}
                  {signInError}
                <input className='btn  w-full max-w-xs mt-4 text-white' type="submit" value="SignUp" />
                </form>
                <p><small>Already have an account? <Link className='text-primary' to='/login'> Please Login</Link></small></p>
                <div className='divider'>Or</div>
                <div className="card-actions justify-center">
                <button className='btn btn-outline' onClick={()=> signInWithGoogle()}>Google sign in</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Signup;