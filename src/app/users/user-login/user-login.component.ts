import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  
  loginForm: FormGroup;
  
  ngOnInit() {
    this.loginForm = this.fb.group({
      'username': [null],
      'password': [null],
    });
  }

  onSubmit() {

  }

}
