import { NgModule } from '@angular/core';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ReadComponent } from './read/read.component';
import { BlogComponent } from './blog.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        BlogComponent,
        ReadComponent
    ],
    imports: [
        CommonModule,
        BlogRoutingModule,
        SharedModule
    ]
})
export class BlogModule { }