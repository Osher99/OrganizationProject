import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { getEmployeeById } from "../../../actions"

export const useHomepageHook = () => {
    const dispatch = useDispatch();
    const [employeeSelected, setEmployeeSelected] = useState(undefined);

    const onEmployeeSelect = useCallback((employeeId: string) => {
        dispatch(getEmployeeById(employeeId, (response) => {
            setEmployeeSelected(response);
        }));
    }, [dispatch]);

    return {
        onEmployeeSelect,
        employeeSelected
    };
};
