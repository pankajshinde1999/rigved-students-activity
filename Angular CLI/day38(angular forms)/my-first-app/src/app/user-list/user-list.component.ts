import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserlistComponent implements OnInit {
  items: undefined | any[]=undefined
  constructor(public service: ServiceService) { }

  ngOnInit(): void {
    this.items=this.service.getUser()
  }

}