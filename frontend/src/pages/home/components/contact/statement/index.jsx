import React from 'react';
import './index.css';
import img from "../../../../../assets/images/collections/badam.jpg";

const Statement = () => {
    return (
        <div className='statement mt-md-5'>

            <div className='row'>

                <div className='col-md-6 p-0'>

                    <img className='img-fluid' src={img} alt="" />

                </div>

                <div className='col-md-6 pt-md-5 pb-md-5 pr-md-5'>

                    <div className='container pr-md-5'>

                        <h1 className='text-left'> The Statement about the Orphans </h1>

                        <p className='mt-md-3'>

                            We have amazing variety and quality of different Dried Fruits available. You can explore throughout the website and get them delivered at your Doorstep.

                            Try Ordering Best Quality Dry Fruits Online from Dry Fruits Online and get them delivered at your Doorstep throughout Pakistan to experience our special love and care added in each Order.

                        </p>

                        <h1 className='text-left'> Winter is coming, <br />
                            order now from Dry Fruits Online. </h1>

                        <div className='row justify-content-center mt-md-4'>

                            <div className='col-md-4'>

                                <button className='btn btn-primary btn-action btn-block w-100'>
                                    GIVE REGULARLY
                                </button>

                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Statement;