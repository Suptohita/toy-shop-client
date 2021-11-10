import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (  
        <div>
            <div className='container w-50 mt-5 pt-5'>
                <h1 className='fs-1 pb-5 text-center'><u>Login</u></h1>
                <form>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password"  className="form-control" id="exampleInputPassword1" />
                    </div>

                    <h6 className='fw-normal pb-3 pt-2'>New Here? <Link to='/register'>Register Here</Link></h6>

                    {/* handle error  */}

                    {/* {
                        message? <h6 className='text-danger mb-3'>Login Failed</h6> : <h2> </h2>
                    }
                    {
                        error ? <h6 className='text-danger mb-3'>Login Failed</h6> : <h2></h2>
                    } */}

                    <button type="button" className="btn mt-2" style={{backgroundColor:'#9bb8b7'}}>Submit</button>

                    <span className='p-3'>Or</span>

                
                    <button type="button" className="btn btn-secondary mt-2">Google Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;