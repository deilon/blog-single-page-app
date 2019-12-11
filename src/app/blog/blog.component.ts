import { Component, OnInit } from '@angular/core';
import { Blog } from '../_model/blog.model';
import { BlogService } from '../_services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
