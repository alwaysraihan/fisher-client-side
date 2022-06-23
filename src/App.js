import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddProduct from "./Components/Dashboard/AddProduct";
import AddReview from "./Components/Dashboard/AddReview";
import MakeAdmin from "./Components/Dashboard/MakeAdmin";
import MangeProduct from "./Components/Dashboard/MangeProduct";
import ManggeOrders from "./Components/Dashboard/ManggeOrders";
import MyOrders from "./Components/Dashboard/MyOrders";
import MyProfile from "./Components/Dashboard/MyProfile";
import MainLoading from "./Components/Loading/MainLoading";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import auth from "./Firebase-Setup/firebase.init";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import Blogs from "./Pages/Blogs/Blogs";
import Dashboard from "./Pages/Dashboard/Dashboard";

import Payment from "./Pages/Dashboard/Payment";
import Home from "./Pages/HomePage/Home/Home";
import Purchase from "./Pages/MyCart/Purchase";
import Protfolio from "./Pages/Protfolio/Protfolio";
import Footer from "./Pages/SharedPages/Footer/Footer";
import Header from "./Pages/SharedPages/Header/Header";
import PageNotFound from "./Pages/SharedPages/PageNotFound/PageNotFound";

function App() {
    const [user, loading] = useAuthState(auth);
    const { pathname } = useLocation();
    return (
        <>
            <div className="min-h-[80vh]">
                <div
                    className={`${pathname.includes("/dashboard") && "hidden"}`}
                >
                    <Header />
                </div>
                {loading ? (
                    <div>
                        <MainLoading />
                    </div>
                ) : (
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/portfolio" element={<Protfolio />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/purchase/:id" element={<Purchase />} />
                        <Route
                            path="/dashboard"
                            element={
                                <RequireAuth>
                                    <Dashboard />
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
                                        <MyOrders />
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
                                        <Payment />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path="manageOrders"
                                element={
                                    <RequireAuth>
                                        <ManggeOrders />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path="addProduct"
                                element={
                                    <RequireAuth>
                                        <AddProduct />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path="makeAdmin"
                                element={
                                    <RequireAuth>
                                        <MakeAdmin />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path="manageProducts"
                                element={
                                    <RequireAuth>
                                        <MangeProduct />
                                    </RequireAuth>
                                }
                            />
                            <Route path="*" element={<PageNotFound />} />
                        </Route>
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                )}
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
