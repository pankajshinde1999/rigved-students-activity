import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-record',
  templateUrl: './students-record.component.html',
  styleUrls: ['./students-record.component.css']
})
export class StudentsRecordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  students = [
    { rollNo: 1, name: "ajay", marks: 40 },
    { rollNo: 2, name: "vijay", marks: 30 },
    { rollNo: 3, name: "manu", marks: 60 },
    { rollNo: 4, name: "sachin", marks: 20 },
    { rollNo: 5, name: "amit", marks: 70 },
    { rollNo: 6, name: "zaheer", marks: 80 }
  ]
  apply: boolean = true;
  applycss() {
    this.apply = !this.apply
  }

}
