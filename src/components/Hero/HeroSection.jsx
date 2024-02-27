import React from 'react';
import Discover from './Discover';
import { NavLink } from 'react-router-dom';
import './HeroSection.css';
import Popular from './Popular';
import MostRated from './MostRated';
import NewCollection from './NewCollection';

const HeroSection = () => {
    return (
        <>
            <div className="site-blocks-cover">
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap ">
                        <div className="md:w-1/2 pr-4 pl-4 ml-auto md:order-2 self-start">
                            <div className="site-block-cover-content">
                                <h2 className="sub-title">#New Lifestyle Collection 2019</h2>
                                <h1>Arrivals Sales</h1>
                                <p>
                                    <NavLink to="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-black rounded-none bg-black hover:bg-gray-900 text-white">SHOP NOW</NavLink>
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2 pr-4 pl-4 order-1 self-end">
                            <img src="/assets/hero.png" alt="hero" className="max-w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>

            <Discover />
            <Popular />
            <MostRated />
            <NewCollection />
        </>
    )
}

export default HeroSection;