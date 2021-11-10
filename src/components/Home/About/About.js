import React from 'react';
import about from './image/about.png'
import './image/about.png'

const About = () => {
    return (
        <div className='container d-flex flex-wrap justify-content-around align-items-center banner pt-4 pb-4'>
            <div>
                <img className='img-fluid mb-3' style={{padding:'5px', margin:'5px', borderRadius:'5px', boxShadow:'0 0 8px 0 grey'}} src={about} alt="" />
            </div>
            <div>
                <h2>About Us</h2>
                <h5 className='mt-3'> we play our part in having a positive impact on the world. <br /> They live in today and will inherit in the future.</h5>
                <button className='btn btn-outline-dark mt-4'>More »</button>
            </div>
        </div>
    );
};

export default About;