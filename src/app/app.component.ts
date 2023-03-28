import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Employee Management System';

constructor(private router: Router, private Http: HttpClient){}



logout(){
    localStorage.clear();
    this.router.navigate(["./login"]);
  }
}
