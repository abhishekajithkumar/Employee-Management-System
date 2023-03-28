import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.scss']
})
export class EmpDashboardComponent implements OnInit {

  constructor(private _api: ApiService, private toastr: ToastrService){}

  userJSON: any;
  user:any;
  public employeeData:any;

  ngOnInit(): void {
    this.getEmployeeDetails();

    this.userJSON=localStorage.getItem("User")
    this.user=JSON.parse(this.userJSON);
    console.log("ID",this.user.id)
    let today = new Date();
    let dayOfMonth = today.getDate();
    console.log("DATE:", dayOfMonth)
  
  }
  getEmployeeDetails(){
    this._api.getEmployeeDetails().subscribe(response =>{
      // console.log("Resp:", response);
      this.employeeData=response;
      console.log("employeeData:", this.employeeData);
    })
  }

  
  public updateName:any;
  public updateSurname:any;
  public updateRole:any;
  public updateDob:any;
  public updateAge:any;
  public updateGender:any;
  public updateBlood:any;
  public updateEmail:any;
  public updatePassword:any;
  public updateMobile:any;
  public updatePhoto:any;
  public updateStatus:any;

  public editId='';
  public responseValue: any
  public selectedFile: any

  editUser(id: any){
    setTimeout(() => {
    this._api.getEmployeeDetailsbyID(id).subscribe(res =>{
      this.responseValue=res;

      this.updateName=this.responseValue.name
      this.updateSurname=this.responseValue.surname
      this.updateRole=this.responseValue.role
      this.updateDob=this.responseValue.dob
      this.updateAge=this.responseValue.age
      this.updateGender=this.responseValue.gender
      this.updateBlood=this.responseValue.blood
      this.updateEmail=this.responseValue.email
      this.updatePassword=this.responseValue.password
      this.updateMobile=this.responseValue.mobile
      this.updateStatus=this.responseValue.status
      this.updatePhoto=this.responseValue.photo
      this.selectedFile= this.updatePhoto
    })
  }, 0);
    this.editId= id;
  }
  
  fileUpdate(event:any){
    if(event.target.files[0]!=null){
      this.selectedFile= event.target.files[0];
    }    
  }
  updateUser(){
    let uploadData= new FormData()
    // uploadData.append('file',this.selectedFile,this.selectedFile.name)
    let userData={
      id: this.editId,
      name: this.updateName,
      surname: this.updateSurname,
      role: this.updateRole,
      dob: this.updateDob,
      age: this.updateAge,
      gender: this.updateGender,
      blood: this.updateBlood,
      email: this.updateEmail,
      password: this.updatePassword,
      mobile: this.updateMobile,
      status: this.updateStatus,
      photo: this.selectedFile?.name
    }
    localStorage.setItem("User",JSON.stringify(userData))
    this.toastr.success('Successfully updated!', 'Updated');
    this._api.updateData(userData,userData.id).subscribe(response =>{
      this.getEmployeeDetails();
      this.user=response

    })
    
  }
  
  
  

}