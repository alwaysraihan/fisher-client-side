import React, { useState } from "react";

import { toast } from "react-toastify";

import useToken from "../../../hooks/useToken";
import LoadingData from "../../../Components/Loading/LoadingData";

const AddEmployee = () => {
    // const [signInWithEmailAndPassword, user, loading, error] =
    //     useSignInWithEmailAndPassword(auth);
    const [user, setUser] = useState(null);
    const [token] = useToken(user);

    const [userLoginData, setUserLoginData] = useState({
        email: "",
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

    const handleLoginFormSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = userLoginData;

        if (email && password) {
            fetch(`http://localhost:5000/employee`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(userLoginData),
            })
                .then((res) => res.json())
                .then((data) => {
                    toast.success("You Add a new user");
                    console.log("data inside useToken", data);
                    const accessToken = data.token;
                    localStorage.setItem("accessToken", accessToken);
                });
        }
    };

    return (
        <>
            <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
                <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                    <div className="p-5 bg-white md:flex-1">
                        <h3 className="my-4 text-2xl text-center font-semibold text-gray-700">
                            Add new Employee
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

                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none "
                                >
                                    Add Employee
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

export default AddEmployee;
