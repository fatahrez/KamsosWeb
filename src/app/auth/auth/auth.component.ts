import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({    
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  authForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.authForm = this.fb.group({
      'email': [' ', Validators.required ],
      'password': [' ', Validators.required ]
    });
   }

  submitForm() {
    let credentials = this.authForm.value;
    console.log(credentials);
    
  }
}
