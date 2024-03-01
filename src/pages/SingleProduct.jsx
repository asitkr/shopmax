import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import CommonCarousel from '../components/Hero/CommonCarousel';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../redux/slices/GetSingleProductSlice';

const SingleProduct = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const singleProductData = useSelector(state => state.singleProduct.singleProductData);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        dispatch(fetchSingleProduct(id));
    }, [id]);

    const handleCart = () => {
        setCart((prevCart) => [...prevCart, singleProductData]);
    };

    useEffect(() => {
        if (cart) {
            sessionStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);


    return (
        <>
            <div className="bg-gray-100 py-3">
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap ">
                        <div className="w-full md:w-1/2 lg:w-1/3 pr-4 pl-4 mb-0">
                            <NavLink to="/" className="all__rounder__color text-xl">
                                Home
                            </NavLink>
                            <span className="mx-2 mb-0 text-xl">/</span>
                            <NavLink to="/product" className="all__rounder__color text-xl">
                                Shop
                            </NavLink>
                            <span className="mx-2 mb-0 text-xl">/</span>
                            <span className="text-black text-xl">Gray Shoe</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-1/2 pr-4 pl-4 mb-4 md:mb-0">
                            <div className="item-entry">
                                <div className="product-item md-height bg-gray block">
                                    <img src={singleProductData?.image} alt="product" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 pr-4 pl-4">
                            <h2 className="text-black text-3xl">{singleProductData?.title}</h2>
                            <p className="mt-4 text-gray-400 capitalize">
                                {singleProductData?.category}
                            </p>
                            <p className="mt-4 text-gray-500 font-medium">
                                {singleProductData?.description}
                            </p>
                            <div className="flex items-center pt-5">
                                <span className='text-sm text-gray-400'>Rating: </span>
                                {
                                    [1, 2, 3, 4, 5].map((star, index) => (
                                        <svg
                                            key={index}
                                            className={`w-4 font-medium ml-2 text-xl ${star <= singleProductData?.rating?.rate ? 'text-yellow-300' : 'text-gray-300 dark:text-gray-500'
                                                } ms-1`}
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path
                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                            />
                                        </svg>
                                    ))
                                }
                            </div>
                            <p className='mt-5'>
                                <strong className="h4 all__rounder__color text-xl">₹{singleProductData?.price}</strong>
                            </p>
                            <div className="mb-1 mt-4 flex flex-wrap">
                                {/* Radio buttons for sizes */}
                            </div>
                            <div className="mb-5 mt-4">
                                <div className="relative flex items-stretch w-full mb-3" style={{ maxWidth: '120px' }}>
                                    <div className="input-group-prepend">
                                        <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline js-btn-minus" type="button">&minus;</button>
                                    </div>
                                    <input type="text" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded text-center" value="1" placeholder="" />
                                    <div className="input-group-append">
                                        <button
                                            className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline js-btn-plus"
                                            type="button">+</button>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-5">
                                <button
                                    className="buy-now inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded no-underline leading-tight height-auto px-4 py-3 common__update text-xl"
                                    onClick={handleCart}
                                >
                                    Add To Cart
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap">
                        <div className="title-section text-center mb-5 w-full">
                            <h2 className="uppercase text-3xl">Featured Products</h2>
                        </div>
                    </div>
                    {/* Assuming CommonCarousel is already responsive */}
                    <CommonCarousel />
                </div>
            </div>
        </>
    )
}

export default SingleProduct;