import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

import auth from "../../../Firebase-Setup/firebase.init";
import useToken from "../../../hooks/useToken";
import LoadingData from "../../../Components/Loading/LoadingData";

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });
    const [userLoginData, setUserLoginData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user1, loading1, error1] =
        useSignInWithGoogle(auth);

    let errorText;
    let name, value;
    const [token] = useToken(user || user1);
    const getUserData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserLoginData({ ...userLoginData, [name]: value });
        e.preventDefault();
    };

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
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
    if (error || updateError || error1) {
        errorText = (
            <p className="text-red-600">
                Error: {error?.message}
                {updateError?.message}
                {loading1?.message}
            </p>
        );
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const { name, email, password } = userLoginData;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    };
    return (
        <>
            <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
                <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                    <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                        <div className="my-3 text-4xl font-bold tracking-wider text-center">
                            <a href="/">ElectroFy</a>
                        </div>
                        <p className="mt-6 font-normal text-center capitalize text-gray-300 md:mt-0">
                            Find Your Best Mobile Repairing Tools. You can join
                            with us as a employee. Here you can buy our products
                            with secuire payment system.
                        </p>
                        <p className="flex flex-col items-center justify-center mt-10 text-center">
                            <span>Already have an account?</span>
                            <Link to="/login" className="underline">
                                Login Now
                            </Link>
                        </p>
                        <p className="mt-6 text-sm text-center text-gray-300">
                            Read our{" "}
                            <a href="/" className="underline">
                                terms
                            </a>{" "}
                            and{" "}
                            <a href="/" className="underline">
                                conditions
                            </a>
                        </p>
                    </div>
                    <div className="p-5 bg-white md:flex-1">
                        <h3 className="my-4 text-2xl font-semibold text-gray-700">
                            Account Login
                        </h3>
                        <form
                            onSubmit={handleRegister}
                            className="flex flex-col space-y-5"
                        >
                            <div className="flex flex-col space-y-1">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-gray-500"
                                >
                                    Your name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={userLoginData.name}
                                    placeholder="Your name"
                                    onChange={getUserData}
                                    required
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent  "
                                />
                            </div>
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
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent  "
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
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none "
                                />
                            </div>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none "
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
                                    Signup
                                </button>
                            </div>
                            <div className="flex flex-col space-y-5">
                                <span className="flex items-center justify-center space-x-2">
                                    <span className="h-px bg-gray-400 w-14"></span>
                                    <span className="font-normal text-gray-500">
                                        or login with
                                    </span>
                                    <span className="h-px bg-gray-400 w-14"></span>
                                </span>
                                <div className="flex flex-col items-center space-y-4">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            signInWithGoogle();
                                        }}
                                        className="flex w-52 items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                                    >
                                        <span>
                                            <svg
                                                className="w-4"
                                                viewBox="0 0 533.5 544.3"
                                            >
                                                <path
                                                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                    fill="#4285f4"
                                                />
                                                <path
                                                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                    fill="#34a853"
                                                />
                                                <path
                                                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                    fill="#fbbc04"
                                                />
                                                <path
                                                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                    fill="#ea4335"
                                                />
                                            </svg>
                                        </span>
                                        <span className="text-sm font-medium text-blue-500 group-hover:text-white">
                                            Google
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {errorText &&
                toast.error(errorText, {
                    toastId: "registerError",
                })}
        </>
    );
};

export default Register;
