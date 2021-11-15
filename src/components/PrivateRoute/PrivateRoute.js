import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoding} = useAuth()

    if(isLoding){
        return <div className='text-center mt-5 pt-5'>
            <div className="spinner-grow spinner-grow-sm mt-5" role="status">
            </div>
        </div>
    }


    return (
        <Route {...rest} render={({ location }) => user.email
            ?
            children :
            <Redirect to={{ pathname: '/login', state: { from: location } }}>
            </Redirect>} />
    );

}

export default PrivateRoute