import React from "react";

import axios from "axios";

import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddEmployee = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
        reset,
    } = useForm();

    const onFormSubmit = async (data) => {
        const emplyee = {
            employeeID: data.employeeID,
            employeeName: data.name,
            employeePassword: data.password,
            employeeDegignation: data.degignation,
            employeephone: data.phone,
            employeeAddress: data.address,
            attendances: [],
        };

        axios
            .put(`http://localhost:5000/employee`, emplyee, {
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
            .then((res) => {});

        toast.success("New Employee Successfully added", {
            toastId: "addEmployee",
        });

        reset();
    };
    return (
        <>
            <div className="p-5">
                <div className="mx-4 p-4">
                    <div className="flex items-center">
                        <div className="flex items-center text-teal-600 relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-bookmark "
                                >
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                                Employee
                            </div>
                        </div>
                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
                        <div className="flex items-center text-white relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-user-plus "
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="8.5" cy="7" r="4"></circle>
                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                    <line
                                        x1="23"
                                        y1="11"
                                        x2="17"
                                        y2="11"
                                    ></line>
                                </svg>
                            </div>
                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                                Account
                            </div>
                        </div>

                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                        <div className="flex items-center text-gray-500 relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-database "
                                >
                                    <ellipse
                                        cx="12"
                                        cy="5"
                                        rx="9"
                                        ry="3"
                                    ></ellipse>
                                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                                </svg>
                            </div>
                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                                Confirm
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onFormSubmit)} autoComplete="off">
                    <div className="mt-8 p-4">
                        <div>
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                                    <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                                        Employee ID
                                    </div>
                                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                        <input
                                            type="text"
                                            placeholder="Enter Employee ID"
                                            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                            name="employeeID"
                                            {...register("employeeID", {
                                                required: true,
                                            })}
                                        />{" "}
                                    </div>
                                    {errors.employeeID && (
                                        <span className="text-red-500">
                                            Employee ID is required
                                        </span>
                                    )}
                                </div>

                                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                                    <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                                        {" "}
                                        Employee Name
                                    </div>
                                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                        <input
                                            placeholder="Enter Employee Name"
                                            type="text"
                                            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                            name="name"
                                            {...register("name", {
                                                required: true,
                                            })}
                                        />{" "}
                                    </div>
                                    {errors.name && (
                                        <span className="text-red-500">
                                            Employee Name is required
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                                    <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                                        Employee Password
                                    </div>
                                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                        <input
                                            type="text"
                                            placeholder="Enter Employee Password"
                                            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                            name="password"
                                            {...register("password", {
                                                required: true,
                                            })}
                                        />{" "}
                                    </div>
                                    {errors.employeeID && (
                                        <span className="text-red-500">
                                            Employee Pasword is required
                                        </span>
                                    )}
                                </div>

                                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                                    <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                                        {" "}
                                        Employee Degination
                                    </div>
                                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                        <input
                                            type="text"
                                            placeholder="Enter Employee Degination"
                                            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                            name="degignation"
                                            {...register("degignation", {
                                                required: true,
                                            })}
                                        />{" "}
                                    </div>
                                    {errors.degignation && (
                                        <span className="text-red-500">
                                            Employee Degination Is Required
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                                    <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                                        {" "}
                                        Employee Phone Number
                                    </div>
                                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                        <input
                                            type="tel"
                                            placeholder="Enter Employee Phone Nubmer"
                                            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                            name="phone"
                                            {...register("phone", {
                                                minLength: 11,
                                                required: true,
                                            })}
                                        />{" "}
                                    </div>
                                    {errors.phone && (
                                        <span className="text-red-500">
                                            Employe Phone Number Is Required
                                        </span>
                                    )}
                                </div>

                                <div className="w-full mx-2 flex-1 svelte-1l8159u">
                                    <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                                        {" "}
                                        Employee Address
                                    </div>
                                    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                        <input
                                            placeholder="Enter Employee Address"
                                            type="text"
                                            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                            name="address"
                                            {...register("address", {
                                                required: true,
                                            })}
                                        />{" "}
                                    </div>
                                    {errors.address && (
                                        <span className="text-red-500">
                                            Employee Address is required
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex p-2 mt-4">
                            <button
                                type="button"
                                className=" hidden text-base hover:scale-110 focus:outline-none md:flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-200  bg-gray-100 text-gray-700 border duration-200 ease-in-out  border-gray-600 transition"
                            >
                                Previous
                            </button>
                            <div className="flex-auto flex flex-row-reverse">
                                <button
                                    type="submit"
                                    className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-600  bg-teal-600  text-teal-100 border duration-200 ease-in-out border-teal-600 transition"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddEmployee;
