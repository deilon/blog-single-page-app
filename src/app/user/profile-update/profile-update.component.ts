import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { User } from '../user.model';

import { DialogService } from 'src/app/dialog/dialog.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  constructor(private fb: FormBuilder, 
              private dialogService: DialogService,
              private userService: UserService) { }

  authUser: User = JSON.parse(localStorage.getItem('authUser'));
  genders = ['Male', 'Female'];
  profileSettings: FormGroup;
  genderForm: FormGroup;

  ngOnInit() {

    this.profileSettings = this.fb.group({
      'basic': this.fb.group({
        'fullname': [this.authUser.name, [Validators.required, Validators.pattern(/^[ A-Za-z]([ A-Za-z]+)*$/)]],
        'username': [this.authUser.username, Validators.required],
        'website': [this.authUser.website],
        'bio': [this.authUser.bio]
      }),
      'private': this.fb.group({
        'phone': [this.authUser.phone]
      })
    })

    this.genderForm = this.fb.group({
      'gender': [this.authUser.gender, Validators.required]
    })

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
