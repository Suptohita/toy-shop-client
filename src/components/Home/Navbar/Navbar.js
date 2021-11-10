import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Navbar = () => {
    const { logOut, user } = useAuth()

    return (
        <div className='d-flex justify-content-between mt-4 ms-5 me-5 mb-5 bg-transparent'>
            <div className='d-flex flex-wrap'>
                <Link className="text-dark" to='/'>
                    <h4 className='ms-3 me-5 ' style={{ cursor: 'pointer' }}>Home</h4>
                </Link>

                <Link className="text-dark" to='/allProducts'>
                    <h4 className='ms-3 me-5 ' style={{ cursor: 'pointer' }}>Products</h4>
                </Link>

                <Link className='text-dark' to='/dashboard'>
                    <h4 className='ms-3 me-5 ' style={{ cursor: 'pointer' }}>Dashboard</h4>
                </Link>

                <Link className="text-dark" to='/about'>
                    <h4 className='ms-3 me-5 ' style={{ cursor: 'pointer' }}>About Us</h4>
                </Link>
            </div>

            {
                user?.email ?
                    <h6><button className='btn'>Hi {user.displayName}</button> <button onClick={logOut} className="btn btn-outline-light text-dark">Log Out</button></h6>
                    :
                    <Link to='/login'><button className="btn btn-outline-light text-dark">Log In</button></Link>
            }


        </div>
    );
};

export default Navbar;