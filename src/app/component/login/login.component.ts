import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm !:FormGroup
  user:any={};
  constructor() { }

  ngOnInit (): void{

  }

  login(){
  console.log('here into login', this.user)
  }
}

