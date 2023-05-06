import {
    API_URL_ORGANIZATION,
    API_EMPLOYEE_GET_ALL_EMPLOYEES,
    API_EMPLOYEE_GET_EMPLOYEE_BY_ID,
    API_URL_REPORT,
    API_URL_TASK
 } from '../../config/const';
import { Report, Task } from '../interfaces/interfaces';

export async function getEmployees() {
    try {
        const res = await fetch(API_URL_ORGANIZATION+API_EMPLOYEE_GET_ALL_EMPLOYEES);
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
}

export async function getEmployeeById(employeeId: string) {
    try {
        const res = await fetch(`${API_URL_ORGANIZATION}${API_EMPLOYEE_GET_EMPLOYEE_BY_ID}${employeeId}`);
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
}

export async function postReport(report: Report) {
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(report)
        };
        const res = await fetch(`${API_URL_ORGANIZATION}${API_URL_REPORT}`, requestOptions);
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
}

export async function postTask(task: Task) {
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        };
        const res = await fetch(`${API_URL_ORGANIZATION}${API_URL_TASK}`, requestOptions);
        return await res.json();
    } catch (err) {
            return console.log(err);
    }
}
