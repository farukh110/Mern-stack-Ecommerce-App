import { add_to_cart, remove_cart_item } from "../../appConstants/Cart/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  
    switch (action.type) {

        case add_to_cart:
            
            const item = action.payload;

            const isItemExist = state.cartItems.find(
                
                (i) => i.product === item.product
            );

            if (isItemExist) {

                return {
                    ...state,
                    cartItems: state.cartItems.map((i) => 
                    i.product === isItemExist.product ? item : i
                    ),
                };
                
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }

        case remove_cart_item:
            return {
                ...state,
                cartItems: state.cartItems.filter((i) => i.product !== action.payload)
            }    
            
        default:
            return state;
    }
}