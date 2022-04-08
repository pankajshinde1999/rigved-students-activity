import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfValidationActivityComponent } from './tdf-validation-activity.component';

describe('TdfValidationActivityComponent', () => {
  let component: TdfValidationActivityComponent;
  let fixture: ComponentFixture<TdfValidationActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdfValidationActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfValidationActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
