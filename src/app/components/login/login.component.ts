import { Component } from '@angular/core';
import {FormGroup, FormBuilder, AbstractControl} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public userForm: FormGroup;
  email:string = ""
  constructor(private fb:FormBuilder){
    this.userForm = this.fb.group({
      email: ""
    });
  }
  register(){
    this.email = this.userForm.get('email')?.value
    console.log(this.email)
    const user = {
      // email: this.email,
    }
  }

}
