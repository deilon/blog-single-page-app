import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/data/schema/blog.model';
import { BlogService } from 'src/app/data/service/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredBlog: Blog;
  isIndex = true;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.featuredBlog = this.blogService.getBlog(0);
  }

}
