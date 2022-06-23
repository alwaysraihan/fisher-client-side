import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import LoadingData from "../../../Components/Loading/LoadingData";
import auth from "../../../Firebase-Setup/firebase.init";

const PageNotFound = () => {
    const [user, loading] = useAuthState(auth);
    return (
        <>
            {loading ? (
                <div>
                    <LoadingData />
                </div>
            ) : (
                ""
            )}
            <div>
                <div
                    x-ref="loading"
                    className="fixed z-50 flex items-center justify-center text-2xl font-semibold text-white "
                ></div>
                <main
                    aria-labelledby="pageTitle"
                    className="flex items-center justify-center h-screen bg-gray-100 dark:bg-dark dark:text-light"
                >
                    <div className="p-4 space-y-4">
                        <div className="flex flex-col items-start space-y-3 sm:flex-row sm:space-y-0 sm:items-center sm:space-x-3">
                            <p className="font-semibold text-red-600 opacity-90 text-9xl dark:text-danger">
                                404
                            </p>
                            <div className="space-y-2">
                                <h1
                                    id="pageTitle"
                                    className="flex items-center space-x-2"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-6 h-6 text-danger-light dark:text-danger"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        />
                                    </svg>
                                    <span className="text-xl font-medium text-gray-600 sm:text-2xl dark:text-light">
                                        Oops! Page not found.
                                    </span>
                                </h1>
                                <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                                    The page you are looking for was not found.
                                </p>
                                <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                                    You may return to
                                    <Link
                                        to="/"
                                        className="text-blue-600 hover:underline dark:text-blue-500"
                                    >
                                        {" "}
                                        Home Page
                                    </Link>{" "}
                                    or try using the search form.
                                </p>
                            </div>
                        </div>

                        <form>
                            <div className="flex items-center justify-center">
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="What are you looking for?"
                                    className="w-full px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:ring-primary-light dark:bg-black focus:ring-indigo-700"
                                />
                                <button className="p-2 text-white rounded-r-md bg-primary bg-indigo-700 hover:bg-primary-dark hover:bg-indigo-600 focus:outline-none focus:ring  focus:ring-indigo-700">
                                    <span className="sr-only">Search</span>
                                    <svg
                                        aria-hidden="true"
                                        className="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
};

export default PageNotFound;
