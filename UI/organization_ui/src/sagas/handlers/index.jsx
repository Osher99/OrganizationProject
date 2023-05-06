import { call, put } from 'redux-saga/effects';
import {
    getEmployees, getEmployeeById, postReport, postTask
} from '../requests';
import { setEmployees, setEmployee } from '../../actions';

export function* handleGetEmployees(action) {
     try {
        const response = yield call(getEmployees)
        if (response) {
            yield put(setEmployees(response));
        }
     } catch (e) {
         console.log(e);
     }
}

export function* handleGetEmployeeById(action) {
    try {
        const { employeeId, callback } = action;
       const response = yield call(getEmployeeById, employeeId)
       if (response) {
           yield put(setEmployee(response));
           callback?.(response);
       }
    } catch (e) {
        console.log(e);
    }
}

export function* addReport(action) {
    try {
        const { report, callback } = action;
       const response = yield call(postReport, report)
       if (response) {
        callback?.(response);
        }
    } catch (e) {
        console.log(e);
    }
}

export function* addTask(action) {
    try {
        const { task, callback } = action;
       const response = yield call(postTask, task)
       if (response) {
        callback?.(response);
        }
    } catch (e) {
        console.log(e);
    }
}
