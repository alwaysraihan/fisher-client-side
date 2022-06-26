import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { format } from "date-fns";

const AssignNewTaskModal = ({ url, setModalData, modalData, setreload }) => {
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    const formattedDate = date && format(date, "PP");
    const handleSignOut = () => {
        localStorage.removeItem("accessToken");
    };
    const {
        register,
        handleSubmit,

        formState: { errors },
        reset,
    } = useForm();

    const onFormSubmit = async (data) => {
        const Task = {
            assinedTask: data.assinedTask,
            dadeline: data.dadeline,
            employeeName: modalData.employeeName,
            employeeID: modalData.employeeID,
            date: formattedDate,
        };

        axios
            .post(url, Task, {
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
            .then((res) => {
                const data = res.data;
                if (data.success) {
                    toast.success("Task Successfully Assigned.", {
                        toastId: "taskAssign",
                    });
                    return setModalData(null);
                }

                if (!data.success) {
                    toast.error("Failed to add you assinedTask!", {
                        toastId: "taskassignfaild",
                    });
                    return setModalData(null);
                } else {
                    return setModalData(null);
                }
            });

        reset();
    };

    return (
        <>
            <input
                type="checkbox"
                id="task-assing-modal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box relative">
                    {/* form  */}
                    <div className="my-5">
                        <h1 className=" text-xl font-bold text-gray-800">
                            Employee Details:
                        </h1>
                        <h1 className=" mt-1 tracking-wide text-charcoal-darker  font-semibold">
                            Employee Name: {modalData.employeeName}
                        </h1>
                        <h1 className=" tracking-wide text-charcoal-darker  mt-1 font-semibold">
                            Employee ID: {modalData.employeeID}
                        </h1>
                    </div>

                    <form
                        onSubmit={handleSubmit(onFormSubmit)}
                        autoComplete="off"
                    >
                        <div className="mb-8">
                            <div className="md:flex-1 mt-2 mb:mt-0 ">
                                <label className="block uppercase mb-3 tracking-wide text-charcoal-darker text-xs font-bold">
                                    Assigned Task Details
                                </label>
                                <textarea
                                    className="w-full shadow-inner p-4 border-0"
                                    placeholder="Enter Assined Task Details..."
                                    rows="6"
                                    name="assinedTask"
                                    {...register("assinedTask", {
                                        minLength: 10,
                                        required: true,
                                    })}
                                ></textarea>
                                {errors.assinedTask && (
                                    <span className="text-red-500">
                                        Minimum 10 Chracter Task Details Is
                                        required
                                    </span>
                                )}
                            </div>
                            <div className="flex justify-end mt-2 mb:mt-0 md:px-3">
                                <div className="md:flex w-full mb-4">
                                    <div className="md:flex-1 md:pr-3 mb-4 md:mb-0">
                                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                                            Set A DeadLine
                                        </label>

                                        <select
                                            name="dadeline"
                                            {...register("dadeline", {
                                                required: true,
                                            })}
                                            className="select  w-full max-w-xs"
                                        >
                                            <option>1 Day</option>
                                            <option>2 Days</option>
                                            <option>3 Days</option>
                                            <option>4 Days</option>
                                            <option>5 Days</option>
                                            <option>6 Days</option>
                                            <option>1 Week</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-5 justify-end mt-5">
                            <button
                                type="button"
                                onClick={() => setModalData(null)}
                                className="btn btn-warning bg-red-500 text-white"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn btn-accent text-white"
                            >
                                Assign
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AssignNewTaskModal;
