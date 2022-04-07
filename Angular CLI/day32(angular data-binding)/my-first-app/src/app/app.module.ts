import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsRecordComponent } from './students-record/students-record.component';
import { ProductsRecordComponent } from './products-record/products-record.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsRecordComponent,
    ProductsRecordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
