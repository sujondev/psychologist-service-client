import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    const [allServices, setAllServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mt-5 mb-5'>
            <h2 className='text-center fs-1 fw-semibold mb-5'>Our Services</h2>
            <div className='container'>
                <div className='row gy-4'>
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
                <Link to="/allservices"><button className='d-block mx-auto mt-4 btn btn-primary'>show all</button></Link>
            </div>
        </div>
    );
};

export default Services;