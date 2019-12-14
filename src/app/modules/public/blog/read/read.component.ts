import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Blog } from 'src/app/data/schema/blog.model';
import { User } from 'src/app/data/schema/user.model';

import { BlogService } from 'src/app/data/service/blog.service';
import { UserService } from 'src/app/data/service/user.service';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  blog: Blog;
  user: User;
  isIndex: false;
  blogId: number;


  constructor(  private blogService: BlogService,
                private userService: UserService,
                private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.blogId = +params['id'];
        this.blog = this.blogService.getBlog(this.blogId);
        this.user = this.userService.getUser(this.blog.userId);
      }
    );
  }

}
