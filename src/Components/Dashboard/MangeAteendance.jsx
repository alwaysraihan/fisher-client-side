import React, { useState } from "react";
import AttendanceList from "./ManageAttendance/AttendanceList";
import DatePicker from "./ManageAttendance/DatePicker";

const MangeAteendance = () => {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <DatePicker date={date} setDate={setDate} />
            <AttendanceList date={date} setDate={setDate} />
        </>
    );
};

export default MangeAteendance;
