import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AccountRoutingModule } from './account-routing.module';
import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account.component';


@NgModule({
  declarations: [
    CreateComponent,
    LoginComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AccountModule { }
