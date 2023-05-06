import * as React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Employee } from '../../../sagas/interfaces/interfaces';
import { FC } from 'react';
import ReportModal from './ReportModal';
import { useEmployeeDetailsHook } from './hooks/useEmployeeDetailsHook';

interface Props {
    employee?: Employee;
}

export const EmployeeDetails: FC<Props> = ({ employee }) => {
    const {
        showModal, onModalClose ,onOpenModal, onSaveModalForm
    } = useEmployeeDetailsHook();
    return (
        <Container>
            <Row>
                Name: {employee?.firstName} {employee?.lastName}
            </Row>
            <Row>
                Poisiton: {employee?.position}
            </Row>
            <hr />
            {employee?.managerId && (
            <Row>
                <Col>
                    Manager: {employee?.managerName}
                </Col>
                <Col>
                    <Button className="primary" onClick={() => onOpenModal()}>
                        Report
                    </Button>
                </Col>
            </Row>
            )}
            <ReportModal
                showModal={showModal}
                onSave={onSaveModalForm}
                onClose={onModalClose} 
            />
        </Container>
    );
};
