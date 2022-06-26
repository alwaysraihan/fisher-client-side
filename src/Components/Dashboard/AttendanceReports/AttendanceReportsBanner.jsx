import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { useQuery } from "react-query";
import LoadingData from "../../Loading/LoadingData";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    ResponsiveContainer,
    Legend,
    BarChart,
    Bar,
} from "recharts";
const AttendanceReportsBanner = () => {
    const [data2, setData2] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/employee")
            .then((res) => res.json())
            .then((data) => setData2(data));
    }, []);
    const [date, setDate] = useState(new Date());
    const formattedDate = date && format(date, "PP");
    const url = `http://localhost:5000/attendance/${formattedDate}`;
    const { isLoading, error, data } = useQuery(
        ["available", formattedDate],
        () => fetch(url).then((res) => res.json())
    );

    const errorText = data?.error;
    const chartData = [
        {
            name: "Total Employee",
            TotalEmployee: data2?.length ? data2.length : 0,
            Present: data?.length ? data.length : 0,
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <div>
                <h1 className="text-center pt-8 lg:mb-10 text-xl md:text-2xl font-semibold">
                    Select A Attendence Date
                </h1>
                <div className="hero">
                    <div className="hero-content  w-full gap-16 flex-col justify-between items-center lg:flex-row-reverse">
                        <div className="w-full lg:w-[50%] h-full flex justify-center items-center -z-30 ">
                            <ResponsiveContainer width="100%" height={400}>
                                <BarChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar
                                        dataKey="TotalEmployee"
                                        fill="#8884d8"
                                    />
                                    <Bar dataKey="Present" fill="#82ca9d" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div>
                            <DayPicker
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="text-xl text-center font-semibold">
                {formattedDate} Attendance List
            </h1>
            {isLoading && <p className="mt-5">Loading.....</p>}
            {error ? (
                <p className="mt-5">Something Went Wrong Please try again</p>
            ) : (
                ""
            )}
            {errorText && (
                <p className="text-center mt-5 text-2xl">
                    Your Selected Data Have No Attendance
                </p>
            )}

            {data?.length > 0 && (
                <div className="w-full min-h-screen px-1  mt-5 lg:pt-8">
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
                </div>
            )}
        </div>
    );
};

export default AttendanceReportsBanner;
