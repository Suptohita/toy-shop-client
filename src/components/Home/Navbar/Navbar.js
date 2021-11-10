import React from 'react';


const Navbar = () => {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between mt-4 mb-5 bg-transparent'>
                <div className='d-flex flex-wrap'>
                    <h4 className='ms-3 me-5 text-decoration-underline' style={{cursor:'pointer'}}>All Products</h4>
                    <h4 className='ms-3 me-5 text-decoration-underline' style={{cursor:'pointer'}}>Dashboard</h4>
                    <h4 className='ms-3 me-5 text-decoration-underline' style={{cursor:'pointer'}}>About Us</h4>
                </div>
                <div>
                    <button className='btn btn-outline-light text-dark'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;