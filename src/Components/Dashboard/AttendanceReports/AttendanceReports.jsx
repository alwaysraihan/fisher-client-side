import React, { useState } from "react";
import AttendanceReportsBanner from "./AttendanceReportsBanner";

const AttendanceReports = () => {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <AttendanceReportsBanner date={date} setDate={setDate} />
        </>
    );
};

export default AttendanceReports;
