import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Loader from './../../components/layouts/loader/index';
import { clearErrors, getProduct } from '../../actions/product/productAction';
import Product from '../../components/layouts/product';
import Pagination from "react-js-pagination";
import Slider from '@material-ui/core/Slider';
import './index.css';
import { useAlert } from 'react-alert';
import MetaData from '../../components/layouts/helmet';

let categories = ["pc", "Heater", "sadaqh", "Ramzan"];

const ProductPage = ({ match }) => {

    const dispatch = useDispatch();

    const alert = useAlert();

    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 25000]);

    const [category, setCategory] = useState("");
    const [ratings, setRatings] = useState(0);

    const { products, loading, error, productsCount, resultPerPage, filteredProductsCount } = useSelector(

        (state) => state.products
    );

    const keyword = match.params.keyword;

    const setCurrentPageNo = (e) => {

        setCurrentPage(e);
    }

    const onPriceHandler = (e, newPprice) => {

        setPrice(newPprice);
    }

    let count = filteredProductsCount;

    useEffect(() => {

        if (error) {

            alert.error(error);
            dispatch(clearErrors());
        }

        dispatch(getProduct(keyword, currentPage, price, category, ratings));

    }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

    return (
        <>
            {
                loading ? <Loader /> : (<div className='container product-page mt-md-5 mb-md-5'>

                    <MetaData title="Products" />

                    <h1> Products page </h1>

                    <div className='row'>

                        {/* { keyword && */}

                        <div className='col-md-3'>

                            <div className='filter-area mt-md-5'>

                                <h4> Price </h4>

                                <Slider
                                    value={price}
                                    onChange={onPriceHandler}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    min={0}
                                    max={25000}
                                />

                                <h4> Categories </h4>

                                <ul className='list-group categories-content mt-md-4'>

                                    {
                                        categories.map((item) => (

                                            <li
                                                key={item}
                                                className="list-group-item"
                                                onClick={() => setCategory(item)}>

                                                {item}

                                            </li>
                                        ))
                                    }

                                </ul>

                                <h4 className="mt-md-4"> Rating </h4>

                                <Slider
                                    value={ratings}
                                    onChange={(e, newRating) => {
                                        setRatings(newRating);
                                    }}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="continuous-slider"
                                    min={0}
                                    max={5}
                                />

                            </div>

                        </div>
                        {/* } */}

                        <div className='col-md-9'>
                            <div className='products mt-md-5'>

                                <div className='row'>

                                    {products &&
                                        products.map((product) => (

                                            <div key={product._id} className='col-md-4'>
                                                <Product product={product} />
                                            </div>
                                        ))
                                    }

                                </div>

                            </div>

                        </div>

                    </div>

                    {
                        resultPerPage < count && (

                            <div className='pagination-content mt-md-5'>

                                <Pagination
                                    activePage={currentPage}
                                    itemsCountPerPage={resultPerPage}
                                    totalItemsCount={productsCount}
                                    onChange={setCurrentPageNo}
                                    nextPageText="Next"
                                    prevPageText="Prev"
                                    firstPageText="1st"
                                    lastPageText="Last"
                                    itemClass="page-item"
                                    linkClass="page-link"
                                    activeClass="pageItemActive"
                                    activeLinkClass="pageLinkActive"
                                />

                            </div>
                        )
                    }

                </div>)
            }
        </>
    );
}

export default ProductPage;