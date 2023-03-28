import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-emp-leave',
  templateUrl: './emp-leave.component.html',
  styleUrls: ['./emp-leave.component.scss']
})
export class EmpLeaveComponent implements OnInit{
  
  constructor(private _api: ApiService) { }

  userJSON:any;
  user: any;
  arr: any=[{}] 
  ngOnInit(): void {
    this.userJSON=localStorage.getItem("User")
    this.user=JSON.parse(this.userJSON);
    this.arr=this.user.leaveDetails;
    console.log("ARRAY",this.arr)
  }

  public leaveType:any;
  public days:any;
  public startdate:any;
  public enddate:any;
  public reason:any;

  applyLeave(id:any){
    let obj={
      leaveType: this.leaveType,
      days:this.days,
      start: this.startdate,
      end: this.enddate,
      reason:this.reason
    }
    this.user.leave=this.user.leave+this.days
    console.log("COUNT INCREASE", this.user.leave)

    this.arr.push(obj)
    let leaveData = {
      leave:this.user.leave,
      leaveDetails:this.arr
    }
    console.log("LEAVESSSS",leaveData)

    this._api.leaveDetails(leaveData,id).subscribe(response => {
      console.log("LEAVE DETAILS", response)
      localStorage.setItem("User",JSON.stringify(response))

    })


  }
}
