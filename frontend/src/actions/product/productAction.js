import axios from "axios";
import { all_product_request, all_product_success, all_product_fail, 
         product_details_request, product_details_success, product_details_fail, 
         clear_errors  } from "./../../appConstants/products/productsConstants";

// get products
export const getProduct = (keyword="", currentPage = 1) => async (dispatch) => {

    try {

        dispatch({ type: all_product_request });

        let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}`;

        const { data } = await axios.get(link);

        dispatch({

            type: all_product_success,
            payload: data
        });
        
    } catch (error) {
        
        dispatch({
            type: all_product_fail,
            payload: error.response.data.message
        });
    }
}

// get product details
export const getProductDetails = (id) => async (dispatch) => {

    try {

        dispatch({ type: product_details_request });

        const { data } = await axios.get(`/api/v1/product/${id}`);

        console.log(data,"DATATAT");

        dispatch({

            type: product_details_success,
            payload: data.product,
        });
        
    } catch (error) {
        
        dispatch({
            type: product_details_fail,
            payload: error.response.data.message,
        });
    }
};

// clearing errors
export const clearErrors = () => async (dispatch) => {

    dispatch({ type: clear_errors });
};