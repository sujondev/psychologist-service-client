import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Reveiw from '../Reveiw/Reveiw';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const [reveiws, setReveiws] = useState([])
    const service = useLoaderData()
    const { img, description, title, _id } = service;

    useEffect(() => {
        fetch(`http://localhost:5000/reveiw?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => setReveiws(data))
    }, [_id])



    const handleReveiw = event => {
        event.preventDefault()
        const reveiwText = event.target.reveiw.value;
        const name = user.displayName
        const email = user.email;
        const photoURL = user.photoURL;
        const reveiw = { reveiwText, email, serviceId: _id, photoURL, name }
        fetch("http://localhost:5000/reveiw", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reveiw)
        })
            .then(res => res.json())
            .then(data => {
                const reveiws = data.acknowledged
                if (reveiws) {
                    toast.success("reveiw adding succesfully")
                    event.target.reset()
                }
            })
    }

    return (
        <>
            <div className='container mt-5 d-flex'>
                <div className='w-50'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className='w-50 ms-5'>
                    <img className='img-fluid' src={img} alt="" />
                </div>
            </div>
            {
                reveiws.map(reveiw => <Reveiw key={reveiw._id} reveiw={reveiw}></Reveiw>)
            }
            {
                user ? <>
                    <form onSubmit={handleReveiw} className='container shadow p-4 mt-5'>
                        <h2 className='text-center mt-5'>add your reveiw</h2>
                        <textarea style={{ marginLeft: "22%" }} className=' mt-3 w-50 shadow service-description mb-3 py-2 px-3' name="reveiw" id="" cols="10" rows="4" placeholder='Write your reveiw'></textarea>
                        <button className='mx-auto d-block btn btn-primary'>Add reveiw</button>
                    </form>
                </>
                    :
                    <Link className='text-center d-block mt-5 fs-4'>Please login to add a review.</Link>
            }
        </>
    );
};

export default ServiceDetails;