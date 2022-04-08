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

                                <h4 className='text-light text-uppercase text-left'> Contact </h4>

                                <span> Contact Tel: <a href='tel:+9647810513378'> +964 781 051 3378 </a> </span>

                                <ul className='menu-list mt-md-2 mt-sm-2 mt-3'>
                                    <li><a href="!#">General Enquiries </a></li>
                                    <li><a href="!#">Complaints &amp; Concerns </a></li>
                                    <li><a href="!#">Media Enquiries</a></li>
                                    <li><a href="!#">Privacy Statement</a></li>
                                </ul>

                            </div>

                        </div>

                        <div className='col-md-2 mt-md-0 mt-3'>

                            <div className='content text-md-left text-left'>
                                <h4 className='text-light text-uppercase'> Address </h4>

                                <span> Al Quds Behind South Garage Najaf Al Ashraf Republic of Iraq  </span>

                            </div>
                        </div>

                        <div className='col-md-4 mt-md-0 mt-4'>


                            <div className='content'>

                                <h4 className='text-light text-uppercase'> FOLLOW US </h4>

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

                            <div className='col-md-3'>

                                <div className='content'>

                                    <h4 className='text-light text-uppercase'> Projects </h4>

                                    <ul className='menu-list mt-md-2 mt-sm-2 mt-3'>
                                        <li><a href="!#"> Microfinance </a></li>
                                        <li><a href="!#"> Higher Education Loan </a></li>
                                        <li><a href="!#"> Refugees & IDPs </a></li>
                                        <li><a href="!#"> General Fund </a></li>

                                    </ul>

                                </div>

                            </div>

                            <div className='col-md-3'>

                                <div className='content'>

                                    <h4 className='text-light text-uppercase'> Orphans </h4>

                                    <ul className='menu-list mt-md-2 mt-sm-2 mt-3'>
                                        <li><a href="!#"> Basic Care </a></li>
                                        <li><a href="!#">  Dar Al Zahra School </a></li>
                                    </ul>

                                </div>

                            </div>

                            <div className='col-md-3'>

                                <div className='content'>

                                    <h4 className='text-light text-uppercase'> Islamic Payments </h4>

                                    <ul className='menu-list mt-md-2 mt-sm-2 mt-3'>
                                        <li><a href="!#"> Khums </a></li>
                                        <li><a href="!#">  Ibadaat For Marhumeen </a></li>
                                        <li><a href="!#">  Kaffarah/Fidyah </a></li>
                                        <li><a href="!#">  Qurbani </a></li>
                                        <li><a href="!#">  Niyaz </a></li>
                                    </ul>

                                </div>

                            </div>

                            <div className='col-md-3'>

                                <div className='content'>

                                    <h4 className='text-light text-uppercase'> Sadaqah </h4>

                                    <ul className='menu-list mt-md-2 mt-sm-2 mt-3'>
                                        <li><a href="!#"> Sadaqah a Day </a></li>
                                        <li><a href="!#">  Sadaqah For Holy Personalities </a></li>

                                    </ul>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className='footer-bottom-bar pt-md-4 pt-4 pb-md-2 pb-2'>

                    <div className='container'>

                        <p> ©  Akhyar Foundation | All Rights Reserved </p>

                    </div>

                </div>

            </footer>
        </>
    )
}

export default Footer;