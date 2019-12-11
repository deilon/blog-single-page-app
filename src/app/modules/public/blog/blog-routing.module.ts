import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { ReadComponent } from './read/read.component';

const blogRoutes: Routes = [
    { path: '', component: BlogComponent, children: [
        { path: ':id/read', component: ReadComponent }
    ] },
]

@NgModule({
    imports: [RouterModule.forChild(blogRoutes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }