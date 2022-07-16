import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';
import { useAlert } from 'react-alert';
import { logout } from '../../../../actions/user/userAction';
import { useDispatch } from 'react-redux';

const UserOptions = ({ user }) => {

    const history = useHistory();
    const alert = useAlert();
    const dispatch = useDispatch();

    const orders = () => {

        history.push("/orders");
    }

    const account = () => {

        history.push("/account");
    }

    const logoutUser = () => {

        dispatch(logout());
        alert.success("Logout Successfully");
    }

    const dashboard = () => {

        history.push("/dashboard");
    }


    const options = [
        { iconClass: 'fa fa-first-order', name: 'Orders', func: orders },
        { iconClass: 'fa fa-user-circle-o', name: 'Profile', func: account },
        { iconClass: 'fa fa-sign-out', name: 'Logout', func: logoutUser }
    ];

    if (user.role === "admin") {

        options.unshift({
            iconClass: 'fa fa-dashboard', name: 'Dashboard', func: dashboard
        });
    }

    return (
        <>
            <div className='container mt-md-5 mb-md-5'>

                <div className='row'>

                    <div className='col-md-3'>

                        <div className='user-profile'>

                            <img src={user.avatar.url ? user.avatar.url : "/Profile.png"} alt="Profile" />

                        </div>

                    </div>

                    <div className='col-md-9'>

                        <div className='row'>

                            {options.map((item) => (

                                <div key={item.name} className='col-md-4'>

                                    <div className="admin_container" onClick={item.func}>

                                        <div className={`${item.iconClass} admin_icon text-center mt-3`}>

                                        </div>

                                        <p className="text-center mt-1"> {item.name} </p>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default UserOptions;