import React, { useState } from "react";
import AttendanceReportsBanner from "./AttendanceReportsBanner";
import DatePicker from "./DatePicker";

const AttendanceReports = () => {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <DatePicker date={date} setDate={setDate} />
            <AttendanceReportsBanner date={date} setDate={setDate} />
        </>
    );
};

export default AttendanceReports;
