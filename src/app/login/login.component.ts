import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private readonly loginService: LoginService) {
  }

  login(username: string, password: string): void {
    this.loginService.login(username, password).subscribe(result => console.log(result));
  }

  ngOnInit(): void {
  }

}
