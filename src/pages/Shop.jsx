import React, { useState } from 'react';
import './css/Shop.css';
import { NavLink } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Discover from '../components/Hero/Discover';

const Shop = () => {

    const [isDropdownLatest, setDropdownLatest] = useState(false);
    const [isDropdownReference, setDropdownReference] = useState(false);
    const [minValue1, setMinValue1] = useState(0);
    const [maxValue1, setMaxValue1] = useState(1000);
    const [minValue2, setMinValue2] = useState(500);
    const [maxValue2, setMaxValue2] = useState(1000);
    const [isChecked, setIsChecked] = useState('');

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const toggleDropdownLatest = () => {
        setDropdownLatest(!isDropdownLatest);
    };

    const toggleDropdownReference = () => {
        setDropdownReference(!isDropdownLatest);
    };

    const handleChangeRange = (e, isMin, rangeIndex) => {
        const value = parseInt(e.target.value, 10);

        if (rangeIndex === 1) {
            isMin ? setMinValue1(value) : setMaxValue1(value);
        } else if (rangeIndex === 2) {
            isMin ? setMinValue2(value) : setMaxValue2(value);
        }
    };

    const isRange = minValue1 === 1000 && minValue2 === 1000;


    return (
        <>
            <div className="site-blocks-cover inner-page">
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap ">
                        <div className="md:w-1/2 pr-4 pl-4 ml-auto md:order-2 self-start">
                            <div className="site-block-cover-content">
                                <h2 className="sub-title">#New Lifestyle Collection {new Date().getFullYear()}</h2>
                                <h1>Arrivals Sales</h1>
                                <p>
                                    <NavLink to="/shop" className="align-middle text-center select-none border font-normal whitespace-no-wrap py-1 px-3 leading-normal no-underline btn-black rounded-none bg-black hover:bg-gray-900 text-white">
                                        Shop Now
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2 pr-4 pl-4 order-1 self-end">
                            <img
                                src="/assets/model_4.png"
                                alt="model"
                                className="max-w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="custom-border-bottom py-3">
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap ">
                        <div className="md:w-full pr-4 pl-4 mb-0">
                            <NavLink to="/" className='all__rounder__color text-xl'>
                                Home
                            </NavLink>
                            <span className="mx-2 mb-0 text-xl">/</span>
                            <span className="text-black text-xl">Shop</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container mx-auto sm:px-4">
                    <div className="flex flex-wrap  mb-5">
                        <div className="md:w-3/4 pr-4 pl-4 order-1">
                            <div className="flex flex-wrap  align">
                                <div className="md:w-full pr-4 pl-4 mb-5">
                                    <div className="md:float-left">
                                        <h2 className="text-black h5 text-xl font-medium">Shop All</h2>
                                    </div>
                                    <div className="flex">
                                        <Menu as={'div'} className="relative mr-1 md:ml-auto">
                                            <Menu.Button
                                                type="button"
                                                onClick={toggleDropdownLatest}
                                                className="inline-flex items-center text-center select-none border font-normal whitespace-no-wrap rounded no-underline px-4 py-2 leading-tight text-xl common__update"
                                            >
                                                Latest
                                                <ChevronDownIcon className="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
                                            </Menu.Button>
                                            {
                                                isDropdownLatest && (
                                                    <div className="absolute left-0 z-50 mt-1 text-base bg-white border rounded shadow-lg"
                                                        style={{ borderColor: '#ee4266' }}>
                                                        <NavLink
                                                            className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap"
                                                            to="#"
                                                        >
                                                            Men
                                                        </NavLink>
                                                        <NavLink
                                                            className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap"
                                                            to="#"
                                                        >
                                                            Women
                                                        </NavLink>
                                                        <NavLink
                                                            className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap"
                                                            to="#"
                                                        >
                                                            Children
                                                        </NavLink>
                                                    </div>
                                                )
                                            }
                                        </Menu>
                                        <Menu as="div" className="relative inline-flex align-middle">
                                            <Menu.Button
                                                type="button"
                                                onClick={toggleDropdownReference}
                                                className="inline-flex items-center text-center select-none border font-normal whitespace-no-wrap rounded no-underline btn-white py-1 leading-tight ml-1 align border-b-0 border-t-1 border-r-1 border-l-1 px-4 text-xl common__update"
                                            >
                                                Reference
                                                <ChevronDownIcon className="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
                                            </Menu.Button>
                                            {
                                                isDropdownReference && (
                                                    <Menu.Items className="absolute left-0 z-50 mt-11 w-44 text-base bg-white border rounded shadow-lg"
                                                        style={{ borderColor: '#ee4266' }}>
                                                        <NavLink className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0" to="#">
                                                            Relevance
                                                        </NavLink>
                                                        <NavLink className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0" to="#">
                                                            Name: A to Z
                                                        </NavLink>
                                                        <NavLink className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0" to="#">
                                                            Name: Z to A
                                                        </NavLink>
                                                        <div className="h-0 my-2 overflow-hidden border-t-1 border-gray-300"></div>
                                                        <NavLink className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0" to="#">
                                                            Price: low to high
                                                        </NavLink>
                                                        <NavLink className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0" to="#">
                                                            Price: high to low
                                                        </NavLink>
                                                    </Menu.Items>
                                                )
                                            }
                                        </Menu>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap  mb-5">
                                <div className="lg:w-1/2 md:w-1/2 pr-4 pl-4 item-entry mb-4">
                                    <NavLink
                                        to="#"
                                        className="product-item md-height bg-gray block">
                                        <img
                                            src="/assets/prod_2.png"
                                            alt="product"
                                            className="max-w-full h-auto" />
                                    </NavLink>
                                    <h2 className="item-title">
                                        <NavLink to="#">Gray Shoe</NavLink>
                                    </h2>
                                    <strong className="item-price">₹20.00</strong>
                                </div>
                                <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 item-entry mb-4">
                                    <NavLink
                                        to="#"
                                        className="product-item md-height bg-gray block">
                                        <img
                                            src="/assets/prod_3.png" alt="product" className="max-w-full h-auto" />
                                    </NavLink>
                                    <h2 className="item-title">
                                        <NavLink
                                            to="#">
                                            Blue Shoe High Heels
                                        </NavLink>
                                    </h2>
                                    <strong className="item-price">
                                        <span className='text-gray-400 line-through'>₹46.00</span> ₹28.00</strong>
                                </div>

                                <div className="lg:w-1/2 md:w-1/2 pr-4 pl-4 item-entry mb-4">
                                    <NavLink
                                        to="#"
                                        className="product-item md-height bg-gray block">
                                        <img
                                            src="/assets/model_5.png"
                                            alt="product"
                                            className="max-w-full h-auto" />
                                    </NavLink>
                                    <h2 className="item-title">
                                        <NavLink to="#">Denim Jacket</NavLink>
                                    </h2>
                                    <strong className="item-price">
                                        <span className='text-gray-400 line-through'>₹46.00</span> ₹28.00</strong>

                                    <div className="star-rating">
                                        <span className="icon-star2 text-yellow-500"></span>
                                        <span className="icon-star2 text-yellow-500"></span>
                                        <span className="icon-star2 text-yellow-500"></span>
                                        <span className="icon-star2 text-yellow-500"></span>
                                        <span className="icon-star2 text-yellow-500"></span>
                                    </div>

                                </div>
                                <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 item-entry mb-4">
                                    <NavLink
                                        to="#"
                                        className="product-item md-height bg-gray block">
                                        <img src="/assets/prod_1.png" alt="product" className="max-w-full h-auto" />
                                    </NavLink>
                                    <h2 className="item-title">
                                        <NavLink to="#">Leather Green Bag</NavLink>
                                    </h2>
                                    <strong className="item-price"><span className='text-gray-400 line-through'>₹46.00</span> ₹28.00</strong>
                                    <div className="star-rating">
                                        <span className="icon-star2 text-yellow-500"></span>
                                        <span className="icon-star2 text-yellow-500"></span>
                                        <span className="icon-star2 text-yellow-500"></span>
                                        <span className="icon-star2 text-yellow-500"></span>
                                        <span className="icon-star2 text-yellow-500"></span>
                                    </div>
                                </div>

                                <div className="lg:w-1/2 md:w-1/2 pr-4 pl-4 item-entry mb-4">
                                    <NavLink to="#" className="product-item md-height bg-gray block">
                                        <img
                                            src="/assets/model_1.png"
                                            alt="product"
                                            className="max-w-full h-auto" />
                                    </NavLink>
                                    <h2 className="item-title">
                                        <NavLink to="#">Smooth Cloth</NavLink>
                                    </h2>
                                    <strong className="item-price"><span className='text-gray-400 line-through'>₹46.00</span> ₹28.00</strong>
                                </div>
                                <div className="lg:w-1/2 md:w-1/2 pr-4 pl-4 item-entry mb-4">
                                    <NavLink
                                        to="#"
                                        className="product-item md-height bg-gray block">
                                        <img src="/assets/model_7.png" alt="product" className="max-w-full h-auto" />
                                    </NavLink>
                                    <h2 className="item-title">
                                        <NavLink to="#">Yellow Jacket</NavLink>
                                    </h2>
                                    <strong className="item-price">₹58.00</strong>
                                </div>
                                <div className="lg:w-1/2 md:w-1/2 pr-4 pl-4 item-entry mb-4">
                                    <NavLink to="#" className="product-item md-height bg-gray block">
                                        <img
                                            src="/assets/prod_2.png"
                                            alt="product"
                                            className="max-w-full h-auto" />
                                    </NavLink>
                                    <h2 className="item-title">
                                        <NavLink to="#">Gray Shoe</NavLink>
                                    </h2>
                                    <strong className="item-price">₹20.00</strong>
                                </div>
                                <div className="lg:w-1/2 md:w-1/2 pr-4 pl-4 item-entry mb-4">
                                    <NavLink to="#" className="product-item md-height bg-gray block">
                                        <img
                                            src="/assets/prod_3.png"
                                            alt="product"
                                            className="max-w-full h-auto" />
                                    </NavLink>
                                    <h2 className="item-title">
                                        <NavLink to="#">Blue Shoe High Heels</NavLink>
                                    </h2>
                                    <strong className="item-price"><span className='text-gray-400 line-through'>₹46.00</span> ₹28.00</strong>
                                </div>

                                <div className="lg:w-1/2 md:w-1/2 pr-4 pl-4 item-entry mb-4">
                                    <NavLink
                                        to="#"
                                        className="product-item md-height bg-gray block">
                                        <img
                                            src="/assets/model_5.png"
                                            alt="product"
                                            className="max-w-full h-auto" />
                                    </NavLink>
                                    <h2 className="item-title">
                                        <NavLink to="#">Denim Jacket</NavLink>
                                    </h2>
                                    <strong className="item-price"><span className='text-gray-400 line-through'>₹46.00</span> ₹28.00</strong>
                                    <div className="star-rating">
                                        <span className="icon-star2 text-yellow-500"></span>
                                        <span className="icon-star2 text-yellow-500"></span>
                                        <span className="icon-star2 text-yellow-500"></span>
                                        <span className="icon-star2 text-yellow-500"></span>
                                        <span className="icon-star2 text-yellow-500"></span>
                                    </div>

                                </div>
                                <div className="lg:w-1/2 md:w-1/2 pr-4 pl-4 item-entry mb-4">
                                    <NavLink
                                        to="#"
                                        className="product-item md-height bg-gray block">
                                        <img
                                            src="/assets/prod_1.png"
                                            alt="product"
                                            className="max-w-full h-auto" />
                                    </NavLink>
                                    <h2 className="item-title">
                                        <NavLink to="#">Leather Green Bag</NavLink>
                                    </h2>
                                    <strong className="item-price"><span className='text-gray-400 line-through'>₹46.00</span> ₹28.00</strong>
                                    <div className="star-rating">
                                        <span className="icon-star2 text-yellow-500"></span>
                                        <span className="icon-star2 text-yellow-500"></span>
                                        <span className="icon-star2 text-yellow-500"></span>
                                        <span className="icon-star2 text-yellow-500"></span>
                                        <span className="icon-star2 text-yellow-500"></span>
                                    </div>
                                </div>

                                <div className="lg:w-1/2 md:w-1/2 pr-4 pl-4 item-entry mb-4">
                                    <NavLink
                                        to="#"
                                        className="product-item md-height bg-gray block">
                                        <img
                                            src="/assets/model_1.png"
                                            alt="product"
                                            className="max-w-full h-auto" />
                                    </NavLink>
                                    <h2 className="item-title">
                                        <NavLink to="#">Smooth Cloth</NavLink>
                                    </h2>
                                    <strong className="item-price"><span className='text-gray-400 line-through'>₹46.00</span> ₹28.00</strong>
                                </div>
                                <div className="lg:w-1/2 md:w-1/2 pr-4 pl-4 item-entry mb-4">
                                    <NavLink
                                        to="#"
                                        className="product-item md-height bg-gray block">
                                        <img
                                            src="/assets/model_7.png"
                                            alt="model"
                                            className="max-w-full h-auto" />
                                    </NavLink>
                                    <h2 className="item-title">
                                        <NavLink to="#">Yellow Jacket</NavLink>
                                    </h2>
                                    <strong className="item-price">₹58.00</strong>
                                </div>
                            </div>
                            <div className="flex flex-wrap ">
                                <div className="md:w-full pr-4 pl-4 text-center">
                                    <div className="site-block-27">
                                        <ul>
                                            <li>
                                                <NavLink to="#" className={'all__rounder__color'}>&lt;</NavLink>
                                            </li>
                                            <li className="active all__rounder__color"><span>1</span></li>
                                            <li><NavLink to="#" className={'all__rounder__color'}>2</NavLink></li>
                                            <li><NavLink to="#" className={'all__rounder__color'}>3</NavLink></li>
                                            <li><NavLink to="#" className={'all__rounder__color'}>4</NavLink></li>
                                            <li><NavLink to="#" className={'all__rounder__color'}>5</NavLink></li>
                                            <li><NavLink to="#" className={'all__rounder__color'}>&gt;</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/4 pr-4 pl-4 order-2 mb-5 md:mb-0">
                            <div className="border p-6 rounded mb-4">
                                <h3 className="mb-3 h6 uppercase text-black block font-medium">Categories</h3>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-1">
                                        <NavLink to="#" className="flex">
                                            <span className='all__rounder__color'>
                                                Men
                                            </span>
                                            <span className="text-black ml-auto">(2,220)</span>
                                        </NavLink></li>
                                    <li className="mb-1">
                                        <NavLink to="#" className="flex">
                                            <span className='all__rounder__color'>
                                                Women
                                            </span>
                                            <span className="text-black ml-auto">(2,550)</span>
                                        </NavLink>
                                    </li>
                                    <li className="mb-1">
                                        <NavLink to="#" className="flex">
                                            <span className='all__rounder__color'>
                                                Kids
                                            </span>
                                            <span className="text-black ml-auto">(2,124)</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>

                            <div className="border p-6 rounded mb-4">
                                <div className="mb-4">
                                    <h3 className="mb-3 h6 uppercase text-black block font-medium">Filter by Price</h3>
                                    <div className="relative w-200">
                                        {/* First Range Slider */}
                                        <input
                                            type="range"
                                            min={minValue1}
                                            max={maxValue1}
                                            onChange={(e) => handleChangeRange(e, true, 1)}
                                            className="thumb thumb--zindex-3 absolute h-0 w-full"
                                        />

                                        {/* Second Range Slider */}
                                        <input
                                            type="range"
                                            min={minValue2}
                                            max={maxValue2}
                                            onChange={(e) => handleChangeRange(e, false, 2)}
                                            className="thumb thumb--zindex-4 absolute h-0 w-full"
                                        />

                                        {/* Slider Container */}
                                        <div className="slider relative">
                                            <div className="slider__track h-5 rounded-full absolute w-full" />
                                            <div
                                                className={`slider__range ${isRange ? 'all__rounder__background__color' : ''} h-5 rounded-full absolute`}
                                            // style={{ width: `${(maxValue1 - minValue1) / 10}%`, left: `${(minValue1 / 10)}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h3 className="h6 pt-6 mb-3 uppercase text-black block">Size</h3>
                                    <label className="flex">
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={handleCheckboxChange}
                                            className='mr-2 mt-1'
                                        />
                                        <span className="text-black">Small (2,319)</span>
                                    </label>
                                    <label
                                        className="flex">
                                        <input type="checkbox" className="mr-2 mt-1" />
                                        <span className="text-black">Medium (1,282)</span>
                                    </label>
                                    <label className="flex">
                                        <input type="checkbox" className="mr-2 mt-1" />
                                        <span className="text-black">Large (1,392)</span>
                                    </label>
                                </div>

                                <div className="mb-4">
                                    <h3 className="mb-3 h6 uppercase text-black block">
                                        Color
                                    </h3>
                                    <NavLink
                                        to="#"
                                        className="flex color-item items-center">
                                        <span className="bg-red-600 h-4 w-4 color inline-block rounded-full mr-2"></span>
                                        <span className="text-black">Red (2,429)</span>
                                    </NavLink>
                                    <NavLink
                                        to="#"
                                        className="flex color-item items-center" >
                                        <span className="bg-green-500 h-4 w-4 color inline-block rounded-full mr-2"></span>
                                        <span className="text-black">Green (2,298)</span>
                                    </NavLink>
                                    <NavLink
                                        to="#"
                                        className="flex color-item items-center" >
                                        <span className="bg-teal-500 h-4 w-4 color inline-block rounded-full mr-2"></span>
                                        <span className="text-black">Blue (1,075)</span>
                                    </NavLink>
                                    <NavLink
                                        to="#"
                                        className="flex color-item items-center" >
                                        <span className="bg-blue-600 h-4 w-4 color inline-block rounded-full mr-2"></span>
                                        <span className="text-black">Purple (1,075)</span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <Discover />
        </>
    )
}

export default Shop;