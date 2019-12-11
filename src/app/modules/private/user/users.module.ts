import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 

import { ProfileBlogsComponent } from './profile-blogs/profile-blogs.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { UserRouingModule } from './user-routing.module';

@NgModule({
    declarations: [
        ProfileBlogsComponent,
        ProfileUpdateComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UserRouingModule
    ]
})
export class UsersModule { }