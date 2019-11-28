import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ReadComponent } from './blog/read/read.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UserRegistrationComponent } from './users/user-registration/user-registration.component';
import { UserLoginComponent } from './users/user-login/user-login.component';

// import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog', /*canActivateChild: [AuthGuard],*/ component: BlogComponent, children: [
        { path: ':id/read', component: ReadComponent }
    ] },
    { path: 'signup', component: UserRegistrationComponent },
    { path: 'login', component: UserLoginComponent },
    { path: 'user/:id', component: UserProfileComponent },
    { path: 'page-not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})

export class AppRoutingModule {

}

