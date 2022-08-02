import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, updatePassword } from '../../../../actions/user/userAction';
import { update_password_reset } from '../../../../appConstants/user/userConstants';
import './index.css';

const UpdatePassword = ({ history }) => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const { error, isUpdated, loading } = useSelector((state) => state.profile);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const updatePasswordSubmit = (e) => {

        e.preventDefault();

        const myForm = new FormData();

        myForm.set("oldPassword", oldPassword);
        myForm.set("newPassword", newPassword);
        myForm.set("confirmPassword", confirmPassword);

        console.log("updated password");

        dispatch(updatePassword(myForm));
    }

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success("Password Updated Successfully");

            history.push("/account");

            dispatch({
                type: update_password_reset,
            });
        }

    }, [dispatch, error, alert, history, isUpdated]);

    return (
        <>
            <div className='container'>

                <div className='row justify-content-center mb-md-5'>

                    <div className='col-md-5'>

                        <div className="update-profile-wrapper">

                            <form className='update-profile-form'
                                encType='multipart/form-data'
                                onSubmit={updatePasswordSubmit}
                            >

                                <div className='row justify-content-center'>

                                    <div className='col-md-12 mt-md-3'>

                                        <input
                                            className='form-control'
                                            type='password'
                                            placeholder='enter your old password'
                                            required
                                            value={oldPassword}
                                            onChange={(e) => setOldPassword(e.target.value)}
                                        />


                                    </div>

                                    <div className='col-md-12 mt-md-3'>

                                        <input
                                            className='form-control'
                                            type='password'
                                            placeholder='enter your new password'
                                            required
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                        />

                                    </div>

                                    <div className='col-md-12 mt-md-3'>

                                        <input
                                            className='form-control'
                                            type='password'
                                            placeholder='enter your confirm password'
                                            required
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />

                                    </div>

                                    <div className='col-md-7 mt-md-3'>

                                        <input
                                            type='submit'
                                            value='Change Password'
                                            className='btn btn-primary text-uppercase btn-action btn-block w-100'
                                        // disabled={loading ? true : false}
                                        />

                                    </div>

                                </div>


                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default UpdatePassword;