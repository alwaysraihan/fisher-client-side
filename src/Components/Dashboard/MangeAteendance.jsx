import React, { useState } from "react";
import DatePicker from "./ManageAttendance/DatePicker";

const MangeAteendance = () => {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <DatePicker date={date} setDate={setDate} />
        </>
    );
};

export default MangeAteendance;
