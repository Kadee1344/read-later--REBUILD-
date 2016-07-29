import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  moduleId: module.id,
  templateUrl: 'signin.component.html',
  styleUrls: ['signin.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;
  error = false;
  errorMessage = '';

  constructor(private fb:FormBuilder, private authService: AuthService) { }

  onSignin() {
    this.authService.signinUser(this.myForm.value);
  }

  ngOnInit():any {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
