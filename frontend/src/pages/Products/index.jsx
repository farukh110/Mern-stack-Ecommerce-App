import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Loader from './../../components/layouts/loader/index';
import { getProduct } from '../../actions/product/productAction';
import Product from '../../components/layouts/product';
import Pagination from "react-js-pagination";
import './index.css';

const ProductPage = ({ match }) => {

    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);

    const { products, loading, error, productsCount, resultPerPage } = useSelector(

        (state) => state.products
    );

    const keyword = match.params.keyword;

    const setCurrentPageNo = (e) => {

        setCurrentPage(e);
    }

    useEffect(() => {

        dispatch(getProduct(keyword, currentPage));

    }, [dispatch, keyword, currentPage]);


    return (
        <>
            {
                loading ? <Loader /> : (<div className='container product-page mt-md-5 mb-md-5'>

                    <h1> Products page </h1>

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

                    {
                        resultPerPage < productsCount && (

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