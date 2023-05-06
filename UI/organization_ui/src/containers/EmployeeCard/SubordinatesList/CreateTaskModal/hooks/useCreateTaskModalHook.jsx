import { useState } from "react";

export const useCreateTaskModalHook = () => {
    const [taskDescription, setTaskDescription] = useState('');
    const [dueDate, setDueDate] = useState(new Date());

    const handleChangedTaskDescription = (value: any) => {
        setTaskDescription(value?.target?.value);
    };

    const handleChangedDueDate = (value: any) => {
        setDueDate(value);
    };
    
    return {
        taskDescription,
        dueDate,
        handleChangedTaskDescription,
        handleChangedDueDate
    };
};
