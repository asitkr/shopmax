import React, { useEffect } from 'react';
import * as yup from "yup";
import { useFormik } from 'formik';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from '../redux/slices/LoginSlice';
import toast from 'react-hot-toast';

const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginUserData = useSelector(state => state.login.loginUserData);
    const formik = useFormik({
        initialValues: {
            username: 'mor_2314',
            password: '83r5^_'
        },
        // validationSchema: loginSchema,
        onSubmit: values => {
            // console.log(values);
            if (values) {
                dispatch(fetchLogin({ data: values }));
            }
        },
    });

    useEffect(() => {
        if (loginUserData?.token) {
            // console.log(loginUserData);
            sessionStorage.setItem('token', loginUserData?.token);
            toast.success('Login successful');
            setTimeout(() => {
                navigate('/');
            }, 1000);
        }
    }, [loginUserData])

    return (
        <>
            <div className="p-8 bg-white min-h-screen flex flex-col items-center">
                <form onSubmit={formik.handleSubmit} className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 xl:w-1/3">
                    <div className="mb-8">
                        <UserCircleIcon className='w-20 h-20 mx-auto all__rounder__color' />
                    </div>
                    <div className="mb-8">
                        <label
                            className={`block font-bold text-xl mb-2 ${formik.errors.email ? "text-red-400" : "text-black"}`}
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            placeholder="hey@chrisoncode.io"
                            name="username"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                            className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4 placeholder-transparent focus:bg-transparent ${formik.errors.username
                                ? "text-red-300 border-red-400"
                                : "all__rounder__color border-slate-400"
                                }`}
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <p className='text-red-400'>{formik.errors.username}</p>
                        ) : null}
                    </div>

                    <div className="mb-8">
                        <label
                            className={`block font-bold text-xl mb-2 ${formik.errors.password ? "text-red-400" : "text-black"}`}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4 placeholder-transparent focus:bg-transparent ${formik.errors.password
                                ? "text-red-300 border-red-400"
                                : "all__rounder__color border-slate-400"
                                }`}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <p className='text-red-400'>{formik.errors.password}</p>
                        ) : null}
                    </div>

                    <div className="mb-8">
                        <p className='text-gray-500'>Not a member <NavLink to={''} className={'all__rounder__color'}>Register</NavLink></p>
                    </div>

                    <button
                        type='submit'
                        className="inline-block rounded shadow py-2 px-5 text-xl common__update">
                        Login
                    </button>
                </form>
            </div>

        </>
    )
}

export default Login;