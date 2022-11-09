import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='bg-img'>
                <img className='img-fluid' src="https://validthemes.live/themeforest/healdi/assets/img/shape/1.png" alt="" />
            </div>
            <div className='d-flex flex-column-reverse flex-md-row mt-4 justify-content-evenly align-items-center'>
                <div className='p-5'>
                    <h2 className='banner-text'>We are providing <br />
                        <strong>Best Psychologist Services</strong> </h2>
                    <p className='mt-3 w-50' style={{ fontSize: "18px", lineHeight: "34px", color: "rgb(102 102 102)" }}>Contented continued any happiness instantly objection
                        yet her allowance.
                        Use correct day new brought tedious
                        decay begin which.</p>
                </div>
                <img className="h-25 banner-img" src="https://validthemes.live/themeforest/healdi/assets/img/thumb/1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;