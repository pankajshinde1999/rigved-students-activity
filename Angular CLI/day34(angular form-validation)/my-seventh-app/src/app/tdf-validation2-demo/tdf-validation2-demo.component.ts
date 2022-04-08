import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-validation2-demo',
  templateUrl: './tdf-validation2-demo.component.html',
  styleUrls: ['./tdf-validation2-demo.component.css']
})
export class TdfValidation2DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  handleSubmit(formValue: any): void {
    console.log(formValue);
  }

}
