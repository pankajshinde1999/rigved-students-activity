import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mdf-demo1',
  templateUrl: './mdf-demo1.component.html',
  styleUrls: ['./mdf-demo1.component.css']
})
export class MdfDemo1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  firstname = new FormControl('');
  


}
