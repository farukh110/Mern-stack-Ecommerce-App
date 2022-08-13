import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...reset }) => {

    const { user, loading, isAuthenticated } = useSelector((state) => state.user);

    return (
        <>
            {!loading && (

                <Route
                    {...reset}
                    render={(props) => {

                        if (!isAuthenticated) {

                            return <Redirect to="/login" />;
                        }

                        return <Component {...props} />;
                    }}
                />
            )}
        </>
    )
}

export default ProtectedRoute;