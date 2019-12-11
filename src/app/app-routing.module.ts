import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/public/home/home.component';
import { BlogComponent } from './modules/public/blog/blog.component';
import { ReadComponent } from './modules/public/blog/read/read.component';
import { ViewUserComponent } from './modules/public/view-user/view-user.component'; 

import { UserRegistrationComponent } from './auth/user-registration/user-registration.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';

import { NotFoundComponent } from './layout/not-found/not-found.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'view/:username', component: ViewUserComponent },
    { path: 'blog', component: BlogComponent, children: [
        { path: ':id/read', component: ReadComponent }
    ] },
    { path: 'profile', loadChildren: () => import('./modules/private/user/users.module').then(m => m.UsersModule) },
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

