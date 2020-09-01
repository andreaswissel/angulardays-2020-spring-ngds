import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {FormGroupModule} from '../form-group/form-group.module';
import {InputModule} from '../input/input.module';
import {ButtonModule} from '../button/button.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormGroupModule,
    InputModule,
    ButtonModule
  ]
})
export class LoginModule { }
