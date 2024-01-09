import { Injectable, inject } from "@angular/core";
import { BehaviorSubject, Observable, map, tap } from "rxjs";
import { Employee } from "../../interfaces/Employee.interface";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {
    private http = inject(HttpClient);
    employees$ = new BehaviorSubject<Employee[]>([]);

    constructor() {
        this.fetchEmployees();
    }

    fetchEmployees(): void {
        let employees: Employee[] = [];
        this.http.get<Employee[]>('https://test-api-vijd.onrender.com/employees').subscribe(fetchedEmployees => {
            this.employees$.next(fetchedEmployees);
        })
    }

    addEmployee(employee: any): void {
        this.http.post<Employee>('https://test-api-vijd.onrender.com/employees', employee).subscribe(newCreatedEmployee => {
            let newEmployee: Employee = newCreatedEmployee
            
            this.employees$.next([...this.employees$.getValue(), newEmployee]);
        });
    }

    updateEmployee(id: number, employee: any): void {
        this.http.patch<Employee>('https://test-api-vijd.onrender.com/employees/' + id, employee).subscribe(updatedEmployee => {
            const updatedEmployees = this.employees$.getValue().map((employee) => {
                if (employee.id === id) {
                    return updatedEmployee;
                }
                return employee;
            })
            this.employees$.next(updatedEmployees);
        });
    }

    removeEmployee(id: number): Observable<boolean> {
        const updatedEmployees = this.employees$.getValue().filter(employee => employee.id != id);
        this.employees$.next(updatedEmployees);
        return this.http.delete<boolean>('https://test-api-vijd.onrender.com/employees/' + id);
    }
}