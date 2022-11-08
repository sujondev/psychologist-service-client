import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FaAngleRight, FaHome, FaAddressBook } from "react-icons/fa";
import { HiOutlineMail, HiPhone } from "react-icons/hi";

const Footer = () => {
    return (
        <div className='container-fluid footer text-white p-5 mt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-12 mb-2'>
                        <img src="http://azim.commonsupport.com/Morriston/images/logo.png" alt="" />
                        <div>
                            <p className='mt-4'>I am a certified specialist in the branch of psychology concerned with the assessment and treatment of mental illness and behavioural problems. My other passion is publishing. You can find and purchase all my books within this site.</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 mb-2'>
                        <h3 className='fs-4 fw-bold'>Quick links</h3>
                        <div className='text-white'>
                            <ul className='footer-link'>
                                <li><FaAngleRight> </FaAngleRight> <Link className='text-decoration-none text-white fw-semibold' to="/">Home</Link></li>
                                <li><FaAngleRight></FaAngleRight> <Link className='text-decoration-none text-white fw-semibold' to="/blog">Blog</Link></li>
                                <li><FaAngleRight></FaAngleRight> <Link className='text-decoration-none text-white fw-semibold'>about</Link></li>
                                <li><FaAngleRight></FaAngleRight> <Link className='text-decoration-none text-white fw-semibold'>Services</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <h3 className='fs-4 fw-bold'>Contact us</h3>
                        <ul className='footer-link'>
                            <li><FaHome></FaHome> Flat 20, Reynolds Neck, North Hele</li>
                            <li><FaAddressBook></FaAddressBook> naville, FV77 8WS</li>
                            <li><HiPhone></HiPhone> +2(305) 587-3407</li>
                            <li><HiOutlineMail></HiOutlineMail> info@gmail.com</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;