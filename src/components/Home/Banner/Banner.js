import React from 'react';
import banner from './image/banner.png'
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='d-flex flex-wrap justify-content-around align-items-center banner'>
            <div>
                <h1>Beany Baby</h1>
                <h5 className='mt-3'> we play our part in having a positive impact on the world. <br /> They live in today and will inherit in the future.</h5>
                <Link to='/allProducts'>
                    <button className='btn btn-outline-dark mt-3'>Explore ➜ </button>
                </Link>
            </div>
            <div>
                <img className='img-fluid' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;