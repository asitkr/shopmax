import React from 'react';
import './css/Contact.css';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <div
                className="site-blocks-cover inner-page"
                style={{
                    backgroundImage: "url('/assets/hero_2.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap ">

                    </div>
                </div>
            </div>

            <div className="custom-border-bottom py-3">
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap ">
                        <div className="md:w-full pr-4 pl-4 mb-0">
                            <NavLink to="/" className='all__rounder__color text-xl'>Home</NavLink>
                            <span className="mx-2 mb-0 text-xl">/</span>
                            <span className="text-black text-xl">Contact</span></div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap ">
                        <div className="md:w-full pr-4 pl-4">
                            <h2 className="h3 mb-3 text-black">Get In Touch</h2>
                        </div>
                        <div className="md:w-3/5 pr-4 pl-4">

                            <form>
                                <div className="p-6 lg:p-12 border">
                                    <div className="mb-4 flex flex-wrap ">
                                        <div className="md:w-1/2 pr-4 pl-4">
                                            <label className="text-black">First Name <span className="text-red-600">*</span></label>
                                            <input
                                                type="text"
                                                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mt-3 input__type" />
                                        </div>
                                        <div className="md:w-1/2 pr-4 pl-4">
                                            <label className="text-black">Last Name <span className="text-red-600">*</span></label>
                                            <input
                                                type="text"
                                                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mt-3 input__type" />
                                        </div>
                                    </div>
                                    <div className="mb-4 flex flex-wrap ">
                                        <div className="md:w-full pr-4 pl-4">
                                            <label className="text-black">Email <span className="text-red-600">*</span></label>
                                            <input
                                                type="email"
                                                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mt-3 input__type"
                                                name="c_email"
                                                placeholder="" />
                                        </div>
                                    </div>
                                    <div className="mb-4 flex flex-wrap ">
                                        <div className="md:w-full pr-4 pl-4">
                                            <label className="text-black">Subject </label>
                                            <input
                                                type="text"
                                                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mt-3 input__type" name="c_subject" />
                                        </div>
                                    </div>

                                    <div className="mb-4 flex flex-wrap ">
                                        <div className="md:w-full pr-4 pl-4">
                                            <label className="text-black">Message </label>
                                            <textarea name="c_message" cols="30" rows="5" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded resize-none mt-3 input__type"></textarea>
                                        </div>
                                    </div>
                                    <div className="mb-4 flex flex-wrap ">
                                        <div className="lg:w-full pr-4 pl-4">
                                            <input
                                                type="submit"
                                                className="align-middle text-center select-none border font-normal whitespace-no-wrap rounded no-underline text-xl block w-full uppercase h-10 text-sm common__update" value="Send Message" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="md:w-2/5 pr-4 pl-4 ml-auto">
                            <div className="p-6 border mb-3">
                                <span className="block h6 uppercase font-medium all__rounder__color">New York</span>
                                <p className="mb-0 py-2 text-gray-500">203 Fake St. Mountain View, San Francisco, California, USA</p>
                            </div>
                            <div className="p-6 border mb-3">
                                <span className="block all__rounder__color font-medium h6 uppercase">London</span>
                                <p className="mb-0 py-2 text-gray-500">203 Fake St. Mountain View, San Francisco, California, USA</p>
                            </div>
                            <div className="p-6 border mb-3">
                                <span className="block all__rounder__color font-medium h6 uppercase">Canada</span>
                                <p className="mb-0 py-2 text-gray-500">203 Fake St. Mountain View, San Francisco, California, USA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;