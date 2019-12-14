import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/data/schema/user.model';

import { UserService } from 'src/app/data/service/user.service';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  
  id: number;

  constructor(private userService: UserService,
              private authService: AuthService) { }

  ngOnInit() {
    let authUser = JSON.parse(localStorage.getItem('authUser'));
    this.user = this.userService.getUserByUsername(authUser.username);
  }

  logout() {
    this.authService.logoutUser();
  }

}
