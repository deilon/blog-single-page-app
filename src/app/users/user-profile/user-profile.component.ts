import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { User } from '../user.model';
import { Blog } from 'src/app/blog/blog.model';
import { BlogService } from 'src/app/blog/blog.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User;
  userBlogs: Blog[];
  id: number;

  constructor(private userService: UserService,
              private blogService: BlogService,
              private authService: AuthService) { }

  ngOnInit() {
    let authUser = JSON.parse(localStorage.getItem('authUser'));
    this.user = this.userService.getUserByUsername(authUser.username);
    this.userBlogs = this.blogService.getUserBlogs(authUser.id);
  }

  logout() {
    this.authService.logoutUser();
  }

}
