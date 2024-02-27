import React from 'react';
import './css/Cart.css';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    return (
        <>
            <div className="site-wrap">
                <div className="bg-gray-100 py-3">
                    <div className="container mx-auto sm:px-4">
                        <div className="flex flex-wrap">
                            <div className="md:w-full pr-4 pl-4 mb-0">
                                <NavLink to="/" className='all__rounder__color text-xl'>Home</NavLink>
                                <span className="mx-2 mb-0 text-xl">/</span>
                                <span className="text-black text-xl">Cart</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section">
                    <div className="container mx-auto sm:px-4">
                        <div className="flex flex-wrap  mb-5">
                            <form className="md:w-full pr-4 pl-4" method="post">
                                <div className="site-blocks-table">
                                    <table className="w-full max-w-full mb-4 bg-transparent border table-auto">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Image</th>
                                                <th className="product-name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-total">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <img src="/assets/cloth_1.jpg" alt="cloth" className="max-w-full h-auto" />
                                                </td>
                                                <td className="product-name">
                                                    <h2 className="h5 text-black">Top Up T-Shirt</h2>
                                                </td>
                                                <td>₹49.00</td>
                                                <td>
                                                    <div className="relative flex items-stretch w-full mb-3 mx-auto" style={{ maxWidth: '120px' }}>
                                                        <div className="input-group-prepend">
                                                            <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline js-btn-minus" type="button">
                                                                &minus;
                                                            </button>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="block appearance-none py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded w-14 text-center"
                                                            value="1"
                                                            placeholder=""
                                                            aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                                        <div className="input-group-append">
                                                            <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline js-btn-plus" type="button">+</button>
                                                        </div>
                                                    </div>

                                                </td>
                                                <td>₹49.00</td>
                                                <td>
                                                    <NavLink
                                                        to="#"
                                                        className="inline-block align-middle text-center select-none font-normal whitespace-no-wrap no-underline height-auto py-1 px-2 leading-tight text-xl border rounded">X</NavLink>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="product-thumbnail">
                                                    <img src="/assets/cloth_2.jpg" alt="cloth" className="max-w-full h-auto" />
                                                </td>
                                                <td className="product-name">
                                                    <h2 className="h5 text-black">Polo Shirt</h2>
                                                </td>
                                                <td>₹49.00</td>
                                                <td>
                                                    <div className="relative flex items-stretch w-full mb-3 mx-auto" style={{ maxWidth: '120px' }}>
                                                        <div className="input-group-prepend">
                                                            <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline js-btn-minus" type="button">&minus;</button>
                                                        </div>
                                                        <input type="text" className="block appearance-none py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded w-14 text-center" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                                        <div className="input-group-append">
                                                            <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline js-btn-plus" type="button">
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>

                                                </td>
                                                <td>₹49.00</td>
                                                <td>
                                                    <NavLink
                                                        to="#"
                                                        className="inline-block align-middle text-center select-none font-normal whitespace-no-wrap no-underline height-auto py-1 px-2 leading-tight text-xl border rounded">
                                                        X
                                                    </NavLink>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>

                        <div className="flex flex-wrap ">
                            <div className="md:w-1/2 pr-4 pl-4">
                                <div className="flex flex-wrap  mb-5">
                                    <div className="md:w-1/2 pr-4 pl-4 mb-3 md:mb-0">
                                        <button className="align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-sm block w-full h-10 uppercase common__update">Update Cart</button>
                                    </div>
                                    <div className="md:w-1/2 pr-4 pl-4">
                                        <button className="align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-sm block w-full uppercase h-10">Continue Shopping</button>
                                    </div>
                                </div>
                                <div className="flex flex-wrap pt-7">
                                    <div className="md:w-full pr-4 pl-4">
                                        <label className="text-black h4 text-2xl">Coupon</label>
                                        <p className='py-3 text-gray-400'>Enter your coupon code if you have one.</p>
                                    </div>
                                    <div className="md:w-2/3 pr-4 pl-4 mb-3 md:mb-0">
                                        <input
                                            type="text"
                                            className="block appearance-none w-full px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded py-2 h-12 input__type"
                                            placeholder="Coupon Code" />
                                    </div>
                                    <div className="md:w-1/3 pr-4 pl-2">
                                        <button
                                            className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline text-white leading-tight text-xl h-12 px-4 common__update">
                                            Apply Coupon
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 pr-4 pl-5">
                                <div className="flex flex-wrap  justify-end">
                                    <div className="md:w-3/5 pr-4 pl-4">
                                        <div className="flex flex-wrap ">
                                            <div className="md:w-full pr-4 pl-4 text-right border-b mb-5">
                                                <h3 className="text-black h4 uppercase text-3xl mb-3">Cart Totals</h3>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap  mb-3">
                                            <div className="md:w-1/2 pr-4 pl-4">
                                                <span className="text-black">Subtotal</span>
                                            </div>
                                            <div className="md:w-1/2 pr-4 pl-4 text-right">
                                                <span className="text-gray-700 font-bold">₹230.00</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap  mb-5">
                                            <div className="md:w-1/2 pr-4 pl-4">
                                                <span className="text-black">Total</span>
                                            </div>
                                            <div className="md:w-1/2 pr-4 pl-4 text-right">
                                                <span className="text-gray-700 font-bold">₹230.00</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap ">
                                            <div className="md:w-full pr-4 pl-4">
                                                <button className="align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-2 px-4 leading-tight text-xl block w-full common__update">Proceed To Checkout</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Cart;