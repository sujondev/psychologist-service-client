import React from 'react';
import Card from 'react-bootstrap/Card';


const Doctor = ({ provider }) => {
    const { name, img, catgeory } = provider
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {catgeory}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Doctor;