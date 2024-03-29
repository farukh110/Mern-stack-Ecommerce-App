import React, { useEffect } from 'react';
import Product from '../../components/layouts/product';
import MetaData from '../../components/layouts/helmet';
import './index.css';
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from '../../actions/product/productAction';
import Loader from '../../components/layouts/loader';
import { useAlert } from 'react-alert';
import Statement from './components/contact/statement';
import HomeSlider from './components/slider';
import OtherWays from './components/otherWays';
import ContactForm from './components/contactForm';

const HomePage = () => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector(
        (state) => state.products
    );

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        dispatch(getProduct());

    }, [dispatch, error, alert]);


    return (
        <>

            <HomeSlider />

            {loading ? <Loader /> : (

                <div>

                    <MetaData title="Home page is working" />

                    <div className='container mt-md-5 mb-md-5'>

                        <div className='row'>

                            {
                                products && products.map((product) => (

                                    <div key={product._id} className='col-md-4'>

                                        <Product product={product} />

                                    </div>

                                ))
                            }

                        </div>

                    </div>

                </div>

            )
            }

            <Statement />
            <ContactForm />
            <OtherWays />
        </>
    )
}

export default HomePage;