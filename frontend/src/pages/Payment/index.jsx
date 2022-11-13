import React, { useRef } from 'react';
import MetaData from '../../components/layouts/helmet';
import CheckoutSteps from '../Cart/components/CheckoutSteps';
import './index.css';
import { CardNumberElement, CardCvcElement, CardExpiryElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { axios } from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';

const Payment = ({ history }) => {

    const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

    const dispatch = useDispatch();
    const alert = useAlert();
    const stripe = useStripe();
    const elements = useElements();

    const btnPay = useRef(null);

    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);

    const paymentData = {
        amount: Math.round(orderInfo.totalPrice * 100),
    }

    const submitHandler = async (e) => {

        try {

            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const { data } = await axios.post(
                "/api/v1/payment/process",
                paymentData,
                config
            );

            const client_secret = data.client_secret;

            if (!stripe || !elements) return;

            const result = await stripe.confirmCardPayment(client_secret, {

                payment_method: {
                    card: elements.getElement(CardNumberElement),
                    billing_details: {
                        name: user.name,
                        email: user.email,
                        address: {
                            line1: shippingInfo.address,
                            city: shippingInfo.city,
                            state: shippingInfo.state,
                            postal_code: shippingInfo.pinCode,
                            country: shippingInfo.country,
                        },
                    },
                },

            });

            if (result.error) {
                btnPay.current.disabled = false;

                alert.error(result.error.message);

            } else {
                if (result.paymentIntent.status === "succeeded") {

                    history.push("/success");
                } else {
                    alert.error("there is some issue with processing payment");
                }
            }

        } catch (error) {
            btnPay.current.disabled = false;
            alert.error(error.response.data.message);
        }

    }

    return (
        <>
            <MetaData title="Payment" />
            <CheckoutSteps activeStep={2} />
            <div className='container'>

                <form className='paymentForm' onSubmit={(e) => submitHandler(e)}>

                    <h3> Card Info </h3>


                    <CardNumberElement className="payment-input" />

                    <CardExpiryElement className="payment-input" />

                    <CardCvcElement className="payment-input" />

                    <input
                        type="submit"
                        value={`Pay - $${orderInfo && orderInfo.totalPrice}`}
                        ref={btnPay}
                        className="btn btn-primary btn-payment"
                    />

                </form>

            </div>
        </>
    )
}

export default Payment;