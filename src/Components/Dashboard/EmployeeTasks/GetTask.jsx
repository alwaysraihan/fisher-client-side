import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import LoadingData from "../../Loading/LoadingData";
import TaskDetailsModal from "../../TaskDetailsModal";

const GetTask = ({ date }) => {
    const [modalData, setModalData] = useState(null);
    const formattedDate = date && format(date, "PP");
    const url = `http://localhost:5000/all-tasks/${formattedDate}`;
    const { isLoading, error, data } = useQuery(
        ["available", formattedDate],
        () => fetch(url).then((res) => res.json())
    );
    const errorText = data?.error;

    return (
        <div className="mt-10">
            {isLoading && <LoadingData />}
            {errorText && (
                <p className="text-center text-xl font-semibold text-gray-800">
                    {errorText}
                </p>
            )}
            {data?.length > 0 && (
                <div className="w-full min-h-screen px-1  mt-5 lg:pt-8">
                    <div className="lg:px-12 hidden md:block mx-auto sm:px-6 ">
                        <div className="flex flex-col">
                            <div className="flex justify-end   items-center py-5">
                                <NavLink
                                    to="/dashboard/addEmployee"
                                    className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
                                >
                                    Add New Employee
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
                                                    <p>
                                                        {formattedDate} Assigned
                                                        Task List
                                                    </p>
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
                                                    Employee Name
                                                </th>
                                                <th className="px-6 py-3  font-medium text-center">
                                                    Employee ID
                                                </th>

                                                <th className="px-6 py-3 text-center font-medium">
                                                    Task
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="bg-white">
                                            {data.map((task) => (
                                                <tr key={task._id}>
                                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                        <input
                                                            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                                            type="checkbox"
                                                        />
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                        <div className="text-sm leading-5 text-gray-900">
                                                            <div className="flex flex-col items-center  justify-center">
                                                                <div>
                                                                    {
                                                                        task.employeeName
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                        <div className="flex flex-col items-center justify-center">
                                                            <div>
                                                                <p className="text-left">
                                                                    {
                                                                        task.employeeID
                                                                    }
                                                                </p>
                                                            </div>
                                                            <div className="ml-4">
                                                                <div>
                                                                    <p className="text-sm text-left leading-5 font-medium text-gray-900"></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                                                        <div className="flex justify-center items-center">
                                                            <label
                                                                htmlFor="task-modal"
                                                                onClick={() =>
                                                                    setModalData(
                                                                        task
                                                                    )
                                                                }
                                                                className="btn btn-success text-white rounded uppercase font-poppins font-medium"
                                                            >
                                                                Details
                                                            </label>
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
                                    to="/dashboard/addEmployee"
                                    className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
                                >
                                    Add New Employee
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
                                                    <p>
                                                        {formattedDate} Assigned
                                                        Task List
                                                    </p>
                                                </th>
                                            </tr>
                                            <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                                                <th className="px-6 py-3 text-center font-medium">
                                                    Employee Info
                                                </th>

                                                <th className="px-6 py-3 text-center font-medium">
                                                    Task
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="bg-white">
                                            {data.map((task) => (
                                                <tr key={task._id}>
                                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                        <div className="text-sm leading-5 text-gray-900">
                                                            <div className="flex flex-col items-center justify-center">
                                                                <div>
                                                                    <h1>
                                                                        Name:{" "}
                                                                        {
                                                                            task.employeeName
                                                                        }
                                                                    </h1>
                                                                    <h1>
                                                                        ID:{" "}
                                                                        {
                                                                            task.employeeID
                                                                        }
                                                                    </h1>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className="px-6 py-4 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                                                        <div className="flex justify-center items-center">
                                                            <label
                                                                htmlFor="task-modal"
                                                                onClick={() =>
                                                                    setModalData(
                                                                        task
                                                                    )
                                                                }
                                                                className="btn btn-success text-white rounded uppercase font-poppins font-medium"
                                                            >
                                                                Details
                                                            </label>
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
                </div>
            )}
            {modalData && (
                <TaskDetailsModal
                    modalData={modalData}
                    setModalData={setModalData}
                />
            )}
        </div>
    );
};

export default GetTask;
