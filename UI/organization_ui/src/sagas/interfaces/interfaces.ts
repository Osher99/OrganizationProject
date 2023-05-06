export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    poistiom: string;
    address: string;
    phone: string;
    managerId: number;
    managerName?: string;
    subEmployees?: Employee[];
    tasks?: Task[];
    reports?: Report[];
}

export interface Task {
    id: number;
    taskDescription: string;
    assignDate: string;
    dueDate: string;
    employeeId: number;
}

export interface Report {
    id: number;
    reportText: string;
    reportStatus: string;
    reportDate: string;
    managerId: number;
    employeeName: string;
}
