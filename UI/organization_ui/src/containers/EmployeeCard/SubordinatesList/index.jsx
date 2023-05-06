import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Employee } from '../../../sagas/interfaces/interfaces';
import { useSubordinatesHook } from './hooks/useSubordinatesHook';
import { SubEmployeeRow } from './SubEmployeeRow';

export const SubordinatesList = () => {
    const { employeeName, subEmployees } = useSubordinatesHook();
    return (
        <Container className='container-rows'>
            <Row className="row-header">
                Subemployees under {employeeName}
            </Row>
            <Row>
                {subEmployees?.map((employee: Employee) => {
                    return (
                        <SubEmployeeRow key={employee?.id} employee={employee} />
                    );
                })}
            </Row>
        </Container>
    );
};
