import { useSelector } from "react-redux";
import { Employee } from "../../../../sagas/interfaces/interfaces";
import _ from 'underscore';

export const useReportListHook = () => {
    const currentEmployee: Employee = useSelector((state: any) => state?.employees?.employee, _.isEqual);

    return {
        reportList: currentEmployee?.reports || [],
        employeeName: `${currentEmployee?.firstName} ${currentEmployee?.lastName}`
    };
};
