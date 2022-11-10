import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyReveiw = ({ myreveiw }) => {
    const { photoURL, name, reveiwText } = myreveiw;
    return (
        <div className='col-lg-4 col-md-6 col-12'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={photoURL} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {reveiwText}
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Button variant="primary">Update</Button>
                        <Button variant="primary">Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MyReveiw;