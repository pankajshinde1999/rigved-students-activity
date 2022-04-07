import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  emp = [
    { name : "alex", gender : "male", address : { state : "KA", city : "BLR" } },
    { name : "jennifer", gender : "female", address : { state : "MH", city : "MBI" } },
    { name : "zaheer", gender :  "male", address : { state : "MH", city : "PUN" } },
    { name : "pooja", gender : "female", address : { state : "MH", city : "MBI" } },
    { name : "raj", gender : "male", address : { state : "TN", city : "CHN" } }
  ];

}
