import React, { useEffect } from 'react';
import Product from '../../components/layouts/product';
import MetaData from '../../components/layouts/helmet';
import './index.css';
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from '../../actions/product/productAction';
import Loader from '../../components/layouts/loader';
import { useAlert } from 'react-alert';

const HomePage = () => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products, productsCount } = useSelector(
        (state) => state.products
    );

    const product = {
        name: "Sadaqah",
        images: [{ url: "https://najafyia.org/images/sadaqa-banner.jpg" }],
        price: "50 USD",
        _id: "sadaqah"
    }

    useEffect(() => {

        if (error) {
            return alert.error(error);
        }

        dispatch(getProduct());

    }, [dispatch, error, alert]);


    return (
        <>

            {loading ? <Loader /> : (

                <div>

                    <MetaData title="Home page is working" />

                    <div className='container mt-md-5 mb-md-5'>

                        <div className='row'>

                            {
                                products && products.map((product, index) => (

                                    <div key={index} className='col-md-4'>

                                        <Product product={product} />

                                    </div>

                                ))
                            }

                        </div>

                    </div>

                </div>

            )
            }
        </>
    )
}

export default HomePage;