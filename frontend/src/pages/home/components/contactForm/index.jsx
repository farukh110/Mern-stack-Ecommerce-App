import React from 'react';
import './index.css';

const ContactForm = () => {
    return (
        <div className='contact-form'>

            <div className='row'>

                <div className='col-md-6 pt-md-5 pr-md-0'>

                    <div className='container pr-md-5'>

                        <h1> KEEP IN TOUCH </h1>

                        <p className='mt-md-3'>

                            Join our mailing list to receive the latest news and updates from our team.
                        </p>


                        <form className='main-form'>

                            <div className='row'>

                                <div className='col-md-6 mt-md-0 mt-3'>

                                    <input type="text" autoComplete="off" placeholder='First Name' className='form-control' />

                                </div>

                                <div className='col-md-6 mt-md-0 mt-3'>

                                    <input type="text" autoComplete="off" placeholder='Last Name' className='form-control' />

                                </div>

                                <div className='col-md-6 mt-md-3 mt-3'>

                                    <input type="email" autoComplete="off" placeholder='Email' className='form-control' />

                                </div>

                                <div className='col-md-6 mt-md-3 mt-3'>

                                    <select autoComplete="off" className='form-control'>
                                        <option> ---Please Select--- </option>
                                        <option> Technical Assistance </option>
                                        <option>
                                            Payment Related Queries  </option>
                                        <option>
                                            Others  </option>
                                    </select>

                                </div>

                                <div className='col-md-12 mt-md-3 mt-3'>

                                    <textarea
                                        placeholder='Enter Your Message'
                                        className='form-control'></textarea>

                                </div>

                            </div>

                        </form>


                        <div className='row justify-content-center mt-md-4'>

                            <div className='col-md-4'>

                                <button className='btn btn-primary text-uppercase btn-action btn-block w-100'>
                                    Send Message
                                </button>

                            </div>

                        </div>

                    </div>
                </div>

                <div className='col-md-6 p-0'>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16362.154662730363!2d67.1412076144707!3d24.930786071766725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338fa00456acf%3A0x7a277bdfeb6b99aa!2sGulistan-e-Johar%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1665854711504!5m2!1sen!2s"
                        height="620"
                        title="Karachi"
                        loading="lazy"
                    >

                    </iframe>

                </div>

            </div>

        </div>
    )
}

export default ContactForm;