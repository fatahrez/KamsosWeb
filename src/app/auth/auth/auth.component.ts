import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Errors, UserService} from '../../core';
import {MaterialModule} from '../../material';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authType: String = '';
  title: String = '';
  isSubmitting: boolean = false;
  authForm: FormGroup;
  errors: Errors = {errors: {}};

  hide = true

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.authForm = this.fb.group({
      'email': ['', Validators.required ],
      'password': ['', Validators.required ]
    });
   }

   ngOnInit(){
     this.route.url.subscribe(data => {

       this.authType = data[data.length - 1].path;
       this.title = (this.authType === 'login') ? 'Sign in' : 'Sign Up';
       if (this.authType === 'register') {
         this.authForm.addControl('username', new FormControl('', Validators.required));
         this.authForm.addControl('phone_number', new FormControl('', Validators.required));
       }
     });

   }

  submitForm() {
    this.isSubmitting = true;
    this.errors = {errors: {}};

    const credentials = this.authForm.value;
    this.userService.attemptAuth(this.authType, credentials)
    .subscribe(
      data => this.router.navigateByUrl('/'),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );

  }
}
