import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MetaData from '../../../../components/layouts/helmet';
import CheckoutSteps from '../CheckoutSteps';
import "./index.css";

const ConfirmOrder = ({ history }) => {

    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);

    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price, 0
    );

    const shippingCharges = subtotal > 1000 ? 0 : 200;

    const tax = subtotal * 0.25;

    const totalPrice = subtotal + tax + shippingCharges;

    const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode} ${shippingInfo.country}`;

    const proceedPayment = () => {

        const data = {
            subtotal,
            shippingCharges,
            tax,
            totalPrice
        };

        sessionStorage.setItem("orderInfo", JSON.stringify(data));

        history.push("/process/payment");
    }

    return (
        <>
            <MetaData title="Confirm Order" />
            <CheckoutSteps activeStep={1} />

            <div className='container'>

                <div className='row'>

                    <div className='col-md-12'>

                        <div className='confirm-order'>

                            <div className='confirm-shipping-area'>

                                <div className='row'>

                                    <div className='col-md-12'>

                                        <p> Name: </p>
                                        <span> {user.name} </span>

                                        <p> Phone: </p>
                                        <span> {shippingInfo.phoneNo} </span>

                                        <p> Address: </p>
                                        <span> {address} </span>

                                        <div className='confirm-cart-items'>

                                            <h3> Your Cart Items: </h3>

                                            <div className='confirm-cartitems-container'>

                                                {cartItems &&
                                                    cartItems.map((item) => (

                                                        <div key={item.product}>

                                                            <img src={item.image} alt={item.name} />

                                                            <Link to={`/product/${item.product}`}>
                                                                {item.name}
                                                            </Link>

                                                            <span>
                                                                {item.quantity} X ${item.price} = ${item.price * item.quantity}
                                                            </span>

                                                        </div>

                                                    ))
                                                }

                                            </div>

                                            <div className='order-summary'>

                                                <h4> Order Summary </h4>

                                                <div>

                                                    <p> Subtotal: </p>
                                                    <span> ${subtotal} </span>

                                                    <p> Shipping Charges: </p>
                                                    <span> ${shippingCharges} </span>

                                                    <p> tax: </p>
                                                    <span> ${tax} </span>

                                                </div>

                                            </div>

                                            <div className='order-summary-total'>

                                                <p> total: </p>
                                                <span> ${totalPrice} </span>

                                            </div>

                                            <button type='submit'
                                                className='btn btn-primary text-uppercase btn-shipping'
                                                onClick={proceedPayment}> Proceed to Payment </button>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default ConfirmOrder;