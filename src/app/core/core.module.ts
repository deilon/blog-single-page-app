import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'; 
import { SharedModule } from '../shared/shared.module';

import { UserRegistrationComponent } from './auth/user-registration/user-registration.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { BlogService } from 'src/app/data/service/blog.service';
import { UserService } from 'src/app/data/service/user.service';
import { AuthGuard } from './service/auth-guard.service';
import { LoggedInAuthGuard } from './service/loggedin-auth-guard.service';
import { AuthService } from './service/auth.service';
import { DialogService } from 'src/app/shared/dialog/dialog.service';

@NgModule({
    declarations: [
        UserRegistrationComponent,
        UserLoginComponent
    ],
    imports: [
        ReactiveFormsModule,
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule
    ],
    providers: [
        BlogService,
        AuthGuard,
        LoggedInAuthGuard,
        AuthService,
        UserService,
        DialogService
     ]
})
export class CoreModule { }