import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const TaskDetailsModal = ({ modalData, setModalData }) => {
    return (
        <>
            <input type="checkbox" id="task-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h1 className="mt-5 text-gray-800 leading-10 text-sm md:text-xl font-bold">
                        Task Deadline: {modalData.dadeline}
                    </h1>
                    <h1 className="mt-2 text-gray-800 leading-10 text-sm md:text-xl font-bold">
                        Assigned Task: {modalData.assinedTask}
                    </h1>

                    <div className="flex gap-5 justify-end mt-5">
                        <button
                            onClick={() => setModalData(null)}
                            className="btn btn-warning bg-red-500 text-white"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TaskDetailsModal;
