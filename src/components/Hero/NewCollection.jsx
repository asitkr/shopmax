import React from 'react';
import { NavLink } from 'react-router-dom';

const NewCollection = () => {
    return (
        <>
            <div className="site-blocks-cover inner-page py-5" data-aos="fade">
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap ">
                        <div className="md:w-1/2 pr-4 pl-4 ml-auto md:order-2 self-start">
                            <div className="site-block-cover-content">
                                <h2 className="sub-title">#New LifeStyle Collection 2019</h2>
                                <h1>New Shoes</h1>
                                <p>
                                    <NavLink
                                        to="/product"
                                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap py-1 px-3 leading-normal no-underline btn-black rounded-none bg-black text-white">SHOP NOW</NavLink>
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2 pr-4 pl-4 order-1 self-end">
                            <img
                                src="/assets/model_6.png"
                                alt="model"
                                className="max-w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewCollection;