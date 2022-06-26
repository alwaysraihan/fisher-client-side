import React from "react";

import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem("employee"));

    if (!user || !user.employeeID) {
        toast.error("You are not loged in", {
            toastId: "unatuhorized",
        });
        return (
            <Navigate to="/employee-login" state={{ from: location }} replace />
        );
    }

    return children;
};

export default RequireAuth;
