import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LoadingData from "../Loading/LoadingData";

const ManggeOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const { data } = await axios.get(
                    "https://elctrofy.herokuapp.com/all-orders"
                );
                setOrders(data);
            } catch (err) {
                console.error(err);
            }
        };
        loadData();
    }, []);
    const deleteItem = async (id) => {
        const sure = window.confirm("Are you sure? You want to delete!");
        if (sure) {
            const url = `https://perfume-inventory-server.herokuapp.com/inventory-items/${id}`;
            await axios.delete(url).then((response) => {
                const { data } = response;
                if (data) {
                    const remaingProduct = orders.filter(
                        (item) => item._id !== id
                    );
                    setOrders(remaingProduct);
                }
            });
        }
    };
    return (
        <>
            <div className="w-full min-h-screen px-1 bg-gray-100 my-5 md:mb-10 lg:pt-8">
                <div className="lg:px-12 hidden md:block mx-auto sm:px-6 ">
                    <div className="flex flex-col">
                        <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
                                <table className="min-w-full table-auto">
                                    <thead>
                                        <tr className="border-b border-gray-200 font-thin bg-white leading-4 tracking-wider text-base text-gray-500">
                                            <th
                                                className="px-6 py-5 text-left"
                                                colSpan="100%"
                                            >
                                                <p>Manage All Orders</p>
                                            </th>
                                        </tr>
                                        <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                                            <th className="px-6 py-3 text-left font-medium">
                                                <input
                                                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                                    type="checkbox"
                                                />
                                            </th>
                                            <th className="px-6 py-3 text-center font-medium">
                                                Product
                                            </th>
                                            <th className="px-6 py-3  font-medium text-center">
                                                Product Info
                                            </th>

                                            <th className="px-6 py-3 text-center font-medium">
                                                Canel Order
                                            </th>

                                            <th className="px-6 py-3 text-center font-medium">
                                                Payment
                                            </th>
                                            <th className="px-6 py-3 text-center font-medium">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="bg-white">
                                        {orders.map((order) => (
                                            <tr key={order._id}>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <input
                                                        className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                                        type="checkbox"
                                                    />
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div className="text-sm leading-5 text-gray-900">
                                                        <div className="flex flex-col items-center  justify-center">
                                                            <div className="flex-shrink-0 h-10 w-10">
                                                                <img
                                                                    className="h-10 w-10 rounded-full"
                                                                    src={
                                                                        order.productImg
                                                                    }
                                                                    alt="product"
                                                                />
                                                            </div>
                                                            <div>
                                                                {
                                                                    order.buyerName
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div className="flex flex-col items-center justify-center">
                                                        <div>
                                                            <p className="text-left">
                                                                {order.quantity}
                                                            </p>
                                                        </div>
                                                        <div className="ml-4">
                                                            <div>
                                                                <p className="text-sm text-left leading-5 font-medium text-gray-900">
                                                                    Abailable:{" "}
                                                                    {
                                                                        order.subTotal
                                                                    }{" "}
                                                                    Pending
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                                                    <div className="flex justify-center items-center">
                                                        {order.paid ? (
                                                            <button
                                                                disabled
                                                                className="block disabled btn btn-success uppercase text-white border-2 border-green-500 px-3 py-2 rounded  font-poppins font-medium"
                                                            >
                                                                Cancel
                                                            </button>
                                                        ) : (
                                                            <button
                                                                onClick={() =>
                                                                    deleteItem(
                                                                        order._id
                                                                    )
                                                                }
                                                                className="block btn bg-red-500 hover:bg-red-400 text-white border-2 border-red-500 hover:border-red-400 px-3 py-2 rounded uppercase font-poppins font-medium"
                                                            >
                                                                Cancel
                                                            </button>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 text-center py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <span
                                                        className={`px-2 inline-flex  text-xs leading-5 font-semibold rounded-full ${
                                                            order.paid
                                                                ? "bg-green-100"
                                                                : "bg-green-300"
                                                        }  text-gray-800`}
                                                    >
                                                        {order.paid
                                                            ? "Paid"
                                                            : "Unpaid"}
                                                    </span>
                                                </td>

                                                <td className="px-6 py-4 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                                                    <div className="flex justify-center items-center">
                                                        {order.paid ? (
                                                            <button className="block btn  bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium">
                                                                Next Step
                                                            </button>
                                                        ) : (
                                                            <button
                                                                disabled
                                                                className="block disabled btn  bg-teal-500  text-white border-2 border-teal-500  px-3 py-2 rounded uppercase font-poppins font-medium"
                                                            >
                                                                Pending
                                                            </button>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* mobile device  */}
                <div className="md:hidden w-full  lg:px-8">
                    <div className="flex flex-col">
                        <div className="flex justify-end   items-center py-5">
                            <NavLink
                                to="/dashboard/add-inventory-item"
                                className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
                            >
                                Create new Items
                            </NavLink>
                        </div>

                        <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
                                <table className="min-w-full table-auto">
                                    <thead>
                                        <tr className="border-b border-gray-200 font-thin bg-white leading-4 tracking-wider text-base text-gray-500">
                                            <th
                                                className="px-6 py-5 text-left"
                                                colSpan="100%"
                                            >
                                                <p>Manage Inventory</p>
                                            </th>
                                        </tr>
                                        <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                                            <th className="px-6 py-3 text-center font-medium">
                                                Product
                                            </th>

                                            <th className="px-6 py-3 text-center font-medium">
                                                Update
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="bg-white">
                                        {orders.map((item) => (
                                            <tr key={item._id}>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div className="text-sm leading-5 text-gray-900">
                                                        <div className="flex flex-col items-center  justify-center">
                                                            <div className="flex-shrink-0 h-10 w-10">
                                                                <img
                                                                    className="h-10 w-10 rounded-full"
                                                                    src={
                                                                        item.img
                                                                    }
                                                                    alt="product"
                                                                />
                                                            </div>
                                                            <div>
                                                                {item.name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-4 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                                                    <div className="flex justify-center items-center">
                                                        <button
                                                            onClick={() =>
                                                                deleteItem(
                                                                    item._id
                                                                )
                                                            }
                                                            className="block  bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {orders.length === 0 ? (
                    <div className=" w-full my-10 z-50 overflow-hidden  opacity-75 flex flex-col items-center justify-center">
                        <div
                            className="spinner-border animate-spin inline-block text-teal-600 mb-10 w-14 h-14 border-6 rounded-full"
                            role="status"
                        ></div>
                        <div className=" mt-10">
                            <LoadingData />;
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </>
    );
};

export default ManggeOrders;
