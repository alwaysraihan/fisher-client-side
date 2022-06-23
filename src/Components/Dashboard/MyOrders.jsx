import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

import axiosSecret from "../../axiosSecret/axiosSecret";
import auth from "../../Firebase-Setup/firebase.init";
import { signOut } from "firebase/auth";

import OrderDeleteModal from "./OrderDeleteModal";
import LoadingBig from "../Loading/LoadignBig";

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orderData, setOrderData] = useState(null);
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };
    const navigate = useNavigate();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const { data } = await axiosSecret.get(
                    `https://elctrofy.herokuapp.com/order?email=${user.email}`
                );

                setOrders(data);
            } catch (err) {
                console.log(err.message);
                console.log(err);
                if (
                    err.response.status === 403 ||
                    err.response.status === 401
                ) {
                    handleSignOut();
                    navigate("/login");
                }
            }
        };
        loadData();
    }, [navigate, user, orderData]);
    if (orders.length === 0) {
        return (
            <div className=" px-5 mt-10">
                <LoadingBig />;
            </div>
        );
    }
    return (
        <>
            <div className="my-5 overflow-x-auto md:px-5">
                <table className="table  w-full">
                    <thead>
                        <tr className="w-full">
                            <th className="table-cell"></th>
                            <th>Tools Name</th>
                            <th className="text-center hidden md:table-cell">
                                Quantity
                            </th>
                            <th className="text-center  hidden md:table-cell">
                                Sub-Total
                            </th>
                            <th className="text-center ">Status</th>
                            <th className="text-center">Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id}>
                                <td className="table-cell">{index + 1}</td>
                                <td>
                                    <p className=" text-xs md:text-base font-bold">
                                        {order.productName}
                                    </p>
                                    <div className="md:hidden">
                                        <p className="text-xs">
                                            Quantity: {order.quantity}
                                        </p>
                                        <p className="text-xs ">
                                            SubTotal: {order.subTotal}
                                        </p>
                                    </div>
                                </td>
                                <td className="text-center hidden md:table-cell ">
                                    {order.quantity}
                                </td>
                                <td className="text-center hidden md:table-cell">
                                    {order.subTotal}
                                </td>
                                <td className="text-center">
                                    {order.paid ? (
                                        <span className="btn btn-xs btn-warning">
                                            Pandeing
                                        </span>
                                    ) : (
                                        <label
                                            onClick={() => setOrderData(order)}
                                            htmlFor="order-delete"
                                            className="btn btn-xs btn-warning"
                                        >
                                            cancel Order
                                        </label>
                                    )}
                                </td>

                                <td className="text-center">
                                    {order.subTotal && order.paid ? (
                                        <div>
                                            <p>
                                                <span className="text-success">
                                                    Paid
                                                </span>
                                            </p>

                                            <p>
                                                <span className="text-success hidden lg:block">
                                                    Transaction ID
                                                    {order.transactionId}
                                                </span>
                                            </p>
                                        </div>
                                    ) : (
                                        <Link
                                            to={`/dashboard/payment/${order._id}`}
                                        >
                                            <button className="btn btn-xs btn-success">
                                                Pay Now
                                            </button>
                                        </Link>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {orderData && (
                <OrderDeleteModal
                    setOrderData={setOrderData}
                    orderData={orderData}
                />
            )}
        </>
    );
};

export default MyOrders;
