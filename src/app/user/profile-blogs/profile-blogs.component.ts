import { Component, OnInit } from '@angular/core';

import { Blog } from 'src/app/blog/blog.model';
import { BlogService } from 'src/app/blog/blog.service';

@Component({
  selector: 'app-profile-blogs',
  templateUrl: './profile-blogs.component.html',
  styleUrls: ['./profile-blogs.component.css']
})
export class ProfileBlogsComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  userBlogs: Blog[];

  ngOnInit() {
    let authUser = JSON.parse(localStorage.getItem('authUser'));
    this.userBlogs = this.blogService.getUserBlogs(authUser.id);
  }

}
