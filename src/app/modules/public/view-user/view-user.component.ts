import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';

import { User } from 'src/app/data/schema/user.model';
import { Blog } from 'src/app/data/schema/blog.model';

import { BlogService } from 'src/app/data/service/blog.service'; 
import { UserService } from 'src/app/data/service/user.service';

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
