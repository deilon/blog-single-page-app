import { NgModule } from '@angular/core';

import { ReadComponent } from './read/read.component';
import { BlogComponent } from './blog.component';

@NgModule({
    declarations: [
        BlogComponent,
        ReadComponent
    ]
})
export class BlogModule { }