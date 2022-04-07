import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSizeComponent } from './cart-size.component';

describe('CartSizeComponent', () => {
  let component: CartSizeComponent;
  let fixture: ComponentFixture<CartSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
