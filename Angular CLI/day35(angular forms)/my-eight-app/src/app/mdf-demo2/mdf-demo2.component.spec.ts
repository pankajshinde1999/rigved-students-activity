import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfDemo2Component } from './mdf-demo2.component';

describe('MdfDemo2Component', () => {
  let component: MdfDemo2Component;
  let fixture: ComponentFixture<MdfDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdfDemo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdfDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
