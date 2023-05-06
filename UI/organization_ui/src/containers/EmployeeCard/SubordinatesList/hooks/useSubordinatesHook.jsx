import { Employee } from "../../../../sagas/interfaces/interfaces";
import { useSelector } from "react-redux";
import _ from 'underscore';

export const useSubordinatesHook = () => {
    const currentEmployee: Employee = useSelector((state: any) => state?.employees?.employee, _.isEqual);

    return {
        subEmployees: currentEmployee?.subEmployees || [],
        employeeName: `${currentEmployee?.firstName} ${currentEmployee?.lastName}`
    };
};
