import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { ProfileBlogsComponent } from './profile-blogs/profile-blogs.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';

import { AuthGuard } from 'src/app/core/service/auth-guard.service'; 

const usersRoutes: Routes = [
    { path: '', component: UserComponent, canActivateChild: [AuthGuard], children: [
        { path: '', component: ProfileBlogsComponent },
        { path: 'blogs', component: ProfileBlogsComponent },
        { path: 'update', component: ProfileUpdateComponent }
    ] },
]

@NgModule({
    imports: [RouterModule.forChild(usersRoutes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class UserRouingModule { }