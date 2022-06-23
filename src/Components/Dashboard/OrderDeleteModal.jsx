import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase-Setup/firebase.init";

const OrderDeleteModal = ({ setOrderData, orderData }) => {
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };
    const navigate = useNavigate();
    const handleDeletOrder = async (id) => {
        const url = `https://elctrofy.herokuapp.com/order/${id}`;

        fetch(url, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => {
                if (res.status === 403 || res.status === 401) {
                    handleSignOut();
                    navigate("/login");
                }
                return res.json();
            })
            .then((data) => {
                if (data.deletedCount > 0) {
                    toast.success("Your order is Deleted.");
                    setOrderData(null);
                } else {
                    toast.error("Try Again. Something Went Wrong!");
                    setOrderData(null);
                }
            });
    };
    return (
        <>
            <input type="checkbox" id="order-delete" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h1 className=" text-xs md:text-sm font-semibold text-gray-600 ">
                        Product Name:{" "}
                        <span className="font-bold">
                            {orderData?.productName}
                        </span>
                    </h1>
                    <h1 className="text-sm md:text-xl font-bold">
                        Are you sure? You want to Delete the Order ?
                    </h1>

                    <div className="flex gap-5 justify-end mt-5">
                        <button
                            onClick={() => setOrderData(null)}
                            className="btn btn-accent text-white"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => handleDeletOrder(orderData._id)}
                            className="btn btn-warning bg-red-500 text-white"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderDeleteModal;
