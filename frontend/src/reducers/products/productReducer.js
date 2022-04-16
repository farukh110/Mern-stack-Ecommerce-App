import { all_product_request, all_product_success, all_product_fail, product_details_request, product_details_success, product_details_fail, clear_errors  } from "../../appConstants/products/productsConstants";

export const productReducer = (state = { products: [] }, action) => {

    switch (action.type) {
        
        case all_product_request:
             return {
                 loading: true,
                 products: []
             };   
        case all_product_success:
            return {
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount
            };
        case all_product_fail:
             return {
                loading: false,
                error: action.payload
            }
        case clear_errors:
             return {
              ...state,
              error: null      
            };
        default:
            return state;
    }
  
};

export const productDetailsReducer = (state = { product: {} }, action) => {

    switch (action.type) {
        
        case product_details_request:
             return {
                 loading: true,
                 ...state,
             };   
        case product_details_success:
            return {
                loading: false,
                product: action.payload
            };
        case product_details_fail:
             return {
                loading: false,
                error: action.payload
            }
        case clear_errors:
             return {
              ...state,
              error: null      
            };
        default:
            return state;
    }
  
};