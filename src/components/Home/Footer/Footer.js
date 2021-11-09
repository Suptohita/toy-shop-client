import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-div'>
            <div className='footer'>
                <div>
                    <h4><u>Company</u></h4>
                    <h6>About Us</h6>
                    <h6>Blog</h6>
                    <h6>Contact</h6>
                </div>

                <div>
                    <h4><u>Links</u></h4>
                    <h6>Our Company</h6>
                    <h6>Events</h6>
                    <h6>Gallery</h6>
                </div>
                
                <div>
                    <h4><u>Best Seller</u></h4>
                    <h6>Catalog</h6>
                    <h6>Our Stores</h6>
                    <h6>Notice</h6>
                </div>
                <div>
                    <h2>Beany Baby</h2>
                    <h5>We are one of the best <br/> company into toy world <br/> and you can easily knock us.</h5>
                    🔗 2873 Yorkshire Circle,NC
                </div>
            </div>
            <h6>©️ Copyright Reserved</h6>
        </div>
    );
};

export default Footer;