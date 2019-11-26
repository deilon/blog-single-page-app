import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../user.model';
import { Blog } from 'src/app/blog/blog.model';
import { BlogService } from 'src/app/blog/blog.service';

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
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.user = this.userService.getUser(this.id);
        this.userBlogs = this.blogService.getUserBlogs(this.id);
        if (!this.user) {
          this.router.navigate(['/page-not-found']);
        }
      }
    );
  }



}
