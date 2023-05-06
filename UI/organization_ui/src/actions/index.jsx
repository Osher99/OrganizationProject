import {
    GET_EMPLOYEES, SET_EMPLOYEES, SET_EMPLOYEE,
    GET_EMPLOYEE_BY_ID, ADD_REPORT, ADD_TASK
} from "../config/actions";
export const getEmployees = () => ({
    type: GET_EMPLOYEES
});

export const getEmployeeById = (employeeId, callback) => ({
    type: GET_EMPLOYEE_BY_ID,
    employeeId,
    callback
});

export const setEmployees = (employees) => ({
    type: SET_EMPLOYEES,
    employees
});

export const setEmployee = (employee) => ({
    type: SET_EMPLOYEE,
    employee
});


export const addReport = (report, callback) => ({
    type: ADD_REPORT,
    report,
    callback
});

export const addTask = (task, callback) => ({
    type: ADD_TASK,
    task,
    callback
});
