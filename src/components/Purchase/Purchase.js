import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Home/Navbar/Navbar';
import useAuth from '../Hooks/useAuth';

const Purchase = () => {
    const { purchaseId } = useParams()
    const {user} = useAuth()
    const [specificProduct, setSpecificProduct] = useState({})
    const [adress, setAdress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [quantity, setQuantity] = useState('')


    useEffect(() => {
        fetch(`https://suptohita-toy-shop-server.herokuapp.com/purchase/${purchaseId}`)
            .then(result => result.json())
            .then(data => setSpecificProduct(data))
    }, [purchaseId])



    const handleAdress = e =>{
        setAdress(e.target.value)
    }

    const handlePhoneNumber = e => {
        setPhoneNumber(e.target.value)
    }

    const handleQuantity = e => {
        setQuantity(e.target.value)
    }

    const handlePlaceOrder = (e) => {
        const userName = user.displayName
        const userEmail = user.email
        const orderStatus = 'Pending'

        const {name, image, price, description} = specificProduct

        const data = {userName, userEmail, adress, phoneNumber, name, image, price, description, quantity, status:orderStatus }

        fetch('https://suptohita-toy-shop-server.herokuapp.com/purchase',{
            method: 'POST',
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert("Order Added.")
            }
        })
    }


    return (
        <div>
            <Navbar></Navbar>

            <div className='container'>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card border-white">
                            <div className="card-body">
                                <h4 className="card-title mb-4"><u>{specificProduct.name}</u></h4>
                                <img className='img-fluid border rounded mb-3' src={specificProduct.image} alt="" />
                                <h5 className='mb-3'>Price: ${specificProduct.price}</h5>
                                <p className="card-text">{specificProduct.description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card border-white">
                            <div className="card-body">
                                <h4><u>Delivery Information</u></h4>
                            </div>

                            <div className="rounded-3">
                                <h6 className='text-start'>Name:</h6>
                                <input type="text" readOnly value={user.displayName} className='form-control mb-4' />

                                <h6 className='text-start'>Email:</h6>
                                <input type="email" readOnly value={user.email} className='form-control mb-4' />

                                <h6 id='hello' className='text-start'>Adress:</h6>
                                <input onChange={handleAdress} type="text" className='form-control mb-4' />

                                <h6 className='text-start'>Phone Number:</h6>
                                <input onChange={handlePhoneNumber} type="number" className='form-control mb-4' />

                                <h6 className='text-start'>Quantity:</h6>
                                <input onChange={handleQuantity} type="number" className='form-control mb-4' />

                                <button onClick={handlePlaceOrder} className='btn btn-dark'>Place Order</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Purchase;