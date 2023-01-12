import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {auth} from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import { useEffect } from 'react';

const Login = () => {
 
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [token] = useToken(user||googleUser)

    let signInError;
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.form?.pathname || "/"

      if(error || googleError){
        signInError = <p className='text-red-500 py-1'>{error?.message || googleError?.message}</p>
      }
     
      useEffect(()=>{
        if(token){
          navigate(from, {replace:true});
        }
      }, [token, from, navigate])

      if(loading || googleLoading){
       return <Loading></Loading>
      }

    const onSubmit = (data) =>{
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data)
    };

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card w-96  bg-base-100 shadow-xl">
            <div className="card-body ">
                <h2 className=" text-center text-xl font-bold">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

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
                <input className='btn  w-full max-w-xs mt-4 text-white' type="submit" value="Login" />
                </form>
                <p><small>New to Doctors portal? <Link className='text-primary' to='/signup'>Create New Account</Link></small></p>
                <div className='divider'>Or</div>
                <div className="card-actions justify-center">
                <button className='btn btn-outline' onClick={()=> signInWithGoogle()}>Google sign in</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;