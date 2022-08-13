import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, forgotPassword } from '../../../../actions/user/userAction';
import Loader from '../../../../components/layouts/loader';

const ForgotPassword = () => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const { error, message, loading } = useSelector((state) => state.forgotPassword);

    const [email, setEmail] = useState("");

    const forgotPasswordSubmit = (e) => {

        e.preventDefault();

        const myForm = new FormData();

        myForm.set("email", email);

        console.log("forget password");

        dispatch(forgotPassword(myForm));
    }

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (message) {
            alert.success(message);
        }

    }, [dispatch, error, alert, message]);

    return (
        <>
            {loading ? <Loader /> : <div>
                <div className='container'>

                    <div className='row justify-content-center mb-md-5 mt-md-5'>

                        <div className='col-md-5'>

                            <div className="update-profile-wrapper">

                                <form className='update-profile-form'
                                    onSubmit={forgotPasswordSubmit}
                                >

                                    <div className='row justify-content-center'>

                                        <div className='col-md-12 mt-md-3'>

                                            <input
                                                className='form-control'
                                                type='email'
                                                placeholder='enter your email'
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />


                                        </div>

                                        <div className='col-md-12 mt-md-3'>


                                        </div>

                                        <div className='col-md-12 mt-md-3'>


                                        </div>

                                        <div className='col-md-7 mt-md-3'>

                                            <input
                                                type='submit'
                                                value='Forgot Password'
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

export default ForgotPassword;