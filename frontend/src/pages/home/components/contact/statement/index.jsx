import React from 'react';
import './index.css';
import img from "../../../../../assets/images/collections/orphan.jpg";

const Statement = () => {
    return (
        <div className='statement mt-md-5'>

            <div className='row'>

                <div className='col-md-6'>

                    <img className='img-fluid' src={img} alt="" />

                </div>

                <div className='col-md-6 pt-md-5 pr-md-5'>

                    <div className='container pr-md-5'>

                        <h1> The Statement about the Orphans </h1>

                        <p className='mt-md-3'>
                            The Holy Prophet (saw) said One who maintains the orphans Allah makes Paradise Wajib upon him in the same way as he makes Hell Wajib upon those who usurp the property of the orphans. Al-Kafi book Volume 7 page 51 The increased number of wars and sectarian violence over the last two decades has resulted in an abnormally high number of orphans within Iraq. A report from UNICEF revealed that many thousands more became widows and orphans after losing the breadwinner/wage earner of their families due to the increased violence and in turn leaving them under the poverty line (UNICEF 2007). The economic situation in Iraq has degraded ever since. with the increasing food prices and lack of infrastructure most orphans do not receive the most basic of needs such as adequate food and shelter especially during winter.
                        </p>

                        <h1 className='text-center'> Give Regularly today, <br />
                            Touch the hearts of many. </h1>

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