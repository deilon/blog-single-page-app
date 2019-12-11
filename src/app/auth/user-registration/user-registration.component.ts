import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

import { User } from '../../private/user/user.model';

import { UserService } from '../../_services/user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private router: Router,
              private fb: FormBuilder,
              private userService: UserService,
              private authService: AuthService) { }

  regForm: FormGroup;
  takenUsernames = this.userService.getUsernames();
  submitted = false;

  ngOnInit() {

    this.regForm = this.fb.group({
      'nameGroup': this.fb.group({
        'fullname': [null, [Validators.required, Validators.pattern(/^[ A-Za-z]([ A-Za-z]+)*$/)]],
        'username': [null, [Validators.required, 
          this.usernameUnavailable.bind(this), Validators.pattern(/^[A-Za-z0-9_@./#&+-]*$/)]]
      }),
      
      'passwordGroup': this.fb.group({
        'password': [null, [Validators.required, 
          Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
        'confirmationPassword': [null, Validators.required]
      }, { validator: this.mustMatch('password', 'confirmationPassword') }) 
    });

  }

  onSubmit() {
    console.log(this.regForm);
    this.submitted = true;
    if (this.regForm.valid) {
      let username = this.regForm.value.nameGroup.username;
      let password = this.regForm.value.passwordGroup.password;
      this.userService.addUser(this.initUser());
      this.authService.loginUser(username, password);
      this.regForm.reset;
    } 
      this.regForm.reset;
      return;    
  }

  usernameUnavailable(control: AbstractControl): {[s: string]: boolean} | null {
    if (this.takenUsernames.indexOf(control.value) !== -1) {
      return {'nameNotAvailable': true}
    }
    return null;
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

  private initUser(): User {
    return new User(
      this.userService.getUserLastId() + 1, 
      this.regForm.get('nameGroup.username').value,     // username
      this.regForm.get('passwordGroup.password').value, // password
      this.regForm.get('nameGroup.fullname').value,     // name
      '', // web
      '', // bio
      '', // phone
      '', // gender 
      '../../assets/images/users/user.jpeg' // photo/default
    )
  }

}

