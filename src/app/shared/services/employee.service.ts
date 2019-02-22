import { Injectable } from '@angular/core';
// import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { EMPLOYEES } from '../mocks/employee';
import { of } from 'rxjs';
@Injectable()
export class EmployeeService {

    constructor() { }

    getEmployees(): Observable<Employee[]> {
        return of(EMPLOYEES);
    }

    createEmployee(employee: Employee): Observable<string> {
        EMPLOYEES.unshift(employee);
        return of('Create success');
    }

}
