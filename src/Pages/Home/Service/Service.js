import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Service = ({ service }) => {
    const { title, img, price, description, _id } = service
    return (
        <div className='col-4'>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description.length > 100 ? description.slice(0, 100) + " ..." : { description }}
                    </Card.Text>
                    <p className='fw-semibold'>Price: ${price}</p>
                    <Button variant="primary">veiw details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;