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
          <h2 className='text-green-400 text-4xl text-center'>Dashbord </h2>
          <Outlet></Outlet>
          
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="dashbord-sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 bg-base-100 text-base-content border">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashbord'>My Appointments</Link></li>
            <li><Link to='/dashbord/reviews'>My Reviews</Link></li>
            <li><Link to='/dashbord/history'>My History</Link></li>
            <li>{admin && <>
              <Link to='/dashbord/users'>All Users</Link>
              <Link to='/dashbord/addDoctor'>Add new doctor</Link>
              <Link to='/dashbord/manageDoctor'>Manage doctors</Link>
            </>}</li>
           
          </ul>
        
        </div>
      </div>
    );
};

export default Dashbord;