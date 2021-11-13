import React from 'react';
import { useState } from 'react/cjs/react.development';
import Navbar from '../Home/Navbar/Navbar';
import useAuth from '../Hooks/useAuth';

const MakeAdmin = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {register} = useAuth()

    const provideAdminName = (e) => {
        setName(e.target.value)
    }

    const provideAdminEmail = (e) => {
        setEmail(e.target.value)
    }

    const provideAdminPassword = (e) => {
        setPassword(e.target.value)
    }

    const handleNewAdmin = () => {
        register(name, email, password)

        const user = {email}
        fetch('https://suptohita-toy-shop-server.herokuapp.com/makeadmin/submit',{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            const hello = ''
            if(data.upsertedId === typeof(hello) || data.upsertedCount > 0 || data.modifiedCount > 0){
                alert('Admin Added')
            }
        })
    }

    const handleMakeAdmin = () => {
        const user = {email}
        fetch('https://suptohita-toy-shop-server.herokuapp.com/makeadmin/submit',{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            const hello = ''
            if(data.upsertedId === typeof(hello) || data.upsertedCount > 0 || data.modifiedCount > 0){
                alert('Admin Added')
            }
        })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className='d-flex justify-content-center'>
                <div className='m-3'>
                    <h6>Make a new admin...</h6>
                    <input onChange={provideAdminName} type="text" className='mt-2' placeholder='Admin Name' />
                    <br />
                    <input onChange={provideAdminEmail} type="email" className='mt-1' placeholder='Admin Email Adress...' />
                    <br />
                    <input onChange={provideAdminPassword} type="password" className='mt-1' placeholder='Give A Password' />
                    <br />
                    <button onClick={handleNewAdmin} className='btn btn-secondary mt-2'>Make New Admin</button>
                </div>
                <div className='m-3'>
                    <h6>Make admin with exsting user.</h6>
                    <input onChange={provideAdminEmail} type="email" className='mt-1' placeholder='Admin Email Adress...' />
                    <br />
                    <button onClick={handleMakeAdmin} className='btn btn-secondary mt-2'>Make Admin</button>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;