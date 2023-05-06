import * as React from 'react';
import { FC } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useSubEmployeeRowHook } from './hooks/useSubEmployeeRowHook';
import CreateTaskModal from '../CreateTaskModal';

interface Props {
    employee?: Employee;
}

export const SubEmployeeRow: FC<Props> = ({ employee }) => {
    const {
        showModal, onModalClose, onOpenModal, onSaveModalForm
    } = useSubEmployeeRowHook(employee);
    const { firstName, lastName, position } = employee; 
    
    return (
        <Row className="subemployee-row">
            <Col>
                {firstName} {lastName}
            </Col>
            <Col>
                {position}
            </Col>
            <Col>
                <Button className="primary" onClick={() => onOpenModal()}>
                    Assign Task
                </Button>
            </Col>
            <CreateTaskModal
                showModal={showModal}
                onSave={onSaveModalForm}
                onClose={onModalClose} 
            />
        </Row>
    );
};