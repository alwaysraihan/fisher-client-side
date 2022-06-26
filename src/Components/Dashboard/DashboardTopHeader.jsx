import React, { useEffect, useState } from "react";

import { Link as span, NavLink } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const DashboardTopHeader = () => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("employee"))
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [admin] = useAdmin(user);
    return (
        <>
            <div className=" py-2 md:py-4 bg-gray-800 shadow-xl text-white z-10">
                <div className="container px-4  lg:px-4  mx-auto lg:flex lg:items-center">
                    <div className="flex justify-start items-center">
                        <div className="navbar-navbar-start lg:hidden ">
                            <label
                                tabIndex="1"
                                htmlFor="dashboard-sidebar"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                        </div>
                        <span className="font-bold uppercase text-blue-500 text-xl ">
                            {admin ? "Admin Pannel" : "Employee Dashobard"}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardTopHeader;
