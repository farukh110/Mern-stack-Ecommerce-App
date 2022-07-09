import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const LoginRegister = () => {

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

    const loginSubmit = () => {

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
            <div>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">

                    <Tab eventKey="Login" title="Login">

                        <form
                            className='login-form'
                            onSubmit={loginSubmit}>

                            <input
                                className='form-control'
                                type='email'
                                placeholder='enter your email'
                                required
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                            />

                            <input
                                className='form-control'
                                type='password'
                                placeholder='enter your password'
                                required
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                            />

                            <input
                                type='submit'
                                value='Login'
                                className='btn btn-primary'
                            />

                            <Link to='/password/forget'> Forget Password </Link>

                        </form>

                    </Tab>
                    <Tab eventKey="Signup" title="Sign Up">

                        <form className='signup-form'
                            encType='multipart/form-data'
                            onSubmit={registerSubmit}
                        >

                            <input
                                type='text'
                                placeholder='Name'
                                required
                                name='name'
                                value={name}
                                onChange={registerDataChange}
                            />

                            <input
                                type='email'
                                placeholder='Email'
                                required
                                name='email'
                                value={email}
                                onChange={registerDataChange}
                            />

                            <input
                                type='password'
                                placeholder='Password'
                                required
                                name='password'
                                value={password}
                                onChange={registerDataChange}
                            />

                            <div id="registerImage">

                                <img src={avatarPreview} alt="Avatar Preview" />

                                <input
                                    type='file'
                                    name='avatar'
                                    accept='image/*'
                                    onChange={registerDataChange}
                                />

                            </div>

                            <input
                                type='submit'
                                value='Sign Up'
                                className='btn btn-primary'
                            // disabled={loading ? true : false}
                            />

                        </form>

                    </Tab>

                </Tabs>
            </div>
        </>
    )
}

export default LoginRegister;