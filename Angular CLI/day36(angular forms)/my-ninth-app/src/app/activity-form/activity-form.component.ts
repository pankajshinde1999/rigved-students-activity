import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {
  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
  }

  profile: FormGroup = this.builder.group({
    firstname: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    lastname: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    address: this.builder.group({
      state: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', Validators.required]
    }),
  });

  handleSubmit() {
    console.log(this.profile.value);
    this.profile.reset({});
  }

}