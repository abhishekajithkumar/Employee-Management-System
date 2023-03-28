import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './HR/dashboard/dashboard.component';
import { EmpDetailsComponent } from './HR/emp-details/emp-details.component';
import { EmpDashboardComponent } from './Employee/emp-dashboard/emp-dashboard.component';
import { EmpLeaveComponent } from './Employee/emp-leave/emp-leave.component';
import { FormsModule } from '@angular/forms';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { HRNavbarComponent } from './HR/hr-navbar/hr-navbar.component';
import { EmployeeNavbarComponent } from './Employee/employee-navbar/employee-navbar.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { GuageChartComponent } from './charts/guage-chart/guage-chart.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    DashboardComponent,
    EmpDetailsComponent,
    EmpDashboardComponent,
    EmpLeaveComponent,
    DoughnutChartComponent,
    HRNavbarComponent,
    EmployeeNavbarComponent,
    SearchFilterPipe,
    BarChartComponent,
    GuageChartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(), // ToastrModule added
    BrowserAnimationsModule
  ],
  providers:[DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
