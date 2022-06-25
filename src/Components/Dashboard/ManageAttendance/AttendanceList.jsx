import React from "react";
import { format } from "date-fns";
import { useQuery } from "react-query";
import { data } from "autoprefixer";
const AttendanceList = ({ date }) => {
    const formattedDate = date && format(date, "PP");
    const url = `http://localhost:5000/attendance/${formattedDate}`;
    const { isLoading, error, refetch, data } = useQuery(
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
        </div>
    );
};

export default AttendanceList;
