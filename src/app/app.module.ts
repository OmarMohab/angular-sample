import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts'
import { NavModule } from './nav/nav.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesTableModule } from './employees-table/employees-table.module';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgChartsModule,
    NavModule,
    DashboardModule,
    HttpClientModule,
    EmployeesTableModule,
    TasksComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
