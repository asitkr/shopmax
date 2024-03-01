import React from 'react';
import CommonCarousel from './CommonCarousel';

const MostRated = () => {
    return (
        <>
            <div className="site-section">
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap">
                        <div className="title-section text-center mb-5 w-full">
                            <h2 className="uppercase text-3xl">Most Rated</h2>
                        </div>
                    </div>

                    <CommonCarousel />
                </div>
            </div>
        </>
    )
}

export default MostRated;