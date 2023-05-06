import { takeEvery, all } from 'redux-saga/effects';
import {
    handleGetEmployees, handleGetEmployeeById, addReport, addTask
} from './handlers';
import {
    GET_EMPLOYEES, GET_EMPLOYEE_BY_ID, ADD_REPORT, ADD_TASK
} from '../config/actions';

function* employeesWatcher() {
    yield takeEvery(GET_EMPLOYEES, handleGetEmployees);
    yield takeEvery(GET_EMPLOYEE_BY_ID, handleGetEmployeeById);
}

function* reportWatcher() {
    yield takeEvery(ADD_REPORT, addReport);
}

function* taskWatcher() {
    yield takeEvery(ADD_TASK, addTask);
}

export default function* rootSaga() {
    yield all([
        employeesWatcher(),
        reportWatcher(),
        taskWatcher()
    ]);
}