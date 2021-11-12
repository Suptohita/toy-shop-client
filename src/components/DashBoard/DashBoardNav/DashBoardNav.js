import React from 'react';
import { Link } from 'react-router-dom';

const DashBoardNav = () => {
    return (
        <div style={{marginTop:'-40px'}}>
            <div className='d-flex justify-content-between p-2 rounded ms-5 me-5 bg-secondary'>
                <div className='d-flex flex-wrap'>
                    <Link className="text-white" to='/myOrders'>
                        <h5 className='ms-3 me-5 ' style={{ cursor: 'pointer' }}>My Orders</h5>
                    </Link>
                    <Link className="text-white" to='/review'>
                        <h5 className='ms-3 me-5 ' style={{ cursor: 'pointer' }}>Review</h5>
                    </Link>
                    <Link className="text-white" to='/pay'>
                        <h5 className='ms-3 me-5 ' style={{ cursor: 'pointer' }}>Pay</h5>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DashBoardNav;