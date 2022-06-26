import { NavLink } from "react-router-dom";
import purchaseproduct from "../../Data/purchaseproduct";

const PurchaseManagement = () => {
    return (
        <div>
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
                                                <p>Purchase Mangement</p>
                                            </th>
                                        </tr>
                                        <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                                            <th className="py-3  font-medium">
                                                No.
                                            </th>
                                            <th className="px-6 py-3 text-center font-medium">
                                                Product Name
                                            </th>
                                            <th className="px-6 py-3  font-medium text-center">
                                                Price
                                            </th>

                                            <th className="px-6 py-3 text-center font-medium">
                                                Product ID
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="bg-white">
                                        {purchaseproduct.map(
                                            (product, index) => (
                                                <tr key={product.id}>
                                                    <td className="px-6 py-4 text-center whitespace-no-wrap border-b border-gray-200">
                                                        <p>{index + 1}</p>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                        <div className="text-sm leading-5 text-gray-900">
                                                            <div className="flex flex-col items-center  justify-center">
                                                                <div>
                                                                    {
                                                                        product.productName
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
                                                                        product.price
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
                                                            {product.id}
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        )}
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
                                                <p>Assigned Task</p>
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
                                        {purchaseproduct.map((product) => (
                                            <tr key={product.id}>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                    <div className="text-sm leading-5 text-gray-900">
                                                        <div className="flex flex-col items-center justify-center">
                                                            <div>
                                                                <h1>
                                                                    Name:{" "}
                                                                    {
                                                                        product.productName
                                                                    }
                                                                </h1>
                                                                <h1>
                                                                    ID:{" "}
                                                                    {
                                                                        product.price
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
            </div>
        </div>
    );
};

export default PurchaseManagement;
