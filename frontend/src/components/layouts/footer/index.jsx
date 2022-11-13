import React from 'react';
import './index.css';
import logo from '../../../assets/images/logo/logo.png';

const Footer = () => {

    return (
        <>
            <footer className='footer pt-md-5 pt-sm-5 pt-4'>

                <div className='container'>

                    <div className='row'>

                        <div className='col-md-3'>

                            <img className='img-fluid logo' src={logo} alt="" />

                        </div>

                        <div className='col-md-3 mt-md-0 mt-4'>

                            <div className='content'>

                                <h4 className='text-uppercase text-left'> Contact </h4>

                                <ul className='menu-list mt-md-2 mt-sm-2 mt-3'>
                                    <li><a href="!#">General Enquiries </a></li>
                                    <li><a href="!#">Complaints &amp; Concerns </a></li>
                                    <li><a href="!#">Privacy Statement</a></li>
                                </ul>

                            </div>

                        </div>

                        <div className='col-md-2 mt-md-0 mt-3'>

                            <div className='content text-md-left text-left'>
                                <h4 className='text-uppercase'> Address </h4>

                                <span> B-06, street 1, block 13 Gulistan e Johar karachi </span>

                            </div>
                        </div>

                        <div className='col-md-4 mt-md-0 mt-4'>


                            <div className='content'>

                                <h4 className='text-uppercase'> FOLLOW US </h4>

                                <ul className='social-media mt-md-2 mt-sm-2 mt-3'>

                                    <li> <a href='!#' className='fa fa-facebook'> </a> </li>
                                    <li> <a href='!#' className='fa fa-twitter'> </a> </li>
                                    <li> <a href='!#' className='fa fa-youtube'> </a> </li>
                                    <li> <a href='!#' className='fa fa-instagram'> </a> </li>

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

                <div className='footer-menu-content mt-md-1 pt-md-5 pt-sm-5 pt-4 pb-4 pb-md-4'>

                    <div className='container'>

                        <div className='row'>

                            <div className='col-md-5'>

                                <div className='content'>

                                    <h4 className='text-success text-uppercase'> Our Company </h4>

                                    <p>
                                        Gilgit Baltistan Dry Fruit Supplier is a one stop shopping destination for anyone who wishes to purchase from the vale of Gilgit Baltistan. We understand our customers’ requirements and bring authentic, genuine and exquisite products to their doorsteps.
                                    </p>

                                </div>

                            </div>

                            <div className='col-md-3'>

                                <div className='content'>

                                    <h4 className='text-success text-uppercase'> Popular Categories </h4>

                                    <ul className='menu-list mt-md-2 mt-sm-2 mt-3'>
                                        <li><a href="!#"> Category 1 </a></li>
                                        <li><a href="!#"> Category 2 </a></li>
                                        <li><a href="!#"> Category 3 </a></li>
                                        <li><a href="!#"> Category 4 </a></li>
                                    </ul>

                                </div>

                            </div>

                            <div className='col-md-2'>

                                <div className='content'>

                                    <h4 className='text-success text-uppercase'> Products </h4>

                                    <ul className='menu-list mt-md-2 mt-sm-2 mt-3'>
                                        <li><a href="!#"> Category 1 </a></li>
                                        <li><a href="!#"> Category 2 </a></li>
                                        <li><a href="!#"> Category 3 </a></li>
                                        <li><a href="!#"> Category 4 </a></li>
                                    </ul>

                                </div>

                            </div>

                            <div className='col-md-2'>

                                <div className='content'>

                                    <h4 className='text-success text-uppercase'> Quick Links </h4>

                                    <ul className='menu-list mt-md-2 mt-sm-2 mt-3'>
                                        <li><a href="!#"> Category 1 </a></li>
                                        <li><a href="!#"> Category 2 </a></li>


                                    </ul>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className='footer-bottom-bar pt-md-4 pt-4 pb-md-2 pb-2'>

                    <div className='container'>

                        <p> ©  Ecommerce website | All Rights Reserved </p>

                    </div>

                </div>

            </footer>
        </>
    )
}

export default Footer;