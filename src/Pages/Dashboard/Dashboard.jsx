import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

import DashboardTopHeader from "../../Components/Dashboard/DashboardTopHeader";

import useAdmin from "../../hooks/useAdmin";

const Dashboard = ({ user, setUser, setreload }) => {
    const [admin] = useAdmin(user);

    const handleSignOut = () => {
        localStorage.removeItem("employee");
        setUser(null);
        setreload(true);
    };

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

                <div className="drawer-side ">
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
                                <Link to="/dashboard/assignd-tasks">
                                    Assigned Tasks
                                </Link>
                            </li>
                        )}
                        {!admin && (
                            <li>
                                <Link to="/dashboard/update-task-status">
                                    Update Task Status
                                </Link>
                            </li>
                        )}
                        {!admin && (
                            <li>
                                <Link to="/dashboard/completed-task-list">
                                    Completed Task List
                                </Link>
                            </li>
                        )}
                        {!admin && (
                            <li>
                                <Link to="/dashboard/incompleted-task-list">
                                    Incompleted Task List
                                </Link>
                            </li>
                        )}

                        {!admin && (
                            <li>
                                <Link to="/dashboard/task-forwarding">
                                    Task Forwarding
                                </Link>
                            </li>
                        )}

                        {admin && (
                            <li>
                                <Link to="/dashboard/addEmployee">
                                    Add Employee
                                </Link>
                            </li>
                        )}
                        {admin && (
                            <li>
                                <Link to="/dashboard/manageEmployee">
                                    Manage Employee
                                </Link>
                            </li>
                        )}
                        {admin && (
                            <li>
                                <Link to="/dashboard/manageAttendences">
                                    Manage Attandances
                                </Link>
                            </li>
                        )}

                        {admin && (
                            <li>
                                <Link to="/dashboard/employeeTask">
                                    Employee Tasks
                                </Link>
                            </li>
                        )}
                        {/* {admin && (
                            <li>
                                <Link to="/dashboard/manageAttendences">
                                    Manipulatate Task
                                </Link>
                            </li>
                        )} */}
                        {admin && (
                            <li>
                                <Link to="/dashboard/taskDistrubition">
                                    Task Distrubution
                                </Link>
                            </li>
                        )}
                        {admin && (
                            <li>
                                <Link to="/dashboard/purchase-management">
                                    Purchase Management
                                </Link>
                            </li>
                        )}

                        {admin && (
                            <li>
                                <Link to="/dashboard/sellingFish">
                                    Selling Fish
                                </Link>
                            </li>
                        )}
                        {/* {admin && (
                            <li>
                                <Link to="/dashboard/manageProducts">
                                    Selling Fish Reports
                                </Link>
                            </li>
                        )} */}
                        {admin && (
                            <li>
                                <Link to="/dashboard/attendanceReports">
                                    Attendance Reports
                                </Link>
                            </li>
                        )}
                        {admin && (
                            <li>
                                <Link to="/dashboard/addReview">
                                    Add a Review
                                </Link>
                            </li>
                        )}
                        <li
                            onClick={handleSignOut}
                            className="mt-10 cursor-pointer text-center text-warning"
                        >
                            Logout
                        </li>
                        <li className="mt-10 mb-5">
                            <Link to="/">GoBack</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
