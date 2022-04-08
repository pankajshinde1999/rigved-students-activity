import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfValidation2DemoComponent } from './tdf-validation2-demo.component';

describe('TdfValidation2DemoComponent', () => {
  let component: TdfValidation2DemoComponent;
  let fixture: ComponentFixture<TdfValidation2DemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdfValidation2DemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfValidation2DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
