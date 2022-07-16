import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import loginUser from '../../assets/images/login.jpg';
import { useDispatch } from 'react-redux';
import { clearErrors, login, register } from '../../actions/user/userAction';
import { useAlert } from 'react-alert';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../components/layouts/loader';

const LoginRegister = ({ history }) => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const { error, loading, isAuthenticated } = useSelector((state) => state.user);

    const [loginEmail, setLoginEmail] = useState();
    const [loginPassword, setLoginPassword] = useState();

    const [user, setUser] = useState({

        name: "",
        email: "",
        password: ""
    });

    const { name, email, password } = user;

    const [avatar, setAvatar] = useState();
    const [avatarPreview, setAvatarPreview] = useState("/profile.png");

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isAuthenticated) {
            history.push("/account");
        }

    }, [dispatch, error, alert, history, isAuthenticated]);

    const loginSubmit = (e) => {

        e.preventDefault();
        dispatch(login(loginEmail, loginPassword));
        console.log("login form submitted");
    }

    const registerSubmit = (e) => {

        e.preventDefault();

        const myForm = new FormData();

        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("password", password);
        myForm.set("avatar", avatar);

        console.log("signup form submitted");

        dispatch(register(myForm));
    }

    const registerDataChange = (e) => {

        if (e.target.name === "avatar") {

            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(reader.result);
                }
            };

            reader.readAsDataURL(e.target.files[0]);

        } else {
            setUser({ ...user, [e.target.name]: [e.target.value] });
        }

    }

    return (
        <>

            {
                loading ? <Loader /> : <div>

                    <div className='banner'>

                        <img className='img-fluid w-100' src={loginUser} alt='' />

                    </div>

                    <div className='container'>

                        <div className='row justify-content-center mt-md-5 mb-md-5'>

                            <div className='col-md-6 login-wrapper pt-md-5 pb-md-5'>

                                <Tabs defaultActiveKey="Login" id="uncontrolled-tab-example" className="mb-3">

                                    <Tab eventKey="Login" title="Login">

                                        <form
                                            className='login-form'
                                            onSubmit={loginSubmit}>

                                            <div className='row'>

                                                <div className='col-md-12 mt-md-3'>

                                                    <input
                                                        className='form-control'
                                                        type='email'
                                                        placeholder='enter your email'
                                                        required
                                                        value={loginEmail}
                                                        onChange={(e) => setLoginEmail(e.target.value)}
                                                    />


                                                </div>

                                                <div className='col-md-12 mt-md-3'>

                                                    <input
                                                        className='form-control'
                                                        type='password'
                                                        placeholder='enter your password'
                                                        required
                                                        value={loginPassword}
                                                        onChange={(e) => setLoginPassword(e.target.value)}
                                                    />

                                                </div>

                                                <div className='col-md-5 mt-md-3'>

                                                    <input
                                                        type='submit'
                                                        value='Login'
                                                        className='btn btn-primary text-uppercase btn-action btn-block w-100'
                                                    />

                                                </div>

                                                <div className='col-md-7 mt-md-4'>

                                                    <Link to='/password/forget'> Forget Password </Link>

                                                </div>

                                            </div>

                                        </form>

                                    </Tab>
                                    <Tab eventKey="Signup" title="Sign Up">

                                        <form className='signup-form'
                                            encType='multipart/form-data'
                                            onSubmit={registerSubmit}
                                        >

                                            <div className='row justify-content-center'>

                                                <div className='col-md-12 mt-md-3'>

                                                    <input
                                                        type='text'
                                                        placeholder='Name'
                                                        className='form-control'
                                                        required
                                                        name='name'
                                                        value={name}
                                                        onChange={registerDataChange}
                                                    />

                                                </div>

                                                <div className='col-md-12 mt-md-3'>
                                                    <input
                                                        type='email'
                                                        placeholder='Email'
                                                        className='form-control'
                                                        required
                                                        name='email'
                                                        value={email}
                                                        onChange={registerDataChange}
                                                    />

                                                </div>

                                                <div className='col-md-12 mt-md-3'>

                                                    <input
                                                        type='password'
                                                        placeholder='Password'
                                                        className='form-control'
                                                        required
                                                        name='password'
                                                        value={password}
                                                        onChange={registerDataChange}
                                                    />

                                                </div>

                                                <div className='col-md-12 mt-md-3'>

                                                    <div id="registerImage">

                                                        <div className='row'>

                                                            <div className='col-md-6'>

                                                                <div className="upload-btn-wrapper">

                                                                    <button className="btn btn-primary text-uppercase btn-action btn-block w-100">Upload a Photo</button>
                                                                    <input
                                                                        type='file'
                                                                        name='avatar'
                                                                        className='form-control file-upload'
                                                                        accept='image/*'
                                                                        onChange={registerDataChange}
                                                                    />
                                                                </div>

                                                            </div>

                                                            <div className='col-md-6'>

                                                                <img className='img-fluid' src={avatarPreview} alt="Avatar Preview" />

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                                <div className='col-md-4 mt-md-3'>

                                                    <input
                                                        type='submit'
                                                        value='Sign Up'
                                                        className='btn btn-primary text-uppercase btn-action btn-block w-100'
                                                    // disabled={loading ? true : false}
                                                    />

                                                </div>

                                            </div>


                                        </form>

                                    </Tab>

                                </Tabs>
                            </div>

                        </div>

                    </div>

                </div>
            }


        </>
    )
}

export default LoginRegister;