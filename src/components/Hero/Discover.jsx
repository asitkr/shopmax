import React from 'react';
import { Link } from 'react-router-dom';

const Discover = () => {
    return (
        <>
            <div className='w-full h-screen px-0 py-10'>
                <div className='flex items-center'>
                    <div className="title-section mb-5">
                        <h2 className="uppercase">
                            <span className="block text-3xl">Discover</span>
                            <span className="block text-3xl">The Collections</span>
                        </h2>
                    </div>
                </div>

                <div class="flex flex-wrap  items-stretch">
                    <div class="lg:w-2/3 pr-4 pl-4">
                        <div class="product-item sm-height full-height bg-gray">
                            <Link to="#" class="product-category">Women <span>25 items</span></Link>
                            <img src="/assets/model_4.png" alt="model" class="max-w-full h-auto" />
                        </div>
                    </div>
                    <div class="lg:w-1/3 pr-4 pl-4">
                        <div class="product-item sm-height bg-gray mb-4">
                            <Link to="#" class="product-category">Men <span>25 items</span></Link>
                            <img src="/assets/model_5.png" alt="model" class="max-w-full h-auto" />
                        </div>

                        <div class="product-item sm-height bg-gray">
                            <Link to="#" class="product-category">Shoes <span>25 items</span></Link>
                            <img src="/assets/model_6.png" alt="model" class="max-w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discover;