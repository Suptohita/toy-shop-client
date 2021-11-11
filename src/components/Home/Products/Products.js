import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/allproducts')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0,6)))
    }, [])

    return (
        <div>
            <h1>Freature Products</h1>
            <div className="container mt-4 mb-5">
                <div class="row">
                    {
                        products.map(product => <div className='col-sm-4 mb-5 border-bottom'>
                            <div className="card border-white">
                                <img className='img-fluid rounded-top' src={product.image} style={{height:'300px', objectFit:'cover'}} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title"><u>{product.name}</u></h5>
                                    <p className="card-text">{product.description.slice(0,50)}...</p>
                                    <h5 className='mb-3'>From ${product.price}</h5>
                                    <Link to='/purchase'><button className='btn btn-outline-dark'>Purchase</button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};


export default Products;