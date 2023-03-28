import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  loginData={
    name:'',
    password:''
  }

  name: any;
  password: any;
  setData(value: any){
    this.loginData.name=value.name;
    this.loginData.password=value.password;
  }


  updateData(userData:any, userId:any){
    console.log("USER ID:", userId);
    return this._http.patch('http://localhost:3000/employee/'+userId, userData)
  }

  addData(userData:any){
    return this._http.post('http://localhost:3000/employee/', userData)
  }

  deleteData(userId:any){
    console.log("DELETE ID:", userId)
    return this._http.delete('http://localhost:3000/employee/'+userId)
  }

  getEmployeeDetails(){
    return this._http.get('http://localhost:3000/employee/')
  }

  getEmployeeDetailsbyID(id: any){
    return this._http.get('http://localhost:3000/employee/'+id)
  }

  leaveDetails(leaveDetails:any,id: any){
    console.log("Apply ID",id)
    console.log("Apply leaveDetails",leaveDetails)
    return this._http.patch('http://localhost:3000/employee/'+id,leaveDetails)
  }
}
