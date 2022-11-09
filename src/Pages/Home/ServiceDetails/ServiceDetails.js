import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()
    const { img, description, title } = service;

    return (
        <div className='container mt-5 d-flex'>
            <div className='w-50'>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className='w-50 ms-5'>
                <img className='img-fluid' src={img} alt="" />
            </div>
        </div>
    );
};

export default ServiceDetails;