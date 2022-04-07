import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-activity',
  templateUrl: './binding-activity.component.html',
  styleUrls: ['./binding-activity.component.css']
})
export class BindingActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  firstname: string | undefined=undefined
  lastname: string | undefined=undefined
  array:Array<{first: string, last: string}>=[]
  save(firstName: string, lastName: string){
    this.firstname=firstName;
    this.lastname=lastName;
    let object={first:this.firstname,last:this.lastname}
    this.array.push(object)
  }

}
