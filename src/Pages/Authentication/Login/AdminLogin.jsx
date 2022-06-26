import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const AdminLogin = ({ setreload }) => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [userLoginData, setUserLoginData] = useState({
        employeeID: "",
        password: "",
    });

    let errorText;
    let name, value;
    const getUserData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserLoginData({ ...userLoginData, [name]: value });
        e.preventDefault();
    };

    // condition

    const handleLoginFormSubmit = async (e) => {
        e.preventDefault();
        const { employeeID, password } = userLoginData;

        if (employeeID && password) {
            fetch(`http://localhost:5000/admin-login`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(userLoginData),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.employeeID) {
                        localStorage.setItem("employee", JSON.stringify(data));
                        setreload(true);
                        navigate("/");
                        return toast.success("লগিন সফল হয়েছে।", {
                            toastId: "loginsuccess",
                        });
                    }
                    if (data.error) {
                        toast.error(data.error, {
                            toastId: "failddata",
                        });
                    } else {
                        toast.error("Something Went worng! try again latter.", {
                            toastId: "loginWrong",
                        });
                    }
                });
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
                            are an admin we give you an Login ID and Password.
                            Enter your admin ID and Password for Login.
                        </p>
                        <p className="flex flex-col items-center justify-center mt-10 text-center">
                            <span>Are you employee? Login here.</span>
                            <Link to="/employee-login" className="underline">
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
                                    htmlFor="employeeID"
                                    className="text-sm font-semibold text-gray-500"
                                >
                                    Admin ID
                                </label>
                                <input
                                    type="text"
                                    id="employeeID"
                                    name="employeeID"
                                    value={userLoginData.employeeID}
                                    placeholder="Enter Admin ID"
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
                                        Admin Password
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
                    toastId: "loginErrors",
                })}
        </>
    );
};

export default AdminLogin;
