import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfDemo1Component } from './mdf-demo1.component';

describe('MdfDemo1Component', () => {
  let component: MdfDemo1Component;
  let fixture: ComponentFixture<MdfDemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdfDemo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdfDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
