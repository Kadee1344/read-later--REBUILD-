import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  moduleId: module.id,
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  error = false;
  errorMessage = '';


  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): any {
    this.myForm = this.fb.group({
      email: ['', Validators.compose([
      Validators.required,
      this.isEmail
    ])],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.compose([
      Validators.required,
      this.isEqualPassword.bind(this)
    ])],
    });
  }

  onSignup() {
    this.authService.signupUser(this.myForm.value);
  }

  isEmail(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return {noEmail: true};
    }
  }

  isEqualPassword(control: FormControl): {[s: string]: boolean} {
    if (!this.myForm) {
      return {passwordsNotMatch: true};
    }
    if (control.value !== this.myForm.controls['password'].value) {
      return {passwordsNotMatch: true};
    }
  }

}
