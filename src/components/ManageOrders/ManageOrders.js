import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Navbar from '../Home/Navbar/Navbar';


const ManageOrders = () => {
    const [myOrders, setMyOrders] = useState([])
    
    const history = useHistory()


    useEffect(() => {
        fetch('https://suptohita-toy-shop-server.herokuapp.com/myorders')
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])


const handleUpdateStatus = (id) =>{

    fetch(`https://suptohita-toy-shop-server.herokuapp.com/updateorderstatus/${id}`,{
        method:"PUT",
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify()
    })
    .then(res => res.json())
}


    return (
        <div>
            <Navbar></Navbar>
            <div className="container" style={{ overflowX: 'scroll', overflowY: 'hidden' }}>
                <h6 className='text-warning mb-3'><u>Note: Status Will Change After Reload Page</u></h6>
                <table className="table table-hover table-secondary text-start">
                    <thead className=''>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Product</th>
                            <th scope="col">Email</th>
                            <th scope="col">Status</th>
                            <th scope="col">Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((myorder, i) => <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td><img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={myorder.image} alt="" /></td>
                                <td>{myorder.name} {
                                    myorder.quantity > 1 ? <span className='bg-warning rounded-circle ps-2 pe-2 pt-1 pb-1'>{myorder.quantity}</span> : ''
                                }</td>
                                <td>{myorder.userEmail}</td>
                                <td>{myorder.status}</td>
                                <td><button onClick={() => handleUpdateStatus(myorder._id)} className='btn btn-danger btn-sm'>Update Status</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;