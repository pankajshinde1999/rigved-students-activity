import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { BindingActivityComponent } from './binding-activity/binding-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    BindingActivityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
