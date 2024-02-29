import React from 'react';
import { NavLink } from 'react-router-dom';

const Checkout = () => {
    return (
        <>
            <div className="site-wrap">
                <div className="bg-gray-100 py-3">
                    <div className="container mx-auto sm:px-4">
                        <div className="flex flex-wrap">
                            <div className="md:w-full pr-4 pl-4 mb-0">
                                <NavLink to="/" className='all__rounder__color text-xl'>
                                    Home
                                </NavLink>
                                <span className="mx-2 mb-0 text-xl">/</span>
                                <NavLink to="/cart" className='all__rounder__color text-xl'>
                                    Cart
                                </NavLink>
                                <span className="mx-2 mb-0 text-xl">/</span>
                                <strong className="text-black">Checkout</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mx-auto sm:px-4">
                    <div className="flex flex-wrap py-10">
                        <div className="md:w-full px-4">
                            <div className="border p-6 rounded bg-white shadow-none" role="alert">
                                <p className="text-sm md:text-base text-gray-400">
                                    Returning customer?&nbsp;
                                    <NavLink to="/login" className="all__rounder__color">
                                        Click here
                                    </NavLink>&nbsp;
                                    to login
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-wrap">
                        <div class="md:w-1/2 pr-4 pl-4 mb-5 md:mb-0">
                            <h2 class="h3 mb-3 text-black text-3xl">Billing Details</h2>
                            <div class="p-6 lg:p-12 border">
                                <div class="mb-4">
                                    <label class="text-black">Country<span class="text-red-600">*</span>
                                    </label>
                                    <select class="w-full p-2 mb-1 mt-3 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded input__type">
                                        <option value="1">Select a country</option>
                                        <option value="2">bangladesh</option>
                                        <option value="3">Algeria</option>
                                        <option value="4">Afghanistan</option>
                                        <option value="5">Ghana</option>
                                        <option value="6">Albania</option>
                                        <option value="7">Bahrain</option>
                                        <option value="8">Colombia</option>
                                        <option value="9">Dominican Republic</option>
                                    </select>
                                </div>
                                <div class="mb-4 flex flex-wrap w-full">
                                    <div class="md:w-1/2 pr-4">
                                        <label class="text-black">First Name <span class="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            class="block appearance-none w-full p-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded
                                            input__type mt-3" />
                                    </div>
                                    <div class="md:w-1/2 pl-4">
                                        <label class="text-black">Last Name <span class="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            class="block appearance-none w-full p-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded input__type mt-3" />
                                    </div>
                                </div>

                                <div class="mb-4 flex flex-wrap ">
                                    <div class="md:w-full pr-4">
                                        <label class="text-black">Company Name</label>
                                        <input
                                            type="text"
                                            class="block appearance-none w-full p-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mt-3 input__type" />
                                    </div>
                                </div>

                                <div class="mb-4 flex flex-wrap ">
                                    <div class="md:w-full pr-4">
                                        <label class="text-black">Address <span class="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            class="block appearance-none w-full p-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mt-3 input__type"
                                            placeholder="Street address" />
                                    </div>
                                </div>

                                <div class="mb-4">
                                    <input
                                        type="text"
                                        class="block appearance-none w-full p-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mt-3 input__type" placeholder="Apartment, suite, unit etc. (optional)" />
                                </div>

                                <div class="mb-4 flex flex-wrap">
                                    <div class="md:w-1/2 pr-4">
                                        <label class="text-black">State / Country <span class="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            class="block appearance-none w-full p-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mt-3 input__type" />
                                    </div>
                                    <div class="md:w-1/2 pl-4">
                                        <label class="text-black">Postal / Zip<span class="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            class="block appearance-none w-full p-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mt-3 input__type" />
                                    </div>
                                </div>

                                <div class="mb-4 flex flex-wrap">
                                    <div class="md:w-1/2 pr-4">
                                        <label class="text-black">Email Address <span class="text-red-600">*</span></label>
                                        <input
                                            type="text"
                                            class="block appearance-none w-full p-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mt-3 input__type" />
                                    </div>
                                    <div class="md:w-1/2 pl-4">
                                        <label class="text-black">Phone <span class="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mt-3 input__type" placeholder="Phone Number" />
                                    </div>
                                </div>

                                <div class="mb-4">
                                    <label for="c_create_account" class="text-black" data-toggle="collapse" href="#create_an_account" role="button" aria-expanded="false" aria-controls="create_an_account">
                                        <input type="checkbox" value="1" id="c_create_account" /> Create an account?</label>
                                    <div class="hidden" id="create_an_account">
                                        <div class="py-2">
                                            <p class="mb-3">Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                                            <div class="mb-4">
                                                <label for="c_account_password" class="text-black">Account Password</label>
                                                <input
                                                    type="email"
                                                    class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="mb-4">
                                    <label for="c_ship_different_address" class="text-black" data-toggle="collapse" href="#ship_different_address" role="button" aria-expanded="false" aria-controls="ship_different_address">
                                        <input
                                            type="checkbox"
                                            value="1" /> Ship To A Different Address?
                                    </label>
                                    <div class="hidden" id="ship_different_address">
                                        <div class="py-2">
                                            <div class="mb-4">
                                                <label
                                                    class="text-black">Country <span class="text-red-600">*</span>
                                                </label>
                                                <select
                                                    class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded">
                                                    <option value="1">Select a country</option>
                                                    <option value="2">bangladesh</option>
                                                    <option value="3">Algeria</option>
                                                    <option value="4">Afghanistan</option>
                                                    <option value="5">Ghana</option>
                                                    <option value="6">Albania</option>
                                                    <option value="7">Bahrain</option>
                                                    <option value="8">Colombia</option>
                                                    <option value="9">Dominican Republic</option>
                                                </select>
                                            </div>
                                            <div class="mb-4 flex flex-wrap ">
                                                <div class="md:w-1/2 pr-4">
                                                    <label class="text-black">First Name <span class="text-red-600">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mt-3 input__type" />
                                                </div>
                                                <div class="md:w-1/2 pl-4">
                                                    <label class="text-black">Last Name <span class="text-red-600">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" />
                                                </div>
                                            </div>

                                            <div class="mb-4 flex flex-wrap ">
                                                <div class="md:w-full pr-4 pl-4">
                                                    <label class="text-black">
                                                        Company Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" />
                                                </div>
                                            </div>

                                            <div class="mb-4 flex flex-wrap ">
                                                <div class="md:w-full pr-4 pl-4">
                                                    <label for="c_diff_address" class="text-black">Address <span class="text-red-600">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                                                        placeholder="Street address" />
                                                </div>
                                            </div>

                                            <div class="mb-4">
                                                <input
                                                    type="text"
                                                    class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="Apartment, suite, unit etc. (optional)" />
                                            </div>

                                            <div class="mb-4 flex flex-wrap ">
                                                <div class="md:w-1/2 pr-4 pl-4">
                                                    <label class="text-black">State / Country <span class="text-red-600">*</span>
                                                    </label>
                                                    <input
                                                        type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" />
                                                </div>
                                                <div class="md:w-1/2 pr-4 pl-4">
                                                    <label class="text-black">Posta / Zip <span class="text-red-600">*</span></label>
                                                    <input
                                                        type="text"
                                                        class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" />
                                                </div>
                                            </div>

                                            <div class="mb-4 flex flex-wrap">
                                                <div class="md:w-1/2 pr-4 pl-4">
                                                    <label class="text-black">Email Address <span class="text-red-600">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" />
                                                </div>
                                                <div class="md:w-1/2 pr-4 pl-4">
                                                    <label class="text-black">Phone <span class="text-red-600">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                                                        placeholder="Phone Number" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-4">
                                    <label class="text-black">Order Notes</label>
                                    <textarea
                                        cols="30"
                                        rows="5"
                                        class="block appearance-none w-full p-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mt-3 input__type resize-none"
                                        placeholder="Write your notes here..."></textarea>
                                </div>

                            </div>
                        </div>
                        <div class="md:w-1/2 pr-4 pl-4">
                            <div class="flex flex-wrap  mb-5">
                                <div class="md:w-full pr-4 pl-4">
                                    <h2 class="h3 mb-3 text-black text-3xl">Coupon Code</h2>
                                    <div class="p-6 lg:p-12 border">
                                        <label class="text-black mb-3">Enter your coupon code if you have one</label>
                                        <div class="relative flex items-stretch w-3/4">
                                            <input type="text" class="block appearance-none w-full p-2 mb-1 text-base leading-normal bg-white text-gray-800 border h-12 rounded mt-3 input__type" placeholder="Coupon Code" />
                                            <div class="input-group-append">
                                                <button class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-4 leading-tight text-sm h-12 common__update mt-3" type="button">Apply</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-wrap mb-5 pt-10">
                                <div class="md:w-full pr-4 pl-4">
                                    <h2 class="h3 mb-3 text-black text-3xl">Your Order</h2>
                                    <div class="p-6 lg:p-12 border">
                                        <table class="w-full max-w-full mb-4 bg-transparent site-block-order-table">
                                            <thead className='border-b'>
                                                <th className='pb-3 text-sm text-left'>Product</th>
                                                <th className='pb-3 text-sm text-left'>Total</th>
                                            </thead>
                                            <tbody className='mt-3'>
                                                <tr className='border-b'>
                                                    <td className='py-3'>Top Up T-Shirt <span class="mx-2">x</span> 1</td>
                                                    <td>$250.00</td>
                                                </tr>
                                                <tr className='border-b'>
                                                    <td className='py-3'>Polo Shirt <span class="mx-2">x</span>   1</td>
                                                    <td>$100.00</td>
                                                </tr>
                                                <tr className='border-b'>
                                                    <td class="text-black py-3 font-bold">
                                                        <strong>Cart Subtotal</strong>
                                                    </td>
                                                    <td class="text-black">$350.00</td>
                                                </tr>
                                                <tr className='border-b'>
                                                    <td class="text-black py-3 font-bold">
                                                        <strong>Order Total</strong>
                                                    </td>
                                                    <td class="text-black font-bold"><strong>$350.00</strong></td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div class="border p-6 mb-3">
                                            <h3 class="h6 mb-0">
                                                <NavLink
                                                    class="block"
                                                    to="#"
                                                    role="button"
                                                >
                                                    Direct Bank Transfer
                                                </NavLink>
                                            </h3>

                                            <div class="hidden">
                                                <div class="py-2">
                                                    <p class="mb-0">
                                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="border p-6 mb-3">
                                            <h3 class="h6 mb-0">
                                                <NavLink
                                                    class="block"
                                                    to="#"
                                                    role="button">
                                                    Card Payment
                                                </NavLink>
                                            </h3>

                                            <div class="hidden">
                                                <div class="py-2">
                                                    <p class="mb-0">
                                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="border p-6 mb-5">
                                            <h3 class="h6 mb-0">
                                                <NavLink class="block"
                                                    to="#"
                                                    role="button">
                                                    Paypal
                                                </NavLink>
                                            </h3>

                                            <div class="hidden">
                                                <div class="py-2">
                                                    <p class="mb-0">
                                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="border p-6 mb-5">
                                            <h3 class="h6 mb-0">
                                                <NavLink class="block"
                                                    to="#"
                                                    role="button">
                                                    UPI
                                                </NavLink>
                                            </h3>

                                            <div class="hidden">
                                                <div class="py-2">
                                                    <p class="mb-0">
                                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mb-4">
                                            <button class="align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-3 px-4 leading-tight text-xl block w-full common__update">Place Order</button>
                                        </div>

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

export default Checkout;