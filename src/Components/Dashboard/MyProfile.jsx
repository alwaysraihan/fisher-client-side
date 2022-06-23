import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../Firebase-Setup/firebase.init";
import LoadingData from "../Loading/LoadingData";
import EditMyProfile from "./EditMyProfile";

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [edit, setEdit] = useState(null);
    const { data, isLoading, refetch } = useQuery("users", () =>
        fetch(`https://elctrofy.herokuapp.com/my-profile?email=${user.email}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return (
            <div className=" mt-10">
                <LoadingData />;
            </div>
        );
    }
    const ProfileData = data[0];
    console.log(ProfileData);
    return (
        <>
            <div className="container mx-auto my-5 p-5">
                <div className="md:flex no-wrap md:-mx-2  ">
                    {/* <!-- Left Side --> */}
                    <div className="w-full md:w-2/12 md:mx-2">
                        {/* <!-- Profile Card --> */}

                        <div className="bg-white p-3 border-t-4 border-green-400">
                            <div className="flex items-center justify-center">
                                <div className="image w-full overflow-hidden">
                                    {user.photoURL ? (
                                        <img
                                            className="h-auto w-full"
                                            src={user.photoURL}
                                            alt="profile"
                                        />
                                    ) : (
                                        <img
                                            className="h-auto w-full mx-auto"
                                            src="https://i.ibb.co/KDfw63R/Pngtree-business-male-icon-vector-4187852.png"
                                            alt="profile"
                                        />
                                    )}
                                </div>
                            </div>
                            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                                {user?.displayName}
                            </h1>

                            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                <li className="flex items-center py-3">
                                    <span className="md:hidden lg:block">
                                        Status
                                    </span>
                                    <span className="ml-auto">
                                        <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                                            Active
                                        </span>
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* <!-- End of profile card --> */}
                        <div className="my-4"></div>

                        {/* <!-- End of friends card --> */}
                    </div>
                    {/* <!-- Right Side --> */}
                    <div className="w-full md:w-9/12 mx-2 h-64">
                        {/* <!-- Profile tab --> */}
                        {/* <!-- About Section --> */}
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span clas="text-green-500">
                                    <svg
                                        className="h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                </span>
                                <span className="tracking-wide">About</span>
                            </div>
                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-2 text-sm">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Name
                                        </div>
                                        <div className="px-4 py-2">
                                            {user.displayName}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Contact No.
                                        </div>
                                        {ProfileData?.phone && (
                                            <div className="px-4 py-2">
                                                {ProfileData.phone}
                                            </div>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Address
                                        </div>
                                        {ProfileData.address && (
                                            <div className="px-4 py-2">
                                                {ProfileData.address}
                                            </div>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-2">
                                        {ProfileData.linkedin ? (
                                            <div className="px-4 py-2 font-semibold">
                                                <a
                                                    className="text-blue-500"
                                                    href={`${ProfileData.linkedin}`}
                                                >
                                                    Linkedin
                                                </a>
                                            </div>
                                        ) : (
                                            <div
                                                onClick={() =>
                                                    toast.warning(
                                                        "You did not add Linkedin!"
                                                    )
                                                }
                                                className="px-4  cursor-pointer py-2 font-semibold"
                                            >
                                                Linkedin
                                            </div>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Email
                                        </div>
                                        <div className="px-4 py-2">
                                            <a
                                                className="text-blue-800"
                                                href={`mailto:${user.email}`}
                                            >
                                                {user.email}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Education
                                        </div>
                                        <div className="px-4 py-2">
                                            {ProfileData?.education && (
                                                <a
                                                    className="text-blue-800"
                                                    href={`mailto:${user.email}`}
                                                >
                                                    {ProfileData.education}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    onClick={() => setEdit({ edit: true })}
                                    className="block   bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium"
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                        {/* <!-- End of about section --> */}

                        <div className="my-4">
                            {edit && (
                                <EditMyProfile
                                    refetch={refetch}
                                    setEdit={setEdit}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfile;
