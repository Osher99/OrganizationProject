import { Employee } from "../../../../sagas/interfaces/interfaces";
import { useSelector } from "react-redux";
import _ from 'underscore';

export const useTaskListHook = () => {
    const currentEmployee: Employee = useSelector((state: any) => state?.employees?.employee, _.isEqual);

    return {
        taskList: currentEmployee?.tasks || [],
        employeeName: `${currentEmployee?.firstName} ${currentEmployee?.lastName}` 
    };
};