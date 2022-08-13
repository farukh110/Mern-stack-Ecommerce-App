import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import { useAlert } from 'react-alert';
import { useEffect } from 'react';
import { clearErrors, loadUser, updateProfile } from '../../../../actions/user/userAction';
import { update_profile_reset } from '../../../../appConstants/user/userConstants';
import MetaData from '../../../../components/layouts/helmet';
import Loader from '../../../../components/layouts/loader';

const UpdateProfile = ({ history }) => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const { user } = useSelector(
        (state) => state.user
    );

    const { error, isUpdated, loading } = useSelector((state) => state.profile);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [avatar, setAvatar] = useState();
    const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

    const updateProfileSubmit = (e) => {

        e.preventDefault();

        const myForm = new FormData();

        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("avatar", avatar);

        console.log("signup form submitted");

        dispatch(updateProfile(myForm));
    };

    const updateProfileDataChange = (e) => {

        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
    };

    useEffect(() => {

        if (user) {

            setName(user.name);
            setEmail(user.email);
            setAvatarPreview(user.avatar.url);
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success("Profile Updated Successfully");
            dispatch(loadUser());

            history.push("/account");

            dispatch({
                type: update_profile_reset,
            });
        }

    }, [dispatch, error, alert, history, user, isUpdated]);

    return (
        <> {loading ? <Loader /> : <div>
            <MetaData title="Update Profile" />

            <div className='container'>

                <div className='row justify-content-center mb-md-5'>

                    <div className='col-md-5'>

                        <div className="update-profile-wrapper">

                            <form className='update-profile-form'
                                encType='multipart/form-data'
                                onSubmit={updateProfileSubmit}
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
                                            onChange={(e) => setName(e.target.value)}
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
                                            onChange={(e) => setEmail(e.target.value)}
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
                                                            onChange={updateProfileDataChange}
                                                        />
                                                    </div>

                                                </div>

                                                <div className='col-md-6'>

                                                    <img className='img-fluid' src={avatarPreview} alt="Avatar Preview" />

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div className='col-md-6 mt-md-3'>

                                        <input
                                            type='submit'
                                            value='Update Profile'
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

export default UpdateProfile;