import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { EmployeeGuard } from './guard/employee.guard';
import { EmpDashboardComponent } from './Employee/emp-dashboard/emp-dashboard.component';
import { EmpLeaveComponent } from './Employee/emp-leave/emp-leave.component';
import { DashboardComponent } from './HR/dashboard/dashboard.component';
import { EmpDetailsComponent } from './HR/emp-details/emp-details.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

    {path:"login", component:LoginComponent},
    {path:"dashboard", component:DashboardComponent, canActivate: [AuthGuardGuard] },
    {path:"employee-details", component:EmpDetailsComponent, canActivate: [AuthGuardGuard] },
    {path:"emp-dashboard", component:EmpDashboardComponent, canActivate: [EmployeeGuard] },
    {path:"leave-request", component:EmpLeaveComponent, canActivate: [EmployeeGuard] },
    
    {path:'', redirectTo: '/login', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
