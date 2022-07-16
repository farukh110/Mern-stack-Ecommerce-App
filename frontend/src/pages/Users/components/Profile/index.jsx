import React from 'react';
import { Link } from 'react-router-dom';
import MetaData from '../../../../components/layouts/helmet';

const Profile = () => {
    return (
        <>
            <MetaData title={`${user.name}'s Profile`} />

            <div className='container'>

                <div className='row'>

                    <div className='col-md-12'>

                        <h3> My Profile </h3>

                        <img src={user.avatar.url} alt={user.name} />

                        <Link to='/me/update'> Edit Profile </Link>

                        <h3> Full Name </h3>
                        <p> {user.name} </p>

                        <h3> Email </h3>
                        <p> {user.email} </p>

                        <h3> Joined On </h3>
                        <p> {String(user.createdAt).substr(0, 10)} </p>

                        <Link to='/orders'> My Orders </Link>
                        <Link to='/password/update'> Change Password </Link>


                    </div>

                </div>

            </div>
        </>
    )
}

export default Profile;