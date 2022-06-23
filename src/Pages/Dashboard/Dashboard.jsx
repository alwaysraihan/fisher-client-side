import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";

import DashboardTopHeader from "../../Components/Dashboard/DashboardTopHeader";
import auth from "../../Firebase-Setup/firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <>
            <DashboardTopHeader />
            <div className="drawer drawer-mobile ">
                <input
                    id="dashboard-sidebar"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content ">
                    <Outlet />
                </div>

                <div className="drawer-side">
                    <label
                        htmlFor="dashboard-sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu shadow-md bg-[rgb(0,7,61)] p-4 overflow-y-auto w-48 font-semibold  text-white">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <Link to="/dashboard">My Profile</Link>
                        </li>
                        {!admin && (
                            <li>
                                <Link to="/dashboard/myOrders">My Orders</Link>
                            </li>
                        )}
                        {!admin && (
                            <li>
                                <Link to="/dashboard/addReview">
                                    Add a Review
                                </Link>
                            </li>
                        )}
                        {admin && (
                            <li>
                                <Link to="/dashboard/manageOrders">
                                    Manage Orders
                                </Link>
                            </li>
                        )}
                        {admin && (
                            <li>
                                <Link to="/dashboard/addProduct">
                                    Add A Product
                                </Link>
                            </li>
                        )}
                        {admin && (
                            <li>
                                <Link to="/dashboard/makeAdmin">All Users</Link>
                            </li>
                        )}
                        {admin && (
                            <li>
                                <Link to="/dashboard/manageProducts">
                                    Manage Products
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
