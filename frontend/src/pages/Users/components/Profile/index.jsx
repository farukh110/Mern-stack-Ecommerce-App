import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MetaData from '../../../../components/layouts/helmet';
import { useSelector } from 'react-redux';
import Loader from '../../../../components/layouts/loader';
import './index.css';

const Profile = ({ history }) => {

    const { user, loading, isAuthenticated } = useSelector((state) => state.user);

    useEffect(() => {

        if (isAuthenticated === false) {

            history.push("/login");
        }

    }, [history, isAuthenticated]);

    return (
        <>
            {loading ? <Loader /> : <div>
                <MetaData title={`${user.name}'s Profile`} />

                <div className='container mt-md-5 mb-md-5'>

                    <div className='row justify-content-center'>

                        <div className='col-md-7 profile-container text-white p-4'>

                            <div className='profile-content'>

                                <div className='row'>

                                    <div className='col-md-4 text-center'>

                                        <h3> My Profile </h3>

                                        <img className='img-fluid' src={user.avatar.url} alt={user.name} />

                                    </div>

                                    <div className='col-md-8'>

                                        <div className='row'>

                                            <div className='col-md-4'>

                                                <h3> Full Name </h3>
                                                <p> {user.name} </p>

                                            </div>

                                            <div className='col-md-4'>

                                                <h3> Email </h3>
                                                <p> {user.email} </p>

                                            </div>

                                            <div className='col-md-4'>
                                                <h3> Joined On </h3>
                                                <p> {String(user.createdAt).substr(0, 10)} </p>

                                            </div>

                                            <div className='col-md-12'>

                                                <div className='row'>

                                                    <div className='col-md-4'>

                                                        <Link to='/me/update'> Edit Profile </Link>

                                                    </div>

                                                    <div className='col-md-4'>

                                                        <Link to='/orders'> My Orders </Link>

                                                    </div>

                                                    <div className='col-md-4'>

                                                        <Link to='/password/update'> Change Password </Link>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>


                                    </div>

                                </div>


                            </div>
                        </div>

                    </div>

                </div>
            </div>}
        </>
    )
}

export default Profile;