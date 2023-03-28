import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService: ApiService, private router: Router, private http: HttpClient, private toastr: ToastrService){}

  userData={
    name: '',
    password:''
  }

  public empData:any;

  


  onSubmit(){
    console.log(this.userData);
    this.loginService.setData(this.userData);
    localStorage.setItem('login',JSON.stringify(this.userData));



    this.http.get('http://localhost:3000/employee').subscribe((response)=>{
      
      this.empData= response;
      // console.log('response=', this.empData);

      for(let i=0; i<this.empData.length; i++){
        // console.log("forloop: ", this.empData[i]);
        if(this.userData.name=="admin" && this.userData.password=='password'){
          // this.toastr.success('Successfully logged in!', 'HR Log In!');
          this.router.navigate(['dashboard']);
          return;
        }
        else if(this.empData[i].name==this.userData.name && this.empData[i].password==this.userData.password){
          localStorage.setItem('User',JSON.stringify(this.empData[i]))
          this.router.navigate(['emp-dashboard']); 
          // this.toastr.success('Successfully logged in!', 'Log In!');
          return;
        }
        
      }
      
      })
      

    
  }

}
