import axios from "axios";
import { all_product_request, all_product_success, all_product_fail, 
         product_details_request, product_details_success, product_details_fail, 
         clear_errors  } from "./../../appConstants/products/productsConstants";

// get products
export const getProduct = (keyword="", currentPage = 1, price=[0, 25000], category, ratings = 0) => async (dispatch) => {

    try {

        dispatch({ type: all_product_request });

        let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

        if (category) {
            
            link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
        }

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