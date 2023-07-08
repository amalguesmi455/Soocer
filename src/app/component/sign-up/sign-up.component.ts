import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../confirmPwd';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupForm !:FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit (): void{
  this.signupForm= this.formBuilder.group({
    firstName:['',[Validators.minLength(3),Validators.required]],
    lastName:['',[Validators.minLength(3),Validators.required]],
    email:['',[Validators.minLength(3),Validators.required]],
    password:['',Validators.minLength(3)],
   },

  )
  }

  signup(){
  console.log('here into signupform', this.signupForm.value)
  }
}
