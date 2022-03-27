export class IntersectionChecks {
    public checkIntersectionType(employee: Employee): void {
        // Employee is intersection for Name and Address so we can use all attributes - this is OK
        employee.city;
        employee.email;
        employee.firstName;
        employee.lastName;
        employee.street;
        employee.zip;

        // smae can be done with interfaces
    }
}

type EmployeeName = {
    firstName: string;
    lastName: string;
};

type EmployeeAddress = {
    email: string;
    street: string;
    zip: string;
    city: string;
};

type Employee = EmployeeName & EmployeeAddress;
