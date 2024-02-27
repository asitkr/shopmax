import React from 'react';
import { NavLink } from 'react-router-dom';

const Popular = () => {
    return (
        <>
            <div className="site-section mt-40">
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap ">
                        <div className="title-section mb-5 w-full">
                            <h2 className="uppercase text-3xl">Popular Products</h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 item-entry mb-4">
                            <NavLink to="#" className="product-item md-height bg-gray block">
                                <img src="/assets/prod_2.png" alt="model" className="max-w-full h-96" />
                            </NavLink>
                            <h2 className="item-title"><NavLink to="#">Gray Shoe</NavLink></h2>
                            <strong className="item-price">₹20.00</strong>
                        </div>
                        <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 item-entry mb-4">
                            <NavLink to="#" className="product-item md-height bg-gray block">
                                <img src="/assets/prod_3.png" alt="model" className="max-w-full h-auto" />
                            </NavLink>
                            <h2 className="item-title"><NavLink to="#">Blue Shoe High Heels</NavLink></h2>
                            <strong className="item-price"><span className='text-gray-400 line-through'>₹46.00</span> ₹28.00</strong>
                        </div>

                        <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 item-entry mb-4">
                            <NavLink to="#" className="product-item md-height bg-gray block">
                                <img src="/assets/model_5.png" alt="model" className="max-w-full h-auto" />
                            </NavLink>
                            <h2 className="item-title"><NavLink to="#">Denim Jacket</NavLink></h2>
                            <strong className="item-price"><span className='text-gray-400 line-through'>₹46.00</span> ₹28.00</strong>

                            <div className="star-rating">
                                <span className="icon-star2 text-yellow-500"></span>
                                <span className="icon-star2 text-yellow-500"></span>
                                <span className="icon-star2 text-yellow-500"></span>
                                <span className="icon-star2 text-yellow-500"></span>
                                <span className="icon-star2 text-yellow-500"></span>
                            </div>

                        </div>
                        <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 item-entry mb-4">
                            <NavLink to="#" className="product-item md-height bg-gray block">
                                <img src="/assets/prod_1.png" alt="model" className="max-w-full h-auto" />
                            </NavLink>
                            <h2 className="item-title"><NavLink to="#">Leather Green Bag</NavLink></h2>
                            <strong className="item-price"><span className='text-gray-400 line-through'>₹46.00</span> ₹28.00</strong>
                            <div className="star-rating">
                                <span className="icon-star2 text-yellow-500"></span>
                                <span className="icon-star2 text-yellow-500"></span>
                                <span className="icon-star2 text-yellow-500"></span>
                                <span className="icon-star2 text-yellow-500"></span>
                                <span className="icon-star2 text-yellow-500"></span>
                            </div>
                        </div>

                        <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 item-entry mb-4">
                            <NavLink to="#" className="product-item md-height bg-gray block">
                                <img src="/assets/model_1.png" alt="model" className="max-w-full h-auto" />
                            </NavLink>
                            <h2 className="item-title"><NavLink to="#">Smooth Cloth</NavLink></h2>
                            <strong className="item-price"><span className='text-gray-400 line-through'>₹46.00</span> ₹28.00</strong>
                        </div>
                        <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 item-entry mb-4">
                            <NavLink to="#" className="product-item md-height bg-gray block">
                                <img src="/assets/model_7.png" alt="model" className="max-w-full h-auto" />
                            </NavLink>
                            <h2 className="item-title"><NavLink to="#">Yellow Jacket</NavLink></h2>
                            <strong className="item-price">₹58.00</strong>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Popular;