import { Component} from '@angular/core';
import {UserLoginData} from '../model/userlogin.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() { }

  login = new UserLoginData();

  save(loginForm:NgForm) {
    console.log(loginForm);
    console.log('save data ' +JSON.stringify(loginForm.value));
  }
}
