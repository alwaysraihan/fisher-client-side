import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DeleteModal = ({ url, setModalData, modalData, setreload }) => {
    const handleSignOut = () => {
        localStorage.removeItem("accessToken");
    };
    const navigate = useNavigate();
    const handleDeletOrder = async (id) => {
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
                    toast.success("successfully Deleted.", {
                        toastId: "deletesuccess",
                    });
                    setModalData(null);
                    return setreload(true);
                } else {
                    toast.error("Try Again. Something Went Wrong!", {
                        toastId: "deleteError",
                    });
                    setModalData(null);
                }
            });
    };
    return (
        <>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h1 className="mt-5 text-sm md:text-xl font-bold">
                        Are you sure? You want to Delete?
                    </h1>

                    <div className="flex gap-5 justify-end mt-5">
                        <button
                            onClick={() => setModalData(null)}
                            className="btn btn-accent text-white"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => handleDeletOrder(modalData._id)}
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

export default DeleteModal;
