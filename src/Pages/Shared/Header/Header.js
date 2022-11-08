import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar className='shadow mt-2' expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src="http://azim.commonsupport.com/Morriston/images/logo.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='text-decoration-none nav-item me-4' to="/">Home</Link>
                            <Link className='text-decoration-none nav-item me-4' to="/blog">Blog</Link>
                            <Link className='text-decoration-none nav-item me-4' to="/login">Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;