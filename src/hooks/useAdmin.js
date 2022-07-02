import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        const employeeID = user?.employeeID;
        if (employeeID) {
            fetch(
                `https://fisheries-employee.herokuapp.com/admin/${employeeID}`,
                {
                    method: "GET",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    setAdmin(data.admin);
                    setAdminLoading(false);
                });
        }
    }, [user]);

    return [admin];
};

export default useAdmin;
