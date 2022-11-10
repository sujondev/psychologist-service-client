import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [serviceProvider, setServiceProvider] = useState([])
    useEffect(() => {
        fetch('https://psychologist-service-server.vercel.app/serviceProvider')
            .then(res => res.json())
            .then(data => setServiceProvider(data))
    }, [])
    return (
        <div className='container'>
            <h3 className='text-center mb-3'>Our service provider</h3>
            <div className='row'>
                {
                    serviceProvider.map(provider => <Doctor key={provider._id} provider={provider}></Doctor>)
                }
            </div >
        </div>
    );
};

export default Doctors;