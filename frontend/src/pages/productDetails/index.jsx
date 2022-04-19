import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../actions/product/productAction';

const ProductDetails = ({ match }) => {

    const dispatch = useDispatch();


    const { product, loading, error } = useSelector(
        (state) => state.productDetails
    );

    useEffect(() => {

        dispatch(getProductDetails(match.params.id));

        console.log("product : ", product);

    }, [dispatch, match.params.id]);

    return (
        <div className='container'>

            <div className='row'>

                <div className='col-md-6'>

                    <div className='product-details'>

                        <Carousel>

                            {
                                product.images &&
                                product.images.map((item, i) => (

                                    <Carousel.Item key={item.url}>
                                        <img
                                            className="d-block w-100"
                                            src={item.url}
                                            alt={`${i} Slide`}
                                        />
                                        <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                ))
                            }

                        </Carousel>

                    </div>

                </div>

                <div className='col-md-6'>
                </div>

            </div>

        </div>
    )
}

export default ProductDetails;