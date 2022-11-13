import React, { useState } from 'react';
import "./index.css";
import { Country, State } from "country-state-city";
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
// import MetaData from '../../components/layouts/helmet';
import CheckoutSteps from './../CheckoutSteps/index';
import { saveShippingInfo } from './../../../../actions/Cart/cartAction';

const Shipping = ({ history }) => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const { shippingInfo } = useSelector((state) => state.cart);

    const [address, setAddress] = useState(shippingInfo.address);
    const [city, setCity] = useState(shippingInfo.city);
    const [state, setState] = useState(shippingInfo.state);
    const [country, setCountry] = useState(shippingInfo.country);
    const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

    const shippingSubmit = (e) => {

        // try {

        e.preventDefault();

        if (phoneNo.length < 10 || phoneNo.length > 10) {

            alert.error("Phone Number should be equal to 10 digits long");
            return;
        }

        dispatch(saveShippingInfo({ address, city, state, country, pinCode, phoneNo }));

        history.push("/order/confirm");

        // } catch (error) {

        // }
    }

    return (
        <>
            {/* <MetaData title="Shipping Details" /> */}

            <CheckoutSteps activeStep={1} />

            <div className='container'>
                <h3> Shipping Details </h3>

                <div className='row'>

                    <div className='col-md-12'>

                        <div className='shipping-details-container'>

                            <form className='shipping-form'
                                encType='multipart/form-data'
                                onSubmit={shippingSubmit}>

                                <input
                                    type='text'
                                    placeholder='Address'
                                    required
                                    className='form-control'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />

                                <input
                                    type='text'
                                    placeholder='City'
                                    required
                                    className='form-control'
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />

                                <input
                                    type='text'
                                    placeholder='Pin Code'
                                    required
                                    className='form-control'
                                    value={pinCode}
                                    onChange={(e) => setPinCode(e.target.value)}
                                />

                                <input
                                    type='text'
                                    placeholder='Phone Number'
                                    required
                                    className='form-control'
                                    value={phoneNo}
                                    onChange={(e) => setPhoneNo(e.target.value)}
                                />

                                <select
                                    required
                                    className='form-control'
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}>

                                    <option value=""> Country </option>
                                    {
                                        Country && Country.getAllCountries().map((item) => (

                                            <option key={item.isoCode} value={item.isoCode}>{item.name}</option>

                                        ))
                                    }

                                </select>

                                {
                                    country && (

                                        <select
                                            required
                                            value={state}
                                            className='form-control'
                                            onChange={(e) => setState(e.target.value)}>

                                            <option value=""> State </option>
                                            {
                                                State && State.getStatesOfCountry(country).map((item) => (
                                                    <option key={item.isoCode} value={item.isoCode}>{item.name}</option>
                                                ))
                                            }

                                        </select>
                                    )
                                }

                                <input
                                    type='submit'
                                    value='Continue'
                                    className='btn btn-primary text-uppercase btn-shipping'
                                    disabled={state ? false : true}
                                />


                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Shipping;