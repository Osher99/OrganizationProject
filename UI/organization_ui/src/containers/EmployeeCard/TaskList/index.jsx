import * as React from 'react';
import { useTaskListHook } from './hooks/useTaskListHook';
import { Container, Row } from 'react-bootstrap';
import { Task } from '../../../sagas/interfaces/interfaces';
import { TaskRow } from './TaskRow';

export const TaskList = () => {
    const { taskList, employeeName } = useTaskListHook();

    return (
        <Container className='container-rows'>
            <Row className="row-header">
                Task List For {employeeName}
            </Row>
            <Row>
                {taskList?.map((task: Task) => {
                    return (
                        <TaskRow key={task?.id} task={task} />
                    );
                })}
            </Row>
        </Container>
    );
};
