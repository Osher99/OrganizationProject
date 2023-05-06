import * as React from 'react';
import { FC } from 'react';
import { Report } from "../../../../sagas/interfaces/interfaces";
import { Row, Col } from 'react-bootstrap';
import { getDateFormatted } from '../../../utils';
 
interface Props {
    report?: Report;
}

export const ReportRow: FC<Props> = ({ report }) => {
    return (
        <Row>
            <Col className="bold-label">
                Report Text:
            </Col>
            <Col>
                {report?.reportText}
            </Col>
            <Col className="bold-label">
                Report Status:
            </Col>
            <Col>
                {report.reportStatus}
            </Col>
            <Col className="bold-label">
                Report Date:
            </Col>
            <Col>
                {getDateFormatted(report?.reportDate)}
            </Col>
            <Col className="bold-label">
                Employee Name Report:
            </Col>
            <Col>
                {report?.employeeName}
            </Col>
        </Row>
    );
}