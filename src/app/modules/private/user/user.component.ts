import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/_model/user.model';

import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/auth/auth.service';

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
