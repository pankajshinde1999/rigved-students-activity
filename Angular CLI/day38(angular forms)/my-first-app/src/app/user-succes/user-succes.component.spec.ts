import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSuccesComponent } from './user-succes.component';

describe('UserSuccesComponent', () => {
  let component: UserSuccesComponent;
  let fixture: ComponentFixture<UserSuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSuccesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
