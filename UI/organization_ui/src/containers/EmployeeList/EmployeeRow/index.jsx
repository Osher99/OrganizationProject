import * as React from "react";
import { FC } from "react";
import { Col, Row, Button } from 'react-bootstrap';
import { Employee } from "../../../sagas/interfaces/interfaces";

interface Props {
    employee: Employee;
    onEmployeeSelect: (employeeId: string) => void;
}

export const EmployeeRow: FC<Props> = ({ employee, onEmployeeSelect }) => {
    return (
        <Row>
            <Col>
                {employee?.firstName} {employee?.lastName}
            </Col>
            <Col>
                {employee?.position}
            </Col>
            <Col>
                <Button onClick={() => onEmployeeSelect(employee?.id)}>
                    View Employee
                </Button>
            </Col>
        </Row>
    );
};
