import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../../actions"
import _ from 'underscore';
import { Employee } from "../../../sagas/interfaces/interfaces";

export const useEmployeeListHook = () => {
    const dispatch = useDispatch();
    const employees: Employee[] = useSelector((state) => state.employees.employees, _.isEqual);

    useEffect(() => {
        dispatch(getEmployees());
    }, [dispatch]);
    
    return {
        employees
    };
};
