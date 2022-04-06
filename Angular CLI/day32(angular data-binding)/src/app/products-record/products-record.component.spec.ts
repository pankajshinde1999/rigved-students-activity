import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsRecordComponent } from './products-record.component';

describe('ProductsRecordComponent', () => {
  let component: ProductsRecordComponent;
  let fixture: ComponentFixture<ProductsRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
