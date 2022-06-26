import { toast } from "react-toastify";

const MyProfile = () => {
    const user = JSON.parse(localStorage.getItem("employee"));
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
                                    <img
                                        className="h-auto w-full mx-auto"
                                        src="https://i.ibb.co/KDfw63R/Pngtree-business-male-icon-vector-4187852.png"
                                        alt="profile"
                                    />
                                </div>
                            </div>

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
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
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
                                            <h1>
                                                {user?.employeeName
                                                    ? user.employeeName
                                                    : "*Employee*"}
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Contact No.
                                        </div>
                                        <h1>
                                            {user?.employeephone
                                                ? user.employeephone
                                                : "01*********"}
                                        </h1>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Address
                                        </div>
                                        <h1>
                                            {user?.employeeAddress
                                                ? user.employeeAddress
                                                : "****,Bangldadesh"}
                                        </h1>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Degignation
                                        </div>
                                        <div className="px-4 py-2">
                                            <span>
                                                {user?.employeeDegignation
                                                    ? user.employeeDegignation
                                                    : "*****"}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Employee ID
                                        </div>
                                        <div className="px-4 py-2">
                                            <span>
                                                {user?.employeeID
                                                    ? user.employeeID
                                                    : "******"}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">
                                            Password
                                        </div>
                                        <div className="px-4 py-2">
                                            <h1>*****</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfile;
