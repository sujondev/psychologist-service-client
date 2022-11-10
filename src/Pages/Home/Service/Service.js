import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, img, price, description, _id } = service;
    return (
        <div className='col-lg-4 col-md-6 col-12'>
            <Card style={{ width: '100%', height: "500px" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description?.length > 100 ? description?.slice(0, 100) + " ..." : { description }}
                    </Card.Text>
                    <p className='fw-semibold'>Price: ${price}</p>
                    <Link to={`/service/${_id}`}><Button variant="primary">veiw details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;