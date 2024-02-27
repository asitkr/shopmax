import React from 'react';
import { Link } from 'react-router-dom';

const Discover = () => {
    return (
        <>
            <div className="site-section">
                <div className="container mx-auto sm:px-4">
                    <div className="title-section mb-5">
                        <h2 className="uppercase">
                            <span className="block text-3xl">Discover</span>
                            <span className="block text-3xl">The Collections</span>
                        </h2>
                    </div>
                    <div className="flex flex-wrap  items-stretch">
                        <div className="lg:w-2/3 pr-4 pl-4">
                            <div className="product-item sm-height full-height bg-gray">
                                <Link to="#" className="product-category">Women <span>25 items</span></Link>
                                <img src="/assets/model_4.png" alt="model" className="max-w-full h-auto" />
                            </div>
                        </div>
                        <div className="lg:w-1/3 pr-4 pl-4">
                            <div className="product-item sm-height bg-gray mb-4">
                                <Link to="#" className="product-category">Men <span>25 items</span></Link>
                                <img src="/assets/model_5.png" alt="model" className="max-w-full h-auto" />
                            </div>

                            <div className="product-item sm-height bg-gray">
                                <Link to="#" className="product-category">Shoes <span>25 items</span></Link>
                                <img src="/assets/model_6.png" alt="model" className="max-w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discover;