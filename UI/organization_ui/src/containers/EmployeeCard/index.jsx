import * as React from 'react';
import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { Employee } from '../../sagas/interfaces/interfaces';
import { EmployeeDetails } from '../EmployeeCard/EmployeeDetails'
import { TaskList } from './TaskList';
import { SubordinatesList } from './SubordinatesList';
import { useTaskListHook } from './TaskList/hooks/useTaskListHook';
import { useSubordinatesHook } from './SubordinatesList/hooks/useSubordinatesHook';
import { useReportListHook } from './ReportList/hooks/useReportListHook';
import { ReportList } from './ReportList';

interface Props {
    employee?: Employee;
}

export const EmployeeCard: FC<Props> = ({ employee }) => {
    const { taskList } = useTaskListHook();
    const { subEmployees } = useSubordinatesHook();
    const { reportList } = useReportListHook();
    return (
        <Container>
            <EmployeeDetails employee={employee} />
            {taskList && taskList?.length > 0 && <TaskList />}
            {subEmployees && subEmployees?.length > 0 && <SubordinatesList />}
            {reportList && reportList?.length > 0 && <ReportList />}
        </Container>
    );
};