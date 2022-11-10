import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyReveiw = () => {
    return (
        <div>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
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