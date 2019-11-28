import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) { }
  
  loginForm: FormGroup;
  usernameFound = false;
  user: User;

  ngOnInit() {
    this.loginForm = this.fb.group({
      'username': [null, Validators.required, this.userFound.bind(this) ],
      'password': [null, Validators.required, this.passwordMatch.bind(this)]
    });
  }

  onSubmit() {
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      this.loginForm.reset;
      this.router.navigate(['user', this.user.id]);
    } else {
      this.loginForm.reset;
      return;
    }
  }

  // This example shows in case you are reaching to a web server or in a asynchronous operation
  userFound(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.userService.getUsernames().indexOf(control.value) !== -1) {
          this.usernameFound = true;
          this.user = this.userService.getUserByUsername(control.value);
          resolve(null);
        } else {
          resolve({'userNotFound': true});
        }
      }, 1500);
    });
    return promise;
  }

  passwordMatch(control: FormControl): Promise<any> | Observable<any> {
    if (this.usernameFound) {
      const promise = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if (this.user.password === control.value) {
            resolve(null);
          } else {
            resolve({'passwordIncorrect': true});
          }
        }, 1500);
      });
      return promise;
      
    } else {
      const promise = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          resolve({'passwordIncorrect': true});
        }, 1500);
      });      
      return promise;

    }
  }

}
