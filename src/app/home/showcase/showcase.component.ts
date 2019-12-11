import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Blog } from 'src/app/blog/blog.model';

import { BlogService } from 'src/app/_services/blog.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  blogs: Blog[];

  constructor(private blogService: BlogService,
              private router: Router) { }

  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
  }

}
