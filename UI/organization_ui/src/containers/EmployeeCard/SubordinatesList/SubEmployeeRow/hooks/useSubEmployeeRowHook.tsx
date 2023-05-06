import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../../../../actions"
import { Task, Employee } from "../../../../../sagas/interfaces/interfaces";
import { toast } from 'react-toastify';
import _ from 'underscore';

export const useSubEmployeeRowHook = (employee: Employee) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const currentEmployee: Employee = useSelector((state: any) => state?.employees?.employee, _.isEqual);

    const onSaveModalForm = useCallback((taskDescription: string, dueDate: any) => {
        const task: Task | {} = {
            taskDescription,
            dueDate: dueDate,
            assignDate: new Date(),
            employeeId: employee?.id,
            managerName: `${currentEmployee?.firstName} ${currentEmployee?.lastName}`
        };
        dispatch(addTask(task, (response: boolean) => {
            if (response === true) {
                toast.success('Task added successfully', {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                toast.error('Encountered an error, please try again later', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            setShowModal(false);
        }));
    }, [dispatch, currentEmployee, employee]);

    const onModalClose = () => {
        setShowModal(false);
    };
    
    const onOpenModal = () => {
        setShowModal(true);
    };

    return {
        showModal,
        onModalClose,
        onOpenModal,
        onSaveModalForm
    };
}