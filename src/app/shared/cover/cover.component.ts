import { Component, OnInit, Input } from '@angular/core';

import { Blog } from 'src/app/data/schema/blog.model';
import { User } from 'src/app/data/schema/user.model';

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
