import { Container, Row } from "react-bootstrap";
import { Report } from "../../../sagas/interfaces/interfaces";
import { useReportListHook } from "./hooks/useReportListHook";
import { ReportRow } from "./ReportRow";

export const ReportList = () => {
    const { employeeName, reportList }  = useReportListHook();

    return (
    <Container className='container-rows'>
        <Row className="row-header">
            Report List For {employeeName}
        </Row>
        <Row>
            {reportList?.map((report: Report) => {
                return (
                    <ReportRow key={report?.id} report={report} />
                );
            })}
        </Row>
    </Container>
    )
};
