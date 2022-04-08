import React from 'react';
import Product from '../../components/layouts/product';
import './index.css';

const HomePage = () => {

    const product = {
        name: "Sadaqah",
        images: [{ url: "https://najafyia.org/images/sadaqa-banner.jpg" }],
        price: "50 USD",
        _id: "sadaqah"
    }

    return (
        <>

            <div className='container mt-md-5 mb-md-5'>

                <div className='row'>

                    <div className='col-md-4'>

                        <Product product={product} />

                    </div>

                </div>

            </div>

        </>
    )
}

export default HomePage;