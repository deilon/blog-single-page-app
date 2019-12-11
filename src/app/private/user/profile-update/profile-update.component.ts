import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { User } from '../user.model';

import { DialogService } from 'src/app/dialog/dialog.service';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  constructor(private fb: FormBuilder, 
              private dialogService: DialogService,
              private userService: UserService) { }

  regexUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
  regexPhone = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  authUser: User = JSON.parse(localStorage.getItem('authUser'));
  takenUsernames = this.userService.getAllUsersExceptAuth(this.authUser.id);
  genders = ['Male', 'Female'];
  profileSettings: FormGroup;
  genderForm: FormGroup;

  ngOnInit() {

    this.profileSettings = this.fb.group({
      'basic': this.fb.group({
        'fullname': [this.authUser.name, [Validators.required, Validators.pattern(/^[ A-Za-z]([ A-Za-z]+)*$/)]],
        'username': [this.authUser.username, [Validators.required, this.usernameUnavailable.bind(this), Validators.pattern(/^[A-Za-z0-9_@./#&+-]*$/)]],
        'website': [this.authUser.website, this.urlValidityCheck.bind(this)],
        'bio': [this.authUser.bio]
      }),
      'private': this.fb.group({
        'phone': [this.authUser.phone, this.phoneValidityCheck.bind(this)]
      })
    })

    this.genderForm = this.fb.group({
      'gender': [this.authUser.gender, Validators.required]
    })

  }

  onProfileSave() {
    console.log(this.profileSettings);
    if (this.profileSettings.valid) {
      const user    = this.userService.getUser(this.authUser.id);
      user.name     = this.profileSettings.value.basic.fullname;
      user.username = this.profileSettings.value.basic.username;
      user.website  = this.profileSettings.value.basic.website;
      user.bio      = this.profileSettings.value.basic.bio;
      user.phone    = this.profileSettings.value.private.phone;
      this.profileSettings.reset;
    }
    this.profileSettings.reset;
    return;
  }

  urlValidityCheck(control: AbstractControl): {[s: string]: boolean} {
    let providedInput = control.value;
    if (providedInput !== '') {
      if (!this.regexUrl.test(providedInput)) {
        return {'websiteInvalid': true}
      }
    }
    return null
  }

  phoneValidityCheck(control: AbstractControl): {[s: string]: boolean} {
    let providedInput = control.value;
    if (providedInput !== '') {
      if (!this.regexPhone.test(providedInput)) {
        return {'websiteInvalid': true}
      }
    }
    return null
  }

  usernameUnavailable(control: AbstractControl): {[s: string]: boolean} | null {
    if (this.takenUsernames.indexOf(control.value) !== -1) {
      return {'nameNotAvailable': true}
    }
    return null;
  }

  onGenderSubmit(dialogId: string) {
    if(this.genderForm.valid) {
      let newGender = this.genderForm.value.gender;
      this.changeGender(this.genders[newGender]);
    }
    this.closeGenderDialog(dialogId)
  }

  changeGender(name: string) {
    this.userService.getUser(this.authUser.id).gender = name;

    // also update on the authUser storage
    localStorage.setItem('authUser', JSON.stringify(this.userService.getUser(this.authUser.id)));

    // get update authUser storage
    this.authUser = JSON.parse(localStorage.getItem('authUser'));
  }

  openGenderDialog(id: string) {
    this.dialogService.open(id);
  }

  closeGenderDialog(id: string) {
    this.dialogService.close(id);
}
}
