import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import DashBoard from '../DashBoard/DashBoard';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([])
    const {user} = useAuth()


    useEffect(() => {
        fetch('http://localhost:8000/myorders')
            .then(res => res.json())
            .then(data => setMyOrders(data.filter(order => order.userName === user.displayName)))
    }, [])


    const handleOrderDelete = () =>{
        console.log('deleted')
    }
    
    

    return (
        <div>
            <DashBoard></DashBoard>
            <h2 className='mt-4 mb-5'>My orders</h2>
            <div className="container" style={{overflowX:'scroll', overflowY:'hidden'}}>

                <table className="table table-hover table-secondary text-start">
                    <thead className=''>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Product</th>
                            <th scope="col">Email</th>
                            <th scope="col">Delete Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((myorder, i) => <tr key={i}>
                                <th scope="row">{i+1}</th>
                                <td><img style={{width:'50px',height:'50px', borderRadius:'50%'}} src={myorder.image} alt="" /></td>
                                <td>{myorder.name} {
                                    myorder.quantity>1? <span className='bg-warning rounded-circle ps-2 pe-2 pt-1 pb-1'>{myorder.quantity}</span>:''
                                }</td>
                                <td>{myorder.userEmail}</td>
                                <td><button onClick={handleOrderDelete} className='btn btn-danger btn-sm'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;