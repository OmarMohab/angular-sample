import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { EmployeesTableComponent } from '../employees-table/employees-table.component';
import { TasksComponent } from '../tasks/tasks.component';
import { EmployeesCountComponent } from '../employees-count/employees-count.component';
import { DepartmentsCountComponent } from '../departments-count/departments-count.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 2, rows: 1, content: EmployeesCountComponent },
          { title: 'Card 2', cols: 2, rows: 1, content: DepartmentsCountComponent },
          { title: 'Departments Sizes', cols: 4, rows: 1, content: PieChartComponent },
          { title: 'My Tasks', cols: 4, rows: 2, content: TasksComponent },
          { title: 'Employees', cols: 4, rows: 2, content: EmployeesTableComponent }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1, content: EmployeesCountComponent },
        { title: 'Card 2', cols: 1, rows: 1, content: DepartmentsCountComponent },
        { title: 'My Tasks', cols: 2, rows: 2, content: TasksComponent },
        { title: 'Department Sizes', cols: 2, rows: 1, content: PieChartComponent },
        { title: 'Employees', cols: 4, rows: 2, content: EmployeesTableComponent }
      ];
    })
  );
}
