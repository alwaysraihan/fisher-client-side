import React from "react";
import { format } from "date-fns";
import { useQuery } from "react-query";
import LoadingData from "../../Loading/LoadingData";
import { NavLink } from "react-router-dom";
const AttendanceReportsBanner = ({ date }) => {
    const formattedDate = date && format(date, "PP");
    const url = `http://localhost:5000/attendance/${formattedDate}`;
    const { isLoading, error, data } = useQuery(
        ["available", formattedDate],
        () => fetch(url).then((res) => res.json())
    );

    const errorText = data?.error;

    return (
        <div>
            <h1 className="text-xl text-center font-semibold">
                {formattedDate} Attendance List
            </h1>
            {isLoading && <p>Loading.....</p>}
            {error ? <p>Something Went Wrong Please try again</p> : ""}
            {errorText && (
                <p className="text-center text-2xl">
                    Your Selected Data Have No Attendance
                </p>
            )}

            {data?.length > 0 && (
                <div className="w-full min-h-screen px-1 bg-gray-100 my-5 md:mb-10 lg:pt-8">
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
                                                        {formattedDate}{" "}
                                                        Attendance
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
                                                    Attendance
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="bg-white">
                                            {data.map((employee) => (
                                                <tr key={employee._id}>
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
                                                                        employee.employeeName
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
                                                                        employee.employeeID
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
                                                            <span className="btn  btn-disabled btn-success text-white rounded uppercase font-poppins font-medium">
                                                                Present
                                                            </span>
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
                                                        {formattedDate}{" "}
                                                        Attendance
                                                    </p>
                                                </th>
                                            </tr>
                                            <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                                                <th className="px-6 py-3 text-center font-medium">
                                                    Employee Info
                                                </th>

                                                <th className="px-6 py-3 text-center font-medium">
                                                    Attendance
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="bg-white">
                                            {data.map((employee) => (
                                                <tr key={employee._id}>
                                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                        <div className="text-sm leading-5 text-gray-900">
                                                            <div className="flex flex-col items-center justify-center">
                                                                <div>
                                                                    <h1>
                                                                        Name:{" "}
                                                                        {
                                                                            employee.employeeName
                                                                        }
                                                                    </h1>
                                                                    <h1>
                                                                        ID:{" "}
                                                                        {
                                                                            employee.employeeID
                                                                        }
                                                                    </h1>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className="px-6 py-4 whitespace-no-wrap text-center border-b border-gray-200 text-sm leading-5 font-medium">
                                                        <div className="flex justify-center items-center">
                                                            <button className="block  bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium">
                                                                Present
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
                    {data.length === 0 ? (
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
                    {/* {modalData && (
                <DeleteModal
                    url={`http://localhost:5000/employee/${modalData._id}`}
                    setModalData={setModalData}
                    modalData={modalData}
                    setreload={setreload}
                />
            )} */}
                </div>
            )}
        </div>
    );
};

export default AttendanceReportsBanner;
