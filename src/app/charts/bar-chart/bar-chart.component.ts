import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  constructor(private _api: ApiService, private datePipe: DatePipe) { }

  public employeeData: any;
  public chart: any;
  public name: any = [];
  public leave: any = [];

  ngOnInit(): void {
    this.createChart();
  }
  createChart() {
    this._api.getEmployeeDetails().subscribe(response => {
      this.employeeData = response;

      let today = new Date();
      let current_week = this.datePipe.transform(today, 'w')


      for (let i = 0; i < this.employeeData.length; i++) {
        // console.log("name",this.employeeData[i].name)
        // this.name.push(this.employeeData[i].name);
        // this.leave.push(this.employeeData[i].leave)

        if (this.employeeData[i].currentWeek != current_week) {
          this.employeeData[i].previousWeekLeave = this.employeeData[i].currentWeekLeave;
          this.employeeData[i].currentWeekLeave = 0;
          this.employeeData[i].currentWeek = current_week;


        }
        let obj = {
          previousWeekLeave: this.employeeData[i].previousWeekLeave,
          currentWeekLeave: this.employeeData[i].currentWeekLeave,
          currentWeek: this.employeeData[i].currentWeek
        }
        this.employeeData[i].leaveDetails?.forEach((element :any) => {
          console.log("ELEMNT",element)
          // if(element.start.include(today)){
          //   console.log("ELEMNT",element)
          // }
        });
        if (this.employeeData[i].previousWeekLeave != 0) {
          this.name.push(this.employeeData[i].name);
          this.leave.push(this.employeeData[i].previousWeekLeave)
        }
        let id = this.employeeData[i].id
        console.log("LEAVES:", this.employeeData[i].previousWeekLeave)
        // this._api.leaveDetails(obj, id).subscribe((res) => {
        //   console.log(res, 'update leave');

        // })
      }

      this.chart = new Chart("MyChart2", {
        type: 'bar', //this denotes tha type of chart
        data: {// values on X-Axis
          labels: this.name,
          datasets: [{
            label: 'Leaves taken by employees in the past week',
            data: this.leave,
            backgroundColor: [
              'orange'
            ],
          }],
        },
        // options: {
        //   aspectRatio: 2.5
        // }

      });
    })
  }
}
