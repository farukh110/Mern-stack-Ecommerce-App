import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

const CartItem = ({ item, deleteItemsFromCart }) => {
    return (
        <>
            <div className='cart-item-card'>

                {/* <tbody>
                <tr>
                    <td>

                        <img className='img-fluid cart-item-img' src={item.image} alt={item.name} />

                    </td>

                    <td>
                        <Link to={`/product/${item.product}`}> {item.name} </Link>
                    </td>

                    <td>
                        <span> {`Price: $ ${item.price}`} </span>
                    </td>

                    <td>
                        <p> remove </p>
                    </td>

                </tr>

            </tbody> */}

                <img className='img-fluid cart-item-img' src={item.image} alt={item.name} />
                <div>
                    <Link to={`/product/${item.product}`}> {item.name} </Link>
                    <span> {`Price: $${item.price}`} </span>
                    <p onClick={() => deleteItemsFromCart(item.product)}> remove </p>
                </div>

            </div>

        </>
    )
}

export default CartItem;