import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='w-100'>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;