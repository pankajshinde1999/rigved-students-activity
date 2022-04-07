import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  username: string = "sachin";
  usernameArray: string[] = ["alex", "charles", "zaheer", "yuvraj"];
  num: number = 0;

}
