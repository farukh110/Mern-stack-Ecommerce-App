import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../actions/product/productAction';

const ProductDetails = ({ match }) => {

    const dispatch = useDispatch();

    const { product, loading, error } = useSelector(

        (state) => state.productDetails

    );

    useEffect(() => {

        dispatch(getProductDetails(match.params.id));

    }, [dispatch, match.params.id]);

    return (
        <>
            Product Details
        </>
    )
}

export default ProductDetails;