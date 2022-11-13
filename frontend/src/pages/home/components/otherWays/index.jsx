import React from 'react';
import './index.css';

const OtherWays = () => {

    let dataItems = [
        {
            iconClass: 'fa fa-money',
            title: 'Quality at Doorstep',
            paragraph: 'Delivery All over the Pakistan'
        },
        {
            iconClass: 'fa fa-pagelines',
            title: 'Affordable Rates',
            paragraph: 'Quality at affordable rates'
        },
        {
            iconClass: 'fa fa-credit-card',
            title: 'Easy Payments',
            paragraph: 'COD and Advance'
        },
        {
            iconClass: 'fa fa-user',
            title: 'Customer Support',
            paragraph: 'Dedicated Support'
        }
    ]

    return (
        <>

            <div className='container other-ways mt-md-5 mb-md-5'>

                {/* <h1 className='text-center'> Other Ways to Donate </h1> */}

                <div className='spacer'>

                    <div className='row justify-content-center mt-md-5'>

                        {
                            dataItems.map((item, index) => (

                                <div key={index} className='col-md-3'>

                                    <div className='donate-box text-center pt-md-5 pl-md-5 pr-md-5 pb-md-4'>

                                        <div className='icon-wrapper pt-md-4'>
                                            <i className={item.iconClass}></i>
                                        </div>

                                        <h4 className='text-uppercase mt-md-3'>  </h4>
                                        <strong className='text-uppercase mt-md-3'> {item.title}  </strong>

                                        <p className='mt-md-1'>

                                            {item.paragraph}

                                        </p>

                                    </div>

                                </div>
                            ))
                        }

                    </div>

                </div>

            </div>

        </>
    )
}

export default OtherWays;