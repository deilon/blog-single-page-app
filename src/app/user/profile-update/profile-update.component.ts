import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  profileSettings: FormGroup;
  authUser: User = JSON.parse(localStorage.getItem('authUser'));

  ngOnInit() {

    this.profileSettings = this.fb.group({
      'basic': this.fb.group({
        'fullname': [this.authUser.name, [Validators.required, Validators.pattern(/^[ A-Za-z]([ A-Za-z]+)*$/)]],
        'username': [this.authUser.username, Validators.required],
        'website': [this.authUser.website],
        'bio': [this.authUser.bio]
      }),
      'private': this.fb.group({
        'phone': [this.authUser.phone],
        'gender': [this.authUser.gender]
      })
    })

  }


}
