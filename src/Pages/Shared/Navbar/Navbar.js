import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import {auth} from '../../../firebase.init'



const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };

    return (
      <div>

      
  <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/appointment">Appointment</Link></li>
      <li><Link to="/reviews">Reviews</Link></li>
      <li><Link to="/contactus">Contact Us</Link></li>
      {
        user && <li><Link to="/dashbord">Dashbord</Link></li>
      }
      <li>{user ? <button onClick={logout} className="btn btn-ghost">Sign Out</button> : <Link to="/login">Login</Link>}</li>
      </ul>
    </div>
    
  
    <a href='/' className="btn btn-ghost normal-case md:text-xl md:pl-32 text-sm">Doctors Portal</a>
    
    
  </div>
  
  <div className="navbar navbar-end">
  <div className=" hidden lg:flex ">
    <ul className="menu menu-horizontal p-0">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/appointment">Appointment</Link></li>
      <li><Link to="/reviews">Reviews</Link></li>
      <li><Link to="/contactus">Contact Us</Link></li>
      {
        user && <li><Link to="/dashbord">Dashbord</Link></li>
      }
      <li>{user ? <button className="btn btn-ghost" onClick={logout}>Sign Out</button> : <Link className='btn bg-slate-800  text-white rounded-md' to="/login">Login</Link>}</li>
     
    </ul>
  </div>
  <div className="navbar-end">
      <label tabIndex="1" htmlFor="dashbord-sidebar" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      </div>
</div>
</div>
</div>

    );
};

export default Navbar;