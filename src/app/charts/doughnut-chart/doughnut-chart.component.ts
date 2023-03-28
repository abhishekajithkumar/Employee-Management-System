import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent {

  constructor(private _api: ApiService) { }

  ngOnInit(): void {

    this.createChart();
  }

  public employeeData: any;
  public active: number = 0;
  public inactive: number = 0;

  public chart: any;
  createChart() {
    this._api.getEmployeeDetails().subscribe(response => {
      this.employeeData = response;
      for (let i = 0; i < this.employeeData.length; i++) {
        if (this.employeeData[i].status == "Active") {
          this.active++;
          
        }
        else if (this.employeeData[i].status == "Inactive") {
          this.inactive++;
        }
      }
      this.chart = new Chart("MyChart1", {
        type: 'doughnut', //this denotes tha type of chart
  
        data: {// values on X-Axis
          labels: ['Active Employees', 'Inactive Employees',],
          datasets: [{
            label: 'No. of Employees',
            data: [this.active, this.inactive],
            backgroundColor: [
              'green',
              'red',
            ],
            hoverOffset: 4
          }],
        },
        // options: {
        //   aspectRatio: 2.5
        // }
  
      });
    })    
  }
}
