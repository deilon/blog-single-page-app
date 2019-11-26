import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from 'src/app/blog/blog.service';
import { Blog } from 'src/app/blog/blog.model';
import { Router } from '@angular/router';

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
