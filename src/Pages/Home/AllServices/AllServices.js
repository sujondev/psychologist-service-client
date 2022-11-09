import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';

const AllServices = () => {
    const allServices = useLoaderData()
    return (
        <div className='container mt-5'>
            <div className='row gy-4'>
                {
                    allServices.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default AllServices;