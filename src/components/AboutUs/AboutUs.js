import React from 'react';
import about from './image/about.png'
import './image/about.png'
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';

const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container d-flex flex-wrap justify-content-around align-items-center banner pt-4 pb-4'>
                <div className='me-5 mt-5 pt-5'>
                    <img className='img-fluid mb-3' style={{padding:'5px', margin:'5px', borderRadius:'5px', boxShadow:'0 0 8px 0 grey'}} src={about} alt="" />
                </div>
                <div>
                    <h2>About Us</h2>
                    <h5 className='mt-3'> we play our part in having a positive impact on the world. <br /> They live in today and will inherit in the future.</h5>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;