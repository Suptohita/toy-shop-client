import React, { useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';

const AddProduct = () => {
    const [ placeName, setPlaceName] = useState('')
    const [price, setPrice] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [description, setDescription] = useState('')

    const handleName = (e) => {
        setPlaceName(e.target.value)
    }

    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleImageUrl = (e) => {
        setImageUrl(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    
    const AddProduct = () =>{
        const name = placeName
        const image = imageUrl

       const data = { name, price, image, description}

        fetch('https://suptohita-toy-shop-server.herokuapp.com/addproduct', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId) {
                    alert('Successfully Added')
                }
            })
    
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='container mt-5 pt-5 text-start' style={{maxWidth:'50%'}}>
                <h4 className='mt-3 '>Name:</h4>
                <input onChange={handleName} className='form-control' type="text" name="Name" id="" />

                <h4 className='mt-3'>Price:</h4>
                <input onChange={handlePrice} className='form-control' type="text" name="text" id="" />

                <h4 className='mt-3'>Image URL:</h4>
                <input onChange={handleImageUrl} className='form-control' type="text" name="Image_URL" id="" />

                <h4 className='mt-3'>Description:</h4>
                <input onChange={handleDescription} className='form-control' type="text" name="Description" id="" />

                <button className='btn btn-secondary mt-4' onClick={AddProduct}>Submit</button>
            </div>
        </div>
    );
};

export default AddProduct;