import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserStoreComponent } from './user-store/user-store.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RegisterSucessComponent } from './register-sucess/register-sucess.component';
let route : Routes =[
  {path:"",component:UserStoreComponent},
  {path:"store",component:UserStoreComponent},
  {path:"usersList",component:UserListComponent},
  {path:"delete",component:UserDeleteComponent},
  {path:"success/:uid",component:RegisterSucessComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserStoreComponent,
    UserDeleteComponent,
    RegisterSucessComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
