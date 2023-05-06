import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReport } from "../../../../actions"
import { Report, Employee } from "../../../../sagas/interfaces/interfaces";
import { toast } from 'react-toastify';
import _ from 'underscore';

export const useEmployeeDetailsHook = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const currentEmployee: Employee = useSelector((state: any) => state?.employees?.employee, _.isEqual);

    const onSaveModalForm = useCallback((reportText: string, reportStatus: string) => {
        const report: Report | {} = {
            reportStatus,
            reportText,
            reportDate: new Date(),
            managerId: currentEmployee?.managerId,
            employeeName: `${currentEmployee?.firstName} ${currentEmployee?.lastName}`
        };
        dispatch(addReport(report, (response: boolean) => {
            if (response === true) {
                toast.success('Report added successfully', {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                toast.error('Encountered an error, please try again later', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            setShowModal(false);
        }));
    }, [dispatch, currentEmployee]);

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
};
