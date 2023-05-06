import React from 'react';
import { FC } from 'react';
import { PopupModal } from '../../../../components/PopupModal';
import DatePicker from "react-datepicker";
import { useCreateTaskModalHook } from './hooks/useCreateTaskModalHook';

interface Props {
    showModal: boolean;
    onClose?: () => void;
    onSave?: (taskDescription: string, dueDate: any) => void;
}

const CreateTaskModal: FC<Props> = ({ showModal, onClose, onSave }) => {
    const {
        taskDescription, dueDate, handleChangedDueDate, handleChangedTaskDescription
    } = useCreateTaskModalHook();
    
    const getTaskModalBody = () => {
        return (
            <form>
                <div className="report-text-input">
                <label htmlFor="taskDescription">Task Description:</label>
                <textarea
                    id="taskDescription"
                    type="text"
                    value={taskDescription}
                    onChange={(value) => handleChangedTaskDescription(value)}
                />
                </div>
                <div>
                <label htmlFor="dueDate">Due Date</label>
                <DatePicker
                    selected={dueDate}
                    onChange={(date) => handleChangedDueDate(date)}
                />
                </div>
            </form>
        );
    }

    return (
        <>
            <PopupModal
                showModal={showModal}
                modalBody={getTaskModalBody()}
                handleSave={() => onSave(taskDescription, dueDate)}
                handleClose={() => onClose()}
                modalHeader="Task"
            />
        </>
    );
};

export default CreateTaskModal;