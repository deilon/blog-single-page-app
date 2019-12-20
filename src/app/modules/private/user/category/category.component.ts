import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogService } from 'src/app/data/service/blog.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  categoryBlogs: Array<object>;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        let categoryName = params['name'];
        this.categoryBlogs = this.blogService.getBlogsByCategory(categoryName);
      }
    );
  }


}
