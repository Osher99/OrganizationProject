import * as React from 'react';
import { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Employee } from "../../sagas/interfaces/interfaces";
import { EmployeeRow } from './EmployeeRow';
import { useEmployeeListHook } from './hooks/useEmployeeListHook'

interface Props {
    onEmployeeSelect: (employeeId: string) => void;
}

export const EmployeeList: FC<Props> = ({ onEmployeeSelect }) => {
    const { employees } = useEmployeeListHook();
    return (
        <Container className='container'>
            <Row className='row-header'>
                EmployeeList
            </Row>
            <Container className='container-rows'>
                {employees?.map((employee: Employee) => {
                    return (
                        <EmployeeRow key={employee.id} onEmployeeSelect={onEmployeeSelect} employee={employee} />
                    );
                })}
            </Container>
            <hr />
        </Container>
    );
};