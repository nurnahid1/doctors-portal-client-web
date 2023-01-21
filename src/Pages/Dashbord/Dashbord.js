import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import { auth } from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashbord = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile ">
        <input id="dashbord-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <h2 className='text-success font-bold text-3xl md:text-4xl underline text-center mb-10 mt-5'>Dashbord </h2>
          <Outlet></Outlet>
          
        
        </div> 
        <div className="drawer-side md:mt-10 md:mb-32  px-6 ">
          <label htmlFor="dashbord-sidebar" className="drawer-overlay rounded-md "></label> 
          <ul className="menu p-4 w-80  bg-base-100 text-base-content border rounded-md ">
            {/* <!-- Sidebar content here --> */}
            
        <li><Link className='border my-1 font-bold text-secondary' to='/dashbord'> My Appointments</Link></li>
            <li><Link className='border  my-1 font-bold text-secondary' to='/dashbord/reviews'>My Reviews</Link></li>
            <li><Link className='border  my-1 font-bold text-secondary' to='/dashbord/history'>My History</Link></li>
            <li>{admin && <>
              <Link className='border  my-1 font-bold text-secondary' to='/dashbord/users'>All Users</Link>
              <Link className='border  my-1 text-secondary font-bold' to='/dashbord/addDoctor'>Add new doctor</Link>
              <Link className='border  my-1 font-bold text-secondary' to='/dashbord/manageDoctor'>Manage doctors</Link>
            </>}</li>
           
          </ul>
        
        </div>
      </div>
    );
};

export default Dashbord;