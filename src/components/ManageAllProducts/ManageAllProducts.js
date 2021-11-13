import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';

const ManageAllProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/allproducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDeleteProduct = (id) => {
        const proceed = window.confirm('You want to delete it?')

        if (proceed) {
            fetch(`http://localhost:8000/product/delete/${id}`, {
                method: "DELETE",
                headers: { "Content-type": "apllication/json" }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingProducts = products.filter(product => product._id !== id)
                        setProducts(remainingProducts)
                    }
                })
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <h1>All Products</h1>
            <div className="container mt-4 mb-5">
                <div className="row">
                    {
                        products.map(product => <div key={product._id} className='col-sm-6 mb-5 border-bottom'>
                            <div className="card border-white">
                                <img className='img-fluid rounded-top' src={product.image} style={{ height: '450px', objectFit: 'cover' }} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title"><u>{product.name}</u></h5>
                                    <p className="card-text">{product.description.slice(0, 120)}...</p>
                                    <button onClick={() => handleDeleteProduct(product._id)} className='btn btn-danger'>Delete</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ManageAllProducts;