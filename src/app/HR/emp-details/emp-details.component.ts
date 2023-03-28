import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent {

  public employeeData: any;
  constructor(private _api: ApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getEmployeeDetails();
  }

  getEmployeeDetails() {
    this._api.getEmployeeDetails().subscribe(response => {
      this.employeeData = response;
    })
  }


  //UPDATE Function
  public updateName: any;
  public updateSurname: any;
  public updateRole: any;
  public updateDob: any;
  public updateAge: any;
  public updateGender: any;
  public updateBlood: any;
  public updateEmail: any;
  public updatePassword: any;
  public updateMobile: any;
  public updateStatus: any;
  public updatePhoto: any;

  public editId = '';

  public responseValue: any
  public selectedFile: any

  editUser(id: any) {
    setTimeout(() => {
      this._api.getEmployeeDetailsbyID(id).subscribe(res => {
        this.responseValue = res;

        this.updateName = this.responseValue.name
        this.updateSurname = this.responseValue.surname
        this.updateRole = this.responseValue.role
        this.updateDob = this.responseValue.dob
        this.updateAge = this.responseValue.age
        this.updateGender = this.responseValue.gender
        this.updateBlood = this.responseValue.blood
        this.updateEmail = this.responseValue.email
        this.updatePassword = this.responseValue.password
        this.updateMobile = this.responseValue.mobile
        this.updateStatus = this.responseValue.status
        this.updatePhoto = this.responseValue.photo
        this.selectedFile = this.updatePhoto
      })
    }, 0);
    this.editId = id;

  }
  fileUpdate(event: any) {
    if (event.target.files[0] != null) {
      this.selectedFile = event.target.files[0];
    }
  }
  updateUser() {
    // let uploadData= new FormData()

    let userData = {
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
    this.toastr.success('Successfully updated!', 'Updated');
    this._api.updateData(userData, userData.id).subscribe(response => {
      this.getEmployeeDetails();
      console.log("IMAGE:", response)

    })

  }


  //ADD Function
  public addName: any;
  public addSurname: any;
  public addRole: any;
  public addDob: any;
  public addAge: any;
  public addGender: any;
  public addBlood: any;
  public addEmail: any;
  public addPassword: any;
  public addMobile: any;
  public addStatus: any;
  public addPhoto: any;
  public addLeave:any=0;
  public addPreviousWeekLeave:any =0;
  public addCurrentWeekLeave:any =0;
  public addCurrentWeek:any =0;

  public addLeaveDetails:any = [{}]
  addEmployee() {
    let addData = {
      name: this.addName,
      surname: this.addSurname,
      role: this.addRole,
      dob: this.addDob,
      age: this.addAge,
      gender: this.addGender,
      blood: this.addBlood,
      email: this.addEmail,
      password: this.addPassword,
      mobile: this.addMobile,
      status: this.addStatus,
      photo: this.addPhoto,
      leave: this.addLeave,
      leaveDetails: this.addLeaveDetails,
      previousWeekLeave: this.addPreviousWeekLeave,
      currentWeekLeave: this.addCurrentWeekLeave,
      currentWeek: this.addCurrentWeek,

    }
    this.toastr.success('Successfully added!', 'Added');
    this._api.addData(addData).subscribe(response => {
      this.getEmployeeDetails();

    })
  }

  //DELETE FUNCTION
  public deleteId: any;

  deleteUser(id: any) {
    this.deleteId = id;
    let userData = {
      id: this.deleteId
    }
    if (confirm("This action cannot be undone. Do you really want to delete these records? ")) {
      this.toastr.warning('Successfully deleted!', 'Deleted');

      this._api.deleteData(userData.id).subscribe(response => {

        this.getEmployeeDetails();
      })
    }
  }
}
