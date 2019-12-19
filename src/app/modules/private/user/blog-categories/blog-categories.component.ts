import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/data/service/blog.service';

@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.css']
})
export class BlogCategoriesComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  availableCategories = this.blogService.getAvailableCategories();

  ngOnInit() {
  }


  getBlogs(category: string) {
   return this.blogService.getBlogsByCategory(category);
  }


}
