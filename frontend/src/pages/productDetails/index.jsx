import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import { clearErrors, getProductDetails } from '../../actions/product/productAction';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import ReviewCard from '../../components/controls/ReviewCard';
import Loader from './../../components/layouts/loader';
import { useAlert } from 'react-alert';

const ProductDetails = () => {

    let { id } = useParams();

    const dispatch = useDispatch();
    const alert = useAlert();

    const { product, loading, error } = useSelector((state) => state.productDetails);

    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: product.ratings,
        isHalf: true
    };

    console.log('match?.params?.id', id);

    useEffect(() => {

        if (alert) {
            alert.error(error);
            dispatch(clearErrors());
        }

        console.log("Before Match", id);
        dispatch(getProductDetails(id));

    }, [dispatch, id]);

    return (
        <>

            {
                loading ? <Loader /> : (

                    <div className='container mt-md-5 mb-md-5'>

                        <h1 className='mb-md-3'>Product details</h1>

                        <div className='row'>

                            <div className='col-md-6'>

                                <div className='product-details'>

                                    <Carousel>

                                        {
                                            product?.images &&
                                            product?.images.map((item, i) => (

                                                <Carousel.Item key={item.url}>
                                                    <img
                                                        className="d-block w-100"
                                                        src={item.url}
                                                        alt={`${i} Slide`}
                                                    />
                                                </Carousel.Item>

                                            ))
                                        }

                                    </Carousel>

                                </div>

                            </div>

                            <div className='col-md-6'>

                                <h1> {product.name} </h1>
                                <h4> Product # {product._id} </h4>

                                <div>

                                    <div className='row'>

                                        <div className='col-md-3 pr-md-0'>
                                            <ReactStars {...options} />
                                        </div>

                                        <div className='col-md-2 pt-md-2 pl-md-0'>

                                            ({product.numOfReviews} Reviews)

                                        </div>
                                    </div>
                                </div>

                                <h3 className='mt-md-1 mb-md-2'> {`$${product.price}`} </h3>

                                <div className='row'>

                                    <div className='col-md-1'>

                                        <div className='d-grid'>

                                            <button className='btn btn-primary'>
                                                -
                                            </button>

                                        </div>
                                    </div>

                                    <div className='col-md-3'>

                                        <input className='form-control' type="number" />

                                    </div>

                                    <div className='col-md-1'>

                                        <div className='d-grid'>
                                            <button className='btn btn-primary'>
                                                +
                                            </button>
                                        </div>

                                    </div>

                                </div>

                                <div className='row mt-md-4'>

                                    <div className='col-md-3'>

                                        <div className='d-grid'>
                                            <button className='btn btn-success'> Add to Cart </button>
                                        </div>

                                    </div>

                                    <div className='col-md-9 pt-md-1'>

                                        <p> Status: {' '}

                                            <b className={product.Stock < 1 ? "text-secondary" : "text-success"}>

                                                {product.Stock < 1 ? "Out of Stock" : "In Stock"}

                                            </b>
                                        </p>

                                    </div>

                                    <div className='col-md-12 mt-md-1'>

                                        <b> Description </b>

                                        <p>
                                            {product.description}
                                        </p>

                                    </div>

                                    <div className='col-md-3 mt-md-1'>

                                        <button className='btn btn-success'> Submit Review </button>

                                    </div>


                                </div>

                            </div>

                        </div>

                        <div className='row mt-md-3'>

                            <div className='col-md-12'>

                                <h1> Reviews </h1>

                                {
                                    product.reviews && product.reviews[0] ? (

                                        <div className='reviews'>

                                            {
                                                product.reviews &&
                                                product.reviews.map((review, index) => <ReviewCard key={index} review={review} />)
                                            }

                                        </div>
                                    ) : (
                                        <p className='no-of-reviews'> No Reviews Yet </p>
                                    )
                                }

                            </div>

                        </div>

                    </div>
                )
            }
        </>
    )
}

export default ProductDetails;