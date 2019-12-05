import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ReadComponent } from './blog/read/read.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserRegistrationComponent } from './auth/user-registration/user-registration.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { UserComponent } from './user/user.component';
import { ProfileBlogsComponent } from './user/profile-blogs/profile-blogs.component';
import { ProfileUpdateComponent } from './user/profile-update/profile-update.component';

import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'blog', /*canActivateChild: [AuthGuard],*/ component: BlogComponent, children: [
        { path: ':id/read', component: ReadComponent }
    ] },
    { path: 'profile', component: UserComponent, canActivateChild: [AuthGuard], children: [
        { path: '', component: ProfileBlogsComponent },
        { path: 'blogs', component: ProfileBlogsComponent },
        { path: 'update', component: ProfileUpdateComponent }
    ] },
    { path: 'signup', component: UserRegistrationComponent },
    { path: 'login', component: UserLoginComponent },

    { path: 'page-not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})

export class AppRoutingModule {

}

