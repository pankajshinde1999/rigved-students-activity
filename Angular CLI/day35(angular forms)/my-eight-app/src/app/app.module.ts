import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MdfDemoComponent } from './mdf-demo/mdf-demo.component';
import { MdfDemo1Component } from './mdf-demo1/mdf-demo1.component';
import { MdfDemo2Component } from './mdf-demo2/mdf-demo2.component';

@NgModule({
  declarations: [
    AppComponent,
    MdfDemoComponent,
    MdfDemo1Component,
    MdfDemo2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
