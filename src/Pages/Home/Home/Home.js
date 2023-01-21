import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import Infocards from '../InfoCards/Infocards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
          <Banner></Banner>
          <Infocards></Infocards>
          <Doctor></Doctor>
          <Services></Services>
          <Care></Care>
          <MakeAppointment></MakeAppointment>
          <Testimonials></Testimonials>
          <Contact></Contact>
          <Footer></Footer>
        </div>
    );
};

export default Home;