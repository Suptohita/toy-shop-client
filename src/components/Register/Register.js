import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const Register = () => {

    const {signInUsingGoogle, register} = useAuth()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleName = e => {
        setName(e.target.value)
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleRegister = () => {
        register(name, email, password)
    }


    return (
        <div>
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

                    <button type="button" onClick={signInUsingGoogle} className="btn btn-secondary mt-2">Google Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Register;