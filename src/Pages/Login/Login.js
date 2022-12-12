import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {auth} from '../../firebase.init';

const Login = () => {
 
    // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        console.log(user)
    }
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card w-96  bg-base-100 shadow-xl">
            <div className="card-body ">
                <h2 className=" text-center text-xl">Login</h2>
                
                <div className='divider'>or</div>
                <div className="card-actions justify-center">
                {/* <button onClick={()=>signInWithGoogle()} className="btn btn-outline text-center">Google sign in</button> */}

                <button className='border' onClick={()=> signInWithGoogle()}>google sign in</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;