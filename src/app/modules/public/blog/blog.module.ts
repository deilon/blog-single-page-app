import { NgModule } from '@angular/core';
import { BlogRoutingModule } from './blog-routing.module';

import { ReadComponent } from './read/read.component';
import { BlogComponent } from './blog.component';

@NgModule({
    declarations: [
        BlogComponent,
        ReadComponent
    ],
    imports: [
        BlogRoutingModule
    ]
})
export class BlogModule { }