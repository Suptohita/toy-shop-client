import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';
import useAuth from '../Hooks/useAuth';
import { useHistory} from 'react-router';


const Register = () => {

    const { signInUsingGoogle, register, error } = useAuth()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()
    const redirect_uri =  '/'

    const handleName = e => {
        setName(e.target.value)
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle(history, redirect_uri) 
    }

    const handleRegister = () => {
        register(name, email, password, history, redirect_uri)

        if (email && password) {
            const data = { name, email, password, userStatus: 'general' }
            fetch('https://suptohita-toy-shop-server.herokuapp.com/addUser', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
        }
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className='container w-50 mt-5 pt-5'>
                <h1 className='fs-1 pb-5 text-center'><u>Register</u></h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
                        <input type="text" onChange={handleName} className="form-control" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" onChange={handleEmail} className="form-control" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" onChange={handlePassword} className="form-control" required />
                    </div>

                    {/* <h6 className='text-danger'>{passwordError}</h6> */}

                    <h6 className='fw-normal pb-3 pt-2'>Already Registered? <Link to='/login'>Please Login</Link></h6>

                    {/* handle error  */}

                    {/* {
                        message ? <h6 className='text-danger mb-3'>Register Failed</h6> : <h2> </h2>
                    }
                    {
                        error ? <h6 className='text-danger mb-3'>Register Failed</h6> : <h2></h2>
                    } */}

                    <button type="button" onClick={handleRegister} className="btn mt-2" style={{ backgroundColor: '#9bb8b7' }}>Submit</button>
                    <span className='p-3'>Or</span>

                    <button type="button" onClick={handleGoogleLogin} className="btn btn-secondary mt-2">Google Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Register;