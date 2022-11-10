import React from 'react';
import './AddService.css'

const AddServices = () => {
    const handleAddService = event => {
        event.preventDefault()
        const form = event.target;
        const title = form.name.value;
        const img = form.servicePhoto.value;
        const price = form.price.value;
        const description = form.serviceDescription.value;
        // console.log(title, img, price, description)
        const service = { title, img, price, description }
        console.log(service)
    }
    return (
        <div className='container mt-5 shadow p-4'>
            <h2 className='text-center mb-4'>Add your own service</h2>
            <form onSubmit={handleAddService}>
                <div className='row'>
                    <div className='col-lg-4'>
                        <input
                            type="text"
                            name='name'
                            className="form-control mt-1 shadow py-2"
                            placeholder="service name"
                            required
                        />
                    </div>
                    <div className='col-lg-4'>
                        <input
                            type="text"
                            name='servicePhoto'
                            className="form-control mt-1 shadow py-2"
                            placeholder="service photoURL"
                            required
                        />
                    </div>
                    <div className='col-lg-4'>
                        <input
                            type="text"
                            name='price'
                            className="form-control mt-1 shadow py-2"
                            placeholder="price"
                            required
                        />
                    </div>
                    <textarea className='mt-5 w-50 mx-auto shadow service-description mb-3 py-2' name="serviceDescription" id="" cols="5" rows="4" placeholder='serviceDescription'></textarea>
                </div>
                <button className='btn btn-primary d-block w-25 mx-auto'>AddService</button>
            </form>
        </div >
    );
};

export default AddServices;