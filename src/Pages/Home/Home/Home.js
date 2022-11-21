import React from 'react';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Infocards from '../InfoCards/Infocards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Infocards></Infocards>
          <Services></Services>
          <Care></Care>
          <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;