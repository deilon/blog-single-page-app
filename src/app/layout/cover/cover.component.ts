import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/blog/blog.model';
import { User } from 'src/app/users/user.model';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  @Input() blog: Blog;
  @Input() user: User;
  @Input() isIndex: boolean;

  constructor() { }

  ngOnInit() {
  }

}
