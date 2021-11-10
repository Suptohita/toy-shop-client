import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('')
    
    const {login, signInUsingGoogle} = useAuth()

    const userEmail = e => {
        setEmail(e.target.value)
    }

    const userPassword = e => {
        setPassword(e.target.value)
    }

    const handleLogin = e => {
        login(email, password)
    }

    return (  
        <div>
            <Navbar></Navbar>
            <div className='container w-50 mt-5 pt-5'>
                <h1 className='fs-1 pb-5 text-center'><u>Login</u></h1>
                <form>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" onChange={userEmail} className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" onChange={userPassword} className="form-control" />
                    </div>

                    <h6 className='fw-normal pb-3 pt-2'>New Here? <Link to='/register'>Register Here</Link></h6>

                    {/* handle error  */}

                    {/* {
                        message? <h6 className='text-danger mb-3'>Login Failed</h6> : <h2> </h2>
                    }
                    {
                        error ? <h6 className='text-danger mb-3'>Login Failed</h6> : <h2></h2>
                    } */}

                    <button type="button" onClick={handleLogin} className="btn mt-2" style={{backgroundColor:'#9bb8b7'}}>Submit</button>

                    <span className='p-3'>Or</span>

                
                    <button type="button" onClick={signInUsingGoogle} className="btn btn-secondary mt-2">Google Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;