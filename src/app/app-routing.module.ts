import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewUserComponent } from './modules/public/view-user/view-user.component'; 
import { UserRegistrationComponent } from './auth/user-registration/user-registration.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';


const appRoutes: Routes = [
    { path: '', loadChildren: () => import('./modules/public/home/home.module').then(m => m.HomeModule) },
    { path: 'home', loadChildren: () => import('./modules/public/home/home.module').then(m => m.HomeModule) },
    { path: 'view/:username', component: ViewUserComponent },
    { path: 'blog', loadChildren: () => import('./modules/public/blog/blog.module').then(m => m.BlogModule) },
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

