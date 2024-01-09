import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { EmployeesService } from '../services/employees/employees.service';
import { Employee } from '../interfaces/Employee.interface';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent {
  private employeesService = inject(EmployeesService);
  private pieLabels: string[] = [];
  private pieData: number[] = [];
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  ngOnInit(): void {
    this.employeesService.employees$.subscribe((employees) => {
      if (employees.length) {
        this.pieChartData.labels = Object.keys(this.countDepartmentEmployees(employees));
        this.pieChartData.datasets[0].data = Object.values(this.countDepartmentEmployees(employees));
        this.chart.chart?.update();
      } else {
        this.pieChartData.labels = ['placeholder'];
        this.pieChartData.datasets[0].data = [1];
        this.chart.chart?.update();
      }
    });
  }

  pieChartData = {
    labels: ['placeholder'],
    datasets: [
      {
        data: [1],
        label: 'Number of Employees'
      }
    ]
  }

  pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1.25
  }

  private countDepartmentEmployees(employees: Employee[]) {
    let obj: {[key: string]: number} = {};
    employees.forEach((employee) => {
      if (obj[employee.department]) {
        obj[employee.department] += 1;
      } else {
        obj[employee.department] = 1;
      }
    })
    return obj;
  }
}
