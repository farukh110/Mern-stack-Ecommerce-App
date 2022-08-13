import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, resetPassword } from '../../../../actions/user/userAction';
import Loader from '../../../../components/layouts/loader';
import "./index.css";

const ResetPassword = ({ history, match }) => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const { error, success, loading } = useSelector((state) => state.forgotPassword);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const resetPasswordSubmit = (e) => {

        e.preventDefault();

        const myForm = new FormData();

        myForm.set("password", password);
        myForm.set("confirmPassword", confirmPassword);

        console.log("reset password");

        dispatch(resetPassword(match.params.token, myForm));
    }

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (success) {
            alert.success("Password Updated Successfully");

            history.push("/login");
        }

    }, [dispatch, error, alert, history, success]);


    return (
        <>
            {loading ? <Loader /> : <div>
                <div className='container'>

                    <div className='row justify-content-center mb-md-5'>

                        <div className='col-md-5'>

                            <div className="update-profile-wrapper">

                                <form className='update-profile-form'
                                    onSubmit={resetPasswordSubmit}
                                >

                                    <div className='row justify-content-center'>

                                        <div className='col-md-12 mt-md-3'>

                                            <input
                                                className='form-control'
                                                type='password'
                                                placeholder='enter your new password'
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
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
            </div>}
        </>
    )
}

export default ResetPassword;