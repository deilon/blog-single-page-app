import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { SharedModule } from 'src/app/shared/shared.module';
import { UserRouingModule } from './user-routing.module';
import { EllipsisModule } from 'ngx-ellipsis';

import { UserComponent } from './user.component';
import { ProfileBlogsComponent } from './profile-blogs/profile-blogs.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';

@NgModule({
    declarations: [
        UserComponent,
        ProfileBlogsComponent,
        ProfileUpdateComponent,
        BlogCategoriesComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UserRouingModule,
        SharedModule,
        EllipsisModule
    ]
})
export class UsersModule { }