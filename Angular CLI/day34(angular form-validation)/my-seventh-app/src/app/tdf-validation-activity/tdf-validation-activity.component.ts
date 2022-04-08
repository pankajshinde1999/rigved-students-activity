import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-validation-activity',
  templateUrl: './tdf-validation-activity.component.html',
  styleUrls: ['./tdf-validation-activity.component.css']
})
export class TdfValidationActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstname: string = '';
  lastname: string = '';
  gender: string = '';
  skills: string = '';
  qualification: string = '';
  address: string = '';

  formSubmit(formValue: any): void {
    console.log(formValue);
    this.firstname = formValue.firstname;
    this.lastname = formValue.lastname;
    this.gender = formValue.gender;
    this.skills = formValue.skills;
    this.qualification = formValue.Qualification;
    this.address = formValue.address;
  }
}
