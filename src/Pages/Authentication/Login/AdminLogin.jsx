import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import { toast } from "react-toastify";

import auth from "../../../Firebase-Setup/firebase.init";
import useToken from "../../../hooks/useToken";
import LoadingData from "../../../Components/Loading/LoadingData";

const AdminLogin = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [userLoginData, setUserLoginData] = useState({
        email: "",
        password: "",
    });
    const [signInWithGoogle, user1, loading1, error1] =
        useSignInWithGoogle(auth);

    const [token] = useToken(user || user1);
    let errorText;
    let name, value;
    const getUserData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserLoginData({ ...userLoginData, [name]: value });
        e.preventDefault();
    };

    // condition

    if (token) {
        navigate(from, { replace: true });
    }
    if (loading || loading1) {
        return (
            <div className="my-5">
                <LoadingData></LoadingData>
            </div>
        );
    }
    if (error || error1) {
        errorText = (
            <p className="text-red-600">
                {error?.message} {error1?.message}
            </p>
        );
    }

    const handleLoginFormSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = userLoginData;
        await signInWithEmailAndPassword(email, password);
    };

    //   reste  password
    const resetPassword = async () => {
        const { email } = userLoginData;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("We sent a Reset email");
        } else {
            toast("please enter your email address");
        }
    };
    return (
        <>
            <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
                <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                    <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                        <div className="my-3 text-4xl font-bold tracking-wider text-center">
                            <h1>Fisheries Mangement</h1>
                        </div>
                        <p className="mt-6 font-normal capitalize text-center text-gray-300 md:mt-0">
                            Hello admin, Login for Manage all employee. If you
                            are an admin we give you an email addreess and
                            password. Enter your admin email and password for
                            login.
                        </p>
                        <p className="flex flex-col items-center justify-center mt-10 text-center">
                            <span>Are you employee? Login here.</span>
                            <Link to="/register" className="underline">
                                Employee Login
                            </Link>
                        </p>
                        <p className="mt-6 text-sm text-center text-gray-300">
                            Read our{" "}
                            <a href="/" target="__blank" className="underline">
                                terms
                            </a>{" "}
                            and{" "}
                            <a href="/" target="__blank" className="underline">
                                conditions
                            </a>
                        </p>
                    </div>
                    <div className="p-5 bg-white md:flex-1">
                        <h3 className="my-4 text-2xl text-center font-semibold text-gray-700">
                            Admin Login
                        </h3>
                        <form
                            onSubmit={handleLoginFormSubmit}
                            className="flex flex-col space-y-5"
                        >
                            <div className="flex flex-col space-y-1">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-gray-500"
                                >
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={userLoginData.email}
                                    placeholder="email address"
                                    onChange={getUserData}
                                    required
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 "
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="text-sm font-semibold text-gray-500"
                                    >
                                        Password
                                    </label>
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    value={userLoginData.password}
                                    id="password"
                                    placeholder="password"
                                    onChange={getUserData}
                                    required
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                            </div>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="w-4 h-4 transition duration-300 rounded focus:outline-none "
                                />
                                <label
                                    htmlFor="remember"
                                    className="text-sm font-semibold text-gray-500"
                                >
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none "
                                >
                                    Log in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {errorText &&
                toast.error(errorText, {
                    toastId: "loginError",
                })}
        </>
    );
};

export default AdminLogin;
