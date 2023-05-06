import React from 'react';
import { FC } from 'react';
import { PopupModal } from '../../../../components/PopupModal';
import { reportStatuses } from '../ReportModal/utils';
import Select from 'react-select';
import { useReportModalHook } from './hooks/useReportModalHook';

interface Props {
    showModal: boolean;
    onClose?: () => void;
    onSave?: (reportText: string, reportStatus: string) => void;
}

const ReportModal: FC<Props> = ({ showModal, onClose, onSave }) => {
    const {
        reportText, handleChangedReportStatus, reportStatus, handleChangedReportText
    } = useReportModalHook();
    
    const getReportModalBody = () => {
        return (
        <form>
            <div className="report-text-input">
              <label htmlFor="reportText">Report Text:</label>
              <textarea
                id="reportText"
                type="text"
                value={reportText}
                onChange={(value) => handleChangedReportText(value)}
              />
            </div>
            <div>
              <label htmlFor="reportStatus">Report Status</label>
              <Select
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={reportStatuses}
                onChange={(value) => handleChangedReportStatus(value)}
            />
            </div>
        </form>
        );
    }

    return (
        <>
            <PopupModal
                showModal={showModal}
                modalBody={getReportModalBody()}
                handleSave={() => onSave(reportText, reportStatus)}
                handleClose={() => onClose()}
                modalHeader="Report"
            />
        </>
    );
};

export default ReportModal;