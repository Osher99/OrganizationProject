import * as React from 'react';
import { EmployeeList } from '../EmployeeList';
import { Container } from 'react-bootstrap';
import { useHomepageHook } from './hooks/useHomepageHook';
import { EmployeeCard } from '../EmployeeCard';

export const HomepageContainer = () => {
    const { onEmployeeSelect, employeeSelected } = useHomepageHook();
    return (
        <Container className="homepage-container">
            <EmployeeList onEmployeeSelect={onEmployeeSelect} />
            {employeeSelected && <EmployeeCard  employee={employeeSelected} />}
        </Container>
    );
};
