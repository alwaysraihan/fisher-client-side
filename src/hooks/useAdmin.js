import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        if ((user.role = "admin")) {
            setAdmin(true);
        } else {
            setAdmin(false);
        }
    }, [user]);

    return [admin];
};

export default useAdmin;
