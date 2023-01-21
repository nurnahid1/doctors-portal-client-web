import React from 'react';
import footer from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer}) `,
            backgroundSize: 'cover'
            
        }} className=" p-10 ">

    <div className=' flex justify-around md:items-center gap-x-6 md:mt-10'>
  <div className='flex flex-col '>
    <span className="footer-title">Services</span> 
    <a className="link link-hover text-sm">Branding</a>
    <a className="link link-hover text-sm">Design</a>
    <a className="link link-hover text-sm">Marketing</a>
    <a className="link link-hover text-sm">Advertisement</a>
  </div> 
  <div className='flex flex-col'>
    <span className="footer-title">Company</span> 
    <a className="link link-hover text-sm">About us</a>
    <a className="link link-hover text-sm">Contact</a>
    <a className="link link-hover text-sm">Jobs</a>
    <a className="link link-hover text-sm">Press kit</a>
  </div> 
  <div className='flex flex-col'>
    <span className="footer-title text-sm">Legal</span> 
    <a className="link link-hover text-sm">Terms of use</a>
    <a className="link link-hover text-sm">Privacy policy</a>
    <a className="link link-hover text-sm">Cookie policy</a>
  </div>
</div>

  <div className='text-center mt-10 mb-5 text-md'>
    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
  </div>

</footer>
    );
};

export default Footer;