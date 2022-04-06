import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-record',
  templateUrl: './products-record.component.html',
  styleUrls: ['./products-record.component.css']
})
export class ProductsRecordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products = [
    {name: "mobile", brand: ["vivo", "oppo", "oneplus","redmi"]},
    {name: "laptop", brand: ["HP", "dell", "lenovo", "acer","Macbook","asus"]}
  ]
 
  }
