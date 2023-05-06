import {
    GET_EMPLOYEES, SET_EMPLOYEES, SET_EMPLOYEE, GET_EMPLOYEE_BY_ID
} from "../config/actions";

const initalState = {
    employees: [],
    employee: {}
};

const employeesReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
          return { ...state }; 
        case SET_EMPLOYEES:
            const { employees } = action;
            return { ...state, employees }
        case GET_EMPLOYEE_BY_ID:
            return { ...state }; 
        case SET_EMPLOYEE:
            const { employee } = action;
            return { ...state, employee }
       default:
          return state;
    }
};

export default employeesReducer;