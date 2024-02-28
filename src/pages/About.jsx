import React from 'react';
import './css/About.css';
import { NavLink } from 'react-router-dom';
import { TruckIcon, CreditCardIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/24/outline';

const About = () => {
    return (
        <>
            <div className="site-blocks-cover inner-page">
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap ">
                        <div className="md:w-1/2 pr-4 pl-4 ml-auto md:order-2 self-start">
                            <div className="site-block-cover-content">
                                <h2 className="sub-title">#New Summer Collection 2019</h2>
                                <h1>Shop With Us</h1>
                                <p>
                                    <NavLink to="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap py-1 px-3 leading-normal no-underline btn-black rounded-none bg-black text-white">
                                        Shop Now
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2 pr-4 pl-4 order-1 self-end">
                            <img src="/assets/model_7.png" alt="model" className="max-w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="custom-border-bottom py-3">
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap ">
                        <div className="md:w-full pr-4 pl-4 mb-0">
                            <NavLink to="/" className='all__rounder__color text-xl'>Home</NavLink>
                            <span className="mx-2 mb-0 text-xl">/</span>
                            <span className="text-black text-xl">About</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section site-section-sm site-blocks-1 border-0 mt-8">
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap ">
                        <div className="md:w-1/2 pr-4 pl-4 lg:w-1/3 lg:flex mb-4 lg:mb-0">
                            <TruckIcon className='mr-5 all__rounder__color w-40 self-start' />
                            <div className="text">
                                <h2 className="uppercase text-lg text-black">Free Shipping</h2>
                                <p className='py-2 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                            </div>
                        </div>
                        <div className="md:w-1/2 pr-4 pl-4 lg:w-1/3 lg:flex mb-4 lg:mb-0">
                            <CreditCardIcon className='mr-5 all__rounder__color w-40 self-start' />
                            <div className="text">
                                <h2 className="uppercase text-lg text-black">Free Returns</h2>
                                <p className='py-2 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                            </div>
                        </div>
                        <div className="md:w-1/2 pr-4 pl-4 lg:w-1/3 lg:flex mb-4 lg:mb-0">
                            <PhoneIcon className='mr-5 all__rounder__color w-40 self-start' />
                            <div className="text">
                                <h2 className="uppercase text-lg text-black">Customer Support</h2>
                                <p className='py-2 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section custom-border-bottom mt-12">
                <div className="container mx-auto sm:px-4">
                    <div className="flex mb-5">
                        <div className="md:w-1/2 pr-4 pl-4">
                            <div className="block-16">
                                <figure>
                                    <img src="/assets/blog_1.jpg" alt="placeholder" className="max-w-full h-auto rounded" />
                                    <NavLink to="https://vimeo.com/channels/staffpicks/93951774" className="play-button popup-vimeo" target='_blank'>
                                        <PlayCircleIcon className='all__rounder__color' />
                                    </NavLink>
                                </figure>
                            </div>
                        </div>
                        <div className="md:w-1/12"></div>
                        <div className="md:w-2/5">
                            <div className="site-section-heading pt-3 mb-3">
                                <h2 className="text-black">How We Started</h2>
                            </div>
                            <p className='text-gray-500 leading-7'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellat, dicta at laboriosam, nemo exercitationem itaque eveniet architecto cumque, deleniti commodi molestias repellendus quos sequi hic fugiat asperiores illum. Atque, in, fuga excepturi corrupti error corporis aliquam unde nostrum quas.
                            </p>
                            <p className='text-gray-500 pt-4 leading-7'>
                                Accusantium dolor ratione maiores est deleniti nihil? Dignissimos est, sunt nulla illum autem in, quibusdam cumque recusandae, laudantium minima repellendus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section custom-border-bottom my-7">
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap  justify-center mb-5">
                        <div className="md:w-3/5 pr-4 pl-4 site-section-heading text-center pt-4">
                            <h2>The Team</h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="md:w-1/2 pr-4 pl-4 lg:w-1/4">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        <img
                                            src="/assets/person_1.jpg"
                                            alt="person placeholder"
                                            className="mb-4 mx-auto" />
                                        <h3 className="block-38-heading h4 text-gray-950 text-2xl font-bold">
                                            Elizabeth Graham
                                        </h3>
                                        <p className="block-38-subheading text-sm">
                                            CEO/Co-Founder
                                        </p>
                                    </div>
                                    <div className="block-38-body">
                                        <p className='text-gray-500'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 pr-4 pl-4 lg:w-1/4">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        <img
                                            src="/assets/person_2.jpg"
                                            alt="person placeholder"
                                            className="mb-4 mx-auto" />
                                        <h3 className="block-38-heading h4 text-gray-950 text-2xl font-bold">
                                            Jennifer Greive
                                        </h3>
                                        <p className="block-38-subheading">
                                            Co-Founder
                                        </p>
                                    </div>
                                    <div className="block-38-body">
                                        <p className='text-gray-500'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 pr-4 pl-4 lg:w-1/4">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        <img
                                            src="/assets/person_3.jpg"
                                            alt="person placeholder"
                                            className="mb-4 mx-auto" />
                                        <h3 className="block-38-heading h4 text-gray-950 text-2xl font-bold">
                                            Patrick Marx
                                        </h3>
                                        <p className="block-38-subheading">
                                            Marketing
                                        </p>
                                    </div>
                                    <div className="block-38-body">
                                        <p className='text-gray-500'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 pr-4 pl-4 lg:w-1/4">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        <img
                                            src="/assets/person_4.jpg"
                                            alt="person placeholder"
                                            className="mb-4 mx-auto" />
                                        <h3 className="block-38-heading h4 text-gray-950 text-2xl font-bold">
                                            Mike Coolbert
                                        </h3>
                                        <p className="block-38-subheading">
                                            Sales Manager
                                        </p>
                                    </div>
                                    <div className="block-38-body">
                                        <p className='text-gray-500'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;