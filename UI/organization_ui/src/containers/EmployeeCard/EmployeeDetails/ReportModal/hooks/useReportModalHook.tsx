import { useState } from "react";

export const useReportModalHook = () => {
    const [reportText, setReportText] = useState('');
    const [reportStatus, setReportStatus] = useState('');

    const handleChangedReportText = (value: any) => {
        setReportText(value?.target?.value);
    };

    const handleChangedReportStatus = (value: any) => {
        setReportStatus(value?.value);
    };
    
    return {
        reportText,
        reportStatus,
        handleChangedReportStatus,
        handleChangedReportText
    };
};
