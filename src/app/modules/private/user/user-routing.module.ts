import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { ProfileBlogsComponent } from './profile-blogs/profile-blogs.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';
import { CategoryComponent } from './category/category.component';
import { BlogFormComponent } from './blog-form/blog-form.component';

import { AuthGuard } from 'src/app/core/service/auth-guard.service'; 

const usersRoutes: Routes = [
    { path: '', component: UserComponent, canActivateChild: [AuthGuard], children: [
        { path: '', component: ProfileBlogsComponent },
        { path: 'blogs', component: ProfileBlogsComponent },
        { path: 'update', component: ProfileUpdateComponent },
        
    ] },
    { path: 'blog-categories', component: BlogCategoriesComponent, canActivate: [AuthGuard] },
    { path: 'category/:name', component: CategoryComponent, canActivate: [AuthGuard] },
    { path: 'blog/new', component: BlogFormComponent, canActivate: [AuthGuard] },
    { path: 'blog/new/:category', component: BlogFormComponent, canActivate: [AuthGuard] },
    { path: 'blog/:id/edit', component: BlogFormComponent, canActivate: [AuthGuard] }

]

@NgModule({
    imports: [RouterModule.forChild(usersRoutes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class UserRouingModule { }