import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mdf-demo2',
  templateUrl: './mdf-demo2.component.html',
  styleUrls: ['./mdf-demo2.component.css']
})
export class MdfDemo2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  lastname = new FormControl('');
}
