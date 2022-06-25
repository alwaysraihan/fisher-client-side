import React, { useState } from "react";
import DatePicker from "./DatePicker";
import GetTask from "./GetTask";

const EmployeeTasks = () => {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <DatePicker date={date} setDate={setDate} />
            <GetTask date={date} />
        </>
    );
};

export default EmployeeTasks;
