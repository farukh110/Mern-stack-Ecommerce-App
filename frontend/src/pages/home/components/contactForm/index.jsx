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

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12773.421871754306!2d44.319714841321684!3d32.00855565640403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155ed7d19dc9d04f%3A0xf59db4b4017dd8e7!2z2LPYqtin2KbYsSDYp9mE2YPZgdmK2LTZig!5e0!3m2!1sen!2s!4v1657299361967!5m2!1sen!2s"
                        height="664"
                        title="Najafyia"
                        loading="lazy"
                    >

                    </iframe>

                </div>

            </div>

        </div>
    )
}

export default ContactForm;