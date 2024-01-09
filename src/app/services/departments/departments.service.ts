import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Department } from '../../interfaces/Department.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  private http = inject(HttpClient);

  departments$ = new BehaviorSubject<Department[]>([])

  constructor() {
    this.fetchDepartments();
  }

  fetchDepartments(): void {
    this.http.get<Department[]>('https://test-api-vijd.onrender.com/departments').subscribe(fetchedDepartments => {
      this.departments$.next(fetchedDepartments);
    });
  }
}
