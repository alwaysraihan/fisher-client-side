import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import LoadingData from "../Loading/LoadingData";
import UserRow from "./UserRow";

const MakeAdmin = () => {
    const navigate = useNavigate();
    const {
        data: users,
        isLoading,
        refetch,
    } = useQuery("users", () =>
        fetch("https://elctrofy.herokuapp.com/user", {
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

    return (
        <>
            <div className="bg-gray-100 min-h-screen">
                <div className="my-5">
                    <div className="lg:pb-8">
                        <h2 className="  text-2xl lg:my-2 mx-10 text-gray-800 font-semibold">
                            Total Users: {users?.length}
                        </h2>
                    </div>
                    <div className="overflow-x-auto px-5 lg:px-12">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Users</th>
                                    <th className="text-center">Make admin</th>
                                    <th className="text-center">Delete User</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.map((user, index) => (
                                    <UserRow
                                        key={index}
                                        user={user}
                                        index={index}
                                        refetch={refetch}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};
export default MakeAdmin;
