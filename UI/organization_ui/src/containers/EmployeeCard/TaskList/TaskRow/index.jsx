import * as React from 'react';
import { FC } from 'react';
import { Task } from '../../../../sagas/interfaces/interfaces';
import { getDateFormatted } from '../../../utils';
import { Row, Col } from 'react-bootstrap';

interface Props {
    task?: Task;
}

export const TaskRow: FC<Props> = ({ task }) => {
    return (
        <Row>
            <Col>
                Task Description: {task?.taskDescription}
            </Col>
            <Col>
                Due date: {getDateFormatted(task?.dueDate)}
            </Col>
        </Row>
    );
};
