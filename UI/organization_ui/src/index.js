import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import employeesReducer from './reducers/employeesReducer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import "react-datepicker/dist/react-datepicker.css";

const sagaMiddleware = createSagaMiddleware();

const combinedReducers = combineReducers({
  employees: employeesReducer
})

const store = createStore(
  combinedReducers,
  {},
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
);
