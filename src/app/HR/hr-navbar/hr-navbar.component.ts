import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-navbar',
  templateUrl: './hr-navbar.component.html',
  styleUrls: ['./hr-navbar.component.scss']
})
export class HRNavbarComponent {

  constructor(private router: Router){}

  logout(){
    localStorage.clear();
    this.router.navigate(["./login"]);
  }
}
