import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-size',
  templateUrl: './cart-size.component.html',
  styleUrls: ['./cart-size.component.css']
})
export class CartSizeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  num: number = 0;
  p2: number = 0;

}
