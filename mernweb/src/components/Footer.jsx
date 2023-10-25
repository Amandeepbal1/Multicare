import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className='footer text-white '>
                <div className="container">
                    <footer className="py-5">
                        <div className="row">
                            <div className="col-3">
                                <h4>Multicare</h4>
                            </div>

                            <div className='col-2'>
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2 ">
                                        <href to="#" className="nav-linl p-0 text-white">Home</href></li>
                                    <li className="nav-item mb-2 ">
                                        <href to="#" className="nav-linl p-0 text-white">About</href></li>
                                    <li className="nav-item mb-2 ">
                                        <href to="#" className="nav-linl p-0 text-white">Services</href></li>
                                    <li className="nav-item mb-2 ">
                                        <href to="#" className="nav-linl p-0 text-white">Contact Us</href></li>
                                    <li className="nav-item mb-2 ">
                                        <href to="#" className="nav-linl p-0 text-white">Oredr</href></li>
                                </ul>
                            </div>
                            <div className='col-2'>
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2 ">
                                        <href to="#" className="nav-linl p-0 text-white">Home</href></li>
                                    <li className="nav-item mb-2 ">
                                        <href to="#" className="nav-linl p-0 text-white">About</href></li>
                                    <li className="nav-item mb-2 ">
                                        <href to="#" className="nav-linl p-0 text-white">Services</href></li>
                                    <li className="nav-item mb-2 ">
                                        <href to="#" className="nav-linl p-0 text-white">Contact Us</href></li>
                                    <li className="nav-item mb-2 ">
                                        <href to="#" className="nav-linl p-0 text-white">Oredr</href></li>
                                </ul>
                            </div>
                            <div className="col-4 offset-1 ">
                                <form>
                                    <h5>Subscribe to our newsletter</h5>
                                    <p>Monthly news of whats new and exciting from us.</p>
                                    <div className="d-flex w-100 gap-2">
                                        <label htmlFor='newsletter1' className='visually-hidden'>Email address</label>
                                        <input id ="newsletter1" type="text" className='form-control'placeholder='Email Address'/>
                                        <button className='btn btn-primary rounded-pill px-4' type="button">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className='d-flex justify-content-between pt-4  mt-4 border-top'>
                            <p>&#169; 2023 Company, Inc. All rights reserved.</p>
                            <ul className="list-unstyled d-flex">
                                <li className="ms-3">
                                    <href className="link-light" to="#">
                                        <i className='fa fa-facebook fa-2x'>
                                        </i></href>
                                </li>
                                <li className="ms-3">
                                    <href className="link-light" to="#">
                                        <i className='fa fa-instagram fa-2x'>
                                        </i></href>
                                </li>
                                <li className="ms-3">
                                    <href className="link-light" to="#">
                                        <i className='fa fa-twitter fa-2x'>
                                        </i></href>
                                </li>
                            </ul>

                        </div>
                    </footer>
                </div>
            </footer>
        </div>
    );
}

export default Footer;