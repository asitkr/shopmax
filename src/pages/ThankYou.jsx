import React from 'react';
import { NavLink } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/outline';


const ThankYou = () => {
    return (
        <>
            <div className='w-full h-screen'>
                <div className="bg-gray-100 py-3">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap ">
                            <div className="md:w-full pr-4 pl-4 mb-0">
                                <NavLink to="/" className='all__rounder__color text-xl'>Home</NavLink>
                                <span className="mx-2 mb-0 text-xl">/</span>
                                <span className="text-black text-xl"> Thank You</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="md:w-full pr-4 pl-4 py-20 text-center">
                                <CheckCircleIcon className="w-20 text-green-500 mx-auto" />
                                <h2 className="text-4xl md:text-7xl text-black pt-3 pb-7">
                                    Thank you!
                                </h2>
                                <p className="text-xl md:text-2xl text-gray-400 mb-5">
                                    Your order was successfully completed.
                                </p>
                                <p>
                                    <NavLink
                                        to="/shop"
                                        className="inline-block align-middle text-center select-none border font-medium whitespace-no-wrap rounded no-underline py-4 px-8 leading-tight text-sm md:text-xs uppercase height-auto common__update"
                                    >
                                        Back to shop
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ThankYou;