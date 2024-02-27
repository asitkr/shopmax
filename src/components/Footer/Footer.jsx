import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';

const Footer = () => {
    return (
        <>
            <footer className="site-footer custom-border-top pt-20">
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap">
                        <div className="md:w-1/2 pr-4 pl-4 lg:w-1/4 pl-4 mb-4 lg:mb-0">
                            <h3 className="footer-heading mb-4">Promo</h3>
                            <div className='site__logo'>
                                <NavLink to={'/'}>
                                    ShopMax
                                </NavLink>
                                <h3 class="font__footer my-3">
                                    Finding Your Perfect Shirts This session
                                </h3>
                                <p>Promo coming soon this year {new Date().getFullYear()}</p>
                            </div>
                        </div>
                        <div className="lg:w-2/5 pr-4 ml-auto mb-5 lg:mb-0">
                            <div className="flex flex-wrap ">
                                <div className="md:w-full pr-4 pl-4">
                                    <h3 className="footer-heading mb-4">Quick Links</h3>
                                </div>
                                <div className="md:w-1/2 pr-4 pl-4 lg:w-1/3 pr-4 pl-4">
                                    <ul className="list-unstyled">
                                        <li><NavLink to="#">Sell online</NavLink></li>
                                        <li><NavLink to="#">Features</NavLink></li>
                                        <li><NavLink to="#">Shopping cart</NavLink></li>
                                        <li><NavLink to="#">Store builder</NavLink></li>
                                    </ul>
                                </div>
                                <div className="md:w-1/2 pr-4 pl-4 lg:w-1/3 pr-4 pl-4">
                                    <ul className="list-unstyled">
                                        <li><NavLink to="#">Mobile commerce</NavLink></li>
                                        <li><NavLink to="#">Dropshipping</NavLink></li>
                                        <li><NavLink to="#">Website development</NavLink></li>
                                    </ul>
                                </div>
                                <div className="md:w-1/2 pr-4 pl-4 lg:w-1/3 pr-4 pl-4">
                                    <ul className="list-unstyled">
                                        <li><NavLink to="#">Point of sale</NavLink></li>
                                        <li><NavLink to="#">Hardware</NavLink></li>
                                        <li><NavLink to="#">Software</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 pr-4 pl-4 lg:w-1/4 pr-4 pl-4">
                            <div className="block-5 mb-5">
                                <h3 className="footer-heading mb-4">Contact Info</h3>
                                <ul className="list-unstyled">
                                    <li className="address">203 Fake St. Mountain View, San Francisco, California, USA</li>
                                    <li className="phone"><a to="tel://23923929210">+2 392 3929 210</a></li>
                                    <li className="email">emailaddress@domain.com</li>
                                </ul>
                            </div>

                            <div className="block-7">
                                <form>
                                    <label className="footer-heading">Subscribe</label>
                                    <div className="mb-4 flex relative mt-3">
                                        <input
                                            type="text"
                                            className="block appearance-none w-full h-12 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded py-4 input__type"
                                            placeholder="Email"
                                        />
                                        <input
                                            type="submit"
                                            className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded no-underline py-1 leading-tight text-white absolute h-10 uppercase button__send px-5 text-xl top-1 right-1 common__update"
                                            value="Send"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap pt-5 mt-5 text-center pb-0">
                        <div className="md:w-full pr-4 pl-4">
                            <p className='flex justify-center items-center py-5'>
                                Copyright &copy;
                                <span className='mr-1'>{new Date().getFullYear()};</span> All rights reserved | Managed
                                <HeartIcon className='w-5 h-5 flex-shrink-0' /> by  <NavLink to="https://colorlib.com" target="_blank"
                                    className="text-blue-600 ml-1">Ashit</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer;