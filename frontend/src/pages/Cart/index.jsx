import React from 'react';
import CartItem from './components/CartItem';
import "./index.css";
import cartImage from '../../assets/images/cart.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { addItemsToCart, removeItemFromCart } from '../../actions/Cart/cartAction';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Cart = () => {

    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);

    // const item = {
    //     image: "https://najafyia.org/uploads/59.png",
    //     product: "productId",
    //     price: 500,
    //     name: "name 1",
    //     quantity: 6
    // }

    const increaseQuantity = (id, quantity, stock) => {

        const newQty = quantity + 1;

        if (stock <= quantity) {
            return;
        }

        dispatch(addItemsToCart(id, newQty));
    }

    const decreaseQuantity = (id, quantity) => {

        const newQty = quantity - 1;

        if (1 >= quantity) {
            return;
        }

        dispatch(addItemsToCart(id, newQty));
    }

    const deleteCartItems = (id) => {

        dispatch(removeItemFromCart(id));
    }

    return (
        <>
            {cartItems.length === 0 ? (
                <div className='text-center mt-md-5 mb-md-5'>
                    <h3 className='text-center'> No Items </h3>
                    <Link to="/products"> View Products </Link>
                </div>) :

                <div className='cart-page'>
                    <div className='banner'>

                        <img className='img-fluid w-100' src={cartImage} alt='' />

                    </div>

                    <div className='container mt-md-5 mt-5 mb-5 mb-md-5'>

                        <div className='row'>

                            <div className='col-md-12'>

                                {/* <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col"> Product </th>
                                    <th scope="col"> Quantity </th>
                                    <th scope="col"> Sub total </th>
                                    <th scope="col"> Action </th>
                                </tr>
                            </thead>

                            <CartItem item={item} />

                        </table> */}

                                {/* <div className='row cart-header mt-md-5'>

                            <div className='col-md-6'>

                                <div className='row cart-input'>

                                    <div className='col-md-8'>

                                        <div className='row'>

                                            <div className='col-md-3'>
                                                <button className='btn btn-primary w-100'> - </button>
                                            </div>

                                            <div className='col-md-6'>
                                                <input type="number" className='form-control' readOnly value={item.quantity} />

                                            </div>

                                            <div className='col-md-3'>
                                                <button className='btn btn-primary w-100'> + </button>
                                            </div>


                                        </div>

                                    </div>

                                    <div className='col-md-4'>
                                        <p className='cart-subtotal'> {`$ ${item.price * item.quantity}`} </p>

                                    </div>

                                </div>

                            </div>

                            <div className='col-md-6'>
                                <div className='cart-gross-profit'>

                                    <div></div>
                                    <div className='cart-gross-profit-box'>

                                        <p> Gross Total </p>
                                        <p> {`$600`} </p>

                                    </div>

                                    <div></div>

                                    <div className='checkout-content'>

                                        <button className='btn btn-success'>
                                            Checkout
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div> */}

                                <div className='cart-header'>

                                    <p> Product </p>
                                    <p> Quantity </p>
                                    <p> Sub total </p>

                                </div>

                                {
                                    cartItems && cartItems.map((item) => (

                                        <div className='cart-container' key={item.product}>
                                            <CartItem item={item} deleteItemsFromCart={deleteCartItems} />
                                            <div className='cart-input'>

                                                <button className='btn btn-primary'
                                                    onClick={() => decreaseQuantity(item.product, item.quantity)}> - </button>
                                                <input type="number" className='form-control' readOnly value={item.quantity} />
                                                <button
                                                    className='btn btn-primary'
                                                    onClick={() => increaseQuantity(item.product, item.quantity, item.stock)}> + </button>

                                            </div>
                                            <p className='cart-subtotal'> {`$ ${item.price * item.quantity}`} </p>
                                        </div>

                                    ))
                                }


                                <div className='cart-gross-profit'>

                                    <div></div>
                                    <div className='cart-gross-profit-box'>

                                        <p> Gross Total </p>
                                        <p> {`$${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)}`} </p>

                                    </div>

                                    <div></div>

                                    <div className='checkout-content'>

                                        <button className='btn btn-success'>
                                            Checkout
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>}
        </>
    )
}

export default Cart;