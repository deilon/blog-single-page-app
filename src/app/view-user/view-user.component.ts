import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';

import { User } from '../user/user.model';
import { Blog } from '../blog/blog.model';
import { UserService } from '../user/user.service';
import { BlogService } from '../blog/blog.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private blogService: BlogService) { }

  user: User;
  blogs: Blog[];
  username: string;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.username = params['username'];
        this.user = this.userService.getUserByUsername(this.username);
        if (!this.user) {
          this.router.navigate(['/page-not-found']);
        }
        this.blogs = this.blogService.getUserBlogs(this.user.id);
      }
    )
  }



}
