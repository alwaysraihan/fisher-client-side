import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AddReview from "./Components/Dashboard/AddReview";

import AttendanceReports from "./Components/Dashboard/AttendanceReports/AttendanceReports";
import MangeAteendance from "./Components/Dashboard/MangeAteendance";

import MyProfile from "./Components/Dashboard/MyProfile";

import RequireAuth from "./Components/RequireAuth/RequireAuth";

import About from "./Pages/About/About";
import AdminLogin from "./Pages/Authentication/Login/AdminLogin";
import EmployeeLogin from "./Pages/Authentication/Login/EmployeeLogin";

import AddEmployee from "./Pages/Dashboard/AddEmployee/AddEmployee";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MangeEmployee from "./Pages/Dashboard/MangeEmployee/MangeEmployee";

import FAQ from "./Pages/FAQ/FAQ";
import Home from "./Pages/HomePage/Home/Home";

import Footer from "./Pages/SharedPages/Footer/Footer";
import Header from "./Pages/SharedPages/Header/Header";
import PageNotFound from "./Pages/SharedPages/PageNotFound/PageNotFound";

function App() {
    const [user, setUser] = useState(null);

    const [reload, setreload] = useState(false);
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("employee")));
    }, [reload]);
    const { pathname } = useLocation();
    return (
        <>
            <div className="min-h-[80vh]">
                <div
                    className={`${pathname.includes("/dashboard") && "hidden"}`}
                >
                    <Header user={user} setUser={setUser} />
                </div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/employee-login"
                        element={<EmployeeLogin setreload={setreload} />}
                    />
                    <Route
                        path="/admin-login"
                        element={<AdminLogin setreload={setreload} />}
                    />
                    <Route path="/faqs" element={<FAQ />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/addemployee" element={<AddEmployee />} />
                    <Route
                        path="/dashboard"
                        element={
                            <RequireAuth>
                                <Dashboard
                                    user={user}
                                    setUser={setUser}
                                    setreload={setreload}
                                />
                            </RequireAuth>
                        }
                    >
                        <Route
                            index
                            element={
                                <RequireAuth>
                                    <MyProfile />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="myOrders"
                            element={
                                <RequireAuth>
                                    <MyProfile />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="addReview"
                            element={
                                <RequireAuth>
                                    <AddReview />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="payment/:orderid"
                            element={
                                <RequireAuth>
                                    <MyProfile />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="manageAttendences"
                            element={
                                <RequireAuth>
                                    <MangeAteendance />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="addEmployee"
                            element={
                                <RequireAuth>
                                    <AddEmployee />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="attendanceReports"
                            element={
                                <RequireAuth>
                                    <AttendanceReports />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="manageEmployee"
                            element={
                                <RequireAuth>
                                    <MangeEmployee />
                                </RequireAuth>
                            }
                        />
                        <Route path="*" element={<PageNotFound />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
            <ToastContainer />
            <div
                className={`${
                    pathname.includes("/dashboard") && "hidden"
                } bg-gray-800`}
            >
                <Footer />
            </div>
        </>
    );
}

export default App;
