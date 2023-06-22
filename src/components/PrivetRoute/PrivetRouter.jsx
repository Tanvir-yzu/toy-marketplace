/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContex } from '../Provider/AuthProvider';
import LoadingSpinner from '../spnner/LoadingSpinner';

const PrivetRouter = ({children}) => {
    const {user, loading} = useContext(AuthContex)
    if(loading) {
        return <LoadingSpinner/>
    }

    if(user?.email){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivetRouter;