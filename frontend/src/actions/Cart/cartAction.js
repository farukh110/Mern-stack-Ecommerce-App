import axios from 'axios';
import { add_to_cart, remove_cart_item, save_shipping_info } from '../../appConstants/Cart/cartConstants';

// add to cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  
    try {

        const { data } = await axios.get(`/api/v1/product/${id}`); 
        
        dispatch({
            type: add_to_cart,
            payload: {
                product: data.product._id,
                name: data.product.name,
                price: data.product.price,
                image: data.product.images[0].url,
                stock: data.product.stock,
                quantity,
            },
        });

        localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));

    } catch (error) {
        
        console.log(error);
    }
    
}

// remove item from cart
export const removeItemFromCart = (id) => async (dispatch, getState) => {

    try {
        
        dispatch({
            type: remove_cart_item,
            payload: id
        })

        localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));

    } catch (error) {
 
        console.log(error);
    }
}

// save shipping info
export const saveShippingInfo = (data) => async (dispatch) => {

    try {

        dispatch({
            type: save_shipping_info,
            payload: data,
        })
        
    } catch (error) {
        localStorage.setItem("shippingInfo", JSON.stringify(data));
    }
}